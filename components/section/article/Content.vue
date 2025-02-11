<template lang="pug">
	.article-page__content.content
		h2 {{ content.title }}
		.content__image.ibg
			div(v-html="content.field_image[0].markup")
		.content-groups
			.content(v-html="content.body")
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
.article-page {
  &__content {
    max-width: 995px;
    & > h2 {
      margin-bottom: 60px;
      hyphens: none;
      white-space: unset;
      text-wrap: balance;
      @media screen and (max-width: $xxl) {
        hyphens: auto;
        hyphenate-limit-chars: 10 6 2;
      }
      @media screen and (max-width: $xl) {
        margin-bottom: 40px;
      }
    }
  }
}
.content {
  &__image {
    padding-bottom: calc(540 / 995 * 100%);
  }
}
.content-groups {
  display: grid;
  gap: 40px;
  margin-top: 80px;
  & .content {
    & h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 24px;
      margin-top: 40px;
    }
    & > *:first-child {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: $xl) {
    margin-top: 40px;
  }
  @media screen and (max-width: $md) {
    gap: 30px;
  }
}
.content-group {
  &:nth-child(even) {
    & .content-group__caption {
      font-size: 20px;
      line-height: 28px;
    }
  }
  &__caption {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: $bg-white;
    margin-bottom: 24px;
  }
}
</style>
