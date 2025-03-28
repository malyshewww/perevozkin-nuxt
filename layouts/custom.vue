<template lang="pug">
	UiPreloader(:is-loading="loading")
	.scroller(ref="scroller")
		.wrapper(:class="{ active: !isLoaded }")
			Header(v-if="isMobile")
			UiTrailer
			UiButtonSound
			slot
			Footer
	#rotate-device
</template>

<script setup>
import { ref } from "vue";
import { usePreloaderStore } from "@/stores/preloader";
import initCustomScrollbar from "~/utils/customScrollbar";

const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const { isMobile } = useDevice();

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
nuxtApp.hook("page:start", () => {
  // loading.value = true;
  // console.log("loading start");
});
nuxtApp.hook("page:finish", () => {
  // loading.value = false;
  // console.log("loading end");
  Preloader();
  const { bodyScrollBar } = initCustomScrollbar();
  if (store.loading === false) {
    bodyScrollBar.updatePluginOptions("lock", { lock: false });
  }
  if (!window.location.hash) {
    bodyScrollBar.scrollTo(0, 0, 100);
  } else {
    const sectionSale = document.querySelector(".main-sale");
    if (sectionSale) {
      const scrollToHere = sectionSale.offsetTop;
      // const scrollToHere =
      //    bodyScrollBar.offset.y + sectionSale.getBoundingClientRect().top;
      bodyScrollBar.scrollTo(0, scrollToHere, 400);
    }
  }
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
  const { bodyScrollBar, scroller } = initCustomScrollbar();
  ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
  });
  bodyScrollBar.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: scroller });
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
.wrapper {
  transition: opacity 1s;
  &.active {
    opacity: 1;
  }
}
</style>
