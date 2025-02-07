<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		BreadCrumbs(:nav-list="contactInfo.breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title {{contactInfo.pageTitle}}
				.contacts
					.contacts__wrapper
						SectionContactsInfo(:info="contactInfo.main")
						SectionContactsMap(:info="contactInfo.main")
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const {
  data: contactInfo,
  status,
  error,
} = await useAsyncData(
  "contactInfo",
  () => $fetch(`${runtimeConfig.public.apiBase}/contacts?_format=json`, {}),
  {
    transform: (res) => {
      console.log(res);
      const { breadcrumb, data, metatag } = res;
      const metadata = useGenerateMeta(metatag.html_head);
      const { acc: meta, title } = metadata;
      return {
        breadcrumbs: breadcrumb,
        pageTitle: data.title,
        main: {
          address: data.field_address[0],
          email: data.field_email[0],
          image: data.field_image[0],
        },
        meta,
        title,
      };
    },
  }
);

useHead({
  title: contactInfo.value.title,
  meta: [...contactInfo.value.meta],
});
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
