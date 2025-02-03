<template lang="pug">
	.loading(v-if="isLoading")
		.loading__image
			img(:src="setPreloaderPath()" alt="прелодер")
			//- video
			//- 	source(:src="`/images/preloader.mp4`" type="video/mp4")
			//- 	source(:src="`/images/preloader.webm`" type="video/webm")
			//- 	p
			//- 		| Ваш браузер не поддерживает HTML5 видео. Вот
			//- 		| #[a(:href="`/images/preloader.mp4`") ссылка на видео] взамен.
</template>

<script setup>
const props = defineProps(["isLoading"]);

const setPreloaderPath = () => {
  if (props.isLoading) {
    return "/images/preloader2-optimize.gif";
  } else {
    return "";
  }
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 20;
  inset: 0;
  display: grid;
  place-items: center;
  background-color: black;
  pointer-events: none;
  animation: bg 2.5s linear 1.08s forwards;
  // &::before {
  //    content: "";
  //    position: absolute;
  //    top: 0;
  //    left: 0;
  //    width: 100%;
  //    height: 100%;
  //    background-image: url("/images/preloader2.gif");
  //    background-size: 50% auto;
  //    background-position: center;
  //    background-repeat: no-repeat;
  //    animation: opacityZero 2.2s linear running;
  // }
  &__image {
    width: 50%;
    position: absolute;
    display: grid;
    place-items: center;
    top: 0;
    left: 0;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    & img,
    & video {
      animation: opacityZero 2.15s both;
    }
  }
}
@keyframes bg {
  50% {
    background-color: $bg-asphalt;
    opacity: 1;
  }
  100% {
    background-color: $bg-asphalt;
    opacity: 0;
  }
}
@keyframes opacityZero {
  65% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
