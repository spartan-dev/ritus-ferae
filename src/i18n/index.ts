import { en } from "./en";
import { es, type UIStrings } from "./es";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

const strings: Record<Locale, UIStrings> = { es, en };

/** Narrow `Astro.currentLocale` (string | undefined) to a supported locale. */
export function resolveLocale(locale: string | undefined): Locale {
  return (locales as readonly string[]).includes(locale ?? "") ? (locale as Locale) : defaultLocale;
}

export function useTranslations(locale: string | undefined): UIStrings {
  return strings[resolveLocale(locale)];
}

/** BCP 47 tags used for Intl formatting and Open Graph locale. */
export const localeTags: Record<Locale, { intl: string; og: string }> = {
  es: { intl: "es-ES", og: "es_ES" },
  en: { intl: "en-GB", og: "en_GB" },
};

/** Section ids, in page order. Used for anchors and the nav. */
export const sectionIds = ["hero", "about", "shows", "videos", "gallery", "merch", "contact", "footer"] as const;
export type SectionId = (typeof sectionIds)[number];

/**
 * Timezone used for all date formatting, so output doesn't depend on the build machine.
 * Date-only strings (e.g. "2026-06-01") parse as UTC midnight and still render on the same calendar day here.
 */
export const siteTimeZone = "Europe/Madrid";
