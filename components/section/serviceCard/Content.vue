<template lang="pug">
	.service-card__description
		.container
			.heading
				.heading__title.title-md Описание услуги
			.service-card__content.content(v-html="content")
</template>

<script setup>
defineProps({
  content: {
    type: String,
    required: false,
    default: () => "",
  },
});
</script>

<style lang="scss">
.service-card {
  &__description {
    padding: 80px 0;
    @media screen and (max-width: $xl) {
      padding: 40px 0;
    }
  }
  &__content {
    max-width: 1140px;
    margin-left: auto;
  }
}
</style>
