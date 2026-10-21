
# QueueApp

QueueApp adalah aplikasi antrean sederhana yang dikembangkan secara bertahap dalam praktikum Web and Mobile Technology. Aplikasi ini membantu pengunjung mengambil dan memantau nomor antrean serta membantu petugas mengelola antrean.

## Tujuan Proyek

Proyek ini dikembangkan untuk menerapkan proses pengembangan aplikasi secara bertahap, mulai dari identifikasi kebutuhan, perancangan antarmuka, pembuatan fitur, hingga migrasi frontend menggunakan React dan Vite.

## Fitur Utama

- Menampilkan nomor antrean dan status antrean.
- Mengambil nomor antrean baru.
- Melihat posisi dan daftar antrean.
- Memanggil serta menyelesaikan antrean melalui halaman petugas.
- Menyimpan data antrean pada browser menggunakan LocalStorage.
- Menyediakan halaman pelanggan dan halaman petugas.

Catatan: aplikasi pada tahap ini masih berupa prototipe frontend. Data antrean belum terhubung dengan API dan database aplikasi.

## Teknologi yang Digunakan

- HTML untuk struktur halaman.
- CSS untuk tampilan dan desain responsif.
- JavaScript untuk interaksi dan logika antrean.
- React untuk membangun antarmuka berbasis komponen.
- Vite sebagai development server dan alat build frontend.
- LocalStorage untuk penyimpanan data antrean pada browser.
- Docker Compose untuk menjalankan lingkungan pengembangan.
- MySQL sebagai layanan database dalam lingkungan proyek.
- Git dan GitHub untuk pengelolaan versi dan kolaborasi.

## Perjalanan Pengembangan

### Week 01 — Discovery & Environment

Menyiapkan repository, kebutuhan awal proyek, konfigurasi environment, dan layanan Docker Compose. Pada tahap ini, layanan MySQL, server placeholder, dan web placeholder dijalankan untuk memastikan lingkungan pengembangan berfungsi.

Checkpoint: `week-01`

### Week 02 — Requirements & Perancangan

Memperjelas kebutuhan aplikasi, pengguna, ruang lingkup, dan rancangan sistem sebagai dasar pengembangan fitur pada minggu berikutnya. Rincian akhir mengikuti modul praktikum Minggu 02.

Checkpoint: `week-02`

### Week 03 — UI/UX + HTML

Membuat struktur dasar empat halaman aplikasi, yaitu halaman antrean, pengambilan nomor, login petugas, dan dashboard petugas. Tahap ini berfokus pada struktur halaman dan alur penggunaan.

Checkpoint: `week-03`

### Week 04 — CSS & Responsive Design

Menambahkan stylesheet untuk memperbaiki tampilan, formulir, tabel antrean, serta responsivitas halaman pada berbagai ukuran layar. Pendekatan yang digunakan adalah mobile-first dengan CSS biasa.

Checkpoint: `week-04`

### Week 05 — JavaScript Foundation

Menambahkan interaksi pada aplikasi, termasuk pengambilan nomor, pemanggilan antrean, penyelesaian antrean, dan penyimpanan data menggunakan LocalStorage.

Checkpoint: `week-05`

### Week 06 — React + Vite

Memigrasikan frontend dari JavaScript biasa ke React menggunakan Vite. Logika antrean, penyimpanan, komponen, halaman, dan entry point ditata ke dalam folder `src`. Empat halaman HTML tetap digunakan dan alur antrean dasar dipertahankan.

Checkpoint: `week-06`

## Menjalankan Proyek

### Prasyarat

Pastikan Git, Docker Desktop, dan Docker Compose telah terpasang.

### Langkah Menjalankan

1. Clone repository.
2. Masuk ke direktori proyek.
3. Salin `.env.example` menjadi `.env`.
4. Periksa konfigurasi environment.
5. Jalankan layanan menggunakan Docker Compose.

```bash
git clone https://github.com/ckevinland-beep/Aplikasi-Antrian.git
cd Aplikasi-Antrian
```

Buat file `.env` dari contoh konfigurasi:

```bash
cp .env.example .env
```

Pada Windows, file tersebut juga dapat disalin melalui File Explorer.

Jalankan aplikasi:

```bash
docker compose up -d
docker compose ps
```

Untuk melihat log layanan:

```bash
docker compose logs -f
```

Untuk menghentikan layanan:

```bash
docker compose down
```

Jangan memasukkan file `.env` ke repository karena berisi konfigurasi lokal dan dapat berisi informasi sensitif.

## Alamat Demo

Setelah layanan web berjalan, buka halaman berikut:

- Halaman antrean: http://localhost:5173/index.html
- Ambil nomor antrean: http://localhost:5173/take-queue.html
- Login petugas: http://localhost:5173/admin-login.html
- Dashboard petugas: http://localhost:5173/admin-dashboard.html

Endpoint server placeholder tersedia di http://localhost:3001.

## Struktur Repository

```text
Aplikasi-Antrian/
├── docs/
│   ├── requirements.md
│   └── ui-flow.md
├── server/
│   └── placeholder.js
├── web/
│   ├── index.html
│   ├── take-queue.html
│   ├── admin-login.html
│   ├── admin-dashboard.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── src/
│       ├── components/
│       ├── entries/
│       ├── pages/
│       ├── styles/
│       ├── format.js
│       ├── queue.js
│       ├── storage.js
│       └── useQueue.js
├── .env.example
├── .gitignore
├── docker-compose.yml
├── MILESTONE.md
├── PRD.md
└── README.md
```

Struktur di atas menggambarkan susunan proyek setelah migrasi Week 06. Isi folder dapat bertambah sesuai perkembangan modul berikutnya.

## Pengelolaan Versi

Pengembangan dilakukan menggunakan Git dengan cabang kerja mingguan, pesan commit yang menjelaskan perubahan, dan Pull Request untuk menggabungkan pekerjaan ke `main`.

Checkpoint yang digunakan:

- `week-01`
- `week-03`
- `week-04`
- `week-05`
- `week-06`

Checkpoint `week-02` dicantumkan sesuai rencana modul dan perlu dipastikan sudah tersedia sebelum dianggap selesai.

## Status Pengembangan

Sampai Week 06, QueueApp telah memiliki empat halaman frontend dan alur antrean dasar yang diuji melalui browser. Pengembangan berikutnya mengikuti modul praktikum, dengan tetap menjaga agar perubahan setiap minggu dapat ditelusuri melalui Git.

### Week 07 — React Integration & Routing

Mengintegrasikan React Router agar pengguna dapat berpindah halaman tanpa memuat ulang seluruh dokumen HTML. Aplikasi menggunakan satu `index.html` dengan empat path utama, yaitu `/`, `/queue`, `/admin/login`, dan `/admin/dashboard`.

Pengelolaan state antrean dipusatkan melalui `App.jsx` dan `useQueue.js`. Lapisan `queueApi.js` menyediakan operasi data berbasis Promise, sedangkan komponen `DataState.jsx` menangani keadaan memuat dan galat.

Pada tahap ini, data antrean masih dikelola secara lokal dan belum terhubung dengan API server sungguhan maupun database terpusat.

Checkpoint: `week-07` — setelah perubahan selesai di-merge dan tag benar-benar dibuat.