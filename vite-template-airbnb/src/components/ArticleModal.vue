<template>
  <div
    id="articleModal"
    ref="articleModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增文章</span>
            <span v-else>編輯文章</span>
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
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">輸入圖片網址</label>
                <input
                  id="imageUrl"
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  v-model="editArticle.imageUrl"
                />
                <img class="img-fluid" :src="tempArticle.imageUrl" />
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="editArticle.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="author" class="form-label">作者</label>
                  <input
                    id="percent"
                    type="text"
                    min="0"
                    class="form-control"
                    placeholder="請輸入作者"
                    v-model="editArticle.author"
                  />
                </div>

                <div class="mb-3 col-md-6">
                  <label for="create_at" class="form-label">文章建立日期</label>
                  <input
                    id="create_at"
                    type="date"
                    class="form-control"
                    placeholder="文章建立日期"
                    v-model="create_at"
                  />
                </div>
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="editArticle.description"
                  placeholder="請輸入文章描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章內容</label>
                <Ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="editArticle.content"
                ></Ckeditor>
                <!-- <md-editor @change="handleMarkdownChange" /> -->
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="editArticle.isPublic"
                    id="isPublic"
                  />
                  <label class="form-check-label" for="isPublic"
                    >是否公開</label
                  >
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
          <button type="button" class="btn btn-primary" @click="updateArticle">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CKFinder } from "@ckeditor/ckeditor5-ckfinder";

// import { defineComponent } from "vue";
// import { MdEditor } from "md-editor-v3";
// import "md-editor-v3/lib/style.css";

// const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: ["isNew", "tempArticle", "updateArticle"],
  data() {
    return {
      modalArticle: null,
      editArticle: {
        // create_at: "",
      },
      create_at: "",
      selectedDate: "",
      text: "",
      // markdownContent,
      // handleMarkdownChange,
      // renderedHtml,
      editor: ClassicEditor,
      editorConfig: {
        // plugins: [CKFinder],
        ckfinder: {
          uploadUrl: `https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json`,
          // 後端的上傳圖片 API 路徑
          options: {
            resourceType: "Images",
            // 限定類型為圖片
          },
        },
      },
    };
  },
  // setup() {
  //   const markdownContent = ref("");

  //   const handleMarkdownChange = (markdown) => {
  //     markdownContent.value = markdown;
  //   };

  //   const renderedHtml = computed(() => {
  //     // 將 Markdown 轉換成 HTML
  //     return marked(markdownContent.value);
  //   });
  // },
  watch: {
    tempArticle() {
      this.editArticle = this.tempArticle;
      // 將時間格式改為 YYYY-MM-DD
      const date = new Date(this.editArticle.create_at * 1000)
        .toISOString()
        .split("T");
      [this.create_at] = date;
    },
    create_at() {
      this.editArticle.create_at = Math.floor(new Date(this.create_at) / 1000);
    },
  },
  methods: {
    openModal() {
      this.modalArticle.show();
    },
    closeModal() {
      this.modalArticle.hide();
    },
  },
  mounted() {
    this.modalArticle = new Modal(this.$refs.articleModal);
    this.editArticle = this.tempArticle;
  },
  components: {
    Ckeditor: CKEditor.component,
    // MdEditor,
  },
};
</script>
