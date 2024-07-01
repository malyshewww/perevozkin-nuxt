<template>
   <div class="contacts__image ibg" :class="classNames">
      <img src="/images/contacts/picture.jpg" alt="изображение" />
   </div>
</template>

<script setup>
defineProps({
   classNames: {
      type: String,
   },
});
</script>

<style lang="scss">
.contacts {
   &__image {
      padding-bottom: calc(480 / 705 * 100%);
   }
}
</style>
