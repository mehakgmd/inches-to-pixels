import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localePath, type Locale } from "../../i18n/config";
import { getMessages } from "../../i18n/messages";
import { HUB_KEYS, PAGE_KEYS, PAGE_PATH, type HubKey, type Table } from "../../lib/hubs";
import { chipClass } from "../ui";
import { PAGE_ICONS } from "./icons";
import { AnswerBox } from "./AnswerBox";

export { AnswerBox, PAGE_ICONS };

/** Reference table. Scrolls sideways on small screens with the first column pinned. */
export function DataTable({ table, caption }: { table: Table; caption: string }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-white">
      <table className="w-full min-w-[420px] border-collapse text-sm tabular-nums">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-brand-50">
            <th
              scope="col"
              className="sticky start-0 bg-brand-50 px-3 py-2.5 text-start text-[11px] font-semibold tracking-wider whitespace-nowrap text-brand-700 uppercase"
            >
              {table.corner}
            </th>
            {table.cols.map((c) => (
              <th
                key={c}
                scope="col"
                className="px-3 py-2.5 text-start text-[11px] font-semibold tracking-wider whitespace-nowrap text-brand-700 uppercase"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.label} className="border-t border-line">
              <th scope="row" className="sticky start-0 bg-white px-3 py-2 text-start font-semibold whitespace-nowrap text-ink">
                {row.label}
              </th>
              {row.cells.map((cell, i) => (
                <td key={i} className="px-3 py-2 whitespace-nowrap text-ink-soft">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Card grid linking to every topic page (used on the homepage). */
export function TopicGrid({ locale }: { locale: Locale }) {
  const { ui, content } = getMessages(locale);
  return (
    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {HUB_KEYS.map((key) => {
        const Icon = PAGE_ICONS[key];
        return (
          <li key={key}>
            <Link
              href={localePath(locale, PAGE_PATH[key])}
              className="group flex h-full items-start gap-3 rounded-2xl border border-line bg-white/80 p-4 transition-[border-color,box-shadow] hover:border-brand-400/60 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand-400/30 bg-brand-50 text-brand-700">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-brand-700">{ui.common.pageNames[key]}</span>
                <span className="mt-0.5 block text-xs leading-snug text-ink-muted">{content.hubs[key].h1}</span>
              </span>
              <ArrowRight
                className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600 motion-reduce:transition-none rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Chip links to every page except the current one. */
export function RelatedLinks({ locale, current }: { locale: Locale; current: HubKey }) {
  const { ui, content } = getMessages(locale);
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {PAGE_KEYS.filter((k) => k !== current).map((key) => {
        const Icon = PAGE_ICONS[key];
        return (
          <li key={key}>
            <Link href={localePath(locale, PAGE_PATH[key])} className={chipClass(false, "sm")}>
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {key === "home" ? content.page.relatedHome : ui.common.pageNames[key]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** White card wrapper used for every content section on topic pages. */
export function SectionCard({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="luxury-card scroll-mt-24 rounded-3xl p-5 sm:p-7">
      <h2 id={id ? `${id}-title` : undefined} className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
