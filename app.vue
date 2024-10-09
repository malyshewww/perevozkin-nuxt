<template lang="pug">
	NuxtLayout(:main="mainInfo.main")
		NuxtErrorBoundary
			NuxtPage(:main="mainInfo.main")
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const {
   data: mainInfo,
   status,
   error,
} = await useAsyncData(
   "mainInfo",
   () =>
      $fetch(
         `${runtimeConfig.public.apiBase}/wsapi/packs/site_info?_format=json`,
         {}
      ),
   {
      transform: ({ data, metatag }) => {
         return {
            main: {
               menu: data.menu_main,
            },
            meta: metatag,
         };
      },
   }
);
</script>

<style lang="scss">
@import "~/assets/scss/base/nullstyle.scss";
@import "~/assets/scss/base/extends.scss";
@import "~/assets/scss/base/keyframes.scss";
@import "~/assets/scss/fonts.scss";
@import "~/assets/scss/common.scss";
</style>
