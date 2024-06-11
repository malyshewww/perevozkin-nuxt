<template>
   <AsideForm formTitle="Откликнуться на вакансию">
      <div class="form__items">
         <div class="form-item">
            <input type="text" id="form-name" name="name" />
            <label for="form-name">Имя</label>
         </div>
         <div class="form-item">
            <input type="tel" id="form-phone" name="phone" />
            <label for="form-phone">Телефон</label>
         </div>
         <div class="form-item">
            <textarea type="text" id="form-comment" name="comment"></textarea>
            <label for="form-comment">Комментарий</label>
         </div>
      </div>
      <div class="form__bottom">
         <div class="form-item form-item-file">
            <input type="file" id="form-file" class="input-file" name="file" />
            <label for="form-file">Прикрепить резюме</label>
         </div>
         <button type="submit" class="form__button btn">Отправить</button>
         <div class="form__text">
            Отправляя форму, вы соглашаетесь
            <NuxtLink to="/page-text"
               >с политикой обработки персональных данных</NuxtLink
            >
         </div>
      </div>
   </AsideForm>
</template>

<style lang="scss">
.aside {
   position: sticky;
   top: 20px;
}
</style>
