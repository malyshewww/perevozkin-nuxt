<template>
   <section class="partners">
      <div class="container">
         <div class="heading">
            <div class="heading__sub-title">Партнёры</div>
            <div class="heading__title">
               Работаем с ведущими компаниями и
               <span>Ценим долгосрочное сотрудничество</span>
            </div>
         </div>
         <div class="partners__slider">
            <UiTicker>
               <div class="partners__item" v-for="item in partnersData">
                  <div class="partners__image">
                     <img
                        :src="`/images/main-partners/${item.img}.png`"
                        alt="" />
                  </div>
               </div>
            </UiTicker>
         </div>
      </div>
   </section>
</template>
<script setup>
import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const slider = ref(null);
const partnerSlider = ref("");

const partnersData = [
   {
      img: "partner-1",
   },
   {
      img: "partner-2",
   },
   {
      img: "partner-3",
   },
   {
      img: "partner-4",
   },
   {
      img: "partner-5",
   },
   {
      img: "partner-6",
   },
   {
      img: "partner-7",
   },
   {
      img: "partner-8",
   },
   {
      img: "partner-1",
   },
   {
      img: "partner-2",
   },
   {
      img: "partner-3",
   },
   {
      img: "partner-4",
   },
   {
      img: "partner-5",
   },
   {
      img: "partner-6",
   },
   {
      img: "partner-7",
   },
   {
      img: "partner-8",
   },
];

const initSlider = () => {
   slider.value = new Swiper(partnerSlider.value, {
      modules: [Autoplay],
      slidesPerView: 6,
      spaceBetween: 20,
      speed: 1000,
      loop: true,
      autoplay: {
         delay: 0,
         disableOnInteraction: false,
      },
   });
};

onMounted(() => {
   initSlider();
});
</script>
<style lang="scss">
.partners {
   & .heading {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 0 253px;
      &__title {
         flex: 1 1 auto;
         max-width: 1000px;
      }
   }
   & .ticker__wrapper {
      gap: 20px;
   }
   &__slider {
      margin-top: 120px;
   }
   &__item {
      width: 270px;
      height: 270px;
      border-radius: 50%;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $bg-asphalt;
      padding: 20px;
   }
   &__image {
   }
}
</style>
