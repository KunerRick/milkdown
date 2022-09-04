import{f as Kt,c as qt,j as A,S as Pt,a as At,L as Ut,N as Gt,F as Jt,$ as Yt,b as St,K as Dt,M as Zt,P as J,d as me,e as Qt,O as Ht,k as _e,T as Xt,i as en,l as tn,_ as nn,I as rt,m as k,n as ge,o as Se,p as rn,R as De,q as on,r as an,v as He,s as ot,t as I,u as _,w as $,x as ze,y as H,z as P,A as zt,B as Re,J as ee,C as Y,D as sn,E as ln,G as q,H as F,Q as Oe,U as cn,V as ke,W as U,X as je,Y as dn,Z as pn,a0 as un,a1 as fn,a2 as hn,a3 as be,a4 as W,a5 as R,a6 as Q,a7 as Z,a8 as C,a9 as mn,aa as gn,ab as bn,ac as vn,ad as wn,ae as yn,af as kn,ag as K,ah as xn,ai as Mn}from"./index.6bf54807.js";class S{constructor(t,e){this.match=t,this.match=t,this.handler=typeof e=="string"?$n(e):e}}function $n(o){return function(t,e,n,r){let a=o;if(e[1]){let i=e[0].lastIndexOf(e[1]);a+=e[0].slice(i+e[1].length),n+=i;let s=n-r;s>0&&(a=e[0].slice(i-s,i)+a,n=r)}return t.tr.insertText(a,n,r)}}new S(/--$/,"\u2014");new S(/\.\.\.$/,"\u2026");new S(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/,"\u201C");new S(/"$/,"\u201D");new S(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/,"\u2018");new S(/'$/,"\u2019");function ve(o,t,e=null,n){return new S(o,(r,a,i,s)=>{let l=e instanceof Function?e(a):e,c=r.tr.delete(i,s),d=c.doc.resolve(i),f=d.blockRange(),u=f&&Kt(f,t,l);if(!u)return null;c.wrap(f,u);let p=c.doc.resolve(i-1).nodeBefore;return p&&p.type==t&&qt(c.doc,i-1)&&(!n||n(a,p))&&c.join(i-1),c})}function Pe(o,t,e=null){return new S(o,(n,r,a,i)=>{let s=n.doc.resolve(a),l=e instanceof Function?e(r):e;return s.node(-1).canReplaceWith(s.index(-1),s.indexAfter(-1),t)?n.tr.delete(a,i).setBlockType(a,a,t,l):null})}let In=o=>crypto.getRandomValues(new Uint8Array(o)),En=(o,t,e)=>{let n=(2<<Math.log(o.length-1)/Math.LN2)-1,r=-~(1.6*n*t/o.length);return(a=t)=>{let i="";for(;;){let s=e(r),l=r;for(;l--;)if(i+=o[s[l]&n]||"",i.length===a)return i}}},Ln=(o,t=21)=>En(o,t,In);const at=o=>Object.prototype.hasOwnProperty.call(o,"origin");class we extends Array{findThenRun(t,e){const n=this.findIndex(r=>at(r)&&r.origin===t);return n<0?this:(e(n),this)}configure(t,e){return this.findThenRun(t,n=>{this.splice(n,1,t(e))})}replace(t,e){return this.findThenRun(t,n=>{this.splice(n,1,e)})}remove(t){return this.findThenRun(t,e=>{this.splice(e,1)})}headless(){return this.filter(at).forEach(t=>{this.configure(t.origin,{headless:!0})}),this}static create(t){return new we(...t)}}Ln("abcedfghicklmn",10);const fo=o=>{const t=()=>async e=>{await e.wait(Pt);const n=o(e);e.update(At,r=>[...r,n]),t.plugin=n};return t},Cn=o=>(t,...e)=>{var n;const r=(n=o==null?void 0:o(t,...e))!=null?n:e;return Array.isArray(r)?r.filter(a=>a).join(" "):r},x=(o,t,e)=>[o,t,e],Be=(o,t)=>{try{const e=o.get(tn),n=o.get(nn);if(!n.css)throw rt();return{getClassName:Cn(t==null?void 0:t.className),getStyle:r=>t!=null&&t.headless?"":r(n),themeManager:e}}catch{throw rt()}},We=o=>{const t=e=>{const n=o(e);return n.origin=t,n};return t},Fe=(o,t)=>e=>{const n=e,r=(a,i)=>t((...s)=>a(o(...s),...s),i);return n.extend=r,n},ye=(...o)=>{const t=o.length;let e=t;for(;e--;)if(typeof o[e]!="function")throw new TypeError("Expected a function");return(...n)=>{let r=0,a=t?o[r](...n):n[0];for(;++r<t;)a=o[r](a);return a}},Ve=o=>async(t,e)=>{o==null||o.forEach(n=>t.pre.inject(n)),await e()},Ke=async(o,t)=>{const{ctx:e}=o;await e.wait(Yt),await t()},te=A(void 0,"getRemarkPluginsPipeCtx"),qe=async(o,t)=>{const{ctx:e,pipelineCtx:n}=o;await e.wait(Pt);const r=n.get(te);if(r){const a=r(e);e.update(At,i=>i.concat(a))}await t()},ne=A(void 0,"getSchemaPipeCtx"),re=A({},"Type"),Ue=async(o,t)=>{var e;const{ctx:n,pipelineCtx:r}=o,a=r.get(ne),i=(e=a==null?void 0:a(o.ctx))!=null?e:{};let s={},l={};if(i.node){s=i.node;const p=Object.entries(i.node);n.update(St,h=>[...h,...p])}if(i.mark){l=i.mark;const p=Object.entries(i.mark);n.update(Dt,h=>[...h,...p])}await n.wait(Zt);const c=n.get(J),d=Object.keys(s).map(p=>[p,c.nodes[p]]),f=Object.keys(l).map(p=>[p,c.marks[p]]),u=Object.fromEntries([...d,...f]);r.set(re,u),await t()},oe=A(void 0,"getCommandsPipeCtx"),Ge=async(o,t)=>{const{ctx:e,pipelineCtx:n}=o,r=n.get(oe);if(r){const a=n.get(re);r(a,e).forEach(([i,s])=>{e.get(me).create(i,s)})}await t()},ae=A(void 0,"getInputRulesPipeCtx"),Je=async(o,t)=>{const{ctx:e,pipelineCtx:n}=o,r=n.get(ae);if(r){const a=n.get(re);e.update(Qt,i=>[...i,...r(a,e)])}await t()},ie=A({},"shortcutsPipeCtx"),Ye=async(o,t)=>{const{pipelineCtx:e,ctx:n}=o,r=e.get(ie),a=e.get(G),i=(l,c)=>{var d,f;return(f=(d=a==null?void 0:a.keymap)==null?void 0:d[l])!=null?f:c},s=Object.entries(r).flatMap(([l,[c,d,f]])=>{const u=()=>n.get(me).call(c,f),p=i(l,d);return Array.isArray(p)?p.map(h=>({key:h,runner:u})):{key:p,runner:u}}).map(l=>[l.key,l.runner]);n.update(Ht,l=>l.concat(_e(Object.fromEntries(s)))),await t()},se=A(void 0,"getProsePluginsPipeCtx"),Ze=async(o,t)=>{const{pipelineCtx:e,ctx:n}=o,r=e.get(se);if(r){const a=e.get(re);n.update(Ht,i=>[...i,...r(a,n)])}await t()},le=A(void 0,"getViewPipeCtx"),Qe=async(o,t)=>{const{pipelineCtx:e,ctx:n}=o,r=e.get(le),a=e.get(G),i=a.view?a.view(n):r==null?void 0:r(n);if(i){const s=Object.entries(i).filter(([c])=>n.get(St).findIndex(d=>d[0]===c)!==-1),l=Object.entries(i).filter(([c])=>n.get(Dt).findIndex(d=>d[0]===c)!==-1);n.update(Xt,c=>[...c,...s]),n.update(en,c=>[...c,...l])}await t()},G=A({},"optionsPipeCtx"),Xe=A("","idPipeCtx"),et=async(o,t)=>{const{pipelineCtx:e}=o;e.inject(Xe).inject(G).inject(te).inject(ne).inject(re).inject(oe).inject(ae).inject(ie).inject(se).inject(le),await t()},Nn=o=>(t,e)=>{let n=-1;const r=a=>{if(a<=n)return Promise.reject(new Error("next() called multiple times"));n=a;let i=o[a];if(a===o.length&&(i=e),!i)return Promise.resolve();try{return Promise.resolve(i(t,()=>r(a+1)))}catch(s){return Promise.reject(s)}};return r(0)},tt=o=>{const t=Nn(o),e=Gt(),n=Jt(),r=new Ut(e,n);return(a,i)=>t({pre:a,ctx:i,pipelineCtx:r})},ce=(o,t)=>ye(We,Fe(o,ce))(e=>n=>async r=>{const a=async({pipelineCtx:i},s)=>{const l=Be(r,e),c=o(l,e),{id:d,commands:f,remarkPlugins:u,schema:p,inputRules:h,shortcuts:m,prosePlugins:w,view:b}=c,g={...e||{},view:e!=null&&e.view?v=>({[d]:e.view(v)}):void 0};i.set(Xe,d),i.set(G,g),i.set(te,u),i.set(ne,v=>({mark:{[d]:p(v)}})),f&&i.set(oe,(v,y)=>f(v[d],y)),h&&i.set(ae,(v,y)=>h(v[d],y)),m&&i.set(ie,m),w&&i.set(se,(v,y)=>w(v[d],y)),b&&i.set(le,v=>({[d]:b(v)})),await s()};await tt([et,Ve(t),Ke,a,qe,Ue,Ge,Je,Ye,Ze,Qe])(n,r)}),N=(o,t)=>ye(We,Fe(o,N))(e=>n=>async r=>{const a=async({pipelineCtx:i},s)=>{const l=Be(r,e),c=o(l,e),{id:d,commands:f,remarkPlugins:u,schema:p,inputRules:h,shortcuts:m,prosePlugins:w,view:b}=c,g={...e||{},view:e!=null&&e.view?v=>({[d]:e.view(v)}):void 0};i.set(Xe,d),i.set(G,g),i.set(te,u),i.set(ne,v=>({node:{[d]:p(v)}})),f&&i.set(oe,(v,y)=>f(v[d],y)),h&&i.set(ae,(v,y)=>h(v[d],y)),m&&i.set(ie,m),w&&i.set(se,(v,y)=>w(v[d],y)),b&&i.set(le,v=>({[d]:b(v)})),await s()};await tt([et,Ve(t),Ke,a,qe,Ue,Ge,Je,Ye,Ze,Qe])(n,r)}),Rt=(o,t)=>ye(We,Fe(o,Rt))(e=>n=>async r=>{const a=async({pipelineCtx:i},s)=>{const l=Be(r,e),c=o(l,e),{commands:d,remarkPlugins:f,schema:u,inputRules:p,shortcuts:h,prosePlugins:m,view:w}=c;i.set(G,e||{}),i.set(te,f),u&&i.set(ne,u),d&&i.set(oe,d),p&&i.set(ae,p),h&&i.set(ie,h),m&&i.set(se,m),w&&i.set(le,w),await s()};await tt([et,Ve(t),Ke,a,qe,Ue,Ge,Je,Ye,Ze,Qe])(n,r)});function Tn(o){return function(t,e){let{$from:n,$to:r,node:a}=t.selection;if(a&&a.isBlock||n.depth<2||!n.sameParent(r))return!1;let i=n.node(-1);if(i.type!=o)return!1;if(n.parent.content.size==0&&n.node(-1).childCount==n.indexAfter(-1)){if(n.depth==3||n.node(-3).type!=o||n.index(-2)!=n.node(-2).childCount-1)return!1;if(e){let d=k.empty,f=n.index(-1)?1:n.index(-2)?2:3;for(let w=n.depth-f;w>=n.depth-3;w--)d=k.from(n.node(w).copy(d));let u=n.indexAfter(-1)<n.node(-2).childCount?1:n.indexAfter(-2)<n.node(-3).childCount?2:3;d=d.append(k.from(o.createAndFill()));let p=n.before(n.depth-(f-1)),h=t.tr.replace(p,n.after(-u),new ge(d,4-f,0)),m=-1;h.doc.nodesBetween(p,h.doc.content.size,(w,b)=>{if(m>-1)return!1;w.isTextblock&&w.content.size==0&&(m=b+1)}),m>-1&&h.setSelection(Se.near(h.doc.resolve(m))),e(h.scrollIntoView())}return!0}let s=r.pos==n.end()?i.contentMatchAt(0).defaultType:null,l=t.tr.delete(n.pos,r.pos),c=s?[null,{type:s}]:void 0;return rn(l.doc,n.pos,2,c)?(e&&e(l.split(n.pos,2,c).scrollIntoView()),!0):!1}}function _n(o){return function(t,e){let{$from:n,$to:r}=t.selection,a=n.blockRange(r,i=>i.childCount>0&&i.firstChild.type==o);return a?e?n.node(a.depth-1).type==o?On(t,e,o,a):Pn(t,e,a):!0:!1}}function On(o,t,e,n){let r=o.tr,a=n.end,i=n.$to.end(n.depth);return a<i&&(r.step(new De(a-1,i,a,i,new ge(k.from(e.create(null,n.parent.copy())),1,0),1,!0)),n=new on(r.doc.resolve(n.$from.pos),r.doc.resolve(i),n.depth)),t(r.lift(n,an(n)).scrollIntoView()),!0}function Pn(o,t,e){let n=o.tr,r=e.parent;for(let p=e.end,h=e.endIndex-1,m=e.startIndex;h>m;h--)p-=r.child(h).nodeSize,n.delete(p-1,p+1);let a=n.doc.resolve(e.start),i=a.nodeAfter;if(n.mapping.map(e.end)!=e.start+a.nodeAfter.nodeSize)return!1;let s=e.startIndex==0,l=e.endIndex==r.childCount,c=a.node(-1),d=a.index(-1);if(!c.canReplace(d+(s?0:1),d+1,i.content.append(l?k.empty:k.from(r))))return!1;let f=a.pos,u=f+i.nodeSize;return n.step(new De(f-(s?1:0),u+(l?1:0),f+1,u-1,new ge((s?k.empty:k.from(r.copy(k.empty))).append(l?k.empty:k.from(r.copy(k.empty))),s?0:1,l?0:1),s?0:1)),t(n.scrollIntoView()),!0}function An(o){return function(t,e){let{$from:n,$to:r}=t.selection,a=n.blockRange(r,c=>c.childCount>0&&c.firstChild.type==o);if(!a)return!1;let i=a.startIndex;if(i==0)return!1;let s=a.parent,l=s.child(i-1);if(l.type!=o)return!1;if(e){let c=l.lastChild&&l.lastChild.type==s.type,d=k.from(c?o.create():null),f=new ge(k.from(o.create(null,k.from(s.type.create(null,d)))),c?3:1,0),u=a.start,p=a.end;e(t.tr.step(new De(u-(c?3:1),p,u,p,f,1,!0)).scrollIntoView())}return!0}}const it={}.hasOwnProperty;function Sn(o){const t=Object.create(null);if(!o||!o.type)throw new Error("mdast-util-definitions expected node");return He(o,"definition",n=>{const r=st(n.identifier);r&&!it.call(t,r)&&(t[r]=n)}),e;function e(n){const r=st(n);return r&&it.call(t,r)?t[r]:null}}function st(o){return String(o||"").toUpperCase()}function Dn(){return o=>{const t=Sn(o);He(o,(e,n,r)=>{if(e.type==="definition"&&r!==null&&typeof n=="number")return r.children.splice(n,1),[ot,n];if(e.type==="imageReference"||e.type==="linkReference"){const a=t(e.identifier);if(a&&r!==null&&typeof n=="number"){const i=e.type==="imageReference"?{type:"image",url:a.url,title:a.title,alt:e.alt}:{type:"link",url:a.url,title:a.title,children:e.children};return r.children[n]=i,[ot,n]}}})}}const M={HardBreak:"HardBreak",Blockquote:"Blockquote",BulletList:"BulletList",OrderedList:"OrderedList",CodeFence:"CodeFence",H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6",DowngradeHeading:"DowngradeHeading",Text:"Text",CodeInline:"CodeInline",Em:"Em",Bold:"Bold",NextListItem:"NextListItem",SinkListItem:"SinkListItem",LiftListItem:"LiftListItem"},lt="code_inline",ct=I("ToggleInlineCode"),Hn=ce(o=>({id:lt,schema:()=>({priority:100,code:!0,inclusive:!1,parseDOM:[{tag:"code"}],toDOM:t=>["code",{class:o.getClassName(t.attrs,"code-inline")}],parseMarkdown:{match:t=>t.type==="inlineCode",runner:(t,e,n)=>{t.openMark(n),t.addText(e.value),t.closeMark(n)}},toMarkdown:{match:t=>t.type.name===lt,runner:(t,e,n)=>{t.withMark(e,"inlineCode",n.text||"")}}}),commands:t=>[$(ct,()=>(e,n)=>{const{selection:r,tr:a}=e;if(r.empty)return!1;const{from:i,to:s}=r;return e.doc.rangeHasMark(i,s,t)?(n==null||n(a.removeMark(i,s,t)),!0):(Object.keys(e.schema.marks).filter(l=>l!==t.name).map(l=>e.schema.marks[l]).forEach(l=>{a.removeMark(i,s,l)}),n==null||n(a.addMark(i,s,t.create())),!0)})],shortcuts:{[M.CodeInline]:x(ct,"Mod-e")}})),xe="em",dt=I("ToggleItalic"),zn=ce(o=>({id:xe,schema:()=>({inclusive:!1,parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style",getAttrs:t=>t==="italic"}],toDOM:t=>["em",{class:o.getClassName(t.attrs,xe)}],parseMarkdown:{match:t=>t.type==="emphasis",runner:(t,e,n)=>{t.openMark(n),t.next(e.children),t.closeMark(n)}},toMarkdown:{match:t=>t.type.name===xe,runner:(t,e)=>{t.withMark(e,"emphasis")}}}),commands:t=>[$(dt,()=>ze(t))],shortcuts:{[M.Em]:x(dt,"Mod-i")}})),Rn=new _("MILKDOWN_LINK_INPUT"),jn=I("ToggleLink"),pt=I("ModifyLink"),de="link",Bn=ce((o,t)=>({id:de,schema:()=>({attrs:{href:{},title:{default:null}},parseDOM:[{tag:"a[href]",getAttrs:e=>{if(!(e instanceof HTMLElement))throw H(e);return{href:e.getAttribute("href"),title:e.getAttribute("title")}}}],toDOM:e=>["a",{...e.attrs,class:o.getClassName(e.attrs,de)}],parseMarkdown:{match:e=>e.type==="link",runner:(e,n,r)=>{const a=n.url,i=n.title;e.openMark(r,{href:a,title:i}),e.next(n.children),e.closeMark(r)}},toMarkdown:{match:e=>e.type.name===de,runner:(e,n)=>{e.withMark(n,"link",void 0,{title:n.attrs.title,url:n.attrs.href})}}}),commands:e=>[$(jn,(n="")=>ze(e,{href:n})),$(pt,(n="")=>(r,a)=>{var i;if(!a)return!1;const{marks:s}=r.schema;let l,c=-1;const{selection:d}=r,{from:f,to:u}=d;if(r.doc.nodesBetween(f,f===u?u+1:u,(g,v)=>{var y;if((y=s.link)!=null&&y.isInSet(g.marks))return l=g,c=v,!1}),!l)return!1;const p=l.marks.find(({type:g})=>g===e);if(!p)return!1;const h=c,m=c+l.nodeSize,{tr:w}=r,b=(i=s.link)==null?void 0:i.create({...p.attrs,href:n});return b?(a(w.removeMark(h,m,p).addMark(h,m,b).setSelection(new U(w.selection.$anchor)).scrollIntoView()),!0):!1})],prosePlugins:(e,n)=>{let r=!1;return[new P({key:Rn,view:a=>{var i,s,l;const c=o.themeManager.get("input-chip",{placeholder:(s=(i=t==null?void 0:t.input)==null?void 0:i.placeholder)!=null?s:"Input Web Link",buttonText:(l=t==null?void 0:t.input)==null?void 0:l.buttonText,onUpdate:p=>{n.get(me).call(pt,p)},calculatePosition:(p,h)=>{zt(p,h,(m,w,b,g)=>{const v=p.dom.parentElement;if(!v)throw je();const y=w.left-m.left;let D=m.left-g.left-(b.width-y)/2,V=m.bottom-g.top+14+v.scrollTop;return r&&(V=m.top-g.top-b.height-14+v.scrollTop),D<0&&(D=0),[V,D]})}});if(!c)return{};const d=p=>{const{selection:h,doc:m}=p.state,{from:w,to:b}=h;if(!p.hasFocus())return!1;if(h.empty&&h instanceof U&&b<m.content.size&&w<m.content.size&&m.rangeHasMark(w,w===b?b+1:b,e))return r=!1,!0;if(h instanceof fn){const{node:g}=h;if(g.type.name==="image"&&g.marks.findIndex(v=>v.type.name===de)>-1)return r=!0,!0}return!1},f=p=>{const{selection:h}=p.state;let m;const{from:w,to:b}=h;if(p.state.doc.nodesBetween(w,w===b?b+1:b,v=>{if(e.isInSet(v.marks))return m=v,!1}),!m)return;const g=m.marks.find(v=>v.type===e);return g?g.attrs.href:void 0},u=p=>{!p.editable||(d(p)?(c.show(p),c.update(f(p))):c.hide())};return c.init(a),u(a),{update:(p,h)=>{(h==null?void 0:h.doc.eq(p.state.doc))&&h.selection.eq(p.state.selection)||requestAnimationFrame(()=>{u(p)})},destroy:()=>{c.destroy()}}}})]}})),Me="strong",ut=I("ToggleBold"),Wn=ce(o=>({id:Me,schema:()=>({inclusive:!1,parseDOM:[{tag:"b"},{tag:"strong"},{style:"font-style",getAttrs:t=>t==="bold"}],toDOM:t=>["strong",{class:o.getClassName(t.attrs,Me)}],parseMarkdown:{match:t=>t.type==="strong",runner:(t,e,n)=>{t.openMark(n),t.next(e.children),t.closeMark(n)}},toMarkdown:{match:t=>t.type.name===Me,runner:(t,e)=>{t.withMark(e,"strong")}}}),commands:t=>[$(ut,()=>ze(t))],shortcuts:{[M.Bold]:x(ut,"Mod-b")}})),Fn=[Hn(),zn(),Wn(),Bn()],pe="blockquote",ft=I("WrapInBlockquote"),Vn=N(o=>({id:pe,schema:()=>({content:"block+",group:"block",defining:!0,parseDOM:[{tag:"blockquote"}],toDOM:t=>["blockquote",{class:o.getClassName(t.attrs,pe)},0],parseMarkdown:{match:({type:t})=>t===pe,runner:(t,e,n)=>{t.openNode(n).next(e.children).closeNode()}},toMarkdown:{match:t=>t.type.name===pe,runner:(t,e)=>{t.openNode("blockquote").next(e.content).closeNode()}}}),inputRules:t=>[ve(/^\s*>\s$/,t)],commands:t=>[$(ft,()=>Re(t))],shortcuts:{[M.Blockquote]:x(ft,"Mod-Shift-b")}})),ht=I("WrapInBulletList"),Kn=N(o=>{const t="bullet_list";return{id:t,schema:()=>({content:"listItem+",group:"block",attrs:{spread:{default:!1}},parseDOM:[{tag:"ul",getAttrs:e=>{if(!(e instanceof HTMLElement))throw H(e);return{spread:e.dataset.spread}}}],toDOM:e=>["ul",{"data-spread":e.attrs.spread,class:o.getClassName(e.attrs,"bullet-list")},0],parseMarkdown:{match:({type:e,ordered:n})=>e==="list"&&!n,runner:(e,n,r)=>{const a=n.spread!=null?`${n.spread}`:"false";e.openNode(r,{spread:a}).next(n.children).closeNode()}},toMarkdown:{match:e=>e.type.name===t,runner:(e,n)=>{e.openNode("list",void 0,{ordered:!1,spread:n.attrs.spread==="true"}).next(n.content).closeNode()}}}),inputRules:e=>[ve(/^\s*([-+*])\s$/,e)],commands:e=>[$(ht,()=>Re(e))],shortcuts:{[M.BulletList]:x(ht,"Mod-Alt-8")}}}),qn=["","javascript","typescript","bash","sql","json","html","css","c","cpp","java","ruby","python","go","rust","markdown"],Un=/^```(?<language>[a-z]*)?[\s\n]$/,Gn=/^~~~(?<language>[a-z]*)?[\s\n]$/,mt=I("TurnIntoCodeFence"),$e="fence",Jn=N((o,t)=>{const e=(t==null?void 0:t.languageList)||qn;return{id:$e,schema:n=>({content:"text*",group:"block",marks:"",defining:!0,code:!0,attrs:{language:{default:""},fold:{default:!0}},parseDOM:[{tag:"div.code-fence-container",preserveWhitespace:"full",getAttrs:r=>{var a;if(!(r instanceof HTMLElement))throw H(r);return{language:(a=r.querySelector("pre"))==null?void 0:a.dataset.language}},getContent:(r,a)=>{var i,s;if(!(r instanceof HTMLElement))throw H(r);const l=(s=(i=r.querySelector("pre"))==null?void 0:i.textContent)!=null?s:"";if(!l)return k.empty;const c=a.text(l);return k.from(c)}},{tag:"pre",preserveWhitespace:"full",getAttrs:r=>{if(!(r instanceof HTMLElement))throw H(r);return{language:r.dataset.language}}}],toDOM:r=>{const a=document.createElement("select");return e.forEach(i=>{const s=document.createElement("option");s.value=i,s.innerText=i||"--",i===r.attrs.language&&(s.selected=!0),a.appendChild(s)}),a.onchange=i=>{const s=i.target;if(!(s instanceof HTMLSelectElement))return;const l=n.get(ee);if(!l.editable){s.value=r.attrs.language;return}const{top:c,left:d}=s.getBoundingClientRect(),f=l.posAtCoords({top:c,left:d});if(!f)return;const{tr:u}=l.state;l.dispatch(u.setNodeMarkup(f.inside,void 0,{...r.attrs,language:s.value}))},["div",{class:"code-fence-container"},a,["pre",{"data-language":r.attrs.language,class:o.getClassName(r.attrs,"code-fence")},["code",{spellCheck:"false"},0]]]},parseMarkdown:{match:({type:r})=>r==="code",runner:(r,a,i)=>{const s=a.lang,l=a.value;r.openNode(i,{language:s}),l&&r.addText(l),r.closeNode()}},toMarkdown:{match:r=>r.type.name===$e,runner:(r,a)=>{var i;r.addNode("code",void 0,((i=a.content.firstChild)==null?void 0:i.text)||"",{lang:a.attrs.language})}}}),inputRules:n=>[Pe(Un,n,r=>{const[a,i]=r;if(a)return{language:i}}),Pe(Gn,n,r=>{const[a,i]=r;if(a)return{language:i}})],commands:n=>[$(mt,()=>Y(n))],shortcuts:{[M.CodeFence]:x(mt,"Mod-Alt-c")},view:()=>(n,r,a)=>{let i=n;const s=m=>{const{tr:w}=r.state;r.dispatch(w.setNodeMarkup(a(),void 0,{fold:!0,language:m}))},l=()=>{const{tr:m}=r.state;r.dispatch(m.setNodeMarkup(a(),void 0,{...i.attrs,fold:!0}))},c=()=>{const{tr:m}=r.state;r.dispatch(m.setNodeMarkup(a(),void 0,{...i.attrs,fold:!1}))},d=o.themeManager.get("code-fence",{onBlur:l,onFocus:c,onSelectLanguage:s,editable:()=>r.editable,languageList:e});if(!d)return{};const{dom:f,contentDOM:u,onUpdate:p,onDestroy:h}=d;return p(i),{dom:f,contentDOM:u,update:m=>m.type.name!==$e?!1:(i=m,p(i),!0),destroy:h}}}}),Yn=N(()=>({id:"doc",schema:()=>({content:"block+",parseMarkdown:{match:({type:o})=>o==="root",runner:(o,t,e)=>{o.injectRoot(t,e)}},toMarkdown:{match:o=>o.type.name==="doc",runner:(o,t)=>{o.openNode("root"),o.next(t.content)}}})})),gt=I("InsertHardbreak"),Zn=new _("MILKDOWN_HARDBREAK_FILTER"),Qn=N((o,t)=>{var e;const n=(e=t==null?void 0:t.notIn)!=null?e:["table","fence"];return{id:"hardbreak",schema:()=>({inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:"br"}],toDOM:r=>["br",{class:o.getClassName(r.attrs,"hardbreak")}],parseMarkdown:{match:({type:r})=>r==="break",runner:(r,a,i)=>{r.addNode(i)}},toMarkdown:{match:r=>r.type.name==="hardbreak",runner:r=>{r.addNode("break")}}}),commands:r=>[$(gt,()=>(a,i)=>{var s;const{selection:l,tr:c}=a;if(l.empty){const d=l.$from.node();if(d.childCount>0&&((s=d.lastChild)==null?void 0:s.type.name)==="hardbreak")return i==null||i(c.replaceRangeWith(l.to-1,l.to,a.schema.node("paragraph")).setSelection(Se.near(c.doc.resolve(l.to))).scrollIntoView()),!0}return i==null||i(c.setMeta("hardbreak",!0).replaceSelectionWith(r.create()).scrollIntoView()),!0})],shortcuts:{[M.HardBreak]:x(gt,"Shift-Enter")},prosePlugins:r=>[new P({key:Zn,filterTransaction:(a,i)=>{const s=a.getMeta("hardbreak"),[l]=a.steps;if(s&&l){const{from:c}=l,d=i.doc.resolve(c);let f=d.depth,u=!0;for(;f>0;)n.includes(d.node(f).type.name)&&(u=!1),f--;return u}return!0}}),new P({key:new _("MILKDOWN_HARDBREAK_MARKS"),appendTransaction:(a,i,s)=>{if(!a.length)return;const[l]=a;if(!l)return;const[c]=l.steps;if(l.getMeta("hardbreak")){if(!(c instanceof sn))return;const{from:d}=c;return s.tr.setNodeMarkup(d,r,void 0,[])}if(c instanceof ln){let d=s.tr;const{from:f,to:u}=c;return s.doc.nodesBetween(f,u,(p,h)=>{p.type===r&&(d=d.setNodeMarkup(h,r,void 0,[]))}),d}}})]}}),bt=Array(6).fill(0).map((o,t)=>t+1),B=I("TurnIntoHeading"),vt=I("DowngradeHeading"),Ie=new _("MILKDOWN_HEADING_ID"),Xn=new _("MILKDOWN_HEADING_HASH"),er=o=>o.textContent.replace(/[\p{P}\p{S}]/gu,"").replace(/\s/g,"-").toLowerCase().trim(),tr=(o,t,e)=>{let n=!1;const r=(a,i)=>{const s=a.tr.setMeta("addToHistory",!1);let l=!1;a.doc.descendants((c,d)=>{if(c.type===t&&!n){if(c.textContent.trim().length===0)return;const f=c.attrs,u=e(c);f.id!==u&&(l=!0,s.setMeta(Ie,!0).setNodeMarkup(d,void 0,{...f,id:u}))}}),l&&i(s)};return new P({key:Ie,props:{handleDOMEvents:{compositionstart:()=>(n=!0,!1),compositionend:()=>{n=!1;const a=o.get(ee);return setTimeout(()=>{r(a.state,i=>a.dispatch(i))},0),!1}}},appendTransaction:(a,i,s)=>{let l=null;return a.every(c=>!c.getMeta(Ie))&&a.some(c=>c.docChanged)&&r(s,c=>{l=c}),l},view:a=>{const i=a.state.doc;let s=a.state.tr.setMeta("addToHistory",!1);return i.descendants((l,c)=>{l.type.name==="heading"&&l.attrs.level&&(l.attrs.id||(s=s.setNodeMarkup(c,void 0,{...l.attrs,id:e(l)})))}),a.dispatch(s),{}}})},nr=(o,t,e)=>new P({key:Xn,state:{init:()=>q.empty,apply:n=>{var r;const a=o.get(ee);if(!((r=a.hasFocus)!=null&&r.call(a))||!a.editable)return q.empty;const{$from:i}=n.selection,s=i.node();if(s.type!==t)return q.empty;const l=s.attrs.level,c=u=>Array(u).fill(0).map(p=>"#").join(""),d=document.createElement("span");d.textContent=c(l),d.contentEditable="false",e.themeManager.onFlush(()=>{const u=e.getStyle(({css:p})=>{const h=F(e.themeManager);return p`
                            margin-right: 4px;
                            color: ${h("primary")};
                        `});u&&(d.className=u)});const f=Oe.widget(i.before()+1,d,{side:-1});return q.create(n.doc,[f])}},props:{handleDOMEvents:{focus:n=>{const r=cn(n.state.tr);return n.dispatch(r),!1}},decorations(n){return this.getState(n)}}}),rr=N((o,t)=>{var e,n;const r="heading",a=(e=t==null?void 0:t.getId)!=null?e:er,i=(n=t==null?void 0:t.displayHashtag)!=null?n:!0;return{id:r,schema:()=>({content:"inline*",group:"block",defining:!0,attrs:{id:{default:""},level:{default:1}},parseDOM:bt.map(s=>({tag:`h${s}`,getAttrs:l=>{if(!(l instanceof HTMLElement))throw H(l);return{level:s,id:l.id}}})),toDOM:s=>[`h${s.attrs.level}`,{id:s.attrs.id||a(s),class:o.getClassName(s.attrs,`heading h${s.attrs.level}`)},0],parseMarkdown:{match:({type:s})=>s===r,runner:(s,l,c)=>{const d=l.depth;s.openNode(c,{level:d}),s.next(l.children),s.closeNode()}},toMarkdown:{match:s=>s.type.name===r,runner:(s,l)=>{var c;if(s.openNode("heading",void 0,{depth:l.attrs.level}),l.childCount>=1&&((c=l.lastChild)==null?void 0:c.type.name)==="hardbreak"){const d=[];l.content.forEach((f,u,p)=>{p!==l.childCount-1&&d.push(f)}),s.next(k.fromArray(d))}else s.next(l.content);s.closeNode()}}}),inputRules:(s,l)=>bt.map(c=>Pe(new RegExp(`^(#{1,${c}})\\s$`),s,()=>{const d=l.get(ee),{$from:f}=d.state.selection,u=f.node();if(u.type.name==="heading"){let p=Number(u.attrs.level)+Number(c);return p>6&&(p=6),{level:p}}return{level:c}})),commands:(s,l)=>[$(B,(c=1)=>c<1?Y(c===0&&l.get(J).nodes.paragraph||s):Y(c===0&&l.get(J).nodes.paragraph||s,{level:c})),$(vt,()=>(c,d,f)=>{const{$from:u}=c.selection,p=u.node();if(p.type!==s||!c.selection.empty||u.parentOffset!==0)return!1;const h=p.attrs.level-1;return h?(d==null||d(c.tr.setNodeMarkup(c.selection.$from.before(),void 0,{...p.attrs,level:h})),!0):Y(l.get(J).nodes.paragraph||s)(c,d,f)})],shortcuts:{[M.H1]:x(B,"Mod-Alt-1",1),[M.H2]:x(B,"Mod-Alt-2",2),[M.H3]:x(B,"Mod-Alt-3",3),[M.H4]:x(B,"Mod-Alt-4",4),[M.H5]:x(B,"Mod-Alt-5",5),[M.H6]:x(B,"Mod-Alt-6",6),[M.DowngradeHeading]:x(vt,["Backspace","Delete"])},prosePlugins:(s,l)=>{const c=[tr(l,s,a)];return i&&c.push(nr(l,s,o)),c}}}),Ee="hr",or=I("InsertHr"),ar=N(o=>({id:Ee,schema:()=>({group:"block",parseDOM:[{tag:"hr"}],toDOM:t=>["hr",{class:o.getClassName(t.attrs,Ee)}],parseMarkdown:{match:({type:t})=>t==="thematicBreak",runner:(t,e,n)=>{t.addNode(n)}},toMarkdown:{match:t=>t.type.name===Ee,runner:t=>{t.addNode("thematicBreak")}}}),inputRules:t=>[new S(/^(?:---|___\s|\*\*\*\s)$/,(e,n,r,a)=>{const{tr:i}=e;return n[0]&&i.replaceWith(r-1,a,t.create()),i})],commands:(t,e)=>[$(or,()=>(n,r)=>{if(!r)return!0;const a=e.get(J).node("paragraph"),{tr:i,selection:s}=n,{from:l}=s,c=t.create();if(!c)return!0;const d=i.replaceSelectionWith(c).insert(l,a),f=Se.findFrom(d.doc.resolve(l),1,!0);return f&&r(d.setSelection(f).scrollIntoView()),!0})]})),wt=I("ModifyImage"),ir=I("InsertImage"),ue="image",sr=new _("MILKDOWN_IMAGE_INPUT"),lr=N((o,t)=>({id:"image",schema:()=>({inline:!0,group:"inline",selectable:!0,draggable:!0,marks:"",atom:!0,defining:!0,isolating:!0,attrs:{src:{default:""},alt:{default:""},title:{default:""}},parseDOM:[{tag:"img[src]",getAttrs:e=>{if(!(e instanceof HTMLElement))throw H(e);return{src:e.getAttribute("src")||"",alt:e.getAttribute("alt")||"",title:e.getAttribute("title")||e.getAttribute("alt")||""}}}],toDOM:e=>["img",{...e.attrs,class:o.getClassName(e.attrs,ue)}],parseMarkdown:{match:({type:e})=>e===ue,runner:(e,n,r)=>{const a=n.url,i=n.alt,s=n.title;e.addNode(r,{src:a,alt:i,title:s})}},toMarkdown:{match:e=>e.type.name===ue,runner:(e,n)=>{e.addNode("image",void 0,void 0,{title:n.attrs.title,url:n.attrs.src,alt:n.attrs.alt})}}}),commands:e=>[$(ir,(n="")=>(r,a)=>{if(!a)return!0;const{tr:i}=r,s=e.create({src:n});if(!s)return!0;const l=i.replaceSelectionWith(s);return a(l.scrollIntoView()),!0}),$(wt,(n="")=>(r,a)=>{const i=ke(r.selection,e);if(!i)return!1;const{tr:s}=r;return a==null||a(s.setNodeMarkup(i.pos,void 0,{...i.node.attrs,loading:!0,src:n}).scrollIntoView()),!0})],inputRules:e=>[new S(/!\[(?<alt>.*?)]\((?<filename>.*?)\s*(?="|\))"?(?<title>[^"]+)?"?\)/,(n,r,a,i)=>{const[s,l,c="",d]=r,{tr:f}=n;return s&&f.replaceWith(a,i,e.create({src:c,alt:l,title:d})),f})],view:()=>e=>{var n,r;let a=e;const i=(n=t==null?void 0:t.placeholder)!=null?n:"Add an Image",s=(r=t==null?void 0:t.isBlock)!=null?r:!1,l=o.themeManager.get("image",{placeholder:i,isBlock:s});if(!l)return{};const{dom:c,onUpdate:d}=l;return d(a),{dom:c,update:f=>f.type.name!==ue?!1:(a=f,d(a),!0),selectNode:()=>{c.classList.add("ProseMirror-selectednode")},deselectNode:()=>{c.classList.remove("ProseMirror-selectednode")}}},prosePlugins:(e,n)=>[new P({key:sr,view:r=>{var a,i,s;const l=o.themeManager.get("input-chip",{placeholder:(i=(a=t==null?void 0:t.input)==null?void 0:a.placeholder)!=null?i:"Input Image Link",buttonText:(s=t==null?void 0:t.input)==null?void 0:s.buttonText,onUpdate:u=>{n.get(me).call(wt,u)}});if(!l)return{};const c=u=>Boolean(u.hasFocus()&&e&&ke(u.state.selection,e)),d=u=>{const p=ke(u.state.selection,e);return p?p.node.attrs.src:void 0},f=u=>{!u.editable||(c(u)?(l.show(u),l.update(d(u))):l.hide())};return l.init(r),f(r),{update:(u,p)=>{(p==null?void 0:p.doc.eq(u.state.doc))&&p.selection.eq(u.state.selection)||f(u)},destroy:()=>{l.destroy()}}}})]})),yt="list_item",kt=I("SplitListItem"),xt=I("SinkListItem"),Mt=I("LiftListItem"),cr=new _("MILKDOWN_KEEP_LIST_ORDER"),dr=o=>{const t=(e,n)=>{const r=dn("ordered_list",e.schema);let a=e.tr;e.doc.descendants((i,s,l,c)=>{if(i.type===o&&(l==null?void 0:l.type)===r){let d=!1;const f={...i.attrs};i.attrs.listType!=="ordered"&&(f.listType="ordered",d=!0);const u=l==null?void 0:l.maybeChild(0);if(u&&u.type===o&&u.attrs.listType==="ordered"){const p=u.attrs.label;f.label=`${Number(p.slice(0,-1))+c}.`,d=!0}i.attrs.label==="\u2022"&&(f.label=`${c+1}.`,d=!0),d&&(a=a.setNodeMarkup(s,void 0,f))}}),n(a)};return new P({key:cr,appendTransaction:(e,n,r)=>{let a=null;return e.some(i=>i.docChanged)&&t(r,i=>{a=i}),a}})},pr=N(o=>({id:yt,schema:()=>({group:"listItem",content:"paragraph block*",attrs:{label:{default:"\u2022"},listType:{default:"bullet"},spread:{default:"true"}},defining:!0,parseDOM:[{tag:"li.list-item",getAttrs:t=>{if(!(t instanceof HTMLElement))throw H(t);return{label:t.dataset.label,listType:t.dataset["list-type"],spread:t.dataset.spread}},contentElement:"div.list-item_body"},{tag:"li"}],toDOM:t=>["li",{class:o.getClassName(t.attrs,"list-item"),"data-label":t.attrs.label,"data-list-type":t.attrs.listType,"data-spread":t.attrs.spread},["div",{class:o.getClassName(t.attrs,"list-item_label")},t.attrs.label],["div",{class:o.getClassName(t.attrs,"list-item_body")},0]],parseMarkdown:{match:({type:t,checked:e})=>t==="listItem"&&e===null,runner:(t,e,n)=>{const r=e.label!=null?`${e.label}.`:"\u2022",a=e.label!=null?"ordered":"bullet",i=e.spread!=null?`${e.spread}`:"true";t.openNode(n,{label:r,listType:a,spread:i}),t.next(e.children),t.closeNode()}},toMarkdown:{match:t=>t.type.name===yt,runner:(t,e)=>{t.openNode("listItem",void 0,{spread:e.attrs.spread==="true"}),t.next(e.content),t.closeNode()}}}),inputRules:t=>[ve(/^\s*([-+*])\s$/,t)],commands:t=>[$(kt,()=>Tn(t)),$(xt,()=>An(t)),$(Mt,()=>_n(t))],shortcuts:{[M.NextListItem]:x(kt,"Enter"),[M.SinkListItem]:x(xt,"Mod-]"),[M.LiftListItem]:x(Mt,"Mod-[")},prosePlugins:t=>[dr(t)]})),$t=I("WrapInOrderedList"),It="ordered_list",ur=N(o=>({id:It,schema:()=>({content:"listItem+",group:"block",attrs:{order:{default:1},spread:{default:!1}},parseDOM:[{tag:"ol",getAttrs:t=>{if(!(t instanceof HTMLElement))throw H(t);return{spread:t.dataset.spread,order:t.hasAttribute("start")?Number(t.getAttribute("start")):1}}}],toDOM:t=>["ol",{...t.attrs.order===1?{}:t.attrs.order,"data-spread":t.attrs.spread,class:o.getClassName(t.attrs,"ordered-list")},0],parseMarkdown:{match:({type:t,ordered:e})=>t==="list"&&!!e,runner:(t,e,n)=>{const r=e.spread!=null?`${e.spread}`:"true";t.openNode(n,{spread:r}).next(e.children).closeNode()}},toMarkdown:{match:t=>t.type.name===It,runner:(t,e)=>{t.openNode("list",void 0,{ordered:!0,start:1,spread:e.attrs.spread==="true"}),t.next(e.content),t.closeNode()}}}),inputRules:t=>[ve(/^(\d+)\.\s$/,t,e=>({order:Number(e[1])}),(e,n)=>n.childCount+n.attrs.order===Number(e[1]))],commands:t=>[$($t,()=>Re(t))],shortcuts:{[M.OrderedList]:x($t,"Mod-Alt-7")}})),Et=I("TurnIntoText"),Lt="paragraph",fr=N(o=>({id:Lt,schema:()=>({content:"inline*",group:"block",parseDOM:[{tag:"p"}],toDOM:t=>["p",{class:o.getClassName(t.attrs,Lt)},0],parseMarkdown:{match:t=>t.type==="paragraph",runner:(t,e,n)=>{t.openNode(n),e.children?t.next(e.children):t.addText(e.value),t.closeNode()}},toMarkdown:{match:t=>t.type.name==="paragraph",runner:(t,e)=>{var n;if(t.openNode("paragraph"),e.childCount>=1&&((n=e.lastChild)==null?void 0:n.type.name)==="hardbreak"){const r=[];e.content.forEach((a,i,s)=>{s!==e.childCount-1&&r.push(a)}),t.next(k.fromArray(r))}else t.next(e.content);t.closeNode()}}}),commands:t=>[$(Et,()=>Y(t))],shortcuts:{[M.Text]:x(Et,"Mod-Alt-0")}})),hr=N(()=>({id:"text",schema:()=>({group:"inline",parseMarkdown:{match:({type:o})=>o==="text",runner:(o,t)=>{o.addText(t.value)}},toMarkdown:{match:o=>o.type.name==="text",runner:(o,t)=>{o.addNode("text",void 0,t.text)}}})})),mr=[Yn(),fr(),Qn(),Vn(),Jn(),Kn(),ur(),pr(),rr(),ar(),lr(),hr()],gr=()=>{function o(t){He(t,"list",e=>{var n;if(e.ordered){const r=(n=e.start)!=null?n:1;e.children.forEach((a,i)=>{a.label=i+r});return}})}return o},br=o=>!!o.children,vr=o=>o.type==="html";function wr(o,t){return e(o,0,null)[0];function e(n,r,a){if(br(n)){const i=[];for(let s=0,l=n.children.length;s<l;s++){const c=n.children[s];if(c){const d=e(c,s,n);if(d)for(let f=0,u=d.length;f<u;f++){const p=d[f];p&&i.push(p)}}}n.children=i}return t(n,r,a)}}const yr=()=>{function o(t){wr(t,e=>vr(e)?[]:[e])}return o},kr=new _("MILKDOWN_INLINE_NODES_CURSOR"),xr=()=>{let o=!1;const t=new P({key:kr,state:{init(){return!1},apply(e){if(!e.selection.empty)return!1;const n=e.selection.$from,r=n.nodeBefore,a=n.nodeAfter;return!!(r&&a&&r.isInline&&!r.isText&&a.isInline&&!a.isText)}},props:{handleDOMEvents:{compositionend:(e,n)=>o?(o=!1,requestAnimationFrame(()=>{if(t.getState(e.state)){const r=e.state.selection.from;n.preventDefault(),e.dispatch(e.state.tr.insertText(n.data||"",r))}}),!0):!1,compositionstart:e=>(t.getState(e.state)&&(o=!0),!1),beforeinput:(e,n)=>{if(t.getState(e.state)&&n instanceof InputEvent&&n.data&&!o){const r=e.state.selection.from;return n.preventDefault(),e.dispatch(e.state.tr.insertText(n.data||"",r)),!0}return!1}},decorations(e){if(t.getState(e)){const n=e.selection.$from.pos,r=document.createElement("span"),a=Oe.widget(n,r,{side:-1}),i=document.createElement("span"),s=Oe.widget(n,i);return setTimeout(()=>{r.contentEditable="true",i.contentEditable="true"}),q.create(e.doc,[a,s])}return q.empty}}});return t},Le=/\[(?<span>((www|https:\/\/|http:\/\/)\S+))]\((?<url>\S+)\)/,X="\u2205",Ct="\u2042",Mr="\u2234",$r=new RegExp(`\\\\(?=[^\\w\\s${X}\\\\]|_)`,"g"),Ir=o=>{let t=o,e=t.match(Le);for(;e&&e.groups;){const{span:n}=e.groups;t=t.replace(Le,n),e=t.match(Le)}return t},Er=(o,t,e)=>{const n=o.split(""),r=n[t];return n[t]&&n[e]&&(n[t]=n[e],n[e]=r),n.join("").toString()},Lr=o=>{const t=["*","_"];let e=o.indexOf(X);for(;t.includes(o[e-1]||"")&&t.includes(o[e+1]||"");)o=Er(o,e,e+1),e=e+1;return o},Cr=o=>o.slice(0,-1),Nr=o=>o.replace($r,""),Tr=ye(Cr,Nr,Lr,Ir),_r=o=>{const t=o.indexOf(X),e=o.charAt(t-1),n=o.charAt(t+1),r=/[^\w]|_/;return n?e&&r.test(e)&&r.test(n)?Ct:Mr:Ct},Or=(o,t,e)=>{let n=t,r=!1;return o.descendants(a=>{var i;if(r)return!1;if(a.isText){const s=(i=a.text)==null?void 0:i.indexOf(e);if(s!=null&&s>=0)return r=!0,n+=s,!1}n+=a.nodeSize}),n},Ce=new _("MILKDOWN_INLINE_SYNC"),Pr=o=>{const t=n=>{var r;const{selection:a}=n,{$from:i}=a,s=i.node(),l=n.schema.topNodeType.create(void 0,s),c=Boolean((r=s.type.spec.content)==null?void 0:r.includes("inline")),d=o.get(pn),f=o.get(un)(l),u=Tr(f),p=_r(u),h=d(u.replace(X,p));if(!h)return null;const m=h.firstChild;return!m||s.type!==m.type?null:(m.attrs={...s.attrs},m.descendants(w=>{var b;const g=w.marks.find(v=>v.type.name==="link");g&&((b=w.text)==null?void 0:b.includes(p))&&g.attrs.href.includes(p)&&(g.attrs.href=g.attrs.href.replace(p,""))}),{text:u,isInlineBlock:c,prevNode:s,nextNode:m,placeholder:p})},e=(n,r,a)=>{let i=n.tr.setMeta(Ce,!0).insertText(X,n.selection.from);const s=n.apply(i),l=t(s);if(!l)return;const{$from:c}=s.selection,d=c.before(),f=c.after(),u=Or(l.nextNode,d,l.placeholder);i=i.replaceWith(d,f,l.nextNode).setNodeMarkup(d,void 0,a).delete(u+1,u+2),i=i.setSelection(U.near(i.doc.resolve(u+1))),r(i)};return new P({key:Ce,state:{init:()=>null,apply:(n,r,a,i)=>{if(!n.docChanged||n.getMeta(Ce))return null;const s=t(i);if(!s)return null;const{isInlineBlock:l,prevNode:c,nextNode:d}=s;return!l||!d||c.type!==d.type||c.eq(d)||requestAnimationFrame(()=>{const{dispatch:f,state:u}=o.get(ee);e(u,f,c.attrs)}),null}}})},Ar=[Rt(()=>({prosePlugins:(o,t)=>[xr(),Pr(t)],remarkPlugins:()=>[Dn,yr,gr]}))()],Sr=we.create([...mr,...Fn]),ho=we.create([...Ar,...Sr]);var he=200,E=function(){};E.prototype.append=function(t){return t.length?(t=E.from(t),!this.length&&t||t.length<he&&this.leafAppend(t)||this.length<he&&t.leafPrepend(this)||this.appendInner(t)):this};E.prototype.prepend=function(t){return t.length?E.from(t).append(this):this};E.prototype.appendInner=function(t){return new Dr(this,t)};E.prototype.slice=function(t,e){return t===void 0&&(t=0),e===void 0&&(e=this.length),t>=e?E.empty:this.sliceInner(Math.max(0,t),Math.min(this.length,e))};E.prototype.get=function(t){if(!(t<0||t>=this.length))return this.getInner(t)};E.prototype.forEach=function(t,e,n){e===void 0&&(e=0),n===void 0&&(n=this.length),e<=n?this.forEachInner(t,e,n,0):this.forEachInvertedInner(t,e,n,0)};E.prototype.map=function(t,e,n){e===void 0&&(e=0),n===void 0&&(n=this.length);var r=[];return this.forEach(function(a,i){return r.push(t(a,i))},e,n),r};E.from=function(t){return t instanceof E?t:t&&t.length?new jt(t):E.empty};var jt=function(o){function t(n){o.call(this),this.values=n}o&&(t.__proto__=o),t.prototype=Object.create(o&&o.prototype),t.prototype.constructor=t;var e={length:{configurable:!0},depth:{configurable:!0}};return t.prototype.flatten=function(){return this.values},t.prototype.sliceInner=function(r,a){return r==0&&a==this.length?this:new t(this.values.slice(r,a))},t.prototype.getInner=function(r){return this.values[r]},t.prototype.forEachInner=function(r,a,i,s){for(var l=a;l<i;l++)if(r(this.values[l],s+l)===!1)return!1},t.prototype.forEachInvertedInner=function(r,a,i,s){for(var l=a-1;l>=i;l--)if(r(this.values[l],s+l)===!1)return!1},t.prototype.leafAppend=function(r){if(this.length+r.length<=he)return new t(this.values.concat(r.flatten()))},t.prototype.leafPrepend=function(r){if(this.length+r.length<=he)return new t(r.flatten().concat(this.values))},e.length.get=function(){return this.values.length},e.depth.get=function(){return 0},Object.defineProperties(t.prototype,e),t}(E);E.empty=new jt([]);var Dr=function(o){function t(e,n){o.call(this),this.left=e,this.right=n,this.length=e.length+n.length,this.depth=Math.max(e.depth,n.depth)+1}return o&&(t.__proto__=o),t.prototype=Object.create(o&&o.prototype),t.prototype.constructor=t,t.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},t.prototype.getInner=function(n){return n<this.left.length?this.left.get(n):this.right.get(n-this.left.length)},t.prototype.forEachInner=function(n,r,a,i){var s=this.left.length;if(r<s&&this.left.forEachInner(n,r,Math.min(a,s),i)===!1||a>s&&this.right.forEachInner(n,Math.max(r-s,0),Math.min(this.length,a)-s,i+s)===!1)return!1},t.prototype.forEachInvertedInner=function(n,r,a,i){var s=this.left.length;if(r>s&&this.right.forEachInvertedInner(n,r-s,Math.max(a,s)-s,i+s)===!1||a<s&&this.left.forEachInvertedInner(n,Math.min(r,s),a,i)===!1)return!1},t.prototype.sliceInner=function(n,r){if(n==0&&r==this.length)return this;var a=this.left.length;return r<=a?this.left.slice(n,r):n>=a?this.right.slice(n-a,r-a):this.left.slice(n,a).append(this.right.slice(0,r-a))},t.prototype.leafAppend=function(n){var r=this.right.leafAppend(n);if(r)return new t(this.left,r)},t.prototype.leafPrepend=function(n){var r=this.left.leafPrepend(n);if(r)return new t(r,this.right)},t.prototype.appendInner=function(n){return this.left.depth>=Math.max(this.right.depth,n.depth)+1?new t(this.left,new t(this.right,n)):new t(this,n)},t}(E),Bt=E;const Hr=500;class T{constructor(t,e){this.items=t,this.eventCount=e}popEvent(t,e){if(this.eventCount==0)return null;let n=this.items.length;for(;;n--)if(this.items.get(n-1).selection){--n;break}let r,a;e&&(r=this.remapping(n,this.items.length),a=r.maps.length);let i=t.tr,s,l,c=[],d=[];return this.items.forEach((f,u)=>{if(!f.step){r||(r=this.remapping(n,u+1),a=r.maps.length),a--,d.push(f);return}if(r){d.push(new O(f.map));let p=f.step.map(r.slice(a)),h;p&&i.maybeStep(p).doc&&(h=i.mapping.maps[i.mapping.maps.length-1],c.push(new O(h,void 0,void 0,c.length+d.length))),a--,h&&r.appendMap(h,a)}else i.maybeStep(f.step);if(f.selection)return s=r?f.selection.map(r.slice(a)):f.selection,l=new T(this.items.slice(0,n).append(d.reverse().concat(c)),this.eventCount-1),!1},this.items.length,0),{remaining:l,transform:i,selection:s}}addTransform(t,e,n,r){let a=[],i=this.eventCount,s=this.items,l=!r&&s.length?s.get(s.length-1):null;for(let d=0;d<t.steps.length;d++){let f=t.steps[d].invert(t.docs[d]),u=new O(t.mapping.maps[d],f,e),p;(p=l&&l.merge(u))&&(u=p,d?a.pop():s=s.slice(0,s.length-1)),a.push(u),e&&(i++,e=void 0),r||(l=u)}let c=i-n.depth;return c>Rr&&(s=zr(s,c),i-=c),new T(s.append(a),i)}remapping(t,e){let n=new hn;return this.items.forEach((r,a)=>{let i=r.mirrorOffset!=null&&a-r.mirrorOffset>=t?n.maps.length-r.mirrorOffset:void 0;n.appendMap(r.map,i)},t,e),n}addMaps(t){return this.eventCount==0?this:new T(this.items.append(t.map(e=>new O(e))),this.eventCount)}rebased(t,e){if(!this.eventCount)return this;let n=[],r=Math.max(0,this.items.length-e),a=t.mapping,i=t.steps.length,s=this.eventCount;this.items.forEach(u=>{u.selection&&s--},r);let l=e;this.items.forEach(u=>{let p=a.getMirror(--l);if(p==null)return;i=Math.min(i,p);let h=a.maps[p];if(u.step){let m=t.steps[p].invert(t.docs[p]),w=u.selection&&u.selection.map(a.slice(l+1,p));w&&s++,n.push(new O(h,m,w))}else n.push(new O(h))},r);let c=[];for(let u=e;u<i;u++)c.push(new O(a.maps[u]));let d=this.items.slice(0,r).append(c).append(n),f=new T(d,s);return f.emptyItemCount()>Hr&&(f=f.compress(this.items.length-n.length)),f}emptyItemCount(){let t=0;return this.items.forEach(e=>{e.step||t++}),t}compress(t=this.items.length){let e=this.remapping(0,t),n=e.maps.length,r=[],a=0;return this.items.forEach((i,s)=>{if(s>=t)r.push(i),i.selection&&a++;else if(i.step){let l=i.step.map(e.slice(n)),c=l&&l.getMap();if(n--,c&&e.appendMap(c,n),l){let d=i.selection&&i.selection.map(e.slice(n));d&&a++;let f=new O(c.invert(),l,d),u,p=r.length-1;(u=r.length&&r[p].merge(f))?r[p]=u:r.push(f)}}else i.map&&n--},this.items.length,0),new T(Bt.from(r.reverse()),a)}}T.empty=new T(Bt.empty,0);function zr(o,t){let e;return o.forEach((n,r)=>{if(n.selection&&t--==0)return e=r,!1}),o.slice(e)}class O{constructor(t,e,n,r){this.map=t,this.step=e,this.selection=n,this.mirrorOffset=r}merge(t){if(this.step&&t.step&&!t.selection){let e=t.step.merge(this.step);if(e)return new O(e.getMap().invert(),e,this.selection)}}}class z{constructor(t,e,n,r){this.done=t,this.undone=e,this.prevRanges=n,this.prevTime=r}}const Rr=20;function jr(o,t,e,n){let r=e.getMeta(j),a;if(r)return r.historyState;e.getMeta(Wr)&&(o=new z(o.done,o.undone,null,0));let i=e.getMeta("appendedTransaction");if(e.steps.length==0)return o;if(i&&i.getMeta(j))return i.getMeta(j).redo?new z(o.done.addTransform(e,void 0,n,fe(t)),o.undone,Nt(e.mapping.maps[e.steps.length-1]),o.prevTime):new z(o.done,o.undone.addTransform(e,void 0,n,fe(t)),null,o.prevTime);if(e.getMeta("addToHistory")!==!1&&!(i&&i.getMeta("addToHistory")===!1)){let s=o.prevTime==0||!i&&(o.prevTime<(e.time||0)-n.newGroupDelay||!Br(e,o.prevRanges)),l=i?Ne(o.prevRanges,e.mapping):Nt(e.mapping.maps[e.steps.length-1]);return new z(o.done.addTransform(e,s?t.selection.getBookmark():void 0,n,fe(t)),T.empty,l,e.time)}else return(a=e.getMeta("rebased"))?new z(o.done.rebased(e,a),o.undone.rebased(e,a),Ne(o.prevRanges,e.mapping),o.prevTime):new z(o.done.addMaps(e.mapping.maps),o.undone.addMaps(e.mapping.maps),Ne(o.prevRanges,e.mapping),o.prevTime)}function Br(o,t){if(!t)return!1;if(!o.docChanged)return!0;let e=!1;return o.mapping.maps[0].forEach((n,r)=>{for(let a=0;a<t.length;a+=2)n<=t[a+1]&&r>=t[a]&&(e=!0)}),e}function Nt(o){let t=[];return o.forEach((e,n,r,a)=>t.push(r,a)),t}function Ne(o,t){if(!o)return null;let e=[];for(let n=0;n<o.length;n+=2){let r=t.map(o[n],1),a=t.map(o[n+1],-1);r<=a&&e.push(r,a)}return e}function Wt(o,t,e,n){let r=fe(t),a=j.get(t).spec.config,i=(n?o.undone:o.done).popEvent(t,r);if(!i)return;let s=i.selection.resolve(i.transform.doc),l=(n?o.done:o.undone).addTransform(i.transform,t.selection.getBookmark(),a,r),c=new z(n?l:i.remaining,n?i.remaining:l,null,0);e(i.transform.setSelection(s).setMeta(j,{redo:n,historyState:c}).scrollIntoView())}let Te=!1,Tt=null;function fe(o){let t=o.plugins;if(Tt!=t){Te=!1,Tt=t;for(let e=0;e<t.length;e++)if(t[e].spec.historyPreserveItems){Te=!0;break}}return Te}const j=new _("history"),Wr=new _("closeHistory");function Fr(o={}){return o={depth:o.depth||100,newGroupDelay:o.newGroupDelay||500},new P({key:j,state:{init(){return new z(T.empty,T.empty,null,0)},apply(t,e,n){return jr(e,n,t,o)}},config:o,props:{handleDOMEvents:{beforeinput(t,e){let n=e.inputType,r=n=="historyUndo"?Ft:n=="historyRedo"?Ae:null;return r?(e.preventDefault(),r(t.state,t.dispatch)):!1}}}})}const Ft=(o,t)=>{let e=j.getState(o);return!e||e.done.eventCount==0?!1:(t&&Wt(e,o,t,!1),!0)},Ae=(o,t)=>{let e=j.getState(o);return!e||e.undone.eventCount==0?!1:(t&&Wt(e,o,t,!0),!0)},Vr=({injectGlobal:o})=>o`
    /* copy from https://github.com/ProseMirror/@milkdown/prose/blob/master/style/prosemirror.css */
    .ProseMirror {
        position: relative;
    }

    .ProseMirror {
        word-wrap: break-word;
        white-space: pre-wrap;
        white-space: break-spaces;
        -webkit-font-variant-ligatures: none;
        font-variant-ligatures: none;
        font-feature-settings: 'liga' 0; /* the above doesn't seem to work in Edge */
    }

    .ProseMirror pre {
        white-space: pre-wrap;
    }

    .ProseMirror li {
        position: relative;
    }

    .ProseMirror-hideselection *::selection {
        background: transparent;
    }
    .ProseMirror-hideselection *::-moz-selection {
        background: transparent;
    }
    .ProseMirror-hideselection {
        caret-color: transparent;
    }

    .ProseMirror-selectednode {
        outline: 2px solid #8cf;
    }

    /* Make sure li selections wrap around markers */

    li.ProseMirror-selectednode {
        outline: none;
    }

    li.ProseMirror-selectednode:after {
        content: '';
        position: absolute;
        left: -32px;
        right: -2px;
        top: -2px;
        bottom: -2px;
        border: 2px solid #8cf;
        pointer-events: none;
    }

    /* Protect against generic img rules */

    img.ProseMirror-separator {
        display: inline !important;
        border: none !important;
        margin: 0 !important;
    }
`,Kr=(o,{css:t})=>{const e=F(o),n=o.get(C,"radius"),r=o.get(C,"lineWidth");return t`
        background-color: ${e("background")};
        color: ${e("neutral")};
        font-size: 14px;
        padding: 18px 6px 22px;
        border-radius: ${n};
        font-family: ${o.get(W,"typography")};

        .code-fence_selector-wrapper {
            position: relative;
        }

        .code-fence_selector {
            width: 180px;
            box-sizing: border-box;
            border-radius: ${n};
            margin: 0 18px 18px;
            cursor: pointer;
            background-color: ${e("surface")};
            position: relative;
            display: flex;
            color: ${e("neutral",.87)};
            letter-spacing: 0.5px;
            height: 42px;
            align-items: center;

            ${o.get(R,void 0)};
            ${o.get(Q,void 0)};

            & > .icon {
                width: 42px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${e("solid",.87)};
                border-left: ${r} solid ${e("line")};

                text-align: center;
                transition: all 0.2s ease-in-out;
                &:hover {
                    background: ${e("background")};
                    color: ${e("primary")};
                }
            }

            > span:first-child {
                padding-left: 16px;
                flex: 1;
                font-weight: 500;
            }
        }

        .code-fence_selector-list-item {
            list-style: none;
            line-height: 2;
            padding-left: 16px;
            cursor: pointer;
            margin: 0 !important;
            :hover {
                background: ${e("secondary",.12)};
                color: ${e("primary")};
            }
        }

        .code-fence_selector-list {
            &[data-fold='true'] {
                display: none;
            }

            margin: 0 !important;
            font-weight: 500;
            position: absolute;
            z-index: 1;
            top: 42px;
            box-sizing: border-box;
            left: 18px;
            padding: 8px 0;
            max-height: 260px;
            width: 180px;
            background-color: ${e("surface")};
            border-top: none;
            overflow-y: auto;
            display: flex;
            flex-direction: column;

            ${o.get(Z,["y"])}
            ${o.get(R,void 0)};
            ${o.get(Q,void 0)};
        }
    `},qr=(o,t)=>{o.set("code-fence",({editable:e,onSelectLanguage:n,onBlur:r,onFocus:a,languageList:i})=>{const s=document.createElement("div"),l=document.createElement("div"),c=document.createElement("ul"),d=document.createElement("pre"),f=document.createElement("code"),u=document.createElement("div");u.className="code-fence_selector";const p=document.createElement("span");u.appendChild(p);const h=o.get(be,"downArrow");e()&&h&&u.appendChild(h.dom),f.spellcheck=!1,l.className="code-fence_selector-wrapper",l.contentEditable="false",l.append(u),l.append(c),d.append(f);const m=document.createElement("div");f.append(m),m.style.whiteSpace="inherit",s.append(l,d),s.classList.add("code-fence"),o.onFlush(()=>{const b=Kr(o,t);b&&s.classList.add(b)}),c.className="code-fence_selector-list",c.addEventListener("mousedown",b=>{if(b.preventDefault(),b.stopPropagation(),!e())return;const g=b.target;if(!(g instanceof HTMLLIElement))return;const v=g.dataset.value;v!=null&&n(v)}),u.addEventListener("mousedown",b=>{b.preventDefault(),b.stopPropagation(),e()&&a()});const w=()=>{!e()||c.dataset.fold==="true"||r()};return document.addEventListener("mousedown",w),i.forEach(b=>{const g=document.createElement("li");g.className="code-fence_selector-list-item",g.innerText=b||"--",c.appendChild(g),g.setAttribute("data-value",b)}),{dom:s,contentDOM:m,onUpdate:b=>{s.dataset.language=b.attrs.language,p.innerText=b.attrs.language||"--",c.setAttribute("data-fold",b.attrs.fold?"true":"false")},onDestroy:()=>{s.remove(),document.removeEventListener("mousedown",w)}}})},Ur=(o,{css:t})=>{const e=F(o);o.set("image",({placeholder:n,isBlock:r,onError:a,onLoad:i})=>{const s=h=>{var m;return(m=o.get(be,h))==null?void 0:m.dom},l=document.createElement("span");l.classList.add("image-container"),o.onFlush(()=>{const h=t`
                display: inline-block;
                position: relative;
                text-align: center;
                font-size: 0;
                vertical-align: text-bottom;
                line-height: 1;

                ${r?`
                width: 100%;
                margin: 0 auto;
                `:""}

                &.ProseMirror-selectednode::after {
                    content: '';
                    background: ${e("secondary",.38)};
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }

                img {
                    max-width: 100%;
                    height: auto;
                    object-fit: contain;
                    margin: 0 2px;
                }
                .icon,
                .placeholder {
                    display: none;
                }

                &.system {
                    width: 100%;
                    padding: 0 32px;
                    font-size: inherit;

                    img {
                        width: 0;
                        height: 0;
                        display: none;
                    }

                    .icon,
                    .placeholder {
                        display: inline;
                    }

                    box-sizing: border-box;
                    height: 48px;
                    background-color: ${e("background")};
                    border-radius: ${o.get(C,"radius")};
                    display: inline-flex;
                    gap: 32px;
                    justify-content: flex-start;
                    align-items: center;
                    .placeholder {
                        margin: 0;
                        line-height: 1;
                        &::before {
                            content: '';
                            font-size: 14px;
                            color: ${e("neutral",.6)};
                        }
                    }
                }

                &.empty {
                    .placeholder {
                        &::before {
                            content: '${n}';
                        }
                    }
                }
            `;h&&l.classList.add(h)});const c=document.createElement("img");l.append(c);let d=s("image");const f=document.createElement("span");f.classList.add("placeholder"),l.append(d,f);const u=h=>{const m=s(h);l.replaceChild(m,d),d=m},p=h=>{l.classList.add("system","loading"),u("loading");const m=document.createElement("img");m.src=h,m.onerror=()=>{a==null||a(m)},m.onload=()=>{i==null||i(m)}};return{dom:l,onUpdate:h=>{const{src:m,alt:w,title:b,loading:g,failed:v}=h.attrs;if(c.src=m,c.title=b||w,c.alt=w,m.length===0){l.classList.add("system","empty"),u("image");return}if(g){p(m);return}if(v){l.classList.remove("loading","empty"),l.classList.add("system","failed"),u("brokenImage");return}if(m.length>0){l.classList.remove("system","empty","loading");return}l.classList.add("system","empty"),u("image")}}})},Gr=(o,{css:t})=>{const e=F(o),n=o.get(C,"radius"),r=o.get(W,"code"),a=t`
        color: ${e("neutral",.87)};
        background-color: ${e("background")};
        border-radius: ${n};
        padding: 16px 32px;
        font-size: 14px;
        font-family: ${r};
        overflow: hidden;
        line-height: 1.5;
        .ProseMirror {
            outline: none;
        }
    `,i=t`
        display: none;
    `,s=t`
        display: flex;
        justify-content: center;
        padding: 16px 0;
    `;return{codeStyle:a,hideCodeStyle:i,previewPanelStyle:s}},Jr=(o,t)=>{let e=!1,n;return{isEditing:()=>e,innerView:()=>n,openEditor:(r,a)=>{n=new mn(r,{state:gn.create({doc:a,plugins:[Fr(),_e({...bn,Backspace:vn(wn,s=>{var l;if(!s.selection.empty||n&&n.state.doc.textContent.length>0)return!1;const{dispatch:c,state:d}=o,f=(l=d.schema.nodes.paragraph)==null?void 0:l.create();if(!f)return!1;const u=d.tr.replaceSelectionWith(f);let p=u.selection.from-2;return p<0&&(p=0),c(u.setSelection(U.create(u.doc,p))),o.focus(),!0}),"Mod-Enter":(s,l)=>{var c;if(l){const{state:d}=o,{to:f}=d.selection,u=(c=d.schema.nodes.paragraph)==null?void 0:c.createAndFill();if(!u)return!1;const p=d.tr.replaceWith(f,f,u);o.dispatch(p.setSelection(U.create(p.doc,f))),o.focus()}return!0}}),_e({"Mod-z":Ft,"Mod-y":Ae,"Shift-Mod-z":Ae})]}),plugins:[],dispatchTransaction:s=>{if(!n)return;const{state:l,transactions:c}=n.state.applyTransaction(s);if(n.updateState(l),!s.getMeta("fromOutside")){const d=o.state.tr,f=yn.offset(t()+1);c.forEach(u=>{const{steps:p}=u;p.forEach(h=>{const m=h.map(f);if(!m)throw Error("step discarded!");d.step(m)})}),d.docChanged&&o.dispatch(d)}}}),n.focus();const{state:i}=n;n.dispatch(i.tr.setSelection(U.create(i.doc,0))),e=!0},closeEditor:()=>{n&&n.destroy(),n=void 0,e=!1}}},Yr=(o,t)=>{o.set("inner-editor",({view:e,getPos:n,render:r})=>{const a=Jr(e,n),i=document.createElement("div");i.classList.add("math-block");const s=document.createElement("div"),l=document.createElement("div");let c="",d="",f="";return o.onFlush(()=>{({codeStyle:c,hideCodeStyle:d,previewPanelStyle:f}=Gr(o,t)),c&&d&&s.classList.add(c,d),f&&l.classList.add(f)}),i.append(s),{dom:i,preview:l,editor:s,onUpdate:(u,p)=>{var h;if(p){const b=u.attrs.value||u.textContent||"";s.dataset.value=b,r(b);return}const m=a.innerView();if(m){const b=m.state,g=u.content.findDiffStart(b.doc.content);if(g!=null){const v=u.content.findDiffEnd(b.doc.content);if(v){let{a:y,b:D}=v;const V=g-Math.min(y,D);V>0&&(y+=V,D+=V),m.dispatch(b.tr.replace(g,D,u.slice(g,y)).setMeta("fromOutside",!0))}}}const w=((h=u.content.firstChild)==null?void 0:h.text)||"";s.dataset.value=w,r(w)},onFocus:u=>{!e.editable||(d&&s.classList.remove(d),a.openEditor(s,u),i.classList.add("ProseMirror-selectednode"))},onBlur:()=>{d&&s.classList.add(d),a.closeEditor(),i.classList.remove("ProseMirror-selectednode")},onDestroy:()=>{l.remove(),s.remove(),i.remove()},stopEvent:u=>{const p=a.innerView(),{target:h}=u,m=h&&(p==null?void 0:p.dom.contains(h));return!!(p&&m)}}})},Zr=(o,{css:t},e)=>{const n=F(o);return t`
        ${o.get(R,void 0)}
        ${o.get(Q,void 0)}

        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        background: ${n("surface")};
        border-radius: ${o.get(C,"radius")};
        font-size: 16px;

        height: 56px;
        box-sizing: border-box;
        width: ${e.width};
        padding: 0 16px;
        gap: 16px;
        z-index: 2;

        input,
        button {
            all: unset;
        }

        input {
            flex-grow: 1;
            caret-color: ${n("primary")};
            &::placeholder {
                color: ${n("neutral",.6)};
            }
        }

        button {
            cursor: pointer;
            height: 36px;
            color: ${n("primary")};
            font-size: 14px;
            padding: 0 8px;
            font-weight: 500;
            letter-spacing: 1.25px;
            &:hover {
                background-color: ${n("secondary",.12)};
            }
            &.disable {
                color: ${n("neutral",.38)};
                cursor: not-allowed;
                &:hover {
                    background: transparent;
                }
            }
            &.hide {
                display: none;
            }
        }

        &.hide {
            display: none;
        }
    `},Qr=(o,t)=>{zt(o,t,(e,n,r,a)=>{const i=o.dom.parentElement;if(!i)throw je();const s=n.left-e.left;let l=e.left-a.left-(r.width-s)/2;const c=e.bottom-a.top+14+i.scrollTop;return l<0&&(l=0),[c,l]})},Xr=(o,t)=>{o.set("input-chip",({isBindMode:e,onUpdate:n,buttonText:r,placeholder:a,width:i="400px",calculatePosition:s=Qr})=>{let l=null,c=!1,d="";const f=document.createElement("div");o.onFlush(()=>{const g=Zr(o,t,{width:i});g&&f.classList.add(g)}),f.classList.add("tooltip-input");const u=document.createElement("input");a&&(u.placeholder=a),f.appendChild(u),e||(l=document.createElement("button"),l.innerText=r||"APPLY",f.appendChild(l));const p=()=>{f.classList.add("hide")},h=g=>{f.classList.remove("hide"),s(g,f)},m=g=>{const{target:v}=g;if(v instanceof HTMLInputElement){if(d=v.value,!l){n(d);return}if(!d){l.classList.add("disable"),c=!0;return}l.classList.remove("disable"),c=!1}},w=g=>{c||(g.stopPropagation(),n(d),p())},b=g=>{"key"in g&&g.key==="Enter"&&(n(d),p())};return{dom:f,init:g=>{const v=g.dom.parentElement;if(!v)throw je();u.addEventListener("input",m),u.addEventListener("keydown",b),l==null||l.addEventListener("mousedown",w),v.appendChild(f),p()},show:h,hide:p,destroy:()=>{u.removeEventListener("input",m),u.removeEventListener("keydown",b),l==null||l.removeEventListener("mousedown",w),f.remove()},update:g=>{d=g,u.value=g}}})},eo=(o,{css:t})=>{const e=F(o);o.set("task-list-item",({onChange:n,editable:r})=>{const a=p=>{var h;return(h=o.get(be,p))==null?void 0:h.dom},i=document.createElement("li"),s=document.createElement("label"),l=document.createElement("span"),c=document.createElement("input"),d=document.createElement("div");let f=a("unchecked");s.appendChild(f);const u=p=>{const h=a(p);s.replaceChild(h,f),f=h};return s.append(c,l),i.append(s,d),s.contentEditable="false",c.type="checkbox",r()||(c.disabled=!0,s.style.cursor="not-allowed"),c.onchange=p=>{if(p.target instanceof HTMLInputElement){if(!r()){c.checked=!c.checked;return}p.preventDefault(),n(c.checked)}},i.dataset.type="task-item",i.classList.add("task-list-item"),o.onFlush(()=>{const p=t`
                list-style-type: none;
                position: relative;

                & > div {
                    overflow: hidden;
                    padding: 0 2px;
                    width: 100%;
                }

                label {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                    input {
                        visibility: hidden;
                    }
                }
                &[data-checked='true'] {
                    label {
                        color: ${e("primary")};
                    }
                }
                &[data-checked='false'] {
                    label {
                        color: ${e("solid",.87)};
                    }
                }
                .paragraph {
                    margin: 8px 0;
                }
            `;p&&i.classList.add(p)}),{dom:i,contentDOM:d,onUpdate:p=>{i.dataset.checked=p.attrs.checked,p.attrs.checked?c.setAttribute("checked","checked"):c.removeAttribute("checked"),u(p.attrs.checked?"checked":"unchecked")}}})},to=(o,t)=>{[Xr,Ur,qr,eo,Yr].forEach(e=>{e(o,t)})},no=["Roboto","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],ro=["Consolas","Monaco","Andale Mono","Ubuntu Mono","monospace"],_t={h1:{label:"h1",icon:"looks_one"},h2:{label:"h2",icon:"looks_two"},h3:{label:"h3",icon:"looks_3"},loading:{label:"loading",icon:"hourglass_empty"},quote:{label:"quote",icon:"format_quote"},code:{label:"code",icon:"code"},table:{label:"table",icon:"table_chart"},divider:{label:"divider",icon:"horizontal_rule"},image:{label:"image",icon:"image"},brokenImage:{label:"broken image",icon:"broken_image"},bulletList:{label:"bullet list",icon:"format_list_bulleted"},orderedList:{label:"ordered list",icon:"format_list_numbered"},taskList:{label:"task list",icon:"checklist"},bold:{label:"bold",icon:"format_bold"},italic:{label:"italic",icon:"format_italic"},inlineCode:{label:"inline code",icon:"code"},strikeThrough:{label:"strike through",icon:"strikethrough_s"},link:{label:"link",icon:"link"},leftArrow:{label:"left arrow",icon:"chevron_left"},rightArrow:{label:"right arrow",icon:"chevron_right"},upArrow:{label:"up arrow",icon:"expand_less"},downArrow:{label:"down arrow",icon:"expand_more"},alignLeft:{label:"align left",icon:"format_align_left"},alignRight:{label:"align right",icon:"format_align_right"},alignCenter:{label:"align center",icon:"format_align_center"},delete:{label:"delete",icon:"delete"},select:{label:"select",icon:"select_all"},unchecked:{label:"unchecked",icon:"check_box_outline_blank"},checked:{label:"checked",icon:"check_box"},undo:{label:"undo",icon:"turn_left"},redo:{label:"redo",icon:"turn_right"},liftList:{label:"lift list",icon:"format_indent_decrease"},sinkList:{label:"sink list",icon:"format_indent_increase"},dragHandle:{label:"drag handle",icon:"drag_indicator"},text:{label:"text",icon:"title"}},oo=o=>{const t=_t[o];if(!t)return;const e=document.createElement("span");e.className="icon material-icons material-icons-outlined";const n=_t[o];return n?(e.textContent=n.icon,e.dataset.label=n.label):console.warn(`Icon not found: "${o}", did you forget to add it to the icon mapping?`),{dom:e,label:t.label}},L={nord0:"#2e3440",nord1:"#3b4252",nord2:"#434c5e",nord3:"#4c566a",nord4:"#d8dee9",nord5:"#e5e9f0",nord6:"#eceff4",nord7:"#8fbcbb",nord8:"#88c0d0",nord9:"#81a1c1",nord10:"#5e81ac",nord11:"#bf616a",nord12:"#d08770",nord13:"#ebcb8b",nord14:"#a3be8c",nord15:"#b48ead"},ao={shadow:L.nord1,primary:L.nord10,secondary:L.nord9,neutral:L.nord0,solid:L.nord3,line:L.nord4,background:L.nord6,surface:"#fff"},io={shadow:L.nord1,primary:L.nord10,secondary:L.nord9,neutral:L.nord6,solid:L.nord4,line:L.nord2,background:"#252932",surface:L.nord0},so=(o,t)=>{const{injectGlobal:e,css:n}=t,r=F(o),a=o.get(C,"radius"),i=r("neutral",.87),s=r("surface"),l=r("line"),c=r("secondary",.38),d=n`
        .ProseMirror-selectednode {
            outline: ${o.get(C,"lineWidth")} solid ${l};
        }

        li.ProseMirror-selectednode {
            outline: none;
        }

        li.ProseMirror-selectednode::after {
            ${o.get(R,void 0)};
        }

        & ::selection {
            background: ${c};
        }
    `,f=n`
        padding: 50px 20px;
        outline: none;
        & > * {
            margin: 30px 0;
        }
    `,u=n`
        p {
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: 0.5px;
        }
    `,p=n`
        blockquote {
            padding-left: 30px;
            line-height: 28px;
            border-left: 4px solid ${r("primary")};
            margin-left: 0;
            margin-right: 0;
            * {
                font-size: 16px;
                line-height: 24px;
            }
        }
    `,h=n`
        h1 {
            font-size: 48px;
            line-height: 1.167;
        }
        h2 {
            font-size: 40px;
            line-height: 1.2;
        }
        h3 {
            font-size: 34px;
            line-height: 1.05;
        }
        h4 {
            font-size: 28px;
            line-height: 1.14;
        }
        h5 {
            font-size: 24px;
            line-height: 1;
        }
        h6 {
            font-size: 20px;
            line-height: 1;
        }
        .heading {
            margin: 40px 0;
            font-weight: 400;
        }
    `,m=n`
        hr {
            height: ${o.get(C,"lineWidth")};
            background-color: ${l};
            border-width: 0;
        }
    `,w=n`
        ul,
        ol {
            padding: 0;
        }

        .list-item,
        .task-list-item {
            margin: 8px 0;
        }

        .list-item_label,
        .list-item .paragraph {
            margin: 0;
        }

        .list-item {
            display: flex;

            &_body {
                flex: 1;
            }
        }

        .list-item_label {
            display: flex;
            justify-content: center;
            width: 24px;
            height: 24px;
            font-size: 16px;
            line-height: 1.5;
            color: ${r("primary")};
        }

        .list-item[data-list-type='bullet'] {
            & > .list-item_label {
                font-size: 24px;
                line-height: 1;
            }
        }

        li {
            &::marker {
                display: none;
            }
        }

        .task-list-item {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            &_checkbox {
                margin: 8px 8px 8px 0;
                height: 16px;
            }
            & .paragraph {
                margin: 0;
            }
        }
    `,b=n`
        .code-fence {
            pre {
                font-family: ${o.get(W,"code")};
                margin: 0 18px;
                white-space: pre;
                overflow: auto;
                ${o.get(Z,["x"])}

                background-color: ${r("background")};
                color: ${r("neutral")};
                font-size: 14px;
                border-radius: ${a};

                code {
                    line-height: 1.5;
                    font-family: ${o.get(W,"code")};
                }
            }
        }
    `,g=n`
        .image {
            display: inline-block;
            margin: 0 auto;
            object-fit: contain;
            width: 100%;
            position: relative;
            height: auto;
            text-align: center;
        }
    `,v=n`
        .code-inline {
            background-color: ${r("neutral")};
            color: ${r("background")};
            border-radius: ${a};
            font-weight: 500;
            font-family: ${o.get(W,"code")};
            padding: 0 3px;
        }

        .strong {
            font-weight: 600;
        }

        .link,
        a {
            color: ${r("secondary")};
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            font-weight: 500;
            &:hover {
                background-color: ${r("line")};
                box-shadow: 0 3px ${r("line")}, 0 -3px ${r("line")};
            }
        }

        .strike-through {
            text-decoration-color: ${r("secondary")};
        }
    `,y=n`
        .footnote-definition {
            ${o.get(R,void 0)};
            border-radius: ${o.get(C,"radius")};
            background-color: ${r("background")};
            padding: 16px;
            display: flex;
            flex-direction: row;
            & > .footnote-definition_content {
                flex: 1;
                width: calc(100% - 16px);
                & > dd {
                    margin-inline-start: 16px;
                }
                & > dt {
                    color: ${r("secondary")};
                    font-weight: 500;
                }
            }
            & > .footnote-definition_anchor {
                width: 16px;
            }
        }
    `,D=n`
        /* copy from https://github.com/ProseMirror/prosemirror-tables/blob/master/style/tables.css */
        .tableWrapper {
            overflow-x: auto;
            margin: 0;
            ${o.get(Z,["x"])}
            width: 100%;
            * {
                margin: 0;
                box-sizing: border-box;
                font-size: 16px;
            }
        }
        table {
            border-collapse: collapse;
            table-layout: fixed;
            width: 100%;
            overflow: auto;
            border-radius: ${o.get(C,"radius")};
        }
        tr {
            ${o.get(R,"bottom")};
        }
        td,
        th {
            padding: 0 16px;
            vertical-align: top;
            box-sizing: border-box;
            position: relative;

            min-width: 100px;
            ${o.get(R,void 0)};
            text-align: left;
            line-height: 3;
            height: 48px;
            vertical-align: middle;
        }
        th {
            background: ${r("background",.5)};
            font-weight: 400;
        }
        .column-resize-handle {
            position: absolute;
            right: -2px;
            top: 0;
            bottom: 0;
            z-index: 20;
            pointer-events: none;
            background: ${r("secondary")};
            width: ${o.get(C,"lineWidth")};
        }

        .selectedCell {
            &::after {
                z-index: 2;
                position: absolute;
                content: '';
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: ${r("secondary",.38)};
                pointer-events: none;
            }

            & ::selection {
                background: transparent;
            }
        }
    `;Vr(t),e`
        .milkdown {
            .material-icons-outlined {
                font-size: 24px;
            }

            position: relative;
            margin-left: auto;
            margin-right: auto;
            box-sizing: border-box;


            color: ${i};
            background: ${s};
            font-family: ${o.get(W,"typography")};

            ${o.get(Q,void 0)}
            ${o.get(Z,void 0)}
            ${d};

            .resize-cursor {
                cursor: ew-resize;
                cursor: col-resize;
            }

            .editor {
                ${f};

                ${u};
                ${p};
                ${m};
                ${w};
                ${b};
                ${g};
                ${h};

                ${D};
                ${y};

                ${v};
            }
        }
    `},lo={typography:no,code:ro},co={radius:"4px",lineWidth:"1px"},po=o=>(t,e)=>{const{css:n}=t,r=o?io:ao;e.set(K,a=>{if(!a)return;const[i,s]=a,l=r[i],c=xn(l);if(c)return`rgba(${c==null?void 0:c.join(", ")}, ${s||1})`}),e.set(C,a=>{if(a)return co[a]}),e.set(W,a=>{if(a)return lo[a].join(", ")}),e.set(Z,([a="y",i="normal"]=["y","normal"])=>{const s=e.get(K,["secondary",.38]),l=e.get(K,["secondary",.12]),c=e.get(K,["secondary"]),d=n({"&::-webkit-scrollbar":{[a==="y"?"width":"height"]:`${i==="thin"?2:12}px`,backgroundColor:"transparent"}});return n`
            scrollbar-width: thin;
            scrollbar-color: ${s} ${l};
            -webkit-overflow-scrolling: touch;

            ${d};

            &::-webkit-scrollbar-track {
                border-radius: 999px;
                background: transparent;
                border: 4px solid transparent;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 999px;
                background-color: ${s};
                border: ${i==="thin"?0:4}px solid transparent;
                background-clip: content-box;
            }

            &::-webkit-scrollbar-thumb:hover {
                background-color: ${c};
            }
        `}),e.set(Q,()=>{const a=e.get(C,"lineWidth"),i=s=>e.get(K,["shadow",s]);return n`
            box-shadow: 0 ${a} ${a} ${i(.14)}, 0 2px ${a} ${i(.12)},
                0 ${a} 3px ${i(.2)};
        `}),e.set(R,a=>{const i=e.get(C,"lineWidth"),s=e.get(K,["line"]);return a?n({[`border${(l=>l.charAt(0).toUpperCase()+l.slice(1))(a)}`]:`${i} solid ${s}`}):n`
                border: ${i} solid ${s};
            `}),e.set(be,a=>{if(a)return oo(a)}),e.set(Mn,()=>{so(e,t)}),to(e,t)},nt=(o=!1)=>kn((t,e)=>po(o)(t,e));nt(!0);nt(!1);let Vt=!1;var Ot;typeof window<"u"&&(Vt=Boolean((Ot=window.matchMedia)==null?void 0:Ot.call(window,"(prefers-color-scheme: dark)").matches));const mo=nt(Vt);export{S as I,N as L,M,Rt as N,An as a,x as c,we as k,_n as l,mo as o,ho as r,Tn as s,fo as t,ve as w,ce as z};
