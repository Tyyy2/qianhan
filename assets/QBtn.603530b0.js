import{f as d,h as m,g as D,G as z,H as se,I as ce,J as te,K as de,r as V,a as fe,L as ve,M as T,N as me,T as ge,l as be}from"./index.d7f18455.js";import{u as ne,a as ae,Q as he}from"./QSpinner.46a40e8d.js";import{c as re,a as ye,b as K,e as pe}from"./render.544e31f6.js";import{c as ke}from"./dom.e7a47ba1.js";const F="0 0 24 24",H=e=>e,Q=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":H,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Q,"ion-ios":Q,"ion-logo":Q,"iconfont ":H,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},xe=new RegExp("^("+Object.keys(le).join("|")+")"),qe=new RegExp("^("+Object.keys(ue).join("|")+")"),U=new RegExp("^("+Object.keys(ie).join("|")+")"),Ee=/^[Mm]\s?[-+]?\.?\d/,$e=/^img:/,Le=/^svguse:/,Re=/^ion-/,we=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var W=re({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=D(),n=ae(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let s,a=e.name;if(a==="none"||!a)return{none:!0};if(l.iconMapFn!==null){const o=l.iconMapFn(a);if(o!==void 0)if(o.icon!==void 0){if(a=o.icon,a==="none"||!a)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(Ee.test(a)===!0){const[o,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(u=>{const[p,b,k]=u.split("@@");return m("path",{style:b,d:p,transform:k})})}}if($e.test(a)===!0)return{img:!0,src:a.substring(4)};if(Le.test(a)===!0){const[o,y=F]=a.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const h=a.match(xe);if(h!==null)s=le[h[1]](a);else if(we.test(a)===!0)s=a;else if(Re.test(a)===!0)s=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(U.test(a)===!0){s="notranslate material-symbols";const o=a.match(U);o!==null&&(a=a.substring(6),s+=ie[o[1]]),q=a}else{s="notranslate material-icons";const o=a.match(qe);o!==null&&(a=a.substring(2),s+=ue[o[1]]),q=a}return{cls:s,content:q}});return()=>{const s={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?m(e.tag,s,ye(t.default)):f.value.img===!0?m("span",s,K(t.default,[m("img",{src:f.value.src})])):f.value.svg===!0?m("span",s,K(t.default,[m("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?m("span",s,K(t.default,[m("svg",{viewBox:f.value.viewBox},[m("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(s.class+=" "+f.value.cls),m(e.tag,s,K(t.default,[f.value.content])))}}});function Ce(e,t=250){let l=!1,n;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),n=e.apply(this,arguments)),n}}function X(e,t,l,n){l.modifiers.stop===!0&&te(e);const i=l.modifiers.color;let f=l.modifiers.center;f=f===!0||n===!0;const s=document.createElement("span"),a=document.createElement("span"),q=de(e),{left:h,top:o,width:y,height:u}=t.getBoundingClientRect(),p=Math.sqrt(y*y+u*u),b=p/2,k=`${(y-p)/2}px`,c=f?k:`${q.left-h-b}px`,x=`${(u-p)/2}px`,S=f?x:`${q.top-o-b}px`;a.className="q-ripple__inner",ke(a,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${c},${S},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${i?" text-"+i:""}`,s.setAttribute("dir","ltr"),s.appendChild(a),t.appendChild(s);const B=()=>{s.remove(),clearTimeout(_)};l.abort.push(B);let _=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${k},${x},0) scale3d(1,1,1)`,a.style.opacity=.2,_=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,_=setTimeout(()=>{s.remove(),l.abort.splice(l.abort.indexOf(B),1)},275)},250)},50)}function G(e,{modifiers:t,value:l,arg:n}){const i=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var Be=pe({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const n={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&X(i,e,n,i.qKeyEvent===!0)},keystart:Ce(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&z(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&X(i,e,n,!0)},300)};G(n,t),e.__qripple=n,se(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&G(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),ce(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},_e=Object.keys(oe),Se={align:{type:String,validator:e=>_e.includes(e)}};function Te(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function Pe(e){return e.appContext.config.globalProperties.$router!==void 0}function J(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Oe(e,t){for(const l in t){const n=t[l],i=e[l];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,s)=>f!==i[s]))return!1}return!0}function Z(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((l,n)=>l===t[n]):e.length===1&&e[0]===t}function Ae(e,t){return Array.isArray(e)===!0?Z(e,t):Array.isArray(t)===!0?Z(t,e):e===t}function Me(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(Ae(e[l],t[l])===!1)return!1;return!0}const je={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ke({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const l=D(),{props:n,proxy:i,emit:f}=l,s=Pe(l),a=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>s===!0&&n.disable!==!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>s===!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=d(()=>q.value===!0?S(n.to):null),o=d(()=>h.value!==null),y=d(()=>a.value===!0||o.value===!0),u=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),p=d(()=>a.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:h.value.href,target:n.target}:{}),b=d(()=>{if(o.value===!1)return-1;const{matched:v}=h.value,{length:E}=v,L=v[E-1];if(L===void 0)return-1;const w=i.$route.matched;if(w.length===0)return-1;const C=w.findIndex(Y.bind(null,L));if(C>-1)return C;const I=J(v[E-2]);return E>1&&J(L)===I&&w[w.length-1].path!==I?w.findIndex(Y.bind(null,v[E-2])):C}),k=d(()=>o.value===!0&&b.value!==-1&&Oe(i.$route.params,h.value.params)),c=d(()=>k.value===!0&&b.value===i.$route.matched.length-1&&Me(i.$route.params,h.value.params)),x=d(()=>o.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function S(v){try{return i.$router.resolve(v)}catch{}return null}function B(v,{returnRouterError:E,to:L=n.to,replace:w=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const C=i.$router[w===!0?"replace":"push"](L);return E===!0?C:C.then(()=>{}).catch(()=>{})}function _(v){if(o.value===!0){const E=L=>B(v,L);f("click",v,E),v.defaultPrevented!==!0&&E()}else f("click",v)}return{hasRouterLink:o,hasHrefLink:a,hasLink:y,linkTag:u,resolvedLink:h,linkIsActive:k,linkIsExactActive:c,linkClass:x,linkAttrs:p,getLink:S,navigateToRouterLink:B,navigateOnClick:_}}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ie={xs:8,sm:10,md:14,lg:20,xl:24},Ne=["button","submit","reset"],Qe=/[^\s]\/[^\s]/,ze=["flat","outline","push","unelevated"],De=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ve={...ne,...je,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ze.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Se.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Fe(e){const t=ae(e,Ie),l=Te(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:s,navigateOnClick:a}=Ke({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),h=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>o.value===!0?e.tabindex||0:-1),u=d(()=>De(e,"standard")),p=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,s.value):Ne.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&Qe.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),b=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=d(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:k,attributes:p,hasLink:i,linkTag:f,navigateOnClick:a,isActionable:o}}const{passiveCapture:$}=be;let P=null,O=null,A=null;var Ge=re({name:"QBtn",props:{...Ve,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:n}=D(),{classes:i,style:f,innerClasses:s,attributes:a,hasLink:q,linkTag:h,navigateOnClick:o,isActionable:y}=Fe(e),u=V(null),p=V(null);let b=null,k,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=d(()=>({center:e.round})),_=d(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const r={onClick:L,onKeydown:w,onMousedown:I};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${g}`]=C}return r}return{onClick:T}}),E=d(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...a.value,...v.value}));function L(r){if(u.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&u.value.contains(g)===!1&&g.contains(u.value)===!1){u.value.focus();const N=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",N,$),u.value!==null&&u.value.removeEventListener("blur",N,$)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",N,$),u.value.addEventListener("blur",N,$)}}o(r)}}function w(r){u.value!==null&&(l("keydown",r),z(r,[13,32])===!0&&O!==u.value&&(O!==null&&M(),r.defaultPrevented!==!0&&(u.value.focus(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),u.value.addEventListener("blur",R,$)),T(r)))}function C(r){u.value!==null&&(l("touchstart",r),r.defaultPrevented!==!0&&(P!==u.value&&(P!==null&&M(),P=u.value,b=r.target,b.addEventListener("touchcancel",R,$),b.addEventListener("touchend",R,$)),k=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,k=!1},200)))}function I(r){u.value!==null&&(r.qSkipRipple=k===!0,l("mousedown",r),r.defaultPrevented!==!0&&A!==u.value&&(A!==null&&M(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,$)))}function R(r){if(u.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===u.value)){if(r!==void 0&&r.type==="keyup"){if(O===u.value&&z(r,[13,32])===!0){const g=new MouseEvent("click",r);g.qKeyEvent=!0,r.defaultPrevented===!0&&me(g),r.cancelBubble===!0&&te(g),u.value.dispatchEvent(g),T(r),r.qKeyEvent=!0}l("keyup",r)}M()}}function M(r){const g=p.value;r!==!0&&(P===u.value||A===u.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),P===u.value&&(b!==null&&(b.removeEventListener("touchcancel",R,$),b.removeEventListener("touchend",R,$)),P=b=null),A===u.value&&(document.removeEventListener("mouseup",R,$),A=null),O===u.value&&(document.removeEventListener("keyup",R,!0),u.value!==null&&u.value.removeEventListener("blur",R,$),O=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(r){T(r),r.qSkipRipple=!0}return fe(()=>{M(!0)}),Object.assign(n,{click:L}),()=>{let r=[];e.icon!==void 0&&r.push(m(W,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&r.push(m("span",{class:"block"},[e.label])),r=K(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(m(W,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[m("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&g.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),g.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},r)),e.loading!==null&&g.push(m(ge,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[m(he)])]:null)),ve(m(h.value,E.value,g),[[Be,S.value,void 0,B.value]])}}});export{W as Q,Ge as a};
