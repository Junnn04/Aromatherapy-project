import{a as i}from"./axios-L6U4YIEh.js";import{_ as v,c as f,b as t,d as a,w as n,h as k,k as g,l as x,r as d,o as p,e as c}from"./index-SlvrNoUn.js";var b={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_}=b,y={data(){return{checkSuccess:!1}},methods:{checkAdmin(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(e){i.defaults.headers.common.Authorization=`${e}`;const o=`${_}/api/user/check`;i.post(o,{api_token:this.token}).then(()=>{this.checkSuccess=!0}).catch(l=>{alert(l.response.data.message),this.$router.push("/login")})}else alert("您尚未登入。"),this.$router.push("/login"),console.log(e)},signout(){const e=`${_}/logout`;i.post(e).then(()=>{document.cookie="hexToken=;expires=;",alert("token 已清除"),this.$router.push("/login")}).catch(o=>{alert(o.response.data.message)})}},mounted(){this.checkAdmin()}},V=t("h2",{class:"row"},"香氛心療坊",-1),$={class:"row"},R={class:"col-md-2",style:{position:"relative"}},w={class:"navbar navbar-expand-lg navbar-light h-100",style:{"background-color":"#90a4ae"}},A={class:"collapse navbar-collapse justify-content-center",id:"navbarNav"},E={class:"navbar-nav flex-column",style:{"margin-top":"70px",position:"absolute",top:"10px"}},T={class:"nav-item active",style:{"padding-bottom":"20px"}},S={class:"nav-item",style:{"padding-bottom":"20px"}},B={class:"nav-item",style:{"padding-bottom":"20px"}},L={class:"nav-item",style:{"padding-bottom":"20px"}},N={class:"nav-item",style:{"padding-bottom":"20px"}},C={class:"nav-item",style:{"padding-bottom":"20px"}},D={class:"col",style:{"margin-top":"100px"}};function j(e,o,l,I,u,r){const s=d("RouterLink"),h=d("RouterView");return p(),f("div",null,[V,t("div",$,[t("div",R,[t("nav",w,[t("div",A,[t("ul",E,[t("li",T,[a(s,{to:"/admin/products"},{default:n(()=>[c("產品列表")]),_:1})]),t("li",S,[a(s,{to:"/admin/orders"},{default:n(()=>[c("訂單管理")]),_:1})]),t("li",B,[a(s,{to:"/admin/coupons"},{default:n(()=>[c("優惠卷管理")]),_:1})]),t("li",L,[a(s,{to:"/admin/article"},{default:n(()=>[c("文章管理")]),_:1})]),t("li",N,[a(s,{to:"/"},{default:n(()=>[c("回到前台")]),_:1})]),t("li",C,[t("a",{href:"#",onClick:o[0]||(o[0]=k((...m)=>r.signout&&r.signout(...m),["prevent"]))},"登出")])])])])]),t("div",D,[u.checkSuccess?(p(),g(h,{key:0})):x("",!0)])])])}const O=v(y,[["render",j]]);export{O as default};