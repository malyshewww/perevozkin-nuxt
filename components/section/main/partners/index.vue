<template lang="pug">
   section.partners(ref="sectionPartners")
      .container
         .heading.anim-heading(ref="heading")
            .heading__sub-title Партнёры
            .heading__title.anim-title(ref="animTitle") Работаем с ведущими компаниями и #[span Ценим долгосрочное сотрудничество]
         .partners__slider
            UiTicker
               .partners__item(v-for="(item, index) in partners" :key="index")
                  .partners__image(v-html="item.markup")
                     //- img(:src="`/images/main-partners/${item.img}.png`" alt="изображение")
</template>
<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

defineProps({
   partners: {
      type: Array,
      required: true,
   },
});

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const animTitle = ref("");
const sectionPartners = ref("");

const heading = ref("");

const tl = ref(null);

const animation = () => {
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
   // ScrollTrigger.defaults({ scroller });
   tl.value = gsap
      .timeline({
         scrollTrigger: {
            trigger: sectionPartners.value,
            start: "top 50%",
            stager: 0.1,
         },
      })
      .fromTo(
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

const destroyAnimations = () => {
   tl.value.pause().kill();
   tl.value = null;
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
   if (window.matchMedia("(min-width: 1024px)").matches) {
      animation();
   }
});

onBeforeUnmount(() => {
   destroyAnimations();
});
</script>
<style lang="scss">
.partners {
   padding: 120px 0 60px;
   @media screen and (max-width: $xl) {
      padding: 60px 0;
   }
   @media screen and (max-width: $md) {
      padding: 40px 0 0;
   }
   & .heading {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 12px 253px;
      margin: 0;
      padding: 0;
      border: none;
      overflow: hidden;
      &__title {
         flex: 1 1 auto;
         max-width: 1000px;
      }
      @media screen and (max-width: $xxl) {
         gap: 12px 100px;
      }
      @media screen and (max-width: $xl) {
         flex-direction: column;
      }
   }
   & .ticker {
      --gap: 20px;
      gap: var(--gap);
      @media screen and (max-width: $xl) {
         --gap: 12px;
         animation: none;
      }
      &-wrapper {
         gap: var(--gap);
      }
      &-content {
         gap: var(--gap);
      }
   }
   &__slider {
      margin-top: 120px;
      @media screen and (max-width: $xl) {
         margin-top: 80px;
      }
      @media screen and (max-width: $md) {
         margin-top: 40px;
      }
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
      @media screen and (max-width: $xl) {
         width: 140px;
         height: 140px;
      }
   }
   &__image {
      width: 170px;
      height: 170px;
      overflow: hidden;
      display: grid;
      place-items: center;
      & img {
         width: 100%;
         height: 100%;
      }
      @media screen and (max-width: $xl) {
         width: 80px;
         height: 80px;
      }
   }
}
</style>
