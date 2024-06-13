<template>
   <section class="service-card__advantages service-advantages">
      <div class="container">
         <div class="heading">
            <div class="heading__sub-title">Преимущества</div>
            <h2 class="heading__title">
               Мы <span>знаем причины всех поломок</span> и оптимальные варианты
               их устранения
            </h2>
            <div class="heading__description">
               <p>
                  Перевозкин24 имеет в своем распоряжении более 200 автомобилей
                  ГАЗ, которые мы эксплуатируем и ремонтируем самостоятельно
               </p>
               <div class="heading__number">Более 7 лет</div>
            </div>
         </div>
         <div class="service-advantages__slider service-slider">
            <div class="service-slider__body swiper" ref="slider">
               <div class="service-slider__wrapper swiper-wrapper">
                  <div
                     class="service-slider__item swiper-slide"
                     v-for="item in serviceSlider">
                     <div class="service-slider__image ibg">
                        <img
                           :src="`/images/service-card/${item.img}.jpg`"
                           alt="изображение" />
                     </div>
                  </div>
               </div>
            </div>
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
         <div class="service-advantages__cards advantages-cards">
            <AdvantagesCard></AdvantagesCard>
         </div>
      </div>
   </section>
</template>

<script setup>
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, FreeMode } from "swiper/modules";

const slider = ref("");
const buttonPrev = ref("");
const buttonNext = ref("");
const sliderInstance = ref(null);

function initSlider() {
   sliderInstance.value = new Swiper(slider.value, {
      modules: [Navigation, FreeMode],
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 700,
      freeMode: true,
      navigation: {
         nextEl: buttonNext.value,
         prevEl: buttonPrev.value,
      },
   });
}

onMounted(() => {
   initSlider();
});

const serviceSlider = [
   {
      img: "slide-1",
   },
   {
      img: "slide-2",
   },
   {
      img: "slide-3",
   },
   {
      img: "slide-3",
   },
];
</script>
<style lang="scss">
.service-card {
   &__advantages {
   }
}
.service-advantages {
   padding: 80px 0;
   &__slider {
   }
   & .heading {
      display: grid;
      grid-template-columns: 40% 40%;
      grid-template-areas: "subtitle descr" "title descr";
      align-items: end;
      justify-content: space-between;
      gap: 22px;
      &__title {
         font-size: 28px;
         line-height: 36px;
      }
   }
   &__cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 93px;
   }
}
.heading {
   padding-bottom: 28px;
   border-bottom: 1px solid $bg-asphalt;
   margin-bottom: 60px;
   &__sub-title {
      grid-area: subtitle;
   }
   &__title {
      grid-area: title;
   }
   &__description {
      grid-area: descr;
      display: grid;
      justify-items: end;
      gap: 12px;
      text-align: right;
      font-size: 20px;
      line-height: 28px;
   }
   &__number {
      font-family: $third-family;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      text-transform: uppercase;
      text-align: right;
      color: $bg-green-lime;
   }
}
.service-slider {
   margin-bottom: 100px;
   &__body {
   }
   &__wrapper {
   }
   &__item {
   }

   &__image {
      padding-bottom: calc(380 / 560 * 100%);
   }
   .slider-controls {
      margin-top: 32px;
   }
}
</style>
