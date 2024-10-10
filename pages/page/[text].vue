<template lang="pug">
	div
		BreadCrumbs(:nav-list="pageText.breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title {{ pageText.title }}
				.page-content
					.content(v-html="pageText.main.content")
					SliderGallery(v-if="pageText.main.gallery" :gallerySlider="pageText.main.gallery")
</template>

<script setup>
// useHead({
//    title: "Текстовая страница",
// });

const { text } = useRoute().params;

const runtimeConfig = useRuntimeConfig();
const {
   data: pageText,
   status,
   error,
} = await useAsyncData(
   "pageText",
   () =>
      $fetch(`${runtimeConfig.public.apiBase}/page/${text}?_format=json`, {}),
   {
      transform: ({ breadcrumb, data, metatag }) => {
         console.log(data);
         return {
            breadcrumbs: breadcrumb,
            title: data.title,
            main: {
               content: data.body[0],
               gallery: data.field_gallery,
            },
            meta: metatag,
         };
      },
   }
);
// const breadcrumbs = [
//    {
//       text: "Главная",
//       href: "/",
//    },
//    {
//       text: "Текстовая",
//       href: "/page-text",
//    },
//    {
//       text: "Текстовая",
//       href: "/page-text",
//    },
// ];
// const content = {
//    text: "Тормозная система - один из основных узлов автомобиля, отвечающий за безопасность пассажиров и имущества. Поломка тормоза может повлечь непоправимые последствиям. Именно поэтому нужно своевременно проводить обслуживание и диагностику системы.",
//    list: [
//       "Мы гарантируем стабильный заработок, что бы ни происходило. Даже во время пандемии каждый рабочий день сотрудника был оплачен. Все выплаты строго в определённые даты.",
//       "Мы гарантируем стабильный заработок, что бы ни происходило. Даже во время пандемии каждый рабочий день сотрудника был оплачен. Все выплаты строго в определённые даты.",
//    ],
//    table: [
//       {
//          name: "Углы установки колёс",
//          cost: "10 300 ₽",
//          costSale: "8 800 ₽",
//          costOther: "8 000 ₽",
//       },
//       {
//          name: "Оценка кузовного ремонта грузового автомобиля по фото",
//          cost: "800 ₽",
//          costSale: "600 ₽",
//          costOther: "500 ₽",
//       },
//       {
//          name: "Углы установки колёс",
//          cost: "10 300 ₽",
//          costSale: "8 800 ₽",
//          costOther: "8 000 ₽",
//       },
//       {
//          name: "Оценка кузовного ремонта грузового автомобиля по фото",
//          cost: "800 ₽",
//          costSale: "600 ₽",
//          costOther: "500 ₽",
//       },
//    ],
// };

onMounted(() => {
   // wrapTable();
});
</script>

<style lang="scss">
.page-content {
   & .content {
      max-width: 1280px;
      &.container {
         max-width: 1720px;
      }
   }
   & > *:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
   }
}
</style>
