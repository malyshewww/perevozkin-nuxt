<template>
   <div class="service-card__other-services other-services">
      <div class="container">
         <div class="heading">
            <div class="heading__title">Другие услуги</div>
            <div ref="sliderControls" class="slider-controls">
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
         <div ref="otherSlider" class="other-services__slider swiper">
            <div class="other-services__wrapper swiper-wrapper">
               <Card :arr="servicesList" />
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

const otherSlider = ref("");
const sliderInstance = ref(null);
const buttonPrev = ref("");
const buttonNext = ref("");
const sliderControls = ref("");

function initSlider() {
   sliderInstance.value = new Swiper(otherSlider.value, {
      modules: [Navigation],
      slideClass: "service-item",
      speed: 700,
      navigation: {
         nextEl: buttonNext.value,
         prevEl: buttonPrev.value,
      },
      breakpoints: {
         300: {
            slidesPerView: 1,
            spaceBetween: 10,
         },
         767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         1024: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
      },
      on: {
         init: function (swiper) {
            const slides = swiper.slides;
            const sliderControls =
               swiper.navigation.prevEl.parentNode ||
               swiper.navigation.nextEl.parentNode;
            if (slides.length <= swiper.passedParams.slidesPerView) {
               swiper.navigation.destroy();
               sliderControls.value.style.display = "none";
            }
         },
      },
   });
}

onMounted(() => {
   initSlider();
});

const servicesList = [
   {
      title: "Трансмиссия",
      price: "12 500 ₽",
      href: "/services/1",
      img: "/services/service-7",
   },
   {
      title: "Углы установки колёс",
      price: "12 500 ₽",
      href: "/services/2",
      img: "/services/service-5",
   },
   {
      title: "Двигатель",
      price: "12 500 ₽",
      href: "/services/3",
      img: "/services/service-3",
   },
   {
      title: "Двигатель",
      price: "12 500 ₽",
      href: "/services/3",
      img: "/services/service-3",
   },
];
</script>

<style lang="scss">
.other-services {
   padding: 80px 0 0;
   @media screen and (max-width: $xl) {
      padding: 40px 0 0;
   }
   & .heading {
      border: none;
      padding: 0;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
   }
   & .slider-controls {
      margin: 0;
   }
}
.service-item {
   flex-shrink: 0;
}
</style>
