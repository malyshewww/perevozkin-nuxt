<template>
   <div>
      <BreadCrumbs :nav-list="breadcrumbs" />
      <main class="main">
         <div class="main-header">
            <div class="container">
               <div class="main-header__body">
                  <h1 class="main__title page-title">Контакты</h1>
               </div>
            </div>
         </div>
         <div class="contacts">
            <div class="container">
               <div class="contacts__wrapper">
                  <SectionContactsInfo />
                  <SectionContactsMap />
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script setup>
useHead({
   title: "Контакты",
});
const breadcrumbs = [
   {
      text: "Главная",
      href: "/",
   },
   {
      text: "Контакты",
      href: "/contacts",
   },
];
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
