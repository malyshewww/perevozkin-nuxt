// https://nuxt.com/docs/api/configuration/nuxt-config
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
export default defineNuxtConfig({
   devtools: { enabled: false },
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
   modules: ["@pinia/nuxt", "@nuxtjs/device", "@nuxtjs/i18n"],
   // Возможность подключения сторонних ресурсов и дополнительных мета тегов непосредственно в head
   app: {
      // pageTransition: { name: "page", mode: "out-in" },
      head: {
         link: [
            {
               rel: "preload",
               href: "/fonts/GolosText-Regular.woff2",
               as: "font",
               type: "font/woff2",
               crossorigin: "anonymous",
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
         // postcss: {
         //    plugins: [
         //       postCssSortMediaQueries({ sort: "desktop-first" }),
         //       autoprefixer({
         //          overrideBrowserslist: ["last 3 versions", "ie >= 10"],
         //       }),
         //    ],
         // },
         preprocessorOptions: {
            scss: {
               additionalData:
                  '@import "./assets/scss/variables.scss"; @import "./assets/scss/base/nullstyle.scss"; @import "./assets/scss/base/mixins.scss"; @import "./assets/scss/base/extends.scss";',
            },
         },
      },
   },
   defaultLocale: "ru",
   build: {
      postcss: {
         preset: {
            autoprefixer: {
               grid: true,
            },
         },
      },
   },
});
