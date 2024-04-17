import{M as $}from"./bootstrap.esm-YntsZBb0.js";import{_ as f,o as l,c as d,b as t,i as u,k as _,C as V,n as b,F as g,g as w,t as r,d as k,e as M,r as S}from"./index-yeFmd6YG.js";import{a as C,S as p}from"./sweetalert2.all-k9Tj1nOq.js";const T={props:["isNew","tempCoupons","updateCoupons"],data(){return{modalCoupons:null,editCoupons:{},due_date:""}},watch:{tempCoupons(){this.editCoupons=this.tempCoupons;const n=new Date(this.editCoupons.due_date*1e3).toISOString().split("T");[this.due_date]=n},due_date(){this.editCoupons.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{openModal(){this.modalCoupons.show()},closeModal(){this.modalCoupons.hide()}},mounted(){this.modalCoupons=new $(this.$refs.couponsModal),this.editCoupons=this.tempCoupons}},E={id:"couponsModal",ref:"couponsModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},L={class:"modal-dialog modal-xl"},N={class:"modal-content border-0"},U={class:"modal-header bg-dark text-white"},P={id:"productModalLabel",class:"modal-title"},A={key:0},I={key:1},R=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},B={class:"row"},F={class:"col-sm-8"},O={class:"mb-3"},H=t("label",{for:"title",class:"form-label"},"標題",-1),z={class:"row"},Y={class:"mb-3 col-md-6"},q=t("label",{for:"percent",class:"form-label"},"折扣",-1),G={class:"mb-3 col-md-6"},J=t("label",{for:"due_date",class:"form-label"},"到期日",-1),K={class:"mb-3 col-md-6"},Q=t("label",{for:"code",class:"form-label"},"優惠碼",-1),W={class:"mb-3"},X={class:"form-check"},Z=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),tt={class:"modal-footer"},et=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ot(n,e,o,v,a,i){return l(),d("div",E,[t("div",L,[t("div",N,[t("div",U,[t("h5",P,[o.isNew?(l(),d("span",A,"新增產品")):(l(),d("span",I,"編輯產品"))]),R]),t("div",j,[t("div",B,[t("div",F,[t("div",O,[H,u(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[0]||(e[0]=s=>a.editCoupons.title=s)},null,512),[[_,a.editCoupons.title]])]),t("div",z,[t("div",Y,[q,u(t("input",{id:"percent",type:"number",min:"0",class:"form-control",placeholder:"請輸入折扣","onUpdate:modelValue":e[1]||(e[1]=s=>a.editCoupons.percent=s)},null,512),[[_,a.editCoupons.percent,void 0,{number:!0}]])]),t("div",G,[J,u(t("input",{id:"due_date",type:"date",class:"form-control",placeholder:"請輸入到期日","onUpdate:modelValue":e[2]||(e[2]=s=>a.due_date=s)},null,512),[[_,a.due_date]])])]),t("div",K,[Q,u(t("input",{id:"code",type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[3]||(e[3]=s=>a.editCoupons.code=s)},null,512),[[_,a.editCoupons.code]])]),t("div",W,[t("div",X,[u(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=s=>a.editCoupons.is_enabled=s)},null,512),[[V,a.editCoupons.is_enabled]]),Z])])])])]),t("div",tt,[et,t("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=(...s)=>o.updateCoupons&&o.updateCoupons(...s))}," 確認 ")])])])],512)}const x=f(T,[["render",ot]]),st={props:["pages","getCoupons"]},nt={"aria-label":"Page navigation example"},at={class:"pagination justify-content-center"},lt=t("span",{"aria-hidden":"true"},"«",-1),dt=[lt],it=["onClick"],ct=t("span",{"aria-hidden":"true"},"»",-1),ut=[ct];function pt(n,e,o,v,a,i){return l(),d("nav",nt,[t("ul",at,[t("li",{class:b(["page-item",{disabled:!o.pages.has_pre}]),style:{cursor:"pointer"}},[t("a",{class:"page-link","aria-label":"Previous",onClick:e[0]||(e[0]=s=>o.getCoupons(o.pages.current_page-1))},dt)],2),(l(!0),d(g,null,w(o.pages.total_pages,s=>(l(),d("li",{class:b(["page-item",{active:s===o.pages.current_page}]),style:{cursor:"pointer","background-color":"gray"},key:s+123},[t("a",{class:"page-link",onClick:y=>o.getCoupons(s)},r(s),9,it)],2))),128)),t("li",{class:b(["page-item",{disabled:!o.pages.has_next}]),style:{cursor:"pointer"}},[t("a",{class:"page-link","aria-label":"Next",onClick:e[1]||(e[1]=s=>o.getCoupons(o.pages.current_page+1))},ut)],2)])])}const rt=f(st,[["render",pt]]);var _t={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:m}=_t,ht={data(){return{coupons:{},tempCoupons:{},pages:{},modalCoupons:null,modalDel:null,isNew:!1}},methods:{getCoupons(n=1){const e=`${h}/api/${m}/admin/coupons?page=${n}`;C.get(e).then(o=>{this.coupons=o.data.coupons,this.pages=o.data.pagination}).catch(o=>{p.fire(o.response.data.message)})},formatDate(n){const e=new Date(n*1e3);return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`},openModal(n,e){n==="new"?(this.tempCoupons={due_date:new Date().getTime()/1e3},this.isNew=!0,this.$refs.pModal.openModal()):n==="edit"?(this.tempCoupons={...e},this.isNew=!1,this.$refs.pModal.openModal()):n==="delete"&&(this.tempCoupons={...e},this.modalDel.show())},updateCoupons(){let n=`${h}/api/${m}/admin/coupon`,e="post";this.isNew||(n=`${h}/api/${m}/admin/coupon/${this.tempCoupons.id}`,e="put"),C[e](n,{data:this.tempCoupons}).then(o=>{p.fire(o.data.message),this.getCoupons(),this.$refs.pModal.closeModal(),this.tempCoupons={}}).catch(o=>{p.fire(o.response.data.message.join(`
`))})},delCoupons(){const n=`${h}/api/${m}/admin/coupon/${this.tempCoupons.id}`;C.delete(n).then(e=>{p.fire(e.data.message),this.modalDel.hide(),this.getCoupons()}).catch(e=>{p.fire(e.response.data.message)})}},mounted(){this.getCoupons(),this.modalDel=new $(this.$refs.delCouponsModal)},components:{pagination:rt,couponsModal:x}},mt={class:"container-fluid"},bt={class:"text-end mt-4"},Ct={class:"table mt-4"},gt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"優惠名稱"),t("th",{width:"120"},"折扣"),t("th",{width:"120"},"到期日"),t("th",{width:"150"},"是否啟用"),t("th",{width:"80"},"編輯")])],-1),ft={key:0,class:"text-success"},vt={key:1},yt={class:"btn-group"},kt=["onClick"],Mt=["onClick"],$t={id:"delCouponsModal",ref:"delCouponsModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},wt={class:"modal-dialog"},xt={class:"modal-content border-0"},Dt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除優惠卷")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Vt={class:"modal-body"},St={class:"text-danger"},Tt={class:"modal-footer"},Et=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Lt(n,e,o,v,a,i){const s=S("pagination"),y=x;return l(),d(g,null,[t("div",mt,[t("div",bt,[t("button",{class:"btn btn-primary border-0",style:{"background-color":"#7fa185"},onClick:e[0]||(e[0]=c=>i.openModal("new"))}," 建立新的優惠卷 ")]),t("table",Ct,[gt,t("tbody",null,[(l(!0),d(g,null,w(a.coupons,c=>(l(),d("tr",{key:c.id},[t("td",null,r(c.title),1),t("td",null,r(c.percent),1),t("td",null,r(i.formatDate(c.due_date)),1),t("td",null,[c.is_enabled?(l(),d("span",ft,"啟用")):(l(),d("span",vt,"未啟用"))]),t("td",null,[t("div",yt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:D=>i.openModal("edit",c)}," 編輯 ",8,kt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:D=>i.openModal("delete",c)}," 刪除 ",8,Mt)])])]))),128))])]),k(s,{pages:a.pages,"get-coupons":i.getCoupons},null,8,["pages","get-coupons"])]),k(y,{"temp-coupons":a.tempCoupons,"update-coupons":i.updateCoupons,ref:"pModal"},null,8,["temp-coupons","update-coupons"]),t("div",$t,[t("div",wt,[t("div",xt,[Dt,t("div",Vt,[M(" 是否刪除 "),t("strong",St,r(a.tempCoupons.title),1),M(" 商品(刪除後將無法恢復)。 ")]),t("div",Tt,[Et,t("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=(...c)=>i.delCoupons&&i.delCoupons(...c))}," 確認刪除 ")])])])],512)],64)}const At=f(ht,[["render",Lt]]);export{At as default};