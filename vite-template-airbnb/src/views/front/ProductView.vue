<template>
  <div>
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :is-full-page="fullPage"
      loader="dots"
    >
    </loading>
  </div>
  <div class="container pt-7">
    <div class="row align-items-center">
      <div class="col-md-6">
        <swiper
          :navigation="true"
          :modules="modules"
          class="mySwiper"
          style="max-height: 500px"
        >
          <swiper-slide>
            <img
              :src="product.imageUrl"
              class="d-block w-100"
              :alt="product.title"
          /></swiper-slide>
          <swiper-slide v-for="item in product.imagesUrl" :key="item.id"
            ><img
              :src="item"
              class="d-block w-100"
              style="max-height: 475px; object-fit: cover"
              :alt="product.title"
          /></swiper-slide>
        </swiper>
        <div class="row pt-3">
          <div
            class="col-md-2 col-4"
            v-for="item in product.imagesUrl"
            :key="item.id"
          >
            <img :src="item" style="max-width: 100%" />
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
    <div class="mt-5">
      <h3>｜保存說明</h3>
      <p class="mt-3">
        建議將產品存放在陰涼乾燥的地方，避免陽光直射。雖然未開封的保存期限標示為八個月，但開封後的保存時間會受到儲存環境的影響，
        包括開封頻率、光照、溫度和潮濕度等因素。為確保最佳品質，建議在開封後盡快使用產品，並根據個人儲存環境的情況，合理評估使用期限。
      </p>
      <h3 class="mt-5">｜注意事項</h3>
      <p class="mt-3">
        本產品為純精油，可直接添加至擴香器中或與酒精混合後用於空間擴香。若您選擇自行混合精油和植物油，建議首次使用時以較低濃度進行混合，
        並在手肘內側皮膚上塗抹適量，觀察是否有過敏反應（如紅腫、癢等）。如未出現過敏反應，可逐漸增加使用濃度和頻率。
      </p>
      <p class="mt-3">
        由於每個人對天然物質的反應各異，若出現不適或過敏反應，應立即停止使用。如果皮膚受到刺激，可使用大量植物油反覆塗抹以降低精油濃度。如有需要，請咨詢專業芳療人員或尋求醫療協助。
      </p>
      <p class="mt-3">
        由於植物受到環境條件的影響，每批產品的氣味、顏色、質地等感官屬性可能會有所不同。這是正常現象，請您在購買前審慎考慮，感謝您的理解與支持！
      </p>
    </div>
    <div class="my-5">
      <h3 class="fw-bold">其他商品</h3>
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
  watch: {
    "$route.params": {
      handler() {
        this.getProduct();
      },
      deep: true,
    },
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
