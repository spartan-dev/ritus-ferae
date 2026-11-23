# Ritus Ferae — website

Official site for Ritus Ferae, a dark medieval folk band (German medieval bagpipe, davul, surdos).
Single-page, statically built, bilingual (Spanish default, English secondary).

See also `AGENTS.md` for dev-server usage (`astro dev --background`).

## Golden rule

**Visual decisions come from DESIGN.md and design-system/ — never invent colors or fonts.**
If a token, font, or visual treatment you need isn't defined there, ask instead of improvising.
Until those exist, markup stays unstyled/neutral.

## Stack

- Astro 7 (static output), TypeScript `strict`
- Tailwind CSS 4 via `@tailwindcss/vite` — entry point `src/styles/global.css`
- Content collections with Zod schemas (`astro/zod`)
- Astro built-in i18n routing
- Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss`
- **No UI libraries and no JS frameworks** (React/Vue/Svelte etc.). Astro components only.

## Folder structure

```
src/
  assets/placeholders/      Placeholder images (replace with real assets)
  components/
    Nav.astro               Anchor nav + language switch
    sections/               One component per page section (Hero … Footer)
  content/                  Collection entries, one JSON file per entry
    shows/ gallery/ merch/ videos/
  content.config.ts         Collection schemas
  data/socials.ts           Typed social links
  i18n/
    es.ts                   Spanish UI strings (source of truth for the shape)
    en.ts                   English UI strings (typed as UIStrings)
    index.ts                Locale helpers, section ids
  layouts/BaseLayout.astro  <html lang>, global.css, SEO / Open Graph / Twitter meta
  pages/
    index.astro             Composes all sections (es, served at /)
    en/index.astro          Renders pages/index.astro under /en/
  styles/global.css         Tailwind entry
```

## Conventions

- **Sections**: order is Hero, About, Shows, Videos, Gallery, Merch, Contact, Footer. Each root element has
  an `id` matching `sectionIds` in `src/i18n/index.ts`; the nav is generated from that list. Add a section by
  adding its id there, its nav label to both i18n files, and composing it in `pages/index.astro`.
- **i18n**: never hard-code user-facing text in components; add it to `src/i18n/es.ts` and `en.ts`
  (`en.ts` is type-checked against the Spanish shape). Get strings with `useTranslations(Astro.currentLocale)`.
  Format dates/prices with `Intl` using `localeTags[locale].intl`.
- **Images**: every image field in a schema must be paired with a required, non-empty `alt`. Use
  `astro:assets` `<Image>` for content images.
- **Content**: one JSON file per entry in `src/content/<collection>/`. Image paths are relative to the JSON file.
  Dates are ISO 8601 strings.
- **External links** open in a new tab with `rel="noopener noreferrer"`.
- Before committing: `npm run format`, `npm run check`, `npm run build` must all pass.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `chore:` …).
