<template lang="pug">
	aside.aside
		slot
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

const asideSticky = () => {
  const { bodyScrollBar } = initCustomScrollbar();
  const aside = document.querySelector(".aside");
  if (aside) {
    bodyScrollBar.addListener(({ offset }) => {
      aside.style.top = `${offset.y + 30}px`;
    });
  }
};
onMounted(() => {
  if (window.matchMedia("(min-width: 1024px)")) {
    asideSticky();
  }
});
</script>

<style lang="scss">
.aside {
  position: sticky;
}
.aside-form {
  padding: 52px 60px 72px;
  background: $graphite;
  @media screen and (max-width: $xxl) {
    padding: 40px;
  }
  @media screen and (max-width: $md) {
    padding: 20px;
  }
  & .form__items {
    grid-template-columns: 1fr;
    margin: 0;
  }
}
.form {
  &__header {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__title {
    font-family: $third-family;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    text-transform: uppercase;
    color: $bg-white;
    position: relative;
    padding-bottom: 12px;
    text-align: left;
    max-width: 80%;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 72px;
      height: 1px;
      background-color: $bg-green-lime;
    }
    @media screen and (max-width: $xl) {
      max-width: 100%;
    }
    @media screen and (max-width: $md) {
      font-size: 22px;
      line-height: 28px;
    }
  }
  &__sub-title {
    font-size: 16px;
    line-height: 24px;
    font-family: $font-family;
    text-align: left;
  }
  &__items {
    width: 100%;
    display: grid;
    gap: 12px;
  }
  &__bottom {
    display: grid;
    gap: 24px;
    margin-top: 20px;
    @media screen and (max-width: $xl) {
      width: 100%;
    }
  }
  &__button {
    &::before {
      border-color: transparent transparent transparent $bg-graphite;
    }
    &::after {
      border-color: transparent $bg-graphite transparent transparent;
    }
  }
  &__text {
    font-family: $font-family;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: $gray;
    align-self: flex-start;
    text-align: left;
    & a {
      color: $bg-white;
      box-shadow: 0 1px 0 0 $bg-white;
    }
  }
}
</style>
