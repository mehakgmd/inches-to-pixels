"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../i18n/client";
import { INFO_KEYS, INFO_PATH } from "../lib/hubs";
import { INFO_ICONS } from "./hub/icons";

/** "More" item in the desktop navigation: a dropdown with About Us and Privacy Policy. */
export default function MoreMenu({ currentPath }: { currentPath: string }) {
  const { t, href } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const normalize = (path: string) => path.replace(/\/$/, "");
  const activeKey = INFO_KEYS.find((k) => normalize(INFO_PATH[k]) === currentPath);

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
        className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium tracking-wider whitespace-nowrap uppercase transition-colors ${
          activeKey ? "bg-brand-400/10 text-brand-700" : "text-ink-soft hover:text-brand-700"
        }`}
      >
        {t.nav.more}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          id={menuId}
          className="absolute end-0 top-full z-50 mt-2 w-56 rounded-xl border border-line bg-surface p-1.5 shadow-xl"
        >
          {INFO_KEYS.map((key) => {
            const Icon = INFO_ICONS[key];
            const active = key === activeKey;
            return (
              <li key={key}>
                <Link
                  href={href(INFO_PATH[key])}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                    active ? "bg-brand-400/10 font-semibold text-brand-700" : "text-ink-soft hover:bg-surface-muted hover:text-ink"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {t.nav.info[key]}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
