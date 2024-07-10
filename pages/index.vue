<template>
   <main class="main">
      <SectionMainScreen />
      <SectionMainServices />
      <SectionMainAdvantages />
      <SectionMainSale />
      <SectionMainPartners />
   </main>
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";
import { usePreloaderStore } from "@/stores/preloader";

const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const store = usePreloaderStore();

useHead({
   title: "Главная страница",
   bodyAttrs: {
      class: `page--home`,
   },
});
definePageMeta({
   layout: "custom",
});

onMounted(() => {
   const { bodyScrollBar } = initCustomScrollbar();
   if (!window.location.hash) {
      bodyScrollBar.scrollTo(0, 0, 100);
   } else {
      const sectionSale = document.querySelector(".main-sale");
      if (sectionSale) {
         const scrollToHere = sectionSale.offsetTop + 100;
         bodyScrollBar.scrollTo(0, scrollToHere, 100);
      }
   }
});

onUnmounted(() => {
   // const { bodyScrollBar, scroller } = initCustomScrollbar();
   // ScrollTrigger.scrollerProxy(".scroller", {
   //    scrollTop(value) {
   //       if (arguments.length) {
   //          bodyScrollBar.scrollTop = value;
   //       }
   //       return bodyScrollBar.scrollTop;
   //    },
   // });
   // bodyScrollBar.addListener(ScrollTrigger.update);
   // ScrollTrigger.defaults({ scroller });
});
// onBeforeUpdate(() => {
//    window.location.reload();
// });
</script>
