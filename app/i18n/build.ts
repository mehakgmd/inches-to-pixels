/**
 * Builds the number-heavy parts of pages (tables, per-size sections) from a language's words,
 * so every language shows the same values formatted its own way.
 */
import type { Locale } from "./config";
import { fill, numberFormat } from "./format";
import {
  CALC_DPIS,
  CHART_HIGHLIGHTS,
  CHART_VALUES,
  COMMON_SIZES,
  PRINT_SIZES,
  type FaqEntry,
  type HubText,
  type Table,
} from "../lib/hubs";

/* ---------- tables used inside written content ---------- */

/** DPI page: 1, 4 and 6 inches at every calculator DPI. `row` and `cell` use {dpi} and {px}. */
export function dpiTable(locale: Locale, t: { corner: string; cols: [string, string, string]; row: string; cell: string }): Table {
  const f = numberFormat(locale);
  return {
    corner: t.corner,
    cols: t.cols,
    rows: CALC_DPIS.map((d) => ({
      label: fill(t.row, { dpi: d }),
      cells: [1, 4, 6].map((i) => fill(t.cell, { px: f.px(i, d) })),
    })),
  };
}

/** Software page: 1–8 inches at 96, 150 and 300 PPI. */
export function softwareTable(locale: Locale, t: { corner: string; cols: [string, string, string] }): Table {
  const f = numberFormat(locale);
  return {
    corner: t.corner,
    cols: t.cols,
    rows: [1, 2, 4, 6, 8].map((i) => ({ label: f.dec(i), cells: [96, 150, 300].map((d) => f.px(i, d)) })),
  };
}

/** Homepage: 1–11 inches at 72, 96, 150 and 300 PPI. `col` uses {ppi}. */
export function homeTable(locale: Locale, t: { corner: string; col: string }): Table {
  const f = numberFormat(locale);
  const ppis = [72, 96, 150, 300];
  return {
    corner: t.corner,
    cols: ppis.map((p) => fill(t.col, { ppi: p })),
    rows: [1, 2, 4, 8.5, 11].map((i) => ({ label: f.dec(i), cells: ppis.map((p) => f.px(i, p)) })),
  };
}

/* ---------- pages that are mostly computed ---------- */

interface PageWords {
  nav: string;
  h1: string;
  title?: string;
  seoTitle?: string;
  description: string;
  answer: string;
  faq: FaqEntry[];
}

export interface PrintText extends PageWords {
  printing: { heading: string; body: string; corner: string; /** {w} and {h} */ row: string };
  photos: { heading: string; body: string };
}

export interface SizesText extends PageWords {
  overview: { heading: string; body: string; corner: string };
  /** {label} {w} {h} {w300} {h300} {w72} {h72} */
  sizeBody: string;
}

export interface ChartText extends PageWords {
  chart: { heading: string; body: string; corner: string };
  /** One label per CHART_HIGHLIGHTS value, same order (1/8 inch, 2 inches, …). */
  items: string[];
  /** {label} {px72} {px96} {px150} {px300} */
  itemBody: string;
}

const words = ({ nav, h1, title, seoTitle, description, answer, faq }: PageWords) => ({
  nav,
  h1,
  ...(title ? { title } : {}),
  ...(seoTitle ? { seoTitle } : {}),
  description,
  answer,
  faq,
});

export function printHub(locale: Locale, t: PrintText): HubText {
  const f = numberFormat(locale);
  return {
    ...words(t),
    sections: [
      {
        heading: t.printing.heading,
        body: t.printing.body,
        table: {
          corner: t.printing.corner,
          cols: ["150 DPI", "300 DPI"],
          rows: PRINT_SIZES.map(([w, h]) => ({
            label: fill(t.printing.row, { w, h }),
            cells: [150, 300].map((d) => `${f.px(w, d)} × ${f.px(h, d)}`),
          })),
        },
      },
      { heading: t.photos.heading, body: t.photos.body },
    ],
  };
}

export function sizesHub(locale: Locale, t: SizesText, sizeLabels: string[]): HubText {
  const f = numberFormat(locale);
  const dpis = [72, 150, 300];
  return {
    ...words(t),
    sections: [
      {
        heading: t.overview.heading,
        body: t.overview.body,
        table: {
          corner: t.overview.corner,
          cols: dpis.map((d) => `${d} DPI`),
          rows: COMMON_SIZES.map((s, i) => ({
            label: sizeLabels[i],
            cells: dpis.map((d) => `${f.px(s.w, d)} × ${f.px(s.h, d)}`),
          })),
        },
      },
      ...COMMON_SIZES.map((s, i) => ({
        heading: sizeLabels[i],
        body: fill(t.sizeBody, {
          label: sizeLabels[i],
          w: f.dec(s.w, 3),
          h: f.dec(s.h, 3),
          w300: f.px(s.w, 300),
          h300: f.px(s.h, 300),
          w72: f.px(s.w, 72),
          h72: f.px(s.h, 72),
        }),
      })),
    ],
  };
}

export function chartHub(locale: Locale, t: ChartText): HubText {
  const f = numberFormat(locale);
  const dpis = [72, 96, 150, 300];
  const label = (x: number) => (x === 0.125 ? "1/8" : f.dec(x));
  return {
    ...words(t),
    sections: [
      {
        heading: t.chart.heading,
        body: t.chart.body,
        table: {
          corner: t.chart.corner,
          cols: dpis.map((d) => `${d} DPI`),
          rows: CHART_VALUES.map((v) => ({ label: label(v), cells: dpis.map((d) => f.px(v, d)) })),
        },
      },
      ...CHART_HIGHLIGHTS.map((c, i) => ({
        heading: t.items[i],
        body: fill(t.itemBody, {
          label: t.items[i],
          px72: f.px(c.value, 72),
          px96: f.px(c.value, 96),
          px150: f.px(c.value, 150),
          px300: f.px(c.value, 300),
        }),
      })),
    ],
  };
}
