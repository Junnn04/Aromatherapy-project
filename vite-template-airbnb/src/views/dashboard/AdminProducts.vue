<template>
    <div class="container-fluid">
      <div class="text-end mt-4">
          <button class="btn btn-primary" style="background-color: #7FA185;"
           @click="openModal('new')">建立新的產品</button>
        </div>

        <table class="table mt-4">
          <thead>
            <tr>
              <th>分類</th>
              <th>產品名稱</th>
              <th>原價 </th>
              <th>售價</th>
              <th>是否啟用 </th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in products" :key="item.id">
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.origin_price }}</td>
              <td>{{ item.price }}</td>
              <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm"
                   @click="openModal('edit',item)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm"
                   @click="openModal('delete',item)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 分頁 -->
        <pagination
        :pages="pages"
        :get-products="getProducts"
        ></pagination>
      </div>
      <!-- Modal -->
      <product-modal
      :temp-product="tempProduct"
      :update-product="updateProduct"
      ref="pModal"
      ></product-modal>

      <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
           aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <button type="button" class="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="delProduct">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
</template>

<script>
import axios from 'axios';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';

import pagination from '../../components/PaginationComponents.vue';
import productModal from '../../components/ProductModal.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      apiUrl: 'https://ec-course-api.hexschool.io',
      apiPath: 'junapi',
      products: [],
      tempProduct: {
        imagesUrl: '',
      },
      pages: {},
      modalProduct: null,
      modalDel: null,
      isNew: false,
    };
  },
  methods: {
    // 取得產品列表
    getProducts(page = 1) { // 參數預設值
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`;
      axios.get(url)
        .then((response) => {
          this.products = response.data.products;
          this.pages = response.data.pagination;
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    // 打開新增視窗
    openModal(isNew, item) {
      // 判斷為新增時
      if (isNew === 'new') {
        // 清空當前tempProduct值
        this.tempProduct = {
          imagesUrl: [],
        };
        // 變更isNew值
        this.isNew = true;
        this.$refs.pModal.openModal();
        // this.modalProduct.show();
      } else if (isNew === 'edit') { // 判斷為編輯時
        // 將當前資料傳入tempProduct值
        this.tempProduct = { ...item };
        if (!Array.isArray(this.tempProduct.imagesUrl)) {
          this.tempProduct.imagesUrl = [];
        }
        this.isNew = false;
        // this.modalProduct.show();
        this.$refs.pModal.openModal();
      } else if (isNew === 'delete') { // 判斷為刪除時
        // 將當前資料傳入tempProduct值，為了取得id
        this.tempProduct = { ...item };
        // 開起delProductsModal
        this.modalDel.show();
      }
    },
    // 打開編輯視窗
    updateProduct() {
      let url = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
      let http = 'post';
      // 判斷當前isNew是新增or編輯
      if (!this.isNew) {
        url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
        http = 'put';
      }

      axios[http](url, { data: this.tempProduct })
        .then((response) => {
          Swal.fire(response.data.message);
          this.getProducts();
          // this.modalProduct.hide();
          this.$refs.pModal.closeModal();
          this.tempProduct = {};
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
    delProduct() {
      // this.tempProduct.id取得產品id刪除資料
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;

      axios.delete(url)
        .then((response) => {
          Swal.fire(response.data.message);
          // 刪除後，須關閉Modal,並更新資料
          this.modalDel.hide();
          this.getProducts();
        })
        .catch((err) => {
          Swal.fire(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getProducts();

    // 啟用productModal

    this.modalDel = new Modal(this.$refs.delProductModal);
  },
  components: {
    pagination,
    productModal,
  },
};
</script>
