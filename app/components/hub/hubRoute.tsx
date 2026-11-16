import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HubPage from "./HubPage";
import { isLocale } from "../../i18n/config";
import { getHub } from "../../i18n/content";
import { hubMetadata } from "../../lib/seo";
import type { HubKey } from "../../lib/hubs";

type Props = { params: Promise<{ lang: string }> };

/** Metadata and page component for one topic page, in whichever language the URL asks for. */
export function hubRoute(key: HubKey) {
  async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    if (!isLocale(lang)) return {};
    return hubMetadata(lang, getHub(lang, key));
  }

  async function Page({ params }: Props) {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();
    return <HubPage locale={lang} hub={getHub(lang, key)} />;
  }

  return { generateMetadata, Page };
}
