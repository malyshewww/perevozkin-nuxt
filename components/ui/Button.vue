<template>
   <button
      v-if="btnType == 'button'"
      type="button"
      :class="[classNames, 'btn']"
      @click="openPopup">
      {{ btnTitle }}
   </button>
   <input v-else type="submit" :class="['btn', classNames]" :value="btnTitle" />
</template>

<script setup>
defineProps({
   classNames: {
      type: String,
      required: true,
   },
   btnType: {
      type: String,
      required: true,
   },
   btnTitle: {
      type: String,
      required: true,
   },
});
const emit = defineEmits(["openPopup"]);
const openPopup = () => {
   emit("openPopup");
};
</script>

<style lang="scss">
.btn {
   min-height: 48px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 600;
   font-size: 16px;
   line-height: 22px;
   color: $bg-anthracite;
   background-color: $bg-green-lime;
   position: relative;
   transition: background-color $time;
   clip-path: polygon(
      100% 0,
      calc(100% - 12px) 0%,
      100% 12px,
      100% 100%,
      100% 100%,
      15% 100%,
      12px 100%,
      0 calc(100% - 12px),
      0 0,
      0 0
   );
   @media (any-hover: hover) {
      &:hover {
         cursor: pointer;
         background-color: $state-hover;
      }
   }
   &:active {
      background-color: $state-pressed;
   }
   &:disabled,
   &.disabled {
      background-color: $bg-asphalt;
      pointer-events: none;
      color: $dark-gray;
   }
}
</style>
