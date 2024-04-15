import{a as f,S as v}from"./sweetalert2.all-j9gesYv3.js";import{l as k}from"./index-aZAj9afE.js";/* empty css              */import{_ as S,a as P,c as l,b as s,d as a,w as r,F as n,g as p,t as i,i as T,v as L,j as V,f as N,r as u,o as c,h as w,e as U}from"./index-vVl8uK9N.js";import{c as E}from"./cartStore-YTVCGzPp.js";import{P as R,N as B,S as A,a as C}from"./pagination-xAuZPbug.js";import"./vue.runtime.esm-bundler-5bDgBDAZ.js";var D={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:b,VITE_PATH:x}=D,j={data(){return{products:[],product:{imagesUrl:[]},qty:1,isLoading:!1,fullPage:!0}},setup(){return{modules:[R,B]}},watch:{"$route.params":{handler(){this.getProduct()},deep:!0}},methods:{getProduct(){this.isLoading=!0;const{id:d}=this.$route.params;f.get(`${b}/api/${x}/product/${d}`).then(o=>{this.product=o.data.product,this.isLoading=!1}).catch(o=>{v.fire(o.response.data.message),this.isLoading=!1})},getProducts(){const d=`${b}/api/${x}/products`;f.get(d).then(o=>{this.products=o.data.products}).catch(o=>{v.fire(o.response.data.message)})},...P(E,["addToCart"])},mounted(){this.getProduct(),this.getProducts()},components:{Swiper:A,SwiperSlide:C,loading:k}},q={class:"container pt-7"},I={class:"row align-items-center"},M={class:"col-md-6"},F=["src","alt"],H=["src","alt"],O={class:"row pt-3"},z=["src"],G={class:"col-md-6"},J={"aria-label":"breadcrumb"},K={class:"breadcrumb bg-white px-0 mb-0 py-3"},Q={class:"breadcrumb-item"},W={class:"breadcrumb-item"},X={class:"fw-bold h1 mb-1"},Y={class:"mt-4"},Z={class:"text-muted"},$={class:"mb-0 text-muted text-end"},ss={class:"h4 fw-bold text-end"},ts={class:"row align-items-center"},es={class:"col-6"},os={class:"input-group my-3 bg-light rounded"},is=["value"],cs={class:"col-6"},rs=N('<div class="mt-5"><h3>｜保存說明</h3><p class="mt-3"> 建議將產品存放在陰涼乾燥的地方，避免陽光直射。雖然未開封的保存期限標示為八個月，但開封後的保存時間會受到儲存環境的影響， 包括開封頻率、光照、溫度和潮濕度等因素。為確保最佳品質，建議在開封後盡快使用產品，並根據個人儲存環境的情況，合理評估使用期限。 </p><h3 class="mt-5">｜注意事項</h3><p class="mt-3"> 本產品為純精油，可直接添加至擴香器中或與酒精混合後用於空間擴香。若您選擇自行混合精油和植物油，建議首次使用時以較低濃度進行混合， 並在手肘內側皮膚上塗抹適量，觀察是否有過敏反應（如紅腫、癢等）。如未出現過敏反應，可逐漸增加使用濃度和頻率。 </p><p class="mt-3"> 由於每個人對天然物質的反應各異，若出現不適或過敏反應，應立即停止使用。如果皮膚受到刺激，可使用大量植物油反覆塗抹以降低精油濃度。如有需要，請咨詢專業芳療人員或尋求醫療協助。 </p><p class="mt-3"> 由於植物受到環境條件的影響，每批產品的氣味、顏色、質地等感官屬性可能會有所不同。這是正常現象，請您在購買前審慎考慮，感謝您的理解與支持！ </p></div>',1),ls={class:"my-5"},as=s("h3",{class:"fw-bold"},"其他商品",-1),ds={class:"swiper-container mt-4 mb-5"},ns={class:"swiper-wrapper"},ps={class:"swiper-slide"},us={class:"card border-0 mb-4 position-relative position-relative"},_s=["src"],ms=s("a",{href:"#",class:"text-dark"},null,-1),hs={class:"card-body p-0"},gs={class:"mb-0 mt-3 fw-bold",style:{color:"#4e342e"}},fs={class:"text-muted mb-0"},vs={class:"text-muted"},ws={class:"card-text text-primary-emphasis"};function bs(d,o,xs,m,e,ys){const y=u("loading"),_=u("swiper-slide"),h=u("swiper"),g=u("RouterLink");return c(),l(n,null,[s("div",null,[a(y,{active:e.isLoading,"onUpdate:active":o[0]||(o[0]=t=>e.isLoading=t),"can-cancel":!0,"is-full-page":e.fullPage,loader:"dots"},null,8,["active","is-full-page"])]),s("div",q,[s("div",I,[s("div",M,[a(h,{navigation:!0,modules:m.modules,class:"mySwiper",style:{"max-height":"500px"}},{default:r(()=>[a(_,null,{default:r(()=>[s("img",{src:e.product.imageUrl,class:"d-block w-100",alt:e.product.title},null,8,F)]),_:1}),(c(!0),l(n,null,p(e.product.imagesUrl,t=>(c(),w(_,{key:t.id},{default:r(()=>[s("img",{src:t,class:"d-block w-100",style:{"max-height":"475px","object-fit":"cover"},alt:e.product.title},null,8,H)]),_:2},1024))),128))]),_:1},8,["modules"]),s("div",O,[(c(!0),l(n,null,p(e.product.imagesUrl,t=>(c(),l("div",{class:"col-md-2 col-4",key:t.id},[s("img",{src:t,style:{"max-width":"100%"}},null,8,z)]))),128))])]),s("div",G,[s("nav",J,[s("ol",K,[s("li",Q,[a(g,{class:"text-muted",to:"/products"},{default:r(()=>[U("產品")]),_:1})]),s("li",W,i(e.product.title),1)])]),s("h2",X,i(e.product.title),1),s("p",Y,i(e.product.description),1),s("p",Z,i(e.product.content),1),s("p",$,[s("del",null,"NT$"+i(e.product.origin_price),1)]),s("p",ss,"NT$"+i(e.product.price),1),s("div",ts,[s("div",es,[s("div",os,[T(s("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":o[1]||(o[1]=t=>e.qty=t)},[(c(),l(n,null,p(20,t=>s("option",{value:t,key:t},i(t),9,is)),64))],512),[[L,e.qty]])])]),s("div",cs,[s("a",{class:"text-nowrap btn btn-dark w-100 py-2 border-0",style:{"background-color":"#7fa185"},onClick:o[2]||(o[2]=V(t=>d.addToCart(e.product.id,e.qty),["prevent"]))},"加入購物車")])])])]),rs,s("div",ls,[as,s("div",ds,[s("div",ns,[a(h,{slidesPerView:3,spaceBetween:30,pagination:{clickable:!0},modules:m.modules,class:"mySwiper"},{default:r(()=>[(c(!0),l(n,null,p(e.products,t=>(c(),w(_,{key:t.id},{default:r(()=>[a(g,{class:"text-decoration-none",to:`/product/${t.id}`},{default:r(()=>[s("div",ps,[s("div",us,[s("img",{src:t.imageUrl,class:"card-img-top rounded-0"},null,8,_s),ms,s("div",hs,[s("h4",gs,i(t.title),1),s("p",fs,[s("small",null,[s("span",vs,[s("del",null,"NT$"+i(t.origin_price),1)])])]),s("p",ws," NT$"+i(t.price),1)])])])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1},8,["modules"])])])])])],64)}const Us=S(j,[["render",bs]]);export{Us as default};
