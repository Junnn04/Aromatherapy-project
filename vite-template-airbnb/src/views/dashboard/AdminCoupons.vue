<template>
  <div class="container">
    <div class="text-end mt-4">
      <button
        class="btn btn-primary border-0"
        style="background-color: #7fa185"
        @click="openModal('new')"
      >
        建立新的優惠卷
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">優惠名稱</th>
          <th width="120">折扣</th>
          <th width="120">到期日</th>
          <th width="150">是否啟用</th>
          <th width="80">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.due_date }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
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
    <pagination :pages="pages" :get-coupons="getCoupons"></pagination>
  </div>
  <!-- Modal -->
  <coupons-modal
    :temp-coupons="tempCoupons"
    :update-coupons="updateCoupons"
    ref="pModal"
  ></coupons-modal>

  <div
    id="delCouponsModal"
    ref="delCouponsModal"
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
          <strong class="text-danger">{{ tempCoupons.title }}</strong>
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
          <button type="button" class="btn btn-danger" @click="delCoupons">
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

import pagination from "../../components/CouponsPagination.vue";
import couponsModal from "../../components/CouponsModal.vue";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      coupons: [],
      tempCoupons: {},
      pages: {},
      modalCoupons: null,
      modalDel: null,
      isNew: false,
    };
  },
  methods: {
    // 取得優惠卷列表
    getCoupons(page = 1) {
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/coupons?page=${page}`;
      axios
        .get(url)
        .then((response) => {
          this.coupons = response.data.coupons;
          this.pages = response.data.pagination;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    // 打開新增視窗
    openModal(isNew, item) {
      // 判斷為新增時
      if (isNew === "new") {
        // 清空當前tempCoupons值
        this.tempCoupons = {
          due_date: new Date().getTime() / 1000,
        };
        // 變更isNew值
        this.isNew = true;
        this.$refs.pModal.openModal();
        // this.modalProduct.show();
      } else if (isNew === "edit") {
        // 將當前資料傳入tempCoupons值
        this.tempCoupons = { ...item };
        this.isNew = false;
        // this.modalProduct.show();
        this.$refs.pModal.openModal();
      } else if (isNew === "delete") {
        // 將當前資料傳入tempCoupons值，為了取得id
        this.tempCoupons = { ...item };
        // 開起delProductsModal
        this.modalDel.show();
      }
    },
    // 打開編輯視窗
    updateCoupons() {
      let url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon`;
      let http = "post";
      // 判斷當前isNew是新增or編輯
      if (!this.isNew) {
        url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupons.id}`;
        http = "put";
      }

      axios[http](url, { data: this.tempCoupons })
        .then((response) => {
          Swal.fire(response.data.message);
          this.getCoupons();
          // this.modalProduct.hide();
          this.$refs.pModal.closeModal();
          this.tempCoupons = {};
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    delCoupons() {
      // this.tempProduct.id取得產品id刪除資料
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/coupon/${this.tempCoupons.id}`;

      axios
        .delete(url)
        .then((response) => {
          Swal.fire(response.data.message);
          // 刪除後，須關閉Modal,並更新資料
          this.modalDel.hide();
          this.getCoupons();
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getCoupons();
    // 啟用productModal

    this.modalDel = new Modal(this.$refs.delCouponsModal);
  },
  components: {
    pagination,
    couponsModal,
  },
};
</script>
