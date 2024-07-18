<template>
   <UiPreloader :is-loading="loading" />
   <div ref="scroller" class="scroller">
      <div class="wrapper" :class="{ active: isLoaded }">
         <UiTrailer />
         <slot />
         <Footer />
      </div>
   </div>
   <div id="rotate-device"></div>
</template>

<script setup>
import { ref } from "vue";
import { usePreloaderStore } from "@/stores/preloader";
import initCustomScrollbar from "~/utils/customScrollbar";

const store = usePreloaderStore();
const loading = ref(store.loading);

const isLoaded = ref(false);

const Preloader = () => {
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.updatePluginOptions("lock", { lock: true });
   setTimeout(() => {
      store.switchLoading();
      loading.value = false;
      bodyScrollBar.updatePluginOptions("lock", { lock: false });
   }, 2200);
};

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:loading:start", () => {
   // loading.value = true;
   console.log("loading start");
});
nuxtApp.hook("page:loading:end", () => {
   // loading.value = false;
   console.log("loading end");
   Preloader();
   isLoaded.value = !isLoaded.value;
   const { bodyScrollBar } = initCustomScrollbar();
   if (!window.location.hash) {
      bodyScrollBar.scrollTo(0, 0, 100);
   } else {
      const sectionSale = document.querySelector(".main-sale");
      if (sectionSale) {
         const scrollToHere = sectionSale.offsetTop;
         bodyScrollBar.scrollTo(0, scrollToHere, 400);
      }
   }
   isLoaded.value = !isLoaded.value;
});

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

// .wrapper {
//    &.active {
//       animation: opacityWrapper 1s linear running;
//    }
// }

// @keyframes opacityWrapper {
//    0% {
//       opacity: 0;
//    }
//    100% {
//       opacity: 1;
//    }
// }
</style>
