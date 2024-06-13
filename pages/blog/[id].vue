<template>
   <Breadcrumbs :navList="breadcrumbs"></Breadcrumbs>
   <main class="main">
      <div class="article-page">
         <div class="container">
            <div class="article-page__wrapper">
               <SectionArticleContent />
               <SectionArticleForm />
            </div>
         </div>
      </div>
   </main>
</template>

<script setup>
useHead({
   bodyAttrs: {
      class: "page--article",
   },
});
const breadcrumbs = [
   {
      text: "Главная",
      href: "/",
   },
   {
      text: "Блог",
      href: "/blog",
   },
   {
      text: "Обслуживание и диагностика тормозной системы",
      href: "/blog/1",
   },
];
</script>

<style lang="scss">
.page--article {
   & .breadcrumbs {
      &__nav {
         padding-bottom: 36px;
         border-bottom: 1px solid $bg-asphalt;
      }
   }
   & .form {
      &__bottom {
         margin-top: 24px;
      }
   }
}
.article-page {
   &__wrapper {
      display: grid;
      grid-template-columns: 1fr minmax(400px, 560px);
      gap: 20px;
      justify-content: space-between;
      align-items: start;
      padding-top: 52px;
   }
}
</style>
