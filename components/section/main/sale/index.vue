<template>
   <div class="main-sale" id="sale">
      <div class="container">
         <UiTicker>
            <div class="ticker__group" ref="tickerGroup">
               <div class="ticker__item" v-for="item in tickerItems">
                  {{ item }}
               </div>
            </div>
         </UiTicker>
         <div
            class="main-sale__body swiper interactable"
            ref="saleSlider"
            data-type="slider"
            @mouseenter="showTrailer"
            @mouseleave="hideTrailer"
            @dragstart="func">
            <!-- <UiTrailer :isActive="isActiveTrailer" :isScale="isScaling" /> -->
            <div class="ball" ref="ball"></div>
            <div class="main-sale__wrapper swiper-wrapper">
               <div
                  class="main-sale__item item-sale swiper-slide"
                  v-for="(item, index) in saleSliderData">
                  <div class="item-sale__wrapper">
                     <div class="item-sale__info">
                        <div class="item-sale__badge">Акция</div>
                        <div class="item-sale__date">{{ item.date }}</div>
                        <div class="item-sale__title">{{ item.title }}</div>
                        <div class="item-sale__description">
                           {{ item.descr }}
                        </div>
                        <div
                           class="item-sale__button btn"
                           @click="openSalePopup($event, item)">
                           {{ item.btn }}
                        </div>
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
                              alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="ball" ref="ball"></div>
         <!-- <div class="carousel" ref="carousel">
            <div
               class="main-sale__item item-sale swiper-slide"
               v-for="(item, index) in saleSliderData">
               <div class="item-sale__wrapper">
                  <div class="item-sale__info">
                     <div class="item-sale__badge">Акция</div>
                     <div class="item-sale__date">{{ item.date }}</div>
                     <div class="item-sale__title">{{ item.title }}</div>
                     <div class="item-sale__description">
                        {{ item.descr }}
                     </div>
                     <div
                        class="item-sale__button btn"
                        @click="openSalePopup($event, item)">
                        {{ item.btn }}
                     </div>
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
                           alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div> -->
      </div>
   </div>
   <PopupSale
      :isActive="isSalePopupActive"
      @closePopup="closeSalePopup()"
      :data="popupSaleData" />
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, FreeMode } from "swiper/modules";

// import Flickity from "flickity";
// import "flickity/css/flickity.css";

const emit = defineEmits(["openPopup"]);

const tickerGroup = ref("");
const slider = ref(null);
const saleSlider = ref("");

const isActiveTrailer = ref(false);
const isScaling = ref("");

const isSalePopupActive = ref(false);
const popupSaleData = ref({});

const carousel = ref("");

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
   isActiveTrailer.value = !isActiveTrailer.value;
};
const hideTrailer = () => {
   isActiveTrailer.value = !isActiveTrailer.value;
};

const func = () => {
   console.log("func");
};

const scalingTrailerDown = () => {
   isScaling.value = !isScaling.value;
};
const scalingTrailerUp = () => {
   isScaling.value = !isScaling.value;
};

function initSlider() {
   // slider.value = new Flickity(carousel.value, {
   //    // options
   //    cellAlign: "left",
   //    contain: true,
   // });
   slider.value = new Swiper(saleSlider.value, {
      modules: [Navigation, FreeMode],
      slidesPerView: 1.1811,
      spaceBetween: 165,
      speed: 1000,
      freeMode: true,
      on: {
         touchMove: function (swiper) {},
      },
   });
}

const openSalePopup = (event, saleItem) => {
   isSalePopupActive.value = !isSalePopupActive.value;
   document.documentElement.classList.toggle("lock");
   popupSaleData.value = { ...saleItem };
};
const closeSalePopup = () => {
   isSalePopupActive.value = !isSalePopupActive.value;
   document.documentElement.classList.toggle("lock");
};

const ball = ref("");
function initBall() {
   gsap.set(ball.value, { xPercent: -50, yPercent: -50 });
   const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
   const mouse = { x: pos.x, y: pos.y };
   const speed = 0.35;
   var active = false;
   const xSet = gsap.quickSetter(ball.value, "x", "px");
   const ySet = gsap.quickSetter(ball.value, "y", "px");
   window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
   });
   gsap.ticker.add(cursor);
   function cursor() {
      if (!active) {
         const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
         pos.x += (mouse.x - pos.x) * dt;
         pos.y += (mouse.y - pos.y) * dt;
         xSet(pos.x);
         ySet(pos.y);
      }
   }
   cursor();
}

onMounted(() => {
   initSlider();
   tickerCopy(tickerGroup.value);
   // initBall();
});
</script>

<style lang="scss">
.main-sale {
   padding: 120px 0;
   &__body {
      margin-top: 100px;
      overflow: visible;
      cursor: pointer;
   }
   &__wrapper {
   }
   &__item {
   }
}
.item-sale {
   min-height: 560px;
   position: relative;
   background-color: $bg-asphalt;
   height: auto;
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
   }
   &__info {
      padding: 120px 70px 36px;
      padding-right: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1 1 auto;
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
      &::before {
         content: "";
         position: absolute;
         bottom: 0;
         left: 0;
         width: 0;
         height: 0;
         border-style: solid;
         border-width: 12px 0 0 12px;
         border-color: transparent transparent transparent $bg-asphalt;
         z-index: 2;
      }
   }
   &__date {
      line-height: 24px;
      color: $bg-white;
   }
   &__title {
      font-family: $third-family;
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
      text-transform: uppercase;
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
   }
   &__button {
      max-width: 200px;
      margin-top: 20px;
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
      &::before {
         content: "";
         position: absolute;
         top: 0;
         right: 0;
         width: calc(100% - 40px);
         height: 100%;
         background-image: linear-gradient(135deg, #129465 0%, #6de754 100%);
      }
   }
   &__image {
      width: 100%;
      z-index: 2;
      padding-bottom: calc(416 / 600 * 100%);
   }
}
</style>
