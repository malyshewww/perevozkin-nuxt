<template lang="pug">
	section.main-services
		.container
			UiTicker
				.ticker__item(v-for="(item, index) in tickerItems" :key="index") {{ item }}
			.main-services__body
				.main-services__top
					Card(:arr="newArrCatalog")
				.main-services__bottom
					Card(:arr="listBottom")
</template>

<script setup>
const props = defineProps({
  catalogList: {
    type: Array,
    required: true,
  },
  serviceList: {
    type: Array,
    required: true,
  },
});

const newArrCatalog = ref([]);

const listBottom = ref([]);

const newCatalogList = props.catalogList.map((el, index) => {
  if (index <= 2) {
    newArrCatalog.value.push(el);
  }
  if (index > 2) {
    listBottom.value.push(el);
  }
});

const newServiceList = props.serviceList.map((el) => {
  listBottom.value.push(el);
});

const tickerItems = [
  "Услуги сервиса",
  "Услуги сервиса",
  "Услуги сервиса",
  "Услуги сервиса",
  "Услуги сервиса",
  "Услуги сервиса",
  "Услуги сервиса",
  "Услуги сервиса",
];
onMounted(() => {});
</script>

<style lang="scss">
.main-services {
  overflow: hidden;
  padding: 160px 0 120px;
  @media screen and (max-width: $xl) {
    padding: 50px 0 60px;
    position: relative;
  }
  @media screen and (max-width: $md) {
    padding: 30px 0 40px;
  }
  &__body {
    display: grid;
    gap: 20px;
    margin-top: 100px;
    @media screen and (max-width: $xl) {
      margin-top: 60px;
    }
    @media screen and (max-width: $md) {
      margin-top: 40px;
    }
  }
  &__top {
    display: flex;
    gap: 20px;
    @media screen and (max-width: $xl) {
      display: grid;
      grid-template-columns: 1fr;
    }
    & .service-item {
      height: 530px;
      transition: width $time * 2, flex-grow $time * 2;
      flex-grow: 1;
      width: 20%;
      @media screen and (max-width: $xl) {
        width: 100%;
        height: auto;
        min-height: 348px;
      }
      &__image {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 2;
        transition: transform $time * 2;
        height: 320px;
        padding: 0;
        @media screen and (max-width: $xl) {
          height: 240px;
        }
        & img {
          width: 100%;
          object-fit: contain;
          transition: width $time, transform $time;
        }
      }
      @media (any-hover: hover) {
        &:hover {
          width: 50%;
          & .service-item__image {
            transform: scale(1.2);
            // padding-bottom: 41.3%;
          }
        }
      }
    }
  }
  &__bottom {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media screen and (max-width: $xxxl) {
      grid-template-columns: 1fr;
    }
    & .service-item {
      width: 100%;
      min-height: 260px;
      padding: 32px 40px;
      &__price {
        display: none;
      }
      @media screen and (max-width: $xl) {
        padding: 20px;
      }
      &:nth-child(1) {
        @media screen and (max-width: $xxxl) {
          grid-column: span 2;
        }
        & .service-item__image {
          width: 250px;
          height: 155px;
        }
      }
      &:nth-child(2) {
        & .service-item__image {
          width: 380px;
          height: 196px;
          @media screen and (max-width: $xl) {
            width: 250px;
            height: 155px;
          }
        }
      }
      &__header {
        max-width: 450px;
      }
      &__image {
        position: absolute;
        right: 0;
        bottom: 0;
        left: auto;
        max-height: 196px;
        padding-bottom: 0;
        z-index: -1;
      }
      &__icon {
        right: auto;
        left: 0;
      }
      &:nth-child(2) {
        grid-column: span 2;
      }
      @media (any-hover: hover) {
        &:hover {
          & .service-item__image img {
            transform: scale(1);
          }
        }
      }
    }
  }
}
</style>
