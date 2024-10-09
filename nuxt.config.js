// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
export default defineNuxtConfig({
   devtools: { enabled: false },
   loading: false,
   components: [
      // импорт компонентов, основываясь только на их имени, а не на пути (pathPrefix: false)
      {
         path: "~/components",
         pathPrefix: true,
      },
      // Импорт компонентов из других директорий, помимо components
      { path: "~/sections", pathPrefix: true },
      // { path: "~/user-module/components", pathPrefix: false },
      // { path: "~/components/special-components", prefix: "Special" },
   ],
   modules: ["@pinia/nuxt", "@nuxtjs/device"],
   // plugins: [{ src: "~/plugins/scrollbar.js", mode: "client" }],
   // Возможность подключения сторонних ресурсов и дополнительных мета тегов непосредственно в head
   runtimeConfig: {
      public: {
         apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
         apiKey: process.env.NUXT_PUBLIC_API_KEY,
      },
   },
   app: {
      head: {
         htmlAttrs: {
            lang: "ru",
         },
         link: [
            // {
            //    rel: "preload",
            //    href: "/fonts/GolosText-Regular.woff2",
            //    as: "font",
            //    type: "font/woff2",
            //    crossorigin: "anonymous",
            // },
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
            {
               name: "robots",
               content: "noindex,follow",
            },
         ],
      },
   },
   // Подключение файлов как строк
   // css: ["animate.css"],
   vite: {
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
                  '@use "~/assets/scss/base/mixins.scss" as *; @import "~/assets/scss/variables.scss";',
            },
         },
      },
   },
   // nitro: {
   //    prerender: {
   //       crawlLinks: true,
   //       failOnError: false,
   //    },
   // },
   ssr: true,
   defaultLocale: "ru",
   // build: {
   //    postcss: {
   //       preset: {
   //          autoprefixer: {
   //             grid: true,
   //          },
   //       },
   //    },
   // },
});
