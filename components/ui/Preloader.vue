<template>
   <div v-if="isLoading" class="loading"></div>
</template>

<script setup>
defineProps({
   isLoading: {
      type: Boolean,
      required: true,
   },
});
</script>

<style lang="scss" scoped>
.loading {
   width: 100%;
   height: 100%;
   position: fixed;
   z-index: 20;
   inset: 0;
   display: grid;
   place-items: center;
   animation: bg 2.5s linear both;
   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("/images/preloader2.gif");
      background-size: 50% auto;
      background-position: center;
      background-repeat: no-repeat;
      animation: opacityZero 2.2s linear both;
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
@keyframes opacityZero {
   60% {
      opacity: 1;
   }
   100% {
      opacity: 0;
   }
}
</style>
