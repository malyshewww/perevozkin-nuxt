<template lang="pug">
	nuxt-link.service-item(v-for="(item, index) in arr" :key="index" :to="item.url")
		.service-item__body
			svg.service-item__icon
				use(href="/images/icons/sprite.svg#rotate-arrow-down")
			.service-item__header
				.service-item__title(v-if="item.title || item.name") {{ item.name || item.title }}
				.service-item__sub-title(v-if="item.descr") {{ item.descr }}
				.service-item__price(v-if="item.field_price") #[span от] {{ new Intl.NumberFormat("ru").format(item.field_price) }} ₽
			.service-item__image(v-html="item.field_image[0].markup")
</template>

<script setup>
const props = defineProps({
  arr: {
    required: true,
  },
});
</script>

<style lang="scss">
.service-item {
  border: 1px solid $bg-asphalt;
  padding: 40px;
  position: relative;
  flex-grow: 1;
  z-index: 2;
  @include transition(width $time * 2, flex-grow $time * 2);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(162deg, #2f3740 0%, #264947 100%);
    background-size: 100% 100%;
    opacity: 0;
    z-index: -1;
    @include transition(opacity $time);
  }
  @media (any-hover: hover) {
    &:hover {
      &::before {
        opacity: 1;
      }
      & .service-item__icon {
        opacity: 1;
        transform: translateY(0);
      }
      & .service-item__sub-title {
        clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
      }
    }
  }
  @media screen and (max-width: $xl) {
    padding: 20px;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    height: 100%;
    position: relative;
    z-index: 2;
    &::before {
      content: none;
    }
  }
  &__header {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-self: flex-start;
  }
  &__icon {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    opacity: 0;
    transform: translateY(-20px);
    @include transition(opacity $time, transform $time);
  }
  &__title {
    font-family: $third-family;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    text-transform: uppercase;
    color: $bg-white;
    @media screen and (max-width: $md) {
      font-size: 20px;
      line-height: 28px;
      hyphens: auto;
    }
  }
  &__sub-title {
    font-size: 20px;
    line-height: 28px;
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    transition: clip-path $time;
    @media screen and (max-width: $md) {
      display: none;
    }
  }
  &__price {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: $bg-white;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    & span {
      font-weight: 400;
      color: $gray;
    }
    @media screen and (max-width: $md) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  &__image {
    margin-top: auto;
    // max-height: 320px;
    // position: absolute;
    // bottom: 0;
    // left: 0;
    width: 100%;
    padding-bottom: calc(340 / 480 * 100%);
    position: relative;
    @include transition(transform, $time);
    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      @include transition(transform, $time);
    }
  }
}
</style>
