/* =============================================================================
   DataState — memuat, gagal, atau siap
   =============================================================================
   Komponen ini menyamakan tampilan keadaan data antrean pada setiap halaman.
   Keadaan kosong tetap ditangani oleh komponen isi halaman.
   ============================================================================= */

export default function DataState({ status, galat, onCobaLagi, children }) {
  if (status === 'memuat') {
    return (
      <p className="memuat" role="status">
        Memuat data antrean…
      </p>
    );
  }

  if (status === 'galat') {
    return (
      <section aria-labelledby="judul-galat-muat">
        <h2 id="judul-galat-muat">Data antrean tidak dapat dimuat</h2>

        <p className="pesan-galat" role="alert">
          {galat.message}
        </p>

        <p>
          <button type="button" onClick={onCobaLagi}>
            Coba lagi
          </button>
        </p>
      </section>
    );
  }

  return children;
}
