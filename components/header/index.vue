<template>
   <header class="header">
      <div class="container">
         <div class="header__body">
            <NuxtLink to="/" class="header__logo">
               <img src="/images/logo.svg" alt="логотип" />
            </NuxtLink>
            <div class="header__menu menu">
               <nav class="menu__body">
                  <ul class="menu__list">
                     <li class="menu__item" v-for="item in menu">
                        <NuxtLink :to="`${item.href}`" class="menu__link">{{
                           item.title
                        }}</NuxtLink>
                     </li>
                  </ul>
               </nav>
            </div>
            <div class="header__actions">
               <a href="tel:+78311380880" class="header__phone"
                  >+7 (831) 138-08-80</a
               >
               <a href="#sale" class="header__button">
                  <span class="header__button-text">Акции</span>
               </a>
            </div>
         </div>
      </div>
   </header>
</template>
<script setup>
const localePath = useLocalePath();
const menu = [
   {
      title: "Услуги",
      href: "/services",
   },
   {
      title: "Вакансии",
      href: "/vacancy",
   },
   {
      title: "Блог",
      href: "/blog",
   },
   {
      title: "Контакты",
      href: "/contacts",
   },
];
</script>
<style lang="scss">
.header {
   background-color: $bg-anthracite;
   min-height: 108px;
   &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      gap: 20px;
   }
   &__logo {
      display: block;
      width: 364px;
      height: 84px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
   }
   &__menu {
      flex-grow: 1;
      display: flex;
      justify-content: center;
   }
   &__actions {
      display: flex;
      align-items: center;
      gap: 52px;
   }
   &__phone {
      line-height: 24px;
      font-weight: 600;
      @include transition(color, $time);
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
   }
   &__button {
      padding: 23px 40px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-shrink: 0;
      min-height: 88px;
      position: relative;
      margin-top: -22px;
      background-image: linear-gradient(
         135deg,
         #6de754 0%,
         #129465 51%,
         #6de754 100%
      );
      background-size: 300%;
      @include transition(background-position, $time * 2);
      clip-path: polygon(
         0 0,
         100% 0,
         100% 50%,
         100% 100%,
         12px 100%,
         0 calc(100% - 12px)
      );
      &-text {
         font-weight: 600;
         font-size: 16px;
         line-height: 22px;
         color: $bg-white;
         position: relative;
         z-index: 2;
      }
      @media (any-hover: hover) {
         &:hover {
            background-position: right top;
         }
      }
   }
}
.menu {
   &__body {
      flex: 0 1 44.488372%;
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 52px;
      flex-wrap: wrap;
   }
   &__item {
   }
   &__link {
      color: $bg-white;
      line-height: 24px;
      font-size: 16px;
      font-weight: 600;
      @include transition(color, $time);
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
   }
}
</style>
