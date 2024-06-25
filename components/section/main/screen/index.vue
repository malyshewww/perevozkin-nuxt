<template>
   <div class="main-screen" ref="mainScreen">
      <Header />
      <div class="container">
         <div class="main-screen__body">
            <div class="main-screen__heading">
               <h1 class="main-screen__title anim-title" ref="mainTitle">
                  Сервис автомобилей ГАЗ
                  <span>№1&nbsp;в&nbsp;Нижнем Новгороде</span>
               </h1>
            </div>
            <div class="main-screen__video ibg" ref="mainVideo">
               <video
                  :poster="`/images/video-poster.jpg`"
                  autoplay="autoplay"
                  loop="loop"
                  muted>
                  <source :src="`/images/video.mp4`" type="video/mp4" />
               </video>
            </div>
            <div class="spin">
               <img src="/images/icons/spin.svg" alt="spin" />
            </div>
         </div>
      </div>
      <div class="main-parallax" ref="mainParallax">
         <img src="/images/main-screen/parallax.png" alt="parallax" />
      </div>
   </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplitType from "split-type";

import initCustomScrollbar from "~/utils/customScrollbar.js";

const mainScreen = ref("");
const mainVideo = ref("");
const mainTitle = ref("");
const mainParallax = ref("");

let propress = ref(0);

const animation = () => {
   gsap.registerPlugin(ScrollTrigger);
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
   const header = document.querySelector(".header");
   const headerMenu = header.querySelector(".menu__body");
   const headerLogo = header.querySelector(".header__logo");
   const anim = gsap.timeline({
      scrollTrigger: {
         trigger: mainScreen.value,
         pinSpacing: true,
         pin: true,
         scrub: true,
         start: `top top`,
         end: "+=100%",
         onUpdate: function (self) {
            propress.value = self.progress;
         },
      },
   });
   anim.to(mainVideo.value, {
      width: "100%",
      height: `calc(${100}vh - ${header?.clientHeight + 100}px)`,
   });
   const animParallax = gsap.timeline({
      scrollTrigger: {
         trigger: mainScreen.value,
         pinSpacing: false,
         pin: false,
         scrub: true,
         start: () => propress.value > 0.01,
         end: "+=100%",
      },
   });
   animParallax.to(mainParallax.value, {
      y: -300,
   });
   const animLogo = gsap.timeline({
      scrollTrigger: {
         trigger: mainScreen.value,
         pinSpacing: false,
         pin: false,
         scrub: true,
         start: () => propress.value > 0.01,
         end: "+=100%",
      },
   });
   animLogo.to(headerLogo, {
      scale: 1,
      y: 0,
      x: 0,
   });
   const animMenu = gsap.timeline({
      scrollTrigger: {
         trigger: mainScreen.value,
         pinSpacing: false,
         pin: false,
         scrub: true,
         start: () => propress.value > 0.01,
         end: "+=100%",
      },
   });
   animMenu.from(headerMenu, {
      // marginLeft: "50%",
   });
   animMenu.to(headerMenu, {
      marginLeft: 0,
   });
   const animTitle = gsap.timeline({
      scrollTrigger: {
         trigger: mainScreen.value,
         pinSpacing: false,
         pin: false,
         scrub: true,
         start: () => propress.value > 0.01,
         end: "+=80%",
      },
   });
   animTitle
      .to(mainTitle.value, {
         scrollTrigger: {
            trigger: mainScreen.value,
            pinSpacing: false,
            pin: false,
            scrub: true,
            end: () => propress.value > 0.6,
         },
      })
      .to(mainTitle.value, {
         y: 0,
         opacity: 1,
      })
      .to(mainTitle.value, {
         opacity: 1,
      })
      .to(mainTitle.value, {
         opacity: 0,
      });
};
onMounted(() => {
   if (window.matchMedia("(min-width: 1024px)").matches) {
      animation();
   }
});
</script>

<style lang="scss">
.page--home {
   & .header {
      &__logo {
         transform: translate(98px, 118px) scale(1.54);
         @media screen and (max-width: $xl) {
            transform: none;
         }
      }
      & .menu__body {
         margin-left: auto;
         @media screen and (max-width: $xl) {
            margin-left: 0;
         }
      }
   }
}
.main-parallax {
   position: absolute;
   inset: 0;
   height: 1081px;
   z-index: -1;
   & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
   }
   @media screen and (max-width: $xl) {
      display: none;
   }
}
.main-screen {
   height: calc(100vh - 108px);
   padding: 0 0 100px;
   isolation: isolate;
   position: relative;
   @media screen and (max-width: $xl) {
      height: auto;
      padding: 0px 0 50px;
   }
   @media screen and (max-width: $md) {
      padding: 0px 0 30px;
   }
   & > .container {
      height: 100%;
   }
   &__body {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
      @media screen and (max-width: $xl) {
         flex-direction: column;
         gap: 32px;
         padding-top: 40px;
      }
   }
   &__heading {
      position: absolute;
      left: 0;
      bottom: 40px;
      z-index: 5;
      max-width: 59%;
      overflow: hidden;
      @media screen and (max-width: $xl) {
         position: static;
         max-width: 100%;
      }
   }
   &__title {
      font-family: $third-family;
      font-weight: 700;
      font-size: 76px;
      line-height: 84px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: $bg-white;
      transform: translateY(120%);
      @media (min-width: 1024px) and (max-height: 800px) {
         font-size: 9vh;
         line-height: 120%;
      }
      & span {
         color: $bg-green-lime;
      }
      @media screen and (max-width: $xl) {
         transform: none;
         font-size: 28px;
         line-height: 36px;
      }
   }
   &__video {
      width: 55.5%;
      padding: 0;
      position: relative;
      height: 48.28vh;
      @media screen and (max-width: $xl) {
         width: 100%;
         height: auto;
         padding-bottom: calc(194 / 343 * 100%);
         & video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
         }
      }
   }
}
.spin {
   width: 120px;
   height: 120px;
   display: grid;
   place-content: center;
   position: absolute;
   left: 50%;
   transform: translate(-50%, 50%);
   &::before {
      content: "";
      position: absolute;
      inset: 0;
      display: block;
      mask-image: url("/images/icons/icon-arrow-spin.svg");
      mask-repeat: no-repeat;
      mask-position: center;
      background-color: $bg-green-lime;
   }
   & img {
      animation: spin 10s linear infinite;
   }
   @media screen and (max-width: $xl) {
      display: none;
   }
}
</style>
