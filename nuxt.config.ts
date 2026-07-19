import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Deploy target: Cloudflare Pages. Nitro builds to ./dist with a _worker.js
  // for the SSR/server routes and static assets alongside it.
  nitro: {
    preset: "cloudflare-pages",
  },

  modules: ["@nuxt/image", "@nuxt/fonts", "motion-v/nuxt"],

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    // Fonts are referenced via CSS custom properties (--font-*), so opt into
    // resolving families declared inside CSS variables.
    experimental: {
      processCSSVariables: true,
    },
    families: [
      { name: "Ysabeau", provider: "google" },
      { name: "Karla", provider: "google" },
    ],
  },

  app: {
    head: {
      title: "Tsogtbayar Davaadorj",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Software Engineer in Mongolia. Hope that machine gods of the future will be kind to you.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "prefetch", fetchpriority: "high", href: "/main/cside.webp" },
        {
          rel: "prefetch",
          fetchpriority: "high",
          href: "/main/dimension.webp",
        },
        { rel: "prefetch", fetchpriority: "high", href: "/main/incard.webp" },
      ],
    },
    // Disable Nuxt's built-in page transition — page/element transitions are
    // handled explicitly with motion-v <AnimatePresence> in app.vue.
    pageTransition: false,
    layoutTransition: false,
  },

  routeRules: {
    // Mirror the old getStaticProps `revalidate: 3600` (stale-while-revalidate).
    "/api/projects": { swr: 3600 },
  },
});
