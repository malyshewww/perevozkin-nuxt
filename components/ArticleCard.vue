<template>
   <article class="article" v-for="article in articleList">
      <div class="article__image ibg">
         <img
            :src="`/images/articles/${article.img}.jpg`"
            :alt="article.title" />
      </div>
      <div class="article__body">
         <h2 class="article__title">
            {{ article.title }}
         </h2>
         <div class="article__description">
            <p>{{ article.description }}</p>
         </div>
         <NuxtLink :to="`/blog/${article.id}`" class="article__link"
            >Подробнее</NuxtLink
         >
      </div>
   </article>
</template>

<script setup>
const props = defineProps(["articleList"]);
</script>

<style lang="scss">
.article {
   border: 1px solid $bg-asphalt;
   padding: 28px 28px 40px;
   background-color: transparent;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 28px;
   @include transition(background-color $time);
   @media (any-hover: hover) {
      &:hover {
         cursor: pointer;
         background-color: $graphite;
         & .article__link {
            color: $state-hover;
         }
      }
   }
   @media screen and (max-width: $xl) {
      gap: 20px;
      padding: 20px 15px 20px;
   }
   &__image {
      padding-bottom: calc(320 / 504 * 100%);
      align-self: stretch;
   }
   &__body {
      display: grid;
      justify-content: start;
      gap: 12px;
   }
   &__title {
      font-family: $third-family;
      font-weight: 700;
      font-size: 22px;
      line-height: 28px;
      text-transform: uppercase;
      color: $bg-white;
      max-width: 90%;
      hyphens: none;
      @media screen and (max-width: $md) {
         font-size: 20px;
         line-height: 24px;
      }
   }
   &__description {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: $gray;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      & p {
         display: inline;
      }
   }
   &__link {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: $bg-white;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      @include transition(color $time);
      margin-top: 18px;
      justify-self: start;
      &::after {
         content: "";
         display: block;
         width: 20px;
         height: 20px;
         mask-image: url("/images/icons/rotate-arrow-down.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: $bg-green-lime;
         mask-size: 20px 20px;
      }
   }
}
</style>
