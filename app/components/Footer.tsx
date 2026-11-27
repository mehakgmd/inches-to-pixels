import Link from "next/link";
import { ArrowRight, ArrowUp, Map } from "lucide-react";
import { localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { INFO_KEYS, INFO_PATH, PAGE_KEYS, PAGE_PATH, SITEMAP_PATH } from "../lib/hubs";
import { INFO_ICONS } from "./hub/icons";
import { PAGE_ICONS } from "./hub/parts";
import { LanguageLinks } from "./LanguageMenu";

const headingClass = "text-[11px] font-semibold tracking-widest text-ink-muted uppercase";
const linkClass = "text-sm text-ink-soft transition-colors hover:text-brand-700";

export default function Footer({ locale }: { locale: Locale }) {
  const { ui, content } = getMessages(locale);
  const t = content.footer;

  return (
    <footer className="relative mt-8 border-t border-brand-400/20 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href={localePath(locale, "/")} className="inline-flex items-center gap-3" aria-label={ui.nav.homeAria}>
              <span
                aria-hidden="true"
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-400/40 bg-gradient-to-br from-brand-50 to-white shadow-[0_0_15px_rgba(99,102,241,0.2)]"
              >
                <span className="font-display text-lg font-bold text-brand-700">IN</span>
                <span className="absolute -end-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-[8px] font-extrabold text-on-brand">
                  PX
                </span>
              </span>
              {/* Brand name stays in English in every language */}
              <span dir="ltr" lang="en" className="font-display text-lg font-bold tracking-wider text-ink">
                INCHES TO <span className="brand-text-gradient">PIXEL</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">{t.blurb}</p>
            <Link
              href={`${localePath(locale, "/")}#converter`}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-4 py-2.5 text-xs font-bold tracking-wider text-on-brand uppercase shadow-md transition-shadow hover:shadow-[0_8px_24px_rgba(99,102,241,0.35)]"
            >
              {t.openConverter}
              <ArrowRight className="h-3.5 w-3.5 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
          </div>

          {/* Pages */}
          <nav aria-label={t.pages} className="lg:col-span-3">
            <p className={headingClass}>{t.pages}</p>
            <ul className="mt-4 space-y-2.5">
              {PAGE_KEYS.map((key) => {
                const Icon = PAGE_ICONS[key];
                return (
                  <li key={key}>
                    <Link href={localePath(locale, PAGE_PATH[key])} className={`inline-flex items-center gap-2 ${linkClass}`}>
                      <Icon className="h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden="true" />
                      {ui.common.pageNames[key]}
                    </Link>
                  </li>
                );
              })}
              {INFO_KEYS.map((key) => {
                const Icon = INFO_ICONS[key];
                return (
                  <li key={key}>
                    <Link href={localePath(locale, INFO_PATH[key])} className={`inline-flex items-center gap-2 ${linkClass}`}>
                      <Icon className="h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden="true" />
                      {ui.nav.info[key]}
                    </Link>
                  </li>
                );
              })}
              {/* Sitemap is linked from the footer only */}
              <li>
                <Link href={localePath(locale, SITEMAP_PATH)} className={`inline-flex items-center gap-2 ${linkClass}`}>
                  <Map className="h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden="true" />
                  {content.sitemap.label}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Languages: each opens the current page in that language */}
          <div className="lg:col-span-4">
            <LanguageLinks title={ui.footer.languages} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p dir="auto" className="text-center text-xs text-ink-muted sm:text-start">
            {t.copyright}
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-xl border border-brand-400/40 bg-surface-muted px-4 py-2 text-xs font-bold tracking-wider text-brand-700 transition-colors hover:border-brand-400 hover:bg-brand-400/15"
          >
            {t.backToTop}
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
