(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function T(){}function ye(t){return t()}function ce(){return Object.create(null)}function H(t){t.forEach(ye)}function ke(t){return typeof t=="function"}function Y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ce(t){return Object.keys(t).length===0}function B(t){return t??""}function m(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function R(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function O(){return L(" ")}function Ee(){return L("")}function D(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ae(t){return Array.from(t.childNodes)}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let ne;function K(t){ne=t}const j=[],ae=[];let z=[];const fe=[],Pe=Promise.resolve();let te=!1;function Ne(){te||(te=!0,Pe.then($e))}function le(t){z.push(t)}const Z=new Set;let F=0;function $e(){if(F!==0)return;const t=ne;do{try{for(;F<j.length;){const e=j[F];F++,K(e),Oe(e.$$)}}catch(e){throw j.length=0,F=0,e}for(K(null),j.length=0,F=0;ae.length;)ae.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];Z.has(n)||(Z.add(n),n())}z.length=0}while(j.length);for(;fe.length;)fe.pop()();te=!1,Z.clear(),K(t)}function Oe(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(le)}}function Me(t){const e=[],n=[];z.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),z=e}const Q=new Set;let x;function Le(){x={r:0,c:[],p:x}}function Be(){x.r||H(x.c),x=x.p}function V(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function W(t,e,n,i){if(t&&t.o){if(Q.has(t))return;Q.add(t),x.c.push(()=>{Q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Se(t){t&&t.c()}function ie(t,e,n,i){const{fragment:l,after_update:s}=t.$$;l&&l.m(e,n),i||le(()=>{const r=t.$$.on_mount.map(ye).filter(ke);t.$$.on_destroy?t.$$.on_destroy.push(...r):H(r),t.$$.on_mount=[]}),s.forEach(le)}function se(t,e){const n=t.$$;n.fragment!==null&&(Me(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(t,e){t.$$.dirty[0]===-1&&(j.push(t),Ne(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function re(t,e,n,i,l,s,r,d=[-1]){const o=ne;K(t);const c=t.$$={fragment:null,ctx:[],props:s,update:T,not_equal:l,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ce(),dirty:d,skip_bound:!1,root:e.target||o.$$.root};r&&r(c.root);let k=!1;if(c.ctx=n?n(t,e.props||{},(b,C,...g)=>{const y=g.length?g[0]:C;return c.ctx&&l(c.ctx[b],c.ctx[b]=y)&&(!c.skip_bound&&c.bound[b]&&c.bound[b](y),k&&Te(t,b)),C}):[],c.update(),k=!0,H(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const b=Ae(e.target);c.fragment&&c.fragment.l(b),b.forEach(A)}else c.fragment&&c.fragment.c();e.intro&&V(t.$$.fragment),ie(t,e.target,e.anchor,e.customElement),$e()}K(o)}class oe{$destroy(){se(this,1),this.$destroy=T}$on(e,n){if(!ke(n))return T;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J=[];function Ge(t,e=T){let n;const i=new Set;function l(d){if(Y(t,d)&&(t=d,n)){const o=!J.length;for(const c of i)c[1](),J.push(c,t);if(o){for(let c=0;c<J.length;c+=2)J[c][0](J[c+1]);J.length=0}}}function s(d){l(d(t))}function r(d,o=T){const c=[d,o];return i.add(c),i.size===1&&(n=e(l)||T),d(t),()=>{i.delete(c),i.size===0&&n&&(n(),n=null)}}return{set:l,update:s,subscribe:r}}function ee(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}function De(t,e){const n=[];let i=ee(t);return{get location(){return i},listen(l){n.push(l);const s=()=>{i=ee(t),l({location:i,action:"POP"})};return t.addEventListener("popstate",s),()=>{t.removeEventListener("popstate",s);const r=n.indexOf(l);n.splice(r,1)}},navigate(l,{state:s,replace:r=!1}={}){s={...s,key:Date.now()+""};try{r?t.history.replaceState(s,null,l):t.history.pushState(s,null,l)}catch{t.location[r?"replace":"assign"](l)}i=ee(t),n.forEach(d=>d({location:i,action:"PUSH"}))}}}function He(t="/"){let e=0;const n=[{pathname:t,search:""}],i=[];return{get location(){return n[e]},addEventListener(l,s){},removeEventListener(l,s){},history:{get entries(){return n},get index(){return e},get state(){return i[e]},pushState(l,s,r){const[d,o=""]=r.split("?");e++,n.push({pathname:d,search:o}),i.push(l)},replaceState(l,s,r){const[d,o=""]=r.split("?");n[e]={pathname:d,search:o},i[e]=l}}}}const Ie=Boolean(typeof window<"u"&&window.document&&window.document.createElement);De(Ie?window:He());const X=Ge("");function ue(t,e,n){const i=t.slice();return i[17]=e[n],i}function de(t,e,n){const i=t.slice();return i[17]=e[n],i}function me(t,e,n){const i=t.slice();return i[20]=e[n],i}function he(t,e,n){const i=t.slice();return i[20]=e[n],i}function qe(t){let e,n,i,l=Object.keys(t[0]),s=[];for(let r=0;r<l.length;r+=1)s[r]=_e(ue(t,l,r));return{c(){e=_("h2"),e.innerHTML='<i style="font-weight:100">Please enter marks for only subjects that you have taken.</i>',n=O(),i=_("div");for(let r=0;r<s.length;r+=1)s[r].c();h(i,"id","changing"),h(i,"class","svelte-42wbmo")},m(r,d){N(r,e,d),N(r,n,d),N(r,i,d);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,null)},p(r,d){if(d&513){l=Object.keys(r[0]);let o;for(o=0;o<l.length;o+=1){const c=ue(r,l,o);s[o]?s[o].p(c,d):(s[o]=_e(c),s[o].c(),s[o].m(i,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=l.length}},d(r){r&&A(e),r&&A(n),r&&A(i),R(s,r)}}}function xe(t){let e,n,i,l=Object.keys(t[0]),s=[];for(let r=0;r<l.length;r+=1)s[r]=ve(de(t,l,r));return{c(){e=_("h2"),e.innerHTML='<i style="font-weight:100">Please only select the GPA for subjects that you have taken.</i>',n=O(),i=_("div");for(let r=0;r<s.length;r+=1)s[r].c();h(i,"id","changing"),h(i,"class","svelte-42wbmo")},m(r,d){N(r,e,d),N(r,n,d),N(r,i,d);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,null)},p(r,d){if(d&449){l=Object.keys(r[0]);let o;for(o=0;o<l.length;o+=1){const c=de(r,l,o);s[o]?s[o].p(c,d):(s[o]=ve(c),s[o].c(),s[o].m(i,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=l.length}},d(r){r&&A(e),r&&A(n),r&&A(i),R(s,r)}}}function _e(t){let e,n,i=t[17]+"",l,s,r,d,o,c,k,b,C,g=t[0][t[17]][3]+"",y,E,M,$,S,w,a,f,u=t[0][t[17]][2]+"",p,P,v,I;return{c(){e=_("div"),n=_("h2"),l=L(i),s=O(),r=_("div"),d=_("h3"),d.textContent="Practical :",o=O(),c=_("input"),b=_("h2"),C=L("/"),y=L(g),E=O(),M=_("h3"),M.textContent="Theory :",$=O(),S=_("input"),a=_("h2"),f=L("/"),p=L(u),P=O(),h(n,"class","subject_name svelte-42wbmo"),h(c,"type","text"),h(c,"id","text_box"),h(c,"class",k=B(t[17]+" 3")+" svelte-42wbmo"),h(b,"class","outof svelte-42wbmo"),h(S,"type","text"),h(S,"id","text_box"),h(S,"class",w=B(t[17]+" 2")+" svelte-42wbmo"),h(a,"class","outof svelte-42wbmo"),h(r,"id","each_subject"),h(r,"class","svelte-42wbmo"),h(e,"id","combo"),h(e,"class","svelte-42wbmo")},m(G,q){N(G,e,q),m(e,n),m(n,l),m(e,s),m(e,r),m(r,d),m(r,o),m(r,c),m(r,b),m(b,C),m(b,y),m(r,E),m(r,M),m(r,$),m(r,S),m(r,a),m(a,f),m(a,p),m(e,P),v||(I=[D(c,"change",t[9]),D(S,"change",t[9])],v=!0)},p(G,q){q&1&&i!==(i=G[17]+"")&&U(l,i),q&1&&k!==(k=B(G[17]+" 3")+" svelte-42wbmo")&&h(c,"class",k),q&1&&g!==(g=G[0][G[17]][3]+"")&&U(y,g),q&1&&w!==(w=B(G[17]+" 2")+" svelte-42wbmo")&&h(S,"class",w),q&1&&u!==(u=G[0][G[17]][2]+"")&&U(p,u)},d(G){G&&A(e),v=!1,H(I)}}}function pe(t){let e,n=t[20]+"",i,l;return{c(){e=_("option"),i=L(n),l=_("br"),e.__value=t[20],e.value=e.__value},m(s,r){N(s,e,r),m(e,i),N(s,l,r)},p:T,d(s){s&&A(e),s&&A(l)}}}function ge(t){let e,n=t[20]+"",i,l;return{c(){e=_("option"),i=L(n),l=_("br"),e.__value=t[20],e.value=e.__value},m(s,r){N(s,e,r),m(e,i),N(s,l,r)},p:T,d(s){s&&A(e),s&&A(l)}}}function ve(t){let e,n,i=t[17]+"",l,s,r,d,o,c,k,b,C,g,y,E,M,$,S,w=t[6],a=[];for(let p=0;p<w.length;p+=1)a[p]=pe(he(t,w,p));let f=t[6],u=[];for(let p=0;p<f.length;p+=1)u[p]=ge(me(t,f,p));return{c(){e=_("div"),n=_("h2"),l=L(i),s=O(),r=_("div"),d=_("h3"),d.textContent="Practical:",o=_("select"),c=_("option"),c.textContent="Select";for(let p=0;p<a.length;p+=1)a[p].c();b=O(),C=_("h3"),C.textContent="Theory:",g=_("select"),y=_("option"),y.textContent="Select";for(let p=0;p<u.length;p+=1)u[p].c();M=O(),h(n,"class","subject_name svelte-42wbmo"),c.selected=!0,c.__value="Select",c.value=c.__value,h(o,"class",k=B(t[17])+" svelte-42wbmo"),y.selected=!0,y.__value="Select",y.value=y.__value,h(g,"class",E=B(t[17])+" svelte-42wbmo"),h(r,"id","each_subject"),h(r,"class","svelte-42wbmo"),h(e,"id","combo"),h(e,"class","svelte-42wbmo")},m(p,P){N(p,e,P),m(e,n),m(n,l),m(e,s),m(e,r),m(r,d),m(r,o),m(o,c);for(let v=0;v<a.length;v+=1)a[v]&&a[v].m(o,null);m(r,b),m(r,C),m(r,g),m(g,y);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(g,null);m(e,M),$||(S=[D(o,"change",t[7]),D(g,"change",t[8])],$=!0)},p(p,P){if(P&1&&i!==(i=p[17]+"")&&U(l,i),P&64){w=p[6];let v;for(v=0;v<w.length;v+=1){const I=he(p,w,v);a[v]?a[v].p(I,P):(a[v]=pe(I),a[v].c(),a[v].m(o,null))}for(;v<a.length;v+=1)a[v].d(1);a.length=w.length}if(P&1&&k!==(k=B(p[17])+" svelte-42wbmo")&&h(o,"class",k),P&64){f=p[6];let v;for(v=0;v<f.length;v+=1){const I=me(p,f,v);u[v]?u[v].p(I,P):(u[v]=ge(I),u[v].c(),u[v].m(g,null))}for(;v<u.length;v+=1)u[v].d(1);u.length=f.length}P&1&&E!==(E=B(p[17])+" svelte-42wbmo")&&h(g,"class",E)},d(p){p&&A(e),R(a,p),R(u,p),$=!1,H(S)}}}function be(t){let e,n,i;return{c(){e=_("h2"),n=L("GPA: "),i=L(t[4]),h(e,"class","center svelte-42wbmo")},m(l,s){N(l,e,s),m(e,n),m(e,i)},p(l,s){s&16&&U(i,l[4])},d(l){l&&A(e)}}}function Fe(t){let e,n,i,l,s,r,d,o,c,k,b,C,g,y,E,M;function $(f,u){if(f[1]==="gpa")return xe;if(f[1]==="marks")return qe}let S=$(t),w=S&&S(t),a=t[4]!==void 0&&be(t);return{c(){e=_("div"),n=_("h2"),n.textContent="Input Method",i=O(),l=_("div"),s=_("button"),r=L("GPA"),o=O(),c=_("button"),k=L("Marks"),C=O(),w&&w.c(),g=O(),a&&a.c(),y=Ee(),h(s,"class",d=B(t[2]?"active":"inactive")+" svelte-42wbmo"),h(c,"class",b=B(t[3]?"active":"inactive")+" svelte-42wbmo"),h(l,"class","buttons svelte-42wbmo"),h(e,"id","input_method"),h(e,"class","svelte-42wbmo")},m(f,u){N(f,e,u),m(e,n),m(e,i),m(e,l),m(l,s),m(s,r),m(l,o),m(l,c),m(c,k),N(f,C,u),w&&w.m(f,u),N(f,g,u),a&&a.m(f,u),N(f,y,u),E||(M=[D(s,"click",t[10]),D(c,"click",t[11])],E=!0)},p(f,[u]){u&4&&d!==(d=B(f[2]?"active":"inactive")+" svelte-42wbmo")&&h(s,"class",d),u&8&&b!==(b=B(f[3]?"active":"inactive")+" svelte-42wbmo")&&h(c,"class",b),S===(S=$(f))&&w?w.p(f,u):(w&&w.d(1),w=S&&S(f),w&&(w.c(),w.m(g.parentNode,g))),f[4]!==void 0?a?a.p(f,u):(a=be(f),a.c(),a.m(y.parentNode,y)):a&&(a.d(1),a=null)},i:T,o:T,d(f){f&&A(e),f&&A(C),w&&w.d(f),f&&A(g),a&&a.d(f),f&&A(y),E=!1,H(M)}}}function Je(t,e,n){let i,l={};X.subscribe(a=>i=a);let s,r,d;function o(a){n(1,s=a),a==="gpa"&&(n(2,r=!0),n(3,d=!1)),a==="marks"&&(n(3,d=!0),n(2,r=!1)),i==="science"&&n(0,l=JSON.parse(JSON.stringify(c))),i==="management"&&n(0,l=JSON.parse(JSON.stringify(k))),$()}let c={Nepali:[0,0,75,25],English:[0,0,75,25],Physics:[0,0,75,25],Chemistry:[0,0,75,25],Maths:[0,0,75,25],Computer:[0,0,50,50],Biology:[0,0,75,25],Social:[0,0,75,25]},k={Nepali:[0,0,75,25],English:[0,0,75,25],Social:[0,0,75,25],Economics:[0,0,75,25],Account:[0,0,75,25],Computer:[0,0,50,50],Maths:[0,0,75,25]},b=["4.0 or A+","3.6 or A","3.2 or B+","2.8 or B","2.4 or C+","2.0 or C","1.8 or D+","1.6 or D"];function C(a){const f=a.target.value,u=a.target.className.split(" ")[0].toString().trim();if(f!=="Select"){let p=f.split("or"),P=parseFloat(p[0].trim());l[u].splice(0,1,P)}f=="Select"&&l[u].splice(0,1,0),$()}function g(a){const f=a.target.value,u=a.target.className.split(" ")[0].toString().trim();if(f!=="Select"){let p=f.split("or"),P=parseFloat(p[0]);l[u].splice(1,1,P)}f=="Select"&&l[u].splice(1,1,0),$()}function y(a){const f=a.target.value,u=a.target.className.split(" "),p=u[0].toString().trim();let P=E(p,parseInt(u[1]),f);console.log(P),u[1]=="2"&&l[p].splice(1,1,P),u[1]=="3"&&l[p].splice(0,1,P),$()}function E(a,f,u){return 90/100*l[a][f]<=u?4:90/100*l[a][f]>u&&u>=80/100*l[a][f]?3.6:80/100*l[a][f]>u&&u>=70/100*l[a][f]?3.2:70/100*l[a][f]>u&&u>=60/100*l[a][f]?2.8:60/100*l[a][f]>u&&u>=50/100*l[a][f]?2.4:50/100*l[a][f]>u&&u>=40/100*l[a][f]?2:40/100*l[a][f]>u&&u>=30/100*l[a][f]?1.8:30/100*l[a][f]>u&&u>=20/100*l[a][f]?1.6:0}var M;function $(){i==="science"&&n(4,M=(l.Nepali[1]*2.25+l.English[1]*3+l.Maths[1]*3.75+l.Physics[1]*3.75+l.Chemistry[1]*3.75+l.Computer[1]*2.5+l.Nepali[0]*.75+l.English[0]*1+l.Maths[0]*1.25+l.Physics[0]*1.25+l.Chemistry[0]*1.25+l.Computer[0]*2.5+l.Biology[1]*3.75+l.Biology[0]*1.25+l.Social[1]*3.75+l.Social[0]*1.25)/27),i==="management"&&n(4,M=(l.Nepali[1]*2.25+l.English[1]*3+l.Maths[1]*3.75+l.Economics[1]*3.75+l.Account[1]*3.75+l.Computer[1]*2.5+l.Nepali[0]*.75+l.English[0]*1+l.Maths[0]*1.25+l.Economics[0]*1.25+l.Account[0]*1.25+l.Computer[0]*2.5+l.Social[1]*3.75+l.Social[0]*1.25)/27)}return[l,s,r,d,M,o,b,C,g,y,()=>o("gpa"),()=>o("marks")]}class je extends oe{constructor(e){super(),re(this,e,Je,Fe,Y,{})}}function we(t){let e;return{c(){e=_("div"),e.innerHTML=`<h3 class="svelte-fnk7sk">Overall GPA for NEB class 12 is calculated by</h3>  <div id="math_formula" class="svelte-fnk7sk"><math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><munderover accent="false" accentunder="false"><mo>∑</mo><mrow></mrow><mrow></mrow></munderover><mi>G</mi><mi>P</mi><mi>A</mi><mo>(</mo><mi>T</mi><mi>h</mi><mo>)</mo><mo>×</mo><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mo></mo><mi>H</mi><mi>o</mi><mi>u</mi><mi>r</mi><mo>(</mo><mi>T</mi><mi>h</mi><mo>)</mo><mo>+</mo><mi>G</mi><mi>P</mi><mi>A</mi><mo>(</mo><mi>P</mi><mi>r</mi><mo>)</mo><mo></mo><mo>×</mo><mo></mo><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mo></mo><mi>H</mi><mi>o</mi><mi>u</mi><mi>r</mi><mo>(</mo><mi>P</mi><mi>r</mi><mo>)</mo></mrow><mrow><mi>T</mi><mi>o</mi><mi>t</mi><mi>a</mi><mi>l</mi><mo></mo><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mo></mo><mi>H</mi><mi>o</mi><mi>u</mi><mi>r</mi></mrow></mfrac></math></div> 
<h3 class="long_text svelte-fnk7sk">It was quite easy to calculate GPA till grade ten as credit hour of both practical and theory used to be same. But in grade 12 it may vary according to subjects. For eg. credit hour of Nepali(Theory) is 2.25 but Nepali(Practical) is 0.75 and for English(Therory) credit hour is 3 but for English(Practical) is 1. In order to get A+ in Nepali(Theory) you need to get 90% of 75 which is 67.5 and for Nepali(Practical) 90% of 25 = 22.5 is required.</h3> 
<table class="customTable svelte-fnk7sk"><tbody><tr><th>Grade</th> 
  
      <th>Scale</th> 
  
      <th>Scale 2</th> 
  
      <th>Grade Description</th> 
  
  
      <th>Grade</th></tr> 
  <tr><td align="center">A+</td> 
                      <td style="white-space:nowrap;">90.00 - 100.00</td> 
                      <td style="white-space:nowrap;">4.00</td> 
                      <td>Outstanding</td> 
                                  <td align="center">A+</td></tr> 
  <tr><td align="center">A</td> 
                      <td style="white-space:nowrap;">80.00 - 89.00</td> 
                      <td style="white-space:nowrap;">3.60</td> 
                      <td>Excellent</td> 
                                  <td align="center">A</td></tr> 
  <tr><td align="center">B+</td> 
                      <td style="white-space:nowrap;">70.00 - 79.00</td> 
                      <td style="white-space:nowrap;">3.20</td> 
                      <td>Very Good</td> 
                                  <td align="center">B+</td></tr> 
  <tr><td align="center">B</td> 
                      <td style="white-space:nowrap;">60.00 - 69.00</td> 
                      <td style="white-space:nowrap;">2.80</td> 
                      <td>Good</td> 
                                  <td align="center">B</td></tr> 
  <tr><td align="center">C+</td> 
                      <td style="white-space:nowrap;">50.00 - 59.00</td> 
                      <td style="white-space:nowrap;">2.40</td> 
                      <td>Above Average</td> 
                                  <td align="center">C+</td></tr> 
  <tr><td align="center">C</td> 
                      <td style="white-space:nowrap;">40.00 - 49.00</td> 
                      <td style="white-space:nowrap;">2.00</td> 
                      <td>Average</td> 
                                  <td align="center">C</td></tr> 
  <tr><td align="center">D+</td> 
                      <td style="white-space:nowrap;">30.00 - 39.00</td> 
                      <td style="white-space:nowrap;">1.80</td> 
                      <td>Below Average</td> 
                                  <td align="center">D+</td></tr> 
  <tr><td align="center">D</td> 
                      <td style="white-space:nowrap;">20.00 - 29.00</td> 
                      <td style="white-space:nowrap;">1.60</td> 
                      <td>Above Insufficient</td> 
                                  <td align="center">D</td></tr> 
  <tr><td align="center">E</td> 
                      <td style="white-space:nowrap;">0.00 - 19.00</td> 
                      <td style="white-space:nowrap;">0.80</td> 
                      <td>Insufficient</td> 
                                  <td align="center">F</td></tr></tbody></table>`,h(e,"class","info svelte-fnk7sk")},m(n,i){N(n,e,i)},d(n){n&&A(e)}}}function ze(t){let e,n,i,l,s,r,d,o,c,k,b,C,g,y,E,M,$=t[1]===!0&&we();return{c(){e=_("body"),n=_("h2"),n.textContent="Choose Stream",i=O(),l=_("div"),s=_("button"),s.textContent="Science",r=O(),d=_("button"),d.textContent="Management",o=O(),c=_("div"),k=_("div"),b=_("div"),g=_("h2"),g.textContent="How does GPA calculation work ?",y=O(),$&&$.c(),h(n,"class","svelte-fnk7sk"),h(s,"class","svelte-fnk7sk"),h(d,"class","svelte-fnk7sk"),h(l,"class","buttons svelte-fnk7sk"),h(b,"class",C=B(t[0])+" svelte-fnk7sk"),h(k,"id","arrow"),h(k,"class","svelte-fnk7sk"),h(g,"class","how svelte-fnk7sk"),h(c,"class","trigger_info svelte-fnk7sk")},m(S,w){N(S,e,w),m(e,n),m(e,i),m(e,l),m(l,s),m(l,r),m(l,d),m(e,o),m(e,c),m(c,k),m(k,b),m(c,g),m(e,y),$&&$.m(e,null),E||(M=[D(s,"click",t[4]),D(d,"click",t[5]),D(k,"click",t[3]),D(g,"click",t[3])],E=!0)},p(S,[w]){w&1&&C!==(C=B(S[0])+" svelte-fnk7sk")&&h(b,"class",C),S[1]===!0?$||($=we(),$.c(),$.m(e,null)):$&&($.d(1),$=null)},i:T,o:T,d(S){S&&A(e),$&&$.d(),E=!1,H(M)}}}function Ue(t,e,n){function i(c){X.update(k=>c)}var l="upward",s=!0;function r(){n(1,s=!s),s===!0?n(0,l="upward"):n(0,l="right")}return[l,s,i,r,()=>i("science"),()=>i("management")]}class Ke extends oe{constructor(e){super(),re(this,e,Ue,ze,Y,{})}}function Ve(t){let e,n;return e=new Ke({}),{c(){Se(e.$$.fragment)},m(i,l){ie(e,i,l),n=!0},i(i){n||(V(e.$$.fragment,i),n=!0)},o(i){W(e.$$.fragment,i),n=!1},d(i){se(e,i)}}}function Qe(t){let e,n;return e=new je({}),{c(){Se(e.$$.fragment)},m(i,l){ie(e,i,l),n=!0},i(i){n||(V(e.$$.fragment,i),n=!0)},o(i){W(e.$$.fragment,i),n=!1},d(i){se(e,i)}}}function Re(t){let e,n,i,l,s,r,d,o,c;const k=[Qe,Ve],b=[];function C(g,y){return g[0]?0:1}return s=C(t),r=b[s]=k[s](t),{c(){e=_("main"),n=_("h1"),n.textContent="NEB GPA Calculator",i=O(),l=_("div"),r.c(),h(n,"class","main_text svelte-1l5u32"),h(l,"class","container")},m(g,y){N(g,e,y),m(e,n),m(e,i),m(e,l),b[s].m(l,null),d=!0,o||(c=D(n,"click",t[1]),o=!0)},p(g,[y]){let E=s;s=C(g),s!==E&&(Le(),W(b[E],1,1,()=>{b[E]=null}),Be(),r=b[s],r||(r=b[s]=k[s](g),r.c()),V(r,1),r.m(l,null))},i(g){d||(V(r),d=!0)},o(g){W(r),d=!1},d(g){g&&A(e),b[s].d(),o=!1,c()}}}function We(t,e,n){let i;return X.subscribe(s=>n(0,i=s)),[i,()=>X.update(s=>{})]}class Xe extends oe{constructor(e){super(),re(this,e,We,Re,Y,{})}}new Xe({target:document.getElementById("app")});