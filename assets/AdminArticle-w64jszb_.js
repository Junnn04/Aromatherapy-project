import{a as A}from"./axios-L6U4YIEh.js";import{M}from"./bootstrap.esm-TTjMTX3M.js";import{S as h}from"./sweetalert2.all-7pLa5uUz.js";import{p as U}from"./PaginationComponents-lO9seOh2.js";import{_ as k,o as d,c,b as t,t as p,bC as r,bs as m,F as f,aV as w,J as C,bo as P,d as g,e as v,r as y}from"./index-2gzOPHIY.js";import"./_commonjsHelpers-1J56E-h6.js";const D={props:["isNew","tempArticle","updateArticle"],data(){return{modalArticle:null,editArticle:{},create_at:""}},watch:{tempArticle(){this.editArticle=this.tempArticle;const o=new Date(this.editArticle.create_at*1e3).toISOString().split("T");[this.create_at]=o},create_at(){this.editArticle.create_at=Math.floor(new Date(this.create_at)/1e3)}},methods:{openModal(){this.modalArticle.show()},closeModal(){this.modalArticle.hide()}},mounted(){this.modalArticle=new M(this.$refs.articleModal),this.editArticle=this.tempArticle}},T={id:"articleModal",ref:"articleModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},$={class:"modal-dialog modal-xl"},E={class:"modal-content border-0"},L={class:"modal-header bg-dark text-white"},N={id:"productModalLabel",class:"modal-title"},S={key:0},I={key:1},R=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),B={class:"modal-body"},F={class:"row"},O={class:"col-sm-4"},j={class:"mb-3"},H=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),J=["src"],q={class:"mb-3"},z={key:0},G=t("label",{for:"tag",class:"form-label"},"輸入標記",-1),K=["onUpdate:modelValue"],Q={key:1},W={key:2},X={class:"col-sm-8"},Y={class:"mb-3"},Z=t("label",{for:"title",class:"form-label"},"標題",-1),tt={class:"row"},et={class:"mb-3 col-md-6"},lt=t("label",{for:"author",class:"form-label"},"作者",-1),st={class:"mb-3 col-md-6"},it=t("label",{for:"create_at",class:"form-label"},"文章建立日期",-1),ot={class:"mb-3"},at=t("label",{for:"description",class:"form-label"},"文章描述",-1),dt={class:"mb-3"},ct=t("label",{for:"description",class:"form-label"},"文章內容",-1),nt={class:"mb-3"},rt={class:"form-check"},mt=t("label",{class:"form-check-label",for:"isPublic"},"是否公開",-1),pt={class:"modal-footer"},ht=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ut(o,e,i,x,l,n){return d(),c("div",T,[t("div",$,[t("div",E,[t("div",L,[t("h5",N,[i.isNew?(d(),c("span",S,"新增文章")):(d(),c("span",I,"編輯文章"))]),R]),t("div",B,[t("div",F,[t("pre",null,"    "+p(i.tempArticle)+`
    `,1),t("div",O,[t("div",j,[H,r(t("input",{id:"imageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=s=>l.editArticle.imageUrl=s)},null,512),[[m,l.editArticle.imageUrl]]),t("img",{class:"img-fluid",src:i.tempArticle.imageUrl},null,8,J)]),t("div",q,[Array.isArray(i.tempArticle.tag)?(d(),c("div",z,[(d(!0),c(f,null,w(l.editArticle.tag,(s,b)=>(d(),c("div",{class:"mb-1",key:b},[G,r(t("input",{id:"tag",type:"text",class:"form-control",placeholder:"請輸入標記","onUpdate:modelValue":a=>l.editArticle.tag=a},null,8,K),[[m,l.editArticle.tag]])]))),128))])):C("",!0),!i.tempArticle.tag.length||i.tempArticle.tag[i.tempArticle.tag.length-1]?(d(),c("div",Q,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=s=>l.editArticle.tag.push(""))}," 新增標記 ")])):(d(),c("div",W,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>l.editArticle.tag.pop())}," 刪除圖片 ")]))])]),t("div",X,[t("div",Y,[Z,r(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=s=>l.editArticle.title=s)},null,512),[[m,l.editArticle.title]])]),t("div",tt,[t("div",et,[lt,r(t("input",{id:"percent",type:"text",min:"0",class:"form-control",placeholder:"請輸入作者","onUpdate:modelValue":e[4]||(e[4]=s=>l.editArticle.author=s)},null,512),[[m,l.editArticle.author]])]),t("div",st,[it,r(t("input",{id:"create_at",type:"date",class:"form-control",placeholder:"文章建立日期","onUpdate:modelValue":e[5]||(e[5]=s=>l.create_at=s)},null,512),[[m,l.create_at]])])]),t("div",ot,[at,r(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[6]||(e[6]=s=>l.editArticle.description=s),placeholder:"請輸入文章描述"},null,512),[[m,l.editArticle.description]])]),t("div",dt,[ct,r(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[7]||(e[7]=s=>l.editArticle.content=s),placeholder:"請輸入文章內容"},null,512),[[m,l.editArticle.content]])]),t("div",nt,[t("div",rt,[r(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[8]||(e[8]=s=>l.editArticle.isPublic=s),id:"isPublic"},null,512),[[P,l.editArticle.isPublic]]),mt])])])])]),t("div",pt,[ht,t("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=(...s)=>i.updateArticle&&i.updateArticle(...s))}," 確認 ")])])])],512)}const _t=k(D,[["render",ut]]);var bt={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"junapi",BASE_URL:"/Aromatherapy-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:u,VITE_PATH:_}=bt,At={data(){return{articles:[],tempArticle:{tag:""},pages:{},modalProduct:null,modalDel:null,isNew:!1}},methods:{getArticle(o=1){const e=`${u}/api/${_}/admin/articles?page=${o}`;A.get(e).then(i=>{this.articles=i.data.articles,this.pages=i.data.pagination}).catch(i=>{h.fire(i.response.data.message)})},openModal(o,e){o==="new"?(this.tempArticle={tag:[],create_at:new Date().getTime()/1e3},this.isNew=!0,this.$refs.pModal.openModal()):o==="edit"?(this.tempArticle={...e},Array.isArray(this.tempArticle.tag)||(this.tempArticle.tag=[]),this.isNew=!1,this.$refs.pModal.openModal()):o==="delete"&&(this.tempArticle={...e},this.modalDel.show())},updateArticle(){let o=`${u}/api/${_}/admin/article`,e="post";this.isNew||(o=`${u}/api/${_}/admin/article/${this.tempArticle.id}`,e="put"),A[e](o,{data:this.tempArticle}).then(i=>{h.fire(i.data.message),this.getArticle(),this.$refs.pModal.closeModal(),this.tempArticle={}}).catch(i=>{h.fire(i.response.data.message)})},delArticle(){const o=`${u}/api/${_}/admin/article/${this.tempArticle.id}`;A.delete(o).then(e=>{h.fire(e.data.message),this.modalDel.hide(),this.getArticle()}).catch(e=>{h.fire(e.response.data.message)})}},mounted(){this.getArticle(),this.modalDel=new M(this.$refs.delProductModal)},components:{pagination:U,articleModal:_t}},ft={class:"container"},gt={class:"text-end mt-4"},vt={class:"table mt-4"},yt=t("thead",null,[t("tr",null,[t("th",{width:"120"},"標題"),t("th",{width:"80"},"作者"),t("th",{width:"80"},"建立時間"),t("th",{width:"200"},"內容描述"),t("th",{width:"80"},"是否上傳"),t("th",{width:"80"}," 編輯 ")])],-1),Mt={key:0,class:"text-success"},kt={key:1},wt={class:"btn-group"},xt=["onClick"],Vt=["onClick"],Ut={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ct={class:"modal-dialog"},Pt={class:"modal-content border-0"},Dt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除優惠卷")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Tt={class:"modal-body"},$t={class:"text-danger"},Et={class:"modal-footer"},Lt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Nt(o,e,i,x,l,n){const s=y("pagination"),b=y("article-modal");return d(),c(f,null,[t("div",ft,[t("div",gt,[t("button",{class:"btn btn-primary",style:{"background-color":"#7FA185"},onClick:e[0]||(e[0]=a=>n.openModal("new"))}," 建立新文章 ")]),t("table",vt,[yt,t("tbody",null,[(d(!0),c(f,null,w(l.articles,a=>(d(),c("tr",{key:a.id},[t("td",null,p(a.title),1),t("td",null,p(a.author),1),t("td",null,p(a.create_at),1),t("td",null,p(a.description),1),t("td",null,[a.isPublic?(d(),c("span",Mt,"已上傳")):(d(),c("span",kt,"未上傳"))]),t("td",null,[t("div",wt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:V=>n.openModal("edit",a)}," 編輯 ",8,xt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:V=>n.openModal("delete",a)}," 刪除 ",8,Vt)])])]))),128))])]),g(s,{pages:l.pages,"get-article":n.getArticle},null,8,["pages","get-article"])]),g(b,{"temp-article":l.tempArticle,"update-article":n.updateArticle,ref:"pModal"},null,8,["temp-article","update-article"]),t("div",Ut,[t("div",Ct,[t("div",Pt,[Dt,t("div",Tt,[v(" 是否刪除 "),t("strong",$t,p(l.tempArticle.title),1),v(" 商品(刪除後將無法恢復)。 ")]),t("div",Et,[Lt,t("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=(...a)=>n.delArticle&&n.delArticle(...a))}," 確認刪除 ")])])])],512)],64)}const jt=k(At,[["render",Nt]]);export{jt as default};
