# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # Start development server (http://localhost:4321)
pnpm build         # Build for production (outputs to dist/)
pnpm preview       # Preview production build locally
pnpm format        # Format all files with Prettier
pnpm format:check  # Check formatting without writing
pnpm typecheck     # Run TypeScript/Astro type checking
```

## Architecture

This is an Astro v5 static site with Tailwind CSS v4, deployed to Vercel.

### Key Configuration

- **Path alias**: `@/*` maps to `src/*` (configured in tsconfig.json)
- **Site URL**: https://sobers.app (set in astro.config.mjs)
- **Integrations**: `@astrojs/sitemap` for auto-generated sitemap

### Project Structure

```
src/
├── layouts/Layout.astro    # Base HTML template with SEO meta tags, theme handling
├── pages/                  # File-based routing (index, privacy, terms, support)
├── components/             # Section components (Hero, Features, FAQ, etc.)
└── styles/global.css       # Tailwind v4 @theme config, custom utilities, component styles
```

### Styling System

Uses Tailwind CSS v4 with custom theme variables in `global.css`:

- **Theme tokens**: `--color-primary`, `--color-dark-bg`, etc.
- **Custom utilities**: `bg-theme`, `text-primary-theme`, `border-theme`, `bg-surface`
- **Component classes**: `.card`, `.btn`, `.btn-primary`, `.btn-secondary`
- **Dark mode**: Toggle via `.dark` class on `<html>`, with localStorage persistence

### SEO Pattern

Layout.astro accepts props for SEO customization:

```typescript
interface Props {
  title: string;
  description?: string;
  ogImage?: string;
  canonicalUrl?: string;
}
```

Pages include JSON-LD structured data for rich search results.
