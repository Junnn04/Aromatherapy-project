import{a as b}from"./axios-L6U4YIEh.js";import{M as y,p as w}from"./PaginationComponents-jJpgWGfX.js";import{_ as U,o as n,c as a,b as t,j as r,v as c,F as P,g as x,l as V,n as C,d as g,e as f,t as p,r as v}from"./index-SlvrNoUn.js";const A={props:["tempProduct","updateProduct"],data(){return{modalProduct:null,editProduct:{}}},methods:{openModal(){this.modalProduct.show()},closeModal(){this.modalProduct.hide()}},watch:{tempProduct(){this.editProduct=this.tempProduct}},mounted(){this.modalProduct=new y(this.$refs.productModal),this.editProduct=this.tempProduct}},D={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},$={class:"modal-dialog modal-xl"},E={class:"modal-content border-0"},L={class:"modal-header bg-dark text-white"},T={id:"productModalLabel",class:"modal-title"},N={key:0},R={key:1},j=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),B={class:"modal-body"},I={class:"row"},S={class:"col-sm-4"},F={class:"mb-3"},H=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),O=["src"],q=t("h3",{class:"mb-3"},"新增多圖",-1),z={key:0},G={class:"mb-3"},J=t("label",{class:"form-label"},"圖片網址",-1),K=["onUpdate:modelValue"],Q=["src"],W={key:0},X={key:1},Y={class:"col-sm-8"},Z={class:"mb-3"},tt=t("label",{for:"title",class:"form-label"},"標題",-1),ot={class:"row"},et={class:"mb-3 col-md-6"},st=t("label",{for:"category",class:"form-label"},"分類",-1),dt={class:"mb-3 col-md-6"},lt=t("label",{for:"unit",class:"form-label"},"單位",-1),it={class:"row"},nt={class:"mb-3 col-md-6"},at=t("label",{for:"origin_price",class:"form-label"},"原價",-1),rt={class:"mb-3 col-md-6"},ct=t("label",{for:"price",class:"form-label"},"售價",-1),ut=t("hr",null,null,-1),mt={class:"mb-3"},pt=t("label",{for:"description",class:"form-label"},"產品描述",-1),_t={class:"mb-3"},ht=t("label",{for:"content",class:"form-label"},"說明內容",-1),bt={class:"mb-3"},Pt={class:"form-check"},gt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),ft={class:"modal-footer"},vt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function yt(l,o,d,M,e,u){return n(),a("div",D,[t("div",$,[t("div",E,[t("div",L,[t("h5",T,[l.isNew?(n(),a("span",N,"新增產品")):(n(),a("span",R,"編輯產品"))]),j]),t("div",B,[t("div",I,[t("div",S,[t("div",F,[H,r(t("input",{id:"imageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=s=>e.editProduct.imageUrl=s)},null,512),[[c,e.editProduct.imageUrl]]),t("img",{class:"img-fluid",src:d.tempProduct.imageUrl},null,8,O)]),q,Array.isArray(d.tempProduct.imagesUrl)?(n(),a("div",z,[(n(!0),a(P,null,x(e.editProduct.imagesUrl,(s,m)=>(n(),a("div",{class:"mb-1",key:m},[t("div",G,[J,r(t("input",{type:"text","onUpdate:modelValue":i=>e.editProduct.imagesUrl[m]=i,class:"form-control",placeholder:"輸入圖片網址"},null,8,K),[[c,e.editProduct.imagesUrl[m]]])]),t("img",{src:s,class:"img-fluid"},null,8,Q)]))),128)),!d.tempProduct.imagesUrl.length||d.tempProduct.imagesUrl[d.tempProduct.imagesUrl.length-1]?(n(),a("div",W,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=s=>e.editProduct.imagesUrl.push(""))}," 新增圖片 ")])):(n(),a("div",X,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>e.editProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):V("",!0)]),t("div",Y,[t("div",Z,[tt,r(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[3]||(o[3]=s=>e.editProduct.title=s)},null,512),[[c,e.editProduct.title]])]),t("div",ot,[t("div",et,[st,r(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[4]||(o[4]=s=>e.editProduct.category=s)},null,512),[[c,e.editProduct.category]])]),t("div",dt,[lt,r(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[5]||(o[5]=s=>e.editProduct.unit=s)},null,512),[[c,e.editProduct.unit]])])]),t("div",it,[t("div",nt,[at,r(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[6]||(o[6]=s=>e.editProduct.origin_price=s)},null,512),[[c,e.editProduct.origin_price,void 0,{number:!0}]])]),t("div",rt,[ct,r(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[7]||(o[7]=s=>e.editProduct.price=s)},null,512),[[c,e.editProduct.price,void 0,{number:!0}]])])]),ut,t("div",mt,[pt,r(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[8]||(o[8]=s=>e.editProduct.description=s)},`
         `,512),[[c,e.editProduct.description]])]),t("div",_t,[ht,r(t("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":o[9]||(o[9]=s=>e.editProduct.content=s)},`
         `,512),[[c,e.editProduct.content]])]),t("div",bt,[t("div",Pt,[r(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[10]||(o[10]=s=>e.editProduct.is_enabled=s)},null,512),[[C,e.editProduct.is_enabled]]),gt])])])])]),t("div",ft,[vt,t("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=(...s)=>d.updateProduct&&d.updateProduct(...s))}," 確認 ")])])])],512)}const Ut=U(A,[["render",yt]]);var xt={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:h}=xt,Mt={data(){return{apiUrl:"https://ec-course-api.hexschool.io",apiPath:"junapi",products:[],tempProduct:{imagesUrl:""},pages:{},modalProduct:null,modalDel:null,isNew:!1}},methods:{getProducts(l=1){const o=`${_}/api/${h}/admin/products?page=${l}`;console.log(o),b.get(o).then(d=>{console.log(d),this.products=d.data.products,this.pages=d.data.pagination}).catch(d=>{alert(d.data.message)})},openModal(l,o){l==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.pModal.openModal()):l==="edit"?(this.tempProduct={...o},Array.isArray(this.tempProduct.imagesUrl)||(this.tempProduct.imagesUrl=[]),this.isNew=!1,this.$refs.pModal.openModal()):l==="delete"&&(this.tempProduct={...o},this.modalDel.show())},updateProduct(){let l=`${_}/api/${h}/admin/product`,o="post";this.isNew||(l=`${_}/api/${h}/admin/product/${this.tempProduct.id}`,o="put"),b[o](l,{data:this.tempProduct}).then(d=>{alert(d.data.message),this.getProducts(),this.$refs.pModal.closeModal(),this.tempProduct={}}).catch(d=>{alert(d.data.message)})},delProduct(){const l=`${_}/api/${h}/admin/product/${this.tempProduct.id}`;b.delete(l).then(o=>{alert(o.data.message),this.modalDel.hide(),this.getProducts()}).catch(o=>{alert(o.data.message)})}},mounted(){this.getProducts(),this.modalDel=new y(this.$refs.delProductModal)},components:{pagination:w,productModal:Ut}},kt={class:"container"},wt={class:"text-end mt-4"},Vt={class:"table mt-4"},Ct=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價 "),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),At={class:"text-end"},Dt={class:"text-end"},$t={key:0,class:"text-success"},Et={key:1},Lt={class:"btn-group"},Tt=["onClick"],Nt=["onClick"],Rt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},jt={class:"modal-dialog"},Bt={class:"modal-content border-0"},It=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),St={class:"modal-body"},Ft={class:"text-danger"},Ht={class:"modal-footer"},Ot=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function qt(l,o,d,M,e,u){const s=v("pagination"),m=v("product-modal");return n(),a(P,null,[t("div",kt,[t("div",wt,[t("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=i=>u.openModal("new"))},"建立新的產品")]),t("table",Vt,[Ct,t("tbody",null,[(n(!0),a(P,null,x(e.products,i=>(n(),a("tr",{key:i.id},[t("td",null,p(i.category),1),t("td",null,p(i.title),1),t("td",At,p(i.origin_price),1),t("td",Dt,p(i.price),1),t("td",null,[i.is_enabled?(n(),a("span",$t,"啟用")):(n(),a("span",Et,"未啟用"))]),t("td",null,[t("div",Lt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:k=>u.openModal("edit",i)}," 編輯 ",8,Tt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:k=>u.openModal("delete",i)}," 刪除 ",8,Nt)])])]))),128))])]),g(s,{pages:e.pages,"get-products":u.getProducts},null,8,["pages","get-products"])]),g(m,{"temp-product":e.tempProduct,"update-product":u.updateProduct,ref:"pModal"},null,8,["temp-product","update-product"]),t("div",Rt,[t("div",jt,[t("div",Bt,[It,t("div",St,[f(" 是否刪除 "),t("strong",Ft,p(e.tempProduct.title),1),f(" 商品(刪除後將無法恢復)。 ")]),t("div",Ht,[Ot,t("button",{type:"button",class:"btn btn-danger",onClick:o[1]||(o[1]=(...i)=>u.delProduct&&u.delProduct(...i))}," 確認刪除 ")])])])],512)],64)}const Kt=U(Mt,[["render",qt]]);export{Kt as default};