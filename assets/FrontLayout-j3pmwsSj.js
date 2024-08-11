import{u as B,a as R,s as y,b as M,r as k,o as c,c as _,d as t,e as s,w as e,f as l,g as n,t as m,h as C,i as j,F as x,j as I,k as F,l as N,m as P,v as A,n as D,p as q,q as T}from"./index-9oBsyWac.js";import{C as E}from"./CanvasCard-5z3eML3z.js";import{_ as Z}from"./plugin-vueexport-helper-x3n3nnut.js";import"./AddButtonUi-z9IJ-dxQ.js";const U="data:image/svg+xml,%3csvg%20width='40'%20height='28'%20viewBox='0%200%2040%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='4'%20fill='%23D9D9D9'/%3e%3crect%20y='12'%20width='40'%20height='4'%20fill='%23D9D9D9'/%3e%3crect%20y='24'%20width='40'%20height='4'%20fill='%23D9D9D9'/%3e%3c/svg%3e",z="/Cafe-Website-Project/assets/Beans-cafe-logo-light-ifczIvSC.png",W="/Cafe-Website-Project/assets/Beans-cafe-logo-sm-ZG5yAN3a.png",G={class:"navbar navbar-expand-lg bg-gray-900 fixed-top py-3"},J={class:"container d-flex"},K=t("button",{class:"navbar-toggler border-none p-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar"},[t("img",{src:U,alt:"burger-menu"})],-1),O=t("img",{class:"d-none d-lg-block",src:z,alt:"logo-light"},null,-1),Q=t("img",{class:"d-lg-none",src:W,alt:"logo-sm"},null,-1),X={class:"navbar-nav flex-row"},Y={class:"d-none d-lg-block"},t2={class:"d-none d-lg-block"},s2={class:"d-none d-lg-block"},e2={class:"d-none d-lg-block"},l2={class:"d-flex"},o2={class:"bi bi-cart3 d-flex fs-4 fs-lg-3 position-relative"},i2={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-gray-900 fs-8 ms-1"},n2={class:"d-flex dropdown"},a2=t("button",{type:"button",id:"userDropdownBtn","data-bs-toggle":"dropdown",class:"nav-link link-warning text-light ps-3 d-flex align-items-center"},[t("i",{class:"bi bi-person-circle d-flex fs-4 fs-lg-3"})],-1),c2={class:"dropdown-menu dropdown-menu-end position-absolute bg-secondary-tint px-1"},d2={class:"py-1 px-3 d-flex"},r2=t("i",{class:"bi bi-person-circle me-2"},null,-1),_2={class:"d-inline-block text-truncate",style:{"max-width":"80px"}},f2=t("li",null,[t("hr",{class:"dropdown-divider"})],-1),g2=t("i",{class:"bi bi-gear me-2"},null,-1),p2=t("i",{class:"bi bi-bag-plus me-2"},null,-1),u2=t("i",{class:"bi bi-suit-heart me-2"},null,-1),b2={class:"badge text-bg-primary ms-2"},h2=t("li",null,[t("hr",{class:"dropdown-divider"})],-1),m2=t("i",{class:"bi bi-box-arrow-in-right me-2"},null,-1),v2=t("i",{class:"bi bi-box-arrow-in-left me-2"},null,-1),x2={class:"collapse navbar-collapse",id:"navbar"},w2={class:"navbar-nav d-lg-none"},C2={class:"offcanvas offcanvas-end bg-secondary-tint",id:"Cart",style:{width:"350px"}},y2={class:"offcanvas-header border-2 border-bottom border-dark"},k2={class:"offcanvas-title d-flex align-items-center"},$2={class:"badge rounded-pill text-bg-primary fs-8 ms-2"},L2=t("button",{type:"button",class:"btn p-0","data-bs-dismiss":"offcanvas"},[t("i",{class:"bi bi-x-lg fs-5"})],-1),V2={class:"offcanvas-body d-flex flex-column justify-content-between"},S2={key:0,class:"d-flex flex-column align-items-center"},H2=t("i",{class:"bi bi-emoji-frown text-primary",style:{"font-size":"80px"}},null,-1),M2=t("p",{class:"fs-4 fw-semibold text-primary"},"您的購物車沒任何商品",-1),D2=[H2,M2],Z2={key:1,class:"mb-5",style:{"overflow-y":"scroll"}},B2={class:"fs-5 fw-semibold d-flex justify-content-between mb-3"},R2=t("span",null,"總金額 :",-1),j2={class:"text-danger"},I2={__name:"HeaderView",setup(p){const b=B(),v=R(),{cartList:d,total:w}=y(v),h=M(),{user:u,favorites:$}=y(h),{signout:r}=h;return(g,a)=>{var L,V,S;const o=k("RouterLink");return c(),_(x,null,[t("nav",G,[t("div",J,[K,s(o,{class:"navbar-brand mx-auto mx-lg-0",to:"/"},{default:e(()=>[O,Q]),_:1}),t("ul",X,[t("li",Y,[s(o,{to:"/",class:"nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"},{default:e(()=>[l(" 首頁 ")]),_:1})]),t("li",t2,[s(o,{to:"/products",class:"nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"},{default:e(()=>[l(" 全部商品 ")]),_:1})]),t("li",s2,[s(o,{to:"/about",class:"nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"},{default:e(()=>[l(" 關於我們 ")]),_:1})]),t("li",e2,[s(o,{to:"/contact",class:"nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"},{default:e(()=>[l(" 聯絡我們 ")]),_:1})]),t("li",l2,[s(o,{to:"#",class:"nav-link link-warning text-light px-3 d-flex align-items-center","data-bs-toggle":"offcanvas","data-bs-target":"#Cart"},{default:e(()=>{var i;return[t("i",o2,[t("span",i2,m((i=n(d).carts)==null?void 0:i.length),1)])]}),_:1})]),t("li",n2,[a2,t("ul",c2,[t("li",null,[t("div",d2,[r2,t("span",_2,m(n(u).loginState?n(u).userInfo.name:"尚未登入"),1)])]),f2,t("li",null,[s(o,{to:"/setting",class:"dropdown-item"},{default:e(()=>[g2,l("設定")]),_:1})]),t("li",null,[s(o,{to:"#",class:"dropdown-item d-none"},{default:e(()=>[p2,l("確認訂單")]),_:1})]),t("li",null,[s(o,{to:"#",class:"dropdown-item d-none"},{default:e(()=>[u2,l("收藏"),t("span",b2,m(n($).list.length),1)]),_:1})]),h2,t("li",null,[n(u).loginState?(c(),_("a",{key:1,class:"dropdown-item",href:"#",onClick:a[1]||(a[1]=j(i=>n(r)(),["prevent"]))},[v2,l("登出")])):(c(),C(o,{key:0,to:"/signin/user",class:"dropdown-item",onClick:a[0]||(a[0]=i=>n(u).isAdmin=!1)},{default:e(()=>[m2,l("登入")]),_:1}))])])])]),t("div",x2,[t("ul",w2,[t("li",null,[s(o,{to:"/",class:"nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"},{default:e(()=>[l(" 首頁 ")]),_:1})]),t("li",null,[s(o,{to:"/products",class:"nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"},{default:e(()=>[l(" 全部商品 ")]),_:1})]),t("li",null,[s(o,{to:"/about",class:"nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"},{default:e(()=>[l(" 關於我們 ")]),_:1})]),t("li",null,[s(o,{to:"/contact",class:"nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"},{default:e(()=>[l(" 聯絡我們 ")]),_:1})])])])])]),t("div",C2,[t("div",y2,[t("h5",k2,[l(" 您的購物車 "),t("span",$2,m((L=n(d).carts)==null?void 0:L.length),1)]),L2]),t("div",V2,[(V=n(d).carts)!=null&&V.length?(c(),_("div",Z2,[(c(!0),_(x,null,I(n(d).carts,i=>(c(),C(E,{class:"mb-2",key:i.id,title:i.product.title,content:i.product.content,price:i.product.price,img_url:i.product.imageUrl,qty:i.qty,cart_id:i.id,product_id:i.product_id},null,8,["title","content","price","img_url","qty","cart_id","product_id"]))),128))])):(c(),_("div",S2,D2)),t("div",null,[t("div",B2,[R2,t("span",j2,m(`NT$ ${n(w)}`),1)]),(S=n(d).carts)!=null&&S.length?(c(),C(o,{key:0,to:"/cart",class:"btn btn-primary w-100","data-bs-dismiss":"offcanvas",onClick:a[2]||(a[2]=i=>n(b).push("/cart"))},{default:e(()=>[l(" 查看購物車 ")]),_:1})):(c(),_("button",{key:1,type:"button",class:"btn btn-primary w-100","data-bs-dismiss":"offcanvas",onClick:a[3]||(a[3]=i=>n(b).push("/products"))}," 來去選購 "))])])])],64)}}},H="data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_90_312)'%3e%3cg%20clip-path='url(%23clip1_90_312)'%3e%3cpath%20d='M19.2%2014.7C18.7226%2014.7%2018.2648%2014.854%2017.9272%2015.1283C17.5897%2015.4026%2017.4%2015.7746%2017.4%2016.1625C17.4%2016.5503%2017.5897%2016.9223%2017.9272%2017.1966C18.2648%2017.4709%2018.7226%2017.625%2019.2%2017.625H40.8C41.2774%2017.625%2041.7353%2017.4709%2042.0728%2017.1966C42.4104%2016.9223%2042.6%2016.5503%2042.6%2016.1625C42.6%2015.7746%2042.4104%2015.4026%2042.0728%2015.1283C41.7353%2014.854%2041.2774%2014.7%2040.8%2014.7H19.2ZM17.4%2022.0125C17.4%2021.6246%2017.5897%2021.2526%2017.9272%2020.9783C18.2648%2020.704%2018.7226%2020.55%2019.2%2020.55H40.8C41.2774%2020.55%2041.7353%2020.704%2042.0728%2020.9783C42.4104%2021.2526%2042.6%2021.6246%2042.6%2022.0125C42.6%2022.4003%2042.4104%2022.7723%2042.0728%2023.0466C41.7353%2023.3209%2041.2774%2023.475%2040.8%2023.475H19.2C18.7226%2023.475%2018.2648%2023.3209%2017.9272%2023.0466C17.5897%2022.7723%2017.4%2022.4003%2017.4%2022.0125ZM19.2%2026.4C18.7226%2026.4%2018.2648%2026.554%2017.9272%2026.8283C17.5897%2027.1026%2017.4%2027.4746%2017.4%2027.8625C17.4%2028.2503%2017.5897%2028.6223%2017.9272%2028.8966C18.2648%2029.1709%2018.7226%2029.325%2019.2%2029.325H40.8C41.2774%2029.325%2041.7353%2029.1709%2042.0728%2028.8966C42.4104%2028.6223%2042.6%2028.2503%2042.6%2027.8625C42.6%2027.4746%2042.4104%2027.1026%2042.0728%2026.8283C41.7353%2026.554%2041.2774%2026.4%2040.8%2026.4H19.2ZM19.2%2032.25C18.7226%2032.25%2018.2648%2032.404%2017.9272%2032.6783C17.5897%2032.9526%2017.4%2033.3246%2017.4%2033.7125C17.4%2034.1003%2017.5897%2034.4723%2017.9272%2034.7466C18.2648%2035.0209%2018.7226%2035.175%2019.2%2035.175H30C30.4774%2035.175%2030.9353%2035.0209%2031.2728%2034.7466C31.6104%2034.4723%2031.8%2034.1003%2031.8%2033.7125C31.8%2033.3246%2031.6104%2032.9526%2031.2728%2032.6783C30.9353%2032.404%2030.4774%2032.25%2030%2032.25H19.2Z'%20fill='white'/%3e%3cpath%20d='M8.40002%208.85C8.40002%207.29848%209.15859%205.81051%2010.5089%204.71343C11.8591%203.61634%2013.6905%203%2015.6%203L44.4%203C46.3096%203%2048.1409%203.61634%2049.4912%204.71343C50.8414%205.81051%2051.6%207.29848%2051.6%208.85V43.95C51.6%2045.5015%2050.8414%2046.9895%2049.4912%2048.0866C48.1409%2049.1837%2046.3096%2049.8%2044.4%2049.8H15.6C13.6905%2049.8%2011.8591%2049.1837%2010.5089%2048.0866C9.15859%2046.9895%208.40002%2045.5015%208.40002%2043.95V8.85ZM44.4%205.925H15.6C14.6452%205.925%2013.7296%206.23317%2013.0544%206.78171C12.3793%207.33026%2012%208.07424%2012%208.85V43.95C12%2044.7258%2012.3793%2045.4697%2013.0544%2046.0183C13.7296%2046.5668%2014.6452%2046.875%2015.6%2046.875H44.4C45.3548%2046.875%2046.2705%2046.5668%2046.9456%2046.0183C47.6207%2045.4697%2048%2044.7258%2048%2043.95V8.85C48%208.07424%2047.6207%207.33026%2046.9456%206.78171C46.2705%206.23317%2045.3548%205.925%2044.4%205.925Z'%20fill='white'/%3e%3crect%20x='4.20001'%20y='30.6001'%20width='52.2'%20height='24.6'%20fill='%23191919'/%3e%3c/g%3e%3cpath%20d='M31.7625%204.94252C31.2199%204.65362%2030.6147%204.50252%2030%204.50252C29.3853%204.50252%2028.7801%204.65362%2028.2375%204.94252L5.7375%2016.9425C5.13758%2017.262%204.63576%2017.7384%204.28569%2018.321C3.93561%2018.9036%203.75045%2019.5704%203.75%2020.25V23.3138L25.3125%2036.2513L30%2033.4388L34.6875%2036.2513L56.25%2023.3138V20.25C56.2495%2019.5704%2056.0644%2018.9036%2055.7143%2018.321C55.3642%2017.7384%2054.8624%2017.262%2054.2625%2016.9425L31.7625%204.94252ZM56.25%2027.6863L38.3325%2038.4375L56.25%2049.1888V27.6863ZM56.1188%2053.4863L30%2037.8075L3.88125%2053.4825C4.09697%2054.2771%204.56819%2054.9786%205.2222%2055.4788C5.87621%2055.9789%206.67666%2056.25%207.5%2056.25H52.5C53.3233%2056.25%2054.1238%2055.9789%2054.7778%2055.4788C55.4318%2054.9786%2055.903%2054.2808%2056.1188%2053.4863ZM3.75%2049.185L21.6675%2038.4338L3.75%2027.6863V49.185ZM26.4713%201.63127C27.5573%201.05218%2028.7692%200.749268%2030%200.749268C31.2308%200.749268%2032.4427%201.05218%2033.5288%201.63127L56.0288%2013.6313C57.2284%2014.271%2058.2317%2015.2247%2058.9312%2016.3905C59.6307%2017.5564%2060.0001%2018.8904%2060%2020.25V52.5C60%2054.4891%2059.2098%2056.3968%2057.8033%2057.8033C56.3968%2059.2098%2054.4891%2060%2052.5%2060H7.5C5.51088%2060%203.60322%2059.2098%202.1967%2057.8033C0.790176%2056.3968%203.75146e-08%2054.4891%203.75146e-08%2052.5V20.25C-0.000135925%2018.8904%200.369303%2017.5564%201.0688%2016.3905C1.7683%2015.2247%202.77155%2014.271%203.97125%2013.6313L26.4713%201.63127Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_90_312'%3e%3crect%20width='60'%20height='60'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_90_312'%3e%3crect%20width='57.6'%20height='46.8'%20fill='white'%20transform='translate(1.20001%203)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",f=p=>(q("data-v-ef4b64e6"),p=p(),T(),p),F2={class:"bg-gray-900 py-6"},N2={class:"container"},P2={class:"row justify-content-between gy-5"},A2=D('<div class="col-12 col-lg-8" data-v-ef4b64e6><div class="d-flex align-items-start align-items-lg-center" data-v-ef4b64e6><img src="'+H+'" alt="mail-open" width="40" class="d-lg-none" data-v-ef4b64e6><img src="'+H+'" alt="mail-open" width="60" class="d-none d-lg-block" data-v-ef4b64e6><div class="ms-3 ms-lg-4" data-v-ef4b64e6><p class="fs-lg-5 fw-bold text-light mb-1" data-v-ef4b64e6>現在就輸入 Email 來獲得最新優惠！</p><p class="fs-8 fs-lg-7 text-light mb-0" data-v-ef4b64e6> 訂閱我們的電子報，即可獲得專屬折扣碼！享受最新咖啡消息和限時優惠！ </p></div></div></div>',1),q2={class:"col-12 col-lg-4"},T2={class:"input-group"},E2={class:"bg-gray-800 py-7"},U2={class:"container"},z2={class:"row align-items-center gy-6"},W2={class:"col-12 col-lg-4 order-lg-last"},G2={class:"d-flex flex-column align-items-center"},J2=f(()=>t("h3",{class:"fs-4 fw-bold text-light mb-4"},"社群分享",-1)),K2={class:"icon-group d-flex list-unstyled"},O2=f(()=>t("i",{class:"bi bi-github fs-6 text-light d-flex"},null,-1)),Q2=f(()=>t("i",{class:"bi bi-instagram fs-6 text-light d-flex"},null,-1)),X2=f(()=>t("i",{class:"bi bi-twitter-x fs-6 text-light d-flex"},null,-1)),Y2=f(()=>t("i",{class:"bi bi-youtube fs-6 text-light d-flex"},null,-1)),t0={class:"col-12 col-lg-4"},s0={class:"d-flex flex-column align-items-center border-top border-bottom border-lg-0 py-5 py-lg-0"},e0=f(()=>t("i",{class:"bi bi-shield-lock fs-6 lh-24px ms-1"},null,-1)),l0=D('<ul class="list-group" data-v-ef4b64e6><li class="list-group-item bg-transparent d-flex p-0 border-0" data-v-ef4b64e6><a href="tel:+" class="link-warning text-light d-flex" data-v-ef4b64e6><i class="bi bi-telephone fs-5 lh-30px me-3" data-v-ef4b64e6></i><p class="fs-6 mb-0" data-v-ef4b64e6>電話 : (+886) 123-456-789</p></a></li><li class="list-group-item bg-transparent text-light d-flex p-0 border-0 mt-3" data-v-ef4b64e6><i class="bi bi-geo-alt fs-5 lh-30px me-3" data-v-ef4b64e6></i><p class="fs-6 mb-0" data-v-ef4b64e6>地址 : 台北市萬里區長山路2130號</p></li></ul>',1),o0={class:"col-12 col-lg-4"},i0={class:"text-center"},n0=f(()=>t("h2",{class:"fs-3 fs-lg-2 fw-bold text-light mb-4"},"彼恩斯咖啡",-1)),a0=f(()=>t("p",{class:"fs-8 text-light"},"© Copyright 2023 本網站僅個人練習作品，非商業用途",-1)),c0={__name:"FooterView",setup(p){const b=F(),{apiResAlert:v}=b,d=M(),{user:w}=y(d),h=N("");function u(){v("優惠代碼: coupon")}return($,r)=>{const g=k("RouterLink");return c(),_(x,null,[t("section",F2,[t("div",N2,[t("div",P2,[A2,t("div",q2,[t("div",T2,[P(t("input",{type:"email",class:"form-control bg-gray-100 fs-8 p-3 rounded-0",placeholder:"請輸入你的 Email","onUpdate:modelValue":r[0]||(r[0]=a=>h.value=a)},null,512),[[A,h.value]]),t("button",{class:"btn btn-warning fs-8 fw-bold rounded-0",type:"button",onClick:r[1]||(r[1]=a=>u())}," 立即訂閱 ")])])])])]),t("footer",E2,[t("div",U2,[t("div",z2,[t("div",W2,[t("div",G2,[J2,t("ul",K2,[t("li",null,[s(g,{to:"#",class:"icon"},{default:e(()=>[O2]),_:1})]),t("li",null,[s(g,{to:"#",class:"icon"},{default:e(()=>[Q2]),_:1})]),t("li",null,[s(g,{to:"#",class:"icon"},{default:e(()=>[X2]),_:1})]),t("li",null,[s(g,{to:"#",class:"icon"},{default:e(()=>[Y2]),_:1})])])])]),t("div",t0,[t("div",s0,[s(g,{to:"/signin/admin",class:"btn btn-outline-light px-3 py-2 border-2 d-flex mb-4",onClick:r[2]||(r[2]=a=>n(w).isAdmin=!0)},{default:e(()=>[l(" 後台登入 "),e0]),_:1}),l0])]),t("div",o0,[t("div",i0,[s(g,{to:"/"},{default:e(()=>[n0]),_:1}),a0])])])])])],64)}}},d0=Z(c0,[["__scopeId","data-v-ef4b64e6"]]),r0={class:"front-view bg-secondary-tint"},_0={__name:"FrontLayout",setup(p){return(b,v)=>{const d=k("RouterView");return c(),_(x,null,[s(I2),t("div",r0,[s(d)]),s(d0)],64)}}},b0=Z(_0,[["__scopeId","data-v-7bb34d01"]]);export{b0 as default};