<template>
   <div class="service-card__other-services other-services">
      <div class="container">
         <div class="heading">
            <div class="heading__title">Другие услуги</div>
            <div class="slider-controls">
               <button
                  type="button"
                  class="slider-button slider-button-prev"
                  ref="buttonPrev"></button>
               <button
                  type="button"
                  class="slider-button slider-button-next"
                  ref="buttonNext"></button>
            </div>
         </div>
         <div class="other-services__slider swiper" ref="otherSlider">
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
import { Navigation, FreeMode } from "swiper/modules";

const otherSlider = ref("");
const sliderInstance = ref(null);
const buttonPrev = ref("");
const buttonNext = ref("");

function initSlider() {
   sliderInstance.value = new Swiper(otherSlider.value, {
      modules: [Navigation],
      slideClass: "service-item",
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 700,
      navigation: {
         nextEl: buttonNext.value,
         prevEl: buttonPrev.value,
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
