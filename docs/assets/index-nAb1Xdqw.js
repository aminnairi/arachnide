(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const f=n=>{if(n==null)return null;if(typeof n=="string")return document.createTextNode(n);if(typeof n=="boolean"||typeof n=="number")return document.createTextNode(String(n));const r=document.createElement(n.name);return Object.entries(n.attributes).forEach(([c,e])=>{e!=null&&(r[c]=e)}),n.children.forEach(c=>{const e=f(c);e!==null&&r.appendChild(e)}),r},a=(n,r)=>c=>{if(n==null){if(r==null||c===null)return;const e=f(r);if(e===null)return;c.appendChild(e);return}if(typeof n=="string"||typeof n=="number"||typeof n=="boolean"){if(Object.is(n,r)||c===null)return;const e=f(r);if(e===null)return;c.replaceWith(e);return}if(r==null){if(n==null||c===null)return;c.remove();return}if(typeof r=="string"||typeof r=="number"||typeof r=="boolean"){if(Object.is(n,r)||c===null)return;const e=f(r);if(e===null)return;c.replaceWith(e);return}if(n.name!==r.name){if(c===null)return;const e=f(r);if(e===null)return;c.replaceWith(e);return}Object.entries(n.attributes).forEach(([e,t])=>{const o=r.attributes[e];if(o==null){c[e]=null;return}o!==t&&(c[e]=o)}),Object.entries(r.attributes).forEach(([e,t])=>{const o=n.attributes[e];o!=null||t===null||t===void 0||(c[e]=t)}),n.children.forEach((e,t)=>{if(c===null)return;const o=r.children[t],i=c.childNodes[t];a(e,o)(i)}),r.children.slice(n.children.length).forEach(e=>{a(null,e)(c)})},O=({views:n,root:r,state:c,update:e})=>{let t;const o=window.crypto.randomUUID(),i=s=>{s!==null&&window.dispatchEvent(new CustomEvent(o,{detail:s}))},h=(s,u)=>{window.history.pushState(null,s,Object.entries(u).reduce((d,[l,C])=>d.replaceAll(`:${l}`,String(C)),s)),window.dispatchEvent(new CustomEvent("popstate"))};window.addEventListener("popstate",()=>{const s=n[window.location.pathname],u=s?s({state:c,emit:i,go:h}):null,d=a(t,u);t=u,d(r.firstChild)}),window.addEventListener(o,({detail:s})=>{c=e({event:s,state:c});const u=n[window.location.pathname];if(!u)return;const d=u({state:c,emit:i,go:h}),l=a(t,d);t=d,l(r.firstChild)});const b=n[window.location.pathname],y=b?b({state:c,emit:i,go:h}):null,g=f(y);return t=y,g!==null&&r.appendChild(g),{emit:i,go:h}},p=({attributes:n,children:r})=>({name:"button",attributes:n,children:r}),N=({attributes:n,children:r})=>({name:"div",attributes:n,children:r}),L=({attributes:n,children:r})=>({name:"span",attributes:n,children:r}),w=document.getElementById("root");if(!w)throw new Error("Root element not found");O({root:w,state:{counter:15},update:({state:n,event:r})=>r.type==="INCREMENT"?{...n,counter:n.counter+1}:r.type==="DECREMENT"?{...n,counter:n.counter-1}:n,views:{"/arachnide/users":({go:n})=>p({attributes:{onclick:()=>{n("/arachnide",{})}},children:["Go back"]}),"/arachnide":({state:n,emit:r,go:c})=>N({attributes:{},children:[p({attributes:{onclick:()=>{c("/arachnide/users",{})}},children:["Go to users"]}),p({attributes:{onclick:()=>{r({type:"DECREMENT",payload:null})}},children:["Decrement"]}),L({attributes:{},children:[n.counter]}),p({attributes:{onclick:()=>{r({type:"INCREMENT",payload:null})}},children:["Increment"]})]})}});
