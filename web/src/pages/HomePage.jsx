
export default function HomePage() {
    const { state } = useQueue();

    return (
        <Layout
            judul="Antrean Saat Ini"
            aktif="index.html"
            catatan="Minggu 06: React + Vite. Data antrean masih hidup di peramban ini — belum ada API maupun database."
        >
            <QueueDisplay
                dipanggil={currentCalled(state)}
                menunggu={waitingQueues(state)}
            />

            <QueueStatus
                antrean={myQueue(state)}
                tautanAmbil
            />

            <StatusLegend />
        </Layout>
    );
}
