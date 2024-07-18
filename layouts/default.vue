<template>
   <div>
      <div class="scroller">
         <div class="wrapper">
            <UiTrailer />
            <Header />
            <slot />
            <Footer />
         </div>
      </div>
      <div id="rotate-device"></div>
   </div>
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:start", () => {
   /* your code goes here */
});
nuxtApp.hook("page:finish", () => {
   if (!window.location.hash) {
      const { bodyScrollBar } = initCustomScrollbar();
      bodyScrollBar.scrollTo(0, 0, 100);
   }
});

onMounted(() => {
   initCustomScrollbar();
});
</script>

<style lang="scss">
.scroller {
   height: 100vh;
   width: 100vw;
   overflow: auto;
   & .scrollbar-track {
      width: 6px;
      background: rgba($bg-anthracite, 0.5);
   }
   & .scrollbar-thumb {
      background: rgba($bg-green-lime, 0.8);
   }
   & .scrollbar-track-x {
      display: none;
   }
}
@media screen and (max-width: 1024px) {
   .scroller {
      // overflow: unset;
      // height: auto;
      & .scrollbar-track {
         width: 0;
      }
   }
}
</style>
