import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

// import loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore("cartStore", {
  state: () => ({
    carts: [],
    qty: 1,
    final_total: 0,
    total: 0,
    isLoading: false,
  }),
  actions: {
    // 等同methods
    getCart() {
      this.isLoading = true;
      axios
        .get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((response) => {
          this.carts = response.data.data.carts;
          this.final_total = response.data.data.final_total;
          this.total = response.data.data.total;
          this.isLoading = false;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
          this.isLoading = false;
        });
    },
    addToCart(id, qty = 1) {
      const order = {
        product_id: id,
        qty,
      };
      axios
        .post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: order })
        .then(() => {
          Swal.fire({
            confirmButtonColor: "#7fa185",
            title: "已將商品添加進購物車",
          });
          this.getCart();
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data.message,
            confirmButtonColor: "#7fa185",
          });
        });
    },
    removeCartItem(id) {
      Swal.fire({
        title: "確定要從購物車中移除此商品嗎？",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#7fa185",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${VITE_URL}/api/${VITE_PATH}/cart/${id}`;
          axios
            .delete(url)
            .then((res) => {
              Swal.fire({
                title: res.data.message,
                confirmButtonColor: "#7fa185",
              });
              this.getCart();
            })
            .catch((err) => {
              Swal.fire({
                title: err.response.data.message,
                confirmButtonColor: "#7fa185",
              });
            });
        }
      });
    },
  },
});
