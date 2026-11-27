import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Navbar from "../Navbar";
import Blocks from "../hub/Blocks";
import { AnswerBox, SectionCard } from "../hub/parts";
import { INFO_ICONS } from "../hub/icons";
import { LOCALE_INFO, isLocale, localePath, type Locale } from "../../i18n/config";
import { getInfo, type InfoPageData } from "../../i18n/content";
import { fill } from "../../i18n/format";
import { getMessages } from "../../i18n/messages";
import type { InfoKey } from "../../lib/hubs";
import { alternates } from "../../lib/seo";
import { CONTACT_EMAIL, SITE_URL } from "../../lib/site";
import ContactForm from "./ContactForm";

/** "Last updated" date in the page's language, e.g. November 25, 2026 / 25. November 2026. */
function formatDate(locale: Locale, isoDate: string): string {
  return new Intl.DateTimeFormat(LOCALE_INFO[locale].intl, { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${isoDate}T00:00:00Z`),
  );
}

/** Layout for About Us and Privacy Policy: heading, intro, last-updated date and text sections. */
function InfoPage({ locale, page }: { locale: Locale; page: InfoPageData }) {
  const { ui, content } = getMessages(locale);
  const Icon = INFO_ICONS[page.key];

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
                  <Link href={localePath(locale, "/")} className="text-ink-muted transition-colors hover:text-brand-700">
                    {ui.common.pageNames.home}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3 text-ink-muted rtl:-scale-x-100" />
                </li>
                <li aria-current="page" className="flex items-center gap-1.5 truncate text-brand-700">
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {ui.nav.info[page.key]}
                </li>
              </ol>
            </nav>

            <h1
              id="page-title"
              className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold tracking-tight text-balance text-ink sm:text-5xl"
            >
              {page.h1}
            </h1>
            <AnswerBox>{page.intro}</AnswerBox>
            {page.key !== "contact" && (
              <p className="mt-4 text-xs text-ink-muted">
                <time dateTime={page.updated}>{fill(content.page.lastUpdated, { date: formatDate(locale, page.updated) })}</time>
              </p>
            )}
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-5 px-4 pb-16 sm:px-6 lg:px-8">
          {page.key === "contact" && (
            <>
              <SectionCard id="send-us-a-message" title={ui.contact.formTitle}>
                <div className="mt-5">
                  <ContactForm address={CONTACT_EMAIL} />
                </div>
              </SectionCard>
              <SectionCard id="email-us" title={ui.contact.directTitle}>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {ui.contact.directText}{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr" className="font-semibold text-brand-700 hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </SectionCard>
            </>
          )}
          {page.sections.map((s) => (
            <SectionCard key={s.id} id={s.id} title={s.heading}>
              {s.body && <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">{s.body}</p>}
              {s.blocks && <Blocks blocks={s.blocks} />}
            </SectionCard>
          ))}
        </div>
      </main>
    </>
  );
}

type Props = { params: Promise<{ lang: string }> };

/** Metadata and page component for one information page, in whichever language the URL asks for. */
export function infoRoute(key: InfoKey) {
  async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    if (!isLocale(lang)) return {};
    const page = getInfo(lang, key);
    return {
      title: page.h1,
      description: page.description,
      alternates: alternates(lang, page.path),
      openGraph: {
        type: "website",
        title: page.h1,
        description: page.description,
        locale: LOCALE_INFO[lang].og,
        ...(SITE_URL ? { url: localePath(lang, page.path) } : {}),
      },
      twitter: { card: "summary", title: page.h1, description: page.description },
    };
  }

  async function Page({ params }: Props) {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();
    return <InfoPage locale={lang} page={getInfo(lang, key)} />;
  }

  return { generateMetadata, Page };
}
