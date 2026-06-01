import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  ListChecks,
  FileText,
  QrCode,
  RefreshCw,
  Megaphone,
  ChevronDown,
  Star,
  MessageCircle,
  Send,
  Shield,
  Clock,
  Zap,
  Check,
  Globe,
  Code2,
} from 'lucide-react'

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function SectionReveal({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, inView } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function FadeUp({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--color-outline)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '1.25rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span className="text-title-md" style={{ color: 'var(--color-on-surface)' }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, color: 'var(--color-on-surface-variant)' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="text-body-md"
              style={{ color: 'var(--color-on-surface-variant)', paddingBottom: '1.25rem' }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  const steps = [
    { icon: ListChecks, label: 'Pilih Paket', desc: 'Pilih layanan promosi yang sesuai kebutuhanmu' },
    { icon: FileText, label: 'Isi Form', desc: 'Isi data produk & link yang ingin dipromosikan' },
    { icon: QrCode, label: 'Bayar QRIS', desc: 'Bayar dengan mudah via QRIS, transfer, atau e-wallet' },
    { icon: RefreshCw, label: 'Bot Update Status', desc: 'Bot otomatis mengupdate status pesananmu' },
    { icon: Megaphone, label: 'Promote Tayang', desc: 'Promosimu tayang di grup & channel aktif' },
  ]

  const pricing = [
    {
      name: 'Normal',
      price: 'Rp 25.000',
      duration: '7 Hari',
      bestFor: 'Buat test market / budget hemat',
      badge: 'Terjangkau',
      badgeVariant: 'badge-secondary',
      features: ['Tayang di grup aktif', 'Laporan status via bot', 'Support via Telegram'],
      featured: false,
    },
    {
      name: 'Special',
      price: 'Rp 50.000',
      duration: '14 Hari',
      bestFor: 'Buat launch cepat / butuh prioritas',
      badge: 'Recommended',
      badgeVariant: 'badge-primary',
      features: ['Tayang di grup & channel prioritas', 'Laporan detail via bot', 'Revisi konten 1x', 'Fast track admin'],
      featured: true,
    },
    {
      name: 'Custom',
      price: 'Rp ???',
      duration: 'Custom',
      bestFor: 'Buat campaign khusus / jadwal fleksibel',
      badge: 'Best',
      badgeVariant: 'badge-tertiary',
      features: ['Jadwal fleksibel', 'Multi-platform support', 'Konsultasi strategi', 'Laporan lengkap'],
      featured: false,
    },
  ]

  const testimonials = [
    { name: 'abanghermus', text: 'madep lah persibb', date: '25 Mei 2026' },
    { name: 'bams', text: 'joss sekali, langsung satset untuk verif GPT', date: '25 Mei 2026' },
    { name: 'Reyy', text: 'Mntp', date: '24 Mei 2026' },
    { name: '@Sevine99', text: 'Layanan sangat baik ⭐⭐⭐⭐⭐', date: '19 Mei 2026' },
    { name: 'Fauzan', text: 'Layanan sangat baik ⭐⭐⭐⭐⭐', date: '18 Mei 2026' },
  ]

  const faqs = [
    { q: 'Bagaimana cara order?', a: 'Pilih paket yang kamu inginkan, isi form pemesanan, lalu bayar via QRIS. Bot akan otomatis mengupdate status pesananmu di Telegram.' },
    { q: 'Metode pembayaran apa saja yang tersedia?', a: 'Kami menerima pembayaran via QRIS, transfer bank (BCA, BRI, Mandiri, BNI), dan e-wallet (GoPay, OVO, Dana, ShopeePay).' },
    { q: 'Berapa lama promosi akan tayang?', a: 'Tergantung paket yang dipilih: paket Normal tayang 7 hari, paket Special tayang 14 hari, dan paket Custom sesuai kesepakatan.' },
    { q: 'Apakah bisa request jadwal tayang?', a: 'Bisa! Untuk paket Custom, kamu bisa request jadwal tayang sesuai kebutuhan. Silakan hubungi admin @rubuskap untuk koordinasi.' },
    { q: 'Bagaimana cara tracking status pesanan?', a: 'Status pesananmu akan diupdate otomatis oleh bot @rubuskapbot di Telegram. Kamu juga bisa cek langsung ke admin.' },
    { q: 'Apakah ada garansi?', a: 'Ya, jika promosi tidak tayang sesuai paket yang dipilih, kami berikan garansi perpanjangan atau refund.' },
  ]

  return (
    <div style={{ background: 'var(--color-surface)', minHeight: '100vh' }}>

      {/* ─── NAV BAR ─── */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-outline)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.875rem 1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 800,
                fontSize: '0.875rem',
              }}
            >
              M
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--color-on-surface)' }}>
              Moca
            </span>
          </div>
          <a
            href="#pricing"
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}
          >
            Mulai Order
          </a>
        </div>
      </nav>


      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 720 }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <FadeUp>
              <span className="badge badge-primary" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
                Auto Form by Moca &bull; 2024
              </span>
            </FadeUp>

            <FadeUp delay={0.05}>
              <p
                className="text-mono-eyebrow"
                style={{ color: 'var(--color-primary-dark)', marginBottom: '0.75rem' }}
              >
                24 Jam Online Service
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1
                className="text-display-xl"
                style={{ color: 'var(--color-on-surface)', marginBottom: '1rem' }}
              >
                Promosi WA & Produk Digital, Order Otomatis 24 Jam
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p
                className="text-title-md"
                style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}
              >
                Jasa Paid Promote Terpercaya ✨
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                className="text-body-md"
                style={{ color: 'var(--color-on-surface-variant)', marginBottom: '2rem', maxWidth: 520, marginInline: 'auto' }}
              >
                Promosikan produkmu ke ratusan member aktif dengan harga mulai <strong style={{ color: 'var(--color-on-surface)' }}>Rp 14.726</strong> saja!
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <a href="#pricing" className="btn btn-primary" style={{ gap: '0.5rem' }}>
                  <Zap size={16} />
                  Mulai Order
                </a>
                <a href="#pricing" className="btn btn-secondary">
                  Lihat Paket
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.375rem 0.75rem',
                    borderRadius: 100,
                    background: 'var(--color-surface-container)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-on-surface-variant)',
                  }}
                >
                  <Shield size={14} />
                  Admin @rubuskap
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.375rem 0.75rem',
                    borderRadius: 100,
                    background: 'var(--color-surface-container)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-on-surface-variant)',
                  }}
                >
                  <Send size={14} />
                  Auto Bot @rubuskapbot
                </div>
              </div>
            </FadeUp>
          </motion.div>
        </div>
      </section>


      <section
        className="section"
        style={{ background: 'var(--color-surface-container)' }}
      >
        <div className="container">
          <SectionReveal>
            <FadeUp>
              <p className="text-mono-eyebrow" style={{ color: 'var(--color-primary)', textAlign: 'center', marginBottom: '0.5rem' }}>
                Cara Kerja
              </p>
            </FadeUp>
            <FadeUp>
              <h2 className="text-display-lg" style={{ textAlign: 'center', color: 'var(--color-on-surface)', marginBottom: '3rem' }}>
                Order Mudah dalam 5 Langkah
              </h2>
            </FadeUp>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                maxWidth: 900,
                margin: '0 auto',
              }}
            >
              {steps.map((step, i) => (
                <FadeUp key={step.label} delay={i * 0.08}>
                  <div
                    className="card"
                    style={{
                      padding: '1.5rem 1rem',
                      textAlign: 'center',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: 'var(--color-primary-container)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem',
                        color: 'var(--color-primary-dark)',
                      }}
                    >
                      <step.icon size={22} />
                    </div>
                    <div
                      className="text-mono-eyebrow"
                      style={{
                        color: 'var(--color-primary)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Langkah {i + 1}
                    </div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: 'var(--color-on-surface)',
                        marginBottom: '0.375rem',
                      }}
                    >
                      {step.label}
                    </p>
                    <p className="text-caption" style={{ fontSize: '0.8125rem' }}>{step.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>


      <section id="pricing" className="section">
        <div className="container">
          <SectionReveal>
            <FadeUp>
              <p className="text-mono-eyebrow" style={{ color: 'var(--color-primary)', textAlign: 'center', marginBottom: '0.5rem' }}>
                Harga
              </p>
            </FadeUp>
            <FadeUp>
              <h2 className="text-display-lg" style={{ textAlign: 'center', color: 'var(--color-on-surface)', marginBottom: '3rem' }}>
                Pilih Layanan Promosimu
              </h2>
            </FadeUp>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
                maxWidth: 960,
                margin: '0 auto',
              }}
            >
              {pricing.map((plan, i) => (
                <FadeUp key={plan.name} delay={i * 0.1}>
                  <div
                    className="card"
                    style={{
                      padding: '2rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      ...(plan.featured
                        ? {
                            background: 'var(--color-primary-container)',
                            borderColor: 'var(--color-primary)',
                            borderWidth: 2,
                          }
                        : {}),
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-on-surface)' }}>
                        {plan.name}
                      </span>
                      <span className={`badge ${plan.badgeVariant}`}>{plan.badge}</span>
                    </div>

                    <p className="text-caption" style={{ marginBottom: '1.25rem' }}>{plan.bestFor}</p>

                    <div style={{ marginBottom: '0.375rem' }}>
                      <span style={{ fontWeight: 800, fontSize: '2rem', letterSpacing: '-0.02em', color: 'var(--color-on-surface)' }}>
                        {plan.price}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '1.5rem', color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>
                      <Clock size={14} />
                      {plan.duration}
                    </div>

                    <div style={{ flex: 1, marginBottom: '1.5rem' }}>
                      {plan.features.map((f) => (
                        <div
                          key={f}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                            fontSize: '0.875rem',
                            color: 'var(--color-on-surface-variant)',
                          }}
                        >
                          <Check size={16} style={{ flexShrink: 0, color: 'var(--color-primary)', marginTop: 2 }} />
                          {f}
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://t.me/rubuskap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={plan.featured ? 'btn btn-primary' : 'btn btn-secondary'}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {plan.name === 'Custom' ? 'Hubungi Admin' : 'Order Sekarang'}
                    </a>
                  </div>
                </FadeUp>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>


      <section
        className="section"
        style={{ background: 'var(--color-surface-container)' }}
      >
        <div className="container">
          <SectionReveal>
            <FadeUp>
              <p className="text-mono-eyebrow" style={{ color: 'var(--color-primary)', textAlign: 'center', marginBottom: '0.5rem' }}>
                Testimoni
              </p>
            </FadeUp>
            <FadeUp>
              <h2 className="text-display-lg" style={{ textAlign: 'center', color: 'var(--color-on-surface)', marginBottom: '3rem' }}>
                Kata Mereka
              </h2>
            </FadeUp>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                maxWidth: 960,
                margin: '0 auto',
              }}
            >
              {testimonials.map((t, i) => (
                <FadeUp key={t.name} delay={i * 0.06}>
                  <div className="card" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.125rem', marginBottom: '0.75rem' }}>
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} size={14} fill="var(--color-tertiary)" color="var(--color-tertiary)" />
                      ))}
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-on-surface)', marginBottom: '1rem', lineHeight: 1.6 }}>
                      "{t.text}"
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            background: 'var(--color-primary-container)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            color: 'var(--color-primary-dark)',
                          }}
                        >
                          {t.name.charAt(0).toUpperCase()}
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--color-on-surface)' }}>
                          {t.name}
                        </span>
                      </div>
                      <span className="text-caption" style={{ fontSize: '0.75rem' }}>{t.date}</span>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>


      <section className="section">
        <div className="container" style={{ maxWidth: 600 }}>
          <SectionReveal>
            <FadeUp>
              <div
                className="card"
                style={{
                  padding: '2rem 1.5rem',
                  background: 'var(--color-secondary-container)',
                  borderColor: 'var(--color-secondary)',
                  textAlign: 'center',
                }}
              >
                <span className="badge badge-secondary" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                  Baru
                </span>

                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: 'rgba(14,165,233,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'var(--color-secondary)',
                  }}
                >
                  <Code2 size={26} />
                </div>

                <h3 className="text-title-md" style={{ color: 'var(--color-on-surface)', marginBottom: '0.5rem' }}>
                  Jasa Pembuatan Website
                </h3>

                <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: '0.375rem' }}>
                  Landing page, toko online, portfolio — semua bisa kami buatkan!
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {['Landing Page', 'Toko Online', 'Portfolio'].map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: '0.25rem 0.625rem',
                        borderRadius: 8,
                        background: 'rgba(14,165,233,0.1)',
                        fontSize: '0.8125rem',
                        color: 'var(--color-secondary)',
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-on-surface)', marginBottom: '1.25rem' }}>
                  Mulai Rp 15.000-an
                </p>

                <a
                  href="https://t.me/rubuskap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <Globe size={16} />
                  Order Sekarang
                </a>
              </div>
            </FadeUp>
          </SectionReveal>
        </div>
      </section>


      <section
        className="section"
        style={{ background: 'var(--color-surface-container)' }}
      >
        <div className="container" style={{ maxWidth: 680 }}>
          <SectionReveal>
            <FadeUp>
              <p className="text-mono-eyebrow" style={{ color: 'var(--color-primary)', textAlign: 'center', marginBottom: '0.5rem' }}>
                FAQ
              </p>
            </FadeUp>
            <FadeUp>
              <h2 className="text-display-lg" style={{ textAlign: 'center', color: 'var(--color-on-surface)', marginBottom: '2.5rem' }}>
                Pertanyaan Umum
              </h2>
            </FadeUp>

            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.05}>
                <FAQItem question={faq.q} answer={faq.a} />
              </FadeUp>
            ))}
          </SectionReveal>
        </div>
      </section>


      <footer
        style={{
          background: 'var(--color-on-surface)',
          color: 'var(--color-surface)',
          padding: '3rem 1rem 2rem',
        }}
      >
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                }}
              >
                M
              </div>
              <span style={{ fontWeight: 700, fontSize: '1rem' }}>Moca</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-outline)', lineHeight: 1.6 }}>
              Jasa paid promote & produk digital terpercaya. Order otomatis 24 jam via bot Telegram.
            </p>
          </div>

          <div>
            <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.75rem' }}>Quick Links</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Paket Harga', href: '#pricing' },
                { label: 'Cara Kerja', href: '#' },
                { label: 'Testimoni', href: '#' },
                { label: 'FAQ', href: '#' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'var(--color-outline)',
                    textDecoration: 'none',
                    fontSize: '0.8125rem',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-outline)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.75rem' }}>Kontak</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href="https://t.me/rubuskap"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  color: 'var(--color-outline)',
                  textDecoration: 'none',
                  fontSize: '0.8125rem',
                }}
              >
                <MessageCircle size={14} />
                Telegram @rubuskap
              </a>
              <a
                href="https://t.me/rubuskapbot"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  color: 'var(--color-outline)',
                  textDecoration: 'none',
                  fontSize: '0.8125rem',
                }}
              >
                <Send size={14} />
                Bot @rubuskapbot
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.25rem',
            textAlign: 'center',
            fontSize: '0.75rem',
            color: 'var(--color-outline)',
          }}
        >
          &copy; 2026 Auto Form by Moca. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
