"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useI18n } from "../i18n/client";
import { LOCALES, LOCALE_INFO, localePath, splitLocale } from "../i18n/config";

/** The current page's English path, so a language link opens the same page in that language. */
export function useEnglishPath(): string {
  return splitLocale(usePathname() ?? "/").path;
}

/** Navbar language dropdown. Each option is a real link to the same page in that language. */
export default function LanguageMenu() {
  const { locale, t } = useI18n();
  const path = useEnglishPath();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  // Close on Escape or a click outside.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t.nav.languageAria}: ${LOCALE_INFO[locale].name}`}
        className="flex h-10 items-center gap-1.5 rounded-lg border border-line bg-surface-sunken px-2.5 text-xs font-semibold tracking-wider text-ink-soft uppercase transition-colors hover:border-brand-400/50 hover:text-brand-700"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">{locale}</span>
        <ChevronDown
          className={`hidden h-3.5 w-3.5 transition-transform sm:block motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          id={menuId}
          className="absolute end-0 top-full z-50 mt-2 max-h-[70vh] w-52 overflow-y-auto rounded-xl border border-line bg-surface p-1.5 shadow-xl"
        >
          {LOCALES.map((l) => {
            const active = l === locale;
            return (
              <li key={l}>
                <Link
                  href={localePath(l, path)}
                  hrefLang={l}
                  lang={l}
                  aria-current={active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    active ? "bg-brand-400/10 font-semibold text-brand-700" : "text-ink-soft hover:bg-surface-muted hover:text-ink"
                  }`}
                >
                  <span>{LOCALE_INFO[l].name}</span>
                  {active ? (
                    <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <span className="text-[11px] tracking-wider text-ink-muted uppercase">{l}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/** Every language as a plain link list, for the footer. */
export function LanguageLinks({ title }: { title: string }) {
  const { locale } = useI18n();
  const path = useEnglishPath();
  return (
    <nav aria-label={title}>
      <p className="text-[11px] font-semibold tracking-widest text-ink-muted uppercase">{title}</p>
      <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
        {LOCALES.map((l) => (
          <li key={l}>
            <Link
              href={localePath(l, path)}
              hrefLang={l}
              lang={l}
              aria-current={l === locale ? "true" : undefined}
              className={`text-sm transition-colors hover:text-brand-700 ${
                l === locale ? "font-semibold text-brand-700" : "text-ink-soft"
              }`}
            >
              {LOCALE_INFO[l].name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
