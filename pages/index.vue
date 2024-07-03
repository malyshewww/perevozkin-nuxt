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

onMounted(() => {});

onUnmounted(() => {
   ScrollTrigger.killAll();
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
