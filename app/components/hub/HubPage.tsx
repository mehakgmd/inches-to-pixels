import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "../Navbar";
import FaqSection from "../FaqSection";
import HubCalculator from "./HubCalculator";
import Blocks from "./Blocks";
import { AnswerBox, DataTable, PAGE_ICONS, RelatedLinks, SectionCard } from "./parts";
import { localePath, type Locale } from "../../i18n/config";
import { getMessages } from "../../i18n/messages";
import type { Hub } from "../../lib/hubs";
import { faqJsonLd, serializeJsonLd } from "../../lib/seo";

/** Shared layout for every topic page: heading, direct answer, calculator, sections, FAQ, related links. */
export default function HubPage({ locale, hub }: { locale: Locale; hub: Hub }) {
  const Icon = PAGE_ICONS[hub.key];
  const { ui, content } = getMessages(locale);
  const t = content.page;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd(hub.faq)) }} />
      <a
        href="#calculator"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:rounded-lg focus:bg-brand-400 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink"
      >
        {t.skipToCalculator}
      </a>
      <Navbar />

      <main>
        {/* Heading, answer and calculator */}
        <section aria-labelledby="page-title" className="relative pt-8 pb-10 sm:pt-12 sm:pb-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-aurora opacity-70" />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <nav aria-label={t.breadcrumb}>
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
                  {hub.nav}
                </li>
              </ol>
            </nav>

            <h1
              id="page-title"
              className="mx-auto mt-5 max-w-4xl font-display text-3xl font-extrabold tracking-tight text-balance text-ink sm:text-5xl"
            >
              {hub.h1}
            </h1>
            <AnswerBox>{hub.answer}</AnswerBox>
            {hub.introNotes?.map((note) => (
              <p key={note} className="mx-auto mt-3 max-w-2xl text-start text-sm leading-relaxed text-pretty text-ink-soft">
                {note}
              </p>
            ))}

            <div className="mt-7">
              <HubCalculator config={hub.calc} />
            </div>
          </div>
        </section>

        {/* Topic sections */}
        <div className="mx-auto max-w-5xl space-y-5 px-4 sm:px-6 lg:px-8">
          {hub.sections.map((s) => (
            <SectionCard key={s.id} id={s.id} title={s.heading}>
              {s.body && <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">{s.body}</p>}
              {s.table && <DataTable table={s.table} caption={s.heading} />}
              {s.formula && (
                <pre dir="ltr" className="mt-3 overflow-x-auto rounded-xl border border-line bg-surface-muted p-3 text-xs text-brand-700 tabular-nums">
                  <code>{s.formula}</code>
                </pre>
              )}
              {s.blocks && <Blocks blocks={s.blocks} />}
            </SectionCard>
          ))}
        </div>

        <FaqSection items={hub.faq} description={t.hubFaqDescription} />

        {/* Internal links to the homepage and sibling pages (can be turned off per page) */}
        {hub.showRelated !== false && (
          <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
            <SectionCard id="related" title={t.related}>
              <RelatedLinks locale={locale} current={hub.key} />
            </SectionCard>
          </div>
        )}
      </main>
    </>
  );
}
