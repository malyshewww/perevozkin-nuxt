<template lang="pug">
	div
		BreadCrumbs(:navList="breadcrumb")
		main.main
			NotFound(:services="services")
</template>

<script setup>
import { useMainInfoStore } from "~/stores/maininfo";

const mainInfoStore = useMainInfoStore();

definePageMeta({
  layout: "default",
});

const { services } = mainInfoStore;

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
  status: 404,
  title: "Страница не найдена | Перевозов Сервис",
});
</script>

<style lang="scss" scoped>
body.page--not-found {
  & .main {
    padding-top: 80px;
  }
}
</style>
