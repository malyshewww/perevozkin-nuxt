<template>
   <div>
      <BreadCrumbs :nav-list="breadcrumbs" />
      <main class="main">
         <div class="main-header">
            <div class="container">
               <div class="main-header__body">
                  <h1 class="main__title page-title">Вакансии</h1>
               </div>
            </div>
         </div>
         <div class="vacancy">
            <div class="container">
               <div class="vacancy__wrapper">
                  <SectionVacancyContent />
                  <SectionVacancyForm />
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
useHead({
   title: "Вакансии",
});
const breadcrumbs = [
   {
      text: "Главная",
      href: "/",
   },
   {
      text: "Вакансии",
      href: "/vacancy",
   },
];
</script>

<style lang="scss">
.vacancy {
   &__wrapper {
      display: grid;
      grid-template-columns: 1fr 560px;
      align-items: start;
      justify-content: space-between;
      gap: 40px;
      @media screen and (max-width: $xxl) {
         grid-template-columns: 1fr 400px;
      }
      @media screen and (max-width: $xl) {
         grid-template-columns: 1fr;
      }
   }
}
</style>
