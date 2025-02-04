<template lang="pug">
	.not-found
		.container
			.not-found__body
				.not-found__image
					img(:src="`/images/404.svg`" alt="иконка 404")
				.not-found__top
					.not-found__title Страница не найдена
					.not-found__sub-title Она была удалена, либо её вовсе не существовало на&nbsp;сайте
					UiLink(path="/" text="На главную" class-names="not-found__btn")
				nav.not-found__navigation.not-found-menu
					.not-found-menu__caption Услуги
					ul.not-found-menu__list
						li(v-for="(service, index) in services" :key="index").not-found-menu__item
							nuxt-link(:to="service.url").not-found-menu__link {{service.name}}
						li.not-found-menu__item
							nuxt-link(:to="serviceFront[0].url").not-found-menu__link {{serviceFront[0].title}}
</template>

<script setup>
defineProps({
  services: {
    type: Array,
    required: false,
    default: () => [],
  },
  serviceFront: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.not-found {
  // .not-found__body
  &__body {
    display: grid;
    grid-template-columns: 100%;
    text-align: center;
    gap: 72px 0px;
    max-width: 560px;
    margin: 0 auto;
    @media screen and (max-width: $md) {
      gap: 36px 0;
      max-width: 100%;
    }
  }
  // .not-found__top
  &__top {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-self: center;
    align-items: center;
  }
  // .not-found__image
  &__image {
    justify-self: center;
  }
  // .not-found__title
  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    text-transform: uppercase;
    font-family: $third-family;
  }
  // .not-found__sub-title
  &__sub-title {
    font-size: 20px;
    line-height: 28px;
  }
  // .not-found__navigation
  &__navigation {
    background: #2a3038;
    padding: 32px;
  }
  &__btn {
    margin-top: 32px;
    width: 172px;
    @media screen and (max-width: $md) {
      width: 100%;
      margin-top: 16px;
    }
  }
}
.not-found-menu {
  display: flex;
  flex-direction: column;
  gap: 40px;
  //   not-found-menu__caption
  &__caption {
    font-family: $third-family;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    text-transform: uppercase;
    color: $bg-white;
    position: relative;
    padding-bottom: 14px;
    text-align: left;
    max-width: 80%;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 72px;
      height: 2px;
      background-color: $bg-green-lime;
    }
    @media screen and (max-width: $xl) {
      max-width: 100%;
    }
  }
  // .not-found-menu__list
  &__list {
    @include reset-list;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    text-align: left;
  }
  // .not-found-menu__item
  &__item {
  }
  // .not-found-menu__link
  &__link {
    font-size: 20px;
    line-height: 28px;
    transition: color $time;
    text-transform: capitalize;
    @media (any-hover: hover) {
      &:hover {
        color: $state-hover;
      }
    }
  }
}
</style>
