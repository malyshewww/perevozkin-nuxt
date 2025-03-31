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
	div(itemscope itemtype="https://schema.org/LocalBusiness" style="display:none;")
		img(itemprop="image" src="/images/logo.svg")
		span(itemprop="name") Перевозов сервис
		span(itemprop="description") {{ contactInfo.descr }}
		div(itemprop="address" itemscope itemtype="https://schema.org/PostalAddress")
			span(itemprop="addressCountry") RU
			span(itemprop="addressRegion") Нижегородская область
			span(itemprop="addressLocality") Нижний Новгород
			span(itemprop="streetAddress") улица Партизанская, дом 6
			span(itemprop="postalCode") 603073
		span(itemprop="telephone") {{ phone }}
		span(itemprop="email") {{ email }}
		a(itemprop="url" href="https://perevozov-service.ru") perevozov-service.ru
		| Время работы:
		time(itemprop="openingHours" datetime="Mo-Su 09:00-19:00") ежедневно 09:00-19:00
		div(itemprop="geo" itemscope itemtype="https://schema.org/GeoCoordinates")
				meta(itemprop="latitude" content="56.266469")
				meta(itemprop="longitude" content="43.932152")
		link(itemprop="hasMap" href="https://yandex.ru/maps/?um=constructor%3Ae095b9eee2f98de1dd5218decce7e88f382e97d587a4c4b112db2ca98c290b04&source=constructorLink")

</template>

<script setup>
import { useMainInfoStore } from "~/stores/maininfo";

const mainInfoStore = useMainInfoStore();

const { links } = mainInfoStore;

const { phone, email } = links;

const nuxtApp = useNuxtApp();
const runtimeConfig = useRuntimeConfig();
const {
  data: contactInfo,
  status,
  error,
  refresh: refresh_contacts,
} = await useLazyAsyncData("contactInfo", () => $fetch(`${runtimeConfig.public.apiBase}/contacts?_format=json`, {}), {
  transform: (res) => {
    const { breadcrumb, data, metatag } = res;
    const metadata = useGenerateMeta(metatag.html_head);
    const { acc: meta, title, descr } = metadata;
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
      descr,
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
});

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
