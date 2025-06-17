// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import rehypeWrapImagesFromFile from "./src/plugins/rehype-wrap-images.js";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

import vercel from "@astrojs/vercel";

import vue from "@astrojs/vue";

/**
 * Explicitly type the imported JavaScript rehype plugin.
 * This helps @ts-check in astro.config.mjs to correctly understand the plugin's type.
 * The imported function is an "attacher" (returns a transformer), which conforms to unified.Plugin.
 * It should operate on HAST Root nodes.
 * @type {import('unified').Plugin<[], import('hast').Root, import('hast').Root>}
 */
const rehypeWrapImages = rehypeWrapImagesFromFile;

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-lotus.vercel.app",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeWrapImages, rehypeKatex, rehypeRaw], // Now using the correctly typed plugin
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeWrapImages, rehypeKatex, rehypeRaw], // Now using the correctly typed plugin
    }),
    sitemap(),
    vue(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
