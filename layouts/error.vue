<template lang="pug">
	.scroller
		.wrapper
			Header
			BreadCrumbs(:navList="breadcrumb")
			main.main
				NotFound(:services="notFoundPage.main.list" :serviceFront="notFoundPage.main.servicesFront")
			Footer
	#rotate-device
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

import { useMainInfoStore } from "~/stores/maininfo.js";

const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const mainInfoStore = useMainInfoStore();

const runtimeConfig = useRuntimeConfig();
const url = `${runtimeConfig.public.apiBase}/wsapi/packs/site_info?_format=json`;

const { data: mainInfoData } = await useFetch(url);

const {
  data: notFoundPage,
  status,
  error,
} = await useAsyncData(
  "servicesPage",
  () => $fetch(`${runtimeConfig.public.apiBase}/services?_format=json`, {}),
  {
    transform: (res) => {
      const { data, services_front } = res;
      return {
        main: {
          list: data,
          servicesFront: services_front,
        },
      };
    },
  }
);

onServerPrefetch(async () => {
  try {
    await mainInfoStore.setData(mainInfoData.value);
  } catch (error) {
    console.log("Error", error);
  }
});

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
});

const breadcrumb = [
  {
    text: "Главная",
    url: "/",
  },
  {
    text: "404",
    url: "/",
  },
];

useHead({
  bodyAttrs: {
    class: "page--not-found",
  },
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

body.page--not-found {
  & .main {
    padding-top: 80px;
  }
}
</style>
