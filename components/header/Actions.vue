<template lang="pug">
   .header__actions(:class="[device === 'pc' ? '' : 'header__actions--mobile']")
      .header__phone-wrap
         a.header__phone(:href="`tel:${formatPhone}`") {{phone}}
      nuxt-link(v-if="isStocks" :to="{ path: '/', hash: '#sale' }" @click.prevent="goToSection").header__button
         span.header__button-text Акции
</template>

<script setup>
const emit = defineEmits(["goToSection"]);

const { phone } = inject("links");

const formatPhone = computed(() => {
   if (phone) {
      return phone.replace(/[^\d\+]/g, "");
   }
});

const { isStocks } = inject("links");

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
