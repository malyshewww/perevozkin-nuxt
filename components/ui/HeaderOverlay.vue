<template lang="pug">
	.header-overlay(ref="headerOverlay")
</template>

<script setup>
onMounted(() => {});
</script>

<style lang="scss">
.header-overlay {
   position: fixed;
   z-index: 8;
   inset: 0;
   background-color: #22282f;
   opacity: 0;
   transition: opacity 0.5s ease 1.2s;
   pointer-events: none;
   &.active {
      opacity: 1;
      transition: opacity 0.5s ease 0s;
   }
}
</style>
