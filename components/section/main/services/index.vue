<template>
   <section class="main-services">
      <div class="container">
         <UiTicker>
            <div class="ticker__group" ref="tickerGroup">
               <div class="ticker__item" v-for="item in tickerItems">
                  {{ item }}
               </div>
            </div>
         </UiTicker>
         <div class="main-services__body">
            <div class="main-services__top">
               <Card :arr="serviceCardsTop"></Card>
            </div>
            <div class="main-services__bottom">
               <Card :arr="serviceCardsBottom"></Card>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
const tickerGroup = ref("");

const tickerItems = [
   "Услуги сервиса",
   "Услуги сервиса",
   "Услуги сервиса",
   "Услуги сервиса",
   "Услуги сервиса",
   "Услуги сервиса",
   "Услуги сервиса",
   "Услуги сервиса",
];

const serviceCardsTop = [
   {
      title: "Газель Next",
      descr: "Диагностика и ремонт",
      img: "/main-services/service-1",
      href: "/services",
   },
   {
      title: "Газель Next",
      descr: "Диагностика и ремонт",
      img: "/main-services/service-2",
      href: "/services",
   },
   {
      title: "Газон Next",
      descr: "Диагностика и ремонт",
      img: "/main-services/service-3",
      href: "/services",
   },
];
const serviceCardsBottom = [
   {
      title: "Шиномонтаж",
      img: "/main-services/service-4",
      href: "/services",
   },
   {
      title: "Техническое обслуживание ГАЗ",
      img: "/main-services/service-5",
      href: "/services",
   },
];

onMounted(() => {
   tickerCopy(tickerGroup.value);
});
</script>

<style lang="scss">
.main-services {
   overflow: hidden;
   padding: 160px 0 120px;
   &__body {
      display: grid;
      gap: 20px;
      margin-top: 100px;
   }
   &__top {
      display: flex;
      gap: 20px;
      & .service-item {
         height: 530px;
         transition: width $time, flex-grow $time;
         flex-grow: 1;
         width: 33.333%;
         &__image {
            position: absolute;
            bottom: 0;
            width: 100%;
            z-index: 2;
            transition: height $time;
            height: 320px;
            padding: 0;
            & img {
               width: 100%;
               object-fit: contain;
               transition: width $time;
            }
         }
         @media (any-hover: hover) {
            &:hover {
               width: 75%;
               & .service-item__image {
                  height: 326px;
                  // padding-bottom: 41.3%;
               }
            }
         }
      }
   }
   &__bottom {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      & .service-item {
         width: 100%;
         min-height: 260px;
         padding: 32px;
         &:nth-child(1) {
            & .service-item__image {
               width: 250px;
               height: 155px;
            }
         }
         &:nth-child(2) {
            & .service-item__image {
               width: 380px;
               height: 196px;
            }
         }
         &__header {
            max-width: 450px;
         }
         &__image {
            position: absolute;
            right: 0;
            bottom: 0;
            left: auto;
            max-height: 196px;
            padding-bottom: 0;
         }
         &__icon {
            right: auto;
            left: 0;
         }
         &:nth-child(2) {
            grid-column: span 2;
         }
         @media (any-hover: hover) {
            &:hover {
               & .service-item__image img {
                  transform: scale(1);
               }
            }
         }
      }
   }
}
</style>
