<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		main.main
			.service-card
				.main__top
					.container
						.main__top-inner
							BreadCrumbs(:nav-list="serviceGaz.breadcrumbs")
							h1.main__title(v-if="serviceGaz.main.top.title") {{serviceGaz.main.top.title}}
							.main__description(ref="mainDescrGaz" v-if="serviceGaz.main.top.subtitle" v-html="serviceGaz.main.top.subtitle")
							.main__image.ibg(v-html="serviceGaz.main.top.image.markup")
			SectionServiceCardAdvantages(v-if="serviceGaz.main.advantages" :advantages="serviceGaz.main.advantages")
			SectionServiceCardForm
			SectionServiceCardContent(v-if="serviceGaz.main.content" :content="serviceGaz.main.content")
			SectionServiceCardOtherServices(v-if="serviceGaz.main.otherServices" :services="serviceGaz.main.otherServices")
</template>
<script setup scope>
import SplitType from "split-type";
const { $gsap: gsap } = useNuxtApp();

const tl = ref("");
const mainDescrGaz = ref("");
const splittingGaz = () => {
  const splitDescr = new SplitType(mainDescrGaz.value, {
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

const runtimeConfig = useRuntimeConfig();

const {
  data: serviceGaz,
  status,
  error,
} = await useAsyncData(
  "serviceGaz",
  () => $fetch(`${runtimeConfig.public.apiBase}/services/gaz?_format=json`, {}),
  {
    transform: ({ breadcrumb, data, metatag }) => {
      const metadata = useGenerateMeta(metatag.html_head);
      const { acc: meta, title } = metadata;
      return {
        breadcrumbs: breadcrumb,
        main: {
          top: {
            title: data.title,
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
  title: serviceGaz.value.title,
  meta: [...serviceGaz.value.meta],
  bodyAttrs: {
    class: "page--service",
  },
});

onMounted(() => {
  splittingGaz();
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
    }
  }
  &__description {
    grid-area: descr;
    font-size: 24px;
    line-height: 32px;
    color: $bg-white;
    overflow: hidden;
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
