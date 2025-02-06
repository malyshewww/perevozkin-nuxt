<template lang="pug">
	Teleport(to="body")
		Popup(:is-active="isActive" @close-popup="closePopup")
			div.popup__title Форма успешно отправлена
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["closePopup"]);
const closePopup = () => {
  emit("closePopup");
};
</script>

<style lang="scss">
.popup {
  &__title {
    max-width: 100%;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    @media screen and (max-width: $xl) {
      font-size: calc(48px / 1.5);
      line-height: calc(60px / 1.5);
    }
    @media screen and (max-width: $md) {
      font-size: 24px;
    }
  }
}
</style>
