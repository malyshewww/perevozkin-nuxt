<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		BreadCrumbs(:nav-list="vacancy.breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title {{vacancy.pageTitle}}
				.vacancy
					.vacancy__wrapper
						SectionVacancyContent(:vacancyList="vacancy.main.list")
						SectionVacancyForm
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

const {
   data: vacancy,
   status,
   error,
} = await useAsyncData(
   "vacancy",
   () => $fetch(`${runtimeConfig.public.apiBase}/vacancy?_format=json`, {}),
   {
      transform: ({ data, breadcrumb, metatag }) => {
         const metadata = useGenerateMeta(metatag.html_head);
         const { acc: meta, title } = metadata;
         return {
            breadcrumbs: breadcrumb,
            pageTitle: data.title,
            main: {
               list: data.field_vacancies,
            },
            meta,
            title,
         };
      },
   }
);

useHead({
   title: vacancy.value.title,
   meta: [...vacancy.value.meta],
});
</script>

<style lang="scss">
.vacancy {
   &__wrapper {
      display: grid;
      grid-template-columns: 1fr 560px;
      align-items: start;
      justify-content: space-between;
      gap: 40px;
      @media screen and (max-width: $xxl) {
         grid-template-columns: 1fr 400px;
      }
      @media screen and (max-width: $xl) {
         grid-template-columns: 1fr;
      }
   }
}
</style>
