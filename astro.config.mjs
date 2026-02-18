import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import spotlight from "@spotlightjs/astro";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.swapgifts.store",
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), spotlight()],
});
