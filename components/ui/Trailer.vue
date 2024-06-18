<template>
   <div class="trailer" ref="trailer">
      <div class="trailer__content">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="icon-arrow-left-small">
            <path
               d="M3.06994 7.52663L8.96502 1.63152L8 0.666504L0.457528 8.20898L8 15.7514L8.96502 14.7864L3.06998 8.89138L14.8601 8.89135L14.8601 7.5266L3.06994 7.52663Z"></path>
         </svg>
         <div class="trailer__text">Тяните</div>
         <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="icon-arrow-right-small">
            <path
               d="M12.9301 7.52663L7.03498 1.63152L8 0.666504L15.5425 8.20898L8 15.7514L7.03498 14.7864L12.93 8.89138L1.1399 8.89135L1.1399 7.5266L12.9301 7.52663Z"></path>
         </svg>
      </div>
   </div>
</template>

<script setup>
// import initCustomScrollbar from "../utils/customScrollbar.js";

const trailer = ref("");
onMounted(() => {
   function animateTrailer(e, interacting) {
      console.log(e, interacting);
      const x = e.clientX - trailer.value.offsetWidth / 2,
         y = e.clientY - trailer.value.offsetHeight / 2;
      const keyframes = {
         transform: `translate(${x}px, ${y}px) scale(${interacting ? 1 : 0})`,
         opacity: `${interacting ? 1 : 0}`,
      };
      trailer.value.style.transform = `translate(${x}px, ${y}px) scale(${
         interacting ? 1 : 0
      })`;
      trailer.value.style.opacity = `${interacting ? 1 : 0}`;
      //   trailer.value.style.top = `${y}px`;
      //   trailer.value.style.left = `${x}px`;
      //   trailer.value.animate(keyframes, {
      //      duration: 500,
      //      fill: "forwards",
      //   });
   }
   window.onmousemove = (e) => {
      const interactable = e.target.closest(".interactable"),
         interacting = interactable !== null;
      animateTrailer(e, interacting);
      trailer.value.dataset.type = interacting ? interactable.dataset.type : "";
   };
});
</script>

<style lang="scss">
.trailer {
   width: 134px;
   height: 134px;
   border-radius: 50%;
   position: fixed;
   background-color: transparent;
   border: 1px solid $bg-white;
   left: 0px;
   top: 0px;
   z-index: 1000;
   pointer-events: none;
   opacity: 0;
   transition: opacity $time * 2 ease, transform $time * 2;
   color: $bg-white;
   cursor: pointer;
   &:not([data-type=""]) {
      opacity: 1;
   }
   &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      width: 100%;
      height: 100%;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: currentColor;
   }
   & svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      fill: currentColor;
   }
}
</style>
