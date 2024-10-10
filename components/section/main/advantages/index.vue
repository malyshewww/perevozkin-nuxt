<template lang="pug">
	section.main-advantages(ref="sectionAdvantages")
		.container
			.main-advantages__body(ref="advantagesBody")
				.main-advantages__info.anim-heading
					.heading
						.heading__sub-title Преимущества
						h2.heading__title.anim-title(ref="AdvantagesTitle") Мы знаем #[span причины всех поломок] и оптимальные #[br] варианты #[br] их устранения
					.main-advantages__content.anim-content(ref="AdvantagesContent" v-if="text")
						p {{text}}
				.main-advantages__cards(ref="advantagesCards")
					AdvantagesCard(:advantages="advantages")
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";
import SplitType from "split-type";

defineProps({
   text: {
      type: String,
      required: false,
   },
   advantages: {
      type: Array,
      required: true,
   },
});

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const sectionAdvantages = ref("");
const AdvantagesTitle = ref("");
const AdvantagesContent = ref("");
const advantagesCards = ref("");

const advantagesBody = ref("");
const progress = ref(0);

const tl = ref(null);
const tlContent = ref(null);
const timeln = ref(null);

const animationCards = (triggerSelector, startPosition) => {
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
   ScrollTrigger.defaults({ scroller });
   const cards = gsap.utils.toArray(".page--home .card-advantages");
   if (cards.length) {
      timeln.value = gsap
         .timeline({
            scrollTrigger: {
               trigger: triggerSelector,
               pin: true,
               pinSpacing: true,
               stagger: 0.05,
               delay: 0.5,
               start: startPosition ? startPosition : "top+=1px top",
               end: () => "+=" + cards[0].clientHeight * cards.length,
               scrub: 3,
               duration: 1,
            },
         })
         .from(".card-advantages--1", {
            y: window.matchMedia("(min-width: 1024px)").matches
               ? "130vh"
               : "0px",
            "--opacity": window.matchMedia("(min-width: 1024px)").matches
               ? 1
               : 0,
         })
         .addLabel("card1")
         .to(".card-advantages--1", {
            yPercent: 0,
            "--opacity": 0.6,
         })
         .from(".card-advantages--2", {
            y: "130vh",
            // opacity: 1,
            "--opacity": 1,
         })
         .addLabel("card2")
         .to(
            ".card-advantages--1",
            {
               yPercent: 0,
               "--opacity": 0.6,
            },
            "-=0.3"
         )
         .to(".card-advantages--2", {
            yPercent: 0,
            "--opacity": 0.6,
         })
         .from(".card-advantages--3", {
            y: "130vh",

            "--opacity": 1,
         })
         .addLabel("card3")
         .to(
            ".card-advantages--2",
            {
               yPercent: 0,

               "--opacity": 0.6,
            },
            "-=0.3"
         )
         .to(".card-advantages--3", {
            yPercent: 0,

            "--opacity": 0.6,
         })
         .from(".card-advantages--4", {
            y: "130vh",
         })
         .addLabel("card4")
         .to(
            ".card-advantages--4",
            {
               yPercent: 0,
            },
            "-=0.3"
         );
      // timeln.to(".card-advantages-4", {});
   }
};

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
   // const splitContent = new SplitType(AdvantagesContent.value, {
   //    types: "lines",
   // });
   // const linesContent = splitContent.lines;
   tl.value = gsap
      .timeline({
         scrollTrigger: {
            trigger: advantagesBody.value,
            start: "top-=50%",
            end: "top 85%",
            // pin: true,
         },
      })
      .fromTo(
         lines,
         {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            y: 100,
            opacity: 0,
         },
         {
            y: 0,
            opacity: 1,
            duration: 0.5,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power4.out",
         }
      );
   tlContent.value = gsap
      .timeline({
         scrollTrigger: {
            trigger: advantagesBody.value,
            start: "top top",
            end: "+=100%",
            // pin: true,
         },
      })
      .fromTo(
         AdvantagesContent.value,
         {
            opacity: 0,
         },
         {
            stagger: 0.5,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
         }
      );
   animationCards(advantagesBody.value, "top 2%");
};

const destroyAnimations = () => {
   tl.value.pause().kill();
   timeln.value.pause().kill();
   tlContent.value.pause().kill();
};

onMounted(() => {
   if (window.matchMedia("(min-width: 1024px)").matches) {
      animation();
   }
   if (window.matchMedia("(max-width: 1024px)").matches) {
      animationCards(advantagesCards.value, "top 2%");
   }
});

onUnmounted(() => {
   destroyAnimations();
});
</script>

<style lang="scss">
.main-advantages {
   padding: 120px 0;
   overflow: hidden;
   @media screen and (max-width: $xl) {
      padding: 60px 0;
   }
   @media screen and (max-width: $md) {
      padding: 40px 0;
   }
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
      @media screen and (max-width: $xl) {
         grid-template-columns: 1fr;
         gap: 40px 0;
      }
   }
   &__info {
      max-width: 705px;
      display: flex;
      flex-direction: column;
      grid-column: 1 / 7;
      @media screen and (max-width: $xl) {
         grid-column: 1 / 12;
         max-width: 100%;
         gap: 20px;
      }
   }
   &__content {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: $gray;
      margin-top: auto;
      max-width: 560px;
      @media screen and (max-width: $xl) {
         max-width: 90%;
      }
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
      @media screen and (max-width: $xl) {
         height: auto;
         grid-column: 1 / -1;
         grid-row: none;
         max-width: 100%;
      }
      @media screen and (max-width: $md) {
         height: auto;
         grid-column: unset;
         grid-row: unset;
         grid-template-columns: repeat(12, minmax(0, 1fr));
         grid-template-rows: repeat(3, 40px) auto;
         justify-self: center;
         gap: 0 20px;
      }
      @media screen and (max-width: 374.98px) {
         width: 100%;
      }
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
      @media screen and (max-width: $xxxl) {
         width: 100%;
         padding: 20px 20px 36px;
      }
      @media screen and (max-width: $xl) {
         position: static;
         min-width: 300px;
      }
      @media screen and (max-width: $md) {
         height: 400px;
         grid-column: 2 / 12;
      }
      @media screen and (max-width: 400px) {
         min-width: auto;
         max-width: 300px;
      }
      @media screen and (max-width: 374.98px) {
         grid-column: 1 / 13;
      }
      &__body {
         @media screen and (max-width: $md) {
            gap: 10px;
         }
      }
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
         @media screen and (max-width: $md) {
            grid-column: 3 / 13;
         }
         @media screen and (max-width: 374.98px) {
            grid-column: 1 / 13;
         }
      }
      &:nth-child(3) {
         top: 21%;
         left: 0;
         z-index: 3;
         grid-column: 1 / 5;
         @media screen and (max-width: $md) {
            grid-column: 1 / 11;
         }
         @media screen and (max-width: 374.98px) {
            grid-column: 1 / 13;
         }
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
         pointer-events: none;
      }
      &__content {
         margin-top: auto;
         gap: 28px;
         @media screen and (max-width: $xxxl) {
            gap: 20px;
         }
      }
      &__icon {
         width: 100px;
         height: 100px;
         @media screen and (max-width: $xl) {
            width: 60px;
            height: 60px;
         }
      }
      &__title {
         font-size: 28px;
         line-height: 36px;
         @media screen and (max-width: $xxxl) {
            font-size: 20px;
            line-height: 28px;
         }
      }
   }
}
</style>
