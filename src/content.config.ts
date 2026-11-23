import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const shows = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/shows" }),
  schema: z.object({
    date: z.coerce.date(),
    city: z.string().min(1),
    venue: z.string().min(1),
    country: z.string().min(1),
    ticketUrl: z.url().optional(),
    soldOut: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/gallery" }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      // Alt text is mandatory for every image.
      alt: z.string().min(1, "alt text is required"),
      caption: z.string().optional(),
      date: z.coerce.date().optional(),
    }),
});

const merch = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/merch" }),
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      price: z.number().nonnegative(),
      currency: z.string().length(3, "use an ISO 4217 code, e.g. EUR"),
      image: image(),
      // Alt text is mandatory for every image.
      alt: z.string().min(1, "alt text is required"),
      buyUrl: z.url(),
      available: z.boolean(),
    }),
});

const videos = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/videos" }),
  schema: z.object({
    youtubeId: z.string().regex(/^[\w-]{11}$/, "must be an 11-character YouTube video ID"),
    title: z.string().min(1),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { shows, gallery, merch, videos };
