<template lang="pug">
	NuxtLoadingIndicator(color="#6de754")
	NuxtLayout
		NuxtErrorBoundary
			NuxtPage
</template>

<script setup>
import { useMainInfoStore } from "~/stores/maininfo.js";

const mainInfoStore = useMainInfoStore();

const runtimeConfig = useRuntimeConfig();
const url = `${runtimeConfig.public.apiBase}/wsapi/packs/site_info?_format=json`;

const { data: mainInfoData } = await useFetch(url);

// console.log(mainInfoData.value);

onServerPrefetch(async () => {
  try {
    await mainInfoStore.setData(mainInfoData.value);
  } catch (error) {
    console.log("Error", error);
  }
});

useHead({
  meta: [
    { name: "yandex-verification", content: "ff8ee76b22e080bb" },
    {
      name: "google-site-verification",
      content: "Kp7P2xURrhFWKQDVdTdAn5hFf-YS_n8bqw8U97rajn4",
    },
  ],
  script: [
    {
      type: "text/javascript",
      innerHTML: `
				(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				m[i].l=1*new Date();
				for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
				k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
				ym(99261061, "init", {
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true,
					webvisor:true
				});
			`,
    },
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-W22JVRRYD8",
    },
    {
      innerHTML: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-W22JVRRYD8');
			`,
    },
  ],
  noscript: [
    {
      innerHTML: '<div><img src="https://mc.yandex.ru/watch/99261061" style="position:absolute; left:-9999px;" alt="" /></div>',
    },
  ],
});
</script>

<style lang="scss">
@import "~/assets/scss/base/nullstyle.scss";
@import "~/assets/scss/fonts.scss";
@import "~/assets/scss/base/extends.scss";
@import "~/assets/scss/base/keyframes.scss";
@import "~/assets/scss/common.scss";
</style>
