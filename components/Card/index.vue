<template>
   <NuxtLink :to="`${item.href}`" v-for="item in arr" class="service-item">
      <div class="service-item__body">
         <svg class="service-item__icon">
            <use xlink:href="/images/icons/sprite.svg#rotate-arrow-down"></use>
         </svg>
         <div class="service-item__header">
            <div class="service-item__title">{{ item.title }}</div>
            <div class="service-item__price" v-if="item.price">
               <span>от</span> {{ item.price }}
            </div>
         </div>
         <div class="service-item__image">
            <img :src="`/images/${item.img}.png`" :alt="item.title" />
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
   min-height: 504px;
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
      display: flex;
      flex-direction: column;
      gap: 8px;
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
   &__price {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      color: $bg-white;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      & span {
         font-weight: 400;
         color: $gray;
      }
   }
   &__image {
      margin-top: auto;
      max-height: 320px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      max-height: 340px;
      @include transition(transform, $time);
      & img {
         width: 100%;
         @include transition(transform, $time);
      }
   }
}
</style>
