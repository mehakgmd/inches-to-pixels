import type { Locale } from "../../i18n/config";
import { getMessages } from "../../i18n/messages";
import { DataTable, SectionCard, TopicGrid } from "./parts";
import LinkedText from "./LinkedText";

const bodyClass = "mt-2 text-sm leading-relaxed text-ink-soft sm:text-base";

/** A formula or calculation shown on its own line. */
function MathLine({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <p
      className={`mt-3 rounded-xl border border-brand-400/25 bg-brand-50/70 px-4 py-2.5 font-semibold text-brand-700 tabular-nums ${
        large ? "text-base sm:text-lg" : "text-sm"
      }`}
    >
      {children}
    </p>
  );
}

/** Homepage content sections from Content/Home Page Content.docx: method, formula with examples, reference table. */
export default function HomeTopics({ locale }: { locale: Locale }) {
  const { howTo, formula, reference } = getMessages(locale).content.home;
  return (
    <div className="mx-auto max-w-5xl space-y-5 px-4 pb-6 sm:px-6 lg:px-8">
      <SectionCard id="how-to-convert" title={howTo.heading}>
        <ol className="mt-4 space-y-3">
          {howTo.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-xs font-bold text-on-brand"
              >
                {i + 1}
              </span>
              <span className="pt-0.5 text-sm leading-relaxed text-ink-soft sm:text-base">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 rounded-xl border border-line bg-surface-muted px-4 py-3 text-sm leading-relaxed text-ink-soft">
          {howTo.note}
        </p>
      </SectionCard>

      <SectionCard id="formula" title={formula.heading}>
        <MathLine large>{formula.main}</MathLine>
        <p className={bodyClass}>{formula.explain}</p>
        <p className={bodyClass}>{formula.backwardLead}</p>
        <MathLine large>{formula.backward}</MathLine>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {formula.examples.map((ex) => (
            <article key={ex.heading} className="flex flex-col rounded-2xl border border-line bg-white/80 p-4 sm:p-5">
              <h3 className="text-base font-bold text-ink">{ex.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{ex.lead}</p>
              <div className="mt-1">
                {ex.math.map((line) => (
                  <MathLine key={line}>{line}</MathLine>
                ))}
              </div>
              {ex.after.map((t) => (
                <p key={t} className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {t}
                </p>
              ))}
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm leading-relaxed text-ink-muted">{formula.closing}</p>
      </SectionCard>

      <SectionCard id="quick-table" title={reference.heading}>
        <p className={bodyClass}>
          <LinkedText text={reference.intro} locale={locale} />
        </p>
        <DataTable table={reference.table} caption={reference.caption} />
        <p className="mt-3 text-xs text-ink-muted">{reference.footnote}</p>
      </SectionCard>
    </div>
  );
}

/** Links to every topic page (from the site plan). Shown after the explanation sections. */
export function HomeBrowse({ locale }: { locale: Locale }) {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8">
      <SectionCard id="topics" title={getMessages(locale).content.home.browse}>
        <TopicGrid locale={locale} />
      </SectionCard>
    </div>
  );
}
