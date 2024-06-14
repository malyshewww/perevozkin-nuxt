<template>
   <section class="main-advantages">
      <div class="container">
         <div class="main-advantages__body">
            <div class="main-advantages__info">
               <div class="heading">
                  <div class="heading__sub-title">Преимущества</div>
                  <h2 class="heading__title">
                     Мы знаем
                     <span
                        >причины <br />
                        всех поломок</span
                     >
                     <br />
                     и оптимальные
                     <br />
                     варианты <br />
                     их устранения
                  </h2>
               </div>
               <div class="main-advantages__content">
                  <p>
                     Перевозкин24 имеет в своём распоряжении более 200
                     автомобилей ГАЗ, которые мы эксплуатируем и ремонтируем
                     самостоятельно. Огромный опыт наших мастеров по ремонту
                     автомобилей ГАЗ гарантирует высокое качество и надёжность.
                  </p>
               </div>
            </div>
            <div class="main-advantages__cards">
               <AdvantagesCard></AdvantagesCard>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup></script>

<style lang="scss">
.main-advantages {
   padding: 120px 0;
   & .heading {
      border: none;
      margin: 0;
      padding: 0;
   }
   &__body {
      display: flex;
      justify-content: space-between;
      gap: 20px;
   }
   &__info {
      max-width: 705px;
      display: flex;
      flex-direction: column;
   }
   &__content {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: $gray;
      margin-top: auto;
   }
   &__cards {
      flex-grow: 1;
      max-width: 856px;
      height: 780px;
      display: flex;
      justify-content: flex-end;
      position: relative;
      &::before {
         content: "";
         position: absolute;
         inset: 0;
         background-color: $bg-anthracite;
         opacity: 0.6;
         z-index: 4;
      }
   }
   & .card-advantages {
      width: 560px;
      min-height: 540px;
      padding: 48px 48px 60px 48px;
      box-shadow: 0 0 10px 0 rgba(16, 19, 22, 0.8);
      background: $bg-asphalt;
      position: absolute;
      &:nth-child(1) {
         top: 0;
         left: 50%;
         transform: translateX(-50%);
         z-index: 1;
      }
      &:nth-child(2) {
         top: 10%;
         right: 0;
         z-index: 2;
      }
      &:nth-child(3) {
         top: 15%;
         left: 0;
         z-index: 3;
      }
      &:nth-child(4) {
         bottom: 0%;
         z-index: 4;
         left: 50%;
         transform: translateX(-50%);
         opacity: 1;
      }
      &__content {
         margin-top: auto;
      }
      &__icon {
         width: 100px;
         height: 100px;
      }
      &__title {
         font-size: 28px;
         line-height: 36px;
      }
   }
}
</style>
