<template>
  <div class="position-relative">
    <div
      class="position-absolute z-n1"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://th.bing.com/th/id/OIG1.y8qAI6TiPfngjMh1XOv5?w=1024&h=1024&rs=1&pid=ImgDetMain);
        background-position: center center;
        opacity: 0.3;
      "
    ></div>
    <div class="container d-flex flex-column" style="min-height: 80vh">
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2>從香氛開始，創造美好生活。</h2>
          <p class="text-muted mb-0">
            每一種香氣都是一段故事的開始，我們追求的不僅僅是生活，更是一種與自我對話的方式。
          </p>
          <button type="button" class="btn btn-dark rounded-0 mt-6 z-3">
            <RouterLink
              class="text-decoration-none"
              style="color: #7fa185"
              to="/products"
              >走進香氛</RouterLink
            >
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mt-md-4">
        <RouterLink
          class="text-decoration-none"
          to="/products?category=單方精油"
        >
          <div class="card border-0 mb-4">
            <img
              src="../../assets/img/essential.jpg"
              class="card-img-top rounded-0"
              alt="單方精油"
            />
            <div class="card-body text-center">
              <h4>單方精油</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  單方精油為純粹的植物提取物，保留植物的天然特性和功效。
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-md-4 mt-md-4">
        <RouterLink
          class="text-decoration-none"
          to="/products?category=複方精油"
        >
          <div class="card border-0 mb-4">
            <img
              src="../../assets/img/essential oil blend.jpg"
              class="card-img-top rounded-0"
              alt="複方精油"
            />
            <div class="card-body text-center">
              <h4>複方精油</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  由多種單方精油混合而成。結合不同精油的特性和功效，創造出不同的香氣和功效。
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-md-4 mt-md-4">
        <RouterLink class="text-decoration-none" to="/products?category=薰香機">
          <div class="card border-0 mb-4">
            <img
              src="../../assets/img/Diffuser.jpg"
              class="card-img-top rounded-0"
              alt="精油薰香機"
            />
            <div class="card-body text-center">
              <h4>精油薰香機</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  將精油擴散至空氣中，為室內帶來愉悅香氣，改善室內空氣品質，提升空間的氛圍，放鬆身心。
                </p>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="bg-light">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>香氛之旅</h3>
                <p class="my-5">
                  我們相信每一種香氣都擁有獨特的力量，能夠觸動人心，療癒靈魂。我們的香氛不僅是一種感官享受，
                  更是一種情感表達，一種生活態度的展現。
                </p>
                <p><small>—Fragrance Journey—</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <RouterLink class="text-decoration-none" to="/about">
      <div class="row">
        <div class="col-md-6">
          <img src="../../assets/img/store2.jpg" alt="店面" class="img-fluid" />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4 pb-4" style="color: #4e342e">品牌故事</h4>
          <p class="text-muted">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            我們的故事源自於對大自然的尊重與感恩，我們從每一滴花朵的芬芳中汲取靈感
            ，從每一片樹葉的輕柔中尋找力量。
          </p>
          <p class="text-muted">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            我們的產品精心挑選來自世界各地的天然植物提取物，保證給您最純淨、最自然的呵護。
          </p>
        </div>
      </div>
    </RouterLink>
    <RouterLink class="text-decoration-none" to="/about">
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img
            src="../../assets/img/Process.jpg"
            alt="工藝"
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4 pb-4" style="color: #4e342e">極致工藝</h4>
          <p class="text-muted">
            從植物的選擇和種植到萃取、純化和儲存等的每個細節和步驟都進行精心控制和優化，以確保最高質量和純度的精油。
          </p>
        </div>
      </div>
    </RouterLink>
    <div class="my-5">
      <h3 class="fw-bold">人氣商品</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
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
                      <p class="text-muted mb-0">
                        <small
                          ><span class="text-muted">
                            <del>NT${{ item.origin_price }}</del></span
                          ></small
                        >
                      </p>
                      <p class="card-text text-primary-emphasis">
                        NT${{ item.price }}
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
    };
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  watch: {
    "$route.params": {
      handler() {
        this.getProduct();
      },
      deep: true,
    },
  },
  methods: {
    // swiper_取得產品列表
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
  },
  mounted() {
    this.getProducts();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
