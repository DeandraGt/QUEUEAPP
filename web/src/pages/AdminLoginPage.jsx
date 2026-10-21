import { useNavigate } from 'react-router-dom';

import Layout from '../components/Layout.jsx';
import AdminLogin from '../components/AdminLogin.jsx';

export default function AdminLoginPage() {
  const navigasi = useNavigate();

  function handleLogin() {
    navigasi('/admin/dashboard');
  }

  return (
    <Layout
      judul="Masuk sebagai Petugas"
      catatan="Minggu 07: perpindahan halaman menggunakan React Router tanpa memuat ulang dokumen."
    >
      <AdminLogin onLogin={handleLogin} />
    </Layout>
  );
}
