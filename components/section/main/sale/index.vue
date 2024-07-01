<template>
   <div id="sale" class="main-sale">
      <div class="container">
         <UiTicker>
            <div
               v-for="(item, index) in tickerItems"
               :key="index"
               class="ticker__item">
               {{ item }}
            </div>
         </UiTicker>
         <div
            ref="saleSlider"
            class="main-sale__body swiper interactable"
            data-type="slider"
            @mouseover="showTrailer"
            @mouseleave="hideTrailer">
            <!-- <div class="ball" ref="ball"></div> -->
            <div class="main-sale__wrapper swiper-wrapper">
               <div
                  v-for="(item, index) in saleSliderData"
                  :key="index"
                  class="main-sale__item item-sale swiper-slide">
                  <div class="item-sale__wrapper">
                     <div class="item-sale__info">
                        <div class="item-sale__badge">Акция</div>
                        <div class="item-sale__date">{{ item.date }}</div>
                        <div class="item-sale__title">{{ item.title }}</div>
                        <div class="item-sale__description">
                           {{ item.descr }}
                        </div>
                        <UiButton
                           btn-type="button"
                           btn-title="Узнать больше"
                           class-names="item-sale__button"
                           @open-popup="openSalePopup($event, item)" />
                        <div class="item-sale__bottom">
                           <div class="item-sale__disclamer">
                              {{ item.disclamer }}
                           </div>
                        </div>
                     </div>
                     <div class="item-sale__image-wrap">
                        <div class="item-sale__image ibg">
                           <img
                              :src="`/images/main-sale/${item.img}.png`"
                              alt="изображение" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="slider-controls">
               <button
                  ref="buttonPrev"
                  type="button"
                  class="slider-button slider-button-prev"></button>
               <button
                  ref="buttonNext"
                  type="button"
                  class="slider-button slider-button-next"></button>
            </div>
         </div>
      </div>
   </div>
   <PopupSale
      :data="popupSaleData"
      :is-active="isSalePopupActive"
      @close-popup="closeSalePopup()" />
</template>
<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

import Swiper from "swiper";
import "swiper/css";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const { $gsap: gsap } = useNuxtApp();

const slider = ref(null);
const saleSlider = ref("");

const buttonPrev = ref("");
const buttonNext = ref("");

const isSalePopupActive = ref(false);
const popupSaleData = ref({});

const saleSliderData = [
   {
      date: "с 01.04.2024 по 30.04.2024",
      title: "Диагностика ходовой бесплатно",
      descr: "при замене тормозных дисков и колодок в автосервисах на ул. Переходникова, 12 и ул. Ларина, 27В при замене тормозных дисков и колодок в автосервисах на ул. Переходникова, 12 и ул. Ларина, 27В при замене тормозных дисков и колодок в автосервисах на ул. Переходникова, 12 и ул. Ларина, 27В",
      btn: "Узнать больше",
      disclamer:
         "Подробности у сервисных консультантов. Не является публичной офертой",
      img: "sale-1",
   },
   {
      date: "с 01.04.2024 по 30.04.2024",
      title: "Техобслуживание",
      descr: "в подарок при замене тормозных дисков и колодок",
      btn: "Узнать больше",
      disclamer:
         "Подробности у сервисных консультантов. Не является публичной офертой",
      img: "sale-2",
   },
];
const tickerItems = [
   "Акция",
   "Акция",
   "Акция",
   "Акция",
   "Акция",
   "Акция",
   "Акция",
   "Акция",
];

const showTrailer = () => {
   const trailer = document.querySelector(".trailer");
   trailer && trailer.classList.add("active");
};
const hideTrailer = () => {
   const trailer = document.querySelector(".trailer");
   trailer && trailer.classList.remove("active");
};

const positionY = ref(0);

function initSlider() {
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.addListener(({ offset }) => {
      positionY.value = offset.y;
   });
   slider.value = new Swiper(saleSlider.value, {
      modules: [Navigation, FreeMode],
      slidesPerView: "auto",
      speed: 800,
      freeMode: true,
      navigation: {
         nextEl: buttonNext.value,
         prevEl: buttonPrev.value,
      },
      breakpoints: {
         300: {
            spaceBetween: 12,
            slidesPerView: 1.04,
         },
         1024: {
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: true,
         },
         1400: {
            spaceBetween: 165,
            autoHeight: false,
         },
      },
      on: {
         init: function (swiper) {
            const slides = swiper.slides;
            const sliderControls =
               swiper.navigation.prevEl.parentNode ||
               swiper.navigation.nextEl.parentNode;
            if (slides.length < 2) {
               swiper.navigation.destroy();
               sliderControls.style.display = "none";
            }
         },
         sliderMove: function (swiper) {
            gsap.to({}, 0.0, {
               onUpdate: function () {
                  gsap.set(".trailer", {
                     x: swiper.touches.currentX,
                     y: swiper.touches.currentY + positionY.value,
                  });
               },
            });
         },
         touchStart: function () {
            const trailer = document.querySelector(".trailer");
            trailer && trailer.classList.add("scalling");
         },
         touchEnd: function () {
            const trailer = document.querySelector(".trailer");
            trailer && trailer.classList.remove("scalling");
         },
      },
   });
}

const openSalePopup = (event, saleItem) => {
   isSalePopupActive.value = !isSalePopupActive.value;
   document.documentElement.classList.toggle("lock");
   popupSaleData.value = { ...saleItem };
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.updatePluginOptions("modal", { open: true });
};
const closeSalePopup = () => {
   isSalePopupActive.value = !isSalePopupActive.value;
   document.documentElement.classList.toggle("lock");
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.updatePluginOptions("modal", { open: false });
};

onMounted(() => {
   initSlider();
});
</script>

<style lang="scss">
.main-sale {
   padding: 120px 0;
   overflow: hidden;
   @media screen and (max-width: $xl) {
      padding: 60px 0;
   }
   @media screen and (max-width: $md) {
      padding: 40px 0;
   }
   &__body.swiper {
      margin-top: 100px;
      overflow: visible;
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
         }
      }
      @media screen and (max-width: $xl) {
         margin-top: 60px;
      }
      @media screen and (max-width: $md) {
         margin-top: 40px;
      }
   }
   &__wrapper {
   }
   &__item.swiper-slide {
      width: 1430px;
      height: auto;
      @media screen and (max-width: $xxxl) {
         width: 100%;
      }
   }
   & .slider-controls {
      display: none;
      justify-content: center;
      margin-top: 20px;
      @media screen and (max-width: $xl) {
         display: flex;
      }
   }
   & .slider-button {
      @media screen and (max-width: $xl) {
         width: 60px;
         height: 60px;
      }
   }
}
.item-sale {
   min-height: 560px;
   position: relative;
   background-color: $bg-asphalt;
   height: auto;
   overflow: hidden;
   @media screen and (max-width: $xl) {
      // height: inherit;
   }
   &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba($bg-anthracite, 0.6);
      z-index: 4;
      opacity: 1;
      pointer-events: none;
      @include transition(opacity $time * 3);
   }
   &.swiper-slide-active {
      &::before {
         opacity: 0;
      }
   }
   &__wrapper {
      display: grid;
      grid-template-columns: 1fr 600px;
      gap: 20px;
      min-height: inherit;
      height: 100%;
      position: relative;
      @media screen and (max-width: $xxxl) {
         grid-template-columns: 1fr 40%;
      }
      @media screen and (max-width: $xl) {
         grid-template-columns: 1fr;
         grid-template-rows: auto 1fr;
         gap: 24px;
      }
   }
   &__info {
      padding: 120px 70px 36px;
      padding-right: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1 1 auto;
      @media screen and (max-width: $xl) {
         padding: 0 20px 24px;
         gap: 12px;
      }
   }
   &__badge {
      position: absolute;
      top: 0;
      width: 100px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding: 20px;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: $bg-white;
      background-image: $linearPromo;
      clip-path: polygon(
         0 0,
         100% 0,
         100% 50%,
         100% 100%,
         12px 100%,
         0 calc(100% - 12px)
      );
      z-index: 2;
      @media screen and (max-width: $xl) {
         left: 20px;
      }
      @media screen and (max-width: $md) {
         display: none;
      }
   }
   &__date {
      line-height: 24px;
      color: $bg-white;
      @media screen and (max-width: $xl) {
         line-height: 22px;
      }
   }
   &__title {
      font-family: $third-family;
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
      text-transform: uppercase;
      @media screen and (max-width: $xxxl) {
         hyphens: auto;
      }
      @media screen and (max-width: $xl) {
         font-size: 22px;
         line-height: 28px;
      }
   }
   &__description {
      font-size: 20px;
      line-height: 28px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      & p {
         display: inline;
      }
      @media screen and (max-width: $xl) {
         font-size: 18px;
         line-height: 24px;
      }
   }
   &__button {
      max-width: 200px;
      margin-top: 20px;
      @media screen and (max-width: $xl) {
         margin-top: 16px;
         margin-bottom: 8px;
      }
      @media screen and (max-width: $md) {
         max-width: 100%;
      }
   }
   &__bottom {
      margin-top: auto;
   }
   &__disclamer {
      font-size: 14px;
      line-height: 18px;
      color: $gray;
   }
   &__image-wrap {
      position: relative;
      display: grid;
      place-items: center;
      overflow: hidden;
      &::before {
         content: "";
         position: absolute;
         top: 0;
         right: 0;
         width: calc(100% - 40px);
         height: 100%;
         background-image: linear-gradient(135deg, #129465 0%, #6de754 100%);
      }
      @media screen and (max-width: $xl) {
         order: -1;
         place-items: end;
         &::before {
            width: 100%;
         }
      }
      @media screen and (max-width: $xs) {
         height: 216px;
      }
   }
   &__image {
      width: 100%;
      z-index: 2;
      padding-bottom: calc(416 / 600 * 100%);
      @media screen and (max-width: $xl) {
         transform: translateX(30px);
         padding-bottom: calc(187 / 270 * 100%);
         // padding-bottom: calc(187 / 270 * 100%);
      }
      @media screen and (max-width: $xs) {
         padding: 0;
         position: absolute;
         inset: 0;
         & img {
            position: static;
         }
      }
   }
}
</style>
