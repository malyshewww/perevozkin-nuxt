<template>
   <NuxtLayout>
      <NuxtErrorBoundary>
         <NuxtPage />
      </NuxtErrorBoundary>
   </NuxtLayout>
</template>
<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
   loading.value = true;
   console.log("start");
});
nuxtApp.hook("page:finish", () => {
   loading.value = false;
   console.log("end");
   // setTimeout(() => {
   //    ScrollTrigger.refresh();
   // }, 1000);
});
onMounted(() => {});
</script>

<style lang="scss">
@import "~/assets/scss/base/nullstyle.scss";
@import "~/assets/scss/base/extends.scss";
@import "~/assets/scss/base/keyframes.scss";
@import "~/assets/scss/fonts.scss";
@import "~/assets/scss/common.scss";
// .page-enter-active,
// .page-leave-active {
//    transition: all 0.4s;
// }
// .page-enter-from,
// .page-leave-to {
//    opacity: 0;
//    filter: blur(1rem);
// }
</style>
