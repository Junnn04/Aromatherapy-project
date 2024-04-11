<template>
  <nav
    class="navbar navbar-expand-lg navbar-light position-fixed bg-light z-3 w-100 top-0"
  >
    <div class="container">
      <RouterLink class="nav-item nav-link me-4 active" to="/">
        <img
          src="../assets/img/logo.jpg"
          class="img-fluid"
          alt="logo"
          style="width: 100px"
        />
      </RouterLink>
      <!-- 漢堡選單 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <RouterLink class="nav-item nav-link me-4" to="/about"
            >關於</RouterLink
          >
          <RouterLink class="nav-item nav-link me-4" to="/products"
            >產品</RouterLink
          >
          <RouterLink class="nav-item nav-link me-4" to="/Articles"
            >文章</RouterLink
          >
          <RouterLink class="nav-item nav-link me-4" to="/login"
            >登入</RouterLink
          >
          <RouterLink
            class="btn btn-primary position-relative border-0"
            style="background-color: #7fa185"
            to="/cart"
            ><i class="bi bi-cart4"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >{{ this.carts?.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "pinia";
import cartStore from "../stores/cartStore";

export default {
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
  },
  mounted() {
    this.getCart();
  },
  created() {
    // 在 Vue Router 的导航守卫中监听页面切换
    this.$router.afterEach(() => {
      // 隐藏导航栏
      document.getElementById("navbarNavAltMarkup").classList.remove("show");
    });
  },
};
</script>
