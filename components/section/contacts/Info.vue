<template lang="pug">
	div(v-if="isMobile")
		SectionContactsImage(:image="info.image")
	.contacts__info.info-contacts
		.info-contacts__item
			.info-contacts__caption Адрес
			.info-contacts__values
				address {{info.address}}
		.info-contacts__item
			.info-contacts__caption Телефон
			.info-contacts__values
				a.info-contacts__link(href="tel:+78311380880") + 7 (831) 138-08-80
				ul.social-list(v-if="telegram || whatsapp || viber")
					li.social-item(v-if="telegram")
						a.social-link(:href="telegram" target="_blank")
							svg#icon-telegram-bg(fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32")
								g(clip-path="url(#clip0_558_2897)")
									path(d="M16 32C24.8368 32 32 24.8368 32 16C32 7.1632 24.8368 0 16 0C7.1632 0 0 7.1632 0 16C0 24.8368 7.1632 32 16 32Z" fill="url(#paint0_linear_558_2897)")
									path(d="M13.0669 23.3333C12.5485 23.3333 12.6365 23.1376 12.4579 22.6443L10.9336 17.6267L22.6669 10.6667" fill="#C8DAEA")
									path(d="M13.0664 23.3334C13.4664 23.3334 13.6429 23.1504 13.8664 22.9334L15.9997 20.8587L13.3384 19.2544" fill="#A9C9DD")
									path(d="M13.4564 19.0122L19.8799 23.7999C20.6132 24.2084 21.1423 23.9972 21.3247 23.1135L23.9396 10.6831C24.2074 9.60043 23.5306 9.10923 22.8292 9.42976L7.47564 15.4031C6.42711 15.8271 6.43351 16.417 7.28418 16.6799L11.2244 17.9204L20.346 12.1146C20.777 11.8511 21.1722 11.993 20.8474 12.2831" fill="url(#paint1_linear_558_2897)")
								defs
									linearGradient#paint0_linear_558_2897(x1="21.3344" y1="5.3344" x2="13.3344" y2="24" gradientUnits="userSpaceOnUse")
										stop(stop-color="#37AEE2")
										stop(offset="1" stop-color="#1E96C8")
									linearGradient#paint1_linear_558_2897(x1="18.1007" y1="15.7412" x2="20.6324" y2="21.4511" gradientUnits="userSpaceOnUse")
										stop(stop-color="#EFF7FC")
										stop(offset="1" stop-color="white")
									clipPath#clip0_558_2897
										rect(width="32" height="32" fill="white")
					li.social-item(v-if="whatsapp")
						a.social-link(:href="whatsapp" target="_blank")
							svg
								use(href="/images/icons/sprite.svg#icon-whatsapp")
					li.social-item(v-if="viber")
						a.social-link(:href="viber" target="_blank")
							svg
								use(href="/images/icons/sprite.svg#icon-viber")
		.info-contacts__item(v-if="info.email")
			.info-contacts__caption E-mail
			.info-contacts__values
				a.info-contacts__link(:href="`${info.email}`") {{info.email}}
</template>

<script setup>
const { isMobile } = useDevice();

const props = defineProps({
   info: {
      type: Object,
      required: true,
   },
});

const { telegram, viber, whatsapp } = inject("links");
</script>

<style lang="scss">
.info-contacts {
   display: flex;
   flex-direction: column;
   justify-content: end;
   width: 60%;
   margin-left: auto;
   gap: 40px;
   @media screen and (max-width: $xl) {
      width: 100%;
      gap: 20px;
   }
   &__item {
      padding-bottom: 40px;
      border-bottom: 1px solid $bg-asphalt;
      display: grid;
      align-items: start;
      grid-template-columns: 27% 1fr;
      justify-content: space-between;
      gap: 20px;
      @media screen and (max-width: $xl) {
         grid-template-columns: 1fr;
         padding-bottom: 30px;
         gap: 15px;
      }
   }
   &__caption {
      padding: 4px 0;
      font-size: 16px;
      line-height: 24px;
      color: $gray;
   }

   &__values {
      font-size: 24px;
      line-height: 32px;
      color: $bg-white;
      display: flex;
      align-items: center;
      gap: 20px 31px;
      flex-wrap: wrap;
      @media screen and (max-width: $md) {
         font-size: 20px;
         line-height: 24px;
      }
   }
   &__link {
      @include transition(color $time);
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
   }
}
.social-list {
   @include reset-list;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 12px;
}
.social-link {
   display: block;
   width: 32px;
   height: 32px;
   flex-shrink: 0;
   border-radius: 50%;
   & svg {
      width: 100%;
      height: 100%;
   }
}
</style>
