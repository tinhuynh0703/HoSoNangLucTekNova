import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  typescript: { strict: true, typeCheck: false },
  app: {
    head: {
      htmlAttrs: { lang: "vi" },
      meta: [{ name: "theme-color", content: "#f8fafc" }],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },
  routeRules: {
    "/index.html": { redirect: { to: "/", statusCode: 301 } },
    "/gioithieu.html": { redirect: { to: "/gioi-thieu", statusCode: 301 } },
    "/lichvuc.html": {
      redirect: { to: "/linh-vuc-hoat-dong", statusCode: 301 },
    },
    "/duan.html": { redirect: { to: "/du-an", statusCode: 301 } },
  },
  runtimeConfig: {
    leadWebhookUrl: process.env.NUXT_LEAD_WEBHOOK_URL || "",
    leadWebhookToken: process.env.NUXT_LEAD_WEBHOOK_TOKEN || "",
    public: { siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "" },
  },
});
