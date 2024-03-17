<template>
      <div class="col-md-2 " style="position: relative">
        <nav class="navbar navbar-expand-lg navbar-light h-100"  style="background-color: #90a4ae">
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
                  <li class="nav-item" style="padding-bottom: 20px">
                    <a href="#" @click.prevent="signout">登出</a>
                  </li>
                </ul>
              </div>
            </nav>
      </div>
      <div class="col" style="margin-top: 100px">
        <RouterView v-if="checkSuccess"></RouterView>
          </div>
  </template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkAdmin() {
      const url = `${VITE_URL}/api/user/check`;
      axios.post(url)
        .then((res) => {
          console.log('驗證成功:', res.data.success);
          this.checkSuccess = true;
        })
        .catch((err) => {
          alert(err.data.message);
          this.$router.push('/login');
        });
    },
    signout() {
      const url = `${VITE_URL}/logout`;
      axios.post(url)
        .then(() => {
          document.cookie = 'hexToken=;expires=;';
          alert('token 已清除');
          this.$router.push('/login');
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
};
</script>
