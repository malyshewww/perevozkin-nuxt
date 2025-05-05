<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		BreadCrumbs(:nav-list="servicesPage.breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title Услуги
				.services
					.services__body
						Card(:arr="servicesPage.main.list")
						Card(:arr="servicesPage.main.servicesFront")
</template>

<script setup>
definePageMeta({
  layout: "default",
});

const runtimeConfig = useRuntimeConfig();
const {
  data: servicesPage,
  status,
  error,
} = await useAsyncData("servicesPage", () => $fetch(`${runtimeConfig.public.apiBase}/services?_format=json`, {}), {
  transform: (res) => {
    console.log(res);
    const { breadcrumb, data, services_front, metatag } = res;
    const metadata = useGenerateMeta(metatag.html_head);
    const { acc: meta, title } = metadata;
    return {
      breadcrumbs: breadcrumb,
      main: {
        list: data,
        servicesFront: services_front,
      },
      meta,
      title,
    };
  },
});

useHead({
  title: servicesPage.value.title,
  meta: [...servicesPage.value.meta],
  bodyAttrs: {
    class: "page--services",
  },
});
</script>

<style lang="scss">
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
.page--services {
  & .service-item {
    &__image img {
      object-fit: cover;
    }
  }
}
</style>
