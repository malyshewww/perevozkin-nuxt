<template>
   <NuxtLink
      :to="`${item.href}`"
      v-for="item in props.arr"
      class="service-item">
      <div class="service-item__body">
         <svg class="service-item__icon">
            <use xlink:href="/images/icons/sprite.svg#rotate-arrow-down"></use>
         </svg>
         <div class="service-item__header">
            <div class="service-item__title">{{ item.title }}</div>
         </div>
         <div class="service-item__image">
            <img :src="`/images/main-services/${item.img}.png`" alt="" />
         </div>
      </div>
   </NuxtLink>
</template>

<script setup>
const props = defineProps(["arr"]);
</script>

<style lang="scss">
.service-item {
   border: 1px solid $bg-asphalt;
   padding: 40px;
   position: relative;
   @include transition(width $time, flex-grow $time);
   &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: linear-gradient(162deg, #2f3740 0%, #264947 100%);
      background-size: 200%;
      opacity: 0;
      z-index: 0;
      @include transition(opacity $time);
   }
   @media (any-hover: hover) {
      &:hover {
         &::before {
            opacity: 1;
         }
         & .service-item__icon {
            opacity: 1;
            transform: translateY(0);
         }
      }
   }
   &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      height: 100%;
      position: relative;
      z-index: 2;
      &::before {
         content: none;
      }
   }
   &__header {
      align-self: flex-start;
   }
   &__icon {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 36px;
      height: 36px;
      opacity: 0;
      transform: translateY(-20px);
      @include transition(opacity $time, transform $time);
   }
   &__title {
      font-family: $second-family;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      text-transform: uppercase;
      color: $bg-white;
   }
   &__image {
      margin-top: auto;
      max-height: 320px;
      & img {
         width: 100%;
         @include transition(transform, $time);
      }
   }
}
</style>
