"use client";

import type { ReactNode } from "react";
import { Monitor, Printer, Ruler, Sparkles, Smartphone, Newspaper } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DPI_PRESETS } from "../lib/units";
import { AnswerBox } from "./hub/AnswerBox";
import { useI18n } from "../i18n/client";

interface HeroProps {
  currentDpi: number;
  onDpiSelect: (dpi: number) => void;
  /** Short answer under the headline. */
  intro: string;
  /** The converter, shown directly under the headline. */
  children: ReactNode;
}

const PRESET_META: Record<number, { icon: LucideIcon; tag?: "standard" | "fineArt" }> = {
  72: { icon: Monitor },
  96: { icon: Ruler, tag: "standard" },
  150: { icon: Newspaper },
  300: { icon: Printer, tag: "fineArt" },
  458: { icon: Smartphone },
};

export default function Hero({ currentDpi, onDpiSelect, intro, children }: HeroProps) {
  const { t } = useI18n();
  const h = t.hero;
  return (
    <section aria-labelledby="hero-title" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20">
      {/* Ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-aurora opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Emblem badge */}
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand-400/35 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-700" aria-hidden="true" />
          <span className="truncate text-[11px] font-semibold tracking-[0.2em] text-brand-700 uppercase">
            {h.badge}
          </span>
          <span aria-hidden="true" className="hidden h-1 w-1 shrink-0 rounded-full bg-brand-400 sm:block" />
          <span className="hidden shrink-0 tabular-nums text-[11px] tracking-widest text-ink-muted sm:inline">
            {h.badgeRule}
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-title"
          className="mt-5 font-display text-4xl font-extrabold tracking-tight text-balance text-ink uppercase sm:text-5xl lg:text-6xl"
        >
          {/* Text is written in normal case for search engines; CSS shows it in capitals like before. */}
          {h.h1Before}
          <span className="brand-text-gradient">{h.h1Highlight}</span>
          {h.h1After}
        </h1>

        {/* Hidden on phones so the converter sits right under the headline */}
        <AnswerBox className="hidden sm:block">{intro}</AnswerBox>

        {/* Converter sits right under the headline so no scrolling is needed */}
        <div className="mt-7 text-start sm:mt-8">{children}</div>

        {/* DPI quick selector */}
        <div className="mx-auto mt-14 max-w-4xl">
          <h2 id="dpi-shelf" className="mb-3 text-[11px] font-semibold tracking-[0.25em] text-ink-muted uppercase">
            {h.shelfTitle}
          </h2>

          <div role="group" aria-labelledby="dpi-shelf" className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
            {DPI_PRESETS.map((dpi, i) => {
              const isSelected = currentDpi === dpi;
              const meta = PRESET_META[dpi];
              const words = h.presets[i];
              const Icon = meta?.icon ?? Monitor;

              return (
                <button
                  type="button"
                  key={dpi}
                  onClick={() => onDpiSelect(dpi)}
                  aria-pressed={isSelected}
                  className={`group relative flex flex-col items-start rounded-xl border p-3.5 text-start transition-colors ${
                    isSelected
                      ? "border-brand-400 bg-gradient-to-b from-brand-50 to-surface-muted shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                      : "border-line bg-surface-muted/70 hover:border-brand-400/40 hover:bg-surface-sunken"
                  } ${i === DPI_PRESETS.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  {meta?.tag && (
                    <span className="absolute -top-2 end-2.5 rounded border border-brand-400/40 bg-brand-50 px-1.5 py-0.5 text-[10px] font-bold tracking-widest text-brand-700 uppercase">
                      {h.tags[meta.tag]}
                    </span>
                  )}
                  <span className="flex items-center gap-2">
                    <Icon
                      aria-hidden="true"
                      className={`h-4 w-4 ${isSelected ? "text-brand-700" : "text-ink-muted group-hover:text-ink"}`}
                    />
                    <span className="tabular-nums text-base font-bold text-ink">
                      {dpi} <span className="text-[11px] font-normal text-ink-muted">DPI</span>
                    </span>
                  </span>
                  <span className="mt-1.5 text-xs font-semibold text-ink-soft">{words?.label}</span>
                  <span className="text-[11px] leading-snug text-ink-muted">{words?.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Key equations */}
        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-1 divide-y divide-brand-400/15 rounded-2xl border border-brand-400/20 bg-gradient-to-r from-white/90 via-white/90 to-white/90 p-2 shadow-xl backdrop-blur-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {h.equations.map((eq) => (
            <div key={eq.label} className="p-3 text-center">
              <dt className="text-[11px] font-bold tracking-widest text-ink-muted uppercase">{eq.label}</dt>
              <dd className="mt-1 tabular-nums text-sm font-bold text-brand-700">
                <span dir="ltr" className="inline-block">{eq.value}</span>{" "}
                <span className="text-xs font-normal text-ink-muted">({eq.note})</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
