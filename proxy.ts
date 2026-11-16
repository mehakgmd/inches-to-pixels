import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./app/i18n/config";

/**
 * Language routing. English pages keep their plain URLs (/, /inches-to-pixels-chart/) and are served from
 * the /en/ route behind the scenes. Other languages use their prefix (/es/…). Typing /en/… redirects to the
 * plain URL so English has one address.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (first === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if ((LOCALES as readonly string[]).includes(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Pages only: skip Next.js internals and any file with an extension (favicon.ico, images, …).
  matcher: ["/((?!_next/|api/|.*\\.[^/]+$).*)"],
};
