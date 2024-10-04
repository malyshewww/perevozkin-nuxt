<template lang="pug">
   .header__actions(:class="[device === 'pc' ? '' : 'header__actions--mobile']")
      .header__phone-wrap
         a.header__phone(href="tel:+78311380880") +7 (831) 138-08-80
      nuxt-link.header__button(:to="{ hash: '#sale', path: '/' }" @click="goToSection")
         span.header__button-text Акции
</template>

<script setup>
const emit = defineEmits(["goToSection"]);

defineProps({
   device: {
      type: String,
      required: true,
   },
});
const goToSection = () => {
   emit("goToSection");
};
</script>
