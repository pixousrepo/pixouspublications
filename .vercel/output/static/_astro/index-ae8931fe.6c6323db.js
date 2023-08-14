import{j as t}from"./jsx-runtime.6940b965.js";import{r as o}from"./index.070054a4.js";import{s as Y,B as O,u as $e,e as fe,a as ke,b as Be,c as ye,d as Qe,A as We,W as Ye,S as qe,C as ge,f as ee,g as ze,h as Ue,i as Ve,j as He,P as Ge,_ as Ke,k as Xe,l as Je,m as Ze,n as et,o as tt,p as nt,F as B,q as st,T as Q,t as G,v as Se,H as rt,w as at,x as ot,y as it,z as ct,E as lt,G as ut,I as dt,J as xe,K as mt,L as se,M as K,N as pt,O as ve,Q as ht,R as Ie,U as X,V as W,X as ft,Y as yt,Z as gt,$ as re,a0 as St,a1 as xt,a2 as vt,a3 as It,a4 as jt,a5 as Tt,a6 as bt,a7 as Lt,a8 as _t,a9 as Rt,aa as Et,ab as wt,ac as Pt}from"./hoisted.01ab1add.js";import{useDeskToolSetting as ae}from"./index-c5edfd9b.57f3e11d.js";import{P as Ct}from"./PaneItem-e3b236bf.d1bba3c3.js";import"./client.6bb14528.js";import"./index.a983d25c.js";const oe=100,J=2e3,je={by:[{field:"_updatedAt",direction:"desc"}]},At={};function Mt(s){return jt(s).map(e=>({...e.draft||e.published,hasPublished:!!e.published,hasDraft:!!e.draft}))}const Ot=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function Te(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=s.match(Ot);if(!r)return null;const n=(r[1]||r[2]).trim().replace(/^["']|["']$/g,"");if(n[0]==="$"){const a=n.slice(1),d=e[a];return typeof d=="string"?d:null}return n}function Ft(s){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(s.trim())}function Dt(s,e){const r=s.by.map(n=>{if(n.mapWith)return n;const a=Nt(e,n.field);return a?kt(a,"datetime")?{...n,mapWith:"dateTime"}:a.jsonType==="string"?{...n,mapWith:"lower"}:n:n});return r.every((n,a)=>n===s.by[a])?s:{...s,by:r}}function Nt(s,e){const r=Xe(e);let n=s;for(const a of r){if(!n)return;if(typeof a=="string"){n=$t(n,a);continue}if(!(Je(a)||Ze(a))||n.jsonType!=="array")return;const[c,u]=n.of||[];if(u||!c)return;if(!et(c)){n=c;continue}const[l,p]=c.to||[];if(p||!l)return;n=l}return n}function $t(s,e){if(!("fields"in s))return;const r=s.fields.find(n=>n.name===e);return r?r.type:void 0}function kt(s,e){let r=s.type;for(;r;){if(r.name===e||!r.type&&r.jsonType===e)return!0;r=r.type}return!1}var ie=Object.freeze,Bt=Object.defineProperty,be=(s,e)=>ie(Bt(s,"raw",{value:ie(e||s.slice())})),ce,le;const Qt=Y(O)(ce||(ce=be([`
  position: relative;
`]))),Wt=Y(O)(le||(le=be([`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`]))),Yt=[...Array(30).keys()];function qt(s){const{layout:e}=s;return t.jsx(Se,{padding:2,space:1,children:Yt.map(r=>t.jsx(ge,{padding:2,children:t.jsx(Tt,{isPlaceholder:!0,layout:e})},r))})}function zt(s){const{childItemId:e,error:r,filterIsSimpleTypeConstraint:n,hasMaxItems:a,hasSearchQuery:d,isActive:c,isLazyLoading:u,isLoading:l,items:p,layout:g,loadingVariant:f,onListChange:S,onRetry:b,paneTitle:m,searchInputElement:y,showIcons:L}=s,_=ee(),{collapsed:h}=tt(),{collapsed:x,index:j}=fe(),[T,w]=o.useState(!1),F=o.useCallback(()=>{l||u||!T||S()},[u,l,S,T]);o.useEffect(()=>{if(x)return;const i=setTimeout(()=>{w(!0)},0);return()=>{clearTimeout(i)}},[x,p]);const R=o.useCallback((i,P)=>{let{activeIndex:C}=P;const A=nt(i._id),v=e===A,I=!c&&v,q=c&&v,M=C===p.length-1,z=M&&u,U=M&&a;return t.jsxs(t.Fragment,{children:[t.jsx(Ct,{icon:L===!1?!1:void 0,id:A,layout:g,marginBottom:1,pressed:I,schemaType:_.get(i._type),selected:q,value:i}),z&&t.jsx(B,{align:"center",justify:"center",padding:4,children:t.jsx(st,{muted:!0})}),U&&t.jsx(O,{marginY:1,paddingX:3,paddingY:4,children:t.jsxs(Q,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",J," documents"]})})]})},[e,c,p.length,g,_,L,a,u]),D=o.useMemo(()=>d?t.jsx(B,{align:"center",direction:"column",height:"fill",justify:"center",children:t.jsx(G,{width:1,children:t.jsx(O,{paddingX:4,paddingY:5,children:t.jsx(Q,{align:"center",muted:!0,children:"No results found"})})})}):t.jsx(B,{align:"center",direction:"column",height:"fill",justify:"center",children:t.jsx(G,{width:1,children:t.jsx(O,{paddingX:4,paddingY:5,children:t.jsx(Q,{align:"center",muted:!0,children:n?"No documents of this type":"No matching documents"})})})}),[n,d]),E=o.useMemo(()=>{if(!T)return null;if(r)return t.jsx(B,{align:"center",direction:"column",height:"fill",justify:"center",children:t.jsx(G,{width:1,children:t.jsxs(Se,{paddingX:4,paddingY:5,space:4,children:[t.jsx(rt,{as:"h3",children:"Could not fetch list items"}),t.jsxs(Q,{as:"p",children:["Error: ",t.jsx("code",{children:r.message})]}),b&&t.jsx(O,{children:t.jsx(ye,{icon:at,onClick:b,text:"Retry",tone:"primary"})})]})})});if(!l&&p.length===0)return D;if(f==="initial"&&l)return t.jsx(ot,{ms:300,children:t.jsx(qt,{layout:g})});if(f==="spinner"&&l)return null;const i="".concat(j,"-").concat(x);return t.jsx(Qt,{overflow:"hidden",height:"fill",children:t.jsx(Wt,{children:t.jsx(it,{activeItemDataAttr:"data-hovered",ariaLabel:m,canReceiveFocus:!0,focusRingOffset:-3,inputElement:y,itemHeight:51,items:p,onEndReached:F,onlyShowSelectionWhenActive:!0,overscan:10,padding:2,paddingBottom:1,renderItem:R,wrapAround:!1},i)})})},[x,r,F,j,l,p,g,f,b,R,y,T]);return t.jsx(ct,{overflow:h||f==="initial"?"hidden":"auto",children:E})}const Le=o.memo(s=>{let{contentAfter:e,index:r,initialValueTemplates:n=[],menuItemGroups:a=[],menuItems:d=[],setLayout:c,setSortOrder:u,title:l}=s;const{features:p}=$e(),{collapsed:g,isLast:f}=fe(),S=f&&!g?-1:0,b=o.useMemo(()=>({setLayout:m=>{let{layout:y}=m;c(y)},setSortOrder:m=>{u(m)}}),[c,u]);return t.jsx(ke,{actions:t.jsx(Be,{initialValueTemplateItems:n,actionHandlers:b,menuItemGroups:a,menuItems:d}),backButton:p.backButton&&r>0&&t.jsx(ye,{as:Qe,"data-as":"a",icon:We,mode:"bleed"}),contentAfter:e,tabIndex:S,title:l})});Le.displayName="DocumentListPaneHeader";function Ut(s){const{client:e,schema:r,sort:n,limit:a,params:d,filter:c,searchQuery:u,staticTypeNames:l}=s,p=n.by,g=n?.extendedProjection,f=bt(()=>e.listen("*[".concat(c,"]"),d,{events:["welcome","mutation","reconnect"],includeResult:!1,visibility:"query"})).pipe(X((m,y)=>y===0&&m.type!=="welcome"?K(()=>new Error(m.type==="reconnect"?"Could not establish EventSource connection":'Received unexpected type of first event "'.concat(m.type,'"'))):W(m)),Lt()),[S,b]=_t(f,m=>m.type==="welcome");return ve(S.pipe(Ie(1)),b.pipe(Rt(1e3,wt,{leading:!0,trailing:!0}))).pipe(Et(()=>(l?W(l):e.observable.fetch("array::unique(*[".concat(c,"][]._type)"),d)).pipe(X(y=>{const L=y.flatMap(T=>r.get(T)||[]),_={filter:c,query:u||"",types:L},h={__unstable_extendedProjection:g,comments:["findability-source: ".concat(u?"list-query":"list")],limit:a,params:d,sort:p},{query:x,params:j}=Pt(_,h);return e.observable.fetch(x,j)}))))}const Vt=[],ue={error:null,onRetry:void 0,result:null},Ht={result:null,error:null};function Gt(s){const{filter:e,params:r,sortOrder:n,searchQuery:a}=s,d=lt(ut),c=ee(),[u,l]=o.useState(ue),{onRetry:p,error:g,result:f}=u,S=f?.documents,b=o.useMemo(()=>S?Mt(S):Vt,[S]),[m,y]=o.useState(!1),[L,_]=o.useState(!1),[h,x]=o.useState(!1),j=o.useMemo(()=>Te(e,r),[e,r]),T=f===null&&!g,w=S?.length===J,F=o.useCallback(()=>{T||L||h||x(!0)},[T,L,h]),R=o.useCallback(i=>{var P,C;if(i.error){l(i);return}const A=((C=(P=i.result)==null?void 0:P.documents)==null?void 0:C.length)||0;if(!i.error&&i?.result===null&&h){y(!0);return}if(A<oe&&A!==0&&!h&&_(!0),i?.result===null){l(I=>({...I.error?i:I}));return}y(!1),l(i)},[h]),D=o.useMemo(()=>{const i=new dt,P=()=>i.next();return Ut({client:d,filter:e,limit:h?J:oe,params:r,schema:c,searchQuery:a||"",sort:n||je,staticTypeNames:j?[j]:void 0}).pipe(xe(v=>({result:{documents:v},error:null})),mt(Ht),se(v=>v instanceof ProgressEvent?K(()=>new Error("Request error")):K(()=>v)),se((v,I)=>pt(W({result:null,error:v}),ve(ht(window,"online"),i).pipe(Ie(1),X(()=>I)))),ft((v,I)=>({...v,...I,onRetry:P})))},[d,e,r,c,a,h,n,j]);o.useEffect(()=>{const i=D.subscribe(R);return()=>{i.unsubscribe()}},[R,D]);const E=o.useCallback(()=>{_(!1),y(!1),l(ue),x(!1)},[]);return o.useEffect(()=>{E()},[E,e,r,n,a]),{error:g,hasMaxItems:w,isLazyLoading:m,isLoading:T,isSearchReady:!g,items:b,onListChange:F,onRetry:p}}var de=Object.freeze,Kt=Object.defineProperty,te=(s,e)=>de(Kt(s,"raw",{value:de(e||s.slice())})),me,pe,he;const Z=[],Xt=Ye(me||(me=te([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]))),Jt=Y(qe)(pe||(pe=te([`
  animation: `,` 500ms linear infinite;
`])),Xt),Zt=Y(ge)(he||(he=te([`
  [data-ui='TextInput'] {
    border-radius: inherit;
  }
`])));function en(s){const e=o.useRef(s);return yt(e.current,s)||(e.current=s),e.current}const tn=s=>{const{menuItems:e,sortOrderRaw:r,layout:n}=s;return e?.map(a=>{var d,c,u,l;return(d=a.params)!=null&&d.layout?{...a,selected:n===((c=a.params)==null?void 0:c.layout)}:(u=a?.params)!=null&&u.by?{...a,selected:gt(r?.by,((l=a?.params)==null?void 0:l.by)||Z)}:{...a,selected:!1}})},un=o.memo(function(e){const{childItemId:r,index:n,isActive:a,isSelected:d,pane:c,paneKey:u}=e,l=ee(),{name:p}=ze(),{defaultLayout:g="default",displayOptions:f,initialValueTemplates:S=Z,menuItemGroups:b,menuItems:m,options:y,title:L}=c,{apiVersion:_,defaultOrdering:h=Z,filter:x}=y,j=en(y.params||At),T=c.source,w=o.useMemo(()=>Te(x,j),[x,j]),F=f?.showIcons!==!1,[R,D]=ae(w,"layout",g),[E,i]=o.useState(""),[P,C]=o.useState(""),[A,v]=o.useState(null),I=o.useRef(!1),q=o.useMemo(()=>h?.length>0?{by:h}:je,[h]),[M,z]=ae(w,"sortOrder",q),U=w&&M?Dt(M,l.get(w)):M,_e=Ue(U),Re=Ft(x),{error:Ee,hasMaxItems:we,isLazyLoading:Pe,isLoading:N,isSearchReady:Ce,items:V,onListChange:Ae,onRetry:Me}=Gt({apiVersion:_,filter:x,params:j,searchQuery:E?.trim(),sortOrder:_e}),Oe=o.useMemo(()=>tn({menuItems:m,sortOrderRaw:M,layout:R}),[R,m,M]),Fe=Ve(k=>k.pipe(xe(H=>H.target.value),re(C),St(H=>H===""?W(""):xt(300)),re(i)),[]),$=o.useCallback(()=>{i(""),C("")},[]),De=o.useCallback(k=>{k.key==="Escape"&&$()},[$]);o.useEffect(()=>(I.current===!1&&!N&&(I.current=!0),()=>{I.current=!1}),[N]),o.useEffect(()=>{$(),I.current=!1},[u,$]);const ne=o.useMemo(()=>N&&V.length===0&&I.current?"spinner":"initial",[N,V.length]),Ne=t.jsx(O,{paddingX:2,paddingBottom:2,children:t.jsx(Zt,{radius:4,tone:"transparent",children:t.jsx(vt,{"aria-label":"Search list",autoComplete:"off",border:!1,clearButton:!!E,disabled:!Ce,fontSize:[2,2,1],icon:ne==="spinner"?Jt:It,onChange:Fe,onClear:$,onKeyDown:De,placeholder:"Search list",radius:2,ref:v,spellCheck:!1,value:P})})});return t.jsx(He,{name:T||p,children:t.jsxs(Ge,{currentMaxWidth:350,"data-ui":"DocumentListPane",id:u,maxWidth:640,minWidth:320,selected:d,children:[Ke,t.jsx(Le,{contentAfter:Ne,index:n,initialValueTemplates:S,menuItemGroups:b,menuItems:Oe,setLayout:D,setSortOrder:z,title:L}),t.jsx(zt,{childItemId:r,error:Ee,filterIsSimpleTypeConstraint:Re,hasMaxItems:we,hasSearchQuery:!!E,isActive:a,isLazyLoading:Pe,isLoading:N,items:V,layout:R,loadingVariant:ne,onListChange:Ae,onRetry:Me,paneTitle:L,searchInputElement:A,showIcons:F},u)]})})});export{un as default};
