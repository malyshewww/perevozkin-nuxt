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
const nuxtApp = useNuxtApp();

const runtimeConfig = useRuntimeConfig();

const {
  data: vacancy,
  status,
  error,
  refresh: refresh_vacancy,
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
        fetchedAt: new Date(),
      };
    },
    getCachedData: (key) => {
      // Эту часть скорее всего нужно будет перенести для главной страницы
      // if (nuxtApp.isHydrating && nuxtApp.payload.data[key]) {
      //   return nuxtApp.payload.data[key];
      // }
      // if (nuxtApp.static.data[key]) {
      //   nuxtApp.static.data[key];
      // }
      // return null;
      const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      if (!data) {
        console.log("no data, fetch again");
        return;
      }
      const expDate = new Date(data.fetchedAt);
      expDate.setTime(expDate.getTime() + 10 * 1000);
      const isExpired = expDate.getTime() < Date.now();
      if (isExpired) {
        console.log("data is expired, fetch again");
        return;
      }
      return data;
    },
  }
);

if (!vacancy.value) {
  await refresh_vacancy();
}

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
