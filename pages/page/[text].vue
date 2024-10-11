<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		BreadCrumbs(:nav-list="pageText.breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title {{ pageText.pageTitle }}
				.page-content
					.content(v-html="pageText.main.content")
					SliderGallery(v-if="pageText.main.gallery" :gallerySlider="pageText.main.gallery")
</template>

<script setup>
const { text } = useRoute().params;

const runtimeConfig = useRuntimeConfig();
const {
   data: pageText,
   status,
   error,
} = await useAsyncData(
   "pageText",
   () =>
      $fetch(`${runtimeConfig.public.apiBase}/page/${text}?_format=json`, {}),
   {
      transform: ({ breadcrumb, data, metatag }) => {
         const metadata = useGenerateMeta(metatag.html_head);
         const { acc: meta, title } = metadata;
         return {
            breadcrumbs: breadcrumb,
            pageTitle: data.title,
            main: {
               content: data.body[0],
               gallery: data.field_gallery,
            },
            meta,
            title,
         };
      },
   }
);

useHead({
   title: pageText.value.title,
   meta: [...pageText.value.meta],
   bodyAttrs: {
      class: "page--text",
   },
});

onMounted(() => {
   // wrapTable();
});
</script>

<style lang="scss">
.page-content {
   & .content {
      max-width: 1280px;
      &.container {
         max-width: 1720px;
      }
   }
   & > *:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
   }
}
</style>
