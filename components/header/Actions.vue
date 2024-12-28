<template lang="pug">
   .header__actions(:class="[device === 'pc' ? '' : 'header__actions--mobile']")
      .header__phone-wrap
         a.header__phone(:href="`tel:${formatPhone}`") {{phone}}
      nuxt-link(v-if="isStocks" :to="{ path: '/', hash: '#sale' }" @click.prevent="goToSection").header__button
         span.header__button-text Акции
</template>

<script setup>
import { useMainInfoStore } from "~/stores/maininfo";

const mainInfoStore = useMainInfoStore();

const { isStocks, links } = mainInfoStore;

const { phone } = links;

const emit = defineEmits(["goToSection"]);

const formatPhone = computed(() => {
   if (phone) {
      return phone.replace(/[^\d\+]/g, "");
   }
});

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
