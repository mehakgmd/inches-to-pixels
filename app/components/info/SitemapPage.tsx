import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Globe, Map } from "lucide-react";
import Navbar from "../Navbar";
import { AnswerBox, SectionCard } from "../hub/parts";
import { INFO_ICONS, PAGE_ICONS } from "../hub/icons";
import { LOCALES, LOCALE_INFO, isLocale, localePath, type Locale } from "../../i18n/config";
import { getMessages } from "../../i18n/messages";
import { INFO_KEYS, INFO_PATH, PAGE_KEYS, PAGE_PATH, SITEMAP_PATH } from "../../lib/hubs";
import { alternates } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";

const itemClass =
  "group flex items-start gap-3 rounded-2xl border border-line bg-white/80 p-4 transition-[border-color,box-shadow] hover:border-brand-400/60 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)]";
const iconBox = "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand-400/30 bg-brand-50 text-brand-700";

/** Human-readable sitemap: a link to every page, the information pages and the other languages. */
function SitemapPage({ locale }: { locale: Locale }) {
  const { ui, content } = getMessages(locale);
  const t = content.sitemap;
  const href = (path: string) => localePath(locale, path);

  return (
    <>
      <Navbar />
      <main>
        <section aria-labelledby="page-title" className="relative pt-8 pb-10 sm:pt-12 sm:pb-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-aurora opacity-70" />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <nav aria-label={content.page.breadcrumb}>
              <ol className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-brand-400/35 bg-white/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase shadow-sm backdrop-blur">
                <li>
                  <Link href={href("/")} className="text-ink-muted transition-colors hover:text-brand-700">
                    {ui.common.pageNames.home}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3 text-ink-muted rtl:-scale-x-100" />
                </li>
                <li aria-current="page" className="flex items-center gap-1.5 truncate text-brand-700">
                  <Map className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {t.label}
                </li>
              </ol>
            </nav>
            <h1
              id="page-title"
              className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold tracking-tight text-balance text-ink sm:text-5xl"
            >
              {t.h1}
            </h1>
            <AnswerBox>{t.intro}</AnswerBox>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-5 px-4 pb-16 sm:px-6 lg:px-8">
          {/* Converters and guides: one link per page */}
          <SectionCard id="converters-and-guides" title={t.tools}>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {PAGE_KEYS.map((key) => {
                const Icon = PAGE_ICONS[key];
                return (
                  <li key={key}>
                    <Link href={href(PAGE_PATH[key])} className={itemClass}>
                      <span className={iconBox}>
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="pt-2 text-sm font-bold text-brand-700">{ui.common.pageNames[key]}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SectionCard>

          {/* About Us, Contact Us, Privacy Policy */}
          <SectionCard id="about-this-website" title={t.info}>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {INFO_KEYS.map((key) => {
                const Icon = INFO_ICONS[key];
                return (
                  <li key={key}>
                    <Link href={href(INFO_PATH[key])} className={itemClass}>
                      <span className={iconBox}>
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="pt-2 text-sm font-bold text-brand-700">{ui.nav.info[key]}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SectionCard>

          {/* The same sitemap in every other language */}
          <SectionCard id="other-languages" title={t.languages}>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {LOCALES.filter((l) => l !== locale).map((l) => (
                <li key={l}>
                  <Link
                    href={localePath(l, SITEMAP_PATH)}
                    hrefLang={l}
                    lang={l}
                    className="flex items-center gap-2 rounded-xl border border-line bg-surface-muted px-3 py-2.5 text-sm text-ink-soft transition-colors hover:border-brand-400/50 hover:text-brand-700"
                  >
                    <Globe className="h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden="true" />
                    {LOCALE_INFO[l].name}
                  </Link>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </main>
    </>
  );
}

type Props = { params: Promise<{ lang: string }> };

export async function generateSitemapMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getMessages(lang).content.sitemap;
  return {
    title: t.h1,
    description: t.description,
    alternates: alternates(lang, SITEMAP_PATH),
    openGraph: {
      type: "website",
      title: t.h1,
      description: t.description,
      locale: LOCALE_INFO[lang].og,
      ...(SITE_URL ? { url: localePath(lang, SITEMAP_PATH) } : {}),
    },
  };
}

export async function SitemapRoute({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <SitemapPage locale={lang} />;
}
