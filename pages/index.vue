<template>
   <SectionMainServices />
   <SectionMainAdvantages />
   <SectionMainSale />
   <SectionMainPartners />
</template>

<script setup lang="ts">
useHead({
   bodyAttrs: {
      class: `page--home`,
   },
});
const productsStore = useProductsStore();
productsStore.fetchProductsFromDB();
</script>
<style lang="scss"></style>
