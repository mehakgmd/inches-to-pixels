"use client";

import { useState } from "react";
import { ArrowRight, Filter } from "lucide-react";
import { SectionHeader, chipClass } from "./ui";
import { useI18n } from "../i18n/client";
import { fill } from "../i18n/format";

type Category = "art" | "editorial" | "device" | "social";

interface PresetItem {
  id: string;
  category: Category;
  wIn: number;
  hIn: number;
  aspect: string;
  recommendedDpi: number;
}

/** Sizes in the matrix. Names and descriptions are in the language files (presets.items), same order. */
const PRESETS: PresetItem[] = [
  // Fine Art & Framing
  { id: "art-8x10", category: "art", wIn: 8, hIn: 10, aspect: "4:5", recommendedDpi: 300 },
  { id: "art-11x14", category: "art", wIn: 11, hIn: 14, aspect: "11:14", recommendedDpi: 300 },
  { id: "art-16x20", category: "art", wIn: 16, hIn: 20, aspect: "4:5", recommendedDpi: 300 },
  { id: "art-24x36", category: "art", wIn: 24, hIn: 36, aspect: "2:3", recommendedDpi: 300 },
  { id: "art-30x40", category: "art", wIn: 30, hIn: 40, aspect: "3:4", recommendedDpi: 300 },
  // Editorial & Stationery
  { id: "ed-us-letter", category: "editorial", wIn: 8.5, hIn: 11, aspect: "1:1.29", recommendedDpi: 300 },
  { id: "ed-a4", category: "editorial", wIn: 8.27, hIn: 11.69, aspect: "1:√2", recommendedDpi: 300 },
  { id: "ed-biz-card", category: "editorial", wIn: 3.5, hIn: 2.0, aspect: "7:4", recommendedDpi: 300 },
  { id: "ed-coffee-table", category: "editorial", wIn: 12, hIn: 12, aspect: "1:1", recommendedDpi: 300 },
  // Devices & Screen
  { id: "dev-iphone", category: "device", wIn: 2.81, hIn: 5.89, aspect: "19.5:9", recommendedDpi: 460 },
  { id: "dev-macbook", category: "device", wIn: 13.9, hIn: 8.95, aspect: "16:10", recommendedDpi: 254 },
  { id: "dev-4k", category: "device", wIn: 47.9, hIn: 27.0, aspect: "16:9", recommendedDpi: 80 },
  // Social & Digital
  { id: "soc-ig-square", category: "social", wIn: 11.25, hIn: 11.25, aspect: "1:1", recommendedDpi: 96 },
  { id: "soc-ig-story", category: "social", wIn: 11.25, hIn: 20.0, aspect: "9:16", recommendedDpi: 96 },
];

const CATEGORIES: ("all" | Category)[] = ["all", "art", "editorial", "device", "social"];

interface PresetDimensionsProps {
  onSelectPreset: (w: number, h: number, dpi: number) => void;
}

export default function PresetDimensions({ onSelectPreset }: PresetDimensionsProps) {
  const { t: all, f } = useI18n();
  const t = all.presets;
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>("all");

  const items = PRESETS.map((p, i) => ({ ...p, ...t.items[i] }));
  const filteredPresets = selectedCategory === "all" ? items : items.filter((p) => p.category === selectedCategory);

  return (
    <section id="matrix" aria-labelledby="matrix-title" className="relative scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="matrix-title"
          icon={Filter}
          eyebrow={t.eyebrow}
          title={t.title}
          highlight={t.highlight}
          description={t.description}
        />

        {/* Category filter */}
        <div
          role="group"
          aria-label={t.filterAria}
          className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className={chipClass(selectedCategory === cat)}
            >
              {t.categories[cat]}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="mt-3 text-center text-xs text-ink-muted">
          {fill(t.showing, { shown: filteredPresets.length, total: PRESETS.length })}
        </p>

        {/* Preset cards */}
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPresets.map((preset) => (
            <li
              key={preset.id}
              className="luxury-card group flex flex-col justify-between rounded-2xl p-5 transition-[border-color,box-shadow] duration-300 hover:border-brand-400/60 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    dir="ltr"
                    className="rounded-md border border-brand-400/30 bg-brand-400/10 px-2 py-0.5 tabular-nums text-[11px] font-bold text-brand-700"
                  >
                    {preset.aspect}
                  </span>
                  <span className="text-[11px] tracking-wider text-ink-muted uppercase">
                    {fill(t.recommended, { dpi: preset.recommendedDpi })}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-base font-bold text-ink transition-colors group-hover:text-brand-700">
                  {preset.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">{preset.description}</p>

                <dl className="mt-4 space-y-1.5 rounded-xl border border-line bg-surface-muted p-3 text-xs">
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-muted">{t.physicalSize}</dt>
                    <dd dir="ltr" className="tabular-nums font-bold text-ink">
                      {f.dec(preset.wIn)}&quot; × {f.dec(preset.hIn)}&quot;
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-muted">{t.web}</dt>
                    <dd dir="ltr" className="tabular-nums text-ink-soft">
                      {f.px(preset.wIn, 96)} × {f.px(preset.hIn, 96)} px
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-ink-muted">{t.print}</dt>
                    <dd dir="ltr" className="tabular-nums font-bold text-brand-700">
                      {f.px(preset.wIn, 300)} × {f.px(preset.hIn, 300)} px
                    </dd>
                  </div>
                </dl>
              </div>

              <button
                type="button"
                onClick={() => onSelectPreset(preset.wIn, preset.hIn, preset.recommendedDpi)}
                aria-label={fill(t.useAria, { name: preset.name, dpi: preset.recommendedDpi })}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-brand-400/40 bg-surface-sunken py-2.5 text-xs font-bold tracking-wider text-brand-700 transition-colors hover:border-brand-400 hover:bg-brand-400/15"
              >
                {t.use}
                <ArrowRight className="h-3.5 w-3.5 rtl:-scale-x-100" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
