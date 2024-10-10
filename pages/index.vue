<template lang="pug">
	main.main
		SectionMainScreen(:menu="main.menu")
		SectionMainServices(:catalogList="front.main.catalogFront" :serviceList="front.main.serviceFront")
		SectionMainAdvantages(:text="front.main.frontInfo.advantageText" :advantages="front.main.advantages")
		SectionMainSale(:stocks="front.main.frontInfo.stocks")
		SectionMainPartners(:partners="front.main.frontInfo.partners")
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

defineProps({
   main: {
      required: true,
   },
});

useHead({
   title: "Главная страница",
   bodyAttrs: {
      class: `page--home`,
   },
});

definePageMeta({
   layout: "custom",
});

const runtimeConfig = useRuntimeConfig();
const {
   data: front,
   status,
   error,
} = await useAsyncData(
   "front",
   () =>
      $fetch(
         `${runtimeConfig.public.apiBase}/wsapi/packs/front?_format=json`,
         {}
      ),
   {
      transform: ({ data, metatag }) => {
         console.log(data);
         console.log(data.services_front);
         return {
            main: {
               advantages: data.advantages[0].field_advantages,
               catalogFront: data.catalog_front,
               serviceFront: data.services_front,
               frontInfo: {
                  advantageText: data.front_info[0].field_advantage_text,
                  partners: data.front_info[0].field_partners,
                  stocks: data.front_info[0].field_stocks,
               },
            },
            meta: metatag,
         };
      },
   }
);

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
