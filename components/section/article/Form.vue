<template>
   <AsideForm>
      <form action="#" class="aside-form form">
         <div class="form__header">
            <div class="form__title">Записаться в&nbsp;автосервис</div>
            <div class="form__sub-title">Наши специалисты помогут Вам</div>
         </div>
         <div class="form__items">
            <div class="form-item form-item--error">
               <input
                  id="form-name"
                  type="text"
                  name="name"
                  placeholder="Имя" />
               <label for="form-name">Имя</label>
               <div class="form-item--error-message">Сообщение об ошибке</div>
            </div>
            <div class="form-item">
               <input
                  id="form-phone"
                  type="tel"
                  name="phone"
                  placeholder="Телефон" />
               <label for="form-phone">Телефон</label>
            </div>
         </div>
         <div class="form__bottom">
            <UiButton
               btn-title="Отправить"
               btn-type="input"
               class-names="form__button" />
            <div class="form__text">
               Отправляя форму, вы соглашаетесь
               <NuxtLink to="/page-text"
                  >с политикой обработки персональных данных</NuxtLink
               >
            </div>
         </div>
      </form>
   </AsideForm>
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";

onMounted(() => {
   maskPhone();
});
</script>
