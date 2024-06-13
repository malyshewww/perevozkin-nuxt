<template>
   <main class="main">
      <SectionMainScreen />
      <SectionMainServices />
      <SectionMainAdvantages />
      <SectionMainSale />
      <SectionMainPartners />
   </main>
</template>

<script setup lang="ts">
useHead({
   bodyAttrs: {
      class: `page--home`,
   },
});
definePageMeta({
   layout: "custom",
});
const productsStore = useProductsStore();
productsStore.fetchProductsFromDB();
</script>
<style lang="scss"></style>
