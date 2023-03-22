(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function B(){}function ye(e){return e()}function re(){return Object.create(null)}function G(e){e.forEach(ye)}function ke(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Se(e){return Object.keys(e).length===0}function T(e){return e??""}function h(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function P(){return L(" ")}function Ce(){return L("")}function D(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ee(e){return Array.from(e.childNodes)}function j(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let ne;function K(e){ne=e}const z=[],ae=[];let U=[];const fe=[],Ne=Promise.resolve();let te=!1;function Oe(){te||(te=!0,Ne.then(we))}function le(e){U.push(e)}const Z=new Set;let q=0;function we(){if(q!==0)return;const e=ne;do{try{for(;q<z.length;){const t=z[q];q++,K(t),Pe(t.$$)}}catch(t){throw z.length=0,q=0,t}for(K(null),z.length=0,q=0;ae.length;)ae.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];Z.has(n)||(Z.add(n),n())}U.length=0}while(z.length);for(;fe.length;)fe.pop()();te=!1,Z.clear(),K(e)}function Pe(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}function Ae(e){const t=[],n=[];U.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),U=t}const R=new Set;let J;function Le(){J={r:0,c:[],p:J}}function Me(){J.r||G(J.c),J=J.p}function Q(e,t){e&&e.i&&(R.delete(e),e.i(t))}function W(e,t,n,s){if(e&&e.o){if(R.has(e))return;R.add(e),J.c.push(()=>{R.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function $e(e){e&&e.c()}function se(e,t,n,s){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),s||le(()=>{const o=e.$$.on_mount.map(ye).filter(ke);e.$$.on_destroy?e.$$.on_destroy.push(...o):G(o),e.$$.on_mount=[]}),i.forEach(le)}function ie(e,t){const n=e.$$;n.fragment!==null&&(Ae(n.after_update),G(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(e,t){e.$$.dirty[0]===-1&&(z.push(e),Oe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,s,l,i,o,_=[-1]){const c=ne;K(e);const a=e.$$={fragment:null,ctx:[],props:i,update:B,not_equal:l,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:re(),dirty:_,skip_bound:!1,root:t.target||c.$$.root};o&&o(a.root);let w=!1;if(a.ctx=n?n(e,t.props||{},(v,E,...b)=>{const k=b.length?b[0]:E;return a.ctx&&l(a.ctx[v],a.ctx[v]=k)&&(!a.skip_bound&&a.bound[v]&&a.bound[v](k),w&&Be(e,v)),E}):[],a.update(),w=!0,G(a.before_update),a.fragment=s?s(a.ctx):!1,t.target){if(t.hydrate){const v=Ee(t.target);a.fragment&&a.fragment.l(v),v.forEach(S)}else a.fragment&&a.fragment.c();t.intro&&Q(e.$$.fragment),se(e,t.target,t.anchor,t.customElement),we()}K(c)}class ce{$destroy(){ie(this,1),this.$destroy=B}$on(t,n){if(!ke(n))return B;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(t){this.$$set&&!Se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const F=[];function Te(e,t=B){let n;const s=new Set;function l(_){if(Y(e,_)&&(e=_,n)){const c=!F.length;for(const a of s)a[1](),F.push(a,e);if(c){for(let a=0;a<F.length;a+=2)F[a][0](F[a+1]);F.length=0}}}function i(_){l(_(e))}function o(_,c=B){const a=[_,c];return s.add(a),s.size===1&&(n=t(l)||B),_(e),()=>{s.delete(a),s.size===0&&n&&(n(),n=null)}}return{set:l,update:i,subscribe:o}}function ee(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function xe(e,t){const n=[];let s=ee(e);return{get location(){return s},listen(l){n.push(l);const i=()=>{s=ee(e),l({location:s,action:"POP"})};return e.addEventListener("popstate",i),()=>{e.removeEventListener("popstate",i);const o=n.indexOf(l);n.splice(o,1)}},navigate(l,{state:i,replace:o=!1}={}){i={...i,key:Date.now()+""};try{o?e.history.replaceState(i,null,l):e.history.pushState(i,null,l)}catch{e.location[o?"replace":"assign"](l)}s=ee(e),n.forEach(_=>_({location:s,action:"PUSH"}))}}}function De(e="/"){let t=0;const n=[{pathname:e,search:""}],s=[];return{get location(){return n[t]},addEventListener(l,i){},removeEventListener(l,i){},history:{get entries(){return n},get index(){return t},get state(){return s[t]},pushState(l,i,o){const[_,c=""]=o.split("?");t++,n.push({pathname:_,search:c}),s.push(l)},replaceState(l,i,o){const[_,c=""]=o.split("?");n[t]={pathname:_,search:c},s[t]=l}}}}const Ge=Boolean(typeof window<"u"&&window.document&&window.document.createElement);xe(Ge?window:De());const X=Te("");function ue(e,t,n){const s=e.slice();return s[17]=t[n],s}function _e(e,t,n){const s=e.slice();return s[17]=t[n],s}function he(e,t,n){const s=e.slice();return s[20]=t[n],s}function de(e,t,n){const s=e.slice();return s[20]=t[n],s}function He(e){let t,n,s,l=Object.keys(e[0]),i=[];for(let o=0;o<l.length;o+=1)i[o]=pe(ue(e,l,o));return{c(){t=m("h2"),t.innerHTML='<i style="font-weight:100">Please enter marks for only subjects that you have taken.</i>',n=P(),s=m("div");for(let o=0;o<i.length;o+=1)i[o].c();p(s,"id","changing"),p(s,"class","svelte-42wbmo")},m(o,_){C(o,t,_),C(o,n,_),C(o,s,_);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(s,null)},p(o,_){if(_&513){l=Object.keys(o[0]);let c;for(c=0;c<l.length;c+=1){const a=ue(o,l,c);i[c]?i[c].p(a,_):(i[c]=pe(a),i[c].c(),i[c].m(s,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=l.length}},d(o){o&&S(t),o&&S(n),o&&S(s),V(i,o)}}}function Ie(e){let t,n,s,l=Object.keys(e[0]),i=[];for(let o=0;o<l.length;o+=1)i[o]=be(_e(e,l,o));return{c(){t=m("h2"),t.innerHTML='<i style="font-weight:100">Please only select the GPA for subjects that you have taken.</i>',n=P(),s=m("div");for(let o=0;o<i.length;o+=1)i[o].c();p(s,"id","changing"),p(s,"class","svelte-42wbmo")},m(o,_){C(o,t,_),C(o,n,_),C(o,s,_);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(s,null)},p(o,_){if(_&449){l=Object.keys(o[0]);let c;for(c=0;c<l.length;c+=1){const a=_e(o,l,c);i[c]?i[c].p(a,_):(i[c]=be(a),i[c].c(),i[c].m(s,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=l.length}},d(o){o&&S(t),o&&S(n),o&&S(s),V(i,o)}}}function pe(e){let t,n,s=e[17]+"",l,i,o,_,c,a,w,v,E,b=e[0][e[17]][3]+"",k,O,M,A,N,y,r,f,u=e[0][e[17]][2]+"",d,$,g,H;return{c(){t=m("div"),n=m("h2"),l=L(s),i=P(),o=m("div"),_=m("h3"),_.textContent="Practical :",c=P(),a=m("input"),v=m("h2"),E=L("/"),k=L(b),O=P(),M=m("h3"),M.textContent="Theory :",A=P(),N=m("input"),r=m("h2"),f=L("/"),d=L(u),$=P(),p(n,"class","subject_name svelte-42wbmo"),p(a,"type","text"),p(a,"id","text_box"),p(a,"class",w=T(e[17]+" 3")+" svelte-42wbmo"),p(v,"class","outof svelte-42wbmo"),p(N,"type","text"),p(N,"id","text_box"),p(N,"class",y=T(e[17]+" 2")+" svelte-42wbmo"),p(r,"class","outof svelte-42wbmo"),p(o,"id","each_subject"),p(o,"class","svelte-42wbmo"),p(t,"id","combo"),p(t,"class","svelte-42wbmo")},m(x,I){C(x,t,I),h(t,n),h(n,l),h(t,i),h(t,o),h(o,_),h(o,c),h(o,a),h(o,v),h(v,E),h(v,k),h(o,O),h(o,M),h(o,A),h(o,N),h(o,r),h(r,f),h(r,d),h(t,$),g||(H=[D(a,"change",e[9]),D(N,"change",e[9])],g=!0)},p(x,I){I&1&&s!==(s=x[17]+"")&&j(l,s),I&1&&w!==(w=T(x[17]+" 3")+" svelte-42wbmo")&&p(a,"class",w),I&1&&b!==(b=x[0][x[17]][3]+"")&&j(k,b),I&1&&y!==(y=T(x[17]+" 2")+" svelte-42wbmo")&&p(N,"class",y),I&1&&u!==(u=x[0][x[17]][2]+"")&&j(d,u)},d(x){x&&S(t),g=!1,G(H)}}}function me(e){let t,n=e[20]+"",s,l;return{c(){t=m("option"),s=L(n),l=m("br"),t.__value=e[20],t.value=t.__value},m(i,o){C(i,t,o),h(t,s),C(i,l,o)},p:B,d(i){i&&S(t),i&&S(l)}}}function ge(e){let t,n=e[20]+"",s,l;return{c(){t=m("option"),s=L(n),l=m("br"),t.__value=e[20],t.value=t.__value},m(i,o){C(i,t,o),h(t,s),C(i,l,o)},p:B,d(i){i&&S(t),i&&S(l)}}}function be(e){let t,n,s=e[17]+"",l,i,o,_,c,a,w,v,E,b,k,O,M,A,N,y=e[6],r=[];for(let d=0;d<y.length;d+=1)r[d]=me(de(e,y,d));let f=e[6],u=[];for(let d=0;d<f.length;d+=1)u[d]=ge(he(e,f,d));return{c(){t=m("div"),n=m("h2"),l=L(s),i=P(),o=m("div"),_=m("h3"),_.textContent="Practical:",c=m("select"),a=m("option"),a.textContent="Select";for(let d=0;d<r.length;d+=1)r[d].c();v=P(),E=m("h3"),E.textContent="Theory:",b=m("select"),k=m("option"),k.textContent="Select";for(let d=0;d<u.length;d+=1)u[d].c();M=P(),p(n,"class","subject_name svelte-42wbmo"),a.selected=!0,a.__value="Select",a.value=a.__value,p(c,"class",w=T(e[17])+" svelte-42wbmo"),k.selected=!0,k.__value="Select",k.value=k.__value,p(b,"class",O=T(e[17])+" svelte-42wbmo"),p(o,"id","each_subject"),p(o,"class","svelte-42wbmo"),p(t,"id","combo"),p(t,"class","svelte-42wbmo")},m(d,$){C(d,t,$),h(t,n),h(n,l),h(t,i),h(t,o),h(o,_),h(o,c),h(c,a);for(let g=0;g<r.length;g+=1)r[g]&&r[g].m(c,null);h(o,v),h(o,E),h(o,b),h(b,k);for(let g=0;g<u.length;g+=1)u[g]&&u[g].m(b,null);h(t,M),A||(N=[D(c,"change",e[7]),D(b,"change",e[8])],A=!0)},p(d,$){if($&1&&s!==(s=d[17]+"")&&j(l,s),$&64){y=d[6];let g;for(g=0;g<y.length;g+=1){const H=de(d,y,g);r[g]?r[g].p(H,$):(r[g]=me(H),r[g].c(),r[g].m(c,null))}for(;g<r.length;g+=1)r[g].d(1);r.length=y.length}if($&1&&w!==(w=T(d[17])+" svelte-42wbmo")&&p(c,"class",w),$&64){f=d[6];let g;for(g=0;g<f.length;g+=1){const H=he(d,f,g);u[g]?u[g].p(H,$):(u[g]=ge(H),u[g].c(),u[g].m(b,null))}for(;g<u.length;g+=1)u[g].d(1);u.length=f.length}$&1&&O!==(O=T(d[17])+" svelte-42wbmo")&&p(b,"class",O)},d(d){d&&S(t),V(r,d),V(u,d),A=!1,G(N)}}}function ve(e){let t,n,s;return{c(){t=m("h2"),n=L("GPA: "),s=L(e[4]),p(t,"class","center svelte-42wbmo")},m(l,i){C(l,t,i),h(t,n),h(t,s)},p(l,i){i&16&&j(s,l[4])},d(l){l&&S(t)}}}function Je(e){let t,n,s,l,i,o,_,c,a,w,v,E,b,k,O,M;function A(f,u){if(f[1]==="gpa")return Ie;if(f[1]==="marks")return He}let N=A(e),y=N&&N(e),r=e[4]!==void 0&&ve(e);return{c(){t=m("div"),n=m("h2"),n.textContent="Input Method",s=P(),l=m("div"),i=m("button"),o=L("GPA"),c=P(),a=m("button"),w=L("Marks"),E=P(),y&&y.c(),b=P(),r&&r.c(),k=Ce(),p(i,"class",_=T(e[2]?"active":"inactive")+" svelte-42wbmo"),p(a,"class",v=T(e[3]?"active":"inactive")+" svelte-42wbmo"),p(l,"class","buttons svelte-42wbmo"),p(t,"id","input_method"),p(t,"class","svelte-42wbmo")},m(f,u){C(f,t,u),h(t,n),h(t,s),h(t,l),h(l,i),h(i,o),h(l,c),h(l,a),h(a,w),C(f,E,u),y&&y.m(f,u),C(f,b,u),r&&r.m(f,u),C(f,k,u),O||(M=[D(i,"click",e[10]),D(a,"click",e[11])],O=!0)},p(f,[u]){u&4&&_!==(_=T(f[2]?"active":"inactive")+" svelte-42wbmo")&&p(i,"class",_),u&8&&v!==(v=T(f[3]?"active":"inactive")+" svelte-42wbmo")&&p(a,"class",v),N===(N=A(f))&&y?y.p(f,u):(y&&y.d(1),y=N&&N(f),y&&(y.c(),y.m(b.parentNode,b))),f[4]!==void 0?r?r.p(f,u):(r=ve(f),r.c(),r.m(k.parentNode,k)):r&&(r.d(1),r=null)},i:B,o:B,d(f){f&&S(t),f&&S(E),y&&y.d(f),f&&S(b),r&&r.d(f),f&&S(k),O=!1,G(M)}}}function qe(e,t,n){let s,l={};X.subscribe(r=>s=r);let i,o,_;function c(r){n(1,i=r),r==="gpa"&&(n(2,o=!0),n(3,_=!1)),r==="marks"&&(n(3,_=!0),n(2,o=!1)),s==="science"&&n(0,l=JSON.parse(JSON.stringify(a))),s==="management"&&n(0,l=JSON.parse(JSON.stringify(w))),A()}let a={Nepali:[0,0,75,25],English:[0,0,75,25],Physics:[0,0,75,25],Chemistry:[0,0,75,25],Maths:[0,0,75,25],Computer:[0,0,50,50],Biology:[0,0,75,25],Social:[0,0,75,25]},w={Nepali:[0,0,75,25],English:[0,0,75,25],Social:[0,0,75,25],Economics:[0,0,75,25],Account:[0,0,75,25],Computer:[0,0,50,50],Maths:[0,0,75,25]},v=["4.0 or A+","3.6 or A","3.2 or B+","2.8 or B","2.4 or C+","2.0 or C","1.8 or D+","1.6 or D"];function E(r){const f=r.target.value,u=r.target.className.split(" ")[0].toString().trim();if(f!=="Select"){let d=f.split("or"),$=parseFloat(d[0].trim());l[u].splice(0,1,$)}f=="Select"&&l[u].splice(0,1,0),A()}function b(r){const f=r.target.value,u=r.target.className.split(" ")[0].toString().trim();if(f!=="Select"){let d=f.split("or"),$=parseFloat(d[0]);l[u].splice(1,1,$)}f=="Select"&&l[u].splice(1,1,0),A()}function k(r){const f=r.target.value,u=r.target.className.split(" "),d=u[0].toString().trim();let $=O(d,parseInt(u[1]),f);console.log($),u[1]=="2"&&l[d].splice(1,1,$),u[1]=="3"&&l[d].splice(0,1,$),A()}function O(r,f,u){return 90/100*l[r][f]<=u?4:90/100*l[r][f]>u&&u>=80/100*l[r][f]?3.6:80/100*l[r][f]>u&&u>=70/100*l[r][f]?3.2:70/100*l[r][f]>u&&u>=60/100*l[r][f]?2.8:60/100*l[r][f]>u&&u>=50/100*l[r][f]?2.4:50/100*l[r][f]>u&&u>=40/100*l[r][f]?2:40/100*l[r][f]>u&&u>=30/100*l[r][f]?1.8:30/100*l[r][f]>u&&u>=20/100*l[r][f]?1.6:0}var M;function A(){s==="science"&&n(4,M=(l.Nepali[1]*2.25+l.English[1]*3+l.Maths[1]*3.75+l.Physics[1]*3.75+l.Chemistry[1]*3.75+l.Computer[1]*2.5+l.Nepali[0]*.75+l.English[0]*1+l.Maths[0]*1.25+l.Physics[0]*1.25+l.Chemistry[0]*1.25+l.Computer[0]*2.5+l.Biology[1]*3.75+l.Biology[0]*1.25+l.Social[1]*3.75+l.Social[0]*1.25)/27),s==="management"&&n(4,M=(l.Nepali[1]*2.25+l.English[1]*3+l.Maths[1]*3.75+l.Economics[1]*3.75+l.Account[1]*3.75+l.Computer[1]*2.5+l.Nepali[0]*.75+l.English[0]*1+l.Maths[0]*1.25+l.Economics[0]*1.25+l.Account[0]*1.25+l.Computer[0]*2.5+l.Social[1]*3.75+l.Social[0]*1.25)/27)}return[l,i,o,_,M,c,v,E,b,k,()=>c("gpa"),()=>c("marks")]}class Fe extends ce{constructor(t){super(),oe(this,t,qe,Je,Y,{})}}function ze(e){let t,n,s,l,i,o,_,c,a;return{c(){t=m("body"),n=m("h2"),n.textContent="Choose Stream",s=P(),l=m("div"),i=m("button"),i.textContent="Science",o=P(),_=m("button"),_.textContent="Management",p(n,"class","svelte-631vml"),p(i,"class","svelte-631vml"),p(_,"class","svelte-631vml"),p(l,"class","buttons svelte-631vml")},m(w,v){C(w,t,v),h(t,n),h(t,s),h(t,l),h(l,i),h(l,o),h(l,_),c||(a=[D(i,"click",e[1]),D(_,"click",e[2])],c=!0)},p:B,i:B,o:B,d(w){w&&S(t),c=!1,G(a)}}}function Ue(e){function t(l){X.update(i=>l)}return[t,()=>t("science"),()=>t("management")]}class je extends ce{constructor(t){super(),oe(this,t,Ue,ze,Y,{})}}function Ke(e){let t,n;return t=new je({}),{c(){$e(t.$$.fragment)},m(s,l){se(t,s,l),n=!0},i(s){n||(Q(t.$$.fragment,s),n=!0)},o(s){W(t.$$.fragment,s),n=!1},d(s){ie(t,s)}}}function Qe(e){let t,n;return t=new Fe({}),{c(){$e(t.$$.fragment)},m(s,l){se(t,s,l),n=!0},i(s){n||(Q(t.$$.fragment,s),n=!0)},o(s){W(t.$$.fragment,s),n=!1},d(s){ie(t,s)}}}function Re(e){let t,n,s,l,i,o,_,c,a;const w=[Qe,Ke],v=[];function E(b,k){return b[0]?0:1}return i=E(e),o=v[i]=w[i](e),{c(){t=m("main"),n=m("h1"),n.textContent="NEB GPA Calculator",s=P(),l=m("div"),o.c(),p(n,"class","main_text svelte-21hu0e"),p(l,"class","container")},m(b,k){C(b,t,k),h(t,n),h(t,s),h(t,l),v[i].m(l,null),_=!0,c||(a=D(n,"click",e[1]),c=!0)},p(b,[k]){let O=i;i=E(b),i!==O&&(Le(),W(v[O],1,1,()=>{v[O]=null}),Me(),o=v[i],o||(o=v[i]=w[i](b),o.c()),Q(o,1),o.m(l,null))},i(b){_||(Q(o),_=!0)},o(b){W(o),_=!1},d(b){b&&S(t),v[i].d(),c=!1,a()}}}function Ve(e,t,n){let s;return X.subscribe(i=>n(0,s=i)),[s,()=>X.update(i=>{})]}class We extends ce{constructor(t){super(),oe(this,t,Ve,Re,Y,{})}}new We({target:document.getElementById("app")});
