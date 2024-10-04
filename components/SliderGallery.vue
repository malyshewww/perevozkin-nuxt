<template lang="pug">
	.gallery
		.heading
			h2.heading__title Фотогалерея
			.slider-controls
				button.slider-button.slider-button-prev(ref="buttonPrev" type="button")
				button.slider-button.slider-button-next(ref="buttonNext" type="button")
		.gallery__body.swiper(ref="slider")
			.gallery__wrapper.swiper-wrapper
				.gallery__item.swiper-slide(v-for="(item, index) in gallery" :key="index")
					a.gallery__image(:href="`/images/gallery/${item.img}.jpg`" data-fancybox="gallery")
						img(:src="`/images/gallery/${item.img}.jpg`" alt="галерея")
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
            const slides = swiper.slides;
            const sliderControls =
               swiper.navigation.prevEl.parentNode ||
               swiper.navigation.nextEl.parentNode;
            if (slides.length <= swiper.passedParams.slidesPerView) {
               swiper.navigation.destroy();
               sliderControls.style.display = "none";
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
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding-bottom: 0;
      border: none;
      flex-flow: row wrap;
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
