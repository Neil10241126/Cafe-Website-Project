import{k as gt,E as xt,l as _,z,G as yt,y as kt,r as Ct,o as p,c as h,e as X,d as t,g as s,f as m,F as O,j as Y,D as R,t as r,m as N,v as q,K as T,L as w,X as wt,p as Dt,q as Mt,N as At}from"./index-Qdgo5Q6h.js";import{_ as D}from"./icons-ZEDulI2G.js";import{u as Ft,a as Lt}from"./useValidation-3f1fzgwV.js";import{M as H}from"./modal-CMoadHbv.js";import{_ as $t}from"./LoadingUi-cpVv5yUO.js";import{_ as St}from"./plugin-vueexport-helper-x3n3nnut.js";const i=M=>(Dt("data-v-f54a4c30"),M=M(),Mt(),M),Vt=D+"#plus",Et=D+"#check-circle",Nt=D+"#x-circle",Tt=D+"#box-arrow-up-right",Ut=D+"#trash3",It={class:"row"},Pt={class:"col-8"},Bt={class:"card shadow"},jt={class:"card-header d-flex justify-content-between align-items-center py-3"},zt=i(()=>t("h5",{class:"fs-6"},"商品清單",-1)),Ot=i(()=>t("svg",{width:"16",height:"16",class:"ms-1"},[t("use",{"xlink:href":Vt})],-1)),Rt={class:"card-body"},qt={class:"table table-hover table-striped"},Gt=i(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"優惠券標題"),t("th",{scope:"col",class:"text-end"},"代碼(code)"),t("th",{scope:"col",class:"text-end"},"數量"),t("th",{scope:"col",class:"text-end"},"折扣數(%)"),t("th",{scope:"col",class:"text-end"},"到期時間"),t("th",{scope:"col",class:"text-end"},"是否啟用"),t("th",{scope:"col",class:"text-end"},"功能")])],-1)),Kt={class:"align-middle"},Xt={scope:"row"},Yt={class:"text-end"},Ht={class:"text-end"},Jt={class:"text-end"},Qt={class:"text-end"},Wt={class:"text-end"},Zt={width:"20",height:"20"},te={key:0,"xlink:href":Et,class:"text-success"},ee={key:1,"xlink:href":Nt,class:"text-danger"},se={class:"text-end"},oe={class:"btn-group btn-group-sm"},ae=["onClick"],ne=i(()=>t("svg",{width:"14",height:"14",class:"d-flex"},[t("use",{"xlink:href":Tt})],-1)),le=[ne],de=["onClick"],ce=i(()=>t("svg",{width:"14",height:"14",class:"d-flex"},[t("use",{"xlink:href":Ut})],-1)),ie=[ce],re={"aria-label":"Page navigation example"},ue={class:"pagination"},_e=i(()=>t("span",{"aria-hidden":"true"},"«",-1)),pe=[_e],he=["onClick","disabled"],me=i(()=>t("span",{"aria-hidden":"true"},"»",-1)),fe=[me],be=i(()=>t("div",{class:"col-4"},null,-1)),ve={class:"modal-dialog"},ge={class:"modal-content","data-bs-theme":"dark"},xe={class:"modal-header bg-netural-800 text-netural-100 py-3"},ye={class:"modal-title fs-6"},ke=i(()=>t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1)),Ce={class:"modal-body","data-bs-theme":"light"},we={class:"mb-2"},De={for:"title",class:"form-label fs-8"},Me={class:"text-danger ms-1"},Ae={class:"row"},Fe={class:"col-6"},Le={class:"mb-2"},$e={for:"percent",class:"form-label fs-8"},Se={class:"text-danger ms-1"},Ve={class:"col-6"},Ee={class:"mb-2"},Ne={for:"code",class:"form-label fs-8"},Te={class:"text-danger ms-1"},Ue={class:"mb-2"},Ie=i(()=>t("label",{class:"form-label fs-8"},[m("到期時間"),t("span",{class:"text-danger ms-1"},r("測試錯誤"))],-1)),Pe={class:"form-check form-switch"},Be=i(()=>t("label",{class:"form-check-label fs-8",for:"isEnable"},"是否啟用",-1)),je={class:"modal-footer bg-netural-800"},ze=i(()=>t("button",{type:"button",class:"btn btn-outline-netural-300","data-bs-dismiss":"modal"}," 關閉 ",-1)),Oe={class:"modal-dialog"},Re={class:"modal-content","data-bs-theme":"dark"},qe=i(()=>t("div",{class:"modal-header bg-danger text-netural-100 py-3"},[t("h1",{class:"modal-title fs-6"},"刪除優惠券"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"})],-1)),Ge={class:"modal-body py-4 fs-6"},Ke={class:"text-bg-danger mx-1 px-1 rounded-1"},Xe={class:"modal-footer bg-danger"},Ye=i(()=>t("button",{type:"button",class:"btn btn-outline-netural-100","data-bs-dismiss":"modal"}," 取消 ",-1)),He={__name:"AdminCoupons",setup(M){const J=gt(),{apiResAlert:U,apiErrAlert:A}=J,Q=xt(),{isLoadingOn:F,isLoadingOff:L}=Q,{fetchAdminCoupons:W,fetchAddAdminCoupons:Z,fetchUpdateAdminCoupons:tt,fetchDeleteAdminCoupons:et}=At(),{coupons:st,pagination:f,tempCoupon:g,isNew:x,getCoupons:I,addCoupon:ot,deleteCoupon:at,updateCoupon:nt}=lt();function lt(){const n=_([]),o=_({}),a=_({}),e=_(!1);async function c(u=1){F("isFullLoading");try{const d=await W(u);n.value=d.data.coupons,o.value=d.data.pagination}catch(d){A(d.response.data.message)}finally{L("isFullLoading")}}async function k(u){F("isFullLoading");try{const d=await Z(u);await c(),U(d.data.message),B("coupon")}catch(d){A(d.response.data.message)}finally{L("isFullLoading")}}async function j(u){F("isFullLoading");try{const d=await et(u);await c(),U(d.data.message),B("delete")}catch(d){A(d.response.data.message)}finally{L("isFullLoading")}}async function l(u,d){F("isFullLoading");try{const C=await tt(u,d);await c(),U(C.data.message),B("coupon")}catch(C){A(C.response.data.message)}finally{L("isFullLoading")}}return z(()=>c()),{coupons:n,pagination:o,tempCoupon:a,isNew:e,getCoupons:c,addCoupon:k,deleteCoupon:j,updateCoupon:l}}const{refCouponModal:dt,refDelCouponModal:ct,openModal:P,closeModal:B}=it();function it(){const n=_(null),o=_(null),a=_(""),e=_("");function c(l,u){l==="create"?(G((d,{resetForm:C})=>C())(),x.value=!0,a.value.show()):l==="edit"?(x.value=!1,g.value=u,j(u),a.value.show()):l==="delete"&&(x.value=!1,g.value=u,e.value.show())}function k(l){if(l==="coupon"){a.value.hide();return}e.value.hide()}function j(l){$.value=l.title,S.value=l.percent,V.value=l.code,K.value=l.due_date,E.value=l.is_enabled,y.value[0]=new Date(l.start_date),y.value[1]=new Date(l.due_date)}return z(()=>{a.value=new H(n.value),e.value=new H(o.value)}),{refCouponModal:n,refDelCouponModal:o,openModal:c,closeModal:k}}const{date:y,formateDueDate:rt}=ut();function ut(){const n=_(),o=yt(()=>a=>{const e=new Date(a).getFullYear(),c=new Date(a).getMonth()+1,k=new Date(a).getDate();return`${e}/${c}/${k}`});return kt(()=>n.value,a=>{const e=a[0],c=a[1];ft.value=new Date(e).getTime(),K.value=new Date(c).getTime()}),z(()=>{const a=new Date,e=new Date(new Date().setDate(a.getDate()+7));n.value=[a,e]}),{date:n,formateDueDate:o}}const{addCouponSchema:_t}=Ft(),{defineField:v,handleSubmit:G,errors:b}=Lt({validationSchema:_t}),[$,pt]=v("title"),[S,ht]=v("percent"),[V,mt]=v("code"),[K]=v("dueDate"),[ft]=v("startDate"),[E,bt]=v("isEnabled"),vt=G(n=>{const o={title:n.title,is_enabled:n.isEnabled,percent:n.percent,start_date:n.startDate,due_date:n.dueDate,code:n.code};x.value?ot({data:o}):nt(g.value.id,{data:o})});return(n,o)=>{const a=Ct("VueDatePicker");return p(),h(O,null,[X($t),t("div",It,[t("div",Pt,[t("div",Bt,[t("div",jt,[zt,t("button",{type:"button",class:"btn btn-sm btn-primary rounded-0 d-flex align-items-center",onClick:o[0]||(o[0]=e=>s(P)("create"))},[m(" 新增優惠券 "),Ot])]),t("div",Rt,[t("table",qt,[Gt,t("tbody",Kt,[(p(!0),h(O,null,Y(s(st),e=>(p(),h("tr",{key:e.id},[t("td",Xt,r(e.title),1),t("td",Yt,r(e.code),1),t("td",Ht,r(e.num),1),t("td",Jt,r(e.percent),1),t("td",Qt,r(s(rt)(e.due_date)),1),t("td",Wt,[(p(),h("svg",Zt,[e.is_enabled?(p(),h("use",te)):(p(),h("use",ee))]))]),t("td",se,[t("div",oe,[t("button",{type:"button",class:"btn btn-netural-800",onClick:c=>s(P)("edit",e)},le,8,ae),t("button",{type:"button",class:"btn btn-danger",onClick:c=>s(P)("delete",e)},ie,8,de)])])]))),128))])]),t("nav",re,[t("ul",ue,[t("li",{class:R(["page-item",{"d-none":s(f).has_pre===!1}])},[t("button",{type:"button",class:"page-link",onClick:o[1]||(o[1]=e=>s(I)(s(f).current_page-1))},pe)],2),(p(!0),h(O,null,Y(s(f).total_pages,e=>(p(),h("li",{key:e+123,class:R(["page-item",{active:s(f).current_page===e}])},[t("button",{class:"page-link",type:"button",onClick:c=>s(I)(e),disabled:s(f).current_page===e},r(e),9,he)],2))),128)),t("li",{class:R(["page-item",{"d-none":s(f).has_next===!1}])},[t("button",{type:"button",class:"page-link",onClick:o[2]||(o[2]=e=>s(I)(s(f).current_page+1))},fe)],2)])])])])]),be]),t("div",{class:"modal fade",id:"productModal",ref_key:"refCouponModal",ref:dt},[t("div",ve,[t("div",ge,[t("div",xe,[t("h1",ye,r(s(x)?"新增優惠券":"修改優惠券"),1),ke]),t("div",Ce,[t("div",we,[t("label",De,[m("優惠券標題"),t("span",Me,r(s(b).title),1)]),N(t("input",T({type:"text",class:["form-control form-control-sm",{"is-invalid":s(b).title}],id:"title",placeholder:"請輸入優惠券標題","onUpdate:modelValue":o[3]||(o[3]=e=>w($)?$.value=e:null)},s(pt)),null,16),[[q,s($)]])]),t("div",Ae,[t("div",Fe,[t("div",Le,[t("label",$e,[m("折扣"),t("span",Se,r(s(b).percent),1)]),N(t("input",T({type:"number",min:"1",max:"99",class:["form-control form-control-sm",{"is-invalid":s(b).percent}],id:"percent",placeholder:"請輸入折扣百分比","onUpdate:modelValue":o[4]||(o[4]=e=>w(S)?S.value=e:null)},s(ht)),null,16),[[q,s(S)]])])]),t("div",Ve,[t("div",Ee,[t("label",Ne,[m("代碼"),t("span",Te,r(s(b).code),1)]),N(t("input",T({type:"text",class:["form-control form-control-sm",{"is-invalid":s(b).code}],id:"code",placeholder:"請輸入折扣代碼","onUpdate:modelValue":o[5]||(o[5]=e=>w(V)?V.value=e:null)},s(mt)),null,16),[[q,s(V)]])])])]),t("div",Ue,[Ie,X(a,{modelValue:s(y),"onUpdate:modelValue":o[6]||(o[6]=e=>w(y)?y.value=e:null),range:"","enable-time-picker":!1},null,8,["modelValue"])]),t("div",Pe,[N(t("input",T({class:"form-check-input",type:"checkbox",id:"isEnable",checked:!0,"onUpdate:modelValue":o[7]||(o[7]=e=>w(E)?E.value=e:null)},s(bt),{"true-value":1,"false-value":0}),null,16),[[wt,s(E)]]),Be]),m(" "+r(s(b)),1)]),t("div",je,[ze,t("button",{type:"button",class:"btn btn-success",onClick:o[8]||(o[8]=e=>s(vt)())},"儲存")])])])],512),t("div",{class:"modal fade",id:"exampleModal",ref_key:"refDelCouponModal",ref:ct},[t("div",Oe,[t("div",Re,[qe,t("div",Ge,[m(" 確認刪除"),t("span",Ke,r(s(g).title),1),m("優惠券 ? ")]),t("div",Xe,[Ye,t("button",{type:"button",class:"btn btn-netural-900",onClick:o[9]||(o[9]=e=>s(at)(s(g).id))}," 確認刪除 ")])])])],512)],64)}}},ss=St(He,[["__scopeId","data-v-f54a4c30"]]);export{ss as default};