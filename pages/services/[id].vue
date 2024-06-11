<template>
   <main class="main">
      <div class="service-card">
         <div class="main__top">
            <div class="container">
               <div class="main__top-inner">
                  <Breadcrumbs :navList="breadcrumbs"></Breadcrumbs>
                  <h1 class="main__title">
                     Ремонт подвески ГАЗель Next в Нижнем Новгороде
                  </h1>
                  <div class="main__description">
                     <p>Мы пециализируемся на ремонте автомобилей ГАЗ.</p>
                     <p>Лучше других знаем все «болячки» подвески</p>
                  </div>
                  <div class="main__image ibg">
                     <img
                        src="/images/service-card/service-img.png"
                        alt="изображение" />
                  </div>
               </div>
            </div>
         </div>
         <SectionServiceCardAdvantages />
         <SectionServiceCardForm />
         <SectionServiceCardContent />
         <SectionServiceCardOtherServices />
      </div>
   </main>
</template>
<script setup>
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
      text: "Ремонт подвески Газель NEXT в Нижнем Новгороде",
      href: "/services/1",
   },
];
</script>

<style lang="scss">
.main {
   &__top {
      padding: 120px 0 140px;
      background-color: $graphite;
      & .breadcrumbs {
         grid-area: crumbs;
         margin-top: 0;
         margin-bottom: 24px;
         & .container {
            padding: 0;
         }
      }
   }
   &__top-inner {
      display: grid;
      grid-template-areas:
         "crumbs pic"
         "title pic"
         "descr pic";
      grid-template-columns: 45% 41%;
      justify-content: space-between;
      gap: 36px;
      align-items: start;
      position: relative;
   }
   &__title {
      grid-area: title;
      font-family: $second-family;
      font-weight: 700;
      font-size: 48px;
      line-height: 60px;
      text-transform: uppercase;
      color: $bg-white;
   }
   &__description {
      grid-area: descr;
      font-size: 24px;
      line-height: 32px;
      color: $bg-white;
   }
   &__image {
      grid-area: pic;
      padding-bottom: calc(504 / 705 * 100%);
      position: absolute;
      right: 0;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
   }
}
.page-title {
}
</style>
