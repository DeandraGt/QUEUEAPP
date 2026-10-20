export const KUNCI = 'queueapp.prototype.v1';
/* Data yang dimuat kembali TIDAK dipercaya begitu saja. Isinya dapat
   tertinggal dari versi lama, rusak separuh, atau diubah siapa pun lewat
   peralatan pengembang. Kebiasaan yang sama berlaku nanti untuk data yang
   datang dari API pada Minggu 11. */
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
        Object.hasOwn(STATUS, queue.status)
    )
  );
}
export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI);
    if (!teks) return emptyState();
    const data = JSON.parse(teks);
    if (!bentuknyaBenar(data)) return emptyState();
    return {
      lastNumber: data.lastNumber,
      queues: data.queues,
      myQueueId: Number.isInteger(data.myQueueId) ? data.myQueueId : null,
    };
  } catch {
    /* JSON rusak atau penyimpanan tidak dapat dibaca. */
    return emptyState();
  }
}
export function simpan(state) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(state));
  } catch {
    /* Dapat gagal pada mode penyamaran atau ketika penyimpanan penuh.
       Aplikasi tetap berjalan, hanya tidak bertahan setelah dimuat ulang. */
  }
}
