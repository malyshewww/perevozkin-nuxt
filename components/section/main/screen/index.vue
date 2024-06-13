<template>
   <div class="main-screen">
      <div class="main-screen__body">
         <h1 class="main-screen__title">
            Сервис автомобилей ГАЗ <span>№1&nbsp;в&nbsp;Нижнем Новгороде</span>
         </h1>
         <div class="main-screen__video ibg">
            <video
               :poster="`/images/video-poster.jpg`"
               autoplay="autoplay"
               loop="loop"
               muted>
               <source :src="`/images/video.mp4`" type="video/mp4" />
            </video>
         </div>
         <div class="spin">
            <img src="/images/icons/spin.svg" alt="spin" />
         </div>
      </div>
      <div class="main-parallax">
         <img src="/images/main-screen/parallax.png" alt="parallax" />
      </div>
   </div>
</template>

<style lang="scss">
.main-parallax {
   position: absolute;
   inset: 0;
   height: 100%;
   z-index: -1;
   & img {
      height: 100%;
      width: 100%;
   }
}
.main-screen {
   height: calc(100vh - 108px);
   padding: 0 100px 100px;
   display: flex;
   align-items: flex-end;
   justify-content: flex-end;
   isolation: isolate;
   position: relative;
   &__body {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      width: 100%;
   }
   &__title {
      font-family: $third-family;
      font-weight: 700;
      font-size: 76px;
      line-height: 84px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: $bg-white;
      position: absolute;
      left: 0;
      bottom: 40px;
      z-index: 5;
      max-width: 59%;
      & span {
         color: $bg-green-lime;
      }
   }
   &__video {
      width: 995px;
      padding: 0;
      position: relative;
      height: 420px;
      // padding-bottom: calc(420 / 995 * 100%);
   }
}
.spin {
   width: 120px;
   height: 120px;
   display: grid;
   place-content: center;
   position: absolute;
   left: 50%;
   transform: translate(-50%, 50%);
   &::before {
      content: "";
      position: absolute;
      inset: 0;
      display: block;
      mask-image: url("/images/icons/icon-arrow-spin.svg");
      mask-repeat: no-repeat;
      mask-position: center;
      background-color: $bg-green-lime;
   }
   & img {
      animation: spin 10s linear infinite;
   }
}
</style>
