import { STATUS, emptyState } from './queue.js';

export const KUNCI_ANTREAN = 'queueapp.antrean.v2';
export const KUNCI_NOMOR_SAYA = 'queueapp.nomor-saya.v2';

function bentuknyaBenar(data) {
  return (
    data !== null &&
    typeof data === 'object' &&
    Number.isInteger(data.lastNumber) &&
    Array.isArray(data.queues) &&
    data.queues.every(
      (queue) =>
        Number.isInteger(queue.id) &&
        typeof queue.queueNumber === 'string' &&
        Object.hasOwn(STATUS, queue.status),
    )
  );
}

export function muatAntrean() {
  try {
    const teks = localStorage.getItem(KUNCI_ANTREAN);

    if (!teks) return emptyState();

    const data = JSON.parse(teks);

    if (!bentuknyaBenar(data)) return emptyState();

    return data;
  } catch {
    return emptyState();
  }
}

export function simpanAntrean(data) {
  try {
    localStorage.setItem(KUNCI_ANTREAN, JSON.stringify(data));
  } catch {
    // Penyimpanan mungkin tidak tersedia di peramban.
  }
}

export function muatNomorSaya() {
  try {
    const teks = localStorage.getItem(KUNCI_NOMOR_SAYA);

    if (!teks) return null;

    const id = JSON.parse(teks);

    return Number.isInteger(id) ? id : null;
  } catch {
    return null;
  }
}

export function simpanNomorSaya(id) {
  try {
    localStorage.setItem(KUNCI_NOMOR_SAYA, JSON.stringify(id));
  } catch {
    // Nomor tetap tersedia selama state React masih aktif.
  }
}
