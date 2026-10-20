export default function QueueStatus({ antrean, tautanAmbil = false }) {
  return (
    <section id="konfirmasi" aria-labelledby="judul-nomor-saya" aria-live="polite">
      <h2 id="judul-nomor-saya">Nomor Antrean Anda</h2>
      {antrean ? (
        <>
          <p className="nomor-antrean">{antrean.queueNumber}</p>
          <p>Status: {antrean.status}. Simpan nomor ini.</p>
        </>
      ) : (
        <>
          <p className="nomor-antrean nomor-antrean--kosong">
            Belum ada nomor yang diambil dari perangkat ini.
          </p>
          {tautanAmbil && (
            <p><a href="take-queue.html">Ambil nomor antrean</a></p>
          )}
        </>
      )}
    </section>
  );
}