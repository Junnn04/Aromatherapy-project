import{a as m,S as u}from"./sweetalert2.all-k9Tj1nOq.js";import{M as v}from"./bootstrap.esm-YntsZBb0.js";import{_ as y,o as r,c as n,b as e,n as b,F as g,g as f,t as l,d as k,e as O,r as x,I as M}from"./index-yeFmd6YG.js";const w={props:["pages","getOrder"]},C={"aria-label":"Page navigation example"},D={class:"pagination justify-content-center"},S=e("span",{"aria-hidden":"true"},"«",-1),V=[S],E=["onClick"],P=e("span",{"aria-hidden":"true"},"»",-1),T=[P];function N(a,t,s,$,_,i){return r(),n("nav",C,[e("ul",D,[e("li",{class:b(["page-item",{disabled:!s.pages.has_pre}]),style:{cursor:"pointer"}},[e("a",{class:"page-link","aria-label":"Previous",onClick:t[0]||(t[0]=o=>s.getOrder(s.pages.current_page-1))},V)],2),(r(!0),n(g,null,f(s.pages.total_pages,o=>(r(),n("li",{class:b(["page-item",{active:o===s.pages.current_page}]),style:{cursor:"pointer","background-color":"gray"},key:o+123},[e("a",{class:"page-link",onClick:d=>s.getOrder(o)},l(o),9,E)],2))),128)),e("li",{class:b(["page-item",{disabled:!s.pages.has_next}]),style:{cursor:"pointer"}},[e("a",{class:"page-link","aria-label":"Next",onClick:t[1]||(t[1]=o=>s.getOrder(s.pages.current_page+1))},T)],2)])])}const L=y(w,[["render",N]]);var A={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:p}=A,I={data(){return{orders:[],tempOrder:{},pages:{},modalProduct:null,modalDel:null,isNew:!1}},methods:{getOrders(a=1){const t=`${h}/api/${p}/admin/orders?page=${a}`;m.get(t).then(s=>{this.orders=s.data.orders,this.pages=s.data.pagination}).catch(s=>{u.fire(s.response.data.message)})},formatDate(a){const t=new Date(a*1e3);return`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`},openModal(a,t){a==="new"?(this.tempOrder={due_date:new Date().getTime()/1e3},this.isNew=!0,this.$refs.pModal.openModal()):a==="edit"?(this.tempOrder={...t},this.isNew=!1,this.$refs.pModal.openModal()):a==="delete"&&(this.tempOrder={...t},this.modalDel.show())},updateOrder(){let a=`${h}/api/${p}/admin/Order`,t="post";this.isNew||(a=`${h}/api/${p}/admin/Order/${this.tempOrder.id}`,t="put"),m[t](a,{data:this.tempOrder}).then(s=>{u.fire(s.data.message),this.getOrders(),this.$refs.pModal.closeModal(),this.tempOrder={}}).catch(s=>{u.fire(s.response.data.message)})},delOrder(){const a=`${h}/api/${p}/admin/order/${this.tempOrder.id}`;m.delete(a).then(t=>{u.fire(t.data.message),this.modalDel.hide(),this.getOrders()}).catch(t=>{u.fire(t.response.data.message)})}},mounted(){this.getOrders(),this.modalDel=new v(this.$refs.delOrderModal)},components:{pagination:L}},R={class:"container-fluid"},B=e("div",{class:"text-end mt-4"},null,-1),j={class:"table mt-4"},F=e("thead",null,[e("tr",null,[e("th",{width:"120"},"訂單建立日期"),e("th",{width:"120"},"訂購人"),e("th",{width:"120"},"訂購品項"),e("th",{width:"120"},"應付金額"),e("th",{width:"150"},"是否付款"),e("th",{width:"80"},"編輯")])],-1),U=["textContent"],H={class:"list-unstyled"},q={key:0,class:"text-success"},z={key:1},Y={class:"btn-group"},G=["onClick"],J={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},K={class:"modal-dialog"},Q={class:"modal-content border-0"},W=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delProductModalLabel",class:"modal-title"},[e("span",null,"刪除優惠卷")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),X={class:"modal-body"},Z={class:"text-danger"},ee={class:"modal-footer"},te=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function se(a,t,s,$,_,i){const o=x("pagination");return r(),n(g,null,[e("div",R,[B,e("table",j,[F,e("tbody",null,[(r(!0),n(g,null,f(_.orders,d=>(r(),n("tr",{key:d.id},[e("td",null,l(i.formatDate(d.create_at)),1),e("td",null,[d.user?(r(),n("span",{key:0,textContent:l(d.user.name)},null,8,U)):M("",!0)]),e("td",null,[e("ul",H,[(r(!0),n(g,null,f(d.products,c=>(r(),n("li",{key:c.id},l(c.product.title)+" 數量："+l(c.qty)+" "+l(c.product.unit),1))),128))])]),e("td",null,l(d.total),1),e("td",null,[d.is_paid?(r(),n("span",q,"已付款")):(r(),n("span",z,"未付款"))]),e("td",null,[e("div",Y,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:c=>i.openModal("delete",d)}," 刪除 ",8,G)])])]))),128))])]),k(o,{pages:_.pages,"get-order":i.getOrders},null,8,["pages","get-order"])]),e("div",J,[e("div",K,[e("div",Q,[W,e("div",X,[O(" 是否刪除 "),e("strong",Z,l(_.orders.create_at),1),O(" 商品(刪除後將無法恢復)。 ")]),e("div",ee,[te,e("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...d)=>i.delOrder&&i.delOrder(...d))}," 確認刪除 ")])])])],512)],64)}const ne=y(I,[["render",se]]);export{ne as default};