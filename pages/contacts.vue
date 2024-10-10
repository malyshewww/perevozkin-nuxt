<template lang="pug">
	div
		BreadCrumbs(:nav-list="contactInfo.breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title {{contactInfo.title}}
				.contacts
					.contacts__wrapper
						SectionContactsInfo(:info="contactInfo.main")
						SectionContactsMap(:info="contactInfo.main")
</template>

<script setup>
useHead({
   title: "Контакты",
});

const runtimeConfig = useRuntimeConfig();
const {
   data: contactInfo,
   status,
   error,
} = await useAsyncData(
   "contactInfo",
   () => $fetch(`${runtimeConfig.public.apiBase}/contacts?_format=json`, {}),
   {
      transform: ({ breadcrumb, data, metatag }) => {
         console.log(data);
         return {
            breadcrumbs: breadcrumb,
            title: data.title,
            main: {
               address: data.field_address[0],
               email: data.field_email[0],
               image: data.field_image[0].markup,
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
