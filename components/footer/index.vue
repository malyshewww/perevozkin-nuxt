<template>
   <footer class="footer">
      <div class="container">
         <div class="footer__body">
            <div class="footer__main">
               <NuxtLink to="/" class="footer__logo">
                  <img src="/images/logo.svg" alt="логотип" />
               </NuxtLink>
               <div class="footer__contacts contacts-footer">
                  <a href="tel:+78311380880" class="contacts-footer__phone"
                     >+7 (831)138-08-80</a
                  >
                  <a href="mailto:" class="contacts-footer__email"
                     >perevozov-service@mail.ru</a
                  >
               </div>
               <div class="footer__menu menu-footer">
                  <ul class="menu-footer__list">
                     <li
                        v-for="(item, index) in menu"
                        :key="index"
                        class="menu-footer__item">
                        <NuxtLink
                           :to="`${item.href}`"
                           class="menu-footer__link"
                           >{{ item.title }}</NuxtLink
                        >
                     </li>
                  </ul>
               </div>
               <div class="footer__social social-footer">
                  <ul class="social-footer__list">
                     <li class="social-footer__item">
                        <a href="/" target="_blank" class="social-footer__link">
                           <svg
                              id="icon-vk"
                              class="social-footer__icon"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                              <path
                                 d="M12.7663 17C7.24904 17 4.12261 13.2805 4 7H6.75862C6.81992 11.5732 8.90421 13.5244 10.4981 13.8902V7H13.0728V10.9634C14.6667 10.7805 16.3218 9.01219 16.8736 7H19.4483C19.0192 9.43902 17.1801 11.2683 15.8927 12C17.1801 12.6098 19.2644 14.1951 20 17H17.1188C16.5057 15.1098 14.9732 13.6463 12.9502 13.4024V17H12.7663Z"
                                 fill="currentColor"></path>
                           </svg>
                        </a>
                     </li>
                     <li class="social-footer__item">
                        <a href="/" target="_blank" class="social-footer__link">
                           <svg
                              id="icon-telegram"
                              fill="none"
                              class="social-footer__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                              <path
                                 d="M18.9422 5.1135L4.60403 10.7367C3.8187 10.9704 3.8425 11.7702 4.42554 11.9671L8.01902 13.1237L9.39929 17.4795C9.56587 17.9594 9.70866 18.1317 9.99423 18.144C10.2917 18.144 10.4107 18.0332 10.7201 17.7502C11.0889 17.3934 11.6363 16.8397 12.5168 15.9538L16.2531 18.8084C16.9432 19.2022 17.443 18.993 17.6095 18.144L19.9417 6.15938C20.1916 5.1135 19.5967 4.80589 18.9422 5.1135ZM8.57826 12.853L16.7409 7.54979C17.1455 7.26679 17.2645 7.58671 17.086 7.79588L10.3155 14.1081L9.97044 17.258L8.57826 12.853Z"
                                 fill="currentColor"></path>
                           </svg>
                        </a>
                     </li>
                     <li class="social-footer__item">
                        <a href="/" target="_blank" class="social-footer__link">
                           <svg
                              id="icon-youtube"
                              class="social-footer__icon"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24">
                              <path
                                 d="M19.7219 7.7731C19.5274 6.93737 18.8294 6.31622 17.9941 6.22587C16.0145 6 14.0007 6 11.9983 6C9.99583 6 7.9934 6 6.00242 6.21458C5.17857 6.31622 4.48058 6.92608 4.28606 7.7731C4 8.97023 4 10.269 4 11.5C4 12.731 4 14.0411 4.27462 15.2382C4.46914 16.0739 5.16713 16.6951 6.00242 16.7854C7.98196 17 9.99583 17 11.9983 17C14.0007 17 16.0031 17 17.9941 16.7854C18.8294 16.6951 19.5274 16.0739 19.7219 15.2382C19.9965 14.0411 19.9965 12.731 19.9965 11.5C20.0079 10.269 20.0079 8.97023 19.7219 7.7731ZM10.3277 13.6571V9.27515L14.5614 11.4661L10.3277 13.6571Z"
                                 fill="currentColor"></path>
                           </svg>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="footer__bottom bottom-footer">
               <div class="bottom-footer__item">
                  © 2024 ООО «Перевозов-Сервис»
               </div>
               <div to="/page-text" class="bottom-footer__item">
                  <button
                     type="button"
                     class="bottom-footer__link"
                     @click="openPoliticPopup()">
                     Политика обработки конфиденциальных данных
                  </button>
               </div>
               <div class="bottom-footer__item">
                  <button
                     type="button"
                     class="button-up"
                     @click="scrollTop($event)">
                     Наверх
                     <svg class="button-up__icon">
                        <use
                           xlink:href="/images/icons/sprite.svg#rotate-arrow-up"></use>
                     </svg>
                  </button>
               </div>
               <div class="bottom-footer__item">
                  <div class="company">
                     <div class="company__caption">Создание сайта:</div>
                     <NuxtLink
                        to="https://webshop.ru/"
                        target="_blank"
                        class="company__link">
                        <img src="/images/company-logo.svg" alt="логотип" />
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
   <PopupPolitic
      :is-active="isPoliticPopupActive"
      @close-popup="closePoliticPopup" />
</template>
<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

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
const scrollTop = () => {
   const wrapper = document.querySelector(".wrapper");
   if (wrapper) {
      const { bodyScrollBar } = initCustomScrollbar();
      bodyScrollBar.scrollIntoView(wrapper);
   }
   // if (window.innerWidth > 1024) {
   //    bodyScrollBar.scrollIntoView(document.querySelector(".wrapper"));
   // } else {
   //    window.scrollTo({
   //       top: 0,
   //       behavior: "smooth",
   //    });
   // }
};
const isPoliticPopupActive = ref(false);
const openPoliticPopup = () => {
   isPoliticPopupActive.value = !isPoliticPopupActive.value;
   document.body.classList.toggle("lock");
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.updatePluginOptions("modal", { open: true });
};
const closePoliticPopup = () => {
   isPoliticPopupActive.value = !isPoliticPopupActive.value;
   document.body.classList.toggle("lock");
   const { bodyScrollBar } = initCustomScrollbar();
   bodyScrollBar.updatePluginOptions("modal", { open: false });
};

onMounted(() => {
   scrollTop();
});
</script>

<style lang="scss">
.footer {
   &__body {
   }
   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-between;
      align-items: flex-start;
      gap: 90px 40px;
      padding: 59px 0 52px;
      border-top: 1px solid $bg-asphalt;
      border-bottom: 1px solid $bg-asphalt;
      @media screen and (max-width: $xxl) {
         grid-template-columns: 41% 1fr;
      }
      @media screen and (max-width: $xl) {
         grid-template-columns: 1fr;
         gap: 32px;
         justify-content: center;
         padding: 20px 0 32px;
      }
   }
   &__logo {
      width: 364px;
      @media screen and (max-width: $xl) {
         order: 1;
         margin: auto;
      }
      @media screen and (max-width: $md) {
         width: 240px;
      }
   }
   &__contacts {
   }
   &__menu {
   }
   &__social {
   }
   &__bottom {
   }
}
.contacts-footer {
   display: grid;
   justify-content: end;
   gap: 16px;
   font-family: $third-family;
   font-weight: 700;
   color: $bg-white;
   padding-top: 15px;
   @media screen and (max-width: $xl) {
      order: 3;
      justify-items: center;
      justify-content: center;
      padding-top: 0;
   }
   &__phone {
      font-size: 40px;
      line-height: 52px;
      text-transform: uppercase;
      text-align: right;
      background: linear-gradient(to left, $bg-white 55%, $gray 45%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% auto;
      background-position: 45% 0;
      transition: background-position $time;
      @media (any-hover: hover) {
         &:hover {
            background-position: 100% 0;
         }
      }
      @media screen and (max-width: $md) {
         font-size: 24px;
         line-height: 29px;
      }
      @media screen and (max-width: 374.98px) {
         font-size: 20px;
         line-height: 28px;
      }
   }
   &__email {
      font-size: 24px;
      line-height: 22px;
      text-align: right;
      transition: color $time;
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
      @media screen and (max-width: $xl) {
         text-align: center;
      }
      @media screen and (max-width: $md) {
         font-size: 16px;
         line-height: 22px;
      }
   }
}
.menu-footer {
   align-self: center;
   justify-content: center;
   @media screen and (max-width: $xl) {
      order: 2;
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px 52px;
      @media screen and (max-width: $xl) {
         justify-content: center;
      }
      @media screen and (max-width: $md) {
         flex-direction: column;
      }
   }
   &__item {
   }
   &__link {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      transition: color $time;
      @media (any-hover: hover) {
         &:hover {
            color: $state-hover;
         }
      }
   }
}
.social-footer {
   display: grid;
   place-content: end;
   @media screen and (max-width: $xl) {
      order: 4;
      place-content: center;
   }
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
   }
   &__item {
   }
   &__link {
      display: grid;
      place-items: center;
      border: 1px solid $bg-asphalt;
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      isolation: isolate;
      &::before {
         content: "";
         inset: 0;
         position: absolute;
         background: $greenGradient;
         z-index: -1;
         transform: scale(0);
         clip-path: circle(50%);
         transform-origin: center center;
         transition: transform $time;
      }
      @media (any-hover: hover) {
         &:hover {
            &::before {
               transform: scale(1);
            }
            & .social-footer__icon {
               fill: $bg-white;
            }
         }
      }
      @media screen and (max-width: $md) {
         width: 60px;
         height: 60px;
      }
   }
   &__icon {
      width: 28px;
      height: 28px;
      fill: $gray;
      transition: fill $time;
      & path {
         fill: inherit;
         stroke: inherit;
      }
   }
}
.bottom-footer {
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 8px 20px;
   font-size: 14px;
   line-height: 18px;
   color: $gray;
   padding: 40px 0;
   flex-wrap: wrap;
   @media screen and (max-width: $xl) {
      flex-direction: column;
      padding: 20px 0;
   }
   &__item {
      @media screen and (max-width: $xl) {
         &:nth-child(3) {
            order: 1;
         }
      }
   }
   &__link {
      transition: color $time;
      @media (any-hover: hover) {
         &:hover {
            color: $bg-white;
         }
      }
   }
}
.button-up {
   font-weight: 600;
   font-size: 14px;
   line-height: 18px;
   color: $bg-white;
   display: flex;
   align-items: center;
   gap: 8px;
   transition: color $time;
   &__icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      fill: $bg-green-lime;
      transition: transform $time;
      pointer-events: none;
   }
   @media (any-hover: hover) {
      &:hover {
         color: $state-hover;
      }
   }
}
.company {
   display: flex;
   align-items: center;
   gap: 4px;
   &__caption {
      font-size: 14px;
      line-height: 18px;
      color: $gray;
   }
   &__link {
      display: block;
      transition: filter $time;
      @media (any-hover: hover) {
         &:hover {
            filter: opacity(0.5);
         }
      }
   }
}
</style>
