# Moca Landing Page

Landing page for **Auto Form by Moca** — WhatsApp promotion & digital products automation service.

## Stack

- React 18 + TypeScript
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion
- lucide-react
- class-variance-authority + clsx + tailwind-merge

## Sections

1. **Nav** — Sticky, blurred backdrop, logo + CTA
2. **Hero** — Outcome-first headline, dual CTAs, trust chips
3. **How It Works** — 5-step timeline with staggered animation
4. **Pricing** — Normal (Rp25k) / Special (Rp50k) / Custom
5. **Testimonials** — 5 customer cards with star ratings
6. **Webdev Upsell** — Website development service
7. **FAQ** — 6-item accordion
8. **Footer** — Brand, links, contact

## Design System

MD3-inspired "Commerce Motion" palette:
- Primary: `#22c55e` (green)
- Secondary: `#0ea5e9` (blue)
- Tertiary: `#f59e0b` (amber)
- Card radius: 20px
- Button radius: 12px
- Micro-interactions: Framer Motion fade-up + stagger

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview (via Cloudflare Tunnel)

`moca.devtestingkoneksi.online` → localhost:5173
