<template lang="pug">
	.trailer(ref="trailer")
		.trailer__content
			svg#icon-arrow-left-small(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16")
				path(d="M3.06994 7.52663L8.96502 1.63152L8 0.666504L0.457528 8.20898L8 15.7514L8.96502 14.7864L3.06998 8.89138L14.8601 8.89135L14.8601 7.5266L3.06994 7.52663Z")
			.trailer__text Тяните
			svg#icon-arrow-right-small(fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16")
				path(d="M12.9301 7.52663L7.03498 1.63152L8 0.666504L15.5425 8.20898L8 15.7514L7.03498 14.7864L12.93 8.89138L1.1399 8.89135L1.1399 7.5266L12.9301 7.52663Z")
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const positionY = ref(0);

onMounted(() => {
   if (window.matchMedia("(min-wdith: 1024px)")) {
      const { bodyScrollBar, scroller } = initCustomScrollbar();
      ScrollTrigger.scrollerProxy(".scroller", {
         scrollTop(value) {
            if (arguments.length) {
               bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
         },
      });
      bodyScrollBar.addListener(ScrollTrigger.update);
      ScrollTrigger.defaults({ scroller: scroller });

      bodyScrollBar.addListener(({ offset }) => {
         positionY.value = offset.y;
      });

      const trailer = document.querySelector(".trailer");
      if (trailer) {
         window.addEventListener("mousemove", (event) => {
            if (event.target.closest(".item-sale__button")) {
               trailer.classList.remove("active");
            }
            const style = window.getComputedStyle(
               document.querySelector(".scroller")
            );
            const matrix = new WebKitCSSMatrix(style.transform);
            gsap.to(trailer, {
               x: event.clientX,
               y: event.clientY + positionY.value - matrix.m42,
               yPercent: -50,
               xPercent: -50,
               duration: 0.1,
            });
         });
      }
   }
});
</script>

<style lang="scss">
.trailer {
   width: 134px;
   height: 134px;
   position: fixed;
   background-color: transparent;
   left: 0px;
   top: 0px;
   z-index: 1000;
   pointer-events: none;
   opacity: 0;
   transition: opacity $time;
   color: $bg-white;
   pointer-events: none;
   &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: 1px solid $bg-white;
      border-radius: 50%;
      transform: scale(0.5);
      transform-origin: center;
      transition: transform $time;
   }
   @media screen and (max-width: $xl) {
      display: none;
   }
   &.active {
      opacity: 1;
      &::before {
         transform: scale(1);
      }
   }
   &.scalling {
      &::before {
         transform: scale(0.7);
      }
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
