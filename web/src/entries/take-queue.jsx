import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TakeQueuePage from '../pages/TakeQueuePage.jsx';
import { useQueue } from '../useQueue.js';
import '../styles/style.css';

function TakeQueueEntry() {
  const {
    state,
    pesan,
    ambilNomor,
  } = useQueue();

  return (
    <TakeQueuePage
      state={state}
      ambilNomor={ambilNomor}
      pesan={pesan}
    />
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TakeQueueEntry />
  </StrictMode>
);
