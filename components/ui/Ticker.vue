<template>
   <div ref="ticker" class="ticker">
      <div class="ticker__wrapper">
         <slot />
      </div>
   </div>
</template>

<script setup></script>

<style lang="scss">
.ticker {
   position: relative;
   &__wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      user-select: none;
      gap: var(--gap);
   }
   &__group {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: var(--gap);
      min-width: 100%;
      animation: scroll-x var(--duration) linear infinite;
   }
   &__item {
      font-family: $third-family;
      font-weight: 700;
      font-size: 72px;
      line-height: 84px;
      white-space: nowrap;
      flex-shrink: 0;
      padding-right: 60px;
      text-transform: uppercase;
      color: $bg-asphalt;
      position: relative;
      &::after {
         content: "";
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         right: 0;
         width: 12px;
         height: 12px;
         background: currentColor;
         border-radius: 50%;
      }
   }
}
.ticker {
   // @for $i from 1 through 8 {
   //    &__item:nth-of-type(#{$i}) {
   //       --marquee-item-index: #{$i};
   //    }
   // }
   // &__item {
   //    --marquee-item-offset: max(
   //       calc(var(--marquee-item-width) * var(--marquee-items)),
   //       calc(100% + var(--marquee-item-width))
   //    );
   //    --marquee-delay: calc(
   //       var(--marquee-duration) / var(--marquee-items) *
   //          (var(--marquee-items) - var(--marquee-item-index)) * -1
   //    );
   //    position: absolute;
   //    left: 0;
   //    width: var(--marquee-item-width);
   //    inset-inline-start: var(--marquee-item-offset);
   //    transform: translateX(-50%);
   //    animation: go linear var(--marquee-duration) var(--marquee-delay, 0s)
   //       infinite;
   // }
}
</style>
