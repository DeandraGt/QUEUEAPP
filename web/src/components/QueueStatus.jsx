import { STATUS } from '../queue.js';

export default function QueueStatus({ antrean }) {
  if (!antrean) {
    return (
      <section aria-labelledby="judul-status-antrean">
        <h2 id="judul-status-antrean">Status Antrean Saya</h2>
        <p>Anda belum mengambil nomor antrean.</p>
      </section>
    );
  }

  let keterangan = 'Menunggu giliran';

  if (antrean.status === STATUS.CALLED) {
    keterangan = 'Nomor Anda sedang dipanggil';
  } else if (antrean.status === STATUS.COMPLETED) {
    keterangan = 'Antrean Anda telah selesai';
  }

  return (
    <section aria-labelledby="judul-status-antrean">
      <h2 id="judul-status-antrean">Status Antrean Saya</h2>

      <p>
        Nomor antrean: <strong>{antrean.queueNumber}</strong>
      </p>

      <p>
        Status: <strong>{keterangan}</strong>
      </p>
    </section>
  );
}
