import{a as x}from"./axios-L6U4YIEh.js";import{p as v}from"./PaginationComponents-9h1MdMhd.js";import{_ as y,c as s,b as t,d as c,w as p,F as u,aV as g,r as m,o as a,e as r,t as d}from"./index-DVPQ6Ubu.js";var w={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:k,VITE_PATH:V}=w,E={data(){return{products:[],categories:["單方精油","複方精油","薰香機"],pages:{}}},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},methods:{getProducts(_=1){const{category:h=""}=this.$route.query,i=`${k}/api/${V}/products?category=${h}&page=${_}`;console.log(i),x.get(i).then(o=>{console.log(o),this.products=o.data.products,this.pages=o.data.pagination}).catch(o=>{alert(o.data.message)})}},mounted(){this.getProducts()},components:{pagination:v}},$=t("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"400px"}},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1647011253759-5f40654d0543?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)","background-position":"center center",opacity:"0.3"}}),t("h2",{class:"fw-bold"},"享受每一刻，讓香氛點燃生活。")],-1),D={class:"container mt-md-5 mt-3 mb-7"},P={class:"row"},T={class:"col-md-4"},R={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},j={class:"card border-0"},A=t("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[t("div",{class:"d-flex justify-content-between align-items-center pe-1"},[t("h4",{class:"mb-0"}," 所有品項 "),t("i",{class:"fas fa-chevron-down"})])],-1),B={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},L={class:"card-body py-0"},O={class:"list-unstyled"},H={class:"col-md-8"},I={class:"row"},M={class:"card border-0 mb-4 position-relative position-relative"},N=["src"],S=t("a",{href:"#",class:"text-dark"},[t("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1),U={class:"card-body p-0"},q={class:"mb-0 mt-3"},C={class:"card-text mb-0"},F={class:"text-muted"},G=t("p",{class:"text-muted mt-3"},null,-1);function W(_,h,i,o,n,b){const l=m("RouterLink"),f=m("pagination");return a(),s(u,null,[$,t("div",D,[t("div",P,[t("div",T,[t("div",R,[t("div",j,[A,t("div",B,[t("div",L,[t("ul",O,[t("li",null,[c(l,{class:"py-2 d-block text-muted",to:"/products"},{default:p(()=>[r(" 全部 ")]),_:1})]),(a(!0),s(u,null,g(n.categories,e=>(a(),s("li",{key:e},[c(l,{class:"py-2 d-block text-muted",to:`/products?category=${e}`},{default:p(()=>[r(d(e),1)]),_:2},1032,["to"])]))),128))])])])])])]),t("div",H,[t("div",I,[(a(!0),s(u,null,g(n.products,e=>(a(),s("div",{class:"col-md-6",key:e.id},[t("div",M,[t("img",{src:e.imageUrl,height:"300",class:"card-img-top rounded-0 object-fit-cover",alt:"..."},null,8,N),S,t("div",U,[t("h4",q,[c(l,{to:`/product/${e.id}`},{default:p(()=>[r(d(e.title),1)]),_:2},1032,["to"])]),t("p",C,[r("NT$"+d(e.price)+" ",1),t("span",F,[t("del",null,d(e.origin_price),1)])]),G])])]))),128))]),c(f,{pages:n.pages,"get-products":b.getProducts},null,8,["pages","get-products"])])])])],64)}const K=y(E,[["render",W]]);export{K as default};
