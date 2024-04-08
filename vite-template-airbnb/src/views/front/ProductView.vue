<template>
  <div>
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      loader="dots"
    >
    </loading>
  </div>
  <div class="container pt-7">
    <div class="row align-items-center">
      <div class="col-md-6">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide>
            <img
              :src="product.imageUrl"
              class="d-block w-100"
              :alt="product.title"
          /></swiper-slide>
          <swiper-slide v-for="item in product.imagesUrl" :key="item.id"
            ><img :src="item" class="d-block w-100" :alt="product.title"
          /></swiper-slide>
        </swiper>
        <div class="row pt-3">
          <div
            class="col-md-2"
            v-for="item in product.imagesUrl"
            :key="item.id"
          >
            <img :src="item" width="100px" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
              <RouterLink class="text-muted" to="/products">產品</RouterLink>
            </li>
            <li class="breadcrumb-item">{{ product.title }}</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mt-4">{{ product.description }}</p>
        <p class="text-muted">{{ product.content }}</p>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <select name="" id="" class="form-select" v-model="qty">
                <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <a
              class="text-nowrap btn btn-dark w-100 py-2 border-0"
              style="background-color: #7fa185"
              @click.prevent="addToCart(product.id, qty)"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="my-5">
      <h3 class="fw-bold">其他商品</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <swiper
            ref="{swiperRef}"
            :slidesPerView="3"
            :centeredSlides="true"
            :spaceBetween="30"
            :pagination="{
              type: 'fraction',
            }"
            :navigation="true"
            :modules="modules"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <RouterLink
                class="text-decoration-none"
                :to="`/product/${item.id}`"
              >
                <div class="swiper-slide">
                  <div
                    class="card border-0 mb-4 position-relative position-relative"
                  >
                    <img :src="item.imageUrl" class="card-img-top rounded-0" />
                    <a href="#" class="text-dark"> </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3 fw-bold" style="color: #4e342e">
                        {{ item.title }}
                      </h4>
                      <p class="card-text mb-0 text-primary-emphasis">
                        NT${{ item.price }}
                      </p>
                      <p class="text-muted">
                        <span class="text-muted">
                          <del>NT${{ item.origin_price }}</del></span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </RouterLink></swiper-slide
            >
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import { mapActions } from "pinia";
import cartStore from "@/stores/cartStore";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      product: {
        imagesUrl: [],
      },
      qty: 1,
      isLoading: false,
      fullPage: true,
    };
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    // 取得產品
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then((response) => {
          this.product = response.data.product;
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
          this.isLoading = false;
        });
    }, // swiper_取得產品列表
    getProducts() {
      const url = `${VITE_URL}/api/${VITE_PATH}/products`;
      axios
        .get(url)
        .then((response) => {
          this.products = response.data.products;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    ...mapActions(cartStore, ["addToCart"]),
    // addToCart(id) {
    //   const order = {
    //     product_id: id,
    //     qty: 1,
    //   };
    //   axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: order })
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((err) => {
    //       alert(err.message);
    //     });
    // },
  },
  mounted() {
    this.getProduct();
    this.getProducts();
  },
  components: {
    Swiper,
    SwiperSlide,
    loading,
  },
};
</script>
