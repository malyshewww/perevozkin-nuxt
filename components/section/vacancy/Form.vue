<template>
   <AsideForm formTitle="Откликнуться на вакансию">
      <div class="form__items">
         <div class="form-item">
            <input type="text" id="form-name" name="name" placeholder="ФИО" />
            <label for="form-name">ФИО</label>
         </div>
         <div class="form-item">
            <input
               type="tel"
               id="form-phone"
               name="phone"
               placeholder="Телефон" />
            <label for="form-phone">Телефон</label>
         </div>
         <div class="form-item">
            <textarea
               type="text"
               id="form-comment"
               name="comment"
               placeholder="Комментарий"></textarea>
            <label for="form-comment">Комментарий</label>
         </div>
      </div>
      <div class="form__bottom">
         <div class="form-item form-item-file" v-if="fileName == ''">
            <input
               type="file"
               id="form-file"
               class="input-file"
               name="file"
               @change="previewFiles" />
            <label for="form-file">Прикрепить резюме</label>
         </div>
         <div v-else-if="fileName != ''" class="form-file">
            <div class="form-file__text">{{ fileName }}</div>
            <button
               type="button"
               class="form-file__button"
               @click="deleteFile($event)"></button>
         </div>
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

const fileName = ref("");

const previewFiles = (e) => {
   fileName.value = e.target.files[0].name;
};
const deleteFile = (e) => {
   fileName.value = "";
};

onMounted(() => {
   maskPhone();
});
</script>

<style lang="scss">
.aside {
   position: sticky;
   top: 20px;
}
.form-file {
   display: inline-flex;
   align-items: center;
   gap: 8px;
   font-family: $font-family;
   overflow: hidden;
   &__text {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: $bg-white;
      width: fit-content;
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
   &__button {
      width: 20px;
      height: 20px;
      &::before {
         content: "";
         display: block;
         width: 20px;
         height: 20px;
         mask-image: url("/images/icons/icon-close.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: $system-alert;
      }
   }
}
</style>
