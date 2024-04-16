import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore("order", {
  state: () => ({
    orderId: "",
    order: [],
    total: 0,
  }),
  actions: {
    // 确认提交订单
    createOrder(formData) {
      const url = `${VITE_URL}/api/${VITE_PATH}/order`;

      return new Promise((resolve) => {
        axios
          .post(url, { data: formData })
          .then((response) => {
            resolve(response.data.orderId);
            this.orderId = response.data.orderId;
          })
          .catch((err) => {
            Swal.fire(err.response.data.message.join("\n"));
          });
      });
    },
    getOrder() {
      const url = `${VITE_URL}/api/${VITE_PATH}/order/${this.orderId}`; // 使用 this.$state 访问 orderId
      axios
        .get(url)
        .then((res) => {
          this.order = res.data.order.products;
          this.total = res.data.order.total;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
  },
});
