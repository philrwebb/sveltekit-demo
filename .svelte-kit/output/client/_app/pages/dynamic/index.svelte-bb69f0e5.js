import{S as e,i as s,s as t,D as a,e as n,c,a as o,d as r,f as l,G as h,v as i,r as d,z as u,L as p,j as $,m as f,o as m,w as g,t as x,k as N,l as k,g as v,n as E,b,F as B,J as L,h as T,u as w,K as y,B as C}from"../../chunks/vendor-e46ca3cc.js";function S(e){let s,t;const u=e[4].default,p=a(u,e,e[3],null);return{c(){s=n("div"),p&&p.c()},l(e){s=c(e,"DIV",{});var t=o(s);p&&p.l(t),t.forEach(r)},m(a,n){l(a,s,n),p&&p.m(s,null),e[5](s),t=!0},p(e,[s]){p&&p.p&&(!t||8&s)&&h(p,u,e,e[3],s,null,null)},i(e){t||(i(p,e),t=!0)},o(e){d(p,e),t=!1},d(t){t&&r(s),p&&p.d(t),e[5](null)}}}function A(e,s,t){let a,n,{$$slots:c={},$$scope:o}=s,{as:r}=s;return u((()=>(t(2,n=a),()=>{a.parentNode.replaceChild(n,a)}))),e.$$set=e=>{"as"in e&&t(1,r=e.as),"$$scope"in e&&t(3,o=e.$$scope)},e.$$.update=()=>{6&e.$$.dirty&&n&&function(e){if(console.log(a.childNodes.length,e),!e||a.nodeName===e.toUpperCase())return;const s=document.createElement(e);for(;a.childNodes.length;)s.appendChild(a.childNodes[0]);a.parentNode.replaceChild(s,a),t(0,a=s)}(r)},[a,r,n,o,c,function(e){p[e?"unshift":"push"]((()=>{a=e,t(0,a)}))}]}class U extends e{constructor(e){super(),s(this,e,A,S,t,{as:1})}}function j(e){let s,t;return s=new U({props:{as:e[1],$$slots:{default:[D]},$$scope:{ctx:e}}}),{c(){$(s.$$.fragment)},l(e){f(s.$$.fragment,e)},m(e,a){m(s,e,a),t=!0},p(e,t){const a={};2&t&&(a.as=e[1]),64&t&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){t||(i(s.$$.fragment,e),t=!0)},o(e){d(s.$$.fragment,e),t=!1},d(e){g(s,e)}}}function D(e){let s,t,a,h,i;return{c(){s=n("span"),t=x("Box childrenhere"),a=N(),h=n("a"),i=x("Link here"),this.h()},l(e){s=c(e,"SPAN",{});var n=o(s);t=v(n,"Box childrenhere"),n.forEach(r),a=E(e),h=c(e,"A",{href:!0});var l=o(h);i=v(l,"Link here"),l.forEach(r),this.h()},h(){b(h,"href","xxx")},m(e,n){l(e,s,n),B(s,t),l(e,a,n),l(e,h,n),B(h,i)},d(e){e&&r(s),e&&r(a),e&&r(h)}}}function I(e){let s,t,a,h,u,p,$,f,m,g,S,A,U,D=(e[1]?e[1]:"")+"",I=e[0]&&j(e);return{c(){s=n("label"),t=x("Show "),a=n("input"),h=N(),u=n("button"),p=x("Toggle"),$=x("\nas: "),f=x(D),m=N(),I&&I.c(),g=k(),this.h()},l(e){s=c(e,"LABEL",{});var n=o(s);t=v(n,"Show "),a=c(n,"INPUT",{type:!0}),n.forEach(r),h=E(e),u=c(e,"BUTTON",{});var l=o(u);p=v(l,"Toggle"),l.forEach(r),$=v(e,"\nas: "),f=v(e,D),m=E(e),I&&I.l(e),g=k(),this.h()},h(){b(a,"type","checkbox")},m(n,c){l(n,s,c),B(s,t),B(s,a),a.checked=e[0],l(n,h,c),l(n,u,c),B(u,p),l(n,$,c),l(n,f,c),l(n,m,c),I&&I.m(n,c),l(n,g,c),S=!0,A||(U=[L(a,"change",e[4]),L(u,"click",e[5])],A=!0)},p(e,[s]){1&s&&(a.checked=e[0]),(!S||2&s)&&D!==(D=(e[1]?e[1]:"")+"")&&T(f,D),e[0]?I?(I.p(e,s),1&s&&i(I,1)):(I=j(e),I.c(),i(I,1),I.m(g.parentNode,g)):I&&(C(),d(I,1,1,(()=>{I=null})),w())},i(e){S||(i(I),S=!0)},o(e){d(I),S=!1},d(e){e&&r(s),e&&r(h),e&&r(u),e&&r($),e&&r(f),e&&r(m),I&&I.d(e),e&&r(g),A=!1,y(U)}}}function P(e,s,t){let a,n;const c=["div","span","button","h1","p","h2","h3","h4","li"];let o=0;return[a,n,o,c,function(){a=this.checked,t(0,a)},()=>{t(1,n=c[t(2,o++,o)%c.length])}]}export default class extends e{constructor(e){super(),s(this,e,P,I,t,{})}}