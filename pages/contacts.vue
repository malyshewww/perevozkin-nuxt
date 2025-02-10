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
const nuxtApp = useNuxtApp();
const runtimeConfig = useRuntimeConfig();
const {
  data: contactInfo,
  status,
  error,
  refresh: refresh_contacts,
} = await useAsyncData(
  "contactInfo",
  () => $fetch(`${runtimeConfig.public.apiBase}/contacts?_format=json`, {}),
  {
    transform: (res) => {
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
        fetchedAt: new Date(),
      };
    },
    getCachedData: (key) => {
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

if (!contactInfo.value) {
  await refresh_contacts();
}

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
