const DAFTAR_STATUS = [
  {
    kode: 'WAITING',
    label: 'Menunggu',
    keterangan: 'Antrean belum dipanggil.',
  },
  {
    kode: 'CALLED',
    label: 'Sedang Dipanggil',
    keterangan: 'Antrean sedang dilayani.',
  },
  {
    kode: 'COMPLETED',
    label: 'Selesai',
    keterangan: 'Pelayanan antrean sudah selesai.',
  },
];

export default function StatusLegend() {
  return (
    <section aria-labelledby="judul-keterangan-status">
      <h2 id="judul-keterangan-status">Keterangan Status Antrean</h2>

      <ul className="status-legend">
        {DAFTAR_STATUS.map((status) => (
          <li key={status.kode}>
            <strong>{status.label}</strong>
            <p>{status.keterangan}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
