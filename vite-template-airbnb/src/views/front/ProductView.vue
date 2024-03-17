<template>
  <div class="container pt-5">
  <div class="row align-items-center">
        <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="product.imageUrl" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
              </div>
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
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" to="/">
                首頁 </RouterLink></li>
              <li class="breadcrumb-item">
                <RouterLink class="text-muted" to="/products">產品</RouterLink></li>
              <li class="breadcrumb-item active" aria-current="page">介紹</li>
            </ol>
          </nav>
          <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
          <p class="mt-4">{{ product.description }}</p>
          <p class="mb-0 text-muted text-end"><del>NT${{ product.origin_price }}</del></p>
          <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark
                   border-0 py-2" type="button" id="button-addon1">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <!-- <input type="text" class="form-control border-0 text-center
                 my-auto shadow-none bg-light" placeholder=""
                  aria-label="Example text with button addon"
                   aria-describedby="button-addon1" value="1"> -->
                <select name="" id="" class="form-select" v-modol="qty">
                  <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                </select>
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-0 py-2" type="button"
                   id="button-addon2">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <a class="text-nowrap btn btn-dark w-100 py-2"
               @click.prevent="addToCart(product.id, qty)">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-7">
          <p class="text-muted">{{ product.content }}</p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: [],
      qty: 1,
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
  },
};

// export default {
//   mounted() {
//     console.log(this.$route);
//   },
// };
</script>
