# Portfolio v2

A personal portfolio built with Astro 5, React 19, and Tailwind CSS 4, with content loaded from a CMS API.

## Tech Stack

- Astro 5 + React 19
- Tailwind CSS 4
- motion/react for animations
- date-fns for timeline and contribution graph handling
- clsx + tailwind-merge utilities

## Features

- CMS-backed profile, projects, experience, and education content
- Single-page homepage plus dedicated `/projects` route
- SEO component + JSON-LD schema output on every page
- GitHub activity contribution graph section
- Responsive layout with dark-mode-aware styling
- Sitemap generation (`@astrojs/sitemap`)

## Routes

- `/` - Hero, featured projects, experience, education, GitHub activity, footer/contact CTA
- `/projects` - Full project listing with breadcrumbs and back navigation

## Getting Started

1. Install dependencies

```bash
pnpm install
```

2. Copy and configure environment variables

```bash
cp .env.example .env.local
```

3. Start the dev server

```bash
pnpm dev
```

Open [http://localhost:1600](http://localhost:1600).

## Environment Variables

- `CMS_API_BASE_URL` - CMS base URL (example: `http://localhost:3000/`)
- `CMS_ACCESS_TOKEN` - bearer token used for authenticated CMS requests
- `CMS_CACHE_TTL_SECONDS` - in-memory cache TTL for GET calls
- `CMS_CACHE_STALE_SECONDS` - stale-while-revalidate cache window
- `R2_PUBLIC_BASE_URL` - public base URL for media keys returned by the CMS

See `.env.example` for defaults.

## Scripts

- `pnpm dev` - run Astro dev server on port 1600
- `pnpm build` - generate static output
- `pnpm preview` - preview the built site
- `pnpm astro <command>` - run Astro CLI commands

## Agenting

- Developer/agent conventions live in `AGENTS.md`.
- API contract and payload docs live in `API_DOCS.md`.
