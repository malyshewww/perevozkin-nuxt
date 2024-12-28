<template lang="pug">
	.not-found 
		.container
			.not-found__body
				h1.page-title Страница не найдена
				UiLink(path="/" text="Вернуться на главную")
</template>

<script setup></script>

<style lang="scss" scoped>
.not-found {
   padding: 50px 0;
   &__body {
      display: grid;
      grid-template-columns: 100%;
      justify-items: center;
      text-align: center;
      gap: 40px;
   }
}
</style>
