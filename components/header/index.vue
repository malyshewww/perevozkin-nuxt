<template lang="pug">
	header.header(ref="header" :class="{ active: isMenuActive }")
		.container
			.header__body
				nuxt-link(to="/" @click="menuClose").header__logo
					picture
						source(srcset="/images/logo.svg" media="(min-width: 767.98px)")
						source(srcset="/images/logo-touch.svg" media="(min-width: 300px)")
						img(src="/images/logo.svg" alt="логотип")
				.header__menu.menu(:class="{ active: isMenuActive }")
					nav.menu__body
						ul.menu__list
							li.menu__item(v-for="(item, index) in menu" :key="index")
								nuxt-link.menu__link(:to="`${item.url.href}`" @click="menuClose") {{ item.title }}
					HeaderActions(device="mobile" @go-to-section="goToSection")
				HeaderActions(device="pc" @go-to-section="goToSection")
				.header__burger(:class="{ active: isMenuActive }" @click="menuOpen")
					.header__burger-lines
						span
</template>
<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

defineProps({
   menu: {
      required: true,
   },
});

const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

const isMenuActive = ref(false);

const header = ref("");

const menuOpen = () => {
   isMenuActive.value = !isMenuActive.value;
   document.body.classList.toggle("lock");
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.updatePluginOptions("lock", { lock: true });
   setTimeout(() => {
      isMenuActive.value == false &&
         bodyScrollBar.updatePluginOptions("lock", { lock: false });
   }, 1200);
};

const menuClose = () => {
   isMenuActive.value = false;
   document.body.classList.contains("lock") &&
      document.body.classList.remove("lock");
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.updatePluginOptions("lock", { lock: false });
};

const goToSection = () => {
   navigateTo("/#sale", { replace: true });
   const { bodyScrollBar } = initCustomScrollbar();
   const sectionSale = document.querySelector(".main-sale");
   if (sectionSale) {
      const scrollToHere = bodyScrollBar.offset.y + sectionSale.offsetTop;
      // const scrollToHere =
      //    bodyScrollBar.offset.y + sectionSale.getBoundingClientRect().top;
      bodyScrollBar.scrollTo(0, scrollToHere, 400);
      if (window.matchMedia("(max-width: 1024px)").matches) {
         menuClose();
      }
   }
};

onMounted(() => {
   // const { bodyScrollBar } = initCustomScrollbar();
   // ScrollTrigger.scrollerProxy(".scroller", {
   //    scrollTop(value) {
   //       if (arguments.length) {
   //          bodyScrollBar.scrollTop = value;
   //       }
   //       return bodyScrollBar.scrollTop;
   //    },
   // });
   // bodyScrollBar.addListener(ScrollTrigger.update);
});

onMounted(() => {});
</script>
<style lang="scss">
.header {
   background-color: transparent;
   min-height: 108px;
   &::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(#22282f, 0.8);
      transition: opacity 0.3s ease 1s;
      pointer-events: none;
      z-index: 10;
      opacity: 0;
   }
   &.active {
      &::before {
         opacity: 1;
         transition: opacity 0.3s ease 0s;
      }
   }
   @media screen and (max-width: $xl) {
      min-height: 77px;
      background-color: $bg-anthracite;
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
   &__phone-wrap {
      @media screen and (max-width: $xl) {
         overflow: hidden;
      }
   }
   &__phone {
      display: block;
      line-height: 22px;
      font-weight: 600;
      transition: color $time, transform $time * 2 0.9s;
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
      @media screen and (max-width: $xl) {
         transform: translate3d(0, 110%, 0);
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
      &::before {
         content: "";
         position: absolute;
         height: 100%;
         width: 100%;
         left: 0;
         top: 0;
         inset: 0;
         transform-origin: right;
         z-index: 3;
         pointer-events: none;
         background-color: $graphite;
         transition: width $time 0.9s;
         display: none;
         @media screen and (max-width: $xl) {
            display: block;
         }
      }
      @media screen and (max-width: $xl) {
         position: relative;
         width: 100%;
         height: 48px;
         padding: 10px;
         display: grid;
         place-items: center;
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
      transform: translate3d(0, -100%, 0);
      transition: transform 0.5s 1.2s;
      overflow-x: hidden;
      overflow-y: auto;
      &.active {
         transition: transform 0.5s;
         transform: translateY(0);
         & .menu__link {
            transform: translate3d(0, 0, 0);
         }
         & .header__phone {
            transform: translate3d(0, 0, 0);
         }
         & .header__button {
            &::before {
               transform-origin: left;
               width: 0;
            }
         }
         & .menu__body {
            &::before {
               width: 100%;
               transition: width 0.5s 0.7s;
            }
         }
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
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      position: relative;
      &::before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         height: 1px;
         width: 0;
         z-index: 1;
         background-color: $bg-asphalt;
         transition: height 0.5s, width 0.5s 0.6s;
         display: none;
         @media screen and (max-width: $xl) {
            display: block;
         }
      }
      @media screen and (max-width: $xl) {
         margin-left: 0;
      }
      @media screen and (max-width: $xl) {
         padding-top: 40px;
      }
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 52px;
      flex-wrap: wrap;
      // flex: 0 1 44.488372%;
      @media screen and (max-width: 1919px) {
         justify-content: flex-end;
         flex: 0 0 auto;
      }
      @media screen and (max-width: $xxl) {
         gap: 20px;
      }
      @media screen and (max-width: $xl) {
         flex-direction: column;
         justify-content: center;
         margin-left: 0;
      }
   }
   &__item {
      @media screen and (max-width: $xl) {
         overflow: hidden;
      }
   }
   &__link {
      color: $bg-white;
      line-height: 24px;
      font-size: 16px;
      font-weight: 600;
      display: block;
      transition: color $time, transform 0.5s;
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
      @media screen and (max-width: $xl) {
         line-height: 22px;
         transform: translate3d(0, 110%, 0);
         &:nth-child(1) {
            transition: transform 0.5s 0.5s;
         }
         &:nth-child(2) {
            transition: transform 0.5s 0.6s;
         }
         &:nth-child(3) {
            transition: transform 0.5s 0.7s;
         }
         &:nth-child(4) {
            transition: transform 0.5s 0.8s;
         }
      }
   }
}
</style>
