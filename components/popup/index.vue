<template>
   <div class="popup" :class="{ active: isActive }" @click="closePopup">
      <div class="popup__wrapper">
         <div class="popup__content" @click.stop>
            <button class="popup__close" @click="closePopup">
               <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="icon-close">
                  <g clip-path="url(#clip0_452_876)">
                     <path
                        d="M13.379 12.0001L19.7606 5.61853L18.3816 4.23953L12 10.6211L5.61841 4.2395L4.2394 5.61851L10.621 12.0001L4.23948 18.3817L5.61848 19.7607L12 13.3791L18.3815 19.7606L19.7605 18.3816L13.379 12.0001Z"></path>
                  </g>
                  <defs>
                     <clipPath id="clip0_452_876">
                        <rect width="24" height="24" fill="white"></rect>
                     </clipPath>
                  </defs>
               </svg>
            </button>
            <slot />
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps(["isActive"]);
const emit = defineEmits(["closePopup"]);
const closePopup = () => {
   emit("closePopup");
};
</script>

<style lang="scss">
.popup {
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100dvh;
   background: rgba($bg-anthracite, 0.8);
   opacity: 0;
   visibility: hidden;
   overflow-y: auto;
   overflow-x: hidden;
   transition: all 0.3s ease 0s;
   z-index: 30;
   pointer-events: none;
   &::-webkit-scrollbar {
      background: none;
   }
   &::-webkit-scrollbar-thumb {
      background: none;
   }
   &.active {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      & .popup__content {
         opacity: 1;
      }
   }
   &__wrapper {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 16px;
      transition: all 0.5s ease 0s;
   }
   &__content {
      border-radius: 0px;
      max-width: 1140px;
      background-color: $graphite;
      width: 100%;
      padding: 80px 100px;
      //   box-shadow: 0 0 50px 0 rgba(16, 19, 22, 0.8);
      position: relative;
      @media screen and (max-width: $md) {
         padding: 30px 15px;
         border-radius: 16px;
      }
      opacity: 0;
      // transform: perspective(600px) translate(0px, -100%) rotateX(45deg);
      transition: opacity $time;
   }
   &__close {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(32px * 3);
      height: calc(32px * 3);
      background-color: transparent;
      & svg {
         width: 32px;
         height: 32px;
         fill: $gray;
         transition: fill $time;
      }
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
            & svg {
               fill: $bg-white;
            }
         }
      }
   }
   &__header {
      margin-bottom: 32px;
      @media screen and (max-width: $md) {
         margin-bottom: 20px;
      }
   }
   &__title {
      font-family: $third-family;
      font-weight: 700;
      font-size: 40px;
      line-height: 52px;
      text-transform: uppercase;
      color: $bg-white;
      max-width: 80%;
   }
}
</style>
