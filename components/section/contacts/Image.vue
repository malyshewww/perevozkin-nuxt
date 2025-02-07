<template lang="pug">
	//- .contacts__image.ibg(:class="classNames" :style="{ backgroundImage: `url(${image.raw})` }")
	.contacts__image.ibg(:class="classNames" v-html="image.markup")
</template>

<script setup>
defineProps({
  classNames: {
    type: String,
  },
  image: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<style lang="scss">
.contacts {
  &__image {
    height: 100%;
    padding-bottom: calc(480 / 705 * 100%);
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
