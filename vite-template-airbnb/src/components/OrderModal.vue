<template>
  <div
    id="OrderModal"
    ref="OrderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-8">
              <div class="mb-3">
                <h3>訂購資訊</h3>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="create_at" class="form-label">訂單編號</label>
                    <input
                      id="create_at"
                      type="text"
                      class="form-control"
                      placeholder="請輸入訂單編號"
                      v-model="editOrder.create_at"
                    />
                  </div>

                  <!-- <div class="mb-3 col-md-6"> -->
                  <!-- <label for="name" class="form-label">訂購人</label>
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="請輸入姓名"
                      v-model="editOrder.user.name"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="tel" class="form-label">連絡電話</label>
                    <input
                      id="tel"
                      type="text"
                      class="form-control"
                      placeholder="請輸入電話"
                      v-model="editOrder.user.tel"
                    />
                  </div>

                  <div class="mb-3 col-md-6">
                    <label for="email" class="form-label">E-mail</label>
                    <input
                      id="email"
                      type="text"
                      class="form-control"
                      placeholder="請輸入email"
                      v-model="editOrder.user.email"
                    />
                  </div>
                </div>
                <label for="address" class="form-label">收貨地址</label>
                <input
                  id="address"
                  type="text"
                  class="form-control"
                  placeholder="請輸入地址"
                  v-model="editOrder.user.address"
                />
              </div>

              <div class="row">
                <h3>訂購明細</h3>
                <div class="mb-3 col-md-6">
                  <label for="percent" class="form-label">訂購商品</label>
                  <input
                    v-for="product in editOrder.products"
                    :key="product.id"
                    id="percent"
                    type="text"
                    class="form-control mb-2"
                    placeholder="請輸入折扣"
                    v-model="product.product.title"
                  />
                </div>

                <div class="mb-3 col-md-6">
                  <label for="due_date" class="form-label">數量</label>
                  <input
                    v-for="product in editOrder.products"
                    :key="product.id"
                    id="percent"
                    type="text"
                    class="form-control mb-2"
                    placeholder="請輸入折扣"
                    v-model="product.qty"
                  />
                </div>
              </div>

              <div class="mb-3 col-md-6">
                <label for="code" class="form-label">優惠碼</label>
                <input
                  id="code"
                  type="text"
                  class="form-control"
                  placeholder="請輸入優惠碼"
                  v-model="editOrder.code"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="editOrder.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  > -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateOrder">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  props: ["isNew", "tempOrder", "updateOrder"],
  data() {
    return {
      modalOrder: null,
      editOrder: {},
      due_date: "",
    };
  },
  watch: {
    tempOrder() {
      this.editOrder = this.tempOrder;
      // 將時間格式改為 YYYY-MM-DD
      const date = new Date(this.editOrder.due_date * 1000)
        .toISOString()
        .split("T");
      [this.due_date] = date;
    },
    due_date() {
      this.editOrder.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  methods: {
    openModal() {
      this.modalOrder.show();
    },
    closeModal() {
      this.modalOrder.hide();
    },
  },
  mounted() {
    this.modalOrder = new Modal(this.$refs.OrderModal);
    this.editOrder = this.tempOrder;
  },
};
</script>
