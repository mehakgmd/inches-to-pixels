"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, Frame, Layers, Maximize, Ruler, Sparkles, ZoomIn, ZoomOut } from "lucide-react";
import { dpiQuality, toPixels } from "../lib/units";
import { chipClass } from "./ui";
import { useI18n } from "../i18n/client";
import { fill } from "../i18n/format";

interface VisualScalePreviewProps {
  currentDpi: number;
  widthInches: number;
  heightInches: number;
}

type ViewMode = "canvas" | "loupe" | "gallery";

const MODES: { id: ViewMode; icon: typeof Ruler }[] = [
  { id: "canvas", icon: Ruler },
  { id: "loupe", icon: Layers },
  { id: "gallery", icon: Frame },
];

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 2.5;
const ZOOM_STEP = 0.25;
const RULER = 40; // space reserved for the vertical ruler and gap, in px

/** Pick a tick spacing (in inches) that gives roughly 6 to 12 ticks. */
function tickStep(lengthIn: number): number {
  const steps = [0.125, 0.25, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500];
  return steps.find((s) => lengthIn / s <= 12) ?? 1000;
}

function ticks(lengthIn: number): { at: number; major: boolean }[] {
  const step = tickStep(lengthIn);
  const count = Math.floor(lengthIn / step + 1e-9);
  return Array.from({ length: count + 1 }, (_, i) => ({ at: (i * step) / lengthIn, major: i % 2 === 0 }));
}

/** Largest size with the given aspect that fits the box. */
function fit(w: number, h: number, maxW: number, maxH: number) {
  const scale = Math.min(maxW / w, maxH / h);
  return { w: Math.max(2, w * scale), h: Math.max(2, h * scale) };
}

export default function VisualScalePreview({ currentDpi, widthInches, heightInches }: VisualScalePreviewProps) {
  const { t: all, f } = useI18n();
  const t = all.visual;
  const [viewMode, setViewMode] = useState<ViewMode>("canvas");
  const [zoom, setZoom] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageWidth, setStageWidth] = useState(640);

  // Track the stage width so the drawing always fits the screen.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setStageWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const wPx = toPixels(widthInches, currentDpi);
  const hPx = toPixels(heightInches, currentDpi);
  const wLabel = f.dec(widthInches, 2);
  const hLabel = f.dec(heightInches, 2);
  const quality = dpiQuality(currentDpi);

  const maxH = stageWidth < 480 ? 240 : 320;
  const base = fit(widthInches, heightInches, Math.max(80, stageWidth - RULER - 16), maxH);
  const box = { w: base.w * zoom, h: base.h * zoom };
  const showMidLabel = box.w >= 220;

  const summary = fill(t.summary, { w: wLabel, h: hLabel, wpx: f.int(wPx), hpx: f.int(hPx), dpi: currentDpi });

  return (
    <section id="visual-studio" aria-labelledby="visual-title" className="relative scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-surface-sunken px-3.5 py-1 text-[11px] font-semibold tracking-widest text-brand-700 uppercase">
            <Eye className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
            {t.eyebrow}
          </div>
          <h2 id="visual-title" className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-4xl">
            {t.title} <span className="brand-text-gradient">{t.highlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {t.description}
          </p>
        </div>

        <div className="luxury-card mx-auto mt-10 max-w-5xl rounded-3xl border border-brand-400/30 p-4 shadow-2xl sm:p-8">
          {/* Mode selector and zoom */}
          <div className="flex flex-col gap-4 border-b border-brand-400/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div role="group" aria-label={t.modeAria} className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {MODES.map((m) => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setViewMode(m.id)}
                  aria-pressed={viewMode === m.id}
                  className={chipClass(viewMode === m.id)}
                >
                  <m.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.modes[m.id]}
                </button>
              ))}
            </div>

            {viewMode === "canvas" && (
              <div className="flex items-center gap-1 self-start rounded-lg border border-line bg-surface p-1 sm:self-auto">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP))}
                  disabled={zoom <= ZOOM_MIN}
                  aria-label={t.zoomOut}
                  className="rounded p-2 text-ink-soft transition-colors hover:text-ink disabled:opacity-40"
                >
                  <ZoomOut className="h-4 w-4" aria-hidden="true" />
                </button>
                <span aria-live="polite" className="w-12 text-center tabular-nums text-xs font-semibold text-brand-700">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP))}
                  disabled={zoom >= ZOOM_MAX}
                  aria-label={t.zoomIn}
                  className="rounded p-2 text-ink-soft transition-colors hover:text-ink disabled:opacity-40"
                >
                  <ZoomIn className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom(1)}
                  aria-label={t.resetZoom}
                  className="rounded p-2 text-ink-soft transition-colors hover:text-ink"
                >
                  <Maximize className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          {/* Stage */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-400/20 bg-surface-muted shadow-inner">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-60" />
            <div ref={stageRef} dir="ltr" className="relative flex min-h-[380px] overflow-auto p-4 sm:min-h-[440px] sm:p-6">
              {viewMode === "canvas" && (
                <figure className="m-auto flex flex-col items-center" aria-label={summary}>
                  <div className="flex">
                    <div style={{ width: RULER }} aria-hidden="true" />
                    {/* Horizontal ruler */}
                    <div
                      aria-hidden="true"
                      style={{ width: box.w }}
                      className="relative mb-2 h-9 border-b border-brand-400/70 transition-[width] duration-300 motion-reduce:transition-none"
                    >
                      <span className="absolute top-0 left-0 tabular-nums text-[10px] font-bold text-brand-700">0</span>
                      {showMidLabel && (
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 tabular-nums text-[10px] font-bold text-brand-700">
                          {f.dec(widthInches / 2, 2)}&quot;
                        </span>
                      )}
                      <span className="absolute top-0 right-0 tabular-nums text-[10px] font-bold whitespace-nowrap text-brand-700">
                        {wLabel}&quot;
                      </span>
                      {ticks(widthInches).map((t) => (
                        <span
                          key={t.at}
                          style={{ left: `${t.at * 100}%` }}
                          className={`absolute bottom-0 w-px bg-brand-400 ${t.major ? "h-3" : "h-1.5 opacity-60"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex">
                    {/* Vertical ruler */}
                    <div
                      aria-hidden="true"
                      style={{ width: RULER - 8, height: box.h }}
                      className="relative mr-2 border-r border-brand-400/70 transition-[height] duration-300 motion-reduce:transition-none"
                    >
                      <span className="absolute top-0 left-0 tabular-nums text-[10px] font-bold text-brand-700">0</span>
                      <span className="absolute bottom-0 left-0 tabular-nums text-[10px] font-bold text-brand-700">
                        {hLabel}&quot;
                      </span>
                      {ticks(heightInches).map((t) => (
                        <span
                          key={t.at}
                          style={{ top: `${t.at * 100}%` }}
                          className={`absolute right-0 h-px bg-brand-400 ${t.major ? "w-3" : "w-1.5 opacity-60"}`}
                        />
                      ))}
                    </div>

                    {/* Proportional canvas */}
                    <div
                      style={{ width: box.w, height: box.h }}
                      className="relative rounded-md border-2 border-brand-400 bg-gradient-to-br from-brand-50 via-white/95 to-brand-50 shadow-[0_0_35px_rgba(99,102,241,0.25)] transition-[width,height] duration-300 motion-reduce:transition-none"
                    >
                      <span aria-hidden="true" className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-brand-500" />
                      <span aria-hidden="true" className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-brand-500" />
                      <span aria-hidden="true" className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-brand-500" />
                      <span aria-hidden="true" className="absolute -right-1 -bottom-1 h-3 w-3 border-r-2 border-b-2 border-brand-500" />
                    </div>
                  </div>

                  {/* Measurement */}
                  <figcaption className="mt-5 ml-10 rounded-xl border border-brand-400/40 bg-surface/90 px-4 py-2.5 text-center shadow-lg backdrop-blur-md">
                    <p className="font-display text-base font-bold text-ink sm:text-lg">
                      {wLabel}&quot; × {hLabel}&quot;
                    </p>
                    <p className="mt-0.5 tabular-nums text-xs font-bold text-brand-700">
                      {f.int(wPx)} × {f.int(hPx)} px @ {currentDpi} DPI
                    </p>
                  </figcaption>
                </figure>
              )}

              {viewMode === "loupe" && (
                <div className="m-auto w-full max-w-3xl space-y-6">
                  <div className="text-center">
                    <h3 className="text-xs font-bold tracking-widest text-brand-700 uppercase">
                      {t.loupeTitle}
                    </h3>
                    <p className="mt-1 text-xs text-ink-muted">
                      {t.loupeDesc}
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <li className="rounded-2xl border border-line bg-surface-muted p-4 text-center">
                      <span className="tabular-nums text-xs font-bold text-ink-soft">{t.loupe72}</span>
                      <div aria-hidden="true" className="relative mx-auto mt-3 h-32 w-32 overflow-hidden rounded-full border-2 border-slate-300 bg-slate-50 p-2 sm:h-36 sm:w-36">
                        <div className="grid h-full w-full grid-cols-6 grid-rows-6 gap-[1.5px] bg-slate-200 p-1">
                          {Array.from({ length: 36 }).map((_, i) => (
                            <div
                              key={i}
                              className={`rounded-[1px] ${i % 3 === 0 ? "bg-brand-400/70" : i % 2 === 0 ? "bg-slate-300" : "bg-slate-200"}`}
                            />
                          ))}
                        </div>
                        <div className="pointer-events-none absolute inset-0 rounded-full border-[6px] border-slate-300" />
                      </div>
                      <p className="mt-3 text-xs text-ink-muted">{t.loupe72Note}</p>
                    </li>

                    <li className="rounded-2xl border border-brand-400/40 bg-gradient-to-b from-brand-50 to-white p-4 text-center shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                      <span className="tabular-nums text-xs font-bold text-brand-700">{t.loupe96}</span>
                      <div aria-hidden="true" className="relative mx-auto mt-3 h-32 w-32 overflow-hidden rounded-full border-2 border-brand-400 bg-slate-50 p-2 sm:h-36 sm:w-36">
                        <div className="grid h-full w-full grid-cols-12 grid-rows-12 gap-[0.5px] bg-brand-50 p-1">
                          {Array.from({ length: 144 }).map((_, i) => (
                            <div
                              key={i}
                              className={i % 4 === 0 ? "bg-brand-400" : i % 2 === 0 ? "bg-violet-200" : "bg-slate-200"}
                            />
                          ))}
                        </div>
                        <div className="pointer-events-none absolute inset-0 rounded-full border-[6px] border-brand-400/40" />
                      </div>
                      <p className="mt-3 text-xs text-brand-700">{t.loupe96Note}</p>
                    </li>

                    <li className="rounded-2xl border border-emerald-500/30 bg-surface-muted p-4 text-center">
                      <span className="tabular-nums text-xs font-bold text-emerald-700">{t.loupe300}</span>
                      <div aria-hidden="true" className="relative mx-auto mt-3 h-32 w-32 overflow-hidden rounded-full border-2 border-emerald-600/80 bg-slate-50 p-2 sm:h-36 sm:w-36">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-tr from-emerald-50 via-brand-300/40 to-emerald-400/80">
                          <Sparkles className="h-8 w-8 text-ink drop-shadow" />
                        </div>
                        <div className="pointer-events-none absolute inset-0 rounded-full border-[6px] border-emerald-200" />
                      </div>
                      <p className="mt-3 text-xs text-ink-soft">{t.loupe300Note}</p>
                    </li>
                  </ul>

                  <p className="text-center text-xs text-ink-muted">
                    {t.yourSetting} <span className="tabular-nums font-bold text-brand-700">{currentDpi} DPI</span>,{" "}
                    {all.common.qualityInline[quality.key]}.
                  </p>
                </div>
              )}

              {viewMode === "gallery" && (() => {
                const frame = fit(widthInches, heightInches, Math.min(380, stageWidth * 0.7), 260);
                return (
                  <figure className="m-auto flex flex-col items-center py-4 text-center" aria-label={summary}>
                    <div aria-hidden="true" className="pointer-events-none -mb-20 h-32 w-52 rounded-full bg-brand-200/40 blur-[40px]" />
                    <div
                      aria-hidden="true"
                      style={{ width: frame.w + 36, height: frame.h + 36 }}
                      className="relative rounded-sm border-[10px] border-slate-700 bg-slate-100 p-2 shadow-[0_30px_60px_-10px_rgba(30,41,82,0.12),0_0_20px_rgba(99,102,241,0.3)] transition-[width,height] duration-300 motion-reduce:transition-none"
                    >
                      <div className="h-full w-full bg-gradient-to-br from-white via-white to-brand-50" />
                    </div>
                    <figcaption className="mt-6 rounded border border-brand-400/60 bg-gradient-to-r from-brand-50 via-brand-50 to-brand-50 px-4 py-2 shadow-md">
                      <p className="font-display text-sm font-bold text-brand-700">
                        {wLabel}&quot; × {hLabel}&quot;
                      </p>
                      <p className="tabular-nums text-[11px] text-ink-soft">
                        {f.int(wPx)} × {f.int(hPx)} px @ {currentDpi} DPI
                      </p>
                      <p className="mt-1 text-[11px] tracking-widest text-brand-600 uppercase">{all.common.quality[quality.key]}</p>
                    </figcaption>
                  </figure>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
