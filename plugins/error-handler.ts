export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.log("errorHandler", error, instance, info);
  };
  nuxtApp.hook("vue:error", (error, instance, info) => {
    console.log("vue:error", error, instance, info);
  });
});
