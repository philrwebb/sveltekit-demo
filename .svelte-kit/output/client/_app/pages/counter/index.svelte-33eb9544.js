import{S as t,i as s,s as n,e as a,t as r,c as e,a as c,g as o,d as u,f,F as i,U as l,H as $,k as h,j as m,n as d,m as p,b as v,o as g,h as T,v as b,r as k,w as E}from"../../chunks/vendor-aeaa330f.js";import{c as x}from"../../chunks/stores-176894fa.js";function w(t){let s,n,h,m;return{c(){s=a("button"),n=r("+")},l(t){s=e(t,"BUTTON",{});var a=c(s);n=o(a,"+"),a.forEach(u)},m(a,r){f(a,s,r),i(s,n),h||(m=l(s,"click",t[0]),h=!0)},p:$,i:$,o:$,d(t){t&&u(s),h=!1,m()}}}function U(t){return[function(){x.update((t=>t+1))}]}class j extends t{constructor(t){super(),s(this,t,U,w,n,{})}}function B(t){let s,n,h,m;return{c(){s=a("button"),n=r("-")},l(t){s=e(t,"BUTTON",{});var a=c(s);n=o(a,"-"),a.forEach(u)},m(a,r){f(a,s,r),i(s,n),h||(m=l(s,"click",t[0]),h=!0)},p:$,i:$,o:$,d(t){t&&u(s),h=!1,m()}}}function N(t){return[function(){x.update((t=>t-1))}]}class O extends t{constructor(t){super(),s(this,t,N,B,n,{})}}function D(t){let s,n,h,m;return{c(){s=a("button"),n=r("reset")},l(t){s=e(t,"BUTTON",{});var a=c(s);n=o(a,"reset"),a.forEach(u)},m(a,r){f(a,s,r),i(s,n),h||(m=l(s,"click",t[0]),h=!0)},p:$,i:$,o:$,d(t){t&&u(s),h=!1,m()}}}function H(t){return[function(){x.set(0)}]}class I extends t{constructor(t){super(),s(this,t,H,D,n,{})}}function V(t){let s,n,l,$,x,w,U,B,N,D,H,V;return U=new j({}),N=new O({}),H=new I({}),{c(){s=a("div"),n=a("h1"),l=r("The count is "),$=r(t[0]),x=h(),w=a("div"),m(U.$$.fragment),B=h(),m(N.$$.fragment),D=h(),m(H.$$.fragment),this.h()},l(a){s=e(a,"DIV",{class:!0});var r=c(s);n=e(r,"H1",{});var f=c(n);l=o(f,"The count is "),$=o(f,t[0]),f.forEach(u),x=d(r),w=e(r,"DIV",{class:!0});var i=c(w);p(U.$$.fragment,i),B=d(i),p(N.$$.fragment,i),D=d(i),p(H.$$.fragment,i),i.forEach(u),r.forEach(u),this.h()},h(){v(w,"class","buttoncontainer svelte-1pl08tv"),v(s,"class","localcontainer svelte-1pl08tv")},m(t,a){f(t,s,a),i(s,n),i(n,l),i(n,$),i(s,x),i(s,w),g(U,w,null),i(w,B),g(N,w,null),i(w,D),g(H,w,null),V=!0},p(t,[s]){(!V||1&s)&&T($,t[0])},i(t){V||(b(U.$$.fragment,t),b(N.$$.fragment,t),b(H.$$.fragment,t),V=!0)},o(t){k(U.$$.fragment,t),k(N.$$.fragment,t),k(H.$$.fragment,t),V=!1},d(t){t&&u(s),E(U),E(N),E(H)}}}function F(t,s,n){let a;return x.subscribe((t=>{n(0,a=t)})),[a]}export default class extends t{constructor(t){super(),s(this,t,F,V,n,{})}}
