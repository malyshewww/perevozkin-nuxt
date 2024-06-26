<template>
   <BreadCrumbs :navList="breadcrumbs"></BreadCrumbs>
   <main class="main">
      <div class="main-header">
         <div class="container">
            <div class="main-header__body">
               <h1 class="main__title page-title">Текстовая страница</h1>
            </div>
         </div>
      </div>
      <div class="page-content">
         <div class="container">
            <div class="content">
               <h1>Заголовок Н1</h1>
               <h2>Заголовок Н2</h2>
               <h3>Заголовок Н3</h3>
               <h4>Заголовок Н4</h4>
               <h5>Заголовок Н5</h5>
               <h6>Caption</h6>
               <p style="font-weight: 600; font-size: 24px; line-height: 32px">
                  {{ content.text }}
               </p>
               <p style="font-weight: 400; font-size: 24px; line-height: 32px">
                  {{ content.text }}
               </p>
               <p style="font-weight: 600; font-size: 20px; line-height: 28px">
                  {{ content.text }}
               </p>
               <p style="font-weight: 400; font-size: 20px; line-height: 28px">
                  {{ content.text }}
               </p>
               <p>{{ content.text }}</p>
               <p>{{ content.text }}</p>
               <ul>
                  <li v-for="item in content.list">{{ item }}</li>
               </ul>
               <p style="font-weight: 600; font-size: 14px; line-height: 18px">
                  {{ content.text }}
               </p>
               <p style="font-weight: 400; font-size: 14px; line-height: 18px">
                  {{ content.text }}
               </p>
            </div>
            <SliderGallery />
            <div class="content" style="max-width: 100%">
               <table>
                  <thead>
                     <tr>
                        <th>Наименование услуги</th>
                        <th>Стоимость услуги без скидки</th>
                        <th>Стоимость услуги для постоянных клиентов</th>
                        <th>Стоимость услуги для льготных категорий</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="b in content.table">
                        <td>{{ b.name }}</td>
                        <td>{{ b.cost }}</td>
                        <td>{{ b.costSale }}</td>
                        <td>{{ b.costOther }}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </main>
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
      let tableWrap = document.createElement("div");
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
