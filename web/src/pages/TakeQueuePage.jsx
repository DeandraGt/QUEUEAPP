
export default function TakeQueuePage() {
    const { state, ambilNomor } = useQueue();
    const dipanggil = currentCalled(state);

    return (
        <Layout
            judul="Ambil Nomor Antrean"
            aktif="take-queue.html"
            catatan="Minggu 06: React + Vite. Nomor dibuat di peramban ini dan belum dikirim ke mana pun."
        >
            <p>
                {dipanggil
                    ? `Antrean saat ini sudah sampai ${dipanggil.queueNumber}, dengan ${waitingQueues(state).length} antrean menunggu.`
                    : 'Belum ada antrean yang sedang dipanggil.'}
            </p>

            <QueueForm onAmbil={ambilNomor} />

            <QueueStatus antrean={myQueue(state)} />
        </Layout>
    );
}
