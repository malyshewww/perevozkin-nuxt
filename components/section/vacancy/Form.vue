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

watch(
  () => fileName.value,
  (val) => {
    formData.resume = val;
  }
);

const runtimeConfig = useRuntimeConfig();

const successForm = () => {
  formData.fio = "";
  formData.phone = "";
  formData.message = "";
  formErrors.fio = "";
  formErrors.phone = "";
  fileName.value = "";
  currentFile.value = null;
  storePopup.openPopupNotice();
  setTimeout(() => {
    storePopup.closePopupNotice();
  }, 3000);
};

const errorForm = (res) => {
  formErrors.fio = res.error.fio || "";
  formErrors.phone = res.error.phone || "";
};

const formSubmit = (e) => {
  // const buttonSubmit = e.target.querySelector('input[type="submit"]');
  // const buttonSubmitText = buttonSubmit.textContent;
  // buttonSubmit.setAttribute("disabled", "true");
  // buttonSubmit.textContent = "идет отправка...";
  if (fileName.value) {
    usePostFileData(currentFile.value, formData["webform_id"])
      .then((res) => {
        if (res.data.fid[0]) {
          let fid = res.data.fid[0].value;
          // console.log("fid", fid);
          formData.resume = fid;
          usePostFormData(formData)
            .then((res) => {
              if (res) {
                successForm();
                // console.log("success");
              } else {
                errorForm(res);
                // console.log("Не получилось отправить файл");
              }
            })
            .catch((e) => {
              errorForm(e.response.data);
              // console.log("usePostFormData after File", e.message);
            });
        } else {
          console.log("Не получилось отправить файл");
        }
      })
      .catch((e) => {
        errorForm(e.response.data);
        // console.log("usePostFileData: " + e.message);
      });
  } else {
    usePostFormData(formData)
      .then((res) => {
        if (res.data.sid) {
          successForm();
        } else {
          errorForm(res);
        }
      })
      .catch((e) => {
        errorForm(e.response.data);
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
