import{W as t,S as e,i as n,s as r,X as s,j as a,m as o,o as l,v as i,r as c,w as f,M as $,Y as h,Z as u,e as g,c as m,a as p,d,b as M,f as w,H as v,k as x,l as y,n as k,B as S,u as b,R as j}from"../chunks/vendor-0a5d2115.js";const q=360,B=2*Math.PI;function I(t){return Math.sin(t)+2*Math.sin(2*t)}function P(t){return Math.cos(t)+4*Math.cos(2*t)}function R(t){return Math.cos(t)-2*Math.cos(2*t)}function T(t){return-Math.sin(t)-4*Math.sin(2*t)}function W(t){return P(t)/C(P(t),T(t),0,0)}function A(t){return T(t)/C(P(t),T(t),0,0)}function C(t,e,n,r){return Math.hypot(n-t,r-e)}const D=Array.from({length:q},((e,n)=>t(n/q*3)));function E(t){let e,n;return e=new s({props:{render:t[0]}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,r){l(e,t,r),n=!0},p(t,[n]){const r={};1&n&&(r.render=t[0]),e.$set(r)},i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function H(t,e,n){let r,s;$(t,h,(t=>n(4,s=t)));let{i0:a}=e,{i1:o}=e,{wo:l}=e;return t.$$set=t=>{"i0"in t&&n(1,a=t.i0),"i1"in t&&n(2,o=t.i1),"wo"in t&&n(3,l=t.wo)},t.$$.update=()=>{30&t.$$.dirty&&n(0,r=({context:t})=>{for(let h=-4;h<5;++h){const u=15*(h-.5),g=s/2e4*-(h+5);let m,p,d=B*a/q,M=84*I(d)+u*A(d),w=84*R(d)+u*W(d);l&&(t.strokeStyle=t.fillStyle);for(let s=a+1;s<o;++s){let a=B*s/q;m=M,M=84*I(a)+u*A(a),p=w,w=84*R(a)+u*W(a);let o=(Math.cos(a+B*g)-(f=1))/(-1-f)*(1-($=0))+$;e=2.5,n=8.5,i=Math.max(0,Math.min(1,3.5*o-2.5)),c=7,r=i<.5?.5*Math.pow(2*i,c):1-.5*Math.pow(2*(1-i),c),o=e*(1-r)+n*r+l,t.beginPath(),t.moveTo(m,p),t.lineTo(M,w),t.lineWidth=o,l||(t.strokeStyle=D[s]),t.stroke()}}var e,n,r,i,c,f,$})},[r,a,o,l,s]}class N extends e{constructor(t){super(),n(this,t,H,E,r,{i0:1,i1:2,wo:3})}}function V(t,e,n){const r=t.slice();return r[2]=e[n][0],r[3]=e[n][1],r[4]=e[n][2],r}function X(t){let e,n;return e=new N({props:{i0:t[2],i1:t[3],wo:t[4]}}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,r){l(e,t,r),n=!0},p:v,i(t){n||(i(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){f(e,t)}}}function Y(t){let e,n,r,$;e=new s({props:{render:t[0]}});let h=t[1],u=[];for(let s=0;s<h.length;s+=1)u[s]=X(V(t,h,s));const g=t=>c(u[t],1,1,(()=>{u[t]=null}));return{c(){a(e.$$.fragment),n=x();for(let t=0;t<u.length;t+=1)u[t].c();r=y()},l(t){o(e.$$.fragment,t),n=k(t);for(let e=0;e<u.length;e+=1)u[e].l(t);r=y()},m(t,s){l(e,t,s),w(t,n,s);for(let e=0;e<u.length;e+=1)u[e].m(t,s);w(t,r,s),$=!0},p(t,e){if(2&e){let n;for(h=t[1],n=0;n<h.length;n+=1){const s=V(t,h,n);u[n]?(u[n].p(s,e),i(u[n],1)):(u[n]=X(s),u[n].c(),i(u[n],1),u[n].m(r.parentNode,r))}for(S(),n=h.length;n<u.length;n+=1)g(n);b()}},i(t){if(!$){i(e.$$.fragment,t);for(let t=0;t<h.length;t+=1)i(u[t]);$=!0}},o(t){c(e.$$.fragment,t),u=u.filter(Boolean);for(let e=0;e<u.length;e+=1)c(u[e]);$=!1},d(t){f(e,t),t&&d(n),j(u,t),t&&d(r)}}}function Z(t){let e,n,r;return n=new u({props:{width:z,height:F,$$slots:{default:[Y]},$$scope:{ctx:t}}}),{c(){e=g("div"),a(n.$$.fragment),this.h()},l(t){e=m(t,"DIV",{class:!0});var r=p(e);o(n.$$.fragment,r),r.forEach(d),this.h()},h(){M(e,"class","trefoilcontainer svelte-1q7wcch")},m(t,s){w(t,e,s),l(n,e,null),r=!0},p(t,[e]){const r={};128&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(i(n.$$.fragment,t),r=!0)},o(t){c(n.$$.fragment,t),r=!1},d(t){t&&d(e),f(n)}}}let z=640,F=800;function G(t){return[({context:t,width:e,height:n})=>{t.restore(),t.save(),t.fillStyle="#fff",t.lineCap="square",t.clearRect(0,0,e,n),t.translate(e/2,n/2+28)},[[80,120,0],[200,240,0],[320,360,0],[0,40,5],[120,160,5],[240,280,5],[-1,81,0],[119,201,0],[239,321,0]]]}export default class extends e{constructor(t){super(),n(this,t,G,Z,r,{})}}
