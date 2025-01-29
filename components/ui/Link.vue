<template lang="pug">
	NuxtLink(:to="path" :class="classNames").link {{text}}
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true,
  },
  classNames: {
    type: String,
    required: false,
    default: "",
  },
  text: {
    type: String,
    required: false,
    default: "Some text",
  },
});
</script>

<style lang="scss" scoped>
.link {
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
  padding: 10px 20px;
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
  border-radius: 0;
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
