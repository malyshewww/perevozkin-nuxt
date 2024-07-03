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
const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

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
      bodyScrollBar.offset.y = 0;
      bodyScrollBar.scrollTop = 0;
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
