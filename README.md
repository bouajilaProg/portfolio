# Portfolio v3

A fresh portfolio starter using Astro 7, TypeScript, and Tailwind CSS 4 through the Tailwind Vite plugin. Pages are generated as static HTML.

## Development

Use Node.js 22.23.4 or newer and pnpm 11.28.4.

```sh
pnpm install
pnpm dev
```

The development server runs at `http://localhost:1600`.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Build the static site into `dist/` |
| `pnpm preview` | Preview the production build on port 1600 |

## Structure

- `src/pages/`: Astro routes.
- `src/layouts/Layout.astro`: Shared page shell and global stylesheet import.
- `src/styles/global.css`: Tailwind entry point.
- `public/`: Static assets.

## CMS integration later

The starter has no CMS dependency or required environment variables. See [CMS_INTEGRATION.md](./CMS_INTEGRATION.md) for the reviewed v2 API contracts, media handling, caching behavior, and implementation checklist.

This branch starts v3 from the existing portfolio repository history. The existing Lighthouse workflow and configuration are retained; preview stays on port 1600 to match that configuration.
