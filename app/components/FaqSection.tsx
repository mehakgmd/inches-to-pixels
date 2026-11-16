"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeader } from "./ui";
import { useI18n } from "../i18n/client";

export interface FaqItem {
  question: string;
  answer: string;
  codeSnippet?: string;
}

interface FaqSectionProps {
  /** Questions to show. */
  items: FaqItem[];
  description?: string;
}

export default function FaqSection({ items, description }: FaqSectionProps) {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative scroll-mt-20 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="faq-title"
          icon={HelpCircle}
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          highlight={t.faq.highlight}
          description={description}
        />

        <div className="mt-10 space-y-3">
          {items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-q-${idx}`;
            const panelId = `faq-a-${idx}`;

            return (
              <div
                key={faq.question}
                className={`luxury-card overflow-hidden rounded-2xl transition-colors ${isOpen ? "border-brand-400/40" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 p-5 text-start transition-colors hover:bg-surface-sunken/60"
                  >
                    <span className="font-display text-base font-bold text-ink sm:text-lg">{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-surface-muted text-brand-700 transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-180 border-brand-400" : "border-line"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                {/* Grid-rows trick animates height without measuring. Content stays in the page for search engines. */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-brand-400/15 px-5 pt-3 pb-5">
                      <p className="text-sm leading-relaxed whitespace-pre-line text-ink-soft">{faq.answer}</p>
                      {faq.codeSnippet && (
                        <pre dir="ltr" className="mt-3 overflow-x-auto rounded-xl border border-line bg-surface-muted p-3 tabular-nums text-xs text-brand-700">
                          <code>{faq.codeSnippet}</code>
                        </pre>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
