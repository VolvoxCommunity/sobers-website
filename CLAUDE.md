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

## Workflow Requirements

**IMPORTANT: These requirements are MANDATORY and MUST be followed every single time without exception.**

### Validation on Changes

After making ANY code changes, you MUST run validation before committing:

```bash
pnpm format && pnpm typecheck && pnpm build
```

All three MUST pass before proceeding. Fix any errors before committing. Never skip this step.

### Git Commit Strategy

These rules are NON-NEGOTIABLE:

- **Commit after each task**: You MUST create a commit when completing each discrete task or feature
- **Push on full completion**: You MUST push to remote when the entire user request is complete
- **Commit message format**: Use conventional commits (e.g., `feat:`, `fix:`, `docs:`, `refactor:`)

Example workflow:

1. Complete task 1 → validate → commit
2. Complete task 2 → validate → commit
3. Complete task 3 → validate → commit
4. All tasks done → push to remote
