import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Studio from "../components/Studio";
import DpiGuideSection from "../components/DpiGuideSection";
import FaqSection from "../components/FaqSection";
import HomeTopics, { HomeBrowse } from "../components/hub/HomeTopics";
import { LOCALE_INFO, isLocale, localePath } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { SITE_NAME, SITE_URL } from "../lib/site";
import { alternates, faqJsonLd, serializeJsonLd } from "../lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getMessages(lang).content;
  const links = alternates(lang, "/");
  return {
    title: { absolute: meta.siteTitle },
    alternates: links,
    openGraph: { locale: LOCALE_INFO[lang].og, ...(SITE_URL ? { url: localePath(lang, "/") } : {}) },
  };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { content } = getMessages(lang);
  const home = content.home;

  // Structured data so search engines understand the page is a free web tool.
  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    description: content.meta.siteDescription,
    inLanguage: lang,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    ...(SITE_URL ? { url: SITE_URL } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd(home.faqs)) }} />
      <a
        href="#converter"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:rounded-lg focus:bg-brand-400 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink"
      >
        {content.page.skipToConverter}
      </a>
      {/* Order follows Content/Home Page Content.docx: tool, how-to, formula, table, explanations, FAQ */}
      <Studio
        intro={home.intro}
        afterHero={
          <>
            <HomeTopics locale={lang} />
            <DpiGuideSection locale={lang} />
            <HomeBrowse locale={lang} />
          </>
        }
      >
        <FaqSection items={home.faqs} description={home.faqDescription} />
      </Studio>
    </>
  );
}
