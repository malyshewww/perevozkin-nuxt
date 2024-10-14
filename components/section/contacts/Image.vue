<template lang="pug">
	.contacts__image.ibg(:class="classNames" v-html="image")
		//- img(:src="`/images/contacts/picture.jpg`" alt="изображение")
</template>

<script setup>
defineProps({
   classNames: {
      type: String,
   },
   image: {
      type: String,
      required: true,
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
