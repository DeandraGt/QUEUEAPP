import { currentCalled, waitingQueues } from '../queue.js';
import Layout from '../components/Layout.jsx';
import DataState from '../components/DataState.jsx';
import QueueDisplay from '../components/QueueDisplay.jsx';
import QueueForm from '../components/QueueForm.jsx';
import QueueStatus from '../components/QueueStatus.jsx';

export default function TakeQueuePage({
  status,
  galat,
  antrean,
  nomorSaya,
  pesan,
  sibuk,
  onAmbil,
  onMuatUlang,
}) {
  return (
    <Layout
      judul="Ambil Nomor Antrean"
      catatan="Minggu 07: pengambilan nomor menggunakan lapisan data berbasis Promise."
    >
      <DataState
        status={status}
        galat={galat}
        onCobaLagi={onMuatUlang}
      >
        <QueueDisplay
          dipanggil={currentCalled(antrean)}
          menunggu={waitingQueues(antrean)}
        />

        <section aria-labelledby="judul-ambil-antrean">
          <h2 id="judul-ambil-antrean">Ambil nomor antrean</h2>

          <QueueForm
            onAmbil={onAmbil}
            sibuk={sibuk}
            pesan={pesan}
          />
        </section>

        <QueueStatus antrean={nomorSaya} />
      </DataState>
    </Layout>
  );
}
