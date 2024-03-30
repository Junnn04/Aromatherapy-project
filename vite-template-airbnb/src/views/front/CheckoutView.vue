<template>
    <div class="bg-light pt-7 pb-7">
      <div class="container">
        <div class="row justify-content-center flex-md-row flex-column-reverse">
          <div class="col-md-6">
            <VForm ref="form" v-slot="{ errors }" @submit="createOrder">
            <div class="bg-white p-4">
              <h4 class="fw-bold">1. 訂購資訊</h4>
              <p class="mt-4">聯絡資訊</p>
                <div class="mb-2">
                  <label for="ContactMail" class="text-muted mb-0 form-label">Email</label>
                  <VField type="email" class="form-control rounded-0" id="ContactMail" name="email"
                 aria-describedby="emailHelp" placeholder="example@gmail.com"
                  rules="required|email" :class="{ 'is-invalid': errors['email'] }"
                  v-model="form.user.email"></VField>
                 <error-message name="email" class="invalid-feedback"></error-message>
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input rounded-0" id="ContactLorem">
                  <label class="form-check-label" for="ContactLorem">
                    是否記住Email</label>
                </div>
                <div class="mb-2">
                  <label for="ContactName" class="text-muted mb-0 form-label">訂購人姓名</label>
                  <VField type="text" class="form-control rounded-0" id="ContactName" name="name"
                 placeholder="Carmen A. Rose" rules="required" v-model="form.user.name"
                 :class="{ 'is-invalid': errors['name'] }"></VField>
               <error-message name="name" class="invalid-feedback"></error-message>
                </div>
                <div class="">
                  <label for="ContactPhone" class="text-muted mb-0 form-label">Phone</label>
                  <VField type="text" class="form-control rounded-0" id="ContactPhone"
                   placeholder="09xxxxxxxx" rules="required|min:10|max:10" v-model="form.user.tel"
                :class="{ 'is-invalid': errors['tel'] }" name="tel"></VField>
                <error-message name="tel" class="invalid-feedback"></error-message>
                </div>
            </div>
            <div class="bg-white p-4 mt-3">
              <h4 class="fw-bold">2. 寄送資訊</h4>
                <p class="mt-4 mb-3">寄送地址</p>
                <div class="form-row">
                  <div class="col mb-2">
                    <VField type="text" class="form-control" id="Contactaddress" name="address"
                :class="{ 'is-invalid': errors['address'] }"
              placeholder="請輸入地址" rules="required" v-model="form.user.address"></VField>
              <error-message name="address" class="invalid-feedback"></error-message>
                  </div>
                </div>
                <p class="mt-4 mb-2">Payment</p>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="radio" name="gridRadios"
                   id="gridRadios1" value="WebATM"  v-model="checked">
                  <label class="form-check-label text-muted" for="gridRadios1">credit card
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="radio" name="gridRadios"
                   id="gridRadios2" value="ATM" v-model="checked">
                  <label class="form-check-label text-muted" for="gridRadios2">WebATM
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="radio" name="gridRadios"
                   id="gridRadios3" value="ApplePay" v-model="checked">
                  <label class="form-check-label text-muted" for="gridRadios3">ApplePay
                  </label>
                </div>
            </div>
            <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between
             align-items-md-center align-items-end w-100">
              <a href="./product.html" class="text-dark mt-md-0 mt-3"
              @click.prevent="shopingNote()">
                <i class="fas fa-chevron-left me-2"></i> 購物須知</a>
                <button type="submit" class="btn btn-dark py-3 px-7 rounded-0"
                 style="background-color: #7FA185;">
                  確認訂單</button>
            </div>
          </VForm>
          </div>

          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="mb-4">訂購明細</h4>
              <div class="d-flex mb-2" v-for="item in carts.carts" :key="item.id">
                <img :src="item.product.imageUrl"
                 alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
                <div class="w-100">
                  <div class="d-flex justify-content-between fw-bold">
                    <p class="mb-0">{{ item.product.title }}</p>
                    <p class="mb-0">x{{ item.qty }}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="text-muted mb-0"><small>NT${{ item.product.price }}</small></p>
                    <p class="mb-0">NT${{ item.total }}</p>
                  </div>
                </div>
              </div>
              <table class="table mt-4 border-top border-bottom text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                    <td class="text-end border-0 px-0 pt-4">NT${{ carts.total }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">折扣</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">
                      {{ carts.final_total-carts.total }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">支付方式</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">{{ checked }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">結帳金額</p>
                <p class="mb-0 h4 fw-bold">NT${{ carts.final_total }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      carts: {},
      temporder: {},
      checked: 'credit card',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    // 取得購物車資訊
    getCart() { // 參數預設值
      const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
      console.log(url);
      axios.get(url)
        .then((response) => {
          this.carts = response.data.data;
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    // 確認提交訂單
    createOrder() {
      const url = `${VITE_URL}/api/${VITE_PATH}/order`;
      const order = this.form;
      axios.post(url, { data: order })
        .then((res) => {
          this.$router.push(`/Checkout/${res.data.orderId}`);
          this.$refs.form.resetForm();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    shopingNote() {
      Swal.fire({
        title: '購物須知',
        html: `
          <p>歡迎您光臨我們的購物平台！請仔細閱讀以下購物須知：</p>
          <ol>
            <li>商品資訊：請在購買商品前仔細閱讀商品描述、價格、規格、尺寸等相關資訊。</li>
            <li>庫存狀況：商品的庫存狀況可能隨時變化，請確認所需商品是否有庫存。</li>
            <li>購買流程：選擇您要購買的商品後，請按照網站指示完成訂單流程。</li>
            <li>付款方式：我們提供多種付款方式供您選擇，包括信用卡、支付寶、微信支付等。</li>
            <li>運送方式：我們會根據您提供的地址和選擇的運送方式安排商品的發貨。</li>
            <li>退換貨政策：我們提供合理的退換貨政策，詳細信息請參閱我們的退換貨政策頁面。</li>
            <li>客戶服務：如果您在購物過程中遇到任何問題或需要幫助，請隨時聯繫我們的客戶服務團隊。</li>
          </ol>
        `,
        icon: 'info',
        confirmButtonText: '確定',
        confirmButtonColor: '#3085d6',
      });
    },
  },
  mounted() {
    this.getCart();
  },

};
</script>
