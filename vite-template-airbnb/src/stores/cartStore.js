import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    qty: 1,
    final_total: 0,
    tatol: 0,
  }),
  actions: { // 等同methods
    getCart() {
      axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((response) => {
          this.carts = response.data.data.carts;
          this.final_total = response.data.data.final_total;
          this.tatol = response.data.data.tatol;
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    addToCart(id, qty = 1) {
      const order = {
        product_id: id,
        qty,
      };
      axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: order })
        .then((response) => {
          console.log(response);
          console.log(this.carts);
          this.getCart();
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
});
