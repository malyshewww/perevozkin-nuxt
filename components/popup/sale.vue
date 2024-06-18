<template>
   <Teleport to="body">
      <Popup :isActive="isActive" @closePopup="closePopup">
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
const props = defineProps(["isActive", "data"]);
const emit = defineEmits(["closePopup"]);
const closePopup = () => {
   emit("closePopup");
};
</script>
