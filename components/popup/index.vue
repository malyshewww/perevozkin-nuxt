<template lang="pug">
	.popup(:class="{ active: isActive }" @click="closePopup")
		.popup__wrapper
			.popup__content(@click.stop)
				button.popup__close(@click="closePopup")
				slot
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["closePopup", "openPopup"]);

const closePopup = () => {
  emit("closePopup");
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background: rgba($bg-anthracite, 0.8);
  opacity: 0;
  visibility: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.3s ease 0s;
  z-index: 30;
  pointer-events: none;
  &::-webkit-scrollbar {
    background: none;
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: none;
    width: 0;
  }
  &.active {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    & .popup__content {
      opacity: 1;
    }
  }
  &__wrapper {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 16px;
    transition: all 0.5s ease 0s;
  }
  &__content {
    border-radius: 0px;
    max-width: 1140px;
    background-color: $graphite;
    width: 100%;
    padding: 80px 100px;
    //   box-shadow: 0 0 50px 0 rgba(16, 19, 22, 0.8);
    position: relative;
    opacity: 0;
    // transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
    transition: opacity $time;
    @media screen and (max-width: $xl) {
      padding: 60px 40px;
    }
    @media screen and (max-width: $md) {
      padding: 60px 30px;
    }
  }
  &__close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(32px * 3);
    height: calc(32px * 3);
    background-color: transparent;
    &::before {
      content: "";
      display: block;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
      mask-image: url("/images/icons/icon-close.svg");
      mask-repeat: no-repeat;
      mask-position: center;
      background-color: $gray;
      mask-size: 32px 32px;
      transition: background-color $time;
    }
    @media screen and (max-width: $xl) {
      width: calc(32px * 2);
      height: calc(32px * 2);
    }
    @media (any-hover: hover) {
      &:hover {
        cursor: pointer;
        &::before {
          background-color: $bg-white;
        }
      }
    }
  }
  &__header {
    margin-bottom: 32px;
    @media screen and (max-width: $md) {
      margin-bottom: 20px;
    }
  }
  &__title {
    font-family: $third-family;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    text-transform: uppercase;
    color: $bg-white;
    max-width: 80%;
    @media screen and (max-width: $xl) {
      max-width: 100%;
      font-size: 28px;
      line-height: 36px;
    }
    @media screen and (max-width: $md) {
      font-size: 24px;
      line-height: 28px;
      hyphens: auto;
    }
  }
}
</style>
