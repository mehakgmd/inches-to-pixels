import type { Locale } from "./config";
import { getMessages } from "./messages";
import { HUB_CONFIG, SECTION_IDS, type Hub, type HubKey } from "../lib/hubs";

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
