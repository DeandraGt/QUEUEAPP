export default function QueueForm({
  onAmbil,
  sibuk = false,
  pesan = '',
}) {
  async function handleSubmit(event) {
    event.preventDefault();
    await onAmbil();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Tekan tombol di bawah untuk mendapatkan nomor antrean
        baru.
      </p>

      <button type="submit" disabled={sibuk}>
        {sibuk ? 'Memproses...' : 'Ambil Nomor Antrean'}
      </button>

      {pesan && (
        <p className="pesan-galat" role="alert">
          {pesan}
        </p>
      )}
    </form>
  );
}
