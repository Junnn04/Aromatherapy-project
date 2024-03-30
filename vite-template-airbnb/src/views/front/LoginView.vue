<template>

  <div class="container pt-7">
        <div class="row justify-content-center">
          <h1 class="h3 mb-3 font-weight-normal">
            請先登入
          </h1>
          <div class="col-8">
            <form id="form" class="form-signin" @submit.prevent="login">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="username" v-model="user.username"
                  placeholder="name@example.com" required autofocus>
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="password" v-model="user.password"
                  placeholder="Password" required>
                <label for="password">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3 mb-5" type="submit"
              style="background-color: #7FA185;">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const url = `${VITE_URL}/admin/signin`;
      axios.post(url, this.user)
        .then((response) => {
          const { token, expired } = response.data;
          // 寫入cookie
          document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
          this.$router.push('/admin/products');
          // window.location = 'products.html';
        })
        .catch((err) => {
          alert(err.data.message);
          this.$router.push('/login');
        });
    },
  },
};
</script>
