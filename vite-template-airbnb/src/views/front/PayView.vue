<template>
  <div class="container pt-7">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">付款</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <div class="d-flex pt-2" v-for="item in order" :key="item.id">
            <img
              :src="item.product.imageUrl"
              alt="商品圖片"
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">{{ item.product.title }}</p>
                <p class="mb-0">NT${{ item.total }}</p>
              </div>
              <p class="mb-0 fw-bold">x{{ item.qty }}</p>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                  小計
                </th>
                <td class="text-end border-0 px-0 pt-4">NT${{ this.total }}</td>
              </tr>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                  折扣
                </th>
                <td class="text-end border-0 px-0 pt-4">
                  NT${{ Math.round(this.final_total - this.total) }}
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                >
                  支付方式
                </th>
                <td class="text-end border-0 px-0 pt-0 pb-4">
                  {{ this.checked }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">結帳金額</p>
            <p class="mb-0 h4 fw-bold">NT${{ Math.round(this.final_total) }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <VForm ref="form" v-slot="{ errors }" @submit="payOrder">
          <div class="accordion" id="accordionExample">
            <div class="card rounded-0">
              <div
                class="card-header bg-white border-0 py-3"
                id="headingOne"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <p class="mb-0 position-relative custom-checkout-label">
                  信用卡付款
                </p>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body bg-light ps-5 py-4">
                  <div class="mb-2">
                    <label for="Lorem ipsum1" class="text-muted mb-0"
                      >信用卡號</label
                    >
                    <VField
                      type="text"
                      class="form-control"
                      id="creditCardNum"
                      name="信用卡號"
                      placeholder="xxxx xxxx xxxx xxxx"
                      rules="required|credit_card"
                      :class="{ 'is-invalid': errors['信用卡號'] }"
                    ></VField>
                    <error-message
                      name="信用卡號"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                  <div class="mb-0">
                    <label for="Lorem ipsum2" class="text-muted mb-0"
                      >檢查碼</label
                    >
                    <VField
                      type="text"
                      class="form-control"
                      id="checkNum"
                      placeholder="xxx"
                      :rules="ischeckNum"
                      :class="{ 'is-invalid': errors['檢查碼'] }"
                      name="檢查碼"
                    ></VField>
                    <error-message
                      name="檢查碼"
                      class="invalid-feedback"
                    ></error-message>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="card rounded-0">
              <div
                class="card-header bg-white border-0 py-3 collapsed"
                id="headingTwo"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <p class="mb-0 position-relative custom-checkout-label">
                  WebATM
                </p>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body bg-light ps-5 py-4">
                  <div class="mb-2">
                    <label for="Lorem ipsum1" class="text-muted mb-0"
                      >Lorem ipsum</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="Lorem ipsum1"
                      placeholder="Lorem ipsum"
                    />
                  </div>
                  <div class="mb-0">
                    <label for="Lorem ipsum2" class="text-muted mb-0"
                      >ApplePay</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="Lorem ipsum2"
                      placeholder="Lorem ipsum"
                    />
                  </div>
                </div>
              </div>
            </div> -->
            <div class="card rounded-0">
              <div
                class="card-header bg-white border-0 py-3 collapsed"
                id="headingThree"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                <p class="mb-0 position-relative custom-checkout-label">
                  ApplePay
                </p>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body bg-light ps-5 py-4">
                  <div class="mb-2">
                    <i class="bi bi-credit-card pe-3"></i> Apple Pay
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"
          >
            <button
              type="submit"
              class="btn btn-dark py-3 px-7 border-0"
              style="background-color: #7fa185"
            >
              確認付款
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import { mapActions, mapState } from "pinia";
import cartStore from "@/stores/cartStore";
import order from "@/stores/order";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      form: {
        is_paid: false,
      },
      checked: "",
    };
  },
  computed: {
    ...mapState(cartStore, ["final_total"]),
    ...mapState(cartStore, ["total"]),
    ...mapState(order, ["order"]),
  },
  methods: {
    ...mapActions(order, ["getOrder"]),
    ischeckNum(value) {
      const checkNumber = /^[0-9]{3}$/;
      return checkNumber.test(value) ? true : "請輸入正確的檢查碼";
    },
    ...mapActions(cartStore, ["getCart"]),
    payOrder() {
      const url = `${VITE_URL}/api/${VITE_PATH}/pay/${this.orderId}`;
      axios
        .post(url)
        .then(() => {
          this.getOrder();
          this.getCart();
          Swal.fire({
            title: "付款成功",
            confirmButtonColor: "#7fa185",
          });
          this.$router.push("/checkoutSuccess");
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            confirmButtonColor: "#7fa185",
          });
        });
    },
  },
  created() {
    // // 从路由参数中获取订单 ID
    this.orderId = this.$route.params.orderId;
    this.getOrder(); // 调用获取订单详情的方法
    this.checked = localStorage.getItem("payment");
  },
};
</script>
