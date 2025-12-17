import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import spotlight from "@spotlightjs/astro";

export default defineConfig({
  site: "https://sobers.app",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), spotlight()],
});
