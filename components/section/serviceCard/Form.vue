<template>
   <div class="service-card__form service-form">
      <div class="container">
         <div class="service-form__body">
            <form action="#" class="form">
               <div class="form__sup-title">Обратная связь</div>
               <div class="form__title">
                  Записаться на ремонт или обсудить проблему со специалистом
               </div>
               <div class="form__items">
                  <div class="form-item">
                     <label for="form-name">Имя</label>
                     <input type="text" id="form-name" />
                  </div>
                  <div class="form-item">
                     <label for="form-phone">Телефон</label>
                     <input type="tel" id="form-phone" />
                  </div>
                  <div class="form__action">
                     <button type="submit" class="form__button btn">
                        Отправить
                     </button>
                  </div>
               </div>
               <div class="form__text">
                  Отправляя форму, вы соглашаетесь
                  <NuxtLink to="/page-text"
                     >с политикой обработки персональных данных</NuxtLink
                  >
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
.service-form {
   padding: 80px 0;
   &__body {
      background-color: $graphite;
      position: relative;
      padding: 80px 0 108px;
      &::before,
      &::after {
         content: "";
         position: absolute;
         width: 0;
         height: 0;
         border-style: solid;
      }
      &::before {
         bottom: 0;
         left: 0;
         border-width: 70px 0 0 70px;
         border-color: transparent transparent transparent $bg-anthracite;
      }
      &::after {
         top: 0;
         right: 0;
         border-width: 0 70px 70px 0;
         border-color: transparent $bg-anthracite transparent transparent;
      }
   }
}
.form {
   font-family: $second-family;
   font-weight: 700;
   text-align: center;
   display: grid;
   place-items: center;
   max-width: 1140px;
   margin: 0 auto;
   &__sup-title {
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
      color: $dark-gray;
      margin-bottom: 32px;
   }
   &__title {
      font-size: 28px;
      line-height: 36px;
      text-transform: uppercase;
      color: $bg-white;
   }

   &__items {
      display: grid;
      grid-template-columns: repeat(2, 1fr) 165px;
      gap: 20px;
      margin: 48px 0 28px;
      width: 100%;
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
      text-decoration: underline;
      color: $bg-white;
      box-shadow: 0 1px 0 0 $bg-white;
   }
}
.form-item {
}
.btn {
}
</style>
