<template lang="pug">
   div
      BreadCrumbs(:nav-list="breadcrumbs")
      main.main
         .container
            .main-header
               .main-header__body
                  h1.main__title.page-title Вакансии
            .vacancy
               .vacancy__wrapper
                  SectionVacancyContent
                  SectionVacancyForm
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
