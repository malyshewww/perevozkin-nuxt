<template lang="pug">
	div(v-for="(card, index) in advantages" :key="index" :class="`main-advantages__card card-advantages card-advantages--${index + 1}`")
		.card-advantages__bg
		.card-advantages__body
			.card-advantages__icon
				img(:src="`/images/advantages/icon-advantages-${index + 1}.png`" alt="изображение")
			.card-advantages__content
				.card-advantages__title {{ card.title }}
				.card-advantages__text
					p {{ card.text }}
</template>

<script setup>
const advantages = [
   {
      title: "Опыт мастеров более 7 лет",
      text: "Наши специалисты имеют большой опыт в эксплуатации и ремонте автомобилей ГАЗ",
   },
   {
      title: "Современное оборудование",
      text: "Мы используем современное дорогое оборудование для диагностики и ремонта автомобилей ГАЗ. Это позволяет нам быстро и точно определить неисправности и устранить их",
   },
   {
      title: "Оригинальные запчасти в наличии",
      text: "Мы используем только оригинальные запчасти ГАЗ, что гарантирует высокое качество и надёжность ремонта",
   },
   {
      title: "Гарантия на все виды ремонта",
      text: "Предоставляем гарантию на все выполненные работы. Если в течение гарантийного срока возникнут какие‑либо проблемы с отремонтированным узлом или агрегатом, мы устраним их бесплатно",
   },
];
</script>

<style lang="scss">
.card-advantages {
   display: flex;
   min-height: 316px;
   overflow: hidden;
   @media screen and (max-width: $xl) {
      min-height: auto;
   }
   &:nth-child(1) {
      & .card-advantages__title {
         max-width: 73%;
      }
   }
   &__bg {
      display: none;
   }
   &__body {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1 1 auto;
   }
   &__icon {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      @media screen and (max-width: $xl) {
         width: 60px;
         height: 60px;
      }
   }
   &__content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
      @media screen and (max-width: $xl) {
         margin: 0;
      }
   }
   &__title {
      font-family: $third-family;
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;
      text-transform: uppercase;
      color: $bg-white;
   }
   &__text {
      font-size: 16px;
      line-height: 24px;
      color: $bg-white;
      @media screen and (max-width: $md) {
         line-height: 22px;
      }
   }
}
</style>
