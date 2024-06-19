<template>
   <div
      class="main-advantages__card card-advantages"
      v-for="(card, index) in advantages">
      <div class="card-advantages__body">
         <div class="card-advantages__icon">
            <img
               :src="`/images/advantages/icon-advantages-${index + 1}.png`"
               alt="" />
         </div>
         <div class="card-advantages__content">
            <div class="card-advantages__title">
               {{ card.title }}
            </div>
            <div class="card-advantages__text">
               <p>{{ card.text }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import initCustomScrollbar from "../utils/customScrollbar.js";

const animation = () => {
   const { bodyScrollBar, scroller } = initCustomScrollbar();
   gsap.registerPlugin(ScrollTrigger);
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
};

onMounted(() => {
   animation();
});
</script>

<style lang="scss">
.card-advantages {
   display: flex;
   min-height: 316px;
   @media screen and (max-width: $xl) {
      min-height: auto;
   }
   &:nth-child(1) {
      & .card-advantages__title {
         max-width: 73%;
      }
   }
   &__body {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1 1 auto;
   }
   &__icon {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
   }
   &__content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
      @media screen and (max-width: $xl) {
         margin: 0;
      }
   }
   &__title {
      font-family: $third-family;
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;
      text-transform: uppercase;
      color: $bg-white;
   }
   &__text {
      font-size: 16px;
      line-height: 24px;
      color: $bg-white;
   }
}
</style>
