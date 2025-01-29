<template lang="pug">
	div(v-for="(card, index) in advantages" :key="index" :ref="'card' + index" :class="`main-advantages__card card-advantages card-advantages--${index + 1}`")
		.card-advantages__bg
		.card-advantages__body
			.card-advantages__icon
				NuxtPicture(:src="`/images/advantages/icon-advantages-${index + 1}.png`" :alt="card.field_text[0]")
			.card-advantages__content
				.card-advantages__title(v-if="card.field_name[0]") {{ card.field_name[0] }}
				.card-advantages__text(v-if="card.field_text[0]")
					p {{ card.field_text[0] }}
</template>

<script setup>
defineProps({
  advantages: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
.card-advantages {
  display: flex;
  min-height: 316px;
  overflow: hidden;
  @media screen and (max-width: $xl) {
    min-height: auto;
  }
  &:nth-child(1) {
    & .card-advantages__title {
      max-width: 73%;
    }
  }
  &__bg {
    display: none;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1 1 auto;
  }
  &__icon {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    @media screen and (max-width: $xl) {
      width: 60px;
      height: 60px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    @media screen and (max-width: $xl) {
      margin: 0;
    }
  }
  &__title {
    font-family: $third-family;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    text-transform: uppercase;
    color: $bg-white;
  }
  &__text {
    font-size: 16px;
    line-height: 24px;
    color: $bg-white;
    @media screen and (max-width: $md) {
      line-height: 22px;
    }
  }
}
</style>
