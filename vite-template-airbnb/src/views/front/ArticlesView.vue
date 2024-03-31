<template>
 <div class="position-relative">
      <div class="position-absolute" style="top:0; bottom:0; left:0; right:0;
       background-image: url(https://i.postimg.cc/FKQNPW7C/store.jpg);
      background-position: center center; opacity: 0.3; background-repeat: no-repeat;
    background-size: 100% auto;"></div>
      <div class="container d-flex flex-column" style="min-height: 50vh;">
      </div>
    </div>
    <div class="container">
    <div class="row justify-content-center">
                <div class="text-center">
                  <table class="table mt-4">
          <thead>
            <tr>
              <th width="80">序列</th>
              <th >標題</th>
              <th >內容描述</th>
              <th>作者</th>
              <th class="d-none d-xl-block">建立時間</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in articles" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td style="text-align: left;cursor: pointer;"><a class="text-decoration-none"
                 @click.prevent="getArticle(item.id)">{{ item.title }}</a></td>
              <td style="text-align: left;">
                {{ item.description }}</td>
                <td>{{ item.author }}</td>
              <td class="d-none d-xl-block">{{ item.create_at }}</td>
            </tr>
          </tbody>
        </table>
        <!-- 分頁 -->
        <pagination
        :pages="pages"
        :get-article="getArticle"
        ></pagination>
      </div>
                </div>
              </div>
      <div class="row justify-content-center py-5">
       <div class="col-md-6">
         <h3 class="text-center" style="color: #4e342e;">{{ article.title }}</h3>
         <small><p class="mt-5" style="text-align: right;">{{ article.author }}</p></small>
         <small><p style="text-align: right;"> {{ article.create_at }} </p></small>
         <img :src="article.image">
                  <p class="my-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {{ article.content }}</p>
                </div>
              </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      article: [],
    };
  },
  methods: {
    // 取得文章列表
    getArticles(page = 1) { // 參數預設值
      const url = `${VITE_URL}/api/${VITE_PATH}/articles?page=${page}`;
      axios.get(url)
        .then((response) => {
          this.articles = response.data.articles;
          this.pages = response.data.pagination;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    getArticle(id) {
      const url = `${VITE_URL}/api/${VITE_PATH}/article/${id}`;
      console.log(url);
      axios.get(url)
        .then((response) => {
          this.article = response.data.article;
          console.log(response);
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
