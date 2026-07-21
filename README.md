# biagi.kodingin.id — Personal Portfolio

Personal portfolio of **Biagi Archie Fais**, a Software Engineer based in Indonesia building web applications end-to-end. The site showcases projects, an interactive experience journey, and ways to get in touch.

**Live:** [https://biagi.kodingin.id](https://biagi.kodingin.id)

## Tech Stack

- **React 19 + TypeScript** on **Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **react-router v7** with **vite-react-ssg** — every route is pre-rendered to static HTML at build time, then hydrated in the browser
- **motion** (`motion/react`) for animations
- Per-page SEO (title, description, canonical, Open Graph, Twitter Card, JSON-LD) injected at build time so social scrapers and search engines read the right tags without running JavaScript

## Getting Started

```bash
npm install        # patch-package runs automatically via postinstall
npm run dev        # start the Vite dev server (plain SPA in dev)
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Regenerate sitemap, type-check, then pre-render every route to static HTML |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Run ESLint |

## Project Structure

Code is organized by **feature** (mapping to the navbar): `src/features/{home,projects,experience,contact,live-demo}`, with cross-cutting pieces in `src/shared/`. Content is data-driven — projects and experiences live in each feature's `data/` folder, so adding an entry updates the UI automatically.

> **Note:** when adding a project, register its id in `vite.config.ts` (`ssgOptions.includedRoutes`) and `scripts/generate-sitemap.mjs` so the detail page gets pre-rendered and listed in the sitemap.
