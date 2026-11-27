import type { MetadataRoute } from "next";
import { LOCALES, localePath } from "./i18n/config";
import { INFO_KEYS, INFO_PATH, INFO_UPDATED, PAGE_KEYS, PAGE_PATH, SITEMAP_PATH } from "./lib/hubs";
import { SITE_URL } from "./lib/site";

/** Live domain for absolute URLs (app/lib/site.ts). */
const BASE = SITE_URL;

/**
 * /sitemap.xml for search engines: every page in every language, each listing its other-language
 * versions (hreflang) so search engines can show visitors the right one.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; updated?: string; priority: number }[] = [
    ...PAGE_KEYS.map((k) => ({ path: PAGE_PATH[k], priority: k === "home" ? 1 : 0.8 })),
    ...INFO_KEYS.map((k) => ({ path: INFO_PATH[k], updated: INFO_UPDATED[k], priority: 0.3 })),
    { path: SITEMAP_PATH, priority: 0.2 },
  ];

  return pages.flatMap(({ path, updated, priority }) => {
    const languages: Record<string, string> = Object.fromEntries(
      LOCALES.map((l) => [l, `${BASE}${localePath(l, path)}`]),
    );
    languages["x-default"] = `${BASE}${path}`;
    return LOCALES.map((locale) => ({
      url: `${BASE}${localePath(locale, path)}`,
      ...(updated ? { lastModified: updated } : {}),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
