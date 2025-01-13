<template lang="pug">
	div
		BreadCrumbs(:navList="breadcrumb")
		main.main
			.container
				NotFound(:services="notFoundPage.main.list" :serviceFront="notFoundPage.main.servicesFront")
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const {
  data: notFoundPage,
  status,
  error,
} = await useAsyncData(
  "servicesPage",
  () => $fetch(`${runtimeConfig.public.apiBase}/services?_format=json`, {}),
  {
    transform: (res) => {
      const { data, services_front } = res;
      return {
        main: {
          list: data,
          servicesFront: services_front,
        },
      };
    },
  }
);
const breadcrumb = [
  {
    text: "Главная",
    url: "/",
  },
  {
    text: "404",
    url: "/",
  },
];
useHead({
  bodyAttrs: {
    class: "page--not-found",
  },
});
</script>

<style lang="scss">
body.page--not-found {
  & .main {
    padding-top: 80px;
  }
}
</style>
