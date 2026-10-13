/* take-queue.js — halaman Ambil Nomor (take-queue.html). */
import { takeQueue, myQueue, currentCalled, waitingQueues } from './queue.js';

const el = (id) => document.getElementById(id);

function tampilkanRingkasan() {
  const dipanggil = currentCalled();
  const menunggu = waitingQueues().length;
  el('ringkas-antrean').textContent = dipanggil
    ? `Antrean saat ini sudah sampai ${dipanggil.queueNumber}, dengan ${menunggu} antrean menunggu.`
    : 'Belum ada antrean yang sedang dipanggil.';
}

function tampilkanNomorSaya() {
  const antrean = myQueue();
  const nomor = el('nomor-saya');
  const status = el('status-saya');

  if (!antrean) {
    nomor.textContent = 'Belum ada nomor yang diambil dari perangkat ini.';
    nomor.classList.add('nomor-antrean--kosong');
    status.textContent = '';
    return;
  }

  nomor.textContent = antrean.queueNumber;
  nomor.classList.remove('nomor-antrean--kosong');
  status.textContent = `Status: ${antrean.status}. Simpan nomor ini.`;
}

el('form-ambil').addEventListener('submit', (event) => {
  /* Tanpa ini, peramban mengirim form dan memuat ulang halaman — seluruh
     hasil kerja JavaScript hilang sebelum sempat terlihat. */
  event.preventDefault();

  const hasil = takeQueue();
  if (!hasil.ok) return;

  tampilkanNomorSaya();
  tampilkanRingkasan();
});

tampilkanRingkasan();
tampilkanNomorSaya();