/* admin-login.js — validasi kelengkapan dan bentuk isian masuk.
   Kredensial BELUM diverifikasi (autentikasi sungguhan: Minggu 13).
   Validasi di halaman membantu, tidak mengamankan; FR-08 mensyaratkan
   pemeriksaan yang sama di server pada Minggu 11. */

const form = document.getElementById('form-masuk');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pesan = form.querySelector('.pesan-galat');

/* Aturan ditulis sebagai daftar, bukan sebagai rangkaian if bersarang.
   Menambah aturan baru berarti menambah satu entri. */
const ATURAN = [
  {
    kolom: () => email,
    salah: (nilai) => nilai.trim() === '',
    pesan: 'Email wajib diisi.',
  },
  {
    kolom: () => email,
    /* Bentuk email tidak diperiksa dengan pola buatan sendiri.
       Peramban sudah memeriksanya lewat type="email", dan hasilnya dibaca
       dari validity.typeMismatch — satu sumber kebenaran, bukan dua. */
    salah: (nilai, kolom) => nilai.trim() !== '' && kolom.validity.typeMismatch,
    pesan: 'Format email tidak valid. Contoh: petugas@queueapp.test',
  },
  {
    kolom: () => password,
    salah: (nilai) => nilai === '',
    pesan: 'Password wajib diisi.',
  },
];

function bersihkanTanda() {
  email.removeAttribute('aria-invalid');
  password.removeAttribute('aria-invalid');
  pesan.textContent = '';
}

/* Mengembalikan galat pertama { kolom, pesan }, atau null bila semua lolos. */
function periksa() {
  for (const aturan of ATURAN) {
    const kolom = aturan.kolom();
    if (aturan.salah(kolom.value, kolom)) {
      return { kolom, pesan: aturan.pesan };
    }
  }
  return null;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  bersihkanTanda();

  const galat = periksa();
  if (galat) {
    /* aria-invalid memberi tahu pembaca layar bahwa kolom ini bermasalah,
       dan menyalakan gaya galat dari Minggu 04. */
    galat.kolom.setAttribute('aria-invalid', 'true');
    pesan.textContent = galat.pesan;
    /* Fokus dipindahkan ke kolom pertama yang bermasalah, supaya pengguna
       keyboard tidak perlu mencarinya sendiri. */
    galat.kolom.focus();
    return;
  }

  /* Belum ada kredensial yang diperiksa. Lihat catatan di atas. */
  window.location.assign(form.getAttribute('action'));
});