<template lang="pug">
	AsideForm
		form.aside-form.form(action="#" enctype="multipart/form-data" @submit.prevent="formSubmit")
			.form__header
				.form__title Откликнуться на вакансию
			.form__items
				.form-item
					input#form-name(type="text" name="name" placeholder="ФИО")
					label(for="form-name") ФИО
				.form-item
					input#form-phone(type="tel" name="phone" placeholder="Телефон")
					label(for="form-phone") Телефон
				.form-item
					textarea#form-comment(type="text" name="comment" placeholder="Комментарий")
					label(for="form-comment") Комментарий
			.form__bottom
				.form-item.form-item-file(v-if="fileName == ''")
					input#form-file.input-file(type="file" name="file" @change="previewFiles")
					label(for="form-file") Прикрепить резюме
				.form-file(v-else-if="fileName != ''")
					.form-file__text {{ fileName }}
					button.form-file__button(type="button" @click="deleteFile($event)")
				UiButton(btn-title="Отправить" btn-type="input" class-names="form__button")
				.form__text Отправляя форму, вы соглашаетесь #[nuxt-link(to="/page-text" target="_blank") с политикой обработки персональных данных]
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";

const fileName = ref("");

const previewFiles = (e) => {
   fileName.value = e.target.files[0].name;
};

const deleteFile = () => {
   fileName.value = "";
};

const formSubmit = (e) => {
   const formData = new FormData(e.target);
   formData.append("data", e.target.name);
   console.log(formData);
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
