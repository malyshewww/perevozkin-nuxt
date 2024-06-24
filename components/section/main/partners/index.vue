<template>
   <section class="partners" ref="sectionPartners">
      <div class="container">
         <div class="heading">
            <div class="heading__sub-title">Партнёры</div>
            <div class="heading__title" ref="animTitle">
               Работаем с ведущими компаниями и
               <span>Ценим долгосрочное сотрудничество</span>
            </div>
         </div>
         <div class="partners__slider">
            <UiTicker>
               <div class="partners__item" v-for="item in partnersData">
                  <div class="partners__image">
                     <img
                        :src="`/images/main-partners/${item.img}.png`"
                        alt="" />
                  </div>
               </div>
            </UiTicker>
         </div>
      </div>
   </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
// import initCustomScrollbar from "../utils/customScrollbar.js";

const tickerGroup = ref("");
const animTitle = ref("");
const sectionPartners = ref("");

const animation = () => {
   // const { bodyScrollBar, scroller } = initCustomScrollbar();
   gsap.registerPlugin(ScrollTrigger);
   // ScrollTrigger.scrollerProxy(".scroller", {
   //    scrollTop(value) {
   //       if (arguments.length) {
   //          bodyScrollBar.scrollTop = value;
   //       }
   //       return bodyScrollBar.scrollTop;
   //    },
   // });
   // bodyScrollBar.addListener(ScrollTrigger.update);
   // ScrollTrigger.defaults({ scroller });
   // const splitTitle = new SplitType(animTitle.value, {
   //    types: "lines",
   // });
   // const lines = splitTitle.lines;
   const tl = gsap.timeline({
      scrollTrigger: {
         trigger: sectionPartners.value,
         start: "top 50%",
         stager: 0.1,
      },
   });
   tl.fromTo(
      animTitle.value,
      {
         opacity: 0.5,
         y: "100%",
      },
      {
         y: "0%",
         opacity: 1,
         stagger: 0.25,
         ease: "power3.out",
      }
   );
};

const partnersData = [
   {
      img: "partner-1",
   },
   {
      img: "partner-2",
   },
   {
      img: "partner-3",
   },
   {
      img: "partner-4",
   },
   {
      img: "partner-5",
   },
   {
      img: "partner-6",
   },
   {
      img: "partner-7",
   },
   {
      img: "partner-8",
   },
];

onMounted(() => {
   animation();
});
</script>
<style lang="scss">
.partners {
   padding: 120px 0 60px;
   & .heading {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 0 253px;
      margin: 0;
      padding: 0;
      border: none;
      overflow: hidden;
      &__title {
         flex: 1 1 auto;
         max-width: 1000px;
      }
   }
   & .ticker {
      --gap: 20px;
      gap: var(--gap);
      &-wrapper {
         gap: var(--gap);
      }
      &-content {
         gap: var(--gap);
      }
   }
   &__slider {
      margin-top: 120px;
   }
   &__item {
      width: 270px;
      height: 270px;
      border-radius: 50%;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $bg-asphalt;
      padding: 20px;
   }
   &__image {
   }
}
</style>
