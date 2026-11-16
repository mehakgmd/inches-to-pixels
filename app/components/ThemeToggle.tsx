"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY as STORAGE_KEY } from "../lib/theme";
import { useI18n } from "../i18n/client";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.classList.contains("dark");

/** Light / dark switch. The current theme lives on <html class="dark">, so every toggle on the page stays in sync. */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  const toggle = () => {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Storage can be blocked (private mode); the switch still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? t.theme.toLight : t.theme.toDark}
      title={dark ? t.theme.light : t.theme.dark}
      className={`flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-sunken text-ink-soft transition-colors hover:border-brand-400/50 hover:text-brand-700 ${className}`}
    >
      {dark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
}
