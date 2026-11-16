import { AppWindow, Gauge, House, Printer, Ruler, Table as TableIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { PageKey } from "../../lib/hubs";

/** One icon per page. Kept apart from parts.tsx so browser code can use it without loading page text. */
export const PAGE_ICONS: Record<PageKey, LucideIcon> = {
  home: House,
  dpi: Gauge,
  software: AppWindow,
  print: Printer,
  sizes: Ruler,
  chart: TableIcon,
};
