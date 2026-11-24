# Ritus Ferae — Design System (Master)

> **Logic:** when building a page or section, first check `design-system/ritus-ferae/pages/<name>.md`.
> If it exists, its rules override this file. Otherwise follow this file exactly.
>
> **Implementation:** every token below lives in `src/styles/global.css` (`@theme`). That file and this
> one must stay in sync; there are no other token files. Components use **semantic** tokens
> (`bg-bg`, `text-fg`, `border-border`, `bg-accent` …), never primitives or raw hex.

Context: `PRODUCT.md` (audience, voice, constraints). Generated with ui-ux-pro-max 2.15.0
(`--design-system --persist --preview --tokens css --motion 3 --density 3`), then reconciled by hand
— see [Generator output and what was kept](#generator-output-and-what-was-kept).

---

## 1. Style

**Name:** Ritual Engraving — dark, hand-made, printed.

The page should feel like a woodcut print laid on soot: hard edges, ink-black ground, bone-coloured type,
bronze rules like hammered metal, and fire used sparingly as the only bright thing. Ceremony comes from
scale, rhythm and restraint, not from decoration piled on.

- **Hard, cut edges.** Radii 0–4px. Nothing pill-shaped, nothing pillowy.
- **Flat depth.** No soft or glowing shadows. Depth is soot vs. smoke surfaces, bronze hairlines, and a hard
  bronze offset (like a misregistered print) on the primary action.
- **Texture is a whisper.** Grain at ~6% opacity, hatch at ~5%. If you notice it before the photo, it's too much.
- **Photography and the band's own engravings carry identity.** The system frames them; it never competes.
- **Darkness without drag.** Every texture is CSS/SVG (no image requests); contrast is AA everywhere.

## 2. Color

All ratios are WCAG 2.1 relative-luminance contrast. AA = 4.5:1 normal text, 3:1 large text (≥ 24px, or
≥ 18.66px bold) and non-text UI.

### Primitives

| Token                   | Hex       | Role                                                                   |
| ----------------------- | --------- | ---------------------------------------------------------------------- |
| `--color-soot`          | `#0d0b0a` | Page background                                                        |
| `--color-smoke`         | `#1a1614` | Raised surface: cards, inputs, nav bar _(added)_                       |
| `--color-iron`          | `#2a2421` | Decorative dividers only, never a boundary that must be seen _(added)_ |
| `--color-bone`          | `#e8dfcc` | Primary text                                                           |
| `--color-ash`           | `#b8ad97` | Secondary text: metadata, captions _(added)_                           |
| `--color-bronze`        | `#8a6a3b` | Borders, rules, ornaments; text only at ≥ 24px                         |
| `--color-bronze-bright` | `#a88552` | Bronze text at any size _(added)_                                      |
| `--color-blood`         | `#7a1a14` | Fills only, with bone text on top. **Never text on dark.**             |
| `--color-blood-bright`  | `#d15a4b` | Red text: form errors, "Agotado / Sold out" _(added)_                  |
| `--color-ember`         | `#d9822b` | Accent only: primary CTA, focus ring, active nav item                  |

### Semantic aliases (use these in components)

| Token                   | → Primitive  |
| ----------------------- | ------------ |
| `--color-bg`            | soot         |
| `--color-surface`       | smoke        |
| `--color-fg`            | bone         |
| `--color-fg-muted`      | ash          |
| `--color-border`        | bronze       |
| `--color-border-subtle` | iron         |
| `--color-accent`        | ember        |
| `--color-on-accent`     | soot         |
| `--color-danger`        | blood        |
| `--color-on-danger`     | bone         |
| `--color-danger-fg`     | blood-bright |
| `--color-ring`          | ember        |

### Contrast matrix

| Foreground    | Background | Ratio     | Verdict                                   |
| ------------- | ---------- | --------- | ----------------------------------------- |
| bone          | soot       | **14.83** | AAA — body                                |
| bone          | smoke      | **13.57** | AAA — body on cards                       |
| ash           | soot       | **8.85**  | AAA — secondary text                      |
| ash           | smoke      | **8.10**  | AAA                                       |
| ember         | soot       | **6.71**  | AA — accent text/links                    |
| ember         | smoke      | **6.14**  | AA                                        |
| soot          | ember      | **6.71**  | AA — primary button label                 |
| bone          | blood      | **7.99**  | AAA — sold-out badge, danger fill         |
| bronze-bright | soot       | **5.74**  | AA — small bronze text                    |
| bronze-bright | smoke      | **5.25**  | AA                                        |
| blood-bright  | soot       | **4.93**  | AA — error text                           |
| blood-bright  | smoke      | **4.51**  | AA (just) — error text in inputs/cards    |
| bronze        | soot       | 3.93      | **Large text + UI only** (borders, rules) |
| bronze        | smoke      | 3.60      | **Large text + UI only**                  |
| bone          | bronze     | 3.77      | **Large text only** — avoid bronze fills  |
| blood         | soot       | 1.86      | **Fails** — fill only, never text/border  |
| iron          | soot       | 1.28      | Decorative only                           |

**Changes from the reference palette:** none of the five reference hexes were altered. Bronze (3.93) and blood
(1.86) fail as body text on soot, so instead of shifting their hue/value (which would lose the oxidized and
dried-blood character), two text-safe companions were added — `bronze-bright #a88552` and `blood-bright #d15a4b`
— plus three neutrals (`smoke`, `iron`, `ash`) the reference didn't cover.

### Usage rules

- Ember is the **only** bright colour. At most one ember-filled element per viewport (the primary CTA).
- Blood is a fill (badge, selection highlight, danger button) — never text, never a thin border on soot.
- Bronze borders are fine at 1px (3.93:1 passes non-text 3:1). Bronze _text_ under 24px uses `bronze-bright`.
- No gradients on UI. The only gradients allowed are the static smoke texture and image scrims.

## 3. Typography

| Role    | Family                              | Token            | Use                                                                                 |
| ------- | ----------------------------------- | ---------------- | ----------------------------------------------------------------------------------- |
| Display | **Pirata One** 400                  | `--font-display` | `h1`, `h2`, hero line. Never for body or anything < 28px.                           |
| Label   | **Cinzel** (variable)               | `--font-label`   | `h3`/`h4`, nav, buttons, dates, venue names, eyebrows. Uppercase, `tracking-label`. |
| Body    | **EB Garamond** (variable + italic) | `--font-body`    | Everything else. Old-style figures by default.                                      |

Fallback chain: display → Cinzel → Georgia; body → Garamond → Georgia.

**Why this pairing.** Pirata One is a condensed blackletter-derived face with open, readable counters: it
reads "gothic" at a glance but survives multi-word Spanish headlines ("Próximos conciertos") on a 360px
phone. UnifrakturMaguntia is a true Fraktur — beautiful as a wordmark, but its capitals become illegible in
headings and it tips toward the "Renaissance fair" cliché PRODUCT.md forbids. Cinzel supplies the
inscription-like roman capitals for structured data (dates, cities), where blackletter would hurt scanning.
EB Garamond was chosen over Cormorant Garamond: Cormorant's tiny x-height and hairline strokes break up at
16–17px light-on-dark on mobile; EB Garamond holds up.

**Wordmark:** the band's supplied logo, never re-set in a font.

### Scale (fluid, mobile → desktop)

| Token       | Size       | Line height | Typical use                |
| ----------- | ---------- | ----------- | -------------------------- |
| `text-sm`   | 15px       | 1.5         | Captions, legal (min size) |
| `text-base` | 17px       | 1.6         | Body                       |
| `text-lg`   | 20px       | 1.5         | Lead paragraph             |
| `text-xl`   | 24 → 30px  | 1.2         | `h3`, show city            |
| `text-2xl`  | 32 → 48px  | 1.1         | `h2` section titles        |
| `text-3xl`  | 44 → 80px  | 1.0         | `h1`                       |
| `text-4xl`  | 56 → 128px | 0.95        | Hero statement only        |

Body line length 60–72ch. Labels: Cinzel 600, uppercase, `tracking-[--tracking-label]` (0.14em).

## 4. Spacing

Density 3/10 (spacious, as the generator proposed). Tailwind's 4px base step (`--spacing: 0.25rem`) is
kept for component internals; layout uses named steps:

| Token               | Value      | Use                              |
| ------------------- | ---------- | -------------------------------- |
| `--spacing-gutter`  | 16 → 32px  | Page side padding (`px-gutter`)  |
| `--spacing-stack`   | 24px       | Between blocks in a section      |
| `--spacing-section` | 64 → 128px | Between sections (`py-section`)  |
| `--spacing-tap`     | 44px       | Minimum tap target (`min-h-tap`) |

## 5. Radii & shadows

| Token          | Value                               | Use                              |
| -------------- | ----------------------------------- | -------------------------------- |
| `rounded-none` | 0                                   | Default for images, sections     |
| `rounded-sm`   | 2px                                 | Buttons, inputs, badges          |
| `rounded-md`   | 4px                                 | Cards (max radius in the system) |
| `shadow-inset` | 1px inset bronze                    | Framed images, outlined buttons  |
| `shadow-sunk`  | inset dark                          | Inputs, video facades            |
| `shadow-print` | 3px 3px hard bronze offset, no blur | Primary CTA hover, active show   |

## 6. Textures

Defined as CSS custom properties in `:root`; apply via `background-image: var(--texture-*)` on a
pseudo-element so they never sit under text at a contrast-reducing opacity.

- `--texture-grain` — inline SVG fractal noise (parchment / print grain). Opacity `--texture-grain-opacity` (0.06).
- `--texture-hatch` — fine −45° lines, 5px pitch, 5% bone. Woodcut shading on empty panels and dividers.
- `--texture-smoke` — two static radial hazes (bronze low-left, blood high-right). **Never animated**;
  animated smoke is floaty and expensive on mobile.

## 7. Motion — percussive

Principle: **fast attack, short decay, then stillness** — a davul hit, not a breeze. Motion marks
something happening (press, open, arrival); nothing moves on its own except one optional beat marker.

| Token               | Value                             | Use                                |
| ------------------- | --------------------------------- | ---------------------------------- |
| `--duration-hit`    | 90ms                              | Press feedback, colour flips       |
| `--duration-strike` | 160ms                             | Hover, focus, small reveals        |
| `--duration-settle` | 260ms                             | Menu / panel enter (max in system) |
| `ease-strike`       | `cubic-bezier(.2,.9,.3,1)`        | Default — hits hard, settles fast  |
| `ease-snap`         | `cubic-bezier(.5,0,.75,0)`        | Exits — accelerate away            |
| `ease-thud`         | `cubic-bezier(.3,1.4,.5,1)`       | Arrivals — tiny overshoot          |
| `animate-strike`    | 6px rise + 1.5% scale, 260ms      | Content arriving                   |
| `animate-pulse-hit` | 1 beat (6% scale) then rest, 1.6s | One element max (next-show marker) |

Rules: exits faster than entries; animate `transform`/`opacity` only; scroll reveals (if any) trigger once,
never reverse; no parallax, no infinite loops other than `pulse-hit`.

**Reduced motion:** `global.css` collapses all animations and transitions to 1ms and one iteration under
`prefers-reduced-motion: reduce`. State changes (colour, visibility) still happen; movement doesn't.

## 8. Components (guidance — not yet implemented)

- **Primary button:** ember fill, soot Cinzel label, `rounded-sm`, `min-h-tap`. Hover: `shadow-print`.
  Press: `scale(.97)` for `duration-hit`. One per viewport.
- **Secondary button:** transparent, 1px bronze border, bone label. Hover: border → ember.
- **Show row:** Cinzel date (day large, month small caps) · city in `text-xl` · venue in ash · ticket CTA.
  Sold out: blood badge with bone "Agotado/Sold out", row text dims to ash, CTA removed (not just disabled).
- **Inputs:** smoke fill, `shadow-sunk`, 1px bronze bottom border, visible Cinzel label above (never
  placeholder-only), error text in `danger-fg` beneath the field.
- **Video facade:** poster image + bronze-framed play glyph (SVG), click-to-load iframe.
- **Icons:** one SVG set, stroke style, `currentColor`. Social brand marks from Simple Icons. No emoji.

## 9. Anti-patterns (do NOT use)

From PRODUCT.md and the generator's checks:

- ❌ Generic SaaS layouts: feature-card grids, "trusted by" logo bars, pricing-style tiles.
- ❌ Glossy or decorative gradients, glassmorphism, `backdrop-filter` blur panels.
- ❌ Neon / cyberpunk colour (including the generator's indigo + "play green").
- ❌ Cartoon fantasy, faux-parchment scroll frames, dragons-and-swords clip art, Comic-Sans-medieval
  fonts (Papyrus, MedievalSharp, Almendra-style novelty faces).
- ❌ Blackletter for body, labels, dates, buttons or anything under 28px.
- ❌ Coloured glow halos (box- or text-shadow blur in ember/neon)
- ❌ Rounded pills, soft drop shadows, `translateY(-2px)` hover lifts.
- ❌ Floaty motion: slow fades > 300ms, parallax, drifting smoke, scroll-jacking.
- ❌ Blood red or bronze as small text on dark (see contrast matrix).
- ❌ More than one ember-filled element per screen.
- ❌ Emoji as icons; mixed icon sets.
- ❌ Placeholder-only form labels; invisible focus states.
- ❌ Autoplay audio or video with sound.
- ❌ Raw hex in components; inventing tokens not listed here.

## 10. Pre-delivery checklist

- [ ] Only semantic tokens in components; no raw hex, no Tailwind default colours (they're disabled).
- [ ] All text pairs are in the contrast matrix and marked AA for their size.
- [ ] Tap targets ≥ 44×44px with ≥ 8px separation.
- [ ] Visible `:focus-visible` ring (ember, 2px, 3px offset) on every interactive element.
- [ ] Works at 360, 768, 1024, 1440px; no horizontal scroll.
- [ ] `prefers-reduced-motion` verified.
- [ ] No texture or animation shipped that adds an image request or a long-running animation.
- [ ] Spanish and English strings both fit (Spanish runs ~15–25% longer).

---

## Generator output and what was kept

ui-ux-pro-max classified the brief as **"Music Streaming"** and returned: style _Dark Mode (OLED)_, palette
indigo `#1E1B4B` / `#4338CA` + "play green" `#22C55E` on `#0F0F23`, fonts **Righteous + Poppins** via Google
Fonts CDN, 8–16px radii, soft drop shadows, `translateY` hover lifts, and a _Feature-Rich Showcase_ page
pattern (feature grid → social proof → CTA). Targeted retries (typography "medieval gothic dark fantasy",
color "dark earthy bronze", google-fonts "blackletter fraktur") returned no medieval or dark-folk matches
(Inter, Orbitron, Poiret One; the same indigo family).

**Rejected** — these hit PRODUCT.md's anti-references directly (generic SaaS, neon), the fonts read as
playful/retro-pop rather than solemn, and the CDN violates the self-hosting requirement.

**Kept:** spacious density (3/10) and the low motion dial, the dark-only mode, WCAG/focus/tap-target/
reduced-motion rules, "no emoji icons" and "no layout-shifting hovers", and the grain-overlay technique from
its _Vintage Analog_ style result (SVG noise at low opacity). The generator's 150–300ms transition guidance
is tightened to 90–260ms to match the percussive brief.
