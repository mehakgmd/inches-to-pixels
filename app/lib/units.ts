export const MIN_DPI = 1;
export const MAX_DPI = 4800;

/** DPI values on the homepage shelf. Their names are in the language files (hero.presets), same order. */
export const DPI_PRESETS = [72, 96, 150, 300, 458];

/** Inches → whole pixels at a given DPI. */
export function toPixels(inches: number, dpi: number): number {
  return Math.round(inches * dpi);
}

/** Round to at most `digits` decimals and drop trailing zeros. */
export function trimNumber(value: number, digits = 3): string {
  if (!Number.isFinite(value)) return "0";
  return String(Number(value.toFixed(digits)));
}

/** Parse a user-typed positive number; returns null for empty, invalid, zero or negative input. */
export function parsePositive(raw: string): number | null {
  if (raw.trim() === "") return null;
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function clampDpi(dpi: number): number {
  return Math.min(MAX_DPI, Math.max(MIN_DPI, Math.round(dpi)));
}

export type QualityKey = "archival" | "proof" | "screen";

/** Quality band for a DPI value, used for UI badges. The label is in the language files (common.quality). */
export function dpiQuality(dpi: number): { key: QualityKey; tone: "brand" | "emerald" | "zinc" } {
  if (dpi >= 300) return { key: "archival", tone: "emerald" };
  if (dpi >= 150) return { key: "proof", tone: "brand" };
  return { key: "screen", tone: "zinc" };
}

/**
 * Width:height as a short ratio. When small whole numbers (up to 32) match within 0.1% it shows them,
 * e.g. 4 × 6 → "2:3", 8.5 × 11 → "17:22", 1056.667 × 1585 → "2:3". Otherwise "1 : 1.41" style.
 */
export function aspectRatioLabel(w: number, h: number): string {
  if (!(w > 0) || !(h > 0)) return "–";
  const r = w / h;
  for (let y = 1; y <= 32; y++) {
    const x = Math.round(r * y);
    if (x >= 1 && x <= 32 && Math.abs(x / y - r) / r < 0.001) return `${x}:${y}`;
  }
  return w <= h ? `1 : ${trimNumber(h / w, 2)}` : `${trimNumber(w / h, 2)} : 1`;
}
