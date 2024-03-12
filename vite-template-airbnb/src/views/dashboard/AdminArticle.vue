<template>
 <div class="container">
        <div class="text-end mt-4">
          <button class="btn btn-primary" @click="openModal('new')">
            建立新文章
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">標題</th>
              <th width="80">作者</th>
              <th width="80">建立時間</th>
              <th width="200">內容描述</th>
              <th width="80">是否上傳</th>
              <th width="80"> 編輯 </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in articles" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.create_at }}</td>
              <td>{{ item.description }}</td>
              <td>
                <span class="text-success" v-if="item.isPublic">已上傳</span>
                <span v-else>未上傳</span>
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
        :get-article="getArticle"
        ></pagination>
      </div>
      <!-- Modal -->
      <article-modal
      :temp-article="tempArticle"
      :update-article="updateArticle"
      ref="pModal"
      ></article-modal>

      <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
           aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除優惠卷</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"
               aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{ tempArticle.title }}</strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="delArticle">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios';
import { Modal } from 'bootstrap';
import pagination from '../../components/PaginationComponents.vue';
import articleModal from '../../components/ArticleModal.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      tempArticle: {},
      pages: {},
      modalProduct: null,
      modalDel: null,
      isNew: false,
    };
  },
  methods: {
    // 取得產品列表
    getArticle(page = 1) { // 參數預設值
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/articles?page=${page}`;
      console.log(url);
      axios.get(url)
        .then((response) => {
          console.log(response);
          this.articles = response.data.articles;
          this.pages = response.data.pagination;
        })
        .catch((err) => {
          alert(err.message);
        });
    },
    // 打開新增視窗
    openModal(isNew, item) {
      // 判斷為新增時
      if (isNew === 'new') {
        // 清空當前tempProduct值
        this.tempArticle = {
          create_at: new Date().getTime() / 1000,
        };
        // 變更isNew值
        this.isNew = true;
        this.$refs.pModal.openModal();
        // this.modalProduct.show();
      } else if (isNew === 'edit') {
        // 將當前資料傳入tempProduct值
        this.tempArticle = { ...item };
        this.isNew = false;
        // this.modalProduct.show();
        this.$refs.pModal.openModal();
      } else if (isNew === 'delete') {
        // 將當前資料傳入tempProduct值，為了取得id
        this.tempArticle = { ...item };
        // 開起delProductsModal
        this.modalDel.show();
      }
    },
    // 打開編輯視窗
    updateArticle() {
      let url = `${VITE_URL}/api/${VITE_PATH}/admin/article`;
      let http = 'post';
      // 判斷當前isNew是新增or編輯
      if (!this.isNew) {
        url = `${VITE_URL}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`;
        http = 'put';
      }

      axios[http](url, { data: this.tempArticle })
        .then((response) => {
          console.log(response.message);
          alert(response.data.message);
          this.getArticle();
          // this.modalProduct.hide();
          this.$refs.pModal.closeModal();
          this.tempArticle = {};
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    },
    delArticle() {
      // this.tempProduct.id取得產品id刪除資料
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`;

      axios.delete(url)
        .then((response) => {
          alert(response.data.message);
          // 刪除後，須關閉Modal,並更新資料
          this.modalDel.hide();
          this.getArticle();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
  mounted() {
    this.getArticle();
    // 啟用productModal
    this.modalDel = new Modal(this.$refs.delProductModal);
  },
  components: {
    pagination,
    articleModal,
  },
};
</script>
