<template>
   <div class="breadcrumbs">
      <div class="container">
         <nav class="breadcrumbs__nav">
            <ul class="breadcrumbs__list">
               <li class="breadcrumbs__item" v-for="(item, index) in navList">
                  <NuxtLink
                     :to="item.href"
                     class="breadcrumbs__link"
                     :class="{ disabled: index == navList.length - 1 }"
                     >{{ item.text }}</NuxtLink
                  >
               </li>
            </ul>
         </nav>
      </div>
   </div>
</template>

<script setup>
const props = defineProps(["navList"]);
</script>

<style lang="scss">
.breadcrumbs {
   margin-top: 72px;
   &__nav {
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 8px;
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
      &.disabled {
         cursor: default;
         pointer-events: none;
         color: $bg-white;
      }
   }
}
</style>
