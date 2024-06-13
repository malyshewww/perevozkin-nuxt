<template>
   <div class="scroller" ref="scroller">
      <div class="wrapper">
         <Header></Header>
         <slot />
         <Footer></Footer>
      </div>
   </div>
</template>

<script setup>
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
const scroller = ref("");
const bodyScrollBar = ref("");

const initScrollbar = () => {
   bodyScrollBar.value = Scrollbar.init(scroller.value, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
      renderByPixels: true,
      continuousScrolling: true,
      thumbMinSize: 20,
      syncCallbacks: true,
   });
};
onMounted(() => {
   initScrollbar();
});
</script>

<style lang="scss">
.scroller {
   height: 100vh;
   width: 100vw;
   overflow: auto;
}
.scroller .scrollbar-track-y {
   width: 6px;
   background: rgba(#f9f9fa, 0.5);
}
.scroller .scrollbar-thumb {
   background: rgba(#a2a5b8, 0.8);
}
@media screen and (max-width: 1024px) {
   .scroller {
      overflow: unset;
      height: auto;
   }
}
</style>
