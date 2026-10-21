/* =============================================================================
   queueApi.js — satu-satunya pintu ke data antrean

   Mulai Minggu 07, komponen tidak mengubah data antrean sendiri.
   Semua operasi melewati berkas ini dan mengembalikan Promise.

   Saat ini data masih disimpan di localStorage melalui storage.js.
   Belum ada API server sungguhan. Pada minggu berikutnya, lapisan ini
   dapat diganti dengan fetch() tanpa mengubah seluruh komponen React.
   ============================================================================= */

import {
  takeQueue,
  callNext,
  completeQueue,
} from '../queue.js';

import {
  muatAntrean,
  simpanAntrean,
} from '../storage.js';

/* Jeda buatan agar keadaan memuat bisa diuji. */
const JEDA_MS = 250;

/* Ubah menjadi true sementara untuk menguji tampilan galat.
   Kembalikan ke false setelah pengujian selesai. */
const SIMULASI_GAGAL = false;

/* Bentuk galat yang konsisten dengan respons API nantinya. */
export class GalatApi extends Error {
  constructor(code, message) {
    super(message);
    this.name = 'GalatApi';
    this.code = code;
  }
}

/* Memberi jeda seperti permintaan ke server. */
function tunggu() {
  return new Promise((selesai) => {
    setTimeout(selesai, JEDA_MS);
  });
}

/* Kerangka bersama untuk semua operasi data. */
async function permintaan(kerjakan) {
  await tunggu();

  if (SIMULASI_GAGAL) {
    throw new GalatApi(
      'NETWORK_ERROR',
      'Tidak dapat menghubungi server antrean.',
    );
  }

  return kerjakan();
}

/* Menerapkan aturan antrean, memeriksa galat, lalu menyimpan hasilnya. */
function terapkan(aksi) {
  const hasil = aksi(muatAntrean());

  if (!hasil.ok) {
    throw new GalatApi(hasil.code, hasil.message);
  }

  simpanAntrean(hasil.state);

  return hasil.queue;
}

/* GET /api/queues
   Mengambil seluruh daftar antrean. */
export function ambilDaftarAntrean() {
  return permintaan(() => muatAntrean().queues);
}

/* POST /api/queues
   Membuat nomor antrean baru. */
export function buatAntrean() {
  return permintaan(() =>
    terapkan((data) => takeQueue(data)),
  );
}

/* POST /api/queues/next
   Memanggil antrean menunggu berikutnya. */
export function panggilAntreanBerikutnya() {
  return permintaan(() =>
    terapkan((data) => callNext(data)),
  );
}

/* POST /api/queues/:id/complete
   Menandai antrean tertentu sebagai selesai. */
export function selesaikanAntrean(id) {
  return permintaan(() =>
    terapkan((data) => completeQueue(data, id)),
  );
}
