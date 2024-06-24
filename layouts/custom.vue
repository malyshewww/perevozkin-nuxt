<template>
   <div class="scroller" ref="scroller">
      <div class="wrapper">
         <UiTrailer />
         <slot />
         <Footer></Footer>
      </div>
   </div>
</template>

<script setup>
import initCustomScrollbar from "../utils/customScrollbar.js";

onMounted(() => {
   initCustomScrollbar();
});
</script>

<style lang="scss">
.scroller {
   height: 100vh;
   width: 100vw;
   overflow: hidden auto;
}
.scroller .scrollbar-track-y {
   width: 6px;
   background: rgba($bg-anthracite, 0.5);
}
.scroller .scrollbar-thumb {
   background: rgba($bg-green-lime, 0.8);
}
@media screen and (max-width: 1024px) {
   .scroller {
      overflow: unset;
      height: auto;
   }
}
</style>
