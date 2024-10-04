<template lang="pug">
	div
		BreadCrumbs(:nav-list="breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title Контакты
				.contacts
					.contacts__wrapper
						SectionContactsInfo
						SectionContactsMap
</template>

<script setup>
useHead({
   title: "Контакты",
});
const breadcrumbs = [
   {
      text: "Главная",
      href: "/",
   },
   {
      text: "Контакты",
      href: "/contacts",
   },
];
</script>
<style lang="scss">
.contacts {
   &__wrapper {
      display: grid;
      grid-template-columns: 1fr;
      align-items: start;
      gap: 100px;
      @media screen and (max-width: $xl) {
         gap: 50px;
      }
   }
}
</style>
