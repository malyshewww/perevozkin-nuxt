<template>
   <div class="gallery">
      <div class="heading">
         <h2 class="heading__title">Фотогалерея</h2>
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
      <div class="gallery__body swiper" ref="slider">
         <div class="gallery__wrapper swiper-wrapper">
            <div class="gallery__item swiper-slide" v-for="item in gallery">
               <a href="/" class="gallery__image">
                  <img :src="`/images/gallery/${item.img}.jpg`" alt="" />
               </a>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

const slider = ref("");
const buttonPrev = ref("");
const buttonNext = ref("");
const sliderInstance = ref(null);

function initSlider() {
   sliderInstance.value = new Swiper(slider.value, {
      modules: [Navigation],
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

const gallery = [
   {
      img: "gallery-1",
   },
   {
      img: "gallery-2",
   },
   {
      img: "gallery-1",
   },
   {
      img: "gallery-2",
   },
];
</script>

<style lang="scss">
.gallery {
   padding: 160px 0;
   & .heading {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      margin-bottom: 60px;
   }
}
</style>
