<template lang="pug">
   AsideForm
      form(@submit.prevent="submitForm($event)").aside-form.form
         .form__header
            .form__title Записаться в&nbsp;автосервис
            .form__sub-title Наши специалисты помогут Вам
         .form__items
            .form-item(:class="{'form-item--error': formErrors.name}")
               input#form-name(type="text" name="name" v-model="formData.name" placeholder="Имя")
               label(for="form-name") Имя
               .form-item--error-message(v-if="formErrors.name") {{formErrors.name}}
            .form-item(:class="{'form-item--error': formErrors.phone}")
               input#form-phone(type="tel" name="phone" v-model="formData.phone" placeholder="Телефон")
               label(for="form-phone") Телефон
               .form-item--error-message(v-if="formErrors.phone") {{formErrors.phone}}
         .form__bottom
            UiButton(btn-title="Отправить" btn-type="input" class-names="form__button")
            .form__text Отправляя форму, вы соглашаетесь #[nuxt-link(to="/page/politic" target="_blank") с политикой обработки персональных данных] 
</template>

<script setup>
import maskPhone from "~/utils/maskPhone.js";

const props = defineProps({
   title: {
      type: String,
      required: false,
   },
});

const formData = reactive({
   name: "",
   phone: "",
   webform_id: "order",
   service: props.title,
});

const formErrors = reactive({
   name: "",
   phone: "",
});

const runtimeConfig = useRuntimeConfig();

// eslint-disable-next-line
const submitForm = async (e) => {
   console.log(formData);
   const buttonSubmit = e.target.querySelector('input[type="submit"]');
   const buttonSubmitText = buttonSubmit.textContent;
   buttonSubmit.setAttribute("disabled", "true");
   buttonSubmit.textContent = "идет отправка...";
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
               console.log(res);
               if (res.sid) {
                  formData.name = "";
                  formData.phone = "";
                  formErrors.name = "";
                  formErrors.phone = "";
                  alert("Форма успешно отправлена");
                  buttonSubmit.removeAttribute("disabled");
                  buttonSubmit.textContent = buttonSubmitText;
               } else {
                  formErrors.name = res.error.name || "";
                  formErrors.phone = res.error.phone || "";
                  buttonSubmit.removeAttribute("disabled");
                  buttonSubmit.textContent = buttonSubmitText;
               }
            });
      });
};

onMounted(() => {
   maskPhone();
});
</script>
