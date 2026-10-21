import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AdminDashboardPage from '../pages/AdminDashboardPage.jsx';
import { useQueue } from '../useQueue.js';
import '../styles/style.css';

function AdminDashboardEntry() {
  const {
    state,
    pesan,
    panggilBerikutnya,
    selesaikan,
  } = useQueue();

  return (
    <AdminDashboardPage
      state={state}
      pesan={pesan}
      panggilBerikutnya={panggilBerikutnya}
      selesaikan={selesaikan}
    />
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminDashboardEntry />
  </StrictMode>
);
