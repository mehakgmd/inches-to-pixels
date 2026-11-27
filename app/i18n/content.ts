import type { Locale } from "./config";
import { getMessages } from "./messages";
import {
  HUB_CONFIG,
  INFO_PATH,
  INFO_SECTION_IDS,
  INFO_UPDATED,
  SECTION_IDS,
  type Hub,
  type HubKey,
  type InfoKey,
} from "../lib/hubs";

/** A topic page in a language: shared structure plus that language's words. */
export function getHub(locale: Locale, key: HubKey): Hub {
  const text = getMessages(locale).content.hubs[key];
  const ids = SECTION_IDS[key];
  return {
    ...text,
    ...HUB_CONFIG[key],
    key,
    sections: text.sections.map((s, i) => ({ ...s, id: ids[i] ?? `section-${i + 1}` })),
  };
}

/** An information page (About Us, Privacy Policy) in a language. */
export function getInfo(locale: Locale, key: InfoKey) {
  const text = getMessages(locale).content.info[key];
  const ids = INFO_SECTION_IDS[key];
  return {
    ...text,
    key,
    path: INFO_PATH[key],
    updated: INFO_UPDATED[key],
    sections: text.sections.map((s, i) => ({ ...s, id: ids[i] ?? `section-${i + 1}` })),
  };
}

export type InfoPageData = ReturnType<typeof getInfo>;
