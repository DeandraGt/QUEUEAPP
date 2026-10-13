/* home.js — halaman Antrean Saat Ini (index.html). Hanya menampilkan. */
import { currentCalled, waitingQueues, myQueue } from './queue.js';
import { formatJam } from './format.js';

const el = (id) => document.getElementById(id);

function tampilkanDipanggil() {
  const dipanggil = currentCalled();
  if (!dipanggil) {
    el('nomor-dipanggil').textContent = '—';
    el('keterangan-dipanggil').textContent = 'Belum ada antrean yang dipanggil.';
    return;
  }
  el('nomor-dipanggil').textContent = dipanggil.queueNumber;
  el('keterangan-dipanggil').textContent =
    `Dipanggil pada pukul ${formatJam(dipanggil.calledAt)}.`;
}

function tampilkanYangMenunggu() {
  const daftar = waitingQueues();
  const wadah = el('daftar-menunggu');

  /* Dikosongkan dulu, lalu diisi ulang. Untuk daftar sependek ini itu cara
     paling sederhana dan paling mudah dibaca. */
  wadah.replaceChildren();

  if (daftar.length === 0) {
    el('jumlah-menunggu').textContent = 'Belum ada antrean yang menunggu.';
    return;
  }

  el('jumlah-menunggu').textContent =
    `${daftar.length} antrean masih menunggu.`;

  for (const antrean of daftar) {
    const item = document.createElement('li');
    /* textContent, bukan innerHTML. Isi apa pun diperlakukan sebagai teks,
       tidak pernah sebagai HTML — kebiasaan yang mencegah XSS begitu data
       datang dari luar pada Minggu 11. */
    item.textContent = antrean.queueNumber;
    wadah.append(item);
  }
}

function tampilkanNomorSaya() {
  const antrean = myQueue();
  el('nomor-saya').textContent = antrean
    ? `Nomor Anda ${antrean.queueNumber}, berstatus ${antrean.status}.`
    : 'Anda belum mengambil nomor antrean.';
}

tampilkanDipanggil();
tampilkanYangMenunggu();
tampilkanNomorSaya();