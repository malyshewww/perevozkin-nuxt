<template lang="pug">
	nuxt-layout
		div
			h1 {{ error.statusCode }}
			nuxt-link(to="/") Go back home
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
   error: Object as () => NuxtError,
});
</script>
