<template lang="pug">
	.service-card__other-services.other-services
		.container
			.heading
				.heading__title Другие услуги
				.slider-controls(ref="sliderControls")
					button.slider-button.slider-button-prev(ref="buttonPrev" type="button")
					button.slider-button.slider-button-next(ref="buttonNext" type="button")
			.other-services__slider.swiper(ref="otherSlider")
				.other-services__wrapper.swiper-wrapper
					Card(:arr="services")
</template>
<script setup>
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

defineProps({
  services: {
    type: Array,
    required: false,
    default: () => [],
  },
});

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
</script>

<style lang="scss">
.other-services {
  padding: 80px 0 0;
  overflow: hidden;
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
  & .service-item {
    flex-grow: 0;
  }
}
.service-item {
  flex-shrink: 0;
}
</style>
