# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

In priority order:

1. **Fans and new listeners.** Most arrive on a phone from Instagram or YouTube links. They want to feel who the band is, watch videos, and find the next show.
2. **Promoters and festival bookers.** They are judging whether to book the band. They need the bio, photos and videos, and a fast way to make contact.
3. **Merch buyers.** They want to see products and get to the purchase with no friction.

## Product Purpose

This is the official website of Ritus Ferae, a dark medieval folk band from Mexico City. It has three jobs: carry the band's identity to people arriving from social media, turn interest into attendance and bookings, and send buyers to the merch shop.

Success means:

- A fan on a phone finds the next show in under 10 seconds.
- A booker reaches the contact form in one tap from anywhere on the page.
- The site feels like the band's live show, not like a template.

## Positioning

Ritus Ferae is a dark medieval / pagan folk band from Mexico City. The lineup is German medieval bagpipe (Mittelalter-Dudelsack), davul and surdos. The sound is ritualistic, percussive and primal: drums first, bagpipe on top. Two things set them apart from their European peers in the genre: they come from Mexico City, and the sound is driven by percussion.

## Operating Context

- Most traffic is mobile and arrives from social links (Instagram bio, YouTube descriptions), often on 4G.
- Bookers usually evaluate in one sitting: bio, then photos and videos, then contact.
- Editors change content through Astro content collections: `shows`, `gallery`, `merch`, `videos` in `src/content/`, plus socials in `src/data/socials.ts`.
- The site has two languages: Spanish is the default at `/`, English is at `/en/`.

## Capabilities and Constraints

What the site must do:

1. Convey the band's identity (sound and look) within the first 5 seconds.
2. List upcoming shows with date, city, venue, ticket link and sold-out state.
3. Embed YouTube videos and link every social channel: Instagram, YouTube, Spotify, Facebook, TikTok, Bandcamp.
4. Show a gallery of live and promo photos.
5. Show merch, with each item linking out to an **external shop** for purchase. There is no on-site checkout.
6. Provide a contact/booking form handled by **Netlify Forms**, which means the site deploys to Netlify.
7. Work fully in Spanish and English.

Technical constraints:

- **Stack:** Astro + Tailwind CSS 4 + TypeScript strict, static output. No UI libraries and no JS frameworks.
- **Mobile-first.**
- **Performance:** LCP under 2.5 s on mobile 4G. YouTube embeds must load lazily (facade or click-to-load).
- **Motion:** percussive and short, never floaty. Respect `prefers-reduced-motion`.
- **Images:** every image requires alt text, which the collection schemas enforce.

Open decisions:

- Which external merch shop the buy links go to.
- The production domain. `site` in `astro.config.mjs` is still a placeholder.
- Whether the "sound" part of the 5-second identity uses actual audio, and if so how it starts. Browsers block autoplay with sound, so a user gesture would be needed.

## Brand Commitments

- **Name:** Ritus Ferae.
- **Genre:** dark medieval folk / pagan folk.
- **Voice:** solemn, ancestral, direct. Never cheesy, never "Renaissance fair".
- **Identity material named by the band:** fire, smoke, iron, leather, bone, ritual, and woodcut/engraving-style illustration.
- **References:** Heilung, Wardruna, Corvus Corax, Faun (its darker side).
- **Anti-references:** generic SaaS landing pages, glossy gradients, neon cyberpunk, cartoon fantasy, Comic-Sans-medieval clichés.

## Evidence on Hand

The band has the following, but none of it is in the repository yet. It must be supplied, not recreated:

- Logo / wordmark
- Live and promo photography
- Published YouTube videos
- Approved band bio

Everything in the repo today is placeholder: content entries, social URLs, contact email, and the grey images in `src/assets/placeholders/`. Do not invent show dates, venues, press quotes, member names, testimonials, prices or discography.

## Product Principles

1. **The next show is never more than a glance away.** Fans come to find a date; that path beats everything else on mobile.
2. **Booking is one tap from anywhere.** Contact for promoters is always reachable, never buried.
3. **Identity is the content, not decoration.** The first screen should feel like the live ritual, using the band's real images and sound rather than generic atmosphere.
4. **Weight without drag.** Darkness and ceremony must not cost speed, legibility or contrast, especially on phones arriving from social apps.
5. **Both languages are equal.** Every string and every flow works in Spanish and English.

## Accessibility & Inclusion

- WCAG 2.1 AA contrast, including on the dark theme.
- Respect `prefers-reduced-motion`.
- Alt text is required on every image.
- Usable on small mobile screens with one-handed tap targets.
