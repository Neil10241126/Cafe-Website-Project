import{u as ns,k as as,b as is,s as ls,D as rs,l as M,E as ds,z as cs,r as us,o as ps,c as ms,e as L,d as s,g as o,m as c,v as u,J as p,M as m,t as g,N as gs,w as fs,i as _s,F as vs,O as bs,f as hs}from"./index-e-kLE5WB.js";import{b as ws}from"./index-8x6g0pov.js";import{u as ys,a as xs}from"./useValidation--MndOpIM.js";import{_ as ks}from"./BadgeUi-vi9TKDHe.js";import{_ as Ss}from"./LoadingUi-YdW-FvWX.js";import{M as As}from"./modal-FBL1wkSJ.js";const Cs="/Cafe-Website-Project/assets/Sign-logo-_dDnZN3j.svg",Ms="/Cafe-Website-Project/assets/Beans-cafe-logo-dark-BiaS39hy.svg",Ls={class:"py-8"},$s={class:"container px-4"},Fs={class:"row justify-content-center bg-secondary-light rounded-4",style:{"box-shadow":`0 4px 4px rgba(95, 61, 45, 0.2),
            0 4px 4px rgba(95, 61, 45, 0.2)`}},Us=s("div",{class:"col-lg-5"},[s("div",{class:"d-none d-lg-block px-3 py-6"},[s("img",{src:Cs,class:"img-fluid",alt:"Sign-logo"})])],-1),Vs={class:"col-12 col-sm-8 col-lg-5"},Ds={class:"px-3 py-6"},Ts={class:"text-center mb-6"},Es=s("img",{src:Ms,class:"mx-auto mb-2",alt:"logo-dark"},null,-1),Ps={class:"d-flex mb-4"},js=s("label",{for:"email",class:"form-label me-3 mb-0"},[s("i",{class:"bi bi-person-circle fs-3 lh-40px text-gray-800"})],-1),Ns={class:"w-100"},Rs={class:"text-danger"},Bs={class:"d-flex mb-4"},Os=s("label",{for:"password",class:"form-label me-3 mb-0"},[s("i",{class:"bi bi-shield-lock fs-3 lh-40px text-gray-800"})],-1),zs={class:"w-100"},Is={class:"text-danger"},Ks={class:"d-flex align-items-center justify-content-between"},Ws=["disabled"],Js={class:"modal-dialog"},Zs={class:"modal-content"},qs={class:"modal-header"},Gs=s("h1",{class:"modal-title fs-5"},"註冊帳號",-1),Hs={class:"modal-body d-flex justify-content-center py-4"},Qs={class:"row gx-0 mb-3"},Xs=s("label",{for:"name",class:"form-label col-3 mb-0"},"姓名",-1),Ys={class:"col-9"},se={class:"text-danger fs-8"},ee={class:"row gx-0 mb-3"},oe=s("label",{for:"signupEmail",class:"form-label col-3 mb-0"},"信箱",-1),te={class:"col-9"},ne={class:"text-danger fs-8"},ae={class:"row gx-0 mb-3"},ie=s("label",{for:"signupPassword",class:"form-label col-3 mb-0"},"密碼",-1),le={class:"col-9"},re={class:"text-danger fs-8"},de={class:"row gx-0"},ce=s("label",{for:"passwordConfirm",class:"form-label col-3 mb-0"},"確認密碼",-1),ue={class:"col-9"},pe={class:"text-danger fs-8"},me={class:"modal-footer"},ge=["disabled"],xe={__name:"SigninView",setup(fe){const $=ns(),j=as(),{apiResAlert:v,apiErrAlert:N,handleError:F}=j,U=is(),{user:l}=ls(U),{getFavorite:R,addAttrDate:B}=U,O=rs(),{isLoadingOn:b,isLoadingOff:h}=O,{loginAdmin:z,renderSignin:I,renderSignup:K,setUserToken:W}=bs(),f=M(null),_=M(null),{signupSchema:J,signinSchema:Z}=ys(),V=M(!1),q=ds(()=>V.value?J:Z),{defineField:r,handleSubmit:G,errors:n,meta:D,values:d}=xs({validationSchema:q}),[w,H]=r("signin.username"),[y,Q]=r("signin.password"),[x,X]=r("signup.name"),[k,Y]=r("signup.email"),[S,ss]=r("signup.password"),[A,es]=r("signup.passwordConfirm"),T=async()=>{b("isFullLoading");try{const a=await z(d.signin),{token:e,expired:i}=a.data;document.cookie=`token=${e}; expires=${new Date(i)}; path=/`,l.value.loginState=!0,$.push("/admin/home"),v(a.data.message)}catch(a){throw N(a.response.data.message),a}finally{h("isFullLoading")}},E=async()=>{b("isFullLoading");const a={email:d.signin.username,password:d.signin.password};try{const e=await I(a),{user:i,accessToken:t}=e.data,C=new Date(new Date().getTime()+60*60*1e3).toUTCString();document.cookie=`accessToken=${t}; expires=${C}; path=/`,W(t),l.value.userInfo=i,l.value.loginState=!0,await R(i.id),v("登入成功"),$.push("/products")}catch(e){throw F(e),e}finally{h("isFullLoading")}},os=G(async(a,{resetForm:e})=>{const i={name:d.signup.name,email:d.signup.email,password:d.signup.password};b("isFullLoading");try{const t=await K(i),{id:C}=t.data.user;await B(C),_.value.hide(),e(),v("註冊成功")}catch(t){throw F(t),t}finally{h("isFullLoading")}}),ts=()=>_.value.show(),P=()=>_.value.hide();return cs(()=>{_.value=new As(f.value),ws(f,a=>{a.forEach(e=>{if(e.attributeName==="class"){const i=Array.from(f.value.classList).includes("show");V.value=i}})},{attributes:!0})}),(a,e)=>{const i=us("RouterLink");return ps(),ms(vs,null,[L(Ss),s("div",Ls,[s("div",$s,[s("div",Fs,[Us,s("div",Vs,[s("div",Ds,[s("div",Ts,[Es,L(ks,{content:o(l).isAdmin?"管理者":"一般用戶",size:"normal"},null,8,["content"])]),s("form",null,[s("div",Ps,[js,s("div",Ns,[c(s("input",p({type:"email",class:["form-control",{"is-invalid":o(n)["signin.username"]}],id:"email",placeholder:"請輸入您的帳號","onUpdate:modelValue":e[0]||(e[0]=t=>m(w)?w.value=t:null)},o(H)),null,16),[[u,o(w)]]),s("span",Rs,g(o(n)["signin.username"]),1)])]),s("div",Bs,[Os,s("div",zs,[c(s("input",p({type:"password",class:["form-control",{"is-invalid":o(n)["signin.password"]}],id:"password",placeholder:"請輸入您的密碼",autocomplete:"true","onUpdate:modelValue":e[1]||(e[1]=t=>m(y)?y.value=t:null)},o(Q),{onKeyup:e[2]||(e[2]=gs(t=>o(l).isAdmin?T():E(),["enter"]))}),null,16),[[u,o(y)]]),s("span",Is,g(o(n)["signin.password"]),1)])])]),s("div",Ks,[L(i,{to:"/",class:"link-gray-600 text-decoration-underline link-offset-1"},{default:fs(()=>[hs(" 返回首頁 ")]),_:1}),s("div",null,[s("a",{href:"#",class:"link-primary text-decoration-underline link-offset-1",onClick:e[3]||(e[3]=_s(t=>ts(),["prevent"]))},"註冊帳號"),s("button",{type:"button",class:"btn btn-primary ms-3",disabled:!o(D).valid,onClick:e[4]||(e[4]=t=>o(l).isAdmin?T():E())}," 登入 ",8,Ws)])])])])])])]),s("div",{class:"modal fade",id:"signupModal",ref_key:"refModal",ref:f},[s("div",Js,[s("div",Zs,[s("div",qs,[Gs,s("button",{type:"button",class:"btn-close",onClick:e[5]||(e[5]=t=>P())})]),s("div",Hs,[s("form",null,[s("div",Qs,[Xs,s("div",Ys,[c(s("input",p({type:"text",class:["form-control",{"is-invalid":o(n)["signup.name"]}],id:"name",placeholder:"註冊的姓名","onUpdate:modelValue":e[6]||(e[6]=t=>m(x)?x.value=t:null)},o(X)),null,16),[[u,o(x)]]),s("span",se,g(o(n)["signup.name"]),1)])]),s("div",ee,[oe,s("div",te,[c(s("input",p({type:"email",class:["form-control",{"is-invalid":o(n)["signup.email"]}],id:"signupEmail",placeholder:"註冊的信箱","onUpdate:modelValue":e[7]||(e[7]=t=>m(k)?k.value=t:null)},o(Y)),null,16),[[u,o(k)]]),s("span",ne,g(o(n)["signup.email"]),1)])]),s("div",ae,[ie,s("div",le,[c(s("input",p({type:"password",class:["form-control",{"is-invalid":o(n)["signup.password"]}],id:"signupPassword",placeholder:"註冊的密碼",autocomplete:"true","onUpdate:modelValue":e[8]||(e[8]=t=>m(S)?S.value=t:null)},o(ss)),null,16),[[u,o(S)]]),s("span",re,g(o(n)["signup.password"]),1)])]),s("div",de,[ce,s("div",ue,[c(s("input",p({type:"password",class:["form-control",{"is-invalid":o(n)["signup.passwordConfirm"]}],id:"passwordConfirm",placeholder:"確認密碼",autocomplete:"true","onUpdate:modelValue":e[9]||(e[9]=t=>m(A)?A.value=t:null)},o(es)),null,16),[[u,o(A)]]),s("span",pe,g(o(n)["signup.passwordConfirm"]),1)])])])]),s("div",me,[s("button",{type:"button",class:"btn btn-secondary",onClick:e[10]||(e[10]=t=>P())},"取消"),s("button",{type:"button",class:"btn btn-primary",disabled:!o(D).valid,onClick:e[11]||(e[11]=t=>o(os)())}," 確認註冊 ",8,ge)])])])],512)],64)}}};export{xe as default};