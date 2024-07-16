<template>
   <UiPreloader :is-loading="loading" />
   <div ref="scroller" class="scroller">
      <div class="wrapper" :class="{ active: !loading }">
         <UiTrailer />
         <slot />
         <Footer />
      </div>
   </div>
   <div id="rotate-device"></div>
</template>

<script setup>
import { ref } from "vue";
import initCustomScrollbar from "~/utils/customScrollbar";
import { usePreloaderStore } from "@/stores/preloader";

const store = usePreloaderStore();
const loading = ref(store.loading);

const Preloader = () => {
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.updatePluginOptions("lock", { lock: true });
   setTimeout(() => {
      store.switchLoading();
      loading.value = false;
      bodyScrollBar.updatePluginOptions("lock", { lock: false });
   }, 1700);
};

const mobileAnimation = () => {
   const titles = document.querySelectorAll(".anim-heading");
   const scrollImations = (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting && entry.intersectionRatio == 1) {
            entry.target.classList.add("active");
         }
      });
   };
   const options = {
      // root: null,
      threshold: 1.0,
   };
   const observer = new IntersectionObserver(scrollImations, options);
   for (const target of titles) {
      observer.observe(target);
   }
};

onMounted(() => {
   initCustomScrollbar();
   if (window.matchMedia("(max-width: 1024px)").matches) {
      mobileAnimation();
   }
   Preloader();
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
.wrapper {
   &.active {
      animation: opacity 1s linear;
   }
}

@keyframes opacity {
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
}
</style>
