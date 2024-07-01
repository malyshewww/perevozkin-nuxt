<template>
   <div
      class="header__actions"
      :class="[device === 'pc' ? '' : 'header__actions--mobile']">
      <div class="header__phone-wrap">
         <a href="tel:+78311380880" class="header__phone">+7 (831) 138-08-80</a>
      </div>
      <NuxtLink
         :to="{ hash: '#sale', path: '/' }"
         class="header__button"
         @click="goToSection">
         <span class="header__button-text">Акции</span>
      </NuxtLink>
   </div>
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
