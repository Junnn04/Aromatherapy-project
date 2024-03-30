<template>
  <div class="container pt-5">
  <div class="row align-items-center">
        <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="product.imageUrl" class="d-block w-100" alt="...">
              </div>
              <!-- <div class="carousel-item" v-for="item in product" :key="item.id">
                <img :src="item.imagesUrl" class="d-block w-100" alt="...">
              </div> -->
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls"
             role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls"
             role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
          </div>
          <div v-for="item in product" :key="item.id">
                <img :src="item.imagesUrl" class="w-100">
              </div>
        </div>
        <div class="col-md-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" to="/">
                首頁 </RouterLink></li>
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" to="/products">上一頁</RouterLink></li>
            </ol>
          </nav>
          <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
          <p class="mt-4">{{ product.description }}</p>
          <p class="text-muted">{{ product.content }}</p>
          <p class="mb-0 text-muted text-end"><del>NT${{ product.origin_price }}</del></p>
          <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <!-- <input type="text" class="form-control border-0 text-center
                 my-auto shadow-none bg-light" placeholder=""
                  aria-label="Example text with button addon"
                   aria-describedby="button-addon1" value="1"> -->
                <select name="" id="" class="form-select" v-modol="qty">
                  <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <a class="text-nowrap btn btn-dark w-100 py-2" style="background-color: #7FA185;"
               @click.prevent="addToCart(product.id, qty)">加入購物車</a>
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
    :modules="modules" >
  <swiper-slide  v-for="item in products" :key="item.id">
    <div class="swiper-slide">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <RouterLink class="text-decoration-none" :to="`/product/${item.id}`">
                    <img :src="item.imageUrl" class="card-img-top rounded-0">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3 fw-bold" style="color: #4e342e;">
                    {{ item.title }}</h4>
                      <p class="card-text mb-0 text-primary-emphasis">NT${{ item.price }}</p>
                      <p class="text-muted"><span class="text-muted ">
                        <del>NT${{ item.origin_price }}</del></span></p>
                    </div>
                  </RouterLink>
                  </div>
                </div></swiper-slide>
               </swiper>
              </div>
                  </div>
                </div>
              </div>
</template>

<script>
import axios from 'axios';

import { mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      product: {
        imagesUrl: [],
      },
      qty: 1,
    };
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    // 取得產品列表
    getProduct() {
      const { id } = this.$route.params;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then((response) => {
          console.log(response);
          this.product = response.data.product;
        })
        .catch((err) => {
          alert(err.message);
        });
    }, // swiper_取得產品列表
    getProducts() {
      const url = `${VITE_URL}/api/${VITE_PATH}/products`;
      console.log(url);
      axios.get(url)
        .then((response) => {
          console.log(response);
          this.products = response.data.products;
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    ...mapActions(cartStore, ['addToCart']),
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
  },
};
</script>
