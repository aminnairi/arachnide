function k(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const O=e=>typeof e=="object"&&e!==null&&"target"in e&&(e.target===null||e.target instanceof Element),m=e=>{var r,a;if(e==null)return null;if(typeof e=="string")return document.createTextNode(e);if(typeof e=="boolean"||typeof e=="number")return document.createTextNode(String(e));const t=document.createElement(e.name);return Object.entries((r=e==null?void 0:e.attributes)!=null?r:{}).forEach(([n,o])=>{o!=null&&(t[n]=o)}),((a=e==null?void 0:e.children)!=null?a:[]).forEach(n=>{const o=m(n);o!==null&&t.appendChild(o)}),O(e.reference)&&(e.reference.target=t),t},$=e=>typeof e=="string",L=e=>typeof e=="number",j=e=>typeof e=="boolean",y=e=>e===null,E=e=>e===void 0,C=e=>e instanceof Element,I=e=>!(y(e)||E(e)||$(e)||L(e)||j(e)),M=(e,t)=>r=>{var a,n,o,l,d;if(y(e)||E(e)){if(y(t)||E(t))return;if(r===null)throw new Error("Invalid DOM node found. Has the DOM been manually updated?");const i=m(t);return i===null?void 0:(C(i)&&I(t)&&O(t.reference)&&(t.reference.target=i),void r.appendChild(i))}if($(e)||L(e)||j(e)){if(Object.is(e,t))return;if(r===null)throw new Error("Invalid DOM node found. Has the DOM been manually updated?");const i=m(t);return i===null?void 0:(I(t)&&O(t.reference)&&C(i)&&(t.reference.target=i),void r.replaceWith(i))}if(y(t)||E(t)){if(y(e)||E(e))return;if(r===null)throw new Error("Invalid DOM node found. Has the DOM been manually updated?");r.remove()}else{if($(t)||L(t)||j(t)){if(Object.is(e,t))return;if(r===null)throw new Error("Invalid DOM node found. Has the DOM been manually updated?");const i=m(t);return i===null?void 0:(I(t)&&O(t.reference)&&C(i)&&(t.reference.target=i),void r.replaceWith(i))}if(e.name===t.name)Object.entries((a=e==null?void 0:e.attributes)!=null?a:{}).forEach(([i,u])=>{var s;const f=((s=t==null?void 0:t.attributes)!=null?s:{})[i];f!=null?f!==u&&(r[i]=f):r[i]=null}),Object.entries((n=t==null?void 0:t.attributes)!=null?n:{}).forEach(([i,u])=>{var s;((s=e==null?void 0:e.attributes)!=null?s:{})[i]==null&&u!=null&&(r[i]=u)}),((o=e==null?void 0:e.children)!=null?o:[]).forEach((i,u)=>{var c;if(r===null)throw new Error("Invalid DOM node found. Has the DOM been manually updated?");const f=((c=t==null?void 0:t.children)!=null?c:[])[u],s=r.childNodes[u],g=M(i,f);if(s===void 0)throw new Error("Invalid DOM node found. Has the DOM been manually updated?");window.queueMicrotask(()=>{g(s)})}),((l=t==null?void 0:t.children)!=null?l:[]).slice(((d=e==null?void 0:e.children)!=null?d:[]).length).forEach(i=>{const u=M(null,i);window.queueMicrotask(()=>{u(r)})});else{if(r===null)throw new Error("Invalid DOM node found. Has the DOM been manually updated?");const i=m(t);if(i===null)return;r.replaceWith(i)}}},D=e=>{var r;const t=/^\/?(.*?)\/?$/.exec(e);return t&&(r=t.at(1))!=null?r:e},N=(e,t)=>Object.entries(t).find(([a])=>{const n=D(a),o=D(e),l=n.split(/\/+/),d=o.split(/\/+/);return d.length===l.length&&l.every((i,u)=>i.startsWith(":")?!0:i===d[u])})||["",()=>null],S=(e,t)=>{const r=D(e),a=D(t),n=r.split(/\/+/),o=a.split(/\/+/);return o.length!==n.length?{}:n.every((l,d)=>l.startsWith(":")?!0:l===o[d])?n.reduce((l,d,i)=>{if(!d.startsWith(":"))return l;const u=o[i];return u?{...l,["".concat(d.slice(1))]:u}:l},{}):{}},P=({views:e,root:t,state:r,update:a})=>{let n;const o="arachnide:emit",l=c=>{c!==null&&window.dispatchEvent(new CustomEvent(o,{detail:c}))},d=(c,b)=>{window.history.pushState(null,c,Object.entries(b).reduce((w,[h,p])=>w.replaceAll(":".concat(h),String(p)),c)),window.dispatchEvent(new CustomEvent("popstate"))};window.addEventListener("popstate",()=>{const[c,b]=N(window.location.pathname,e),w=S(c,window.location.pathname),h=b({state:r,emit:l,go:d,parameters:w}),p=M(n,h);n=h,p(t.firstChild)}),window.addEventListener(o,({detail:c})=>{r=a({event:c,state:r});const[b,w]=N(window.location.pathname,e),h=S(b,window.location.pathname),p=w({state:r,emit:l,go:d,parameters:h}),x=M(n,p);n=p,x(t.firstChild)});const[i,u]=N(window.location.pathname,e),f=S(i,window.location.pathname),s=u({state:r,emit:l,go:d,parameters:f}),g=m(s);return n=s,g!==null&&t.appendChild(g),{emit:l,go:d}},v=({attributes:e,children:t,reference:r})=>({name:"button",attributes:e,children:t,reference:r}),H=({attributes:e,children:t,reference:r})=>({name:"div",attributes:e,children:t,reference:r}),W=({attributes:e,reference:t})=>({name:"input",attributes:e,children:[],reference:t}),R=({attributes:e,children:t,reference:r})=>({name:"label",attributes:e,children:t,reference:r}),A=({attributes:e,children:t,reference:r})=>({name:"li",attributes:e,children:t,reference:r}),T=({attributes:e,children:t,reference:r})=>({name:"p",attributes:e,children:t,reference:r}),q=({attributes:e,children:t,reference:r})=>({name:"ul",attributes:e,children:t,reference:r}),G=e=>t=>{t.target instanceof HTMLInputElement&&(t.target.value,1)&&e(t.target.value,t)};window.addEventListener("error",e=>{alert("Error: ".concat(e.message))});const _=document.getElementById("root");if(!_)throw new Error("Root element not found");P({root:_,state:{counter:10,steps:10},update:({state:e,event:t})=>t.type==="INCREMENT"?{...e,counter:e.counter+e.steps}:t.type==="DECREMENT"?e.counter-e.steps<0?{...e,counter:0}:{...e,counter:e.counter-e.steps}:t.type==="SET_STEPS"?{...e,steps:t.payload}:e,views:{"/arachnide":({state:e,emit:t,go:r})=>H({children:[v({attributes:{onclick:()=>{r("/arachnide/summary",{})}},children:["Go to summary"]}),T({children:["Get a summary of all of the below informations"]}),v({attributes:{onclick:()=>{t({type:"INCREMENT",payload:null})}},children:["Increment"]}),v({attributes:{onclick:()=>{t({type:"DECREMENT",payload:null})}},children:["Decrement"]}),R({attributes:{for:"steps"},children:[" Steps "]}),W({attributes:{id:"steps",step:10,type:"number",value:e.steps,oninput:G(a=>{t({type:"SET_STEPS",payload:Number(a)||100})})}}),q({children:Array.from(Array(e.counter)).map((a,n)=>A({attributes:{},children:["Index #".concat(n)]}))})]}),"/arachnide/summary":({state:e,go:t})=>H({children:[T({children:["Counter is currently at ".concat(e.counter)]}),T({children:["Steps is currently at ".concat(e.steps)]}),v({attributes:{onclick:()=>{t("/arachnide",{})}},children:["Go back home"]})]})}});export{k as __vite_legacy_guard};