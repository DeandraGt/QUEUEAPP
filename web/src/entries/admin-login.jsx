import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AdminLoginPage from '../pages/AdminLoginPage.jsx';
import '../styles/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminLoginPage />
  </StrictMode>
);