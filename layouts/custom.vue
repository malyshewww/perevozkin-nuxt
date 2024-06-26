<template>
   <UiPreloader :isLoading="loading" />
   <div class="scroller" ref="scroller">
      <div class="wrapper">
         <UiTrailer />
         <slot />
         <Footer></Footer>
      </div>
   </div>
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

const loading = ref(true);

const Preloader = () => {
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.updatePluginOptions("lock", { lock: true });
   setTimeout(() => {
      loading.value = false;
      bodyScrollBar.updatePluginOptions("lock", { lock: false });
   }, 1000);
};

const mobileAnimation = () => {
   const titles = document.querySelectorAll(".anim-heading");
   let scrollImations = (entries, observer) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting && entry.intersectionRatio == 1) {
            entry.target.classList.add("active");
         }
      });
   };
   let options = {
      // root: null,
      threshold: 1.0,
   };
   let observer = new IntersectionObserver(scrollImations, options);
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
</style>
