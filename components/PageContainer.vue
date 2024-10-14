<template lang="pug">
	div(v-if="status === 'pending' || status === 'fetching'")
		div.loading-container
			div.loader.loader-11
	div(v-else-if="status === 'success'")
		slot
	div(v-else)
		div {{error.cause.message}}
</template>

<script setup>
const props = defineProps({
   status: {
      required: true,
   },
   error: {
      required: true,
   },
});
</script>

<style lang="scss">
.loading-container {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   display: grid;
   place-items: center;
   height: 100%;
   min-height: 100vh;
   z-index: 20;
   background-color: #ffffff;
}
.loader-11 {
   width: 48px;
   height: 48px;
   border-radius: 50%;
   display: inline-block;
   position: relative;
   border: 3px solid;
   background-color: transparent;
   border-color: #fff #fff transparent transparent;
   animation: rotation 1s linear infinite;
   &:after,
   &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid;
      border-color: transparent transparent #9aff85 #9aff85;
      width: 48px - 8px;
      height: 48px - 8px;
      border-radius: 50%;
      animation: rotationBack 0.5s linear infinite;
      transform-origin: center center;
   }
   &:before {
      width: 48px - 16px;
      height: 48px - 16px;
      border-color: #fff #fff transparent transparent;
      animation: rotation 1.5s linear infinite;
   }
}

@keyframes rotation {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
}
@keyframes rotationBack {
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(-360deg);
   }
}
</style>
