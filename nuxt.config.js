export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env:{
          apiKey: process.env.apiKey,
          authDomain: process.env.authDomain,
          projectId:process.env.projectId,
          storageBucket:process.env.storageBucket,
          messagingSenderId:process.env.messagingSenderId,
          appId:process.env.appId,
          measurementId:process.env.measurementId,
  },
  target:'static',
  head: {
    title: "excellent",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "nuxt-vite",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: process.env.apiKey,
          authDomain: process.env.authDomain,
          projectId:process.env.projectId,
          storageBucket:process.env.storageBucket,
          messagingSenderId:process.env.messagingSenderId,
          appId:process.env.appId,
          measurementId:process.env.measurementId,
        },
        services: {
          storage: true,
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
