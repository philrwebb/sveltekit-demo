import{S as s,i as e,s as r,e as t,t as a,k as o,c as n,a as i,g as c,d as l,n as m,b as p,T as u,f,F as h,U as $,h as g,H as v,V as d,W as b,j,m as y,o as E,v as A,r as S,w}from"../../chunks/vendor-aeaa330f.js";function I(s){let e,r,b,j,y,E,A,S,w,I,k,B,D,H,T=!0;return{c(){e=t("article"),r=t("h2"),b=a(s[1]),j=o(),y=t("p"),E=t("strong"),A=a(s[2]),S=a(" / performed by "),w=a(s[3]),I=o(),k=t("audio"),this.h()},l(t){e=n(t,"ARTICLE",{class:!0});var a=i(e);r=n(a,"H2",{class:!0});var o=i(r);b=c(o,s[1]),o.forEach(l),j=m(a),y=n(a,"P",{class:!0});var p=i(y);E=n(p,"STRONG",{});var u=i(E);A=c(u,s[2]),u.forEach(l),S=c(p," / performed by "),w=c(p,s[3]),p.forEach(l),I=m(a),k=n(a,"AUDIO",{controls:!0,src:!0,class:!0}),i(k).forEach(l),a.forEach(l),this.h()},h(){p(r,"class","svelte-18j0ib"),p(y,"class","svelte-18j0ib"),k.controls=!0,k.src!==(B=s[0])&&p(k,"src",B),p(k,"class","svelte-18j0ib"),p(e,"class","svelte-18j0ib"),u(e,"playing",!s[5])},m(t,a){f(t,e,a),h(e,r),h(r,b),h(e,j),h(e,y),h(y,E),h(E,A),h(y,S),h(y,w),h(e,I),h(e,k),s[7](k),D||(H=[$(k,"play",s[8]),$(k,"pause",s[8]),$(k,"play",s[6])],D=!0)},p(s,[r]){2&r&&g(b,s[1]),4&r&&g(A,s[2]),8&r&&g(w,s[3]),1&r&&k.src!==(B=s[0])&&p(k,"src",B),32&r&&T!==(T=s[5])&&k[T?"pause":"play"](),32&r&&u(e,"playing",!s[5])},i:v,o:v,d(r){r&&l(e),s[7](null),D=!1,d(H)}}}let k;function B(s,e,r){let t,{src:a}=e,{title:o}=e,{composer:n}=e,{performer:i}=e,c=!0;return s.$$set=s=>{"src"in s&&r(0,a=s.src),"title"in s&&r(1,o=s.title),"composer"in s&&r(2,n=s.composer),"performer"in s&&r(3,i=s.performer)},[a,o,n,i,t,c,function(){k&&k!==t&&k.pause(),k=t},function(s){b[s?"unshift":"push"]((()=>{t=s,r(4,t)}))},function(){c=this.paused,r(5,c)}]}class D extends s{constructor(s){super(),e(this,s,B,I,r,{src:0,title:1,composer:2,performer:3})}}function H(s){let e,r,a,c,u,$,g,d,b,I,k;return r=new D({props:{src:"https://sveltejs.github.io/assets/music/strauss.mp3",title:"The Blue Danube Waltz",composer:"Johann Strauss",performer:"European Archive"}}),c=new D({props:{src:"https://sveltejs.github.io/assets/music/holst.mp3",title:"Mars, the Bringer of War",composer:"Gustav Holst",performer:"USAF Heritage of America Band"}}),$=new D({props:{src:"https://sveltejs.github.io/assets/music/satie.mp3",title:"Gymnopédie no. 1",composer:"Erik Satie",performer:"Prodigal Procrastinator"}}),d=new D({props:{src:"https://sveltejs.github.io/assets/music/beethoven.mp3",title:"Symphony no. 5 in Cm, Op. 67 - I. Allegro con brio",composer:"Ludwig van Beethoven",performer:"European Archive"}}),I=new D({props:{src:"https://sveltejs.github.io/assets/music/mozart.mp3",title:"Requiem in D minor, K. 626 - III. Sequence - Lacrymosa",composer:"Wolfgang Amadeus Mozart",performer:"Markus Staab"}}),{c(){e=t("div"),j(r.$$.fragment),a=o(),j(c.$$.fragment),u=o(),j($.$$.fragment),g=o(),j(d.$$.fragment),b=o(),j(I.$$.fragment),this.h()},l(s){e=n(s,"DIV",{class:!0});var t=i(e);y(r.$$.fragment,t),a=m(t),y(c.$$.fragment,t),u=m(t),y($.$$.fragment,t),g=m(t),y(d.$$.fragment,t),b=m(t),y(I.$$.fragment,t),t.forEach(l),this.h()},h(){p(e,"class","audiocontainer svelte-1mvmh3p")},m(s,t){f(s,e,t),E(r,e,null),h(e,a),E(c,e,null),h(e,u),E($,e,null),h(e,g),E(d,e,null),h(e,b),E(I,e,null),k=!0},p:v,i(s){k||(A(r.$$.fragment,s),A(c.$$.fragment,s),A($.$$.fragment,s),A(d.$$.fragment,s),A(I.$$.fragment,s),k=!0)},o(s){S(r.$$.fragment,s),S(c.$$.fragment,s),S($.$$.fragment,s),S(d.$$.fragment,s),S(I.$$.fragment,s),k=!1},d(s){s&&l(e),w(r),w(c),w($),w(d),w(I)}}}export default class extends s{constructor(s){super(),e(this,s,null,H,r,{})}}
