/**
 * Site-wide identity and search settings, shared by metadata, structured data and next.config.
 * Titles and descriptions are per language, in app/i18n/messages (content.meta).
 */

/** Brand name. Not translated. */
export const SITE_NAME = "Inches to Pixel";

/** Address shown on the Contact Us page and in the privacy policy. Form messages go to the inbox set in app/api/contact/route.ts. */
export const CONTACT_EMAIL = "contact@inchestopixel.com";

/**
 * Public URL of the live site, used for canonical, hreflang, Open Graph and sitemap URLs.
 * NEXT_PUBLIC_SITE_URL overrides it (for example on a staging domain). No trailing slash.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://inchestopixel.com").replace(/\/$/, "");

/**
 * Search engine indexing switch. True: pages can appear in Google and Bing.
 * Set to false to hide the whole site again: every page then sends "noindex, nofollow" in both a
 * robots meta tag and an X-Robots-Tag header, and robots.txt blocks crawling.
 */
export const ALLOW_INDEXING = true;

/**
 * Google Search Console ownership check. Rendered on every page as
 * <meta name="google-site-verification" content="…" />. Keep it after verifying, or Google may un-verify the site.
 */
export const GOOGLE_SITE_VERIFICATION = "MjLAwNOJstMuqFV5yhUt4ZGhaG_5guj2tmoaH8HCUQM";

/**
 * Bing Webmaster Tools ownership check. Rendered on every page as
 * <meta name="msvalidate.01" content="…" />. Keep it after verifying.
 */
export const BING_SITE_VERIFICATION = "97318F0CF214C715F628037D8BAF8174";
