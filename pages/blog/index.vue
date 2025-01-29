<template lang="pug">
	PageContainer(:status.sync="status" :error.sync="error")
		BreadCrumbs(:nav-list="blog.breadcrumbs")
		main.main
			.container
				.main-header
					.main-header__body
						h1.main__title.page-title Блог
				.articles
					.articles__wrapper
						.articles__body
							ArticleCard(:article-list="blog.main.list")
						UiPager(v-if="blog.pagination.totalItems > 1" :pagination.sync="blog.pagination" @changePage="changePage")
						//- vue-awesome-paginate(v-if="blog.pagination.totalItems > 1" :total-items="blog.pagination.totalItems" :items-per-page="blog.pagination.perPage" :max-pages-shown="4" v-model="internalCurrentPage" @click="onClickHandler")
</template>

<script setup>
import initCustomScrollbar from "~/utils/customScrollbar";

const route = useRoute();
const router = useRouter();
const currentPage = ref(route.query.page ? route.query.page : 0);

const internalCurrentPage = computed({
  get() {
    return currentPage.value === 0 ? 1 : currentPage.value + 1; // Возвращаем 1 при currentPage 0
  },
  set(value) {
    currentPage.value = value - 1; // Устанавливаем хранимое значение, вычитая 1
  },
});

const runtimeConfig = useRuntimeConfig();
const {
  data: blog,
  status,
  error,
} = await useAsyncData(
  "blog",
  () =>
    $fetch(`${runtimeConfig.public.apiBase}/blog?_format=json`, {
      query: {
        page: currentPage.value,
      },
    }),
  {
    transform: ({ breadcrumb, data, metatag, meta }) => {
      const metadata = useGenerateMeta(metatag.html_head);
      const { acc: metaData, title } = metadata;
      return {
        breadcrumbs: breadcrumb,
        main: {
          list: data,
        },
        pagination: {
          perPage: meta.per_page,
          count: meta.count,
          totalItems: Math.ceil(meta.count / meta.per_page),
          currPage: +currentPage.value,
        },
        meta: metaData,
        title,
      };
    },
    watch: [currentPage],
  }
);

useHead({
  title: blog.value.title,
  meta: [...blog.value.meta],
});

const changePage = (numPage) => {
  router.push({
    path: route.path,
    query: {
      page: numPage,
    },
  });
  currentPage.value = numPage;
  const { bodyScrollBar } = initCustomScrollbar();
  bodyScrollBar.scrollTo(0, 0, 600);
};
</script>

<style lang="scss">
.articles {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
  }
  &__body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media screen and (max-width: $xxxl) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: $md) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
