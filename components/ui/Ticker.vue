<template lang="pug">
	.ticker(ref="ticker")
		.ticker-content
			slot
</template>

<script setup>
const ticker = ref("");

const initTicker = () => {
  const tickerContent = ticker.value.querySelector(".ticker-content");
  const tickerWidth = ticker.value.clientWidth;
  const tickerContentWidth = tickerContent.scrollWidth;
  if (!tickerContentWidth <= tickerWidth) {
    const tickerWrapper = document.createElement("div");
    tickerWrapper.classList.add("ticker-wrapper");
    if (tickerContentWidth <= tickerWidth) {
      const countTicker = Math.ceil(tickerWidth / tickerContentWidth);
      for (let i = 0; i < countTicker; i++) {
        tickerWrapper.innerHTML += ticker.value.innerHTML;
      }
    } else {
      tickerContent.style.width = tickerContentWidth + "px";
      tickerWrapper.innerHTML += ticker.value.innerHTML;
    }
    ticker.value.innerHTML = "";
    ticker.value.append(tickerWrapper);
    ticker.value.innerHTML += ticker.value.innerHTML;
  } else {
    ticker.value.classList.add("ticker--center");
  }
};

onMounted(() => {
  initTicker();
});
</script>

<style lang="scss">
.ticker {
  position: relative;
  display: flex;
  gap: var(--gap);
  &-wrapper {
    display: flex;
    gap: var(--gap);
    animation: scroll 60s infinite linear;
    @media screen and (max-width: $xl) {
      gap: 32px;
    }
  }
  &-content {
    width: fit-content;
    white-space: nowrap;
    display: flex;
    gap: var(--gap);
    @media screen and (max-width: $xl) {
      gap: 32px;
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    gap: var(--gap);
    @media screen and (max-width: $xl) {
      gap: 32px;
    }
  }
  &__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll-x var(--duration) linear infinite;
  }
  &__item {
    font-family: $third-family;
    font-weight: 700;
    font-size: 72px;
    line-height: 84px;
    white-space: nowrap;
    flex-shrink: 0;
    padding-right: 60px;
    text-transform: uppercase;
    color: $bg-asphalt;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 12px;
      height: 12px;
      background: currentColor;
      border-radius: 50%;
    }
    @media screen and (max-width: $xl) {
      font-size: 32px;
      line-height: 40px;
      padding-right: 40px;
      &::after {
        width: 8px;
        height: 8px;
      }
    }
  }
}
@keyframes scroll {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-100%, 0);
  }
}
.ticker {
  // @for $i from 1 through 8 {
  //    &__item:nth-of-type(#{$i}) {
  //       --marquee-item-index: #{$i};
  //    }
  // }
  // &__item {
  //    --marquee-item-offset: max(
  //       calc(var(--marquee-item-width) * var(--marquee-items)),
  //       calc(100% + var(--marquee-item-width))
  //    );
  //    --marquee-delay: calc(
  //       var(--marquee-duration) / var(--marquee-items) *
  //          (var(--marquee-items) - var(--marquee-item-index)) * -1
  //    );
  //    position: absolute;
  //    left: 0;
  //    width: var(--marquee-item-width);
  //    inset-inline-start: var(--marquee-item-offset);
  //    transform: translateX(-50%);
  //    animation: go linear var(--marquee-duration) var(--marquee-delay, 0s)
  //       infinite;
  // }
}
</style>
