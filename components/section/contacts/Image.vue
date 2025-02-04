<template lang="pug">
	.contacts__image.ibg(:class="classNames" v-html="image")
</template>

<script setup>
defineProps({
  classNames: {
    type: String,
  },
  image: {
    type: String,
    required: true,
    default: () => "",
  },
});
</script>

<style lang="scss">
.contacts {
  &__image {
    height: 100%;
    padding-bottom: calc(480 / 705 * 100%);
  }
}
</style>
