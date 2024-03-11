<template>
  <div class="container" >
    <h2  class="row" style="background-color: #90a4ae">香氛心療坊</h2>
    <div>
      <div class="row">
      <div class="col-md-2 " style="position: relative">
        <nav class="navbar navbar-expand-lg navbar-light h-100">
              <!-- 导航项 -->
              <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav flex-column "
                style="margin-top: 70px; position: absolute; top: 10px">
                  <li class="nav-item active" style="padding-bottom: 20px">
                    <RouterLink to="/admin/products">產品列表</RouterLink>
                  </li>
                  <li class="nav-item" style="padding-bottom: 20px">
                    <RouterLink to="/admin/orders">訂單管理</RouterLink>
                  </li>
                  <li class="nav-item" style="padding-bottom: 20px">
                    <RouterLink to="/admin/coupons">優惠卷管理</RouterLink>
                  </li>
                  <li class="nav-item" style="padding-bottom: 20px">
                    <RouterLink to="/admin/article">文章管理</RouterLink>
                  </li>
                  <li class="nav-item" style="padding-bottom: 20px">
                    <RouterLink to="/">回到前台</RouterLink>
                  </li>
                </ul>
              </div>
            </nav>
      </div>
      <div class="col" style="margin-top: 100px">
        <router-view></router-view>
          </div>
      </div>
    </div>
  </div>
  </template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  methods: {
    checkAdmin() {
      const url = `${VITE_URL}/api/user/check`;
      axios.post(url)
        .then((res) => {
          console.log('驗證成功:', res.success);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
  mounted() {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
};
</script>
