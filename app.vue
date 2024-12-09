<template lang="pug">
	NuxtLayout(:main="mainInfo.main" :links="mainInfo.main.links")
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
      transform: (res) => {
         console.log(res);
         const { data, metatag } = res;
         return {
            main: {
               menu: data.menu_main,
               links: {
                  isStocks: data.actions_exists,
                  telegram: data.site_info[0].field_link_telegram,
                  vk: data.site_info[0].field_link_vk,
                  youtube: data.site_info[0].field_link_youtube,
                  phone: data.site_info[0].field_phone,
                  email: data.site_info[0].field_email,
                  viber: data.site_info[0].field_viber,
                  whatsapp: data.site_info[0].field_whatsapp,
               },
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
