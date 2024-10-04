<template lang="pug">
   AsideForm
      form.aside-form.form(action="#")
         .form__header
            .form__title Записаться в&nbsp;автосервис
            .form__sub-title Наши специалисты помогут Вам
         .form__items
            .form-item.form-item--error
               input#form-name(type="text" name="name" placeholder="Имя")
               label(for="form-name") Имя
               .form-item--error-message Сообщение об ошибке
            .form-item
               input#form-phone(type="tel" name="phone" placeholder="Телефон")
               label(for="form-phone") Телефон
         .form__bottom
            UiButton(btn-title="Отправить" btn-type="input" class-names="form__button")
            .form__text Отправляя форму, вы соглашаетесь #[nuxt-link(to="/page-text" target="_blank") с политикой обработки персональных данных] 
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";

onMounted(() => {
   maskPhone();
});
</script>
