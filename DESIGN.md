---
name: Ritus Ferae
description: Dark medieval folk from Mexico City. A ritual in a night forest, under a black sky.
colors:
  void: "#000000"
  bone: "#e6e6e6"
  ash-500: "#4a4a4a"
  pine-950: "#0f1712"
  pine-900: "#17251c"
  pine-800: "#21362a"
  moss-500: "#5f7348"
  moss-400: "#7d9160"
  lichen-300: "#a9b98a"
  ash-300: "#a3a19b"
  bark-400: "#8c7356"
  ember: "#c97a34"
typography:
  display:
    fontFamily: "Pirata One, Cinzel Variable, Georgia, serif"
    fontSize: "clamp(3.5rem, 2.25rem + 7vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.95
  headline:
    fontFamily: "Pirata One, Cinzel Variable, Georgia, serif"
    fontSize: "clamp(2rem, 1.6rem + 2vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "Cinzel Variable, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.3rem + 1vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
  body:
    fontFamily: "EB Garamond Variable, Garamond, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "onum, pnum"
  label:
    fontFamily: "Cinzel Variable, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.14em"
rounded:
  none: "0"
  sm: "2px"
  md: "4px"
spacing:
  base: "0.25rem"
  gutter: "clamp(1rem, 0.6rem + 2vw, 2rem)"
  stack: "1.5rem"
  section: "clamp(4rem, 3rem + 5vw, 8rem)"
  tap: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.lichen-300}"
    textColor: "{colors.void}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 1.5rem"
    height: "{spacing.tap}"
  button-primary-hover:
    backgroundColor: "{colors.moss-400}"
    textColor: "{colors.void}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 1.5rem"
    height: "{spacing.tap}"
  button-ghost-hover:
    backgroundColor: "{colors.pine-800}"
    textColor: "{colors.bone}"
  link:
    textColor: "{colors.lichen-300}"
  badge-sold-out:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.void}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.375rem 0.75rem"
  card:
    backgroundColor: "{colors.pine-900}"
    textColor: "{colors.bone}"
    rounded: "{rounded.md}"
  card-hover:
    backgroundColor: "{colors.pine-800}"
  input:
    backgroundColor: "{colors.pine-900}"
    textColor: "{colors.bone}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0 0.75rem"
    height: "{spacing.tap}"
---

# Design System: Ritus Ferae

> **Source of truth.** This file and `src/styles/global.css` (Tailwind 4 `@theme`) are normative. Tokens live in
> the frontmatter above and in `global.css`, and the two must match. `design-system/ritus-ferae/MASTER.md` keeps
> the full contrast matrix, the generator history and the pre-delivery checklist; `preview.html` beside it
> renders this system. Components use semantic tokens (`bg-bg`, `text-fg`, `bg-accent` …), never primitives
> or raw hex. Tailwind's default palette, fonts, radii and shadows are switched off.

## Overview

**Creative North Star: "The Night Grove Rite"**

A ritual held in a clearing under a black sky. The band's monochrome logo stands at the centre: void black,
cool bone white, antler grey. The forest is the dark around it: pine at the edges, moss on the ground, and
lichen as the pale trail that marks the way in. Warm colour stays rare. Bark and ember read as a single torch
among the trees, never as the ground. The site should feel like that clearing just before the first drum hit.

The system is dark, spacious and flat. Hard, cut edges and a faint engraving grain keep the woodcut character
of the band's artwork. Ceremony comes from scale, rhythm and restraint, not from added ornament, and
photography, the logo and the band's own engravings carry the identity; the system frames them and never
competes. Darkness must not cost speed or legibility on a phone arriving from Instagram on 4G: every texture
is CSS or inline SVG, and every text pair passes WCAG 2.1 AA.

Rejected outright: warm cream-and-brown dominance and the Renaissance-fair palette (parchment, burgundy, gold,
tavern browns), generic SaaS layouts, glossy gradients, neon or cyberpunk colour, and cartoon fantasy.

**Key Characteristics:**

- Monochrome logo anchors on black; forest greens as atmosphere.
- One action colour (pale lichen); warm colour rationed like firelight.
- Square to near-square edges (0–4px), no shadows, depth from tonal steps.
- Blackletter for display only; carved roman capitals for structure; Garamond for reading.
- Percussive motion: a short hit, then stillness.

## Colors

A night-forest palette: black and cool bone from the logo, a ladder of pine greens for surfaces, moss and
lichen for structure and action, and two warm accents held in reserve.

### Primary

- **Pale Lichen** (lichen-300): the only action colour. Primary button fill, links, and the focus ring
  everywhere. On void it reads at 9.99:1; void text on it reads at 9.99:1.

### Secondary

- **Moss** (moss-400): hover state of the primary button, icons, and large decorative headings. Safe as text
  on void, pine-950 and pine-900; large text only on pine-800 (3.75:1).
- **Shadow Moss** (moss-500): borders and dividers, including any border that delimits a control (4.03:1 on
  void, 3.06:1 on pine-900). Never a text colour.

### Tertiary

- **Torch Ember** (ember): the "Agotado / Sold out" badge (void text on it, 6.32:1) and form error text.
  One or two uses per page at most.
- **Wet Bark** (bark-400): wood details and large text only, used sparingly.

### Neutral

- **Void Sky** (void): page background. Logo anchor.
- **Bone White** (bone): primary text. A cool white, never cream. Logo anchor.
- **Antler Grey** (ash-500): line ornaments echoing the logo's antlers. Decorative only (2.37:1); never text.
  Logo anchor.
- **Ash** (ash-300): secondary text, dates, venues, metadata (8.13:1 on void, 5.00:1 on pine-800).
- **Deep Pine** (pine-950): alternate section background; the top of the canopy gradient.
- **Night Pine** (pine-900): cards, footer, input fields.
- **Wet Pine** (pine-800): card hover, ghost-button hover, text selection. As a border it reaches only 1.63:1
  on void, so it is decorative and never the only edge of a control.

### Named Rules

**The Monochrome Anchor Rule.** Void, bone and antler grey come from the logo and are used exactly as given.
Green is atmosphere around the logo, never a replacement for it.

**The Lichen Path Rule.** Lichen marks where to go: action, link and focus. At most one lichen-filled button
per viewport, and lichen is never spent on decoration.

**The Torch Rule.** Bark and ember together cover less than 5% of any viewport; ember appears once or twice
per page. If the page starts to look warm, it is wrong.

**The Never-Text Rule.** Shadow Moss and Antler Grey are never text colours. Wet Bark is never small text.

**The Seen-Edge Rule.** A border that must be seen (inputs, toggles, frames around controls) uses Shadow Moss on
void, pine-950 or pine-900. On a pine-800 surface, use lichen or bone instead. Colour never carries meaning
alone: "sold out" is written, and errors are written.

## Typography

**Display Font:** Pirata One (with Cinzel, then Georgia)
**Body Font:** EB Garamond, variable with italic (with Garamond, then Georgia)
**Label Font:** Cinzel, variable (with Georgia)

All three are self-hosted through Fontsource with `font-display: swap`; no font CDN.

**Character:** A condensed, blackletter-derived display face that says "old and ritual" at a glance, set against
inscription-like roman capitals for anything people scan (dates, cities, buttons) and a sturdy Garamond for
reading. Gothic where it's felt, legible where it's read.

### Hierarchy

- **Display** (Pirata One 400, 56px → 128px fluid, line-height 0.95): the single hero statement.
- **Headline** (Pirata One 400, 32px → 48px fluid, line-height 1.1): `h2` section titles. `h1` uses the same
  face at 44px → 80px, line-height 1.
- **Title** (Cinzel 600, 24px → 30px fluid, line-height 1.2, +0.04em): `h3`/`h4`, show city names.
- **Body** (EB Garamond 400, 17px, line-height 1.6, old-style proportional figures): all running text; lead
  paragraphs at 20px. Measure 60–72ch. 15px is the floor, for captions only.
- **Label** (Cinzel 600, 15px, +0.14em, uppercase): navigation, buttons, dates, form labels.

### Named Rules

**The Blackletter Threshold Rule.** Pirata One is for `h1`, `h2` and the hero only, and never below 28px. Body
text, labels, dates and buttons are never set in blackletter.

**The Logo Is Not a Font Rule.** The wordmark is always the band's supplied artwork, never re-set in type.

## Layout

Mobile-first and spacious (density 3 of 10). Most visitors arrive on a phone, so layouts are designed at
360–390px first and widen at Tailwind's default breakpoints (640, 768, 1024, 1280, 1536px).

- **Gutter** (16px → 32px fluid): page side padding at every width.
- **Stack** (24px): the gap between blocks inside a section.
- **Section** (64px → 128px fluid): vertical space between sections.
- **Tap** (44px): minimum height and width of every interactive target, with at least 8px between targets.
- Components use Tailwind's 4px base step for internal spacing.
- Text runs at 60–72ch. Leave more space above a heading than below it. No horizontal scrolling at any width.

Sections may alternate between Void Sky and Deep Pine backgrounds. The optional canopy texture (a static
radial from Deep Pine at the top, fading to void) may sit behind a section like light through the trees.

## Elevation & Depth

The system is flat. There are no drop shadows, no glows and no offset shadows. Depth comes from tonal steps:
Void Sky → Deep Pine → Night Pine → Wet Pine, with Shadow Moss hairlines where an edge needs to be seen.

### Shadow Vocabulary

- **Inset frame** (`box-shadow: inset 0 0 0 1px` Shadow Moss): a hairline frame around images and video
  posters that does not change layout.
- **Sunk** (`box-shadow: inset 0 2px 6px rgb(0 0 0 / 0.6)`): input fields and video facades, which read as
  pressed into the surface rather than raised from it.

### Textures

Applied on a pseudo-element, never under text at an opacity that lowers contrast.

- **Grain:** neutral inline-SVG fractal noise at 6% opacity, the engraving and print texture.
- **Hatch:** fine −45° bone lines at 4% opacity, a 5px pitch, for woodcut shading on empty panels.
- **Canopy:** the static Deep Pine → void radial described under Layout. Never animated.

### Named Rules

**The Flat Grove Rule.** Nothing floats. If an element needs to stand out, give it a lighter pine surface or a
Shadow Moss edge, never a shadow.

## Shapes

Cut and near-square. Images and sections have square corners (0); buttons, inputs and badges get 2px; cards
get 4px, the largest radius in the system. Nothing is pill-shaped. The one exception is purely illustrative
circular art, such as the drum demo in the preview. Edges are 1px hairlines: Shadow Moss for structure,
bone for the ghost button.

Proposed but not built: antler and branch line ornaments in Antler Grey, traced from the band's logo artwork
once it is in the repository, never drawn from scratch.

## Components

Cut and certain: square edges, clear labels in carved capitals, a short hard response when pressed, and no
softness or flourish. These are specified and rendered in `design-system/ritus-ferae/preview.html`; section
components in `src/components/` don't use them yet.

### Buttons

- **Shape:** near-square (2px), at least 44px tall, 24px horizontal padding, uppercase Cinzel label.
- **Primary:** Pale Lichen fill, Void Sky label. One per viewport.
- **Hover / Focus:** the fill steps down to Moss over 160ms. Focus shows a 2px Pale Lichen outline with a 2px
  offset. When pressed, the button scales to 0.97 for 90ms.
- **Ghost:** transparent with a 1px Bone White border and label; hover fills it with Wet Pine.

### Links

- Pale Lichen text, underlined on hover; the same focus ring as buttons. External links open in a new tab.

### Badges

- **Sold out:** a Torch Ember fill with a Void Sky label in Cinzel capitals, 2px radius, 6px × 12px padding.
  The word ("Agotado" / "Sold out") always carries the meaning, not the colour alone.

### Cards / Containers

- **Corner Style:** gently cut (4px).
- **Background:** Night Pine at rest; Wet Pine on hover.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** optional 1px Shadow Moss when the card must read as a distinct object on Void Sky.
- **Internal Padding:** 24px (the stack step).

### Inputs / Fields

- **Style:** Night Pine fill, sunk inset shadow, a 1px Shadow Moss bottom border, 2px top corners, 44px tall,
  body-size text.
- **Label:** always visible above the field in Cinzel capitals; never a placeholder-only label.
- **Focus:** a 2px Pale Lichen outline with a 2px offset.
- **Error:** Torch Ember text directly beneath the field, naming the problem and how to fix it.

### Navigation

- Cinzel capitals in Bone White; the active item and hover use Pale Lichen. Every item is at least 44px tall.
  Booking and the next show stay reachable in one tap on mobile.

### Show Row (signature)

- A framed Cinzel date block (large day, small-caps month in Ash, 1px Shadow Moss frame), the city as a Title,
  the venue in Ash, and the ticket action. The next show may carry a small Pale Lichen marker that beats once
  every 1.6s. A sold-out row dims to Ash, shows the sold-out badge, and has no ticket button at all, rather
  than a disabled one.

### Motion

Percussive: a fast hit, a short decay, then stillness, like a davul. Motion uses three durations: 90ms for
presses, 160ms for hover and focus, and 260ms for anything entering. Each has a named easing: strike (hits
hard, settles fast), snap (exits accelerate away) and thud (a small overshoot on arrival). Exits are faster
than entries, and only transform and opacity animate. There is no parallax, no drifting smoke, and no looping
animation except the next-show beat. Under `prefers-reduced-motion`, all motion collapses to 1ms and one
iteration; state changes still happen.

## Do's and Don'ts

### Do:

- **Do** use semantic tokens in components (`bg-bg`, `bg-surface`, `text-fg`, `text-fg-muted`, `bg-accent`,
  `border-border`, `ring`), never primitives or raw hex.
- **Do** keep every text pair at WCAG AA: 4.5:1 for body text, 3:1 for large text and control edges. The full
  matrix is in `design-system/ritus-ferae/MASTER.md`.
- **Do** spend Pale Lichen only on action, links and focus, with one lichen-filled button per viewport.
- **Do** give every interactive element the 2px Pale Lichen focus ring with a 2px offset.
- **Do** keep tap targets at least 44 × 44px with at least 8px between them.
- **Do** let real photography, the logo and the band's engravings lead; the system only frames them.
- **Do** check every layout at 360, 768, 1024 and 1440px in both Spanish and English (Spanish runs about
  15–25% longer).

### Don't:

- **Don't** let warm cream or brown dominate, and don't use a Renaissance-fair palette (parchment, burgundy,
  gold, tavern browns).
- **Don't** let bark and ember together exceed 5% of a viewport, or use ember more than twice on a page.
- **Don't** use Shadow Moss or Antler Grey as text, or Wet Bark as small text.
- **Don't** add shadows of any kind (drop, glow, coloured halo or hard offset) or `translateY` hover lifts.
- **Don't** use pill shapes or radii above 4px.
- **Don't** set blackletter below 28px or anywhere outside `h1`, `h2` and the hero.
- **Don't** use glossy gradients, glassmorphism, backdrop blur, neon or cyberpunk colour, or cartoon fantasy
  (faux-parchment scrolls, Papyrus-style faces).
- **Don't** use floaty motion: fades longer than 300ms, parallax, animated smoke or scroll-jacking.
- **Don't** use emoji as icons or mix icon sets; use one stroke SVG set with `currentColor`.
- **Don't** use placeholder-only form labels, hide focus states, or autoplay anything with sound.
