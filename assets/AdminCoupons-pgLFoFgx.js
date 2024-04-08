import{M as $}from"./bootstrap.esm-CMEQfVaF.js";import{_ as v,o as l,c as d,b as o,h as u,l as h,D as V,C,F as f,g as w,t as r,d as k,e as M,r as T}from"./index-SsVEw1IR.js";import{a as g,S as p}from"./sweetalert2.all-WMIiuvla.js";const E={props:["isNew","tempCoupons","updateCoupons"],data(){return{modalCoupons:null,editCoupons:{},due_date:""}},watch:{tempCoupons(){this.editCoupons=this.tempCoupons;const a=new Date(this.editCoupons.due_date*1e3).toISOString().split("T");[this.due_date]=a},due_date(){this.editCoupons.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{openModal(){this.modalCoupons.show()},closeModal(){this.modalCoupons.hide()}},mounted(){this.modalCoupons=new $(this.$refs.couponsModal),this.editCoupons=this.tempCoupons}},L={id:"couponsModal",ref:"couponsModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},N={class:"modal-dialog modal-xl"},S={class:"modal-content border-0"},U={class:"modal-header bg-dark text-white"},P={id:"productModalLabel",class:"modal-title"},A={key:0},I={key:1},R=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),B={class:"modal-body"},j={class:"row"},O={class:"col-sm-8"},F={class:"mb-3"},H=o("label",{for:"title",class:"form-label"},"標題",-1),z={class:"row"},q={class:"mb-3 col-md-6"},G=o("label",{for:"percent",class:"form-label"},"折扣",-1),J={class:"mb-3 col-md-6"},K=o("label",{for:"due_date",class:"form-label"},"到期日",-1),Q={class:"mb-3 col-md-6"},W=o("label",{for:"code",class:"form-label"},"優惠碼",-1),X={class:"mb-3"},Y={class:"form-check"},Z=o("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),oo={class:"modal-footer"},eo=o("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function to(a,e,t,_,n,c){return l(),d("div",L,[o("div",N,[o("div",S,[o("div",U,[o("h5",P,[t.isNew?(l(),d("span",A,"新增產品")):(l(),d("span",I,"編輯產品"))]),R]),o("div",B,[o("div",j,[o("div",O,[o("div",F,[H,u(o("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[0]||(e[0]=s=>n.editCoupons.title=s)},null,512),[[h,n.editCoupons.title]])]),o("div",z,[o("div",q,[G,u(o("input",{id:"percent",type:"number",min:"0",class:"form-control",placeholder:"請輸入折扣","onUpdate:modelValue":e[1]||(e[1]=s=>n.editCoupons.percent=s)},null,512),[[h,n.editCoupons.percent,void 0,{number:!0}]])]),o("div",J,[K,u(o("input",{id:"due_date",type:"date",class:"form-control",placeholder:"請輸入到期日","onUpdate:modelValue":e[2]||(e[2]=s=>n.due_date=s)},null,512),[[h,n.due_date]])])]),o("div",Q,[W,u(o("input",{id:"code",type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[3]||(e[3]=s=>n.editCoupons.code=s)},null,512),[[h,n.editCoupons.code]])]),o("div",X,[o("div",Y,[u(o("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=s=>n.editCoupons.is_enabled=s)},null,512),[[V,n.editCoupons.is_enabled]]),Z])])])])]),o("div",oo,[eo,o("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=(...s)=>t.updateCoupons&&t.updateCoupons(...s))}," 確認 ")])])])],512)}const x=v(E,[["render",to]]),so={props:["pages","getCoupons"]},no={"aria-label":"Page navigation example"},ao={class:"pagination justify-content-center"},lo=o("span",{"aria-hidden":"true"},"«",-1),io=[lo],co=["onClick"],uo=o("span",{"aria-hidden":"true"},"»",-1),po=[uo];function ro(a,e,t,_,n,c){return l(),d("nav",no,[o("ul",ao,[o("li",{class:C(["page-item",{disabled:!t.pages.has_pre}]),style:{cursor:"pointer"}},[o("a",{class:"page-link","aria-label":"Previous",onClick:e[0]||(e[0]=s=>t.getCoupons(t.pages.current_page-1))},io)],2),(l(!0),d(f,null,w(t.pages.total_pages,s=>(l(),d("li",{class:C(["page-item",{active:s===t.pages.current_page}]),style:{cursor:"pointer","background-color":"gray"},key:s+123},[o("a",{class:"page-link",onClick:y=>t.getCoupons(s)},r(s),9,co)],2))),128)),o("li",{class:C(["page-item",{disabled:!t.pages.has_next}]),style:{cursor:"pointer"}},[o("a",{class:"page-link","aria-label":"Next",onClick:e[1]||(e[1]=s=>t.getCoupons(t.pages.current_page+1))},po)],2)])])}const _o=v(so,[["render",ro]]);var ho={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_PATH:b}=ho,mo={data(){return{coupons:{},tempCoupons:{},pages:{},modalCoupons:null,modalDel:null,isNew:!1}},methods:{getCoupons(a=1){const e=`${m}/api/${b}/admin/coupons?page=${a}`;g.get(e).then(t=>{this.coupons=t.data.coupons,this.pages=t.data.pagination}).catch(t=>{p.fire(t.response.data.message)})},openModal(a,e){a==="new"?(this.tempCoupons={due_date:new Date().getTime()/1e3},this.isNew=!0,this.$refs.pModal.openModal()):a==="edit"?(this.tempCoupons={...e},this.isNew=!1,this.$refs.pModal.openModal()):a==="delete"&&(this.tempCoupons={...e},this.modalDel.show())},updateCoupons(){let a=`${m}/api/${b}/admin/coupon`,e="post";this.isNew||(a=`${m}/api/${b}/admin/coupon/${this.tempCoupons.id}`,e="put"),g[e](a,{data:this.tempCoupons}).then(t=>{p.fire(t.data.message),this.getCoupons(),this.$refs.pModal.closeModal(),this.tempCoupons={}}).catch(t=>{t.response.data.message.forEach(_=>{p.fire(_)})})},delCoupons(){const a=`${m}/api/${b}/admin/coupon/${this.tempCoupons.id}`;g.delete(a).then(e=>{p.fire(e.data.message),this.modalDel.hide(),this.getCoupons()}).catch(e=>{p.fire(e.response.data.message)})}},mounted(){this.getCoupons(),this.modalDel=new $(this.$refs.delCouponsModal)},components:{pagination:_o,couponsModal:x}},bo={class:"container"},Co={class:"text-end mt-4"},go={class:"table mt-4"},fo=o("thead",null,[o("tr",null,[o("th",{width:"120"},"優惠名稱"),o("th",{width:"120"},"折扣"),o("th",{width:"120"},"到期日"),o("th",{width:"150"},"是否啟用"),o("th",{width:"80"},"編輯")])],-1),vo={key:0,class:"text-success"},yo={key:1},ko={class:"btn-group"},Mo=["onClick"],$o=["onClick"],wo={id:"delCouponsModal",ref:"delCouponsModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},xo={class:"modal-dialog"},Do={class:"modal-content border-0"},Vo=o("div",{class:"modal-header bg-danger text-white"},[o("h5",{id:"delProductModalLabel",class:"modal-title"},[o("span",null,"刪除優惠卷")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),To={class:"modal-body"},Eo={class:"text-danger"},Lo={class:"modal-footer"},No=o("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function So(a,e,t,_,n,c){const s=T("pagination"),y=x;return l(),d(f,null,[o("div",bo,[o("div",Co,[o("button",{class:"btn btn-primary border-0",style:{"background-color":"#7fa185"},onClick:e[0]||(e[0]=i=>c.openModal("new"))}," 建立新的優惠卷 ")]),o("table",go,[fo,o("tbody",null,[(l(!0),d(f,null,w(n.coupons,i=>(l(),d("tr",{key:i.id},[o("td",null,r(i.title),1),o("td",null,r(i.percent),1),o("td",null,r(i.due_date),1),o("td",null,[i.is_enabled?(l(),d("span",vo,"啟用")):(l(),d("span",yo,"未啟用"))]),o("td",null,[o("div",ko,[o("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:D=>c.openModal("edit",i)}," 編輯 ",8,Mo),o("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:D=>c.openModal("delete",i)}," 刪除 ",8,$o)])])]))),128))])]),k(s,{pages:n.pages,"get-coupons":c.getCoupons},null,8,["pages","get-coupons"])]),k(y,{"temp-coupons":n.tempCoupons,"update-coupons":c.updateCoupons,ref:"pModal"},null,8,["temp-coupons","update-coupons"]),o("div",wo,[o("div",xo,[o("div",Do,[Vo,o("div",To,[M(" 是否刪除 "),o("strong",Eo,r(n.tempCoupons.title),1),M(" 商品(刪除後將無法恢復)。 ")]),o("div",Lo,[No,o("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=(...i)=>c.delCoupons&&c.delCoupons(...i))}," 確認刪除 ")])])])],512)],64)}const Io=v(mo,[["render",So]]);export{Io as default};
