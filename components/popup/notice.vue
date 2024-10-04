<template lang="pug">
	Teleport(to="body")
		Popup(:is-active="isActive" @close-popup="closePopup")
			h2.popup__title Форма успешно отправлена
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
   }
}
</style>
