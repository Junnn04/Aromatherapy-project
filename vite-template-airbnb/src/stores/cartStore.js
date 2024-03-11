import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
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
          console.log('sss', response);
          console.log(this.carts);
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    addToCart(id) {
      const order = {
        product_id: id,
        qty: 1,
      };
      axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: order })
        .then((response) => {
          console.log(response);
          this.getCart();
        })
        .catch((err) => {
          alert(err.message);
        });
    },
  },
});
