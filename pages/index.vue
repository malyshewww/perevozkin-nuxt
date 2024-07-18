<template>
   <main class="main main-index">
      <SectionMainScreen />
      <SectionMainServices />
      <SectionMainAdvantages />
      <SectionMainSale />
      <SectionMainPartners />
   </main>
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

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
         let itemY = sectionSale.offsetTop + 100;
         console.log(itemY);
         bodyScrollBar.scrollTo(0, itemY, 600);
         // const scrollToHere = sectionSale.offsetTop + bodyScrollBar.offset.y;
         // bodyScrollBar.scrollTo(
         //    0,
         //       scrollToHere,
         //    100
         // );
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
</script>

<style lang="scss"></style>
