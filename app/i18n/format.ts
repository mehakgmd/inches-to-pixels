import { LOCALE_INFO, type Locale } from "./config";

/** Number formatting for a language: thousands separators and decimal marks follow that language. */
export function numberFormat(locale: Locale) {
  const intl = LOCALE_INFO[locale].intl;
  const whole = new Intl.NumberFormat(intl, { maximumFractionDigits: 0 });
  const decimals = new Map<number, Intl.NumberFormat>();
  const dec = (n: number, digits = 2) => {
    let f = decimals.get(digits);
    if (!f) {
      f = new Intl.NumberFormat(intl, { maximumFractionDigits: digits });
      decimals.set(digits, f);
    }
    return f.format(Number(n.toFixed(digits)));
  };
  return {
    /** Whole number, e.g. 1,200 (en) or 1.200 (de). */
    int: (n: number) => whole.format(Math.round(n)),
    /** Up to `digits` decimals, trailing zeros dropped. */
    dec,
    /** Fixed number of decimals, e.g. 28.80. */
    fixed: (n: number, digits: number) =>
      new Intl.NumberFormat(intl, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n),
    /** Pixels for a length at a resolution, as a whole number. */
    px: (inches: number, dpi: number) => whole.format(Math.round(inches * dpi)),
  };
}

export type NumberFormat = ReturnType<typeof numberFormat>;

/** Fills {name} placeholders in a message. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
