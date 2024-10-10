<template lang="pug">
	div
		.scroller
			.wrapper.wrapper-default
				UiTrailer
				Header(:menu="main.menu")
				slot
				Footer(:menu="main.menu")
		#rotate-device
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

const props = defineProps({
   main: {
      required: true,
   },
   links: {
      type: Object,
      required: true,
   },
});

provide("links", props.links);

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
   & .scrollbar-track-x,
   & .scrollbar-thumb-x {
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
.wrapper-default {
   opacity: 1;
}
</style>
