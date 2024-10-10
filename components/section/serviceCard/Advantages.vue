<template lang="pug">
	section.service-card__advantages.service-advantages
		.container
			.heading
				.heading__sub-title Преимущества
				h2.heading__title Мы #[span знаем причины всех поломок] и оптимальные варианты их устранения
				.heading__description(v-if="advantages.description")
					p {{advantages.description}}
					.heading__number(v-if="advantages.strongText") {{advantages.strongText}}
			.service-advantages__slider.service-slider
				.service-slider__body.swiper(ref="slider" @mouseover="showTrailer" @mouseleave="hideTrailer")
					.service-slider__wrapper.swiper-wrapper
						.service-slider__item.swiper-slide(v-for="(item, index) in advantages.images" :key="index")
							.service-slider__image.ibg(v-html="item.markup")
								//- img(:src="`/images/service-card/${item.img}.jpg`" alt="изображение")
				.slider-controls
					button.slider-button.slider-button-prev(ref="buttonPrev" type="button")
					button.slider-button.slider-button-next(ref="buttonNext" type="button")
			.service-advantages__cards.advantages-cards
				AdvantagesCard(:advantages="advantages.list")
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, FreeMode } from "swiper/modules";

const props = defineProps({
   advantages: {
      type: Object,
      required: true,
   },
});
const { $gsap: gsap } = useNuxtApp();

const slider = ref("");
const buttonPrev = ref("");
const buttonNext = ref("");
const sliderInstance = ref(null);

const positionY = ref(0);

const tlCards = ref(null);

const showTrailer = () => {
   const trailer = document.querySelector(".trailer");
   trailer && trailer.classList.add("active");
};
const hideTrailer = () => {
   const trailer = document.querySelector(".trailer");
   trailer && trailer.classList.remove("active");
};

function initSlider() {
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.addListener(({ offset }) => {
      positionY.value = offset.y;
   });
   sliderInstance.value = new Swiper(slider.value, {
      modules: [Navigation, FreeMode],
      speed: 700,
      freeMode: true,
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

const animation = () => {
   const advantagesCards = [
      ...document.querySelectorAll(
         ".service-advantages__cards .card-advantages"
      ),
   ];
   if (advantagesCards.length > 0) {
      tlCards.value = gsap.fromTo(
         ".heading__title",
         { y: 70, opacity: 0 },
         {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            scrollTrigger: {
               trigger: ".service-card__advantages",
               start: "top 60%",
               end: "top 85%",
            },
         }
      );
      tlCards.value = gsap.fromTo(
         ".card-advantages__title",
         { yPercent: -50, opacity: 0 },
         {
            yPercent: 0,
            opacity: 1,
            stagger: 0.5,
            delay: 0.5,
            duration: 0.5,
            scrollTrigger: {
               trigger: ".card-advantages",
            },
         }
      );
      tlCards.value = gsap.fromTo(
         ".card-advantages__text",
         { yPercent: -40, opacity: 0 },
         {
            yPercent: 0,
            opacity: 1,
            stagger: 0.5,
            delay: 0.5,
            duration: 0.5,
            scrollTrigger: {
               trigger: ".card-advantages",
            },
         }
      );
      tlCards.value = gsap.fromTo(
         ".card-advantages__icon",
         { opacity: 0, rotate: 180 },
         {
            opacity: 1,
            rotate: 0,
            stagger: 0.5,
            delay: 0.5,
            duration: 0.5,
            scrollTrigger: {
               trigger: ".card-advantages",
            },
         }
      );
   }
};

const destroyAnimations = () => {
   tlCards.value.pause().kill();
   tlCards.value = null;
};

onMounted(() => {
   initSlider();
   animation();
});

onUnmounted(() => {
   destroyAnimations();
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
   @media screen and (max-width: $xl) {
      padding: 40px 0;
   }
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
         transition: none;
         @media screen and (max-width: $xl) {
            font-size: calc(40px / 1.5);
            line-height: calc(52px / 1.5);
         }
         @media screen and (max-width: $md) {
            font-size: 22px;
            line-height: 28px;
         }
      }
      @media screen and (max-width: $xl) {
         grid-template-areas:
            "subtitle subtitle"
            "title title"
            "descr descr";
         gap: 20px;
      }
   }
   &__cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 93px;
      @media screen and (max-width: $xxxl) {
         gap: 30px;
      }
      @media screen and (max-width: $xxl) {
         grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: $md) {
         grid-template-columns: 1fr;
      }
   }
}
.heading {
   padding-bottom: 28px;
   border-bottom: 1px solid $bg-asphalt;
   margin-bottom: 60px;
   @media screen and (max-width: $xl) {
      margin-bottom: 30px;
   }
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
      @media screen and (max-width: $xl) {
         text-align: left;
         font-size: 18px;
         line-height: 24px;
      }
   }
   &__number {
      font-family: $third-family;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      text-transform: uppercase;
      text-align: right;
      color: $bg-green-lime;
      @media screen and (max-width: $xl) {
         font-size: 24px;
         line-height: 28px;
      }
   }
}
.service-slider {
   margin-bottom: 100px;
   @media screen and (max-width: $xl) {
      margin-bottom: 40px;
   }
   &__body {
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
         }
      }
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
