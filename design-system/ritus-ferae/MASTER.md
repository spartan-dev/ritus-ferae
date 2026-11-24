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

**Name:** Night Forest Engraving — monochrome logo, forest atmosphere.

A forest at night under a black sky: pine, moss, lichen, wet bark. The band logo's monochrome
(void black, cool bone white, antler grey) is the anchor; greens are the atmosphere around it. Hard edges and
engraving grain keep the woodcut character; ceremony comes from scale, rhythm and restraint. Warm colour is
rare: bark and ember are a torch in the trees, not the ground.

- **Hard, cut edges.** Radii 0–4px. Nothing pill-shaped, nothing pillowy.
- **Flat depth.** No soft or glowing shadows. Depth is void vs. pine surfaces and moss hairlines.
- **Texture is a whisper.** Neutral grain at ~6% opacity, hatch at ~4%. If you notice it before the photo, it's
  too much.
- **Photography, the logo and the band's own engravings carry identity.** The system frames them; it never
  competes.
- **Darkness without drag.** Every texture is CSS/SVG (no image requests); contrast is AA everywhere.

## 2. Color

All ratios are WCAG 2.1 relative-luminance contrast. AA = 4.5:1 normal text, 3:1 large text (≥ 24px, or
≥ 18.66px bold) and non-text UI.

### Primitives

| Token                | Hex       | Role                                                             |
| -------------------- | --------- | ---------------------------------------------------------------- |
| `--color-void`       | `#000000` | Page background _(logo anchor)_                                  |
| `--color-bone`       | `#e6e6e6` | Primary text — cool white, not cream _(logo anchor)_             |
| `--color-ash-500`    | `#4a4a4a` | Antler grey: decorative lines/ornaments **only** _(logo anchor)_ |
| `--color-pine-950`   | `#0f1712` | Alternate section background                                     |
| `--color-pine-900`   | `#17251c` | Cards, footer, inputs                                            |
| `--color-pine-800`   | `#21362a` | Card hover, decorative strong borders                            |
| `--color-moss-500`   | `#5f7348` | Borders, dividers — **never text**                               |
| `--color-moss-400`   | `#7d9160` | Hover states, icons, large headings                              |
| `--color-lichen-300` | `#a9b98a` | Primary accent: CTAs, links, focus rings                         |
| `--color-ash-300`    | `#a3a19b` | Secondary text, dates, metadata                                  |
| `--color-bark-400`   | `#8c7356` | Wood details, large text only, sparingly                         |
| `--color-ember`      | `#c97a34` | Torch accent, max 1–2 uses per page (e.g. "Agotado")             |

### Semantic aliases (use these in components)

| Token                    | → Primitive | Notes                                         |
| ------------------------ | ----------- | --------------------------------------------- |
| `--color-bg`             | void        |                                               |
| `--color-bg-alt`         | pine-950    | Alternate sections                            |
| `--color-surface`        | pine-900    | Cards, footer, inputs                         |
| `--color-surface-hover`  | pine-800    | Card hover, secondary button hover            |
| `--color-fg`             | bone        |                                               |
| `--color-fg-muted`       | ash-300     |                                               |
| `--color-heading-accent` | moss-400    | Large text only when on pine-800              |
| `--color-border`         | moss-500    | Functional borders (inputs, frames, dividers) |
| `--color-border-strong`  | pine-800    | Decorative only — 1.63:1 on void              |
| `--color-ornament`       | ash-500     | Antler/branch line work                       |
| `--color-accent`         | lichen-300  | Primary button fill                           |
| `--color-accent-hover`   | moss-400    | Primary button hover fill                     |
| `--color-on-accent`      | void        |                                               |
| `--color-link`           | lichen-300  | Underline on hover                            |
| `--color-wood`           | bark-400    |                                               |
| `--color-torch`          | ember       | "Agotado / Sold out" badge                    |
| `--color-on-torch`       | void        |                                               |
| `--color-danger-fg`      | ember       | Form error text, always with a text cue       |
| `--color-ring`           | lichen-300  | 2px, 2px offset                               |

### Contrast matrix

Pairs marked † came with the brief and were re-verified; the rest were introduced here.

| Foreground   | Background | Ratio     | Verdict                                             |
| ------------ | ---------- | --------- | --------------------------------------------------- |
| bone †       | void       | **16.83** | AAA — body                                          |
| bone †       | pine-950   | **14.61** | AAA                                                 |
| bone †       | pine-900   | **12.77** | AAA                                                 |
| bone         | pine-800   | **10.35** | AAA — secondary button hover                        |
| ash-300 †    | void       | **8.13**  | AAA — metadata                                      |
| ash-300 †    | pine-950   | **7.06**  | AAA                                                 |
| ash-300 †    | pine-900   | **6.17**  | AA                                                  |
| ash-300      | pine-800   | **5.00**  | AA — metadata on hovered card                       |
| lichen-300 † | void       | **9.99**  | AAA — links, accent text                            |
| lichen-300 † | pine-950   | **8.68**  | AAA                                                 |
| lichen-300 † | pine-900   | **7.58**  | AAA                                                 |
| lichen-300   | pine-800   | **6.15**  | AA — link on hovered card; focus ring passes 3:1    |
| void         | lichen-300 | **9.99**  | AAA — primary button label                          |
| void         | moss-400   | **6.09**  | AA — primary button hover label                     |
| moss-400 †   | void       | **6.09**  | AA                                                  |
| moss-400 †   | pine-950   | **5.29**  | AA                                                  |
| moss-400 †   | pine-900   | **4.62**  | AA (just)                                           |
| moss-400 †   | pine-800   | 3.75      | **Large text only**                                 |
| ember        | void       | **6.32**  | AA — error text                                     |
| ember        | pine-900   | **4.79**  | AA — error text on cards/inputs                     |
| void         | ember      | **6.32**  | AA — "Agotado" badge                                |
| bark-400     | void       | 4.70      | Passes AA, but **large text only** by rule (dosage) |
| bark-400     | pine-900   | 3.57      | Large text only                                     |
| moss-500     | void       | 4.03      | UI boundary ✓ (≥ 3:1) — **never text**              |
| moss-500     | pine-900   | 3.06      | UI boundary ✓ (just)                                |
| moss-500     | pine-800   | 2.48      | **Fails 3:1** — don't rely on it as a boundary here |
| pine-800     | void       | 1.63      | Decorative border only                              |
| ash-500      | void       | 2.37      | Decorative only — **never text**                    |

### Usage rules

- Lichen is the action colour: primary CTA, links, focus. One lichen-filled button per viewport.
- **Bark + ember together cover < 5% of any viewport.** Ember gets 1–2 uses per page (sold-out badge, form
  errors); bark is for wood details and large text only.
- moss-500 and ash-500 are never text colours.
- Functional borders (inputs, toggles, frames that delimit a control) use moss-500 on void/pine-950/pine-900.
  On a pine-800 surface, use lichen-300 or bone for any boundary that must be seen.
- Information is never carried by colour alone: sold-out has the word "Agotado", errors have text.
- No gradients on UI. The only gradients allowed are the static canopy texture and image scrims.

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

| Token          | Value                        | Use                              |
| -------------- | ---------------------------- | -------------------------------- |
| `rounded-none` | 0                            | Default for images, sections     |
| `rounded-sm`   | 2px                          | Buttons, inputs, badges          |
| `rounded-md`   | 4px                          | Cards (max radius in the system) |
| `shadow-inset` | 1px inset moss-500           | Framed images, outlined buttons  |
| `shadow-sunk`  | inset dark                   | Inputs, video facades            |
| `shadow-print` | 3px 3px hard moss-500 offset | Primary CTA hover, active show   |

## 6. Textures

Defined as CSS custom properties in `:root`; apply via `background-image: var(--texture-*)` on a
pseudo-element so they never sit under text at a contrast-reducing opacity.

- `--texture-grain` — inline neutral SVG fractal noise (engraving / print grain). Opacity
  `--texture-grain-opacity` (0.06).
- `--texture-hatch` — fine −45° lines, 5px pitch, 4% bone. Woodcut shading on empty panels and dividers.
- `--texture-canopy` — one static radial from pine-950 at the top fading to void, like light through the
  canopy. **Never animated.** Optional; for section backgrounds.

**Proposed, not built:** antler/branch line ornaments in `ash-500`, echoing the logo. These should be traced
from the band's logo artwork once it's in the repo, not invented.

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

- **Primary button:** lichen-300 fill, void Cinzel label, `rounded-sm`, `min-h-tap`. Hover: moss-400 fill +
  `shadow-print`. Press: `scale(.97)` for `duration-hit`. One per viewport.
- **Secondary / ghost button:** transparent, 1px bone border, bone label. Hover: pine-800 fill.
- **Links:** lichen-300, underline on hover.
- **Show row:** Cinzel date (day large, month small caps in ash-300) · city in `text-xl` · venue in ash-300 ·
  ticket CTA. Sold out: ember badge with void "Agotado/Sold out", row text dims to ash-300, CTA removed.
- **Inputs:** pine-900 fill, `shadow-sunk`, 1px moss-500 bottom border, visible Cinzel label above (never
  placeholder-only), error text in `danger-fg` beneath the field.
- **Video facade:** poster image + moss-500-framed play glyph (SVG), click-to-load iframe.
- **Icons:** one SVG set, stroke style, `currentColor`. Social brand marks from Simple Icons. No emoji.

## 9. Anti-patterns (do NOT use)

From PRODUCT.md and the generator's checks:

- ❌ Generic SaaS layouts: feature-card grids, "trusted by" logo bars, pricing-style tiles.
- ❌ Glossy or decorative gradients, glassmorphism, `backdrop-filter` blur panels.
- ❌ Neon / cyberpunk colour (including the generator's indigo + "play green").
- ❌ Cartoon fantasy, faux-parchment scroll frames, dragons-and-swords clip art, Comic-Sans-medieval
  fonts (Papyrus, MedievalSharp, Almendra-style novelty faces).
- ❌ Blackletter for body, labels, dates, buttons or anything under 28px.
- ❌ Warm cream/brown dominance: cream text, brown grounds, bronze/sepia rules.
- ❌ Renaissance-fair palette: parchment, burgundy, gold, tavern browns.
- ❌ Coloured glow halos (box- or text-shadow blur in ember/lichen/neon)
- ❌ Rounded pills, soft drop shadows, `translateY(-2px)` hover lifts.
- ❌ Floaty motion: slow fades > 300ms, parallax, drifting smoke, scroll-jacking.
- ❌ moss-500 or ash-500 as text; bark-400 as small text.
- ❌ Bark + ember above 5% of any viewport; ember used more than 1–2 times per page.
- ❌ Emoji as icons; mixed icon sets.
- ❌ Placeholder-only form labels; invisible focus states.
- ❌ Autoplay audio or video with sound.
- ❌ Raw hex in components; inventing tokens not listed here.

## 10. Pre-delivery checklist

- [ ] Only semantic tokens in components; no raw hex, no Tailwind default colours (they're disabled).
- [ ] All text pairs are in the contrast matrix and marked AA for their size.
- [ ] Tap targets ≥ 44×44px with ≥ 8px separation.
- [ ] Visible `:focus-visible` ring (lichen-300, 2px, 2px offset) on every interactive element.
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
