# Portfolio v3

A static portfolio copying the layout and styling of [siddz.com](https://siddz.com/) with Mohamed Yessine Bouajila’s existing content, using Astro 7, TypeScript, and Tailwind CSS 4 through the Tailwind Vite plugin. Pages are generated as static HTML.

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
- `src/styles/global.css`: Tailwind entry point and responsive styles and light/dark theme tokens.
- `src/data/portfolio.json`: Profile, projects, work experience, and education preserved from the existing portfolio.
- `src/components/`: Shared portfolio components and the React theme-toggle island.
- `src/components/ui/`: shadcn/ui Button, Card, Input, Label, and Textarea primitives.
- `src/lib/utils.ts`: Shared shadcn class-name utility.
- `components.json`: shadcn CLI configuration and import aliases.
- `public/`: Static assets.

The UI copies the reference’s narrow 768px content column, fixed navigation, faint grid, compact profile, grayscale contribution calendar, technology icons, project cards, experience timeline, a compact contact section. It supports light and dark themes with a saved preference. Fonts are self-hosted Geist and JetBrains Mono. The single landing page includes the biography, experience, education, four featured projects, and eight additional projects under a native “More projects” disclosure. Its navbar contains only the name and theme toggle. The page ends with a “Get in touch” message and centered GitHub, LinkedIn, and email links, without a footer or booking action.

Project cards and the theme button use shadcn/ui with the existing reference styles applied over the primitive defaults. The theme toggle and compact contact form hydrate in the browser; cards and social icons render as static HTML. shadcn's semantic Tailwind colors map to the existing light/dark tokens, and its dark variant follows `data-theme`. Add future primitives with `pnpm dlx shadcn@latest add <component>`.

Impeccable is installed for Codex in `.agents/skills/impeccable`. Use `$impeccable` for future design work. Downloaded engine binaries are ignored by Git.

## CMS integration later

Portfolio content stays in `src/data/portfolio.json`. GitHub contributions load in the browser from `github-contributions-api.jogruber.de` for the profile’s GitHub username; if the request fails, the calendar links to GitHub without inventing activity. No environment variables are required. A compact name, email, and message form sits above the direct contact links. It validates the fields and opens a prefilled draft in the visitor’s email app. There is no booking integration or footer.

Interface icons use Tabler Icons for Astro. Technology logos use Simple Icons with accessible names and tooltips. See [CMS_INTEGRATION.md](./CMS_INTEGRATION.md) for the planned CMS integration.

This branch starts v3 from the existing portfolio repository history. The existing Lighthouse workflow and configuration are retained; preview stays on port 1600 to match that configuration.
