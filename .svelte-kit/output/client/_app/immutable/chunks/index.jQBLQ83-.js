var H=Object.defineProperty;var T=(t,e,n)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>(T(t,typeof e!="symbol"?e+"":e,n),n);import{n as v,y as W,f as F,z as X,A as O,B as A,C as P,D as Y,E as L,F as B,b as Z,G as tt,I as et,J as nt,K as it,L as D,M as st,N as rt,O as at,P as ot,Q as ft}from"./scheduler.hLwqlzEk.js";const G=typeof window<"u";let J=G?()=>window.performance.now():()=>Date.now(),k=G?t=>requestAnimationFrame(t):v;const x=new Set;function K(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&k(K)}function Q(t){let e;return x.size===0&&k(K),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}const j=new Map;let z=0;function ut(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function lt(t,e){const n={stylesheet:X(e),rules:{}};return j.set(t,n),n}function N(t,e,n,i,l,o,u,s=0){const c=16.666/i;let r=`{
`;for(let _=0;_<=1;_+=c){const g=e+(n-e)*o(_);r+=_*100+`%{${u(g,1-g)}}
`}const $=r+`100% {${u(n,1-n)}}
}`,f=`__svelte_${ut($)}_${s}`,m=W(t),{stylesheet:h,rules:a}=j.get(m)||lt(m,t);a[f]||(a[f]=!0,h.insertRule(`@keyframes ${f} ${$}`,h.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${i}ms linear ${l}ms 1 both`,z+=1,f}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),l=n.length-i.length;l&&(t.style.animation=i.join(", "),z-=l,z||ct())}function ct(){k(()=>{z||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),j.clear())})}let E;function U(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function S(t,e,n){t.dispatchEvent(Y(`${e?"intro":"outro"}${n}`))}const M=new Set;let p;function yt(){p={r:0,c:[],p}}function wt(){p.r||O(p.c),p=p.p}function dt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function xt(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),p.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const V={duration:0};function vt(t,e,n){const i={direction:"in"};let l=e(t,n,i),o=!1,u,s,c=0;function r(){u&&R(t,u)}function $(){const{delay:m=0,duration:h=300,easing:a=L,tick:d=v,css:_}=l||V;_&&(u=N(t,0,1,h,m,a,_,c++)),d(0,1);const g=J()+m,b=g+h;s&&s.abort(),o=!0,P(()=>S(t,!0,"start")),s=Q(y=>{if(o){if(y>=b)return d(1,0),S(t,!0,"end"),r(),o=!1;if(y>=g){const w=a((y-g)/h);d(w,1-w)}}return o})}let f=!1;return{start(){f||(f=!0,R(t),A(l)?(l=l(i),U().then($)):$())},invalidate(){f=!1},end(){o&&(r(),o=!1)}}}function bt(t,e,n,i){let o=e(t,n,{direction:"both"}),u=i?0:1,s=null,c=null,r=null,$;function f(){r&&R(t,r)}function m(a,d){const _=a.b-u;return d*=Math.abs(_),{a:u,b:a.b,d:_,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:_=300,easing:g=L,tick:b=v,css:y}=o||V,w={start:J()+d,b:a};a||(w.group=p,p.r+=1),"inert"in t&&(a?$!==void 0&&(t.inert=$):($=t.inert,t.inert=!0)),s||c?c=w:(y&&(f(),r=N(t,u,a,_,d,g,y)),a&&b(0,1),s=m(w,_),P(()=>S(t,a,"start")),Q(C=>{if(c&&C>c.start&&(s=m(c,_),c=null,S(t,s.b,"start"),y&&(f(),r=N(t,u,s.b,s.duration,0,g,o.css))),s){if(C>=s.end)b(u=s.b,1-u),S(t,s.b,"end"),c||(s.b?f():--s.group.r||O(s.group.c)),s=null;else if(C>=s.start){const q=C-s.start;u=s.a+s.d*g(q/s.duration),b(u,1-u)}}return!!(s||c)}))}return{run(a){A(o)?U().then(()=>{o=o({direction:a?"in":"out"}),h(a)}):h(a)},end(){f(),s=c=null}}}function Et(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function St(t){t&&t.c()}function Ot(t,e){t&&t.l(e)}function _t(t,e,n){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),P(()=>{const o=t.$$.on_mount.map(st).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...o):O(o),t.$$.on_mount=[]}),l.forEach(P)}function $t(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(rt.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ct(t,e,n,i,l,o,u=null,s=[-1]){const c=it;D(t);const r=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:l,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:B(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};u&&u(r.root);let $=!1;if(r.ctx=n?n(t,e.props||{},(f,m,...h)=>{const a=h.length?h[0]:m;return r.ctx&&l(r.ctx[f],r.ctx[f]=a)&&(!r.skip_bound&&r.bound[f]&&r.bound[f](a),$&&ht(t,f)),m}):[],r.update(),$=!0,O(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){ot();const f=Z(e.target);r.fragment&&r.fragment.l(f),f.forEach(F)}else r.fragment&&r.fragment.c();e.intro&&dt(t.$$.fragment),_t(t,e.target,e.anchor),ft(),tt()}D(c)}class Mt{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){$t(this,1),this.$destroy=v}$on(e,n){if(!A(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const mt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(mt);export{Mt as S,Ot as a,xt as b,St as c,$t as d,wt as e,vt as f,yt as g,bt as h,Ct as i,Et as j,_t as m,dt as t};
