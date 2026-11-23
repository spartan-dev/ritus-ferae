# Ritus Ferae

Official website of Ritus Ferae — dark medieval folk. Built with [Astro](https://astro.build) and Tailwind CSS 4.

## Requirements

- Node.js `>=22.23.4` (see `.nvmrc`; run `nvm use`)

## Setup

```sh
npm install
npm run dev
```

The site is served at http://localhost:4321 — Spanish at `/`, English at `/en/`.

## Scripts

| Command                | Description                                     |
| :--------------------- | :---------------------------------------------- |
| `npm run dev`          | Start the dev server                            |
| `npm run build`        | Build the static site to `dist/`                |
| `npm run preview`      | Preview the production build locally            |
| `npm run check`        | Type-check and validate with `astro check`      |
| `npm run format`       | Format all files with Prettier                  |
| `npm run format:check` | Verify formatting without writing (CI-friendly) |

## Content

Edit JSON entries in `src/content/{shows,gallery,merch,videos}/` — schemas live in `src/content.config.ts`.
Social links are in `src/data/socials.ts`; UI strings in `src/i18n/{es,en}.ts`.

All current content is placeholder data. Before launch, also set the real domain in `astro.config.mjs` (`site`).

See `CLAUDE.md` for project conventions.
