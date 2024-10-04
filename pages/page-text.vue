<template lang="pug">
   div
      BreadCrumbs(:nav-list="breadcrumbs")
      main.main
         .container
            .main-header
               .main-header__body
                  h1.main__title.page-title Текстовая страница
            .page-content
               .content
                  h1 Заголовок Н1
                  h2 Заголовок Н2
                  h3 Заголовок Н3
                  h4 Заголовок Н4
                  h5 Заголовок Н5
                  h6 Caption
                  p(style="font-weight: 600; font-size: 24px; line-height: 32px;") {{ content.text }}
                  p(style="font-weight: 400; font-size: 24px; line-height: 32px;") {{ content.text }}
                  p(style="font-weight: 600; font-size: 20px; line-height: 28px;") {{ content.text }}
                  p(style="font-weight: 400; font-size: 20px; line-height: 28px;") {{ content.text }}
                  p {{ content.text }}
                  p {{ content.text }}
                  ul
                     li(v-for="(item, index) in content.list" :key="index") {{ item }}
                  p(style="font-weight: 600; font-size: 14px; line-height: 18px;") {{ content.text }}
                  p(style="font-weight: 400; font-size: 14px; line-height: 18px;") {{ content.text }}
               SliderGallery
               .content(style="max-width: 100%")
                  table
                     thead
                        tr
                           th Наименование услуги
                           th Стоимость услуги без скидки
                           th Стоимость услуги для постоянных клиентов
                           th Стоимость услуги для льготных категорий
                     tbody
                        tr(v-for="(b, i) in content.table", :key="i")
                           td {{ b.name }}
                           td {{ b.cost }}
                           td {{ b.costSale }}
                           td {{ b.costOther }}
</template>

<script setup>
useHead({
   title: "Текстовая страница",
});
const breadcrumbs = [
   {
      text: "Главная",
      href: "/",
   },
   {
      text: "Текстовая",
      href: "/page-text",
   },
   {
      text: "Текстовая",
      href: "/page-text",
   },
];

const content = {
   text: "Тормозная система - один из основных узлов автомобиля, отвечающий за безопасность пассажиров и имущества. Поломка тормоза может повлечь непоправимые последствиям. Именно поэтому нужно своевременно проводить обслуживание и диагностику системы.",
   list: [
      "Мы гарантируем стабильный заработок, что бы ни происходило. Даже во время пандемии каждый рабочий день сотрудника был оплачен. Все выплаты строго в определённые даты.",
      "Мы гарантируем стабильный заработок, что бы ни происходило. Даже во время пандемии каждый рабочий день сотрудника был оплачен. Все выплаты строго в определённые даты.",
   ],
   table: [
      {
         name: "Углы установки колёс",
         cost: "10 300 ₽",
         costSale: "8 800 ₽",
         costOther: "8 000 ₽",
      },
      {
         name: "Оценка кузовного ремонта грузового автомобиля по фото",
         cost: "800 ₽",
         costSale: "600 ₽",
         costOther: "500 ₽",
      },
      {
         name: "Углы установки колёс",
         cost: "10 300 ₽",
         costSale: "8 800 ₽",
         costOther: "8 000 ₽",
      },
      {
         name: "Оценка кузовного ремонта грузового автомобиля по фото",
         cost: "800 ₽",
         costSale: "600 ₽",
         costOther: "500 ₽",
      },
   ],
};
const wrapTable = () => {
   const tables = document.querySelectorAll("table");
   [...tables].forEach((table) => {
      const tableWrap = document.createElement("div");
      tableWrap.setAttribute("class", "table-wrap");
      table.parentNode.insertBefore(tableWrap, table);
      tableWrap.appendChild(table);
   });
};
onMounted(() => {
   wrapTable();
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
}
</style>
