// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
export default defineNuxtConfig({
  devtools: { enabled: false },
  loading: false,

  // route rules
  // routeRules: {
  //   "/": { prerender: true },
  //   "/contacts": { prerender: true },
  // },
  // routeRules: {
  //   "/": {
  //     swr: true,
  //     cache: {
  //       maxAge: 60,
  //     },
  //   },
  //   "/services": {
  //     swr: 3600,
  //   },
  //   "/contacts": {
  //     swr: true,
  //   },
  // },
  components: [
    // импорт компонентов, основываясь только на их имени, а не на пути (pathPrefix: false)
    {
      path: "~/components",
      pathPrefix: true,
    },
    // Импорт компонентов из других директорий, помимо components
    // { path: "~/sections", pathPrefix: true },
    // { path: "~/user-module/components", pathPrefix: false },
    // { path: "~/components/special-components", prefix: "Special" },
  ],

  modules: [
    "nuxt-delay-hydration",
    "nuxt-booster",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxtjs/device",
    "@nuxt/image",
  ],

  booster: {
    // optimizeSSR: {
    //   cleanPreloads: true,
    //   cleanPrefetches: true,
    //   inlineStyles: true,
    // },
    detection: {
      performance: true,
      browserSupport: true,
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
    },
    fonts: [
      {
        family: "Font A",
        locals: ["Font A"],
        fallback: ["Arial", "sans-serif"],
        variances: [
          {
            style: "normal",
            weight: 400,
            sources: [
              { src: "@/assets/fonts/Xolonium.woff", type: "woff" },
              { src: "@/assets/fonts/Xolonium.woff2", type: "woff2" },
            ],
          },
          {
            style: "normal",
            weight: 400,
            sources: [
              { src: "@/assets/fonts/GolosText-Regular.woff", type: "woff" },
              { src: "@/assets/fonts/GolosText-Regular.woff2", type: "woff2" },
            ],
          },
          {
            style: "normal",
            weight: 600,
            sources: [
              { src: "@/assets/fonts/GolosText-DemiBold.woff", type: "woff" },
              { src: "@/assets/fonts/GolosText-DemiBold.woff2", type: "woff2" },
            ],
          },
          {
            style: "normal",
            weight: 700,
            sources: [
              { src: "@/assets/fonts/Xolonium-Bold.woff", type: "woff" },
              { src: "@/assets/fonts/Xolonium-Bold.woff2", type: "woff2" },
            ],
          },
        ],
      },
    ],
    targetFormats: ["webp", "avif", "jpg|jpeg|png|gif"],
    componentAutoImport: false,
    componentPrefix: undefined,
    lazyOffset: {
      component: "0%",
      asset: "0%",
    },
  },

  image: {
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      "4k": 1921,
    },
  },

  delayHydration: {
    debug: process.env.NODE_ENV === "development",
    mode: "init",
  },

  // plugins: [{ src: "~/plugins/scrollbar.js", mode: "client" }],
  // Возможность подключения сторонних ресурсов и дополнительных мета тегов непосредственно в head
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
      apiKey: process.env.NUXT_PUBLIC_API_KEY,
    },
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  image: {
    format: ["webp", "png", "jpg"],
  },

  nitro: {
    publicAssets: [
      {
        dir: "public",
      },
    ],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "180x180",
          href: "/apple-icon-180x180.png",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: "Название",
        },
        {
          hid: "apple-mobile-web-app-capable",
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "telephone=no",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "address=no",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "email=no",
        },
        {
          hid: "format-detection",
          name: "format-detection",
          content: "date=no",
        },
      ],
    },
  },

  // Подключение файлов как строк
  // css: ["animate.css"],
  build: {
    extractCSS: true,
  },

  vite: {
    // build: {
    //   filenames: {
    //     app: ({ isDev }) => (isDev ? "js/[name].js" : "js/[name].[hash].js"),
    //     chunk: ({ isDev }) => (isDev ? "js/[name].js" : "js/[name].[hash].js"),
    //     css: ({ isDev }) =>
    //       isDev ? "css/[name].css" : "css/[name].[hash].css",
    //     vendor: ({ isDev }) => (isDev ? "js/[name].js" : "js/[name].[hash].js"),
    //   },
    // },
    css: {
      postcss: {
        plugins: [
          postCssSortMediaQueries({ sort: "desktop-first" }),
          autoprefixer({
            overrideBrowserslist: ["last 3 versions", "ie >= 10"],
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "sass:math"; @use "~/assets/scss/base/mixins.scss" as *; @import "~/assets/scss/variables.scss";',
        },
      },
    },
  },

  ssr: true,
  compatibilityDate: "2025-02-11",
});
