"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowLeftRight,
  ArrowRightLeft,
  Check,
  Code,
  Copy,
  Lock,
  Maximize2,
  Sparkles,
  Unlock,
} from "lucide-react";
import confetti from "canvas-confetti";
import { MAX_DPI, aspectRatioLabel, dpiQuality, parsePositive, toPixels, trimNumber } from "../lib/units";
import { chipClass, labelClass } from "./ui";
import { useI18n } from "../i18n/client";
import { fill } from "../i18n/format";

interface InchesConverterProps {
  currentDpi: number;
  onDpiChange: (dpi: number) => void;
  widthInches: number;
  heightInches: number;
  onDimensionsChange: (w: number, h: number) => void;
}

const QUICK_SIZES = [
  { label: '1/4"', val: 0.25 },
  { label: '1/2"', val: 0.5 },
  { label: '1"', val: 1 },
  { label: '2"', val: 2 },
  { label: '4"', val: 4 },
  { label: '8"', val: 8 },
  { label: '12"', val: 12 },
  { label: '24"', val: 24 },
];

/** Ratios offered under the 2D converter. Their names are in the language files (converter.ratios), same order. */
const ASPECT_RATIOS = [
  { w: 1, h: 1 },
  { w: 4, h: 3 },
  { w: 16, h: 9 },
  { w: 3, h: 2 },
  { w: 4, h: 5 },
  { w: 5, h: 7 },
];

type Field = "wIn" | "hIn" | "wPx" | "hPx" | "single" | "singlePx" | "dpi";
type Tab = "2d" | "1d";
type CopyKey = "dimensions" | "single" | "css";

const TONE_CLASS = {
  emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-700",
  brand: "border-brand-400/40 bg-brand-400/10 text-brand-700",
  zinc: "border-line bg-surface-sunken/60 text-ink-soft",
} as const;

interface NumberFieldProps {
  id: string;
  label: string;
  unit: string;
  value: string;
  invalid: boolean;
  large?: boolean;
  accent?: boolean;
  onChange: (raw: string) => void;
  onFocus?: () => void;
  onBlur: () => void;
  /** Message shown when the value is not a positive number. */
  error: string;
}

function NumberField({ id, label, unit, value, invalid, large, accent, onChange, onFocus, onBlur, error }: NumberFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div
        className={`mt-1.5 flex items-center rounded-xl border bg-surface px-3 transition-colors ${
          large ? "py-3" : "py-2.5"
        } ${
          invalid
            ? "border-red-400/70"
            : accent
              ? "border-violet-300/70 focus-within:border-violet-500"
              : "border-line focus-within:border-brand-400"
        }`}
      >
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step="any"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? errorId : undefined}
          className={`w-full min-w-0 bg-transparent tabular-nums font-bold focus:outline-none ${
            large ? "text-2xl" : "text-lg"
          } ${accent ? "text-violet-700" : "text-ink"}`}
        />
        <span aria-hidden="true" className="ms-2 tabular-nums text-xs text-ink-muted">
          {unit}
        </span>
      </div>
      {invalid && (
        <p id={errorId} className="mt-1 text-[11px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function InchesConverter({
  currentDpi,
  onDpiChange,
  widthInches,
  heightInches,
  onDimensionsChange,
}: InchesConverterProps) {
  const { t: all, f } = useI18n();
  const t = all.converter;
  const uid = useId();
  const ids = {
    tab2d: `${uid}-tab-2d`,
    tab1d: `${uid}-tab-1d`,
    panel2d: `${uid}-panel-2d`,
    panel1d: `${uid}-panel-1d`,
    dpi: `${uid}-dpi`,
  };

  const [activeTab, setActiveTab] = useState<Tab>("1d");
  // Raw text of the field being edited. Every other field is derived from props.
  const [draft, setDraft] = useState<{ field: Field; value: string } | null>(null);
  const [singleInches, setSingleInches] = useState(8);
  const [lockAspectRatio, setLockAspectRatio] = useState(false);
  const [copied, setCopied] = useState<{ key: CopyKey; ok: boolean } | null>(null);
  const copyTimer = useRef<number | undefined>(undefined);
  const tabRefs = useRef<Record<Tab, HTMLButtonElement | null>>({ "2d": null, "1d": null });

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  const wPx = toPixels(widthInches, currentDpi);
  const hPx = toPixels(heightInches, currentDpi);
  const singlePx = toPixels(singleInches, currentDpi);

  const canonical: Record<Field, string> = {
    wIn: trimNumber(widthInches, 3),
    hIn: trimNumber(heightInches, 3),
    wPx: String(wPx),
    hPx: String(hPx),
    single: trimNumber(singleInches, 4),
    singlePx: String(singlePx),
    dpi: String(currentDpi),
  };

  const valueOf = (field: Field) => (draft?.field === field ? draft.value : canonical[field]);
  const isInvalid = (field: Field) => {
    if (draft?.field !== field) return false;
    const n = parsePositive(draft.value);
    return n === null || (field === "dpi" && n > MAX_DPI);
  };
  const endEdit = () => setDraft(null);

  // Commit a new width or height in inches, keeping the ratio when locked.
  const commitWidth = (w: number) => {
    const h = lockAspectRatio && widthInches > 0 ? w * (heightInches / widthInches) : heightInches;
    onDimensionsChange(w, h);
  };
  const commitHeight = (h: number) => {
    const w = lockAspectRatio && heightInches > 0 ? h * (widthInches / heightInches) : widthInches;
    onDimensionsChange(w, h);
  };

  const handleChange = (field: Field, raw: string) => {
    setDraft({ field, value: raw });
    const n = parsePositive(raw);
    if (n === null) return;
    switch (field) {
      case "wIn":
        return commitWidth(n);
      case "hIn":
        return commitHeight(n);
      case "wPx":
        return commitWidth(n / currentDpi);
      case "hPx":
        return commitHeight(n / currentDpi);
      case "single":
        return setSingleInches(n);
      case "singlePx":
        return setSingleInches(n / currentDpi);
      case "dpi":
        if (n <= MAX_DPI) onDpiChange(n);
        return;
    }
  };

  const applyQuickSize = (val: number) => {
    setDraft(null);
    setSingleInches(val);
  };

  const applyAspectRatio = (rw: number, rh: number) => {
    setDraft(null);
    onDimensionsChange(widthInches, widthInches * (rh / rw));
  };

  const swapOrientation = () => {
    setDraft(null);
    onDimensionsChange(heightInches, widthInches);
  };

  const copyToClipboard = async (text: string, key: CopyKey) => {
    let ok = true;
    try {
      await navigator.clipboard.writeText(text);
      confetti({
        particleCount: 28,
        spread: 45,
        origin: { y: 0.7 },
        colors: ["#d4af37", "#f5d78a", "#ffffff"],
        disableForReducedMotion: true,
      });
    } catch {
      ok = false;
    }
    setCopied({ key, ok });
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(null), 2000);
  };

  const copyLabel = (key: CopyKey, idle: string) => {
    if (copied?.key !== key) return idle;
    return copied.ok ? all.common.copied : all.common.copyFailed;
  };

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next: Tab = activeTab === "2d" ? "1d" : "2d";
    setActiveTab(next);
    tabRefs.current[next]?.focus();
  };

  const totalPixels = wPx * hPx;
  const quality = dpiQuality(currentDpi);
  const currentRatio = widthInches > 0 ? heightInches / widthInches : 0;

  const metrics = [
    { label: t.centimeters, value: `${f.fixed(widthInches * 2.54, 2)} × ${f.fixed(heightInches * 2.54, 2)} cm` },
    { label: t.millimeters, value: `${f.fixed(widthInches * 25.4, 1)} × ${f.fixed(heightInches * 25.4, 1)} mm` },
    { label: t.points, value: `${f.int(widthInches * 72)} × ${f.int(heightInches * 72)} pt` },
    { label: t.surfaceArea, value: `${f.fixed(widthInches * heightInches, 1)} ${t.sqIn}`, accent: true },
  ];
  // Shared props for every number field.
  const fieldText = { error: t.enterAbove0 };

  const tabClass = (active: boolean) =>
    `flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-bold tracking-wider uppercase transition-colors sm:flex-none sm:px-4 ${
      active ? "bg-gradient-to-r from-brand-500 to-violet-500 text-on-brand shadow-md" : "text-ink-soft hover:text-ink"
    }`;

  return (
    <section
      id="converter"
      aria-labelledby="converter-title"
      className="luxury-card mx-auto max-w-5xl scroll-mt-20 rounded-3xl border border-brand-400/30 p-4 shadow-[0_25px_60px_-20px_rgba(30,41,82,0.25)] sm:p-7"
    >
      <h2 id="converter-title" className="sr-only">
        {t.title}
      </h2>
      {/* Mode tabs and DPI control */}
      <div className="flex flex-col gap-4 border-b border-brand-400/20 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div role="tablist" aria-label={t.modeAria} className="flex rounded-xl border border-brand-400/25 bg-surface p-1">
          <button
            type="button"
            role="tab"
            id={ids.tab1d}
            ref={(el) => {
              tabRefs.current["1d"] = el;
            }}
            aria-selected={activeTab === "1d"}
            aria-controls={ids.panel1d}
            tabIndex={activeTab === "1d" ? 0 : -1}
            onClick={() => setActiveTab("1d")}
            onKeyDown={onTabKeyDown}
            className={tabClass(activeTab === "1d")}
          >
            <ArrowRightLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sm:hidden">{t.tabLengthShort}</span>
            <span className="hidden sm:inline">{t.tabLength}</span>
          </button>
          <button
            type="button"
            role="tab"
            id={ids.tab2d}
            ref={(el) => {
              tabRefs.current["2d"] = el;
            }}
            aria-selected={activeTab === "2d"}
            aria-controls={ids.panel2d}
            tabIndex={activeTab === "2d" ? 0 : -1}
            onClick={() => setActiveTab("2d")}
            onKeyDown={onTabKeyDown}
            className={tabClass(activeTab === "2d")}
          >
            <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sm:hidden">{t.tabSizeShort}</span>
            <span className="hidden sm:inline">{t.tabSize}</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor={ids.dpi} className="text-xs font-semibold tracking-wider text-ink-soft uppercase">
            {t.resolution}
          </label>
          <div
            className={`flex items-center rounded-xl border bg-surface-muted px-3 py-1.5 shadow-inner ${
              isInvalid("dpi") ? "border-red-400/70" : "border-brand-400/40 focus-within:border-brand-500"
            }`}
          >
            <input
              id={ids.dpi}
              type="number"
              inputMode="numeric"
              min="1"
              max={MAX_DPI}
              step="1"
              value={valueOf("dpi")}
              onChange={(e) => handleChange("dpi", e.target.value)}
              onBlur={endEdit}
              aria-invalid={isInvalid("dpi") || undefined}
              aria-describedby={`${ids.dpi}-hint`}
              className="w-16 bg-transparent text-end tabular-nums text-sm font-bold text-brand-700 focus:outline-none"
            />
            <span aria-hidden="true" className="ms-1.5 text-xs font-medium text-ink-muted">
              DPI
            </span>
          </div>
          <span
            id={`${ids.dpi}-hint`}
            className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
              // The quality label is hidden on phones; an invalid-DPI message always shows.
              isInvalid("dpi") ? "border-red-400/40 bg-red-500/10 text-red-600" : `hidden sm:inline ${TONE_CLASS[quality.tone]}`
            }`}
          >
            {isInvalid("dpi") ? fill(t.dpiRange, { max: f.int(MAX_DPI) }) : all.common.quality[quality.key]}
          </span>
        </div>
      </div>

      {activeTab === "2d" ? (
        <div id={ids.panel2d} role="tabpanel" aria-labelledby={ids.tab2d} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Inches */}
            <div className="flex flex-col rounded-2xl border border-brand-400/25 bg-gradient-to-b from-white to-white p-4 shadow-lg sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-700 uppercase">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-400" />
                  {t.physicalSize}
                </h3>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={swapOrientation}
                    className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1 text-[11px] font-medium text-ink-soft transition-colors hover:border-brand-400/50 hover:text-brand-700"
                    title={t.swapTitle}
                  >
                    <ArrowLeftRight className="h-3 w-3" aria-hidden="true" />
                    {t.swap}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLockAspectRatio((v) => !v)}
                    aria-pressed={lockAspectRatio}
                    className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      lockAspectRatio
                        ? "border-brand-400 bg-brand-400/20 text-brand-700"
                        : "border-line text-ink-soft hover:border-brand-400/50 hover:text-brand-700"
                    }`}
                  >
                    {lockAspectRatio ? (
                      <Lock className="h-3 w-3 text-brand-600" aria-hidden="true" />
                    ) : (
                      <Unlock className="h-3 w-3" aria-hidden="true" />
                    )}
                    {lockAspectRatio ? t.ratioLocked : t.lockRatio}
                  </button>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                <NumberField
                  id={`${uid}-w-in`}
                  {...fieldText}
                  label={t.width}
                  unit="in"
                  value={valueOf("wIn")}
                  invalid={isInvalid("wIn")}
                  onChange={(v) => handleChange("wIn", v)}
                  onBlur={endEdit}
                />
                <NumberField
                  id={`${uid}-h-in`}
                  {...fieldText}
                  label={t.height}
                  unit="in"
                  value={valueOf("hIn")}
                  invalid={isInvalid("hIn")}
                  onChange={(v) => handleChange("hIn", v)}
                  onBlur={endEdit}
                />
              </div>
              {lockAspectRatio && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-brand-700">
                  <Lock className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {fill(t.lockHint, { ratio: aspectRatioLabel(widthInches, heightInches) })}
                </p>
              )}
              <div className="mt-auto pt-5">
                <dl className="grid grid-cols-2 gap-3 rounded-xl border border-brand-400/25 bg-brand-50/60 p-3">
                  <div>
                    <dt className={labelClass}>{t.totalArea}</dt>
                    <dd className="tabular-nums text-sm font-bold text-ink">
                      {f.dec(widthInches * heightInches, 2)} {t.sqIn}
                    </dd>
                  </div>
                  <div className="text-end">
                    <dt className={labelClass}>{t.aspectRatio}</dt>
                    <dd className="tabular-nums text-sm font-bold text-brand-700">
                      {aspectRatioLabel(widthInches, heightInches)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Pixels */}
            <div className="flex flex-col rounded-2xl border border-violet-300/60 bg-gradient-to-b from-violet-50 to-white p-4 shadow-[0_0_30px_rgba(139,92,246,0.10)] sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-700 uppercase">
                  <Sparkles className="h-3.5 w-3.5 text-violet-600" aria-hidden="true" />
                  {t.digitalSize}
                </h3>
                <button
                  type="button"
                  onClick={() => copyToClipboard(`${wPx} × ${hPx} px`, "dimensions")}
                  className="flex items-center gap-1.5 rounded-lg border border-violet-300/60 bg-violet-500/10 px-2.5 py-1 text-[11px] font-semibold text-violet-700 transition-colors hover:bg-violet-500/20"
                >
                  {copied?.key === "dimensions" && copied.ok ? (
                    <Check className="h-3 w-3 text-emerald-700" aria-hidden="true" />
                  ) : (
                    <Copy className="h-3 w-3" aria-hidden="true" />
                  )}
                  <span aria-live="polite">{copyLabel("dimensions", t.copySize)}</span>
                </button>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                <NumberField
                  id={`${uid}-w-px`}
                  {...fieldText}
                  label={t.width}
                  unit="px"
                  accent
                  value={valueOf("wPx")}
                  invalid={isInvalid("wPx")}
                  onChange={(v) => handleChange("wPx", v)}
                  onBlur={endEdit}
                />
                <NumberField
                  id={`${uid}-h-px`}
                  {...fieldText}
                  label={t.height}
                  unit="px"
                  accent
                  value={valueOf("hPx")}
                  invalid={isInvalid("hPx")}
                  onChange={(v) => handleChange("hPx", v)}
                  onBlur={endEdit}
                />
              </div>

              <div className="mt-auto pt-5">
                <dl className="grid grid-cols-2 gap-3 rounded-xl border border-violet-200 bg-violet-50/60 p-3">
                  <div>
                    <dt className={labelClass}>{t.totalPixels}</dt>
                    <dd className="tabular-nums text-sm font-bold text-ink">{f.int(totalPixels)}</dd>
                  </div>
                  <div className="text-end">
                    <dt className={labelClass}>{t.megapixels}</dt>
                    <dd className="tabular-nums text-sm font-bold text-violet-700">
                      {f.fixed(totalPixels / 1_000_000, 2)} MP
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Aspect ratios */}
          <div className="rounded-2xl border border-line bg-surface-muted/70 p-4">
            <h3 className={labelClass}>{t.ratioTitle}</h3>
            <div className="no-scrollbar -mx-1 mt-2.5 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap">
              {ASPECT_RATIOS.map((item, i) => {
                const active = Math.abs(currentRatio - item.h / item.w) < 0.002;
                return (
                  <button
                    type="button"
                    key={`${item.w}:${item.h}`}
                    onClick={() => applyAspectRatio(item.w, item.h)}
                    aria-pressed={active}
                    className={chipClass(active, "sm")}
                  >
                    {t.ratios[i]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Other units */}
          <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-line bg-surface-muted p-3 text-center">
                <dt className={labelClass}>{m.label}</dt>
                <dd
                  className={`mt-1 tabular-nums text-xs font-semibold sm:text-sm ${
                    m.accent ? "text-violet-700" : "text-ink"
                  }`}
                >
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ) : (
        <div id={ids.panel1d} role="tabpanel" aria-labelledby={ids.tab1d} className="mt-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface-muted p-5 shadow-md sm:p-6">
              <NumberField
                id={`${uid}-single`}
                {...fieldText}
                label={t.lengthInInches}
                unit="in"
                large
                value={valueOf("single")}
                invalid={isInvalid("single")}
                onChange={(v) => handleChange("single", v)}
                onBlur={endEdit}
              />
              <input
                type="range"
                min="0.1"
                max="60"
                step="0.1"
                value={Math.min(60, singleInches)}
                onChange={(e) => {
                  setDraft(null);
                  setSingleInches(Number(e.target.value));
                }}
                aria-label={t.lengthInInches}
                className="mt-5 w-full cursor-pointer"
              />
              <div aria-hidden="true" className="mt-1 flex justify-between tabular-nums text-[11px] text-ink-muted">
                <span dir="ltr">{f.dec(0.1)} in</span>
                <span dir="ltr">30 in</span>
                <span dir="ltr">60 in</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {QUICK_SIZES.map((f) => (
                  <button
                    type="button"
                    key={f.label}
                    onClick={() => applyQuickSize(f.val)}
                    aria-pressed={singleInches === f.val}
                    className={chipClass(singleInches === f.val, "sm")}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-violet-300/60 bg-gradient-to-b from-violet-50 to-white p-5 shadow-md sm:p-6">
              <NumberField
                id={`${uid}-single-px`}
                {...fieldText}
                label={fill(t.pixelsAt, { dpi: currentDpi })}
                unit="px"
                large
                accent
                value={valueOf("singlePx")}
                invalid={isInvalid("singlePx")}
                onChange={(v) => handleChange("singlePx", v)}
                onBlur={endEdit}
              />
              <input
                type="range"
                min="1"
                max={currentDpi * 60}
                step="1"
                value={Math.min(currentDpi * 60, singlePx)}
                onChange={(e) => {
                  setDraft(null);
                  setSingleInches(Number(e.target.value) / currentDpi);
                }}
                aria-label={t.lengthInPixels}
                className="mt-5 w-full cursor-pointer"
              />
              <div aria-hidden="true" className="mt-1 flex justify-between tabular-nums text-[11px] text-ink-muted">
                <span dir="ltr">1 px</span>
                <span dir="ltr">{f.int(currentDpi * 30)} px</span>
                <span dir="ltr">{f.int(currentDpi * 60)} px</span>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(`${singlePx}px`, "single")}
                className="mt-4 flex items-center gap-1.5 rounded-lg border border-violet-300/60 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-brand-700 transition-colors hover:bg-violet-500/20"
              >
                {copied?.key === "single" && copied.ok ? (
                  <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                <span aria-live="polite">{copyLabel("single", t.copyPixels)}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Formula */}
      <div className="mt-8 rounded-2xl border border-brand-400/25 bg-gradient-to-r from-brand-50 via-brand-50 to-brand-50 p-4 shadow-lg sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 space-y-1">
            <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-brand-700 uppercase">
              <Code className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
              {t.formulaTitle}
            </span>
            <p className="tabular-nums text-sm font-bold break-words text-ink">
              {t.formula}{" "}
              <span dir="ltr" className="block text-brand-700 sm:inline">
                {activeTab === "2d"
                  ? `${canonical.wIn} in × ${currentDpi} = ${wPx} px`
                  : `${canonical.single} in × ${currentDpi} = ${singlePx} px`}
              </span>
            </p>
            <p className="text-xs text-ink-muted">{t.reverse}</p>
          </div>

          {activeTab === "2d" && (
            <button
              type="button"
              onClick={() =>
                copyToClipboard(
                  `/* Rendered @ ${currentDpi} DPI */\nwidth: ${wPx}px; /* ${canonical.wIn} inches */\nheight: ${hPx}px; /* ${canonical.hIn} inches */`,
                  "css",
                )
              }
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-brand-400/50 bg-brand-400/15 px-4 py-2.5 text-xs font-bold tracking-wider text-brand-700 transition-colors hover:bg-brand-400/25"
            >
              {copied?.key === "css" && copied.ok ? (
                <Check className="h-4 w-4 text-emerald-700" aria-hidden="true" />
              ) : (
                <Code className="h-4 w-4" aria-hidden="true" />
              )}
              <span aria-live="polite">{copyLabel("css", t.copyCss)}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
