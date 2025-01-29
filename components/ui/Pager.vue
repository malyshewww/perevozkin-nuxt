<template lang="pug">
	.pager
		
		ul.pager__list
			//- li.pager__item.pager__item--first
			//-    a.pager__link(href)
			//-       svg#icon-arrow-left-small(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 16 16")
			//-          path(d="M3.06994 7.52663L8.96502 1.63152L8 0.666504L0.457528 8.20898L8 15.7514L8.96502 14.7864L3.06998 8.89138L14.8601 8.89135L14.8601 7.5266L3.06994 7.52663Z")
			li.pager__item.pager__item--previous(:class="{disabled: +pagination.currPage == 0}")
				button(type="button" @click="changePage(pagination.currPage - 1)").pager__link
					svg#icon-arrow-left-small(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16")
						path(d="M3.06994 7.52663L8.96502 1.63152L8 0.666504L0.457528 8.20898L8 15.7514L8.96502 14.7864L3.06998 8.89138L14.8601 8.89135L14.8601 7.5266L3.06994 7.52663Z")
			li.pager__item(v-for="(item, index) in pager" :class="[{ 'is-active': item == pagination.currPage + 1}, { ellipsis: item == '...' }]")
				button(type="button" @click="changePage(item - 1)").pager__link {{ item }}
			li.pager__item.pager__item--next(:class="{disabled: +pagination.currPage == pagination.totalItems - 1}")
				button(type="button" @click="changePage(pagination.currPage + 1)").pager__link
					svg#icon-arrow-right-small(fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16")
						path(d="M12.9301 7.52663L7.03498 1.63152L8 0.666504L15.5425 8.20898L8 15.7514L7.03498 14.7864L12.93 8.89138L1.1399 8.89135L1.1399 7.5266L12.9301 7.52663Z")
			//- li.pager__item.pager__item--last
			//-    a.pager__link(href)
			//-       svg#icon-arrow-right-small(fill="none", xmlns="http://www.w3.org/2000/svg", viewBox="0 0 16 16")
			//-          path(d="M12.9301 7.52663L7.03498 1.63152L8 0.666504L15.5425 8.20898L8 15.7514L7.03498 14.7864L12.93 8.89138L1.1399 8.89135L1.1399 7.5266L12.9301 7.52663Z")
</template>

<script setup>
const emit = defineEmits(["changePage"]);

const props = defineProps({
  pagination: {
    type: Object,
    required: true,
  },
});

// const pagination = ref(props.pagination);

const changePage = (num) => {
  emit("changePage", num);
};

const pager = computed(() => {
  let nav = [];
  if (props.pagination.totalItems > 5) {
    let leftEllipsis = true;
    let rightEllipsis = true;
    for (let i = 0; i < props.pagination.totalItems; i++) {
      if (i < 2) {
        nav.push(i + 1);
      } else if (i >= props.pagination.totalItems - 2) {
        nav.push(i + 1);
      } else if (i == props.pagination.currPage) {
        nav.push(i + 1);
      } else if (leftEllipsis && i > 1 && i < props.pagination.currPage) {
        leftEllipsis = false;
        nav.push("...");
      } else if (
        rightEllipsis &&
        i < props.pagination.totalItems - 2 &&
        i > props.pagination.currPage
      ) {
        rightEllipsis = false;
        nav.push("...");
      }
    }
  } else {
    for (let i = 1; i <= props.pagination.totalItems; i++) {
      nav.push(i);
    }
  }
  return nav;
});
</script>

<style lang="scss">
.pager {
  &__list {
    @include reset-list;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    color: $bg-white;
    @include transition(color $time, background-color $time);
    cursor: pointer;
    @media (any-hover: hover) {
      &:hover {
        color: $state-hover;
        & svg {
          fill: $state-hover;
        }
      }
    }
  }
  &__item {
    position: relative;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    &--first,
    &--last,
    &--next,
    &--previous {
      svg {
        display: block;
        width: 16px;
        height: 16px;
        fill: currentColor;
        @include transition(fill $time);
      }
    }
    @media screen and (max-width: $md) {
      width: 30px;
      height: 30px;
    }
    &.is-active {
      .pager__link {
        background-color: $bg-asphalt;
        pointer-events: none;
      }
    }
    &[disabled],
    &.disabled {
      .pager__link {
        pointer-events: none;
        color: $dark-gray;
      }
    }
  }
}
</style>
