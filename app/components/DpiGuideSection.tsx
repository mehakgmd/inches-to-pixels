import { BookOpen, Image as ImageIcon, Monitor, Printer } from "lucide-react";
import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { SectionHeader } from "./ui";

// One icon per explainer, in the same order as the explainers in the language files.
const ICONS = [Monitor, Printer, ImageIcon];

/** The three explanation sections from the homepage document, shown as cards. */
export default function DpiGuideSection({ locale }: { locale: Locale }) {
  const { guide, explainers } = getMessages(locale).content.home;
  return (
    <section id="guide" aria-labelledby="guide-title" className="relative scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader id="guide-title" icon={BookOpen} eyebrow={guide.eyebrow} title={guide.title} highlight={guide.highlight} />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {explainers.map((item, i) => {
            const Icon = ICONS[i] ?? BookOpen;
            return (
              <article
                key={item.heading}
                className="luxury-card flex flex-col rounded-2xl border border-brand-400/20 p-6 shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-400/30 bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-display text-lg font-bold text-ink">{item.heading}</h2>
                {item.paragraphs.map((p) => (
                  <p key={p} className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
