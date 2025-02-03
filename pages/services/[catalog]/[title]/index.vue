<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		main.main
			.service-card
				.main__top
					.container
						.main__top-inner
							BreadCrumbs(:nav-list="serviceDetail.breadcrumbs")
							h1.main__title(v-if="serviceDetail.main.top.title" v-html="serviceDetail.main.top.title")
							.main__description(ref="mainDescr" v-if="serviceDetail.main.top.subtitle" v-html="serviceDetail.main.top.subtitle")
							.main__image.ibg(v-html="serviceDetail.main.top.image.markup")
			SectionServiceCardAdvantages(v-if="serviceDetail.main.advantages" :advantages="serviceDetail.main.advantages")
			SectionServiceCardForm
			SectionServiceCardContent(v-if="serviceDetail.main.content" :content="serviceDetail.main.content")
			SectionServiceCardOtherServices(v-if="serviceDetail.main.otherServices && serviceDetail.main.otherServices.length" :services="serviceDetail.main.otherServices")
</template>
<script setup>
import SplitType from "split-type";
const { $gsap: gsap } = useNuxtApp();

const tl = ref("");
const mainDescr = ref("");
const splitting = () => {
  const splitDescr = new SplitType(mainDescr.value, {
    types: "lines",
  });
  tl.value = gsap
    .timeline({})
    .from(splitDescr.lines, { y: 100, opacity: 0, stagger: 0.1 })
    .to(splitDescr.lines, { y: 0, opacity: 1, stagger: 0.1 });
};

const destroyAnimations = () => {
  tl.value.pause().kill();
  tl.value = null;
};

const { catalog, title } = useRoute().params;

const runtimeConfig = useRuntimeConfig();
const {
  data: serviceDetail,
  status,
  error,
} = await useAsyncData(
  "serviceDetail",
  () =>
    $fetch(
      `${runtimeConfig.public.apiBase}/services/${catalog}/${title}?_format=json`,
      {}
    ),
  {
    transform: ({ breadcrumb, data, metatag }) => {
      const metadata = useGenerateMeta(metatag.html_head);
      const { acc: meta, title } = metadata;
      return {
        breadcrumbs: breadcrumb,
        main: {
          top: {
            title: data.field_title_page[0],
            subtitle: data.field_subtitle[0],
            image: data.field_image[0],
          },
          advantages: {
            list: data.advantages[0].field_advantages,
            description: data.field_dvantage_description[0],
            strongText: data.field_advantages_strong_text[0],
            images: data.field_advantages_images,
          },
          otherServices: data.services_same,
          content: data.body[0],
        },
        meta,
        title,
      };
    },
  }
);

useHead({
  title: serviceDetail.value.title || "",
  meta: [...serviceDetail.value.meta] || [],
  bodyAttrs: {
    class: "page--service",
  },
});

onMounted(() => {
  splitting();
});
onUnmounted(() => {
  destroyAnimations();
});
</script>

<style lang="scss" scoped>
.main {
  &__top {
    padding: 120px 0 173px;
    background-color: $graphite;
    @media screen and (max-width: $xxl) {
      padding: 90px 0 130px;
    }
    @media screen and (max-width: $xl) {
      padding: 40px 0 60px;
    }
    & .breadcrumbs {
      grid-area: crumbs;
      margin-top: 0;
      margin-bottom: 24px;
      grid-column: span 2;
      @media screen and (max-width: $xl) {
        margin: 0;
      }
      & .container {
        padding: 0;
      }
    }
  }
  &__top-inner {
    display: grid;
    grid-template-areas:
      "crumbs pic"
      "title pic"
      "descr pic";
    grid-template-columns: 48% 41%;
    justify-content: space-between;
    gap: 36px;
    align-items: start;
    position: relative;
    @media screen and (max-width: $xl) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "crumbs"
        "title"
        "descr"
        "pic";
      gap: 30px;
    }
  }
  &__title {
    grid-area: title;
    font-family: $third-family;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    text-transform: uppercase;
    color: $bg-white;
    hyphens: none;
    @media screen and (max-width: $xl) {
      font-size: calc(48px / 1.5);
      line-height: calc(60px / 1.5);
      grid-column: span 2;
    }
    @media screen and (max-width: $md) {
      font-size: 24px;
      line-height: 32px;
      hyphens: auto;
    }
  }
  &__description {
    grid-area: descr;
    font-size: 24px;
    line-height: 32px;
    color: $bg-white;
    overflow: hidden;
    @media screen and (max-width: $xl) {
      grid-column: span 2;
    }
    @media screen and (max-width: $md) {
      font-size: 20px;
      line-height: 24px;
    }
    & .line {
      opacity: 0;
    }
  }
}
</style>
