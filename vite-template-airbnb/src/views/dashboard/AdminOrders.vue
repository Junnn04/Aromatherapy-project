<template>
  <div class="container-fluid">
    <div class="text-end mt-4">
      <!-- <button class="btn btn-primary" @click="openModal('new')">
            建立新的訂單
          </button> -->
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">訂單建立日期</th>
          <th width="120">訂購人</th>
          <th width="120">訂購品項</th>
          <th width="120">應付金額</th>
          <th width="150">是否付款</th>
          <th width="80">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ formatDate(item.create_at) }}</td>
          <td><span v-text="item.user.name" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in item.products" :key="product.id">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.total }}</td>
          <td>
            <span class="text-success" v-if="item.is_paid">已付款</span>
            <span v-else>未付款</span>
          </td>
          <td>
            <div class="btn-group">
              <!-- <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                檢視
              </button> -->
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁 -->
    <pagination :pages="pages" :get-order="getOrders"></pagination>
  </div>
  <!-- Modal -->
  <!-- <order-modal
    :temp-order="tempOrder"
    :update-order="updateOrder"
    ref="pModal"
  ></order-modal> -->

  <div
    id="delOrderModal"
    ref="delOrderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ orders.create_at }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delOrder">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Modal } from "bootstrap";
import Swal from "sweetalert2";

import pagination from "../../components/OrderPagination.vue";
// import orderModal from "../../components/OrderModal.vue";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      pages: {},
      modalProduct: null,
      modalDel: null,
      isNew: false,
    };
  },
  methods: {
    // 取得產品列表
    getOrders(page = 1) {
      // 參數預設值
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/orders?page=${page}`;
      axios
        .get(url)
        .then((response) => {
          this.orders = response.data.orders;
          this.pages = response.data.pagination;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    formatDate(timestamp) {
      // 創建日期對象
      const date = new Date(timestamp * 1000);
      // 返回格式化後的日期字符串，根據需要使用不同的日期格式
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    },
    // 打開新增視窗
    openModal(isNew, item) {
      // 判斷為新增時
      if (isNew === "new") {
        // 清空當前tempProduct值
        this.tempOrder = {
          due_date: new Date().getTime() / 1000,
        };
        // 變更isNew值
        this.isNew = true;
        this.$refs.pModal.openModal();
        // this.modalProduct.show();
      } else if (isNew === "edit") {
        // 將當前資料傳入tempProduct值
        this.tempOrder = { ...item };
        this.isNew = false;
        // this.modalProduct.show();
        this.$refs.pModal.openModal();
      } else if (isNew === "delete") {
        // 將當前資料傳入tempProduct值，為了取得id
        this.tempOrder = { ...item };
        // 開起delProductsModal
        this.modalDel.show();
      }
    },
    // 打開編輯視窗
    updateOrder() {
      let url = `${VITE_URL}/api/${VITE_PATH}/admin/Order`;
      let http = "post";
      // 判斷當前isNew是新增or編輯
      if (!this.isNew) {
        url = `${VITE_URL}/api/${VITE_PATH}/admin/Order/${this.tempOrder.id}`;
        http = "put";
      }

      axios[http](url, { data: this.tempOrder })
        .then((response) => {
          Swal.fire(response.data.message);
          this.getOrders();
          // this.modalProduct.hide();
          this.$refs.pModal.closeModal();
          this.tempOrder = {};
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    delOrder() {
      // this.tempProduct.id取得產品id刪除資料
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`;

      axios
        .delete(url)
        .then((response) => {
          Swal.fire(response.data.message);
          // 刪除後，須關閉Modal,並更新資料
          this.modalDel.hide();
          this.getOrders();
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getOrders();
    // 啟用productModal
    this.modalDel = new Modal(this.$refs.delOrderModal);
  },
  components: {
    pagination,
    // orderModal,
  },
};
</script>
