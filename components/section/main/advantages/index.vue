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
               <AdvantagesCard />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import initCustomScrollbar from "~/utils/customScrollbar.js";

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
   ScrollTrigger.defaults({ scroller });

   const splitTitle = new SplitType(AdvantagesTitle.value, {
      types: "lines",
   });
   const lines = splitTitle.lines;
   const splitContent = new SplitType(AdvantagesContent.value, {
      types: "lines",
   });
   const linesContent = splitContent.lines;

   let cards = gsap.utils.toArray(".page--home .card-advantages");

   const tl = gsap.timeline({
      scrollTrigger: {
         trigger: sectionAdvantages.value,
         start: "top top",
         end: "+=100%",
         pin: true,
         pinSpacing: true,
         // toggleActions: "play pause resume reset",
         onUpdate: function (self) {
            progress.value = self.progress;
         },
      },
   });
   tl.fromTo(
      lines,
      {
         y: 100,
         opacity: 0,
         clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      },
      {
         y: 0,
         opacity: 1,
         duration: 1,
         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
         ease: "power4.out",
      }
   );
   tl.fromTo(
      AdvantagesContent.value,
      {
         opacity: 0,
      },
      {
         stagger: 0.1,
         opacity: 1,
         ease: "power4.out",
      }
   );
   if (cards.length) {
      let timeln = gsap.timeline({
         scrollTrigger: {
            trigger: sectionAdvantages.value,
            pin: true,
            pinSpacing: true,
            start: "top+=1px top",
            end: () => "+=" + cards[0].clientHeight * cards.length,
            scrub: 1,
         },
      });

      timeln.from(".card-advantages--1", {
         yPercent: 150,
         "--opacity": 1,
      });
      timeln.addLabel("card1");
      timeln.to(".card-advantages--1", {
         yPercent: 0,
         "--opacity": 0.6,
      });
      timeln.from(".card-advantages--2", {
         yPercent: 150,
         // opacity: 1,
         "--opacity": 1,
      });
      timeln.addLabel("card2");
      timeln.to(
         ".card-advantages--1",
         {
            yPercent: 0,
            "--opacity": 0.6,
         },
         "-=0.3"
      );
      timeln.to(".card-advantages--2", {
         yPercent: 0,
         "--opacity": 0.6,
      });
      timeln.from(".card-advantages--3", {
         yPercent: 150,
         "--opacity": 1,
      });
      timeln.addLabel("card3");
      timeln.to(
         ".card-advantages--2",
         {
            yPercent: 0,
            "--opacity": 0.6,
         },
         "-=0.3"
      );
      timeln.to(".card-advantages--3", {
         yPercent: 0,
         "--opacity": 0.6,
      });
      timeln.from(".card-advantages--4", {
         yPercent: 150,
      });
      timeln.addLabel("card4");
      timeln.to(
         ".card-advantages--4",
         {
            yPercent: 0,
         },
         "-=0.3"
      );
      // timeln.to(".card-advantages-4", {});
   }
};

onMounted(() => {
   animation();
});
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
      gap: 10px;
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
      height: 780px;
      max-width: 856px;
      display: grid;
      gap: 0 20px;
      grid-column: 7 / -1;
      grid-row: 1 / -1;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      grid-template-rows: repeat(3, 2.5rem) auto;
      position: relative;
      backface-visibility: hidden;
   }
   & .card-advantages {
      --opacity: 0;
      width: 560px;
      height: 540px;
      padding: 48px 48px 60px 48px;
      box-shadow: 0 0 100px 0 rgba(16, 19, 22, 0.8);
      background-color: $bg-asphalt;
      grid-column: 2 / 6;
      will-change: transform;
      position: absolute;
      isolation: isolate;
      &:nth-child(1) {
         top: 0;
         margin: auto;
         z-index: 1;
      }
      &:nth-child(2) {
         top: 10%;
         right: 0;
         z-index: 2;
         grid-column: 3 / 7;
      }
      &:nth-child(3) {
         top: 20%;
         left: 0;
         z-index: 3;
         grid-column: 1 / 5;
      }
      &:nth-child(4) {
         z-index: 4;
         bottom: 0%;
         margin: auto;
      }
      &__bg {
         display: block;
         position: absolute;
         inset: 0;
         z-index: 1;
         opacity: 0;
         background-color: $bg-asphalt;
         opacity: var(--opacity);
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
