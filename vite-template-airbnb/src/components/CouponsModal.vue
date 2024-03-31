<template>
<div id="couponsModal" ref="couponsModal" class="modal fade"
 tabindex="-1" aria-labelledby="productModalLabel"
aria-hidden="true">
<div class="modal-dialog modal-xl">
<div class="modal-content border-0">
 <div class="modal-header bg-dark text-white">
   <h5 id="productModalLabel" class="modal-title">
     <span v-if="isNew">新增產品</span>
     <span v-else>編輯產品</span>
   </h5>
   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
 </div>
 <div class="modal-body">
   <div class="row">
     <div class="col-sm-8">
       <div class="mb-3">
         <label for="title" class="form-label">標題</label>
         <input id="title" type="text" class="form-control"
          placeholder="請輸入標題" v-model = "editCoupons.title">
       </div>

       <div class="row">
         <div class="mb-3 col-md-6">
           <label for="percent" class="form-label">折扣</label>
           <input id="percent" type="number" min="0" class="form-control"
                  placeholder="請輸入折扣" v-model.number = "editCoupons.percent">
         </div>

         <div class="mb-3 col-md-6">
           <label for="due_date" class="form-label">到期日</label>
           <input id="due_date" type="date" class="form-control"
            placeholder="請輸入到期日" v-model="due_date">
         </div>
       </div>

       <div class="mb-3 col-md-6">
       <label for="code" class="form-label">優惠碼</label>
       <input id="code" type="text" class="form-control"
        placeholder="請輸入優惠碼" v-model = "editCoupons.code">
     </div>
       <div class="mb-3">
         <div class="form-check">
           <input id="is_enabled" class="form-check-input" type="checkbox"
                  :true-value="1" :false-value="0" v-model = "editCoupons.is_enabled">
           <label class="form-check-label" for="is_enabled">是否啟用</label>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div class="modal-footer">
   <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" >
     取消
   </button>
   <button type="button" class="btn btn-primary" @click="updateCoupons">
     確認
   </button>
 </div>
</div>
</div>
</div>
  </template>

<script>
import { Modal } from 'bootstrap';

export default {
  props: ['isNew', 'tempCoupons', 'updateCoupons'],
  data() {
    return {
      modalCoupons: null,
      editCoupons: {},
      due_date: '',
    };
  },
  watch: {
    tempCoupons() {
      this.editCoupons = this.tempCoupons;
      // 將時間格式改為 YYYY-MM-DD
      const date = new Date(this.editCoupons.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = date;
    },
    due_date() {
      this.editCoupons.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
  methods: {
    openModal() {
      this.modalCoupons.show();
    },
    closeModal() {
      this.modalCoupons.hide();
    },
  },
  mounted() {
    this.modalCoupons = new Modal(this.$refs.couponsModal);
    this.editCoupons = this.tempCoupons;
  },
};
</script>
