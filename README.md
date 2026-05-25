# Sobers Website

Marketing site for [Sobers](https://sobers.app) — a mobile app connecting sponsors and sponsees in 12-step recovery programs. Built by [Volvox](https://volvox.dev).

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (motion/react)
- **Theme:** next-themes

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build (includes TypeScript check) |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── terms/page.tsx    # Terms of Service
│   ├── privacy/page.tsx  # Privacy Policy
│   └── support/page.tsx  # Support Center
└── components/
    ├── landing/          # Landing page components
    │   ├── navbar.tsx
    │   ├── hero.tsx
    │   ├── bento-features.tsx
    │   ├── usage-timeline.tsx
    │   ├── app-showcase.tsx
    │   ├── faq.tsx
    │   ├── footer.tsx
    │   └── smart-banner.tsx
    └── legal/            # Legal page layout
        └── legal-layout.tsx
```
