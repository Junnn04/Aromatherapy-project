import{a as h}from"./axios-L6U4YIEh.js";import{M as v,p as k}from"./PaginationComponents-jJpgWGfX.js";import{_ as y,o as i,c,b as o,t as p,j as u,v as r,n as x,F as b,g as V,d as C,e as f,r as g}from"./index-SlvrNoUn.js";const D={props:["isNew","tempCoupons","updateCoupons"],data(){return{modalCoupons:null,editCoupons:{},due_date:""}},watch:{coupon(){this.editCoupons=this.tempCoupons;const n=new Date(this.editCoupons.due_date*1e3).toISOString().split("T");[this.due_date]=n},due_date(){this.editCoupons.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{openModal(){this.modalCoupons.show()},closeModal(){this.modalCoupons.hide()}},mounted(){this.modalCoupons=new v(this.$refs.couponsModal),this.editCoupons=this.tempCoupons}},T={id:"couponsModal",ref:"couponsModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},E={class:"modal-dialog modal-xl"},L={class:"modal-content border-0"},U={class:"modal-header bg-dark text-white"},N={id:"productModalLabel",class:"modal-title"},S={key:0},A={key:1},I=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),P={class:"modal-body"},R={class:"row"},B={class:"col-sm-8"},j={class:"mb-3"},O=o("label",{for:"title",class:"form-label"},"標題",-1),F={class:"row"},H={class:"mb-3 col-md-6"},q=o("label",{for:"percent",class:"form-label"},"折扣",-1),z={class:"mb-3 col-md-6"},G=o("label",{for:"due_date",class:"form-label"},"到期日",-1),J={class:"mb-3 col-md-6"},K=o("label",{for:"code",class:"form-label"},"優惠碼",-1),Q={class:"mb-3"},W={class:"form-check"},X=o("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Y={class:"modal-footer"},Z=o("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function oo(n,t,e,M,s,a){return i(),c("div",T,[o("div",E,[o("div",L,[o("div",U,[o("h5",N,[e.isNew?(i(),c("span",S,"新增產品")):(i(),c("span",A,"編輯產品"))]),I]),o("div",P,[o("div",R,[o("pre",null,"    "+p(e.tempCoupons)+`
    `,1),o("div",B,[o("div",j,[O,u(o("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":t[0]||(t[0]=l=>s.editCoupons.title=l)},null,512),[[r,s.editCoupons.title]])]),o("div",F,[o("div",H,[q,u(o("input",{id:"percent",type:"number",min:"0",class:"form-control",placeholder:"請輸入折扣","onUpdate:modelValue":t[1]||(t[1]=l=>s.editCoupons.percent=l)},null,512),[[r,s.editCoupons.percent,void 0,{number:!0}]])]),o("div",z,[G,u(o("input",{id:"due_date",type:"date",class:"form-control",placeholder:"請輸入到期日","onUpdate:modelValue":t[2]||(t[2]=l=>s.due_date=l)},null,512),[[r,s.due_date]])])]),o("div",J,[K,u(o("input",{id:"code",type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[3]||(t[3]=l=>s.editCoupons.code=l)},null,512),[[r,s.editCoupons.code]])]),o("div",Q,[o("div",W,[u(o("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=l=>s.editCoupons.is_enabled=l)},null,512),[[x,s.editCoupons.is_enabled]]),X])])])])]),o("div",Y,[Z,o("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(...l)=>e.updateCoupons&&e.updateCoupons(...l))}," 確認 ")])])])],512)}const to=y(D,[["render",oo]]);var eo={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:m}=eo,so={data(){return{coupons:[],tempCoupons:{},pages:{},modalCoupons:null,modalDel:null,isNew:!1}},methods:{getCoupons(n=1){const t=`${_}/api/${m}/admin/coupons?page=${n}`;console.log(t),h.get(t).then(e=>{console.log(e),this.coupons=e.data.coupons,this.pages=e.data.pagination}).catch(e=>{alert(e.message)})},openModal(n,t){n==="new"?(this.tempCoupons={due_date:new Date().getTime()/1e3},this.isNew=!0,this.$refs.pModal.openModal()):n==="edit"?(this.tempCoupons={...t},this.isNew=!1,this.$refs.pModal.openModal()):n==="delete"&&(this.tempCoupons={...t},this.modalDel.show())},updateCoupons(){let n=`${_}/api/${m}/admin/coupon`,t="post";this.isNew||(n=`${_}/api/${m}/admin/coupon/${this.tempCoupons.id}`,t="put"),h[t](n,{data:this.tempCoupons}).then(e=>{console.log(e.message),alert(e.message),this.getCoupons(),this.$refs.pModal.closeModal(),this.tempCoupons={}}).catch(e=>{console.log(e),alert(e.message)})},delCoupons(){const n=`${_}/api/${m}/admin/coupon/${this.tempCoupons.id}`;h.delete(n).then(t=>{alert(t.data.message),this.modalDel.hide(),this.getCoupons()}).catch(t=>{alert(t.data.message)})}},mounted(){this.getCoupons(),this.modalDel=new v(this.$refs.delCouponsModal)},components:{pagination:k,couponsModal:to}},no={class:"container"},lo={class:"text-end mt-4"},ao={class:"table mt-4"},io=o("thead",null,[o("tr",null,[o("th",{width:"120"},"優惠名稱"),o("th",{width:"120"},"折扣"),o("th",{width:"120"},"到期日"),o("th",{width:"150"},"是否啟用"),o("th",{width:"80"}," 編輯 ")])],-1),co={key:0,class:"text-success"},uo={key:1},po={class:"btn-group"},ro=["onClick"],_o=["onClick"],mo={id:"delCouponsModal",ref:"delCouponsModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},ho={class:"modal-dialog"},bo={class:"modal-content border-0"},Co=o("div",{class:"modal-header bg-danger text-white"},[o("h5",{id:"delProductModalLabel",class:"modal-title"},[o("span",null,"刪除優惠卷")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),fo={class:"modal-body"},go={class:"text-danger"},vo={class:"modal-footer"},yo=o("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Mo(n,t,e,M,s,a){const l=g("pagination"),w=g("coupons-modal");return i(),c(b,null,[o("div",no,[o("div",lo,[o("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=d=>a.openModal("new"))}," 建立新的優惠卷 ")]),o("table",ao,[io,o("tbody",null,[(i(!0),c(b,null,V(s.coupons,d=>(i(),c("tr",{key:d.id},[o("td",null,p(d.title),1),o("td",null,p(d.percent),1),o("td",null,p(d.due_date),1),o("td",null,[d.is_enabled?(i(),c("span",co,"啟用")):(i(),c("span",uo,"未啟用"))]),o("td",null,[o("div",po,[o("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:$=>a.openModal("edit",d)}," 編輯 ",8,ro),o("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:$=>a.openModal("delete",d)}," 刪除 ",8,_o)])])]))),128))])]),C(l,{pages:s.pages,"get-coupons":a.getCoupons},null,8,["pages","get-coupons"])]),C(w,{"temp-coupons":s.tempCoupons,"update-coupons":a.updateCoupons,ref:"pModal"},null,8,["temp-coupons","update-coupons"]),o("div",mo,[o("div",ho,[o("div",bo,[Co,o("div",fo,[f(" 是否刪除 "),o("strong",go,p(s.tempCoupons.title),1),f(" 商品(刪除後將無法恢復)。 ")]),o("div",vo,[yo,o("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=(...d)=>a.delCoupons&&a.delCoupons(...d))}," 確認刪除 ")])])])],512)],64)}const xo=y(so,[["render",Mo]]);export{xo as default};