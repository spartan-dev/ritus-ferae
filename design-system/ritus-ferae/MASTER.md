# Ritus Ferae — Design System (supplement)

> **Canonical source:** [`DESIGN.md`](../../DESIGN.md) at the repo root, together with `src/styles/global.css`
> (Tailwind 4 `@theme`). Read DESIGN.md first; if anything here disagrees with it, DESIGN.md wins.
>
> This file keeps only what DESIGN.md doesn't: the semantic-alias table, the full contrast matrix, the
> pre-delivery checklist and the generator history. `preview.html` in this folder renders the system.
>
> **Page overrides:** when building a page or section, check `design-system/ritus-ferae/pages/<name>.md`
> first; its rules override DESIGN.md for that page only.

All ratios are WCAG 2.1 relative-luminance contrast. AA = 4.5:1 normal text, 3:1 large text (≥ 24px, or
≥ 18.66px bold) and non-text UI.

## Semantic aliases (use these in components)

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

## Contrast matrix

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

## Pre-delivery checklist

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
