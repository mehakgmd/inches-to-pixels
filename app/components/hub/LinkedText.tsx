import { Fragment } from "react";
import Link from "next/link";
import { localePath, type Locale } from "../../i18n/config";
import { INFO_PATH, PAGE_PATH, type InfoKey, type PageKey } from "../../lib/hubs";

const PATHS: Record<string, string> = { ...PAGE_PATH, ...INFO_PATH } satisfies Record<PageKey | InfoKey, string>;

/**
 * Text with internal links written as [words](page), where page is a page key such as "print" or "dpi".
 * Each link opens that page in the current language. Unknown keys are left as plain words.
 */
export default function LinkedText({ text, locale }: { text: string; locale: Locale }) {
  const parts = text.split(/(\[[^\]]+\]\([a-z]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([a-z]+)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        const [, words, key] = m;
        const path = PATHS[key];
        if (!path) return <Fragment key={i}>{words}</Fragment>;
        return (
          <Link
            key={i}
            href={localePath(locale, path)}
            className="font-semibold text-brand-700 underline decoration-brand-400/50 underline-offset-2 transition-colors hover:decoration-brand-700"
          >
            {words}
          </Link>
        );
      })}
    </>
  );
}
