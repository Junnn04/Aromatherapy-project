<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="fullPage"
    loader="dots"
  >
  </loading>
  <div class="container pt-7">
    <div class="mt-3">
      <h3 class="mt-3 mb-4">購物車</h3>
      <div class="row" v-if="this.carts && this.carts.length > 0">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="border-0 ps-0 text-center">品項</th>
                <th scope="col" class="border-0 text-center">數量</th>
                <th scope="col" class="border-0 text-center">金額</th>
                <th scope="col" class="border-0"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-bottom border-top"
                v-for="item in this.carts"
                :key="item.id"
              >
                <th
                  scope="row"
                  class="border-0 px-0 font-weight-normal py-4 d-flex align-items-center"
                >
                  <img
                    class="d-md-block d-none"
                    :src="item.product.imageUrl"
                    :alt="item.product.title"
                    style="width: 72px; height: 72px; object-fit: cover"
                  />
                  <p class="mb-0 fw-bold ms-3">{{ item.product.title }}</p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px">
                  <div class="input-group">
                    <div class="input-group-prepend text-center">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon1"
                        @click="
                          item.qty--;
                          changeCartQty(item, item.qty);
                        "
                        :disabled="item.qty === 1"
                      >
                        -
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="number"
                      class="form-control border-0 text-center my-auto shadow-none"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      min="1"
                      v-model="item.qty"
                      readonly
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon2"
                        @click="
                          item.qty++;
                          changeCartQty(item, item.qty);
                        "
                      >
                        +
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto text-center">NT${{ item.total }}</p>
                </td>
                <td class="border-0 align-middle">
                  <button
                    class="btn btn-outline-dark border-0 py-2"
                    type="button"
                    id="button-addon1"
                    @click="removeCartItem(item.id)"
                  >
                    x</button
                  ><i class="fas fa-times"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none"
              placeholder="優惠碼"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="coupon_code"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0"
                type="button"
                id="button-addon2"
                @click="addCouponCode"
              >
                <i class="bi bi-send-fill"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">訂單明細</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                    訂單金額
                  </th>
                  <td class="text-end border-0 px-0 pt-4">
                    NT${{ this.total }}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    折扣
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">
                    {{ Math.round(this.final_total - this.total) }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總額</p>
              <p class="mb-0 h4 fw-bold">
                NT${{ Math.round(this.final_total) }}
              </p>
            </div>
            <RouterLink
              class="btn btn-dark w-100 mt-4 border-0"
              to="/checkout"
              style="background-color: #7fa185"
            >
              去買單</RouterLink
            >
          </div>
        </div>
      </div>
      <div v-else>
        <div class="text-center py-7">
          <i class="bi bi-exclamation-octagon" style="font-size: 5rem"></i>
          <p>購物車內無商品</p>
          <RouterLink
            class="btn btn-secondary mt-4 border-0"
            to="/Products"
            style="background-color: #7fa185"
          >
            前往挑選商品</RouterLink
          >
        </div>
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
                      <img
                        :src="item.imageUrl"
                        class="card-img-top rounded-0"
                      />
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
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cartStore";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      coupon_code: "",
      isLoading: false,
      fullPage: true,
    };
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
    ...mapState(cartStore, ["final_total"]),
    ...mapState(cartStore, ["total"]),
  },
  methods: {
    // 取得購物車列表
    ...mapActions(cartStore, ["getCart"]),
    // 調整商品數量
    changeCartQty(item, qty = 1) {
      const order = {
        product_id: item.product_id,
        qty,
      };
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`;
      axios
        .put(url, { data: order })
        .then(() => {
          // this.status.cartQtyLoading = item.id;
          this.getCart();
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    ...mapActions(cartStore, ["removeCartItem"]),
    addCouponCode() {
      const url = `${VITE_URL}/api/${VITE_PATH}/coupon`;
      const useCoupon = {
        code: this.coupon_code,
      };
      axios
        .post(url, { data: useCoupon })
        .then((response) => {
          Swal.fire({
            title: response.data.message,
            confirmButtonColor: "#7fa185",
          });
          this.getCart();
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            confirmButtonColor: "#7fa185",
          });
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
          Swal.fire({
            title: err.response.data.message,
            confirmButtonColor: "#7fa185",
          });
        });
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
  components: {
    Swiper,
    SwiperSlide,
    loading,
  },
};
</script>
