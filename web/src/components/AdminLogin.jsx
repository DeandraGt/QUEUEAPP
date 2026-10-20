
import { useRef, useState } from 'react';

export default function AdminLogin({ onMasuk }) {
    /*
     * Input terkendali: nilainya disimpan di state React,
     * bukan hanya di dalam DOM.
     */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [galat, setGalat] = useState(null);

    /*
     * Ref digunakan untuk memindahkan fokus dan membaca
     * hasil validasi bawaan peramban.
     */
    const refEmail = useRef(null);
    const refPassword = useRef(null);

    function tanganiSubmit(event) {
        event.preventDefault();

        /*
         * Aturan validasi ditulis sebagai daftar agar
         * mudah ditambah atau diubah.
         */
        const aturan = [
            {
                ref: refEmail,
                salah: () => email.trim() === '',
                pesan: 'Email wajib diisi.',
            },
            {
                ref: refEmail,
                salah: () =>
                    refEmail.current.validity.typeMismatch,
                pesan:
                    'Format email tidak valid. Contoh: petugas@queueapp.test',
            },
            {
                ref: refPassword,
                salah: () => password === '',
                pesan: 'Password wajib diisi.',
            },
        ];

        const ditemukan = aturan.find((a) => a.salah());

        if (ditemukan) {
            setGalat({
                pesan: ditemukan.pesan,
                ref: ditemukan.ref,
            });

            ditemukan.ref.current.focus();
            return;
        }

        setGalat(null);
        onMasuk();
    }

    /*
     * Pesan galat dihapus ketika pengguna mulai memperbaiki
     * isi input agar pesan lama tidak membingungkan.
     */
    const bersihkan = () => setGalat(null);

    const ditandai = (ref) =>
        galat?.ref === ref ? 'true' : undefined;

    return (
        <>
            <p>
                Halaman ini hanya untuk petugas. Pengunjung tidak
                perlu masuk.
            </p>

            <form onSubmit={tanganiSubmit} noValidate>
                <h2>Kredensial Petugas</h2>

                <div
                    className="pesan-galat"
                    role="alert"
                    aria-live="polite"
                >
                    {galat?.pesan ?? ''}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                        ref={refEmail}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="username"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                            bersihkan();
                        }}
                        aria-invalid={ditandai(refEmail)}
                        aria-describedby="bantuan-email"
                    />

                    <small id="bantuan-email">
                        Contoh: petugas@queueapp.test
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>

                    <input
                        ref={refPassword}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                            bersihkan();
                        }}
                        aria-invalid={ditandai(refPassword)}
                    />
                </div>

                <button type="submit">
                    Masuk
                </button>
            </form>
        </>
    );
}
