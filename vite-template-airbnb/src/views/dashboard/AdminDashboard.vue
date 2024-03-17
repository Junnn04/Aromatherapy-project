<template>
  <div class="row">
      <div class="col-md-2">
          <div class="text-white p-3" style="height: 900px; background: #8d6e63;">
            <h2 class="text-center">Aroma</h2>
              <nav class="navbar navbar-expand-lg navbar-light">
                    <!-- 导航项 -->
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                      <ul class="navbar-nav flex-column "
                      style="margin-top: 70px; position: absolute; top: 10px">
                        <li class="nav-item active" style="padding-bottom: 20px ;">
                          <RouterLink to="/admin/products" style="color: #d7ccc8;">產品列表</RouterLink>
                        </li>
                        <li class="nav-item" style="padding-bottom: 20px">
                          <RouterLink to="/admin/orders" style="color: #d7ccc8;">訂單管理</RouterLink>
                        </li>
                        <li class="nav-item" style="padding-bottom: 20px">
                          <RouterLink to="/admin/coupons" style="color: #d7ccc8;">優惠卷管理</RouterLink>
                        </li>
                        <li class="nav-item" style="padding-bottom: 20px">
                          <RouterLink to="/admin/article" style="color: #d7ccc8;">文章管理</RouterLink>
                        </li>
                        <li class="nav-item" style="padding-bottom: 20px">
                          <RouterLink to="/" style="color: #d7ccc8;">回到前台</RouterLink>
                        </li>
                        <li class="nav-item" style="padding-bottom: 20px">
                          <a href="#" @click.prevent="signout" style="color: #d7ccc8;">登出</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
              </div>
       </div>
      <div class="col">
          <RouterView v-if="checkSuccess"></RouterView>
      </div>
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
