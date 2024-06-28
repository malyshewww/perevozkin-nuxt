<template>
   <div class="contacts__map map-contacts">
      <div class="map-contacts__image ibg">
         <img src="/images/contacts/picture.jpg" alt="изображение" />
      </div>
      <div id="mapElem" class="map-contacts__location"></div>
   </div>
</template>

<script setup>
import json from "~/static/geo.json";

onMounted(() => {
   const mapElem = document.getElementById("mapElem");
   const script = document.createElement("script");
   script.src =
      "https://api-maps.yandex.ru/v3/?apikey=ea2f2b8f-a553-4e78-bbd3-fbfd203217aa&lang=ru_RU";
   document.body.appendChild(script);
   script.onload = function () {
      initMap();
   };
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
            center: [43.867233, 56.353754],
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
            coordinates: [43.867233, 56.353754],
            draggable: true,
         },
         content
      );
      map.addChild(marker);
   }
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
   &__image {
      padding-bottom: calc(480 / 705 * 100%);
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
