<template lang="pug">
	.vacancy__content.content
		.vacancy__item.item-vacancy(v-for="(vacancy, index) in vacancyList" :key="index")
			h3.item-vacancy__title {{ vacancy.title }}
			.item-vacancy__groups
				.item-vacancy__group
					.item-vacancy__main.main-info
						.main-info__inner
							.main-info__label Заработная плата:
							.main-info__values(data-attr="от") {{ vacancy.salary }}
						.main-info__inner
							.main-info__label Контакты отдела персонала:
							.main-info__values
								a.main-info__value(v-for="(phone, phoneIndex) in vacancy.phones" :key="phoneIndex" :href="`tel:${phone}`") {{ phone }}
				.item-vacancy__group
					.item-vacancy__label Обязанности
					ul
						li(v-for="(r, i) in vacancy.responsibilities" :key="i") {{ r }}
				.item-vacancy__group
					.item-vacancy__label Требования
					ul
						li(v-for="(r, i) in vacancy.requirements" :key="i") {{ r }}
				.item-vacancy__group
					.item-vacancy__label Условия работы
					ul
						li(v-for="(c, i) in vacancy.conditions" :key="i") {{ c }}
</template>

<script setup>
const vacancyList = [
   {
      title: "Диагност электронных систем",
      salary: "80 000 руб./мес.",
      phones: ["+7 (831) 138-08-80", "+7 (831) 138-08-80"],
      responsibilities: [
         "Знание устройства автомобилей иностранного производства.",
         "Знание методов технического обслуживания и ремонта автомобилей",
         "Подтвержденный опыт технического обслуживания и ремонта автомобилей иностранного производства.",
         "Приветливость и внимание к Клиентам.",
      ],
      requirements: [
         "Проведение необходимых ремонтных мероприятий по указанию своего руководителя.",
         "Применение специальной аппаратуры для выявления проблем в функционировании автомашин.",
         "Выполнение ремонтных работ.",
      ],
      conditions: [
         "График работы 2/2/3",
         "Оформление согласно ТК РФ.",
         "Корпоративные скидки на услуги сервиса.",
      ],
   },
   {
      title: "Мастер-приёмщик",
      salary: "80 000 руб./мес.",
      phones: ["+7 (831) 138-08-80", "+7 (831) 138-08-80"],
      responsibilities: [
         "Знание устройства автомобилей иностранного производства.",
         "Знание методов технического обслуживания и ремонта автомобилей",
         "Подтвержденный опыт технического обслуживания и ремонта автомобилей иностранного производства.",
         "Приветливость и внимание к Клиентам.",
      ],
      requirements: [
         "Проведение необходимых ремонтных мероприятий по указанию своего руководителя.",
         "Применение специальной аппаратуры для выявления проблем в функционировании автомашин.",
         "Выполнение ремонтных работ.",
      ],
      conditions: [
         "График работы 2/2/3",
         "Оформление согласно ТК РФ.",
         "Корпоративные скидки на услуги сервиса.",
      ],
   },
];
</script>

<style lang="scss">
.vacancy {
   &__content {
      display: grid;
      gap: 60px;
      max-width: 995px;
      @media screen and (max-width: $xl) {
         max-width: 100%;
         gap: 40px;
      }
   }
   &__item {
   }
}
.item-vacancy {
   &:not(:last-child) {
      padding-bottom: 52px;
      border-bottom: 1px solid $bg-asphalt;
      @media screen and (max-width: $xl) {
         padding-bottom: 30px;
      }
   }
   h3 {
      margin-bottom: 32px;
      @media screen and (max-width: $md) {
         margin-bottom: 30px;
      }
   }
   &__main {
   }
   &__groups {
      display: grid;
      gap: 40px;
      @media screen and (max-width: $xl) {
         gap: 30px;
      }
   }
   &__group {
   }
   &__label {
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
   }
}
.main-info {
   display: grid;
   gap: 12px;
   &__inner {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px 17px;
      font-size: 20px;
      line-height: 28px;
      @media screen and (max-width: $md) {
         font-size: 18px;
         line-height: 24px;
      }
   }
   &__label {
      color: $gray;
   }
   &__values {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px 16px;
      font-weight: 600;
      color: $bg-white;
      &[data-attr] {
         gap: 8px;
         &::before {
            content: attr(data-attr);
            font-weight: 400;
         }
      }
   }
}
</style>
