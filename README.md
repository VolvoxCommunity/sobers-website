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

| Command             | Description                                       |
| ------------------- | ------------------------------------------------- |
| `pnpm dev`          | Start the development server                      |
| `pnpm build`        | Create the production build                       |
| `pnpm start`        | Start the production server                       |
| `pnpm format`       | Format supported files with Prettier              |
| `pnpm format:check` | Check formatting without changing files           |
| `pnpm lint`         | Run ESLint                                        |
| `pnpm typecheck`    | Run TypeScript checks without emitting files      |
| `pnpm validate`     | Run formatting, lint, typecheck, and build checks |

## Engineering

See [ENGINEERING.md](./ENGINEERING.md) for Volvox repository conventions, the validation chain, review expectations, and the definition of done.

## Deployment

Pull requests receive Vercel preview deployments. Merging to `main` deploys the production site; production merges require CEO sign-off under the Volvox engineering standards.

## Structure

```text
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
