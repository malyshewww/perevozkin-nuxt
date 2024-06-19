<template>
   <section class="main-advantages" ref="sectionAdvantages">
      <div class="container">
         <div class="main-advantages__body">
            <div class="main-advantages__info">
               <div class="heading">
                  <div class="heading__sub-title">Преимущества</div>
                  <h2 class="heading__title" ref="AdvantagesTitle">
                     Мы знаем <span>причины всех&nbsp;поломок</span>
                     и оптимальные
                     <br />
                     варианты <br />
                     их устранения
                  </h2>
               </div>
               <div class="main-advantages__content" ref="AdvantagesContent">
                  <p>
                     Перевозкин24 имеет в своём распоряжении более 200
                     автомобилей ГАЗ, которые мы эксплуатируем и ремонтируем
                     самостоятельно. Огромный опыт наших мастеров по ремонту
                     автомобилей ГАЗ гарантирует высокое качество и надёжность.
                  </p>
               </div>
            </div>
            <div class="main-advantages__cards">
               <div
                  class="main-advantages__card card-advantages"
                  :class="`card-advantages-${index + 1}`"
                  v-for="(card, index) in advantages">
                  <div class="card-advantages__body">
                     <div class="card-advantages__icon">
                        <img
                           :src="`/images/advantages/icon-advantages-${
                              index + 1
                           }.png`"
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
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import initCustomScrollbar from "../utils/customScrollbar.js";

const sectionAdvantages = ref("");
const AdvantagesTitle = ref("");
const AdvantagesContent = ref("");

const progress = ref(0);

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
   const splitTitle = new SplitType(AdvantagesTitle.value, {
      types: "lines",
   });
   const lines = splitTitle.lines;
   const splitContent = new SplitType(AdvantagesContent.value, {
      types: "lines",
   });
   const linesContent = splitContent.lines;

   let cards = gsap.utils.toArray(".page--home .card-advantages");

   const endTime = 500 * cards.length;

   gsap.set(".panel__stack", {
      height: () => {
         const offset = 20;
         const cards = document.querySelectorAll(".main-advantages__cards");
         const height = cards[0].offsetHeight;
         return height + cards.length * offset;
      },
   });

   // const tl = gsap.timeline({
   //    scrollTrigger: {
   //       trigger: sectionAdvantages.value,
   //       start: "top top",
   //       end: "+=100%",
   //       pin: true,
   //       pinSpacing: true,
   //       onUpdate: function (self) {
   //          progress.value = self.progress;
   //       },
   //    },
   // });
   // tl.fromTo(
   //    lines,
   //    {
   //       y: 100,
   //       opacity: 0,
   //       clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
   //    },
   //    {
   //       y: 0,
   //       opacity: 1,
   //       duration: 1,
   //       clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   //       ease: "power4.out",
   //    }
   // );
   // tl.fromTo(
   //    linesContent,
   //    {
   //       y: 50,
   //       opacity: 0,
   //    },
   //    {
   //       y: 0,
   //       stagger: 0.1,
   //       opacity: 1,
   //       duration: 2,
   //       ease: "power4.out",
   //    }
   // );
   // if (cards.length > 0) {
   //    const tlCard = gsap.timeline({
   //       scrollTrigger: {
   //          trigger: sectionAdvantages.value,
   //          scrub: 0.25,
   //          pin: true,
   //          pinSpacing: false,
   //          start: "top",
   //          end: () => "+=" + cards[0].parentNode.clientHeight,
   //          snap: {
   //             snapTo: 1 / (cards.length - 1),
   //          },
   //       },
   //       "--overlay": 1,
   //    });
   //    cards.forEach((card, i) => {
   //       tlCard.from(card, {
   //          yPercent: 150,
   //       });
   //       tlCard.to(card, {
   //          yPercent: 0,
   //       });
   //    });
   // }

   let tl = gsap.timeline({
      //  yes, we can add it to an entire timeline!
      scrollTrigger: {
         trigger: ".panel",
         fastScrollEnd: true,
         pin: true, // pin the trigger element while active
         start: "50% 370px", // when the top of the trigger hits the top of the viewport
         //end: () => `${window.innerHeight * 5} 10%`, // end after scrolling 500px beyond the start
         end: `'+=${endTime}px'`,
         pinSpacing: true,
         scrub: 0.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
         markers: false,
      },
   });
};

onMounted(() => {
   animation();
});

const advantages = [
   {
      title: "Опыт мастеров более 7 лет",
      text: "Наши специалисты имеют большой опыт в эксплуатации и ремонте автомобилей ГАЗ",
   },
   {
      title: "Современное оборудование",
      text: "Мы используем современное дорогое оборудование для диагностики и ремонта автомобилей ГАЗ. Это позволяет нам быстро и точно определить неисправности и устранить их",
   },
   {
      title: "Оригинальные запчасти в наличии",
      text: "Мы используем только оригинальные запчасти ГАЗ, что гарантирует высокое качество и надёжность ремонта",
   },
   {
      title: "Гарантия на все виды ремонта",
      text: "Предоставляем гарантию на все выполненные работы. Если в течение гарантийного срока возникнут какие‑либо проблемы с отремонтированным узлом или агрегатом, мы устраним их бесплатно",
   },
];
</script>

<style lang="scss">
.main-advantages {
   padding: 120px 0;
   & .heading {
      border: none;
      margin: 0;
      padding: 0;
      &__title {
         overflow: hidden;
      }
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      // display: flex;
      // justify-content: space-between;
      gap: 20px;
   }
   &__info {
      max-width: 705px;
      display: flex;
      flex-direction: column;
      grid-column: 1 / 7;
   }
   &__content {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: $gray;
      margin-top: auto;
      max-width: 560px;
   }
   &__cards {
      flex-grow: 1;
      // max-width: 856px;
      // height: 780px;
      // display: flex;
      // justify-content: flex-end;
      // position: relative;
      // align-self: center;
      display: grid;
      gap: 0 1.5rem;
      grid-column: 7 / -1;
      grid-row: 1 / -1;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      grid-template-rows: repeat(3, 2.5rem) auto;
      // &::before {
      //    content: "";
      //    position: absolute;
      //    inset: 0;
      //    background-color: $bg-anthracite;
      //    opacity: 0.6;
      //    z-index: 4;
      // }
   }
   & .card-advantages {
      --overlay: 0;
      width: 560px;
      min-height: 540px;
      padding: 48px 48px 60px 48px;
      box-shadow: 0 0 100px 0 rgba(16, 19, 22, 0.8);
      background: $bg-asphalt;
      // position: absolute;
      grid-column: 2 / 6;
      will-change: transform;
      position: relative;
      isolation: isolate;
      &::before {
         content: "";
         position: absolute;
         inset: 0;
         background-color: $bg-asphalt;
         opacity: var(--overlay);
         z-index: 1;
      }
      &:nth-child(1) {
         // top: 0;
         // left: 50%;
         // transform: translateX(-50%);
         z-index: 1;
      }
      &:nth-child(2) {
         // top: 10%;
         // right: 0;
         z-index: 2;
         grid-column: 3 / 7;
      }
      &:nth-child(3) {
         // top: 15%;
         // left: 0;
         z-index: 3;
         grid-column: 1 / 5;
      }
      &:nth-child(4) {
         z-index: 4;
         // bottom: 0%;
         // left: 50%;
         // transform: translateX(-50%);
         // opacity: 1;
      }
      &__content {
         margin-top: auto;
      }
      &__icon {
         width: 100px;
         height: 100px;
      }
      &__title {
         font-size: 28px;
         line-height: 36px;
      }
   }
}
</style>
