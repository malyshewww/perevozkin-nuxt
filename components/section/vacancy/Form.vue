<template lang="pug">
	AsideForm
		form.aside-form.form(@submit.prevent="formSubmit($event)")
			.form__header
				.form__title Откликнуться на вакансию
			.form__items
				.form-item(:class="{'form-item--error': formData.fio === '' && formErrors.fio}")
					input#form-name(type="text" name="fio" v-model="formData.fio" placeholder="ФИО")
					label(for="form-name") ФИО
					.form-item--error-message(v-if="formData.fio === '' && formErrors.fio") {{formErrors.fio}}
				.form-item(:class="{'form-item--error': formData.phone === '' && formErrors.phone}")
					input#form-phone(type="tel" name="phone" v-model="formData.phone" placeholder="Телефон")
					label(for="form-phone") Телефон
					.form-item--error-message(v-if="formData.phone === '' && formErrors.phone") {{formErrors.phone}}
				.form-item
					textarea#form-comment(type="text" name="message" v-model="formData.message" placeholder="Комментарий")
					label(for="form-comment") Комментарий
			.form__bottom
				.form-item.form-item-file(v-if="fileName == ''")
					input#form-file.input-file(type="file" name="resume" @change="previewFiles")
					label(for="form-file") Прикрепить резюме
				.form-file(v-else-if="fileName != ''")
					.form-file__text {{ fileName }}
					button.form-file__button(type="button" @click="deleteFile($event)")
				UiButton(btn-title="Отправить" btn-type="input" class-names="form__button")
				.form__text Отправляя форму, вы соглашаетесь #[nuxt-link(to="/page/politic" target="_blank") с политикой обработки персональных данных]
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";

import { usePopupNoticeStore } from "~/stores/popup/notice";
const storePopup = usePopupNoticeStore();

const fileName = ref("");

const currentFile = ref("");

const previewFiles = (e) => {
   fileName.value = e.target.files[0].name;
   currentFile.value = e.target.files[0];
};

const deleteFile = () => {
   fileName.value = "";
};

const formErrors = reactive({
   fio: "",
   phone: "",
});

const formData = reactive({
   fio: "",
   phone: "",
   message: "",
   resume: fileName.value,
   webform_id: "vacancy_callback",
});

const runtimeConfig = useRuntimeConfig();

const formSubmit = (e) => {
   const buttonSubmit = e.target.querySelector('input[type="submit"]');
   const buttonSubmitText = buttonSubmit.textContent;
   buttonSubmit.setAttribute("disabled", "true");
   buttonSubmit.textContent = "идет отправка...";
   if (fileName.value) {
      // console.log(fileName.value);
      fetch(`${runtimeConfig.public.apiBase}/session/token`)
         .then(function (response) {
            return response.text();
         })
         .then(function (token) {
            fetch(
               `${runtimeConfig.public.apiBase}/webform_rest/${formData.webform_id}/upload/resume?_format=json`,
               {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/octet-stream",
                     "Content-Disposition":
                        `file; filename="` +
                        encodeURIComponent(fileName.value) +
                        `"; filename*=UTF-8''` +
                        encodeURIComponent(fileName.value),
                     "X-CSRF-Token": token,
                  },
                  body: JSON.stringify(formData),
               }
            )
               .then((res) => res.json())
               .then(function (res) {
                  if (res.fid[0]) {
                     let fid = res.fid[0].value;
                     fileName.value = "";
                     buttonSubmit.removeAttribute("disabled");
                     buttonSubmit.textContent = buttonSubmitText;
                  } else {
                     buttonSubmit.removeAttribute("disabled");
                     buttonSubmit.textContent = buttonSubmitText;
                  }
               });
         });
   } else {
      fetch(`${runtimeConfig.public.apiBase}/session/token`)
         .then(function (response) {
            return response.text();
         })
         .then(function (token) {
            fetch(
               `${runtimeConfig.public.apiBase}/webform_rest/submit?_format_json`,
               {
                  method: "POST",
                  headers: {
                     Accept: "application/json, text/plain, */*",
                     "Content-Type": "application/json",
                     "X-CSRF-Token": token,
                  },
                  body: JSON.stringify(formData),
               }
            )
               .then((res) => res.json())
               .then(function (res) {
                  if (res.sid) {
                     formData.fio = "";
                     formData.phone = "";
                     formErrors.fio = "";
                     formErrors.phone = "";
                     storePopup.openPopupNotice();
                     setTimeout(() => {
                        storePopup.closePopupNotice();
                     }, 3000);
                     buttonSubmit.removeAttribute("disabled");
                     buttonSubmit.textContent = buttonSubmitText;
                  } else {
                     formErrors.fio = res.error.fio || "";
                     formErrors.phone = res.error.phone || "";
                     buttonSubmit.removeAttribute("disabled");
                     buttonSubmit.textContent = buttonSubmitText;
                  }
               });
         });
   }
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
