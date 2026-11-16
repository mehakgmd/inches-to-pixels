import type { Locale } from "../config";
import { en, type Messages } from "./en";
import { es } from "./es";
import { ru } from "./ru";
import { fr } from "./fr";
import { de } from "./de";
import { it } from "./it";
import { pt } from "./pt";
import { id } from "./id";
import { ar } from "./ar";
import { sv } from "./sv";

/** Every language's text. Server-only: the browser receives just the `ui` part of one language. */
const MESSAGES: Record<Locale, Messages> = { en, es, ru, fr, de, it, pt, id, ar, sv };

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale];
}

export type { Messages };
