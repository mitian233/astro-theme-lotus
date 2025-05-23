// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import rehypeWrapImages from "./src/plugins/rehype-wrap-images.js";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-lotus.vercel.app",
  markdown: {
    rehypePlugins: [rehypeWrapImages],
  },
  integrations: [
    mdx({
      rehypePlugins: [rehypeWrapImages],
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
