<template>
   <Teleport to="body">
      <Popup :is-active="isActive" @close-popup="closePopup">
         <h2 class="popup__title">Форма успешно отправлена</h2>
      </Popup>
   </Teleport>
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
