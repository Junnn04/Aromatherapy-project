import{m as x,a as y,_ as c,o as r,c as d,b as t,d as a,w as e,e as o,t as $,r as i,f as m}from"./index-iKm-APML.js";import{c as l}from"./cartStore-lejq5EYD.js";import"./axios-L6U4YIEh.js";import"./sweetalert2.all-7pLa5uUz.js";import"./_commonjsHelpers-1J56E-h6.js";const _="/Aromatherapy-project/assets/logo-eRbLKaAL.jpg",k={computed:{...x(l,["carts"])},methods:{...y(l,["getCart"])},mounted(){this.getCart()}},w={class:"navbar navbar-expand-lg navbar-light position-fixed bg-light z-3 w-100 top-0"},N={class:"container"},A=t("img",{src:_,class:"img-fluid",alt:"logo",style:{width:"100px"}},null,-1),C=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),R={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},V={class:"navbar-nav"},L=t("i",{class:"bi bi-cart4"},null,-1),j={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},S=t("span",{class:"visually-hidden"},"unread messages",-1);function B(p,b,v,h,u,g){const s=i("RouterLink");return r(),d("nav",w,[t("div",N,[a(s,{class:"nav-item nav-link me-4 active",to:"/"},{default:e(()=>[A]),_:1}),o(" //漢堡選單 "),C,t("div",R,[t("div",V,[a(s,{class:"nav-item nav-link me-4",to:"/about"},{default:e(()=>[o("關於")]),_:1}),a(s,{class:"nav-item nav-link me-4",to:"/products"},{default:e(()=>[o("產品")]),_:1}),a(s,{class:"nav-item nav-link me-4",to:"/login"},{default:e(()=>[o("登入")]),_:1}),a(s,{class:"btn btn-primary position-relative",to:"/cart"},{default:e(()=>{var n;return[L,t("span",j,[o($((n=this.carts)==null?void 0:n.length)+" ",1),S])]}),_:1})])])])])}const M=c(k,[["render",B]]),E={components:{NavbarComponents:M}},T={style:{"min-height":"100vh"}},z={class:"py-5",style:{"background-color":"#664939"}},D={class:"container"},F={class:"d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"},K=t("img",{src:_,class:"img-fluid",alt:"logo",style:{width:"150px"}},null,-1),q=m('<ul class="d-flex list-unstyled mb-0 h4"><li><a href="#" class="text-white mx-3"><i class="bi bi-facebook"></i></a></li><li><a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a></li><li><a href="#" class="text-white ms-3"><i class="bi bi-line"></i></a></li></ul>',1),G=m('<div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"><div class="mb-md-0 mb-1"><p class="mb-0" style="color:#bcaaa4;">電話: <a href="tel:06-3456-7890" style="color:#bcaaa4;" class="text-decoration-none">06-3456-7890</a></p><p class="mb-0" style="color:#bcaaa4;">E-mail: <a href="mailto:service@aroma.com" style="color:#bcaaa4;" class="text-decoration-none">service@aroma.com</a></p></div><p class="mb-0">© 香氛心療坊 Aroma</p></div>',1);function H(p,b,v,h,u,g){const s=i("NavbarComponents"),n=i("RouterView"),f=i("RouterLink");return r(),d("div",T,[a(s),a(n,{style:{"min-height":"70vh"}}),t("div",z,[t("div",D,[t("div",F,[a(f,{class:"nav-item nav-link me-4 active",to:"/"},{default:e(()=>[K]),_:1}),q]),G])])])}const U=c(E,[["render",H]]);export{U as default};
