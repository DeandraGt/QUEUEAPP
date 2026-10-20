
/*
 * =============================================================================
 * AdminLoginPage — Masuk sebagai Petugas (admin-login.html)
 * =============================================================================
 *
 * Berhasil masuk berarti berpindah ke halaman dashboard, sama seperti
 * Minggu 05. Belum ada kredensial yang diperiksa; autentikasi sungguhan
 * adalah materi Minggu 13.
 * =============================================================================
 */

import Layout from '../components/Layout.jsx';
import AdminLogin from '../components/AdminLogin.jsx';

export default function AdminLoginPage() {
    return (
        <Layout
            judul="Masuk sebagai Petugas"
            aktif="admin-login.html"
        >
            <AdminLogin
                onMasuk={() => {
                    window.location.assign('admin-dashboard.html');
                }}
            />

            <section aria-labelledby="judul-pesan-kesalahan">
                <h2 id="judul-pesan-kesalahan">
                    Tentang Pesan Kesalahan
                </h2>

                <p>
                    Bila kredensial salah, sistem tidak memberi tahu
                    bagian mana yang keliru. Menyebutkan "email tidak
                    terdaftar" akan memberitahu penyerang bahwa email
                    lainnya terdaftar.
                </p>
            </section>
        </Layout>
    );
}
