import{S as s,i as a,s as t,e as r,t as n,k as o,c as e,a as c,g as l,d as i,n as u,b as f,f as m,F as d,r as h,u as p,v,B as $,H as g,j as b,m as j,o as w,w as k}from"../../chunks/vendor-2ef19531.js";import{L as E}from"../../chunks/list-0b7a95b5.js";import{r as x}from"../../chunks/stores-267033db.js";function P(s){let a,t;return{c(){a=r("p"),t=n("loading . . .")},l(s){a=e(s,"P",{});var r=c(a);t=l(r,"loading . . ."),r.forEach(i)},m(s,r){m(s,a,r),d(a,t)},p:g,i:g,o:g,d(s){s&&i(a)}}}function y(s){let a,t;return a=new E({props:{rowdata:s[0]}}),{c(){b(a.$$.fragment)},l(s){j(a.$$.fragment,s)},m(s,r){w(a,s,r),t=!0},p(s,t){const r={};1&t&&(r.rowdata=s[0]),a.$set(r)},i(s){t||(v(a.$$.fragment,s),t=!0)},o(s){h(a.$$.fragment,s),t=!1},d(s){k(a,s)}}}function A(s){let a,t,g,b,j,w,k,E;const x=[y,P],A=[];function B(s,a){return s[0].length>0?0:1}return w=B(s),k=A[w]=x[w](s),{c(){a=r("div"),t=r("p"),g=r("a"),b=n("documentation"),j=o(),k.c(),this.h()},l(s){a=e(s,"DIV",{class:!0});var r=c(a);t=e(r,"P",{});var n=c(t);g=e(n,"A",{href:!0});var o=c(g);b=l(o,"documentation"),o.forEach(i),n.forEach(i),j=u(r),k.l(r),r.forEach(i),this.h()},h(){f(g,"href","listviewdoc"),f(a,"class","svelte-1jabcyx")},m(s,r){m(s,a,r),d(a,t),d(t,g),d(g,b),d(a,j),A[w].m(a,null),E=!0},p(s,[t]){let r=w;w=B(s),w===r?A[w].p(s,t):($(),h(A[r],1,1,(()=>{A[r]=null})),p(),k=A[w],k?k.p(s,t):(k=A[w]=x[w](s),k.c()),v(k,1),k.m(a,null))},i(s){E||(v(k),E=!0)},o(s){h(k),E=!1},d(s){s&&i(a),A[w].d()}}}function B(s,a,t){let r=[];return x.subscribe((s=>{t(0,r=[...s])})),[r]}export default class extends s{constructor(s){super(),a(this,s,B,A,t,{})}}