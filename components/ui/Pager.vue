<template lang="pug">
   .pager
      ul.pager__list
         //- li.pager__item.pager__item--first
         //-    a.pager__link(href)
         //-       svg#icon-arrow-left-small(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 16 16")
         //-          path(d="M3.06994 7.52663L8.96502 1.63152L8 0.666504L0.457528 8.20898L8 15.7514L8.96502 14.7864L3.06998 8.89138L14.8601 8.89135L14.8601 7.5266L3.06994 7.52663Z")
         li.pager__item.pager__item--previous(disabled)
            a.pager__link(href)
               svg#icon-arrow-left-small(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16")
                  path(d="M3.06994 7.52663L8.96502 1.63152L8 0.666504L0.457528 8.20898L8 15.7514L8.96502 14.7864L3.06998 8.89138L14.8601 8.89135L14.8601 7.5266L3.06994 7.52663Z")
         li.pager__item.is-active
            a.pager__link(href) 1
         li.pager__item
            a.pager__link(href) 2
         li.pager__item
            a.pager__link(href) 3
         li.pager__item
            a.pager__link(href) 4
         //- li.pager__item.pager__item--ellipsis
         //-    a.pager__link(href) ...
         li.pager__item.pager__item--next
            a.pager__link(href)
               svg#icon-arrow-right-small(fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16")
                  path(d="M12.9301 7.52663L7.03498 1.63152L8 0.666504L15.5425 8.20898L8 15.7514L7.03498 14.7864L12.93 8.89138L1.1399 8.89135L1.1399 7.5266L12.9301 7.52663Z")
         //- li.pager__item.pager__item--last
         //-    a.pager__link(href)
         //-       svg#icon-arrow-right-small(fill="none", xmlns="http://www.w3.org/2000/svg", viewBox="0 0 16 16")
         //-          path(d="M12.9301 7.52663L7.03498 1.63152L8 0.666504L15.5425 8.20898L8 15.7514L7.03498 14.7864L12.93 8.89138L1.1399 8.89135L1.1399 7.5266L12.9301 7.52663Z")
</template>

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
