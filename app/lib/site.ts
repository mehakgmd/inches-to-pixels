/**
 * Site-wide identity and search settings, shared by metadata, structured data and next.config.
 * Titles and descriptions are per language, in app/i18n/messages (content.meta).
 */

/** Brand name. Not translated. */
export const SITE_NAME = "Inches to Pixel";

/**
 * Public URL of the live site, e.g. https://inchestopixel.com. Set NEXT_PUBLIC_SITE_URL when deploying
 * so canonical, hreflang and Open Graph URLs are absolute. Left unset, those URL tags are simply omitted.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

/**
 * Search engine indexing switch. While false, every page sends "noindex, nofollow" in both a
 * robots meta tag and an X-Robots-Tag header, so the site stays out of Google.
 * Set to true at launch.
 */
export const ALLOW_INDEXING = false;
