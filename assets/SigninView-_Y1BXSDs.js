import{u as ts,q as ns,d as as,s as is,I as ls,r as $,J as rs,o as ds,e as cs,f as us,h as ps,j as L,i as s,l as e,v as c,x as u,N as p,O as m,t as g,P as ms,w as gs,m as fs,F as _s,Q as vs,R as bs,k as hs}from"./index-_lOFy3Cn.js";import{b as ws}from"./index-2YyvzYXq.js";import{u as xs,a as ys}from"./useValidation-76tI4OoK.js";import{_ as ks}from"./BadgeUi-TcMOBKON.js";import{_ as Ss}from"./LoadingUi-_sLCPmrE.js";import{M as As}from"./modal-C8Az8Bl6.js";import"./selector-engine-B6RTJdBp.js";const Cs="/Cafe-Website-Project/assets/Sign-logo-_dDnZN3j.svg",$s="/Cafe-Website-Project/assets/Beans-cafe-logo-dark-BiaS39hy.svg",Ls={class:"py-8"},Ms={class:"container px-4"},Fs={class:"row justify-content-center bg-secondary-light rounded-4",style:{"box-shadow":`0 4px 4px rgba(95, 61, 45, 0.2),
            0 4px 4px rgba(95, 61, 45, 0.2)`}},Vs=s("div",{class:"col-lg-5"},[s("div",{class:"d-none d-lg-block px-3 py-6"},[s("img",{src:Cs,class:"img-fluid",alt:"Sign-logo"})])],-1),Us={class:"col-12 col-sm-8 col-lg-5"},Ps={class:"px-3 py-6"},js={class:"text-center mb-6"},Ds=s("img",{src:$s,class:"mx-auto mb-2",alt:"logo-dark"},null,-1),Rs={class:"d-flex mb-4"},Ts=s("label",{for:"email",class:"form-label me-3 mb-0"},[s("i",{class:"bi bi-person-circle fs-3 lh-40px text-gray-800"})],-1),Bs={class:"w-100"},Es={class:"text-danger"},Ns={class:"d-flex mb-4"},Os=s("label",{for:"password",class:"form-label me-3 mb-0"},[s("i",{class:"bi bi-shield-lock fs-3 lh-40px text-gray-800"})],-1),Is={class:"w-100"},zs={class:"text-danger"},Ks={class:"d-flex align-items-center justify-content-between"},Ws=["disabled"],qs={class:"modal-dialog"},Js={class:"modal-content"},Qs={class:"modal-header"},Zs=s("h1",{class:"modal-title fs-5"},"註冊帳號",-1),Gs={class:"modal-body d-flex justify-content-center py-4"},Hs={class:"row gx-0 mb-3"},Xs=s("label",{for:"name",class:"form-label col-3 mb-0"},"姓名",-1),Ys={class:"col-9"},so={class:"text-danger fs-8"},oo={class:"row gx-0 mb-3"},eo=s("label",{for:"signupEmail",class:"form-label col-3 mb-0"},"信箱",-1),to={class:"col-9"},no={class:"text-danger fs-8"},ao={class:"row gx-0 mb-3"},io=s("label",{for:"signupPassword",class:"form-label col-3 mb-0"},"密碼",-1),lo={class:"col-9"},ro={class:"text-danger fs-8"},co={class:"row gx-0"},uo=s("label",{for:"passwordConfirm",class:"form-label col-3 mb-0"},"確認密碼",-1),po={class:"col-9"},mo={class:"text-danger fs-8"},go={class:"modal-footer"},fo=["disabled"],So={__name:"SigninView",setup(_o){const M=ts(),T=ns(),{apiResAlert:v,apiErrAlert:B,handleError:F}=T,V=as(),{user:l}=is(V),{getFavorite:E,addAttrDate:N}=V,O=ls(),{isLoadingOn:b,isLoadingOff:h}=O,{loginAdmin:I,renderSignin:z,renderSignup:K}=vs(),f=$(null),_=$(null),{signupSchema:W,signinSchema:q}=xs(),U=$(!1),J=rs(()=>U.value?W:q),{defineField:r,handleSubmit:Q,errors:n,meta:P,values:d}=ys({validationSchema:J}),[w,Z]=r("signin.username"),[x,G]=r("signin.password"),[y,H]=r("signup.name"),[k,X]=r("signup.email"),[S,Y]=r("signup.password"),[A,ss]=r("signup.passwordConfirm"),j=async()=>{b("isFullLoading");try{const a=await I(d.signin),{token:o,expired:i}=a.data;document.cookie=`token=${o}; expires=${new Date(i)}; path=/`,l.value.loginState=!0,M.push("/admin/products"),v(a.data.message)}catch(a){throw B(a.response.data.message),a}finally{h("isFullLoading")}},D=async()=>{b("isFullLoading");const a={email:d.signin.username,password:d.signin.password};try{const o=await z(a),{user:i,accessToken:t}=o.data,C=new Date(new Date().getTime()+60*60*1e3).toUTCString();document.cookie=`accessToken=${t}; expires=${C}; path=/`,bs.defaults.headers.common.Authorization=`Bearer ${t}`,l.value.userInfo=i,l.value.loginState=!0,await E(i.id),v("登入成功"),M.push("/products")}catch(o){throw F(o),o}finally{h("isFullLoading")}},os=Q(async(a,{resetForm:o})=>{const i={name:d.signup.name,email:d.signup.email,password:d.signup.password};b("isFullLoading");try{const t=await K(i),{id:C}=t.data.user;await N(C),_.value.hide(),o(),v("註冊成功")}catch(t){throw F(t),t}finally{h("isFullLoading")}}),es=()=>_.value.show(),R=()=>_.value.hide();return ds(()=>{_.value=new As(f.value),ws(f,a=>{a.forEach(o=>{if(o.attributeName==="class"){const i=Array.from(f.value.classList).includes("show");U.value=i}})},{attributes:!0})}),(a,o)=>{const i=cs("RouterLink");return us(),ps(_s,null,[L(Ss),s("div",Ls,[s("div",Ms,[s("div",Fs,[Vs,s("div",Us,[s("div",Ps,[s("div",js,[Ds,L(ks,{content:e(l).isAdmin?"管理者":"一般用戶",size:"normal"},null,8,["content"])]),s("form",null,[s("div",Rs,[Ts,s("div",Bs,[c(s("input",p({type:"email",class:["form-control",{"is-invalid":e(n)["signin.username"]}],id:"email",placeholder:"請輸入您的帳號","onUpdate:modelValue":o[0]||(o[0]=t=>m(w)?w.value=t:null)},e(Z)),null,16),[[u,e(w)]]),s("span",Es,g(e(n)["signin.username"]),1)])]),s("div",Ns,[Os,s("div",Is,[c(s("input",p({type:"password",class:["form-control",{"is-invalid":e(n)["signin.password"]}],id:"password",placeholder:"請輸入您的密碼",autocomplete:"true","onUpdate:modelValue":o[1]||(o[1]=t=>m(x)?x.value=t:null)},e(G),{onKeyup:o[2]||(o[2]=ms(t=>e(l).isAdmin?j():D(),["enter"]))}),null,16),[[u,e(x)]]),s("span",zs,g(e(n)["signin.password"]),1)])])]),s("div",Ks,[L(i,{to:"/",class:"link-gray-600 text-decoration-underline link-offset-1"},{default:gs(()=>[hs(" 返回首頁 ")]),_:1}),s("div",null,[s("a",{href:"#",class:"link-primary text-decoration-underline link-offset-1",onClick:o[3]||(o[3]=fs(t=>es(),["prevent"]))},"註冊帳號"),s("button",{type:"button",class:"btn btn-primary ms-3",disabled:!e(P).valid,onClick:o[4]||(o[4]=t=>e(l).isAdmin?j():D())}," 登入 ",8,Ws)])])])])])])]),s("div",{class:"modal fade",id:"signupModal",ref_key:"refModal",ref:f},[s("div",qs,[s("div",Js,[s("div",Qs,[Zs,s("button",{type:"button",class:"btn-close",onClick:o[5]||(o[5]=t=>R())})]),s("div",Gs,[s("form",null,[s("div",Hs,[Xs,s("div",Ys,[c(s("input",p({type:"text",class:["form-control",{"is-invalid":e(n)["signup.name"]}],id:"name",placeholder:"註冊的姓名","onUpdate:modelValue":o[6]||(o[6]=t=>m(y)?y.value=t:null)},e(H)),null,16),[[u,e(y)]]),s("span",so,g(e(n)["signup.name"]),1)])]),s("div",oo,[eo,s("div",to,[c(s("input",p({type:"email",class:["form-control",{"is-invalid":e(n)["signup.email"]}],id:"signupEmail",placeholder:"註冊的信箱","onUpdate:modelValue":o[7]||(o[7]=t=>m(k)?k.value=t:null)},e(X)),null,16),[[u,e(k)]]),s("span",no,g(e(n)["signup.email"]),1)])]),s("div",ao,[io,s("div",lo,[c(s("input",p({type:"password",class:["form-control",{"is-invalid":e(n)["signup.password"]}],id:"signupPassword",placeholder:"註冊的密碼",autocomplete:"true","onUpdate:modelValue":o[8]||(o[8]=t=>m(S)?S.value=t:null)},e(Y)),null,16),[[u,e(S)]]),s("span",ro,g(e(n)["signup.password"]),1)])]),s("div",co,[uo,s("div",po,[c(s("input",p({type:"password",class:["form-control",{"is-invalid":e(n)["signup.passwordConfirm"]}],id:"passwordConfirm",placeholder:"確認密碼",autocomplete:"true","onUpdate:modelValue":o[9]||(o[9]=t=>m(A)?A.value=t:null)},e(ss)),null,16),[[u,e(A)]]),s("span",mo,g(e(n)["signup.passwordConfirm"]),1)])])])]),s("div",go,[s("button",{type:"button",class:"btn btn-secondary",onClick:o[10]||(o[10]=t=>R())},"取消"),s("button",{type:"button",class:"btn btn-primary",disabled:!e(P).valid,onClick:o[11]||(o[11]=t=>e(os)())}," 確認註冊 ",8,fo)])])])],512)],64)}}};export{So as default};
