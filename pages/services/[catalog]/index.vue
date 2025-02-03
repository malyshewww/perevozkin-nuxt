<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		BreadCrumbs(:nav-list="services.breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title {{ services.pageTitle }}
				.services
					.services__body
						Card(:arr="services.main.list")
					.content(v-if="services.main.content" v-html="services.main.content")
</template>

<script setup>
const { catalog } = useRoute().params;

const runtimeConfig = useRuntimeConfig();
const {
  data: services,
  status,
  error,
} = await useAsyncData(
  "services",
  () =>
    $fetch(
      `${runtimeConfig.public.apiBase}/services/${catalog}?_format=json`,
      {}
    ),
  {
    transform: (res) => {
      console.log(res);
      const { breadcrumb, data, metatag } = res;
      const currentPageTitle = useLastBreadcrumb(breadcrumb);
      const metadata = useGenerateMeta(metatag.html_head);
      const { acc: meta, title } = metadata;
      return {
        breadcrumbs: breadcrumb,
        pageTitle: currentPageTitle,
        main: {
          list: data,
          content: res.taxonomy_term.description[0],
        },
        meta,
        title,
      };
    },
  }
);

useHead({
  title: services.value.title,
  meta: [...services.value.meta],
});
</script>

<style lang="scss" scoped>
.services__body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media screen and (max-width: $xxl) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: $md) {
    grid-template-columns: 1fr;
  }
}
.services {
  & .content {
    margin-top: 56px;
  }
}
</style>
