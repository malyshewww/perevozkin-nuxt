<template>
   <div class="service-card__form service-form">
      <div class="container">
         <div class="service-form__body">
            <form action="#" class="form">
               <div class="form__sup-title">Обратная связь</div>
               <div class="form__title">
                  Записаться на ремонт или обсудить проблему со специалистом
               </div>
               <div class="form__items">
                  <div class="form-item">
                     <input id="form-name" type="text" placeholder="Имя" />
                     <label for="form-name">Имя</label>
                  </div>
                  <div class="form-item">
                     <input
                        id="form-phone"
                        ref="phone"
                        type="tel"
                        placeholder="Телефон" />
                     <label for="form-phone">Телефон</label>
                  </div>
                  <div class="form__action">
                     <UiButton
                        btn-title="Отправить"
                        btn-type="input"
                        class-names="form__button" />
                  </div>
               </div>
               <div class="form__text">
                  Отправляя форму, вы соглашаетесь
                  <NuxtLink to="/page-text"
                     >с политикой обработки персональных данных</NuxtLink
                  >
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";

onMounted(() => {
   maskPhone();
});
</script>

<style lang="scss">
.service-form {
   padding: 80px 0;
   @media screen and (max-width: $xl) {
      padding: 40px 0;
   }
   &__body {
      background-color: $graphite;
      position: relative;
      padding: 80px 10px 108px;
      --border: 70px;
      clip-path: polygon(
         100% 0,
         calc(100% - var(--border)) 0%,
         100% var(--border),
         100% 100%,
         100% 100%,
         100% 100%,
         var(--border) 100%,
         0 calc(100% - var(--border)),
         0 0,
         0 0
      );
      @media screen and (max-width: $xl) {
         --border: 40px;
         padding: 40px 10px;
         clip-path: none;
      }
      // &::before,
      // &::after {
      //    content: "";
      //    position: absolute;
      //    width: 0;
      //    height: 0;
      //    border-style: solid;
      // }
      // &::before {
      //    bottom: 0;
      //    left: 0;
      //    border-width: 70px 0 0 70px;
      //    border-color: transparent transparent transparent $bg-anthracite;
      // }
      // &::after {
      //    top: 0;
      //    right: 0;
      //    border-width: 0 70px 70px 0;
      //    border-color: transparent $bg-anthracite transparent transparent;
      // }
   }
   & .form__title {
      padding: 0;
      text-align: center;
      &::before {
         content: none;
      }
   }
}
.form {
   font-family: $third-family;
   font-weight: 700;
   text-align: center;
   display: grid;
   place-items: center;
   max-width: 1085px;
   margin: 0 auto;
   &__sup-title {
      font-family: $third-family;
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
      color: $dark-gray;
      margin-bottom: 34px;
      @media screen and (max-width: $xl) {
         margin-bottom: 30px;
      }
   }
   &__title {
      font-size: 28px;
      line-height: 36px;
      text-transform: uppercase;
      color: $bg-white;
      @media screen and (max-width: $xl) {
         font-size: 24px;
         line-height: 28px;
      }
      @media screen and (max-width: $md) {
         font-size: 20px;
      }
   }
   &__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr) 165px;
      gap: 20px;
      margin: 48px 0 28px;
      width: 100%;
      @media screen and (max-width: $xl) {
         grid-template-columns: 1fr;
         margin: 30px 0;
      }
   }
   &__action {
      width: 100%;
   }
   &__text {
      font-family: $font-family;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      color: $gray;
   }
   &__button {
      width: 100%;
      &::before {
         border-color: transparent transparent transparent $graphite;
      }
      &::after {
         border-color: transparent $graphite transparent transparent;
      }
   }
   & a {
      // text-decoration: underline;
      color: $bg-white;
      box-shadow: 0 1px 0 0 $bg-white;
   }
}
.form-item {
}
.btn {
}
</style>
