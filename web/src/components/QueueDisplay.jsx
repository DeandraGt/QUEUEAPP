export default function QueueDisplay({ dipanggil, menunggu }) {
  return (
    <>
      <section
        id="antrean-saat-ini"
        aria-labelledby="judul-dipanggil"
      >
        <h2 id="judul-dipanggil">Sedang Dipanggil</h2>

        {dipanggil ? (
          <p className="nomor-antrean">
            {dipanggil.queueNumber}
          </p>
        ) : (
          <p>Belum ada antrean yang dipanggil.</p>
        )}
      </section>

      <section
        id="antrean-menunggu"
        aria-labelledby="judul-menunggu"
      >
        <h2 id="judul-menunggu">Antrean Menunggu</h2>

        <p>
          Jumlah antrean yang menunggu:{' '}
          <strong>{menunggu.length}</strong>
        </p>

        {menunggu.length > 0 ? (
          <ul>
            {menunggu.map((antrean) => (
              <li key={antrean.id}>
                {antrean.queueNumber}
              </li>
            ))}
          </ul>
        ) : (
          <p>Tidak ada antrean yang menunggu.</p>
        )}
      </section>
    </>
  );
}