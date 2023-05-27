function lS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),uS=Symbol.for("react.portal"),fS=Symbol.for("react.fragment"),dS=Symbol.for("react.strict_mode"),hS=Symbol.for("react.profiler"),pS=Symbol.for("react.provider"),mS=Symbol.for("react.context"),gS=Symbol.for("react.forward_ref"),vS=Symbol.for("react.suspense"),yS=Symbol.for("react.memo"),_S=Symbol.for("react.lazy"),lm=Symbol.iterator;function wS(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var Ry={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ay=Object.assign,Oy={};function ls(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||Ry}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ly(){}Ly.prototype=ls.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||Ry}var Jd=Xd.prototype=new Ly;Jd.constructor=Xd;Ay(Jd,ls.prototype);Jd.isPureReactComponent=!0;var cm=Array.isArray,Dy=Object.prototype.hasOwnProperty,Zd={current:null},My={key:!0,ref:!0,__self:!0,__source:!0};function Fy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dy.call(e,r)&&!My.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ho,type:t,key:s,ref:o,props:i,_owner:Zd.current}}function ES(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function SS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?SS(""+t.key):e.toString(36)}function Ka(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case uS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+du(o,0):r,cm(i)?(n="",t!=null&&(n=t.replace(um,"$&/")+"/"),Ka(i,e,n,"",function(c){return c})):i!=null&&(eh(i)&&(i=ES(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+du(s,a);o+=Ka(s,e,n,l,i)}else if(l=wS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+du(s,a++),o+=Ka(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var r=[],i=0;return Ka(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ya={transition:null},CS={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:Zd};ue.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=ls;ue.Fragment=fS;ue.Profiler=hS;ue.PureComponent=Xd;ue.StrictMode=dS;ue.Suspense=vS;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CS;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ay({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dy.call(e,l)&&!My.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ho,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:mS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pS,_context:t},t.Consumer=t};ue.createElement=Fy;ue.createFactory=function(t){var e=Fy.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:gS,render:t}};ue.isValidElement=eh;ue.lazy=function(t){return{$$typeof:_S,_payload:{_status:-1,_result:t},_init:kS}};ue.memo=function(t,e){return{$$typeof:yS,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return ht.current.useCallback(t,e)};ue.useContext=function(t){return ht.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};ue.useEffect=function(t,e){return ht.current.useEffect(t,e)};ue.useId=function(){return ht.current.useId()};ue.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return ht.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};ue.useRef=function(t){return ht.current.useRef(t)};ue.useState=function(t){return ht.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return ht.current.useTransition()};ue.version="18.2.0";(function(t){t.exports=ue})(N);const fn=cS(N.exports),df=lS({__proto__:null,default:fn},[N.exports]);var hf={},Uy={exports:{}},Pt={},$y={exports:{}},zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(E,T){var L=E.length;E.push(T);e:for(;0<L;){var D=L-1>>>1,C=E[D];if(0<i(C,T))E[D]=T,E[L]=C,L=D;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],L=E.pop();if(L!==T){E[0]=L;e:for(var D=0,C=E.length,R=C>>>1;D<R;){var U=2*(D+1)-1,W=E[U],w=U+1,Y=E[w];if(0>i(W,L))w<C&&0>i(Y,W)?(E[D]=Y,E[w]=L,D=w):(E[D]=W,E[U]=L,D=U);else if(w<C&&0>i(Y,L))E[D]=Y,E[w]=L,D=w;else break e}}return T}function i(E,T){var L=E.sortIndex-T.sortIndex;return L!==0?L:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,u=null,d=3,h=!1,m=!1,_=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=E)r(c),T.sortIndex=T.expirationTime,e(l,T);else break;T=n(c)}}function S(E){if(_=!1,v(E),!m)if(n(l)!==null)m=!0,x(O);else{var T=n(c);T!==null&&k(S,T.startTime-E)}}function O(E,T){m=!1,_&&(_=!1,g(F),F=-1),h=!0;var L=d;try{for(v(T),u=n(l);u!==null&&(!(u.expirationTime>T)||E&&!pe());){var D=u.callback;if(typeof D=="function"){u.callback=null,d=u.priorityLevel;var C=D(u.expirationTime<=T);T=t.unstable_now(),typeof C=="function"?u.callback=C:u===n(l)&&r(l),v(T)}else r(l);u=n(l)}if(u!==null)var R=!0;else{var U=n(c);U!==null&&k(S,U.startTime-T),R=!1}return R}finally{u=null,d=L,h=!1}}var I=!1,M=null,F=-1,G=5,j=-1;function pe(){return!(t.unstable_now()-j<G)}function we(){if(M!==null){var E=t.unstable_now();j=E;var T=!0;try{T=M(!0,E)}finally{T?ze():(I=!1,M=null)}}else I=!1}var ze;if(typeof p=="function")ze=function(){p(we)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,y=se.port2;se.port1.onmessage=we,ze=function(){y.postMessage(null)}}else ze=function(){b(we,0)};function x(E){M=E,I||(I=!0,ze())}function k(E,T){F=b(function(){E(t.unstable_now())},T)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,x(O))},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(E){switch(d){case 1:case 2:case 3:var T=3;break;default:T=d}var L=d;d=T;try{return E()}finally{d=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=d;d=E;try{return T()}finally{d=L}},t.unstable_scheduleCallback=function(E,T,L){var D=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?D+L:D):L=D,E){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=L+C,E={id:f++,callback:T,priorityLevel:E,startTime:L,expirationTime:C,sortIndex:-1},L>D?(E.sortIndex=L,e(c,E),n(l)===null&&E===n(c)&&(_?(g(F),F=-1):_=!0,k(S,L-D))):(E.sortIndex=C,e(l,E),m||h||(m=!0,x(O))),E},t.unstable_shouldYield=pe,t.unstable_wrapCallback=function(E){var T=d;return function(){var L=d;d=T;try{return E.apply(this,arguments)}finally{d=L}}}})(zy);(function(t){t.exports=zy})($y);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy=N.exports,Tt=$y.exports;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wy=new Set,ao={};function oi(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(ao[t]=e,t=0;t<e.length;t++)Wy.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pf=Object.prototype.hasOwnProperty,bS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},dm={};function IS(t){return pf.call(dm,t)?!0:pf.call(fm,t)?!1:bS.test(t)?dm[t]=!0:(fm[t]=!0,!1)}function xS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TS(t,e,n,r){if(e===null||typeof e>"u"||xS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);nt[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);nt[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TS(e,n,i,r)&&(n=null),r||i===null?IS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),gi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),mf=Symbol.for("react.profiler"),By=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),vf=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Vy=Symbol.for("react.offscreen"),hm=Symbol.iterator;function ws(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,hu;function Ds(t){if(hu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hu=e&&e[1]||""}return`
`+hu+t}var pu=!1;function mu(t,e){if(!t||pu)return"";pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{pu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function PS(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=mu(t.type,!1),t;case 11:return t=mu(t.type.render,!1),t;case 1:return t=mu(t.type,!0),t;default:return""}}function yf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case gi:return"Portal";case mf:return"Profiler";case ih:return"StrictMode";case gf:return"Suspense";case vf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hy:return(t.displayName||"Context")+".Consumer";case By:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:yf(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return yf(t(e))}catch{}}return null}function NS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yf(e);case 8:return e===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RS(t){var e=Gy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=RS(t))}function Ky(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _f(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yy(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function wf(t,e){Yy(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ef(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ef(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ms=Array.isArray;function Li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Ms(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function qy(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var va,Xy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AS=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){AS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function Jy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function Zy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var OS=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cf(t,e){if(e){if(OS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,Di=null,Mi=null;function ym(t){if(t=Ko(t)){if(typeof xf!="function")throw Error($(280));var e=t.stateNode;e&&(e=_c(e),xf(t.stateNode,t.type,e))}}function e_(t){Di?Mi?Mi.push(t):Mi=[t]:Di=t}function t_(){if(Di){var t=Di,e=Mi;if(Mi=Di=null,ym(t),e)for(t=0;t<e.length;t++)ym(e[t])}}function n_(t,e){return t(e)}function r_(){}var gu=!1;function i_(t,e,n){if(gu)return t(e,n);gu=!0;try{return n_(t,e,n)}finally{gu=!1,(Di!==null||Mi!==null)&&(r_(),t_())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Tf=!1;if(Sn)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Tf=!1}function LS(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Bs=!1,pl=null,ml=!1,Pf=null,DS={onError:function(t){Bs=!0,pl=t}};function MS(t,e,n,r,i,s,o,a,l){Bs=!1,pl=null,LS.apply(DS,arguments)}function FS(t,e,n,r,i,s,o,a,l){if(MS.apply(this,arguments),Bs){if(Bs){var c=pl;Bs=!1,pl=null}else throw Error($(198));ml||(ml=!0,Pf=c)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _m(t){if(ai(t)!==t)throw Error($(188))}function US(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _m(i),t;if(s===r)return _m(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function o_(t){return t=US(t),t!==null?a_(t):null}function a_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a_(t);if(e!==null)return e;t=t.sibling}return null}var l_=Tt.unstable_scheduleCallback,wm=Tt.unstable_cancelCallback,$S=Tt.unstable_shouldYield,zS=Tt.unstable_requestPaint,Fe=Tt.unstable_now,jS=Tt.unstable_getCurrentPriorityLevel,lh=Tt.unstable_ImmediatePriority,c_=Tt.unstable_UserBlockingPriority,gl=Tt.unstable_NormalPriority,WS=Tt.unstable_LowPriority,u_=Tt.unstable_IdlePriority,mc=null,on=null;function BS(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:GS,HS=Math.log,VS=Math.LN2;function GS(t){return t>>>=0,t===0?32:31-(HS(t)/VS|0)|0}var ya=64,_a=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fs(a):(s&=o,s!==0&&(r=Fs(s)))}else o=n&~i,o!==0?r=Fs(o):s!==0&&(r=Fs(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function KS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=KS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f_(){var t=ya;return ya<<=1,(ya&4194240)===0&&(ya=64),t}function vu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function qS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function d_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var h_,uh,p_,m_,g_,Rf=!1,wa=[],Jn=null,Zn=null,er=null,uo=new Map,fo=new Map,Wn=[],QS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Em(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Ss(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ko(e),e!==null&&uh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function XS(t,e,n,r,i){switch(e){case"focusin":return Jn=Ss(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=Ss(Zn,t,e,n,r,i),!0;case"mouseover":return er=Ss(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uo.set(s,Ss(uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fo.set(s,Ss(fo.get(s)||null,t,e,n,r,i)),!0}return!1}function v_(t){var e=Lr(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=s_(n),e!==null){t.blockedOn=e,g_(t.priority,function(){p_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);If=r,n.target.dispatchEvent(r),If=null}else return e=Ko(n),e!==null&&uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Sm(t,e,n){qa(t)&&n.delete(e)}function JS(){Rf=!1,Jn!==null&&qa(Jn)&&(Jn=null),Zn!==null&&qa(Zn)&&(Zn=null),er!==null&&qa(er)&&(er=null),uo.forEach(Sm),fo.forEach(Sm)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Rf||(Rf=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,JS)))}function ho(t){function e(i){return ks(i,t)}if(0<wa.length){ks(wa[0],t);for(var n=1;n<wa.length;n++){var r=wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&ks(Jn,t),Zn!==null&&ks(Zn,t),er!==null&&ks(er,t),uo.forEach(e),fo.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)v_(n),n.blockedOn===null&&Wn.shift()}var Fi=An.ReactCurrentBatchConfig,yl=!0;function ZS(t,e,n,r){var i=me,s=Fi.transition;Fi.transition=null;try{me=1,fh(t,e,n,r)}finally{me=i,Fi.transition=s}}function ek(t,e,n,r){var i=me,s=Fi.transition;Fi.transition=null;try{me=4,fh(t,e,n,r)}finally{me=i,Fi.transition=s}}function fh(t,e,n,r){if(yl){var i=Af(t,e,n,r);if(i===null)xu(t,e,r,_l,n),Em(t,r);else if(XS(i,t,e,n,r))r.stopPropagation();else if(Em(t,r),e&4&&-1<QS.indexOf(t)){for(;i!==null;){var s=Ko(i);if(s!==null&&h_(s),s=Af(t,e,n,r),s===null&&xu(t,e,r,_l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xu(t,e,r,null,n)}}var _l=null;function Af(t,e,n,r){if(_l=null,t=ah(r),t=Lr(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jS()){case lh:return 1;case c_:return 4;case gl:case WS:return 16;case u_:return 536870912;default:return 16}default:return 16}}var Yn=null,dh=null,Qa=null;function __(){if(Qa)return Qa;var t,e=dh,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qa=i.slice(t,1<r?1-r:void 0)}function Xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function km(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:km,this.isPropagationStopped=km,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hh=Nt(cs),Go=Re({},cs,{view:0,detail:0}),tk=Nt(Go),yu,_u,Cs,gc=Re({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(yu=t.screenX-Cs.screenX,_u=t.screenY-Cs.screenY):_u=yu=0,Cs=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:_u}}),Cm=Nt(gc),nk=Re({},gc,{dataTransfer:0}),rk=Nt(nk),ik=Re({},Go,{relatedTarget:0}),wu=Nt(ik),sk=Re({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),ok=Nt(sk),ak=Re({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lk=Nt(ak),ck=Re({},cs,{data:0}),bm=Nt(ck),uk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dk[t])?!!e[t]:!1}function ph(){return hk}var pk=Re({},Go,{key:function(t){if(t.key){var e=uk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(t){return t.type==="keypress"?Xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mk=Nt(pk),gk=Re({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=Nt(gk),vk=Re({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),yk=Nt(vk),_k=Re({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),wk=Nt(_k),Ek=Re({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sk=Nt(Ek),kk=[9,13,27,32],mh=Sn&&"CompositionEvent"in window,Hs=null;Sn&&"documentMode"in document&&(Hs=document.documentMode);var Ck=Sn&&"TextEvent"in window&&!Hs,w_=Sn&&(!mh||Hs&&8<Hs&&11>=Hs),xm=String.fromCharCode(32),Tm=!1;function E_(t,e){switch(t){case"keyup":return kk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function bk(t,e){switch(t){case"compositionend":return S_(e);case"keypress":return e.which!==32?null:(Tm=!0,xm);case"textInput":return t=e.data,t===xm&&Tm?null:t;default:return null}}function Ik(t,e){if(yi)return t==="compositionend"||!mh&&E_(t,e)?(t=__(),Qa=dh=Yn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w_&&e.locale!=="ko"?null:e.data;default:return null}}var xk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xk[t.type]:e==="textarea"}function k_(t,e,n,r){e_(r),e=wl(e,"onChange"),0<e.length&&(n=new hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vs=null,po=null;function Tk(t){L_(t,0)}function vc(t){var e=Ei(t);if(Ky(e))return t}function Pk(t,e){if(t==="change")return e}var C_=!1;if(Sn){var Eu;if(Sn){var Su="oninput"in document;if(!Su){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),Su=typeof Nm.oninput=="function"}Eu=Su}else Eu=!1;C_=Eu&&(!document.documentMode||9<document.documentMode)}function Rm(){Vs&&(Vs.detachEvent("onpropertychange",b_),po=Vs=null)}function b_(t){if(t.propertyName==="value"&&vc(po)){var e=[];k_(e,po,t,ah(t)),i_(Tk,e)}}function Nk(t,e,n){t==="focusin"?(Rm(),Vs=e,po=n,Vs.attachEvent("onpropertychange",b_)):t==="focusout"&&Rm()}function Rk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(po)}function Ak(t,e){if(t==="click")return vc(e)}function Ok(t,e){if(t==="input"||t==="change")return vc(e)}function Lk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:Lk;function mo(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pf.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Om(t,e){var n=Am(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Am(n)}}function I_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function x_(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dk(t){var e=x_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I_(n.ownerDocument.documentElement,n)){if(r!==null&&gh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Om(n,s);var o=Om(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mk=Sn&&"documentMode"in document&&11>=document.documentMode,_i=null,Of=null,Gs=null,Lf=!1;function Lm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||_i==null||_i!==hl(r)||(r=_i,"selectionStart"in r&&gh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gs&&mo(Gs,r)||(Gs=r,r=wl(Of,"onSelect"),0<r.length&&(e=new hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},ku={},T_={};Sn&&(T_=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function yc(t){if(ku[t])return ku[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T_)return ku[t]=e[n];return t}var P_=yc("animationend"),N_=yc("animationiteration"),R_=yc("animationstart"),A_=yc("transitionend"),O_=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){O_.set(t,e),oi(e,[t])}for(var Cu=0;Cu<Dm.length;Cu++){var bu=Dm[Cu],Fk=bu.toLowerCase(),Uk=bu[0].toUpperCase()+bu.slice(1);Sr(Fk,"on"+Uk)}Sr(P_,"onAnimationEnd");Sr(N_,"onAnimationIteration");Sr(R_,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(A_,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$k=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function Mm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,FS(r,e,void 0,t),t.currentTarget=null}function L_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Mm(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Mm(i,a,c),s=l}}}if(ml)throw t=Pf,ml=!1,Pf=null,t}function ke(t,e){var n=e[$f];n===void 0&&(n=e[$f]=new Set);var r=t+"__bubble";n.has(r)||(D_(e,t,2,!1),n.add(r))}function Iu(t,e,n){var r=0;e&&(r|=4),D_(n,t,r,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[ka]){t[ka]=!0,Wy.forEach(function(n){n!=="selectionchange"&&($k.has(n)||Iu(n,!1,t),Iu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,Iu("selectionchange",!1,e))}}function D_(t,e,n,r){switch(y_(e)){case 1:var i=ZS;break;case 4:i=ek;break;default:i=fh}n=i.bind(null,e,n,t),i=void 0,!Tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}i_(function(){var c=s,f=ah(n),u=[];e:{var d=O_.get(t);if(d!==void 0){var h=hh,m=t;switch(t){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":h=mk;break;case"focusin":m="focus",h=wu;break;case"focusout":m="blur",h=wu;break;case"beforeblur":case"afterblur":h=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=rk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=yk;break;case P_:case N_:case R_:h=ok;break;case A_:h=wk;break;case"scroll":h=tk;break;case"wheel":h=Sk;break;case"copy":case"cut":case"paste":h=lk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Im}var _=(e&4)!==0,b=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var p=c,v;p!==null;){v=p;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=co(p,g),S!=null&&_.push(vo(p,S,v)))),b)break;p=p.return}0<_.length&&(d=new h(d,m,null,n,f),u.push({event:d,listeners:_}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&n!==If&&(m=n.relatedTarget||n.fromElement)&&(Lr(m)||m[kn]))break e;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=c,m=m?Lr(m):null,m!==null&&(b=ai(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=c),h!==m)){if(_=Cm,S="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Im,S="onPointerLeave",g="onPointerEnter",p="pointer"),b=h==null?d:Ei(h),v=m==null?d:Ei(m),d=new _(S,p+"leave",h,n,f),d.target=b,d.relatedTarget=v,S=null,Lr(f)===c&&(_=new _(g,p+"enter",m,n,f),_.target=v,_.relatedTarget=b,S=_),b=S,h&&m)t:{for(_=h,g=m,p=0,v=_;v;v=ui(v))p++;for(v=0,S=g;S;S=ui(S))v++;for(;0<p-v;)_=ui(_),p--;for(;0<v-p;)g=ui(g),v--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=ui(_),g=ui(g)}_=null}else _=null;h!==null&&Fm(u,d,h,_,!1),m!==null&&b!==null&&Fm(u,b,m,_,!0)}}e:{if(d=c?Ei(c):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var O=Pk;else if(Pm(d))if(C_)O=Ok;else{O=Rk;var I=Nk}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(O=Ak);if(O&&(O=O(t,c))){k_(u,O,n,f);break e}I&&I(t,d,c),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Ef(d,"number",d.value)}switch(I=c?Ei(c):window,t){case"focusin":(Pm(I)||I.contentEditable==="true")&&(_i=I,Of=c,Gs=null);break;case"focusout":Gs=Of=_i=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,Lm(u,n,f);break;case"selectionchange":if(Mk)break;case"keydown":case"keyup":Lm(u,n,f)}var M;if(mh)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else yi?E_(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(w_&&n.locale!=="ko"&&(yi||F!=="onCompositionStart"?F==="onCompositionEnd"&&yi&&(M=__()):(Yn=f,dh="value"in Yn?Yn.value:Yn.textContent,yi=!0)),I=wl(c,F),0<I.length&&(F=new bm(F,t,null,n,f),u.push({event:F,listeners:I}),M?F.data=M:(M=S_(n),M!==null&&(F.data=M)))),(M=Ck?bk(t,n):Ik(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(f=new bm("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=M))}L_(u,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=co(t,n),s!=null&&r.unshift(vo(t,s,i)),s=co(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=co(n,s),l!=null&&o.unshift(vo(n,l,a))):i||(l=co(n,s),l!=null&&o.push(vo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zk=/\r\n?/g,jk=/\u0000|\uFFFD/g;function Um(t){return(typeof t=="string"?t:""+t).replace(zk,`
`).replace(jk,"")}function Ca(t,e,n){if(e=Um(e),Um(t)!==e&&n)throw Error($(425))}function El(){}var Df=null,Mf=null;function Ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,Wk=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,Bk=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(Hk)}:Uf;function Hk(t){setTimeout(function(){throw t})}function Tu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ho(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),rn="__reactFiber$"+us,yo="__reactProps$"+us,kn="__reactContainer$"+us,$f="__reactEvents$"+us,Vk="__reactListeners$"+us,Gk="__reactHandles$"+us;function Lr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zm(t);t!==null;){if(n=t[rn])return n;t=zm(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[rn]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function _c(t){return t[yo]||null}var zf=[],Si=-1;function kr(t){return{current:t}}function Ie(t){0>Si||(t.current=zf[Si],zf[Si]=null,Si--)}function Se(t,e){Si++,zf[Si]=t.current,t.current=e}var pr={},at=kr(pr),_t=kr(!1),Vr=pr;function Ki(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function Sl(){Ie(_t),Ie(at)}function jm(t,e,n){if(at.current!==pr)throw Error($(168));Se(at,e),Se(_t,n)}function M_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,NS(t)||"Unknown",i));return Re({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Vr=at.current,Se(at,t),Se(_t,_t.current),!0}function Wm(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=M_(t,e,Vr),r.__reactInternalMemoizedMergedChildContext=t,Ie(_t),Ie(at),Se(at,t)):Ie(_t),Se(_t,n)}var pn=null,wc=!1,Pu=!1;function F_(t){pn===null?pn=[t]:pn.push(t)}function Kk(t){wc=!0,F_(t)}function Cr(){if(!Pu&&pn!==null){Pu=!0;var t=0,e=me;try{var n=pn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,wc=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),l_(lh,Cr),i}finally{me=e,Pu=!1}}return null}var ki=[],Ci=0,Cl=null,bl=0,Dt=[],Mt=0,Gr=null,mn=1,gn="";function Pr(t,e){ki[Ci++]=bl,ki[Ci++]=Cl,Cl=t,bl=e}function U_(t,e,n){Dt[Mt++]=mn,Dt[Mt++]=gn,Dt[Mt++]=Gr,Gr=t;var r=mn;t=gn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Xt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function vh(t){t.return!==null&&(Pr(t,1),U_(t,1,0))}function yh(t){for(;t===Cl;)Cl=ki[--Ci],ki[Ci]=null,bl=ki[--Ci],ki[Ci]=null;for(;t===Gr;)Gr=Dt[--Mt],Dt[Mt]=null,gn=Dt[--Mt],Dt[Mt]=null,mn=Dt[--Mt],Dt[Mt]=null}var xt=null,It=null,Te=!1,Vt=null;function $_(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,It=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,It=null,!0):!1;default:return!1}}function jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wf(t){if(Te){var e=It;if(e){var n=e;if(!Bm(t,e)){if(jf(t))throw Error($(418));e=tr(n.nextSibling);var r=xt;e&&Bm(t,e)?$_(r,n):(t.flags=t.flags&-4097|2,Te=!1,xt=t)}}else{if(jf(t))throw Error($(418));t.flags=t.flags&-4097|2,Te=!1,xt=t}}}function Hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function ba(t){if(t!==xt)return!1;if(!Te)return Hm(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ff(t.type,t.memoizedProps)),e&&(e=It)){if(jf(t))throw z_(),Error($(418));for(;e;)$_(t,e),e=tr(e.nextSibling)}if(Hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=xt?tr(t.stateNode.nextSibling):null;return!0}function z_(){for(var t=It;t;)t=tr(t.nextSibling)}function Yi(){It=xt=null,Te=!1}function _h(t){Vt===null?Vt=[t]:Vt.push(t)}var Yk=An.ReactCurrentBatchConfig;function Bt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Il=kr(null),xl=null,bi=null,wh=null;function Eh(){wh=bi=xl=null}function Sh(t){var e=Il.current;Ie(Il),t._currentValue=e}function Bf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ui(t,e){xl=t,wh=bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(vt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(wh!==t)if(t={context:t,memoizedValue:e,next:null},bi===null){if(xl===null)throw Error($(308));bi=t,xl.dependencies={lanes:0,firstContext:t}}else bi=bi.next=t;return e}var Dr=null;function kh(t){Dr===null?Dr=[t]:Dr.push(t)}function j_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function Ch(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(de&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,kh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ch(t,n)}}function Vm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tl(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,h=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,_=a;switch(d=e,h=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){u=m.call(h,u,d);break e}u=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,d=typeof m=="function"?m.call(h,u,d):m,d==null)break e;u=Re({},u,d);break e;case 2:jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=h,l=u):f=f.next=h,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(f===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=u}}function Gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var B_=new jy.Component().refs;function Hf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=ir(t),s=wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Jt(e,t,i,r),Ja(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=ir(t),s=wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Jt(e,t,i,r),Ja(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=ir(t),i=wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(Jt(e,t,r,n),Ja(e,t,r))}};function Km(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,r)||!mo(i,s):!0}function H_(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=wt(e)?Vr:at.current,r=e.contextTypes,s=(r=r!=null)?Ki(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ym(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Vf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=B_,Ch(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=wt(e)?Vr:at.current,i.context=Ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ec.enqueueReplaceState(i,i.state,null),Tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===B_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Ia(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function V_(t){function e(g,p){if(t){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=sr(g,p),g.index=0,g.sibling=null,g}function s(g,p,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,v,S){return p===null||p.tag!==6?(p=Mu(v,g.mode,S),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,S){var O=v.type;return O===vi?f(g,p,v.props.children,S,v.key):p!==null&&(p.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===zn&&qm(O)===p.type)?(S=i(p,v.props),S.ref=bs(g,p,v),S.return=g,S):(S=il(v.type,v.key,v.props,null,g.mode,S),S.ref=bs(g,p,v),S.return=g,S)}function c(g,p,v,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Fu(v,g.mode,S),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function f(g,p,v,S,O){return p===null||p.tag!==7?(p=Wr(v,g.mode,S,O),p.return=g,p):(p=i(p,v),p.return=g,p)}function u(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Mu(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ma:return v=il(p.type,p.key,p.props,null,g.mode,v),v.ref=bs(g,null,p),v.return=g,v;case gi:return p=Fu(p,g.mode,v),p.return=g,p;case zn:var S=p._init;return u(g,S(p._payload),v)}if(Ms(p)||ws(p))return p=Wr(p,g.mode,v,null),p.return=g,p;Ia(g,p)}return null}function d(g,p,v,S){var O=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:a(g,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:return v.key===O?l(g,p,v,S):null;case gi:return v.key===O?c(g,p,v,S):null;case zn:return O=v._init,d(g,p,O(v._payload),S)}if(Ms(v)||ws(v))return O!==null?null:f(g,p,v,S,null);Ia(g,v)}return null}function h(g,p,v,S,O){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(p,g,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ma:return g=g.get(S.key===null?v:S.key)||null,l(p,g,S,O);case gi:return g=g.get(S.key===null?v:S.key)||null,c(p,g,S,O);case zn:var I=S._init;return h(g,p,v,I(S._payload),O)}if(Ms(S)||ws(S))return g=g.get(v)||null,f(p,g,S,O,null);Ia(p,S)}return null}function m(g,p,v,S){for(var O=null,I=null,M=p,F=p=0,G=null;M!==null&&F<v.length;F++){M.index>F?(G=M,M=null):G=M.sibling;var j=d(g,M,v[F],S);if(j===null){M===null&&(M=G);break}t&&M&&j.alternate===null&&e(g,M),p=s(j,p,F),I===null?O=j:I.sibling=j,I=j,M=G}if(F===v.length)return n(g,M),Te&&Pr(g,F),O;if(M===null){for(;F<v.length;F++)M=u(g,v[F],S),M!==null&&(p=s(M,p,F),I===null?O=M:I.sibling=M,I=M);return Te&&Pr(g,F),O}for(M=r(g,M);F<v.length;F++)G=h(M,g,F,v[F],S),G!==null&&(t&&G.alternate!==null&&M.delete(G.key===null?F:G.key),p=s(G,p,F),I===null?O=G:I.sibling=G,I=G);return t&&M.forEach(function(pe){return e(g,pe)}),Te&&Pr(g,F),O}function _(g,p,v,S){var O=ws(v);if(typeof O!="function")throw Error($(150));if(v=O.call(v),v==null)throw Error($(151));for(var I=O=null,M=p,F=p=0,G=null,j=v.next();M!==null&&!j.done;F++,j=v.next()){M.index>F?(G=M,M=null):G=M.sibling;var pe=d(g,M,j.value,S);if(pe===null){M===null&&(M=G);break}t&&M&&pe.alternate===null&&e(g,M),p=s(pe,p,F),I===null?O=pe:I.sibling=pe,I=pe,M=G}if(j.done)return n(g,M),Te&&Pr(g,F),O;if(M===null){for(;!j.done;F++,j=v.next())j=u(g,j.value,S),j!==null&&(p=s(j,p,F),I===null?O=j:I.sibling=j,I=j);return Te&&Pr(g,F),O}for(M=r(g,M);!j.done;F++,j=v.next())j=h(M,g,F,j.value,S),j!==null&&(t&&j.alternate!==null&&M.delete(j.key===null?F:j.key),p=s(j,p,F),I===null?O=j:I.sibling=j,I=j);return t&&M.forEach(function(we){return e(g,we)}),Te&&Pr(g,F),O}function b(g,p,v,S){if(typeof v=="object"&&v!==null&&v.type===vi&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:e:{for(var O=v.key,I=p;I!==null;){if(I.key===O){if(O=v.type,O===vi){if(I.tag===7){n(g,I.sibling),p=i(I,v.props.children),p.return=g,g=p;break e}}else if(I.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===zn&&qm(O)===I.type){n(g,I.sibling),p=i(I,v.props),p.ref=bs(g,I,v),p.return=g,g=p;break e}n(g,I);break}else e(g,I);I=I.sibling}v.type===vi?(p=Wr(v.props.children,g.mode,S,v.key),p.return=g,g=p):(S=il(v.type,v.key,v.props,null,g.mode,S),S.ref=bs(g,p,v),S.return=g,g=S)}return o(g);case gi:e:{for(I=v.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Fu(v,g.mode,S),p.return=g,g=p}return o(g);case zn:return I=v._init,b(g,p,I(v._payload),S)}if(Ms(v))return m(g,p,v,S);if(ws(v))return _(g,p,v,S);Ia(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Mu(v,g.mode,S),p.return=g,g=p),o(g)):n(g,p)}return b}var qi=V_(!0),G_=V_(!1),Yo={},an=kr(Yo),_o=kr(Yo),wo=kr(Yo);function Mr(t){if(t===Yo)throw Error($(174));return t}function bh(t,e){switch(Se(wo,e),Se(_o,t),Se(an,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kf(e,t)}Ie(an),Se(an,e)}function Qi(){Ie(an),Ie(_o),Ie(wo)}function K_(t){Mr(wo.current);var e=Mr(an.current),n=kf(e,t.type);e!==n&&(Se(_o,t),Se(an,n))}function Ih(t){_o.current===t&&(Ie(an),Ie(_o))}var Pe=kr(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nu=[];function xh(){for(var t=0;t<Nu.length;t++)Nu[t]._workInProgressVersionPrimary=null;Nu.length=0}var Za=An.ReactCurrentDispatcher,Ru=An.ReactCurrentBatchConfig,Kr=0,Ne=null,je=null,Ke=null,Nl=!1,Ks=!1,Eo=0,qk=0;function rt(){throw Error($(321))}function Th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function Ph(t,e,n,r,i,s){if(Kr=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?Zk:eC,t=n(r,i),Ks){s=0;do{if(Ks=!1,Eo=0,25<=s)throw Error($(301));s+=1,Ke=je=null,e.updateQueue=null,Za.current=tC,t=n(r,i)}while(Ks)}if(Za.current=Rl,e=je!==null&&je.next!==null,Kr=0,Ke=je=Ne=null,Nl=!1,e)throw Error($(300));return t}function Nh(){var t=Eo!==0;return Eo=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function zt(){if(je===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Ke===null?Ne.memoizedState:Ke.next;if(e!==null)Ke=e,je=t;else{if(t===null)throw Error($(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function So(t,e){return typeof e=="function"?e(t):e}function Au(t){var e=zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Kr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,Ne.lanes|=f,Yr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ou(t){var e=zt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Y_(){}function q_(t,e){var n=Ne,r=zt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Rh(J_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,ko(9,X_.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error($(349));(Kr&30)!==0||Q_(n,e,i)}return i}function Q_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function X_(t,e,n,r){e.value=n,e.getSnapshot=r,Z_(e)&&e0(t)}function J_(t,e,n){return n(function(){Z_(e)&&e0(t)})}function Z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function e0(t){var e=Cn(t,1);e!==null&&Jt(e,t,1,-1)}function Qm(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=Jk.bind(null,Ne,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function t0(){return zt().memoizedState}function el(t,e,n,r){var i=nn();Ne.flags|=t,i.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function Sc(t,e,n,r){var i=zt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&Th(r,o.deps)){i.memoizedState=ko(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=ko(1|e,n,s,r)}function Xm(t,e){return el(8390656,8,t,e)}function Rh(t,e){return Sc(2048,8,t,e)}function n0(t,e){return Sc(4,2,t,e)}function r0(t,e){return Sc(4,4,t,e)}function i0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s0(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4,4,i0.bind(null,e,t),n)}function Ah(){}function o0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Th(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function a0(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Th(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function l0(t,e,n){return(Kr&21)===0?(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n):(en(n,e)||(n=f_(),Ne.lanes|=n,Yr|=n,t.baseState=!0),e)}function Qk(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Ru.transition;Ru.transition={};try{t(!1),e()}finally{me=n,Ru.transition=r}}function c0(){return zt().memoizedState}function Xk(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},u0(t))f0(e,n);else if(n=j_(t,e,n,r),n!==null){var i=dt();Jt(n,t,r,i),d0(n,e,r)}}function Jk(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(u0(t))f0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,kh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=j_(t,e,i,r),n!==null&&(i=dt(),Jt(n,t,r,i),d0(n,e,r))}}function u0(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function f0(t,e){Ks=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ch(t,n)}}var Rl={readContext:$t,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Zk={readContext:$t,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:Xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,i0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Xk.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:Ah,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=Qk.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=nn();if(Te){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Qe===null)throw Error($(349));(Kr&30)!==0||Q_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xm(J_.bind(null,r,s,t),[t]),r.flags|=2048,ko(9,X_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=Qe.identifierPrefix;if(Te){var n=gn,r=mn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eC={readContext:$t,useCallback:o0,useContext:$t,useEffect:Rh,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:a0,useReducer:Au,useRef:t0,useState:function(){return Au(So)},useDebugValue:Ah,useDeferredValue:function(t){var e=zt();return l0(e,je.memoizedState,t)},useTransition:function(){var t=Au(So)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Y_,useSyncExternalStore:q_,useId:c0,unstable_isNewReconciler:!1},tC={readContext:$t,useCallback:o0,useContext:$t,useEffect:Rh,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:a0,useReducer:Ou,useRef:t0,useState:function(){return Ou(So)},useDebugValue:Ah,useDeferredValue:function(t){var e=zt();return je===null?e.memoizedState=t:l0(e,je.memoizedState,t)},useTransition:function(){var t=Ou(So)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Y_,useSyncExternalStore:q_,useId:c0,unstable_isNewReconciler:!1};function Xi(t,e){try{var n="",r=e;do n+=PS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nC=typeof WeakMap=="function"?WeakMap:Map;function h0(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,nd=r),Gf(t,e)},n}function p0(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gf(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gC.bind(null,t,e,n),e.then(t,t))}function Zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function eg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var rC=An.ReactCurrentOwner,vt=!1;function ct(t,e,n,r){e.child=t===null?G_(e,null,n,r):qi(e,t.child,n,r)}function tg(t,e,n,r,i){n=n.render;var s=e.ref;return Ui(e,i),r=Ph(t,e,n,r,s,i),n=Nh(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Te&&n&&vh(e),e.flags|=1,ct(t,e,r,i),e.child)}function ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,m0(t,e,s,r,i)):(t=il(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,r)&&t.ref===e.ref)return bn(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function m0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(mo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(vt=!0);else return e.lanes=t.lanes,bn(t,e,i)}return Kf(t,e,n,r,i)}function g0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(xi,bt),bt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(xi,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(xi,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(xi,bt),bt|=r;return ct(t,e,i,n),e.child}function v0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kf(t,e,n,r,i){var s=wt(n)?Vr:at.current;return s=Ki(e,s),Ui(e,i),n=Ph(t,e,n,r,s,i),r=Nh(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Te&&r&&vh(e),e.flags|=1,ct(t,e,n,i),e.child)}function rg(t,e,n,r,i){if(wt(n)){var s=!0;kl(e)}else s=!1;if(Ui(e,i),e.stateNode===null)tl(t,e),H_(e,n,r),Vf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=wt(n)?Vr:at.current,c=Ki(e,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Ym(e,o,r,c),jn=!1;var d=e.memoizedState;o.state=d,Tl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||_t.current||jn?(typeof f=="function"&&(Hf(e,n,f,r),l=e.memoizedState),(a=jn||Km(e,n,a,r,d,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,W_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bt(e.type,a),o.props=c,u=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$t(l):(l=wt(n)?Vr:at.current,l=Ki(e,l));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||d!==l)&&Ym(e,o,r,l),jn=!1,d=e.memoizedState,o.state=d,Tl(e,r,o,i);var m=e.memoizedState;a!==u||d!==m||_t.current||jn?(typeof h=="function"&&(Hf(e,n,h,r),m=e.memoizedState),(c=jn||Km(e,n,c,r,d,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Yf(t,e,n,r,s,i)}function Yf(t,e,n,r,i,s){v0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Wm(e,n,!1),bn(t,e,s);r=e.stateNode,rC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,a,s)):ct(t,e,a,s),e.memoizedState=r.state,i&&Wm(e,n,!0),e.child}function y0(t){var e=t.stateNode;e.pendingContext?jm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jm(t,e.context,!1),bh(t,e.containerInfo)}function ig(t,e,n,r,i){return Yi(),_h(i),e.flags|=256,ct(t,e,n,r),e.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function Qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function _0(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Pe,i&1),t===null)return Wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qf(n),e.memoizedState=qf,t):Oh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qf,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Oh(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xa(t,e,n,r){return r!==null&&_h(r),qi(e,t.child,null,n),t=Oh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lu(Error($(422))),xa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bc({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&qi(e,t.child,null,o),e.child.memoizedState=Qf(o),e.memoizedState=qf,s);if((e.mode&1)===0)return xa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Lu(s,r,void 0),xa(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),Jt(r,t,i,-1))}return $h(),r=Lu(Error($(421))),xa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=tr(i.nextSibling),xt=e,Te=!0,Vt=null,t!==null&&(Dt[Mt++]=mn,Dt[Mt++]=gn,Dt[Mt++]=Gr,mn=t.id,gn=t.overflow,Gr=e),e=Oh(e,r.children),e.flags|=4096,e)}function sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bf(t.return,e,n)}function Du(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function w0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,n,e);else if(t.tag===19)sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Pe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Du(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Du(e,!0,n,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sC(t,e,n){switch(e.tag){case 3:y0(e),Yi();break;case 5:K_(e);break;case 1:wt(e.type)&&kl(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(Il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Pe,Pe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?_0(t,e,n):(Se(Pe,Pe.current&1),t=bn(t,e,n),t!==null?t.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return w0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,g0(t,e,n)}return bn(t,e,n)}var E0,Xf,S0,k0;E0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};S0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(an.current);var s=null;switch(n){case"input":i=_f(t,i),r=_f(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Sf(t,i),r=Sf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=El)}Cf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ao.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ao.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ke("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};k0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Is(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oC(t,e,n){var r=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return wt(e.type)&&Sl(),it(e),null;case 3:return r=e.stateNode,Qi(),Ie(_t),Ie(at),xh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Vt!==null&&(sd(Vt),Vt=null))),Xf(t,e),it(e),null;case 5:Ih(e);var i=Mr(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)S0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return it(e),null}if(t=Mr(an.current),ba(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[yo]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Us.length;i++)ke(Us[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":pm(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":gm(r,s),ke("invalid",r)}Cf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,a,t),i=["children",""+a]):ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":ga(r),mm(r,s,!0);break;case"textarea":ga(r),vm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=El)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[yo]=r,E0(t,e,!1,!1),e.stateNode=t;e:{switch(o=bf(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<Us.length;i++)ke(Us[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":pm(t,r),i=_f(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ke("invalid",t);break;case"textarea":gm(t,r),i=Sf(t,r),ke("invalid",t);break;default:i=r}Cf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ke("scroll",t):l!=null&&rh(t,s,l,o))}switch(n){case"input":ga(t),mm(t,r,!1);break;case"textarea":ga(t),vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Li(t,!!r.multiple,s,!1):r.defaultValue!=null&&Li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return it(e),null;case 6:if(t&&e.stateNode!=null)k0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Mr(wo.current),Mr(an.current),ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:Ca(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return it(e),null;case 13:if(Ie(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&It!==null&&(e.mode&1)!==0&&(e.flags&128)===0)z_(),Yi(),e.flags|=98560,s=!1;else if(s=ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[rn]=e}else Yi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;it(e),s=!1}else Vt!==null&&(sd(Vt),Vt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Pe.current&1)!==0?He===0&&(He=3):$h())),e.updateQueue!==null&&(e.flags|=4),it(e),null);case 4:return Qi(),Xf(t,e),t===null&&go(e.stateNode.containerInfo),it(e),null;case 10:return Sh(e.type._context),it(e),null;case 17:return wt(e.type)&&Sl(),it(e),null;case 19:if(Ie(Pe),s=e.memoizedState,s===null)return it(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Is(s,!1);else{if(He!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,Is(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Ji&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return it(e),null}else 2*Fe()-s.renderingStartTime>Ji&&n!==1073741824&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Pe.current,Se(Pe,r?n&1|2:n&1),e):(it(e),null);case 22:case 23:return Uh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(bt&1073741824)!==0&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function aC(t,e){switch(yh(e),e.tag){case 1:return wt(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),Ie(_t),Ie(at),xh(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Ih(e),null;case 13:if(Ie(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Pe),null;case 4:return Qi(),null;case 10:return Sh(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var Ta=!1,st=!1,lC=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ii(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Jf(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var og=!1;function cC(t,e){if(Df=yl,t=x_(),gh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,u=t,d=null;t:for(;;){for(var h;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(h=u.firstChild)!==null;)d=u,u=h;for(;;){if(u===t)break t;if(d===n&&++c===i&&(a=o),d===s&&++f===r&&(l=o),(h=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mf={focusedElem:t,selectionRange:n},yl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var m=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,b=m.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:Bt(e.type,_),b);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(S){Oe(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return m=og,og=!1,m}function Ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jf(e,n,s)}i=i.next}while(i!==r)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function C0(t){var e=t.alternate;e!==null&&(t.alternate=null,C0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[yo],delete e[$f],delete e[Vk],delete e[Gk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b0(t){return t.tag===5||t.tag===3||t.tag===4}function ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var et=null,Ht=!1;function Fn(t,e,n){for(n=n.child;n!==null;)I0(t,e,n),n=n.sibling}function I0(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:st||Ii(n,e);case 6:var r=et,i=Ht;et=null,Fn(t,e,n),et=r,Ht=i,et!==null&&(Ht?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Ht?(t=et,n=n.stateNode,t.nodeType===8?Tu(t.parentNode,n):t.nodeType===1&&Tu(t,n),ho(t)):Tu(et,n.stateNode));break;case 4:r=et,i=Ht,et=n.stateNode.containerInfo,Ht=!0,Fn(t,e,n),et=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Jf(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!st&&(Ii(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Fn(t,e,n),st=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lC),e.forEach(function(r){var i=yC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:et=a.stateNode,Ht=!1;break e;case 3:et=a.stateNode.containerInfo,Ht=!0;break e;case 4:et=a.stateNode.containerInfo,Ht=!0;break e}a=a.return}if(et===null)throw Error($(160));I0(s,o,i),et=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}function x0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),tn(t),r&4){try{Ys(3,t,t.return),kc(3,t)}catch(_){Oe(t,t.return,_)}try{Ys(5,t,t.return)}catch(_){Oe(t,t.return,_)}}break;case 1:Wt(e,t),tn(t),r&512&&n!==null&&Ii(n,n.return);break;case 5:if(Wt(e,t),tn(t),r&512&&n!==null&&Ii(n,n.return),t.flags&32){var i=t.stateNode;try{lo(i,"")}catch(_){Oe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yy(i,s),bf(a,o);var c=bf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],u=l[o+1];f==="style"?Zy(i,u):f==="dangerouslySetInnerHTML"?Xy(i,u):f==="children"?lo(i,u):rh(i,f,u,c)}switch(a){case"input":wf(i,s);break;case"textarea":qy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Li(i,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?Li(i,!!s.multiple,s.defaultValue,!0):Li(i,!!s.multiple,s.multiple?[]:"",!1))}i[yo]=s}catch(_){Oe(t,t.return,_)}}break;case 6:if(Wt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Oe(t,t.return,_)}}break;case 3:if(Wt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(_){Oe(t,t.return,_)}break;case 4:Wt(e,t),tn(t);break;case 13:Wt(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mh=Fe())),r&4&&lg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(st=(c=st)||f,Wt(e,t),st=c):Wt(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&(t.mode&1)!==0)for(H=t,f=t.child;f!==null;){for(u=H=f;H!==null;){switch(d=H,h=d.child,d.tag){case 0:case 11:case 14:case 15:Ys(4,d,d.return);break;case 1:Ii(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){Oe(r,n,_)}}break;case 5:Ii(d,d.return);break;case 22:if(d.memoizedState!==null){ug(u);continue}}h!==null?(h.return=d,H=h):ug(u)}f=f.sibling}e:for(f=null,u=t;;){if(u.tag===5){if(f===null){f=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jy("display",o))}catch(_){Oe(t,t.return,_)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(_){Oe(t,t.return,_)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Wt(e,t),tn(t),r&4&&lg(t);break;case 21:break;default:Wt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var s=ag(t);td(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ag(t);ed(t,a,o);break;default:throw Error($(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uC(t,e,n){H=t,T0(t)}function T0(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ta;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||st;a=Ta;var c=st;if(Ta=o,(st=l)&&!c)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?fg(i):l!==null?(l.return=o,H=l):fg(i);for(;s!==null;)H=s,T0(s),s=s.sibling;H=i,Ta=a,st=c}cg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,H=s):cg(t)}}function cg(t){for(;H!==null;){var e=H;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:st||kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&ho(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}st||e.flags&512&&Zf(e)}catch(d){Oe(e,e.return,d)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function ug(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function fg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{Zf(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{Zf(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var fC=Math.ceil,Al=An.ReactCurrentDispatcher,Lh=An.ReactCurrentOwner,Ut=An.ReactCurrentBatchConfig,de=0,Qe=null,$e=null,tt=0,bt=0,xi=kr(0),He=0,Co=null,Yr=0,Cc=0,Dh=0,qs=null,gt=null,Mh=0,Ji=1/0,hn=null,Ol=!1,nd=null,rr=null,Pa=!1,qn=null,Ll=0,Qs=0,rd=null,nl=-1,rl=0;function dt(){return(de&6)!==0?Fe():nl!==-1?nl:nl=Fe()}function ir(t){return(t.mode&1)===0?1:(de&2)!==0&&tt!==0?tt&-tt:Yk.transition!==null?(rl===0&&(rl=f_()),rl):(t=me,t!==0||(t=window.event,t=t===void 0?16:y_(t.type)),t)}function Jt(t,e,n,r){if(50<Qs)throw Qs=0,rd=null,Error($(185));Vo(t,n,r),((de&2)===0||t!==Qe)&&(t===Qe&&((de&2)===0&&(Cc|=n),He===4&&Bn(t,tt)),Et(t,r),n===1&&de===0&&(e.mode&1)===0&&(Ji=Fe()+500,wc&&Cr()))}function Et(t,e){var n=t.callbackNode;YS(t,e);var r=vl(t,t===Qe?tt:0);if(r===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?Kk(dg.bind(null,t)):F_(dg.bind(null,t)),Bk(function(){(de&6)===0&&Cr()}),n=null;else{switch(d_(r)){case 1:n=lh;break;case 4:n=c_;break;case 16:n=gl;break;case 536870912:n=u_;break;default:n=gl}n=M0(n,P0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function P0(t,e){if(nl=-1,rl=0,(de&6)!==0)throw Error($(327));var n=t.callbackNode;if($i()&&t.callbackNode!==n)return null;var r=vl(t,t===Qe?tt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Dl(t,r);else{e=r;var i=de;de|=2;var s=R0();(Qe!==t||tt!==e)&&(hn=null,Ji=Fe()+500,jr(t,e));do try{pC();break}catch(a){N0(t,a)}while(1);Eh(),Al.current=s,de=i,$e!==null?e=0:(Qe=null,tt=0,e=He)}if(e!==0){if(e===2&&(i=Nf(t),i!==0&&(r=i,e=id(t,i))),e===1)throw n=Co,jr(t,0),Bn(t,r),Et(t,Fe()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!dC(i)&&(e=Dl(t,r),e===2&&(s=Nf(t),s!==0&&(r=s,e=id(t,s))),e===1))throw n=Co,jr(t,0),Bn(t,r),Et(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Nr(t,gt,hn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=Mh+500-Fe(),10<e)){if(vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uf(Nr.bind(null,t,gt,hn),e);break}Nr(t,gt,hn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fC(r/1960))-r,10<r){t.timeoutHandle=Uf(Nr.bind(null,t,gt,hn),r);break}Nr(t,gt,hn);break;case 5:Nr(t,gt,hn);break;default:throw Error($(329))}}}return Et(t,Fe()),t.callbackNode===n?P0.bind(null,t):null}function id(t,e){var n=qs;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=gt,gt=n,e!==null&&sd(e)),t}function sd(t){gt===null?gt=t:gt.push.apply(gt,t)}function dC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Dh,e&=~Cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function dg(t){if((de&6)!==0)throw Error($(327));$i();var e=vl(t,0);if((e&1)===0)return Et(t,Fe()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var r=Nf(t);r!==0&&(e=r,n=id(t,r))}if(n===1)throw n=Co,jr(t,0),Bn(t,e),Et(t,Fe()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,gt,hn),Et(t,Fe()),null}function Fh(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Ji=Fe()+500,wc&&Cr())}}function qr(t){qn!==null&&qn.tag===0&&(de&6)===0&&$i();var e=de;de|=1;var n=Ut.transition,r=me;try{if(Ut.transition=null,me=1,t)return t()}finally{me=r,Ut.transition=n,de=e,(de&6)===0&&Cr()}}function Uh(){bt=xi.current,Ie(xi)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wk(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(yh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:Qi(),Ie(_t),Ie(at),xh();break;case 5:Ih(r);break;case 4:Qi();break;case 13:Ie(Pe);break;case 19:Ie(Pe);break;case 10:Sh(r.type._context);break;case 22:case 23:Uh()}n=n.return}if(Qe=t,$e=t=sr(t.current,null),tt=bt=e,He=0,Co=null,Dh=Cc=Yr=0,gt=qs=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function N0(t,e){do{var n=$e;try{if(Eh(),Za.current=Rl,Nl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nl=!1}if(Kr=0,Ke=je=Ne=null,Ks=!1,Eo=0,Lh.current=null,n===null||n.return===null){He=1,Co=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,u=f.tag;if((f.mode&1)===0&&(u===0||u===11||u===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Zm(o);if(h!==null){h.flags&=-257,eg(h,o,a,s,e),h.mode&1&&Jm(s,c,e),e=h,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if((e&1)===0){Jm(s,c,e),$h();break e}l=Error($(426))}}else if(Te&&a.mode&1){var b=Zm(o);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),eg(b,o,a,s,e),_h(Xi(l,a));break e}}s=l=Xi(l,a),He!==4&&(He=2),qs===null?qs=[s]:qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=h0(s,l,e);Vm(s,g);break e;case 1:a=l;var p=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rr===null||!rr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=p0(s,a,e);Vm(s,S);break e}}s=s.return}while(s!==null)}O0(n)}catch(O){e=O,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function R0(){var t=Al.current;return Al.current=Rl,t===null?Rl:t}function $h(){(He===0||He===3||He===2)&&(He=4),Qe===null||(Yr&268435455)===0&&(Cc&268435455)===0||Bn(Qe,tt)}function Dl(t,e){var n=de;de|=2;var r=R0();(Qe!==t||tt!==e)&&(hn=null,jr(t,e));do try{hC();break}catch(i){N0(t,i)}while(1);if(Eh(),de=n,Al.current=r,$e!==null)throw Error($(261));return Qe=null,tt=0,He}function hC(){for(;$e!==null;)A0($e)}function pC(){for(;$e!==null&&!$S();)A0($e)}function A0(t){var e=D0(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?O0(t):$e=e,Lh.current=null}function O0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=oC(n,e,bt),n!==null){$e=n;return}}else{if(n=aC(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,$e=null;return}}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);He===0&&(He=5)}function Nr(t,e,n){var r=me,i=Ut.transition;try{Ut.transition=null,me=1,mC(t,e,n,r)}finally{Ut.transition=i,me=r}return null}function mC(t,e,n,r){do $i();while(qn!==null);if((de&6)!==0)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qS(t,s),t===Qe&&($e=Qe=null,tt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Pa||(Pa=!0,M0(gl,function(){return $i(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ut.transition,Ut.transition=null;var o=me;me=1;var a=de;de|=4,Lh.current=null,cC(t,n),x0(n,t),Dk(Mf),yl=!!Df,Mf=Df=null,t.current=n,uC(n),zS(),de=a,me=o,Ut.transition=s}else t.current=n;if(Pa&&(Pa=!1,qn=t,Ll=i),s=t.pendingLanes,s===0&&(rr=null),BS(n.stateNode),Et(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=nd,nd=null,t;return(Ll&1)!==0&&t.tag!==0&&$i(),s=t.pendingLanes,(s&1)!==0?t===rd?Qs++:(Qs=0,rd=t):Qs=0,Cr(),null}function $i(){if(qn!==null){var t=d_(Ll),e=Ut.transition,n=me;try{if(Ut.transition=null,me=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,Ll=0,(de&6)!==0)throw Error($(331));var i=de;for(de|=4,H=t.current;H!==null;){var s=H,o=s.child;if((H.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Ys(8,f,s)}var u=f.child;if(u!==null)u.return=f,H=u;else for(;H!==null;){f=H;var d=f.sibling,h=f.return;if(C0(f),f===c){H=null;break}if(d!==null){d.return=h,H=d;break}H=h}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var b=_.sibling;_.sibling=null,_=b}while(_!==null)}}H=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,H=g;break e}H=s.return}}var p=t.current;for(H=p;H!==null;){o=H;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,H=v;else e:for(o=p;H!==null;){if(a=H,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:kc(9,a)}}catch(O){Oe(a,a.return,O)}if(a===o){H=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,H=S;break e}H=a.return}}if(de=i,Cr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(mc,t)}catch{}r=!0}return r}finally{me=n,Ut.transition=e}}return!1}function hg(t,e,n){e=Xi(n,e),e=h0(t,e,1),t=nr(t,e,1),e=dt(),t!==null&&(Vo(t,1,e),Et(t,e))}function Oe(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=Xi(n,t),t=p0(e,t,1),e=nr(e,t,1),t=dt(),e!==null&&(Vo(e,1,t),Et(e,t));break}}e=e.return}}function gC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(tt&n)===n&&(He===4||He===3&&(tt&130023424)===tt&&500>Fe()-Mh?jr(t,0):Dh|=n),Et(t,e)}function L0(t,e){e===0&&((t.mode&1)===0?e=1:(e=_a,_a<<=1,(_a&130023424)===0&&(_a=4194304)));var n=dt();t=Cn(t,e),t!==null&&(Vo(t,e,n),Et(t,n))}function vC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L0(t,n)}function yC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),L0(t,n)}var D0;D0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return vt=!1,sC(t,e,n);vt=(t.flags&131072)!==0}else vt=!1,Te&&(e.flags&1048576)!==0&&U_(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tl(t,e),t=e.pendingProps;var i=Ki(e,at.current);Ui(e,n),i=Ph(null,e,r,t,i,n);var s=Nh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ch(e),i.updater=Ec,e.stateNode=i,i._reactInternals=e,Vf(e,r,t,n),e=Yf(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&vh(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wC(r),t=Bt(r,t),i){case 0:e=Kf(null,e,r,t,n);break e;case 1:e=rg(null,e,r,t,n);break e;case 11:e=tg(null,e,r,t,n);break e;case 14:e=ng(null,e,r,Bt(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Kf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),rg(t,e,r,i,n);case 3:e:{if(y0(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,W_(t,e),Tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xi(Error($(423)),e),e=ig(t,e,r,n,i);break e}else if(r!==i){i=Xi(Error($(424)),e),e=ig(t,e,r,n,i);break e}else for(It=tr(e.stateNode.containerInfo.firstChild),xt=e,Te=!0,Vt=null,n=G_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){e=bn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return K_(e),t===null&&Wf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ff(r,i)?o=null:s!==null&&Ff(r,s)&&(e.flags|=32),v0(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Wf(e),null;case 13:return _0(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),tg(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(Il,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!_t.current){e=bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=wn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ui(e,n),i=$t(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),ng(t,e,r,i,n);case 15:return m0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),tl(t,e),e.tag=1,wt(r)?(t=!0,kl(e)):t=!1,Ui(e,n),H_(e,r,i),Vf(e,r,i,n),Yf(null,e,r,!0,t,n);case 19:return w0(t,e,n);case 22:return g0(t,e,n)}throw Error($(156,e.tag))};function M0(t,e){return l_(t,e)}function _C(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new _C(t,e,n,r)}function zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wC(t){if(typeof t=="function")return zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===oh)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return Wr(n.children,i,s,e);case ih:o=8,i|=8;break;case mf:return t=Ft(12,n,e,i|2),t.elementType=mf,t.lanes=s,t;case gf:return t=Ft(13,n,e,i),t.elementType=gf,t.lanes=s,t;case vf:return t=Ft(19,n,e,i),t.elementType=vf,t.lanes=s,t;case Vy:return bc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case By:o=10;break e;case Hy:o=9;break e;case sh:o=11;break e;case oh:o=14;break e;case zn:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function bc(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=Vy,t.lanes=n,t.stateNode={isHidden:!1},t}function Mu(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function Fu(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vu(0),this.expirationTimes=vu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jh(t,e,n,r,i,s,o,a,l){return t=new EC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ft(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ch(s),t}function SC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function F0(t){if(!t)return pr;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(wt(n))return M_(t,n,e)}return e}function U0(t,e,n,r,i,s,o,a,l){return t=jh(n,r,!0,t,i,s,o,a,l),t.context=F0(null),n=t.current,r=dt(),i=ir(n),s=wn(r,i),s.callback=e!=null?e:null,nr(n,s,i),t.current.lanes=i,Vo(t,i,r),Et(t,r),t}function Ic(t,e,n,r){var i=e.current,s=dt(),o=ir(i);return n=F0(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(Jt(t,i,o,s),Ja(t,i,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wh(t,e){pg(t,e),(t=t.alternate)&&pg(t,e)}function kC(){return null}var $0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bh(t){this._internalRoot=t}xc.prototype.render=Bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));Ic(t,e,null,null)};xc.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Ic(null,t,null,null)}),e[kn]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=m_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&v_(t)}};function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mg(){}function CC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ml(o);s.call(c)}}var o=U0(e,r,t,0,null,!1,!1,"",mg);return t._reactRootContainer=o,t[kn]=o.current,go(t.nodeType===8?t.parentNode:t),qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ml(l);a.call(c)}}var l=jh(t,0,!1,null,null,!1,!1,"",mg);return t._reactRootContainer=l,t[kn]=l.current,go(t.nodeType===8?t.parentNode:t),qr(function(){Ic(e,l,n,r)}),l}function Pc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ml(o);a.call(l)}}Ic(e,o,t,i)}else o=CC(n,e,t,i,r);return Ml(o)}h_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(ch(e,n|1),Et(e,Fe()),(de&6)===0&&(Ji=Fe()+500,Cr()))}break;case 13:qr(function(){var r=Cn(t,1);if(r!==null){var i=dt();Jt(r,t,1,i)}}),Wh(t,1)}};uh=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=dt();Jt(e,t,134217728,n)}Wh(t,134217728)}};p_=function(t){if(t.tag===13){var e=ir(t),n=Cn(t,e);if(n!==null){var r=dt();Jt(n,t,e,r)}Wh(t,e)}};m_=function(){return me};g_=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};xf=function(t,e,n){switch(e){case"input":if(wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_c(r);if(!i)throw Error($(90));Ky(r),wf(r,i)}}}break;case"textarea":qy(t,n);break;case"select":e=n.value,e!=null&&Li(t,!!n.multiple,e,!1)}};n_=Fh;r_=qr;var bC={usingClientEntryPoint:!1,Events:[Ko,Ei,_c,e_,t_,Fh]},xs={findFiberByHostInstance:Lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},IC={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o_(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||kC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{mc=Na.inject(IC),on=Na}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bC;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(e))throw Error($(200));return SC(t,e,null,n)};Pt.createRoot=function(t,e){if(!Hh(t))throw Error($(299));var n=!1,r="",i=$0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jh(t,1,!1,null,null,n,!1,r,i),t[kn]=e.current,go(t.nodeType===8?t.parentNode:t),new Bh(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=o_(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return qr(t)};Pt.hydrate=function(t,e,n){if(!Tc(e))throw Error($(200));return Pc(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!Hh(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=U0(e,null,t,1,n!=null?n:null,i,!1,s,o),t[kn]=e.current,go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xc(e)};Pt.render=function(t,e,n){if(!Tc(e))throw Error($(200));return Pc(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Tc(t))throw Error($(40));return t._reactRootContainer?(qr(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Fh;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Pc(t,e,n,!1,r)};Pt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Pt})(Uy);var gg=Uy.exports;hf.createRoot=gg.createRoot,hf.hydrateRoot=gg.hydrateRoot;var Nc={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je=typeof Symbol=="function"&&Symbol.for,Vh=Je?Symbol.for("react.element"):60103,Gh=Je?Symbol.for("react.portal"):60106,Rc=Je?Symbol.for("react.fragment"):60107,Ac=Je?Symbol.for("react.strict_mode"):60108,Oc=Je?Symbol.for("react.profiler"):60114,Lc=Je?Symbol.for("react.provider"):60109,Dc=Je?Symbol.for("react.context"):60110,Kh=Je?Symbol.for("react.async_mode"):60111,Mc=Je?Symbol.for("react.concurrent_mode"):60111,Fc=Je?Symbol.for("react.forward_ref"):60112,Uc=Je?Symbol.for("react.suspense"):60113,xC=Je?Symbol.for("react.suspense_list"):60120,$c=Je?Symbol.for("react.memo"):60115,zc=Je?Symbol.for("react.lazy"):60116,TC=Je?Symbol.for("react.block"):60121,PC=Je?Symbol.for("react.fundamental"):60117,NC=Je?Symbol.for("react.responder"):60118,RC=Je?Symbol.for("react.scope"):60119;function Rt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Vh:switch(t=t.type,t){case Kh:case Mc:case Rc:case Oc:case Ac:case Uc:return t;default:switch(t=t&&t.$$typeof,t){case Dc:case Fc:case zc:case $c:case Lc:return t;default:return e}}case Gh:return e}}}function z0(t){return Rt(t)===Mc}ge.AsyncMode=Kh;ge.ConcurrentMode=Mc;ge.ContextConsumer=Dc;ge.ContextProvider=Lc;ge.Element=Vh;ge.ForwardRef=Fc;ge.Fragment=Rc;ge.Lazy=zc;ge.Memo=$c;ge.Portal=Gh;ge.Profiler=Oc;ge.StrictMode=Ac;ge.Suspense=Uc;ge.isAsyncMode=function(t){return z0(t)||Rt(t)===Kh};ge.isConcurrentMode=z0;ge.isContextConsumer=function(t){return Rt(t)===Dc};ge.isContextProvider=function(t){return Rt(t)===Lc};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vh};ge.isForwardRef=function(t){return Rt(t)===Fc};ge.isFragment=function(t){return Rt(t)===Rc};ge.isLazy=function(t){return Rt(t)===zc};ge.isMemo=function(t){return Rt(t)===$c};ge.isPortal=function(t){return Rt(t)===Gh};ge.isProfiler=function(t){return Rt(t)===Oc};ge.isStrictMode=function(t){return Rt(t)===Ac};ge.isSuspense=function(t){return Rt(t)===Uc};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Rc||t===Mc||t===Oc||t===Ac||t===Uc||t===xC||typeof t=="object"&&t!==null&&(t.$$typeof===zc||t.$$typeof===$c||t.$$typeof===Lc||t.$$typeof===Dc||t.$$typeof===Fc||t.$$typeof===PC||t.$$typeof===NC||t.$$typeof===RC||t.$$typeof===TC)};ge.typeOf=Rt;(function(t){t.exports=ge})(Nc);function AC(t){function e(C,R,U,W,w){for(var Y=0,A=0,X=0,q=0,ee,Z,Q=0,ye=0,re,Ue=re=ee=0,fe=0,Ae=0,Dn=0,Ze=0,ha=U.length,_s=ha-1,jt,te="",Me="",uu="",fu="",Mn;fe<ha;){if(Z=U.charCodeAt(fe),fe===_s&&A+q+X+Y!==0&&(A!==0&&(Z=A===47?10:47),q=X=Y=0,ha++,_s++),A+q+X+Y===0){if(fe===_s&&(0<Ae&&(te=te.replace(d,"")),0<te.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:te+=U.charAt(fe)}Z=59}switch(Z){case 123:for(te=te.trim(),ee=te.charCodeAt(0),re=1,Ze=++fe;fe<ha;){switch(Z=U.charCodeAt(fe)){case 123:re++;break;case 125:re--;break;case 47:switch(Z=U.charCodeAt(fe+1)){case 42:case 47:e:{for(Ue=fe+1;Ue<_s;++Ue)switch(U.charCodeAt(Ue)){case 47:if(Z===42&&U.charCodeAt(Ue-1)===42&&fe+2!==Ue){fe=Ue+1;break e}break;case 10:if(Z===47){fe=Ue+1;break e}}fe=Ue}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;fe++<_s&&U.charCodeAt(fe)!==Z;);}if(re===0)break;fe++}switch(re=U.substring(Ze,fe),ee===0&&(ee=(te=te.replace(u,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Ae&&(te=te.replace(d,"")),Z=te.charCodeAt(1),Z){case 100:case 109:case 115:case 45:Ae=R;break;default:Ae=x}if(re=e(R,Ae,re,Z,w+1),Ze=re.length,0<E&&(Ae=n(x,te,Dn),Mn=a(3,re,Ae,R,ze,we,Ze,Z,w,W),te=Ae.join(""),Mn!==void 0&&(Ze=(re=Mn.trim()).length)===0&&(Z=0,re="")),0<Ze)switch(Z){case 115:te=te.replace(I,o);case 100:case 109:case 45:re=te+"{"+re+"}";break;case 107:te=te.replace(p,"$1 $2"),re=te+"{"+re+"}",re=y===1||y===2&&s("@"+re,3)?"@-webkit-"+re+"@"+re:"@"+re;break;default:re=te+re,W===112&&(re=(Me+=re,""))}else re="";break;default:re=e(R,n(R,te,Dn),re,W,w+1)}uu+=re,re=Dn=Ae=Ue=ee=0,te="",Z=U.charCodeAt(++fe);break;case 125:case 59:if(te=(0<Ae?te.replace(d,""):te).trim(),1<(Ze=te.length))switch(Ue===0&&(ee=te.charCodeAt(0),ee===45||96<ee&&123>ee)&&(Ze=(te=te.replace(" ",":")).length),0<E&&(Mn=a(1,te,R,C,ze,we,Me.length,W,w,W))!==void 0&&(Ze=(te=Mn.trim()).length)===0&&(te="\0\0"),ee=te.charCodeAt(0),Z=te.charCodeAt(1),ee){case 0:break;case 64:if(Z===105||Z===99){fu+=te+U.charAt(fe);break}default:te.charCodeAt(Ze-1)!==58&&(Me+=i(te,ee,Z,te.charCodeAt(2)))}Dn=Ae=Ue=ee=0,te="",Z=U.charCodeAt(++fe)}}switch(Z){case 13:case 10:A===47?A=0:1+ee===0&&W!==107&&0<te.length&&(Ae=1,te+="\0"),0<E*L&&a(0,te,R,C,ze,we,Me.length,W,w,W),we=1,ze++;break;case 59:case 125:if(A+q+X+Y===0){we++;break}default:switch(we++,jt=U.charAt(fe),Z){case 9:case 32:if(q+Y+A===0)switch(Q){case 44:case 58:case 9:case 32:jt="";break;default:Z!==32&&(jt=" ")}break;case 0:jt="\\0";break;case 12:jt="\\f";break;case 11:jt="\\v";break;case 38:q+A+Y===0&&(Ae=Dn=1,jt="\f"+jt);break;case 108:if(q+A+Y+se===0&&0<Ue)switch(fe-Ue){case 2:Q===112&&U.charCodeAt(fe-3)===58&&(se=Q);case 8:ye===111&&(se=ye)}break;case 58:q+A+Y===0&&(Ue=fe);break;case 44:A+X+q+Y===0&&(Ae=1,jt+="\r");break;case 34:case 39:A===0&&(q=q===Z?0:q===0?Z:q);break;case 91:q+A+X===0&&Y++;break;case 93:q+A+X===0&&Y--;break;case 41:q+A+Y===0&&X--;break;case 40:if(q+A+Y===0){if(ee===0)switch(2*Q+3*ye){case 533:break;default:ee=1}X++}break;case 64:A+X+q+Y+Ue+re===0&&(re=1);break;case 42:case 47:if(!(0<q+Y+X))switch(A){case 0:switch(2*Z+3*U.charCodeAt(fe+1)){case 235:A=47;break;case 220:Ze=fe,A=42}break;case 42:Z===47&&Q===42&&Ze+2!==fe&&(U.charCodeAt(Ze+2)===33&&(Me+=U.substring(Ze,fe+1)),jt="",A=0)}}A===0&&(te+=jt)}ye=Q,Q=Z,fe++}if(Ze=Me.length,0<Ze){if(Ae=R,0<E&&(Mn=a(2,Me,Ae,C,ze,we,Ze,W,w,W),Mn!==void 0&&(Me=Mn).length===0))return fu+Me+uu;if(Me=Ae.join(",")+"{"+Me+"}",y*se!==0){switch(y!==2||s(Me,2)||(se=0),se){case 111:Me=Me.replace(S,":-moz-$1")+Me;break;case 112:Me=Me.replace(v,"::-webkit-input-$1")+Me.replace(v,"::-moz-$1")+Me.replace(v,":-ms-input-$1")+Me}se=0}}return fu+Me+uu}function n(C,R,U){var W=R.trim().split(b);R=W;var w=W.length,Y=C.length;switch(Y){case 0:case 1:var A=0;for(C=Y===0?"":C[0]+" ";A<w;++A)R[A]=r(C,R[A],U).trim();break;default:var X=A=0;for(R=[];A<w;++A)for(var q=0;q<Y;++q)R[X++]=r(C[q]+" ",W[A],U).trim()}return R}function r(C,R,U){var W=R.charCodeAt(0);switch(33>W&&(W=(R=R.trim()).charCodeAt(0)),W){case 38:return R.replace(g,"$1"+C.trim());case 58:return C.trim()+R.replace(g,"$1"+C.trim());default:if(0<1*U&&0<R.indexOf("\f"))return R.replace(g,(C.charCodeAt(0)===58?"":"$1")+C.trim())}return C+R}function i(C,R,U,W){var w=C+";",Y=2*R+3*U+4*W;if(Y===944){C=w.indexOf(":",9)+1;var A=w.substring(C,w.length-1).trim();return A=w.substring(0,C).trim()+A+";",y===1||y===2&&s(A,1)?"-webkit-"+A+A:A}if(y===0||y===2&&!s(w,1))return w;switch(Y){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(pe,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return A=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+w+"-ms-flex-pack"+A+w;case 1005:return m.test(w)?w.replace(h,":-webkit-")+w.replace(h,":-moz-")+w:w;case 1e3:switch(A=w.substring(13).trim(),R=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(R)){case 226:A=w.replace(O,"tb");break;case 232:A=w.replace(O,"tb-rl");break;case 220:A=w.replace(O,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+A+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(R=(w=C).length-10,A=(w.charCodeAt(R)===33?w.substring(0,R):w).substring(C.indexOf(":",7)+1).trim(),Y=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:w=w.replace(A,"-webkit-"+A)+";"+w;break;case 207:case 102:w=w.replace(A,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+w.replace(A,"-webkit-"+A)+";"+w.replace(A,"-ms-"+A+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return A=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+A+"-ms-flex-"+A+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(F,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(F,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(j.test(C)===!0)return(A=C.substring(C.indexOf(":")+1)).charCodeAt(0)===115?i(C.replace("stretch","fill-available"),R,U,W).replace(":fill-available",":stretch"):w.replace(A,"-webkit-"+A)+w.replace(A,"-moz-"+A.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,U+W===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+w}return w}function s(C,R){var U=C.indexOf(R===1?":":"{"),W=C.substring(0,R!==3?U:10);return U=C.substring(U+1,C.length-1),T(R!==2?W:W.replace(G,"$1"),U,R)}function o(C,R){var U=i(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return U!==R+";"?U.replace(M," or ($1)").substring(4):"("+R+")"}function a(C,R,U,W,w,Y,A,X,q,ee){for(var Z=0,Q=R,ye;Z<E;++Z)switch(ye=k[Z].call(f,C,Q,U,W,w,Y,A,X,q,ee)){case void 0:case!1:case!0:case null:break;default:Q=ye}if(Q!==R)return Q}function l(C){switch(C){case void 0:case null:E=k.length=0;break;default:if(typeof C=="function")k[E++]=C;else if(typeof C=="object")for(var R=0,U=C.length;R<U;++R)l(C[R]);else L=!!C|0}return l}function c(C){return C=C.prefix,C!==void 0&&(T=null,C?typeof C!="function"?y=1:(y=2,T=C):y=0),c}function f(C,R){var U=C;if(33>U.charCodeAt(0)&&(U=U.trim()),D=U,U=[D],0<E){var W=a(-1,R,U,U,ze,we,0,0,0,0);W!==void 0&&typeof W=="string"&&(R=W)}var w=e(x,U,R,0,0);return 0<E&&(W=a(-2,w,U,U,ze,we,w.length,0,0,0),W!==void 0&&(w=W)),D="",se=0,we=ze=1,w}var u=/^\0+/g,d=/[\0\r\f]/g,h=/: */g,m=/zoo|gra/,_=/([,: ])(transform)/g,b=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,S=/:(read-only)/g,O=/[svh]\w+-[tblr]{2}/,I=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,F=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,pe=/([^-])(image-set\()/,we=1,ze=1,se=0,y=1,x=[],k=[],E=0,T=null,L=0,D="";return f.use=l,f.set=c,t!==void 0&&c(t),f}var OC={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function LC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var DC=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,vg=LC(function(t){return DC.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Yh=Nc.exports,MC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},UC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},j0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qh={};qh[Yh.ForwardRef]=UC;qh[Yh.Memo]=j0;function yg(t){return Yh.isMemo(t)?j0:qh[t.$$typeof]||MC}var $C=Object.defineProperty,zC=Object.getOwnPropertyNames,_g=Object.getOwnPropertySymbols,jC=Object.getOwnPropertyDescriptor,WC=Object.getPrototypeOf,wg=Object.prototype;function W0(t,e,n){if(typeof e!="string"){if(wg){var r=WC(e);r&&r!==wg&&W0(t,r,n)}var i=zC(e);_g&&(i=i.concat(_g(e)));for(var s=yg(t),o=yg(e),a=0;a<i.length;++a){var l=i[a];if(!FC[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=jC(e,l);try{$C(t,l,c)}catch{}}}}return t}var BC=W0;function Kt(){return(Kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Eg=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},od=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Nc.exports.typeOf(t)},Fl=Object.freeze([]),or=Object.freeze({});function Zi(t){return typeof t=="function"}function Sg(t){return t.displayName||t.name||"Component"}function Qh(t){return t&&typeof t.styledComponentId=="string"}var es=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Xh=typeof window<"u"&&"HTMLElement"in window,HC=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),VC={};function Qr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var GC=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Qr(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,f=r.length;c<f;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),sl=new Map,Ul=new Map,Xs=1,Ra=function(t){if(sl.has(t))return sl.get(t);for(;Ul.has(Xs);)Xs++;var e=Xs++;return sl.set(t,e),Ul.set(e,t),e},KC=function(t){return Ul.get(t)},YC=function(t,e){e>=Xs&&(Xs=e+1),sl.set(t,e),Ul.set(e,t)},qC="style["+es+'][data-styled-version="5.3.6"]',QC=new RegExp("^"+es+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),XC=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},JC=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(QC);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(YC(c,l),XC(t,c,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},ZC=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},B0=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var f=l[c];if(f&&f.nodeType===1&&f.hasAttribute(es))return f}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(es,"active"),r.setAttribute("data-styled-version","5.3.6");var o=ZC();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},eb=function(){function t(n){var r=this.element=B0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Qr(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),tb=function(){function t(n){var r=this.element=B0(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),nb=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),kg=Xh,rb={isServer:!Xh,useCSSOMInjection:!HC},$l=function(){function t(n,r,i){n===void 0&&(n=or),r===void 0&&(r={}),this.options=Kt({},rb,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Xh&&kg&&(kg=!1,function(s){for(var o=document.querySelectorAll(qC),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(es)!=="active"&&(JC(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}t.registerId=function(n){return Ra(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Kt({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new nb(o):s?new eb(o):new tb(o),new GC(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Ra(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ra(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ra(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=KC(o);if(a!==void 0){var l=n.names.get(a),c=r.getGroup(o);if(l&&c&&l.size){var f=es+".g"+o+'[id="'+a+'"]',u="";l!==void 0&&l.forEach(function(d){d.length>0&&(u+=d+",")}),s+=""+c+f+'{content:"'+u+`"}/*!sc*/
`}}}return s}(this)},t}(),ib=/(a)(d)/gi,Cg=function(t){return String.fromCharCode(t+(t>25?39:97))};function ad(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Cg(e%52)+n;return(Cg(e%52)+n).replace(ib,"$1-$2")}var Ti=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},H0=function(t){return Ti(5381,t)};function V0(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Zi(n)&&!Qh(n))return!1}return!0}var sb=H0("5.3.6"),ob=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&V0(e),this.componentId=n,this.baseHash=Ti(sb,n),this.baseStyle=r,$l.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Xr(this.rules,e,n,r).join(""),a=ad(Ti(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,f=Ti(this.baseHash,r.hash),u="",d=0;d<c;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var m=Xr(h,e,n,r),_=Array.isArray(m)?m.join(""):m;f=Ti(f,_+d),u+=_}}if(u){var b=ad(f>>>0);if(!n.hasNameForId(i,b)){var g=r(u,"."+b,void 0,i);n.insertRules(i,b,g)}s.push(b)}}return s.join(" ")},t}(),ab=/^\s*\/\/.*$/gm,lb=[":","[",".","#"];function cb(t){var e,n,r,i,s=t===void 0?or:t,o=s.options,a=o===void 0?or:o,l=s.plugins,c=l===void 0?Fl:l,f=new AC(a),u=[],d=function(_){function b(g){if(g)try{_(g+"}")}catch{}}return function(g,p,v,S,O,I,M,F,G,j){switch(g){case 1:if(G===0&&p.charCodeAt(0)===64)return _(p+";"),"";break;case 2:if(F===0)return p+"/*|*/";break;case 3:switch(F){case 102:case 112:return _(v[0]+p),"";default:return p+(j===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(b)}}}(function(_){u.push(_)}),h=function(_,b,g){return b===0&&lb.indexOf(g[n.length])!==-1||g.match(i)?_:"."+e};function m(_,b,g,p){p===void 0&&(p="&");var v=_.replace(ab,""),S=b&&g?g+" "+b+" { "+v+" }":v;return e=p,n=b,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(g||!b?"":b,S)}return f.use([].concat(c,[function(_,b,g){_===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,h))},d,function(_){if(_===-2){var b=u;return u=[],b}}])),m.hash=c.length?c.reduce(function(_,b){return b.name||Qr(15),Ti(_,b.name)},5381).toString():"",m}var G0=fn.createContext();G0.Consumer;var K0=fn.createContext(),ub=(K0.Consumer,new $l),ld=cb();function Y0(){return N.exports.useContext(G0)||ub}function q0(){return N.exports.useContext(K0)||ld}var fb=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ld);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Qr(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=ld),this.name+e.hash},t}(),db=/([A-Z])/,hb=/([A-Z])/g,pb=/^ms-/,mb=function(t){return"-"+t.toLowerCase()};function bg(t){return db.test(t)?t.replace(hb,mb).replace(pb,"-ms-"):t}var Ig=function(t){return t==null||t===!1||t===""};function Xr(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Xr(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Ig(t))return"";if(Qh(t))return"."+t.styledComponentId;if(Zi(t)){if(typeof(c=t)!="function"||c.prototype&&c.prototype.isReactComponent||!e)return t;var l=t(e);return Xr(l,e,n,r)}var c;return t instanceof fb?n?(t.inject(n,r),t.getName(r)):t:od(t)?function f(u,d){var h,m,_=[];for(var b in u)u.hasOwnProperty(b)&&!Ig(u[b])&&(Array.isArray(u[b])&&u[b].isCss||Zi(u[b])?_.push(bg(b)+":",u[b],";"):od(u[b])?_.push.apply(_,f(u[b],b)):_.push(bg(b)+": "+(h=b,(m=u[b])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||h in OC?String(m).trim():m+"px")+";"));return d?[d+" {"].concat(_,["}"]):_}(t):t.toString()}var xg=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Q0(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Zi(t)||od(t)?xg(Xr(Eg(Fl,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:xg(Xr(Eg(t,n)))}var X0=function(t,e,n){return n===void 0&&(n=or),t.theme!==n.theme&&t.theme||e||n.theme},gb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vb=/(^-|-$)/g;function Uu(t){return t.replace(gb,"-").replace(vb,"")}var J0=function(t){return ad(H0(t)>>>0)};function Aa(t){return typeof t=="string"&&!0}var cd=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},yb=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function _b(t,e,n){var r=t[n];cd(e)&&cd(r)?Z0(r,e):t[n]=e}function Z0(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(cd(o))for(var a in o)yb(a)&&_b(t,o[a],a)}return t}var bo=fn.createContext();bo.Consumer;function wb(t){var e=N.exports.useContext(bo),n=N.exports.useMemo(function(){return function(r,i){if(!r)return Qr(14);if(Zi(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?Qr(8):i?Kt({},i,{},r):r}(t.theme,e)},[t.theme,e]);return t.children?fn.createElement(bo.Provider,{value:n},t.children):null}var $u={};function e1(t,e,n){var r=Qh(t),i=!Aa(t),s=e.attrs,o=s===void 0?Fl:s,a=e.componentId,l=a===void 0?function(p,v){var S=typeof p!="string"?"sc":Uu(p);$u[S]=($u[S]||0)+1;var O=S+"-"+J0("5.3.6"+S+$u[S]);return v?v+"-"+O:O}(e.displayName,e.parentComponentId):a,c=e.displayName,f=c===void 0?function(p){return Aa(p)?"styled."+p:"Styled("+Sg(p)+")"}(t):c,u=e.displayName&&e.componentId?Uu(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,h=e.shouldForwardProp;r&&t.shouldForwardProp&&(h=e.shouldForwardProp?function(p,v,S){return t.shouldForwardProp(p,v,S)&&e.shouldForwardProp(p,v,S)}:t.shouldForwardProp);var m,_=new ob(n,u,r?t.componentStyle:void 0),b=_.isStatic&&o.length===0,g=function(p,v){return function(S,O,I,M){var F=S.attrs,G=S.componentStyle,j=S.defaultProps,pe=S.foldedComponentIds,we=S.shouldForwardProp,ze=S.styledComponentId,se=S.target,y=function(W,w,Y){W===void 0&&(W=or);var A=Kt({},w,{theme:W}),X={};return Y.forEach(function(q){var ee,Z,Q,ye=q;for(ee in Zi(ye)&&(ye=ye(A)),ye)A[ee]=X[ee]=ee==="className"?(Z=X[ee],Q=ye[ee],Z&&Q?Z+" "+Q:Z||Q):ye[ee]}),[A,X]}(X0(O,N.exports.useContext(bo),j)||or,O,F),x=y[0],k=y[1],E=function(W,w,Y,A){var X=Y0(),q=q0(),ee=w?W.generateAndInjectStyles(or,X,q):W.generateAndInjectStyles(Y,X,q);return ee}(G,M,x),T=I,L=k.$as||O.$as||k.as||O.as||se,D=Aa(L),C=k!==O?Kt({},O,{},k):O,R={};for(var U in C)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?R.as=C[U]:(we?we(U,vg,L):!D||vg(U))&&(R[U]=C[U]));return O.style&&k.style!==O.style&&(R.style=Kt({},O.style,{},k.style)),R.className=Array.prototype.concat(pe,ze,E!==ze?E:null,O.className,k.className).filter(Boolean).join(" "),R.ref=T,N.exports.createElement(L,R)}(m,p,v,b)};return g.displayName=f,(m=fn.forwardRef(g)).attrs=d,m.componentStyle=_,m.displayName=f,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Fl,m.styledComponentId=u,m.target=r?t.target:t,m.withComponent=function(p){var v=e.componentId,S=function(I,M){if(I==null)return{};var F,G,j={},pe=Object.keys(I);for(G=0;G<pe.length;G++)F=pe[G],M.indexOf(F)>=0||(j[F]=I[F]);return j}(e,["componentId"]),O=v&&v+"-"+(Aa(p)?p:Uu(Sg(p)));return e1(p,Kt({},S,{attrs:d,componentId:O}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Z0({},t.defaultProps,p):p}}),m.toString=function(){return"."+m.styledComponentId},i&&BC(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var ud=function(t){return function e(n,r,i){if(i===void 0&&(i=or),!Nc.exports.isValidElementType(r))return Qr(1,String(r));var s=function(){return n(r,i,Q0.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Kt({},i,{},o))},s.attrs=function(o){return e(n,r,Kt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(e1,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){ud[t]=ud(t)});var Eb=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=V0(n),$l.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(Xr(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&$l.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function Sb(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Q0.apply(void 0,[t].concat(n)),s="sc-global-"+J0(JSON.stringify(i)),o=new Eb(i,s);function a(c){var f=Y0(),u=q0(),d=N.exports.useContext(bo),h=N.exports.useRef(f.allocateGSInstance(s)).current;return f.server&&l(h,c,f,d,u),N.exports.useLayoutEffect(function(){if(!f.server)return l(h,c,f,d,u),function(){return o.removeStyles(h,f)}},[h,c,f,d,u]),null}function l(c,f,u,d,h){if(o.isStatic)o.renderStyles(c,VC,u,h);else{var m=Kt({},f,{theme:X0(f,d,a.defaultProps)});o.renderStyles(c,m,u,h)}}return fn.memo(a)}const V=ud;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Io.apply(this,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const Tg="popstate";function kb(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=li(i.location.hash.substr(1));return fd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:xo(s))}function r(i,s){Cb(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return xb(e,n,r,t)}function Cb(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bb(){return Math.random().toString(36).substr(2,8)}function Pg(t){return{usr:t.state,key:t.key}}function fd(t,e,n,r){return n===void 0&&(n=null),Io({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?li(e):e,{state:n,key:e&&e.key||r||bb()})}function xo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function li(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ib(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:xo(t);return new URL(n,e)}function xb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qn.Pop,l=null;function c(){a=Qn.Pop,l&&l({action:a,location:d.location})}function f(h,m){a=Qn.Push;let _=fd(d.location,h,m);n&&n(_,h);let b=Pg(_),g=d.createHref(_);try{o.pushState(b,"",g)}catch{i.location.assign(g)}s&&l&&l({action:a,location:d.location})}function u(h,m){a=Qn.Replace;let _=fd(d.location,h,m);n&&n(_,h);let b=Pg(_),g=d.createHref(_);o.replaceState(b,"",g),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(h){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Tg,c),l=h,()=>{i.removeEventListener(Tg,c),l=null}},createHref(h){return e(i,h)},encodeLocation(h){let m=Ib(xo(h));return Io({},h,{pathname:m.pathname,search:m.search,hash:m.hash})},push:f,replace:u,go(h){return o.go(h)}};return d}var Ng;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ng||(Ng={}));function Tb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?li(e):e,i=n1(r.pathname||"/",n);if(i==null)return null;let s=t1(t);Pb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Ub(s[a],jb(i));return o}function t1(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Xe(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=ar([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),t1(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:Mb(a,i.index),routesMeta:l})}),e}function Pb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Fb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Nb=/^:\w+$/,Rb=3,Ab=2,Ob=1,Lb=10,Db=-2,Rg=t=>t==="*";function Mb(t,e){let n=t.split("/"),r=n.length;return n.some(Rg)&&(r+=Db),e&&(r+=Ab),n.filter(i=>!Rg(i)).reduce((i,s)=>i+(Nb.test(s)?Rb:s===""?Ob:Lb),r)}function Fb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ub(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",f=$b({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!f)return null;Object.assign(r,f.params);let u=a.route;s.push({params:r,pathname:ar([i,f.pathname]),pathnameBase:Vb(ar([i,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(i=ar([i,f.pathnameBase]))}return s}function $b(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,u)=>{if(f==="*"){let d=a[u]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return c[f]=Wb(a[u]||"",f),c},{}),pathname:s,pathnameBase:o,pattern:t}}function zb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jb(t){try{return decodeURI(t)}catch(e){return Jh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wb(t,e){try{return decodeURIComponent(t)}catch(n){return Jh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function n1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Bb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?li(t):t;return{pathname:n?n.startsWith("/")?n:Hb(n,e):e,search:Gb(r),hash:Kb(i)}}function Hb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function r1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function i1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=li(t):(i=Io({},t),Xe(!i.pathname||!i.pathname.includes("?"),zu("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),zu("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),zu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let u=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),u-=1;i.pathname=d.join("/")}a=u>=0?e[u]:"/"}let l=Bb(i,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const ar=t=>t.join("/").replace(/\/\/+/g,"/"),Vb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Gb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Kb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Yb{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function qb(t){return t instanceof Yb}const Qb=new Set(["POST","PUT","PATCH","DELETE"]);[...Qb];var jc={exports:{}},Wc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xb=N.exports,Jb=Symbol.for("react.element"),Zb=Symbol.for("react.fragment"),eI=Object.prototype.hasOwnProperty,tI=Xb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nI={key:!0,ref:!0,__self:!0,__source:!0};function s1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eI.call(e,r)&&!nI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Jb,type:t,key:s,ref:o,props:i,_owner:tI.current}}Wc.Fragment=Zb;Wc.jsx=s1;Wc.jsxs=s1;(function(t){t.exports=Wc})(jc);const Js=jc.exports.Fragment,P=jc.exports.jsx,ie=jc.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dd(){return dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dd.apply(this,arguments)}function rI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const iI=typeof Object.is=="function"?Object.is:rI,{useState:sI,useEffect:oI,useLayoutEffect:aI,useDebugValue:lI}=df;function cI(t,e,n){const r=e(),[{inst:i},s]=sI({inst:{value:r,getSnapshot:e}});return aI(()=>{i.value=r,i.getSnapshot=e,ju(i)&&s({inst:i})},[t,r,e]),oI(()=>(ju(i)&&s({inst:i}),t(()=>{ju(i)&&s({inst:i})})),[t]),lI(r),r}function ju(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!iI(n,r)}catch{return!0}}function uI(t,e,n){return e()}const fI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dI=!fI,hI=dI?uI:cI;"useSyncExternalStore"in df&&(t=>t.useSyncExternalStore)(df);const pI=N.exports.createContext(null),mI=N.exports.createContext(null),o1=N.exports.createContext(null),Zh=N.exports.createContext(null),Bc=N.exports.createContext(null),fs=N.exports.createContext({outlet:null,matches:[]}),a1=N.exports.createContext(null);function gI(t,e){let{relative:n}=e===void 0?{}:e;qo()||Xe(!1);let{basename:r,navigator:i}=N.exports.useContext(Zh),{hash:s,pathname:o,search:a}=c1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ar([r,o])),i.createHref({pathname:l,search:a,hash:s})}function qo(){return N.exports.useContext(Bc)!=null}function Hc(){return qo()||Xe(!1),N.exports.useContext(Bc).location}function ep(){qo()||Xe(!1);let{basename:t,navigator:e}=N.exports.useContext(Zh),{matches:n}=N.exports.useContext(fs),{pathname:r}=Hc(),i=JSON.stringify(r1(n).map(a=>a.pathnameBase)),s=N.exports.useRef(!1);return N.exports.useEffect(()=>{s.current=!0}),N.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=i1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:ar([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,i,r])}function l1(){let{matches:t}=N.exports.useContext(fs),e=t[t.length-1];return e?e.params:{}}function c1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=N.exports.useContext(fs),{pathname:i}=Hc(),s=JSON.stringify(r1(r).map(o=>o.pathnameBase));return N.exports.useMemo(()=>i1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function vI(t,e){qo()||Xe(!1);let n=N.exports.useContext(o1),{matches:r}=N.exports.useContext(fs),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Hc(),l;if(e){var c;let m=typeof e=="string"?li(e):e;o==="/"||((c=m.pathname)==null?void 0:c.startsWith(o))||Xe(!1),l=m}else l=a;let f=l.pathname||"/",u=o==="/"?f:f.slice(o.length)||"/",d=Tb(t,{pathname:u}),h=EI(d&&d.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:ar([o,m.pathname]),pathnameBase:m.pathnameBase==="/"?o:ar([o,m.pathnameBase])})),r,n||void 0);return e&&h?P(Bc.Provider,{value:{location:dd({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Qn.Pop},children:h}):h}function yI(){let t=kI(),e=qb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return ie(Js,{children:[P("h2",{children:"Unhandled Thrown Error!"}),P("h3",{style:{fontStyle:"italic"},children:e}),n?P("pre",{style:i,children:n}):null,P("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),ie("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",P("code",{style:s,children:"errorElement"})," props on\xA0",P("code",{style:s,children:"<Route>"})]})]})}class _I extends N.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P(a1.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function wI(t){let{routeContext:e,match:n,children:r}=t,i=N.exports.useContext(pI);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),P(fs.Provider,{value:e,children:r})}function EI(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Xe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,c=n?o.route.errorElement||P(yI,{}):null,f=()=>P(wI,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?c:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?P(_I,{location:n.location,component:c,error:l,children:f()}):f()},null)}var Ag;(function(t){t.UseRevalidator="useRevalidator"})(Ag||(Ag={}));var hd;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(hd||(hd={}));function SI(t){let e=N.exports.useContext(o1);return e||Xe(!1),e}function kI(){var t;let e=N.exports.useContext(a1),n=SI(hd.UseRouteError),r=N.exports.useContext(fs),i=r.matches[r.matches.length-1];return e||(r||Xe(!1),i.route.id||Xe(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Rr(t){Xe(!1)}function CI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1}=t;qo()&&Xe(!1);let a=e.replace(/^\/*/,"/"),l=N.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=li(r));let{pathname:c="/",search:f="",hash:u="",state:d=null,key:h="default"}=r,m=N.exports.useMemo(()=>{let _=n1(c,a);return _==null?null:{pathname:_,search:f,hash:u,state:d,key:h}},[a,c,f,u,d,h]);return m==null?null:P(Zh.Provider,{value:l,children:P(Bc.Provider,{children:n,value:{location:m,navigationType:i}})})}function bI(t){let{children:e,location:n}=t,r=N.exports.useContext(mI),i=r&&!e?r.router.routes:pd(e);return vI(i,n)}var Og;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Og||(Og={}));new Promise(()=>{});function pd(t,e){e===void 0&&(e=[]);let n=[];return N.exports.Children.forEach(t,(r,i)=>{if(!N.exports.isValidElement(r))return;if(r.type===N.exports.Fragment){n.push.apply(n,pd(r.props.children,e));return}r.type!==Rr&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=pd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function II(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TI(t,e){return t.button===0&&(!e||e==="_self")&&!xI(t)}const PI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function NI(t){let{basename:e,children:n,window:r}=t,i=N.exports.useRef();i.current==null&&(i.current=kb({window:r,v5Compat:!0}));let s=i.current,[o,a]=N.exports.useState({action:s.action,location:s.location});return N.exports.useLayoutEffect(()=>s.listen(a),[s]),P(CI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const u1=N.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f}=e,u=II(e,PI),d=gI(c,{relative:i}),h=RI(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:i});function m(_){r&&r(_),_.defaultPrevented||h(_)}return P("a",{...u,href:d,onClick:s?r:m,ref:n,target:l})});var Lg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Lg||(Lg={}));var Dg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));function RI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=ep(),l=Hc(),c=c1(t,{relative:o});return N.exports.useCallback(f=>{if(TI(f,n)){f.preventDefault();let u=r!==void 0?r:xo(l)===xo(c);a(t,{replace:u,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,t,s,o])}function Mg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mg(Object(n),!0).forEach(function(r){Ve(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zl(t){return zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zl(t)}function AI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fg(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function OI(t,e,n){return e&&Fg(t.prototype,e),n&&Fg(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ve(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tp(t,e){return DI(t)||FI(t,e)||f1(t,e)||$I()}function Qo(t){return LI(t)||MI(t)||f1(t)||UI()}function LI(t){if(Array.isArray(t))return md(t)}function DI(t){if(Array.isArray(t))return t}function MI(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function FI(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function f1(t,e){if(!!t){if(typeof t=="string")return md(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return md(t,e)}}function md(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function UI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ug=function(){},np={},d1={},h1=null,p1={mark:Ug,measure:Ug};try{typeof window<"u"&&(np=window),typeof document<"u"&&(d1=document),typeof MutationObserver<"u"&&(h1=MutationObserver),typeof performance<"u"&&(p1=performance)}catch{}var zI=np.navigator||{},$g=zI.userAgent,zg=$g===void 0?"":$g,mr=np,xe=d1,jg=h1,Oa=p1;mr.document;var On=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",m1=~zg.indexOf("MSIE")||~zg.indexOf("Trident/"),La,Da,Ma,Fa,Ua,In="___FONT_AWESOME___",gd=16,g1="fa",v1="svg-inline--fa",Jr="data-fa-i2svg",vd="data-fa-pseudo-element",jI="data-fa-pseudo-element-pending",rp="data-prefix",ip="data-icon",Wg="fontawesome-i2svg",WI="async",BI=["HTML","HEAD","STYLE","SCRIPT"],y1=function(){try{return!0}catch{return!1}}(),be="classic",Le="sharp",sp=[be,Le];function Xo(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[be]}})}var To=Xo((La={},Ve(La,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ve(La,Le,{fa:"solid",fass:"solid","fa-solid":"solid"}),La)),Po=Xo((Da={},Ve(Da,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ve(Da,Le,{solid:"fass"}),Da)),No=Xo((Ma={},Ve(Ma,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ve(Ma,Le,{fass:"fa-solid"}),Ma)),HI=Xo((Fa={},Ve(Fa,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ve(Fa,Le,{"fa-solid":"fass"}),Fa)),VI=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,_1="fa-layers-text",GI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,KI=Xo((Ua={},Ve(Ua,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ve(Ua,Le,{900:"fass"}),Ua)),w1=[1,2,3,4,5,6,7,8,9,10],YI=w1.concat([11,12,13,14,15,16,17,18,19,20]),qI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ro=new Set;Object.keys(Po[be]).map(Ro.add.bind(Ro));Object.keys(Po[Le]).map(Ro.add.bind(Ro));var QI=[].concat(sp,Qo(Ro),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fr.GROUP,Fr.SWAP_OPACITY,Fr.PRIMARY,Fr.SECONDARY]).concat(w1.map(function(t){return"".concat(t,"x")})).concat(YI.map(function(t){return"w-".concat(t)})),Zs=mr.FontAwesomeConfig||{};function XI(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function JI(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(xe&&typeof xe.querySelector=="function"){var ZI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ZI.forEach(function(t){var e=tp(t,2),n=e[0],r=e[1],i=JI(XI(n));i!=null&&(Zs[r]=i)})}var E1={styleDefault:"solid",familyDefault:"classic",cssPrefix:g1,replacementClass:v1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zs.familyPrefix&&(Zs.cssPrefix=Zs.familyPrefix);var ts=B(B({},E1),Zs);ts.autoReplaceSvg||(ts.observeMutations=!1);var K={};Object.keys(E1).forEach(function(t){Object.defineProperty(K,t,{enumerable:!0,set:function(n){ts[t]=n,eo.forEach(function(r){return r(K)})},get:function(){return ts[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){ts.cssPrefix=e,eo.forEach(function(n){return n(K)})},get:function(){return ts.cssPrefix}});mr.FontAwesomeConfig=K;var eo=[];function ex(t){return eo.push(t),function(){eo.splice(eo.indexOf(t),1)}}var Un=gd,sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tx(t){if(!(!t||!On)){var e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=xe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return xe.head.insertBefore(e,r),t}}var nx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ao(){for(var t=12,e="";t-- >0;)e+=nx[Math.random()*62|0];return e}function ds(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function op(t){return t.classList?ds(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function S1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rx(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(S1(t[n]),'" ')},"").trim()}function Vc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ap(t){return t.size!==sn.size||t.x!==sn.x||t.y!==sn.y||t.rotate!==sn.rotate||t.flipX||t.flipY}function ix(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function sx(t){var e=t.transform,n=t.width,r=n===void 0?gd:n,i=t.height,s=i===void 0?gd:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&m1?l+="translate(".concat(e.x/Un-r/2,"em, ").concat(e.y/Un-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Un,"em), calc(-50% + ").concat(e.y/Un,"em)) "):l+="translate(".concat(e.x/Un,"em, ").concat(e.y/Un,"em) "),l+="scale(".concat(e.size/Un*(e.flipX?-1:1),", ").concat(e.size/Un*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ox=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function k1(){var t=g1,e=v1,n=K.cssPrefix,r=K.replacementClass,i=ox;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Bg=!1;function Wu(){K.autoAddCss&&!Bg&&(tx(k1()),Bg=!0)}var ax={mixout:function(){return{dom:{css:k1,insertCss:Wu}}},hooks:function(){return{beforeDOMElementCreation:function(){Wu()},beforeI2svg:function(){Wu()}}}},xn=mr||{};xn[In]||(xn[In]={});xn[In].styles||(xn[In].styles={});xn[In].hooks||(xn[In].hooks={});xn[In].shims||(xn[In].shims=[]);var Yt=xn[In],C1=[],lx=function t(){xe.removeEventListener("DOMContentLoaded",t),jl=1,C1.map(function(e){return e()})},jl=!1;On&&(jl=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),jl||xe.addEventListener("DOMContentLoaded",lx));function cx(t){!On||(jl?setTimeout(t,0):C1.push(t))}function Jo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?S1(t):"<".concat(e," ").concat(rx(r),">").concat(s.map(Jo).join(""),"</").concat(e,">")}function Hg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ux=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Bu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?ux(n,i):n,l,c,f;for(r===void 0?(l=1,f=e[s[0]]):(l=0,f=r);l<o;l++)c=s[l],f=a(f,e[c],c,e);return f};function fx(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function yd(t){var e=fx(t);return e.length===1?e[0].toString(16):null}function dx(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Vg(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function _d(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Vg(e);typeof Yt.hooks.addPack=="function"&&!i?Yt.hooks.addPack(t,Vg(e)):Yt.styles[t]=B(B({},Yt.styles[t]||{}),s),t==="fas"&&_d("fa",e)}var $a,za,ja,Pi=Yt.styles,hx=Yt.shims,px=($a={},Ve($a,be,Object.values(No[be])),Ve($a,Le,Object.values(No[Le])),$a),lp=null,b1={},I1={},x1={},T1={},P1={},mx=(za={},Ve(za,be,Object.keys(To[be])),Ve(za,Le,Object.keys(To[Le])),za);function gx(t){return~QI.indexOf(t)}function vx(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!gx(i)?i:null}var N1=function(){var e=function(s){return Bu(Pi,function(o,a,l){return o[l]=Bu(a,s,{}),o},{})};b1=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),I1=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),P1=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Pi||K.autoFetchSvg,r=Bu(hx,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});x1=r.names,T1=r.unicodes,lp=Gc(K.styleDefault,{family:K.familyDefault})};ex(function(t){lp=Gc(t.styleDefault,{family:K.familyDefault})});N1();function cp(t,e){return(b1[t]||{})[e]}function yx(t,e){return(I1[t]||{})[e]}function Ur(t,e){return(P1[t]||{})[e]}function R1(t){return x1[t]||{prefix:null,iconName:null}}function _x(t){var e=T1[t],n=cp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gr(){return lp}var up=function(){return{prefix:null,iconName:null,rest:[]}};function Gc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?be:n,i=To[r][t],s=Po[r][t]||Po[r][i],o=t in Yt.styles?t:null;return s||o||null}var Gg=(ja={},Ve(ja,be,Object.keys(No[be])),Ve(ja,Le,Object.keys(No[Le])),ja);function Kc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ve(e,be,"".concat(K.cssPrefix,"-").concat(be)),Ve(e,Le,"".concat(K.cssPrefix,"-").concat(Le)),e),o=null,a=be;(t.includes(s[be])||t.some(function(c){return Gg[be].includes(c)}))&&(a=be),(t.includes(s[Le])||t.some(function(c){return Gg[Le].includes(c)}))&&(a=Le);var l=t.reduce(function(c,f){var u=vx(K.cssPrefix,f);if(Pi[f]?(f=px[a].includes(f)?HI[a][f]:f,o=f,c.prefix=f):mx[a].indexOf(f)>-1?(o=f,c.prefix=Gc(f,{family:a})):u?c.iconName=u:f!==K.replacementClass&&f!==s[be]&&f!==s[Le]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var d=o==="fa"?R1(c.iconName):{},h=Ur(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||h||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!Pi.far&&Pi.fas&&!K.autoFetchSvg&&(c.prefix="fas")}return c},up());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Le&&(Pi.fass||K.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ur(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gr()||"fas"),l}var wx=function(){function t(){AI(this,t),this.definitions={}}return OI(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=B(B({},n.definitions[a]||{}),o[a]),_d(a,o[a]);var l=No[be][a];l&&_d(l,o[a]),N1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[a][u]=c)}),n[a][l]=c}),n}}]),t}(),Kg=[],Ni={},zi={},Ex=Object.keys(zi);function Sx(t,e){var n=e.mixoutsTo;return Kg=t,Ni={},Object.keys(zi).forEach(function(r){Ex.indexOf(r)===-1&&delete zi[r]}),Kg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),zl(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Ni[o]||(Ni[o]=[]),Ni[o].push(s[o])})}r.provides&&r.provides(zi)}),n}function wd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ni[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Zr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ni[t]||[];i.forEach(function(s){s.apply(null,n)})}function Tn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return zi[t]?zi[t].apply(null,e):void 0}function Ed(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||gr();if(!!e)return e=Ur(n,e)||e,Hg(A1.definitions,n,e)||Hg(Yt.styles,n,e)}var A1=new wx,kx=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,Zr("noAuto")},Cx={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return On?(Zr("beforeI2svg",e),Tn("pseudoElements2svg",e),Tn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,cx(function(){Ix({autoReplaceSvgRoot:n}),Zr("watch",e)})}},bx={icon:function(e){if(e===null)return null;if(zl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ur(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Gc(e[0]);return{prefix:r,iconName:Ur(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(K.cssPrefix,"-"))>-1||e.match(VI))){var i=Kc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||gr(),iconName:Ur(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=gr();return{prefix:s,iconName:Ur(s,e)||e}}}},At={noAuto:kx,config:K,dom:Cx,parse:bx,library:A1,findIconDefinition:Ed,toHtml:Jo},Ix=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?xe:n;(Object.keys(Yt.styles).length>0||K.autoFetchSvg)&&On&&K.autoReplaceSvg&&At.dom.i2svg({node:r})};function Yc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Jo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!On){var r=xe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function xx(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(ap(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Vc(B(B({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Tx(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},i),{},{id:o}),children:r}]}]}function fp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,f=t.titleId,u=t.extra,d=t.watchable,h=d===void 0?!1:d,m=r.found?r:n,_=m.width,b=m.height,g=i==="fak",p=[K.replacementClass,s?"".concat(K.cssPrefix,"-").concat(s):""].filter(function(G){return u.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(u.classes).join(" "),v={children:[],attributes:B(B({},u.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(b)})},S=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(_/b*16*.0625,"em")}:{};h&&(v.attributes[Jr]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(f||Ao())},children:[l]}),delete v.attributes.title);var O=B(B({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:B(B({},S),u.styles)}),I=r.found&&n.found?Tn("generateAbstractMask",O)||{children:[],attributes:{}}:Tn("generateAbstractIcon",O)||{children:[],attributes:{}},M=I.children,F=I.attributes;return O.children=M,O.attributes=F,a?Tx(O):xx(O)}function Yg(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=B(B(B({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Jr]="");var f=B({},o.styles);ap(i)&&(f.transform=sx({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var u=Vc(f);u.length>0&&(c.style=u);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function Px(t){var e=t.content,n=t.title,r=t.extra,i=B(B(B({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Vc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Hu=Yt.styles;function Sd(t){var e=t[0],n=t[1],r=t.slice(4),i=tp(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(Fr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Fr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Fr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Nx={found:!1,width:512,height:512};function Rx(t,e){!y1&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function kd(t,e){var n=e;return e==="fa"&&K.styleDefault!==null&&(e=gr()),new Promise(function(r,i){if(Tn("missingIconAbstract"),n==="fa"){var s=R1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Hu[e]&&Hu[e][t]){var o=Hu[e][t];return r(Sd(o))}Rx(t,e),r(B(B({},Nx),{},{icon:K.showMissingIcons&&t?Tn("missingIconAbstract")||{}:{}}))})}var qg=function(){},Cd=K.measurePerformance&&Oa&&Oa.mark&&Oa.measure?Oa:{mark:qg,measure:qg},$s='FA "6.2.1"',Ax=function(e){return Cd.mark("".concat($s," ").concat(e," begins")),function(){return O1(e)}},O1=function(e){Cd.mark("".concat($s," ").concat(e," ends")),Cd.measure("".concat($s," ").concat(e),"".concat($s," ").concat(e," begins"),"".concat($s," ").concat(e," ends"))},dp={begin:Ax,end:O1},ol=function(){};function Qg(t){var e=t.getAttribute?t.getAttribute(Jr):null;return typeof e=="string"}function Ox(t){var e=t.getAttribute?t.getAttribute(rp):null,n=t.getAttribute?t.getAttribute(ip):null;return e&&n}function Lx(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function Dx(){if(K.autoReplaceSvg===!0)return al.replace;var t=al[K.autoReplaceSvg];return t||al.replace}function Mx(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function Fx(t){return xe.createElement(t)}function L1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Mx:Fx:n;if(typeof t=="string")return xe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(L1(o,{ceFn:r}))}),i}function Ux(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var al={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(L1(i),n)}),n.getAttribute(Jr)===null&&K.keepOriginalSource){var r=xe.createComment(Ux(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~op(n).indexOf(K.replacementClass))return al.replace(e);var i=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===K.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Jo(a)}).join(`
`);n.setAttribute(Jr,""),n.innerHTML=o}};function Xg(t){t()}function D1(t,e){var n=typeof e=="function"?e:ol;if(t.length===0)n();else{var r=Xg;K.mutateApproach===WI&&(r=mr.requestAnimationFrame||Xg),r(function(){var i=Dx(),s=dp.begin("mutate");t.map(i),s(),n()})}}var hp=!1;function M1(){hp=!0}function bd(){hp=!1}var Wl=null;function Jg(t){if(!!jg&&!!K.observeMutations){var e=t.treeCallback,n=e===void 0?ol:e,r=t.nodeCallback,i=r===void 0?ol:r,s=t.pseudoElementsCallback,o=s===void 0?ol:s,a=t.observeMutationsRoot,l=a===void 0?xe:a;Wl=new jg(function(c){if(!hp){var f=gr();ds(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Qg(u.addedNodes[0])&&(K.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&K.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Qg(u.target)&&~qI.indexOf(u.attributeName))if(u.attributeName==="class"&&Ox(u.target)){var d=Kc(op(u.target)),h=d.prefix,m=d.iconName;u.target.setAttribute(rp,h||f),m&&u.target.setAttribute(ip,m)}else Lx(u.target)&&i(u.target)})}}),On&&Wl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $x(){!Wl||Wl.disconnect()}function zx(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function jx(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Kc(op(t));return i.prefix||(i.prefix=gr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=yx(i.prefix,t.innerText)||cp(i.prefix,yd(t.innerText))),!i.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Wx(t){var e=ds(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return K.autoA11y&&(n?e["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||Ao()):(e["aria-hidden"]="true",e.focusable="false")),e}function Bx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=jx(t),r=n.iconName,i=n.prefix,s=n.rest,o=Wx(t),a=wd("parseNodeAttributes",{},t),l=e.styleParser?zx(t):[];return B({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var Hx=Yt.styles;function F1(t){var e=K.autoReplaceSvg==="nest"?Zg(t,{styleParser:!1}):Zg(t);return~e.extra.classes.indexOf(_1)?Tn("generateLayersText",t,e):Tn("generateSvgReplacementMutation",t,e)}var vr=new Set;sp.map(function(t){vr.add("fa-".concat(t))});Object.keys(To[be]).map(vr.add.bind(vr));Object.keys(To[Le]).map(vr.add.bind(vr));vr=Qo(vr);function ev(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!On)return Promise.resolve();var n=xe.documentElement.classList,r=function(u){return n.add("".concat(Wg,"-").concat(u))},i=function(u){return n.remove("".concat(Wg,"-").concat(u))},s=K.autoFetchSvg?vr:sp.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Hx));s.includes("fa")||s.push("fa");var o=[".".concat(_1,":not([").concat(Jr,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(Jr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ds(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=dp.begin("onTree"),c=a.reduce(function(f,u){try{var d=F1(u);d&&f.push(d)}catch(h){y1||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,u){Promise.all(c).then(function(d){D1(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(d){l(),u(d)})})}function Vx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F1(t).then(function(n){n&&D1([n],e)})}function Gx(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ed(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ed(i||{})),t(r,B(B({},n),{},{mask:i}))}}var Kx=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?sn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,f=c===void 0?null:c,u=n.title,d=u===void 0?null:u,h=n.titleId,m=h===void 0?null:h,_=n.classes,b=_===void 0?[]:_,g=n.attributes,p=g===void 0?{}:g,v=n.styles,S=v===void 0?{}:v;if(!!e){var O=e.prefix,I=e.iconName,M=e.icon;return Yc(B({type:"icon"},e),function(){return Zr("beforeDOMElementCreation",{iconDefinition:e,params:n}),K.autoA11y&&(d?p["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(m||Ao()):(p["aria-hidden"]="true",p.focusable="false")),fp({icons:{main:Sd(M),mask:l?Sd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:I,transform:B(B({},sn),i),symbol:o,title:d,maskId:f,titleId:m,extra:{attributes:p,styles:S,classes:b}})})}},Yx={mixout:function(){return{icon:Gx(Kx)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ev,n.nodeCallback=Vx,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?xe:r,s=n.callback,o=s===void 0?function(){}:s;return ev(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,f=r.mask,u=r.maskId,d=r.extra;return new Promise(function(h,m){Promise.all([kd(i,a),f.iconName?kd(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var b=tp(_,2),g=b[0],p=b[1];h([n,fp({icons:{main:g,mask:p},prefix:a,iconName:i,transform:l,symbol:c,maskId:u,title:s,titleId:o,extra:d,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Vc(a);l.length>0&&(i.style=l);var c;return ap(o)&&(c=Tn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},qx={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Yc({type:"layer"},function(){Zr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(Qo(s)).join(" ")},children:o}]})}}}},Qx={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,u=f===void 0?{}:f;return Yc({type:"counter",content:n},function(){return Zr("beforeDOMElementCreation",{content:n,params:r}),Px({content:n.toString(),title:s,extra:{attributes:c,styles:u,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(Qo(a))}})})}}}},Xx={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?sn:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,u=f===void 0?{}:f,d=r.styles,h=d===void 0?{}:d;return Yc({type:"text",content:n},function(){return Zr("beforeDOMElementCreation",{content:n,params:r}),Yg({content:n,transform:B(B({},sn),s),title:a,extra:{attributes:u,styles:h,classes:["".concat(K.cssPrefix,"-layers-text")].concat(Qo(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(m1){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/c,l=f.height/c}return K.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yg({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Jx=new RegExp('"',"ug"),tv=[1105920,1112319];function Zx(t){var e=t.replace(Jx,""),n=dx(e,0),r=n>=tv[0]&&n<=tv[1],i=e.length===2?e[0]===e[1]:!1;return{value:yd(i?e[0]:e),isSecondary:r||i}}function nv(t,e){var n="".concat(jI).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ds(t.children),o=s.filter(function(M){return M.getAttribute(vd)===e})[0],a=mr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(GI),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&f!=="none"&&f!==""){var u=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Le:be,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Po[d][l[2].toLowerCase()]:KI[d][c],m=Zx(u),_=m.value,b=m.isSecondary,g=l[0].startsWith("FontAwesome"),p=cp(h,_),v=p;if(g){var S=_x(_);S.iconName&&S.prefix&&(p=S.iconName,h=S.prefix)}if(p&&!b&&(!o||o.getAttribute(rp)!==h||o.getAttribute(ip)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var O=Bx(),I=O.extra;I.attributes[vd]=e,kd(p,h).then(function(M){var F=fp(B(B({},O),{},{icons:{main:M,mask:up()},prefix:h,iconName:v,extra:I,watchable:!0})),G=xe.createElement("svg");e==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=F.map(function(j){return Jo(j)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function eT(t){return Promise.all([nv(t,"::before"),nv(t,"::after")])}function tT(t){return t.parentNode!==document.head&&!~BI.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(vd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function rv(t){if(!!On)return new Promise(function(e,n){var r=ds(t.querySelectorAll("*")).filter(tT).map(eT),i=dp.begin("searchPseudoElements");M1(),Promise.all(r).then(function(){i(),bd(),e()}).catch(function(){i(),bd(),n()})})}var nT={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=rv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?xe:r;K.searchPseudoElements&&rv(i)}}},iv=!1,rT={mixout:function(){return{dom:{unwatch:function(){M1(),iv=!0}}}},hooks:function(){return{bootstrap:function(){Jg(wd("mutationObserverCallbacks",{}))},noAuto:function(){$x()},watch:function(n){var r=n.observeMutationsRoot;iv?bd():Jg(wd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},sv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},iT={mixout:function(){return{parse:{transform:function(n){return sv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=sv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:u,path:d};return{tag:"g",attributes:B({},h.outer),children:[{tag:"g",attributes:B({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:B(B({},r.icon.attributes),h.path)}]}]}}}},Vu={x:0,y:0,width:"100%",height:"100%"};function ov(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function sT(t){return t.tag==="g"?t.children:[t]}var oT={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Kc(i.split(" ").map(function(o){return o.trim()})):up();return s.prefix||(s.prefix=gr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,f=s.icon,u=o.width,d=o.icon,h=ix({transform:l,containerWidth:u,iconWidth:c}),m={tag:"rect",attributes:B(B({},Vu),{},{fill:"white"})},_=f.children?{children:f.children.map(ov)}:{},b={tag:"g",attributes:B({},h.inner),children:[ov(B({tag:f.tag,attributes:B(B({},f.attributes),h.path)},_))]},g={tag:"g",attributes:B({},h.outer),children:[b]},p="mask-".concat(a||Ao()),v="clip-".concat(a||Ao()),S={tag:"mask",attributes:B(B({},Vu),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:sT(d)},S]};return r.push(O,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Vu)}),{children:r,attributes:i}}}},aT={provides:function(e){var n=!1;mr.matchMedia&&(n=mr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:B(B({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=B(B({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:B(B({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:B(B({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B(B({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:B(B({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:B(B({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:B(B({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B(B({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},lT={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},cT=[ax,Yx,qx,Qx,Xx,nT,rT,iT,oT,aT,lT];Sx(cT,{mixoutsTo:At});At.noAuto;At.config;At.library;At.dom;var Id=At.parse;At.findIconDefinition;At.toHtml;var uT=At.icon;At.layer;At.text;At.counter;var oe={exports:{}},fT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dT=fT,hT=dT;function U1(){}function $1(){}$1.resetWarningCache=U1;var pT=function(){function t(r,i,s,o,a,l){if(l!==hT){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:$1,resetWarningCache:U1};return n.PropTypes=n,n};oe.exports=pT();function av(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?av(Object(n),!0).forEach(function(r){Ri(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):av(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bl(t){return Bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bl(t)}function Ri(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function gT(t,e){if(t==null)return{};var n=mT(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function xd(t){return vT(t)||yT(t)||_T(t)||wT()}function vT(t){if(Array.isArray(t))return Td(t)}function yT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _T(t,e){if(!!t){if(typeof t=="string")return Td(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Td(t,e)}}function Td(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function wT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ET(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,u=t.pulse,d=t.fixedWidth,h=t.inverse,m=t.border,_=t.listItem,b=t.flip,g=t.size,p=t.rotation,v=t.pull,S=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":d,"fa-inverse":h,"fa-border":m,"fa-li":_,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Ri(e,"fa-".concat(g),typeof g<"u"&&g!==null),Ri(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Ri(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Ri(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(S).map(function(O){return S[O]?O:null}).filter(function(O){return O})}function ST(t){return t=t-0,t===t}function z1(t){return ST(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var kT=["style"];function CT(t){return t.charAt(0).toUpperCase()+t.slice(1)}function bT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=z1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[CT(i)]=s:e[i]=s,e},{})}function j1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return j1(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=bT(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[z1(c)]=f}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=gT(n,kT);return i.attrs.style=Xn(Xn({},i.attrs.style),o),t.apply(void 0,[e.tag,Xn(Xn({},i.attrs),a)].concat(xd(r)))}var W1=!1;try{W1=!0}catch{}function IT(){if(!W1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function lv(t){if(t&&Bl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Id.icon)return Id.icon(t);if(t===null)return null;if(t&&Bl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ri({},t,e):{}}var br=fn.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,c=lv(n),f=Gu("classes",[].concat(xd(ET(t)),xd(s.split(" ")))),u=Gu("transform",typeof t.transform=="string"?Id.transform(t.transform):t.transform),d=Gu("mask",lv(r)),h=uT(c,Xn(Xn(Xn(Xn({},f),u),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!h)return IT("Could not find icon",c),null;var m=h.abstract,_={ref:e};return Object.keys(t).forEach(function(b){br.defaultProps.hasOwnProperty(b)||(_[b]=t[b])}),xT(m[0],_)});br.displayName="FontAwesomeIcon";br.propTypes={beat:oe.exports.bool,border:oe.exports.bool,beatFade:oe.exports.bool,bounce:oe.exports.bool,className:oe.exports.string,fade:oe.exports.bool,flash:oe.exports.bool,mask:oe.exports.oneOfType([oe.exports.object,oe.exports.array,oe.exports.string]),maskId:oe.exports.string,fixedWidth:oe.exports.bool,inverse:oe.exports.bool,flip:oe.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:oe.exports.oneOfType([oe.exports.object,oe.exports.array,oe.exports.string]),listItem:oe.exports.bool,pull:oe.exports.oneOf(["right","left"]),pulse:oe.exports.bool,rotation:oe.exports.oneOf([0,90,180,270]),shake:oe.exports.bool,size:oe.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:oe.exports.bool,spinPulse:oe.exports.bool,spinReverse:oe.exports.bool,symbol:oe.exports.oneOfType([oe.exports.bool,oe.exports.string]),title:oe.exports.string,titleId:oe.exports.string,transform:oe.exports.oneOfType([oe.exports.string,oe.exports.object]),swapOpacity:oe.exports.bool};br.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var xT=j1.bind(null,fn.createElement),TT={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"]},PT=TT,NT={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},RT={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},AT={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},OT=AT,LT={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},DT=LT,MT={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"]},FT=MT,UT={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM184 496H40c-13.3 0-24-10.7-24-24V328c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"]},$T=UT,zT={prefix:"fas",iconName:"rectangle-xmark",icon:[512,512,[62164,"rectangle-times","times-rectangle","window-close"],"f410","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},jT=zT;const WT=V.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`,BT=V.h1`
  font-weight: normal;
  color: ${t=>t.theme.colors.text};
`,HT=V.div`
  flex-grow: 1;
`,VT=V.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: ${t=>t.theme.colors.text};
`,GT=V(u1)`
  text-decoration: none;
  color: ${t=>t.theme.colors.text};
`,KT=({onClickSettings:t})=>ie(WT,{children:[ie(BT,{children:[P(GT,{to:"/",children:"\u2658"})," react-chess"]}),P(HT,{}),P(VT,{onClick:t,children:P(br,{icon:FT,style:{margin:"auto"}})})]}),YT=V.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,cv=V.p`
  font-weight: normal;
  justify-self: center;
  text-align: left;
  color: ${t=>t.theme.colors.text};
`,qT=V.div`
  flex-grow: 1;
  overflow: hidden;
`,QT=V.a`
  color: ${t=>t.theme.colors.text};
`,XT=()=>ie(YT,{children:[P(cv,{children:"2023 zac"}),P(qT,{}),P(cv,{children:P(QT,{href:"https://github.com/zaccnz/react-chess/",children:"source code"})})]}),pp={hasLoaded:!1,isDarkTheme:!1,darkTheme:!1,useSystemTheme:!0,allowPause:!0,useChessNotation:!1,gameLength:10,defaultUsername:"online player"},Ku=window.matchMedia("(prefers-color-scheme: dark)"),JT=()=>{const t={...pp};t.hasLoaded=!0;const e=localStorage.getItem("react-chess.darkTheme");e&&(t.darkTheme=e==="true");const n=localStorage.getItem("react-chess.useSystemTheme");n&&(t.useSystemTheme=n==="true");const r=localStorage.getItem("react-chess.allowPause");r&&(t.allowPause=r==="true");const i=localStorage.getItem("react-chess.useChessNotation");i&&(t.useChessNotation=i==="true");const s=localStorage.getItem("react-chess.gameLength");s&&(t.gameLength=parseInt(s));const o=localStorage.getItem("react-chess.defaultUsername");return o&&(t.defaultUsername=o),t},uv=t=>{if(!!t.hasLoaded)for(const[e,n]of Object.entries(t))localStorage.setItem(`react-chess.${e}`,n)},Ir=N.exports.createContext({...pp,updateSettings:()=>{}}),ZT=t=>{const[e,n]=N.exports.useState(pp),[r,i]=N.exports.useState(Ku.matches),s=o=>{i(o.matches)};return N.exports.useEffect(()=>(n(JT()),Ku.addEventListener("change",s),()=>{uv(e),Ku.removeEventListener("change",s)}),[]),N.exports.useEffect(()=>{e.useSystemTheme?r!==e.isDarkTheme&&n(o=>{const a={...o};return a.isDarkTheme=r,a}):e.darkTheme!==e.isDarkTheme&&n(o=>{const a={...o};return a.isDarkTheme=e.darkTheme,a})},[e.darkTheme,e.useSystemTheme,r]),N.exports.useEffect(()=>{uv(e)},[e]),P(Ir.Provider,{value:{...e,updateSettings:n},children:t.children})};function e2(){return new Worker("/react-chess/assets/bot.285fa3b0.js")}var Hl={};(function(t){/**
 * @license
 * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.Chess=t.validateFen=t.SQUARES=t.DEFAULT_POSITION=t.KING=t.QUEEN=t.ROOK=t.BISHOP=t.KNIGHT=t.PAWN=t.BLACK=t.WHITE=void 0,t.WHITE="w",t.BLACK="b",t.PAWN="p",t.KNIGHT="n",t.BISHOP="b",t.ROOK="r",t.QUEEN="q",t.KING="k",t.DEFAULT_POSITION="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";const e=-1,n={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"};t.SQUARES=["a8","b8","c8","d8","e8","f8","g8","h8","a7","b7","c7","d7","e7","f7","g7","h7","a6","b6","c6","d6","e6","f6","g6","h6","a5","b5","c5","d5","e5","f5","g5","h5","a4","b4","c4","d4","e4","f4","g4","h4","a3","b3","c3","d3","e3","f3","g3","h3","a2","b2","c2","d2","e2","f2","g2","h2","a1","b1","c1","d1","e1","f1","g1","h1"];const r={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},i={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},s={b:[16,32,17,15],w:[-16,-32,-17,-15]},o={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},a=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],l=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],c={p:1,n:2,b:4,r:8,q:16,k:32},f="pnbrqkPNBRQK",u=[t.KNIGHT,t.BISHOP,t.ROOK,t.QUEEN],d=7,h=6,m=1,_=0,b={w:[{square:i.a1,flag:r.QSIDE_CASTLE},{square:i.h1,flag:r.KSIDE_CASTLE}],b:[{square:i.a8,flag:r.QSIDE_CASTLE},{square:i.h8,flag:r.KSIDE_CASTLE}]},g={b:m,w:h},p=["1-0","0-1","1/2-1/2","*"];function v(se){return se>>4}function S(se){return se&15}function O(se){return"0123456789".indexOf(se)!==-1}function I(se){const y=S(se),x=v(se);return"abcdefgh".substring(y,y+1)+"87654321".substring(x,x+1)}function M(se){return se===t.WHITE?t.BLACK:t.WHITE}function F(se){const y=se.split(/\s+/);if(y.length!==6)return{ok:!1,error:"Invalid FEN: must contain six space-delimited fields"};const x=parseInt(y[5],10);if(isNaN(x)||x<=0)return{ok:!1,error:"Invalid FEN: move number must be a positive integer"};const k=parseInt(y[4],10);if(isNaN(k)||k<0)return{ok:!1,error:"Invalid FEN: half move counter number must be a non-negative integer"};if(!/^(-|[abcdefgh][36])$/.test(y[3]))return{ok:!1,error:"Invalid FEN: en-passant square is invalid"};if(/[^kKqQ-]/.test(y[2]))return{ok:!1,error:"Invalid FEN: castling availability is invalid"};if(!/^(w|b)$/.test(y[1]))return{ok:!1,error:"Invalid FEN: side-to-move is invalid"};const E=y[0].split("/");if(E.length!==8)return{ok:!1,error:"Invalid FEN: piece data does not contain 8 '/'-delimited rows"};for(let L=0;L<E.length;L++){let D=0,C=!1;for(let R=0;R<E[L].length;R++)if(O(E[L][R])){if(C)return{ok:!1,error:"Invalid FEN: piece data is invalid (consecutive number)"};D+=parseInt(E[L][R],10),C=!0}else{if(!/^[prnbqkPRNBQK]$/.test(E[L][R]))return{ok:!1,error:"Invalid FEN: piece data is invalid (invalid piece)"};D+=1,C=!1}if(D!==8)return{ok:!1,error:"Invalid FEN: piece data is invalid (too many squares in rank)"}}if(y[3][1]=="3"&&y[1]=="w"||y[3][1]=="6"&&y[1]=="b")return{ok:!1,error:"Invalid FEN: illegal en-passant square"};const T=[{color:"white",regex:/K/g},{color:"black",regex:/k/g}];for(const{color:L,regex:D}of T){if(!D.test(y[0]))return{ok:!1,error:`Invalid FEN: missing ${L} king`};if((y[0].match(D)||[]).length>1)return{ok:!1,error:`Invalid FEN: too many ${L} kings`}}return{ok:!0}}t.validateFen=F;function G(se,y){const x=se.from,k=se.to,E=se.piece;let T=0,L=0,D=0;for(let C=0,R=y.length;C<R;C++){const U=y[C].from,W=y[C].to,w=y[C].piece;E===w&&x!==U&&k===W&&(T++,v(x)===v(U)&&L++,S(x)===S(U)&&D++)}return T>0?L>0&&D>0?I(x):D>0?I(x).charAt(1):I(x).charAt(0):""}function j(se,y,x,k,E,T=void 0,L=r.NORMAL){const D=v(k);if(E===t.PAWN&&(D===d||D===_))for(let C=0;C<u.length;C++){const R=u[C];se.push({color:y,from:x,to:k,piece:E,captured:T,promotion:R,flags:L|r.PROMOTION})}else se.push({color:y,from:x,to:k,piece:E,captured:T,flags:L})}function pe(se){let y=se.charAt(0);return y>="a"&&y<="h"?se.match(/[a-h]\d.*[a-h]\d/)?void 0:t.PAWN:(y=y.toLowerCase(),y==="o"?t.KING:y)}function we(se){return se.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class ze{constructor(y=t.DEFAULT_POSITION){this._board=new Array(128),this._turn=t.WHITE,this._header={},this._kings={w:e,b:e},this._epSquare=-1,this._halfMoves=0,this._moveNumber=0,this._history=[],this._comments={},this._castling={w:0,b:0},this.load(y)}clear(y=!1){this._board=new Array(128),this._kings={w:e,b:e},this._turn=t.WHITE,this._castling={w:0,b:0},this._epSquare=e,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=y?this._header:{},this._updateSetup(this.fen())}removeHeader(y){y in this._header&&delete this._header[y]}load(y,x=!1){let k=y.split(/\s+/);if(k.length>=2&&k.length<6){const C=["-","-","0","1"];y=k.concat(C.slice(-(6-k.length))).join(" ")}k=y.split(/\s+/);const{ok:E,error:T}=F(y);if(!E)throw new Error(T);const L=k[0];let D=0;this.clear(x);for(let C=0;C<L.length;C++){const R=L.charAt(C);if(R==="/")D+=8;else if(O(R))D+=parseInt(R,10);else{const U=R<"a"?t.WHITE:t.BLACK;this.put({type:R.toLowerCase(),color:U},I(D)),D++}}this._turn=k[1],k[2].indexOf("K")>-1&&(this._castling.w|=r.KSIDE_CASTLE),k[2].indexOf("Q")>-1&&(this._castling.w|=r.QSIDE_CASTLE),k[2].indexOf("k")>-1&&(this._castling.b|=r.KSIDE_CASTLE),k[2].indexOf("q")>-1&&(this._castling.b|=r.QSIDE_CASTLE),this._epSquare=k[3]==="-"?e:i[k[3]],this._halfMoves=parseInt(k[4],10),this._moveNumber=parseInt(k[5],10),this._updateSetup(this.fen())}fen(){var y,x;let k=0,E="";for(let D=i.a8;D<=i.h1;D++){if(this._board[D]){k>0&&(E+=k,k=0);const{color:C,type:R}=this._board[D];E+=C===t.WHITE?R.toUpperCase():R.toLowerCase()}else k++;D+1&136&&(k>0&&(E+=k),D!==i.h1&&(E+="/"),k=0,D+=8)}let T="";this._castling[t.WHITE]&r.KSIDE_CASTLE&&(T+="K"),this._castling[t.WHITE]&r.QSIDE_CASTLE&&(T+="Q"),this._castling[t.BLACK]&r.KSIDE_CASTLE&&(T+="k"),this._castling[t.BLACK]&r.QSIDE_CASTLE&&(T+="q"),T=T||"-";let L="-";if(this._epSquare!==e){const D=this._epSquare+(this._turn===t.WHITE?16:-16),C=[D+1,D-1];for(const R of C){if(R&136)continue;const U=this._turn;if(((y=this._board[R])===null||y===void 0?void 0:y.color)===U&&((x=this._board[R])===null||x===void 0?void 0:x.type)===t.PAWN){this._makeMove({color:U,from:R,to:this._epSquare,piece:t.PAWN,captured:t.PAWN,flags:r.EP_CAPTURE});const W=!this._isKingAttacked(U);if(this._undoMove(),W){L=I(this._epSquare);break}}}}return[E,this._turn,T,L,this._halfMoves,this._moveNumber].join(" ")}_updateSetup(y){this._history.length>0||(y!==t.DEFAULT_POSITION?(this._header.SetUp="1",this._header.FEN=y):(delete this._header.SetUp,delete this._header.FEN))}reset(){this.load(t.DEFAULT_POSITION)}get(y){return this._board[i[y]]||!1}put({type:y,color:x},k){if(f.indexOf(y.toLowerCase())===-1||!(k in i))return!1;const E=i[k];return y==t.KING&&!(this._kings[x]==e||this._kings[x]==E)?!1:(this._board[E]={type:y,color:x},y===t.KING&&(this._kings[x]=E),this._updateSetup(this.fen()),!0)}remove(y){const x=this.get(y);return delete this._board[i[y]],x&&x.type===t.KING&&(this._kings[x.color]=e),this._updateSetup(this.fen()),x}_attacked(y,x){for(let k=i.a8;k<=i.h1;k++){if(k&136){k+=7;continue}if(this._board[k]===void 0||this._board[k].color!==y)continue;const E=this._board[k],T=k-x;if(T===0)continue;const L=T+119;if(a[L]&c[E.type]){if(E.type===t.PAWN){if(T>0){if(E.color===t.WHITE)return!0}else if(E.color===t.BLACK)return!0;continue}if(E.type==="n"||E.type==="k")return!0;const D=l[L];let C=k+D,R=!1;for(;C!==x;){if(this._board[C]!=null){R=!0;break}C+=D}if(!R)return!0}}return!1}_isKingAttacked(y){const x=this._kings[y];return x===-1?!1:this._attacked(M(y),x)}isAttacked(y,x){return this._attacked(x,i[y])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const y={b:0,n:0,r:0,q:0,k:0,p:0},x=[];let k=0,E=0;for(let T=i.a8;T<=i.h1;T++){if(E=(E+1)%2,T&136){T+=7;continue}const L=this._board[T];L&&(y[L.type]=L.type in y?y[L.type]+1:1,L.type===t.BISHOP&&x.push(E),k++)}if(k===2)return!0;if(k===3&&(y[t.BISHOP]===1||y[t.KNIGHT]===1))return!0;if(k===y[t.BISHOP]+2){let T=0;const L=x.length;for(let D=0;D<L;D++)T+=x[D];if(T===0||T===L)return!0}return!1}isThreefoldRepetition(){const y=[],x={};let k=!1;for(;;){const E=this._undoMove();if(!E)break;y.push(E)}for(;;){const E=this.fen().split(" ").slice(0,4).join(" ");x[E]=E in x?x[E]+1:1,x[E]>=3&&(k=!0);const T=y.pop();if(T)this._makeMove(T);else break}return k}isDraw(){return this._halfMoves>=100||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isStalemate()||this.isDraw()}moves({verbose:y=!1,square:x=void 0,piece:k=void 0}={}){const E=this._moves({square:x,piece:k});return y?E.map(T=>this._makePretty(T)):E.map(T=>this._moveToSan(T,E))}_moves({legal:y=!0,piece:x=void 0,square:k=void 0}={}){var E;const T=k?k.toLowerCase():void 0,L=x==null?void 0:x.toLowerCase(),D=[],C=this._turn,R=M(C);let U=i.a8,W=i.h1,w=!1;if(T)if(T in i)U=W=i[T],w=!0;else return[];for(let A=U;A<=W;A++){if(A&136){A+=7;continue}if(!this._board[A]||this._board[A].color===R)continue;const{type:X}=this._board[A];let q;if(X===t.PAWN){if(L&&L!==X)continue;q=A+s[C][0],this._board[q]||(j(D,C,A,q,t.PAWN),q=A+s[C][1],g[C]===v(A)&&!this._board[q]&&j(D,C,A,q,t.PAWN,void 0,r.BIG_PAWN));for(let ee=2;ee<4;ee++)q=A+s[C][ee],!(q&136)&&(((E=this._board[q])===null||E===void 0?void 0:E.color)===R?j(D,C,A,q,t.PAWN,this._board[q].type,r.CAPTURE):q===this._epSquare&&j(D,C,A,q,t.PAWN,t.PAWN,r.EP_CAPTURE))}else{if(L&&L!==X)continue;for(let ee=0,Z=o[X].length;ee<Z;ee++){const Q=o[X][ee];for(q=A;q+=Q,!(q&136);){if(!this._board[q])j(D,C,A,q,X);else{if(this._board[q].color===C)break;j(D,C,A,q,X,this._board[q].type,r.CAPTURE);break}if(X===t.KNIGHT||X===t.KING)break}}}}if((L===void 0||L===t.KING)&&(!w||W===this._kings[C])){if(this._castling[C]&r.KSIDE_CASTLE){const A=this._kings[C],X=A+2;!this._board[A+1]&&!this._board[X]&&!this._attacked(R,this._kings[C])&&!this._attacked(R,A+1)&&!this._attacked(R,X)&&j(D,C,this._kings[C],X,t.KING,void 0,r.KSIDE_CASTLE)}if(this._castling[C]&r.QSIDE_CASTLE){const A=this._kings[C],X=A-2;!this._board[A-1]&&!this._board[A-2]&&!this._board[A-3]&&!this._attacked(R,this._kings[C])&&!this._attacked(R,A-1)&&!this._attacked(R,X)&&j(D,C,this._kings[C],X,t.KING,void 0,r.QSIDE_CASTLE)}}if(!y||this._kings[C]===-1)return D;const Y=[];for(let A=0,X=D.length;A<X;A++)this._makeMove(D[A]),this._isKingAttacked(C)||Y.push(D[A]),this._undoMove();return Y}move(y,{strict:x=!1}={}){let k=null;if(typeof y=="string")k=this._moveFromSan(y,x);else if(typeof y=="object"){const T=this._moves();for(let L=0,D=T.length;L<D;L++)if(y.from===I(T[L].from)&&y.to===I(T[L].to)&&(!("promotion"in T[L])||y.promotion===T[L].promotion)){k=T[L];break}}if(!k)throw typeof y=="string"?new Error(`Invalid move: ${y}`):new Error(`Invalid move: ${JSON.stringify(y)}`);const E=this._makePretty(k);return this._makeMove(k),E}_push(y){this._history.push({move:y,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_makeMove(y){const x=this._turn,k=M(x);if(this._push(y),this._board[y.to]=this._board[y.from],delete this._board[y.from],y.flags&r.EP_CAPTURE&&(this._turn===t.BLACK?delete this._board[y.to-16]:delete this._board[y.to+16]),y.promotion&&(this._board[y.to]={type:y.promotion,color:x}),this._board[y.to].type===t.KING){if(this._kings[x]=y.to,y.flags&r.KSIDE_CASTLE){const E=y.to-1,T=y.to+1;this._board[E]=this._board[T],delete this._board[T]}else if(y.flags&r.QSIDE_CASTLE){const E=y.to+1,T=y.to-2;this._board[E]=this._board[T],delete this._board[T]}this._castling[x]=0}if(this._castling[x]){for(let E=0,T=b[x].length;E<T;E++)if(y.from===b[x][E].square&&this._castling[x]&b[x][E].flag){this._castling[x]^=b[x][E].flag;break}}if(this._castling[k]){for(let E=0,T=b[k].length;E<T;E++)if(y.to===b[k][E].square&&this._castling[k]&b[k][E].flag){this._castling[k]^=b[k][E].flag;break}}y.flags&r.BIG_PAWN?x===t.BLACK?this._epSquare=y.to-16:this._epSquare=y.to+16:this._epSquare=e,y.piece===t.PAWN?this._halfMoves=0:y.flags&(r.CAPTURE|r.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,x===t.BLACK&&this._moveNumber++,this._turn=k}undo(){const y=this._undoMove();return y?this._makePretty(y):null}_undoMove(){const y=this._history.pop();if(y===void 0)return null;const x=y.move;this._kings=y.kings,this._turn=y.turn,this._castling=y.castling,this._epSquare=y.epSquare,this._halfMoves=y.halfMoves,this._moveNumber=y.moveNumber;const k=this._turn,E=M(k);if(this._board[x.from]=this._board[x.to],this._board[x.from].type=x.piece,delete this._board[x.to],x.captured)if(x.flags&r.EP_CAPTURE){let T;k===t.BLACK?T=x.to-16:T=x.to+16,this._board[T]={type:t.PAWN,color:E}}else this._board[x.to]={type:x.captured,color:E};if(x.flags&(r.KSIDE_CASTLE|r.QSIDE_CASTLE)){let T,L;x.flags&r.KSIDE_CASTLE?(T=x.to+1,L=x.to-1):(T=x.to-2,L=x.to+1),this._board[T]=this._board[L],delete this._board[L]}return x}pgn({newline:y=`
`,maxWidth:x=0}={}){const k=[];let E=!1;for(const w in this._header)k.push("["+w+' "'+this._header[w]+'"]'+y),E=!0;E&&this._history.length&&k.push(y);const T=w=>{const Y=this._comments[this.fen()];if(typeof Y<"u"){const A=w.length>0?" ":"";w=`${w}${A}{${Y}}`}return w},L=[];for(;this._history.length>0;)L.push(this._undoMove());const D=[];let C="";for(L.length===0&&D.push(T(""));L.length>0;){C=T(C);const w=L.pop();if(!w)break;if(!this._history.length&&w.color==="b"){const Y=`${this._moveNumber}. ...`;C=C?`${C} ${Y}`:Y}else w.color==="w"&&(C.length&&D.push(C),C=this._moveNumber+".");C=C+" "+this._moveToSan(w,this._moves({legal:!0})),this._makeMove(w)}if(C.length&&D.push(T(C)),typeof this._header.Result<"u"&&D.push(this._header.Result),x===0)return k.join("")+D.join(" ");const R=function(){return k.length>0&&k[k.length-1]===" "?(k.pop(),!0):!1},U=function(w,Y){for(const A of Y.split(" "))if(!!A){if(w+A.length>x){for(;R();)w--;k.push(y),w=0}k.push(A),w+=A.length,k.push(" "),w++}return R()&&w--,w};let W=0;for(let w=0;w<D.length;w++){if(W+D[w].length>x&&D[w].includes("{")){W=U(W,D[w]);continue}W+D[w].length>x&&w!==0?(k[k.length-1]===" "&&k.pop(),k.push(y),W=0):w!==0&&(k.push(" "),W++),k.push(D[w]),W+=D[w].length}return k.join("")}header(...y){for(let x=0;x<y.length;x+=2)typeof y[x]=="string"&&typeof y[x+1]=="string"&&(this._header[y[x]]=y[x+1]);return this._header}loadPgn(y,{strict:x=!1,newlineChar:k=`\r?
`}={}){function E(Q){return Q.replace(/\\/g,"\\")}function T(Q){const ye={},re=Q.split(new RegExp(E(k)));let Ue="",fe="";for(let Ae=0;Ae<re.length;Ae++){const Dn=/^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;Ue=re[Ae].replace(Dn,"$1"),fe=re[Ae].replace(Dn,"$2"),Ue.trim().length>0&&(ye[Ue]=fe)}return ye}y=y.trim();const D=new RegExp("^(\\[((?:"+E(k)+")|.)*\\])((?:\\s*"+E(k)+"){2}|(?:\\s*"+E(k)+")*$)").exec(y),C=D&&D.length>=2?D[1]:"";this.reset();const R=T(C);let U="";for(const Q in R)Q.toLowerCase()==="fen"&&(U=R[Q]),this.header(Q,R[Q]);if(!x)U&&this.load(U,!0);else if(R.SetUp==="1"){if(!("FEN"in R))throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");this.load(R.FEN,!0)}function W(Q){return Array.from(Q).map(function(ye){return ye.charCodeAt(0)<128?ye.charCodeAt(0).toString(16):encodeURIComponent(ye).replace(/%/g,"").toLowerCase()}).join("")}function w(Q){return Q.length==0?"":decodeURIComponent("%"+(Q.match(/.{1,2}/g)||[]).join("%"))}const Y=function(Q){return Q=Q.replace(new RegExp(E(k),"g")," "),`{${W(Q.slice(1,Q.length-1))}}`},A=function(Q){if(Q.startsWith("{")&&Q.endsWith("}"))return w(Q.slice(1,Q.length-1))};let X=y.replace(C,"").replace(new RegExp(`({[^}]*})+?|;([^${E(k)}]*)`,"g"),function(Q,ye,re){return ye!==void 0?Y(ye):" "+Y(`{${re.slice(1)}}`)}).replace(new RegExp(E(k),"g")," ");const q=/(\([^()]+\))+?/g;for(;q.test(X);)X=X.replace(q,"");X=X.replace(/\d+\.(\.\.)?/g,""),X=X.replace(/\.\.\./g,""),X=X.replace(/\$\d+/g,"");let ee=X.trim().split(new RegExp(/\s+/));ee=ee.filter(Q=>Q!=="");let Z="";for(let Q=0;Q<ee.length;Q++){const ye=A(ee[Q]);if(ye!==void 0){this._comments[this.fen()]=ye;continue}const re=this._moveFromSan(ee[Q],x);if(re==null)if(p.indexOf(ee[Q])>-1)Z=ee[Q];else throw new Error(`Invalid move in PGN: ${ee[Q]}`);else Z="",this._makeMove(re)}Z&&Object.keys(this._header).length&&!this._header.Result&&this.header("Result",Z)}_moveToSan(y,x){let k="";if(y.flags&r.KSIDE_CASTLE)k="O-O";else if(y.flags&r.QSIDE_CASTLE)k="O-O-O";else{if(y.piece!==t.PAWN){const E=G(y,x);k+=y.piece.toUpperCase()+E}y.flags&(r.CAPTURE|r.EP_CAPTURE)&&(y.piece===t.PAWN&&(k+=I(y.from)[0]),k+="x"),k+=I(y.to),y.promotion&&(k+="="+y.promotion.toUpperCase())}return this._makeMove(y),this.isCheck()&&(this.isCheckmate()?k+="#":k+="+"),this._undoMove(),k}_moveFromSan(y,x=!1){const k=we(y);let E=pe(k),T=this._moves({legal:!0,piece:E});for(let w=0,Y=T.length;w<Y;w++)if(k===we(this._moveToSan(T[w],T)))return T[w];if(x)return null;let L,D,C,R,U,W=!1;if(D=k.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),D?(L=D[1],C=D[2],R=D[3],U=D[4],C.length==1&&(W=!0)):(D=k.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),D&&(L=D[1],C=D[2],R=D[3],U=D[4],C.length==1&&(W=!0))),E=pe(k),T=this._moves({legal:!0,piece:L||E}),!R)return null;for(let w=0,Y=T.length;w<Y;w++)if(C){if((!L||L.toLowerCase()==T[w].piece)&&i[C]==T[w].from&&i[R]==T[w].to&&(!U||U.toLowerCase()==T[w].promotion))return T[w];if(W){const A=I(T[w].from);if((!L||L.toLowerCase()==T[w].piece)&&i[R]==T[w].to&&(C==A[0]||C==A[1])&&(!U||U.toLowerCase()==T[w].promotion))return T[w]}}else if(k===we(this._moveToSan(T[w],T)).replace("x",""))return T[w];return null}ascii(){let y=`   +------------------------+
`;for(let x=i.a8;x<=i.h1;x++){if(S(x)===0&&(y+=" "+"87654321"[v(x)]+" |"),this._board[x]){const k=this._board[x].type,T=this._board[x].color===t.WHITE?k.toUpperCase():k.toLowerCase();y+=" "+T+" "}else y+=" . ";x+1&136&&(y+=`|
`,x+=8)}return y+=`   +------------------------+
`,y+="     a  b  c  d  e  f  g  h",y}perft(y){const x=this._moves({legal:!1});let k=0;const E=this._turn;for(let T=0,L=x.length;T<L;T++)this._makeMove(x[T]),this._isKingAttacked(E)||(y-1>0?k+=this.perft(y-1):k++),this._undoMove();return k}_makePretty(y){const{color:x,piece:k,from:E,to:T,flags:L,captured:D,promotion:C}=y;let R="";for(const Y in r)r[Y]&L&&(R+=n[Y]);const U=I(E),W=I(T),w={color:x,piece:k,from:U,to:W,san:this._moveToSan(y,this._moves({legal:!0})),flags:R,lan:U+W,before:this.fen(),after:""};return this._makeMove(y),w.after=this.fen(),this._undoMove(),D&&(w.captured=D),C&&(w.promotion=C,w.lan+=C),w}turn(){return this._turn}board(){const y=[];let x=[];for(let k=i.a8;k<=i.h1;k++)this._board[k]==null?x.push(null):x.push({square:I(k),type:this._board[k].type,color:this._board[k].color}),k+1&136&&(y.push(x),x=[],k+=8);return y}squareColor(y){if(y in i){const x=i[y];return(v(x)+S(x))%2===0?"light":"dark"}return null}history({verbose:y=!1}={}){const x=[],k=[];for(;this._history.length>0;)x.push(this._undoMove());for(;;){const E=x.pop();if(!E)break;y?k.push(this._makePretty(E)):k.push(this._moveToSan(E,this._moves())),this._makeMove(E)}return k}_pruneComments(){const y=[],x={},k=E=>{E in this._comments&&(x[E]=this._comments[E])};for(;this._history.length>0;)y.push(this._undoMove());for(k(this.fen());;){const E=y.pop();if(!E)break;this._makeMove(E),k(this.fen())}this._comments=x}getComment(){return this._comments[this.fen()]}setComment(y){this._comments[this.fen()]=y.replace("{","[").replace("}","]")}deleteComment(){const y=this._comments[this.fen()];return delete this._comments[this.fen()],y}getComments(){return this._pruneComments(),Object.keys(this._comments).map(y=>({fen:y,comment:this._comments[y]}))}deleteComments(){return this._pruneComments(),Object.keys(this._comments).map(y=>{const x=this._comments[y];return delete this._comments[y],{fen:y,comment:x}})}}t.Chess=ze})(Hl);const B1=(t,e)=>t.board().map(n=>n.map(r=>r!==null?{type:r.type,team:r.color,uid:e[r.square]}:null));var mi=(t=>(t.CHECKMATE="c",t.DRAW="d",t.THREEFOLD_REPITITION="r",t.INSUFFICIENT_MATERIAL="m",t.OUT_OF_TIME="t",t))(mi||{});const fv=(t,e=!1)=>{let n="";if(e&&(n+="t"),t.isCheckmate()&&(n+="c"),t.isDraw()&&(n+="d"),t.isInsufficientMaterial()&&(n+="m"),t.isThreefoldRepetition()&&(n+="r"),n.length!==0)return n},Pd=(t,e)=>{const n=new Hl.Chess,r={};return n.board().flat().forEach((s,o)=>{s!==null&&(r[s.square]=`${o}`)}),{board:B1(n,r),timers:{w:{time:t*60},b:{time:t*60}},moves:[],captured:{w:[],b:[]},turn:"w",check:{w:!1,b:!1},fen:n.fen(),redoStack:[],pieceUids:r,pieceUidTracker:[],paused:!1,players:e}},ut=(t,e)=>{var n;switch(e.type){case"move":{if(t=ut(t,{type:"checkTimers",chess:e.chess,time:e.time}),t.complete)break;t.redoStack&&(t.redoStack=[]);try{const r=e.chess.move({from:e.from,to:e.to,promotion:e.promotion}),i={};if(r.captured||r.flags.indexOf("e")>=0)i.taken=t.pieceUids[r.to],t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];else if(r.flags.indexOf("k")>=0){t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];const s=`h${r.from[1]}`,o=`f${r.from[1]}`;t.pieceUids[o]=t.pieceUids[s],delete t.pieceUids[s]}else if(r.flags.indexOf("q")>=0){t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];const s=`a${r.from[1]}`,o=`d${r.from[1]}`;t.pieceUids[o]=t.pieceUids[s],delete t.pieceUids[s]}else t.pieceUids[r.to]=t.pieceUids[r.from],delete t.pieceUids[r.from];t.pieceUids={...t.pieceUids},t.pieceUidTracker=[...t.pieceUidTracker,i],t.moves=[...(n=t.moves)!=null?n:[],r],r.captured&&(t.captured[r.color]=[...t.captured[r.color],r.captured])}catch{break}return ut(t,{type:"endMove",chess:e.chess,time:e.time})}case"undo":{if(t=ut(t,{type:"checkTimers",chess:e.chess,time:e.time}),t.complete)break;const r=e.chess.undo();if(r===null||t.moves===void 0)break;t.moves.pop(),t.moves=[...t.moves];const i=t.pieceUidTracker.pop();if(t.pieceUidTracker=[...t.pieceUidTracker],r.captured||r.flags.indexOf("e")>=0)t.pieceUids[r.from]=t.pieceUids[r.to],i&&i.taken?t.pieceUids[r.to]=i.taken:(console.error("move UID tracker made a mistake"),delete t.pieceUids[r.to]);else if(r.flags.indexOf("k")>=0){t.pieceUids[r.from]=t.pieceUids[r.to],delete t.pieceUids[r.to];const s=`h${r.from[1]}`,o=`f${r.from[1]}`;t.pieceUids[s]=t.pieceUids[o],delete t.pieceUids[o]}else if(r.flags.indexOf("q")>=0){t.pieceUids[r.from]=t.pieceUids[r.to],delete t.pieceUids[r.to];const s=`a${r.from[1]}`,o=`d${r.from[1]}`;t.pieceUids[s]=t.pieceUids[o],delete t.pieceUids[o]}else t.pieceUids[r.from]=t.pieceUids[r.to],delete t.pieceUids[r.to];if(t.pieceUids={...t.pieceUids},r.captured){const s=t.captured[r.color],o=s.indexOf(r.captured);t.captured[r.color]=s.filter((a,l)=>l!==o)}return t.redoStack=[...t.redoStack,r],ut(t,{type:"endMove",chess:e.chess,time:e.time})}case"redo":{if(t=ut(t,{type:"checkTimers",chess:e.chess,time:e.time}),t.complete)break;const r=t.redoStack.pop();if(r===void 0)break;const i=[...t.redoStack];return t=ut(t,{type:"move",to:r.to,from:r.from,promotion:r.promotion,chess:e.chess,time:e.time}),t.redoStack=i,t}case"pause":{console.error("PAUSE is not implemented");break}case"checkTimers":{const r=e.time,{set:i,time:s}=t.timers.w.set?t.timers.w:t.timers.b;if(!i)break;const o=(r-i)/1e3;if(s-o<=0)return t.complete=fv(e.chess,!0),{...t,timers:{w:{time:t.timers.w.set?0:t.timers.w.time},b:{time:t.timers.b.set?0:t.timers.b.time}}};break}case"endMove":{let{w:r,b:i}=t.timers;if(e.chess.turn()==="b"){if(i.set=e.time,r.set){const s=(i.set-r.set)/1e3;r.time-=s}r.set=void 0}else{if(r.set=e.time,i.set){const s=(r.set-i.set)/1e3;i.time-=s}i.set=void 0}return t.timers={w:r,b:i},t.turn=e.chess.turn(),t.board=B1(e.chess,t.pieceUids),t.check={w:!1,b:!1},t.check[t.turn]=e.chess.isCheck(),t.complete=fv(e.chess,!1),{...t}}}return t},dv=t=>({timers:t.timers,board:t.board,captured:t.captured,check:t.check,fen:t.fen,moves:t.moves,turn:t.turn,complete:t.complete}),t2=(t,e,n,r,i)=>{var d,h,m,_,b,g,p,v,S,O,I,M,F,G;if(t.players={w:{name:e.players.w.name,type:e.players.w.uid===n?"local":"online"},b:{name:(h=(d=e.players.b)==null?void 0:d.name)!=null?h:"connecting",type:((m=e.players.b)==null?void 0:m.uid)===n?"local":"online"}},((b=(_=t.moves)==null?void 0:_.length)!=null?b:0)===0&&(t.timers=e.game.timers,((p=(g=e.game.moves)==null?void 0:g.length)!=null?p:0)>1)){for(const j of(v=e.game.moves)!=null?v:[])ut(t,{type:"move",from:j.from,to:j.to,promotion:j.promotion,chess:r,time:i});return t}if(t.turn===e.game.turn)return t;const s=(O=(S=t.moves)==null?void 0:S.length)!=null?O:0,o=(M=(I=e.game.moves)==null?void 0:I.length)!=null?M:0,a=(F=t.moves)!=null?F:[],l=(G=e.game.moves)!=null?G:[];if(s!==o&&s!==o-1)return`other user sent us ${o} moves, expected ${s} or ${s+1} moves`;for(let j=0;j<s;j++)if(a[j].san!==l[j].san)return`other user manipulated move history (move ${j} expected ${a[j].san} got ${l[j].san}`;if(s===o)return t;const c=l[l.length-1];if(c)t=ut(t,{type:"move",from:c.from,to:c.to,promotion:c.promotion,chess:r,time:i});else return t;if(t.moves&&e.game.moves&&t.moves.length!==e.game.moves.length)return"other user sent an invalid move";t.timers=e.game.timers;const f=t.captured.w.every((j,pe)=>j===e.game.captured.w[pe]),u=t.captured.b.every((j,pe)=>j===e.game.captured.b[pe]);return f&&u?t.check.w!==e.game.check.w||t.check.b!==e.game.check.b?"other user manipulated game check status":t.complete!==e.game.complete?"other user manipulated game completion!":t:"other user manipulated captures"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(t,e){if(!t)throw hs(e)},hs=function(t){return new Error("Firebase Database ("+H1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},n2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,f=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(d=64)),r.push(n[f],n[u],n[d],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):n2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new r2;const d=s<<2|a>>4;if(r.push(d),c!==64){const h=a<<4&240|c>>2;if(r.push(h),u!==64){const m=c<<6&192|u;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class r2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const G1=function(t){const e=V1(t);return mp.encodeByteArray(e,!0)},Vl=function(t){return G1(t).replace(/\./g,"")},Gl=function(t){try{return mp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t){return K1(void 0,t)}function K1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!s2(n)||(t[n]=K1(t[n],e[n]));return t}function s2(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=()=>o2().__FIREBASE_DEFAULTS__,l2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},c2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gl(t[1]);return e&&JSON.parse(e)},gp=()=>{try{return a2()||l2()||c2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y1=t=>{var e,n;return(n=(e=gp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},u2=t=>{const e=Y1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},q1=()=>{var t;return(t=gp())===null||t===void 0?void 0:t.config},Q1=t=>{var e;return(e=gp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function d2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function X1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h2(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function J1(){return H1.NODE_ADMIN===!0}function p2(){try{return typeof indexedDB=="object"}catch{return!1}}function m2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2="FirebaseError";class xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=g2,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?v2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xr(i,a,r)}}function v2(t,e){return t.replace(y2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const y2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){return JSON.parse(t)}function We(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Oo(Gl(s[0])||""),n=Oo(Gl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},_2=function(t){const e=Z1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},w2=function(t){const e=Z1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ns(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Yl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(hv(s)&&hv(o)){if(!Yl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,f;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),f=1518500249):(c=s^o^a,f=1859775393):u<60?(c=s&o|a&(s|o),f=2400959708):(c=s^o^a,f=3395469782);const d=(i<<5|i>>>27)+c+l+f+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function S2(t,e){const n=new k2(t,e);return n.subscribe.bind(n)}class k2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");C2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yu),i.error===void 0&&(i.error=Yu),i.complete===void 0&&(i.complete=Yu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yu(){}function yp(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class ei{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(T2(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:x2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x2(t){return t===Ar?void 0:t}function T2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new I2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const N2={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},R2=ve.INFO,A2={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},O2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=A2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _p{constructor(e){this.name=e,this._logLevel=R2,this._logHandler=O2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const L2=(t,e)=>e.some(n=>t instanceof n);let pv,mv;function D2(){return pv||(pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M2(){return mv||(mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ew=new WeakMap,Rd=new WeakMap,tw=new WeakMap,qu=new WeakMap,wp=new WeakMap;function F2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ew.set(n,t)}).catch(()=>{}),wp.set(e,t),e}function U2(t){if(Rd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Rd.set(t,e)}let Ad={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $2(t){Ad=t(Ad)}function z2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qu(this),e,...n);return tw.set(r,e.sort?e.sort():[e]),lr(r)}:M2().includes(t)?function(...e){return t.apply(Qu(this),e),lr(ew.get(this))}:function(...e){return lr(t.apply(Qu(this),e))}}function j2(t){return typeof t=="function"?z2(t):(t instanceof IDBTransaction&&U2(t),L2(t,D2())?new Proxy(t,Ad):t)}function lr(t){if(t instanceof IDBRequest)return F2(t);if(qu.has(t))return qu.get(t);const e=j2(t);return e!==t&&(qu.set(t,e),wp.set(e,t)),e}const Qu=t=>wp.get(t);function W2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const B2=["get","getKey","getAll","getAllKeys","count"],H2=["put","add","delete","clear"],Xu=new Map;function gv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xu.get(e))return Xu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=H2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||B2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Xu.set(e,s),s}$2(t=>({...t,get:(e,n,r)=>gv(e,n)||t.get(e,n,r),has:(e,n)=>!!gv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function G2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Od="@firebase/app",vv="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new _p("@firebase/app"),K2="@firebase/app-compat",Y2="@firebase/analytics-compat",q2="@firebase/analytics",Q2="@firebase/app-check-compat",X2="@firebase/app-check",J2="@firebase/auth",Z2="@firebase/auth-compat",eP="@firebase/database",tP="@firebase/database-compat",nP="@firebase/functions",rP="@firebase/functions-compat",iP="@firebase/installations",sP="@firebase/installations-compat",oP="@firebase/messaging",aP="@firebase/messaging-compat",lP="@firebase/performance",cP="@firebase/performance-compat",uP="@firebase/remote-config",fP="@firebase/remote-config-compat",dP="@firebase/storage",hP="@firebase/storage-compat",pP="@firebase/firestore",mP="@firebase/firestore-compat",gP="firebase",vP="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="[DEFAULT]",yP={[Od]:"fire-core",[K2]:"fire-core-compat",[q2]:"fire-analytics",[Y2]:"fire-analytics-compat",[X2]:"fire-app-check",[Q2]:"fire-app-check-compat",[J2]:"fire-auth",[Z2]:"fire-auth-compat",[eP]:"fire-rtdb",[tP]:"fire-rtdb-compat",[nP]:"fire-fn",[rP]:"fire-fn-compat",[iP]:"fire-iid",[sP]:"fire-iid-compat",[oP]:"fire-fcm",[aP]:"fire-fcm-compat",[lP]:"fire-perf",[cP]:"fire-perf-compat",[uP]:"fire-rc",[fP]:"fire-rc-compat",[dP]:"fire-gcs",[hP]:"fire-gcs-compat",[pP]:"fire-fst",[mP]:"fire-fst-compat","fire-js":"fire-js",[gP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new Map,Dd=new Map;function _P(t,e){try{t.container.addComponent(e)}catch(n){ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(Dd.has(e))return ti.debug(`There were multiple attempts to register component ${e}.`),!1;Dd.set(e,t);for(const n of ql.values())_P(n,t);return!0}function Ep(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cr=new Zo("app","Firebase",wP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=vP;function nw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cr.create("bad-app-name",{appName:String(i)});if(n||(n=q1()),!n)throw cr.create("no-options");const s=ql.get(i);if(s){if(Yl(n,s.options)&&Yl(r,s.config))return s;throw cr.create("duplicate-app",{appName:i})}const o=new P2(i);for(const l of Dd.values())o.addComponent(l);const a=new EP(n,r,o);return ql.set(i,a),a}function rw(t=Ld){const e=ql.get(t);if(!e&&t===Ld&&q1())return nw();if(!e)throw cr.create("no-app",{appName:t});return e}function ur(t,e,n){var r;let i=(r=yP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ti.warn(a.join(" "));return}rs(new ei(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="firebase-heartbeat-database",kP=1,Lo="firebase-heartbeat-store";let Ju=null;function iw(){return Ju||(Ju=W2(SP,kP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lo)}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),Ju}async function CP(t){try{return await(await iw()).transaction(Lo).objectStore(Lo).get(sw(t))}catch(e){if(e instanceof xr)ti.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ti.warn(n.message)}}}async function yv(t,e){try{const r=(await iw()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,sw(t)),await r.done}catch(n){if(n instanceof xr)ti.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ti.warn(r.message)}}}function sw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=1024,IP=30*24*60*60*1e3;class xP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_v();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=IP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_v(),{heartbeatsToSend:n,unsentEntries:r}=TP(this._heartbeatsCache.heartbeats),i=Vl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _v(){return new Date().toISOString().substring(0,10)}function TP(t,e=bP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return p2()?m2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wv(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){rs(new ei("platform-logger",e=>new V2(e),"PRIVATE")),rs(new ei("heartbeat",e=>new xP(e),"PRIVATE")),ur(Od,vv,t),ur(Od,vv,"esm2017"),ur("fire-js","")}NP("");var RP="firebase",AP="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ur(RP,AP,"app");function Sp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ow(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OP=ow,aw=new Zo("auth","Firebase",ow());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new _p("@firebase/auth");function LP(t,...e){Ql.logLevel<=ve.WARN&&Ql.warn(`Auth (${ms}): ${t}`,...e)}function ll(t,...e){Ql.logLevel<=ve.ERROR&&Ql.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw kp(t,...e)}function ln(t,...e){return kp(t,...e)}function DP(t,e,n){const r=Object.assign(Object.assign({},OP()),{[e]:n});return new Zo("auth","Firebase",r).create(e,{appName:t.name})}function kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aw.create(t,...e)}function ne(t,e,...n){if(!t)throw kp(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ll(e),new Error(e)}function Nn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MP(){return Ev()==="http:"||Ev()==="https:"}function Ev(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MP()||d2()||"connection"in navigator)?navigator.onLine:!0}function UP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=vp()||X1()}get(){return FP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new ea(3e4,6e4);function bp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ta(t,e,n,r,i={}){return cw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ps(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),lw.fetch()(fw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$P),e);try{const i=new jP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wa(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw DP(t,f,c);Pn(t,f)}}catch(i){if(i instanceof xr)throw i;Pn(t,"network-request-failed",{message:String(i)})}}async function uw(t,e,n,r,i={}){const s=await ta(t,e,n,r,i);return"mfaPendingCredential"in s&&Pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function fw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cp(t.config,i):`${t.config.apiScheme}://${i}`}class jP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),zP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WP(t,e){return ta(t,"POST","/v1/accounts:delete",e)}async function BP(t,e){return ta(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HP(t,e=!1){const n=Ot(t),r=await n.getIdToken(e),i=Ip(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:to(Zu(i.auth_time)),issuedAtTime:to(Zu(i.iat)),expirationTime:to(Zu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zu(t){return Number(t)*1e3}function Ip(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gl(n);return i?JSON.parse(i):(ll("Failed to decode base64 JWT payload"),null)}catch(i){return ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function VP(t){const e=Ip(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xr&&GP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Do(t,BP(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?QP(s.providerUserInfo):[],a=qP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dw(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function YP(t){const e=Ot(t);await Xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function QP(t){return t.map(e=>{var{providerId:n}=e,r=Sp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(t,e){const n=await cw(t,{},async()=>{const r=ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=fw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mo;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mo,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Br{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HP(this,e)}reload(){return YP(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Do(this,WP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:S,isAnonymous:O,providerData:I,stsTokenManager:M}=n;ne(v&&M,e,"internal-error");const F=Mo.fromJSON(this.name,M);ne(typeof v=="string",e,"internal-error"),$n(u,e.name),$n(d,e.name),ne(typeof S=="boolean",e,"internal-error"),ne(typeof O=="boolean",e,"internal-error"),$n(h,e.name),$n(m,e.name),$n(_,e.name),$n(b,e.name),$n(g,e.name),$n(p,e.name);const G=new Br({uid:v,auth:e,email:d,emailVerified:S,displayName:u,isAnonymous:O,photoURL:m,phoneNumber:h,tenantId:_,stsTokenManager:F,createdAt:g,lastLoginAt:p});return I&&Array.isArray(I)&&(G.providerData=I.map(j=>Object.assign({},j))),b&&(G._redirectEventId=b),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mo;i.updateFromServerResponse(n);const s=new Br({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=new Map;function yn(t){Nn(t instanceof Function,"Expected a class definition");let e=Sv.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hw.type="NONE";const kv=hw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(yn(kv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||yn(kv);const o=cl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const u=Br._fromJSON(e,f);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ji(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ji(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yw(e))return"Blackberry";if(_w(e))return"Webos";if(xp(e))return"Safari";if((e.includes("chrome/")||mw(e))&&!e.includes("edge/"))return"Chrome";if(vw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pw(t=lt()){return/firefox\//i.test(t)}function xp(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mw(t=lt()){return/crios\//i.test(t)}function gw(t=lt()){return/iemobile/i.test(t)}function vw(t=lt()){return/android/i.test(t)}function yw(t=lt()){return/blackberry/i.test(t)}function _w(t=lt()){return/webos/i.test(t)}function Xc(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JP(t=lt()){var e;return Xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZP(){return h2()&&document.documentMode===10}function ww(t=lt()){return Xc(t)||vw(t)||_w(t)||yw(t)||/windows phone/i.test(t)||gw(t)}function eN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t,e=[]){let n;switch(t){case"Browser":n=Cv(lt());break;case"Worker":n=`${Cv(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}async function Sw(t,e){return ta(t,"GET","/v2/recaptchaConfig",bp(t,e))}function bv(t){return t!==void 0&&t.enterprise!==void 0}class kw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Cw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tN().appendChild(r)})}function nN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rN="https://www.google.com/recaptcha/enterprise.js?render=",iN="recaptcha-enterprise",sN="NO_RECAPTCHA";class oN{constructor(e){this.type=iN,this.auth=na(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Sw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new kw(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;bv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(sN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&bv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Cw(rN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iv(this),this.idTokenSubscription=new Iv(this),this.beforeStateQueue=new aN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ot(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}async initializeRecaptchaConfig(){const e=await Sw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new kw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new oN(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ew(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function na(t){return Ot(t)}class Iv{constructor(e){this.auth=e,this.observer=null,this.addObserver=S2(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t,e){const n=Ep(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yl(s,e!=null?e:{}))return i;Pn(i,"already-initialized")}return n.initialize({options:e})}function uN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fN(t,e,n){const r=na(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=bw(e),{host:o,port:a}=dN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hN()}function bw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dN(t){const e=bw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xv(o)}}}function xv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return uw(t,"POST","/v1/accounts:signInWithIdp",bp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN="http://localhost";class ni extends Iw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:pN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ps(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends xw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ra{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ra{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ra{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e){return uw(t,"POST","/v1/accounts:signUp",bp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Br._fromIdTokenResponse(e,r,i),o=Tv(r);return new yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Tv(r);return new yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Tv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t){var e;const n=na(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new yr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await mN(n,{returnSecureToken:!0}),i=await yr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends xr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jl(e,n,r,i)}}function Tw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jl._fromErrorAndOperation(t,s,e,r):s})}async function vN(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Do(t,Tw(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=Ip(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(t,e,n=!1){const r="signIn",i=await Tw(t,r,e),s=await yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function wN(t,e,n,r){return Ot(t).onIdTokenChanged(e,n,r)}function EN(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}function SN(t,e,n,r){return Ot(t).onAuthStateChanged(e,n,r)}const Zl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zl,"1"),this.storage.removeItem(Zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(){const t=lt();return xp(t)||Xc(t)}const CN=1e3,bN=10;class Nw extends Pw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kN()&&eN(),this.fallbackToPolling=ww(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const IN=Nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends Pw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rw.type="SESSION";const Aw=Rw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await xN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Tp("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function PN(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function NN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AN(){return Ow()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="firebaseLocalStorageDb",ON=1,ec="firebaseLocalStorage",Dw="fbase_key";class ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zc(t,e){return t.transaction([ec],e?"readwrite":"readonly").objectStore(ec)}function LN(){const t=indexedDB.deleteDatabase(Lw);return new ia(t).toPromise()}function Fd(){const t=indexedDB.open(Lw,ON);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ec,{keyPath:Dw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ec)?e(r):(r.close(),await LN(),e(await Fd()))})})}async function Pv(t,e,n){const r=Zc(t,!0).put({[Dw]:e,value:n});return new ia(r).toPromise()}async function DN(t,e){const n=Zc(t,!1).get(e),r=await new ia(n).toPromise();return r===void 0?null:r.value}function Nv(t,e){const n=Zc(t,!0).delete(e);return new ia(n).toPromise()}const MN=800,FN=3;class Mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(AN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NN(),!this.activeServiceWorker)return;this.sender=new TN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fd();return await Pv(e,Zl,"1"),await Nv(e,Zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zc(i,!1).getAll();return new ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mw.type="LOCAL";const UN=Mw;new ea(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t,e){return e?yn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp extends Iw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zN(t){return _N(t.auth,new Pp(t),t.bypassAuthState)}function jN(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),yN(n,new Pp(t),t.bypassAuthState)}async function WN(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),vN(n,new Pp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zN;case"linkViaPopup":case"linkViaRedirect":return WN;case"reauthViaPopup":case"reauthViaRedirect":return jN;default:Pn(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=new ea(2e3,1e4);class Ai extends Fw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BN.get())};e()}}Ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN="pendingRedirect",ul=new Map;class VN extends Fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await GN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GN(t,e){const n=qN(e),r=YN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function KN(t,e){ul.set(t._key(),e)}function YN(t){return yn(t._redirectPersistence)}function qN(t){return cl(HN,t.config.apiKey,t.name)}async function QN(t,e,n=!1){const r=na(t),i=$N(r,e),o=await new VN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=10*60*1e3;class JN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rv(e))}saveEventToCache(e){this.cachedEventUids.add(Rv(e)),this.lastProcessedEventTime=Date.now()}}function Rv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e={}){return ta(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nR=/^https?/;async function rR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eR(t);for(const n of e)try{if(iR(n))return}catch{}Pn(t,"unauthorized-domain")}function iR(t){const e=Md(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nR.test(n))return!1;if(tR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new ea(3e4,6e4);function Av(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oR(t){return new Promise((e,n)=>{var r,i,s;function o(){Av(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Av(),n(ln(t,"network-request-failed"))},timeout:sR.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const a=nN("iframefcb");return cn()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},Cw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fl=null,e})}let fl=null;function aR(t){return fl=fl||oR(t),fl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new ea(5e3,15e3),cR="__/auth/iframe",uR="emulator/auth/iframe",fR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hR(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cp(e,uR):`https://${t.config.authDomain}/${cR}`,r={apiKey:e.apiKey,appName:t.name,v:ms},i=dR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ps(r).slice(1)}`}async function pR(t){const e=await aR(t),n=cn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:hR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=cn().setTimeout(()=>{s(o)},lR.get());function l(){cn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gR=500,vR=600,yR="_blank",_R="http://localhost";class Ov{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wR(t,e,n,r=gR,i=vR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(a=mw(c)?yR:n),pw(c)&&(e=e||_R,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[h,m])=>`${d}${h}=${m},`,"");if(JP(c)&&a!=="_self")return ER(e||"",a),new Ov(null);const u=window.open(e||"",a,f);ne(u,t,"popup-blocked");try{u.focus()}catch{}return new Ov(u)}function ER(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="__/auth/handler",kR="emulator/auth/handler",CR=encodeURIComponent("fac");async function Lv(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:i};if(e instanceof xw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(s||{}))o[f]=u}if(e instanceof ra){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),c=l?`#${CR}=${encodeURIComponent(l)}`:"";return`${bR(t)}?${ps(a).slice(1)}${c}`}function bR({config:t}){return t.emulator?Cp(t,kR):`https://${t.authDomain}/${SR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="webStorageSupport";class IR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aw,this._completeRedirectFn=QN,this._overrideRedirectResult=KN}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Lv(e,n,r,Md(),i);return wR(e,o,Tp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Lv(e,n,r,Md(),i);return PN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pR(e),r=new JN(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ef,{type:ef},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ef];o!==void 0&&n(!!o),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ww()||xp()||Xc()}}const xR=IR;var Dv="@firebase/auth",Mv="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NR(t){rs(new ei("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ew(t)},c=new lN(r,i,s,l);return uN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new ei("auth-internal",e=>{const n=na(e.getProvider("auth").getImmediate());return(r=>new TR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ur(Dv,Mv,PR(t)),ur(Dv,Mv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=5*60,AR=Q1("authIdTokenMaxAge")||RR;let Fv=null;const OR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AR)return;const i=n==null?void 0:n.token;Fv!==i&&(Fv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LR(t=rw()){const e=Ep(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cN(t,{popupRedirectResolver:xR,persistence:[UN,IN,Aw]}),r=Q1("authTokenSyncURL");if(r){const s=OR(r);EN(n,s,()=>s(n.currentUser)),wN(n,o=>s(o))}const i=Y1("auth");return i&&fN(n,`http://${i}`),n}NR("Browser");const Uv="@firebase/database",$v="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $w="";function DR(t){$w=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Oo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new MR(e)}}catch{}return new FR},$r=zw("localStorage"),Ud=zw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new _p("@firebase/database"),UR=function(){let t=1;return function(){return t++}}(),jw=function(t){const e=b2(t),n=new E2;n.update(e);const r=n.digest();return mp.encodeByteArray(r)},sa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=sa.apply(null,r):typeof r=="object"?e+=We(r):e+=r,e+=" "}return e};let Hr=null,zv=!0;const $R=function(t,e){z(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Bi.logLevel=ve.VERBOSE,Hr=Bi.log.bind(Bi),e&&Ud.set("logging_enabled",!0)):typeof t=="function"?Hr=t:(Hr=null,Ud.remove("logging_enabled"))},ot=function(...t){if(zv===!0&&(zv=!1,Hr===null&&Ud.get("logging_enabled")===!0&&$R(!0)),Hr){const e=sa.apply(null,t);Hr(e)}},oa=function(t){return function(...e){ot(t,...e)}},$d=function(...t){const e="FIREBASE INTERNAL ERROR: "+sa(...t);Bi.error(e)},Rn=function(...t){const e=`FIREBASE FATAL ERROR: ${sa(...t)}`;throw Bi.error(e),new Error(e)},St=function(...t){const e="FIREBASE WARNING: "+sa(...t);Bi.warn(e)},zR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&St("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ww=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},is="[MIN_NAME]",ri="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===is||e===ri)return-1;if(e===is||t===ri)return 1;{const n=jv(t),r=jv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},WR=function(t,e){return t===e?0:t<e?-1:1},Ts=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+We(e))},Np=function(t){if(typeof t!="object"||t===null)return We(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=We(e[r]),n+=":",n+=Np(t[e[r]]);return n+="}",n},Bw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hw=function(t){z(!Ww(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const f=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(f.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},BR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const GR=new RegExp("^-?(0*)\\d{1,10}$"),KR=-2147483648,YR=2147483647,jv=function(t){if(GR.test(t)){const e=Number(t);if(e>=KR&&e<=YR)return e}return null},vs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw St("Exception was thrown by user callback.",n),e},Math.floor(0))}},qR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},no=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){St(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',St(e)}}class Hi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="5",Vw="v",Gw="s",Kw="r",Yw="f",qw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Qw="ls",Xw="p",zd="ac",Jw="websocket",Zw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function JR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function tE(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===Jw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Zw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JR(t)&&(n.ns=t.namespace);const i=[];return kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.counters_={}}incrementCounter(e,n=1){Ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return i2(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf={},nf={};function Ap(t){const e=t.toString();return tf[e]||(tf[e]=new ZR),tf[e]}function eA(t,e){const n=t.toString();return nf[n]||(nf[n]=e()),nf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&vs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="start",nA="close",rA="pLPCommand",iA="pRTLPCB",nE="id",rE="pw",iE="ser",sA="cb",oA="seg",aA="ts",lA="d",cA="dframe",sE=1870,oE=30,uA=sE-oE,fA=25e3,dA=3e4;class Oi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oa(e),this.stats_=Ap(n),this.urlFn=l=>(this.appCheckToken&&(l[zd]=this.appCheckToken),tE(n,Zw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dA)),jR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Op((...s)=>{const[o,a,l,c,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wv)this.id=a,this.password=l;else if(o===nA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Wv]="t",r[iE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sA]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Vw]=Rp,this.transportSessionId&&(r[Gw]=this.transportSessionId),this.lastSessionId&&(r[Qw]=this.lastSessionId),this.applicationId&&(r[Xw]=this.applicationId),this.appCheckToken&&(r[zd]=this.appCheckToken),typeof location<"u"&&location.hostname&&qw.test(location.hostname)&&(r[Kw]=Yw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oi.forceAllow_=!0}static forceDisallow(){Oi.forceDisallow_=!0}static isAvailable(){return Oi.forceAllow_?!0:!Oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BR()&&!HR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=G1(n),i=Bw(r,uA);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[cA]="t",r[nE]=e,r[rE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=We(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Op{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=UR(),window[rA+this.uniqueCallbackIdentifier]=e,window[iA+this.uniqueCallbackIdentifier]=n,this.myIFrame=Op.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nE]=this.myID,e[rE]=this.myPW,e[iE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+oE+r.length<=sE;){const o=this.pendingSegs.shift();r=r+"&"+oA+i+"="+o.seg+"&"+aA+i+"="+o.ts+"&"+lA+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(fA)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=16384,pA=45e3;let tc=null;typeof MozWebSocket<"u"?tc=MozWebSocket:typeof WebSocket<"u"&&(tc=WebSocket);class Gt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oa(this.connId),this.stats_=Ap(n),this.connURL=Gt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Vw]=Rp,typeof location<"u"&&location.hostname&&qw.test(location.hostname)&&(o[Kw]=Yw),n&&(o[Gw]=n),r&&(o[Qw]=r),i&&(o[zd]=i),s&&(o[Xw]=s),tE(e,Jw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$r.set("previous_websocket_failure",!0);try{let r;J1(),this.mySock=new tc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&tc!==null&&!Gt.forceDisallow_}static previouslyFailed(){return $r.isInMemoryStorage||$r.get("previous_websocket_failure")===!0}markConnectionHealthy(){$r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Oo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=We(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bw(n,hA);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Oi,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let r=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||St("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gt];else{const i=this.transports_=[];for(const s of Fo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Fo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=6e4,gA=5e3,vA=10*1024,yA=100*1024,rf="t",Bv="d",_A="s",Hv="r",wA="e",Vv="o",Gv="a",Kv="n",Yv="p",EA="h";class SA{constructor(e,n,r,i,s,o,a,l,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oa("c:"+this.id+":"),this.transportManager_=new Fo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=no(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rf in e){const n=e[rf];n===Gv?this.upgradeIfSecondaryHealthy_():n===Hv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Vv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ts("t",e),r=Ts("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ts("t",e),r=Ts("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ts(rf,e);if(Bv in e){const r=e[Bv];if(n===EA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Kv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_A?this.onConnectionShutdown_(r):n===Hv?this.onReset_(r):n===wA?$d("Server Error: "+r):n===Vv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$d("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rp!==r&&St("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),no(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):no(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends lE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nc}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=32,Qv=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new _e("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _r(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function cE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function uE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function Be(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new _e(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function ft(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return ft(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Lp(t,e){if(_r(t)!==_r(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(_r(t)>_r(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class CA{constructor(e,n){this.errorPrefix_=n,this.parts_=uE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Qc(this.parts_[r]);dE(this)}}function bA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qc(e),dE(t)}function IA(t){const e=t.parts_.pop();t.byteLength_-=Qc(e),t.parts_.length>0&&(t.byteLength_-=1)}function dE(t){if(t.byteLength_>Qv)throw new Error(t.errorPrefix_+"has a key path longer than "+Qv+" bytes ("+t.byteLength_+").");if(t.parts_.length>qv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qv+") or object contains a cycle "+Or(t))}function Or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp extends lE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Dp}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=1e3,xA=60*5*1e3,Xv=30*1e3,TA=1.3,PA=3e4,NA="server_kill",Jv=3;class En extends aE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=En.nextPersistentConnectionId_++,this.log_=oa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ps,this.maxReconnectDelay_=xA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!J1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(We(s)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new qc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;En.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ln(e,"w")){const r=ns(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();St(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||w2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_2(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$d("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PA&&(this.reconnectDelay_=Ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+En.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new SA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,h=>{St(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(NA)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&St(u),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nd(this.interruptReasons_)&&(this.reconnectDelay_=Ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Np(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new _e(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jv&&(this.reconnectDelay_=Xv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$w.replace(/\./g,"-")]=1,vp()?e["framework.cordova"]=1:X1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nc.getInstance().currentlyOnline();return Nd(this.interruptReasons_)&&e}}En.nextPersistentConnectionId_=0;En.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(is,e),i=new le(is,n);return this.compare(r,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;class hE extends eu{static get __EMPTY_NODE(){return Ba}static set __EMPTY_NODE(e){Ba=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(ri,Ba)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Ba)}toString(){return".key"}}const Vi=new hE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ye.RED,this.left=i!=null?i:yt.EMPTY_NODE,this.right=s!=null?s:yt.EMPTY_NODE}copy(e,n,r,i,s){return new Ye(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class RA{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class yt{constructor(e,n=yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ha(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ha(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ha(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ha(this.root_,null,this.comparator_,!0,e)}}yt.EMPTY_NODE=new RA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t,e){return gs(t.name,e.name)}function Mp(t,e){return gs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd;function OA(t){jd=t}const pE=function(t){return typeof t=="number"?"number:"+Hw(t):"string:"+t},mE=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ln(e,".sv"),"Priority must be a string or number.")}else z(t===jd||t.isEmpty(),"priority of unexpected type.");z(t===jd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zv;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mE(this.priorityNode_)}static set __childrenNodeConstructor(e){Zv=e}static get __childrenNodeConstructor(){return Zv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:ae(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||_r(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hw(this.value_):e+=this.value_,this.lazyHash_=jw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ge.VALUE_TYPE_ORDER.indexOf(n),s=Ge.VALUE_TYPE_ORDER.indexOf(r);return z(i>=0,"Unknown leaf type: "+n),z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gE,vE;function LA(t){gE=t}function DA(t){vE=t}class MA extends eu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?gs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(ri,new Ge("[PRIORITY-POST]",vE))}makePost(e,n){const r=gE(e);return new le(n,new Ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new MA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=Math.log(2);class UA{constructor(e){const n=s=>parseInt(Math.log(s)/FA,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rc=function(t,e,n,r){t.sort(e);const i=function(l,c){const f=c-l;let u,d;if(f===0)return null;if(f===1)return u=t[l],d=n?n(u):u,new Ye(d,u.node,Ye.BLACK,null,null);{const h=parseInt(f/2,10)+l,m=i(l,h),_=i(h+1,c);return u=t[h],d=n?n(u):u,new Ye(d,u.node,Ye.BLACK,m,_)}},s=function(l){let c=null,f=null,u=t.length;const d=function(m,_){const b=u-m,g=u;u-=m;const p=i(b+1,g),v=t[b],S=n?n(v):v;h(new Ye(S,v.node,_,null,p))},h=function(m){c?(c.left=m,c=m):(f=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));_?d(b,Ye.BLACK):(d(b,Ye.BLACK),d(b,Ye.RED))}return f},o=new UA(t.length),a=s(o);return new yt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf;const fi={};class _n{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(fi&&De,"ChildrenNode.ts has not been loaded"),sf=sf||new _n({".priority":fi},{".priority":De}),sf}get(e){const n=ns(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof yt?n:null}hasIndex(e){return Ln(this.indexSet_,e.toString())}addIndex(e,n){z(e!==Vi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(le.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=rc(r,e.getCompare()):a=fi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new _n(f,c)}addToIndexes(e,n){const r=Kl(this.indexes_,(i,s)=>{const o=ns(this.indexSet_,s);if(z(o,"Missing index implementation for "+s),i===fi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(le.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),rc(a,o.getCompare())}else return fi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new le(e.name,a))),l.insert(e,e.node)}});return new _n(r,this.indexSet_)}removeFromIndexes(e,n){const r=Kl(this.indexes_,i=>{if(i===fi)return i;{const s=n.get(e.name);return s?i.remove(new le(e.name,s)):i}});return new _n(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&mE(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ns||(Ns=new J(new yt(Mp),null,_n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ns}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ns:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ns:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{z(ae(e)!==".priority"||_r(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pE(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":jw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new le(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===aa?-1:0}withIndex(e){if(e===Vi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Vi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),i=n.getIterator(De);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vi?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $A extends J{constructor(){super(new yt(Mp),J.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const aa=new $A;Object.defineProperties(le,{MIN:{value:new le(is,J.EMPTY_NODE)},MAX:{value:new le(ri,aa)}});hE.__EMPTY_NODE=J.EMPTY_NODE;Ge.__childrenNodeConstructor=J;OA(aa);DA(aa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=!0;function qe(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,qe(e))}if(!(t instanceof Array)&&zA){const n=[];let r=!1;if(kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=qe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new le(o,l)))}}),n.length===0)return J.EMPTY_NODE;const s=rc(n,AA,o=>o.name,Mp);if(r){const o=rc(n,De.getCompare());return new J(s,qe(e),new _n({".priority":o},{".priority":De}))}else return new J(s,qe(e),_n.Default)}else{let n=J.EMPTY_NODE;return kt(t,(r,i)=>{if(Ln(t,r)&&r.substring(0,1)!=="."){const s=qe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(qe(e))}}LA(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA extends eu{constructor(e){super(),this.indexPath_=e,z(!ce(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?gs(e.name,n.name):s}makePost(e,n){const r=qe(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,aa);return new le(ri,e)}toString(){return uE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA extends eu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=qe(e);return new le(n,r)}toString(){return".value"}}const BA=new WA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){return{type:"value",snapshotNode:t}}function ss(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Uo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $o(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Uo(n,a)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ss(n,r)):o.trackChildChange($o(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(i,s)=>{n.hasChild(i)||r.trackChildChange(Uo(i,s))}),n.isLeafNode()||n.forEachChild(De,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange($o(i,s,o))}else r.trackChildChange(ss(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.indexedFilter_=new Fp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zo.getStartPost_(e),this.endPost_=zo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new le(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild(De,(o,a)=>{s.matches(new le(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new zo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new le(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,h)=>u(h,d)}else o=this.index_.getCompare();const a=e;z(a.numChildren()===this.limit_,"");const l=new le(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:o(d,l);if(f&&!r.isEmpty()&&h>=0)return s!=null&&s.trackChildChange($o(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Uo(n,u));const _=a.updateImmediateChild(n,J.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ss(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:f&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Uo(c.name,c.node)),s.trackChildChange(ss(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:is}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ri}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Up;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GA(t){return t.loadsAllData()?new Fp(t.getIndex()):t.hasLimit()?new VA(t):new zo(t)}function ey(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===BA?n="$value":t.index_===Vi?n="$key":(z(t.index_ instanceof jA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=We(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=We(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+We(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=We(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+We(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ty(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends aE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=oa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ic.getListenId_(e,r),a={};this.listens_[o]=a;const l=ey(e._queryParams);this.restRequest_(s+".json",l,(c,f)=>{let u=f;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),ns(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const r=ic.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ey(e._queryParams),r=e._path.toString(),i=new qc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ps(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Oo(a.responseText)}catch{St("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&St("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){return{value:null,children:new Map}}function _E(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,sc());const i=t.children.get(r);e=Ee(e),_E(i,e,n)}}function Wd(t,e,n){t.value!==null?n(e,t.value):YA(t,(r,i)=>{const s=new _e(e.toString()+"/"+r);Wd(i,s,n)})}function YA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=10*1e3,QA=30*1e3,XA=5*60*1e3;class JA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qA(e);const r=ny+(QA-ny)*Math.random();no(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;kt(e,(i,s)=>{s>0&&Ln(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),no(this.reportStats_.bind(this),Math.floor(Math.random()*2*XA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function wE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $p(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Qt.ACK_USER_WRITE,this.source=wE()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new oc(he(),n,this.revert)}}else return z(ae(this.path)===e,"operationForChild called for unrelated child."),new oc(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.source=e,this.path=n,this.type=Qt.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new jo(this.source,he()):new jo(this.source,Ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Qt.OVERWRITE}operationForChild(e){return ce(this.path)?new ii(this.source,he(),this.snap.getImmediateChild(e)):new ii(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Qt.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new ii(this.source,he(),n.value):new Wo(this.source,he(),n)}else return z(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wo(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eO(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(HA(o.childName,o.snapshotNode))}),Rs(t,i,"child_removed",e,r,n),Rs(t,i,"child_added",e,r,n),Rs(t,i,"child_moved",s,r,n),Rs(t,i,"child_changed",e,r,n),Rs(t,i,"value",e,r,n),i}function Rs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>nO(t,a,l)),o.forEach(a=>{const l=tO(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function tO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nO(t,e,n){if(e.childName==null||n.childName==null)throw hs("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e){return{eventCache:t,serverCache:e}}function ro(t,e,n,r){return tu(new wr(e,n,r),t.serverCache)}function EE(t,e,n,r){return tu(t.eventCache,new wr(e,n,r))}function ac(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function si(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of;const rO=()=>(of||(of=new yt(WR)),of);class Ce{constructor(e,n=rO()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return kt(e,(r,i)=>{n=n.set(new _e(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(ce(e))return null;{const r=ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ee(e),n);return s!=null?{path:Be(new _e(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Ee(e)):new Ce(null)}}set(e,n){if(ce(e))return new Ce(n,this.children);{const r=ae(e),s=(this.children.get(r)||new Ce(null)).set(Ee(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const i=r.remove(Ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(ce(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Ee(e)):null}}setTree(e,n){if(ce(e))return n;{const r=ae(e),s=(this.children.get(r)||new Ce(null)).setTree(Ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Be(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ce(e))return null;{const s=ae(e),o=this.children.get(s);return o?o.findOnPath_(Ee(e),Be(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const i=ae(e),s=this.children.get(i);return s?s.foreachOnPath_(Ee(e),Be(n,i),r):new Ce(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Be(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Ce(null))}}function io(t,e,n){if(ce(e))return new Zt(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ft(i,e);return s=s.updateChild(o,n),new Zt(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new Zt(s)}}}function ry(t,e,n){let r=t;return kt(n,(i,s)=>{r=io(r,Be(e,i),s)}),r}function iy(t,e){if(ce(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Zt(n)}}function Bd(t,e){return ci(t,e)!=null}function ci(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ft(n.path,e)):null}function sy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,i)=>{e.push(new le(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new le(r,i.value))}),e}function fr(t,e){if(ce(e))return t;{const n=ci(t,e);return n!=null?new Zt(new Ce(n)):new Zt(t.writeTree_.subtree(e))}}function Hd(t){return t.writeTree_.isEmpty()}function os(t,e){return SE(he(),t.writeTree_,e)}function SE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=SE(Be(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Be(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e){return IE(e,t)}function iO(t,e,n,r,i){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=io(t.visibleWrites,e,n)),t.lastWriteId=r}function sO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function oO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&aO(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return lO(t),!0;if(r.snap)t.visibleWrites=iy(t.visibleWrites,r.path);else{const a=r.children;kt(a,l=>{t.visibleWrites=iy(t.visibleWrites,Be(r.path,l))})}return!0}else return!1}function aO(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(Be(t.path,n),e))return!0;return!1}function lO(t){t.visibleWrites=kE(t.allWrites,cO,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cO(t){return t.visible}function kE(t,e,n){let r=Zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=ft(n,o),r=io(r,a,s.snap)):qt(o,n)&&(a=ft(o,n),r=io(r,he(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=ft(n,o),r=ry(r,a,s.children);else if(qt(o,n))if(a=ft(o,n),ce(a))r=ry(r,he(),s.children);else{const l=ns(s.children,ae(a));if(l){const c=l.getChild(Ee(a));r=io(r,he(),c)}}}else throw hs("WriteRecord should have .snap or .children")}}return r}function CE(t,e,n,r,i){if(!r&&!i){const s=ci(t.visibleWrites,e);if(s!=null)return s;{const o=fr(t.visibleWrites,e);if(Hd(o))return n;if(n==null&&!Bd(o,he()))return null;{const a=n||J.EMPTY_NODE;return os(o,a)}}}else{const s=fr(t.visibleWrites,e);if(!i&&Hd(s))return n;if(!i&&n==null&&!Bd(s,he()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(qt(c.path,e)||qt(e,c.path))},a=kE(t.allWrites,o,e),l=n||J.EMPTY_NODE;return os(a,l)}}}function uO(t,e,n){let r=J.EMPTY_NODE;const i=ci(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(De,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fr(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=os(fr(s,new _e(o)),a);r=r.updateImmediateChild(o,l)}),sy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fr(t.visibleWrites,e);return sy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fO(t,e,n,r,i){z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Be(e,n);if(Bd(t.visibleWrites,s))return null;{const o=fr(t.visibleWrites,s);return Hd(o)?i.getChild(n):os(o,i.getChild(n))}}function dO(t,e,n,r){const i=Be(e,n),s=ci(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fr(t.visibleWrites,i);return os(o,r.getNode().getImmediateChild(n))}else return null}function hO(t,e){return ci(t.visibleWrites,e)}function pO(t,e,n,r,i,s,o){let a;const l=fr(t.visibleWrites,e),c=ci(l,he());if(c!=null)a=c;else if(n!=null)a=os(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],u=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let h=d.getNext();for(;h&&f.length<i;)u(h,r)!==0&&f.push(h),h=d.getNext();return f}else return[]}function mO(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function lc(t,e,n,r){return CE(t.writeTree,t.treePath,e,n,r)}function jp(t,e){return uO(t.writeTree,t.treePath,e)}function oy(t,e,n,r){return fO(t.writeTree,t.treePath,e,n,r)}function cc(t,e){return hO(t.writeTree,Be(t.treePath,e))}function gO(t,e,n,r,i,s){return pO(t.writeTree,t.treePath,e,n,r,i,s)}function Wp(t,e,n){return dO(t.writeTree,t.treePath,e,n)}function bE(t,e){return IE(Be(t.treePath,e),t.writeTree)}function IE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,$o(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Uo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ss(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,$o(r,e.snapshotNode,i.oldSnap));else throw hs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const xE=new yO;class Bp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new wr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:si(this.viewCache_),s=gO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t){return{filter:t}}function wO(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function EO(t,e,n,r,i){const s=new vO;let o,a;if(n.type===Qt.OVERWRITE){const c=n;c.source.fromUser?o=Vd(t,e,c.path,c.snap,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=uc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Qt.MERGE){const c=n;c.source.fromUser?o=kO(t,e,c.path,c.children,r,i,s):(z(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Gd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Qt.ACK_USER_WRITE){const c=n;c.revert?o=IO(t,e,c.path,r,i,s):o=CO(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Qt.LISTEN_COMPLETE)o=bO(t,e,n.path,r,s);else throw hs("Unknown operation type: "+n.type);const l=s.getChanges();return SO(e,o,l),{viewCache:o,changes:l}}function SO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ac(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(yE(ac(e)))}}function TE(t,e,n,r,i,s){const o=e.eventCache;if(cc(r,n)!=null)return e;{let a,l;if(ce(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=si(e),f=c instanceof J?c:J.EMPTY_NODE,u=jp(r,f);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=lc(r,si(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=ae(n);if(c===".priority"){z(_r(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const u=oy(r,n,f,l);u!=null?a=t.filter.updatePriority(f,u):a=o.getNode()}else{const f=Ee(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=oy(r,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(f,d):u=o.getNode().getImmediateChild(c)}else u=Wp(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,f,i,s):a=o.getNode()}}return ro(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function uc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);c=f.updateFullNode(l.getNode(),h,null)}else{const h=ae(n);if(!l.isCompleteForPath(n)&&_r(n)>1)return e;const m=Ee(n),b=l.getNode().getImmediateChild(h).updateChild(m,r);h===".priority"?c=f.updatePriority(l.getNode(),b):c=f.updateChild(l.getNode(),h,b,m,xE,null)}const u=EE(e,c,l.isFullyInitialized()||ce(n),f.filtersNodes()),d=new Bp(i,u,s);return TE(t,u,n,i,d,a)}function Vd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const f=new Bp(i,e,s);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ro(e,c,!0,t.filter.filtersNodes());else{const u=ae(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=ro(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ee(n),h=a.getNode().getImmediateChild(u);let m;if(ce(d))m=r;else{const _=f.getCompleteChild(u);_!=null?cE(d)===".priority"&&_.getChild(fE(d)).isEmpty()?m=_:m=_.updateChild(d,r):m=J.EMPTY_NODE}if(h.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),u,m,d,f,o);l=ro(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ay(t,e){return t.eventCache.isCompleteForChild(e)}function kO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const f=Be(n,l);ay(e,ae(f))&&(a=Vd(t,a,f,c,i,s,o))}),r.foreach((l,c)=>{const f=Be(n,l);ay(e,ae(f))||(a=Vd(t,a,f,c,i,s,o))}),a}function ly(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Gd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ce(n)?c=r:c=new Ce(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(f.hasChild(u)){const h=e.serverCache.getNode().getImmediateChild(u),m=ly(t,h,d);l=uc(t,l,new _e(u),m,i,s,o,a)}}),c.children.inorderTraversal((u,d)=>{const h=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!f.hasChild(u)&&!h){const m=e.serverCache.getNode().getImmediateChild(u),_=ly(t,m,d);l=uc(t,l,new _e(u),_,i,s,o,a)}}),l}function CO(t,e,n,r,i,s,o){if(cc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return uc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ce(n)){let c=new Ce(null);return l.getNode().forEachChild(Vi,(f,u)=>{c=c.set(new _e(f),u)}),Gd(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ce(null);return r.foreach((f,u)=>{const d=Be(n,f);l.isCompleteForPath(d)&&(c=c.set(f,l.getNode().getChild(d)))}),Gd(t,e,n,c,i,s,a,o)}}function bO(t,e,n,r,i){const s=e.serverCache,o=EE(e,s.getNode(),s.isFullyInitialized()||ce(n),s.isFiltered());return TE(t,o,n,r,xE,i)}function IO(t,e,n,r,i,s){let o;if(cc(r,n)!=null)return e;{const a=new Bp(r,e,i),l=e.eventCache.getNode();let c;if(ce(n)||ae(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=lc(r,si(e));else{const u=e.serverCache.getNode();z(u instanceof J,"serverChildren would be complete if leaf node"),f=jp(r,u)}f=f,c=t.filter.updateFullNode(l,f,s)}else{const f=ae(n);let u=Wp(r,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=l.getImmediateChild(f)),u!=null?c=t.filter.updateChild(l,f,u,Ee(n),a,s):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(l,f,J.EMPTY_NODE,Ee(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lc(r,si(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||cc(r,he())!=null,ro(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Fp(r.getIndex()),s=GA(r);this.processor_=_O(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),f=new wr(l,o.isFullyInitialized(),i.filtersNodes()),u=new wr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=tu(u,f),this.eventGenerator_=new ZA(this.query_)}get query(){return this.query_}}function TO(t){return t.viewCache_.serverCache.getNode()}function PO(t){return ac(t.viewCache_)}function NO(t,e){const n=si(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function cy(t){return t.eventRegistrations_.length===0}function RO(t,e){t.eventRegistrations_.push(e)}function uy(t,e,n){const r=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function fy(t,e,n,r){e.type===Qt.MERGE&&e.source.queryId!==null&&(z(si(t.viewCache_),"We should always have a full cache before handling merges"),z(ac(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=EO(t.processor_,i,e,n,r);return wO(t.processor_,s.viewCache),z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,PE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function AO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(s,o)=>{r.push(ss(s,o))}),n.isFullyInitialized()&&r.push(yE(n.getNode())),PE(t,r,n.getNode(),e)}function PE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return eO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;class NE{constructor(){this.views=new Map}}function OO(t){z(!fc,"__referenceConstructor has already been defined"),fc=t}function LO(){return z(fc,"Reference.ts has not been loaded"),fc}function DO(t){return t.views.size===0}function Hp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return z(s!=null,"SyncTree gave us an op for an invalid query."),fy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(fy(o,e,n,r));return s}}function RE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=lc(n,i?r:null),l=!1;a?l=!0:r instanceof J?(a=jp(n,r),l=!1):(a=J.EMPTY_NODE,l=!1);const c=tu(new wr(a,l,!1),new wr(r,i,!1));return new xO(e,c)}return o}function MO(t,e,n,r,i,s){const o=RE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),RO(o,n),AO(o,n)}function FO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Er(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(uy(c,n,r)),cy(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(uy(l,n,r)),cy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Er(t)&&s.push(new(LO())(e._repo,e._path)),{removed:s,events:o}}function AE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function dr(t,e){let n=null;for(const r of t.views.values())n=n||NO(r,e);return n}function OE(t,e){if(e._queryParams.loadsAllData())return ru(t);{const r=e._queryIdentifier;return t.views.get(r)}}function LE(t,e){return OE(t,e)!=null}function Er(t){return ru(t)!=null}function ru(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc;function UO(t){z(!dc,"__referenceConstructor has already been defined"),dc=t}function $O(){return z(dc,"Reference.ts has not been loaded"),dc}let zO=1;class dy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=mO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function DE(t,e,n,r,i){return iO(t.pendingWriteTree_,e,n,r,i),i?ca(t,new ii(wE(),e,n)):[]}function zr(t,e,n=!1){const r=sO(t.pendingWriteTree_,e);if(oO(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(he(),!0):kt(r.children,o=>{s=s.set(new _e(o),!0)}),ca(t,new oc(r.path,s,n))}else return[]}function la(t,e,n){return ca(t,new ii($p(),e,n))}function jO(t,e,n){const r=Ce.fromObject(n);return ca(t,new Wo($p(),e,r))}function WO(t,e){return ca(t,new jo($p(),e))}function BO(t,e,n){const r=Gp(t,n);if(r){const i=Kp(r),s=i.path,o=i.queryId,a=ft(s,e),l=new jo(zp(o),a);return Yp(t,s,l)}else return[]}function hc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||LE(o,e))){const l=FO(o,e,n,r);DO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const f=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(d,h)=>Er(h));if(f&&!u){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const h=GO(d);for(let m=0;m<h.length;++m){const _=h[m],b=_.query,g=$E(t,_);t.listenProvider_.startListening(so(b),Bo(t,b),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(so(e),null):c.forEach(d=>{const h=t.queryToTagMap.get(iu(d));t.listenProvider_.stopListening(so(d),h)}))}KO(t,c)}return a}function ME(t,e,n,r){const i=Gp(t,r);if(i!=null){const s=Kp(i),o=s.path,a=s.queryId,l=ft(o,e),c=new ii(zp(a),l,n);return Yp(t,o,c)}else return[]}function HO(t,e,n,r){const i=Gp(t,r);if(i){const s=Kp(i),o=s.path,a=s.queryId,l=ft(o,e),c=Ce.fromObject(n),f=new Wo(zp(a),l,c);return Yp(t,o,f)}else return[]}function Kd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,h)=>{const m=ft(d,i);s=s||dr(h,m),o=o||Er(h)});let a=t.syncPointTree_.get(i);a?(o=o||Er(a),s=s||dr(a,he())):(a=new NE,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,m)=>{const _=dr(m,he());_&&(s=s.updateImmediateChild(h,_))}));const c=LE(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=iu(e);z(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=YO();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const f=nu(t.pendingWriteTree_,i);let u=MO(a,e,n,f,s,l);if(!c&&!o&&!r){const d=OE(a,e);u=u.concat(qO(t,e,d))}return u}function Vp(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ft(o,e),c=dr(a,l);if(c)return c});return CE(i,e,s,n,!0)}function VO(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const u=ft(c,n);r=r||dr(f,u)});let i=t.syncPointTree_.get(n);i?r=r||dr(i,he()):(i=new NE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new wr(r,!0,!1):null,a=nu(t.pendingWriteTree_,e._path),l=RE(i,e,a,s?o.getNode():J.EMPTY_NODE,s);return PO(l)}function ca(t,e){return FE(e,t.syncPointTree_,null,nu(t.pendingWriteTree_,he()))}function FE(t,e,n,r){if(ce(t.path))return UE(t,e,n,r);{const i=e.get(he());n==null&&i!=null&&(n=dr(i,he()));let s=[];const o=ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,f=bE(r,o);s=s.concat(FE(a,l,c,f))}return i&&(s=s.concat(Hp(i,t,r,n))),s}}function UE(t,e,n,r){const i=e.get(he());n==null&&i!=null&&(n=dr(i,he()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=bE(r,o),f=t.operationForChild(o);f&&(s=s.concat(UE(f,a,l,c)))}),i&&(s=s.concat(Hp(i,t,r,n))),s}function $E(t,e){const n=e.query,r=Bo(t,n);return{hashFn:()=>(TO(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?BO(t,n._path,r):WO(t,n._path);{const s=VR(i,n);return hc(t,n,null,s)}}}}function Bo(t,e){const n=iu(e);return t.queryToTagMap.get(n)}function iu(t){return t._path.toString()+"$"+t._queryIdentifier}function Gp(t,e){return t.tagToQueryMap.get(e)}function Kp(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Yp(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const i=nu(t.pendingWriteTree_,e);return Hp(r,n,i,null)}function GO(t){return t.fold((e,n,r)=>{if(n&&Er(n))return[ru(n)];{let i=[];return n&&(i=AE(n)),kt(r,(s,o)=>{i=i.concat(o)}),i}})}function so(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($O())(t._repo,t._path):t}function KO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=iu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function YO(){return zO++}function qO(t,e,n){const r=e._path,i=Bo(t,e),s=$E(t,n),o=t.listenProvider_.startListening(so(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)z(!Er(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,f,u)=>{if(!ce(c)&&f&&Er(f))return[ru(f).query];{let d=[];return f&&(d=d.concat(AE(f).map(h=>h.query))),kt(u,(h,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const f=l[c];t.listenProvider_.stopListening(so(f),Bo(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qp(n)}node(){return this.node_}}class Qp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new Qp(this.syncTree_,n)}node(){return Vp(this.syncTree_,this.path_)}}const QO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hy=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return XO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return JO(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},XO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},JO=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const i=e.node();if(z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ZO=function(t,e,n,r){return Xp(e,new Qp(n,t),r)},zE=function(t,e,n){return Xp(t,new qp(e),n)};function Xp(t,e,n){const r=t.getPriority().val(),i=hy(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=hy(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ge(a,qe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ge(i))),o.forEachChild(De,(a,l)=>{const c=Xp(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zp(t,e){let n=e instanceof _e?e:new _e(e),r=t,i=ae(n);for(;i!==null;){const s=ns(r.node.children,i)||{children:{},childCount:0};r=new Jp(i,r,s),n=Ee(n),i=ae(n)}return r}function ys(t){return t.node.value}function jE(t,e){t.node.value=e,Yd(t)}function WE(t){return t.node.childCount>0}function eL(t){return ys(t)===void 0&&!WE(t)}function su(t,e){kt(t.node.children,(n,r)=>{e(new Jp(n,t,r))})}function BE(t,e,n,r){n&&!r&&e(t),su(t,i=>{BE(i,e,!0,r)}),n&&r&&e(t)}function tL(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ua(t){return new _e(t.parent===null?t.name:ua(t.parent)+"/"+t.name)}function Yd(t){t.parent!==null&&nL(t.parent,t.name,t)}function nL(t,e,n){const r=eL(n),i=Ln(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Yd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Yd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=/[\[\].#$\/\u0000-\u001F\u007F]/,iL=/[\[\].#$\u0000-\u001F\u007F]/,af=10*1024*1024,HE=function(t){return typeof t=="string"&&t.length!==0&&!rL.test(t)},VE=function(t){return typeof t=="string"&&t.length!==0&&!iL.test(t)},sL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),VE(t)},oL=function(t,e,n,r){r&&e===void 0||em(yp(t,"value"),e,n)},em=function(t,e,n){const r=n instanceof _e?new CA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Or(r));if(typeof e=="function")throw new Error(t+"contains a function "+Or(r)+" with contents = "+e.toString());if(Ww(e))throw new Error(t+"contains "+e.toString()+" "+Or(r));if(typeof e=="string"&&e.length>af/3&&Qc(e)>af)throw new Error(t+"contains a string greater than "+af+" utf8 bytes "+Or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!HE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bA(r,o),em(t,a,r),IA(r)}),i&&s)throw new Error(t+' contains ".value" child '+Or(r)+" in addition to actual children.")}},GE=function(t,e,n,r){if(!(r&&n===void 0)&&!VE(n))throw new Error(yp(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aL=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),GE(t,e,n,r)},lL=function(t,e){if(ae(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!HE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sL(n))throw new Error(yp(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tm(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Lp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function KE(t,e,n){tm(t,n),YE(t,r=>Lp(r,e))}function un(t,e,n){tm(t,n),YE(t,r=>qt(r,e)||qt(e,r))}function YE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(fL(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function fL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Hr&&ot("event: "+n.toString()),vs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL="repo_interrupt",hL=25;class pL{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sc(),this.transactionQueueTree_=new Jp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mL(t,e,n){if(t.stats_=Ap(t.repoInfo_),t.forceRestClient_||qR())t.server_=new ic(t.repoInfo_,(r,i,s,o)=>{py(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>my(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new En(t.repoInfo_,e,(r,i,s,o)=>{py(t,r,i,s,o)},r=>{my(t,r)},r=>{vL(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=eA(t.repoInfo_,()=>new JA(t.stats_,t.server_)),t.infoData_=new KA,t.infoSyncTree_=new dy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=la(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rm(t,"connected",!1),t.serverSyncTree_=new dy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);un(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function gL(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function nm(t){return QO({timestamp:gL(t)})}function py(t,e,n,r,i){t.dataUpdateCount++;const s=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Kl(n,c=>qe(c));o=HO(t.serverSyncTree_,s,l,i)}else{const l=qe(n);o=ME(t.serverSyncTree_,s,l,i)}else if(r){const l=Kl(n,c=>qe(c));o=jO(t.serverSyncTree_,s,l)}else{const l=qe(n);o=la(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=au(t,s)),un(t.eventQueue_,a,o)}function my(t,e){rm(t,"connected",e),e===!1&&wL(t)}function vL(t,e){kt(e,(n,r)=>{rm(t,n,r)})}function rm(t,e,n){const r=new _e("/.info/"+e),i=qe(n);t.infoData_.updateSnapshot(r,i);const s=la(t.infoSyncTree_,r,i);un(t.eventQueue_,r,s)}function qE(t){return t.nextWriteId_++}function yL(t,e,n){const r=VO(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=qe(i).withIndex(e._queryParams.getIndex());Kd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=la(t.serverSyncTree_,e._path,s);else{const a=Bo(t.serverSyncTree_,e);o=ME(t.serverSyncTree_,e._path,s,a)}return un(t.eventQueue_,e._path,o),hc(t.serverSyncTree_,e,n,null,!0),s},i=>(ou(t,"get for query "+We(e)+" failed: "+i),Promise.reject(new Error(i))))}function _L(t,e,n,r,i){ou(t,"set",{path:e.toString(),value:n,priority:r});const s=nm(t),o=qe(n,r),a=Vp(t.serverSyncTree_,e),l=zE(o,a,s),c=qE(t),f=DE(t.serverSyncTree_,e,l,c,!0);tm(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,h)=>{const m=d==="ok";m||St("set at "+e+" failed: "+d);const _=zr(t.serverSyncTree_,c,!m);un(t.eventQueue_,e,_),kL(t,i,d,h)});const u=eS(t,e);au(t,u),un(t.eventQueue_,u,[])}function wL(t){ou(t,"onDisconnectEvents");const e=nm(t),n=sc();Wd(t.onDisconnect_,he(),(i,s)=>{const o=ZO(i,s,t.serverSyncTree_,e);_E(n,i,o)});let r=[];Wd(n,he(),(i,s)=>{r=r.concat(la(t.serverSyncTree_,i,s));const o=eS(t,i);au(t,o)}),t.onDisconnect_=sc(),un(t.eventQueue_,he(),r)}function EL(t,e,n){let r;ae(e._path)===".info"?r=Kd(t.infoSyncTree_,e,n):r=Kd(t.serverSyncTree_,e,n),KE(t.eventQueue_,e._path,r)}function gy(t,e,n){let r;ae(e._path)===".info"?r=hc(t.infoSyncTree_,e,n):r=hc(t.serverSyncTree_,e,n),KE(t.eventQueue_,e._path,r)}function SL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(dL)}function ou(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function kL(t,e,n,r){e&&vs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function QE(t,e,n){return Vp(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function im(t,e=t.transactionQueueTree_){if(e||lu(t,e),ys(e)){const n=JE(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&CL(t,ua(e),n)}else WE(e)&&su(e,n=>{im(t,n)})}function CL(t,e,n){const r=n.map(c=>c.currentWriteId),i=QE(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];z(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=ft(e,f.path);s=s.updateChild(u,f.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ou(t,"transaction put response",{path:l.toString(),status:c});let f=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(zr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();lu(t,Zp(t.transactionQueueTree_,e)),im(t,t.transactionQueueTree_),un(t.eventQueue_,e,f);for(let d=0;d<u.length;d++)vs(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{St("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}au(t,e)}},o)}function au(t,e){const n=XE(t,e),r=ua(n),i=JE(t,n);return bL(t,i,r),r}function bL(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ft(n,l.path);let f=!1,u;if(z(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,u=l.abortReason,i=i.concat(zr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=hL)f=!0,u="maxretry",i=i.concat(zr(t.serverSyncTree_,l.currentWriteId,!0));else{const d=QE(t,l.path,o);l.currentInputSnapshot=d;const h=e[a].update(d.val());if(h!==void 0){em("transaction failed: Data returned ",h,l.path);let m=qe(h);typeof h=="object"&&h!=null&&Ln(h,".priority")||(m=m.updatePriority(d.getPriority()));const b=l.currentWriteId,g=nm(t),p=zE(m,d,g);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=p,l.currentWriteId=qE(t),o.splice(o.indexOf(b),1),i=i.concat(DE(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(zr(t.serverSyncTree_,b,!0))}else f=!0,u="nodata",i=i.concat(zr(t.serverSyncTree_,l.currentWriteId,!0))}un(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}lu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)vs(r[a]);im(t,t.transactionQueueTree_)}function XE(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&ys(r)===void 0;)r=Zp(r,n),e=Ee(e),n=ae(e);return r}function JE(t,e){const n=[];return ZE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ZE(t,e,n){const r=ys(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);su(e,i=>{ZE(t,i,n)})}function lu(t,e){const n=ys(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,jE(e,n.length>0?n:void 0)}su(e,r=>{lu(t,r)})}function eS(t,e){const n=ua(XE(t,e)),r=Zp(t.transactionQueueTree_,e);return tL(r,i=>{lf(t,i)}),lf(t,r),BE(r,i=>{lf(t,i)}),n}function lf(t,e){const n=ys(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?jE(e,void 0):n.length=s+1,un(t.eventQueue_,ua(e),i);for(let o=0;o<r.length;o++)vs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):St(`Invalid query segment '${n}' in query '${t}'`)}return e}const vy=function(t,e){const n=TL(t),r=n.namespace;n.domain==="firebase.com"&&Rn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Rn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new eE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new _e(n.pathString)}},TL=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(f,u)),f<u&&(i=IL(t.substring(f,u)));const d=xL(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class nS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ce(this._path)?null:cE(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=ty(this._queryParams),n=Np(e);return n==="{}"?"default":n}get _queryObject(){return ty(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof sm))return!1;const n=this._repo===e._repo,r=Lp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kA(this._path)}}class dn extends sm{constructor(e,n){super(e,n,new Up,!1)}get parent(){const e=fE(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class as{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),r=pc(this.ref,e);return new as(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new as(i,pc(this.ref,r),De)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zs(t,e){return t=Ot(t),t._checkNotDeleted("ref"),e!==void 0?pc(t._root,e):t._root}function pc(t,e){return t=Ot(t),ae(t._path)===null?aL("child","path",e,!1):GE("child","path",e,!1),new dn(t._repo,Be(t._path,e))}function As(t,e){t=Ot(t),lL("set",t._path),oL("set",e,t._path,!1);const n=new qc;return _L(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function iS(t){t=Ot(t);const e=new rS(()=>{}),n=new cu(e);return yL(t._repo,t,n).then(r=>new as(r,new dn(t._repo,t._path),t._queryParams.getIndex()))}class cu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new tS("value",this,new as(e.snapshotNode,new dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nS(this,e,n):null}matches(e){return e instanceof cu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class om{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nS(this,e,n):null}createEvent(e,n){z(e.childName!=null,"Child events should have a childName.");const r=pc(new dn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new tS(e.type,this,new as(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof om?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function PL(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(f,u)=>{gy(t._repo,t,a),l(f,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new rS(n,s||void 0),a=e==="value"?new cu(o):new om(e,o);return EL(t._repo,t,a),()=>gy(t._repo,t,a)}function yy(t,e,n,r){return PL(t,"value",e,n,r)}OO(dn);UO(dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL="FIREBASE_DATABASE_EMULATOR_HOST",qd={};let RL=!1;function AL(t,e,n,r){t.repoInfo_=new eE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function OL(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Rn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vy(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[NL]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=vy(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const f=i&&l?new Hi(Hi.OWNER):new XR(t.name,t.options,e);cL("Invalid Firebase Database URL",o),ce(o.path)||Rn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=DL(a,t,f,new QR(t.name,n));return new ML(u,t)}function LL(t,e){const n=qd[e];(!n||n[t.key]!==t)&&Rn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),SL(t),delete n[t.key]}function DL(t,e,n,r){let i=qd[e.name];i||(i={},qd[e.name]=i);let s=i[t.toURLString()];return s&&Rn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new pL(t,RL,n,r),i[t.toURLString()]=s,s}class ML{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(LL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rn("Cannot call "+e+" on a deleted database.")}}function FL(t=rw(),e){const n=Ep(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=u2("database");r&&UL(n,...r)}return n}function UL(t,e,n,r={}){t=Ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Rn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Rn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Hi(Hi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:f2(r.mockUserToken,t.app.options.projectId);s=new Hi(o)}AL(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(t){DR(ms),rs(new ei("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return OL(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ur(Uv,$v,t),ur(Uv,$v,"esm2017")}En.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};En.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$L();const zL={apiKey:"AIzaSyCUyPgR8Z7fj3iXS_VXlsZOUurasOnochI",authDomain:"react-chess-d36fb.firebaseapp.com",databaseURL:"https://react-chess-d36fb-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"react-chess-d36fb",storageBucket:"react-chess-d36fb.appspot.com",messagingSenderId:"179911716640",appId:"1:179911716640:web:288ee42b166e3069207145"},jL=nw(zL),sS=LR(),js=FL(jL);gN(sS).catch(t=>console.error(t));const fa=N.exports.createContext(null),WL=()=>{const t=N.exports.useContext(fa);if(t===null)throw new Error("Lobby context has not been created.");return t},BL=async()=>{let t=0;for(;t<10;){let n=(Math.floor(Math.random()*999998)+1).toString().padStart(6,"0");if(!(await iS(zs(js,`lobbies/${n}`))).exists())return n;t++}},cf=t=>{const{defaultUsername:e,gameLength:n}=N.exports.useContext(Ir),[r,i]=N.exports.useState(!0),[s,o]=N.exports.useState(),[a,l]=N.exports.useState(void 0),c=N.exports.useRef();N.exports.useEffect(()=>(SN(sS,d=>{d?(c.current=d,o(d.uid)):(c.current=void 0,o(void 0))}),()=>{}),[]);const f=d=>{l(d.val())},u=s?r?{type:"ready",uid:s,Create:async d=>{if(!s){d("not authenticated yet");return}const h=await BL();if(!h){d("could not find a unique id for your lobby");return}const m=Pd(n,{w:{name:e,type:"local"},b:{name:"not joined",type:"online"}}),_=dv(m),b={lobbyId:h,hostUid:s,players:{w:{name:e,uid:s}},lastAccessTime:new Date().getTime(),game:_,inGame:!1,spectators:[]};try{const g=zs(js,`lobbies/${h}`);await As(g,JSON.parse(JSON.stringify(b))),l(b),i(!1),yy(g,f)}catch(g){d(`failed to create lobby (id ${h}).  see the console for more information.`),console.error(g)}},Connect:async(d,h)=>{var g;if(!s){h("not authenticated yet");return}const m=zs(js,`lobbies/${d}`),_=await iS(m);if(!_.exists()){h("lobby does not exist");return}const b=_.val();b.players.w.uid!==s&&(b.players.b===void 0?(b.players.b={name:e,uid:s},As(m,JSON.parse(JSON.stringify(b)))):b.players.b.uid!==s&&((g=b.spectators)!=null?g:[]).filter(v=>v.uid===s).length===0&&(b.spectators===void 0&&(b.spectators=[]),b.spectators.push({name:e,uid:s}),As(m,JSON.parse(JSON.stringify(b))))),yy(m,f),l(b),i(!1)}}:a!=null&&a.inGame?{type:"ingame",uid:s,lobby:a,Sync:d=>{const h=dv(d);l(m=>{if(m){let _=new Date().getTime();const b=h.timers[h.turn].set;b!==void 0&&(_=b),m={...m,game:h,lastAccessTime:_},As(zs(js,`lobbies/${m==null?void 0:m.lobbyId}`),JSON.parse(JSON.stringify(m)))}return m})}}:{type:"lobby",uid:s,lobby:a,Start:()=>{l(d=>(d&&(d={...d,inGame:!0},As(zs(js,`lobbies/${d.lobbyId}/inGame`),!0)),d))}}:{type:"loading"};return P(fa.Provider,{value:u,children:t.children})},Qd=(t,e)=>`${"abcdefgh"[t]}${8-e}`,_y=t=>["abcdefgh".indexOf(t[0]),8-parseInt(t[1])],oS=N.exports.createContext(null),da=()=>{const t=N.exports.useContext(oS);if(t===null)throw new Error("Chess context has not been created.");return t},uf=t=>{const{allowPause:e,defaultUsername:n,gameLength:r}=N.exports.useContext(Ir),[i,s]=N.exports.useState(Pd(r,{w:{name:"loading",type:"local"},b:{name:"loading",type:"local"}})),[o,a]=N.exports.useState(),l=N.exports.useRef(new Hl.Chess),c=N.exports.useRef(new e2),f=N.exports.useRef(void 0),u=N.exports.useContext(fa);c.current.onmessage=h=>{const m=h.data;switch(m.type){case"success":{s(_=>ut(_,{type:"move",from:m.move.from,to:m.move.to,promotion:m.move.promotion,time:new Date().getTime(),chess:l.current}));break}case"failed":{alert("bot failed to generate a move");break}}},N.exports.useEffect(()=>{var m,_,b,g,p,v;if((i.turn==="b"?(m=f.current)==null?void 0:m.player_black:(_=f.current)==null?void 0:_.player_white)==="bot"&&i.redoStack.length===0)c.current.postMessage({type:"generateMove",fen:l.current.fen(),team:i.turn});else if((u==null?void 0:u.type)==="ingame"){const S=u.lobby.players[i.turn==="w"?"b":"w"],O=(g=(b=i.moves)==null?void 0:b.length)!=null?g:0,I=(v=(p=u.lobby.game.moves)==null?void 0:p.length)!=null?v:0;S&&S.uid===u.uid&&O>I&&u.Sync(i)}},[i.turn]),N.exports.useEffect(()=>{if((u==null?void 0:u.type)==="ingame"){const h=u.lobby;s(m=>{const _=t2(m,h,u.uid,l.current,new Date().getTime());if(typeof _=="string")a(_),console.error("found cheater!"),console.error(_);else return _;return m})}},[u]);const d={state:i,anticheat:o,clearAnticheat:()=>{a(void 0)},StartNewGame:h=>{f.current=h,l.current=new Hl.Chess,s(Pd(r,{w:{name:"WHITE",type:h.player_white},b:{name:h.player_black==="bot"?"BOT":"BLACK",type:h.player_black}}))},MakeMove:(h,m)=>(s(_=>ut(_,{type:"move",from:h,to:m,time:new Date().getTime(),chess:l.current})),!0),Promote:(h,m,_)=>(s(b=>ut(b,{type:"move",from:h,to:m,promotion:_,time:new Date().getTime(),chess:l.current})),!0),PotentialMoves:(h,m)=>l.current.moves({square:Qd(h,m),verbose:!0}),UndoMove:()=>i.players.w.type==="online"||i.players.b.type==="online"?!1:(s(h=>ut(h,{type:"undo",time:new Date().getTime(),chess:l.current})),!0),RedoMove:()=>i.players.w.type==="online"||i.players.b.type==="online"?!1:(s(h=>ut(h,{type:"redo",time:new Date().getTime(),chess:l.current})),!0),Pause:()=>i.players.w.type==="online"||i.players.b.type==="online"||!e?!1:(s(h=>ut(h,{type:"pause",time:new Date().getTime()})),!0),OutOfTime:()=>{s(h=>ut(h,{type:"checkTimers",time:new Date().getTime(),chess:l.current}))}};return P(oS.Provider,{value:d,children:t.children})},HL=V.p`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: #000000AA;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  opacity: ${t=>t.opacity};
  transition: opacity 0.5s;
`,am=({error:t,duration:e,onErrorClose:n})=>{const[r,i]=N.exports.useState(""),[s,o]=N.exports.useState(1);return N.exports.useEffect(()=>{if(i(t),t!=""){setTimeout(()=>{o(0)},e);const a=setTimeout(()=>{o(1),i(""),n()},e+500);return()=>clearTimeout(a)}},[t]),P(Js,{children:r!==""&&P(HL,{opacity:s,children:r})})},wy="512px",oo=(t,e)=>{switch(t){case"p":return e?"\u2659":"\u265F\uFE0E";case"r":return e?"\u2656":"\u265C";case"n":return e?"\u2658":"\u265E";case"b":return e?"\u2657":"\u265D";case"k":return e?"\u2654":"\u265A";case"q":return e?"\u2655":"\u265B"}return"_"},dl=t=>{switch(t){case"p":return"pawn";case"r":return"rook";case"n":return"knight";case"b":return"bishop";case"k":return"king";case"q":return"queen"}return"_"},aS=(t,e)=>{const n=`/react-chess/pieces/shadow/${wy}/`,r=`${e?"w":"b"}_${dl(t)}_png_shadow_${wy}.png`;return n+r},VL=V.img.attrs(t=>{if(t.drag_state)return{style:{transform:`translate(${t.drag_state.x-t.drag_state.relx}px, ${t.drag_state.y-t.drag_state.rely}px)`,transition:"none",zIndex:15}};let e={};return t.moved&&(e={zIndex:10}),{style:{transform:`translate(${t.gx*100}%, ${t.gy*100}%)`,...e}}})`
  position: absolute;
  width: 12.5%;
  height: 12.5%;
  top: 0px;
  left: 0px;
  transition: transform 0.5s;
  touch-action: none;
`,GL=t=>{const e=N.exports.useRef(null),[n,r]=N.exports.useState(null),[i,s]=N.exports.useState(!1),o=d=>{if(d.stopPropagation(),d.preventDefault(),d.button!=0||!t.can_click)return;const h=d.target.getBoundingClientRect(),m=d.target.parentElement;if(m===null)return;const _=d.pageX-h.x+m.offsetLeft,b=d.pageY-h.y+m.offsetTop-window.scrollY;t.on_select_change(!0),r({x:d.pageX,y:d.pageY,relx:_,rely:b})},a=d=>{if(d.stopPropagation(),d.preventDefault(),!t.can_click||d.touches.length===0)return;const h=d.target.getBoundingClientRect(),m=d.target.parentElement;if(m===null)return;const _=d.touches[0].pageX-h.x+m.offsetLeft,b=d.touches[0].pageY-h.y+m.offsetTop;t.on_select_change(!0),r({x:d.touches[0].pageX,y:d.touches[0].pageY,relx:_,rely:b})},l=d=>{n!==null&&(r(h=>({x:d.pageX,y:d.pageY,relx:h!==null?h.relx:0,rely:h!==null?h.rely:0})),d.stopPropagation(),d.preventDefault())},c=d=>{n===null&&d.touches.length>0||(r(h=>({x:d.touches[0].pageX,y:d.touches[0].pageY,relx:h!==null?h.relx:0,rely:h!==null?h.rely:0})),d.stopPropagation(),d.preventDefault())},f=d=>{if(n!==null){t.on_select_change(!1),r(null);const h=t.pixels_to_grid(d.pageX,d.pageY);t.on_place(h[0],h[1])}},u=()=>{if(n!==null){const[d,h]=[n.x,n.y];t.on_select_change(!1),r(null);const m=t.pixels_to_grid(d,h);t.on_place(m[0],m[1])}};return N.exports.useEffect(()=>(n!==null&&(document.addEventListener("mousemove",l,{passive:!1}),document.addEventListener("mouseup",f,{passive:!1}),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",u,{passive:!1})),()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",u)}),[n]),N.exports.useEffect(()=>{s(!0),setTimeout(()=>{s(!1)},500)},[t.grid_x,t.grid_y]),P(VL,{drag_state:n,moved:i,gx:t.grid_x,gy:t.grid_y,ref:e,onMouseDown:o,onTouchStart:a,src:aS(t.type,t.is_white)})},KL=V.div`
grid-column: ${t=>t.grid_x+1} / span 1;
grid-row: ${t=>t.grid_y+1} / span 1;
position: relative;
`,YL=V.div`
top: 25%;
left: 25%;
position: absolute;
width: 50%;
height: 50%;
border-radius: 50%;
background-color: ${t=>t.will_take?"#fc0339":t.is_castle?"#f5a742":"#03a1fc"};
`,qL=t=>P(KL,{...t,children:P(YL,{...t})}),QL=V.div`
  width: 100%;
  height: 100%;

  display: grid;
  position: relative;
  grid-template-columns: ${()=>"auto ".repeat(8)+";"};
  grid-template-rows: ${()=>"auto ".repeat(8)+";"};
  user-select: none;
  -moz-user-select: none;
  touch-action: none;
`,XL=V.div`
  position: relative;
  background-color: ${t=>t.gridColor?t.theme.chess.board_light:t.theme.chess.board_dark};
  grid-column: ${t=>t.grid_x+1} / span 1;
  grid-row: ${t=>t.grid_y+1} / span 1;
`,JL=V.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: ${t=>t.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
  z-index: 10;
`,ZL=V.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${t=>t.theme.chess.board_text};
  font-weight: bold;
  font-size: 18px;
  z-index: 10;
`,Ey=V.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  right: 50px;
  background: ${t=>t.theme.menus.controls.background};
  z-index: 20;
`,Sy=V.h1`
  text-align: center;
  color: #fff;
  padding-top: 1em;
`,eD=V.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 2em 0em 4em 0em;
`,tD=V.img`
  width: 15%;
  background: #fff;
  border: 1px solid #ffffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${t=>t.theme.menus.controls.background};
  transition: border 0.2s, box-shadow 0.2s, background 0.2s;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  padding: 5px;

  &:hover {
    border: 1px solid #777;
    box-shadow: 1px 1px 5px #aeaeae;
  }

  &:active {
    background: #eee;
  }
`,nD=V.h2`
  text-align: center;
  color: #fff;
  padding-bottom: 1em;
`,rD=["q","r","n","b"],iD=()=>{const{state:{board:t,turn:e,players:n,complete:r},anticheat:i,clearAnticheat:s,PotentialMoves:o,MakeMove:a,Promote:l}=da(),[c,f]=N.exports.useState(null),u=N.exports.useRef(null),[d,h]=N.exports.useState(""),[m,_]=N.exports.useState(void 0);N.exports.useContext(fa);const b=I=>{if(!I.target||!u.current)return;const M=I.target;(M===u.current||u.current.contains(M))&&(I.preventDefault(),I.stopPropagation())};N.exports.useEffect(()=>(document.addEventListener("touchmove",b,{passive:!1}),()=>{document.removeEventListener("touchmove",b)}),[]),N.exports.useEffect(()=>{h(i||"")},[i]);const g=(I,M)=>{const F=u.current;if(F===null)return console.log("failed to get reference to game board div!"),[0,0];const G=Math.floor((I-F.offsetLeft)/(F.offsetWidth/8)),j=Math.floor((M-F.offsetTop)/(F.offsetHeight/8));return[G,j]},p=(I,M)=>{const F=u.current;if(F===null)return console.log("failed to get reference to game board div!"),[0,0];const G=I*(F.offsetWidth/8)+F.offsetLeft,j=M*(F.offsetHeight/8)+F.offsetTop;return[G,j]},v=(I,M,F,G)=>{var we;const j=Qd(I,M),pe=Qd(F,G);if(pe[1]===(e==="w"?"8":"1")&&((we=t[M][I])==null?void 0:we.type)==="p"){_({from:j,to:pe});return}if(!a(j,pe)){h(`unable to move piece from ${j} to ${pe}`);return}},S=(I,M,F)=>{if(!l(I,M,F)){h(`unable to move piece from ${I} to ${M} (picked ${dl(F)})`);return}_(void 0)},O=()=>{if(r===void 0)return"invalid reason";let I=e==="w"?n.w.name:n.b.name;return r.indexOf(mi.CHECKMATE)>=0?I+" is in checkmate":r.indexOf(mi.OUT_OF_TIME)>=0?I+" ran out of time":r.indexOf(mi.INSUFFICIENT_MATERIAL)>=0?I+" has insufficient material":r.indexOf(mi.THREEFOLD_REPITITION)>=0?I+" performed threefold repitition":r.indexOf(mi.DRAW)>=0?"draw":"invalid reason"};return ie(QL,{ref:u,children:[[...Array(8*8)].map((I,M)=>{const F=M%8,G=Math.floor(M/8);return ie(XL,{grid_x:F,grid_y:G,gridColor:(M-G)%2==0,children:[F==0&&P(JL,{children:8-G}),G==0&&P(ZL,{children:"abcdefgh"[F]})]},M)}),t.map((I,M)=>I.map((F,G)=>({x:G,y:M,...F}))).flat().filter(I=>I.team&&I.type&&I.uid).sort((I,M)=>I.uid.localeCompare(M.uid)).map(I=>P(GL,{type:I.type,grid_x:I.x,grid_y:I.y,is_white:I.team=="w",on_place:(M,F)=>v(I.x,I.y,M,F),pixels_to_grid:g,grid_to_pixels:p,on_select_change:M=>f(M?{grid_x:I.x,grid_y:I.y}:null),can_click:I.team===e&&n[e].type==="local"},`piece_${I.uid}`)),c&&o(c.grid_x,c.grid_y).map((I,M)=>P(qL,{grid_x:_y(I.to)[0],grid_y:_y(I.to)[1],will_take:I.flags.indexOf("e")>=0||I.flags.indexOf("c")>=0,is_castle:I.flags.indexOf("k")>=0||I.flags.indexOf("q")>=0},`move_${M}`)),P(am,{error:d,duration:1e3,onErrorClose:()=>{h(""),s()}}),m&&ie(Ey,{children:[P(Sy,{children:"promotion"}),P(eD,{children:rD.map(I=>P(tD,{src:aS(I,e==="w"),title:dl(I),alt:dl(I),onClick:()=>S(m.from,m.to,I)},`promotion-${I}`))})]}),r&&ie(Ey,{children:[P(Sy,{children:"Game Over: "}),P(nD,{children:O()})]})]})},sD=V.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${t=>t.theme.menus.controls.background};
  user-select: none;
`,Os=V(br)`
  background: ${t=>t.theme.menus.controls.button};
  padding: 9px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${t=>t.theme.menus.controls.background};
  border: 1px solid #ffffffff;
  transition: border 0.2s, box-shadow 0.2s, background 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid #777;
    box-shadow: 1px 1px 5px #aeaeae;
  }

  &:active {
    background: #eee;
  }
`,oD=({toggleFullscreen:t,quitGame:e})=>{const{UndoMove:n,RedoMove:r,Pause:i}=da(),[s,o]=N.exports.useState("");return ie(sD,{children:[P(Os,{onClick:()=>n()||o("Undo is disabled"),icon:DT,title:"Undo move"}),P(Os,{onClick:()=>r()||o("Redo is disabled"),icon:OT,title:"Redo move"}),P(Os,{onClick:()=>i()||o("Pause is disabled"),icon:RT,title:"Pause"}),P(Os,{onClick:()=>t(),icon:$T,title:"Fullscreen"}),P(Os,{onClick:()=>e(),icon:PT,title:"Leave game"}),P(am,{error:s,duration:1e3,onErrorClose:()=>o("")})]})},aD=V.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${t=>t.theme.menus.players.background};
`,lD=V.div`
  display: grid;
  border-top: 2px solid ${t=>t.theme.menus.controls.background};
  grid-template-columns: 50px auto 50px;
  grid-template-rows: 20px 20px 20px;
  grid-template-areas:
    "icon name turn"
    "icon details turn"
    "pieces pieces turn";
`,cD=V.span`
  font-size: 30px;
  width: 50px;
  text-align: center;
  align-self: center;
  grid-area: icon;
`,uD=V.p`
  padding: 0px;
  margin: 0px;
  grid-area: name;
  align-self: end;
  color: ${t=>t.theme.colors.text};
`,fD=V.span`
  font-size: 10px;
  background: #ff0000;
  border-radius: 7px;
  padding: 2px 4px;
  color: ${t=>t.theme.colors.text};
`,dD=V.p`
  padding: 0px;
  margin: 0px;
  align-self: center;
  grid-area: details;
  color: ${t=>t.theme.colors.text};
`,hD=V.p`
  grid-area: pieces;
  padding: 0px;
  margin: 0px;
  margin-top: -3px;
  margin-left: 2px;
  color: #000;
`,pD=V.p`
  grid-area: turn;
  display: flex;
  align-item: center;
  justify-content: center;
  color: ${t=>t.theme.colors.text};
`,di={icon:"",name:"loading...",status:"",details:"",turn:!1,lost_pieces:[],playable:!1,timer:{minutes:0,seconds:0}},mD=()=>{const{state:{players:t,captured:e,turn:n,complete:r,timers:i,check:s},OutOfTime:o}=da(),[a,l]=N.exports.useState([{...di,lost_pieces:[...di.lost_pieces],timer:{...di.timer}},{...di,lost_pieces:[...di.lost_pieces],timer:{...di.timer}}]),c=()=>{l(u=>(u.forEach((d,h)=>{const m=h===0?"w":"b";d.icon=oo("k",m==="w"),s[m]?d.status="CHECK":d.status="",d.name=t[m].name,d.playable=t[m].type==="local",d.turn=n===m,d.lost_pieces=[...e[m]]}),[...u]))},f=()=>{l(u=>(u.forEach((d,h)=>{const m=h===0?"w":"b",{set:_,time:b}=i[m];let g=0;_&&(g=(new Date().getTime()-_)/1e3);let p=b-g;p<=0&&(p=0),d.timer.minutes=Math.floor(p/60),d.timer.seconds=Math.floor(p)%60}),[...u]))};return N.exports.useEffect(()=>{c()},[e,n,r,t]),N.exports.useEffect(()=>{f();const u=setInterval(()=>{f();for(const d of a)d.timer.minutes===0&&d.timer.seconds===0&&o()},1e3);return()=>{clearInterval(u)}},[i]),P(aD,{style:{gridArea:"players"},children:a.map((u,d)=>ie(lD,{children:[P(cD,{children:u.icon}),ie(uD,{children:[u.playable?P("strong",{children:u.name}):u.name," ",u.status!==""&&P(fD,{children:u.status})]}),ie(dD,{children:[u.timer.minutes,":",u.timer.seconds.toString().padStart(2,"0")]}),P(hD,{children:u.lost_pieces.map(h=>oo(h,d==1))}),P(pD,{children:u.turn&&P(br,{style:{alignSelf:"center"},icon:NT})})]},d))})},gD=V.div`
  grid-area: moves;
  overflow-y: auto;
  background-color: ${t=>t.theme.menus.moves.background};
  max-height: min(calc(100vw - 450px), calc(1000px - 430px));
  @media (max-width: 800px) {
    max-height: none;
  }
`,ky=V.p`
  padding: 5px 10px;
  margin: 0px;
  color: ${t=>t.theme.colors.text};
`,vD=()=>{const{useChessNotation:t}=N.exports.useContext(Ir),{state:{moves:e,redoStack:n}}=da(),r=i=>{if(t)return i.san;const s=oo(i.piece,i.color==="w");if(i.flags.indexOf("k")>=0)return`castled ${s} kingside`;if(i.flags.indexOf("q")>=0)return`castled ${s} queenside`;let o=`moved ${s} ${i.from} to ${i.to}`;if(i.promotion){const a=oo(i.promotion,i.color==="w");o+=` (promoted to ${a})`}if(i.captured){const a=oo(i.captured,i.color==="b");o+=` (took ${a})`}return o};return ie(gD,{children:[(e!=null?e:[]).map((i,s)=>P(ky,{style:(e!=null?e:[]).length-1===s?{fontWeight:"bold"}:{},children:r(i)},`move_${s}`)),[...n].reverse().map((i,s)=>P(ky,{children:r(i)},`move_redo_${s}`))]})};var Ct={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},Cy=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],by=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],Iy=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],mt=typeof window<"u"&&typeof window.document<"u"?window.document:{},Lt="fullscreenEnabled"in mt&&Object.keys(Ct)||Cy[0]in mt&&Cy||by[0]in mt&&by||Iy[0]in mt&&Iy||[],yD={requestFullscreen:function(t){return t[Lt[Ct.requestFullscreen]]()},requestFullscreenFunction:function(t){return t[Lt[Ct.requestFullscreen]]},get exitFullscreen(){return mt[Lt[Ct.exitFullscreen]].bind(mt)},get fullscreenPseudoClass(){return":"+Lt[Ct.fullscreen]},addEventListener:function(t,e,n){return mt.addEventListener(Lt[Ct[t]],e,n)},removeEventListener:function(t,e,n){return mt.removeEventListener(Lt[Ct[t]],e,n)},get fullscreenEnabled(){return Boolean(mt[Lt[Ct.fullscreenEnabled]])},set fullscreenEnabled(t){},get fullscreenElement(){return mt[Lt[Ct.fullscreenElement]]},set fullscreenElement(t){},get onfullscreenchange(){return mt[("on"+Lt[Ct.fullscreenchange]).toLowerCase()]},set onfullscreenchange(t){return mt[("on"+Lt[Ct.fullscreenchange]).toLowerCase()]=t},get onfullscreenerror(){return mt[("on"+Lt[Ct.fullscreenerror]).toLowerCase()]},set onfullscreenerror(t){return mt[("on"+Lt[Ct.fullscreenerror]).toLowerCase()]=t}};const hi=yD,_D=V.div`
  overflow: ${t=>t.fullscreen?"scroll":"default"};
  padding: 0;
  margin: 0;
`,wD=t=>{const e=N.exports.useRef(null),[n,r]=N.exports.useState(!1),[i,s]=N.exports.useState(""),o=()=>{hi.fullscreenElement!==null?r(!0):r(!1)};return N.exports.useEffect(()=>(hi.addEventListener("fullscreenchange",o,!1),()=>hi.removeEventListener("fullscreenchange",o,!1)),[]),N.exports.useEffect(()=>{if(e.current===null||!hi.fullscreenEnabled){t.isFullscreen&&s("fullscreen is not available!");return}t.isFullscreen&&!n?hi.requestFullscreen(e.current):!t.isFullscreen&&n&&hi.exitFullscreen()},[t.isFullscreen]),ie(_D,{ref:e,fullscreen:n,children:[t.children,P(am,{error:i,duration:1e3,onErrorClose:()=>s("")})]})},ED=V.div`
  ${t=>t.fullscreen&&`display: flex; 
  align-items: center; justify-content: center; 
  background: ${t.theme.colors.background}; 
  width: 100%; height: 100%;`}
  
  width: 100%;
`,SD=V.div`
  width: 100%;
  ${t=>t.fullscreen&&"max-width: 1400px;"};
  display: grid;
  background: ${t=>t.theme.colors.grid};
  grid-template-columns: auto auto 250px;
  grid-template-rows: 60px 120px auto;
  grid-template-areas:
    "chess chess controls"
    "chess chess players"
    "chess chess moves";

  @media (max-width: 800px) {
    grid-template-columns: 250px auto;
    grid-template-rows: auto 60px 120px;
    grid-template-areas:
      "chess chess"
      "controls moves"
      "players moves"
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto 60px 120px auto;
    grid-template-areas:
      "chess"
      "controls"
      "players"
      "moves"
  }
`,kD=V.div`
  grid-area: chess;
  aspect-ratio: 1;
`,ff=({type:t})=>{const[e,n]=N.exports.useState(!1),{hasLoaded:r}=N.exports.useContext(Ir),{id:i}=l1(),{StartNewGame:s}=da(),o=ep(),a=N.exports.useContext(fa);N.exports.useEffect(()=>{!r||(t==="bot"?s({player_white:"local",player_black:"bot",positions:"default"}):t==="local"?s({player_white:"local",player_black:"local",positions:"default"}):(a==null?void 0:a.type)==="ready"&&a.Connect(i!=null?i:"",f=>{alert(f)}))},[r,a==null?void 0:a.type]);const l=()=>{n(f=>!f)},c=()=>{confirm("would you like to quit this game?  once left, it cannot be joined again.")&&o("/")};return P(wD,{isFullscreen:e,children:ie(ED,{fullscreen:e,children:[a&&a.type!=="ingame"&&P("p",{children:"connecting..."}),ie(SD,{fullscreen:e,children:[P(kD,{children:P(iD,{})}),P(oD,{toggleFullscreen:()=>l(),quitGame:()=>c()}),P(mD,{}),P(vD,{})]})]})})},CD=V.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 85%;
  border: 2px solid #000;
  padding: 10px;
  background: ${t=>t.theme.colors.background};
`,Tr=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`,bD=V.h1`
  margin: 10px 0;
  color: ${t=>t.theme.colors.text};
`,ID=V.h1`
  user-select: none;
  cursor: pointer;
  margin: 0;
  color: ${t=>t.theme.colors.text};
`,pi=V.p`
  font-size: 1.2em;
  margin: 5px 0;
  color: ${t=>t.theme.colors.text};
`,Va=V.input`
`,xD=V.input`
`,TD=V.input`
`,xy=V.p`
  color: red;
`,PD=V.p`
  color: ${t=>t.theme.colors.text};
`,ND=V.a`
  color: ${t=>t.theme.colors.text};
`,RD=({onClickSettings:t})=>{const e=N.exports.useContext(Ir),n=N.exports.useRef(null),r=N.exports.useRef(null),i=N.exports.useRef(null),s=N.exports.useRef(null),o=N.exports.useRef(null),[a,l]=N.exports.useState(""),[c,f]=N.exports.useState(""),[u,d]=N.exports.useState(0),[h,m]=N.exports.useState(""),_=()=>{e.updateSettings(v=>{const S={...v};return n.current&&(S.useSystemTheme=n.current.checked),r.current&&(S.darkTheme=r.current.checked),i.current&&(S.allowPause=i.current.checked),i.current&&(S.allowPause=i.current.checked),s.current&&(S.useChessNotation=s.current.checked),S})},b=v=>/^[a-zA-Z0-9 _-]{1,16}$/gi.test(v),g=v=>{l(v),e.updateSettings(S=>(b(v)&&(S.defaultUsername=v),{...S}))},p=v=>{if(isNaN(v)||v<5||v>30){m("game length must be a number between 5 and 30");return}else m("");d(v),e.updateSettings(S=>(v>=5&&v<=30&&(S.gameLength=v),{...S}))};return N.exports.useEffect(()=>{b(a)?f(""):f("username must be 1-16 characters, containing letters, numbers, spaces, underscores and dashes")},[a]),N.exports.useEffect(()=>{a!==e.defaultUsername&&l(e.defaultUsername)},[e.defaultUsername]),N.exports.useEffect(()=>{u!==e.gameLength&&d(e.gameLength)},[e.gameLength]),ie(CD,{children:[ie(Tr,{children:[P(bD,{children:"settings"}),P(ID,{onClick:t,children:P(br,{icon:jT})})]}),ie(Tr,{children:[P(pi,{children:"match system theme"}),P(Va,{type:"checkbox",ref:n,checked:e.useSystemTheme,onChange:()=>_()})]}),ie(Tr,{children:[P(pi,{children:"dark theme"}),P(Va,{type:"checkbox",ref:r,checked:e.isDarkTheme,disabled:e.useSystemTheme,onChange:()=>_()})]}),ie(Tr,{children:[P(pi,{children:"allow pause"}),P(Va,{type:"checkbox",ref:i,checked:e.allowPause,onChange:()=>_()})]}),ie(Tr,{children:[P(pi,{children:"use chess notation"}),P(Va,{type:"checkbox",ref:s,checked:e.useChessNotation,onChange:()=>_()})]}),ie(Tr,{children:[P(pi,{children:"game length (minutes per player)"}),P(xD,{type:"number",value:u,min:5,max:30,step:5,onChange:v=>p(parseInt(v.target.value))})]}),h!==""&&P(xy,{children:h}),ie(Tr,{children:[P(pi,{children:"default username"}),P(TD,{ref:o,value:a,onChange:v=>g(v.target.value)})]}),c!==""&&P(xy,{children:c}),ie(PD,{children:["these settings are stored in your\xA0",P(ND,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:"localStorage"})]})]})},AD=V.div`
`,Ty=V.h1`
  text-align: center;
  color: ${t=>t.theme.colors.text};
`,OD=V.p`
  text-align: center;
  color: ${t=>t.theme.colors.text};
`,Py=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 200px;
  margin: 0 auto;
  align-items: center;
`,Ga=V(u1)`
  background: ${t=>t.theme.colors.primary};
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #000;
  font-size: 2em;
  margin: 0.5em;
  text-align: center;
`,LD=V.input`
  font-size: 2em;
  width: 140px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
`,DD=()=>{const t=N.exports.useRef(null),[e,n]=N.exports.useState("");return ie(AD,{children:[P(Ty,{children:"create a game"}),ie(Py,{children:[P(Ga,{to:"/game",children:"local"}),P(Ga,{to:"/game/bot",children:"bot"}),P(Ga,{to:"/lobby",children:"online"})]}),P(Ty,{children:"join game"}),ie(Py,{children:[P(LD,{placeholder:"lobby id",maxLength:6,value:e,ref:t,type:"text",onChange:()=>{var r,i;n((i=(r=t.current)==null?void 0:r.value)!=null?i:"")}}),P(Ga,{to:`/lobby/${e}`,children:"join"})]}),P(OD,{children:"play chess against a local player, a bot, or an online player."})]})},MD=V.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,FD=V.div`
  display: flex;
  align-items: center;
`,UD=V.h1`
  color: ${t=>t.theme.colors.text};
  flex: 1;
  font-size: 3em;
`,$D=V.input`
  font-size: 2em;
  width: 140px;
  text-align: center;
`,zD=V.button`
  font-size: 2em;
`,jD=V.div`
`,WD=V.div`
`,BD=V.button`
  font-size: 2em;
`,Ls=V.p`
  color: ${t=>t.theme.colors.text};
`,HD=V.h1`
  color: red;
`,Ny=()=>{const t=WL(),{id:e}=l1(),[n,r]=N.exports.useState(),i=ep(),{hasLoaded:s}=N.exports.useContext(Ir);return N.exports.useEffect(()=>{if(t.type!=="loading"){if(t.type==="lobby"){e||(i(`/lobby/${t.lobby.lobbyId}/`),window.location.reload());return}if(t.type==="ingame"){i(`/game/${t.lobby.lobbyId}/`);return}!s||(e?t.Connect(e,r):t.Create(r))}},[t.type,e,s]),ie(MD,{children:[ie(FD,{children:[P(UD,{children:"lobby"}),t.type==="lobby"&&ie(Js,{children:[P($D,{value:t.lobby.lobbyId,type:"text",disabled:!0}),P(zD,{onClick:()=>{navigator.clipboard.writeText(window.location.href)},children:"copy"})]})]}),n?P(Js,{children:P(HD,{children:n})}):t.type==="lobby"?ie(Js,{children:[ie(jD,{children:[ie(Ls,{children:["white: ",t.lobby.players.w.name]}),t.lobby.players.b&&ie(Ls,{children:["black: ",t.lobby.players.b.name]}),ie(Ls,{children:["spectators:"," ",t&&t.lobby.spectators&&t.lobby.spectators.length>0?t.lobby.spectators.map(o=>P("span",{children:o.name},o.uid)):P("span",{children:"none"})]}),P(Ls,{children:"game length: 5 minutes (change in settings)"})]}),t.lobby.hostUid===t.uid&&P(WD,{onClick:t.Start,children:P(BD,{children:"start game"})})]}):ie(Ls,{children:[e?"connecting to":"creating"," lobby..."]})]})},VD={colors:{text:"#000",background:"#fff",grid:"#eee",primary:"#c4b5fd"},menus:{controls:{background:"#bbb",button:"#fff",button_hover:"#eee"},players:{background:"#ddd"},moves:{background:"",white:"",black:"",hover:""}},chess:{board_light:"#e3c06f",board_dark:"#b88a4a",board_text:"#fff",move:"",move_castle:"",move_takes:""}},GD={colors:{text:"#fff",background:"#0f172a",grid:"#eee",primary:"#c4b5fd"},menus:{controls:{background:"#1e293b",button:"#fff",button_hover:"#eee"},players:{background:"#334155"},moves:{background:"#475569",white:"#475569",black:"#52525b",hover:"#94a3b8"}},chess:{board_light:"#e3c06f",board_dark:"#b88a4a",board_text:"#fff",move:"",move_castle:"",move_takes:""}},KD=t=>{const e=N.exports.useContext(Ir);return P(wb,{theme:e.isDarkTheme?GD:VD,children:t.children})},YD=Sb`
body, html {
  margin: 0;
  font-family: 'Consolas',
    monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: ${t=>t.theme.colors.background};
}

#root {
  height: 100%;
}

::-webkit-scrollbar{
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb{
  background: #B3AFB3;
  border-radius: 9px;
}
::-webkit-scrollbar-thumb:hover{
  background: #B3AFB3;
}
::-webkit-scrollbar-track{
  background: #FFFFFF00;
  border-radius: 9px;
  box-shadow: inset 0px 0px 0px 0px #F0F0F000;
}
`,qD=V.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
  background: ${t=>t.theme.colors.background};
`,QD=NI;function XD(){const[t,e]=N.exports.useState(!1),n=()=>e(r=>!r);return P(ZT,{children:P(KD,{children:ie(QD,{children:[P(YD,{}),ie(qD,{className:"App",children:[P(KT,{onClickSettings:n}),ie(bI,{children:[P(Rr,{path:"/",element:P(DD,{})}),P(Rr,{path:"/game/bot",element:P(uf,{children:P(ff,{type:"bot"})})}),P(Rr,{path:"/game/:id",element:P(cf,{children:P(uf,{children:P(ff,{type:"online"})})})}),P(Rr,{path:"/game",element:P(uf,{children:P(ff,{type:"local"})})}),P(Rr,{path:"/lobby/:id",element:P(cf,{children:P(Ny,{})})}),P(Rr,{path:"/lobby",element:P(cf,{children:P(Ny,{})})})]}),P(XT,{}),t&&P(RD,{onClickSettings:n})]})]})})})}hf.createRoot(document.getElementById("root")).render(P(fn.StrictMode,{children:P(XD,{})}));
