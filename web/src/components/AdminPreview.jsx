export default function AdminPreview({
  ringkasan,
  dipanggil,
  berikutnya,
  pesan = '',
  sibuk = false,
  onPanggil,
}) {
  return (
    <section aria-labelledby="judul-ringkasan">
      <h2 id="judul-ringkasan">Ringkasan Antrean</h2>

      <ul>
        <li>Menunggu: {ringkasan.waiting}</li>
        <li>Sedang dipanggil: {ringkasan.called}</li>
        <li>Selesai: {ringkasan.completed}</li>
        <li>Total antrean: {ringkasan.total}</li>
      </ul>

      <p>
        Antrean yang sedang dipanggil:{' '}
        <strong>{dipanggil?.queueNumber ?? 'Belum ada'}</strong>
      </p>

      <p>
        Antrean berikutnya:{' '}
        <strong>{berikutnya?.queueNumber ?? 'Tidak ada'}</strong>
      </p>

      {pesan && (
        <p className="pesan-galat" role="alert">
          {pesan}
        </p>
      )}

      <button
        type="button"
        disabled={sibuk || !berikutnya}
        onClick={onPanggil}
      >
        {sibuk ? 'Memproses...' : 'Panggil Antrean Berikutnya'}
      </button>
    </section>
  );
}