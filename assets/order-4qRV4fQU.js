import{Z as g,u as C,a as S,s as A,k as O,l as R,O as v}from"./index-e-kLE5WB.js";const b=g("order",()=>{const u=C(),s=S(),{finalTotal:c,total:d}=A(s),{getCart:r}=s,p=O(),{apiResAlert:o,apiErrAlert:n}=p,{fetchCreate:i,fetchCoupon:l}=v(),f=R({});function m(t){l({data:{code:t}}).then(a=>{o(a.data.message),r()}).catch(a=>n(a.response.data.message))}function h(t){c.value=d.value,i({data:t}).then(e=>{o(e.data.message),r(),u.push(`/payment/${e.data.orderId}`)}).catch(e=>n(e.response.data.message))}return{tempOrder:f,useCoupon:m,submitOrder:h}},{persist:!0});export{b as u};
