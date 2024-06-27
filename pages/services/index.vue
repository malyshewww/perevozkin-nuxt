<template>
   <div>
      <BreadCrumbs :nav-list="breadcrumbs" />
      <main class="main">
         <div class="main-header">
            <div class="container">
               <div class="main-header__body">
                  <h1 class="main__title page-title">Газель Next</h1>
               </div>
            </div>
         </div>
         <div class="services">
            <div class="container">
               <div class="services__body">
                  <Card :arr="servicesList" />
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
useHead({
   title: "Услуги",
});
const breadcrumbs = [
   {
      text: "Главная",
      href: "/",
   },
   {
      text: "Услуги",
      href: "/services",
   },
   {
      text: "Газель NEXT",
      href: "/services/1",
   },
];
const servicesList = [
   {
      title: "Подвеска",
      price: "12 500 ₽",
      href: "/services/1",
      img: "/services/service-1",
   },
   {
      title: "МКПП",
      price: "12 500 ₽",
      href: "/services/2",
      img: "/services/service-2",
   },
   {
      title: "Двигатель",
      price: "12 500 ₽",
      href: "/services/3",
      img: "/services/service-3",
   },
   {
      title: "Тормозная система",
      price: "12 500 ₽",
      href: "/services/4",
      img: "/services/service-4",
   },
   {
      title: "Углы установки колёс",
      price: "12 500 ₽",
      href: "/services/5",
      img: "/services/service-5",
   },
   {
      title: "Рулевое управление",
      price: "12 500 ₽",
      href: "/services/6",
      img: "/services/service-6",
   },
   {
      title: "Трансмиссия",
      price: "12 500 ₽",
      href: "/services/7",
      img: "/services/service-7",
   },
];
</script>

<style lang="scss">
.services__body {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 20px;
   @media screen and (max-width: $xxl) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media screen and (max-width: $md) {
      grid-template-columns: 1fr;
   }
}
</style>
