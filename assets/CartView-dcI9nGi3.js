import{a as i,S as r}from"./sweetalert2.all-9OAsj1rz.js";import{P as N,N as S,S as $,a as E}from"./pagination-o0362DoM.js";import{_ as R,c as p,b as t,F as v,g as x,n as P,i as C,v as k,t as n,d as f,w as b,r as g,o as c,e as y,k as U}from"./index-w6KDmUW0.js";var q={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:u}=q,B={data(){return{products:[],carts:{},coupon_code:""}},setup(){return{modules:[N,S]}},methods:{getCart(){const e=`${_}/api/${u}/cart`;i.get(e).then(o=>{this.carts=o.data.data}).catch(o=>{r.fire(o.response.data.message)})},changeCartQty(e,o=1){const a={product_id:e.product_id,qty:o},m=`${_}/api/${u}/cart/${e.id}`;i.put(m,{data:a}).then(()=>{this.getCart()}).catch(d=>{r.fire(d.response.data.message)})},removeCartItem(e){const o=`${_}/api/${u}/cart/${e}`;i.delete(o).then(()=>{this.getCart()}).catch(a=>{r.fire(a.response.data.message)})},addCouponCode(){const e=`${_}/api/${u}/coupon`,o={code:this.coupon_code};i.post(e,{data:o}).then(a=>{r.fire(a.data.message),this.getCart()}).catch(a=>{r.fire(a.response.data.message)})},getProducts(){const e=`${_}/api/${u}/products`;i.get(e).then(o=>{this.products=o.data.products}).catch(o=>{r.fire(o.response.data.message)})}},mounted(){this.getProducts(),this.getCart()},components:{Swiper:$,SwiperSlide:E}},I={class:"container pt-7"},L={class:"mt-3"},D=t("h3",{class:"mt-3 mb-4"},"購物車",-1),j={class:"row"},A={class:"col-md-8"},Q={class:"table"},F=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0"},"品項"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0"},"金額"),t("th",{scope:"col",class:"border-0"})])],-1),H={key:0},M={scope:"row",class:"border-0 px-0 font-weight-normal py-4 d-flex align-items-center"},O=["src"],z={class:"mb-0 fw-bold ms-3"},G={class:"border-0 align-middle",style:{"max-width":"160px"}},J={class:"input-group pe-5"},K={class:"input-group-prepend"},W=["onClick","disabled"],X=t("i",{class:"fas fa-minus"},null,-1),Y=["onUpdate:modelValue"],Z={class:"input-group-append"},tt=["onClick"],st=t("i",{class:"fas fa-plus"},null,-1),ot={class:"border-0 align-middle"},et={class:"mb-0 ms-auto"},dt={class:"border-0 align-middle"},at=["onClick"],nt=t("i",{class:"fas fa-times"},null,-1),rt={class:"input-group w-50 mb-3"},ct={class:"input-group-append"},lt=t("i",{class:"bi bi-send-fill"},null,-1),it=[lt],pt={class:"col-md-4"},_t={class:"border p-4 mb-4"},ut=t("h4",{class:"fw-bold mb-4"},"訂單明細",-1),ht={class:"table text-muted border-bottom"},bt=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 訂單金額 ",-1),mt={class:"text-end border-0 px-0 pt-4"},ft=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 折扣 ",-1),gt={class:"text-end border-0 px-0 pt-0 pb-4"},yt={class:"d-flex justify-content-between mt-4"},wt=t("p",{class:"mb-0 h4 fw-bold"},"總額",-1),vt={class:"mb-0 h4 fw-bold"},xt={class:"my-5"},Ct=t("h3",{class:"fw-bold"},"其他商品",-1),kt={class:"swiper-container mt-4 mb-5"},Vt={class:"swiper-wrapper"},Tt={class:"swiper-slide"},Nt={class:"card border-0 mb-4 position-relative position-relative"},St=["src"],$t=t("a",{href:"#",class:"text-dark"},null,-1),Et={class:"card-body p-0"},Rt={class:"mb-0 mt-3 fw-bold",style:{color:"#4e342e"}},Pt={class:"card-text mb-0 text-primary-emphasis"},Ut={class:"text-muted"},qt={class:"text-muted"};function Bt(e,o,a,m,d,l){const w=g("RouterLink"),V=g("swiper-slide"),T=g("swiper");return c(),p("div",I,[t("div",L,[D,t("div",j,[t("div",A,[t("table",Q,[F,d.carts.carts?(c(),p("tbody",H,[(c(!0),p(v,null,x(d.carts.carts,s=>(c(),p("tr",{class:"border-bottom border-top",key:s.id},[t("th",M,[t("img",{src:s.product.imageUrl,alt:"",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,O),t("p",z,n(s.product.title),1)]),t("td",G,[t("div",J,[t("div",K,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:h=>{s.qty--,l.changeCartQty(s,s.qty)},disabled:s.qty===1},[y(" - "),X],8,W)]),C(t("input",{type:"number",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",min:"1","onUpdate:modelValue":h=>s.qty=h,readonly:""},null,8,Y),[[k,s.qty]]),t("div",Z,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:h=>{s.qty++,l.changeCartQty(s,s.qty)}},[y(" + "),st],8,tt)])])]),t("td",ot,[t("p",et,"NT$"+n(s.total),1)]),t("td",dt,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:h=>l.removeCartItem(s.id)}," x",8,at),nt])]))),128))])):P("",!0)]),t("div",rt,[C(t("input",{type:"text",class:"form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none",placeholder:"優惠碼","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":o[0]||(o[0]=s=>d.coupon_code=s)},null,512),[[k,d.coupon_code]]),t("div",ct,[t("button",{class:"btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0",type:"button",id:"button-addon2",onClick:o[1]||(o[1]=(...s)=>l.addCouponCode&&l.addCouponCode(...s))},it)])])]),t("div",pt,[t("div",_t,[ut,t("table",ht,[t("tbody",null,[t("tr",null,[bt,t("td",mt," NT$"+n(d.carts.total),1)]),t("tr",null,[ft,t("td",gt,n(d.carts.final_total-d.carts.total),1)])])]),t("div",yt,[wt,t("p",vt,"NT$"+n(d.carts.final_total),1)]),f(w,{class:"btn btn-dark w-100 mt-4",to:"/checkout",style:{"background-color":"#7fa185"}},{default:b(()=>[y(" 去買單")]),_:1})])])]),t("div",xt,[Ct,t("div",kt,[t("div",Vt,[f(T,{ref:"{swiperRef}",slidesPerView:3,centeredSlides:!0,spaceBetween:30,pagination:{type:"fraction"},navigation:!0,modules:m.modules},{default:b(()=>[(c(!0),p(v,null,x(d.products,s=>(c(),U(V,{key:s.id},{default:b(()=>[t("div",Tt,[t("div",Nt,[f(w,{class:"text-decoration-none",to:`/product/${s.id}`},{default:b(()=>[t("img",{src:s.imageUrl,class:"card-img-top rounded-0"},null,8,St),$t,t("div",Et,[t("h4",Rt,n(s.title),1),t("p",Pt," NT$"+n(s.price),1),t("p",Ut,[t("span",qt,[t("del",null,"NT$"+n(s.origin_price),1)])])])]),_:2},1032,["to"])])])]),_:2},1024))),128))]),_:1},8,["modules"])])])])])])}const jt=R(B,[["render",Bt]]);export{jt as default};
