export function useQueue() {
  /* Data antrean dan pesan galat disimpan sebagai satu state karena
     keduanya selalu berubah bersamaan. Muat dioper sebagai fungsi
     supaya localStorage hanya dibaca sekali.
  */
  const [app, setApp] = useState(() => ({
    data: muat(),
    pesan: '',
  }));

  useEffect(() => {
    simpan(app.data);
  }, [app.data]);

  /* setApp menerima fungsi yang menggunakan state sebelumnya.
     Ini mencegah dua aksi beruntun menghitung dari state lama yang sama.
  */
  function jalankan(aksi) {
    setApp((sebelum) => {
      const hasil = aksi(sebelum.data);

      if (!hasil.ok) {
        return {
          data: sebelum.data,
          pesan: hasil.message,
        };
      }

      return {
        data: hasil.state,
        pesan: '',
      };
    });
  }

  return {
    state: app.data,
    pesan: app.pesan,
    ambilNomor: () => jalankan((data) => takeQueue(data)),
    panggilBerikutnya: () => jalankan((data) => callNext(data)),
    selesaikan: (id) => jalankan((data) => completeQueue(data, id)),
  };
}
