<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="fullPage"
    loader="dots"
  >
  </loading>
  <div
    class="position-relative d-flex align-items-center justify-content-center mt-5"
    style="min-height: 300px"
  >
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1647011253759-5f40654d0543?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center center;
        opacity: 0.3;
      "
    ></div>
    <div class="text-center">
      <h2 class="fw-bold">享受每一刻，讓香氛點燃生活。</h2>
    </div>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4
                  class="mb-0 justify-content-center"
                  style="color: #3f705d; text-align: center"
                >
                  所有品項
                </h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled text-center">
                  <li>
                    <RouterLink
                      class="py-2 d-block text-muted text-decoration-none"
                      :to="`/products`"
                    >
                      全部
                    </RouterLink>
                  </li>
                  <li v-for="item in categories" :key="item">
                    <RouterLink
                      class="py-2 d-block text-muted text-decoration-none"
                      style="color: #3f705d"
                      :to="`/products?category=${item}`"
                    >
                      {{ item }}
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6" v-for="item in products" :key="item.id">
            <RouterLink
              :class="{ active: item === item.id }"
              class="text-decoration-none"
              :to="`/product/${item.id}`"
            >
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  :src="item.imageUrl"
                  height="294"
                  class="card-img-top rounded-0 object-fit-cover"
                  :alt="item.title"
                />
                <a href="#" class="text-dark">
                  <i
                    class="far fa-heart position-absolute"
                    style="right: 16px; top: 16px"
                  ></i>
                </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3 fw-bold" style="color: #4e342e">
                    {{ item.title }}
                  </h4>
                  <small
                    ><span class="text-muted">
                      <del>NT${{ item.origin_price }}</del></span
                    ></small
                  >
                  <p class="card-text mb-0">NT${{ item.price }}</p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <!-- 分頁 -->
        <pagination :pages="pages" :get-products="getProducts"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import pagination from "../../components/PaginationComponents.vue";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      categories: ["單方精油", "複方精油", "薰香機", "基底油"],
      pages: {},
      isLoading: false,
      fullPage: true,
    };
  },
  watch: {
    "$route.query": {
      handler() {
        this.getProducts();
      },
      deep: true,
    },
  },
  methods: {
    // 取得產品列表
    getProducts(page = 1) {
      this.isLoading = true;
      const { category = "" } = this.$route.query;
      const url = `${VITE_URL}/api/${VITE_PATH}/products?category=${category}&page=${page}`;
      axios
        .get(url)
        .then((response) => {
          this.products = response.data.products;
          this.pages = response.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
  components: {
    pagination,
    loading,
  },
};
</script>
