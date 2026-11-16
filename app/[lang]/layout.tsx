import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Footer from "../components/Footer";
import { I18nProvider } from "../i18n/client";
import { LOCALES, LOCALE_INFO, isLocale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { THEME_INIT_SCRIPT } from "../lib/theme";
import { ALLOW_INDEXING, SITE_NAME, SITE_URL } from "../lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

// Inter has no Arabic letters; the browser only downloads this font when Arabic text is on the page.
const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  preload: false,
});

const robots: Metadata["robots"] = ALLOW_INDEXING
  ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
  : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } };

/** Every language is built ahead of time. */
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getMessages(lang).content;
  return {
    // Absolute URLs (canonical, hreflang, og:url) need the live domain; they are only emitted once it is set.
    ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
    title: { default: meta.siteTitle, template: `%s | ${SITE_NAME}` },
    description: meta.siteDescription,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    formatDetection: { telephone: false, email: false, address: false },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: meta.siteTitle,
      description: meta.siteDescription,
      locale: LOCALE_INFO[lang].og,
    },
    twitter: { card: "summary", title: meta.siteTitle, description: meta.siteDescription },
    robots,
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0814" },
  ],
  colorScheme: "light dark",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const messages = getMessages(lang);

  return (
    // The theme script sets class="dark" before React loads, so <html> differs from the server markup on purpose.
    <html lang={lang} dir={LOCALE_INFO[lang].dir} className={`${inter.variable} ${arabic.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased selection:bg-brand-200 selection:text-ink">
        <I18nProvider locale={lang} ui={messages.ui}>
          <div id="top" className="relative min-h-screen overflow-x-clip bg-gradient-to-b from-canvas to-canvas-end text-ink">
            {/* Animated background: two light color fields drifting behind the content */}
            <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
              <div className="bg-orb bg-orb-violet motion-safe:animate-orb-a" />
              <div className="bg-orb bg-orb-sky motion-safe:animate-orb-b" />
            </div>
            <div className="relative z-10 flex flex-col">
              {children}
              <Footer locale={lang} />
            </div>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
