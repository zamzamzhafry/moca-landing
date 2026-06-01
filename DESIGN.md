# Moca Design Findings

Research and design direction for **Auto Form by Moca** landing page.

---

## 1. Brand Identity

- **Product:** Auto Form by Moca
- **Tagline:** "Promosi WA & Produk Digital, Order Otomatis 24 Jam"
- **Target:** Small business owners, digital product sellers, WhatsApp marketers
- **Value prop:** Automate WhatsApp promotions and digital product sales, 24/7

---

## 2. Design Direction: MD3 Commerce Motion

### 2.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#22c55e` | Primary actions, CTAs, success states |
| `--secondary` | `#0ea5e9` | Links, info, secondary actions |
| `--tertiary` | `#f59e0b` | Highlights, badges, attention |
| `--surface` | `#1a1a2e` | Card backgrounds |
| `--background` | `#0f0f23` | Page background |
| `--text` | `#ffffff` | Primary text |
| `--text-muted` | `#94a3b8` | Secondary text |
| `--outline` | `rgba(255,255,255,0.1)` | Card borders |

### 2.2 Typography

- **Display:** Inter, system-ui (headlines)
- **Body:** Inter, system-ui (paragraphs)
- **Mono:** JetBrains Mono (eyebrows, badges, technical labels)

### 2.3 Spacing & Radius

- Card radius: `20px` (1.25rem)
- Button radius: `12px` (0.75rem)
- Section padding: `6rem` vertical
- Container max-width: `1200px`

### 2.4 Motion

- Scroll reveal: fade-up + stagger (Framer Motion)
- Card hover: scale(1.02) + shadow lift
- Button active: scale(0.98)
- `prefers-reduced-motion` respected

---

## 3. Content Strategy

### 3.1 Hero Section

- **Eyebrow:** "Auto Form by Moca" (mono, green)
- **Headline:** Outcome-first — "Promosi WA & Produk Digital, Order Otomatis 24 Jam"
- **Subheadline:** Pain point → solution
- **CTAs:** "Mulai Sekarang" (primary) + "Lihat Harga" (secondary)
- **Trust chips:** 24/7, 500+ pengguna, respons cepat

### 3.2 How It Works

5-step timeline:
1. Pilih paket
2. Kirim materi promosi
3. Setup otomatis
4. Promosi jalan 24 jam
5. Order masuk otomatis

### 3.3 Pricing

| Plan | Price | Duration | Best For |
|---|---|---|---|
| Normal | Rp25.000 | 30 hari | Pengguna baru |
| Special | Rp50.000 | 30 hari | Bisnis aktif (highlighted) |
| Custom | Hubungi kami | Fleksibel | Kebutuhan khusus |

### 3.4 Testimonials

5 customer cards with:
- Star ratings (5/5)
- Customer name + business type
- Quote about results

### 3.5 FAQ

6 items covering:
- Cara kerja
- Harga dan pembayaran
- Keamanan data
- Support teknis
- Refund policy
- Integrasi

---

## 4. Component Patterns

### 4.1 Cards

```css
.card {
  background: var(--surface);
  border: 1px solid var(--outline);
  border-radius: 20px;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
```

### 4.2 Buttons

```css
.btn-primary {
  background: var(--primary);
  color: #000;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: transform 0.1s;
}

.btn-primary:active {
  transform: scale(0.98);
}
```

### 4.3 Badges

```css
.badge {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(34, 197, 94, 0.1);
  color: var(--primary);
}
```

---

## 5. Technical Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Utilities:** class-variance-authority, clsx, tailwind-merge

---

## 6. Deployment

- **Dev server:** `npm run dev` → localhost:5173
- **Tunnel:** `moca.devtestingkoneksi.online` via Cloudflare named tunnel
- **Production:** TBD (Vercel/Netlify recommended)

---

## 7. References

- [VoltAgent DESIGN.md](https://github.com/VoltAgent/voltagent) — MD3 reference implementation
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
