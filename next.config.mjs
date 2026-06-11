import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

const nextConfig = {
  async redirects() { return [{ source: "/blog/no-tip-spa-hanoi", destination: "/blog", permanent: true }]; },
  turbopack: {
    resolveAlias: {
      "next-intl/config": "./src/i18n/request.js",
    },
  },
  webpack(config) {
    config.resolve.alias["next-intl/config"] = path.resolve(__dirname, "src/i18n/request.js");
    return config;
  },
};
export default withNextIntl(nextConfig);
