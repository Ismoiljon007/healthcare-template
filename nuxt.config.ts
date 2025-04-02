// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icon"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "MedStaff Solutions",
      meta: [
        {
          name: "description",
          content:
            "Healthcare staffing solutions for nursing professionals and healthcare facilities",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
