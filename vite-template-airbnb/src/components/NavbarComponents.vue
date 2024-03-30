<template>
        <nav class="navbar navbar-expand-lg navbar-light position-fixed bg-light z-3 w-100 top-0">
          <div class="container">
            <RouterLink class="nav-item nav-link me-4 active" to="/">
            <img src="../assets/img/logo.jpg" class="img-fluid" alt="logo" style="width: 100px">
          </RouterLink>
          <button class="navbar-toggler" type="button"
           data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <RouterLink class="nav-item nav-link me-4" to="/about">關於</RouterLink>
              <RouterLink class="nav-item nav-link me-4" to="/products">產品</RouterLink>
              <RouterLink class="nav-item nav-link me-4" to="/login">登入</RouterLink>
              <RouterLink class="btn btn-primary position-relative"
               to="/cart"><i class="bi bi-cart4"></i>
               <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill
                bg-danger">{{ this.carts?.length }}
                <span class="visually-hidden">unread messages</span>
              </span>
              </RouterLink>
            </div>
          </div>
        </div>
        </nav>
</template>

<script>
// import axios from 'axios';
import { mapActions, mapState } from 'pinia';
import cartStore from '../stores/cartStore';

// const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  computed: {
    ...mapState(cartStore, ['carts']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    // getCart() {
    //   axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
    //     .then((response) => {
    //       console.log(response);
    //       this.cart = response.data.data;
    //       console.log(this.cart);
    //     })
    //     .catch((err) => {
    //       alert(err.message);
    //     });
    // },
  },
  mounted() {
    this.getCart();
  },
};
</script>
