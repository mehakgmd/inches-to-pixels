"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { localePath, type Locale } from "./config";
import { numberFormat } from "./format";
import type { UiMessages } from "./messages/en";

interface I18n {
  locale: Locale;
  /** Text for the interactive parts of the page. */
  t: UiMessages;
  /** Number formatting for this language. */
  f: ReturnType<typeof numberFormat>;
  /** Link to a page in this language, from its English path. */
  href: (path: string) => string;
}

const I18nContext = createContext<I18n | null>(null);

export function I18nProvider({ locale, ui, children }: { locale: Locale; ui: UiMessages; children: ReactNode }) {
  const value = useMemo<I18n>(
    () => ({ locale, t: ui, f: numberFormat(locale), href: (path: string) => localePath(locale, path) }),
    [locale, ui],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}
