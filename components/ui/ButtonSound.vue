<template lang="pug">
	.cursor(ref="cursor")
		.cursor__label.cover
			.cursor__label-current.visible
				span без звука
				span со звуком
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const positionY = ref(0);

onMounted(() => {
  if (window.innerWidth > 1024) {
    const { bodyScrollBar, scroller } = initCustomScrollbar();
    // ScrollTrigger.scrollerProxy(".scroller", {
    //    scrollTop(value) {
    //       if (arguments.length) {
    //          bodyScrollBar.scrollTop = value;
    //       }
    //       return bodyScrollBar.scrollTop;
    //    },
    // });
    // bodyScrollBar.addListener(ScrollTrigger.update);
    // ScrollTrigger.defaults({ scroller: scroller });
    bodyScrollBar.addListener(({ offset }) => {
      positionY.value = offset.y;
    });
    const cursor = document.querySelector(".cursor");
    function animateTrailer(e, interacting) {
      const x = e.clientX - cursor.offsetWidth / 2,
        y = e.clientY + positionY.value - cursor.offsetHeight / 2;
      // const keyframes = {
      //    transform: `translate(${x}px, ${y}px) scale(${
      //       interacting ? 1 : 0
      //    })`,
      // };
      const keyframes = {
        transform: `translate(${x}px, ${y}px)`,
      };
      if (interacting) {
        cursor.classList.add("hover");
        cursor.classList.add("sound");
      } else {
        cursor.classList.remove("hover");
        cursor.classList.remove("sound");
      }
      cursor.animate(keyframes, {
        duration: 800,
        fill: "forwards",
      });
    }
    if (cursor) {
      const cursorLabel = cursor.querySelector(".cursor__label");
      window.addEventListener("mousemove", (e) => {
        const interactable = e.target.closest(".main-screen__video"),
          interacting = interactable !== null;
        animateTrailer(e, interacting);
        cursor.dataset.type = interacting ? interactable.dataset.type : "";
      });
    }
  }
});
</script>

<style lang="scss">
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.cursor {
  position: absolute;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  z-index: 1001;
  pointer-events: none;
  transform: translate(50%, 50%) scale(0);
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    width: 0%;
    height: 0%;
    opacity: 0.35;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    background-color: $bg-green-lime;
    transition: width 0.5s, height 0.5s, opacity $time, background-color $time;
    z-index: -1;
    pointer-events: none;
  }
  & > * {
    pointer-events: none;
  }
  &.hover {
    opacity: 1;
    &::before {
      width: 100%;
      height: 100%;
      opacity: 0.5;
      transition: width 0.5s ease 0.1s, height 0.5s ease 0.1s, opacity $time,
        background-color $time;
    }
    &::after {
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: width 0.5s ease 0.3s, height 0.5s ease 0.3s, opacity $time,
        background-color $time;
    }
  }
  &.no-sound {
    &::before,
    &::after {
      background-color: $bg-asphalt;
    }
  }
  &__label-current {
    position: absolute;
    width: auto;
    top: 0;
    left: 14%;
    right: 14%;
    height: 100%;
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    white-space: nowrap;
    transform: scaleY(-1);
    visibility: hidden;
    opacity: 0;
    // transition: visibility 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: $bg-white;
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
      display: inline-block;
      vertical-align: middle;
      white-space: normal;
    }
    & span:nth-child(1) {
      display: none;
    }
  }
  &.hover {
    & .cursor__label-current {
      transform: scaleY(1);
      opacity: 1;
      visibility: visible;
    }
  }
  &.sound.no-sound .cursor__label-current span:nth-child(1) {
    display: block;
  }
  &.sound.no-sound .cursor__label-current span:nth-child(2) {
    display: none;
  }
}
</style>
