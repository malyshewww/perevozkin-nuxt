<template>
   <div ref="ticker" class="ticker">
      <div class="ticker__wrapper">
         <slot />
      </div>
   </div>
</template>

<style lang="scss">
.ticker {
   position: relative;
   &__wrapper {
      display: flex;
      align-items: center;
      gap: 48px;
      animation: ticker 20s linear infinite;
   }
   &__item {
      font-family: $second-family;
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
</style>
