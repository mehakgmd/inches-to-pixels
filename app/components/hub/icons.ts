import { AppWindow, Gauge, House, Info, Mail, Printer, Ruler, ShieldCheck, Table as TableIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { InfoKey, PageKey } from "../../lib/hubs";

/** One icon per page. Kept apart from parts.tsx so browser code can use it without loading page text. */
export const PAGE_ICONS: Record<PageKey, LucideIcon> = {
  home: House,
  dpi: Gauge,
  software: AppWindow,
  print: Printer,
  sizes: Ruler,
  chart: TableIcon,
};

/** Icons for the information pages in the "More" menu and footer. */
export const INFO_ICONS: Record<InfoKey, LucideIcon> = {
  about: Info,
  contact: Mail,
  privacy: ShieldCheck,
};
