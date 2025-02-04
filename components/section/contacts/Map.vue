<template lang="pug">
	.contacts__map.map-contacts
		div(v-if="isDesktop")
			SectionContactsImage(:image="info.image")
		#mapElem.map-contacts__location
</template>

<script setup>
import json from "~/static/geo.json";

defineProps({
  info: {
    type: Object,
    required: true,
  },
});

const { isDesktop } = useDevice();
const runtimeConfig = useRuntimeConfig();

onMounted(() => {
  const mapElem = document.getElementById("mapElem");
  let isLoaded = false;
  function loadMap() {
    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${runtimeConfig.public.apiKey}&lang=ru_RU`;
    document.body.appendChild(script);
    isLoaded = true;
    script.onload = function () {
      initMap();
    };
  }
  async function initMap() {
    await ymaps3.ready;
    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    } = ymaps3;
    const map = new YMap(document.getElementById("mapElem"), {
      location: {
        center: [43.932217, 56.266512],
        zoom: 16,
      },
    });
    // Добавьте слой с дорогами и зданиями
    map.addChild(
      new YMapDefaultSchemeLayer({
        theme: "dark",
        customization: json,
      })
    );
    // Добавьте слой для маркеров
    map.addChild(new YMapDefaultFeaturesLayer());
    const content = document.createElement("img");
    content.classList.add("map-contacts__point");
    content.src = "/images/icons/pin.svg";
    // Инициализируйте маркер
    const marker = new YMapMarker(
      {
        coordinates: [43.932217, 56.266512],
        draggable: false,
      },
      content
    );
    map.addChild(marker);
  }
  const observerOptions = {};
  const observer = new IntersectionObserver(([entry]) => {
    const targetInfo = entry.boundingClientRect;
    const rootBoundsInfo = entry.rootBounds;
    if (
      (!isLoaded && targetInfo.top < rootBoundsInfo.bottom) ||
      targetInfo.isIntersecting
    ) {
      loadMap();
      observer.unobserve(entry.target);
    }
  }, observerOptions);
  observer.observe(mapElem);
});
</script>

<style lang="scss">
.map-contacts {
  display: grid;
  grid-template-columns: 0.71fr 1fr;
  gap: 20px;
  @media screen and (max-width: $xl) {
    grid-template-columns: 1fr;
  }
  &__location {
    overflow: hidden;
    width: 100%;
    background-color: transparent;
    height: 480px;
    @media screen and (max-width: $xl) {
      height: 300px;
    }
  }
  &__point {
    width: 100%;
    height: 100%;
    display: block;
    transform: translate(-50%, -100%);
  }
  [class*="--marker"] {
    width: 56px;
    height: 64px;
  }
  [class*="--map-copyrights"] {
    display: none;
  }
}
</style>
