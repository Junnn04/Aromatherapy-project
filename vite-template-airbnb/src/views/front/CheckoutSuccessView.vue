<template>
  <div class="container pt-5">
    <div
      style="
        min-height: 200px;
        background-image: url(https://i.postimg.cc/90RrG1N3/bg-Image-Enhancer.jpg);
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center center;
      "
    ></div>
    <div class="mt-5 mb-7">
      <div class="row">
        <div class="col-md-6">
          <h2>訂購成功</h2>
          <p>
            感謝您的訂購！商品正在進行出貨程序，請耐心等候。若有任何問題，
            請隨時與我們聯繫。期待您再次光臨，我們將竭誠為您服務。
          </p>
          <RouterLink
            class="btn btn-dark btn-block mt-2 mb-5 py-1 border-0"
            to="/"
            style="background-color: #7fa185"
          >
            回首頁</RouterLink
          >
        </div>
        <div class="col-md-6">
          <div class="card rounded-0 py-4">
            <div class="card-header border-bottom-0 bg-white px-4 py-0">
              <h2>訂單明細</h2>
            </div>
            <div class="card-body px-4 py-0">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item px-0"
                  v-for="item in order"
                  :key="item.id"
                >
                  <div class="d-flex mt-2">
                    <img
                      :src="item.product.imageUrl"
                      alt=""
                      class="me-2"
                      style="width: 60px; height: 60px; object-fit: cover"
                    />
                    <div class="w-100 d-flex flex-column">
                      <div class="d-flex justify-content-between fw-bold">
                        <h5>{{ item.product.title }}</h5>
                        <p class="mb-0">x{{ item.qty }}</p>
                      </div>
                      <div class="d-flex justify-content-between mt-auto">
                        <p class="text-muted mb-0"></p>
                        <p class="mb-0">
                          NT${{ Math.round(item.final_total) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0 pb-0">
                  <table class="table text-muted">
                    <tbody>
                      <tr>
                        <th
                          scope="row"
                          class="border-0 px-0 pt-0 font-weight-normal"
                        >
                          支付方式
                        </th>
                        <td class="text-end border-0 px-0 pt-0">
                          {{ this.checked }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="d-flex justify-content-between mt-2">
                    <p class="mb-0 h4 fw-bold">結帳金額</p>
                    <p class="mb-0 h4 fw-bold">
                      NT${{ Math.round(this.total) }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import order from "@/stores/order";

export default {
  data() {
    return {
      checked: "",
    };
  },
  computed: {
    ...mapState(order, ["order"]),
    ...mapState(order, ["total"]),
  },
  methods: {
    // 取得訂單資訊
    ...mapActions(order, ["getOrder"]),
  },
  mounted() {
    this.getOrder();
    this.checked = localStorage.getItem("payment");
  },
};
</script>
