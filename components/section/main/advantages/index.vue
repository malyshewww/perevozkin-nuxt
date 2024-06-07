<template>
   <section class="main-advantages">
      <div class="container">
         <div class="main-advantages__body">
            <div class="main-advantages__info">
               <div class="heading">
                  <div class="heading__sub-title">Преимущества</div>
                  <h2 class="heading__title">
                     Мы знаем
                     <span
                        >причины <br />
                        всех поломок</span
                     >
                     <br />
                     и оптимальные
                     <br />
                     варианты <br />
                     их устранения
                  </h2>
               </div>
               <div class="main-advantages__content">
                  <p>
                     Перевозкин24 имеет в своём распоряжении более 200
                     автомобилей ГАЗ, которые мы эксплуатируем и ремонтируем
                     самостоятельно. Огромный опыт наших мастеров по ремонту
                     автомобилей ГАЗ гарантирует высокое качество и надёжность.
                  </p>
               </div>
            </div>
            <div class="main-advantages__cards">
               <div
                  class="main-advantages__card card-advantages"
                  v-for="(card, index) in advantages">
                  <div class="card-advantages__body">
                     <div class="card-advantages__icon">
                        <img
                           :src="`/images/main-advantages/icon-advantages-${
                              index + 1
                           }.png`"
                           alt="" />
                     </div>
                     <div class="card-advantages__content">
                        <div class="card-advantages__title">
                           {{ card.title }}
                        </div>
                        <div class="card-advantages__text">
                           <p>{{ card.text }}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
const advantages = [
   {
      title: "Опыт мастеров более 7 лет",
      text: "Наши специалисты имеют большой опыт в эксплуатации и ремонте автомобилей ГАЗ",
   },
   {
      title: "Современное оборудование",
      text: "Мы используем современное дорогое оборудование для диагностики и ремонта автомобилей ГАЗ. Это позволяет нам быстро и точно определить неисправности и устранить их",
   },
   {
      title: "Оригинальные запчасти в наличии",
      text: "Мы используем только оригинальные запчасти ГАЗ, что гарантирует высокое качество и надёжность ремонта",
   },
   {
      title: "Гарантия на все виды ремонта",
      text: "Предоставляем гарантию на все выполненные работы. Если в течение гарантийного срока возникнут какие‑либо проблемы с отремонтированным узлом или агрегатом, мы устраним их бесплатно",
   },
];
</script>

<style lang="scss">
.main-advantages {
   padding: 120px 0;
   &__body {
      display: flex;
      justify-content: space-between;
      gap: 20px;
   }
   &__info {
      max-width: 705px;
      display: flex;
      flex-direction: column;
   }
   &__content {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: $gray;
      margin-top: auto;
   }
   &__cards {
      flex-grow: 1;
      max-width: 856px;
      height: 780px;
      display: flex;
      justify-content: flex-end;
      position: relative;
      &::before {
         content: "";
         position: absolute;
         inset: 0;
         background-color: $bg-anthracite;
         opacity: 0.6;
         z-index: 4;
      }
   }
   &__card {
   }
}
.card-advantages {
   width: 560px;
   min-height: 540px;
   padding: 48px 48px 60px 48px;
   box-shadow: 0 0 50px 0 rgba(16, 19, 22, 0.8);
   background: $bg-asphalt;
   position: absolute;
   display: flex;

   &__body {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1 1 auto;
   }
   &:nth-child(1) {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
   }
   &:nth-child(2) {
      top: 10%;
      right: 0;
      z-index: 2;
   }
   &:nth-child(3) {
      top: 15%;
      left: 0;
      z-index: 3;
   }
   &:nth-child(4) {
      bottom: 0%;
      z-index: 4;
      left: 50%;
      transform: translateX(-50%);
      opacity: 1;
   }
   &__icon {
      width: 100px;
      height: 100px;
      flex-shrink: 0;
   }
   &__content {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 28px;
   }
   &__title {
      font-family: $second-family;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      text-transform: uppercase;
      color: $bg-white;
   }
   &__text {
      font-size: 16px;
      line-height: 24px;
      color: $bg-white;
   }
}
</style>
