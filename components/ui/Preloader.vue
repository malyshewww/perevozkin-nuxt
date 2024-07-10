<template>
   <div v-if="isLoading" class="loading">
      <!-- <div class="loading__image">
         <img src="/images/preloader.gif" alt="прелоадер" />
      </div> -->
   </div>
</template>

<script setup>
defineProps({
   isLoading: {
      type: Boolean,
      required: true,
   },
});
</script>

<style lang="scss">
.loading {
   width: 100%;
   height: 100%;
   position: fixed;
   z-index: 20;
   inset: 0;
   display: grid;
   place-items: center;
   background-image: url("/images/preloader.gif");
   background-size: 50% auto;
   background-position: center;
   background-repeat: no-repeat;
   animation: bg 3s linear;
}
@keyframes bg {
   0% {
      background-color: black;
   }
   100% {
      background-color: $bg-asphalt;
   }
}
</style>
