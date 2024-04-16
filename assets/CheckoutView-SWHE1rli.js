import{a as v,S as h}from"./sweetalert2.all-U9l-Qzmq.js";import{_ as g,a as k,c as p,b as e,d as r,w,F as V,g as y,t as i,r as _,o as b,n as m,i as u,C,D as f,j as E,e as R}from"./index-VfxMQT77.js";import{o as S}from"./order-6CXti1LB.js";var T={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:N,VITE_PATH:U}=T,A={data(){return{carts:{},temporder:{},checked:"credit card",rememberEmail:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){const a=`${N}/api/${U}/cart`;v.get(a).then(t=>{this.carts=t.data.data}).catch(t=>{h.fire(t.response.data.message)})},...k(S,["createOrder"]),handleSubmit(){this.createOrder(this.form).then(a=>{this.$router.push(`/Checkout/${a}`),localStorage.setItem("payment",this.checked)}).catch(a=>{h.fire(a.response.data.message)})},isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"請輸入正確的電話號碼"},updateRememberEmail(){if(this.rememberEmail){const{email:a}=this.form.user;localStorage.setItem("rememberEmail",a)}else localStorage.removeItem("rememberEmail")},shopingNote(){h.fire({title:"購物須知",html:`
          <p>歡迎您光臨我們的購物平台！請仔細閱讀以下購物須知：</p>
          <ol class="text-start">
            <li>商品資訊：請在購買商品前仔細閱讀商品描述、價格、規格、尺寸等相關資訊。</li>
            <li>庫存狀況：商品的庫存狀況可能隨時變化，請確認所需商品是否有庫存。</li>
            <li>購買流程：選擇您要購買的商品後，請按照網站指示完成訂單流程。</li>
            <li>付款方式：我們提供多種付款方式供您選擇，包括信用卡、支付寶、微信支付等。</li>
            <li>運送方式：我們會根據您提供的地址和選擇的運送方式安排商品的發貨。</li>
            <li>退換貨政策：我們提供合理的退換貨政策，詳細信息請參閱我們的退換貨政策頁面。</li>
            <li>客戶服務：如果您在購物過程中遇到任何問題或需要幫助，請隨時聯繫我們的客戶服務團隊。</li>
          </ol>
        `,icon:"info",confirmButtonText:"確定",confirmButtonColor:"#3085d6"})}},mounted(){this.getCart(),localStorage.getItem("rememberEmail")&&(this.form.user.email=localStorage.getItem("rememberEmail"))}},M={class:"bg-light pt-7 pb-7"},P={class:"container"},j={class:"row justify-content-center flex-md-row flex-column-reverse"},I={class:"col-md-6"},B={class:"bg-white p-4"},D=e("h4",{class:"fw-bold"},"1. 訂購資訊",-1),F=e("p",{class:"mt-4"},"聯絡資訊",-1),L={class:"mb-2"},q=e("label",{for:"ContactName",class:"text-muted mb-0 form-label"},"訂購人姓名",-1),O={class:"mb-2"},H=e("label",{for:"ContactPhone",class:"text-muted mb-0 form-label"},"訂購人電話",-1),W={class:"mb-2"},z=e("label",{for:"ContactMail",class:"text-muted mb-0 form-label"},"Email",-1),G={class:"form-group form-check"},J=e("label",{class:"form-check-label fs-6",for:"ContactLorem"}," 是否記住Email",-1),K={class:"bg-white p-4 mt-3"},Q=e("h4",{class:"fw-bold"},"2. 寄送資訊",-1),X=e("p",{class:"mt-4 mb-3"},"寄送地址",-1),Y={class:"form-row"},Z={class:"col mb-2"},$=e("p",{class:"mt-4 mb-2"},"Payment",-1),ee={class:"form-check mb-2"},te=e("label",{class:"form-check-label text-muted",for:"gridRadios1"},"credit card ",-1),se={class:"form-check mb-2"},oe=e("label",{class:"form-check-label text-muted",for:"gridRadios2"},"WebATM ",-1),le={class:"form-check mb-2"},ae=e("label",{class:"form-check-label text-muted",for:"gridRadios3"},"ApplePay ",-1),re={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"},ie=e("i",{class:"fas fa-chevron-left me-2"},null,-1),de=e("button",{type:"submit",class:"btn btn-dark py-3 px-7 rounded border-0",style:{"background-color":"#7fa185"}}," 確認訂單 ",-1),ce={class:"col-md-4"},ne={class:"border p-4 mb-4"},me=e("h4",{class:"mb-4"},"訂購明細",-1),ue=["src"],he={class:"w-100"},pe={class:"d-flex justify-content-between fw-bold"},_e={class:"mb-0"},be={class:"mb-0"},fe={class:"d-flex justify-content-between"},xe={class:"text-muted mb-0"},ve={class:"mb-0"},ge={class:"table mt-4 border-top border-bottom text-muted"},ke=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 小計 ",-1),we={class:"text-end border-0 px-0 pt-4"},Ve=e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 折扣 ",-1),ye={class:"text-end border-0 px-0 pt-0 pb-4"},Ce=e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 支付方式 ",-1),Ee={class:"text-end border-0 px-0 pt-0 pb-4"},Re={class:"d-flex justify-content-between mt-4"},Se=e("p",{class:"mb-0 h4 fw-bold"},"結帳金額",-1),Te={class:"mb-0 h4 fw-bold"};function Ne(a,t,Ue,Ae,o,d){const c=_("VField"),n=_("error-message"),x=_("VForm");return b(),p("div",M,[e("div",P,[e("div",j,[e("div",I,[r(x,{ref:"form",onSubmit:d.handleSubmit},{default:w(({errors:l})=>[e("div",B,[D,F,e("div",L,[q,r(c,{type:"text",class:m(["form-control rounded-0",{"is-invalid":l.姓名}]),id:"ContactName",name:"姓名",placeholder:"Carmen A. Rose",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.user.name=s)},null,8,["modelValue","class"]),r(n,{name:"姓名",class:"invalid-feedback"})]),e("div",O,[H,r(c,{type:"tel",class:m(["form-control rounded-0",{"is-invalid":l.電話}]),id:"ContactPhone",placeholder:"09xxxxxxxx",rules:d.isPhone,modelValue:o.form.user.tel,"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.user.tel=s),name:"電話"},null,8,["rules","modelValue","class"]),r(n,{name:"電話",class:"invalid-feedback"})]),e("div",W,[z,r(c,{type:"email",class:m(["form-control rounded-0",{"is-invalid":l.email}]),id:"ContactMail",name:"email","aria-describedby":"emailHelp",placeholder:"example@gmail.com",rules:"required|email",modelValue:o.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.user.email=s)},null,8,["class","modelValue"]),r(n,{name:"email",class:"invalid-feedback"})]),e("div",G,[e("small",null,[u(e("input",{type:"checkbox",class:"form-check-input rounded-0",id:"ContactLorem","onUpdate:modelValue":t[3]||(t[3]=s=>o.rememberEmail=s),onChange:t[4]||(t[4]=(...s)=>d.updateRememberEmail&&d.updateRememberEmail(...s))},null,544),[[C,o.rememberEmail]]),J])])]),e("div",K,[Q,X,e("div",Y,[e("div",Z,[r(c,{type:"text",class:m(["form-control",{"is-invalid":l.地址}]),id:"Contactaddress",name:"地址",placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.user.address=s)},null,8,["class","modelValue"]),r(n,{name:"地址",class:"invalid-feedback"})])]),$,e("div",ee,[u(e("input",{class:"form-check-input",type:"radio",name:"gridRadios",id:"gridRadios1",value:"credit card","onUpdate:modelValue":t[6]||(t[6]=s=>this.checked=s)},null,512),[[f,this.checked]]),te]),e("div",se,[u(e("input",{class:"form-check-input",type:"radio",name:"gridRadios",id:"gridRadios2",value:"WebATM","onUpdate:modelValue":t[7]||(t[7]=s=>this.checked=s)},null,512),[[f,this.checked]]),oe]),e("div",le,[u(e("input",{class:"form-check-input",type:"radio",name:"gridRadios",id:"gridRadios3",value:"ApplePay","onUpdate:modelValue":t[8]||(t[8]=s=>this.checked=s)},null,512),[[f,this.checked]]),ae])]),e("div",re,[e("a",{href:"./product.html",class:"text-dark mt-md-0 mt-3",onClick:t[9]||(t[9]=E(s=>d.shopingNote(),["prevent"]))},[ie,R(" 購物須知")]),de])]),_:1},8,["onSubmit"])]),e("div",ce,[e("div",ne,[me,(b(!0),p(V,null,y(o.carts.carts,l=>(b(),p("div",{class:"d-flex mb-2",key:l.id},[e("img",{src:l.product.imageUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,ue),e("div",he,[e("div",pe,[e("p",_e,i(l.product.title),1),e("p",be,"x"+i(l.qty),1)]),e("div",fe,[e("p",xe,[e("small",null,"NT$"+i(l.product.price),1)]),e("p",ve,"NT$"+i(l.total),1)])])]))),128)),e("table",ge,[e("tbody",null,[e("tr",null,[ke,e("td",we," NT$"+i(o.carts.total),1)]),e("tr",null,[Ve,e("td",ye,i(Math.round(o.carts.final_total-o.carts.total)),1)]),e("tr",null,[Ce,e("td",Ee,i(this.checked),1)])])]),e("div",Re,[Se,e("p",Te," NT$"+i(Math.round(o.carts.final_total)),1)])])])])])])}const Ie=g(A,[["render",Ne]]);export{Ie as default};
