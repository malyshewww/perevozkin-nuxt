<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		BreadCrumbs(:nav-list="blogDetail.breadcrumbs")
		main.main
			.article-page
				.container
					.article-page__wrapper
						SectionArticleContent(:content="blogDetail.main.content")
						SectionArticleForm(:title="blogDetail.title")
	div(itemscope itemtype="https://schema.org/Article" style="display: none;")
		meta(itemscope itemprop="mainEntityOfPage" itemType="https://schema.org/WebPage" itemid="https://perevozov-service.ru/blog/obsluzhivanie-i-diagnostika-tormoznoy-sistemy")
		link(itemprop="image" :href="blogDetail.main.content.field_image[0].raw")
		meta(itemprop="headline" :content="blogDetail.main.content.title")
		meta(itemprop="description" :content="blogDetail.descr")
		span(itemprop="datePublished" :content="blogDetail.main.content.created[0].date + '+03:00'") {{ blogDetail.main.content.created[0].date }}+03:00
		span(itemprop="author" itemscope itemtype="https://schema.org/Person")
			span(itemprop="name") Перевозов сервис
</template>

<script setup>
useHead({
  title: "Карточка статьи блога",
  bodyAttrs: {
    class: "page--article",
  },
});

const { id } = useRoute().params;
const runtimeConfig = useRuntimeConfig();

const {
  data: blogDetail,
  status,
  error,
} = await useAsyncData("blogDetail", () => $fetch(`${runtimeConfig.public.apiBase}/blog/${id}?_format=json`, {}), {
  transform: (res) => {
    const { breadcrumb, data, metatag } = res;
    const metadata = useGenerateMeta(metatag.html_head);
    const { acc: meta, title, descr } = metadata;
    return {
      breadcrumbs: breadcrumb,
      title: data.title,
      main: {
        content: data,
      },
      meta,
      title,
      descr,
    };
  },
});

useHead({
  title: blogDetail.value.title,
  meta: [...blogDetail.value.meta],
});
console.log(blogDetail.value);
</script>

<style lang="scss">
.page--article {
  & .breadcrumbs {
    &__nav {
      padding-bottom: 36px;
      border-bottom: 1px solid $bg-asphalt;
      @media screen and (max-width: $xl) {
        padding-bottom: 24px;
      }
    }
  }
  & .form {
    &__bottom {
      margin-top: 24px;
    }
  }
}
.article-page {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 560px;
    gap: 40px;
    justify-content: space-between;
    align-items: start;
    padding-top: 52px;
    @media screen and (max-width: $xxl) {
      grid-template-columns: 1fr 400px;
    }
    @media screen and (max-width: $xl) {
      grid-template-columns: 1fr;
      padding-top: 40px;
    }
  }
}
</style>
