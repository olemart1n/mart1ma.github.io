import{q as F,i as C,b as Q,V as $,H as b,m as y,a as p,G as z,E as O,p as g,r as P,e as G,h as K,k as Y,C as J}from"./q-89a25abc.js";const Z='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',X=g("qc-s"),bt=g("qc-c"),St=g("qc-ic"),tt=g("qc-h"),et=g("qc-l"),nt=g("qc-n"),st=g("qc-a"),qt=g("qc-ir"),Dt=y(()=>p(()=>import("./q-663033b0.js"),[]),"s_DyVc0YBIqQU"),Ot=()=>{},Tt=b(y(()=>p(()=>import("./q-1c9a5097.js"),["build/q-1c9a5097.js","build/q-89a25abc.js"]),"s_e0ssiDXoeAM")),R=new WeakMap,E=new Map,B="qaction",A=t=>t.pathname+t.search+t.hash,v=(t,e)=>new URL(t,e.href),ot=(t,e)=>t.origin===e.origin,H=(t,e)=>t.pathname+t.search===e.pathname+e.search,rt=(t,e)=>t.pathname===e.pathname,it=(t,e)=>t.search===e.search,at=(t,e,s)=>{let n=e??"";return s&&(n+=(n?"&":"?")+B+"="+encodeURIComponent(s.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+n},kt=(t,e)=>{const s=t.href;if(typeof s=="string"&&typeof t.target!="string"&&!t.reload)try{const n=v(s.trim(),e.url),o=v("",e.url);if(ot(n,o))return A(n)}catch(n){console.error(n)}else if(t.reload)return A(v("",e.url));return null},Pt=(t,e,s)=>{if(t.prefetch===!0&&e){const n=v(e,s.url),o=v("",s.url);if(!rt(n,o)||!it(n,o))return""}return null},ct=t=>t&&typeof t.then=="function",Rt=(t,e,s,n)=>{const o=lt(),i={head:o,withLocale:a=>P(n,a),resolveValue:a=>{const c=a.__id;if(a.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const f=t.loaders[c];if(ct(f))throw new Error("Loaders returning a function can not be referred to in the head function.");return f},...e};for(let a=s.length-1;a>=0;a--){const c=s[a]&&s[a].head;c&&(typeof c=="function"?L(o,P(n,()=>c(i))):typeof c=="object"&&L(o,c))}return i.head},L=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),w(t.meta,e.meta),w(t.links,e.links),w(t.styles,e.styles),w(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},w=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},lt=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function ft(t,e){const s=V(t),n=N(t),o=V(e),r=N(e);return M(t,s,n,e,o,r)}function M(t,e,s,n,o,r){let i=null;for(;e<s;){const a=t.charCodeAt(e++),c=n.charCodeAt(o++);if(a===91){const f=U(t,e),l=e+(f?3:0),u=q(t,l,s,93),h=t.substring(l,u),_=q(t,u+1,s,47),d=t.substring(u+1,_);e=u+1;const m=o-1;if(f){const k=ht(h,d,n,m,r,t,e+d.length+1,s);if(k)return Object.assign(i||(i={}),k)}const S=q(n,m,r,47,d);if(S==-1)return null;const T=n.substring(m,S);if(!f&&!d&&!T)return null;o=S,(i||(i={}))[h]=decodeURIComponent(T)}else if(a!==c&&!(isNaN(c)&&ut(t,e)))return null}return I(t,e)&&I(n,o)?i||{}:null}function ut(t,e){return t.charCodeAt(e)===91&&U(t,e+1)}function N(t){const e=t.length;return e>1&&t.charCodeAt(e-1)===47?e-1:e}function I(t,e){const s=t.length;return e>=s||e==s-1&&t.charCodeAt(e)===47}function V(t){return t.charCodeAt(0)===47?1:0}function U(t,e){return t.charCodeAt(e)===46&&t.charCodeAt(e+1)===46&&t.charCodeAt(e+2)===46}function q(t,e,s,n,o=""){for(;e<s&&t.charCodeAt(e)!==n;)e++;const r=o.length;for(let i=0;i<r;i++)if(t.charCodeAt(e-r+i)!==o.charCodeAt(i))return-1;return e-r}let W;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(W||(W={}));function ht(t,e,s,n,o,r,i,a){s.charCodeAt(n)===47&&n++;let c=o;const f=e+"/";let l=5;for(;c>=n&&l--;){const u=M(r,i,a,s,c,o);if(u){let h=s.substring(n,Math.min(c,o));return h.endsWith(f)&&(h=h.substring(0,h.length-f.length)),u[t]=decodeURIComponent(h),u}c=dt(s,n,f,c,n-1)+f.length}return null}function dt(t,e,s,n,o){let r=t.lastIndexOf(s,n);return r==n-s.length&&(r=t.lastIndexOf(s,n-s.length-1)),r>e?r:o}const Lt=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const r=o[0],i=ft(r,n);if(i){const a=o[1],c=o[3],f=new Array(a.length),l=[],u=_t(e,n);let h;return a.forEach((_,d)=>{j(_,l,m=>f[d]=m,s)}),j(u,l,_=>h=_==null?void 0:_.default,s),l.length>0&&await Promise.all(l),[r,i,f,h,c]}}return null},j=(t,e,s,n)=>{if(typeof t=="function"){const o=R.get(t);if(o)s(o);else{const r=t();typeof r.then=="function"?e.push(r.then(i=>{n!==!1&&R.set(t,i),s(i)})):r&&s(r)}}},_t=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},Nt=(t,e,s,n,o=!1)=>{if(e!=="popstate"){const r=H(s,n),i=s.hash===n.hash;if(!r||!i){const a={_qCityScroll:gt()};o?t.history.replaceState(a,"",A(n)):t.history.pushState(a,"",A(n))}}},gt=()=>({x:0,y:0,w:0,h:0}),mt=t=>{document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},yt=async(t,e,s,n)=>{const o=t.pathname,r=t.search,i=at(o,r,n);let a;n||(a=E.get(i)),mt({links:[o]});let c;if(!a){const f=pt(n);n&&(n.data=void 0),a=fetch(i,f).then(l=>{const u=new URL(l.url),h=u.pathname.endsWith("/q-data.json");if(u.origin!==location.origin||!h){location.href=u.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(_=>{const d=F(_,e);if(!d){location.href=t.href;return}if(s&&E.delete(i),d.redirect)location.href=d.redirect;else if(n){const m=d.loaders[n.id];c=()=>{n.resolve({status:l.status,result:m})}}return d});location.href=t.href}),n||E.set(i,a)}return a.then(f=>(f||E.delete(i),c&&c(),f))},pt=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},It=()=>C(tt),vt=()=>C(et),Vt=()=>C(nt),Ct=()=>C(st),Wt=()=>Q($("qwikcity")),jt=(t,e,s,n)=>{t==="popstate"&&n?window.scrollTo(n.x,n.y):t==="link"&&(Et(e,s)||window.scrollTo(0,0))},Et=(t,e)=>{const s=t.hash.slice(1),n=s&&document.getElementById(s);return n?(n.scrollIntoView(),!0):!!(!n&&t.hash&&H(t,e))},Ft=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),Bt=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},Ht=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},Mt=b(y(()=>p(()=>import("./q-153941b9.js"),["build/q-153941b9.js","build/q-89a25abc.js"]),"s_TxCFOy819ag"));function Ut(t){for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentElement;return t.closest("[q\\:container]")}const xt=b(y(()=>p(()=>import("./q-5100435b.js"),["build/q-5100435b.js","build/q-89a25abc.js"]),"s_8gdLBszqbaM")),Qt=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(D||(D=innerWidth),(!e||e&&D<520)&&yt(new URL(t.href),t))};let D=0;const $t=t=>G("script",{nonce:O(t,"nonce")},{dangerouslySetInnerHTML:Z},null,3,"1Z_0"),zt=(t,...e)=>{const{id:s,validators:n}=x(e,t);function o(){const r=vt(),i=Ct(),a={actionPath:`?${B}=${s}`,isRunning:!1,status:void 0,value:void 0,formData:void 0},c=z(()=>{const l=i.value;if(l&&(l==null?void 0:l.id)===s){const u=l.data;if(u instanceof FormData&&(a.formData=u),l.output){const{status:h,result:_}=l.output;a.status=h,a.value=_}}return a}),f=y(()=>p(()=>import("./q-88a55cfc.js"),["build/q-88a55cfc.js","build/q-89a25abc.js"]),"s_A5bZC7WO00A",[i,s,r,c]);return a.submit=f,c}return o.__brand="server_action",o.__validators=n,o.__qrl=t,o.__id=s,Object.freeze(o),o},Gt=(t,...e)=>{const{id:s,validators:n}=x(e,t);function o(){return C(X,r=>{if(!(s in r))throw new Error(`routeLoader$ "${t.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/`);return O(r,s)})}return o.__brand="server_loader",o.__qrl=t,o.__validators=n,o.__id=s,Object.freeze(o),o},x=(t,e)=>{let s;const n=[];if(t.length===1){const o=t[0];o&&typeof o=="object"&&("validate"in o?n.push(o):(s=o.id,o.validation&&n.push(...o.validation)))}else t.length>1&&n.push(...t.filter(o=>!!o));return typeof s=="string"?s=`id_${s}`:s=e.getHash(),{validators:n.reverse(),id:s}},Kt=async function*(t,e,s){const n=t.getReader();try{let o="";const r=new TextDecoder;for(;!(s!=null&&s.aborted);){const i=await n.read();if(i.done)break;o+=r.decode(i.value,{stream:!0});const a=o.split(/\n/);o=a.pop();for(const c of a)yield await F(c,e)}}finally{n.releaseLock()}},Yt=({action:t,spaReset:e,reloadDocument:s,onSubmit$:n,...o},r)=>(K(),t?Y("form",{...o,action:O(t,"actionPath"),"preventdefault:submit":!s,"data-spa-reset":e?"true":void 0,onSubmit$:[s?void 0:t.submit,n]},{method:"post"},0,r):J(wt,{onSubmit$:n,reloadDocument:s,spaReset:e,...o},0,r)),wt=b(y(()=>p(()=>import("./q-95ebf06e.js"),["build/q-95ebf06e.js","build/q-89a25abc.js"]),"s_Nk9PlpjQm9Y"));export{It as A,Ot as B,bt as C,tt as D,Tt as E,Yt as F,Kt as G,Qt as H,Gt as I,zt as J,xt as L,Mt as Q,et as R,$t as S,vt as a,Pt as b,lt as c,St as d,nt as e,X as f,kt as g,st as h,qt as i,ot as j,H as k,Bt as l,yt as m,Lt as n,rt as o,Rt as p,E as q,jt as r,Ht as s,v as t,Vt as u,Ft as v,Dt as w,Nt as x,Ut as y,Wt as z};
