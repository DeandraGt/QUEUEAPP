
export const STATUS = Object.freeze({
  WAITING: 'WAITING',
  CALLED: 'CALLED',
  COMPLETED: 'COMPLETED',
});

/* Transisi yang diizinkan.
   WAITING → CALLED → COMPLETED

   COMPLETED tidak memiliki tujuan transisi karena antrean yang sudah
   selesai tidak dapat dikembalikan.
*/
const TRANSISI_SAH = Object.freeze({
  [STATUS.WAITING]: [STATUS.CALLED],
  [STATUS.CALLED]: [STATUS.COMPLETED],
  [STATUS.COMPLETED]: [],
});

const boleh = (dari, ke) => TRANSISI_SAH[dari].includes(ke);
const sekarang = () => new Date().toISOString();

/* ---- Nomor antrean ------------------------------------------------------
   PRD 29: berurutan, mudah dibaca, dan tidak bentrok pada kondisi normal.

   1    → A001
   42   → A042
   1234 → A1234

   Panjang digit tetap membuat nomor berbaris rapi di layar. Lewat 999,
   nomor menjadi lebih panjang tetapi tetap benar.
*/
const AWALAN = 'A';
const PANJANG_DIGIT = 3;

export function formatQueueNumber(angka) {
  return AWALAN + String(angka).padStart(PANJANG_DIGIT, '0');
}

/* ---- Bentuk state -------------------------------------------------------
   lastNumber disimpan terpisah dari daftar antrean supaya nomor tidak
   pernah digunakan ulang, bahkan jika antrean lama dihapus.
*/
export function emptyState() {
  return {
    lastNumber: 0,
    queues: [],
    myQueueId: null,
  };
}

/* ---- Membaca state ------------------------------------------------------
   Fungsi pembaca tidak mengubah state asli.
*/
export function currentCalled(state) {
  return (
    state.queues.find((queue) => queue.status === STATUS.CALLED) ?? null
  );
}

/* Mengambil antrean WAITING tertua yang akan dipanggil berikutnya (FR-06).
   Daftar tersusun berdasarkan waktu pembuatan.
*/
export function nextInLine(state) {
  return (
    state.queues.find((queue) => queue.status === STATUS.WAITING) ?? null
  );
}

export function waitingQueues(state) {
  return state.queues.filter((queue) => queue.status === STATUS.WAITING);
}

export function myQueue(state) {
  if (state.myQueueId === null) {
    return null;
  }

  return (
    state.queues.find((queue) => queue.id === state.myQueueId) ?? null
  );
}

export function summary(state) {
  const hitung = (status) =>
    state.queues.filter((queue) => queue.status === status).length;

  return {
    waiting: hitung(STATUS.WAITING),
    called: hitung(STATUS.CALLED),
    completed: hitung(STATUS.COMPLETED),
    total: state.queues.length,
  };
}

/* ---- Mengubah state -----------------------------------------------------
   Setiap fungsi menerima state dan mengembalikan salah satu dari dua bentuk:

   Berhasil:
   { ok: true, state: stateBaru, queue: {...} }

   Gagal:
   { ok: false, code: 'KODE', message: 'penjelasan' }

   Pada kondisi gagal, state tidak berubah.
*/

/* Membuat antrean baru. */
export function takeQueue(state) {
  const angka = state.lastNumber + 1;

  const queue = {
    id: angka,
    queueNumber: formatQueueNumber(angka),
    status: STATUS.WAITING,
    createdAt: sekarang(),
    calledAt: null,
    completedAt: null,
  };

  return {
    ok: true,
    queue,
    state: {
      lastNumber: angka,
      /* Antrean ditambahkan di akhir agar urutan waktu tetap terjaga. */
      queues: [...state.queues, queue],
      myQueueId: queue.id,
    },
  };
}

/* Memanggil antrean berikutnya. */
export function callNext(state) {
  const target = nextInLine(state);

  if (!target) {
    return {
      ok: false,
      code: 'NO_WAITING_QUEUE',
      message: 'Tidak ada antrean yang menunggu.',
    };
  }

  const waktu = sekarang();

  /* Antrean yang sedang dipanggil diselesaikan, sedangkan antrean
     tertua yang menunggu diubah menjadi CALLED.
  */
  const queues = state.queues.map((queue) => {
    if (queue.status === STATUS.CALLED) {
      return {
        ...queue,
        status: STATUS.COMPLETED,
        completedAt: waktu,
      };
    }

    if (queue.id === target.id) {
      return {
        ...queue,
        status: STATUS.CALLED,
        calledAt: waktu,
      };
    }

    return queue;
  });

  return {
    ok: true,
    state: {
      ...state,
      queues,
    },
    queue: queues.find((queue) => queue.id === target.id),
  };
}

/* Menyelesaikan antrean berdasarkan ID. */
export function completeQueue(state, id) {
  const target = state.queues.find((queue) => queue.id === id);

  if (!target) {
    return {
      ok: false,
      code: 'QUEUE_NOT_FOUND',
      message: 'Antrean tidak ditemukan.',
    };
  }

  if (!boleh(target.status, STATUS.COMPLETED)) {
    return {
      ok: false,
      code: 'INVALID_TRANSITION',
      message: `Antrean berstatus ${target.status} tidak dapat diselesaikan.`,
    };
  }

  const waktu = sekarang();

  const queues = state.queues.map((queue) =>
    queue.id === id
      ? {
          ...queue,
          status: STATUS.COMPLETED,
          completedAt: waktu,
        }
      : queue
  );

  return {
    ok: true,
    state: {
      ...state,
      queues,
    },
    queue: queues.find((queue) => queue.id === id),
  };
}
