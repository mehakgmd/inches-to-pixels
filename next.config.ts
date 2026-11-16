import type { NextConfig } from "next";
import { ALLOW_INDEXING } from "./app/lib/site";

const nextConfig: NextConfig = {
  // Planned URLs end in a slash, e.g. /inches-to-pixels-dpi-converter/
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  // Old URLs that moved when content documents set a new slug. Permanent, so links and bookmarks keep working.
  async redirects() {
    return [
      { source: "/inches-to-pixels-dpi", destination: "/inches-to-pixels-dpi-converter/", permanent: true },
      { source: "/inches-to-pixels-dpi/", destination: "/inches-to-pixels-dpi-converter/", permanent: true },
      { source: "/inches-to-pixels-in-software", destination: "/inches-to-pixels-software/", permanent: true },
      { source: "/inches-to-pixels-in-software/", destination: "/inches-to-pixels-software/", permanent: true },
    ];
  },
  // While indexing is off, tell search engines to skip every response, including images and files.
  async headers() {
    if (ALLOW_INDEXING) return [];
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
