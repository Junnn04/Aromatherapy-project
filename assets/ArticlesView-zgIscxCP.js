import{a as d,S as g}from"./sweetalert2.all-j9gesYv3.js";import{l as y}from"./index-aZAj9afE.js";/* empty css              */import{_ as L,c as l,d as p,b as t,F as u,g as x,t as n,r as _,o as c,j as b,e as k}from"./index-vVl8uK9N.js";import"./vue.runtime.esm-bundler-5bDgBDAZ.js";var A={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:m}=A,T={data(){return{articles:[],article:[],isLoading:!1,fullPage:!0}},methods:{getArticles(o=1){this.isLoading=!0;const a=`${h}/api/${m}/articles?page=${o}`;d.get(a).then(e=>{this.articles=e.data.articles,this.pages=e.data.pagination,this.isLoading=!1}).catch(e=>{g.fire(e.response.data.message),this.isLoading=!1})},getArticle(o){this.isLoading=!0;const a=`${h}/api/${m}/article/${o}`;d.get(a).then(e=>{this.article=e.data.article,this.isLoading=!1}).catch(e=>{g.fire(e.response.data.message),this.isLoading=!1})}},mounted(){this.getArticles()},components:{loading:y}},V=t("div",{class:"position-relative"},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://i.postimg.cc/FKQNPW7C/store.jpg)","background-position":"center center",opacity:"0.3","background-repeat":"no-repeat","background-size":"100% auto"}}),t("div",{class:"container d-flex flex-column",style:{"min-height":"50vh"}})],-1),E={class:"container"},j={class:"row justify-content-center"},w={class:"text-center"},P={class:"table table-hover align-middle mt-4"},S=["src","alt"],C={style:{"text-align":"left",cursor:"pointer"}},R=["onClick"],U={class:"row justify-content-center py-5"},B={class:"col-md-8"},D={class:"text-center",style:{color:"#4e342e"}},H={class:"mt-5 text-end"},I=["src"],M=["innerHTML"];function N(o,a,e,F,s,r){const f=_("loading"),v=_("pagination");return c(),l(u,null,[p(f,{active:s.isLoading,"onUpdate:active":a[0]||(a[0]=i=>s.isLoading=i),"can-cancel":!0,"on-cancel":o.onCancel,"is-full-page":s.fullPage,loader:"dots"},null,8,["active","on-cancel","is-full-page"]),V,t("div",E,[t("div",j,[t("div",w,[t("table",P,[t("tbody",null,[(c(!0),l(u,null,x(s.articles,i=>(c(),l("tr",{key:i.id},[t("td",null,[t("img",{src:i.imageUrl,alt:i.title,style:{"max-width":"200px"}},null,8,S)]),t("td",C,[t("a",{style:{color:"#4e342e"},class:"text-decoration-none h2 d-block text-start",onClick:b(O=>r.getArticle(i.id),["prevent"])},[k(n(i.title)+" ",1),t("p",null,n(i.author),1)],8,R)])]))),128))])]),p(v,{pages:o.pages,"get-article":r.getArticle},null,8,["pages","get-article"])])]),t("div",U,[t("div",B,[t("strong",null,[t("h3",D,n(s.article.title),1)]),t("small",null,[t("p",H,n(s.article.author),1)]),t("img",{src:s.article.image},null,8,I),t("p",{class:"my-5",innerHTML:s.article.content},null,8,M)])])])],64)}const q=L(T,[["render",N]]);export{q as default};
