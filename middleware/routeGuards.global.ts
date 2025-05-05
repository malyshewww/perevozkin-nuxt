export default defineNuxtRouteMiddleware(async (to, from) => {
  // console.log(to, from);
  // КАСТОМНАЯ СТРАНИЦА 404
  if (!to.matched.length) {
    return navigateTo("/404", { redirectCode: 404 });
  }
});
