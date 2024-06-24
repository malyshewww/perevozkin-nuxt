<template>
   <AsideForm
      formTitle="Записаться в&nbsp;автосервис"
      formSubtitle="Наши специалисты помогут Вам">
      <div class="form__items">
         <div class="form-item form-item--error">
            <input type="text" id="form-name" name="name" placeholder="Имя" />
            <label for="form-name">Имя</label>
            <div class="form-item--error-message">Сообщение об ошибке</div>
         </div>
         <div class="form-item">
            <input
               type="tel"
               id="form-phone"
               name="phone"
               placeholder="Телефон"
               disabled />
            <label for="form-phone">Телефон</label>
         </div>
      </div>
      <div class="form__bottom">
         <UiButton
            btnTitle="Отправить"
            btnType="input"
            classNames="form__button" />
         <div class="form__text">
            Отправляя форму, вы соглашаетесь
            <NuxtLink to="/page-text"
               >с политикой обработки персональных данных</NuxtLink
            >
         </div>
      </div>
   </AsideForm>
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";

onMounted(() => {
   maskPhone();
});
</script>
