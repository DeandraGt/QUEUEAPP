import { STATUS } from '../queue.js';

export default function QueueTable({
  antrean = [],
  sibuk = false,
  onSelesaikan,
}) {
  const daftarAktif = antrean.filter(
    (item) => item.status !== STATUS.COMPLETED
  );

  return (
    <section aria-labelledby="judul-daftar-antrean">
      <h2 id="judul-daftar-antrean">Daftar Antrean</h2>

      {daftarAktif.length === 0 ? (
        <p>Belum ada antrean aktif.</p>
      ) : (
        <div className="tabel-antrean">
          <table>
            <thead>
              <tr>
                <th scope="col">Nomor Antrean</th>
                <th scope="col">Status</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {daftarAktif.map((item) => (
                <tr key={item.id}>
                  <td>{item.queueNumber}</td>
                  <td>
                    {item.status === STATUS.WAITING && 'Menunggu'}
                    {item.status === STATUS.CALLED && 'Sedang Dipanggil'}
                  </td>
                  <td>
                    {item.status === STATUS.CALLED && (
                      <button
                        type="button"
                        disabled={sibuk}
                        onClick={() => onSelesaikan(item.id)}
                      >
                        Selesaikan
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
