import{m as f,a as h,_ as c,o as r,c as d,b as a,d as s,w as e,e as n,t as g,r as i,F as x,f as w}from"./index-SlvrNoUn.js";import{c as l}from"./cartStore-PsTCemWi.js";import"./axios-L6U4YIEh.js";const k={computed:{...f(l,["carts"])},methods:{...h(l,["getCart"])},mounted(){this.getCart()}},N={class:"navbar navbar-expand-lg navbar-light position-fixed bg-light z-3 w-100"},$={class:"container"},y=a("a",{class:"navbar-brand",href:"./index.html"},"Navbar",-1),C=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),V={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},A={class:"navbar-nav"},R=a("span",{class:"sr-only"},"(current)",-1),L=a("i",{class:"bi bi-cart4"},null,-1),O={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},S=a("span",{class:"visually-hidden"},"unread messages",-1);function j(m,p,v,_,b,u){const t=i("RouterLink");return r(),d("nav",N,[a("div",$,[y,C,a("div",V,[a("div",A,[s(t,{class:"nav-item nav-link me-4 active",to:"/"},{default:e(()=>[n(" Home "),R]),_:1}),s(t,{class:"nav-item nav-link me-4",to:"/about"},{default:e(()=>[n("About")]),_:1}),s(t,{class:"nav-item nav-link me-4",to:"/products"},{default:e(()=>[n("產品")]),_:1}),s(t,{class:"nav-item nav-link me-4",to:"/login"},{default:e(()=>[n("登入")]),_:1}),s(t,{class:"btn btn-primary position-relative",to:"/cart"},{default:e(()=>{var o;return[L,a("span",O,[n(g((o=this.carts)==null?void 0:o.length)+" ",1),S])]}),_:1})])])])])}const B=c(k,[["render",j]]),F={components:{NavbarComponents:B}},M=w('<div class="bg-dark py-5"><div class="container"><div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"><a class="text-white h4" href="./index.html">LOGO</a><ul class="d-flex list-unstyled mb-0 h4"><li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li><li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li><li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li></ul></div><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"><div class="mb-md-0 mb-1"><p class="mb-0">02-3456-7890</p><p class="mb-0">service@mail.com</p></div><p class="mb-0">© 2020 LOGO All Rights Reserved.</p></div></div></div>',1);function G(m,p,v,_,b,u){const t=i("NavbarComponents"),o=i("RouterView");return r(),d(x,null,[s(t),s(o),M],64)}const E=c(F,[["render",G]]);export{E as default};