"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Check,
  Compass,
  GraduationCap,
  HelpCircle,
  Layers,
  Menu,
  Share2,
  Sliders,
  X,
} from "lucide-react";
import { useI18n } from "../i18n/client";
import { INFO_KEYS, INFO_PATH, PAGE_KEYS, PAGE_PATH } from "../lib/hubs";
import { INFO_ICONS, PAGE_ICONS } from "./hub/icons";
import MoreMenu from "./MoreMenu";
import ThemeToggle from "./ThemeToggle";
import LanguageMenu, { useEnglishPath } from "./LanguageMenu";

/** Sections of the homepage, listed in the menu while on the homepage. */
const LINKS = [
  { id: "converter", key: "converter", icon: Compass },
  { id: "visual-studio", key: "visual", icon: Sliders },
  { id: "slides", key: "slides", icon: Layers },
  { id: "matrix", key: "presets", icon: BookOpen },
  { id: "guide", key: "guide", icon: GraduationCap },
  { id: "faq", key: "faq", icon: HelpCircle },
] as const;

type ShareState = "idle" | "copied" | "failed";

const normalize = (path: string) => (path.length > 1 ? path.replace(/\/$/, "") : path);

export default function Navbar() {
  const { t, href } = useI18n();
  const pathname = normalize(useEnglishPath());
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [share, setShare] = useState<ShareState>("idle");
  const [activeId, setActiveId] = useState<string | null>(null);
  const resetTimer = useRef<number | undefined>(undefined);

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const handleShare = async () => {
    const url = window.location.href;
    let next: ShareState = "copied";
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title: document.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
    } catch (err) {
      // Closing the share sheet is not an error.
      if (err instanceof DOMException && err.name === "AbortError") return;
      next = "failed";
    }
    setShare(next);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setShare("idle"), 2000);
  };

  const shareLabel = share === "copied" ? t.nav.linkCopied : share === "failed" ? t.common.copyFailed : t.nav.share;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-400/20 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href={isHome ? "#top" : href("/")}
          className="flex min-w-0 items-center gap-3"
          aria-label={isHome ? t.nav.topAria : t.nav.homeAria}
        >
          <span
            aria-hidden="true"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-400/40 bg-gradient-to-br from-brand-50 to-white shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <span className="font-display text-lg font-bold text-brand-700">IN</span>
            <span className="absolute -end-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-[8px] font-extrabold text-on-brand">
              PX
            </span>
          </span>
          <span className="min-w-0">
            {/* Brand name stays in English in every language */}
            <span dir="ltr" lang="en" className="block truncate font-display text-base font-bold tracking-wider text-ink sm:text-lg">
              INCHES TO <span className="brand-text-gradient">PIXEL</span>
            </span>
            <span className="hidden tabular-nums text-[11px] tracking-wider text-ink-muted lg:block">{t.nav.brandSub}</span>
          </span>
        </Link>

        {/* Desktop navigation: one link per page */}
        <nav aria-label={t.nav.pagesAria} className="hidden items-center gap-0.5 xl:flex">
          {PAGE_KEYS.map((key) => {
            const active = pathname === normalize(PAGE_PATH[key]);
            return (
              <Link
                key={key}
                href={href(PAGE_PATH[key])}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-medium tracking-wider whitespace-nowrap uppercase transition-colors ${
                  active ? "bg-brand-400/10 text-brand-700" : "text-ink-soft hover:text-brand-700"
                }`}
              >
                {t.common.pageNames[key]}
              </Link>
            );
          })}
          <MoreMenu currentPath={pathname} />
        </nav>

        {/* Right controls */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="hidden items-center gap-1.5 rounded-lg border border-brand-400/40 bg-brand-400/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-brand-700 uppercase transition-colors hover:border-brand-400 hover:bg-brand-400/20 lg:flex"
          >
            {share === "copied" ? (
              <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
            ) : (
              <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            <span aria-live="polite">{shareLabel}</span>
          </button>

          <LanguageMenu />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface-sunken text-ink-soft transition-colors hover:border-brand-400/50 hover:text-brand-700 xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu for small and medium screens */}
      {menuOpen && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-brand-400/15 bg-canvas/95 xl:hidden">
          <nav aria-label={t.nav.pagesAria} className="mx-auto max-w-7xl px-4 pt-4">
            <p className="mb-2 text-[11px] font-semibold tracking-widest text-ink-muted uppercase">{t.nav.pages}</p>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {PAGE_KEYS.map((key) => {
                const Icon = PAGE_ICONS[key];
                const active = pathname === normalize(PAGE_PATH[key]);
                return (
                  <li key={key}>
                    <Link
                      href={href(PAGE_PATH[key])}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "border-brand-400/50 bg-brand-400/10 text-brand-700"
                          : "border-line bg-surface-muted text-ink-soft hover:border-brand-400/40"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                      {t.common.pageNames[key]}
                    </Link>
                  </li>
                );
              })}
              {INFO_KEYS.map((key) => {
                const Icon = INFO_ICONS[key];
                const active = pathname === normalize(INFO_PATH[key]);
                return (
                  <li key={key}>
                    <Link
                      href={href(INFO_PATH[key])}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "border-brand-400/50 bg-brand-400/10 text-brand-700"
                          : "border-line bg-surface-muted text-ink-soft hover:border-brand-400/40"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                      {t.nav.info[key]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {isHome && (
            <nav aria-label={t.nav.onThisPage} className="mx-auto max-w-7xl px-4 pt-4">
              <p className="mb-2 text-[11px] font-semibold tracking-widest text-ink-muted uppercase">{t.nav.onThisPage}</p>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                        activeId === link.id
                          ? "border-brand-400/50 bg-brand-400/10 text-brand-700"
                          : "border-line bg-surface-muted text-ink-soft hover:border-brand-400/40"
                      }`}
                    >
                      <link.icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                      {t.nav.sections[link.key]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="mx-auto mt-4 flex max-w-7xl items-center justify-end gap-3 border-t border-line px-4 py-3 lg:hidden">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-1.5 rounded-lg border border-brand-400/40 bg-brand-400/10 px-3 py-2 text-xs font-semibold tracking-wider text-brand-700 uppercase"
            >
              <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
              {shareLabel}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
