import{a as d,S as p}from"./sweetalert2.all-UHgEhJL2.js";import{l as x}from"./index-etBp_Pge.js";/* empty css              */import{p as L}from"./ArticlesPagination-p6i2gMW4.js";import{_ as y,c,d as g,b as t,F as _,g as k,t as n,r as h,o as l,j as A,e as b}from"./index-Ejn4ikI0.js";import"./vue.runtime.esm-bundler-Azj-LjF3.js";var T={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:u,VITE_PATH:m}=T,V={data(){return{articles:[],article:[],pages:{},isLoading:!1,fullPage:!0}},methods:{getArticles(a=1){this.isLoading=!0;const o=`${u}/api/${m}/articles?page=${a}`;d.get(o).then(e=>{this.articles=e.data.articles,this.pages=e.data.pagination,this.isLoading=!1}).catch(e=>{p.fire(e.response.data.message),this.isLoading=!1})},getArticle(a){this.isLoading=!0;const o=`${u}/api/${m}/article/${a}`;d.get(o).then(e=>{this.article=e.data.article,this.isLoading=!1}).catch(e=>{p.fire(e.response.data.message),this.isLoading=!1})}},mounted(){this.getArticles()},components:{loading:x,pagination:L}},E=t("div",{class:"position-relative"},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://i.postimg.cc/FKQNPW7C/store.jpg)","background-position":"center center",opacity:"0.3","background-repeat":"no-repeat","background-size":"100% auto"}}),t("div",{class:"container d-flex flex-column",style:{"min-height":"50vh"}})],-1),w={class:"container"},j={class:"row justify-content-center"},P={class:"text-center col-md-9"},S={class:"mt-4"},R={class:"col-md-3"},U=["src","alt"],B={class:"col-md-9 pt-4 d-flex align-items-center"},C=["onClick"],D={class:"h6 pt-3"},H={class:"row justify-content-center py-5"},I={class:"col-md-8"},M={class:"text-center",style:{color:"#4e342e"}},N={class:"mt-5 text-end"},F=["src"],O=["innerHTML"];function z(a,o,e,K,s,r){const f=h("loading"),v=h("pagination");return l(),c(_,null,[g(f,{active:s.isLoading,"onUpdate:active":o[0]||(o[0]=i=>s.isLoading=i),"can-cancel":!0,"is-full-page":s.fullPage,loader:"dots"},null,8,["active","is-full-page"]),E,t("div",w,[t("div",j,[t("div",P,[t("div",S,[(l(!0),c(_,null,k(s.articles,i=>(l(),c("div",{class:"row mb-3",key:i.id},[t("div",R,[t("img",{src:i.imageUrl,alt:i.title,style:{"max-width":"100%"}},null,8,U)]),t("div",B,[t("a",{style:{color:"#4e342e",cursor:"pointer"},class:"text-decoration-none h2 d-block text-start",onClick:A(Q=>r.getArticle(i.id),["prevent"])},[b(n(i.title)+" ",1),t("p",D,"作者 / "+n(i.author),1)],8,C)])]))),128))]),g(v,{pages:s.pages,"get-article":r.getArticle},null,8,["pages","get-article"])])]),t("div",H,[t("div",I,[t("strong",null,[t("h3",M,n(s.article.title),1)]),t("small",null,[t("p",N,n(s.article.author),1)]),t("img",{src:s.article.image},null,8,F),t("p",{class:"my-5",innerHTML:s.article.content},null,8,O)])])])],64)}const Z=y(V,[["render",z]]);export{Z as default};