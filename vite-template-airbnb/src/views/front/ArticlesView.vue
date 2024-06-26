<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="fullPage"
    loader="dots"
  >
  </loading>
  <div class="position-relative">
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://i.postimg.cc/FKQNPW7C/store.jpg);
        background-position: center center;
        opacity: 0.3;
        background-repeat: no-repeat;
        background-size: 100% auto;
      "
    ></div>
    <div class="container d-flex flex-column" style="min-height: 50vh"></div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="text-center col-md-9">
        <div class="mt-4">
          <div class="row mb-3 link" v-for="item in articles" :key="item.id">
            <a
              style="color: #4e342e; cursor: pointer"
              class="text-decoration-none h2 d-block text-start"
              @click.prevent="getArticle(item.id)"
            >
              <div class="row">
                <div class="col-md-3">
                  <img
                    :src="item.imageUrl"
                    :alt="item.title"
                    style="max-width: 100%"
                  />
                </div>
                <div class="col-md-9 pt-5 align-items-center">
                  {{ item.title }}
                  <p class="h6 pt-3">作者 / {{ item.author }}</p>
                </div>
              </div></a
            >
          </div>
        </div>
        <!-- 分頁 -->
        <pagination :pages="pages" :get-article="getArticle"></pagination>
      </div>
    </div>
    <div class="row justify-content-center pt-5" ref="content">
      <div class="col-md-8" v-if="Object.keys(article).length > 0">
        <strong
          ><h2 class="text-center pb-3 border-bottom" style="color: #4e342e">
            {{ article.title }}
          </h2></strong
        >
        <img
          class="img-fluid img-thumbnail mx-auto d-block w-80 mt-3"
          style="max-height: 30%"
          :src="article.imageUrl"
          :alt="article.title"
        />
        <small
          ><p class="mt-5 text-end">作者 / {{ article.author }}</p></small
        >
        <small
          ><p class="text-end">{{ formatDate(article.create_at) }}</p></small
        >
        <img :src="article.image" />
        <p v-html="article.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import pagination from "../../components/ArticlesPagination.vue";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      article: [],
      pages: {},
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    // 取得文章列表
    getArticles(page = 1) {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/articles?page=${page}`;
      axios
        .get(url)
        .then((response) => {
          this.articles = response.data.articles;
          this.pages = response.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
          this.isLoading = false;
        });
    },
    getArticle(id) {
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/article/${id}`;
      axios
        .get(url)
        .then((response) => {
          this.article = response.data.article;
          this.isLoading = false;
          // 获取文章内容元素的位置信息
          const contentElement = this.$refs.content;
          const contentOffsetTop = contentElement.offsetTop;

          // 使用原生JavaScript实现滚动到指定位置
          window.scrollTo({
            top: contentOffsetTop,
            behavior: "smooth", // 平滑滚动
          });
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
          this.isLoading = false;
        });
    },
    formatDate(timestamp) {
      // 創建日期對象
      const date = new Date(timestamp * 1000);
      // 返回格式化後的日期字符串，根據需要使用不同的日期格式
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    },
  },
  mounted() {
    this.getArticles();
  },
  components: {
    loading,
    pagination,
  },
};
</script>

<style>
/* 自定义Hover效果 */
.link:hover {
  background: #cfcdcd;
}
</style>
