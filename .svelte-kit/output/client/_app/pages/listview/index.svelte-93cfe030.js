import{S as a,i as s,s as t,e as r,t as n,k as o,c as e,a as c,g as l,d as i,n as u,b as f,f as m,F as d,r as h,u as p,v,B as $,H as g,j as b,m as j,o as w,w as k}from"../../chunks/vendor-aeaa330f.js";import{L as E}from"../../chunks/list-3909640b.js";import{r as x}from"../../chunks/stores-176894fa.js";function P(a){let s,t;return{c(){s=r("p"),t=n("loading . . .")},l(a){s=e(a,"P",{});var r=c(s);t=l(r,"loading . . ."),r.forEach(i)},m(a,r){m(a,s,r),d(s,t)},p:g,i:g,o:g,d(a){a&&i(s)}}}function y(a){let s,t;return s=new E({props:{rowdata:a[0]}}),{c(){b(s.$$.fragment)},l(a){j(s.$$.fragment,a)},m(a,r){w(s,a,r),t=!0},p(a,t){const r={};1&t&&(r.rowdata=a[0]),s.$set(r)},i(a){t||(v(s.$$.fragment,a),t=!0)},o(a){h(s.$$.fragment,a),t=!1},d(a){k(s,a)}}}function A(a){let s,t,g,b,j,w,k,E;const x=[y,P],A=[];function B(a,s){return a[0].length>0?0:1}return w=B(a),k=A[w]=x[w](a),{c(){s=r("div"),t=r("p"),g=r("a"),b=n("documentation"),j=o(),k.c(),this.h()},l(a){s=e(a,"DIV",{class:!0});var r=c(s);t=e(r,"P",{});var n=c(t);g=e(n,"A",{href:!0});var o=c(g);b=l(o,"documentation"),o.forEach(i),n.forEach(i),j=u(r),k.l(r),r.forEach(i),this.h()},h(){f(g,"href","listviewdoc"),f(s,"class","svelte-1jabcyx")},m(a,r){m(a,s,r),d(s,t),d(t,g),d(g,b),d(s,j),A[w].m(s,null),E=!0},p(a,[t]){let r=w;w=B(a),w===r?A[w].p(a,t):($(),h(A[r],1,1,(()=>{A[r]=null})),p(),k=A[w],k?k.p(a,t):(k=A[w]=x[w](a),k.c()),v(k,1),k.m(s,null))},i(a){E||(v(k),E=!0)},o(a){h(k),E=!1},d(a){a&&i(s),A[w].d()}}}function B(a,s,t){let r=[];return x.subscribe((a=>{t(0,r=[...a])})),[r]}export default class extends a{constructor(a){super(),s(this,a,B,A,t,{})}}