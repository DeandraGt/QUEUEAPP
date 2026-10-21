import { useState, useEffect, useCallback } from 'react';

import { myQueue } from './queue.js';

import {
  muatNomorSaya,
  simpanNomorSaya,
} from './storage.js';

import {
  ambilDaftarAntrean,
  buatAntrean,
  panggilAntreanBerikutnya,
  selesaikanAntrean,
} from './api/queueApi.js';

export function useQueue() {
  const [muatan, setMuatan] = useState({
    status: 'memuat',
    antrean: [],
    galat: null,
  });

  const [pesan, setPesan] = useState('');
  const [sibuk, setSibuk] = useState(false);
  const [idSaya, setIdSaya] = useState(muatNomorSaya);

  const muatUlang = useCallback(async () => {
    setMuatan((sebelum) => ({
      ...sebelum,
      status: 'memuat',
    }));

    try {
      const antrean = await ambilDaftarAntrean();

      setMuatan({
        status: 'siap',
        antrean,
        galat: null,
      });
    } catch (galat) {
      setMuatan({
        status: 'galat',
        antrean: [],
        galat,
      });
    }
  }, []);

  useEffect(() => {
    muatUlang();
  }, [muatUlang]);

  async function jalankan(aksi) {
    if (sibuk) return null;

    setSibuk(true);
    setPesan('');

    try {
      const hasil = await aksi();
      const antrean = await ambilDaftarAntrean();

      setMuatan({
        status: 'siap',
        antrean,
        galat: null,
      });

      return hasil;
    } catch (galat) {
      setPesan(galat.message);
      return null;
    } finally {
      setSibuk(false);
    }
  }

  async function ambilNomor() {
    const dibuat = await jalankan(() => buatAntrean());

    if (!dibuat) return;

    setIdSaya(dibuat.id);
    simpanNomorSaya(dibuat.id);
  }

  return {
    status: muatan.status,
    antrean: muatan.antrean,
    galat: muatan.galat,

    nomorSaya:
      idSaya === null
        ? null
        : myQueue({
            lastNumber: Math.max(
              0,
              ...muatan.antrean.map((item) => item.id),
            ),
            queues: muatan.antrean,
            myQueueId: idSaya,
          }),

    pesan,
    sibuk,

    muatUlang,
    ambilNomor,

    panggilBerikutnya: () =>
      jalankan(() => panggilAntreanBerikutnya()),

    selesaikan: (id) =>
      jalankan(() => selesaikanAntrean(id)),
  };
}