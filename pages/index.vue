<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		main.main
			SectionMainScreen
			SectionMainServices(:catalogList="front.main.catalogFront" :serviceList="front.main.serviceFront")
			SectionMainAdvantages(:text="front.main.frontInfo.advantageText" :advantages="front.main.advantages")
			SectionMainSale(v-if="front.main.frontInfo.stocks && front.main.frontInfo.stocks.length" :stocks="front.main.frontInfo.stocks")
			SectionMainPartners(v-if="front.main.frontInfo.partners && front.main.frontInfo.partners.length" :partners="front.main.frontInfo.partners")
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

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
      const metadata = useGenerateMeta(metatag.html_head);
      const { acc: meta, title } = metadata;
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
        meta,
        title,
      };
    },
  }
);

useHead({
  title: front.value.title,
  meta: [...front.value.meta],
  bodyAttrs: {
    class: `page--home`,
  },
});

const isMounted = ref(false);

onMounted(() => {
  const { bodyScrollBar } = initCustomScrollbar();
  if (!window.location.hash) {
    // bodyScrollBar.scrollTo(0, 0, 100);
  } else {
    const sectionSale = document.querySelector(".main-sale");
    if (sectionSale) {
      let itemY = sectionSale.offsetTop + 100;
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
onUnmounted(() => {});
</script>

<style lang="scss">
.page--home {
  & .main-services__bottom {
    & .service-item {
      &__image {
        & img {
          object-fit: cover;
        }
      }
    }
  }
}
</style>
