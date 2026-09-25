import { useState } from 'react'
import logoBimba from './imports/logo_bimba.png'
import heroImg from './imports/IMG_20260107_094928.jpg'
import programImg from './imports/IMG_20250818_122551.jpg'

// Nomor WhatsApp tujuan (ganti dengan nomor Anda, format tanpa tanda +, contoh: 6281234567890)
const NOMOR_WHATSAPP = "62895393869874"

const NAV_LINKS = ['Program', 'Keunggulan', 'Testimoni', 'Daftar']

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Metode Proven',
    desc: 'Metode Belajar BiMBA Ibu Sari telah teruji selama lebih dari 10 tahun membantu anak-anak belajar membaca dengan cepat dan menyenangkan.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: 'Membaca itu Mudah & Menyenangkan',
    desc: 'Suasana belajar yang menyenangkan membuat anak-anak antusias datang ke kelas setiap hari tanpa merasa terbebani.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Pengajar Berpengalaman',
    desc: 'Ibu Sari dan tim berpengalaman mendampingi setiap anak secara personal, memastikan tidak ada yang tertinggal.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Ibu Lulu',
    child: 'Ibu dari Zaid, 5 tahun',
    text: 'Zaid yang tadinya belum mengenal huruf sama sekali, dalam 3 bulan sudah bisa membaca kalimat pendek. Luar biasa!',
    avatar: 'L',
  },
  {
    name: 'Ibu Susi',
    child: 'Ibu dari Fathar, 4 tahun',
    text: 'Metode bermain sambil belajarnya sangat efektif. Fathar selalu semangat setiap mau berangkat ke BiMBA.',
    avatar: 'S',
  },
  {
    name: 'Ibu Dewi',
    child: 'Ibu dari Nayla, 5 tahun',
    text: 'Ibu Sari sangat sabar dan perhatian. Nayla jadi lebih percaya diri dan gemar membaca buku cerita.',
    avatar: 'D',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ nama: '', telepon: '', usia: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const pesan = `Halo Ibu Sari, saya ingin mendaftarkan anak saya di BiMBA Ibu Sari.\n\n` +
                  `*Nama Anak:* ${formData.nama}\n` +
                  `*No. WhatsApp:* ${formData.telepon}\n` +
                  `*Usia Anak:* ${formData.usia}\n\n` +
                  `Mohon informasinya lebih lanjut ya, terima kasih!`
    const urlWhatsApp = `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURIComponent(pesan)}`
    window.open(urlWhatsApp, '_blank')
  }

  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4DE1E5] shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoBimba} alt="BiMBA Ibu Sari" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-[#0C3D40] hover:text-[#FF6B35] transition-colors text-sm font-semibold">
                {l}
              </a>
            ))}
            <a href="#daftar"
              className="bg-[#FF6B35] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#e85d2a] transition-colors shadow-sm">
              Daftar Sekarang
            </a>
          </div>

          <button className="md:hidden text-[#0C3D40] p-1" onClick={() => setMenuOpen(v => !v)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#4DE1E5] border-t border-[#0C3D40]/10 px-6 pb-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="text-[#0C3D40] hover:text-[#FF6B35] text-sm font-semibold py-1">
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section id="program" className="pt-24 min-h-screen bg-[#4DE1E5] relative overflow-hidden flex items-center">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#38c9cd]/40 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/40 border border-white/60 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
              <span className="text-[#0C3D40] text-xs font-bold tracking-wide uppercase">Bimbingan Membaca Terbaik</span>
            </div>

            <div className="text-[#0C3D40]/60 italic text-lg mb-2 font-semibold">« Man Jadda Wa Jada »</div>
            <h1 className="text-[#0C3D40] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Anak Pintar<br />
              <span className="text-[#FF6B35]">Membaca Lancar</span><br />
              <span className="text-[#0C3D40]/70 text-3xl md:text-4xl font-bold">Dimulai di Sini</span>
            </h1>

            <p className="text-[#0C3D40]/75 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              BiMBA Ibu Sari hadir dengan metode teruji yang membuat anak usia dini belajar membaca dengan cepat, menyenangkan, dan penuh percaya diri.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#daftar"
                className="bg-[#FF6B35] text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#e85d2a] transition-all hover:shadow-lg hover:shadow-orange-300/40 hover:-translate-y-0.5 active:translate-y-0">
                Daftar Gratis Sekarang
              </a>
              <a href="#keunggulan"
                className="border-2 border-[#0C3D40]/40 text-[#0C3D40] px-8 py-3.5 rounded-full font-semibold text-base hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors">
                Lihat Program
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="text-center">
                <div className="text-[#FF6B35] font-extrabold text-2xl">500+</div>
                <div className="text-[#0C3D40]/60 text-xs font-medium">Murid Lulus</div>
              </div>
              <div className="w-px h-10 bg-[#0C3D40]/20" />
              <div className="text-center">
                <div className="text-[#FF6B35] font-extrabold text-2xl">10+</div>
                <div className="text-[#0C3D40]/60 text-xs font-medium">Tahun Pengalaman</div>
              </div>
              <div className="w-px h-10 bg-[#0C3D40]/20" />
              <div className="text-center">
                <div className="text-[#FF6B35] font-extrabold text-2xl">98%</div>
                <div className="text-[#0C3D40]/60 text-xs font-medium">Orang Tua Puas</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-[#38c9cd]">
              <img src={heroImg} alt="Murid-murid BiMBA Ibu Sari di kelas" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C3D40]/30 via-transparent to-transparent rounded-3xl" />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-3 shadow-xl border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-[#0C3D40] font-semibold text-sm">Kelas Tersedia</span>
              </div>
              <div className="text-gray-500 text-xs mt-0.5">Mulai Senin–Ahad</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Keunggulan ── */}
      <section id="keunggulan" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#4DE1E5] font-bold text-sm uppercase tracking-widest">Kenapa Memilih Kami</span>
            <h2 className="text-[#0C3D40] font-extrabold text-3xl md:text-4xl mt-2">
              Keunggulan <span className="text-[#FF6B35]">BiMBA Ibu Sari</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              Kami percaya setiap anak memiliki potensi besar. Tugas kami adalah membuka pintu itu dengan cara yang tepat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#4DE1E5] hover:shadow-xl hover:shadow-cyan-100 transition-all group cursor-default">
                <div className="w-14 h-14 rounded-xl bg-[#4DE1E5]/15 group-hover:bg-[#4DE1E5]/25 flex items-center justify-center text-[#0C3D40] transition-colors mb-5">
                  {icon}
                </div>
                <h3 className="text-[#0C3D40] font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Details ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gray-100 aspect-square">
              <img src={programImg} alt="Murid BiMBA lulus jilid 1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-6 -right-6 bg-[#4DE1E5] rounded-2xl p-4 shadow-xl">
              <div className="text-[#FF6B35] font-extrabold text-3xl">3–6</div>
              <div className="text-[#0C3D40] text-xs font-semibold">Tahun Usia Ideal</div>
            </div>
          </div>

          <div>
            <span className="text-[#4DE1E5] font-bold text-sm uppercase tracking-widest">Program Kami</span>
            <h2 className="text-[#0C3D40] font-extrabold text-3xl md:text-4xl mt-2 mb-6 leading-tight">
              Kurikulum Terstruktur<br />
              <span className="text-[#FF6B35]">Hasil Nyata</span>
            </h2>

            <div className="space-y-5">
              {[
                { step: '01', title: 'Pengenalan Huruf & Bunyi', desc: 'Anak belajar mengenal 26 huruf alfabet melalui lagu, gambar, dan permainan sensorik.' },
                { step: '02', title: 'Suku Kata & Kata Dasar', desc: 'Merangkai huruf menjadi suku kata tanpa dieja dengan metode quantum learning.' },
                { step: '03', title: 'Membaca Kalimat & Faham Literasi', desc: 'Anak membaca paragraf dan memahami isi cerita yang terkandung dalam paragraf tersebut.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold text-sm">
                    {step}
                  </div>
                  <div>
                    <div className="text-[#0C3D40] font-semibold text-base">{title}</div>
                    <div className="text-gray-500 text-sm mt-0.5 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimoni ── */}
      <section id="testimoni" className="py-24 bg-[#4DE1E5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest">Testimoni</span>
            <h2 className="text-[#0C3D40] font-extrabold text-3xl md:text-4xl mt-2">
              Kata Orang Tua <span className="text-[#FF6B35]">Murid Kami</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, child, text, avatar }) => (
              <div key={name} className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-6 hover:bg-white transition-colors shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#0C3D40]/80 text-sm leading-relaxed mb-5 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center text-white font-bold">
                    {avatar}
                  </div>
                  <div>
                    <div className="text-[#0C3D40] font-semibold text-sm">{name}</div>
                    <div className="text-[#0C3D40]/50 text-xs">{child}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Daftar / CTA Form ── */}
      <section id="daftar" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#4DE1E5] font-bold text-sm uppercase tracking-widest">Pendaftaran</span>
            <h2 className="text-[#0C3D40] font-extrabold text-3xl md:text-4xl mt-2 mb-4 leading-tight">
              Siap Wujudkan<br />
              <span className="text-[#FF6B35]">Impian Anak Anda?</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Ikuti langkah pertama menuju masa depan cerah. Daftarkan anak Anda sekarang dan dapatkan{' '}
              <strong className="text-[#0C3D40]">sesi trial gratis</strong> bersama Ibu Sari.
            </p>
            <div className="bg-[#4DE1E5]/10 rounded-2xl p-6 border border-[#4DE1E5]/30">
              <div className="text-[#FF6B35] italic font-bold text-lg mb-1">« Man Jadda Wa Jada »</div>
              <div className="text-[#0C3D40]/60 text-sm">Barangsiapa bersungguh-sungguh, pasti akan berhasil.</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#0C3D40] font-semibold text-sm mb-1.5">Nama Anak</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={e => setFormData(v => ({ ...v, nama: e.target.value }))}
                  placeholder="Masukkan nama anak"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4DE1E5] focus:ring-2 focus:ring-[#4DE1E5]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-[#0C3D40] font-semibold text-sm mb-1.5">No. WhatsApp Orang Tua</label>
                <input
                  type="tel"
                  required
                  value={formData.telepon}
                  onChange={e => setFormData(v => ({ ...v, telepon: e.target.value }))}
                  placeholder="08xx-xxxx-xxxx"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4DE1E5] focus:ring-2 focus:ring-[#4DE1E5]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-[#0C3D40] font-semibold text-sm mb-1.5">Usia Anak</label>
                <select
                  required
                  value={formData.usia}
                  onChange={e => setFormData(v => ({ ...v, usia: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4DE1E5] focus:ring-2 focus:ring-[#4DE1E5]/20 transition-all bg-white"
                >
                  <option value="">Pilih usia</option>
                  <option>3 tahun</option>
                  <option>4 tahun</option>
                  <option>5 tahun</option>
                  <option>6 tahun</option>
                </select>
              </div>
              <button type="submit"
                className="w-full bg-[#FF6B35] text-white font-bold py-3.5 rounded-xl hover:bg-[#e85d2a] transition-colors text-sm mt-2 shadow-sm">
                Kirim Pendaftaran ke WhatsApp
              </button>
              <p className="text-gray-400 text-xs text-center">Akan langsung membuka chat WhatsApp dengan Ibu Sari.</p>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoBimba} alt="BiMBA Ibu Sari" className="h-14 w-auto" />
          <div className="text-gray-400 text-sm text-center">
            © 2026 BiMBA Ibu Sari. Hak cipta dilindungi.
          </div>
          <div className="text-[#FF6B35] italic text-sm font-semibold">« Man Jadda Wa Jada »</div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${NOMOR_WHATSAPP}?text=Halo%20Ibu%20Sari,%20saya%20ingin%20bertanya%20tentang%20pendaftaran%20BiMBA.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-110 flex items-center justify-center"
        title="Chat WhatsApp dengan Ibu Sari"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  )
}