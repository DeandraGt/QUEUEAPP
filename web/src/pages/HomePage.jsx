import Layout from '../components/Layout.jsx';
import DataState from '../components/DataState.jsx';
import QueueDisplay from '../components/QueueDisplay.jsx';
import StatusLegend from '../components/StatusLegend.jsx';
import { currentCalled, waitingQueues } from '../queue.js';

export default function HomePage({
  status,
  galat,
  antrean,
  nomorSaya,
  onMuatUlang,
}) {
  const dipanggil = currentCalled(antrean);
  const menunggu = waitingQueues(antrean);

  return (
    <Layout
      judul="Informasi Antrean"
      catatan="Pantau status antrean Anda melalui QueueApp."
    >
      <DataState
        status={status}
        galat={galat}
        onCobaLagi={onMuatUlang}
      >
        <p>
          Selamat datang di QueueApp. Periksa antrean yang sedang
          dipanggil dan antrean yang masih menunggu.
        </p>

        <QueueDisplay
          dipanggil={dipanggil}
          menunggu={menunggu}
        />

        {nomorSaya && (
          <section aria-labelledby="judul-antrean-saya">
            <h2 id="judul-antrean-saya">Nomor Antrean Saya</h2>
            <p>
              Nomor antrean Anda:{' '}
              <strong>{nomorSaya.queueNumber}</strong>
            </p>
            <p>
              Status: {labelStatus(nomorSaya.status)}
            </p>
          </section>
        )}

        <StatusLegend />
      </DataState>
    </Layout>
  );
}

function labelStatus(status) {
  const daftar = {
    WAITING: 'Menunggu',
    CALLED: 'Sedang Dipanggil',
    COMPLETED: 'Selesai',
  };

  return daftar[status] ?? status;
}