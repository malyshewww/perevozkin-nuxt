export default defineNuxtRouteMiddleware(async (to, from) => {
   if (to.path !== "/" && to.path === from.path) {
      try {
         const response = await fetch(
            useRuntimeConfig().public.apiBase + to.path
         );
         if (response.redirected) {
            let url = response.url.split("?", 2);
            let urlArr = url[0].split("/");
            return navigateTo("/" + urlArr.slice(3).join("/"), {
               redirectCode: 301,
            });
         }
      } catch (error) {
         console.error("Ошибка при выполнении запроса:", error);
      }
   }
});
