# Sobers Website

Landing page for [Sobers](https://sobers.app) - a free 12-step recovery accountability app for sponsors and sponsees.

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Font**: JetBrains Mono
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── Features.astro
│   ├── HowItWorks.astro
│   ├── Screenshots.astro
│   ├── FAQ.astro
│   └── CTA.astro
├── layouts/        # Page layouts
│   └── Layout.astro
├── pages/          # Route pages
│   ├── index.astro
│   ├── privacy.astro
│   ├── terms.astro
│   └── support.astro
└── styles/         # Global styles
    └── global.css
```

## Features

- **Dark/Light Mode**: System preference detection with manual toggle
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD schema
- **Performance**: Lighthouse 95+ scores
- **Sitemap**: Auto-generated via `@astrojs/sitemap`

## Pages

- `/` - Landing page with hero, features, FAQ sections
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/support` - Support & FAQ

## Customization

### Brand Colors

Edit `src/styles/global.css`:

```css
@theme {
  --color-primary: #007aff;
  --color-secondary: #af58da;
  --color-dark-bg: #0f172a;
  --color-dark-surface: #1e293b;
}
```

### Assets

Replace placeholder files in `public/`:

- `app-screenshot.png` - Hero app screenshot (320x640px)
- `og-image.png` - Social sharing image (1200x630px)
- `screenshots/*.png` - App screenshots gallery

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual

```bash
npm run build
# Upload dist/ folder to any static host
```

## App Store Links

- **iOS**: [App Store](https://apps.apple.com/us/app/sobriety-waypoint/id6755614815)
- **Android**: [Google Play](https://play.google.com/store/apps/details?id=com.volvox.sobrietywaypoint)

## License

ISC License - see [LICENSE](LICENSE)

## Credits

Made with love by [Volvox](https://volvoxdev.com)
