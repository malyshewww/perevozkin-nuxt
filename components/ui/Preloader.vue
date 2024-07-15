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
   animation: bg 2.5s ease;
   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("/images/preloader.gif");
      background-size: 50% auto;
      background-position: center;
      background-repeat: no-repeat;
      animation: opacity 2s linear;
   }
}
@keyframes bg {
   0% {
      background-color: black;
   }
   100% {
      background-color: $bg-asphalt;
   }
}
@keyframes opacity {
   50% {
      opacity: 1;
   }
   100% {
      opacity: 0;
   }
}
</style>
