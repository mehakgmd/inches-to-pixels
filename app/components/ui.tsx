import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
}

/** Shared eyebrow + title + intro block used at the top of every section. */
export function SectionHeader({ id, icon: Icon, eyebrow, title, highlight, description }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-surface-sunken px-3.5 py-1 text-[11px] font-semibold tracking-widest text-brand-700 uppercase">
        <Icon className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2
        id={id}
        className="mt-3 font-display text-2xl font-bold tracking-tight text-balance text-ink sm:text-4xl"
      >
        {title} <span className="brand-text-gradient">{highlight}</span>
      </h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-pretty text-ink-soft">{description}</p>
      )}
    </div>
  );
}

/** Pill/toggle button styling shared by filters, view modes and presets. */
export function chipClass(active: boolean, size: "sm" | "md" = "md"): string {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl border font-semibold tracking-wider uppercase transition-colors whitespace-nowrap";
  const sizing = size === "sm" ? "px-2.5 py-1.5 text-[11px]" : "px-4 py-2 text-xs";
  const state = active
    ? "border-brand-400 bg-brand-400/15 text-brand-700 shadow-[0_0_15px_rgba(99,102,241,0.18)]"
    : "border-line bg-surface-muted text-ink-soft hover:border-brand-400/50 hover:text-ink";
  return `${base} ${sizing} ${state}`;
}

/** Small uppercase field label. */
export const labelClass = "text-[11px] font-semibold tracking-wider text-ink-muted uppercase";
