<template>
   <div ref="mainScreen" class="main-screen">
      <Header v-if="isDesktop" />
      <div class="container">
         <div class="main-screen__body">
            <div class="main-screen__heading anim-heading">
               <h1 ref="mainTitle" class="main-screen__title anim-title">
                  Сервис автомобилей ГАЗ
                  <span>№1&nbsp;в&nbsp;Нижнем Новгороде</span>
               </h1>
            </div>
            <div class="main-screen__video-wrap">
               <div
                  ref="mainVideo"
                  class="main-screen__video ibg"
                  data-type="video"
                  @click="switchVideoSound($event)">
                  <!-- <img
                     :src="`/images/main-screen/empty.png`"
                     alt="изображение заглушка" /> -->
                  <video
                     ref="video"
                     :poster="`/images/video-poster.jpg`"
                     autoplay="autoplay"
                     loop="loop"
                     :muted="videoMuted">
                     <source :src="`/images/video.mp4`" type="video/mp4" />
                  </video>
               </div>
            </div>
            <div class="spin">
               <img src="/images/icons/spin.svg" alt="spin" />
            </div>
         </div>
      </div>
      <div ref="mainParallax" class="main-parallax">
         <img src="/images/main-screen/parallax.png" alt="parallax" />
      </div>
   </div>
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";
import SplitType from "split-type";
import { usePreloaderStore } from "@/stores/preloader";

const { isDesktop } = useDevice();

const store = usePreloaderStore();

const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const mainScreen = ref("");
const mainVideo = ref("");
const mainTitle = ref("");
const mainParallax = ref("");

const progress = ref(0);

const anim = ref(null);
const animParallax = ref(null);
const animLogo = ref(null);
const animMenu = ref(null);
const animTitle = ref(null);
const tlVideo = ref(null);

const tl = ref("");
const tl2 = ref("");
const tl3 = ref("");

const video = ref("");

const videoMuted = ref(true);

const switchVideoSound = (e) => {
   if (window.innerWidth > 1024) {
      if (e.target.closest("video")) {
         const cursor = document.querySelector(".cursor");
         console.log(e);
         videoMuted.value = !videoMuted.value;
         if (cursor) {
            cursor.classList[videoMuted.value ? "remove" : "add"]("no-sound");
         }
      }
   }
};

const firstAnimation = () => {
   const header = document.querySelector(".header");
   const headerLogo = header.querySelector(".header__logo");
   const splitTitle = new SplitType(mainTitle.value, {
      types: "lines",
   });
   tl2.value = gsap
      .timeline({})
      .from(headerLogo, {
         opacity: 0,
         stagger: 0.01,
         delay: store.loading ? 2.3 : 0.5,
      })
      .to(headerLogo, { opacity: 1, stagger: 0.1 });
   tl3.value = gsap
      .timeline({})
      .from(splitTitle.lines, {
         y: 100,
         opacity: 0,
         stagger: 0.05,
         duration: 0.5,
         delay: store.loading ? 2.2 : 0.5,
      })
      .to(splitTitle.lines, { y: 0, opacity: 1, stagger: 0.1 });
   tl.value = gsap
      .timeline({
         autoAlpha: 0,
      })
      .from(mainVideo.value, {
         opacity: 0,
         delay: store.loading ? 2.3 : 0.5,
      })
      .to(mainVideo.value, { opacity: 1, stagger: 0.1 });
};

const animation = () => {
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
   // bodyScrollBar.addListener((status) => {
   //    window.dispatchEvent(new Event("scroll"));
   // });
   const header = document.querySelector(".header");
   const headerMenu = header.querySelector(".menu__list");
   const headerLogo = header.querySelector(".header__logo");

   anim.value = gsap
      .timeline({
         pause: true,
         scrollTrigger: {
            trigger: mainScreen.value,
            pinSpacing: true,
            pin: true,
            scrub: true,
            start: `top top`,
            end: "+=100%",
            onUpdate: function (self) {
               progress.value = self.progress;
               // switch (true) {
               //    case progress.value > 0.1 && self.progress < 0.6:
               //       mainTitle.value.classList.add("active");
               //       break;
               //    case self.progress > 0.6 && self.progress < 1:
               //       mainTitle.value.classList.add("hide");
               //       break;
               //    case self.progress == 1:
               //       mainTitle.value.classList.remove("hide");
               //       mainTitle.value.classList.remove("active");
               //       break;
               //    default:
               //       break;
               // }
            },
            onComplete: function (self) {
               console.log(1);
            },
         },
      })
      .to(mainVideo.value, {
         width: "100%",
         height: `calc(${100}vh - ${header?.clientHeight + 100}px)`,
         // paddingBottom: 0,
      });
   animParallax.value = gsap
      .timeline({
         scrollTrigger: {
            trigger: mainScreen.value,
            pinSpacing: false,
            pin: false,
            scrub: true,
            start: () => progress.value > 0.01,
            end: "+=100%",
         },
      })
      .to(mainParallax.value, {
         y: -300,
      });
   animLogo.value = gsap
      .timeline({
         scrollTrigger: {
            // trigger: mainScreen.value,
            // pinSpacing: false,
            // pin: false,
            scrub: 1,
            start: () => progress.value > 0.01,
            end: "+=10%",
         },
      })
      .to(headerLogo, {
         scale: 1,
         y: 0,
         x: 0,
      });
   animMenu.value = gsap
      .timeline({
         scrollTrigger: {
            // trigger: mainScreen.value,
            // pinSpacing: false,
            // pin: false,
            scrub: 1,
            start: () => progress.value > 0.01,
            end: "+=10%",
         },
      })
      .to(headerMenu, {
         marginLeft: 0,
         paddingRight: 0,
      });
   animTitle.value = gsap
      .timeline({
         scrollTrigger: {
            trigger: mainScreen.value,
            pinSpacing: false,
            pin: false,
            scrub: true,
            start: () => progress.value > 0.01,
            end: "+=30%",
         },
      })
      // .to(mainTitle.value, {
      //    y: 0,
      //    opacity: 1,
      // })
      .to(mainTitle.value, {
         scrollTrigger: {
            pinSpacing: false,
            pin: false,
            scrub: true,
            end: () => progress.value > 0.6,
         },
      })
      .to(mainTitle.value, {
         opacity: 1,
      })
      .to(mainTitle.value, {
         opacity: 1,
      })
      .to(mainTitle.value, {
         opacity: 0,
      });
};

const mobileAnimation = () => {
   const mediaAnimation = gsap.matchMedia();
   mediaAnimation.add("(max-width: 1024px)", () => {
      tlVideo.value = gsap
         .timeline({
            opacity: 1,
            scrollTrigger: {
               trigger: mainVideo.value,
               start: "top",
               end: "bottom",
               scrub: 0.3,
            },
         })
         .to(mainVideo.value, {
            opacity: 0.3,
         });
   });
};

const destroyAnimations = () => {
   anim.value.pause().kill();
   animParallax.value.pause().kill();
   animLogo.value.pause().kill();
   animMenu.value.pause().kill();
   animTitle.value.pause().kill();
   tlVideo.value.pause().kill();
};

onMounted(() => {
   if (window.matchMedia("(min-width: 1024px)").matches) {
      animation();
   }
   mobileAnimation();
   firstAnimation();
});

onBeforeUnmount(() => {
   destroyAnimations();
});
</script>

<style lang="scss">
// .main-screen__title {
//    animation: slideUp 0.85s cubic-bezier(0.65, 0, 0.35, 1) both;
//    &.anim {
//       & .line {
//          animation: slideUp 0.85s cubic-bezier(0.65, 0, 0.35, 1) both;
//       }
//    }
//    @for $i from 2 through 3 {
//       & > div {
//          animation-delay: 0s;
//       }
//       &:nth-child(#{$i}) {
//          animation-delay: $i * 0.025s;
//       }
//    }
// }

.page--home {
   & .header {
      &__logo {
         transform: translate(98px, 118px) scale(1.54);
         @media screen and (max-width: $xl) {
            transform: none;
         }
      }
      & .menu__body {
         // margin-left: auto;
         @media screen and (max-width: $xl) {
            margin-left: 0;
         }
      }
      & .menu__list {
         margin-left: auto;
         padding-right: 86px;
         @media screen and (max-width: 1919px) {
            padding-right: 20px;
         }
         @media screen and (max-width: $xl) {
            padding-right: 0;
            margin: 0;
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
         align-items: flex-start;
         gap: 32px;
         padding-top: 40px;
      }
   }
   &__heading {
      position: absolute;
      left: 0;
      bottom: 40px;
      z-index: 6;
      max-width: 59%;
      overflow: hidden;
      pointer-events: none;
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
      // transform: translateY(120%);
      // transition: transform $time;
      will-change: transform;
      transition: none;
      &.active {
         transform: translate(0);
      }
      &.hide {
         opacity: 0;
      }
      @media (min-width: 1024px) and (max-height: 800px) {
         font-size: 8vh;
         line-height: 120%;
      }
      & span {
         color: $bg-green-lime;
      }
      @media screen and (max-width: $xl) {
         // transform: none;
         font-size: 28px;
         line-height: 36px;
      }
   }
   &__video-wrap {
      width: 100%;
      display: flex;
      justify-content: flex-end;
   }
   &__video {
      width: 55.5%;
      // padding-bottom: 56.25%;
      height: 56.25vh;
      z-index: 5;
      @media screen and (max-width: $xl) {
         width: 100%;
         height: auto;
         padding-bottom: calc(194 / 343 * 100%);
         & video,
         & img {
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
   z-index: 5;
   pointer-events: none;
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
