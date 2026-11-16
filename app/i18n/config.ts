/**
 * Supported languages. English is the default and lives at the site root (/, /inches-to-pixels-chart/);
 * every other language gets a prefix (/es/, /es/inches-to-pixels-chart/). Order matches the language menu.
 */
export const LOCALES = ["en", "es", "ru", "fr", "de", "it", "pt", "id", "ar", "sv"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

interface LocaleInfo {
  /** Name in its own language, shown in the menu and footer. */
  name: string;
  /** English name, used for screen reader hints. */
  english: string;
  dir: "ltr" | "rtl";
  /** Locale used for number formatting. Arabic keeps Western digits so formulas and tables stay readable. */
  intl: string;
  /** Open Graph locale. */
  og: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: { name: "English", english: "English", dir: "ltr", intl: "en-US", og: "en_US" },
  es: { name: "Español", english: "Spanish", dir: "ltr", intl: "es-ES", og: "es_ES" },
  ru: { name: "Русский", english: "Russian", dir: "ltr", intl: "ru-RU", og: "ru_RU" },
  fr: { name: "Français", english: "French", dir: "ltr", intl: "fr-FR", og: "fr_FR" },
  de: { name: "Deutsch", english: "German", dir: "ltr", intl: "de-DE", og: "de_DE" },
  it: { name: "Italiano", english: "Italian", dir: "ltr", intl: "it-IT", og: "it_IT" },
  pt: { name: "Português", english: "Portuguese", dir: "ltr", intl: "pt-PT", og: "pt_PT" },
  id: { name: "Bahasa Indonesia", english: "Indonesian", dir: "ltr", intl: "id-ID", og: "id_ID" },
  ar: { name: "العربية", english: "Arabic", dir: "rtl", intl: "ar-u-nu-latn", og: "ar_AR" },
  sv: { name: "Svenska", english: "Swedish", dir: "ltr", intl: "sv-SE", og: "sv_SE" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Site path for a page in a language. `path` is the English path, e.g. "/inches-to-pixels-chart/". */
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}/` : `/${locale}${path}`;
}

/**
 * Splits a path into its language and the English path, e.g. "/es/x/" → { es, "/x/" }.
 * Also accepts the internal "/en/x/" form that English pages are served from.
 */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const first = pathname.split("/")[1] ?? "";
  if (isLocale(first)) {
    const rest = pathname.slice(first.length + 1);
    return { locale: first, path: rest === "" ? "/" : rest };
  }
  return { locale: DEFAULT_LOCALE, path: pathname || "/" };
}
