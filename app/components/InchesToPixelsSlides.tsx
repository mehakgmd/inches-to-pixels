"use client";

import { useState, type KeyboardEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Compass, Eye, Pause, Play, Sparkles } from "lucide-react";
import { useReducedMotion } from "../lib/hooks";
import { SectionHeader } from "./ui";
import { useI18n } from "../i18n/client";
import { fill } from "../i18n/format";

interface InchesToPixelsSlidesProps {
  onLoadSlideDimensions: (w: number, h: number, dpi: number) => void;
}

interface SlideSpec {
  id: number;
  wIn: number;
  hIn: number;
  targetDpi: number;
  visualType: "spectrum" | "w3c" | "fineart" | "retina" | "framing";
}

const SLIDE_MS = 7000;

/** Numbers behind each slide. Titles, quotes and specs are in the language files (slides.items), same order. */
const SLIDE_SPECS: SlideSpec[] = [
  { id: 1, wIn: 1, hIn: 1, targetDpi: 300, visualType: "spectrum" },
  { id: 2, wIn: 8.5, hIn: 11, targetDpi: 96, visualType: "w3c" },
  { id: 3, wIn: 16, hIn: 20, targetDpi: 300, visualType: "fineart" },
  { id: 4, wIn: 6.1, hIn: 2.8, targetDpi: 458, visualType: "retina" },
  { id: 5, wIn: 24, hIn: 36, targetDpi: 300, visualType: "framing" },
];

const SPECTRUM = [
  { px: 72, color: "from-slate-400 to-slate-300", widthPct: "24%" },
  { px: 96, color: "from-brand-500 to-brand-300", widthPct: "32%" },
  { px: 150, color: "from-indigo-500 to-violet-400", widthPct: "50%" },
  { px: 300, color: "from-brand-400 to-violet-500", widthPct: "100%" },
];

const FRAMES = [
  { size: "8 × 10\"", px: "2400 × 3000 px", mp: "7.2 MP" },
  { size: "11 × 14\"", px: "3300 × 4200 px", mp: "13.9 MP" },
  { size: "16 × 20\"", px: "4800 × 6000 px", mp: "28.8 MP" },
  { size: "24 × 36\"", px: "7200 × 10800 px", mp: "77.8 MP" },
];

export default function InchesToPixelsSlides({
  onLoadSlideDimensions,
}: InchesToPixelsSlidesProps) {
  const { t: all } = useI18n();
  const t = all.slides;
  const SLIDES = SLIDE_SPECS.map((spec, i) => ({ ...spec, ...t.items[i] }));
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const reducedMotion = useReducedMotion();

  const slide = SLIDES[currentSlideIndex];
  // Autoplay respects reduced motion and pauses while the visitor reads or uses the deck.
  const autoplay = isPlaying && !reducedMotion;
  const running = autoplay && !isHovered && !hasFocusWithin;

  const goToSlide = (idx: number) => setCurrentSlideIndex((idx + SLIDES.length) % SLIDES.length);
  const handleNext = () => goToSlide(currentSlideIndex + 1);
  const handlePrev = () => goToSlide(currentSlideIndex - 1);

  const onDeckKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("input, select, textarea")) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  const slideNumber = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="slides" aria-labelledby="slides-title" className="relative scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="slides-title"
          icon={Sparkles}
          eyebrow={t.eyebrow}
          title={t.title}
          highlight={t.highlight}
          description={t.description}
        />

        {/* Master Slide Deck Showcase */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={t.carouselAria}
          onKeyDown={onDeckKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={(e) => {
            // Pause for keyboard focus only, so mouse clicks on the arrows keep autoplay going.
            if (e.target.matches(":focus-visible")) setHasFocusWithin(true);
          }}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHasFocusWithin(false);
          }}
          className="luxury-card mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-brand-400/30 shadow-[0_30px_70px_-15px_rgba(30,41,82,0.12)]"
        >
          {/* Deck header and playback controls */}
          <div className="flex items-center justify-between gap-3 border-b border-brand-400/20 bg-surface-muted/90 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="shrink-0 tabular-nums text-xs font-bold text-brand-700">
                <span className="sr-only">{t.slide} </span>
                {slideNumber(currentSlideIndex + 1)} / {slideNumber(SLIDES.length)}
              </span>
              <span aria-hidden="true" className="hidden h-3 w-px bg-brand-400/30 sm:block" />
              <span className="hidden truncate text-[11px] font-semibold tracking-widest text-ink-muted uppercase sm:block">
                {slide.badge}
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {!reducedMotion && (
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  className="flex items-center gap-1.5 rounded-lg border border-line bg-surface-sunken px-2.5 py-1.5 text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700"
                  aria-label={isPlaying ? t.pauseAria : t.playAria}
                >
                  {isPlaying ? <Pause className="h-3.5 w-3.5" aria-hidden="true" /> : <Play className="h-3.5 w-3.5" aria-hidden="true" />}
                  <span aria-hidden="true" className="tabular-nums text-[11px] uppercase">
                    {isPlaying ? t.pause : t.play}
                  </span>
                </button>
              )}
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-lg border border-line bg-surface-sunken p-1.5 text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700"
                aria-label={t.prev}
              >
                <ChevronLeft className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-lg border border-line bg-surface-sunken p-1.5 text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700"
                aria-label={t.next}
              >
                <ChevronRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Progress bar: a CSS animation that advances the deck when it ends */}
          <div aria-hidden="true" className="h-0.5 w-full bg-slate-200">
            {autoplay && (
              <div
                key={currentSlideIndex}
                onAnimationEnd={handleNext}
                style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: running ? "running" : "paused" }}
                className="h-full animate-slide-progress bg-gradient-to-r from-brand-400 to-violet-500"
              />
            )}
          </div>

          {/* Slide Body Content */}
          <div
            key={slide.id}
            aria-live={autoplay ? "off" : "polite"}
            aria-roledescription="slide"
            aria-label={fill(t.slideOf, { n: currentSlideIndex + 1, total: SLIDES.length, title: slide.title })}
            className="p-5 motion-safe:animate-fade-up sm:p-10"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Editorial Information */}
              <div className="space-y-5 lg:col-span-6">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {slide.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-700">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Editorial Quote */}
                <div className="border-s-2 border-brand-400 ps-4 italic text-xs leading-relaxed text-ink-soft">
                  &ldquo;{slide.quote}&rdquo;
                </div>

                <p className="text-xs leading-relaxed text-ink-soft">
                  {slide.description}
                </p>

                {/* Formula Callout */}
                <div className="rounded-xl border border-brand-400/30 bg-surface-muted p-3 shadow-inner">
                  <span className="text-[11px] font-bold tracking-widest text-ink-muted uppercase">
                    {t.axiom}
                  </span>
                  <p className="mt-0.5 tabular-nums text-xs font-bold text-brand-700">
                    {slide.keyFormula}
                  </p>
                </div>

                {/* Action button: Load this slide's dimensions */}
                <button
                  type="button"
                  onClick={() =>
                    onLoadSlideDimensions(slide.wIn, slide.hIn, slide.targetDpi)
                  }
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-brand-400 bg-gradient-to-r from-brand-400/20 to-violet-500/20 px-4 py-2.5 text-xs font-bold tracking-wider text-brand-700 transition-colors hover:bg-brand-400/30 sm:w-auto"
                >
                  <Compass className="h-3.5 w-3.5 text-brand-600" />
                  <span>{t.calibrate}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </button>
              </div>

              {/* Right Column: High-End Visual Diagram */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-brand-400/25 bg-gradient-to-br from-white via-white to-white p-5 shadow-2xl">
                  {/* VISUAL 1: The DPI Spectrum Bar Comparison */}
                  {slide.visualType === "spectrum" && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="tabular-nums text-[11px] font-bold text-brand-700">
                          {t.spectrum.title}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {SPECTRUM.map((bar, i) => ({ ...bar, label: t.spectrum.bars[i] })).map((item) => (
                          <div key={item.px} className="space-y-1">
                            <div className="flex justify-between text-[11px] tabular-nums">
                              <span className="text-ink-soft">{item.label}</span>
                              <span className="font-bold text-brand-700">{item.px} px</span>
                            </div>
                            <div className="h-4 w-full rounded-full bg-slate-100 p-0.5 border border-line">
                              <div
                                style={{ width: item.widthPct }}
                                className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-sm`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-xl border border-line bg-surface-muted p-3 text-center">
                        <span className="text-[11px] text-ink-muted">
                          {t.spectrum.note}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* VISUAL 2: W3C CSS 96px Reference Geometry */}
                  {slide.visualType === "w3c" && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="tabular-nums text-[11px] font-bold text-brand-700">
                          {t.w3c.title}
                        </span>
                      </div>

                      <div dir="ltr" className="relative mx-auto flex h-48 w-full items-center justify-center rounded-xl border border-line bg-surface-muted p-4">
                        {/* Interactive diagram */}
                        <div className="flex w-full items-center justify-between px-4">
                          {/* Eye / Observer */}
                          <div className="flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-400 bg-brand-50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                              <Eye className="h-5 w-5 text-brand-700" aria-hidden="true" />
                            </div>
                            <span className="mt-1 text-[11px] font-bold text-ink-muted uppercase">
                              {t.w3c.observer}
                            </span>
                          </div>

                          {/* Sight Cone Lines */}
                          <div className="relative mx-2 flex-1 border-t border-dashed border-brand-400/60 text-center">
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-surface-muted px-1 tabular-nums text-[11px] text-brand-700">
                              {t.w3c.distance}
                            </span>
                          </div>

                          {/* CSS Inch Target Box */}
                          <div className="flex flex-col items-center">
                            <div className="flex h-20 w-16 flex-col items-center justify-center rounded-lg border-2 border-brand-400 bg-brand-50 p-1 text-center shadow-lg">
                              <span className="tabular-nums text-xs font-bold text-ink">
                                1.0&quot;
                              </span>
                              <span className="tabular-nums text-[11px] text-brand-700">
                                96 px
                              </span>
                            </div>
                            <span className="mt-1 text-[11px] font-bold text-ink-muted uppercase">
                              {t.w3c.cssInch}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Equivalent Units Pill */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-lg border border-line bg-surface-muted p-2">
                          <p className="text-[11px] text-ink-muted">{t.w3c.centimeters}</p>
                          <p className="tabular-nums text-xs font-bold text-ink">2.54 cm</p>
                        </div>
                        <div className="rounded-lg border border-line bg-surface-muted p-2">
                          <p className="text-[11px] text-ink-muted">{t.w3c.typographyPt}</p>
                          <p className="tabular-nums text-xs font-bold text-ink">72 pt</p>
                        </div>
                        <div className="rounded-lg border border-line bg-surface-muted p-2">
                          <p className="text-[11px] text-ink-muted">{t.w3c.picas}</p>
                          <p className="tabular-nums text-xs font-bold text-ink">6 pc</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* VISUAL 3: Museum Archival Giclée Comparison */}
                  {slide.visualType === "fineart" && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="tabular-nums text-[11px] font-bold text-brand-700">
                          {t.fineart.title}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {/* 72 DPI display simulation */}
                        <div className="rounded-xl border border-red-500/30 bg-surface-muted p-3 text-center">
                          <span className="text-[11px] font-bold text-red-600 uppercase">
                            {t.fineart.printed72}
                          </span>
                          <div className="mt-2 flex h-28 items-center justify-center rounded-lg bg-slate-100 border border-slate-300">
                            {/* Blocky pixel circle */}
                            <div className="grid grid-cols-4 grid-rows-4 gap-1 p-2">
                              {Array.from({ length: 16 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="h-4 w-4 rounded-none bg-red-400/80"
                                />
                              ))}
                            </div>
                          </div>
                          <span className="mt-2 block text-[11px] text-ink-muted">
                            {t.fineart.jagged}
                          </span>
                        </div>

                        {/* 300 DPI Fine Art simulation */}
                        <div className="rounded-xl border border-emerald-500/40 bg-surface-muted p-3 text-center shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                          <span className="text-[11px] font-bold text-emerald-700 uppercase">
                            {t.fineart.archival300}
                          </span>
                          <div className="mt-2 flex h-28 items-center justify-center rounded-lg bg-slate-100 border border-emerald-500/20">
                            {/* Smooth luxury gradient circle */}
                            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-brand-400 via-brand-300 to-emerald-400 shadow-lg" />
                          </div>
                          <span className="mt-2 block text-[11px] text-emerald-700">
                            {t.fineart.smooth}
                          </span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-line bg-surface-muted p-2.5 text-center">
                        <p className="tabular-nums text-xs text-brand-700">
                          {t.fineart.summary}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* VISUAL 4: Retina DPR Multiplier */}
                  {slide.visualType === "retina" && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="tabular-nums text-[11px] font-bold text-brand-700">
                          {t.retina.title}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {/* 1x DPR */}
                        <div className="flex items-center justify-between rounded-xl border border-line bg-surface-muted p-3">
                          <div>
                            <span className="text-xs font-bold text-ink-soft">{t.retina.rows[0].name}</span>
                            <p className="text-[11px] text-ink-muted">{t.retina.rows[0].device}</p>
                          </div>
                          <div className="text-end tabular-nums text-xs font-bold text-ink">
                            {t.retina.rows[0].value}
                          </div>
                        </div>

                        {/* 2x DPR */}
                        <div className="flex items-center justify-between rounded-xl border border-line bg-surface-muted p-3">
                          <div>
                            <span className="text-xs font-bold text-brand-700">{t.retina.rows[1].name}</span>
                            <p className="text-[11px] text-ink-muted">{t.retina.rows[1].device}</p>
                          </div>
                          <div className="text-end tabular-nums text-xs font-bold text-brand-700">
                            {t.retina.rows[1].value}
                          </div>
                        </div>

                        {/* 3x DPR */}
                        <div className="flex items-center justify-between rounded-xl border border-brand-400/40 bg-gradient-to-r from-brand-50 to-white p-3 shadow-md">
                          <div>
                            <span className="text-xs font-bold text-brand-700">{t.retina.rows[2].name}</span>
                            <p className="text-[11px] text-ink-muted">{t.retina.rows[2].device}</p>
                          </div>
                          <div className="text-end tabular-nums text-xs font-bold text-brand-700">
                            {t.retina.rows[2].value}
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-brand-400/25 bg-surface-muted p-2.5 text-center">
                        <span className="text-[11px] text-ink-soft">
                          {t.retina.summary}
                          <span className="font-bold text-brand-700">{t.retina.summaryStrong}</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* VISUAL 5: Framing Proportions Matrix */}
                  {slide.visualType === "framing" && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <span className="tabular-nums text-[11px] font-bold text-brand-700">
                          {t.framing.title}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {FRAMES.map((frame) => (
                          <div
                            key={frame.size}
                            className="rounded-xl border border-brand-400/20 bg-surface-muted p-2.5 transition-all hover:border-brand-400"
                          >
                            <span className="font-display text-xs font-bold text-ink">
                              {frame.size}
                            </span>
                            <p className="tabular-nums text-[11px] text-brand-700">
                              {frame.px}
                            </p>
                            <span className="text-[11px] text-ink-muted">
                              {fill(t.framing.sensor, { mp: frame.mp })}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-xl border border-line bg-surface-muted p-2.5 text-center">
                        <p className="text-[11px] text-ink-muted">
                          {t.framing.note}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bottom Spec Summary Grid */}
                  <div className="mt-5 border-t border-line pt-4">
                    <span className="text-[11px] font-bold tracking-widest text-ink-muted uppercase">
                      {t.specsTitle}
                    </span>
                    <div className="mt-2 grid grid-cols-1 gap-2 text-[11px] sm:grid-cols-2">
                      {slide.specs.map((item) => (
                        <div
                          key={item.label}
                          className="flex justify-between rounded bg-surface-muted px-2 py-1"
                        >
                          <span className="text-ink-muted">{item.label}</span>
                          <span className="tabular-nums font-bold text-ink">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide picker */}
          <div role="group" aria-label={t.chooseSlide} className="grid grid-cols-5 border-t border-brand-400/20 bg-surface-muted">
            {SLIDES.map((s, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={fill(t.slideLabel, { n: idx + 1, title: s.title })}
                  className={`relative min-w-0 p-3 text-center transition-colors sm:text-start ${
                    isActive
                      ? "bg-gradient-to-t from-brand-50 to-white text-brand-700"
                      : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                  }`}
                >
                  {isActive && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-brand-400" />}
                  <span className="block tabular-nums text-xs font-bold">{slideNumber(idx + 1)}</span>
                  <span className="mt-0.5 hidden truncate text-[11px] font-medium sm:block">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
