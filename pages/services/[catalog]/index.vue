<template lang="pug">
	div
		BreadCrumbs(:nav-list="services.breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title {{ services.title }}
				.services
					.services__body
						Card(:arr="services.main.list")
</template>

<script setup>
useHead({
   title: "Услуги",
});

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
      transform: ({ breadcrumb, data, metatag }) => {
         const currentPageTitle = useLastBreadcrumb(breadcrumb);
         console.log(data);
         return {
            breadcrumbs: breadcrumb,
            title: currentPageTitle,
            main: {
               list: data,
            },
            meta: metatag,
         };
      },
   }
);
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
</style>
