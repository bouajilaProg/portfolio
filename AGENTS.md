AGENTS

Purpose
- This document orients agentic coding assistants to work in this repository. It lists build / dev / CI commands, explains how to run a single test when tests are present, and documents code-style, naming, import, error-handling and commit conventions used across the codebase.

Quick commands
- Install: `pnpm install` (repo was developed with pnpm; `npm` also works but use pnpm to match CI)
- Dev server: `pnpm dev` (maps to `astro dev --host 0.0.0.0 --port 1600`)
- Build: `pnpm build` (runs `astro build`)
- Preview built site: `pnpm preview` (runs `astro preview`)
- Run Astro CLI: `pnpm astro <command>`

CI
- GitHub Actions: `.github/workflows/lighthouse.yml` runs `npm install` then `npm run build` and Lighthouse CI. Agents should not modify CI workflows without human approval.

Testing
- This repository does not include a test runner configuration by default. If tests are added, prefer one of the following test runners and patterns:
  - Vitest (recommended for Vite/Astro + TS): `pnpm add -D vitest @testing-library/react` and add `test` scripts.
  - Jest: `pnpm add -D jest @testing-library/react @types/jest` for a legacy setup.

- Recommended npm scripts (example):
  - `"test": "vitest"`
  - `"test:watch": "vitest --watch"`

- Running a single test (common patterns):
  - Vitest: `pnpm vitest -t 'should render header'` or `pnpm test -- -t 'pattern'`
  - Jest: `pnpm jest -t 'pattern'` or `pnpm test -- -t 'pattern'`
  - Node-only test files: `node path/to/test-file.js`

If you add tests, include a short `CONTRIBUTING` section and CI job that runs them.

Code Style & Conventions
- Language: TypeScript with React (JSX/TSX) and Astro pages (`.astro`). Keep the repo in `type: module` style.

- Formatting
  - Use Prettier (if added) or `prettier --write` for files. If no formatter is present, follow these rules:
    - 2-space indentation
    - single blank line between logical blocks
    - wrap long JSX props across lines for readability

- Imports
  - Order imports: (1) external packages, (2) absolute/monorepo imports, (3) internal `src`/`./`/`../` relative imports, (4) style/assets imports last.
  - Group related imports together and add one blank line between groups.
  - Use named imports where possible. Keep import lines under ~120 chars by breaking multi-import lists onto multiple lines.
  - Prefer `import { type Foo } from '...'` when only the type is imported (the codebase already uses `type` imports in some files).

- File Naming
  - React components: PascalCase and `.tsx`, e.g. `Hero.tsx`, `ProjectCard.tsx`.
  - UI primitives and hooks: camelCase when exported as functions but file names may be PascalCase for components.
  - Astro pages: `.astro` and match the route, e.g. `src/pages/index.astro`, `src/pages/projects.astro`.

- Exports
  - Prefer named exports for React components and utilities. Use `export default` sparingly for pages if project conventions require it.

- Types
  - Avoid `any`. Use explicit interfaces/types for public APIs (props, library functions) and narrow unions for discriminated types.
  - Prefer `type` for object shapes that are not intended to be extended and `interface` when extension/merging is useful.
  - Keep types colocated with small components or in `src/lib/types` if shared across modules.

- React / Components
  - Use function components (no class components). Prefer named `export function ComponentName(props) {}` style as used in the codebase.
  - Props: type or interface named `ComponentNameProps` and exported if reused.
  - Event handlers and callbacks: `onChange`, `onSubmit` naming. Use `handleX` for internal handler functions.
  - Keep components small and focused; split complex UI into presentational + container parts.

- CSS / Tailwind
  - The project uses Tailwind CSS 4 and utility-first styling. Keep class strings concise and use helper utilities `clsx` or `tailwind-merge` for conditional classes.
  - Avoid embedding complex logic inside className expressions — compute a small variable with the class string above the JSX and reference it.

- Naming Conventions
  - Types and interfaces: PascalCase (e.g. `LinkData`, `Profile`)
  - Components: PascalCase (e.g. `Hero`, `ProjectCard`)
  - Functions and variables: camelCase (e.g. `getIconForType`, `profile`)
  - Files: match the primary export name where practical (e.g. `ProjectCard.tsx` exports `ProjectCard`).

- Error handling
  - For synchronous code, throw `Error` with a clear message for exceptional conditions: `throw new Error('...')`.
  - For async functions, use `try { await ... } catch (err) { /* handle or rethrow with context */ }`.
  - Prefer returning `null`/`undefined` (and clearly typing it) for optional values rather than using exceptions for control flow.
  - When rethrowing, attach context: `throw new Error(`Failed to fetch X: ${err instanceof Error ? err.message : String(err)}`)`.

- Logging
  - Avoid console.log in production code. Use `console.debug` for verbose development-only messages guarded by environment checks when necessary.

- Accessibility
  - Use semantic HTML in `.astro` pages and React components (buttons, anchors with correct hrefs, alt attributes for images).
  - Ensure interactive elements are reachable by keyboard and have visible focus styles (project already uses `focus-visible` classes).

Commits & Branches
- Commit messages: use Conventional Commits style. Examples:
  - `feat(ui): add ProjectCard component`
  - `fix(build): correct asset path in build`
  - `docs: add AGENTS.md`
- Branches: create feature branches off `main` (e.g. `feat/add-search`).
- Never force-push `main`. Avoid destructive git operations in automation.

Cursor / Copilot / Workspace rules
- There are no `.cursor/rules/` or `.cursorrules` files in the repository.
- There are no Copilot instruction files under `.github/` (e.g. `.github/copilot-instructions.md`) present.
  - If you intend to add Copilot or Cursor rules, add them under `.github/` or `.cursor/rules/` and update this document.

When in doubt
- Read the existing code (look at `src/components` and `src/lib`) and follow the nearest-neighbour style: match import ordering, naming, and small patterns.
- If a change affects CI, deployments, or the site's output, run `pnpm build` locally before pushing and open a small PR with the CI changes.

Next steps for agents
1. Add tests and a `test` script if you are implementing logic-heavy features.
2. Add Prettier + ESLint (recommended preset: `eslint-config-astro` + `@typescript-eslint`) and add pre-commit hooks in CI.
3. Keep AGENTS.md in sync if conventions change.
