import{a as i}from"./axios-L6U4YIEh.js";import{_ as r,c as _,a as t,b as o,w as s,r as l,o as p,d as a}from"./index-IOUEW9qf.js";var m={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h}=m,u={methods:{checkAdmin(){const n=`${h}/api/user/check`;i.post(n).then(c=>{console.log("驗證成功:",c.success)}).catch(c=>{alert(c.message)})}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");i.defaults.headers.common.Authorization=n,this.checkAdmin()}},v={class:"container-xxl"},x=t("h2",{class:"row",style:{"background-color":"#90a4ae"}},"香氛心療坊",-1),f={class:"row"},b={class:"col-md-2",style:{"background-color":"#90a4ae",position:"relative"}},g={class:"navbar navbar-expand-lg navbar-light h-100"},k={class:"collapse navbar-collapse justify-content-center",id:"navbarNav"},y={class:"navbar-nav flex-column",style:{"margin-top":"70px",position:"absolute",top:"10px"}},$={class:"nav-item active",style:{"padding-bottom":"20px"}},A={class:"nav-item",style:{"padding-bottom":"20px"}},E={class:"nav-item",style:{"padding-bottom":"20px"}},R={class:"nav-item",style:{"padding-bottom":"20px"}},V={class:"nav-item",style:{"padding-bottom":"20px"}},w={class:"col",style:{"margin-top":"100px"}};function T(n,c,L,B,D,N){const e=l("RouterLink"),d=l("router-view");return p(),_("div",v,[x,t("div",null,[t("div",f,[t("div",b,[t("nav",g,[t("div",k,[t("ul",y,[t("li",$,[o(e,{to:"/admin/products"},{default:s(()=>[a("產品列表")]),_:1})]),t("li",A,[o(e,{to:"/admin/order"},{default:s(()=>[a("訂單管理")]),_:1})]),t("li",E,[o(e,{to:"/admin/voucher"},{default:s(()=>[a("優惠卷管理")]),_:1})]),t("li",R,[o(e,{to:"/admin/article"},{default:s(()=>[a("文章管理")]),_:1})]),t("li",V,[o(e,{to:"/"},{default:s(()=>[a("回到前台")]),_:1})])])])])]),t("div",w,[o(d)])])])])}const S=r(u,[["render",T]]);export{S as default};
