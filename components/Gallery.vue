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
               <a
                  :href="`/images/gallery/${item.img}.jpg`"
                  class="gallery__image"
                  data-fancybox="gallery">
                  <img :src="`/images/gallery/${item.img}.jpg`" alt="галерея" />
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
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const instanceFancybox = () => {
   Fancybox.bind('[data-fancybox="gallery"]', {
      Hash: false,
      Thumbs: {
         type: "modern",
      },
      Images: {
         initialSize: "cover",
      },
   });
};

const slider = ref("");
const buttonPrev = ref("");
const buttonNext = ref("");
const sliderInstance = ref(null);

const initSlider = () => {
   sliderInstance.value = new Swiper(slider.value, {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 20,
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
            let slides = swiper.slides;
            let sliderControls =
               swiper.navigation.prevEl.parentNode ||
               swiper.navigation.nextEl.parentNode;
            if (slides.length <= swiper.passedParams.slidesPerView) {
               swiper.navigation.destroy();
               sliderControls.value.style.display = "none";
            }
         },
      },
   });
};

onMounted(() => {
   initSlider();
   instanceFancybox();
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
   padding: 160px 0px;
   @media screen and (max-width: $xl) {
      padding: 80px 0;
   }
   & h2 {
      margin: 0;
   }
   & .heading {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      margin-bottom: 60px;
      @media screen and (max-width: $xl) {
         margin-bottom: 30px;
      }
   }
   &__image {
      overflow: hidden;
      display: block;
      & img {
         transition: transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.87);
      }
      @media (any-hover: hover) {
         &:hover {
            & img {
               transform: scale(1.3);
            }
         }
      }
   }
}
</style>
