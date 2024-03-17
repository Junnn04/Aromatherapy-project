<template>
      <div class="container pt-7">
        <div class="mt-3">
          <h3 class="mt-3 mb-4">購物車</h3>
          <div class="row">
            <div class="col-md-8">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="border-0 ps-0">品項</th>
                    <th scope="col" class="border-0">數量</th>
                    <th scope="col" class="border-0">金額</th>
                    <th scope="col" class="border-0"></th>
                  </tr>
                </thead>
                <tbody v-if="carts.carts">
                  <tr class="border-bottom border-top" v-for=" item in carts.carts" :key="item.id">
                    <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                      <img :src="item.product.imageUrl" alt="" style="width: 72px; height: 72px;
                       object-fit: cover;">
                      <p class="mb-0 fw-bold ms-3 d-inline-block">{{ item.product.title }}</p>
                    </th>
                    <td class="border-0 align-middle" style="max-width: 160px;">
                      <div class="input-group pe-5">
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-dark border-0 py-2" type="button"
                           id="button-addon1" @click="item.qty-- ;changeCartQty(item, item.qty)"
                            :disabled="item.qty === 1">-
                            <i class="fas fa-minus"></i>
                          </button>
                        </div>
                        <input type="number" class="form-control border-0 text-center my-auto
                         shadow-none" placeholder="" aria-label="Example text with button addon"
                          aria-describedby="button-addon1" min="1" v-model="item.qty" readonly>
                        <div class="input-group-append">
                          <button class="btn btn-outline-dark border-0 py-2" type="button"
                           id="button-addon2" @click="item.qty++ ;changeCartQty(item, item.qty)">+
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td class="border-0 align-middle"><p class="mb-0 ms-auto">
                      NT${{ item.total }}</p></td>
                    <td class="border-0 align-middle">
                      <button class="btn btn-outline-dark border-0 py-2" type="button"
                           id="button-addon1" @click="removeCartItem(item.id)">x
                          </button><i class="fas fa-times"></i></td>
                  </tr>
                </tbody>
              </table>
              <div class="input-group w-50 mb-3">
                <input type="text" class="form-control rounded-0 border-bottom border-top-0
                 border-start-0 border-end-0 shadow-none" placeholder="Coupon Code"
                  aria-label="Recipient's username" aria-describedby="button-addon2"
                   v-model="coupon_code">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-bottom border-top-0 border-start-0
                   border-end-0 rounded-0" type="button" id="button-addon2"
                   @click="addCouponCode">
                   <i class="bi bi-send-fill"></i></button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="border p-4 mb-4">
                <h4 class="fw-bold mb-4">訂單明細</h4>
                <table class="table text-muted border-bottom">
                  <tbody>
                    <tr>
                      <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">訂單金額</th>
                      <td class="text-end border-0 px-0 pt-4">NT${{ carts.total }}</td>
                    </tr>
                    <tr>
                      <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">
                        折扣</th>
                      <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-between mt-4">
                  <p class="mb-0 h4 fw-bold">總額</p>
                  <p class="mb-0 h4 fw-bold">NT${{ carts.final_total }}</p>
                </div>
                <RouterLink class="btn btn-dark w-100 mt-4" to="/checkout">
                  去買單</RouterLink>
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
  <swiper-slide>
    <div class="swiper-slide" v-for="item in products" :key="item.id">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <img :src="item.imageUrl" class="card-img-top rounded-0" style="width: 300px">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3"><RouterLink :to="`/product/${item.id}`">
                    {{ item.title }}</RouterLink></h4>
                      <p class="card-text mb-0">NT${{ item.price }} <span class="text-muted ">
                        <del>NT${{ item.origin_price }}</del></span></p>
                      <p class="text-muted mt-3"></p>
                    </div>
                  </div>
                </div></swiper-slide>
                <swiper-slide>
    <div class="swiper-slide">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                      <p class="card-text mb-0">NT$1,080 <span class="text-muted ">
                        <del>NT$1,200</del></span></p>
                      <p class="text-muted mt-3"></p>
                    </div>
                  </div>
                </div></swiper-slide>
                <swiper-slide>
    <div class="swiper-slide">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                      <p class="card-text mb-0">NT$1,080 <span class="text-muted ">
                        <del>NT$1,200</del></span></p>
                      <p class="text-muted mt-3"></p>
                    </div>
                  </div>
                </div></swiper-slide>
                <swiper-slide>
    <div class="swiper-slide">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                      <p class="card-text mb-0">NT$1,080 <span class="text-muted ">
                        <del>NT$1,200</del></span></p>
                      <p class="text-muted mt-3"></p>
                    </div>
                  </div>
                </div></swiper-slide>
               </swiper>
                <!-- <div class="swiper-slide">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                      <p class="card-text mb-0">NT$1,080 <span class="text-muted ">
                        <del>NT$1,200</del></span></p>
                      <p class="text-muted mt-3"></p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                      <p class="card-text mb-0">NT$1,080 <span class="text-muted ">
                        <del>NT$1,200</del></span></p>
                      <p class="text-muted mt-3"></p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                      <p class="card-text mb-0">NT$1,080 <span class="text-muted ">
                        <del>NT$1,200</del></span></p>
                      <p class="text-muted mt-3"></p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                      <p class="card-text mb-0">NT$1,080 <span class="text-muted ">
                        <del>NT$1,200</del></span></p>
                      <p class="text-muted mt-3"></p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card border-0 mb-4 position-relative position-relative">
                    <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                    <a href="#" class="text-dark">
                    </a>
                    <div class="card-body p-0">
                      <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                      <p class="card-text mb-0">NT$1,080 <span class="text-muted ">
                        <del>NT$1,200</del></span></p>
                      <p class="text-muted mt-3"></p>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios';

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
      carts: {},
      coupon_code: '',
    };
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    // 取得購物車列表
    getCart() { // 參數預設值
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
      axios.get(url)
        .then((response) => {
          console.log(response);
          this.carts = response.data.data;
        })
        .catch((err) => {
          alert(err.message);
        });
    }, // 調整商品數量
    changeCartQty(item, qty = 1) {
      const order = {
        product_id: item.product_id,
        qty,
      };
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`;
      axios.put(url, { data: order })
        .then(() => {
          // this.status.cartQtyLoading = item.id;
          this.getCart();
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    removeCartItem(id) {
      // this.status.cartQtyLoading = id;
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${id}`;
      axios.delete(url)
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    addCouponCode() {
      const url = `${VITE_URL}/api/${VITE_PATH}/coupon`;
      console.log(url);
      const useCoupon = {
        code: this.coupon_code,
      };
      axios.post(url, { data: useCoupon })
        .then((response) => {
          console.log(response);
          alert(response.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.data.message);
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
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
