<template>
   <div class="vacancy__content content">
      <div class="vacancy__item item-vacancy" v-for="vacancy in vacancyList">
         <h3 class="item-vacancy__title">{{ vacancy.title }}</h3>
         <div class="item-vacancy__groups">
            <div class="item-vacancy__group">
               <div class="item-vacancy__main main-info">
                  <div class="main-info__inner">
                     <div class="main-info__label">Заработная плата:</div>
                     <div class="main-info__values" data-attr="от">
                        {{ vacancy.salary }}
                     </div>
                  </div>
                  <div class="main-info__inner">
                     <div class="main-info__label">
                        Контакты отдела персонала:
                     </div>
                     <div class="main-info__values">
                        <a
                           v-for="phone in vacancy.phones"
                           :href="`tel:${phone}`"
                           class="main-info__value"
                           >{{ phone }}</a
                        >
                     </div>
                  </div>
               </div>
            </div>
            <div class="item-vacancy__group">
               <div class="item-vacancy__label">Обязанности</div>
               <ul>
                  <li v-for="r in vacancy.responsibilities">
                     {{ r }}
                  </li>
               </ul>
            </div>
            <div class="item-vacancy__group">
               <div class="item-vacancy__label">Требования</div>
               <ul>
                  <li v-for="r in vacancy.requirements">
                     {{ r }}
                  </li>
               </ul>
            </div>
            <div class="item-vacancy__group">
               <div class="item-vacancy__label">Условия работы</div>
               <ul>
                  <li v-for="c in vacancy.conditions">
                     {{ c }}
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
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
   }
   &__item {
   }
}
.item-vacancy {
   &:not(:last-child) {
      padding-bottom: 52px;
      border-bottom: 1px solid $bg-asphalt;
   }
   h3 {
      margin-bottom: 32px;
   }
   &__main {
   }
   &__groups {
      display: grid;
      gap: 40px;
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
      gap: 17px;
   }
   &__label {
      font-size: 20px;
      line-height: 28px;
      color: $gray;
   }
   &__values {
      display: flex;
      align-items: center;
      gap: 16px;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
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
