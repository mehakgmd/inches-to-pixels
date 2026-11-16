"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CALC_DPIS, COMMON_SIZES, type CalcConfig } from "../../lib/hubs";
import { useI18n } from "../../i18n/client";
import { fill } from "../../i18n/format";
import { MAX_DPI, parsePositive } from "../../lib/units";
import { chipClass, labelClass } from "../ui";

/** Compact calculator for topic pages. Inches → pixels, or pixels → inches when mode is "px". */
export default function HubCalculator({ config }: { config: CalcConfig }) {
  const { t: all, f, href } = useI18n();
  const t = all.hubCalc;
  const uid = useId();
  const reverse = config.mode === "px";
  const unit = reverse ? "px" : "in";

  const [w, setW] = useState(String(config.w));
  const [h, setH] = useState(String(config.h));
  const [dpi, setDpi] = useState(config.dpi);
  // Text of the custom DPI box. Any valid value from 1 to MAX_DPI becomes the active DPI.
  const [customDpi, setCustomDpi] = useState("");
  const customValue = parsePositive(customDpi);
  const customInvalid = customDpi !== "" && (customValue === null || customValue > MAX_DPI);
  const customActive = !CALC_DPIS.includes(dpi);
  const [preset, setPreset] = useState(() =>
    String(COMMON_SIZES.findIndex((s) => s.w === config.w && s.h === config.h)),
  );

  const W = parsePositive(w);
  const H = parsePositive(h);

  const result =
    W === null || H === null
      ? null
      : reverse
        ? {
            main: `${f.dec(W / dpi)} × ${f.dec(H / dpi)} in`,
            sub: fill(t.resultSub, { w: f.dec(W), h: f.dec(H), unit: "px", dpi: f.dec(dpi) }),
          }
        : {
            main: `${f.px(W, dpi)} × ${f.px(H, dpi)} px`,
            sub: fill(t.resultSub, { w: f.dec(W), h: f.dec(H), unit: "in", dpi: f.dec(dpi) }),
          };

  const inputBox = (invalid: boolean) =>
    `mt-1.5 flex items-center rounded-xl border bg-surface px-3 py-2.5 transition-colors ${
      invalid
        ? "border-red-400/70"
        : reverse
          ? "border-violet-300/70 focus-within:border-violet-500"
          : "border-line focus-within:border-brand-400"
    }`;
  const inputText = `w-full min-w-0 bg-transparent text-lg font-bold tabular-nums focus:outline-none ${
    reverse ? "text-violet-700" : "text-ink"
  }`;

  const field = (key: "w" | "h", label: string, value: string, set: (v: string) => void) => {
    const id = `${uid}-${key}`;
    const invalid = parsePositive(value) === null;
    return (
      <div>
        <label htmlFor={id} className={labelClass}>
          {label} ({unit})
        </label>
        <div className={inputBox(invalid)}>
          <input
            id={id}
            type="number"
            inputMode="decimal"
            step="any"
            min="0"
            value={value}
            onChange={(e) => {
              set(e.target.value);
              setPreset("-1");
            }}
            aria-invalid={invalid || undefined}
            className={inputText}
          />
          <span aria-hidden="true" className="ms-2 text-xs text-ink-muted tabular-nums">
            {unit}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      id="calculator"
      className="luxury-card mx-auto max-w-5xl scroll-mt-24 rounded-3xl border border-brand-400/30 p-4 text-start shadow-[0_25px_60px_-20px_rgba(30,41,82,0.25)] sm:p-7"
    >
      <h2 className="sr-only">{reverse ? t.titlePx : t.titleIn}</h2>

      {config.presets && (
        <div className="mb-4">
          <label htmlFor={`${uid}-preset`} className={labelClass}>
            {t.size}
          </label>
          <select
            id={`${uid}-preset`}
            value={preset}
            onChange={(e) => {
              setPreset(e.target.value);
              const s = COMMON_SIZES[Number(e.target.value)];
              if (s) {
                setW(String(s.w));
                setH(String(s.h));
              }
            }}
            className="mt-1.5 w-full cursor-pointer rounded-xl border border-line bg-surface px-3 py-2.5 text-sm font-semibold text-ink focus:border-brand-400 focus:outline-none sm:w-auto"
          >
            {preset === "-1" && <option value="-1">{t.customSize}</option>}
            {COMMON_SIZES.map((s, i) => (
              <option key={s.id} value={i}>
                {all.sizeLabels[i]}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {field("w", t.width, w, setW)}
        {field("h", t.height, h, setH)}
      </div>

      <div className="mt-4">
        <span id={`${uid}-dpi`} className={labelClass}>
          {t.dpi}
        </span>
        <div
          role="group"
          aria-labelledby={`${uid}-dpi`}
          className="mt-2 flex flex-wrap gap-2"
        >
          {CALC_DPIS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => {
                setDpi(d);
                setCustomDpi("");
              }}
              aria-pressed={dpi === d}
              className={chipClass(dpi === d, "sm")}
            >
              {d} DPI
            </button>
          ))}

          {/* Custom DPI: same size as the chips, highlighted while it is the active value */}
          <div
            className={`${chipClass(customActive && !customInvalid, "sm")} shrink-0 cursor-text gap-1.5 py-1 ${
              customInvalid ? "!border-red-400/70" : ""
            }`}
          >
            <label htmlFor={`${uid}-custom-dpi`} className="cursor-text">
              {t.custom}
            </label>
            <input
              id={`${uid}-custom-dpi`}
              type="number"
              inputMode="numeric"
              min="1"
              max={MAX_DPI}
              step="any"
              placeholder="240"
              value={customDpi}
              onChange={(e) => {
                const raw = e.target.value;
                setCustomDpi(raw);
                const n = parsePositive(raw);
                if (n !== null && n <= MAX_DPI) setDpi(Math.round(n * 100) / 100);
              }}
              aria-invalid={customInvalid || undefined}
              aria-describedby={customInvalid ? `${uid}-custom-dpi-error` : undefined}
              className="w-14 bg-transparent text-end text-[11px] font-bold tracking-normal normal-case tabular-nums placeholder:font-normal placeholder:text-ink-muted/70 focus:outline-none"
            />
            <span aria-hidden="true">DPI</span>
          </div>
        </div>
        {customInvalid && (
          <p id={`${uid}-custom-dpi-error`} className="mt-1 text-[11px] text-red-600">
            {fill(t.dpiError, { max: f.int(MAX_DPI) })}
          </p>
        )}
      </div>

      <div
        aria-live="polite"
        className={`mt-5 rounded-2xl border p-4 sm:p-5 ${
          reverse ? "border-brand-400/30 bg-brand-50/70" : "border-violet-300/60 bg-violet-50/60"
        }`}
      >
        <span className={labelClass}>{t.result}</span>
        {result ? (
          <>
            <p
              className={`mt-1 text-2xl font-extrabold tracking-tight tabular-nums sm:text-3xl ${
                reverse ? "text-brand-700" : "text-violet-700"
              }`}
            >
              {result.main}
            </p>
            <p className="mt-0.5 text-sm text-ink-muted tabular-nums">{result.sub}</p>
          </>
        ) : (
          <p className="mt-1 text-sm text-red-600">{t.enterBoth}</p>
        )}
      </div>

      <p className="mt-4 text-xs text-ink-muted">
        {t.needMore}{" "}
        <Link href={`${href("/")}#converter`} className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:underline">
          {t.openFull}
          <ArrowRight className="h-3 w-3 rtl:-scale-x-100" aria-hidden="true" />
        </Link>
      </p>
    </div>
  );
}
