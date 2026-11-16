import type { Metadata } from "next";
import { LOCALES, LOCALE_INFO, localePath, type Locale } from "../i18n/config";
import type { Hub } from "./hubs";
import { SITE_URL } from "./site";

/**
 * Canonical URL plus one hreflang link per language (and x-default → English), so search engines
 * show each visitor the right language. Only emitted once the live domain (SITE_URL) is known.
 */
export function alternates(locale: Locale, path: string): Metadata["alternates"] | undefined {
  if (!SITE_URL) return undefined;
  const languages: Record<string, string> = Object.fromEntries(LOCALES.map((l) => [l, localePath(l, path)]));
  languages["x-default"] = path;
  return { canonical: localePath(locale, path), languages };
}

/** Metadata for a topic page in a language. */
export function hubMetadata(locale: Locale, hub: Hub): Metadata {
  const title = hub.seoTitle ?? hub.title ?? hub.h1;
  const url = localePath(locale, hub.path);
  return {
    // A full SEO title from the content document is used as is; otherwise the site name is appended.
    title: hub.seoTitle ? { absolute: hub.seoTitle } : title,
    description: hub.description,
    alternates: alternates(locale, hub.path),
    openGraph: {
      type: "website",
      title,
      description: hub.description,
      locale: LOCALE_INFO[locale].og,
      ...(SITE_URL ? { url } : {}),
    },
    twitter: { card: "summary", title, description: hub.description },
  };
}

/** schema.org FAQPage data for a list of questions. */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

/** Serialize JSON-LD safely for a script tag: "<" is escaped so the data cannot close the tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
