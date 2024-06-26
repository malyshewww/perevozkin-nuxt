<template>
   <Teleport to="body">
      <Popup :is-active="isActive" @close-popup="closePopup">
         <div class="popup__header">
            <h2 class="popup__title">{{ data.title }}</h2>
         </div>
         <div class="popup__description content">
            {{ data.descr }}
         </div>
      </Popup>
   </Teleport>
</template>

<script setup>
defineProps({
   isActive: {
      type: Boolean,
      required: true,
   },
   data: {
      type: Object,
      required: true,
   },
});
const emit = defineEmits(["closePopup"]);
const closePopup = () => {
   emit("closePopup");
};
</script>
