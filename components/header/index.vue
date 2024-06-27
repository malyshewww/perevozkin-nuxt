<template>
   <header class="header">
      <div class="container">
         <div class="header__body">
            <NuxtLink to="/" class="header__logo" @click="menuClose">
               <picture>
                  <source
                     srcset="/images/logo.svg"
                     media="(min-width: 767.98px)" />
                  <source
                     srcset="/images/logo-touch.svg"
                     media="(min-width: 300px)" />
                  <img src="/images/logo.svg" alt="логотип" />
               </picture>
            </NuxtLink>
            <div class="header__menu menu" :class="{ active: isMenuActive }">
               <nav class="menu__body">
                  <ul class="menu__list">
                     <li
                        v-for="(item, index) in menu"
                        :key="index"
                        class="menu__item">
                        <NuxtLink
                           :to="`${item.href}`"
                           class="menu__link"
                           @click="menuClose"
                           >{{ item.title }}</NuxtLink
                        >
                     </li>
                  </ul>
               </nav>
               <HeaderActions device="mobile" @go-to-section="goToSection" />
            </div>
            <HeaderActions device="pc" @go-to-section="goToSection" />
            <div
               class="header__burger"
               :class="{ active: isMenuActive }"
               @click="menuOpen">
               <div class="header__burger-lines">
                  <span></span>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>
<script setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import initCustomScrollbar from "~/utils/customScrollbar.js";

const isMenuActive = ref(false);

const menuOpen = () => {
   isMenuActive.value = !isMenuActive.value;
   document.body.classList.toggle("lock");
};

const menuClose = () => {
   isMenuActive.value = false;
   document.body.classList.contains("lock") &&
      document.body.classList.remove("lock");
};

const goToSection = () => {
   const { bodyScrollBar } = initCustomScrollbar();
   const sectionSale = document.querySelector(".main-sale");
   if (sectionSale) {
      const scrollToHere = sectionSale.offsetTop + 100;
      bodyScrollBar.scrollTo(0, scrollToHere, 400);
      if (window.matchMedia("(max-width: 1024px)").matches) {
         menuClose();
      }
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

onBeforeUnmount(() => {});

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

onMounted(() => {});
</script>
<style lang="scss">
.header {
   background-color: $bg-anthracite;
   min-height: 108px;
   @media screen and (max-width: $xl) {
      min-height: 77px;
   }
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
         padding: 16px 0;
      }
   }
   &__logo {
      display: block;
      width: 364px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 11;
      position: relative;
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
   }
   &__actions {
      display: flex;
      align-items: center;
      gap: 52px;
      @media screen and (max-width: $xl) {
         display: none;
         flex-direction: column;
         align-self: stretch;
         gap: 60px;
      }
   }
   &__actions--mobile {
      display: none;
      @media screen and (max-width: $xl) {
         display: flex;
      }
   }
   &__phone {
      line-height: 22px;
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
      height: 88px;
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
      @media screen and (max-width: $xl) {
         position: static;
         width: 100%;
         height: 48px;
         padding: 10px;
      }
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
   &__burger {
      position: relative;
      width: 28px;
      height: 28px;
      padding: 5px 3px;
      z-index: 10;
      display: none;
      &.active {
         & .header__burger-lines {
            & span {
               transform: scale(0);
               background-color: transparent;
               transition: transform 0.5s ease, background-color 0.5s ease,
                  background-color 0.3s ease;
            }
            &::before {
               top: calc(50%);
               transform: rotate(45deg);
               transition: top 0.3s ease, transform 0.3s ease-out 0.3s,
                  background-color 0.3s ease;
            }
            &::after {
               bottom: calc(50% - 2px);
               transform: rotate(-45deg);
               transition: bottom 0.3s ease, transform 0.3s ease-out 0.3s,
                  background-color 0.3s ease;
            }
         }
      }
      @media screen and (max-width: $xl) {
         display: block;
      }
   }
   &__burger-lines {
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      & span,
      &::before,
      &::after {
         position: absolute;
         width: 100%;
         height: 2px;
         background-color: $bg-white;
      }
      & span {
         position: static;
      }
      &::before,
      &::after {
         content: "";
      }
      &::before {
         top: 0;
         transition: top 0.3s ease 0.5s, transform 0.3s ease-out,
            background-color 0.3s ease;
      }

      &::after {
         bottom: 0;
         transition: bottom 0.3s ease 0.5s, transform 0.3s ease-out,
            background-color 0.3s ease;
      }
   }
}
.menu {
   @media screen and (max-width: $xl) {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      background-color: $graphite;
      z-index: 10;
      padding: 92px 16px 20px;
      gap: 52px;
      flex-direction: column;
      transform: translateY(-120%);
      transition: transform $time * 2;
      overflow-x: hidden;
      overflow-y: auto;
      &.active {
         transform: translateY(0);
      }
      &::before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         height: 77px;
         width: 100%;
         background-color: $graphite;
         pointer-events: none;
         z-index: 11;
      }
   }
   @media screen and (max-width: $md) {
      padding-top: 77px;
   }
   &__body {
      flex: 0 1 44.488372%;
      @media screen and (max-width: 1919px) {
         flex: 1 1 auto;
         display: flex;
         justify-content: center;
      }
      @media screen and (max-width: $xl) {
         margin-left: 0;
      }
      @media screen and (max-width: $xl) {
         padding-top: 40px;
         border-top: 1px solid $bg-asphalt;
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
      @media screen and (max-width: $xl) {
         flex-direction: column;
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
      @media screen and (max-width: $xl) {
         line-height: 22px;
      }
   }
}
</style>
