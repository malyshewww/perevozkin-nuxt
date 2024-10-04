<template lang="pug">
	.breadcrumbs
		.container
			nav.breadcrumbs__nav
				ul.breadcrumbs__list
					li.breadcrumbs__item(v-for="(item, index) in navList" :key="index")
						nuxt-link.breadcrumbs__link(:to="item.href" :class="{ disabled: index == navList.length - 1 }") {{ item.text }}
</template>

<script setup>
defineProps({
   navList: {
      type: Array,
      required: true,
   },
});
</script>

<style lang="scss">
.breadcrumbs {
   margin-top: 72px;
   @media screen and (max-width: $xl) {
      margin-top: 40px;
   }
   &__nav {
      overflow: auto hidden;
      &::-webkit-scrollbar {
         display: none;
         width: 0;
         height: 0;
      }
      &::-webkit-scrollbar-thumb {
         display: none;
         width: 0;
         height: 0;
      }
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
   }
   &__item {
      & + & {
         display: flex;
         align-items: center;
         gap: 8px;
         &::before {
            content: "";
            width: 16px;
            height: 1px;
            background-color: $gray;
         }
      }
   }
   &__link {
      font-size: 14px;
      line-height: 18px;
      color: $gray;
      font-family: $font-family;
      transition: color $time;
      &.disabled,
      &:disabled {
         cursor: default;
         pointer-events: none;
         color: $bg-white;
      }
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
   }
}
</style>
