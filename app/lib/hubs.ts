/**
 * Structure of the topic pages ("hubs"): URLs, calculator defaults, section ids and the numbers behind every table.
 * The words live in app/i18n/messages/<language>.ts; app/i18n/content.ts joins the two.
 */

export type HubKey = "dpi" | "software" | "print" | "sizes" | "chart";

export interface Table {
  corner: string;
  cols: string[];
  rows: { label: string; cells: string[] }[];
}

/** Rich content for sections written from the content documents. Rendered in order. */
export type ContentBlock =
  | { type: "p"; text: string }
  /** Numbered steps. */
  | { type: "steps"; items: string[] }
  /** Bulleted list. */
  | { type: "list"; items: string[] }
  /** Formula or calculation lines, shown in a highlighted box. */
  | { type: "math"; lines: string[]; large?: boolean }
  /** Side note in a soft box. */
  | { type: "note"; text: string }
  | { type: "table"; table: Table; caption: string }
  /** Sub-heading (H3) with its own blocks. */
  | { type: "sub"; heading: string; blocks: ContentBlock[] };

/** A section as written in a language file. Its id comes from SECTION_IDS so links work in every language. */
export interface HubSectionText {
  heading: string;
  body?: string;
  table?: Table;
  /** Spreadsheet formula or similar snippet shown in a code block. */
  formula?: string;
  /** Richer content; rendered after body/table/formula when present. */
  blocks?: ContentBlock[];
}

export interface HubSection extends HubSectionText {
  id: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface CalcConfig {
  /** "px" turns the calculator around: pixels in, inches out. */
  mode: "in" | "px";
  w: number;
  h: number;
  dpi: number;
  /** Show the common-size dropdown. */
  presets?: boolean;
}

/** Words of a topic page. */
export interface HubText {
  /** Short name in menus. */
  nav: string;
  h1: string;
  /** Shorter title for search results when the H1 is too long (Google shows about 60 characters). */
  title?: string;
  /** Full search-result title used as is, without the site name appended. */
  seoTitle?: string;
  /** Meta description for search results. */
  description: string;
  answer: string;
  /** Extra intro paragraphs shown under the answer box. */
  introNotes?: string[];
  sections: HubSectionText[];
  faq: FaqEntry[];
}

export interface Hub extends Omit<HubText, "sections"> {
  key: HubKey;
  path: string;
  /** Set to false to hide the "Related pages" section at the bottom of the page. */
  showRelated?: boolean;
  calc: CalcConfig;
  sections: HubSection[];
}

/* ---------- numbers shared by every language ---------- */

export const CALC_DPIS = [72, 96, 150, 300, 350, 400, 600];

/** Sizes offered in the calculator dropdown and on the sizes page. Labels are in the language files (sizeLabels). */
export const COMMON_SIZES: { id: string; w: number; h: number }[] = [
  { id: "8-5-x-11-inches-letter", w: 8.5, h: 11 },
  { id: "a4-size", w: 8.27, h: 11.69 },
  { id: "5-x-7-inches", w: 5, h: 7 },
  { id: "4-x-6-inches", w: 4, h: 6 },
  { id: "8-x-10-inches", w: 8, h: 10 },
  { id: "18-x-24-inches", w: 18, h: 24 },
  { id: "24-x-36-inches", w: 24, h: 36 },
  { id: "2-x-2-inches", w: 2, h: 2 },
  { id: "card-size-2-5-x-3-5", w: 2.5, h: 3.5 },
];

export const CHART_VALUES = [
  0.125, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.25, 2.5, 3, 4, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 9, 9.5, 10, 11, 12, 13, 16, 18,
  20, 21, 22, 24, 28, 40, 48, 50, 60, 72, 96,
];

/** Values that get their own linkable section on the chart page, in the order of the chart's item labels. */
export const CHART_HIGHLIGHTS: { id: string; value: number }[] = [
  { id: "1-8-inch", value: 0.125 },
  { id: "2-inches", value: 2 },
  { id: "2-5-inches", value: 2.5 },
  { id: "3-inches", value: 3 },
  { id: "4-inches", value: 4 },
  { id: "5-inches", value: 5 },
  { id: "8-5-inches", value: 8.5 },
];

/** Print sizes on the print page table. */
export const PRINT_SIZES: [number, number][] = [
  [4, 6],
  [5, 7],
  [8, 10],
  [11, 14],
];

/* ---------- homepage converter defaults ---------- */

export const HOME = {
  /** Converter starts at 4 × 6 in, 300 PPI. */
  calc: { w: 4, h: 6, dpi: 300 },
};

/* ---------- the topic pages ---------- */

export const HUB_KEYS: HubKey[] = ["dpi", "software", "print", "sizes", "chart"];

export const HUB_CONFIG: Record<HubKey, Pick<Hub, "path" | "calc" | "showRelated">> = {
  dpi: { path: "/inches-to-pixels-dpi-converter/", showRelated: false, calc: { mode: "in", w: 4, h: 6, dpi: 300 } },
  software: { path: "/inches-to-pixels-software/", calc: { mode: "in", w: 4, h: 6, dpi: 300 } },
  print: { path: "/inches-to-pixels-for-print-and-photos/", calc: { mode: "in", w: 5, h: 7, dpi: 300 } },
  sizes: { path: "/common-sizes-in-pixels/", calc: { mode: "in", w: 8.5, h: 11, dpi: 300, presets: true } },
  chart: { path: "/inches-to-pixels-chart/", calc: { mode: "in", w: 2, h: 2, dpi: 300 } },
};

/** Section ids per page, in section order. Kept in English so links and anchors work in every language. */
export const SECTION_IDS: Record<HubKey, string[]> = {
  dpi: [
    "how-to-convert-inches-to-pixels",
    "formula-and-worked-examples",
    "inches-to-pixels-reference-table",
    "choose-the-right-resolution-for-the-job",
  ],
  software: [
    "how-to-convert-your-dimensions",
    "formula-and-examples",
    "quick-conversion-table",
    "apply-the-result-in-your-software",
    "avoid-common-conversion-mistakes",
  ],
  print: ["printing", "photos-and-images"],
  sizes: ["all-common-sizes-at-a-glance", ...COMMON_SIZES.map((s) => s.id)],
  chart: ["conversion-chart", ...CHART_HIGHLIGHTS.map((c) => c.id)],
};

export type PageKey = HubKey | "home";

/** Navigation order used by the navbar, footer and related-page links. */
export const PAGE_KEYS: PageKey[] = ["home", ...HUB_KEYS];

export const PAGE_PATH: Record<PageKey, string> = {
  home: "/",
  ...Object.fromEntries(HUB_KEYS.map((k) => [k, HUB_CONFIG[k].path])),
} as Record<PageKey, string>;
