import{P as I,Q as L,g as W,z as E,R as A,S,E as b,y as w,l as v,T}from"./index-77ePXirE.js";function y(e){return I()?(L(e),!0):!1}function m(e){return typeof e=="function"?e():W(e)}const N=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const k=e=>e!=null,C=Object.prototype.toString,j=e=>C.call(e)==="[object Object]",z=()=>{};function H(e){return e||S()}function P(e,t=!0,n){H()?E(e,n):t?e():A(e)}function g(e){var t;const n=m(e);return(t=n==null?void 0:n.$el)!=null?t:n}const h=N?window:void 0;function Q(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=h):[t,n,r,o]=e,!t)return z;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],s=()=>{i.forEach(l=>l()),i.length=0},u=(l,d,c,p)=>(l.addEventListener(d,c,p),()=>l.removeEventListener(d,c,p)),a=w(()=>[g(t),m(o)],([l,d])=>{if(s(),!l)return;const c=j(d)?{...d}:d;i.push(...n.flatMap(p=>r.map(O=>u(l,p,O,c))))},{immediate:!0,flush:"post"}),f=()=>{a(),s()};return y(f),f}function R(){const e=v(!1),t=S();return t&&E(()=>{e.value=!0},t),e}function M(e){const t=R();return b(()=>(t.value,!!e()))}function V(e,t={}){const{window:n=h}=t,r=M(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const i=v(!1),s=f=>{i.value=f.matches},u=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",s):o.removeListener(s))},a=T(()=>{r.value&&(u(),o=n.matchMedia(m(e)),"addEventListener"in o?o.addEventListener("change",s):o.addListener(s),i.value=o.matches)});return y(()=>{a(),u(),o=void 0}),i}function x(e,t,n={}){const{window:r=h,...o}=n;let i;const s=M(()=>r&&"MutationObserver"in r),u=()=>{i&&(i.disconnect(),i=void 0)},a=b(()=>{const c=m(e),p=(Array.isArray(c)?c:[c]).map(g).filter(k);return new Set(p)}),f=w(()=>a.value,c=>{u(),s.value&&r&&c.size&&(i=new MutationObserver(t),c.forEach(p=>i.observe(p,o)))},{immediate:!0,flush:"post"}),l=()=>i==null?void 0:i.takeRecords(),d=()=>{u(),f()};return y(d),{isSupported:s,stop:d,takeRecords:l}}function D(e={}){const{window:t=h,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:o=!0,includeScrollbar:i=!0}=e,s=v(n),u=v(r),a=()=>{t&&(i?(s.value=t.innerWidth,u.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};if(a(),P(a),Q("resize",a,{passive:!0}),o){const f=V("(orientation: portrait)");w(f,()=>a())}return{width:s,height:u}}export{x as a,D as u};
