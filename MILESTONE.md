# QueueApp Milestone Tracker

Dokumen ini mencatat perkembangan QueueApp berdasarkan modul praktikum Minggu 01 sampai Minggu 07.

## Week 01 — Discovery & Environment

### Status

- [x] Repository Git disiapkan.
- [x] File `.gitignore` dibuat.
- [x] File `.env.example` dibuat.
- [x] File `docker-compose.yml` dibuat.
- [x] Layanan MySQL dikonfigurasi.
- [x] Server placeholder disiapkan.
- [x] Web placeholder disiapkan.
- [x] `docs/requirements.md` dibuat.
- [x] `PRD.md` dibuat.
- [x] `MILESTONE.md` dibuat.
- [x] Lingkungan Docker Compose diuji.

### Verifikasi

- Web: http://localhost:5173/
- Server: http://localhost:3001/
- MySQL: port host 3307

### Hasil

Lingkungan pengembangan awal berhasil dijalankan menggunakan Docker Compose.

## Week 02 — Requirements & Perancangan

### Status

- [ ] Kebutuhan aplikasi diperinci sesuai modul Minggu 02.
- [ ] User story dan kebutuhan fungsional diperiksa.
- [ ] Arsitektur sistem diperinci.
- [ ] Hasil pekerjaan dibandingkan dengan checkpoint modul.
- [ ] Tag `week-02` diverifikasi.

### Verifikasi

Periksa `docs/requirements.md`, `PRD.md`, dan berkas perancangan yang diwajibkan modul Minggu 02.

### Hasil

Bagian ini perlu diperbarui berdasarkan berkas dan checkpoint Week 02 yang benar-benar tersedia di repository.

## Week 03 — UI/UX + HTML

### Status

- [x] Struktur halaman antrean dibuat.
- [x] Halaman pengambilan nomor dibuat.
- [x] Halaman login petugas dibuat.
- [x] Dashboard petugas dibuat.
- [x] Alur pengguna pelanggan dan petugas dirancang.
- [x] Struktur HTML dasar disiapkan.
- [x] Hasil pekerjaan disimpan dalam Git.

### Berkas Utama

- `web/index.html`
- `web/take-queue.html`
- `web/admin-login.html`
- `web/admin-dashboard.html`
- `docs/ui-flow.md`

### Hasil

Empat halaman dasar aplikasi tersedia untuk dilanjutkan ke tahap styling.

## Week 04 — CSS & Responsive Design

### Status

- [x] Stylesheet utama dibuat.
- [x] Tampilan halaman pelanggan diperbaiki.
- [x] Tampilan formulir login diperbaiki.
- [x] Tampilan dashboard petugas diperbaiki.
- [x] Layout responsif diterapkan.
- [x] Tampilan diuji pada ukuran layar yang berbeda.
- [x] Perubahan disimpan dan digabungkan melalui Pull Request.

### Berkas Utama

- `web/css/style.css`
- Empat halaman HTML di dalam folder `web/`
- `docs/ui-flow.md`

### Hasil

Halaman aplikasi memiliki styling dan layout responsif sebagai dasar penambahan interaksi.

## Week 05 — JavaScript Foundation

### Status

- [x] Logika antrean dibuat.
- [x] Pengambilan nomor antrean diterapkan.
- [x] Pemanggilan antrean diterapkan.
- [x] Penyelesaian antrean diterapkan.
- [x] Data antrean disimpan di LocalStorage.
- [x] Halaman pelanggan dan petugas dihubungkan dengan logika JavaScript.
- [x] Alur antrean dasar diuji.
- [x] Perubahan disimpan melalui Git dan Pull Request.

### Berkas Utama

- `web/js/queue.js`
- `web/js/format.js`
- `web/js/home.js`
- `web/js/take-queue.js`
- `web/js/admin-login.js`
- `web/js/admin-dashboard.js`

### Hasil

Prototipe antrean interaktif dapat digunakan dan data antrean dapat bertahan setelah halaman dimuat ulang melalui LocalStorage.

## Week 06 — React + Vite

### Status

- [x] React dan Vite dikonfigurasi.
- [x] Dependency dan `package-lock.json` dibuat.
- [x] Logika antrean dipisahkan ke `src/queue.js`.
- [x] Penyimpanan data dipisahkan ke `src/storage.js`.
- [x] Hook antrean disiapkan di `src/useQueue.js`.
- [x] Komponen dan halaman React dibuat.
- [x] Stylesheet dipindahkan ke `src/styles/style.css`.
- [x] Entry point React disiapkan untuk halaman aplikasi.
- [x] Konfigurasi Docker Compose diperbarui untuk Vite.
- [x] Build produksi berhasil pada tahap Week 06.
- [x] Halaman dan alur antrean dasar diuji melalui Docker.
- [ ] Dokumentasi Week 06 diselaraskan dengan perubahan routing pada Week 07.

### Berkas Utama

- `web/package.json`
- `web/package-lock.json`
- `web/vite.config.js`
- `web/src/`
- `web/index.html`
- `web/take-queue.html`
- `web/admin-login.html`
- `web/admin-dashboard.html`
- `docker-compose.yml`

### Verifikasi

- [x] `npm.cmd run build` berhasil pada tahap Week 06.
- [x] Halaman antrean dapat dibuka pada tahap Week 06.
- [x] Halaman pengambilan nomor dapat dibuka pada tahap Week 06.
- [x] Halaman login petugas dapat dibuka pada tahap Week 06.
- [x] Dashboard petugas dapat dibuka pada tahap Week 06.
- [x] Alur antrean dasar diuji melalui Docker.

### Hasil

Frontend QueueApp telah dimigrasikan ke React dan Vite. Pada tahap Week 06, aplikasi menggunakan beberapa entry HTML. Struktur tersebut kemudian disederhanakan pada Week 07 menjadi satu `index.html` dengan React Router.

## Week 07 — React Integration & Routing

### Status

- [x] React Router ditambahkan sebagai dependency.
- [x] Aplikasi menggunakan satu dokumen HTML sebagai entry point.
- [x] Routing sisi klien disiapkan untuk halaman utama.
- [x] Routing halaman pengambilan nomor antrean disiapkan.
- [x] Routing halaman login petugas disiapkan.
- [x] Routing dashboard petugas disiapkan.
- [x] Halaman Not Found disiapkan untuk alamat yang tidak terdaftar.
- [x] Pengelolaan state antrean dipusatkan melalui `App.jsx` dan `useQueue.js`.
- [x] Lapisan data berbasis Promise disiapkan melalui `queueApi.js`.
- [x] Komponen loading dan error disiapkan melalui `DataState.jsx`.
- [ ] Seluruh routing dan alur antrean diuji kembali melalui browser.
- [ ] Build produksi diperiksa kembali setelah integrasi routing.
- [ ] Dokumentasi arsitektur dan alur pengguna diperbarui sesuai implementasi akhir.

### Berkas Utama

- `web/index.html`
- `web/vite.config.js`
- `web/src/main.jsx`
- `web/src/App.jsx`
- `web/src/useQueue.js`
- `web/src/api/queueApi.js`
- `web/src/components/Layout.jsx`
- `web/src/components/DataState.jsx`
- `web/src/pages/NotFoundPage.jsx`
- `web/src/styles/style.css`
- `docker-compose.yml`

### Verifikasi

- [ ] Halaman utama dapat dibuka melalui `/`.
- [ ] Halaman pengambilan nomor dapat dibuka melalui `/queue`.
- [ ] Halaman login petugas dapat dibuka melalui `/admin/login`.
- [ ] Dashboard petugas dapat dibuka melalui `/admin/dashboard`.
- [ ] Alamat yang tidak terdaftar menampilkan halaman Not Found.
- [ ] Navigasi ant halaman berjalan tanpa memuat ulang seluruh dokumen.
- [ ] Loading dan error ditampilkan sesuai kondisi.
- [ ] Pengambilan, pemanggilan, dan penyelesaian antrean diuji kembali.
- [ ] `npm.cmd run build` berhasil setelah integrasi routing.

### Hasil

QueueApp mulai menggunakan React Router untuk mengelola perpindahan halaman melalui satu dokumen HTML. Pengelolaan state antrean dipusatkan di React, sedangkan lapisan data menggunakan Promise untuk menyimulasikan proses permintaan data. Pada tahap ini, data masih dikelola secara lokal dan belum menggunakan API server sungguhan maupun database terpusat.

## Ringkasan Week 01–07

| Minggu | Materi | Status |
|---|---|---|
| Week 01 | Discovery & Environment | Selesai |
| Week 02 | Requirements & Perancangan | Perlu verifikasi |
| Week 03 | UI/UX + HTML | Selesai |
| Week 04 | CSS & Responsive Design | Selesai |
| Week 05 | JavaScript Foundation | Selesai |
| Week 06 | React + Vite | Perlu penyesuaian dokumentasi |
| Week 07 | React Integration & Routing | Dalam proses verifikasi |

## Catatan

Status milestone mencerminkan pekerjaan yang telah dilakukan berdasarkan perkembangan proyek. Checklist yang belum diverifikasi perlu diperiksa kembali melalui kode, browser, Docker, dan repository.

Bagian Week 02 dan keberadaan tag `week-02` masih perlu diverifikasi. Dokumentasi Week 06 juga perlu diselaraskan dengan perubahan routing pada Week 07, terutama terkait penggunaan satu `index.html` dan pengelolaan halaman melalui React Router.

Checkpoint Git, hasil build, dan pengujian hanya boleh dinyatakan selesai setelah benar-benar diverifikasi. Pada Week 07, data antrean masih dikelola secara lokal dan belum terhubung dengan API server sungguhan maupun database terpusat.