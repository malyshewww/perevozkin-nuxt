<template>
   <header class="header">
      <div class="container">
         <div class="header__body">
            <NuxtLink to="/" class="header__logo">
               <picture>
                  <source
                     srcset="/images/logo-touch.svg"
                     media="(min-width: 300px)" />
                  <source
                     srcset="/images/logo.svg"
                     media="(min-width: 767.98px)" />
                  <img src="/images/logo.svg" alt="логотип" />
               </picture>
            </NuxtLink>
            <div class="header__menu menu">
               <nav class="menu__body">
                  <ul class="menu__list">
                     <li class="menu__item" v-for="item in menu">
                        <NuxtLink :to="`${item.href}`" class="menu__link">{{
                           item.title
                        }}</NuxtLink>
                     </li>
                  </ul>
               </nav>
            </div>
            <div class="header__actions">
               <a href="tel:+78311380880" class="header__phone"
                  >+7 (831) 138-08-80</a
               >
               <nuxt-link
                  :to="{ hash: '#sale', path: '/' }"
                  @click="goToSection"
                  class="header__button">
                  <span class="header__button-text">Акции</span>
               </nuxt-link>
            </div>
         </div>
      </div>
   </header>
</template>
<script setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import initCustomScrollbar from "~/utils/customScrollbar.js";

// const updatePositionTrailer = () => {
//    const trailer = document.querySelector(".trailer");
//    if (trailer) {
//       const { bodyScrollBar } = initCustomScrollbar();
//       trailer.top = `${bodyScrollBar.offset.y}px`;
//    }
// };

const goToSection = () => {
   const { bodyScrollBar } = initCustomScrollbar();
   const sectionSale = document.querySelector(".main-sale");
   if (sectionSale) {
      let scrollToHere = sectionSale.offsetTop + 100;
      bodyScrollBar.scrollTo(0, scrollToHere, 100);
   }
};

onMounted(() => {
   const { bodyScrollBar } = initCustomScrollbar();
   ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
         if (arguments.length) {
            bodyScrollBar.scrollTop = value;
         }
         return bodyScrollBar.scrollTop;
      },
   });
   bodyScrollBar.addListener(ScrollTrigger.update);
});

const localePath = useLocalePath();

const menu = [
   {
      title: "Услуги",
      href: "/services",
   },
   {
      title: "Вакансии",
      href: "/vacancy",
   },
   {
      title: "Блог",
      href: "/blog",
   },
   {
      title: "Контакты",
      href: "/contacts",
   },
];

// if (process.client) {
//    const { currentRoute: route } = useRouter();
//    if (route.value?.hash) {
//       // set hash
//       const hash = route.value?.hash;
//       onMounted(() => {
//          let el = document.querySelector(hash);
//          if (el) {
//             // let itemY =
//             //    document.querySelector(hash).getBoundingClientRect().top +
//             //    bodyScrollBar.offset.y;
//             // Scrollbar.scrollTo(0, itemY, 600);
//             // if ("scrollBehavior" in document.documentElement.style) {
//             //    window.scrollTo({
//             //       top: el.getBoundingClientRect().top + window.scrollY,
//             //       behavior: "smooth",
//             //    });
//             // } else {
//             //    window.scrollTo(
//             //       0,
//             //       el.getBoundingClientRect().top + window.scrollY
//             //    );
//             // }
//          }
//       });
//    }
// }
</script>
<style lang="scss">
.header {
   background-color: $bg-anthracite;
   min-height: 108px;
   &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      padding-right: 182px;
      gap: 20px;
      position: relative;
      @media screen and (max-width: $xxxl) {
         padding-right: 140px;
      }
      @media screen and (max-width: $xl) {
         padding-right: 0;
      }
   }
   &__logo {
      display: block;
      width: 364px;
      height: 84px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
      @media screen and (max-width: $xxxl) {
         width: 250px;
      }
      @media screen and (max-width: $md) {
         width: 193px;
      }
   }
   &__menu {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      @media screen and (max-width: $xl) {
         display: none;
      }
   }
   &__actions {
      display: flex;
      align-items: center;
      gap: 52px;
      @media screen and (max-width: $xl) {
         display: none;
      }
   }
   &__phone {
      line-height: 24px;
      font-weight: 600;
      @include transition(color, $time);
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
   }
   &__button {
      padding: 23px 40px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-shrink: 0;
      min-height: 88px;
      position: relative;
      background-image: linear-gradient(
         135deg,
         #6de754 0%,
         #129465 51%,
         #6de754 100%
      );
      background-size: 300%;
      @include transition(background-position, $time * 2);
      clip-path: polygon(
         0 0,
         100% 0,
         100% 50%,
         100% 100%,
         12px 100%,
         0 calc(100% - 12px)
      );
      position: absolute;
      top: 0;
      right: 0;
      &-text {
         font-weight: 600;
         font-size: 16px;
         line-height: 22px;
         color: $bg-white;
         position: relative;
         z-index: 2;
      }
      @media (any-hover: hover) {
         &:hover {
            background-position: right top;
         }
      }
   }
}
.menu {
   &__body {
      flex: 0 1 44.488372%;
      @media screen and (max-width: 1919px) {
         flex: 1 1 auto;
         display: flex;
         justify-content: center;
      }
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 52px;
      flex-wrap: wrap;
      @media screen and (max-width: $xxl) {
         gap: 20px;
      }
   }
   &__item {
   }
   &__link {
      color: $bg-white;
      line-height: 24px;
      font-size: 16px;
      font-weight: 600;
      @include transition(color, $time);
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
   }
}
</style>
