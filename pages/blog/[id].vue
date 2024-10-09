<template lang="pug">
	div
		BreadCrumbs(:nav-list="blogDetail.breadcrumbs")
		main.main
			.article-page
				.container
					.article-page__wrapper
						SectionArticleContent(:content="blogDetail.main.content")
						SectionArticleForm
</template>

<script setup>
useHead({
   title: "Карточка статьи блога",
   bodyAttrs: {
      class: "page--article",
   },
});

const { id } = useRoute().params;
const runtimeConfig = useRuntimeConfig();

const {
   data: blogDetail,
   status,
   error,
} = await useAsyncData(
   "blogDetail",
   () => $fetch(`${runtimeConfig.public.apiBase}/blog/${id}?_format=json`, {}),
   {
      transform: ({ breadcrumb, data, metatag }) => {
         console.log(data);
         return {
            breadcrumbs: breadcrumb,
            main: {
               content: data,
            },
            meta: metatag,
         };
      },
   }
);

const breadcrumbs = [
   {
      text: "Главная",
      href: "/",
   },
   {
      text: "Блог",
      href: "/blog",
   },
   {
      text: "Обслуживание и диагностика тормозной системы",
      href: "/blog/1",
   },
];
</script>

<style lang="scss">
.page--article {
   & .breadcrumbs {
      &__nav {
         padding-bottom: 36px;
         border-bottom: 1px solid $bg-asphalt;
         @media screen and (max-width: $xl) {
            padding-bottom: 24px;
         }
      }
   }
   & .form {
      &__bottom {
         margin-top: 24px;
      }
   }
}
.article-page {
   &__wrapper {
      display: grid;
      grid-template-columns: 1fr 560px;
      gap: 40px;
      justify-content: space-between;
      align-items: start;
      padding-top: 52px;
      @media screen and (max-width: $xxl) {
         grid-template-columns: 1fr 400px;
      }
      @media screen and (max-width: $xl) {
         grid-template-columns: 1fr;
         padding-top: 40px;
      }
   }
}
</style>
