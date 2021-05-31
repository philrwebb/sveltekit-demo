import{S as t,i as o,s as e,e as n,t as a,k as l,c as r,a as s,g as u,d as i,n as c,b as d,f as p,F as m,H as h}from"../chunks/vendor-2ef19531.js";function g(t){let o,e,g,q,f,v,w,b,y,E,C,T,L,R,x,P,k,N,D,H,S,A,G,I,$,M,O,W,j,F,U,z,B,J,K,Q,V,X,Y,Z,_,tt,ot,et,nt,at,lt,rt,st,ut,it,ct,dt,pt;return{c(){o=n("h1"),e=a("A generic listview - used to present covid statistics"),g=l(),q=n("p"),f=a("The goal was to produce a component that when provided with input of an array of arrays, would render the data as a listview.  For example:"),v=l(),w=n("pre"),b=l(),y=n("p"),E=a("Would be rendered as 4 rows of 5 columns.  Obviously, the component should handle an arbitrary number of rows and also an arbitrary number of columns."),C=l(),T=n("p"),L=a("This can be broken down into three distinct components:"),R=l(),x=n("ul"),P=n("li"),k=a("A Cell component;"),N=l(),D=n("li"),H=a("A Row component;"),S=l(),A=n("li"),G=a("A List component;"),I=l(),$=n("p"),M=a("Starting from the bottom up we have:"),O=l(),W=n("ol"),j=n("li"),F=a("The Cell Component"),U=l(),z=n("pre"),B=l(),J=n("ol"),K=n("li"),Q=a("The Row Component"),V=l(),X=n("pre"),Y=l(),Z=n("ol"),_=n("li"),tt=a("The List Component"),ot=l(),et=n("pre"),nt=l(),at=n("p"),lt=a("The List component can be used like this:"),rt=l(),st=n("pre"),ut=l(),it=n("p"),ct=a("Unrelated to the problem at hand, I have populated my rowdata from a covid19 statistics repository"),dt=l(),pt=n("pre"),this.h()},l(t){o=r(t,"H1",{id:!0});var n=s(o);e=u(n,"A generic listview - used to present covid statistics"),n.forEach(i),g=c(t),q=r(t,"P",{});var a=s(q);f=u(a,"The goal was to produce a component that when provided with input of an array of arrays, would render the data as a listview.  For example:"),a.forEach(i),v=c(t),w=r(t,"PRE",{class:!0}),s(w).forEach(i),b=c(t),y=r(t,"P",{});var l=s(y);E=u(l,"Would be rendered as 4 rows of 5 columns.  Obviously, the component should handle an arbitrary number of rows and also an arbitrary number of columns."),l.forEach(i),C=c(t),T=r(t,"P",{});var d=s(T);L=u(d,"This can be broken down into three distinct components:"),d.forEach(i),R=c(t),x=r(t,"UL",{});var p=s(x);P=r(p,"LI",{});var m=s(P);k=u(m,"A Cell component;"),m.forEach(i),N=c(p),D=r(p,"LI",{});var h=s(D);H=u(h,"A Row component;"),h.forEach(i),S=c(p),A=r(p,"LI",{});var mt=s(A);G=u(mt,"A List component;"),mt.forEach(i),p.forEach(i),I=c(t),$=r(t,"P",{});var ht=s($);M=u(ht,"Starting from the bottom up we have:"),ht.forEach(i),O=c(t),W=r(t,"OL",{});var gt=s(W);j=r(gt,"LI",{});var qt=s(j);F=u(qt,"The Cell Component"),qt.forEach(i),gt.forEach(i),U=c(t),z=r(t,"PRE",{class:!0}),s(z).forEach(i),B=c(t),J=r(t,"OL",{start:!0});var ft=s(J);K=r(ft,"LI",{});var vt=s(K);Q=u(vt,"The Row Component"),vt.forEach(i),ft.forEach(i),V=c(t),X=r(t,"PRE",{class:!0}),s(X).forEach(i),Y=c(t),Z=r(t,"OL",{start:!0});var wt=s(Z);_=r(wt,"LI",{});var bt=s(_);tt=u(bt,"The List Component"),bt.forEach(i),wt.forEach(i),ot=c(t),et=r(t,"PRE",{class:!0}),s(et).forEach(i),nt=c(t),at=r(t,"P",{});var yt=s(at);lt=u(yt,"The List component can be used like this:"),yt.forEach(i),rt=c(t),st=r(t,"PRE",{class:!0}),s(st).forEach(i),ut=c(t),it=r(t,"P",{});var Et=s(it);ct=u(Et,"Unrelated to the problem at hand, I have populated my rowdata from a covid19 statistics repository"),Et.forEach(i),dt=c(t),pt=r(t,"PRE",{class:!0}),s(pt).forEach(i),this.h()},h(){d(o,"id","a-generic-listview---used-to-present-covid-statistics"),d(w,"class","language-undefined"),d(z,"class","language-undefined"),d(J,"start","2"),d(X,"class","language-undefined"),d(Z,"start","3"),d(et,"class","language-undefined"),d(st,"class","language-undefined"),d(pt,"class","language-undefined")},m(t,n){p(t,o,n),m(o,e),p(t,g,n),p(t,q,n),m(q,f),p(t,v,n),p(t,w,n),w.innerHTML='<code class="language-undefined">export const rowsdata = writable(\n    [\n        [&quot;oranges&quot;, &quot;lemons &quot;, &quot;pears  &quot;, &quot;apples &quot;, &quot;melons&quot;],\n        [&quot;black  &quot;, &quot;white  &quot;, &quot;yellow &quot;, &quot;orange &quot;, &quot;pink&quot;],\n        [&quot;hello  &quot;, &quot;goodbye&quot;, &quot;ciao   &quot;, &quot;whatsup&quot;, &quot;ooroo&quot;],\n        [&quot;black  &quot;, &quot;white  &quot;, &quot;yellow &quot;, &quot;orange &quot;, &quot;pink&quot;],\n    ]\n)</code>',p(t,b,n),p(t,y,n),m(y,E),p(t,C,n),p(t,T,n),m(T,L),p(t,R,n),p(t,x,n),m(x,P),m(P,k),m(x,N),m(x,D),m(D,H),m(x,S),m(x,A),m(A,G),p(t,I,n),p(t,$,n),m($,M),p(t,O,n),p(t,W,n),m(W,j),m(j,F),p(t,U,n),p(t,z,n),z.innerHTML='<code class="language-undefined">    &lt;script&gt;\n        export let cellvalue = &quot;&quot;;\n    &lt;/script&gt;\n\n    &lt;span&gt;&#123;cellvalue&#125;&lt;/span&gt;\n\n    &lt;style scoped&gt;\n        span &#123;\n            border: black 1px solid;\n            padding-left: 2px;\n            padding-top: 1px;\n            padding-bottom: 1px;\n        &#125;\n    &lt;/style&gt;</code>',p(t,B,n),p(t,J,n),m(J,K),m(K,Q),p(t,V,n),p(t,X,n),X.innerHTML='<code class="language-undefined">    &lt;script&gt;\n        import Cell from &quot;./cell.svelte&quot;;\n        export let rowvalue = [];\n        let nocols = rowvalue.length;\n        const gap = &quot;4px&quot;;\n    &lt;/script&gt;\n\n    &lt;span class=&quot;rowcontainer&quot; style=&quot;grid-template-columns: repeat(&#123;nocols&#125;,1fr);grid-gap: &#123;gap&#125;;&quot;&gt;\n        &#123;#each rowvalue as cellvalue&#125;\n            &lt;Cell &#123;cellvalue&#125; /&gt;\n        &#123;/each&#125;\n    &lt;/span&gt;\n\n    &lt;style scoped&gt;\n        .rowcontainer &#123;\n            display: grid;\n        &#125;\n    &lt;/style&gt;</code>',p(t,Y,n),p(t,Z,n),m(Z,_),m(_,tt),p(t,ot,n),p(t,et,n),et.innerHTML='<code class="language-undefined">    &lt;script&gt;\n        import Row from &quot;./row.svelte&quot;;\n        export let rowdata;\n        const gap = &quot;5px&quot;;\n    &lt;/script&gt;\n\n    &lt;span class=&quot;listcontainer&quot; style=&quot;grid-gap: &#123;gap&#125;&quot;&gt;\n        &#123;#each rowdata as rowvalue&#125;\n            &lt;Row &#123;rowvalue&#125; style=&quot;grid-gap: &#123;gap&#125;;&quot; /&gt;\n        &#123;:else&#125;\n            No Data Provided\n        &#123;/each&#125;\n    &lt;/span&gt;\n\n    &lt;style&gt;\n        .listcontainer &#123;\n            display: grid;\n        &#125;\n    &lt;/style&gt;</code>',p(t,nt,n),p(t,at,n),m(at,lt),p(t,rt,n),p(t,st,n),st.innerHTML='<code class="language-undefined">    &lt;script&gt;\n        import List from &quot;$lib/listview/list.svelte&quot;;\n        import &#123; rowsdata &#125; from &quot;$lib/stores.js&quot;;\n        let rowdata = [...$rowsdata];\n    &lt;/script&gt;\n\n    &lt;div&gt;\n        &lt;List &#123;rowdata&#125; /&gt;\n    &lt;/div&gt;\n\n    &lt;style&gt;\n        div &#123;\n            width: 100%;\n        &#125;\n    &lt;/style&gt;</code>',p(t,ut,n),p(t,it,n),m(it,ct),p(t,dt,n),p(t,pt,n),pt.innerHTML='<code class="language-undefined">&lt;script&gt;\n        import http from &quot;$lib/httpStore.js&quot;;\n        import List from &quot;$lib/listview/list.svelte&quot;;\n        import numeral from &quot;numeral&quot;;\n        let rowdata = [];\n        const covidSummary = http(&#123;&#125;);\n        covidSummary.subscribe((value) =&gt; &#123;\n                console.log(value);\n                if (value.Global) &#123;\n                        rowdata = [];\n                        /* Heading Row */\n                        rowdata.push([\n                                &quot;Country&quot;,\n                                &quot;Country Code&quot;,\n                                &quot;New Confirmed&quot;,\n                                &quot;Total Confirmed&quot;,\n                                &quot;New Deaths&quot;,\n                                &quot;Total Deaths&quot;,\n                                &quot;New Recovered&quot;,\n                                &quot;Total Recovered&quot;,\n                        ]);\n                        /* World Data */\n                        rowdata.push([\n                                &quot;World&quot;,\n                                &quot;-&quot;,\n                                numeral(value.Global.NewConfirmed).format(&#39;0,0&#39;),\n                                numeral(value.Global.TotalConfirmed).format(&#39;0,0&#39;),\n                                numeral(value.Global.NewDeaths).format(&#39;0,0&#39;),\n                                numeral(value.Global.TotalDeaths).format(&#39;0,0&#39;),\n                                numeral(value.Global.NewRecovered).format(&#39;0,0&#39;),\n                                numeral(value.Global.TotalRecovered).format(&#39;0,0&#39;),\n                        ]);\n                        /* Country Data */\n                        value.Countries.forEach((element) =&gt; &#123;\n                                rowdata.push([\n                                        element.Country,\n                                        element.CountryCode,\n                                        numeral(element.NewConfirmed).format(&#39;0,0&#39;),\n                                        numeral(element.TotalConfirmed).format(&#39;0,0&#39;),\n                                        numeral(element.NewDeaths).format(&#39;0,0&#39;),\n                                        numeral(element.TotalDeaths).format(&#39;0,0&#39;),\n                                        numeral(element.NewRecovered).format(&#39;0,0&#39;),\n                                        numeral(element.TotalRecovered).format(&#39;0,0&#39;),\n                                ]);\n                        &#125;);\n                        console.log(rowdata);\n                &#125;\n        &#125;);\n        covidSummary.get(&quot;https://api.covid19api.com/summary&quot;);\n&lt;/script&gt;\n \n&#123;#if $covidSummary.Countries &amp;&amp; $covidSummary.Global&#125;\n        &lt;List &#123;rowdata&#125; /&gt;\n&#123;:else&#125;\n        &lt;p&gt;loading&lt;/p&gt;\n&#123;/if&#125;</code>'},p:h,i:h,o:h,d(t){t&&i(o),t&&i(g),t&&i(q),t&&i(v),t&&i(w),t&&i(b),t&&i(y),t&&i(C),t&&i(T),t&&i(R),t&&i(x),t&&i(I),t&&i($),t&&i(O),t&&i(W),t&&i(U),t&&i(z),t&&i(B),t&&i(J),t&&i(V),t&&i(X),t&&i(Y),t&&i(Z),t&&i(ot),t&&i(et),t&&i(nt),t&&i(at),t&&i(rt),t&&i(st),t&&i(ut),t&&i(it),t&&i(dt),t&&i(pt)}}}export default class extends t{constructor(t){super(),o(this,t,null,g,e,{})}}
