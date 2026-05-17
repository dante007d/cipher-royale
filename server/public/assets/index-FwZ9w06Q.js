function eS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function S_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var M_={exports:{}},eu={},E_={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),tS=Symbol.for("react.portal"),nS=Symbol.for("react.fragment"),iS=Symbol.for("react.strict_mode"),rS=Symbol.for("react.profiler"),sS=Symbol.for("react.provider"),oS=Symbol.for("react.context"),aS=Symbol.for("react.forward_ref"),lS=Symbol.for("react.suspense"),cS=Symbol.for("react.memo"),uS=Symbol.for("react.lazy"),Cm=Symbol.iterator;function hS(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var w_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T_=Object.assign,b_={};function So(t,e,n){this.props=t,this.context=e,this.refs=b_,this.updater=n||w_}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function A_(){}A_.prototype=So.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=b_,this.updater=n||w_}var qd=jd.prototype=new A_;qd.constructor=jd;T_(qd,So.prototype);qd.isPureReactComponent=!0;var Rm=Array.isArray,C_=Object.prototype.hasOwnProperty,Yd={current:null},R_={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)C_.call(e,i)&&!R_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ka,type:t,key:s,ref:o,props:r,_owner:Yd.current}}function fS(t,e){return{$$typeof:ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $d(t){return typeof t=="object"&&t!==null&&t.$$typeof===ka}function dS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function Du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dS(""+t.key):e.toString(36)}function Wl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ka:case tS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Du(o,0):i,Rm(r)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),Wl(r,e,n,"",function(c){return c})):r!=null&&($d(r)&&(r=fS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Pm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Du(s,a);o+=Wl(s,e,n,l,r)}else if(l=hS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Du(s,a++),o+=Wl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return Wl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function pS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wn={current:null},Xl={transition:null},mS={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:Xl,ReactCurrentOwner:Yd};function D_(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!$d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=So;et.Fragment=nS;et.Profiler=rS;et.PureComponent=jd;et.StrictMode=iS;et.Suspense=lS;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mS;et.act=D_;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=T_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)C_.call(e,l)&&!R_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ka,type:t.type,key:r,ref:s,props:i,_owner:o}};et.createContext=function(t){return t={$$typeof:oS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sS,_context:t},t.Consumer=t};et.createElement=P_;et.createFactory=function(t){var e=P_.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:aS,render:t}};et.isValidElement=$d;et.lazy=function(t){return{$$typeof:uS,_payload:{_status:-1,_result:t},_init:pS}};et.memo=function(t,e){return{$$typeof:cS,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=Xl.transition;Xl.transition={};try{t()}finally{Xl.transition=e}};et.unstable_act=D_;et.useCallback=function(t,e){return wn.current.useCallback(t,e)};et.useContext=function(t){return wn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return wn.current.useDeferredValue(t)};et.useEffect=function(t,e){return wn.current.useEffect(t,e)};et.useId=function(){return wn.current.useId()};et.useImperativeHandle=function(t,e,n){return wn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return wn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return wn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return wn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return wn.current.useReducer(t,e,n)};et.useRef=function(t){return wn.current.useRef(t)};et.useState=function(t){return wn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return wn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return wn.current.useTransition()};et.version="18.3.1";E_.exports=et;var ie=E_.exports;const tu=S_(ie),gS=eS({__proto__:null,default:tu},[ie]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _S=ie,vS=Symbol.for("react.element"),xS=Symbol.for("react.fragment"),yS=Object.prototype.hasOwnProperty,SS=_S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MS={key:!0,ref:!0,__self:!0,__source:!0};function L_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)yS.call(e,i)&&!MS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vS,type:t,key:s,ref:o,props:r,_owner:SS.current}}eu.Fragment=xS;eu.jsx=L_;eu.jsxs=L_;M_.exports=eu;var G=M_.exports,qh={},N_={exports:{}},jn={},I_={exports:{}},U_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var J=B.length;B.push(q);e:for(;0<J;){var ae=J-1>>>1,ge=B[ae];if(0<r(ge,q))B[ae]=q,B[J]=ge,J=ae;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var q=B[0],J=B.pop();if(J!==q){B[0]=J;e:for(var ae=0,ge=B.length,Xe=ge>>>1;ae<Xe;){var $e=2*(ae+1)-1,Fe=B[$e],K=$e+1,me=B[K];if(0>r(Fe,J))K<ge&&0>r(me,Fe)?(B[ae]=me,B[K]=J,ae=K):(B[ae]=Fe,B[$e]=J,ae=$e);else if(K<ge&&0>r(me,J))B[ae]=me,B[K]=J,ae=K;else break e}}return q}function r(B,q){var J=B.sortIndex-q.sortIndex;return J!==0?J:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,p=null,h=3,m=!1,_=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(B){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=B)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(B){if(x=!1,v(B),!_)if(n(l)!==null)_=!0,z(T);else{var q=n(c);q!==null&&k(S,q.startTime-B)}}function T(B,q){_=!1,x&&(x=!1,u(y),y=-1),m=!0;var J=h;try{for(v(q),p=n(l);p!==null&&(!(p.expirationTime>q)||B&&!P());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,h=p.priorityLevel;var ge=ae(p.expirationTime<=q);q=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(l)&&i(l),v(q)}else i(l);p=n(l)}if(p!==null)var Xe=!0;else{var $e=n(c);$e!==null&&k(S,$e.startTime-q),Xe=!1}return Xe}finally{p=null,h=J,m=!1}}var w=!1,C=null,y=-1,A=5,R=-1;function P(){return!(t.unstable_now()-R<A)}function I(){if(C!==null){var B=t.unstable_now();R=B;var q=!0;try{q=C(!0,B)}finally{q?W():(w=!1,C=null)}}else w=!1}var W;if(typeof d=="function")W=function(){d(I)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,U=Y.port2;Y.port1.onmessage=I,W=function(){U.postMessage(null)}}else W=function(){g(I,0)};function z(B){C=B,w||(w=!0,W())}function k(B,q){y=g(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,z(T))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var J=h;h=q;try{return B()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=h;h=B;try{return q()}finally{h=J}},t.unstable_scheduleCallback=function(B,q,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,B){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=J+ge,B={id:f++,callback:q,priorityLevel:B,startTime:J,expirationTime:ge,sortIndex:-1},J>ae?(B.sortIndex=J,e(c,B),n(l)===null&&B===n(c)&&(x?(u(y),y=-1):x=!0,k(S,J-ae))):(B.sortIndex=ge,e(l,B),_||m||(_=!0,z(T))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var q=h;return function(){var J=h;h=q;try{return B.apply(this,arguments)}finally{h=J}}}})(U_);I_.exports=U_;var ES=I_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wS=ie,Xn=ES;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O_=new Set,ma={};function fs(t,e){ao(t,e),ao(t+"Capture",e)}function ao(t,e){for(ma[t]=e,t=0;t<e.length;t++)O_.add(e[t])}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yh=Object.prototype.hasOwnProperty,TS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Lm={};function bS(t){return Yh.call(Lm,t)?!0:Yh.call(Dm,t)?!1:TS.test(t)?Lm[t]=!0:(Dm[t]=!0,!1)}function AS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CS(t,e,n,i){if(e===null||typeof e>"u"||AS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ln[t]=new Tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ln[e]=new Tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ln[t]=new Tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ln[t]=new Tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ln[t]=new Tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ln[t]=new Tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ln[t]=new Tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ln[t]=new Tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ln[t]=new Tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);ln[e]=new Tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);ln[e]=new Tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Zd);ln[e]=new Tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ln[t]=new Tn(t,1,!1,t.toLowerCase(),null,!1,!1)});ln.xlinkHref=new Tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ln[t]=new Tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CS(e,n,r,i)&&(n=null),i||r===null?bS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ir=wS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),F_=Symbol.for("react.provider"),k_=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),Kh=Symbol.for("react.suspense"),Zh=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),B_=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var Dt=Object.assign,Lu;function $o(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Nu=!1;function Iu(t,e){if(!t||Nu)return"";Nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function RS(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=Iu(t.type,!1),t;case 11:return t=Iu(t.type.render,!1),t;case 1:return t=Iu(t.type,!0),t;default:return""}}function Qh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zs:return"Fragment";case Bs:return"Portal";case $h:return"Profiler";case Jd:return"StrictMode";case Kh:return"Suspense";case Zh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k_:return(t.displayName||"Context")+".Consumer";case F_:return(t._context.displayName||"Context")+".Provider";case ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tp:return e=t.displayName||null,e!==null?e:Qh(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return Qh(t(e))}catch{}}return null}function PS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qh(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DS(t){var e=z_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=DS(t))}function V_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=z_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jh(t,e){var n=e.checked;return Dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Im(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H_(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function ef(t,e){H_(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Um(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function Qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ko(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function G_(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,X_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LS=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){LS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function j_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function q_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=j_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var NS=Dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(t,e){if(e){if(NS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function np(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lf=null,Js=null,eo=null;function km(t){if(t=Va(t)){if(typeof lf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=ou(e),lf(t.stateNode,t.type,e))}}function Y_(t){Js?eo?eo.push(t):eo=[t]:Js=t}function $_(){if(Js){var t=Js,e=eo;if(eo=Js=null,km(t),e)for(t=0;t<e.length;t++)km(e[t])}}function K_(t,e){return t(e)}function Z_(){}var Uu=!1;function Q_(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return K_(t,e,n)}finally{Uu=!1,(Js!==null||eo!==null)&&(Z_(),$_())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var i=ou(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var cf=!1;if(Qi)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){cf=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{cf=!1}function IS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ra=!1,_c=null,vc=!1,uf=null,US={onError:function(t){ra=!0,_c=t}};function OS(t,e,n,i,r,s,o,a,l){ra=!1,_c=null,IS.apply(US,arguments)}function FS(t,e,n,i,r,s,o,a,l){if(OS.apply(this,arguments),ra){if(ra){var c=_c;ra=!1,_c=null}else throw Error(re(198));vc||(vc=!0,uf=c)}}function ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bm(t){if(ds(t)!==t)throw Error(re(188))}function kS(t){var e=t.alternate;if(!e){if(e=ds(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bm(r),t;if(s===i)return Bm(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function ev(t){return t=kS(t),t!==null?tv(t):null}function tv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tv(t);if(e!==null)return e;t=t.sibling}return null}var nv=Xn.unstable_scheduleCallback,zm=Xn.unstable_cancelCallback,BS=Xn.unstable_shouldYield,zS=Xn.unstable_requestPaint,Vt=Xn.unstable_now,VS=Xn.unstable_getCurrentPriorityLevel,ip=Xn.unstable_ImmediatePriority,iv=Xn.unstable_UserBlockingPriority,xc=Xn.unstable_NormalPriority,HS=Xn.unstable_LowPriority,rv=Xn.unstable_IdlePriority,nu=null,Di=null;function GS(t){if(Di&&typeof Di.onCommitFiberRoot=="function")try{Di.onCommitFiberRoot(nu,t,void 0,(t.current.flags&128)===128)}catch{}}var _i=Math.clz32?Math.clz32:jS,WS=Math.log,XS=Math.LN2;function jS(t){return t>>>=0,t===0?32:31-(WS(t)/XS|0)|0}var Qa=64,Ja=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=n&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-_i(e),r=1<<n,i|=t[n],e&=~r;return i}function qS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_i(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=qS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function hf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sv(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function Ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_i(e),t[e]=n}function $S(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-_i(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-_i(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function ov(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var av,sp,lv,cv,uv,ff=!1,el=[],Tr=null,br=null,Ar=null,va=new Map,xa=new Map,vr=[],KS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vm(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function Po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&sp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ZS(t,e,n,i,r){switch(e){case"focusin":return Tr=Po(Tr,t,e,n,i,r),!0;case"dragenter":return br=Po(br,t,e,n,i,r),!0;case"mouseover":return Ar=Po(Ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return va.set(s,Po(va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xa.set(s,Po(xa.get(s)||null,t,e,n,i,r)),!0}return!1}function hv(t){var e=Zr(t.target);if(e!==null){var n=ds(e);if(n!==null){if(e=n.tag,e===13){if(e=J_(n),e!==null){t.blockedOn=e,uv(t.priority,function(){lv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);af=i,n.target.dispatchEvent(i),af=null}else return e=Va(n),e!==null&&sp(e),t.blockedOn=n,!1;e.shift()}return!0}function Hm(t,e,n){jl(t)&&n.delete(e)}function QS(){ff=!1,Tr!==null&&jl(Tr)&&(Tr=null),br!==null&&jl(br)&&(br=null),Ar!==null&&jl(Ar)&&(Ar=null),va.forEach(Hm),xa.forEach(Hm)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,ff||(ff=!0,Xn.unstable_scheduleCallback(Xn.unstable_NormalPriority,QS)))}function ya(t){function e(r){return Do(r,t)}if(0<el.length){Do(el[0],t);for(var n=1;n<el.length;n++){var i=el[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Tr!==null&&Do(Tr,t),br!==null&&Do(br,t),Ar!==null&&Do(Ar,t),va.forEach(e),xa.forEach(e),n=0;n<vr.length;n++)i=vr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)hv(n),n.blockedOn===null&&vr.shift()}var to=ir.ReactCurrentBatchConfig,Sc=!0;function JS(t,e,n,i){var r=pt,s=to.transition;to.transition=null;try{pt=1,op(t,e,n,i)}finally{pt=r,to.transition=s}}function eM(t,e,n,i){var r=pt,s=to.transition;to.transition=null;try{pt=4,op(t,e,n,i)}finally{pt=r,to.transition=s}}function op(t,e,n,i){if(Sc){var r=df(t,e,n,i);if(r===null)ju(t,e,i,Mc,n),Vm(t,i);else if(ZS(r,t,e,n,i))i.stopPropagation();else if(Vm(t,i),e&4&&-1<KS.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&av(s),s=df(t,e,n,i),s===null&&ju(t,e,i,Mc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(t,e,i,null,n)}}var Mc=null;function df(t,e,n,i){if(Mc=null,t=np(i),t=Zr(t),t!==null)if(e=ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mc=t,null}function fv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VS()){case ip:return 1;case iv:return 4;case xc:case HS:return 16;case rv:return 536870912;default:return 16}default:return 16}}var Sr=null,ap=null,ql=null;function dv(){if(ql)return ql;var t,e=ap,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ql=r.slice(t,1<i?1-i:void 0)}function Yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Gm(){return!1}function qn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:Gm,this.isPropagationStopped=Gm,this}return Dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var Mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lp=qn(Mo),za=Dt({},Mo,{view:0,detail:0}),tM=qn(za),Fu,ku,Lo,iu=Dt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lo&&(Lo&&t.type==="mousemove"?(Fu=t.screenX-Lo.screenX,ku=t.screenY-Lo.screenY):ku=Fu=0,Lo=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),Wm=qn(iu),nM=Dt({},iu,{dataTransfer:0}),iM=qn(nM),rM=Dt({},za,{relatedTarget:0}),Bu=qn(rM),sM=Dt({},Mo,{animationName:0,elapsedTime:0,pseudoElement:0}),oM=qn(sM),aM=Dt({},Mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lM=qn(aM),cM=Dt({},Mo,{data:0}),Xm=qn(cM),uM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fM[t])?!!e[t]:!1}function cp(){return dM}var pM=Dt({},za,{key:function(t){if(t.key){var e=uM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cp,charCode:function(t){return t.type==="keypress"?Yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mM=qn(pM),gM=Dt({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=qn(gM),_M=Dt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cp}),vM=qn(_M),xM=Dt({},Mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),yM=qn(xM),SM=Dt({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MM=qn(SM),EM=[9,13,27,32],up=Qi&&"CompositionEvent"in window,sa=null;Qi&&"documentMode"in document&&(sa=document.documentMode);var wM=Qi&&"TextEvent"in window&&!sa,pv=Qi&&(!up||sa&&8<sa&&11>=sa),qm=" ",Ym=!1;function mv(t,e){switch(t){case"keyup":return EM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function TM(t,e){switch(t){case"compositionend":return gv(e);case"keypress":return e.which!==32?null:(Ym=!0,qm);case"textInput":return t=e.data,t===qm&&Ym?null:t;default:return null}}function bM(t,e){if(Vs)return t==="compositionend"||!up&&mv(t,e)?(t=dv(),ql=ap=Sr=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pv&&e.locale!=="ko"?null:e.data;default:return null}}var AM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AM[t.type]:e==="textarea"}function _v(t,e,n,i){Y_(i),e=Ec(e,"onChange"),0<e.length&&(n=new lp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oa=null,Sa=null;function CM(t){Cv(t,0)}function ru(t){var e=Ws(t);if(V_(e))return t}function RM(t,e){if(t==="change")return e}var vv=!1;if(Qi){var zu;if(Qi){var Vu="oninput"in document;if(!Vu){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Vu=typeof Km.oninput=="function"}zu=Vu}else zu=!1;vv=zu&&(!document.documentMode||9<document.documentMode)}function Zm(){oa&&(oa.detachEvent("onpropertychange",xv),Sa=oa=null)}function xv(t){if(t.propertyName==="value"&&ru(Sa)){var e=[];_v(e,Sa,t,np(t)),Q_(CM,e)}}function PM(t,e,n){t==="focusin"?(Zm(),oa=e,Sa=n,oa.attachEvent("onpropertychange",xv)):t==="focusout"&&Zm()}function DM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(Sa)}function LM(t,e){if(t==="click")return ru(e)}function NM(t,e){if(t==="input"||t==="change")return ru(e)}function IM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xi=typeof Object.is=="function"?Object.is:IM;function Ma(t,e){if(xi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Yh.call(e,r)||!xi(t[r],e[r]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jm(t,e){var n=Qm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function yv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sv(){for(var t=window,e=gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gc(t.document)}return e}function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UM(t){var e=Sv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yv(n.ownerDocument.documentElement,n)){if(i!==null&&hp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jm(n,s);var o=Jm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OM=Qi&&"documentMode"in document&&11>=document.documentMode,Hs=null,pf=null,aa=null,mf=!1;function e0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||Hs==null||Hs!==gc(i)||(i=Hs,"selectionStart"in i&&hp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&Ma(aa,i)||(aa=i,i=Ec(pf,"onSelect"),0<i.length&&(e=new lp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Hs)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gs={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Hu={},Mv={};Qi&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function su(t){if(Hu[t])return Hu[t];if(!Gs[t])return t;var e=Gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return Hu[t]=e[n];return t}var Ev=su("animationend"),wv=su("animationiteration"),Tv=su("animationstart"),bv=su("transitionend"),Av=new Map,t0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){Av.set(t,e),fs(e,[t])}for(var Gu=0;Gu<t0.length;Gu++){var Wu=t0[Gu],FM=Wu.toLowerCase(),kM=Wu[0].toUpperCase()+Wu.slice(1);kr(FM,"on"+kM)}kr(Ev,"onAnimationEnd");kr(wv,"onAnimationIteration");kr(Tv,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(bv,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function n0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,FS(i,e,void 0,t),t.currentTarget=null}function Cv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;n0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;n0(r,a,c),s=l}}}if(vc)throw t=uf,vc=!1,uf=null,t}function Tt(t,e){var n=e[yf];n===void 0&&(n=e[yf]=new Set);var i=t+"__bubble";n.has(i)||(Rv(e,t,2,!1),n.add(i))}function Xu(t,e,n){var i=0;e&&(i|=4),Rv(n,t,i,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[il]){t[il]=!0,O_.forEach(function(n){n!=="selectionchange"&&(BM.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,Xu("selectionchange",!1,e))}}function Rv(t,e,n,i){switch(fv(e)){case 1:var r=JS;break;case 4:r=eM;break;default:r=op}n=r.bind(null,e,n,t),r=void 0,!cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ju(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Q_(function(){var c=s,f=np(n),p=[];e:{var h=Av.get(t);if(h!==void 0){var m=lp,_=t;switch(t){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":m=mM;break;case"focusin":_="focus",m=Bu;break;case"focusout":_="blur",m=Bu;break;case"beforeblur":case"afterblur":m=Bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=iM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=vM;break;case Ev:case wv:case Tv:m=oM;break;case bv:m=yM;break;case"scroll":m=tM;break;case"wheel":m=MM;break;case"copy":case"cut":case"paste":m=lM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=jm}var x=(e&4)!==0,g=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var d=c,v;d!==null;){v=d;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=_a(d,u),S!=null&&x.push(wa(d,S,v)))),g)break;d=d.return}0<x.length&&(h=new m(h,_,null,n,f),p.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==af&&(_=n.relatedTarget||n.fromElement)&&(Zr(_)||_[Ji]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Zr(_):null,_!==null&&(g=ds(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=Wm,S="onMouseLeave",u="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(x=jm,S="onPointerLeave",u="onPointerEnter",d="pointer"),g=m==null?h:Ws(m),v=_==null?h:Ws(_),h=new x(S,d+"leave",m,n,f),h.target=g,h.relatedTarget=v,S=null,Zr(f)===c&&(x=new x(u,d+"enter",_,n,f),x.target=v,x.relatedTarget=g,S=x),g=S,m&&_)t:{for(x=m,u=_,d=0,v=x;v;v=vs(v))d++;for(v=0,S=u;S;S=vs(S))v++;for(;0<d-v;)x=vs(x),d--;for(;0<v-d;)u=vs(u),v--;for(;d--;){if(x===u||u!==null&&x===u.alternate)break t;x=vs(x),u=vs(u)}x=null}else x=null;m!==null&&i0(p,h,m,x,!1),_!==null&&g!==null&&i0(p,g,_,x,!0)}}e:{if(h=c?Ws(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=RM;else if($m(h))if(vv)T=NM;else{T=DM;var w=PM}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=LM);if(T&&(T=T(t,c))){_v(p,T,n,f);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&tf(h,"number",h.value)}switch(w=c?Ws(c):window,t){case"focusin":($m(w)||w.contentEditable==="true")&&(Hs=w,pf=c,aa=null);break;case"focusout":aa=pf=Hs=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,e0(p,n,f);break;case"selectionchange":if(OM)break;case"keydown":case"keyup":e0(p,n,f)}var C;if(up)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Vs?mv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(pv&&n.locale!=="ko"&&(Vs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Vs&&(C=dv()):(Sr=f,ap="value"in Sr?Sr.value:Sr.textContent,Vs=!0)),w=Ec(c,y),0<w.length&&(y=new Xm(y,t,null,n,f),p.push({event:y,listeners:w}),C?y.data=C:(C=gv(n),C!==null&&(y.data=C)))),(C=wM?TM(t,n):bM(t,n))&&(c=Ec(c,"onBeforeInput"),0<c.length&&(f=new Xm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=C))}Cv(p,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_a(t,n),s!=null&&i.unshift(wa(t,s,r)),s=_a(t,e),s!=null&&i.push(wa(t,s,r))),t=t.return}return i}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function i0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=_a(n,s),l!=null&&o.unshift(wa(n,l,a))):r||(l=_a(n,s),l!=null&&o.push(wa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zM=/\r\n?/g,VM=/\u0000|\uFFFD/g;function r0(t){return(typeof t=="string"?t:""+t).replace(zM,`
`).replace(VM,"")}function rl(t,e,n){if(e=r0(e),r0(t)!==e&&n)throw Error(re(425))}function wc(){}var gf=null,_f=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,HM=typeof clearTimeout=="function"?clearTimeout:void 0,s0=typeof Promise=="function"?Promise:void 0,GM=typeof queueMicrotask=="function"?queueMicrotask:typeof s0<"u"?function(t){return s0.resolve(null).then(t).catch(WM)}:xf;function WM(t){setTimeout(function(){throw t})}function qu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function o0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Eo,Ta="__reactProps$"+Eo,Ji="__reactContainer$"+Eo,yf="__reactEvents$"+Eo,XM="__reactListeners$"+Eo,jM="__reactHandles$"+Eo;function Zr(t){var e=t[Ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ji]||n[Ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=o0(t);t!==null;){if(n=t[Ci])return n;t=o0(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[Ci]||t[Ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function ou(t){return t[Ta]||null}var Sf=[],Xs=-1;function Br(t){return{current:t}}function bt(t){0>Xs||(t.current=Sf[Xs],Sf[Xs]=null,Xs--)}function Et(t,e){Xs++,Sf[Xs]=t.current,t.current=e}var Ur={},_n=Br(Ur),Rn=Br(!1),ss=Ur;function lo(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Pn(t){return t=t.childContextTypes,t!=null}function Tc(){bt(Rn),bt(_n)}function a0(t,e,n){if(_n.current!==Ur)throw Error(re(168));Et(_n,e),Et(Rn,n)}function Pv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,PS(t)||"Unknown",r));return Dt({},n,i)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,ss=_n.current,Et(_n,t),Et(Rn,Rn.current),!0}function l0(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Pv(t,e,ss),i.__reactInternalMemoizedMergedChildContext=t,bt(Rn),bt(_n),Et(_n,t)):bt(Rn),Et(Rn,n)}var Xi=null,au=!1,Yu=!1;function Dv(t){Xi===null?Xi=[t]:Xi.push(t)}function qM(t){au=!0,Dv(t)}function zr(){if(!Yu&&Xi!==null){Yu=!0;var t=0,e=pt;try{var n=Xi;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Xi=null,au=!1}catch(r){throw Xi!==null&&(Xi=Xi.slice(t+1)),nv(ip,zr),r}finally{pt=e,Yu=!1}}return null}var js=[],qs=0,Ac=null,Cc=0,Kn=[],Zn=0,os=null,ji=1,qi="";function qr(t,e){js[qs++]=Cc,js[qs++]=Ac,Ac=t,Cc=e}function Lv(t,e,n){Kn[Zn++]=ji,Kn[Zn++]=qi,Kn[Zn++]=os,os=t;var i=ji;t=qi;var r=32-_i(i)-1;i&=~(1<<r),n+=1;var s=32-_i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ji=1<<32-_i(e)+r|n<<r|i,qi=s+t}else ji=1<<s|n<<r|i,qi=t}function fp(t){t.return!==null&&(qr(t,1),Lv(t,1,0))}function dp(t){for(;t===Ac;)Ac=js[--qs],js[qs]=null,Cc=js[--qs],js[qs]=null;for(;t===os;)os=Kn[--Zn],Kn[Zn]=null,qi=Kn[--Zn],Kn[Zn]=null,ji=Kn[--Zn],Kn[Zn]=null}var Gn=null,Hn=null,At=!1,di=null;function Nv(t,e){var n=ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function c0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gn=t,Hn=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gn=t,Hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=os!==null?{id:ji,overflow:qi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gn=t,Hn=null,!0):!1;default:return!1}}function Mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ef(t){if(At){var e=Hn;if(e){var n=e;if(!c0(t,e)){if(Mf(t))throw Error(re(418));e=Cr(n.nextSibling);var i=Gn;e&&c0(t,e)?Nv(i,n):(t.flags=t.flags&-4097|2,At=!1,Gn=t)}}else{if(Mf(t))throw Error(re(418));t.flags=t.flags&-4097|2,At=!1,Gn=t}}}function u0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function sl(t){if(t!==Gn)return!1;if(!At)return u0(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=Hn)){if(Mf(t))throw Iv(),Error(re(418));for(;e;)Nv(t,e),e=Cr(e.nextSibling)}if(u0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Hn=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Hn=null}}else Hn=Gn?Cr(t.stateNode.nextSibling):null;return!0}function Iv(){for(var t=Hn;t;)t=Cr(t.nextSibling)}function co(){Hn=Gn=null,At=!1}function pp(t){di===null?di=[t]:di.push(t)}var YM=ir.ReactCurrentBatchConfig;function No(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function h0(t){var e=t._init;return e(t._payload)}function Uv(t){function e(u,d){if(t){var v=u.deletions;v===null?(u.deletions=[d],u.flags|=16):v.push(d)}}function n(u,d){if(!t)return null;for(;d!==null;)e(u,d),d=d.sibling;return null}function i(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function r(u,d){return u=Lr(u,d),u.index=0,u.sibling=null,u}function s(u,d,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<d?(u.flags|=2,d):v):(u.flags|=2,d)):(u.flags|=1048576,d)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,d,v,S){return d===null||d.tag!==6?(d=th(v,u.mode,S),d.return=u,d):(d=r(d,v),d.return=u,d)}function l(u,d,v,S){var T=v.type;return T===zs?f(u,d,v.props.children,S,v.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===mr&&h0(T)===d.type)?(S=r(d,v.props),S.ref=No(u,d,v),S.return=u,S):(S=tc(v.type,v.key,v.props,null,u.mode,S),S.ref=No(u,d,v),S.return=u,S)}function c(u,d,v,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=nh(v,u.mode,S),d.return=u,d):(d=r(d,v.children||[]),d.return=u,d)}function f(u,d,v,S,T){return d===null||d.tag!==7?(d=is(v,u.mode,S,T),d.return=u,d):(d=r(d,v),d.return=u,d)}function p(u,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=th(""+d,u.mode,v),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $a:return v=tc(d.type,d.key,d.props,null,u.mode,v),v.ref=No(u,null,d),v.return=u,v;case Bs:return d=nh(d,u.mode,v),d.return=u,d;case mr:var S=d._init;return p(u,S(d._payload),v)}if(Ko(d)||Co(d))return d=is(d,u.mode,v,null),d.return=u,d;ol(u,d)}return null}function h(u,d,v,S){var T=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(u,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:return v.key===T?l(u,d,v,S):null;case Bs:return v.key===T?c(u,d,v,S):null;case mr:return T=v._init,h(u,d,T(v._payload),S)}if(Ko(v)||Co(v))return T!==null?null:f(u,d,v,S,null);ol(u,v)}return null}function m(u,d,v,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(d,u,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $a:return u=u.get(S.key===null?v:S.key)||null,l(d,u,S,T);case Bs:return u=u.get(S.key===null?v:S.key)||null,c(d,u,S,T);case mr:var w=S._init;return m(u,d,v,w(S._payload),T)}if(Ko(S)||Co(S))return u=u.get(v)||null,f(d,u,S,T,null);ol(d,S)}return null}function _(u,d,v,S){for(var T=null,w=null,C=d,y=d=0,A=null;C!==null&&y<v.length;y++){C.index>y?(A=C,C=null):A=C.sibling;var R=h(u,C,v[y],S);if(R===null){C===null&&(C=A);break}t&&C&&R.alternate===null&&e(u,C),d=s(R,d,y),w===null?T=R:w.sibling=R,w=R,C=A}if(y===v.length)return n(u,C),At&&qr(u,y),T;if(C===null){for(;y<v.length;y++)C=p(u,v[y],S),C!==null&&(d=s(C,d,y),w===null?T=C:w.sibling=C,w=C);return At&&qr(u,y),T}for(C=i(u,C);y<v.length;y++)A=m(C,u,y,v[y],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?y:A.key),d=s(A,d,y),w===null?T=A:w.sibling=A,w=A);return t&&C.forEach(function(P){return e(u,P)}),At&&qr(u,y),T}function x(u,d,v,S){var T=Co(v);if(typeof T!="function")throw Error(re(150));if(v=T.call(v),v==null)throw Error(re(151));for(var w=T=null,C=d,y=d=0,A=null,R=v.next();C!==null&&!R.done;y++,R=v.next()){C.index>y?(A=C,C=null):A=C.sibling;var P=h(u,C,R.value,S);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(u,C),d=s(P,d,y),w===null?T=P:w.sibling=P,w=P,C=A}if(R.done)return n(u,C),At&&qr(u,y),T;if(C===null){for(;!R.done;y++,R=v.next())R=p(u,R.value,S),R!==null&&(d=s(R,d,y),w===null?T=R:w.sibling=R,w=R);return At&&qr(u,y),T}for(C=i(u,C);!R.done;y++,R=v.next())R=m(C,u,y,R.value,S),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?y:R.key),d=s(R,d,y),w===null?T=R:w.sibling=R,w=R);return t&&C.forEach(function(I){return e(u,I)}),At&&qr(u,y),T}function g(u,d,v,S){if(typeof v=="object"&&v!==null&&v.type===zs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:e:{for(var T=v.key,w=d;w!==null;){if(w.key===T){if(T=v.type,T===zs){if(w.tag===7){n(u,w.sibling),d=r(w,v.props.children),d.return=u,u=d;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===mr&&h0(T)===w.type){n(u,w.sibling),d=r(w,v.props),d.ref=No(u,w,v),d.return=u,u=d;break e}n(u,w);break}else e(u,w);w=w.sibling}v.type===zs?(d=is(v.props.children,u.mode,S,v.key),d.return=u,u=d):(S=tc(v.type,v.key,v.props,null,u.mode,S),S.ref=No(u,d,v),S.return=u,u=S)}return o(u);case Bs:e:{for(w=v.key;d!==null;){if(d.key===w)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(u,d.sibling),d=r(d,v.children||[]),d.return=u,u=d;break e}else{n(u,d);break}else e(u,d);d=d.sibling}d=nh(v,u.mode,S),d.return=u,u=d}return o(u);case mr:return w=v._init,g(u,d,w(v._payload),S)}if(Ko(v))return _(u,d,v,S);if(Co(v))return x(u,d,v,S);ol(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(u,d.sibling),d=r(d,v),d.return=u,u=d):(n(u,d),d=th(v,u.mode,S),d.return=u,u=d),o(u)):n(u,d)}return g}var uo=Uv(!0),Ov=Uv(!1),Rc=Br(null),Pc=null,Ys=null,mp=null;function gp(){mp=Ys=Pc=null}function _p(t){var e=Rc.current;bt(Rc),t._currentValue=e}function wf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function no(t,e){Pc=t,mp=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cn=!0),t.firstContext=null)}function ri(t){var e=t._currentValue;if(mp!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(Pc===null)throw Error(re(308));Ys=t,Pc.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var Qr=null;function vp(t){Qr===null?Qr=[t]:Qr.push(t)}function Fv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vp(e)):(n.next=r.next,r.next=n),e.interleaved=n,er(t,i)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function xp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(t,n)}return r=i.interleaved,r===null?(e.next=e,vp(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rp(t,n)}}function f0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dc(t,e,n,i){var r=t.updateQueue;gr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){p=_.call(m,p,h);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,p,h):_,h==null)break e;p=Dt({},p,h);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=o,t.lanes=o,t.memoizedState=p}}function d0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Ha={},Li=Br(Ha),ba=Br(Ha),Aa=Br(Ha);function Jr(t){if(t===Ha)throw Error(re(174));return t}function yp(t,e){switch(Et(Aa,e),Et(ba,t),Et(Li,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}bt(Li),Et(Li,e)}function ho(){bt(Li),bt(ba),bt(Aa)}function Bv(t){Jr(Aa.current);var e=Jr(Li.current),n=rf(e,t.type);e!==n&&(Et(ba,t),Et(Li,n))}function Sp(t){ba.current===t&&(bt(Li),bt(ba))}var Rt=Br(0);function Lc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $u=[];function Mp(){for(var t=0;t<$u.length;t++)$u[t]._workInProgressVersionPrimary=null;$u.length=0}var Kl=ir.ReactCurrentDispatcher,Ku=ir.ReactCurrentBatchConfig,as=0,Pt=null,jt=null,Qt=null,Nc=!1,la=!1,Ca=0,$M=0;function un(){throw Error(re(321))}function Ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xi(t[n],e[n]))return!1;return!0}function wp(t,e,n,i,r,s){if(as=s,Pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?JM:eE,t=n(i,r),la){s=0;do{if(la=!1,Ca=0,25<=s)throw Error(re(301));s+=1,Qt=jt=null,e.updateQueue=null,Kl.current=tE,t=n(i,r)}while(la)}if(Kl.current=Ic,e=jt!==null&&jt.next!==null,as=0,Qt=jt=Pt=null,Nc=!1,e)throw Error(re(300));return t}function Tp(){var t=Ca!==0;return Ca=0,t}function bi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Pt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function si(){if(jt===null){var t=Pt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=Qt===null?Pt.memoizedState:Qt.next;if(e!==null)Qt=e,jt=t;else{if(t===null)throw Error(re(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Qt===null?Pt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function Ra(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=si(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=jt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((as&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,Pt.lanes|=f,ls|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,xi(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Pt.lanes|=s,ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qu(t){var e=si(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);xi(s,e.memoizedState)||(Cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zv(){}function Vv(t,e){var n=Pt,i=si(),r=e(),s=!xi(i.memoizedState,r);if(s&&(i.memoizedState=r,Cn=!0),i=i.queue,bp(Wv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(n.flags|=2048,Pa(9,Gv.bind(null,n,i,r,e),void 0,null),nn===null)throw Error(re(349));as&30||Hv(n,e,r)}return r}function Hv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gv(t,e,n,i){e.value=n,e.getSnapshot=i,Xv(e)&&jv(t)}function Wv(t,e,n){return n(function(){Xv(e)&&jv(t)})}function Xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xi(t,n)}catch{return!0}}function jv(t){var e=er(t,1);e!==null&&vi(e,t,1,-1)}function p0(t){var e=bi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=QM.bind(null,Pt,t),[e.memoizedState,t]}function Pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qv(){return si().memoizedState}function Zl(t,e,n,i){var r=bi();Pt.flags|=t,r.memoizedState=Pa(1|e,n,void 0,i===void 0?null:i)}function lu(t,e,n,i){var r=si();i=i===void 0?null:i;var s=void 0;if(jt!==null){var o=jt.memoizedState;if(s=o.destroy,i!==null&&Ep(i,o.deps)){r.memoizedState=Pa(e,n,s,i);return}}Pt.flags|=t,r.memoizedState=Pa(1|e,n,s,i)}function m0(t,e){return Zl(8390656,8,t,e)}function bp(t,e){return lu(2048,8,t,e)}function Yv(t,e){return lu(4,2,t,e)}function $v(t,e){return lu(4,4,t,e)}function Kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,Kv.bind(null,e,t),n)}function Ap(){}function Qv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ep(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Jv(t,e){var n=si();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ep(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ex(t,e,n){return as&21?(xi(n,e)||(n=sv(),Pt.lanes|=n,ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=n)}function KM(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=Ku.transition;Ku.transition={};try{t(!1),e()}finally{pt=n,Ku.transition=i}}function tx(){return si().memoizedState}function ZM(t,e,n){var i=Dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},nx(t))ix(e,n);else if(n=Fv(t,e,n,i),n!==null){var r=Mn();vi(n,t,i,r),rx(n,e,i)}}function QM(t,e,n){var i=Dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(nx(t))ix(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,xi(a,o)){var l=e.interleaved;l===null?(r.next=r,vp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fv(t,e,r,i),n!==null&&(r=Mn(),vi(n,t,i,r),rx(n,e,i))}}function nx(t){var e=t.alternate;return t===Pt||e!==null&&e===Pt}function ix(t,e){la=Nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rp(t,n)}}var Ic={readContext:ri,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},JM={readContext:ri,useCallback:function(t,e){return bi().memoizedState=[t,e===void 0?null:e],t},useContext:ri,useEffect:m0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4194308,4,Kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zl(4,2,t,e)},useMemo:function(t,e){var n=bi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=bi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ZM.bind(null,Pt,t),[i.memoizedState,t]},useRef:function(t){var e=bi();return t={current:t},e.memoizedState=t},useState:p0,useDebugValue:Ap,useDeferredValue:function(t){return bi().memoizedState=t},useTransition:function(){var t=p0(!1),e=t[0];return t=KM.bind(null,t[1]),bi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Pt,r=bi();if(At){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),nn===null)throw Error(re(349));as&30||Hv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,m0(Wv.bind(null,i,s,t),[t]),i.flags|=2048,Pa(9,Gv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=bi(),e=nn.identifierPrefix;if(At){var n=qi,i=ji;n=(i&~(1<<32-_i(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$M++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eE={readContext:ri,useCallback:Qv,useContext:ri,useEffect:bp,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:$v,useMemo:Jv,useReducer:Zu,useRef:qv,useState:function(){return Zu(Ra)},useDebugValue:Ap,useDeferredValue:function(t){var e=si();return ex(e,jt.memoizedState,t)},useTransition:function(){var t=Zu(Ra)[0],e=si().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:Vv,useId:tx,unstable_isNewReconciler:!1},tE={readContext:ri,useCallback:Qv,useContext:ri,useEffect:bp,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:$v,useMemo:Jv,useReducer:Qu,useRef:qv,useState:function(){return Qu(Ra)},useDebugValue:Ap,useDeferredValue:function(t){var e=si();return jt===null?e.memoizedState=t:ex(e,jt.memoizedState,t)},useTransition:function(){var t=Qu(Ra)[0],e=si().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:Vv,useId:tx,unstable_isNewReconciler:!1};function ui(t,e){if(t&&t.defaultProps){e=Dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Mn(),r=Dr(t),s=$i(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(vi(e,t,r,i),$l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Mn(),r=Dr(t),s=$i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(vi(e,t,r,i),$l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mn(),i=Dr(t),r=$i(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(vi(e,t,i,n),$l(e,t,i))}};function g0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,i)||!Ma(r,s):!0}function sx(t,e,n){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=Pn(e)?ss:_n.current,i=e.contextTypes,s=(i=i!=null)?lo(t,r):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function bf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=Pn(e)?ss:_n.current,r.context=lo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cu.enqueueReplaceState(r,r.state,null),Dc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function fo(t,e){try{var n="",i=e;do n+=RS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nE=typeof WeakMap=="function"?WeakMap:Map;function ox(t,e,n){n=$i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Oc||(Oc=!0,Ff=i),Af(t,e)},n}function ax(t,e,n){n=$i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Af(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function v0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gE.bind(null,t,e,n),e.then(t,t))}function x0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function y0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$i(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var iE=ir.ReactCurrentOwner,Cn=!1;function yn(t,e,n,i){e.child=t===null?Ov(e,null,n,i):uo(e,t.child,n,i)}function S0(t,e,n,i,r){n=n.render;var s=e.ref;return no(e,r),i=wp(t,e,n,i,s,r),n=Tp(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(At&&n&&fp(e),e.flags|=1,yn(t,e,i,r),e.child)}function M0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Up(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lx(t,e,s,i,r)):(t=tc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(o,i)&&t.ref===e.ref)return tr(t,e,r)}return e.flags|=1,t=Lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function lx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ma(s,i)&&t.ref===e.ref)if(Cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Cn=!0);else return e.lanes=t.lanes,tr(t,e,r)}return Cf(t,e,n,i,r)}function cx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(Ks,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Et(Ks,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Et(Ks,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Et(Ks,Fn),Fn|=i;return yn(t,e,r,n),e.child}function ux(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cf(t,e,n,i,r){var s=Pn(n)?ss:_n.current;return s=lo(e,s),no(e,r),n=wp(t,e,n,i,s,r),i=Tp(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(At&&i&&fp(e),e.flags|=1,yn(t,e,n,r),e.child)}function E0(t,e,n,i,r){if(Pn(n)){var s=!0;bc(e)}else s=!1;if(no(e,r),e.stateNode===null)Ql(t,e),sx(e,n,i),bf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ri(c):(c=Pn(n)?ss:_n.current,c=lo(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_0(e,o,i,c),gr=!1;var h=e.memoizedState;o.state=h,Dc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Rn.current||gr?(typeof f=="function"&&(Tf(e,n,f,i),l=e.memoizedState),(a=gr||g0(e,n,a,i,h,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,kv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ui(e.type,a),o.props=c,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=Pn(n)?ss:_n.current,l=lo(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&_0(e,o,i,l),gr=!1,h=e.memoizedState,o.state=h,Dc(e,i,o,r);var _=e.memoizedState;a!==p||h!==_||Rn.current||gr?(typeof m=="function"&&(Tf(e,n,m,i),_=e.memoizedState),(c=gr||g0(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Rf(t,e,n,i,s,r)}function Rf(t,e,n,i,r,s){ux(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&l0(e,n,!1),tr(t,e,s);i=e.stateNode,iE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=uo(e,t.child,null,s),e.child=uo(e,null,a,s)):yn(t,e,a,s),e.memoizedState=i.state,r&&l0(e,n,!0),e.child}function hx(t){var e=t.stateNode;e.pendingContext?a0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&a0(t,e.context,!1),yp(t,e.containerInfo)}function w0(t,e,n,i,r){return co(),pp(r),e.flags|=256,yn(t,e,n,i),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function Df(t){return{baseLanes:t,cachePool:null,transitions:null}}function fx(t,e,n){var i=e.pendingProps,r=Rt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Et(Rt,r&1),t===null)return Ef(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fu(o,i,0,null),t=is(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Df(n),e.memoizedState=Pf,t):Cp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=is(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pf,i}return s=t.child,t=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cp(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,i){return i!==null&&pp(i),uo(e,t.child,null,n),t=Cp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ju(Error(re(422))),al(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fu({mode:"visible",children:i.children},r,0,null),s=is(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&uo(e,t.child,null,o),e.child.memoizedState=Df(o),e.memoizedState=Pf,s);if(!(e.mode&1))return al(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Ju(s,i,void 0),al(t,e,o,i)}if(a=(o&t.childLanes)!==0,Cn||a){if(i=nn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(t,r),vi(i,t,r,-1))}return Ip(),i=Ju(Error(re(421))),al(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_E.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Hn=Cr(r.nextSibling),Gn=e,At=!0,di=null,t!==null&&(Kn[Zn++]=ji,Kn[Zn++]=qi,Kn[Zn++]=os,ji=t.id,qi=t.overflow,os=e),e=Cp(e,i.children),e.flags|=4096,e)}function T0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wf(t.return,e,n)}function eh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(yn(t,e,i.children,n),i=Rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,n,e);else if(t.tag===19)T0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Et(Rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Lc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),eh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Lc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}eh(e,!0,n,null,s);break;case"together":eh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sE(t,e,n){switch(e.tag){case 3:hx(e),co();break;case 5:Bv(e);break;case 1:Pn(e.type)&&bc(e);break;case 4:yp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Et(Rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Et(Rt,Rt.current&1),e.flags|=128,null):n&e.child.childLanes?fx(t,e,n):(Et(Rt,Rt.current&1),t=tr(t,e,n),t!==null?t.sibling:null);Et(Rt,Rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Et(Rt,Rt.current),i)break;return null;case 22:case 23:return e.lanes=0,cx(t,e,n)}return tr(t,e,n)}var px,Lf,mx,gx;px=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lf=function(){};mx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(Li.current);var s=null;switch(n){case"input":r=Jh(t,r),i=Jh(t,i),s=[];break;case"select":r=Dt({},r,{value:void 0}),i=Dt({},i,{value:void 0}),s=[];break;case"textarea":r=nf(t,r),i=nf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wc)}sf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Io(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function hn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oE(t,e,n){var i=e.pendingProps;switch(dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(e),null;case 1:return Pn(e.type)&&Tc(),hn(e),null;case 3:return i=e.stateNode,ho(),bt(Rn),bt(_n),Mp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(zf(di),di=null))),Lf(t,e),hn(e),null;case 5:Sp(e);var r=Jr(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)mx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return hn(e),null}if(t=Jr(Li.current),sl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ci]=e,i[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)Tt(Qo[r],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Im(i,s),Tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Tt("invalid",i);break;case"textarea":Om(i,s),Tt("invalid",i)}sf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,t),r=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Tt("scroll",i)}switch(n){case"input":Ka(i),Um(i,s,!0);break;case"textarea":Ka(i),Fm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ci]=e,t[Ta]=i,px(t,e,!1,!1),e.stateNode=t;e:{switch(o=of(n,i),n){case"dialog":Tt("cancel",t),Tt("close",t),r=i;break;case"iframe":case"object":case"embed":Tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)Tt(Qo[r],t);r=i;break;case"source":Tt("error",t),r=i;break;case"img":case"image":case"link":Tt("error",t),Tt("load",t),r=i;break;case"details":Tt("toggle",t),r=i;break;case"input":Im(t,i),r=Jh(t,i),Tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Dt({},i,{value:void 0}),Tt("invalid",t);break;case"textarea":Om(t,i),r=nf(t,i),Tt("invalid",t);break;default:r=i}sf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?q_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&X_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Tt("scroll",t):l!=null&&Qd(t,s,l,o))}switch(n){case"input":Ka(t),Um(t,i,!1);break;case"textarea":Ka(t),Fm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return hn(e),null;case 6:if(t&&e.stateNode!=null)gx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Jr(Aa.current),Jr(Li.current),sl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ci]=e,(s=i.nodeValue!==n)&&(t=Gn,t!==null))switch(t.tag){case 3:rl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ci]=e,e.stateNode=i}return hn(e),null;case 13:if(bt(Rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Hn!==null&&e.mode&1&&!(e.flags&128))Iv(),co(),e.flags|=98560,s=!1;else if(s=sl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Ci]=e}else co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;hn(e),s=!1}else di!==null&&(zf(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Rt.current&1?qt===0&&(qt=3):Ip())),e.updateQueue!==null&&(e.flags|=4),hn(e),null);case 4:return ho(),Lf(t,e),t===null&&Ea(e.stateNode.containerInfo),hn(e),null;case 10:return _p(e.type._context),hn(e),null;case 17:return Pn(e.type)&&Tc(),hn(e),null;case 19:if(bt(Rt),s=e.memoizedState,s===null)return hn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Io(s,!1);else{if(qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Lc(t),o!==null){for(e.flags|=128,Io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Et(Rt,Rt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Vt()>po&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304)}else{if(!i)if(t=Lc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return hn(e),null}else 2*Vt()-s.renderingStartTime>po&&n!==1073741824&&(e.flags|=128,i=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Vt(),e.sibling=null,n=Rt.current,Et(Rt,i?n&1|2:n&1),e):(hn(e),null);case 22:case 23:return Np(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(hn(e),e.subtreeFlags&6&&(e.flags|=8192)):hn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function aE(t,e){switch(dp(e),e.tag){case 1:return Pn(e.type)&&Tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),bt(Rn),bt(_n),Mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sp(e),null;case 13:if(bt(Rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(Rt),null;case 4:return ho(),null;case 10:return _p(e.type._context),null;case 22:case 23:return Np(),null;case 24:return null;default:return null}}var ll=!1,pn=!1,lE=typeof WeakSet=="function"?WeakSet:Set,be=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ut(t,e,i)}else n.current=null}function Nf(t,e,n){try{n()}catch(i){Ut(t,e,i)}}var b0=!1;function cE(t,e){if(gf=Sc,t=Sv(),hp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,p=t,h=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_f={focusedElem:t,selectionRange:n},Sc=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,g=_.memoizedState,u=e.stateNode,d=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:ui(e.type,x),g);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Ut(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return _=b0,b0=!1,_}function ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nf(e,n,s)}r=r.next}while(r!==i)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function If(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _x(t){var e=t.alternate;e!==null&&(t.alternate=null,_x(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ci],delete e[Ta],delete e[yf],delete e[XM],delete e[jM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vx(t){return t.tag===5||t.tag===3||t.tag===4}function A0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wc));else if(i!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}function Of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}var rn=null,hi=!1;function lr(t,e,n){for(n=n.child;n!==null;)xx(t,e,n),n=n.sibling}function xx(t,e,n){if(Di&&typeof Di.onCommitFiberUnmount=="function")try{Di.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:pn||$s(n,e);case 6:var i=rn,r=hi;rn=null,lr(t,e,n),rn=i,hi=r,rn!==null&&(hi?(t=rn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rn.removeChild(n.stateNode));break;case 18:rn!==null&&(hi?(t=rn,n=n.stateNode,t.nodeType===8?qu(t.parentNode,n):t.nodeType===1&&qu(t,n),ya(t)):qu(rn,n.stateNode));break;case 4:i=rn,r=hi,rn=n.stateNode.containerInfo,hi=!0,lr(t,e,n),rn=i,hi=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nf(n,e,o),r=r.next}while(r!==i)}lr(t,e,n);break;case 1:if(!pn&&($s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ut(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(pn=(i=pn)||n.memoizedState!==null,lr(t,e,n),pn=i):lr(t,e,n);break;default:lr(t,e,n)}}function C0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lE),e.forEach(function(i){var r=vE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function oi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rn=a.stateNode,hi=!1;break e;case 3:rn=a.stateNode.containerInfo,hi=!0;break e;case 4:rn=a.stateNode.containerInfo,hi=!0;break e}a=a.return}if(rn===null)throw Error(re(160));xx(s,o,r),rn=null,hi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ut(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yx(e,t),e=e.sibling}function yx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(e,t),Ei(t),i&4){try{ca(3,t,t.return),uu(3,t)}catch(x){Ut(t,t.return,x)}try{ca(5,t,t.return)}catch(x){Ut(t,t.return,x)}}break;case 1:oi(e,t),Ei(t),i&512&&n!==null&&$s(n,n.return);break;case 5:if(oi(e,t),Ei(t),i&512&&n!==null&&$s(n,n.return),t.flags&32){var r=t.stateNode;try{ga(r,"")}catch(x){Ut(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&H_(r,s),of(a,o);var c=of(a,s);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?q_(r,p):f==="dangerouslySetInnerHTML"?X_(r,p):f==="children"?ga(r,p):Qd(r,f,p,c)}switch(a){case"input":ef(r,s);break;case"textarea":G_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Qs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Qs(r,!!s.multiple,s.defaultValue,!0):Qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ta]=s}catch(x){Ut(t,t.return,x)}}break;case 6:if(oi(e,t),Ei(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Ut(t,t.return,x)}}break;case 3:if(oi(e,t),Ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(x){Ut(t,t.return,x)}break;case 4:oi(e,t),Ei(t);break;case 13:oi(e,t),Ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dp=Vt())),i&4&&C0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(pn=(c=pn)||f,oi(e,t),pn=c):oi(e,t),Ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(be=t,f=t.child;f!==null;){for(p=be=f;be!==null;){switch(h=be,m=h.child,h.tag){case 0:case 11:case 14:case 15:ca(4,h,h.return);break;case 1:$s(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Ut(i,n,x)}}break;case 5:$s(h,h.return);break;case 22:if(h.memoizedState!==null){P0(p);continue}}m!==null?(m.return=h,be=m):P0(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j_("display",o))}catch(x){Ut(t,t.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Ut(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:oi(e,t),Ei(t),i&4&&C0(t);break;case 21:break;default:oi(e,t),Ei(t)}}function Ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vx(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=A0(t);Of(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=A0(t);Uf(t,a,o);break;default:throw Error(re(161))}}catch(l){Ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uE(t,e,n){be=t,Sx(t)}function Sx(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ll;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||pn;a=ll;var c=pn;if(ll=o,(pn=l)&&!c)for(be=r;be!==null;)o=be,l=o.child,o.tag===22&&o.memoizedState!==null?D0(r):l!==null?(l.return=o,be=l):D0(r);for(;s!==null;)be=s,Sx(s),s=s.sibling;be=r,ll=a,pn=c}R0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):R0(t)}}function R0(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ui(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&d0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}d0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ya(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}pn||e.flags&512&&If(e)}catch(h){Ut(e,e.return,h)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function P0(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function D0(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(l){Ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ut(e,r,l)}}var s=e.return;try{If(e)}catch(l){Ut(e,s,l)}break;case 5:var o=e.return;try{If(e)}catch(l){Ut(e,o,l)}}}catch(l){Ut(e,e.return,l)}if(e===t){be=null;break}var a=e.sibling;if(a!==null){a.return=e.return,be=a;break}be=e.return}}var hE=Math.ceil,Uc=ir.ReactCurrentDispatcher,Rp=ir.ReactCurrentOwner,ii=ir.ReactCurrentBatchConfig,at=0,nn=null,Gt=null,an=0,Fn=0,Ks=Br(0),qt=0,Da=null,ls=0,hu=0,Pp=0,ua=null,An=null,Dp=0,po=1/0,Wi=null,Oc=!1,Ff=null,Pr=null,cl=!1,Mr=null,Fc=0,ha=0,kf=null,Jl=-1,ec=0;function Mn(){return at&6?Vt():Jl!==-1?Jl:Jl=Vt()}function Dr(t){return t.mode&1?at&2&&an!==0?an&-an:YM.transition!==null?(ec===0&&(ec=sv()),ec):(t=pt,t!==0||(t=window.event,t=t===void 0?16:fv(t.type)),t):1}function vi(t,e,n,i){if(50<ha)throw ha=0,kf=null,Error(re(185));Ba(t,n,i),(!(at&2)||t!==nn)&&(t===nn&&(!(at&2)&&(hu|=n),qt===4&&xr(t,an)),Dn(t,i),n===1&&at===0&&!(e.mode&1)&&(po=Vt()+500,au&&zr()))}function Dn(t,e){var n=t.callbackNode;YS(t,e);var i=yc(t,t===nn?an:0);if(i===0)n!==null&&zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zm(n),e===1)t.tag===0?qM(L0.bind(null,t)):Dv(L0.bind(null,t)),GM(function(){!(at&6)&&zr()}),n=null;else{switch(ov(i)){case 1:n=ip;break;case 4:n=iv;break;case 16:n=xc;break;case 536870912:n=rv;break;default:n=xc}n=Rx(n,Mx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mx(t,e){if(Jl=-1,ec=0,at&6)throw Error(re(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var i=yc(t,t===nn?an:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=kc(t,i);else{e=i;var r=at;at|=2;var s=wx();(nn!==t||an!==e)&&(Wi=null,po=Vt()+500,ns(t,e));do try{pE();break}catch(a){Ex(t,a)}while(!0);gp(),Uc.current=s,at=r,Gt!==null?e=0:(nn=null,an=0,e=qt)}if(e!==0){if(e===2&&(r=hf(t),r!==0&&(i=r,e=Bf(t,r))),e===1)throw n=Da,ns(t,0),xr(t,i),Dn(t,Vt()),n;if(e===6)xr(t,i);else{if(r=t.current.alternate,!(i&30)&&!fE(r)&&(e=kc(t,i),e===2&&(s=hf(t),s!==0&&(i=s,e=Bf(t,s))),e===1))throw n=Da,ns(t,0),xr(t,i),Dn(t,Vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Yr(t,An,Wi);break;case 3:if(xr(t,i),(i&130023424)===i&&(e=Dp+500-Vt(),10<e)){if(yc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=xf(Yr.bind(null,t,An,Wi),e);break}Yr(t,An,Wi);break;case 4:if(xr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-_i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hE(i/1960))-i,10<i){t.timeoutHandle=xf(Yr.bind(null,t,An,Wi),i);break}Yr(t,An,Wi);break;case 5:Yr(t,An,Wi);break;default:throw Error(re(329))}}}return Dn(t,Vt()),t.callbackNode===n?Mx.bind(null,t):null}function Bf(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=kc(t,e),t!==2&&(e=An,An=n,e!==null&&zf(e)),t}function zf(t){An===null?An=t:An.push.apply(An,t)}function fE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!xi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~Pp,e&=~hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_i(e),i=1<<n;t[n]=-1,e&=~i}}function L0(t){if(at&6)throw Error(re(327));io();var e=yc(t,0);if(!(e&1))return Dn(t,Vt()),null;var n=kc(t,e);if(t.tag!==0&&n===2){var i=hf(t);i!==0&&(e=i,n=Bf(t,i))}if(n===1)throw n=Da,ns(t,0),xr(t,e),Dn(t,Vt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,An,Wi),Dn(t,Vt()),null}function Lp(t,e){var n=at;at|=1;try{return t(e)}finally{at=n,at===0&&(po=Vt()+500,au&&zr())}}function cs(t){Mr!==null&&Mr.tag===0&&!(at&6)&&io();var e=at;at|=1;var n=ii.transition,i=pt;try{if(ii.transition=null,pt=1,t)return t()}finally{pt=i,ii.transition=n,at=e,!(at&6)&&zr()}}function Np(){Fn=Ks.current,bt(Ks)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HM(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(dp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tc();break;case 3:ho(),bt(Rn),bt(_n),Mp();break;case 5:Sp(i);break;case 4:ho();break;case 13:bt(Rt);break;case 19:bt(Rt);break;case 10:_p(i.type._context);break;case 22:case 23:Np()}n=n.return}if(nn=t,Gt=t=Lr(t.current,null),an=Fn=e,qt=0,Da=null,Pp=hu=ls=0,An=ua=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Qr=null}return t}function Ex(t,e){do{var n=Gt;try{if(gp(),Kl.current=Ic,Nc){for(var i=Pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nc=!1}if(as=0,Qt=jt=Pt=null,la=!1,Ca=0,Rp.current=null,n===null||n.return===null){qt=1,Da=e,Gt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=an,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=x0(o);if(m!==null){m.flags&=-257,y0(m,o,a,s,e),m.mode&1&&v0(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){v0(s,c,e),Ip();break e}l=Error(re(426))}}else if(At&&a.mode&1){var g=x0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),y0(g,o,a,s,e),pp(fo(l,a));break e}}s=l=fo(l,a),qt!==4&&(qt=2),ua===null?ua=[s]:ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=ox(s,l,e);f0(s,u);break e;case 1:a=l;var d=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Pr===null||!Pr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ax(s,a,e);f0(s,S);break e}}s=s.return}while(s!==null)}bx(n)}catch(T){e=T,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function wx(){var t=Uc.current;return Uc.current=Ic,t===null?Ic:t}function Ip(){(qt===0||qt===3||qt===2)&&(qt=4),nn===null||!(ls&268435455)&&!(hu&268435455)||xr(nn,an)}function kc(t,e){var n=at;at|=2;var i=wx();(nn!==t||an!==e)&&(Wi=null,ns(t,e));do try{dE();break}catch(r){Ex(t,r)}while(!0);if(gp(),at=n,Uc.current=i,Gt!==null)throw Error(re(261));return nn=null,an=0,qt}function dE(){for(;Gt!==null;)Tx(Gt)}function pE(){for(;Gt!==null&&!BS();)Tx(Gt)}function Tx(t){var e=Cx(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?bx(t):Gt=e,Rp.current=null}function bx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aE(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Gt=null;return}}else if(n=oE(n,e,Fn),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);qt===0&&(qt=5)}function Yr(t,e,n){var i=pt,r=ii.transition;try{ii.transition=null,pt=1,mE(t,e,n,i)}finally{ii.transition=r,pt=i}return null}function mE(t,e,n,i){do io();while(Mr!==null);if(at&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($S(t,s),t===nn&&(Gt=nn=null,an=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Rx(xc,function(){return io(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var o=pt;pt=1;var a=at;at|=4,Rp.current=null,cE(t,n),yx(n,t),UM(_f),Sc=!!gf,_f=gf=null,t.current=n,uE(n),zS(),at=a,pt=o,ii.transition=s}else t.current=n;if(cl&&(cl=!1,Mr=t,Fc=r),s=t.pendingLanes,s===0&&(Pr=null),GS(n.stateNode),Dn(t,Vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Oc)throw Oc=!1,t=Ff,Ff=null,t;return Fc&1&&t.tag!==0&&io(),s=t.pendingLanes,s&1?t===kf?ha++:(ha=0,kf=t):ha=0,zr(),null}function io(){if(Mr!==null){var t=ov(Fc),e=ii.transition,n=pt;try{if(ii.transition=null,pt=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,Fc=0,at&6)throw Error(re(331));var r=at;for(at|=4,be=t.current;be!==null;){var s=be,o=s.child;if(be.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(be=c;be!==null;){var f=be;switch(f.tag){case 0:case 11:case 15:ca(8,f,s)}var p=f.child;if(p!==null)p.return=f,be=p;else for(;be!==null;){f=be;var h=f.sibling,m=f.return;if(_x(f),f===c){be=null;break}if(h!==null){h.return=m,be=h;break}be=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}be=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,be=o;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,be=u;break e}be=s.return}}var d=t.current;for(be=d;be!==null;){o=be;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,be=v;else e:for(o=d;be!==null;){if(a=be,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uu(9,a)}}catch(T){Ut(a,a.return,T)}if(a===o){be=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,be=S;break e}be=a.return}}if(at=r,zr(),Di&&typeof Di.onPostCommitFiberRoot=="function")try{Di.onPostCommitFiberRoot(nu,t)}catch{}i=!0}return i}finally{pt=n,ii.transition=e}}return!1}function N0(t,e,n){e=fo(n,e),e=ox(t,e,1),t=Rr(t,e,1),e=Mn(),t!==null&&(Ba(t,1,e),Dn(t,e))}function Ut(t,e,n){if(t.tag===3)N0(t,t,n);else for(;e!==null;){if(e.tag===3){N0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=fo(n,t),t=ax(e,t,1),e=Rr(e,t,1),t=Mn(),e!==null&&(Ba(e,1,t),Dn(e,t));break}}e=e.return}}function gE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Mn(),t.pingedLanes|=t.suspendedLanes&n,nn===t&&(an&n)===n&&(qt===4||qt===3&&(an&130023424)===an&&500>Vt()-Dp?ns(t,0):Pp|=n),Dn(t,e)}function Ax(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=Mn();t=er(t,e),t!==null&&(Ba(t,e,n),Dn(t,n))}function _E(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ax(t,n)}function vE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Ax(t,n)}var Cx;Cx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rn.current)Cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cn=!1,sE(t,e,n);Cn=!!(t.flags&131072)}else Cn=!1,At&&e.flags&1048576&&Lv(e,Cc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ql(t,e),t=e.pendingProps;var r=lo(e,_n.current);no(e,n),r=wp(null,e,i,t,r,n);var s=Tp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pn(i)?(s=!0,bc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xp(e),r.updater=cu,e.stateNode=r,r._reactInternals=e,bf(e,i,t,n),e=Rf(null,e,i,!0,s,n)):(e.tag=0,At&&s&&fp(e),yn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ql(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yE(i),t=ui(i,t),r){case 0:e=Cf(null,e,i,t,n);break e;case 1:e=E0(null,e,i,t,n);break e;case 11:e=S0(null,e,i,t,n);break e;case 14:e=M0(null,e,i,ui(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Cf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),E0(t,e,i,r,n);case 3:e:{if(hx(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kv(t,e),Dc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=fo(Error(re(423)),e),e=w0(t,e,i,n,r);break e}else if(i!==r){r=fo(Error(re(424)),e),e=w0(t,e,i,n,r);break e}else for(Hn=Cr(e.stateNode.containerInfo.firstChild),Gn=e,At=!0,di=null,n=Ov(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),i===r){e=tr(t,e,n);break e}yn(t,e,i,n)}e=e.child}return e;case 5:return Bv(e),t===null&&Ef(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,vf(i,r)?o=null:s!==null&&vf(i,s)&&(e.flags|=32),ux(t,e),yn(t,e,o,n),e.child;case 6:return t===null&&Ef(e),null;case 13:return fx(t,e,n);case 4:return yp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=uo(e,null,i,n):yn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),S0(t,e,i,r,n);case 7:return yn(t,e,e.pendingProps,n),e.child;case 8:return yn(t,e,e.pendingProps.children,n),e.child;case 12:return yn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Et(Rc,i._currentValue),i._currentValue=o,s!==null)if(xi(s.value,o)){if(s.children===r.children&&!Rn.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=$i(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,no(e,n),r=ri(r),i=i(r),e.flags|=1,yn(t,e,i,n),e.child;case 14:return i=e.type,r=ui(i,e.pendingProps),r=ui(i.type,r),M0(t,e,i,r,n);case 15:return lx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ui(i,r),Ql(t,e),e.tag=1,Pn(i)?(t=!0,bc(e)):t=!1,no(e,n),sx(e,i,r),bf(e,i,r,n),Rf(null,e,i,!0,t,n);case 19:return dx(t,e,n);case 22:return cx(t,e,n)}throw Error(re(156,e.tag))};function Rx(t,e){return nv(t,e)}function xE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,e,n,i){return new xE(t,e,n,i)}function Up(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yE(t){if(typeof t=="function")return Up(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ep)return 11;if(t===tp)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Up(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zs:return is(n.children,r,s,e);case Jd:o=8,r|=8;break;case $h:return t=ni(12,n,e,r|2),t.elementType=$h,t.lanes=s,t;case Kh:return t=ni(13,n,e,r),t.elementType=Kh,t.lanes=s,t;case Zh:return t=ni(19,n,e,r),t.elementType=Zh,t.lanes=s,t;case B_:return fu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F_:o=10;break e;case k_:o=9;break e;case ep:o=11;break e;case tp:o=14;break e;case mr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=ni(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function is(t,e,n,i){return t=ni(7,t,i,e),t.lanes=n,t}function fu(t,e,n,i){return t=ni(22,t,i,e),t.elementType=B_,t.lanes=n,t.stateNode={isHidden:!1},t}function th(t,e,n){return t=ni(6,t,null,e),t.lanes=n,t}function nh(t,e,n){return e=ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Op(t,e,n,i,r,s,o,a,l){return t=new SE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ni(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xp(s),t}function ME(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Px(t){if(!t)return Ur;t=t._reactInternals;e:{if(ds(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Pn(n))return Pv(t,n,e)}return e}function Dx(t,e,n,i,r,s,o,a,l){return t=Op(n,i,!0,t,r,s,o,a,l),t.context=Px(null),n=t.current,i=Mn(),r=Dr(n),s=$i(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,Ba(t,r,i),Dn(t,i),t}function du(t,e,n,i){var r=e.current,s=Mn(),o=Dr(r);return n=Px(n),e.context===null?e.context=n:e.pendingContext=n,e=$i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,o),t!==null&&(vi(t,r,o,s),$l(t,r,o)),o}function Bc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function I0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fp(t,e){I0(t,e),(t=t.alternate)&&I0(t,e)}function EE(){return null}var Lx=typeof reportError=="function"?reportError:function(t){console.error(t)};function kp(t){this._internalRoot=t}pu.prototype.render=kp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));du(t,e,null,null)};pu.prototype.unmount=kp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){du(null,t,null,null)}),e[Ji]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=cv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&hv(t)}};function Bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function U0(){}function wE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Bc(o);s.call(c)}}var o=Dx(e,i,t,0,null,!1,!1,"",U0);return t._reactRootContainer=o,t[Ji]=o.current,Ea(t.nodeType===8?t.parentNode:t),cs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Bc(l);a.call(c)}}var l=Op(t,0,!1,null,null,!1,!1,"",U0);return t._reactRootContainer=l,t[Ji]=l.current,Ea(t.nodeType===8?t.parentNode:t),cs(function(){du(e,l,n,i)}),l}function gu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Bc(o);a.call(l)}}du(e,o,t,r)}else o=wE(n,e,t,r,i);return Bc(o)}av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(rp(e,n|1),Dn(e,Vt()),!(at&6)&&(po=Vt()+500,zr()))}break;case 13:cs(function(){var i=er(t,1);if(i!==null){var r=Mn();vi(i,t,1,r)}}),Fp(t,1)}};sp=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=Mn();vi(e,t,134217728,n)}Fp(t,134217728)}};lv=function(t){if(t.tag===13){var e=Dr(t),n=er(t,e);if(n!==null){var i=Mn();vi(n,t,e,i)}Fp(t,e)}};cv=function(){return pt};uv=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};lf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ou(i);if(!r)throw Error(re(90));V_(i),ef(i,r)}}}break;case"textarea":G_(t,n);break;case"select":e=n.value,e!=null&&Qs(t,!!n.multiple,e,!1)}};K_=Lp;Z_=cs;var TE={usingClientEntryPoint:!1,Events:[Va,Ws,ou,Y_,$_,Lp]},Uo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bE={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ev(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||EE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{nu=ul.inject(bE),Di=ul}catch{}}jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TE;jn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(e))throw Error(re(200));return ME(t,e,null,n)};jn.createRoot=function(t,e){if(!Bp(t))throw Error(re(299));var n=!1,i="",r=Lx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Op(t,1,!1,null,null,n,!1,i,r),t[Ji]=e.current,Ea(t.nodeType===8?t.parentNode:t),new kp(e)};jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=ev(e),t=t===null?null:t.stateNode,t};jn.flushSync=function(t){return cs(t)};jn.hydrate=function(t,e,n){if(!mu(e))throw Error(re(200));return gu(null,t,e,!0,n)};jn.hydrateRoot=function(t,e,n){if(!Bp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Lx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Dx(e,null,t,1,n??null,r,!1,s,o),t[Ji]=e.current,Ea(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new pu(e)};jn.render=function(t,e,n){if(!mu(e))throw Error(re(200));return gu(null,t,e,!1,n)};jn.unmountComponentAtNode=function(t){if(!mu(t))throw Error(re(40));return t._reactRootContainer?(cs(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ji]=null})}),!0):!1};jn.unstable_batchedUpdates=Lp;jn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!mu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return gu(t,e,n,!1,i)};jn.version="18.3.1-next-f1338f8080-20240426";function Nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nx)}catch(t){console.error(t)}}Nx(),N_.exports=jn;var AE=N_.exports,O0=AE;qh.createRoot=O0.createRoot,qh.hydrateRoot=O0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},La.apply(this,arguments)}var Er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Er||(Er={}));const F0="popstate";function CE(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Vf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ix(r)}return PE(e,n,null,t)}function Yt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function RE(){return Math.random().toString(36).substr(2,8)}function k0(t,e){return{usr:t.state,key:t.key,idx:e}}function Vf(t,e,n,i){return n===void 0&&(n=null),La({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wo(e):e,{state:n,key:e&&e.key||i||RE()})}function Ix(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function wo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function PE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Er.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(La({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){a=Er.Pop;let g=f(),u=g==null?null:g-c;c=g,l&&l({action:a,location:x.location,delta:u})}function h(g,u){a=Er.Push;let d=Vf(x.location,g,u);c=f()+1;let v=k0(d,c),S=x.createHref(d);try{o.pushState(v,"",S)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(S)}s&&l&&l({action:a,location:x.location,delta:1})}function m(g,u){a=Er.Replace;let d=Vf(x.location,g,u);c=f();let v=k0(d,c),S=x.createHref(d);o.replaceState(v,"",S),s&&l&&l({action:a,location:x.location,delta:0})}function _(g){let u=r.location.origin!=="null"?r.location.origin:r.location.href,d=typeof g=="string"?g:Ix(g);return d=d.replace(/ $/,"%20"),Yt(u,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,u)}let x={get action(){return a},get location(){return t(r,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(F0,p),l=g,()=>{r.removeEventListener(F0,p),l=null}},createHref(g){return e(r,g)},createURL:_,encodeLocation(g){let u=_(g);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:m,go(g){return o.go(g)}};return x}var B0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(B0||(B0={}));function DE(t,e,n){return n===void 0&&(n="/"),LE(t,e,n)}function LE(t,e,n,i){let r=typeof e=="string"?wo(e):e,s=Fx(r.pathname||"/",n);if(s==null)return null;let o=Ux(t);NE(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=XE(s);a=HE(o[l],c)}return a}function Ux(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Yt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=rs([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Yt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ux(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:zE(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Ox(s.path))r(s,o,l)}),e}function Ox(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Ox(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function NE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const IE=/^:[\w-]+$/,UE=3,OE=2,FE=1,kE=10,BE=-2,z0=t=>t==="*";function zE(t,e){let n=t.split("/"),i=n.length;return n.some(z0)&&(i+=BE),e&&(i+=OE),n.filter(r=>!z0(r)).reduce((r,s)=>r+(IE.test(s)?UE:s===""?FE:kE),i)}function VE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function HE(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=GE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!p)return null;Object.assign(r,p.params),o.push({params:r,pathname:rs([s,p.pathname]),pathnameBase:QE(rs([s,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(s=rs([s,p.pathnameBase]))}return o}function GE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=WE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,p)=>{let{paramName:h,isOptional:m}=f;if(h==="*"){let x=a[p]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=a[p];return m&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function WE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function XE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Fx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const jE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qE=t=>jE.test(t);function YE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?wo(t):t,s;if(n)if(qE(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),zp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=V0(n.substring(1),"/"):s=V0(n,e)}else s=e;return{pathname:s,search:JE(i),hash:ew(r)}}function V0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ih(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $E(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function KE(t,e){let n=$E(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function ZE(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=wo(t):(r=La({},t),Yt(!r.pathname||!r.pathname.includes("?"),ih("?","pathname","search",r)),Yt(!r.pathname||!r.pathname.includes("#"),ih("#","pathname","hash",r)),Yt(!r.search||!r.search.includes("#"),ih("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;r.pathname=h.join("/")}a=p>=0?e[p]:"/"}let l=YE(r,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const rs=t=>t.join("/").replace(/\/\/+/g,"/"),QE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ew=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kx=["post","put","patch","delete"];new Set(kx);const nw=["get",...kx];new Set(nw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Na.apply(this,arguments)}const Vp=ie.createContext(null),iw=ie.createContext(null),_u=ie.createContext(null),vu=ie.createContext(null),To=ie.createContext({outlet:null,matches:[],isDataRoute:!1}),Bx=ie.createContext(null);function xu(){return ie.useContext(vu)!=null}function zx(){return xu()||Yt(!1),ie.useContext(vu).location}function Vx(t){ie.useContext(_u).static||ie.useLayoutEffect(t)}function Hp(){let{isDataRoute:t}=ie.useContext(To);return t?gw():rw()}function rw(){xu()||Yt(!1);let t=ie.useContext(Vp),{basename:e,future:n,navigator:i}=ie.useContext(_u),{matches:r}=ie.useContext(To),{pathname:s}=zx(),o=JSON.stringify(KE(r,n.v7_relativeSplatPath)),a=ie.useRef(!1);return Vx(()=>{a.current=!0}),ie.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let p=ZE(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:rs([e,p.pathname])),(f.replace?i.replace:i.push)(p,f.state,f)},[e,i,o,s,t])}function sw(t,e){return ow(t,e)}function ow(t,e,n,i){xu()||Yt(!1);let{navigator:r}=ie.useContext(_u),{matches:s}=ie.useContext(To),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=zx(),f;if(e){var p;let g=typeof e=="string"?wo(e):e;l==="/"||(p=g.pathname)!=null&&p.startsWith(l)||Yt(!1),f=g}else f=c;let h=f.pathname||"/",m=h;if(l!=="/"){let g=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let _=DE(t,{pathname:m}),x=hw(_&&_.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:rs([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:rs([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&x?ie.createElement(vu.Provider,{value:{location:Na({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Er.Pop}},x):x}function aw(){let t=mw(),e=tw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),n?ie.createElement("pre",{style:r},n):null,null)}const lw=ie.createElement(aw,null);class cw extends ie.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ie.createElement(To.Provider,{value:this.props.routeContext},ie.createElement(Bx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uw(t){let{routeContext:e,match:n,children:i}=t,r=ie.useContext(Vp);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ie.createElement(To.Provider,{value:e},i)}function hw(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);f>=0||Yt(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:h,errors:m}=n,_=p.route.loader&&h[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,h)=>{let m,_=!1,x=null,g=null;n&&(m=a&&p.route.id?a[p.route.id]:void 0,x=p.route.errorElement||lw,l&&(c<0&&h===0?(_w("route-fallback"),_=!0,g=null):c===h&&(_=!0,g=p.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),d=()=>{let v;return m?v=x:_?v=g:p.route.Component?v=ie.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=f,ie.createElement(uw,{match:p,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?ie.createElement(cw,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:d(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):d()},null)}var Hx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Hx||{}),Gx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Gx||{});function fw(t){let e=ie.useContext(Vp);return e||Yt(!1),e}function dw(t){let e=ie.useContext(iw);return e||Yt(!1),e}function pw(t){let e=ie.useContext(To);return e||Yt(!1),e}function Wx(t){let e=pw(),n=e.matches[e.matches.length-1];return n.route.id||Yt(!1),n.route.id}function mw(){var t;let e=ie.useContext(Bx),n=dw(),i=Wx();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function gw(){let{router:t}=fw(Hx.UseNavigateStable),e=Wx(Gx.UseNavigateStable),n=ie.useRef(!1);return Vx(()=>{n.current=!0}),ie.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Na({fromRouteId:e},s)))},[t,e])}const H0={};function _w(t,e,n){H0[t]||(H0[t]=!0)}function vw(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Jo(t){Yt(!1)}function xw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Er.Pop,navigator:s,static:o=!1,future:a}=t;xu()&&Yt(!1);let l=e.replace(/^\/*/,"/"),c=ie.useMemo(()=>({basename:l,navigator:s,static:o,future:Na({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=wo(i));let{pathname:f="/",search:p="",hash:h="",state:m=null,key:_="default"}=i,x=ie.useMemo(()=>{let g=Fx(f,l);return g==null?null:{location:{pathname:g,search:p,hash:h,state:m,key:_},navigationType:r}},[l,f,p,h,m,_,r]);return x==null?null:ie.createElement(_u.Provider,{value:c},ie.createElement(vu.Provider,{children:n,value:x}))}function yw(t){let{children:e,location:n}=t;return sw(Hf(e),n)}new Promise(()=>{});function Hf(t,e){e===void 0&&(e=[]);let n=[];return ie.Children.forEach(t,(i,r)=>{if(!ie.isValidElement(i))return;let s=[...e,r];if(i.type===ie.Fragment){n.push.apply(n,Hf(i.props.children,s));return}i.type!==Jo&&Yt(!1),!i.props.index||!i.props.children||Yt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Hf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Sw="6";try{window.__reactRouterVersion=Sw}catch{}const Mw="startTransition",G0=gS[Mw];function Ew(t){let{basename:e,children:n,future:i,window:r}=t,s=ie.useRef();s.current==null&&(s.current=CE({window:r,v5Compat:!0}));let o=s.current,[a,l]=ie.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=ie.useCallback(p=>{c&&G0?G0(()=>l(p)):l(p)},[l,c]);return ie.useLayoutEffect(()=>o.listen(f),[o,f]),ie.useEffect(()=>vw(i),[i]),ie.createElement(xw,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var W0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(W0||(W0={}));var X0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(X0||(X0={}));class ww extends tu.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("💥 [React Error Boundary] Caught:",e,n)}render(){return this.state.hasError?G.jsxs("div",{className:"fixed inset-0 bg-slate-900 text-red-500 flex flex-col items-center justify-center p-8 text-center z-[9999]",children:[G.jsx("h1",{className:"text-4xl font-bold mb-4",children:"UI Crashed"}),G.jsx("p",{className:"mb-8 text-slate-300",children:"A rendering error occurred. The game engine may still be running."}),G.jsx("button",{className:"px-6 py-3 bg-red-600 text-white rounded hover:bg-red-500 font-bold tracking-wider",onClick:()=>window.location.reload(),children:"RELOAD GAME"})]}):this.props.children}}function Tw(){const[t,e]=ie.useState("connected"),[n,i]=ie.useState(null);return ie.useEffect(()=>{const r=()=>e("connected"),s=()=>e("disconnected"),o=()=>e("failed"),a=l=>{i(l.detail.message),setTimeout(()=>i(null),3e3)};return window.addEventListener("socket_connected",r),window.addEventListener("socket_disconnected",s),window.addEventListener("socket_failed_terminal",o),window.addEventListener("rate_limited",a),()=>{window.removeEventListener("socket_connected",r),window.removeEventListener("socket_disconnected",s),window.removeEventListener("socket_failed_terminal",o),window.removeEventListener("rate_limited",a)}},[]),t==="connected"&&!n?null:G.jsxs("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-[1000] flex flex-col gap-2 items-center pointer-events-none",children:[t==="disconnected"&&G.jsx("div",{className:"bg-orange-500/90 text-white px-4 py-2 rounded shadow-lg font-bold animate-pulse",children:"⚠️ Connection Lost — Reconnecting..."}),t==="failed"&&G.jsx("div",{className:"bg-red-600 text-white px-4 py-2 rounded shadow-lg font-bold",children:"🚨 Server Unreachable. Please reload."}),n&&G.jsxs("div",{className:"bg-yellow-500 text-black px-4 py-2 rounded shadow-lg font-bold",children:["⏳ ",n]})]})}const Oi=Object.create(null);Oi.open="0";Oi.close="1";Oi.ping="2";Oi.pong="3";Oi.message="4";Oi.upgrade="5";Oi.noop="6";const nc=Object.create(null);Object.keys(Oi).forEach(t=>{nc[Oi[t]]=t});const Gf={type:"error",data:"parser error"},Xx=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",jx=typeof ArrayBuffer=="function",qx=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Gp=({type:t,data:e},n,i)=>Xx&&e instanceof Blob?n?i(e):j0(e,i):jx&&(e instanceof ArrayBuffer||qx(e))?n?i(e):j0(new Blob([e]),i):i(Oi[t]+(e||"")),j0=(t,e)=>{const n=new FileReader;return n.onload=function(){const i=n.result.split(",")[1];e("b"+(i||""))},n.readAsDataURL(t)};function q0(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let rh;function bw(t,e){if(Xx&&t.data instanceof Blob)return t.data.arrayBuffer().then(q0).then(e);if(jx&&(t.data instanceof ArrayBuffer||qx(t.data)))return e(q0(t.data));Gp(t,!1,n=>{rh||(rh=new TextEncoder),e(rh.encode(n))})}const Y0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ea=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Y0.length;t++)ea[Y0.charCodeAt(t)]=t;const Aw=t=>{let e=t.length*.75,n=t.length,i,r=0,s,o,a,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const c=new ArrayBuffer(e),f=new Uint8Array(c);for(i=0;i<n;i+=4)s=ea[t.charCodeAt(i)],o=ea[t.charCodeAt(i+1)],a=ea[t.charCodeAt(i+2)],l=ea[t.charCodeAt(i+3)],f[r++]=s<<2|o>>4,f[r++]=(o&15)<<4|a>>2,f[r++]=(a&3)<<6|l&63;return c},Cw=typeof ArrayBuffer=="function",Wp=(t,e)=>{if(typeof t!="string")return{type:"message",data:Yx(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Rw(t.substring(1),e)}:nc[n]?t.length>1?{type:nc[n],data:t.substring(1)}:{type:nc[n]}:Gf},Rw=(t,e)=>{if(Cw){const n=Aw(t);return Yx(n,e)}else return{base64:!0,data:t}},Yx=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},$x="",Pw=(t,e)=>{const n=t.length,i=new Array(n);let r=0;t.forEach((s,o)=>{Gp(s,!1,a=>{i[o]=a,++r===n&&e(i.join($x))})})},Dw=(t,e)=>{const n=t.split($x),i=[];for(let r=0;r<n.length;r++){const s=Wp(n[r],e);if(i.push(s),s.type==="error")break}return i};function Lw(){return new TransformStream({transform(t,e){bw(t,n=>{const i=n.length;let r;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);const s=new DataView(r.buffer);s.setUint8(0,126),s.setUint16(1,i)}else{r=new Uint8Array(9);const s=new DataView(r.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(i))}t.data&&typeof t.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(n)})}})}let sh;function hl(t){return t.reduce((e,n)=>e+n.length,0)}function fl(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let i=0;for(let r=0;r<e;r++)n[r]=t[0][i++],i===t[0].length&&(t.shift(),i=0);return t.length&&i<t[0].length&&(t[0]=t[0].slice(i)),n}function Nw(t,e){sh||(sh=new TextDecoder);const n=[];let i=0,r=-1,s=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(i===0){if(hl(n)<1)break;const l=fl(n,1);s=(l[0]&128)===128,r=l[0]&127,r<126?i=3:r===126?i=1:i=2}else if(i===1){if(hl(n)<2)break;const l=fl(n,2);r=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),i=3}else if(i===2){if(hl(n)<8)break;const l=fl(n,8),c=new DataView(l.buffer,l.byteOffset,l.length),f=c.getUint32(0);if(f>Math.pow(2,21)-1){a.enqueue(Gf);break}r=f*Math.pow(2,32)+c.getUint32(4),i=3}else{if(hl(n)<r)break;const l=fl(n,r);a.enqueue(Wp(s?l:sh.decode(l),e)),i=0}if(r===0||r>t){a.enqueue(Gf);break}}}})}const Kx=4;function Wt(t){if(t)return Iw(t)}function Iw(t){for(var e in Wt.prototype)t[e]=Wt.prototype[e];return t}Wt.prototype.on=Wt.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};Wt.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};Wt.prototype.off=Wt.prototype.removeListener=Wt.prototype.removeAllListeners=Wt.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var i,r=0;r<n.length;r++)if(i=n[r],i===e||i.fn===e){n.splice(r,1);break}return n.length===0&&delete this._callbacks["$"+t],this};Wt.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(n){n=n.slice(0);for(var i=0,r=n.length;i<r;++i)n[i].apply(this,e)}return this};Wt.prototype.emitReserved=Wt.prototype.emit;Wt.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};Wt.prototype.hasListeners=function(t){return!!this.listeners(t).length};const yu=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0),Qn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Uw="arraybuffer";function Zx(t,...e){return e.reduce((n,i)=>(t.hasOwnProperty(i)&&(n[i]=t[i]),n),{})}const Ow=Qn.setTimeout,Fw=Qn.clearTimeout;function Su(t,e){e.useNativeTimers?(t.setTimeoutFn=Ow.bind(Qn),t.clearTimeoutFn=Fw.bind(Qn)):(t.setTimeoutFn=Qn.setTimeout.bind(Qn),t.clearTimeoutFn=Qn.clearTimeout.bind(Qn))}const kw=1.33;function Bw(t){return typeof t=="string"?zw(t):Math.ceil((t.byteLength||t.size)*kw)}function zw(t){let e=0,n=0;for(let i=0,r=t.length;i<r;i++)e=t.charCodeAt(i),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(i++,n+=4);return n}function Qx(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Vw(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function Hw(t){let e={},n=t.split("&");for(let i=0,r=n.length;i<r;i++){let s=n[i].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Gw extends Error{constructor(e,n,i){super(e),this.description=n,this.context=i,this.type="TransportError"}}class Xp extends Wt{constructor(e){super(),this.writable=!1,Su(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,i){return super.emitReserved("error",new Gw(e,n,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Wp(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=Vw(e);return n.length?"?"+n:""}}class Ww extends Xp{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||n()})),this.writable||(i++,this.once("drain",function(){--i||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};Dw(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Pw(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=Qx()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let Jx=!1;try{Jx=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Xw=Jx;function jw(){}class qw extends Ww{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let i=location.port;i||(i=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}}doWrite(e,n){const i=this.request({method:"POST",data:e});i.on("success",n),i.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,i)=>{this.onError("xhr poll error",n,i)}),this.pollXhr=e}}class Ni extends Wt{constructor(e,n,i){super(),this.createRequest=e,Su(this,i),this._opts=i,this._method=i.method||"GET",this._uri=n,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var e;const n=Zx(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(n);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&i.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var r;i.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=Ni.requestsCount++,Ni.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=jw,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ni.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ni.requestsCount=0;Ni.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",$0);else if(typeof addEventListener=="function"){const t="onpagehide"in Qn?"pagehide":"unload";addEventListener(t,$0,!1)}}function $0(){for(let t in Ni.requests)Ni.requests.hasOwnProperty(t)&&Ni.requests[t].abort()}const Yw=function(){const t=ey({xdomain:!1});return t&&t.responseType!==null}();class $w extends qw{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=Yw&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Ni(ey,this.uri(),e)}}function ey(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Xw))return new XMLHttpRequest}catch{}if(!e)try{return new Qn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const ty=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Kw extends Xp{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,i=ty?{}:Zx(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const i=e[n],r=n===e.length-1;Gp(i,this.supportsBinary,s=>{try{this.doWrite(i,s)}catch{}r&&yu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=Qx()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const oh=Qn.WebSocket||Qn.MozWebSocket;class Zw extends Kw{createSocket(e,n,i){return ty?new oh(e,n,i):n?new oh(e,n):new oh(e)}doWrite(e,n){this.ws.send(n)}}class Qw extends Xp{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=Nw(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(n).getReader(),r=Lw();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const s=()=>{i.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const i=e[n],r=n===e.length-1;this._writer.write(i).then(()=>{r&&yu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Jw={websocket:Zw,webtransport:Qw,polling:$w},e1=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,t1=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Wf(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),i=t.indexOf("]");n!=-1&&i!=-1&&(t=t.substring(0,n)+t.substring(n,i).replace(/:/g,";")+t.substring(i,t.length));let r=e1.exec(t||""),s={},o=14;for(;o--;)s[t1[o]]=r[o]||"";return n!=-1&&i!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=n1(s,s.path),s.queryKey=i1(s,s.query),s}function n1(t,e){const n=/\/{2,9}/g,i=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function i1(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,s){r&&(n[r]=s)}),n}const Xf=typeof addEventListener=="function"&&typeof removeEventListener=="function",ic=[];Xf&&addEventListener("offline",()=>{ic.forEach(t=>t())},!1);class Nr extends Wt{constructor(e,n){if(super(),this.binaryType=Uw,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const i=Wf(e);n.hostname=i.host,n.secure=i.protocol==="https"||i.protocol==="wss",n.port=i.port,i.query&&(n.query=i.query)}else n.host&&(n.hostname=Wf(n.host).host);Su(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(i=>{const r=i.prototype.name;this.transports.push(r),this._transportsByName[r]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Hw(this.opts.query)),Xf&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ic.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Kx,n.transport=e,this.id&&(n.sid=this.id);const i=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Nr.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Nr.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(n+=Bw(r)),i>0&&n>this._maxPayload)return this.writeBuffer.slice(0,i);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,yu(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,i){return this._sendPacket("message",e,n,i),this}send(e,n,i){return this._sendPacket("message",e,n,i),this}_sendPacket(e,n,i,r){if(typeof n=="function"&&(r=n,n=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:e,data:n,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},i=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}_onError(e){if(Nr.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Xf&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=ic.indexOf(this._offlineEventListener);i!==-1&&ic.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Nr.protocol=Kx;class r1 extends Nr{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),i=!1;Nr.priorWebsocketSuccess=!1;const r=()=>{i||(n.send([{type:"ping",data:"probe"}]),n.once("packet",p=>{if(!i)if(p.type==="pong"&&p.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Nr.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(f(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=n.name,this.emitReserved("upgradeError",h)}}))};function s(){i||(i=!0,f(),n.close(),n=null)}const o=p=>{const h=new Error("probe error: "+p);h.transport=n.name,s(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function l(){o("socket closed")}function c(p){n&&p.name!==n.name&&s()}const f=()=>{n.removeListener("open",r),n.removeListener("error",o),n.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};n.once("open",r),n.once("error",o),n.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let i=0;i<e.length;i++)~this.transports.indexOf(e[i])&&n.push(e[i]);return n}}let s1=class extends r1{constructor(e,n={}){const i=typeof e=="object"?e:n;(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(r=>Jw[r]).filter(r=>!!r)),super(e,i)}};function o1(t,e="",n){let i=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),i=Wf(t)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+e,i.href=i.protocol+"://"+s+(n&&n.port===i.port?"":":"+i.port),i}const a1=typeof ArrayBuffer=="function",l1=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,ny=Object.prototype.toString,c1=typeof Blob=="function"||typeof Blob<"u"&&ny.call(Blob)==="[object BlobConstructor]",u1=typeof File=="function"||typeof File<"u"&&ny.call(File)==="[object FileConstructor]";function jp(t){return a1&&(t instanceof ArrayBuffer||l1(t))||c1&&t instanceof Blob||u1&&t instanceof File}function rc(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,i=t.length;n<i;n++)if(rc(t[n]))return!0;return!1}if(jp(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return rc(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&rc(t[n]))return!0;return!1}function h1(t){const e=[],n=t.data,i=t;return i.data=jf(n,e),i.attachments=e.length,{packet:i,buffers:e}}function jf(t,e){if(!t)return t;if(jp(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let i=0;i<t.length;i++)n[i]=jf(t[i],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=jf(t[i],e));return n}return t}function f1(t,e){return t.data=qf(t.data,e),delete t.attachments,t}function qf(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=qf(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=qf(t[n],e));return t}const d1=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var nt;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(nt||(nt={}));class p1{constructor(e){this.replacer=e}encode(e){return(e.type===nt.EVENT||e.type===nt.ACK)&&rc(e)?this.encodeAsBinary({type:e.type===nt.EVENT?nt.BINARY_EVENT:nt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===nt.BINARY_EVENT||e.type===nt.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=h1(e),i=this.encodeAsString(n.packet),r=n.buffers;return r.unshift(i),r}}class qp extends Wt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const i=n.type===nt.BINARY_EVENT;i||n.type===nt.BINARY_ACK?(n.type=i?nt.EVENT:nt.ACK,this.reconstructor=new m1(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(jp(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const i={type:Number(e.charAt(0))};if(nt[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===nt.BINARY_EVENT||i.type===nt.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!g1(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=a}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););i.nsp=e.substring(s,n)}else i.nsp="/";const r=e.charAt(n+1);if(r!==""&&Number(r)==r){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}i.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(qp.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case nt.CONNECT:return K0(n);case nt.DISCONNECT:return n===void 0;case nt.CONNECT_ERROR:return typeof n=="string"||K0(n);case nt.EVENT:case nt.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&d1.indexOf(n[0])===-1);case nt.ACK:case nt.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class m1{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=f1(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const g1=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function K0(t){return Object.prototype.toString.call(t)==="[object Object]"}const _1=Object.freeze(Object.defineProperty({__proto__:null,Decoder:qp,Encoder:p1,get PacketType(){return nt}},Symbol.toStringTag,{value:"Module"}));function fi(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const v1=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class iy extends Wt{constructor(e,n,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[fi(e,"open",this.onopen.bind(this)),fi(e,"packet",this.onpacket.bind(this)),fi(e,"error",this.onerror.bind(this)),fi(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var i,r,s;if(v1.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const o={type:nt.EVENT,data:n};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const f=this.ids++,p=n.pop();this._registerAckCallback(f,p),o.id=f}const a=(r=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||r===void 0?void 0:r.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,n){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);n.call(this,new Error("operation has timed out"))},r),o=(...a)=>{this.io.clearTimeoutFn(s),n.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...n){return new Promise((i,r)=>{const s=(o,a)=>o?r(o):i(a);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...s)=>(this._queue[0],r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(r)):(this._queue.shift(),n&&n(null,...s)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:nt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(i=>String(i.id)===e)){const i=this.acks[e];delete this.acks[e],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case nt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case nt.EVENT:case nt.BINARY_EVENT:this.onevent(e);break;case nt.ACK:case nt.BINARY_ACK:this.onack(e);break;case nt.DISCONNECT:this.ondisconnect();break;case nt.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const i of n)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let i=!1;return function(...r){i||(i=!0,n.packet({type:nt.ACK,id:e,data:r}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:nt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let i=0;i<n.length;i++)if(e===n[i])return n.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let i=0;i<n.length;i++)if(e===n[i])return n.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const i of n)i.apply(this,e.data)}}}function bo(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}bo.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=Math.floor(e*10)&1?t+n:t-n}return Math.min(t,this.max)|0};bo.prototype.reset=function(){this.attempts=0};bo.prototype.setMin=function(t){this.ms=t};bo.prototype.setMax=function(t){this.max=t};bo.prototype.setJitter=function(t){this.jitter=t};class Yf extends Wt{constructor(e,n){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Su(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((i=n.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new bo({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const r=n.parser||_1;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new s1(this.uri,this.opts);const n=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=fi(n,"open",function(){i.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=fi(n,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{r(),s(new Error("timeout")),n.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(r),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(fi(e,"ping",this.onping.bind(this)),fi(e,"data",this.ondata.bind(this)),fi(e,"error",this.onerror.bind(this)),fi(e,"close",this.onclose.bind(this)),fi(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){yu(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new iy(this,e,n),this.nsps[e]=i),i}_destroy(e){const n=Object.keys(this.nsps);for(const i of n)if(this.nsps[i].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let i=0;i<n.length;i++)this.engine.write(n[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},n);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Oo={};function sc(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=o1(t,e.path||"/socket.io"),i=n.source,r=n.id,s=n.path,o=Oo[r]&&s in Oo[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new Yf(i,e):(Oo[r]||(Oo[r]=new Yf(i,e)),l=Oo[r]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(sc,{Manager:Yf,Socket:iy,io:sc,connect:sc});class x1{constructor(){this.socket=null,this.listeners=new Map,this.reconnectAttempts=0,this.MAX_RECONNECTS=5}connect(e){if(this.socket&&this.socket.connected)return this;const n=e||void 0||"https://cipher-royale-1.onrender.com";return console.log("🔌 [SocketService] Connecting to:",n),this.socket=sc(n,{reconnection:!0,reconnectionAttempts:this.MAX_RECONNECTS,reconnectionDelay:1e3,reconnectionDelayMax:5e3,randomizationFactor:.5,transports:["websocket","polling"]}),this.socket.on("connect",()=>{console.log("✅ [Socket] Connected:",this.socket.id),this.reconnectAttempts=0,window.dispatchEvent(new Event("socket_connected"))}),this.socket.on("disconnect",i=>{console.warn("⚠️ [Socket] Disconnected:",i),window.dispatchEvent(new CustomEvent("socket_disconnected",{detail:{reason:i}}))}),this.socket.on("connect_error",i=>{console.error("🚨 [Socket] Connection Error:",i.message),this.reconnectAttempts++,this.reconnectAttempts>=this.MAX_RECONNECTS&&window.dispatchEvent(new Event("socket_failed_terminal"))}),this.socket.on("rate_limited",i=>{console.warn(`[RateLimit] Blocked on ${i.event}. Wait ${i.retryAfterMs}ms`),window.dispatchEvent(new CustomEvent("rate_limited",{detail:i}))}),this}emit(e,n){this.socket&&this.socket.connected?this.socket.emit(e,n):console.warn(`[Socket] Cannot emit '${e}' — disconnected.`)}on(e,n){this.socket&&(this.socket.on(e,n),this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(n))}off(e){this.socket&&(this.socket.off(e),this.listeners.delete(e))}cleanup(){this.socket&&(this.listeners.forEach((e,n)=>this.socket.off(n)),this.listeners.clear())}disconnect(){this.cleanup(),this.socket&&(this.socket.disconnect(),this.socket=null)}get connected(){return this.socket&&this.socket.connected}get id(){return this.socket?this.socket.id:null}}const Je=new x1;function y1(){const[t,e]=ie.useState(""),[n,i]=ie.useState(""),[r,s]=ie.useState("idle"),[o,a]=ie.useState(""),[l,c]=ie.useState(null),[f,p]=ie.useState(null),h=Hp(),m=ie.useRef(null),_=ie.useRef(null);ie.useEffect(()=>(Je.connect(),Je.on("room_ready",d=>{s("ready"),a(`${d.playerA} vs ${d.playerB}`);const v={...window.__cipherClash,opponentName:d.playerA===t?d.playerB:d.playerA,playerAName:d.playerA,playerBName:d.playerB};window.__cipherClash=v,localStorage.setItem("cipherClash_room",JSON.stringify(v));let S=3;c(S),m.current=setInterval(()=>{S--,S<=0?(clearInterval(m.current),c(null),h("/game")):c(S)},1e3)}),Je.on("room_created",d=>{_.current&&clearTimeout(_.current),s("waiting"),a("Room created! Waiting for opponent..."),i(d.roomCode),p(S=>({...S,roomCode:d.roomCode}));const v=t.trim().slice(0,16).replace(/[^a-zA-Z0-9_]/g,"");Je.emit("join_room",{roomCode:d.roomCode,playerName:v})}),Je.on("error",d=>{_.current&&clearTimeout(_.current),s("error"),a(d.message||"Server error")}),Je.on("join_result",d=>{if(_.current&&clearTimeout(_.current),d.success){s("waiting"),a("Waiting for opponent..."),p({roomCode:d.roomCode,playerIndex:d.playerIndex,playerName:t});const v=d.playerIndex===0?"playerA":"playerB",S={roomCode:d.roomCode,playerIndex:d.playerIndex,playerRole:v,playerName:t};window.__cipherClash=S,localStorage.setItem("cipherClash_room",JSON.stringify(S))}else s("error"),a(d.error||"Failed to join")}),()=>{Je.off("join_result"),Je.off("room_ready"),Je.off("room_created"),Je.off("error"),m.current&&clearInterval(m.current)}),[t]);const x=()=>{if(!t.trim()||!n.trim())return;const d=t.trim().slice(0,16).replace(/[^a-zA-Z0-9_]/g,""),v=n.trim().toUpperCase().slice(0,6);s("joining"),a("Connecting..."),_.current=setTimeout(()=>{r==="joining"&&(s("error"),a("Join timeout. Check room code."))},8e3),Je.emit("join_room",{roomCode:v,playerName:d})},g=()=>{if(!t.trim())return;const d=t.trim().slice(0,16).replace(/[^a-zA-Z0-9_]/g,"");s("joining"),a("Starting Demo Mode..."),_.current=setTimeout(()=>{s(v=>v==="joining"?(a("Server timeout. Please restart your server to apply changes."),"error"):v)},8e3),Je.emit("start_demo_mode",{playerName:d})},u=d=>{d.key==="Enter"&&x()};return G.jsxs("div",{className:"lobby-container",children:[G.jsx("h1",{className:"lobby-title",children:"CIPHER CLASH"}),G.jsx("p",{className:"lobby-subtitle",children:"Tower Defense × Quiz Battle"}),l!==null&&G.jsx("div",{className:"countdown-overlay",children:G.jsx("div",{className:"countdown-number",children:l},l)}),G.jsxs("div",{className:"lobby-card",children:[G.jsx("h2",{children:"⚔️ ENTER THE ARENA"}),G.jsxs("div",{className:"input-group",children:[G.jsx("label",{children:"Player Name"}),G.jsx("input",{type:"text",placeholder:"Enter your name...",value:t,onChange:d=>e(d.target.value),maxLength:16,disabled:r==="waiting"||r==="ready"})]}),G.jsxs("div",{className:"input-group",children:[G.jsx("label",{children:"Room Code"}),G.jsx("input",{type:"text",placeholder:"6-character code",value:n,onChange:d=>i(d.target.value.toUpperCase()),onKeyDown:u,maxLength:6,disabled:r==="waiting"||r==="ready",style:{textTransform:"uppercase",letterSpacing:"0.15em",fontFamily:"var(--font-display)"}})]}),G.jsxs("div",{style:{display:"flex",gap:"10px"},children:[G.jsx("button",{className:"btn-primary",onClick:x,disabled:!t.trim()||!n.trim()||r==="joining"||r==="waiting"||r==="ready",children:r==="joining"?"...":"Join Room"}),G.jsx("button",{className:"btn-primary",onClick:g,disabled:!t.trim()||r==="joining"||r==="waiting"||r==="ready",style:{background:"linear-gradient(135deg, #10b981, #059669)"},children:r==="joining"?"...":"Demo Mode"})]}),o&&G.jsxs("div",{className:`lobby-status ${r}`,children:[o,f&&r==="waiting"&&G.jsx("div",{className:"lobby-room-code",children:f.roomCode})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yp="184",ro={ROTATE:0,DOLLY:1,PAN:2},Zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},S1=0,Z0=1,M1=2,fa=1,E1=2,ta=3,Or=0,Ln=1,Sn=2,Ii=0,so=1,Bn=2,Q0=3,J0=4,w1=5,$r=100,T1=101,b1=102,A1=103,C1=104,R1=200,P1=201,D1=202,L1=203,$f=204,Kf=205,N1=206,I1=207,U1=208,O1=209,F1=210,k1=211,B1=212,z1=213,V1=214,Zf=0,Qf=1,Jf=2,mo=3,ed=4,td=5,nd=6,id=7,$p=0,H1=1,G1=2,Ui=0,ry=1,sy=2,oy=3,Kp=4,ay=5,ly=6,cy=7,uy=300,us=301,go=302,ah=303,lh=304,Mu=306,rd=1e3,Yi=1001,sd=1002,on=1003,W1=1004,dl=1005,mn=1006,ch=1007,es=1008,zn=1009,hy=1010,fy=1011,Ia=1012,Zp=1013,Fi=1014,mi=1015,Wn=1016,Qp=1017,Jp=1018,Ua=1020,dy=35902,py=35899,my=1021,gy=1022,gi=1023,nr=1026,ts=1027,em=1028,tm=1029,hs=1030,nm=1031,im=1033,oc=33776,ac=33777,lc=33778,cc=33779,od=35840,ad=35841,ld=35842,cd=35843,ud=36196,hd=37492,fd=37496,dd=37488,pd=37489,zc=37490,md=37491,gd=37808,_d=37809,vd=37810,xd=37811,yd=37812,Sd=37813,Md=37814,Ed=37815,wd=37816,Td=37817,bd=37818,Ad=37819,Cd=37820,Rd=37821,Pd=36492,Dd=36494,Ld=36495,Nd=36283,Id=36284,Vc=36285,Ud=36286,X1=3200,Hc=0,j1=1,yr="",kn="srgb",Gc="srgb-linear",Wc="linear",ft="srgb",xs=7680,eg=519,q1=512,Y1=513,$1=514,rm=515,K1=516,Z1=517,sm=518,Q1=519,Od=35044,tg="300 es",Ri=2e3,Oa=2001;function J1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eT(){const t=Xc("canvas");return t.style.display="block",t}const ng={};function jc(...t){const e="THREE."+t.shift();console.log(e,...t)}function _y(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=_y(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=_y(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Fd(...t){const e=t.join(" ");e in ng||(ng[e]=!0,Oe(...t))}function tT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const nT={[Zf]:Qf,[Jf]:nd,[ed]:id,[mo]:td,[Qf]:Zf,[nd]:Jf,[id]:ed,[td]:mo};class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ig=1234567;const da=Math.PI/180,Fa=180/Math.PI;function Ki(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[t&255]+fn[t>>8&255]+fn[t>>16&255]+fn[t>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function om(t,e){return(t%e+e)%e}function iT(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function rT(t,e,n){return t!==e?(n-t)/(e-t):0}function pa(t,e,n){return(1-n)*t+n*e}function sT(t,e,n,i){return pa(t,e,1-Math.exp(-n*i))}function oT(t,e=1){return e-Math.abs(om(t,e*2)-e)}function aT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function lT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function cT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function uT(t,e){return t+Math.random()*(e-t)}function hT(t){return t*(.5-Math.random())}function fT(t){t!==void 0&&(ig=t);let e=ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dT(t){return t*da}function pT(t){return t*Fa}function mT(t){return(t&t-1)===0&&t!==0}function gT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function _T(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vT(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),p=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*p,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*p,a*c);break;case"ZXZ":t.set(l*p,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*_,l*m,a*c);break;case"YXY":t.set(l*m,a*f,l*_,a*c);break;case"ZYZ":t.set(l*_,l*m,a*f,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const kd={DEG2RAD:da,RAD2DEG:Fa,generateUUID:Ki,clamp:Qe,euclideanModulo:om,mapLinear:iT,inverseLerp:rT,lerp:pa,damp:sT,pingpong:oT,smoothstep:aT,smootherstep:lT,randInt:cT,randFloat:uT,randFloatSpread:hT,seededRandom:fT,degToRad:dT,radToDeg:pT,isPowerOfTwo:mT,ceilPowerOfTwo:gT,floorPowerOfTwo:_T,setQuaternionFromProperEuler:vT,normalize:dt,denormalize:pi},mm=class mm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mm.prototype.isVector2=!0;let Ee=mm;class Fr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3],h=s[o+0],m=s[o+1],_=s[o+2],x=s[o+3];if(p!==x||l!==h||c!==m||f!==_){let g=l*h+c*m+f*_+p*x;g<0&&(h=-h,m=-m,_=-_,x=-x,g=-g);let u=1-a;if(g<.9995){const d=Math.acos(g),v=Math.sin(d);u=Math.sin(u*d)/v,a=Math.sin(a*d)/v,l=l*u+h*a,c=c*u+m*a,f=f*u+_*a,p=p*u+x*a}else{l=l*u+h*a,c=c*u+m*a,f=f*u+_*a,p=p*u+x*a;const d=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=d,c*=d,f*=d,p*=d}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*p+l*m-c*h,e[n+1]=l*_+f*h+c*p-a*m,e[n+2]=c*_+f*m+a*h-l*p,e[n+3]=f*_-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),p=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*p+c*m*_,this._y=c*m*p-h*f*_,this._z=c*f*_+h*m*p,this._w=c*f*p-h*m*_;break;case"YXZ":this._x=h*f*p+c*m*_,this._y=c*m*p-h*f*_,this._z=c*f*_-h*m*p,this._w=c*f*p+h*m*_;break;case"ZXY":this._x=h*f*p-c*m*_,this._y=c*m*p+h*f*_,this._z=c*f*_+h*m*p,this._w=c*f*p-h*m*_;break;case"ZYX":this._x=h*f*p-c*m*_,this._y=c*m*p+h*f*_,this._z=c*f*_-h*m*p,this._w=c*f*p+h*m*_;break;case"YZX":this._x=h*f*p+c*m*_,this._y=c*m*p+h*f*_,this._z=c*f*_-h*m*p,this._w=c*f*p-h*m*_;break;case"XZY":this._x=h*f*p-c*m*_,this._y=c*m*p-h*f*_,this._z=c*f*_+h*m*p,this._w=c*f*p+h*m*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],p=n[10],h=i+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gm=class gm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(rg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*f,this.y=i+l*f+a*c-s*p,this.z=r+l*p+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gm.prototype.isVector3=!0;let D=gm;const uh=new D,rg=new Fr,_m=class _m{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],p=i[7],h=i[2],m=i[5],_=i[8],x=r[0],g=r[3],u=r[6],d=r[1],v=r[4],S=r[7],T=r[2],w=r[5],C=r[8];return s[0]=o*x+a*d+l*T,s[3]=o*g+a*v+l*w,s[6]=o*u+a*S+l*C,s[1]=c*x+f*d+p*T,s[4]=c*g+f*v+p*w,s[7]=c*u+f*S+p*C,s[2]=h*x+m*d+_*T,s[5]=h*g+m*v+_*w,s[8]=h*u+m*S+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=f*o-a*c,h=a*l-f*s,m=c*s-o*l,_=n*p+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=p*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hh.makeScale(e,n)),this}rotate(e){return this.premultiply(hh.makeRotation(-e)),this}translate(e,n){return this.premultiply(hh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_m.prototype.isMatrix3=!0;let He=_m;const hh=new He,sg=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),og=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xT(){const t={enabled:!0,workingColorSpace:Gc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(r.r=oo(r.r),r.g=oo(r.g),r.b=oo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Wc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Gc]:{primaries:e,whitePoint:i,transfer:Wc,toXYZ:sg,fromXYZ:og,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:sg,fromXYZ:og,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const rt=xT();function Zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function oo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ys;class yT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ys===void 0&&(ys=Xc("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ys}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ST=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fh(r[o].image)):s.push(fh(r[o]))}else s=fh(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?yT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let MT=0;const dh=new D;class gn extends Vr{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=Yi,r=Yi,s=mn,o=es,a=gi,l=zn,c=gn.DEFAULT_ANISOTROPY,f=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=Ki(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=uy;gn.DEFAULT_ANISOTROPY=1;const vm=class vm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],h=l[1],m=l[5],_=l[9],x=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(p-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(m+1)/2,T=(u+1)/2,w=(f+h)/4,C=(p+x)/4,y=(_+g)/4;return v>S&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=C/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=y/s),this.set(i,r,s,n),this}let d=Math.sqrt((g-_)*(g-_)+(p-x)*(p-x)+(h-f)*(h-f));return Math.abs(d)<.001&&(d=1),this.x=(g-_)/d,this.y=(p-x)/d,this.z=(h-f)/d,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vm.prototype.isVector4=!0;let Ot=vm;class ET extends Vr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new gn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new am(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends ET{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vy extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wT extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,n,i,r,s,o,a,l,c,f,p,h,m,_,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,p,h,m,_,x,g)}set(e,n,i,r,s,o,a,l,c,f,p,h,m,_,x,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=p,u[14]=h,u[3]=m,u[7]=_,u[11]=x,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*p,_=a*f,x=a*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+_*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*p,_=c*f,x=c*p;n[0]=h+x*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*p,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*p,_=c*f,x=c*p;n[0]=h-x*a,n[4]=-o*p,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*p,_=a*f,x=a*p;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+x,n[1]=l*p,n[5]=x*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*f,n[4]=x-h*p,n[8]=_*p+m,n[1]=p,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*p+_,n[10]=h-x*p}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,x=a*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=h*p+x,n[5]=o*f,n[9]=m*p-_,n[2]=_*p-m,n[6]=a*f,n[10]=x*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TT,e,bT)}lookAt(e,n,i){const r=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),cr.crossVectors(i,Un),cr.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),cr.crossVectors(i,Un)),cr.normalize(),pl.crossVectors(Un,cr),r[0]=cr.x,r[4]=pl.x,r[8]=Un.x,r[1]=cr.y,r[5]=pl.y,r[9]=Un.y,r[2]=cr.z,r[6]=pl.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],p=i[5],h=i[9],m=i[13],_=i[2],x=i[6],g=i[10],u=i[14],d=i[3],v=i[7],S=i[11],T=i[15],w=r[0],C=r[4],y=r[8],A=r[12],R=r[1],P=r[5],I=r[9],W=r[13],Y=r[2],U=r[6],z=r[10],k=r[14],B=r[3],q=r[7],J=r[11],ae=r[15];return s[0]=o*w+a*R+l*Y+c*B,s[4]=o*C+a*P+l*U+c*q,s[8]=o*y+a*I+l*z+c*J,s[12]=o*A+a*W+l*k+c*ae,s[1]=f*w+p*R+h*Y+m*B,s[5]=f*C+p*P+h*U+m*q,s[9]=f*y+p*I+h*z+m*J,s[13]=f*A+p*W+h*k+m*ae,s[2]=_*w+x*R+g*Y+u*B,s[6]=_*C+x*P+g*U+u*q,s[10]=_*y+x*I+g*z+u*J,s[14]=_*A+x*W+g*k+u*ae,s[3]=d*w+v*R+S*Y+T*B,s[7]=d*C+v*P+S*U+T*q,s[11]=d*y+v*I+S*z+T*J,s[15]=d*A+v*W+S*k+T*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],p=e[6],h=e[10],m=e[14],_=e[3],x=e[7],g=e[11],u=e[15],d=l*m-c*h,v=a*m-c*p,S=a*h-l*p,T=o*m-c*f,w=o*h-l*f,C=o*p-a*f;return n*(x*d-g*v+u*S)-i*(_*d-g*T+u*w)+r*(_*v-x*T+u*C)-s*(_*S-x*w+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],p=e[9],h=e[10],m=e[11],_=e[12],x=e[13],g=e[14],u=e[15],d=n*a-i*o,v=n*l-r*o,S=n*c-s*o,T=i*l-r*a,w=i*c-s*a,C=r*c-s*l,y=f*x-p*_,A=f*g-h*_,R=f*u-m*_,P=p*g-h*x,I=p*u-m*x,W=h*u-m*g,Y=d*W-v*I+S*P+T*R-w*A+C*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/Y;return e[0]=(a*W-l*I+c*P)*U,e[1]=(r*I-i*W-s*P)*U,e[2]=(x*C-g*w+u*T)*U,e[3]=(h*w-p*C-m*T)*U,e[4]=(l*R-o*W-c*A)*U,e[5]=(n*W-r*R+s*A)*U,e[6]=(g*S-_*C-u*v)*U,e[7]=(f*C-h*S+m*v)*U,e[8]=(o*I-a*R+c*y)*U,e[9]=(i*R-n*I-s*y)*U,e[10]=(_*w-x*S+u*d)*U,e[11]=(p*S-f*w-m*d)*U,e[12]=(a*A-o*P-l*y)*U,e[13]=(n*P-i*A+r*y)*U,e[14]=(x*v-_*T-g*d)*U,e[15]=(f*T-p*v+h*d)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,p=a+a,h=s*c,m=s*f,_=s*p,x=o*f,g=o*p,u=a*p,d=l*c,v=l*f,S=l*p,T=i.x,w=i.y,C=i.z;return r[0]=(1-(x+u))*T,r[1]=(m+S)*T,r[2]=(_-v)*T,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(h+u))*w,r[6]=(g+d)*w,r[7]=0,r[8]=(_+v)*C,r[9]=(g-d)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ss.set(r[0],r[1],r[2]).length();const a=Ss.set(r[4],r[5],r[6]).length(),l=Ss.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ai.copy(this);const c=1/o,f=1/a,p=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=f,ai.elements[5]*=f,ai.elements[6]*=f,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,n.setFromRotationMatrix(ai),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ri,l=!1){const c=this.elements,f=2*s/(n-e),p=2*s/(i-r),h=(n+e)/(n-e),m=(i+r)/(i-r);let _,x;if(l)_=s/(o-s),x=o*s/(o-s);else if(a===Ri)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Oa)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ri,l=!1){const c=this.elements,f=2/(n-e),p=2/(i-r),h=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,x;if(l)_=1/(o-s),x=o/(o-s);else if(a===Ri)_=-2/(o-s),x=-(o+s)/(o-s);else if(a===Oa)_=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Jc.prototype.isMatrix4=!0;let ut=Jc;const Ss=new D,ai=new ut,TT=new D(0,0,0),bT=new D(1,1,1),cr=new D,pl=new D,Un=new D,ag=new ut,lg=new Fr;class yi{constructor(e=0,n=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],p=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ag,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AT=0;const cg=new D,Ms=new Fr,Bi=new ut,ml=new D,Fo=new D,CT=new D,RT=new Fr,ug=new D(1,0,0),hg=new D(0,1,0),fg=new D(0,0,1),dg={type:"added"},PT={type:"removed"},Es={type:"childadded",child:null},ph={type:"childremoved",child:null};class Ft extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new D,n=new yi,i=new Fr,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new He}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(ug,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(fg,e)}translateOnAxis(e,n){return cg.copy(e).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ug,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ml.copy(e):ml.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Fo,ml,this.up):Bi.lookAt(ml,Fo,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dg),Es.child=e,this.dispatchEvent(Es),Es.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(PT),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dg),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,CT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,RT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new D(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nt extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DT={type:"move"};class mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),u=this._getHandJoint(c,x);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},gl={h:0,s:0,l:0};function gh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=om(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gh(o,s,e+1/3),this.g=gh(o,s,e),this.b=gh(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=xy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return rt.workingToColorSpace(dn.copy(this),e),Math.round(Qe(dn.r*255,0,255))*65536+Math.round(Qe(dn.g*255,0,255))*256+Math.round(Qe(dn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(dn.copy(this),n);const i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=f<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=kn){rt.workingToColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,r=dn.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(gl);const i=pa(ur.h,gl.h,n),r=pa(ur.s,gl.s,n),s=pa(ur.l,gl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Be;Be.NAMES=xy;class cm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=n}clone(){return new cm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class LT extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const li=new D,zi=new D,_h=new D,Vi=new D,ws=new D,Ts=new D,pg=new D,vh=new D,xh=new D,yh=new D,Sh=new Ot,Mh=new Ot,Eh=new Ot;class ei{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),li.subVectors(e,n),r.cross(li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){li.subVectors(r,n),zi.subVectors(i,n),_h.subVectors(e,n);const o=li.dot(li),a=li.dot(zi),l=li.dot(_h),c=zi.dot(zi),f=zi.dot(_h),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Sh.setScalar(0),Mh.setScalar(0),Eh.setScalar(0),Sh.fromBufferAttribute(e,n),Mh.fromBufferAttribute(e,i),Eh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sh,s.x),o.addScaledVector(Mh,s.y),o.addScaledVector(Eh,s.z),o}static isFrontFacing(e,n,i,r){return li.subVectors(i,n),zi.subVectors(e,n),li.cross(zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),li.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,i),Ts.subVectors(s,i),vh.subVectors(e,i);const l=ws.dot(vh),c=Ts.dot(vh);if(l<=0&&c<=0)return n.copy(i);xh.subVectors(e,r);const f=ws.dot(xh),p=Ts.dot(xh);if(f>=0&&p<=f)return n.copy(r);const h=l*p-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ws,o);yh.subVectors(e,s);const m=ws.dot(yh),_=Ts.dot(yh);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ts,a);const g=f*_-m*p;if(g<=0&&p-f>=0&&m-_>=0)return pg.subVectors(s,r),a=(p-f)/(p-f+(m-_)),n.copy(r).addScaledVector(pg,a);const u=1/(g+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ps{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(s,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),vl.subVectors(this.max,ko),bs.subVectors(e.a,ko),As.subVectors(e.b,ko),Cs.subVectors(e.c,ko),hr.subVectors(As,bs),fr.subVectors(Cs,As),Gr.subVectors(bs,Cs);let n=[0,-hr.z,hr.y,0,-fr.z,fr.y,0,-Gr.z,Gr.y,hr.z,0,-hr.x,fr.z,0,-fr.x,Gr.z,0,-Gr.x,-hr.y,hr.x,0,-fr.y,fr.x,0,-Gr.y,Gr.x,0];return!wh(n,bs,As,Cs,vl)||(n=[1,0,0,0,1,0,0,0,1],!wh(n,bs,As,Cs,vl))?!1:(xl.crossVectors(hr,fr),n=[xl.x,xl.y,xl.z],wh(n,bs,As,Cs,vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hi=[new D,new D,new D,new D,new D,new D,new D,new D],ci=new D,_l=new ps,bs=new D,As=new D,Cs=new D,hr=new D,fr=new D,Gr=new D,ko=new D,vl=new D,xl=new D,Wr=new D;function wh(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wr.fromArray(t,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),c=n.dot(Wr),f=i.dot(Wr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Ht=new D,yl=new Ee;let NT=0;class En extends Vr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Od,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pi(n,this.array)),n}setX(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pi(n,this.array)),n}setY(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pi(n,this.array)),n}setW(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class yy extends En{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sy extends En{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ht extends En{constructor(e,n,i){super(new Float32Array(e),n,i)}}const IT=new ps,Bo=new D,Th=new D;class ms{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):IT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Th)),this.expandByPoint(Bo.copy(e.center).sub(Th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let UT=0;const $n=new ut,bh=new Ft,Rs=new D,On=new ps,zo=new ps,Zt=new D;class Ct extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J1(e)?Sy:yy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,i){return $n.makeTranslation(e,n,i),this.applyMatrix4($n),this}scale(e,n,i){return $n.makeScale(e,n,i),this.applyMatrix4($n),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(On.min,zo.min),On.expandByPoint(Zt),Zt.addVectors(On.max,zo.max),On.expandByPoint(Zt)):(On.expandByPoint(zo.min),On.expandByPoint(zo.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Zt.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(e,c),Zt.add(Rs)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new D,l[y]=new D;const c=new D,f=new D,p=new D,h=new Ee,m=new Ee,_=new Ee,x=new D,g=new D;function u(y,A,R){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),h.fromBufferAttribute(s,y),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,R),f.sub(c),p.sub(c),m.sub(h),_.sub(h);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(P),g.copy(p).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(P),a[y].add(x),a[A].add(x),a[R].add(x),l[y].add(g),l[A].add(g),l[R].add(g))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let y=0,A=d.length;y<A;++y){const R=d[y],P=R.start,I=R.count;for(let W=P,Y=P+I;W<Y;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new D,S=new D,T=new D,w=new D;function C(y){T.fromBufferAttribute(r,y),w.copy(T);const A=a[y];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(w,A);const P=S.dot(l[y])<0?-1:1;o.setXYZW(y,v.x,v.y,v.z,P)}for(let y=0,A=d.length;y<A;++y){const R=d[y],P=R.start,I=R.count;for(let W=P,Y=P+I;W<Y;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,f=new D,p=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Zt.fromBufferAttribute(e,n),Zt.normalize(),e.setXYZ(n,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,p=a.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let u=0;u<f;u++)h[_++]=c[m++]}return new En(h,f,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ct,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,p=c.length;f<p;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class OT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Od,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new D;class qc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=pi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=pi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=pi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=pi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){jc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new En(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){jc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let FT=0;class rr extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=so,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Kf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$f&&(i.blendSrc=this.blendSrc),this.blendDst!==Kf&&(i.blendDst=this.blendDst),this.blendEquation!==$r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yc extends rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ps;const Vo=new D,Ds=new D,Ls=new D,Ns=new Ee,Ho=new Ee,My=new ut,Sl=new D,Go=new D,Ml=new D,mg=new Ee,Ah=new Ee,gg=new Ee;class Bd extends Ft{constructor(e=new Yc){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new Ct;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new OT(n,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new qc(i,3,0,!1)),Ps.setAttribute("uv",new qc(i,2,3,!1))}this.geometry=Ps,this.material=e,this.center=new Ee(.5,.5),this.count=1}raycast(e,n){e.camera===null&&it('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),My.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Ls.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;El(Sl.set(-.5,-.5,0),Ls,o,Ds,r,s),El(Go.set(.5,-.5,0),Ls,o,Ds,r,s),El(Ml.set(.5,.5,0),Ls,o,Ds,r,s),mg.set(0,0),Ah.set(1,0),gg.set(1,1);let a=e.ray.intersectTriangle(Sl,Go,Ml,!1,Vo);if(a===null&&(El(Go.set(-.5,.5,0),Ls,o,Ds,r,s),Ah.set(0,1),a=e.ray.intersectTriangle(Sl,Ml,Go,!1,Vo),a===null))return;const l=e.ray.origin.distanceTo(Vo);l<e.near||l>e.far||n.push({distance:l,point:Vo.clone(),uv:ei.getInterpolation(Vo,Sl,Go,Ml,mg,Ah,gg,new Ee),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function El(t,e,n,i,r,s){Ns.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ho.x=s*Ns.x-r*Ns.y,Ho.y=r*Ns.x+s*Ns.y):Ho.copy(Ns),t.copy(e),t.x+=Ho.x,t.y+=Ho.y,t.applyMatrix4(My)}const Gi=new D,Ch=new D,wl=new D,dr=new D,Rh=new D,Tl=new D,Ph=new D;class Ga{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,n),Gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ch.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Ch);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wl),a=dr.dot(this.direction),l=-dr.dot(wl),c=dr.lengthSq(),f=Math.abs(1-o*o);let p,h,m,_;if(f>0)if(p=o*l-a,h=o*a-l,_=s*f,p>=0)if(h>=-_)if(h<=_){const x=1/f;p*=x,h*=x,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-_?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=_?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Ch).addScaledVector(wl,h),m}intersectSphere(e,n){Gi.subVectors(e.center,this.origin);const i=Gi.dot(this.direction),r=Gi.dot(Gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,n,i,r,s){Rh.subVectors(n,e),Tl.subVectors(i,e),Ph.crossVectors(Rh,Tl);let o=this.direction.dot(Ph),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dr.subVectors(this.origin,e);const l=a*this.direction.dot(Tl.crossVectors(dr,Tl));if(l<0)return null;const c=a*this.direction.dot(Rh.cross(dr));if(c<0||l+c>o)return null;const f=-a*dr.dot(Ph);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _g=new ut,Xr=new Ga,bl=new ms,vg=new D,Al=new D,Cl=new D,Rl=new D,Dh=new D,Pl=new D,xg=new D,Dl=new D;class pe extends Ft{constructor(e=new Ct,n=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],p=s[l];f!==0&&(Dh.fromBufferAttribute(p,e),o?Pl.addScaledVector(Dh,f):Pl.addScaledVector(Dh.sub(n),f))}n.add(Pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(bl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(bl,vg)===null||Xr.origin.distanceToSquared(vg)>(e.far-e.near)**2))&&(_g.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(_g),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const g=h[_],u=o[g.materialIndex],d=Math.max(g.start,m.start),v=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=d,T=v;S<T;S+=3){const w=a.getX(S),C=a.getX(S+1),y=a.getX(S+2);r=Ll(this,u,e,i,c,f,p,w,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let g=_,u=x;g<u;g+=3){const d=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=Ll(this,o,e,i,c,f,p,d,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const g=h[_],u=o[g.materialIndex],d=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=d,T=v;S<T;S+=3){const w=S,C=S+1,y=S+2;r=Ll(this,u,e,i,c,f,p,w,C,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=_,u=x;g<u;g+=3){const d=g,v=g+1,S=g+2;r=Ll(this,o,e,i,c,f,p,d,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function kT(t,e,n,i,r,s,o,a){let l;if(e.side===Ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Dl);return c<n.near||c>n.far?null:{distance:c,point:Dl.clone(),object:t}}function Ll(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Al),t.getVertexPosition(l,Cl),t.getVertexPosition(c,Rl);const f=kT(t,e,n,i,Al,Cl,Rl,xg);if(f){const p=new D;ei.getBarycoord(xg,Al,Cl,Rl,p),r&&(f.uv=ei.getInterpolatedAttribute(r,a,l,c,p,new Ee)),s&&(f.uv1=ei.getInterpolatedAttribute(s,a,l,c,p,new Ee)),o&&(f.normal=ei.getInterpolatedAttribute(o,a,l,c,p,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};ei.getNormal(Al,Cl,Rl,h.normal),f.face=h,f.barycoord=p}return f}class Ey extends gn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=on,f=on,p,h){super(null,o,a,l,c,f,r,s,p,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yg extends En{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Is=new ut,Sg=new ut,Nl=[],Mg=new ps,BT=new ut,Wo=new pe,Xo=new ms;class zT extends pe{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new yg(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,BT)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ps),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Is),Mg.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Mg)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Is),Xo.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Xo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),e.ray.intersectsSphere(Xo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Is),Sg.multiplyMatrices(i,Is),Wo.matrixWorld=Sg,Wo.raycast(e,Nl);for(let o=0,a=Nl.length;o<a;o++){const l=Nl[o];l.instanceId=s,l.object=this,n.push(l)}Nl.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new yg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ey(new Float32Array(r*this.count),r,this.count,em,mi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Lh=new D,VT=new D,HT=new He;class _r{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lh.subVectors(i,n).cross(VT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Lh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HT.getNormalMatrix(e),r=this.coplanarPoint(Lh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new ms,GT=new Ee(.5,.5),Il=new D;class um{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],p=s[5],h=s[6],m=s[7],_=s[8],x=s[9],g=s[10],u=s[11],d=s[12],v=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-o,m-f,u-_,T-d).normalize(),r[1].setComponents(c+o,m+f,u+_,T+d).normalize(),r[2].setComponents(c+a,m+p,u+x,T+v).normalize(),r[3].setComponents(c-a,m-p,u-x,T-v).normalize(),i)r[4].setComponents(l,h,g,S).normalize(),r[5].setComponents(c-l,m-h,u-g,T-S).normalize();else if(r[4].setComponents(c-l,m-h,u-g,T-S).normalize(),n===Ri)r[5].setComponents(c+l,m+h,u+g,T+S).normalize();else if(n===Oa)r[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const n=GT.distanceTo(e.center);return jr.radius=.7071067811865476+n,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Il.x=r.normal.x>0?e.max.x:e.min.x,Il.y=r.normal.y>0?e.max.y:e.min.y,Il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zd extends rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new D,Kc=new D,Eg=new ut,jo=new Ga,Ul=new ms,Nh=new D,wg=new D;class Tg extends Ft{constructor(e=new Ct,n=new zd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)$c.fromBufferAttribute(n,r-1),Kc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=$c.distanceTo(Kc);e.setAttribute("lineDistance",new ht(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(r),Ul.radius+=s,e.ray.intersectsSphere(Ul)===!1)return;Eg.copy(r).invert(),jo.copy(e.ray).applyMatrix4(Eg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=m,g=_-1;x<g;x+=c){const u=f.getX(x),d=f.getX(x+1),v=Ol(this,e,jo,l,u,d,x);v&&n.push(v)}if(this.isLineLoop){const x=f.getX(_-1),g=f.getX(m),u=Ol(this,e,jo,l,x,g,_-1);u&&n.push(u)}}else{const m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=m,g=_-1;x<g;x+=c){const u=Ol(this,e,jo,l,x,x+1,x);u&&n.push(u)}if(this.isLineLoop){const x=Ol(this,e,jo,l,_-1,m,_-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ol(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if($c.fromBufferAttribute(a,r),Kc.fromBufferAttribute(a,s),n.distanceSqToSegment($c,Kc,Nh,wg)>i)return;Nh.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Nh);if(!(c<e.near||c>e.far))return{distance:c,point:wg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class uc extends rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bg=new ut,Vd=new Ga,Fl=new ms,kl=new D;class Ih extends Ft{constructor(e=new Ct,n=new uc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;bg.copy(r).invert(),Vd.copy(e.ray).applyMatrix4(bg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=h,x=m;_<x;_++){const g=c.getX(_);kl.fromBufferAttribute(p,g),Ag(kl,g,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let _=h,x=m;_<x;_++)kl.fromBufferAttribute(p,_),Ag(kl,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ag(t,e,n,i,r,s,o){const a=Vd.distanceSqToPoint(t);if(a<n){const l=new D;Vd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wy extends gn{constructor(e=[],n=us,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hd extends gn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends gn{constructor(e,n,i=Fi,r,s,o,a=on,l=on,c,f=nr,p=1){if(f!==nr&&f!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:p};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new am(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class WT extends _o{constructor(e,n=Fi,i=us,r,s,o=on,a=on,l,c=nr){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ty extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sn extends Ct{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],p=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(p,2));function _(x,g,u,d,v,S,T,w,C,y,A){const R=S/C,P=T/y,I=S/2,W=T/2,Y=w/2,U=C+1,z=y+1;let k=0,B=0;const q=new D;for(let J=0;J<z;J++){const ae=J*P-W;for(let ge=0;ge<U;ge++){const Xe=ge*R-I;q[x]=Xe*d,q[g]=ae*v,q[u]=Y,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[u]=w>0?1:-1,f.push(q.x,q.y,q.z),p.push(ge/C),p.push(1-J/y),k+=1}}for(let J=0;J<y;J++)for(let ae=0;ae<C;ae++){const ge=h+ae+U*J,Xe=h+ae+U*(J+1),$e=h+(ae+1)+U*(J+1),Fe=h+(ae+1)+U*J;l.push(ge,Xe,Fe),l.push(Xe,$e,Fe),B+=6}a.addGroup(m,B,A),m+=B,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hm extends Ct{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new D,f=new Ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=n;p++,h+=3){const m=i+p/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/e+1)/2,f.y=(o[h+1]/e+1)/2,l.push(f.x,f.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hm(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jt extends Ct{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],h=[],m=[];let _=0;const x=[],g=i/2;let u=0;d(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(m,2));function d(){const S=new D,T=new D;let w=0;const C=(n-e)/i;for(let y=0;y<=s;y++){const A=[],R=y/s,P=R*(n-e)+e;for(let I=0;I<=r;I++){const W=I/r,Y=W*l+a,U=Math.sin(Y),z=Math.cos(Y);T.x=P*U,T.y=-R*i+g,T.z=P*z,p.push(T.x,T.y,T.z),S.set(U,C,z).normalize(),h.push(S.x,S.y,S.z),m.push(W,1-R),A.push(_++)}x.push(A)}for(let y=0;y<r;y++)for(let A=0;A<s;A++){const R=x[A][y],P=x[A+1][y],I=x[A+1][y+1],W=x[A][y+1];(e>0||A!==0)&&(f.push(R,P,W),w+=3),(n>0||A!==s-1)&&(f.push(P,I,W),w+=3)}c.addGroup(u,w,0),u+=w}function v(S){const T=_,w=new Ee,C=new D;let y=0;const A=S===!0?e:n,R=S===!0?1:-1;for(let I=1;I<=r;I++)p.push(0,g*R,0),h.push(0,R,0),m.push(.5,.5),_++;const P=_;for(let I=0;I<=r;I++){const Y=I/r*l+a,U=Math.cos(Y),z=Math.sin(Y);C.x=A*z,C.y=g*R,C.z=A*U,p.push(C.x,C.y,C.z),h.push(0,R,0),w.x=U*.5+.5,w.y=z*.5*R+.5,m.push(w.x,w.y),_++}for(let I=0;I<r;I++){const W=T+I,Y=P+I;S===!0?f.push(Y,Y+1,W):f.push(Y+1,Y,W),y+=3}c.addGroup(u,y,S===!0?1:2),u+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pi extends Jt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eu extends Ct{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(d){const v=new D,S=new D,T=new D;for(let w=0;w<n.length;w+=3)m(n[w+0],v),m(n[w+1],S),m(n[w+2],T),l(v,S,T,d)}function l(d,v,S,T){const w=T+1,C=[];for(let y=0;y<=w;y++){C[y]=[];const A=d.clone().lerp(S,y/w),R=v.clone().lerp(S,y/w),P=w-y;for(let I=0;I<=P;I++)I===0&&y===w?C[y][I]=A:C[y][I]=A.clone().lerp(R,I/P)}for(let y=0;y<w;y++)for(let A=0;A<2*(w-y)-1;A++){const R=Math.floor(A/2);A%2===0?(h(C[y][R+1]),h(C[y+1][R]),h(C[y][R])):(h(C[y][R+1]),h(C[y+1][R+1]),h(C[y+1][R]))}}function c(d){const v=new D;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(d),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function f(){const d=new D;for(let v=0;v<s.length;v+=3){d.x=s[v+0],d.y=s[v+1],d.z=s[v+2];const S=g(d)/2/Math.PI+.5,T=u(d)/Math.PI+.5;o.push(S,1-T)}_(),p()}function p(){for(let d=0;d<o.length;d+=6){const v=o[d+0],S=o[d+2],T=o[d+4],w=Math.max(v,S,T),C=Math.min(v,S,T);w>.9&&C<.1&&(v<.2&&(o[d+0]+=1),S<.2&&(o[d+2]+=1),T<.2&&(o[d+4]+=1))}}function h(d){s.push(d.x,d.y,d.z)}function m(d,v){const S=d*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const d=new D,v=new D,S=new D,T=new D,w=new Ee,C=new Ee,y=new Ee;for(let A=0,R=0;A<s.length;A+=9,R+=6){d.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),w.set(o[R+0],o[R+1]),C.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),T.copy(d).add(v).add(S).divideScalar(3);const P=g(T);x(w,R+0,d,P),x(C,R+2,v,P),x(y,R+4,S,P)}}function x(d,v,S,T){T<0&&d.x===1&&(o[v]=d.x-1),S.x===0&&S.z===0&&(o[v]=T/2/Math.PI+.5)}function g(d){return Math.atan2(d.z,-d.x)}function u(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.vertices,e.indices,e.radius,e.detail)}}class fm extends Eu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new fm(e.radius,e.detail)}}class Zc extends Eu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zc(e.radius,e.detail)}}class Vn extends Ct{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,p=e/a,h=n/l,m=[],_=[],x=[],g=[];for(let u=0;u<f;u++){const d=u*h-o;for(let v=0;v<c;v++){const S=v*p-s;_.push(S,-d,0),x.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let d=0;d<a;d++){const v=d+c*u,S=d+c*(u+1),T=d+1+c*(u+1),w=d+1+c*u;m.push(v,S,w),m.push(S,T,w)}this.setIndex(m),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.widthSegments,e.heightSegments)}}class dm extends Ct{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let p=e;const h=(n-e)/r,m=new D,_=new Ee;for(let x=0;x<=r;x++){for(let g=0;g<=i;g++){const u=s+g/i*o;m.x=p*Math.cos(u),m.y=p*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/n+1)/2,_.y=(m.y/n+1)/2,f.push(_.x,_.y)}p+=h}for(let x=0;x<r;x++){const g=x*(i+1);for(let u=0;u<i;u++){const d=u+g,v=d,S=d+i+1,T=d+i+2,w=d+1;a.push(v,S,w),a.push(S,T,w)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ti extends Ct{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],p=new D,h=new D,m=[],_=[],x=[],g=[];for(let u=0;u<=i;u++){const d=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let T=0;T<=n;T++){const w=T/n;p.x=-e*Math.cos(r+w*s)*Math.sin(o+v*a),p.y=e*Math.cos(o+v*a),p.z=e*Math.sin(r+w*s)*Math.sin(o+v*a),_.push(p.x,p.y,p.z),h.copy(p).normalize(),x.push(h.x,h.y,h.z),g.push(w+S,1-v),d.push(c++)}f.push(d)}for(let u=0;u<i;u++)for(let d=0;d<n;d++){const v=f[u][d+1],S=f[u][d],T=f[u+1][d],w=f[u+1][d+1];(u!==0||o>0)&&m.push(v,S,w),(u!==i-1||l<Math.PI)&&m.push(S,T,w)}this.setIndex(m),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wu extends Ct{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],p=[],h=new D,m=new D,_=new D;for(let x=0;x<=i;x++){const g=o+x/i*a;for(let u=0;u<=r;u++){const d=u/r*s;m.x=(e+n*Math.cos(g))*Math.cos(d),m.y=(e+n*Math.cos(g))*Math.sin(d),m.z=n*Math.sin(g),c.push(m.x,m.y,m.z),h.x=e*Math.cos(d),h.y=e*Math.sin(d),_.subVectors(m,h).normalize(),f.push(_.x,_.y,_.z),p.push(u/r),p.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=r;g++){const u=(r+1)*x+g-1,d=(r+1)*(x-1)+g-1,v=(r+1)*(x-1)+g,S=(r+1)*x+g;l.push(u,d,S),l.push(d,v,S)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function vo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Cg(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Cg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function xn(t){const e={};for(let n=0;n<t.length;n++){const i=vo(t[n]);for(const r in i)e[r]=i[r]}return e}function Cg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function XT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function by(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Qc={clone:vo,merge:xn};var jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=qT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=XT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class YT extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _t extends rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rg extends rr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=$p,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $T extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KT extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tu extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class ZT extends Tu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Uh=new ut,Pg=new D,Dg=new D;class Ay{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new um,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Pg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pg),Dg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dg),n.updateMatrixWorld(),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Oa||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bl=new D,zl=new Fr,wi=new D;class Cy extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,zl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,wi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Bl,zl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new D,Lg=new Ee,Ng=new Ee;class Jn extends Cy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Lg,Ng),n.subVectors(Ng,Lg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(da*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class QT extends Ay{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ry extends Tu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new QT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Wa extends Cy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class JT extends Ay{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oh extends Tu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new JT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class eb extends Tu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Us=-90,Os=1;class tb extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(Us,Os,e,n);r.layers=this.layers,this.add(r);const s=new Jn(Us,Os,e,n);s.layers=this.layers,this.add(s);const o=new Jn(Us,Os,e,n);o.layers=this.layers,this.add(o);const a=new Jn(Us,Os,e,n);a.layers=this.layers,this.add(a);const l=new Jn(Us,Os,e,n);l.layers=this.layers,this.add(l);const c=new Jn(Us,Os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class nb extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ib{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=rb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function rb(){this._document.hidden===!1&&this.reset()}const Ig=new ut;class sb{constructor(e,n,i=0,r=1/0){this.ray=new Ga(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new lm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):it("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Ig.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ig),this}intersectObject(e,n=!0,i=[]){return Gd(e,this,i,n),i.sort(Ug),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Gd(e[r],this,i,n);return i.sort(Ug),i}}function Ug(t,e){return t.distance-e.distance}function Gd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Gd(s[o],e,n,!0)}}class Og{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xm=class xm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};xm.prototype.isMatrix2=!0;let Fg=xm;class ob extends Vr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kg(t,e,n,i){const r=ab(i);switch(n){case my:return t*e;case em:return t*e/r.components*r.byteLength;case tm:return t*e/r.components*r.byteLength;case hs:return t*e*2/r.components*r.byteLength;case nm:return t*e*2/r.components*r.byteLength;case gy:return t*e*3/r.components*r.byteLength;case gi:return t*e*4/r.components*r.byteLength;case im:return t*e*4/r.components*r.byteLength;case oc:case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ad:case cd:return Math.max(t,16)*Math.max(e,8)/4;case od:case ld:return Math.max(t,8)*Math.max(e,8)/2;case ud:case hd:case dd:case pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fd:case zc:case md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case vd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case wd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pd:case Dd:case Ld:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Nd:case Id:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vc:case Ud:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ab(t){switch(t){case zn:case hy:return{byteLength:1,components:1};case Ia:case fy:case Wn:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case Fi:case Zp:case mi:return{byteLength:4,components:1};case dy:case py:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yp}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Py(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function lb(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,p=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,f);else{p.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<p.length;m++){const _=p[h],x=p[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,p[h]=x)}p.length=h+1;for(let m=0,_=p.length;m<_;m++){const x=p[m];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ub=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_b=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ib=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_A=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,BA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$A=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_C=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:cb,alphahash_pars_fragment:ub,alphamap_fragment:hb,alphamap_pars_fragment:fb,alphatest_fragment:db,alphatest_pars_fragment:pb,aomap_fragment:mb,aomap_pars_fragment:gb,batching_pars_vertex:_b,batching_vertex:vb,begin_vertex:xb,beginnormal_vertex:yb,bsdfs:Sb,iridescence_fragment:Mb,bumpmap_pars_fragment:Eb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Tb,clipping_planes_pars_vertex:bb,clipping_planes_vertex:Ab,color_fragment:Cb,color_pars_fragment:Rb,color_pars_vertex:Pb,color_vertex:Db,common:Lb,cube_uv_reflection_fragment:Nb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Ub,displacementmap_vertex:Ob,emissivemap_fragment:Fb,emissivemap_pars_fragment:kb,colorspace_fragment:Bb,colorspace_pars_fragment:zb,envmap_fragment:Vb,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Gb,envmap_pars_vertex:Wb,envmap_physical_pars_fragment:tA,envmap_vertex:Xb,fog_vertex:jb,fog_pars_vertex:qb,fog_fragment:Yb,fog_pars_fragment:$b,gradientmap_pars_fragment:Kb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:Jb,lights_pars_begin:eA,lights_toon_fragment:nA,lights_toon_pars_fragment:iA,lights_phong_fragment:rA,lights_phong_pars_fragment:sA,lights_physical_fragment:oA,lights_physical_pars_fragment:aA,lights_fragment_begin:lA,lights_fragment_maps:cA,lights_fragment_end:uA,lightprobes_pars_fragment:hA,logdepthbuf_fragment:fA,logdepthbuf_pars_fragment:dA,logdepthbuf_pars_vertex:pA,logdepthbuf_vertex:mA,map_fragment:gA,map_pars_fragment:_A,map_particle_fragment:vA,map_particle_pars_fragment:xA,metalnessmap_fragment:yA,metalnessmap_pars_fragment:SA,morphinstance_vertex:MA,morphcolor_vertex:EA,morphnormal_vertex:wA,morphtarget_pars_vertex:TA,morphtarget_vertex:bA,normal_fragment_begin:AA,normal_fragment_maps:CA,normal_pars_fragment:RA,normal_pars_vertex:PA,normal_vertex:DA,normalmap_pars_fragment:LA,clearcoat_normal_fragment_begin:NA,clearcoat_normal_fragment_maps:IA,clearcoat_pars_fragment:UA,iridescence_pars_fragment:OA,opaque_fragment:FA,packing:kA,premultiplied_alpha_fragment:BA,project_vertex:zA,dithering_fragment:VA,dithering_pars_fragment:HA,roughnessmap_fragment:GA,roughnessmap_pars_fragment:WA,shadowmap_pars_fragment:XA,shadowmap_pars_vertex:jA,shadowmap_vertex:qA,shadowmask_pars_fragment:YA,skinbase_vertex:$A,skinning_pars_vertex:KA,skinning_vertex:ZA,skinnormal_vertex:QA,specularmap_fragment:JA,specularmap_pars_fragment:eC,tonemapping_fragment:tC,tonemapping_pars_fragment:nC,transmission_fragment:iC,transmission_pars_fragment:rC,uv_pars_fragment:sC,uv_pars_vertex:oC,uv_vertex:aC,worldpos_vertex:lC,background_vert:cC,background_frag:uC,backgroundCube_vert:hC,backgroundCube_frag:fC,cube_vert:dC,cube_frag:pC,depth_vert:mC,depth_frag:gC,distance_vert:_C,distance_frag:vC,equirect_vert:xC,equirect_frag:yC,linedashed_vert:SC,linedashed_frag:MC,meshbasic_vert:EC,meshbasic_frag:wC,meshlambert_vert:TC,meshlambert_frag:bC,meshmatcap_vert:AC,meshmatcap_frag:CC,meshnormal_vert:RC,meshnormal_frag:PC,meshphong_vert:DC,meshphong_frag:LC,meshphysical_vert:NC,meshphysical_frag:IC,meshtoon_vert:UC,meshtoon_frag:OC,points_vert:FC,points_frag:kC,shadow_vert:BC,shadow_frag:zC,sprite_vert:VC,sprite_frag:HC},_e={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Ai={basic:{uniforms:xn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:xn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:xn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:xn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:xn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:xn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:xn([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:xn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:xn([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:xn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:xn([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:xn([_e.common,_e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:xn([_e.lights,_e.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ai.physical={uniforms:xn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Vl={r:0,b:0,g:0},GC=new ut,Dy=new He;Dy.set(-1,0,0,0,1,0,0,0,1);function WC(t,e,n,i,r,s){const o=new Be(0);let a=r===!0?0:1,l,c,f=null,p=0,h=null;function m(d){let v=d.isScene===!0?d.background:null;if(v&&v.isTexture){const S=d.backgroundBlurriness>0;v=e.get(v,S)}return v}function _(d){let v=!1;const S=m(d);S===null?g(o,a):S&&S.isColor&&(g(S,1),v=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(d,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===Mu)?(c===void 0&&(c=new pe(new sn(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:vo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(GC.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dy),c.material.toneMapped=rt.getTransfer(S.colorSpace)!==ft,(f!==S||p!==S.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,p=S.version,h=t.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new pe(new Vn(2,2),new tn({name:"BackgroundMaterial",uniforms:vo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=rt.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||p!==S.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,p=S.version,h=t.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,v){d.getRGB(Vl,by(t)),n.buffers.color.setClear(Vl.r,Vl.g,Vl.b,v,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(d,v=1){o.set(d),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,g(o,a)},render:_,addToRenderList:x,dispose:u}}function XC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(P,I,W,Y,U){let z=!1;const k=p(P,Y,W,I);s!==k&&(s=k,c(s.object)),z=m(P,Y,W,U),z&&_(P,Y,W,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(P,I,W,Y),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function p(P,I,W,Y){const U=Y.wireframe===!0;let z=i[I.id];z===void 0&&(z={},i[I.id]=z);const k=P.isInstancedMesh===!0?P.id:0;let B=z[k];B===void 0&&(B={},z[k]=B);let q=B[W.id];q===void 0&&(q={},B[W.id]=q);let J=q[U];return J===void 0&&(J=h(l()),q[U]=J),J}function h(P){const I=[],W=[],Y=[];for(let U=0;U<n;U++)I[U]=0,W[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function m(P,I,W,Y){const U=s.attributes,z=I.attributes;let k=0;const B=W.getAttributes();for(const q in B)if(B[q].location>=0){const ae=U[q];let ge=z[q];if(ge===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;k++}return s.attributesNum!==k||s.index!==Y}function _(P,I,W,Y){const U={},z=I.attributes;let k=0;const B=W.getAttributes();for(const q in B)if(B[q].location>=0){let ae=z[q];ae===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),U[q]=ge,k++}s.attributes=U,s.attributesNum=k,s.index=Y}function x(){const P=s.newAttributes;for(let I=0,W=P.length;I<W;I++)P[I]=0}function g(P){u(P,0)}function u(P,I){const W=s.newAttributes,Y=s.enabledAttributes,U=s.attributeDivisors;W[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),U[P]!==I&&(t.vertexAttribDivisor(P,I),U[P]=I)}function d(){const P=s.newAttributes,I=s.enabledAttributes;for(let W=0,Y=I.length;W<Y;W++)I[W]!==P[W]&&(t.disableVertexAttribArray(W),I[W]=0)}function v(P,I,W,Y,U,z,k){k===!0?t.vertexAttribIPointer(P,I,W,U,z):t.vertexAttribPointer(P,I,W,Y,U,z)}function S(P,I,W,Y){x();const U=Y.attributes,z=W.getAttributes(),k=I.defaultAttributeValues;for(const B in z){const q=z[B];if(q.location>=0){let J=U[B];if(J===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const ae=J.normalized,ge=J.itemSize,Xe=e.get(J);if(Xe===void 0)continue;const $e=Xe.buffer,Fe=Xe.type,K=Xe.bytesPerElement,me=Fe===t.INT||Fe===t.UNSIGNED_INT||J.gpuType===Zp;if(J.isInterleavedBufferAttribute){const he=J.data,Ie=he.stride,ke=J.offset;if(he.isInstancedInterleavedBuffer){for(let Ue=0;Ue<q.locationSize;Ue++)u(q.location+Ue,he.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)g(q.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Ue=0;Ue<q.locationSize;Ue++)v(q.location+Ue,ge/q.locationSize,Fe,ae,Ie*K,(ke+ge/q.locationSize*Ue)*K,me)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<q.locationSize;he++)u(q.location+he,J.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<q.locationSize;he++)g(q.location+he);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let he=0;he<q.locationSize;he++)v(q.location+he,ge/q.locationSize,Fe,ae,ge*K,ge/q.locationSize*he*K,me)}}else if(k!==void 0){const ae=k[B];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(q.location,ae);break;case 3:t.vertexAttrib3fv(q.location,ae);break;case 4:t.vertexAttrib4fv(q.location,ae);break;default:t.vertexAttrib1fv(q.location,ae)}}}}d()}function T(){A();for(const P in i){const I=i[P];for(const W in I){const Y=I[W];for(const U in Y){const z=Y[U];for(const k in z)f(z[k].object),delete z[k];delete Y[U]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const W in I){const Y=I[W];for(const U in Y){const z=Y[U];for(const k in z)f(z[k].object),delete z[k];delete Y[U]}}delete i[P.id]}function C(P){for(const I in i){const W=i[I];for(const Y in W){const U=W[Y];if(U[P.id]===void 0)continue;const z=U[P.id];for(const k in z)f(z[k].object),delete z[k];delete U[P.id]}}}function y(P){for(const I in i){const W=i[I],Y=P.isInstancedMesh===!0?P.id:0,U=W[Y];if(U!==void 0){for(const z in U){const k=U[z];for(const B in k)f(k[B].object),delete k[B];delete U[z]}delete W[Y],Object.keys(W).length===0&&delete i[I]}}}function A(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:d}}function jC(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let h=0;for(let m=0;m<f;m++)h+=c[m];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function qC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==gi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const y=C===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==mi&&!y)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Oe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:S,maxSamples:T,samples:w}}function YC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _r,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||r;return r=h,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=f(p,h,0)},this.setState=function(p,h,m){const _=p.clippingPlanes,x=p.clipIntersection,g=p.clipShadows,u=t.get(p);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const d=s?0:i,v=d*4;let S=u.clippingState||null;l.value=S,S=f(_,h,v,m);for(let T=0;T!==v;++T)S[T]=n[T];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=d}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,_){const x=p!==null?p.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const u=m+x*4,d=h.matrixWorldInverse;a.getNormalMatrix(d),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,S=m;v!==x;++v,S+=4)o.copy(p[v]).applyMatrix4(d,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const wr=4,Bg=[.125,.215,.35,.446,.526,.582],Kr=20,$C=256,qo=new Wa,zg=new Be;let Fh=null,kh=0,Bh=0,zh=!1;const KC=new D;class Vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=KC}=s;Fh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fh,kh,Bh),this._renderer.xr.enabled=zh,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===us||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Wn,format:gi,colorSpace:Gc,depthBuffer:!1},r=Hg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZC(s)),this._blurMaterial=JC(s,e,n),this._ggxMaterial=QC(s,e,n)}return r}_compileMaterial(e){const n=new pe(new Ct,e);this._renderer.compile(n,qo)}_sceneToCubeUV(e,n,i,r,s){const l=new Jn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,m=p.toneMapping;p.getClearColor(zg),p.toneMapping=Ui,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new sn,new It({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let u=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,u=!0):(g.color.copy(zg),u=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):S===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));const T=this._cubeSize;Fs(r,S*T,v>2?T:0,T,T),p.setRenderTarget(r),u&&p.render(x,l),p.render(e,l)}p.toneMapping=m,p.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===us||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),h=0+c*1.25,m=p*h,{_lodMax:_}=this,x=this._sizeLods[i],g=3*x*(i>_-wr?i-_+wr:0),u=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,Fs(s,g,u,3*x,2*x),r.setRenderTarget(s),r.render(a,qo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Fs(e,g,u,3*x,2*x),r.setRenderTarget(e),r.render(a,qo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[r];p.material=c;const h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kr-1),x=s/_,g=isFinite(s)?1+Math.floor(f*x):Kr;g>Kr&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kr}`);const u=[];let d=0;for(let C=0;C<Kr;++C){const y=C/x,A=Math.exp(-y*y/2);u.push(A),C===0?d+=A:C<g&&(d+=2*A)}for(let C=0;C<u.length;C++)u[C]=u[C]/d;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const S=this._sizeLods[r],T=3*S*(r>v-wr?r-v+wr:0),w=4*(this._cubeSize-S);Fs(n,T,w,3*S,2*S),l.setRenderTarget(n),l.render(p,qo)}}function ZC(t){const e=[],n=[],i=[];let r=t;const s=t-wr+1+Bg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-wr?l=Bg[o-t+wr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,p=1+c,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,_=6,x=3,g=2,u=1,d=new Float32Array(x*_*m),v=new Float32Array(g*_*m),S=new Float32Array(u*_*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,y=w>2?0:-1,A=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];d.set(A,x*_*w),v.set(h,g*_*w);const R=[w,w,w,w,w,w];S.set(R,u*_*w)}const T=new Ct;T.setAttribute("position",new En(d,x)),T.setAttribute("uv",new En(v,g)),T.setAttribute("faceIndex",new En(S,u)),i.push(new pe(T,null)),r>wr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Hg(t,e,n){const i=new Nn(t,e,n);return i.texture.mapping=Mu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QC(t,e,n){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$C,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function JC(t,e,n){const i=new Float32Array(Kr),r=new D(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Gg(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Wg(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ly extends Nn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sn(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:Ii});s.uniforms.tEquirect.value=n;const o=new pe(r,s),a=n.minFilter;return n.minFilter===es&&(n.minFilter=mn),new tb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function eR(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?o(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===ah||m===lh)if(e.has(h)){const _=e.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const x=new Ly(_.height);return x.fromEquirectangularTexture(t,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const m=h.mapping,_=m===ah||m===lh,x=m===us||m===go;if(_||x){let g=n.get(h);const u=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return i===null&&(i=new Vg(t)),g=_?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const d=h.image;return _&&d&&d.height>0||x&&d&&l(d)?(i===null&&(i=new Vg(t)),g=_?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function a(h,m){return m===ah?h.mapping=us:m===lh&&(h.mapping=go),h}function l(h){let m=0;const _=6;for(let x=0;x<_;x++)h[x]!==void 0&&m++;return m===_}function c(h){const m=h.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(h){const m=h.target;m.removeEventListener("dispose",f);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function tR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fd("WebGLRenderer: "+i+" extension not supported."),r}}}function nR(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(p){const h=[],m=p.index,_=p.attributes.position;let x=0;if(_===void 0)return;if(m!==null){const d=m.array;x=m.version;for(let v=0,S=d.length;v<S;v+=3){const T=d[v+0],w=d[v+1],C=d[v+2];h.push(T,w,w,C,C,T)}}else{const d=_.array;x=_.version;for(let v=0,S=d.length/3-1;v<S;v+=3){const T=v+0,w=v+1,C=v+2;h.push(T,w,w,C,C,T)}}const g=new(_.count>=65535?Sy:yy)(h,1);g.version=x;const u=s.get(p);u&&e.remove(u),s.set(p,g)}function f(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function iR(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,h){t.drawElements(i,h,s,p*o),n.update(h,i,1)}function c(p,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,p*o,m),n.update(h,i,m))}function f(p,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,p,0,m);let x=0;for(let g=0;g<m;g++)x+=h[g];n.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function rR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sR(t,e,n){const i=new WeakMap,r=new Ot;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==p){let R=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var m=R;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),g===!0&&(S=3);let T=a.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*p),y=new vy(C,T,w,p);y.type=mi,y.needsUpdate=!0;const A=S*4;for(let P=0;P<p;P++){const I=u[P],W=d[P],Y=v[P],U=T*w*4*P;for(let z=0;z<I.count;z++){const k=z*A;_===!0&&(r.fromBufferAttribute(I,z),C[U+k+0]=r.x,C[U+k+1]=r.y,C[U+k+2]=r.z,C[U+k+3]=0),x===!0&&(r.fromBufferAttribute(W,z),C[U+k+4]=r.x,C[U+k+5]=r.y,C[U+k+6]=r.z,C[U+k+7]=0),g===!0&&(r.fromBufferAttribute(Y,z),C[U+k+8]=r.x,C[U+k+9]=r.y,C[U+k+10]=r.z,C[U+k+11]=Y.itemSize===4?r.w:1)}}h={count:p,texture:y,size:new Ee(T,w)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function oR(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,p=c.geometry,h=e.get(c,p);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return h}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const aR={[ry]:"LINEAR_TONE_MAPPING",[sy]:"REINHARD_TONE_MAPPING",[oy]:"CINEON_TONE_MAPPING",[Kp]:"ACES_FILMIC_TONE_MAPPING",[ly]:"AGX_TONE_MAPPING",[cy]:"NEUTRAL_TONE_MAPPING",[ay]:"CUSTOM_TONE_MAPPING"};function lR(t,e,n,i,r){const s=new Nn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new _o(e,n):void 0}),o=new Nn(e,n,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),a=new Ct;a.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ht([0,2,0,0,2,0],2));const l=new YT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new pe(a,l),f=new Wa(-1,1,1,-1,0,1);let p=null,h=null,m=!1,_,x=null,g=[],u=!1;this.setSize=function(d,v){s.setSize(d,v),o.setSize(d,v);for(let S=0;S<g.length;S++){const T=g[S];T.setSize&&T.setSize(d,v)}},this.setEffects=function(d){g=d,u=g.length>0&&g[0].isRenderPass===!0;const v=s.width,S=s.height;for(let T=0;T<g.length;T++){const w=g[T];w.setSize&&w.setSize(v,S)}},this.begin=function(d,v){if(m||d.toneMapping===Ui&&g.length===0)return!1;if(x=v,v!==null){const S=v.width,T=v.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return u===!1&&d.setRenderTarget(s),_=d.toneMapping,d.toneMapping=Ui,!0},this.hasRenderPass=function(){return u},this.end=function(d,v){d.toneMapping=_,m=!0;let S=s,T=o;for(let w=0;w<g.length;w++){const C=g[w];if(C.enabled!==!1&&(C.render(d,T,S,v),C.needsSwap!==!1)){const y=S;S=T,T=y}}if(p!==d.outputColorSpace||h!==d.toneMapping){p=d.outputColorSpace,h=d.toneMapping,l.defines={},rt.getTransfer(p)===ft&&(l.defines.SRGB_TRANSFER="");const w=aR[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,d.setRenderTarget(x),d.render(c,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Ny=new gn,Wd=new _o(1,1),Iy=new vy,Uy=new wT,Oy=new wy,Xg=[],jg=[],qg=new Float32Array(16),Yg=new Float32Array(9),$g=new Float32Array(4);function Ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Xg[r];if(s===void 0&&(s=new Float32Array(r),Xg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Au(t,e){let n=jg[e];n===void 0&&(n=new Int32Array(e),jg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function hR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function fR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function dR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;$g.set(i),t.uniformMatrix2fv(this.addr,!1,$g),Kt(n,i)}}function pR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;Yg.set(i),t.uniformMatrix3fv(this.addr,!1,Yg),Kt(n,i)}}function mR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;qg.set(i),t.uniformMatrix4fv(this.addr,!1,qg),Kt(n,i)}}function gR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _R(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function vR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function xR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function yR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function SR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function MR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function ER(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function wR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Wd.compareFunction=n.isReversedDepthBuffer()?sm:rm,s=Wd):s=Ny,n.setTexture2D(e||s,r)}function TR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Uy,r)}function bR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Oy,r)}function AR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Iy,r)}function CR(t){switch(t){case 5126:return cR;case 35664:return uR;case 35665:return hR;case 35666:return fR;case 35674:return dR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return _R;case 35668:case 35672:return vR;case 35669:case 35673:return xR;case 5125:return yR;case 36294:return SR;case 36295:return MR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return TR;case 35680:case 36300:case 36308:case 36293:return bR;case 36289:case 36303:case 36311:case 36292:return AR}}function RR(t,e){t.uniform1fv(this.addr,e)}function PR(t,e){const n=Ao(e,this.size,2);t.uniform2fv(this.addr,n)}function DR(t,e){const n=Ao(e,this.size,3);t.uniform3fv(this.addr,n)}function LR(t,e){const n=Ao(e,this.size,4);t.uniform4fv(this.addr,n)}function NR(t,e){const n=Ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function IR(t,e){const n=Ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function UR(t,e){const n=Ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function OR(t,e){t.uniform1iv(this.addr,e)}function FR(t,e){t.uniform2iv(this.addr,e)}function kR(t,e){t.uniform3iv(this.addr,e)}function BR(t,e){t.uniform4iv(this.addr,e)}function zR(t,e){t.uniform1uiv(this.addr,e)}function VR(t,e){t.uniform2uiv(this.addr,e)}function HR(t,e){t.uniform3uiv(this.addr,e)}function GR(t,e){t.uniform4uiv(this.addr,e)}function WR(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Wd:o=Ny;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function XR(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Uy,s[o])}function jR(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Oy,s[o])}function qR(t,e,n){const i=this.cache,r=e.length,s=Au(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Iy,s[o])}function YR(t){switch(t){case 5126:return RR;case 35664:return PR;case 35665:return DR;case 35666:return LR;case 35674:return NR;case 35675:return IR;case 35676:return UR;case 5124:case 35670:return OR;case 35667:case 35671:return FR;case 35668:case 35672:return kR;case 35669:case 35673:return BR;case 5125:return zR;case 36294:return VR;case 36295:return HR;case 36296:return GR;case 35678:case 36198:case 36298:case 36306:case 35682:return WR;case 35679:case 36299:case 36307:return XR;case 35680:case 36300:case 36308:case 36293:return jR;case 36289:case 36303:case 36311:case 36292:return qR}}class $R{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=CR(n.type)}}class KR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YR(n.type)}}class ZR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function Kg(t,e){t.seq.push(e),t.map[e.id]=e}function QR(t,e,n){const i=t.name,r=i.length;for(Vh.lastIndex=0;;){const s=Vh.exec(i),o=Vh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Kg(n,c===void 0?new $R(a,t,e):new KR(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new ZR(a),Kg(n,p)),n=p}}}class hc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);QR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Zg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const JR=37297;let eP=0;function tP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Qg=new He;function nP(t){rt._getMatrix(Qg,rt.workingColorSpace,t);const e=`mat3( ${Qg.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case Wc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Jg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+tP(t.getShaderSource(e),a)}else return s}function iP(t,e){const n=nP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const rP={[ry]:"Linear",[sy]:"Reinhard",[oy]:"Cineon",[Kp]:"ACESFilmic",[ly]:"AgX",[cy]:"Neutral",[ay]:"Custom"};function sP(t,e){const n=rP[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hl=new D;function oP(){rt.getLuminanceCoefficients(Hl);const t=Hl.x.toFixed(4),e=Hl.y.toFixed(4),n=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function lP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function na(t){return t!==""}function e_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(t){return t.replace(uP,fP)}const hP=new Map;function fP(t,e){let n=Ye[e];if(n===void 0){const i=hP.get(e);if(i!==void 0)n=Ye[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xd(n)}const dP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n_(t){return t.replace(dP,pP)}function pP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function i_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mP={[fa]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function gP(t){return mP[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _P={[us]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[Mu]:"ENVMAP_TYPE_CUBE_UV"};function vP(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":_P[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const xP={[go]:"ENVMAP_MODE_REFRACTION"};function yP(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":xP[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SP={[$p]:"ENVMAP_BLENDING_MULTIPLY",[H1]:"ENVMAP_BLENDING_MIX",[G1]:"ENVMAP_BLENDING_ADD"};function MP(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":SP[t.combine]||"ENVMAP_BLENDING_NONE"}function EP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=gP(n),c=vP(n),f=yP(n),p=MP(n),h=EP(n),m=aP(n),_=lP(s),x=r.createProgram();let g,u,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(na).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(na).join(`
`),u.length>0&&(u+=`
`)):(g=[i_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),u=[i_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ui?"#define TONE_MAPPING":"",n.toneMapping!==Ui?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Ui?sP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,iP("linearToOutputTexel",n.outputColorSpace),oP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(na).join(`
`)),o=Xd(o),o=e_(o,n),o=t_(o,n),a=Xd(a),a=e_(a,n),a=t_(a,n),o=n_(o),a=n_(a),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=d+g+o,S=d+u+a,T=Zg(r,r.VERTEX_SHADER,v),w=Zg(r,r.FRAGMENT_SHADER,S);r.attachShader(x,T),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(P){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(x)||"",W=r.getShaderInfoLog(T)||"",Y=r.getShaderInfoLog(w)||"",U=I.trim(),z=W.trim(),k=Y.trim();let B=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,T,w);else{const J=Jg(r,T,"vertex"),ae=Jg(r,w,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+J+`
`+ae)}else U!==""?Oe("WebGLProgram: Program Info Log:",U):(z===""||k==="")&&(q=!1);q&&(P.diagnostics={runnable:B,programLog:U,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:u}})}r.deleteShader(T),r.deleteShader(w),y=new hc(r,x),A=cP(r,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(x,JR)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eP++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=w,this}let TP=0;class bP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new AP(e),n.set(e,i)),i}}class AP{constructor(e){this.id=TP++,this.code=e,this.usedTimes=0}}function CP(t){return t===hs||t===zc||t===Vc}function RP(t,e,n,i,r,s){const o=new lm,a=new bP,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,A,R,P,I,W){const Y=P.fog,U=I.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||z,k),q=B&&B.mapping===Mu?B.image.height:null,J=m[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ae=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ge=ae!==void 0?ae.length:0;let Xe=0;U.morphAttributes.position!==void 0&&(Xe=1),U.morphAttributes.normal!==void 0&&(Xe=2),U.morphAttributes.color!==void 0&&(Xe=3);let $e,Fe,K,me;if(J){const Ge=Ai[J];$e=Ge.vertexShader,Fe=Ge.fragmentShader}else $e=y.vertexShader,Fe=y.fragmentShader,a.update(y),K=a.getVertexShaderID(y),me=a.getFragmentShaderID(y);const he=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),ke=I.isInstancedMesh===!0,Ue=I.isBatchedMesh===!0,wt=!!y.map,Ke=!!y.matcap,st=!!B,xt=!!y.aoMap,je=!!y.lightMap,ye=!!y.bumpMap,De=!!y.normalMap,qe=!!y.displacementMap,L=!!y.emissiveMap,tt=!!y.metalnessMap,Ce=!!y.roughnessMap,Ae=y.anisotropy>0,le=y.clearcoat>0,ct=y.dispersion>0,b=y.iridescence>0,M=y.sheen>0,F=y.transmission>0,Z=Ae&&!!y.anisotropyMap,ee=le&&!!y.clearcoatMap,ne=le&&!!y.clearcoatNormalMap,se=le&&!!y.clearcoatRoughnessMap,j=b&&!!y.iridescenceMap,$=b&&!!y.iridescenceThicknessMap,de=M&&!!y.sheenColorMap,Se=M&&!!y.sheenRoughnessMap,ce=!!y.specularMap,oe=!!y.specularColorMap,ze=!!y.specularIntensityMap,Ve=F&&!!y.transmissionMap,lt=F&&!!y.thicknessMap,N=!!y.gradientMap,ue=!!y.alphaMap,Q=y.alphaTest>0,Me=!!y.alphaHash,fe=!!y.extensions;let te=Ui;y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(te=t.toneMapping);const Pe={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:$e,fragmentShader:Fe,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Ue,batchingColor:Ue&&I._colorsTexture!==null,instancing:ke,instancingColor:ke&&I.instanceColor!==null,instancingMorph:ke&&I.morphTexture!==null,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:wt,matcap:Ke,envMap:st,envMapMode:st&&B.mapping,envMapCubeUVHeight:q,aoMap:xt,lightMap:je,bumpMap:ye,normalMap:De,displacementMap:qe,emissiveMap:L,normalMapObjectSpace:De&&y.normalMapType===j1,normalMapTangentSpace:De&&y.normalMapType===Hc,packedNormalMap:De&&y.normalMapType===Hc&&CP(y.normalMap.format),metalnessMap:tt,roughnessMap:Ce,anisotropy:Ae,anisotropyMap:Z,clearcoat:le,clearcoatMap:ee,clearcoatNormalMap:ne,clearcoatRoughnessMap:se,dispersion:ct,iridescence:b,iridescenceMap:j,iridescenceThicknessMap:$,sheen:M,sheenColorMap:de,sheenRoughnessMap:Se,specularMap:ce,specularColorMap:oe,specularIntensityMap:ze,transmission:F,transmissionMap:Ve,thicknessMap:lt,gradientMap:N,opaque:y.transparent===!1&&y.blending===so&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Q,alphaHash:Me,combine:y.combine,mapUv:wt&&_(y.map.channel),aoMapUv:xt&&_(y.aoMap.channel),lightMapUv:je&&_(y.lightMap.channel),bumpMapUv:ye&&_(y.bumpMap.channel),normalMapUv:De&&_(y.normalMap.channel),displacementMapUv:qe&&_(y.displacementMap.channel),emissiveMapUv:L&&_(y.emissiveMap.channel),metalnessMapUv:tt&&_(y.metalnessMap.channel),roughnessMapUv:Ce&&_(y.roughnessMap.channel),anisotropyMapUv:Z&&_(y.anisotropyMap.channel),clearcoatMapUv:ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(y.sheenRoughnessMap.channel),specularMapUv:ce&&_(y.specularMap.channel),specularColorMapUv:oe&&_(y.specularColorMap.channel),specularIntensityMapUv:ze&&_(y.specularIntensityMap.channel),transmissionMapUv:Ve&&_(y.transmissionMap.channel),thicknessMapUv:lt&&_(y.thicknessMap.channel),alphaMapUv:ue&&_(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(De||Ae),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(wt||ue),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&De===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ie,skinning:I.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Xe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:wt&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:L&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Sn,flipSided:y.side===Ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&y.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function g(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)A.push(R),A.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(u(A,y),d(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function u(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function d(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function v(y){const A=m[y.type];let R;if(A){const P=Ai[A];R=Qc.clone(P.uniforms)}else R=y.uniforms;return R}function S(y,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new wP(t,A,y,r),c.push(R),f.set(A,R)),R}function T(y){if(--y.usedTimes===0){const A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:v,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function PP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function DP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function r_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function s_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,_,x,g,u){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:m,material:_,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:u},t[e]=d):(d.id=h.id,d.object=h,d.geometry=m,d.material=_,d.materialVariant=o(h),d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=g,d.group=u),e++,d}function l(h,m,_,x,g,u){const d=a(h,m,_,x,g,u);_.transmission>0?i.push(d):_.transparent===!0?r.push(d):n.push(d)}function c(h,m,_,x,g,u){const d=a(h,m,_,x,g,u);_.transmission>0?i.unshift(d):_.transparent===!0?r.unshift(d):n.unshift(d)}function f(h,m){n.length>1&&n.sort(h||DP),i.length>1&&i.sort(m||r_),r.length>1&&r.sort(m||r_)}function p(){for(let h=e,m=t.length;h<m;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function LP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new s_,t.set(i,[o])):r>=s.length?(o=new s_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function NP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Be};break;case"SpotLight":n={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function IP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let UP=0;function OP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function FP(t){const e=new NP,n=IP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new ut,o=new ut;function a(c){let f=0,p=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,_=0,x=0,g=0,u=0,d=0,v=0,S=0,T=0,w=0,C=0;c.sort(OP);for(let A=0,R=c.length;A<R;A++){const P=c[A],I=P.color,W=P.intensity,Y=P.distance;let U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===hs?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=I.r*W,p+=I.g*W,h+=I.b*W;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],W);C++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,B=n.get(P);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=U,i.directionalShadowMatrix[m]=P.shadow.matrix,d++}i.directional[m]=z,m++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(I).multiplyScalar(W),z.distance=Y,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[x]=z;const k=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,k.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[x]=k.matrix,P.castShadow){const B=n.get(P);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=U,S++}x++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(I).multiplyScalar(W),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=z,g++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const k=P.shadow,B=n.get(P);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=z,_++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(W),z.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[u]=z,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const y=i.hash;(y.directionalLength!==m||y.pointLength!==_||y.spotLength!==x||y.rectAreaLength!==g||y.hemiLength!==u||y.numDirectionalShadows!==d||y.numPointShadows!==v||y.numSpotShadows!==S||y.numSpotMaps!==T||y.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=d,i.directionalShadowMap.length=d,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=d,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,y.directionalLength=m,y.pointLength=_,y.spotLength=x,y.rectAreaLength=g,y.hemiLength=u,y.numDirectionalShadows=d,y.numPointShadows=v,y.numSpotShadows=S,y.numSpotMaps=T,y.numLightProbes=C,i.version=UP++)}function l(c,f){let p=0,h=0,m=0,_=0,x=0;const g=f.matrixWorldInverse;for(let u=0,d=c.length;u<d;u++){const v=c[u];if(v.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function o_(t){const e=new FP(t),n=[],i=[],r=[];function s(h){p.camera=h,n.length=0,i.length=0,r.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(n)}function f(h){e.setupView(n,h)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function kP(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new o_(t),e.set(r,[a])):s>=o.length?(a=new o_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const BP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VP=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],HP=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],a_=new ut,Yo=new D,Hh=new D;function GP(t,e,n){let i=new um;const r=new Ee,s=new Ee,o=new Ot,a=new $T,l=new KT,c={},f=n.maxTextureSize,p={[Or]:Ln,[Ln]:Or,[Sn]:Sn},h=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:BP,fragmentShader:zP}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ct;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pe(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let u=this.type;this.render=function(w,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===E1&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fa);const A=t.getRenderTarget(),R=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Ii),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const W=u!==this.type;W&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(U=>U.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,U=w.length;Y<U;Y++){const z=w[Y],k=z.shadow;if(k===void 0){Oe("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const B=k.getFrameExtents();r.multiply(B),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,k.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ta){if(z.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Nn(r.x,r.y,{format:hs,type:Wn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new _o(r.x,r.y,mi),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=nr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=on,k.map.depthTexture.magFilter=on}else z.isPointLight?(k.map=new Ly(r.x),k.map.depthTexture=new WT(r.x,Fi)):(k.map=new Nn(r.x,r.y),k.map.depthTexture=new _o(r.x,r.y,Fi)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=nr,this.type===fa?(k.map.depthTexture.compareFunction=q?sm:rm,k.map.depthTexture.minFilter=mn,k.map.depthTexture.magFilter=mn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=on,k.map.depthTexture.magFilter=on);k.camera.updateProjectionMatrix()}const J=k.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<J;ae++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(k.map),t.clear());const ge=k.getViewport(ae);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),I.viewport(o)}if(z.isPointLight){const ge=k.camera,Xe=k.matrix,$e=z.distance||ge.far;$e!==ge.far&&(ge.far=$e,ge.updateProjectionMatrix()),Yo.setFromMatrixPosition(z.matrixWorld),ge.position.copy(Yo),Hh.copy(ge.position),Hh.add(VP[ae]),ge.up.copy(HP[ae]),ge.lookAt(Hh),ge.updateMatrixWorld(),Xe.makeTranslation(-Yo.x,-Yo.y,-Yo.z),a_.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),k._frustum.setFromProjectionMatrix(a_,ge.coordinateSystem,ge.reversedDepth)}else k.updateMatrices(z);i=k.getFrustum(),S(C,y,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===ta&&d(k,y),k.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(A,R,P)};function d(w,C){const y=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nn(r.x,r.y,{format:hs,type:Wn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,y,h,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,y,m,x,null)}function v(w,C,y,A){let R=null;const P=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=R.uuid,W=C.uuid;let Y=c[I];Y===void 0&&(Y={},c[I]=Y);let U=Y[W];U===void 0&&(U=R.clone(),Y[W]=U,C.addEventListener("dispose",T)),R=U}if(R.visible=C.visible,R.wireframe=C.wireframe,A===ta?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:p[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=t.properties.get(R);I.light=y}return R}function S(w,C,y,A,R){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===ta)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const W=e.update(w),Y=w.material;if(Array.isArray(Y)){const U=W.groups;for(let z=0,k=U.length;z<k;z++){const B=U[z],q=Y[B.materialIndex];if(q&&q.visible){const J=v(w,q,A,R);w.onBeforeShadow(t,w,C,y,W,J,B),t.renderBufferDirect(y,null,W,J,w,B),w.onAfterShadow(t,w,C,y,W,J,B)}}}else if(Y.visible){const U=v(w,Y,A,R);w.onBeforeShadow(t,w,C,y,W,U,null),t.renderBufferDirect(y,null,W,U,w,null),w.onAfterShadow(t,w,C,y,W,U,null)}}const I=w.children;for(let W=0,Y=I.length;W<Y;W++)S(I[W],C,y,A,R)}function T(w){w.target.removeEventListener("dispose",T);for(const y in c){const A=c[y],R=w.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function WP(t,e){function n(){let N=!1;const ue=new Ot;let Q=null;const Me=new Ot(0,0,0,0);return{setMask:function(fe){Q!==fe&&!N&&(t.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){N=fe},setClear:function(fe,te,Pe,Ge,kt){kt===!0&&(fe*=Ge,te*=Ge,Pe*=Ge),ue.set(fe,te,Pe,Ge),Me.equals(ue)===!1&&(t.clearColor(fe,te,Pe,Ge),Me.copy(ue))},reset:function(){N=!1,Q=null,Me.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,Q=null,Me=null,fe=null;return{setReversed:function(te){if(ue!==te){const Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ue=te;const Ge=fe;fe=null,this.setClear(Ge)}},getReversed:function(){return ue},setTest:function(te){te?he(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(te){Q!==te&&!N&&(t.depthMask(te),Q=te)},setFunc:function(te){if(ue&&(te=nT[te]),Me!==te){switch(te){case Zf:t.depthFunc(t.NEVER);break;case Qf:t.depthFunc(t.ALWAYS);break;case Jf:t.depthFunc(t.LESS);break;case mo:t.depthFunc(t.LEQUAL);break;case ed:t.depthFunc(t.EQUAL);break;case td:t.depthFunc(t.GEQUAL);break;case nd:t.depthFunc(t.GREATER);break;case id:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=te}},setLocked:function(te){N=te},setClear:function(te){fe!==te&&(fe=te,ue&&(te=1-te),t.clearDepth(te))},reset:function(){N=!1,Q=null,Me=null,fe=null,ue=!1}}}function r(){let N=!1,ue=null,Q=null,Me=null,fe=null,te=null,Pe=null,Ge=null,kt=null;return{setTest:function(mt){N||(mt?he(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(mt){ue!==mt&&!N&&(t.stencilMask(mt),ue=mt)},setFunc:function(mt,ki,Si){(Q!==mt||Me!==ki||fe!==Si)&&(t.stencilFunc(mt,ki,Si),Q=mt,Me=ki,fe=Si)},setOp:function(mt,ki,Si){(te!==mt||Pe!==ki||Ge!==Si)&&(t.stencilOp(mt,ki,Si),te=mt,Pe=ki,Ge=Si)},setLocked:function(mt){N=mt},setClear:function(mt){kt!==mt&&(t.clearStencil(mt),kt=mt)},reset:function(){N=!1,ue=null,Q=null,Me=null,fe=null,te=null,Pe=null,Ge=null,kt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},p={},h={},m=new WeakMap,_=[],x=null,g=!1,u=null,d=null,v=null,S=null,T=null,w=null,C=null,y=new Be(0,0,0),A=0,R=!1,P=null,I=null,W=null,Y=null,U=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=B>=2);let J=null,ae={};const ge=t.getParameter(t.SCISSOR_BOX),Xe=t.getParameter(t.VIEWPORT),$e=new Ot().fromArray(ge),Fe=new Ot().fromArray(Xe);function K(N,ue,Q,Me){const fe=new Uint8Array(4),te=t.createTexture();t.bindTexture(N,te),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<Q;Pe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(ue+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return te}const me={};me[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(t.DEPTH_TEST),o.setFunc(mo),ye(!1),De(Z0),he(t.CULL_FACE),xt(Ii);function he(N){f[N]!==!0&&(t.enable(N),f[N]=!0)}function Ie(N){f[N]!==!1&&(t.disable(N),f[N]=!1)}function ke(N,ue){return h[N]!==ue?(t.bindFramebuffer(N,ue),h[N]=ue,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ue(N,ue){let Q=_,Me=!1;if(N){Q=m.get(ue),Q===void 0&&(Q=[],m.set(ue,Q));const fe=N.textures;if(Q.length!==fe.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Pe=fe.length;te<Pe;te++)Q[te]=t.COLOR_ATTACHMENT0+te;Q.length=fe.length,Me=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,Me=!0);Me&&t.drawBuffers(Q)}function wt(N){return x!==N?(t.useProgram(N),x=N,!0):!1}const Ke={[$r]:t.FUNC_ADD,[T1]:t.FUNC_SUBTRACT,[b1]:t.FUNC_REVERSE_SUBTRACT};Ke[A1]=t.MIN,Ke[C1]=t.MAX;const st={[R1]:t.ZERO,[P1]:t.ONE,[D1]:t.SRC_COLOR,[$f]:t.SRC_ALPHA,[F1]:t.SRC_ALPHA_SATURATE,[U1]:t.DST_COLOR,[N1]:t.DST_ALPHA,[L1]:t.ONE_MINUS_SRC_COLOR,[Kf]:t.ONE_MINUS_SRC_ALPHA,[O1]:t.ONE_MINUS_DST_COLOR,[I1]:t.ONE_MINUS_DST_ALPHA,[k1]:t.CONSTANT_COLOR,[B1]:t.ONE_MINUS_CONSTANT_COLOR,[z1]:t.CONSTANT_ALPHA,[V1]:t.ONE_MINUS_CONSTANT_ALPHA};function xt(N,ue,Q,Me,fe,te,Pe,Ge,kt,mt){if(N===Ii){g===!0&&(Ie(t.BLEND),g=!1);return}if(g===!1&&(he(t.BLEND),g=!0),N!==w1){if(N!==u||mt!==R){if((d!==$r||T!==$r)&&(t.blendEquation(t.FUNC_ADD),d=$r,T=$r),mt)switch(N){case so:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bn:t.blendFunc(t.ONE,t.ONE);break;case Q0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case J0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",N);break}else switch(N){case so:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Q0:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J0:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",N);break}v=null,S=null,w=null,C=null,y.set(0,0,0),A=0,u=N,R=mt}return}fe=fe||ue,te=te||Q,Pe=Pe||Me,(ue!==d||fe!==T)&&(t.blendEquationSeparate(Ke[ue],Ke[fe]),d=ue,T=fe),(Q!==v||Me!==S||te!==w||Pe!==C)&&(t.blendFuncSeparate(st[Q],st[Me],st[te],st[Pe]),v=Q,S=Me,w=te,C=Pe),(Ge.equals(y)===!1||kt!==A)&&(t.blendColor(Ge.r,Ge.g,Ge.b,kt),y.copy(Ge),A=kt),u=N,R=!1}function je(N,ue){N.side===Sn?Ie(t.CULL_FACE):he(t.CULL_FACE);let Q=N.side===Ln;ue&&(Q=!Q),ye(Q),N.blending===so&&N.transparent===!1?xt(Ii):xt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Me=N.stencilWrite;a.setTest(Me),Me&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),L(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function ye(N){P!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),P=N)}function De(N){N!==S1?(he(t.CULL_FACE),N!==I&&(N===Z0?t.cullFace(t.BACK):N===M1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),I=N}function qe(N){N!==W&&(k&&t.lineWidth(N),W=N)}function L(N,ue,Q){N?(he(t.POLYGON_OFFSET_FILL),(Y!==ue||U!==Q)&&(Y=ue,U=Q,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,Q))):Ie(t.POLYGON_OFFSET_FILL)}function tt(N){N?he(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function Ce(N){N===void 0&&(N=t.TEXTURE0+z-1),J!==N&&(t.activeTexture(N),J=N)}function Ae(N,ue,Q){Q===void 0&&(J===null?Q=t.TEXTURE0+z-1:Q=J);let Me=ae[Q];Me===void 0&&(Me={type:void 0,texture:void 0},ae[Q]=Me),(Me.type!==N||Me.texture!==ue)&&(J!==Q&&(t.activeTexture(Q),J=Q),t.bindTexture(N,ue||me[N]),Me.type=N,Me.texture=ue)}function le(){const N=ae[J];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ct(){try{t.compressedTexImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function M(){try{t.texSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function F(){try{t.texSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function ne(){try{t.texStorage2D(...arguments)}catch(N){it("WebGLState:",N)}}function se(){try{t.texStorage3D(...arguments)}catch(N){it("WebGLState:",N)}}function j(){try{t.texImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function $(){try{t.texImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function de(N){return p[N]!==void 0?p[N]:t.getParameter(N)}function Se(N,ue){p[N]!==ue&&(t.pixelStorei(N,ue),p[N]=ue)}function ce(N){$e.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),$e.copy(N))}function oe(N){Fe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Fe.copy(N))}function ze(N,ue){let Q=c.get(ue);Q===void 0&&(Q=new WeakMap,c.set(ue,Q));let Me=Q.get(N);Me===void 0&&(Me=t.getUniformBlockIndex(ue,N.name),Q.set(N,Me))}function Ve(N,ue){const Me=c.get(ue).get(N);l.get(ue)!==Me&&(t.uniformBlockBinding(ue,Me,N.__bindingPointIndex),l.set(ue,Me))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},J=null,ae={},h={},m=new WeakMap,_=[],x=null,g=!1,u=null,d=null,v=null,S=null,T=null,w=null,C=null,y=new Be(0,0,0),A=0,R=!1,P=null,I=null,W=null,Y=null,U=null,$e.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Ie,bindFramebuffer:ke,drawBuffers:Ue,useProgram:wt,setBlending:xt,setMaterial:je,setFlipSided:ye,setCullFace:De,setLineWidth:qe,setPolygonOffset:L,setScissorTest:tt,activeTexture:Ce,bindTexture:Ae,unbindTexture:le,compressedTexImage2D:ct,compressedTexImage3D:b,texImage2D:j,texImage3D:$,pixelStorei:Se,getParameter:de,updateUBOMapping:ze,uniformBlockBinding:Ve,texStorage2D:ne,texStorage3D:se,texSubImage2D:M,texSubImage3D:F,compressedTexSubImage2D:Z,compressedTexSubImage3D:ee,scissor:ce,viewport:oe,reset:lt}}function XP(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,f=new WeakMap,p=new Set;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,M){return _?new OffscreenCanvas(b,M):Xc("canvas")}function g(b,M,F){let Z=1;const ee=ct(b);if((ee.width>F||ee.height>F)&&(Z=F/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ne=Math.floor(Z*ee.width),se=Math.floor(Z*ee.height);h===void 0&&(h=x(ne,se));const j=M?x(ne,se):h;return j.width=ne,j.height=se,j.getContext("2d").drawImage(b,0,0,ne,se),Oe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ne+"x"+se+")."),j}else return"data"in b&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function u(b){return b.generateMipmaps}function d(b){t.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(b,M,F,Z,ee,ne=!1){if(b!==null){if(t[b]!==void 0)return t[b];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se;Z&&(se=e.get("EXT_texture_norm16"),se||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===t.RED&&(F===t.FLOAT&&(j=t.R32F),F===t.HALF_FLOAT&&(j=t.R16F),F===t.UNSIGNED_BYTE&&(j=t.R8),F===t.UNSIGNED_SHORT&&se&&(j=se.R16_EXT),F===t.SHORT&&se&&(j=se.R16_SNORM_EXT)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.R8UI),F===t.UNSIGNED_SHORT&&(j=t.R16UI),F===t.UNSIGNED_INT&&(j=t.R32UI),F===t.BYTE&&(j=t.R8I),F===t.SHORT&&(j=t.R16I),F===t.INT&&(j=t.R32I)),M===t.RG&&(F===t.FLOAT&&(j=t.RG32F),F===t.HALF_FLOAT&&(j=t.RG16F),F===t.UNSIGNED_BYTE&&(j=t.RG8),F===t.UNSIGNED_SHORT&&se&&(j=se.RG16_EXT),F===t.SHORT&&se&&(j=se.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RG8UI),F===t.UNSIGNED_SHORT&&(j=t.RG16UI),F===t.UNSIGNED_INT&&(j=t.RG32UI),F===t.BYTE&&(j=t.RG8I),F===t.SHORT&&(j=t.RG16I),F===t.INT&&(j=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGB8UI),F===t.UNSIGNED_SHORT&&(j=t.RGB16UI),F===t.UNSIGNED_INT&&(j=t.RGB32UI),F===t.BYTE&&(j=t.RGB8I),F===t.SHORT&&(j=t.RGB16I),F===t.INT&&(j=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),F===t.UNSIGNED_INT&&(j=t.RGBA32UI),F===t.BYTE&&(j=t.RGBA8I),F===t.SHORT&&(j=t.RGBA16I),F===t.INT&&(j=t.RGBA32I)),M===t.RGB&&(F===t.UNSIGNED_SHORT&&se&&(j=se.RGB16_EXT),F===t.SHORT&&se&&(j=se.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),M===t.RGBA){const $=ne?Wc:rt.getTransfer(ee);F===t.FLOAT&&(j=t.RGBA32F),F===t.HALF_FLOAT&&(j=t.RGBA16F),F===t.UNSIGNED_BYTE&&(j=$===ft?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&se&&(j=se.RGBA16_EXT),F===t.SHORT&&se&&(j=se.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function T(b,M){let F;return b?M===null||M===Fi||M===Ua?F=t.DEPTH24_STENCIL8:M===mi?F=t.DEPTH32F_STENCIL8:M===Ia&&(F=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===Ua?F=t.DEPTH_COMPONENT24:M===mi?F=t.DEPTH_COMPONENT32F:M===Ia&&(F=t.DEPTH_COMPONENT16),F}function w(b,M){return u(b)===!0||b.isFramebufferTexture&&b.minFilter!==on&&b.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function C(b){const M=b.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&f.delete(M),M.isHTMLTexture&&p.delete(M)}function y(b){const M=b.target;M.removeEventListener("dispose",y),P(M)}function A(b){const M=i.get(b);if(M.__webglInit===void 0)return;const F=b.source,Z=m.get(F);if(Z){const ee=Z[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(b),Object.keys(Z).length===0&&m.delete(F)}i.remove(b)}function R(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const F=b.source,Z=m.get(F);delete Z[M.__cacheKey],o.memory.textures--}function P(b){const M=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ee=0;ee<M.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=b.textures;for(let Z=0,ee=F.length;Z<ee;Z++){const ne=i.get(F[Z]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(F[Z])}i.remove(b)}let I=0;function W(){I=0}function Y(){return I}function U(b){I=b}function z(){const b=I;return b>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function k(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function B(b,M){const F=i.get(b);if(b.isVideoTexture&&Ae(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const Z=b.image;if(Z===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(F,b,M);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function q(b,M){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Ie(F,b,M);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function J(b,M){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){Ie(F,b,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function ae(b,M){const F=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){ke(F,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const ge={[rd]:t.REPEAT,[Yi]:t.CLAMP_TO_EDGE,[sd]:t.MIRRORED_REPEAT},Xe={[on]:t.NEAREST,[W1]:t.NEAREST_MIPMAP_NEAREST,[dl]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[ch]:t.LINEAR_MIPMAP_NEAREST,[es]:t.LINEAR_MIPMAP_LINEAR},$e={[q1]:t.NEVER,[Q1]:t.ALWAYS,[Y1]:t.LESS,[rm]:t.LEQUAL,[$1]:t.EQUAL,[sm]:t.GEQUAL,[K1]:t.GREATER,[Z1]:t.NOTEQUAL};function Fe(b,M){if(M.type===mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===mn||M.magFilter===ch||M.magFilter===dl||M.magFilter===es||M.minFilter===mn||M.minFilter===ch||M.minFilter===dl||M.minFilter===es)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,ge[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ge[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ge[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Xe[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Xe[M.minFilter]),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,$e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==dl&&M.minFilter!==es||M.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function K(b,M){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",C));const Z=M.source;let ee=m.get(Z);ee===void 0&&(ee={},m.set(Z,ee));const ne=k(M);if(ne!==b.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[ne].usedTimes++;const se=ee[b.__cacheKey];se!==void 0&&(ee[b.__cacheKey].usedTimes--,se.usedTimes===0&&R(M)),b.__cacheKey=ne,b.__webglTexture=ee[ne].texture}return F}function me(b,M,F){return Math.floor(Math.floor(b/F)/M)}function he(b,M,F,Z){const ne=b.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,F,Z,M.data);else{ne.sort((Se,ce)=>Se.start-ce.start);let se=0;for(let Se=1;Se<ne.length;Se++){const ce=ne[se],oe=ne[Se],ze=ce.start+ce.count,Ve=me(oe.start,M.width,4),lt=me(ce.start,M.width,4);oe.start<=ze+1&&Ve===lt&&me(oe.start+oe.count-1,M.width,4)===Ve?ce.count=Math.max(ce.count,oe.start+oe.count-ce.start):(++se,ne[se]=oe)}ne.length=se+1;const j=n.getParameter(t.UNPACK_ROW_LENGTH),$=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Se=0,ce=ne.length;Se<ce;Se++){const oe=ne[Se],ze=Math.floor(oe.start/4),Ve=Math.ceil(oe.count/4),lt=ze%M.width,N=Math.floor(ze/M.width),ue=Ve,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,lt,N,ue,Q,F,Z,M.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,j),n.pixelStorei(t.UNPACK_SKIP_PIXELS,$),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Ie(b,M,F){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const ee=K(b,M),ne=M.source;n.bindTexture(Z,b.__webglTexture,t.TEXTURE0+F);const se=i.get(ne);if(ne.version!==se.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Q=rt.getPrimaries(rt.workingColorSpace),Me=M.colorSpace===yr?null:rt.getPrimaries(M.colorSpace),fe=M.colorSpace===yr||Q===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let $=g(M.image,!1,r.maxTextureSize);$=le(M,$);const de=s.convert(M.format,M.colorSpace),Se=s.convert(M.type);let ce=S(M.internalFormat,de,Se,M.normalized,M.colorSpace,M.isVideoTexture);Fe(Z,M);let oe;const ze=M.mipmaps,Ve=M.isVideoTexture!==!0,lt=se.__version===void 0||ee===!0,N=ne.dataReady,ue=w(M,$);if(M.isDepthTexture)ce=T(M.format===ts,M.type),lt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ce,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,ce,$.width,$.height,0,de,Se,null));else if(M.isDataTexture)if(ze.length>0){Ve&&lt&&n.texStorage2D(t.TEXTURE_2D,ue,ce,ze[0].width,ze[0].height);for(let Q=0,Me=ze.length;Q<Me;Q++)oe=ze[Q],Ve?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,oe.width,oe.height,de,Se,oe.data):n.texImage2D(t.TEXTURE_2D,Q,ce,oe.width,oe.height,0,de,Se,oe.data);M.generateMipmaps=!1}else Ve?(lt&&n.texStorage2D(t.TEXTURE_2D,ue,ce,$.width,$.height),N&&he(M,$,de,Se)):n.texImage2D(t.TEXTURE_2D,0,ce,$.width,$.height,0,de,Se,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ce,ze[0].width,ze[0].height,$.depth);for(let Q=0,Me=ze.length;Q<Me;Q++)if(oe=ze[Q],M.format!==gi)if(de!==null)if(Ve){if(N)if(M.layerUpdates.size>0){const fe=kg(oe.width,oe.height,M.format,M.type);for(const te of M.layerUpdates){const Pe=oe.data.subarray(te*fe/oe.data.BYTES_PER_ELEMENT,(te+1)*fe/oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,te,oe.width,oe.height,1,de,Pe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,$.depth,de,oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,ce,oe.width,oe.height,$.depth,0,oe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,$.depth,de,Se,oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,ce,oe.width,oe.height,$.depth,0,de,Se,oe.data)}else{Ve&&lt&&n.texStorage2D(t.TEXTURE_2D,ue,ce,ze[0].width,ze[0].height);for(let Q=0,Me=ze.length;Q<Me;Q++)oe=ze[Q],M.format!==gi?de!==null?Ve?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,oe.width,oe.height,de,oe.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,ce,oe.width,oe.height,0,oe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,oe.width,oe.height,de,Se,oe.data):n.texImage2D(t.TEXTURE_2D,Q,ce,oe.width,oe.height,0,de,Se,oe.data)}else if(M.isDataArrayTexture)if(Ve){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ce,$.width,$.height,$.depth),N)if(M.layerUpdates.size>0){const Q=kg($.width,$.height,M.format,M.type);for(const Me of M.layerUpdates){const fe=$.data.subarray(Me*Q/$.data.BYTES_PER_ELEMENT,(Me+1)*Q/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Me,$.width,$.height,1,de,Se,fe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,de,Se,$.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,$.width,$.height,$.depth,0,de,Se,$.data);else if(M.isData3DTexture)Ve?(lt&&n.texStorage3D(t.TEXTURE_3D,ue,ce,$.width,$.height,$.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,de,Se,$.data)):n.texImage3D(t.TEXTURE_3D,0,ce,$.width,$.height,$.depth,0,de,Se,$.data);else if(M.isFramebufferTexture){if(lt)if(Ve)n.texStorage2D(t.TEXTURE_2D,ue,ce,$.width,$.height);else{let Q=$.width,Me=$.height;for(let fe=0;fe<ue;fe++)n.texImage2D(t.TEXTURE_2D,fe,ce,Q,Me,0,de,Se,null),Q>>=1,Me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),$.parentNode!==Q){Q.appendChild($),p.add(M),Q.onpaint=Ge=>{const kt=Ge.changedElements;for(const mt of p)kt.includes(mt.image)&&(mt.needsUpdate=!0)},Q.requestPaint();return}const Me=0,fe=t.RGBA,te=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Me,fe,te,Pe,$),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ve&&lt){const Q=ct(ze[0]);n.texStorage2D(t.TEXTURE_2D,ue,ce,Q.width,Q.height)}for(let Q=0,Me=ze.length;Q<Me;Q++)oe=ze[Q],Ve?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de,Se,oe):n.texImage2D(t.TEXTURE_2D,Q,ce,de,Se,oe);M.generateMipmaps=!1}else if(Ve){if(lt){const Q=ct($);n.texStorage2D(t.TEXTURE_2D,ue,ce,Q.width,Q.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Se,$)}else n.texImage2D(t.TEXTURE_2D,0,ce,de,Se,$);u(M)&&d(Z),se.__version=ne.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ke(b,M,F){if(M.image.length!==6)return;const Z=K(b,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+F);const ne=i.get(ee);if(ee.version!==ne.__version||Z===!0){n.activeTexture(t.TEXTURE0+F);const se=rt.getPrimaries(rt.workingColorSpace),j=M.colorSpace===yr?null:rt.getPrimaries(M.colorSpace),$=M.colorSpace===yr||se===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!de&&!Se?ce[te]=g(M.image[te],!0,r.maxCubemapSize):ce[te]=Se?M.image[te].image:M.image[te],ce[te]=le(M,ce[te]);const oe=ce[0],ze=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type),lt=S(M.internalFormat,ze,Ve,M.normalized,M.colorSpace),N=M.isVideoTexture!==!0,ue=ne.__version===void 0||Z===!0,Q=ee.dataReady;let Me=w(M,oe);Fe(t.TEXTURE_CUBE_MAP,M);let fe;if(de){N&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,lt,oe.width,oe.height);for(let te=0;te<6;te++){fe=ce[te].mipmaps;for(let Pe=0;Pe<fe.length;Pe++){const Ge=fe[Pe];M.format!==gi?ze!==null?N?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ge.width,Ge.height,ze,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,lt,Ge.width,Ge.height,0,Ge.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ge.width,Ge.height,ze,Ve,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,lt,Ge.width,Ge.height,0,ze,Ve,Ge.data)}}}else{if(fe=M.mipmaps,N&&ue){fe.length>0&&Me++;const te=ct(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,lt,te.width,te.height)}for(let te=0;te<6;te++)if(Se){N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,ze,Ve,ce[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,lt,ce[te].width,ce[te].height,0,ze,Ve,ce[te].data);for(let Pe=0;Pe<fe.length;Pe++){const kt=fe[Pe].image[te].image;N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,kt.width,kt.height,ze,Ve,kt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,lt,kt.width,kt.height,0,ze,Ve,kt.data)}}else{N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ze,Ve,ce[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,lt,ze,Ve,ce[te]);for(let Pe=0;Pe<fe.length;Pe++){const Ge=fe[Pe];N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,ze,Ve,Ge.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,lt,ze,Ve,Ge.image[te])}}}u(M)&&d(t.TEXTURE_CUBE_MAP),ne.__version=ee.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ue(b,M,F,Z,ee,ne){const se=s.convert(F.format,F.colorSpace),j=s.convert(F.type),$=S(F.internalFormat,se,j,F.normalized,F.colorSpace),de=i.get(M),Se=i.get(F);if(Se.__renderTarget=M,!de.__hasExternalTextures){const ce=Math.max(1,M.width>>ne),oe=Math.max(1,M.height>>ne);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ne,$,ce,oe,M.depth,0,se,j,null):n.texImage2D(ee,ne,$,ce,oe,0,se,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ce(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ee,Se.__webglTexture,0,tt(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ee,Se.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function wt(b,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer){const Z=M.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,ne=T(M.stencilBuffer,ee),se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ce(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,tt(M),ne,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,tt(M),ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,b)}else{const Z=M.textures;for(let ee=0;ee<Z.length;ee++){const ne=Z[ee],se=s.convert(ne.format,ne.colorSpace),j=s.convert(ne.type),$=S(ne.internalFormat,se,j,ne.normalized,ne.colorSpace);Ce(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,tt(M),$,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,tt(M),$,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ke(b,M,F){const Z=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,M.depthTexture);const de=s.convert(M.depthTexture.format),Se=s.convert(M.depthTexture.type);let ce;M.depthTexture.format===nr?ce=t.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(ce=t.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ce,M.width,M.height,0,de,Se,null)}}else B(M.depthTexture,0);const ne=ee.__webglTexture,se=tt(M),j=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,$=M.depthTexture.format===ts?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===nr)Ce(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,j,ne,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,$,j,ne,0);else if(M.depthTexture.format===ts)Ce(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,j,ne,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,$,j,ne,0);else throw new Error("Unknown depthTexture format")}function st(b){const M=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Z}if(b.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)Ke(M.__webglFramebuffer[Z],b,Z);else{const Z=b.texture.mipmaps;Z&&Z.length>0?Ke(M.__webglFramebuffer[0],b,0):Ke(M.__webglFramebuffer,b,0)}else if(F){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),wt(M.__webglDepthbuffer[Z],b,!1);else{const ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}}else{const Z=b.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),wt(M.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(b,M,F){const Z=i.get(b);M!==void 0&&Ue(Z.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&st(b)}function je(b){const M=b.texture,F=i.get(b),Z=i.get(M);b.addEventListener("dispose",y);const ee=b.textures,ne=b.isWebGLCubeRenderTarget===!0,se=ee.length>1;if(se||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),ne){F.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[j]=[];for(let $=0;$<M.mipmaps.length;$++)F.__webglFramebuffer[j][$]=t.createFramebuffer()}else F.__webglFramebuffer[j]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)F.__webglFramebuffer[j]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(se)for(let j=0,$=ee.length;j<$;j++){const de=i.get(ee[j]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Ce(b)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let j=0;j<ee.length;j++){const $=ee[j];F.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[j]);const de=s.convert($.format,$.colorSpace),Se=s.convert($.type),ce=S($.internalFormat,de,Se,$.normalized,$.colorSpace,b.isXRRenderTarget===!0),oe=tt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ce,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,F.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),wt(F.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)Ue(F.__webglFramebuffer[j][$],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,$);else Ue(F.__webglFramebuffer[j],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);u(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){for(let j=0,$=ee.length;j<$;j++){const de=ee[j],Se=i.get(de);let ce=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Se.__webglTexture),Fe(ce,de),Ue(F.__webglFramebuffer,b,de,t.COLOR_ATTACHMENT0+j,ce,0),u(de)&&d(ce)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,Z.__webglTexture),Fe(j,M),M.mipmaps&&M.mipmaps.length>0)for(let $=0;$<M.mipmaps.length;$++)Ue(F.__webglFramebuffer[$],b,M,t.COLOR_ATTACHMENT0,j,$);else Ue(F.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,j,0);u(M)&&d(j),n.unbindTexture()}b.depthBuffer&&st(b)}function ye(b){const M=b.textures;for(let F=0,Z=M.length;F<Z;F++){const ee=M[F];if(u(ee)){const ne=v(b),se=i.get(ee).__webglTexture;n.bindTexture(ne,se),d(ne),n.unbindTexture()}}}const De=[],qe=[];function L(b){if(b.samples>0){if(Ce(b)===!1){const M=b.textures,F=b.width,Z=b.height;let ee=t.COLOR_BUFFER_BIT;const ne=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(b),j=M.length>1;if(j)for(let de=0;de<M.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const $=b.texture.mipmaps;$&&$.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let de=0;de<M.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[de]);const Se=i.get(M[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,F,Z,0,0,F,Z,ee,t.NEAREST),l===!0&&(De.length=0,qe.length=0,De.push(t.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.resolveDepthBuffer===!1&&(De.push(ne),qe.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let de=0;de<M.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,se.__webglColorRenderbuffer[de]);const Se=i.get(M[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function tt(b){return Math.min(r.maxSamples,b.samples)}function Ce(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(b){const M=o.render.frame;f.get(b)!==M&&(f.set(b,M),b.update())}function le(b,M){const F=b.colorSpace,Z=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Gc&&F!==yr&&(rt.getTransfer(F)===ft?(Z!==gi||ee!==zn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",F)),M}function ct(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=ae,this.rebindTextures=xt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jP(t,e){function n(i,r=yr){let s;const o=rt.getTransfer(r);if(i===zn)return t.UNSIGNED_BYTE;if(i===Qp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===py)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===hy)return t.BYTE;if(i===fy)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===Zp)return t.INT;if(i===Fi)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Wn)return t.HALF_FLOAT;if(i===my)return t.ALPHA;if(i===gy)return t.RGB;if(i===gi)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===ts)return t.DEPTH_STENCIL;if(i===em)return t.RED;if(i===tm)return t.RED_INTEGER;if(i===hs)return t.RG;if(i===nm)return t.RG_INTEGER;if(i===im)return t.RGBA_INTEGER;if(i===oc||i===ac||i===lc||i===cc)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===od||i===ad||i===ld||i===cd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===od)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ad)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ld)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ud||i===hd||i===fd||i===dd||i===pd||i===zc||i===md)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ud||i===hd)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===dd)return s.COMPRESSED_R11_EAC;if(i===pd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zc)return s.COMPRESSED_RG11_EAC;if(i===md)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gd||i===_d||i===vd||i===xd||i===yd||i===Sd||i===Md||i===Ed||i===wd||i===Td||i===bd||i===Ad||i===Cd||i===Rd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_d)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Md)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ed)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Td)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ad)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pd||i===Dd||i===Ld)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pd)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ld)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nd||i===Id||i===Vc||i===Ud)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Id)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ud)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ua?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const qP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $P{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ty(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new tn({vertexShader:qP,fragmentShader:YP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pe(new Vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KP extends Vr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,p=null,h=null,m=null,_=null;const x=typeof XRWebGLBinding<"u",g=new $P,u={},d=n.getContextAttributes();let v=null,S=null;const T=[],w=[],C=new Ee;let y=null;const A=new Jn;A.viewport=new Ot;const R=new Jn;R.viewport=new Ot;const P=[A,R],I=new nb;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=T[K];return me===void 0&&(me=new mh,T[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=T[K];return me===void 0&&(me=new mh,T[K]=me),me.getGripSpace()},this.getHand=function(K){let me=T[K];return me===void 0&&(me=new mh,T[K]=me),me.getHandSpace()};function U(K){const me=w.indexOf(K.inputSource);if(me===-1)return;const he=T[me];he!==void 0&&(he.update(K.inputSource,K.frame,c||o),he.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let K=0;K<T.length;K++){const me=w[K];me!==null&&(w[K]=null,T[K].disconnect(me))}W=null,Y=null,g.reset();for(const K in u)delete u[K];e.setRenderTarget(v),m=null,h=null,p=null,r=null,S=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),d.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ie=null,ke=null;d.depth&&(ke=d.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=d.stencil?ts:nr,Ie=d.stencil?Ua:Fi);const Ue={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};p=this.getBinding(),h=p.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Nn(h.textureWidth,h.textureHeight,{format:gi,type:zn,depthTexture:new _o(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Nn(m.framebufferWidth,m.framebufferHeight,{format:gi,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(K){for(let me=0;me<K.removed.length;me++){const he=K.removed[me],Ie=w.indexOf(he);Ie>=0&&(w[Ie]=null,T[Ie].disconnect(he))}for(let me=0;me<K.added.length;me++){const he=K.added[me];let Ie=w.indexOf(he);if(Ie===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=w.length){w.push(he),Ie=Ue;break}else if(w[Ue]===null){w[Ue]=he,Ie=Ue;break}if(Ie===-1)break}const ke=T[Ie];ke&&ke.connect(he)}}const B=new D,q=new D;function J(K,me,he){B.setFromMatrixPosition(me.matrixWorld),q.setFromMatrixPosition(he.matrixWorld);const Ie=B.distanceTo(q),ke=me.projectionMatrix.elements,Ue=he.projectionMatrix.elements,wt=ke[14]/(ke[10]-1),Ke=ke[14]/(ke[10]+1),st=(ke[9]+1)/ke[5],xt=(ke[9]-1)/ke[5],je=(ke[8]-1)/ke[0],ye=(Ue[8]+1)/Ue[0],De=wt*je,qe=wt*ye,L=Ie/(-je+ye),tt=L*-je;if(me.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(tt),K.translateZ(L),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ke[10]===-1)K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ce=wt+L,Ae=Ke+L,le=De-tt,ct=qe+(Ie-tt),b=st*Ke/Ae*Ce,M=xt*Ke/Ae*Ce;K.projectionMatrix.makePerspective(le,ct,b,M,Ce,Ae),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let me=K.near,he=K.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(he=g.depthFar)),I.near=R.near=A.near=me,I.far=R.far=A.far=he,(W!==I.near||Y!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),W=I.near,Y=I.far),I.layers.mask=K.layers.mask|6,A.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;const Ie=K.parent,ke=I.cameras;ae(I,Ie);for(let Ue=0;Ue<ke.length;Ue++)ae(ke[Ue],Ie);ke.length===2?J(I,A,R):I.projectionMatrix.copy(A.projectionMatrix),ge(K,I,Ie)};function ge(K,me,he){he===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(he.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(K){return u[K]};let Xe=null;function $e(K,me){if(f=me.getViewerPose(c||o),_=me,f!==null){const he=f.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ie=!1;he.length!==I.cameras.length&&(I.cameras.length=0,Ie=!0);for(let Ke=0;Ke<he.length;Ke++){const st=he[Ke];let xt=null;if(m!==null)xt=m.getViewport(st);else{const ye=p.getViewSubImage(h,st);xt=ye.viewport,Ke===0&&(e.setRenderTargetTextures(S,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(S))}let je=P[Ke];je===void 0&&(je=new Jn,je.layers.enable(Ke),je.viewport=new Ot,P[Ke]=je),je.matrix.fromArray(st.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(st.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(xt.x,xt.y,xt.width,xt.height),Ke===0&&(I.matrix.copy(je.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ie===!0&&I.cameras.push(je)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){p=i.getBinding();const Ke=p.getDepthInformation(he[0]);Ke&&Ke.isValid&&Ke.texture&&g.init(Ke,r.renderState)}if(ke&&ke.includes("camera-access")&&x){e.state.unbindTexture(),p=i.getBinding();for(let Ke=0;Ke<he.length;Ke++){const st=he[Ke].camera;if(st){let xt=u[st];xt||(xt=new Ty,u[st]=xt);const je=p.getCameraImage(st);xt.sourceTexture=je}}}}for(let he=0;he<T.length;he++){const Ie=w[he],ke=T[he];Ie!==null&&ke!==void 0&&ke.update(Ie,me,c||o)}Xe&&Xe(K,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Fe=new Py;Fe.setAnimationLoop($e),this.setAnimationLoop=function(K){Xe=K},this.dispose=function(){}}}const ZP=new ut,Fy=new He;Fy.set(-1,0,0,0,1,0,0,0,1);function QP(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,by(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,d,v,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),p(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&m(g,u,S)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),x(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,d,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Ln&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Ln&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const d=e.get(u),v=d.envMap,S=d.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(ZP.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fy),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,d,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*d,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function p(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,d){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ln&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=d.texture,g.transmissionSamplerSize.value.set(d.width,d.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function x(g,u){const d=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(d.matrixWorld),g.nearDistance.value=d.shadow.camera.near,g.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JP(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,v){const S=v.program;i.uniformBlockBinding(d,S)}function c(d,v){let S=r[d.id];S===void 0&&(_(d),S=f(d),r[d.id]=S,d.addEventListener("dispose",g));const T=v.program;i.updateUBOMapping(d,T);const w=e.render.frame;s[d.id]!==w&&(h(d),s[d.id]=w)}function f(d){const v=p();d.__bindingPointIndex=v;const S=t.createBuffer(),T=d.__size,w=d.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function p(){for(let d=0;d<a;d++)if(o.indexOf(d)===-1)return o.push(d),d;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(d){const v=r[d.id],S=d.uniforms,T=d.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,C=S.length;w<C;w++){const y=Array.isArray(S[w])?S[w]:[S[w]];for(let A=0,R=y.length;A<R;A++){const P=y[A];if(m(P,w,A,T)===!0){const I=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let U=0;U<W.length;U++){const z=W[U],k=x(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,I+Y,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):ArrayBuffer.isView(z)?P.__data.set(new z.constructor(z.buffer,z.byteOffset,P.__data.length)):(z.toArray(P.__data,Y),Y+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(d,v,S,T){const w=d.value,C=v+"_"+S;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:ArrayBuffer.isView(w)?T[C]=w.slice():T[C]=w.clone(),!0;{const y=T[C];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return T[C]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(y.equals(w)===!1)return y.copy(w),!0}}return!1}function _(d){const v=d.uniforms;let S=0;const T=16;for(let C=0,y=v.length;C<y;C++){const A=Array.isArray(v[C])?v[C]:[v[C]];for(let R=0,P=A.length;R<P;R++){const I=A[R],W=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,U=W.length;Y<U;Y++){const z=W[Y],k=x(z),B=S%T,q=B%k.boundary,J=B+q;S+=q,J!==0&&T-J<k.storage&&(S+=T-J),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=k.storage}}}const w=S%T;return w>0&&(S+=T-w),d.__size=S,d.__cache={},this}function x(d){const v={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(v.boundary=4,v.storage=4):d.isVector2?(v.boundary=8,v.storage=8):d.isVector3||d.isColor?(v.boundary=16,v.storage=12):d.isVector4?(v.boundary=16,v.storage=16):d.isMatrix3?(v.boundary=48,v.storage=48):d.isMatrix4?(v.boundary=64,v.storage=64):d.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(v.boundary=16,v.storage=d.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",d),v}function g(d){const v=d.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const d in r)t.deleteBuffer(r[d]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}const e2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function t2(){return Ti===null&&(Ti=new Ey(e2,16,16,hs,Wn),Ti.name="DFG_LUT",Ti.minFilter=mn,Ti.magFilter=mn,Ti.wrapS=Yi,Ti.wrapT=Yi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class n2{constructor(e={}){const{canvas:n=eT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=zn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=m,g=new Set([im,nm,tm]),u=new Set([zn,Fi,Ia,Ua,Qp,Jp]),d=new Uint32Array(4),v=new Int32Array(4),S=new D;let T=null,w=null;const C=[],y=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,I=null;this._outputColorSpace=kn;let W=0,Y=0,U=null,z=-1,k=null;const B=new Ot,q=new Ot;let J=null;const ae=new Be(0);let ge=0,Xe=n.width,$e=n.height,Fe=1,K=null,me=null;const he=new Ot(0,0,Xe,$e),Ie=new Ot(0,0,Xe,$e);let ke=!1;const Ue=new um;let wt=!1,Ke=!1;const st=new ut,xt=new D,je=new Ot,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function qe(){return U===null?Fe:1}let L=i;function tt(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Ge,!1),L===null){const O="webgl2";if(L=tt(O,E),L===null)throw tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw it("WebGLRenderer: "+E.message),E}let Ce,Ae,le,ct,b,M,F,Z,ee,ne,se,j,$,de,Se,ce,oe,ze,Ve,lt,N,ue,Q;function Me(){Ce=new tR(L),Ce.init(),N=new jP(L,Ce),Ae=new qC(L,Ce,e,N),le=new WP(L,Ce),Ae.reversedDepthBuffer&&h&&le.buffers.depth.setReversed(!0),ct=new rR(L),b=new PP,M=new XP(L,Ce,le,b,Ae,N,ct),F=new eR(R),Z=new lb(L),ue=new XC(L,Z),ee=new nR(L,Z,ct,ue),ne=new oR(L,ee,Z,ue,ct),ze=new sR(L,Ae,M),Se=new YC(b),se=new RP(R,F,Ce,Ae,ue,Se),j=new QP(R,b),$=new LP,de=new kP(Ce),oe=new WC(R,F,le,ne,_,l),ce=new GP(R,ne,Ae),Q=new JP(L,ct,Ae,le),Ve=new jC(L,Ce,ct),lt=new iR(L,Ce,ct),ct.programs=se.programs,R.capabilities=Ae,R.extensions=Ce,R.properties=b,R.renderLists=$,R.shadowMap=ce,R.state=le,R.info=ct}Me(),x!==zn&&(A=new lR(x,n.width,n.height,r,s));const fe=new KP(R,L);this.xr=fe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ce.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ce.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(E){E!==void 0&&(Fe=E,this.setSize(Xe,$e,!1))},this.getSize=function(E){return E.set(Xe,$e)},this.setSize=function(E,O,X=!0){if(fe.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=E,$e=O,n.width=Math.floor(E*Fe),n.height=Math.floor(O*Fe),X===!0&&(n.style.width=E+"px",n.style.height=O+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Xe*Fe,$e*Fe).floor()},this.setDrawingBufferSize=function(E,O,X){Xe=E,$e=O,Fe=X,n.width=Math.floor(E*X),n.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(x===zn){it("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Oe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(he)},this.setViewport=function(E,O,X,V){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,O,X,V),le.viewport(B.copy(he).multiplyScalar(Fe).round())},this.getScissor=function(E){return E.copy(Ie)},this.setScissor=function(E,O,X,V){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,O,X,V),le.scissor(q.copy(Ie).multiplyScalar(Fe).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(E){le.setScissorTest(ke=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,X=!0){let V=0;if(E){let H=!1;if(U!==null){const xe=U.texture.format;H=g.has(xe)}if(H){const xe=U.texture.type,Te=u.has(xe),ve=oe.getClearColor(),Re=oe.getClearAlpha(),Le=ve.r,We=ve.g,Ze=ve.b;Te?(d[0]=Le,d[1]=We,d[2]=Ze,d[3]=Re,L.clearBufferuiv(L.COLOR,0,d)):(v[0]=Le,v[1]=We,v[2]=Ze,v[3]=Re,L.clearBufferiv(L.COLOR,0,v))}else V|=L.COLOR_BUFFER_BIT}O&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Ge,!1),oe.dispose(),$.dispose(),de.dispose(),b.dispose(),F.dispose(),ne.dispose(),ue.dispose(),Q.dispose(),se.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ym),fe.removeEventListener("sessionend",Sm),Hr.stop()};function te(E){E.preventDefault(),jc("WebGLRenderer: Context Lost."),P=!0}function Pe(){jc("WebGLRenderer: Context Restored."),P=!1;const E=ct.autoReset,O=ce.enabled,X=ce.autoUpdate,V=ce.needsUpdate,H=ce.type;Me(),ct.autoReset=E,ce.enabled=O,ce.autoUpdate=X,ce.needsUpdate=V,ce.type=H}function Ge(E){it("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function kt(E){const O=E.target;O.removeEventListener("dispose",kt),mt(O)}function mt(E){ki(E),b.remove(E)}function ki(E){const O=b.get(E).programs;O!==void 0&&(O.forEach(function(X){se.releaseProgram(X)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,V,H,xe){O===null&&(O=ye);const Te=H.isMesh&&H.matrixWorld.determinant()<0,ve=Yy(E,O,X,V,H);le.setMaterial(V,Te);let Re=X.index,Le=1;if(V.wireframe===!0){if(Re=ee.getWireframeAttribute(X),Re===void 0)return;Le=2}const We=X.drawRange,Ze=X.attributes.position;let Ne=We.start*Le,gt=(We.start+We.count)*Le;xe!==null&&(Ne=Math.max(Ne,xe.start*Le),gt=Math.min(gt,(xe.start+xe.count)*Le)),Re!==null?(Ne=Math.max(Ne,0),gt=Math.min(gt,Re.count)):Ze!=null&&(Ne=Math.max(Ne,0),gt=Math.min(gt,Ze.count));const Bt=gt-Ne;if(Bt<0||Bt===1/0)return;ue.setup(H,V,ve,X,Re);let Lt,yt=Ve;if(Re!==null&&(Lt=Z.get(Re),yt=lt,yt.setIndex(Lt)),H.isMesh)V.wireframe===!0?(le.setLineWidth(V.wireframeLinewidth*qe()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(H.isLine){let cn=V.linewidth;cn===void 0&&(cn=1),le.setLineWidth(cn*qe()),H.isLineSegments?yt.setMode(L.LINES):H.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else H.isPoints?yt.setMode(L.POINTS):H.isSprite&&yt.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))yt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const cn=H._multiDrawStarts,we=H._multiDrawCounts,In=H._multiDrawCount,ot=Re?Z.get(Re).bytesPerElement:1,Yn=b.get(V).currentProgram.getUniforms();for(let Mi=0;Mi<In;Mi++)Yn.setValue(L,"_gl_DrawID",Mi),yt.render(cn[Mi]/ot,we[Mi])}else if(H.isInstancedMesh)yt.renderInstances(Ne,Bt,H.count);else if(X.isInstancedBufferGeometry){const cn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,we=Math.min(X.instanceCount,cn);yt.renderInstances(Ne,Bt,we)}else yt.render(Ne,Bt)};function Si(E,O,X){E.transparent===!0&&E.side===Sn&&E.forceSinglePass===!1?(E.side=Ln,E.needsUpdate=!0,qa(E,O,X),E.side=Or,E.needsUpdate=!0,qa(E,O,X),E.side=Sn):qa(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),w=de.get(X),w.init(O),y.push(w),X.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xe=H.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const ve=xe[Te];Si(ve,X,H),V.add(ve)}else Si(xe,X,H),V.add(xe)}),w=y.pop(),V},this.compileAsync=function(E,O,X=null){const V=this.compile(E,O,X);return new Promise(H=>{function xe(){if(V.forEach(function(Te){b.get(Te).currentProgram.isReady()&&V.delete(Te)}),V.size===0){H(E);return}setTimeout(xe,10)}Ce.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ru=null;function jy(E){Ru&&Ru(E)}function ym(){Hr.stop()}function Sm(){Hr.start()}const Hr=new Py;Hr.setAnimationLoop(jy),typeof self<"u"&&Hr.setContext(self),this.setAnimationLoop=function(E){Ru=E,fe.setAnimationLoop(E),E===null?Hr.stop():Hr.start()},fe.addEventListener("sessionstart",ym),fe.addEventListener("sessionend",Sm),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(E,O);const X=fe.enabled===!0&&fe.isPresenting===!0,V=A!==null&&(U===null||X)&&A.begin(R,U);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(O),O=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,U),w=de.get(E,y.length),w.init(O),w.state.textureUnits=M.getTextureUnits(),y.push(w),st.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ue.setFromProjectionMatrix(st,Ri,O.reversedDepth),Ke=this.localClippingEnabled,wt=Se.init(this.clippingPlanes,Ke),T=$.get(E,C.length),T.init(),C.push(T),fe.enabled===!0&&fe.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&Pu(Te,O,-1/0,R.sortObjects)}Pu(E,O,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(K,me),De=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,De&&oe.addToRenderList(T,E),this.info.render.frame++,wt===!0&&Se.beginShadows();const H=w.state.shadowsArray;if(ce.render(H,E,O),wt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&A.hasRenderPass())===!1){const Te=T.opaque,ve=T.transmissive;if(w.setupLights(),O.isArrayCamera){const Re=O.cameras;if(ve.length>0)for(let Le=0,We=Re.length;Le<We;Le++){const Ze=Re[Le];Em(Te,ve,E,Ze)}De&&oe.render(E);for(let Le=0,We=Re.length;Le<We;Le++){const Ze=Re[Le];Mm(T,E,Ze,Ze.viewport)}}else ve.length>0&&Em(Te,ve,E,O),De&&oe.render(E),Mm(T,E,O)}U!==null&&Y===0&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),V&&A.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),ue.resetDefaultState(),z=-1,k=null,y.pop(),y.length>0?(w=y[y.length-1],M.setTextureUnits(w.state.textureUnits),wt===!0&&Se.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,I!==null&&I.renderEnd()};function Pu(E,O,X,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ue.intersectsSprite(E)){V&&je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(st);const Te=ne.update(E),ve=E.material;ve.visible&&T.push(E,Te,ve,X,je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ue.intersectsObject(E))){const Te=ne.update(E),ve=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),je.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),je.copy(Te.boundingSphere.center)),je.applyMatrix4(E.matrixWorld).applyMatrix4(st)),Array.isArray(ve)){const Re=Te.groups;for(let Le=0,We=Re.length;Le<We;Le++){const Ze=Re[Le],Ne=ve[Ze.materialIndex];Ne&&Ne.visible&&T.push(E,Te,Ne,X,je.z,Ze)}}else ve.visible&&T.push(E,Te,ve,X,je.z,null)}}const xe=E.children;for(let Te=0,ve=xe.length;Te<ve;Te++)Pu(xe[Te],O,X,V)}function Mm(E,O,X,V){const{opaque:H,transmissive:xe,transparent:Te}=E;w.setupLightsView(X),wt===!0&&Se.setGlobalState(R.clippingPlanes,X),V&&le.viewport(B.copy(V)),H.length>0&&ja(H,O,X),xe.length>0&&ja(xe,O,X),Te.length>0&&ja(Te,O,X),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Em(E,O,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Ne=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Nn(1,1,{generateMipmaps:!0,type:Ne?Wn:zn,minFilter:es,samples:Math.max(4,Ae.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const xe=w.state.transmissionRenderTarget[V.id],Te=V.viewport||B;xe.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);const ve=R.getRenderTarget(),Re=R.getActiveCubeFace(),Le=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(ae),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),De&&oe.render(X);const We=R.toneMapping;R.toneMapping=Ui;const Ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),wt===!0&&Se.setGlobalState(R.clippingPlanes,V),ja(E,X,V),M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let gt=0,Bt=O.length;gt<Bt;gt++){const Lt=O[gt],{object:yt,geometry:cn,material:we,group:In}=Lt;if(we.side===Sn&&yt.layers.test(V.layers)){const ot=we.side;we.side=Ln,we.needsUpdate=!0,wm(yt,X,V,cn,we,In),we.side=ot,we.needsUpdate=!0,Ne=!0}}Ne===!0&&(M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe))}R.setRenderTarget(ve,Re,Le),R.setClearColor(ae,ge),Ze!==void 0&&(V.viewport=Ze),R.toneMapping=We}function ja(E,O,X){const V=O.isScene===!0?O.overrideMaterial:null;for(let H=0,xe=E.length;H<xe;H++){const Te=E[H],{object:ve,geometry:Re,group:Le}=Te;let We=Te.material;We.allowOverride===!0&&V!==null&&(We=V),ve.layers.test(X.layers)&&wm(ve,O,X,Re,We,Le)}}function wm(E,O,X,V,H,xe){E.onBeforeRender(R,O,X,V,H,xe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(R,O,X,V,E,xe),H.transparent===!0&&H.side===Sn&&H.forceSinglePass===!1?(H.side=Ln,H.needsUpdate=!0,R.renderBufferDirect(X,O,V,H,E,xe),H.side=Or,H.needsUpdate=!0,R.renderBufferDirect(X,O,V,H,E,xe),H.side=Sn):R.renderBufferDirect(X,O,V,H,E,xe),E.onAfterRender(R,O,X,V,H,xe)}function qa(E,O,X){O.isScene!==!0&&(O=ye);const V=b.get(E),H=w.state.lights,xe=w.state.shadowsArray,Te=H.state.version,ve=se.getParameters(E,H.state,xe,O,X,w.state.lightProbeGridArray),Re=se.getProgramCacheKey(ve);let Le=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const We=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=F.get(E.envMap||V.environment,We),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",kt),Le=new Map,V.programs=Le);let Ze=Le.get(Re);if(Ze!==void 0){if(V.currentProgram===Ze&&V.lightsStateVersion===Te)return bm(E,ve),Ze}else ve.uniforms=se.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,X,ve),E.onBeforeCompile(ve,R),Ze=se.acquireProgram(ve,Re),Le.set(Re,Ze),V.uniforms=ve.uniforms;const Ne=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=Se.uniform),bm(E,ve),V.needsLights=Ky(E),V.lightsStateVersion=Te,V.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=Ze,V.uniformsList=null,Ze}function Tm(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=hc.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function bm(E,O){const X=b.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function qy(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let X=0,V=E.length;X<V;X++){const H=E[X];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function Yy(E,O,X,V,H){O.isScene!==!0&&(O=ye),M.resetTextureUnits();const xe=O.fog,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,ve=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:rt.workingColorSpace,Re=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Le=F.get(V.envMap||Te,Re),We=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ze=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!X.morphAttributes.position,gt=!!X.morphAttributes.normal,Bt=!!X.morphAttributes.color;let Lt=Ui;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Lt=R.toneMapping);const yt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,cn=yt!==void 0?yt.length:0,we=b.get(V),In=w.state.lights;if(wt===!0&&(Ke===!0||E!==k)){const Mt=E===k&&V.id===z;Se.setState(V,E,Mt)}let ot=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==In.state.version||we.outputColorSpace!==ve||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==Le||V.fog===!0&&we.fog!==xe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Se.numPlanes||we.numIntersection!==Se.numIntersection)||we.vertexAlphas!==We||we.vertexTangents!==Ze||we.morphTargets!==Ne||we.morphNormals!==gt||we.morphColors!==Bt||we.toneMapping!==Lt||we.morphTargetsCount!==cn||!!we.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,we.__version=V.version);let Yn=we.currentProgram;ot===!0&&(Yn=qa(V,O,H),I&&V.isNodeMaterial&&I.onUpdateProgram(V,Yn,we));let Mi=!1,sr=!1,gs=!1;const St=Yn.getUniforms(),zt=we.uniforms;if(le.useProgram(Yn.program)&&(Mi=!0,sr=!0,gs=!0),V.id!==z&&(z=V.id,sr=!0),we.needsLights){const Mt=qy(w.state.lightProbeGridArray,H);we.lightProbeGrid!==Mt&&(we.lightProbeGrid=Mt,sr=!0)}if(Mi||k!==E){le.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(L,"projectionMatrix",E.projectionMatrix),St.setValue(L,"viewMatrix",E.matrixWorldInverse);const ar=St.map.cameraPosition;ar!==void 0&&ar.setValue(L,xt.setFromMatrixPosition(E.matrixWorld)),Ae.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,sr=!0,gs=!0)}if(we.needsLights&&(In.state.directionalShadowMap.length>0&&St.setValue(L,"directionalShadowMap",In.state.directionalShadowMap,M),In.state.spotShadowMap.length>0&&St.setValue(L,"spotShadowMap",In.state.spotShadowMap,M),In.state.pointShadowMap.length>0&&St.setValue(L,"pointShadowMap",In.state.pointShadowMap,M)),H.isSkinnedMesh){St.setOptional(L,H,"bindMatrix"),St.setOptional(L,H,"bindMatrixInverse");const Mt=H.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),St.setValue(L,"boneTexture",Mt.boneTexture,M))}H.isBatchedMesh&&(St.setOptional(L,H,"batchingTexture"),St.setValue(L,"batchingTexture",H._matricesTexture,M),St.setOptional(L,H,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",H._indirectTexture,M),St.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",H._colorsTexture,M));const or=X.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&ze.update(H,X,Yn),(sr||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,St.setValue(L,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(zt.envMapIntensity.value=O.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=t2()),sr){if(St.setValue(L,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&$y(zt,gs),xe&&V.fog===!0&&j.refreshFogUniforms(zt,xe),j.refreshMaterialUniforms(zt,V,Fe,$e,w.state.transmissionRenderTarget[E.id]),we.needsLights&&we.lightProbeGrid){const Mt=we.lightProbeGrid;zt.probesSH.value=Mt.texture,zt.probesMin.value.copy(Mt.boundingBox.min),zt.probesMax.value.copy(Mt.boundingBox.max),zt.probesResolution.value.copy(Mt.resolution)}hc.upload(L,Tm(we),zt,M)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hc.upload(L,Tm(we),zt,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(L,"center",H.center),St.setValue(L,"modelViewMatrix",H.modelViewMatrix),St.setValue(L,"normalMatrix",H.normalMatrix),St.setValue(L,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const Mt=V.uniformsGroups;for(let ar=0,_s=Mt.length;ar<_s;ar++){const Am=Mt[ar];Q.update(Am,Yn),Q.bind(Am,Yn)}}return Yn}function $y(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Ky(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,O,X){const V=b.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),b.get(E.texture).__webglTexture=O,b.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const X=b.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Zy=L.createFramebuffer();this.setRenderTarget=function(E,O=0,X=0){U=E,W=O,Y=X;let V=null,H=!1,xe=!1;if(E){const ve=b.get(E);if(ve.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(L.FRAMEBUFFER,ve.__webglFramebuffer),B.copy(E.viewport),q.copy(E.scissor),J=E.scissorTest,le.viewport(B),le.scissor(q),le.setScissorTest(J),z=-1;return}else if(ve.__webglFramebuffer===void 0)M.setupRenderTarget(E);else if(ve.__hasExternalTextures)M.rebindTextures(E,b.get(E.texture).__webglTexture,b.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const We=E.depthTexture;if(ve.__boundDepthTexture!==We){if(We!==null&&b.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(xe=!0);const Le=b.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?V=Le[O][X]:V=Le[O],H=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?V=b.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?V=Le[X]:V=Le,B.copy(E.viewport),q.copy(E.scissor),J=E.scissorTest}else B.copy(he).multiplyScalar(Fe).floor(),q.copy(Ie).multiplyScalar(Fe).floor(),J=ke;if(X!==0&&(V=Zy),le.bindFramebuffer(L.FRAMEBUFFER,V)&&le.drawBuffers(E,V),le.viewport(B),le.scissor(q),le.setScissorTest(J),H){const ve=b.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,X)}else if(xe){const ve=O;for(let Re=0;Re<E.textures.length;Re++){const Le=b.get(E.textures[Re]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Re,Le.__webglTexture,X,ve)}}else if(E!==null&&X!==0){const ve=b.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,X)}z=-1},this.readRenderTargetPixels=function(E,O,X,V,H,xe,Te,ve=0){if(!(E&&E.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){le.bindFramebuffer(L.FRAMEBUFFER,Re);try{const Le=E.textures[ve],We=Le.format,Ze=Le.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),!Ae.textureFormatReadable(We)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ze)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&X>=0&&X<=E.height-H&&L.readPixels(O,X,V,H,N.convert(We),N.convert(Ze),xe)}finally{const Le=U!==null?b.get(U).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,V,H,xe,Te,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=b.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(O>=0&&O<=E.width-V&&X>=0&&X<=E.height-H){le.bindFramebuffer(L.FRAMEBUFFER,Re);const Le=E.textures[ve],We=Le.format,Ze=Le.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve),!Ae.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.bufferData(L.PIXEL_PACK_BUFFER,xe.byteLength,L.STREAM_READ),L.readPixels(O,X,V,H,N.convert(We),N.convert(Ze),0);const gt=U!==null?b.get(U).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,gt);const Bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await tT(L,Bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xe),L.deleteBuffer(Ne),L.deleteSync(Bt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,X=0){const V=Math.pow(2,-X),H=Math.floor(E.image.width*V),xe=Math.floor(E.image.height*V),Te=O!==null?O.x:0,ve=O!==null?O.y:0;M.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Te,ve,H,xe),le.unbindTexture()};const Qy=L.createFramebuffer(),Jy=L.createFramebuffer();this.copyTextureToTexture=function(E,O,X=null,V=null,H=0,xe=0){let Te,ve,Re,Le,We,Ze,Ne,gt,Bt;const Lt=E.isCompressedTexture?E.mipmaps[xe]:E.image;if(X!==null)Te=X.max.x-X.min.x,ve=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Le=X.min.x,We=X.min.y,Ze=X.isBox3?X.min.z:0;else{const zt=Math.pow(2,-H);Te=Math.floor(Lt.width*zt),ve=Math.floor(Lt.height*zt),E.isDataArrayTexture?Re=Lt.depth:E.isData3DTexture?Re=Math.floor(Lt.depth*zt):Re=1,Le=0,We=0,Ze=0}V!==null?(Ne=V.x,gt=V.y,Bt=V.z):(Ne=0,gt=0,Bt=0);const yt=N.convert(O.format),cn=N.convert(O.type);let we;O.isData3DTexture?(M.setTexture3D(O,0),we=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(M.setTexture2DArray(O,0),we=L.TEXTURE_2D_ARRAY):(M.setTexture2D(O,0),we=L.TEXTURE_2D),le.activeTexture(L.TEXTURE0),le.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),le.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),le.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const In=le.getParameter(L.UNPACK_ROW_LENGTH),ot=le.getParameter(L.UNPACK_IMAGE_HEIGHT),Yn=le.getParameter(L.UNPACK_SKIP_PIXELS),Mi=le.getParameter(L.UNPACK_SKIP_ROWS),sr=le.getParameter(L.UNPACK_SKIP_IMAGES);le.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),le.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),le.pixelStorei(L.UNPACK_SKIP_ROWS,We),le.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);const gs=E.isDataArrayTexture||E.isData3DTexture,St=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const zt=b.get(E),or=b.get(O),Mt=b.get(zt.__renderTarget),ar=b.get(or.__renderTarget);le.bindFramebuffer(L.READ_FRAMEBUFFER,Mt.__webglFramebuffer),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let _s=0;_s<Re;_s++)gs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(E).__webglTexture,H,Ze+_s),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(O).__webglTexture,xe,Bt+_s)),L.blitFramebuffer(Le,We,Te,ve,Ne,gt,Te,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);le.bindFramebuffer(L.READ_FRAMEBUFFER,null),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||b.has(E)){const zt=b.get(E),or=b.get(O);le.bindFramebuffer(L.READ_FRAMEBUFFER,Qy),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,Jy);for(let Mt=0;Mt<Re;Mt++)gs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,zt.__webglTexture,H,Ze+Mt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,zt.__webglTexture,H),St?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,or.__webglTexture,xe,Bt+Mt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,or.__webglTexture,xe),H!==0?L.blitFramebuffer(Le,We,Te,ve,Ne,gt,Te,ve,L.COLOR_BUFFER_BIT,L.NEAREST):St?L.copyTexSubImage3D(we,xe,Ne,gt,Bt+Mt,Le,We,Te,ve):L.copyTexSubImage2D(we,xe,Ne,gt,Le,We,Te,ve);le.bindFramebuffer(L.READ_FRAMEBUFFER,null),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else St?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(we,xe,Ne,gt,Bt,Te,ve,Re,yt,cn,Lt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(we,xe,Ne,gt,Bt,Te,ve,Re,yt,Lt.data):L.texSubImage3D(we,xe,Ne,gt,Bt,Te,ve,Re,yt,cn,Lt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,xe,Ne,gt,Te,ve,yt,cn,Lt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,xe,Ne,gt,Lt.width,Lt.height,yt,Lt.data):L.texSubImage2D(L.TEXTURE_2D,xe,Ne,gt,Te,ve,yt,cn,Lt);le.pixelStorei(L.UNPACK_ROW_LENGTH,In),le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),le.pixelStorei(L.UNPACK_SKIP_PIXELS,Yn),le.pixelStorei(L.UNPACK_SKIP_ROWS,Mi),le.pixelStorei(L.UNPACK_SKIP_IMAGES,sr),xe===0&&O.generateMipmaps&&L.generateMipmap(we),le.unbindTexture()},this.initRenderTarget=function(E){b.get(E).__webglFramebuffer===void 0&&M.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){W=0,Y=0,U=null,le.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}const fc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Xa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const i2=new Wa(-1,1,1,-1,0,1);class r2 extends Ct{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const s2=new r2;class ky{constructor(e){this._mesh=new pe(s2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,i2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class o2 extends Xa{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qc.clone(e.uniforms),this.material=new tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ky(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class l_ extends Xa{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class a2 extends Xa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class l2{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ee);this._width=i.width,this._height=i.height,n=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new o2(fc),this.copyPass.material.blending=Ii,this.timer=new ib}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}l_!==void 0&&(o instanceof l_?i=!0:o instanceof a2&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class c2 extends Xa{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Be}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const u2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xo extends Xa{constructor(e,n=1,i,r){super(),this.strength=n,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nn(s,o,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const p=new Nn(s,o,{type:Wn});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const h=new Nn(s,o,{type:Wn});h.texture.name="UnrealBloomPass.v"+f,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),o=Math.round(o/2)}const a=u2;this.highPassUniforms=Qc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ee(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qc.clone(fc.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:fc.vertexShader,fragmentShader:fc.fragmentShader,premultipliedAlpha:!0,blending:Bn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new It,this._fsQuad=new ky(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ee(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let r=0;r<e;r++)n.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new tn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new tn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}xo.BlurDirectionX=new Ee(1,0);xo.BlurDirectionY=new Ee(0,1);class By extends Ft{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ee(.5,.5),this.addEventListener("removed",function(){this.traverse(function(n){n.element&&n.element instanceof n.element.ownerDocument.defaultView.Element&&n.element.parentNode!==null&&n.element.remove()})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const ks=new D,c_=new ut,u_=new ut,h_=new D,f_=new D;class h2{constructor(e={}){const n=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:r}},this.render=function(_,x){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),c_.copy(x.matrixWorldInverse),u_.multiplyMatrices(x.projectionMatrix,c_),f(_,_,x),this.sortObjects&&m(_)},this.setSize=function(_,x){i=_,r=x,s=i/2,o=r/2,l.style.width=_+"px",l.style.height=x+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let x=0,g=_.children.length;x<g;x++)c(_.children[x])}function f(_,x,g){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){ks.setFromMatrixPosition(_.matrixWorld),ks.applyMatrix4(u_);const u=ks.z>=-1&&ks.z<=1&&_.layers.test(g.layers)===!0,d=_.element;d.style.display=u===!0?"":"none",u===!0&&(_.onBeforeRender(n,x,g),d.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(ks.x*s+s)+"px,"+(-ks.y*o+o)+"px)",d.parentNode!==l&&l.appendChild(d),_.onAfterRender(n,x,g));const v={distanceToCameraSquared:p(g,_)};a.objects.set(_,v)}for(let u=0,d=_.children.length;u<d;u++)f(_.children[u],x,g)}function p(_,x){return h_.setFromMatrixPosition(_.matrixWorld),f_.setFromMatrixPosition(x.matrixWorld),h_.distanceToSquared(f_)}function h(_){const x=[];return _.traverseVisible(function(g){g.isCSS2DObject&&x.push(g)}),x}function m(_){const x=h(_).sort(function(u,d){if(u.renderOrder!==d.renderOrder)return d.renderOrder-u.renderOrder;const v=a.objects.get(u).distanceToCameraSquared,S=a.objects.get(d).distanceToCameraSquared;return v-S}),g=x.length;for(let u=0,d=x.length;u<d;u++)x[u].element.style.zIndex=g-u}}}function f2(t){const e=new n2({canvas:t,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=fa,e.toneMapping=Kp,e.toneMappingExposure=2.2,e.outputColorSpace=kn,e}function d2(){const t=new h2;return t.setSize(window.innerWidth,window.innerHeight),t.domElement.style.position="absolute",t.domElement.style.top="0",t.domElement.style.pointerEvents="none",document.body.appendChild(t.domElement),t}function p2(t,e,n){const i=new l2(t);i.addPass(new c2(e,n));const r=new xo(new Ee(window.innerWidth,window.innerHeight),.8,.5,.7);return i.addPass(r),{composer:i,vignettePass:{uniforms:{dangerPulse:{value:0}}}}}const d_={type:"change"},pm={type:"start"},zy={type:"end"},Gl=new Ga,p_=new _r,m2=Math.cos(70*kd.DEG2RAD),Xt=new D,bn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gh=1e-6;class g2 extends ob{constructor(e,n=null){super(e,n),this.state=vt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ro.ROTATE,MIDDLE:ro.DOLLY,RIGHT:ro.PAN},this.touches={ONE:Zs.ROTATE,TWO:Zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Fr,this._lastTargetPosition=new D,this._quat=new Fr().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Og,this._sphericalDelta=new Og,this._scale=1,this._panOffset=new D,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new D,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v2.bind(this),this._onPointerDown=_2.bind(this),this._onPointerUp=x2.bind(this),this._onContextMenu=b2.bind(this),this._onMouseWheel=M2.bind(this),this._onKeyDown=E2.bind(this),this._onTouchStart=w2.bind(this),this._onTouchMove=T2.bind(this),this._onMouseDown=y2.bind(this),this._onMouseMove=S2.bind(this),this._interceptControlDown=A2.bind(this),this._interceptControlUp=C2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(d_),this.update(),this.state=vt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Xt.copy(n).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),r<-Math.PI?r+=bn:r>Math.PI&&(r-=bn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Xt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Gl.origin.copy(this.object.position),Gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gl.direction))<m2?this.object.lookAt(this.target):(p_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gl.intersectPlane(p_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Gh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gh||this._lastTargetPosition.distanceToSquared(this.target)>Gh?(this.dispatchEvent(d_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Xt.setFromMatrixColumn(n,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,n){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(n,1):(Xt.setFromMatrixColumn(n,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Xt.copy(r).sub(this.target);let s=Xt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/n.clientHeight),this._rotateUp(bn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/n.clientHeight),this._rotateUp(bn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ee,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function v2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function x2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zy),this.state=vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function y2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ro.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=vt.DOLLY;break;case ro.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}break;case ro.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(pm)}function S2(t){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function M2(t){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(t.preventDefault(),this.dispatchEvent(pm),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(zy))}function E2(t){this.enabled!==!1&&this._handleKeyDown(t)}function w2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=vt.TOUCH_ROTATE;break;case Zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case Zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=vt.TOUCH_DOLLY_PAN;break;case Zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(pm)}function T2(t){switch(this._trackPointer(t),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=vt.NONE}}function b2(t){this.enabled!==!1&&t.preventDefault()}function A2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function R2(t,e){const i=t/e,r=new Wa(-12*i,12*i,12,-12,.1,1e3);return r.position.set(15,15,15),r.lookAt(0,0,0),r}function P2(t,e,n){const r=e/n;t.left=-20*r,t.right=20*r,t.top=20,t.bottom=-20,t.updateProjectionMatrix()}function D2(t,e){const n=new g2(t,e);return n.target.set(0,0,0),n.enableDamping=!0,n.dampingFactor=.08,n.enableRotate=!0,n.rotateSpeed=.6,n.enableZoom=!0,n.zoomSpeed=.8,n.minZoom=.85,n.maxZoom=2.2,n.enablePan=!1,n.minPolarAngle=.4,n.maxPolarAngle=1.05,n.update(),n}function L2(t){const e=new eb(7833753,.6);t.add(e);const n=new ZT(9083816,2241314,1.2);t.add(n);const i=new Oh(11584734,1.5);i.position.set(-10,25,-10),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=100,i.shadow.camera.left=-25,i.shadow.camera.right=25,i.shadow.camera.top=25,i.shadow.camera.bottom=-25,i.shadow.bias=-5e-4,t.add(i),t.add(i.target);const r=new Oh(16777215,.4);r.position.set(20,10,20),t.add(r);const s=new Oh(10070715,.3);s.position.set(15,10,15),t.add(s);const o=[];return[{pos:[0,2.5,8.5],color:65535},{pos:[-5.5,1.8,7],color:65535},{pos:[5.5,1.8,7],color:65535},{pos:[0,2.5,-8.5],color:16711935},{pos:[-5.5,1.8,-7],color:16711935},{pos:[5.5,1.8,-7],color:16711935}].forEach(({pos:l,color:c})=>{const f=new Ry(c,2.5,10,2);f.position.set(...l),f.userData.baseIntensity=2.5,f.userData.flickerOffset=Math.random()*Math.PI*2,t.add(f),o.push(f)}),window.addEventListener("lightning_strike",l=>{var p;const c=((p=l.detail)==null?void 0:p.intensity)||2,f=1.5;i.intensity=f*(8+Math.random()*6)*(c/2),i.color.setHex(16777215),setTimeout(()=>{i.intensity=f*3*(c/2),setTimeout(()=>{i.intensity=f*15*(c/2),setTimeout(()=>{i.intensity=f,i.color.setHex(11584734)},60)},40)},50)}),{ambient:e,hemi:n,sun:i,fill:s,rim:r,torchLights:o}}function N2(t,e){const{torchLights:n,sun:i}=t;n.forEach(r=>{const s=Math.sin(e*8+r.userData.flickerOffset)*.4+Math.sin(e*15+r.userData.flickerOffset)*.2;r.intensity=r.userData.baseIntensity+s}),Math.random()>.999&&(i.intensity=1.5*6,i.color.setHex(16777215),setTimeout(()=>{i.intensity=1.5,i.color.setHex(11584734)},40+Math.random()*80))}const dc=400;function I2(t){const e=document.createElement("canvas");e.width=1,e.height=256;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#000000"),i.addColorStop(1,"#330000"),n.fillStyle=i,n.fillRect(0,0,1,256);const r=new Hd(e);t.background=r;const s=ye=>{const De=document.createElement("canvas");De.width=64,De.height=64;const qe=De.getContext("2d"),L=qe.createRadialGradient(32,32,0,32,32,32);return L.addColorStop(0,ye),L.addColorStop(1,"rgba(0,0,0,0)"),qe.fillStyle=L,qe.fillRect(0,0,64,64),new Hd(De)},o=new ti(15,32,32),a=new It({color:16711680}),l=new pe(o,a);l.position.set(-60,50,-80),t.add(l);const c=new Bd(new Yc({map:s("#ff0000"),transparent:!0,opacity:.5,blending:Bn}));c.scale.set(60,60,1),l.add(c);const f=new Nt,p=new _t({color:10466756,transparent:!0,opacity:.4,flatShading:!0,roughness:1}),h=new Zc(1.5,0);for(let ye=0;ye<25;ye++){const De=new Nt,qe=4+Math.floor(Math.random()*6);for(let Ce=0;Ce<qe;Ce++){const Ae=new pe(h,p);Ae.position.set(Ce*1.3,Math.random()*.8,Math.random()*.8),Ae.scale.setScalar(.7+Math.random()*1.2),De.add(Ae)}const L=Math.random()*Math.PI*2,tt=40+Math.random()*60;De.position.set(Math.cos(L)*tt,25+Math.random()*10,Math.sin(L)*tt),De.userData.speed=.4+Math.random(),f.add(De)}t.add(f);const m=8e4,_=new Vn(.12,.7);_.translate(0,.35,0);const x=new _t({color:6689041,roughness:.8,side:Sn}),g=new zT(_,x,m);g.receiveShadow=!0;const u=new Ft,d=new Be,v=[3820085,4871498,3095087,4872778,5925466],S=9,T=20;for(let ye=0;ye<m;ye++){let De,qe;do De=(Math.random()-.5)*120,qe=(Math.random()-.5)*120;while(Math.abs(De)<S&&Math.abs(qe)<T);u.position.set(De,0,qe),u.rotation.set((Math.random()-.5)*.2,Math.random()*Math.PI,(Math.random()-.5)*.2);const L=.6+Math.random()*1.2;u.scale.set(L,.4+Math.random()*1,L),u.updateMatrix(),g.setMatrixAt(ye,u.matrix),d.setHex(v[Math.floor(Math.random()*v.length)]),g.setColorAt(ye,d)}t.add(g);const w=new _t({color:1708298,roughness:1});new _t({color:7829367,roughness:1});const C=new _t({color:3351057,roughness:1}),y=()=>{const ye=new Nt,De=new _t({color:13421772,roughness:1}),qe=new _t({color:4013373,roughness:1}),L=new Jt(.03,.03,1.2);L.translate(0,-.6,0);const tt=new pe(L,C);ye.add(tt);const Ce=new Nt;Ce.position.y=-1.2;const Ae=new pe(new Zc(.14,0),De);Ae.position.y=-.05,Ae.rotation.x=.5,Ce.add(Ae);const le=new Nt,ct=new pe(new Jt(.04,.04,.6),De);le.add(ct);const b=new wu(.15,.02,6,12,Math.PI);for(let $=0;$<4;$++){const de=new pe(b,De);de.position.y=.15-$*.12,de.rotation.x=Math.PI/2,le.add(de)}le.position.y=-.4,Ce.add(le);const M=Math.random()>.5?De:qe,F=new Jt(.03,.02,.6);F.translate(0,-.3,0);const Z=new pe(F,M);Z.position.set(-.18,-.2,0),Z.rotation.z=.2,Ce.add(Z);const ee=new pe(F,M);ee.position.set(.18,-.2,0),ee.rotation.z=-.2,Ce.add(ee);const ne=new Jt(.04,.02,.7);ne.translate(0,-.35,0);const se=new pe(ne,M);se.position.set(-.1,-.7,0),se.rotation.x=.2,Ce.add(se);const j=new pe(ne,M);return j.position.set(.1,-.7,0),j.rotation.x=-.2,Ce.add(j),ye.add(Ce),ye.userData.isCorpse=!0,ye.userData.swaySpeed=.6+Math.random()*.4,ye.userData.swayOffset=Math.random()*Math.PI*2,ye.userData.twitchTimer=0,ye},A=()=>{const ye=new Nt,De=new _t({color:1705221,emissive:16711680,emissiveIntensity:.1,roughness:1});let qe=new D(0,0,0),L=new yi(0,0,0);const tt=5+Math.floor(Math.random()*4);for(let Ce=0;Ce<tt;Ce++){const Ae=1.2+Math.random()*1.5,le=.5*(1-Ce/tt)+.15,ct=new Jt(le*.7,le,Ae,5);ct.translate(0,Ae/2,0);const b=new pe(ct,De);if(b.position.copy(qe),b.rotation.copy(L),ye.add(b),Math.random()>.4){const F=new pe(new Pi(.1,.6,3),w);F.position.copy(qe).add(new D(le,Ae/2,0).applyEuler(L)),F.rotation.z=Math.PI/2,ye.add(F)}const M=new D(0,1,0).applyEuler(L);if(qe.add(M.multiplyScalar(Ae)),L.x+=(Math.random()-.5)*.8,L.z+=(Math.random()-.5)*.8,L.y+=(Math.random()-.5)*1.5,Ce>1&&Math.random()>.25){const F=1+Math.floor(Math.random()*3);for(let Z=0;Z<F;Z++){const ee=new Nt;let ne=new D(0,0,0),se=new yi((Math.random()-.5)*2.5,Math.random()*Math.PI*2,(Math.random()-.5)*2.5);const j=3+Math.floor(Math.random()*4);for(let $=0;$<j;$++){const de=.7+Math.random()*1.2,Se=le*.5*(1-$/j),ce=new Jt(Se*.6,Se,de,3);ce.translate(0,de/2,0);const oe=new pe(ce,De);if(oe.position.copy(ne),oe.rotation.copy(se),ee.add(oe),Math.random()>.6){const Ve=new pe(new Pi(.05,.4,3),w);Ve.position.copy(ne).setY(ne.y+de/2),ee.add(Ve)}const ze=new D(0,1,0).applyEuler(se);ne.add(ze.multiplyScalar(de)),se.x+=(Math.random()-.5)*1,se.z+=(Math.random()-.5)*1}if(ee.position.copy(qe),ye.add(ee),Math.random()>.12){const $=y();$.position.copy(ne),$.rotation.x=-se.x,$.rotation.z=-se.z,ee.add($)}}}}return ye},R=new Nt,P=new _t({color:5592405,roughness:.9}),I=new _t({color:4865068,roughness:1}),W=new fm(1,0),Y=9;for(let ye=0;ye<180;ye++){const De=Math.random()*Math.PI*2,qe=18+Math.random()*65,L=Math.cos(De)*qe,tt=Math.sin(De)*qe;if(Math.abs(L)<Y&&Math.abs(tt)<20)continue;const Ce=Math.random();if(Ce<.1){const Ae=A();Ae.position.set(L,0,tt),Ae.rotation.y=Math.random()*Math.PI*2,Ae.scale.setScalar(.5+Math.random()*1.5),R.add(Ae)}else if(Ce<.35){const Ae=new pe(W,P);Ae.position.set(L,.2,tt),Ae.rotation.set(Math.random(),Math.random(),Math.random()),Ae.scale.set(1.2+Math.random()*1.5,.8+Math.random()*1.5,1.2+Math.random()*1.5),R.add(Ae)}else if(Ce<.75){const Ae=new Nt,le=new pe(new Jt(.05,.05,3),I);le.position.y=1.5,Ae.add(le);const ct=new pe(new Vn(.5,1.5),new _t({color:Math.random()>.5?11158596:4474026,side:Sn}));ct.position.set(0,2,.3),ct.rotation.y=Math.PI/2,Ae.add(ct),Ae.position.set(L,0,tt),Ae.rotation.z=(Math.random()-.5)*.5,R.add(Ae)}else{const Ae=new pe(new sn(1,1,1),I);Ae.position.set(L,.5,tt),Ae.rotation.y=Math.random(),R.add(Ae)}}t.add(R);const U=new _t({color:2236962,metalness:.8,roughness:.2}),z=new Jt(.05,.08,3.5,8),k=new sn(.4,.4,.4),B=new It({color:16755268}),q=(ye,De)=>{const qe=new Nt,L=new pe(z,U);L.position.y=1.75,qe.add(L);const tt=new pe(k,U);tt.position.y=3.5,qe.add(tt);const Ce=new pe(new ti(.15,8,8),B);Ce.position.set(0,3.4,.2),qe.add(Ce);const Ae=new Ry(16755268,1.5,8);Ae.position.set(0,3.4,.3),qe.add(Ae),qe.position.set(ye,0,De),t.add(qe)};[-7.5,7.5].forEach(ye=>{[-15,-5,5,15].forEach(De=>{q(ye,De)})});const J=new Ct,ae=new Float32Array(dc*3),ge=new Float32Array(dc);for(let ye=0;ye<dc;ye++)ae[ye*3]=(Math.random()-.5)*60,ae[ye*3+1]=Math.random()*15,ae[ye*3+2]=(Math.random()-.5)*80,ge[ye]=.1+Math.random()*.5;J.setAttribute("position",new En(ae,3));const Xe=new uc({color:65535,size:.08,transparent:!0,opacity:.6,blending:Bn}),$e=new Ih(J,Xe);t.add($e),t.fog=new cm(4456482,.03);const Fe=new Ct,K=new Float32Array(500*3),me=new Float32Array(500);for(let ye=0;ye<500;ye++)K[ye*3]=(Math.random()-.5)*100,K[ye*3+1]=Math.random()*20,K[ye*3+2]=(Math.random()-.5)*100,me[ye]=.1+Math.random()*.3;Fe.setAttribute("position",new En(K,3));const he=new uc({color:16729207,size:.08,transparent:!0,opacity:.6,blending:Bn}),Ie=new Ih(Fe,he);t.add(Ie);const ke=new Nt,Ue=new Vn(10,10),wt=new It({color:2232593,transparent:!0,opacity:.15,depthWrite:!1});for(let ye=0;ye<30;ye++){const De=new pe(Ue,wt);De.position.set((Math.random()-.5)*40,.5+Math.random()*2,(Math.random()-.5)*60),De.rotation.x=-Math.PI/2,De.scale.setScalar(1+Math.random()*2),ke.add(De)}t.add(ke);const Ke=new Ct,st=new Float32Array(200*3);for(let ye=0;ye<200;ye++)st[ye*3]=(Math.random()-.5)*30,st[ye*3+1]=Math.random()*10,st[ye*3+2]=(Math.random()-.5)*50;Ke.setAttribute("position",new En(st,3));const xt=new uc({color:16755268,size:.05,transparent:!0,blending:Bn}),je=new Ih(Ke,xt);return t.add(je),{clouds:f,natureGroup:R,grassMesh:g,cipherParticles:$e,particleSpeeds:ge,smokeParticles:ke,embers:je,spores:Ie,sporeSpeeds:me}}function U2(t,e,n){if(t){if(t.clouds&&t.clouds.children.forEach(i=>{i.position.x+=i.userData.speed*e*.3,i.position.x>150&&(i.position.x=-150)}),t.cipherParticles){const i=t.cipherParticles.geometry.attributes.position.array;for(let r=0;r<dc;r++)i[r*3+1]+=t.particleSpeeds[r]*e*.5,i[r*3]+=Math.sin(n+r)*.01,i[r*3+1]>15&&(i[r*3+1]=0);t.cipherParticles.geometry.attributes.position.needsUpdate=!0}if(t.embers){const i=t.embers.geometry.attributes.position.array;for(let r=0;r<200;r++)i[r*3+1]+=e*1.5,i[r*3]+=Math.sin(n+r)*.02,i[r*3+1]>10&&(i[r*3+1]=0);t.embers.geometry.attributes.position.needsUpdate=!0}if(t.smokeParticles&&t.smokeParticles.children.forEach((i,r)=>{i.rotation.z+=e*.1*(r%2===0?1:-1),i.position.x+=Math.sin(n*.2+r)*.005}),t.spores){const i=t.spores.geometry.attributes.position.array;for(let r=0;r<500;r++)i[r*3+1]-=t.sporeSpeeds[r]*e*5,i[r*3]+=Math.sin(n*.5+r)*.01,i[r*3+1]<0&&(i[r*3+1]=20);t.spores.geometry.attributes.position.needsUpdate=!0}t.natureGroup&&t.natureGroup.children.forEach(i=>{i.children.forEach(r=>{r.isGroup&&r.children.forEach(s=>{if(s.userData&&s.userData.isCorpse){const o=s.userData;s.rotation.x=Math.sin(n*o.swaySpeed+o.swayOffset)*.1,s.rotation.z=Math.cos(n*o.swaySpeed*.8+o.swayOffset)*.05,o.twitchTimer+=e,o.twitchTimer>2+Math.random()*3&&(s.rotation.y=(Math.random()-.5)*.3,o.twitchTimer>2.2&&(o.twitchTimer=0))}})})})}}class O2{constructor(){this.ctx=null,this.masterVolume=.3,this.ambienceStarted=!1}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext))}playDeploy(){this.init();const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(55,e+.4),i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(this.masterVolume,e+.05),i.gain.exponentialRampToValueAtTime(.001,e+.5),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(e+.5);const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(880,e),r.frequency.exponentialRampToValueAtTime(1760,e+.1),s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(this.masterVolume*.3,e+.02),s.gain.exponentialRampToValueAtTime(.001,e+.3),r.connect(s),s.connect(this.ctx.destination),r.start(),r.stop(e+.3)}playDeath(){this.init();const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(220,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(50,this.ctx.currentTime+.2),n.gain.setValueAtTime(this.masterVolume*.5,this.ctx.currentTime),n.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.2),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.2)}playTowerHit(){this.init();const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.3),n.gain.setValueAtTime(this.masterVolume,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.3)}playCorrect(){this.init();const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.05),s.gain.setValueAtTime(this.masterVolume*.5,e+i*.05),s.gain.exponentialRampToValueAtTime(.01,e+i*.05+.2),r.connect(s),s.connect(this.ctx.destination),r.start(e+i*.05),r.stop(e+i*.05+.2)})}playWrong(){this.init();const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(150,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(100,this.ctx.currentTime+.4),n.gain.setValueAtTime(this.masterVolume*.3,this.ctx.currentTime),n.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.4),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.4)}playNewQuestion(){this.init();const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.exponentialRampToValueAtTime(880,e+.1),i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(this.masterVolume*.2,e+.05),i.gain.exponentialRampToValueAtTime(.001,e+.2),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(e+.2)}startAmbience(){if(this.ambienceStarted)return;this.init(),this.ambienceStarted=!0;const e=this.ctx.createBuffer(1,2*this.ctx.sampleRate,this.ctx.sampleRate),n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=200;const i=this.ctx.createGain();i.gain.value=.02;const r=this.ctx.createBufferSource();r.buffer=e,r.loop=!0,r.connect(n),n.connect(i),i.connect(this.ctx.destination),r.start();const s=()=>{if(!this.ambienceStarted)return;const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="sawtooth",a.frequency.setValueAtTime(80,this.ctx.currentTime),a.frequency.linearRampToValueAtTime(70,this.ctx.currentTime+2);const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=400,l.gain.setValueAtTime(0,this.ctx.currentTime),l.gain.linearRampToValueAtTime(.08,this.ctx.currentTime+.5),l.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+3),a.connect(c),c.connect(l),l.connect(this.ctx.destination),a.start(),a.stop(this.ctx.currentTime+3),setTimeout(s,15e3+Math.random()*2e4)};s();const o=()=>{if(!this.ambienceStarted)return;const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="sawtooth",a.frequency.setValueAtTime(100+Math.random()*50,this.ctx.currentTime);const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=1e3+Math.sin(this.ctx.currentTime)*500,l.gain.setValueAtTime(0,this.ctx.currentTime),l.gain.linearRampToValueAtTime(.015,this.ctx.currentTime+1),l.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+4),a.connect(c),c.connect(l),l.connect(this.ctx.destination),a.start(),a.stop(this.ctx.currentTime+4),setTimeout(o,6e3+Math.random()*1e4)};o()}}const pc=new O2;class F2{constructor(e,n,i,r,s,o){this.renderer=e,this.css2d=n,this.composer=i,this.scene=r,this.camera=s,this.systems=o,this.lastTime=0,this.cameraShake={active:!1,intensity:0,remaining:0},this.dangerPulse=0,this.running=!1}start(){this.running=!0,requestAnimationFrame(e=>this._tick(e)),pc.startAmbience(),window.addEventListener("camera_shake",({detail:e})=>{this.cameraShake={active:!0,intensity:e.intensity,remaining:e.duration}})}stop(){this.running=!1}_tick(e){if(!this.running)return;const n=(e-this.lastTime)/1e3;this.lastTime=e,this.systems.environment&&U2(this.systems.environment,n,e/1e3),this.systems.troopPool&&this.systems.troopPool.updateAll(n),this.systems.particles&&this.systems.particles.update(n),Math.random()>.995&&this.systems.particles.emitAmbientLightning(),this.systems.lighting&&N2(this.systems.lighting,e/1e3),this.systems.ground&&(this.systems.ground.centerLineMat&&(this.systems.ground.centerLineMat.uniforms.time.value=e/1e3),this.systems.ground.groundMaterial&&(this.systems.ground.groundMaterial.uniforms.time.value=e/1e3)),this.systems.towers&&this.systems.towers.forEach(c=>{const f=c.userData.flag;f&&(f.position.x=.25+Math.sin(e*.003)*.05)});let i=0,r=0;this.cameraShake.active&&(this.cameraShake.remaining-=n*1e3,i=(Math.random()-.5)*this.cameraShake.intensity,r=(Math.random()-.5)*this.cameraShake.intensity*.5,this.cameraShake.remaining<=0&&(this.cameraShake.active=!1));const s=Math.sin(e*.0012)*.05,o=Math.cos(e*8e-4)*.03;this.systems.vignettePass&&(this.systems.vignettePass.uniforms.dangerPulse.value=this.dangerPulse*(.5+Math.sin(e*.005)*.5)),this.systems.cameraControls&&this.systems.cameraControls.update(),this.systems.laneInput&&this.systems.laneInput.update(e/1e3);const a=i+s,l=r+o;this.camera.position.x+=a,this.camera.position.y+=l,this.composer&&this.composer.render(n),this.css2d&&this.css2d.render(this.scene,this.camera),this.camera.position.x-=a,this.camera.position.y-=l,requestAnimationFrame(c=>this._tick(c))}setDangerMode(e){this.dangerPulse=e?1:0}}function k2(t){const e=document.createElement("div");e.style.cssText=`
    width: 80px; height: 10px;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    padding: 2px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    overflow: hidden;
    pointer-events: none;
    backdrop-filter: blur(4px);
  `;const n=document.createElement("div");n.style.cssText=`
    width: 100%; height: 100%;
    background: linear-gradient(90deg, #2ECC71, #27AE60);
    border-radius: 1px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s;
    box-shadow: 0 0 8px rgba(46, 204, 113, 0.4);
  `,e.appendChild(n);const i=new By(e),s=t.userData.type==="main"?4.2:2.5;return i.position.set(0,s,0),t.add(i),t.userData.hpBarFill=n,t.userData.hpBarLabel=i,i}function B2(t,e,n){const i=t.userData.hpBarFill,r=t.userData.hpBarLabel;if(!i||!r)return;const s=parseFloat(i.style.width)/100||1,o=Math.max(0,e/n);i.style.width=`${o*100}%`,o<s&&(r.element.style.animation="none",r.element.offsetWidth,r.element.style.animation="hpShake 0.3s cubic-bezier(.36,.07,.19,.97) both",i.style.filter="brightness(2.5)",setTimeout(()=>{i.style.filter="none"},100));const a="linear-gradient(90deg, #2ECC71, #27AE60)",l="linear-gradient(90deg, #F1C40F, #D4AC0D)",c="linear-gradient(90deg, #E67E22, #D35400)",f="linear-gradient(90deg, #E74C3C, #C0392B)";o>.6?i.style.background=a:o>.4?i.style.background=l:o>.2?i.style.background=c:i.style.background=f,o<=0&&(r.visible=!1)}function z2(t,e,n){const i=new Nt,r=e==="playerA",s={stone:1707277,accent:r?13369344:26282,glow:r?16729122:52479,vein:r?4456448:4403},o=new _t({color:s.stone,roughness:.9,metalness:.1,flatShading:!0}),a=new _t({color:s.accent,emissive:s.glow,emissiveIntensity:2.5,transparent:!0,opacity:.9}),l=new _t({color:s.vein,emissive:s.accent,emissiveIntensity:.5});if(t==="main"){const c=new Jt(2.5,3.5,1.2,8),f=new pe(c,o);f.position.y=.6,f.rotation.y=Math.random(),i.add(f);for(let u=0;u<5;u++){const d=new Nt,v=u/5*Math.PI*2,S=1.8;let T=new D(0,0,0);const w=4;for(let C=0;C<w;C++){const A=.4*(1-C/w)+.1,R=new pe(new Jt(A*.7,A,1.2,5),o);R.position.y=1.2/2;const P=new Nt;P.position.copy(T),P.rotation.z=(Math.random()-.5)*.4,P.rotation.x=(Math.random()-.5)*.4,P.add(R),d.add(P),T.add(new D(0,1.2,0).applyEuler(P.rotation))}d.position.set(Math.cos(v)*S,.5,Math.sin(v)*S),d.rotation.y=-v,i.add(d)}const p=new ti(1,16,16);p.scale(1,1.3,.8);const h=new pe(p,a);h.position.y=3.5,i.add(h),i.userData.core=h;const m=new Nt,_=new wu(2.2,.08,6,24),x=new pe(_,o);x.rotation.x=Math.PI/2,m.add(x);const g=new Pi(.08,.4,4);for(let u=0;u<8;u++){const d=new pe(g,o),v=u/8*Math.PI*2;d.position.set(Math.cos(v)*2.2,0,Math.sin(v)*2.2),d.rotation.z=Math.PI/2,d.rotation.y=v,x.add(d)}m.position.y=3.5,i.add(m),i.userData.ring=m;for(let u=0;u<12;u++){const d=new pe(new Jt(.04,.06,4),l),v=u/12*Math.PI*2;d.position.set(Math.cos(v)*1.5,2,Math.sin(v)*1.5),d.rotation.x=(Math.random()-.5)*.5,d.rotation.z=(Math.random()-.5)*.5,i.add(d)}}else{const c=new Jt(.6,1,3.5,6),f=new pe(c,o);f.position.y=1.75,i.add(f),i.userData.body=f;for(let h=0;h<3;h++){const m=new pe(new sn(1.3,.15,1.3),a);m.position.y=1+h*1,i.add(m)}const p=new pe(new Pi(.4,1.5,4),o);p.position.y=4.25,i.add(p)}return i.userData.type=t,i.userData.playerSide=e,i.userData.alive=!0,i.userData.originalEmissive=s.glow,n.add(i),i}function V2(t,e,n){const i=e/n,r=performance.now()*.001,{core:s,ring:o,body:a}=t.userData,l=Math.sin(r*3)*.5+1.5;t.userData.type==="main"?(s&&(s.scale.setScalar(1+Math.sin(r*4)*.05),s.material.emissiveIntensity=l*(i*2),s.rotation.y+=.01),o&&(o.rotation.y+=.005,o.rotation.z=Math.sin(r*.5)*.1,o.position.y=3.5+Math.sin(r*1.5)*.2)):a&&t.children.forEach(c=>{c.material&&c.material.emissive&&(c.material.emissiveIntensity=l*i)}),i<=0&&t.userData.alive&&(t.userData.alive=!1,t.children.forEach(c=>{c.position.y>.5&&(c.visible=!1)}))}class H2{constructor(e){this.troopPool=e.troopPool,this.towerMeshes=e.towerMeshes,this.particles=e.particles,this.prevTowerStates={}}apply(e){e&&(this._reconcileTroops(e.troops||[]),this._reconcileTowers(e.towers||{}))}_reconcileTroops(e){const n=new Set;e.forEach(i=>{(i.units&&i.units.length>0?i.units:[{id:i.id,x:i.x,y:i.y,hp:100}]).forEach(s=>{n.add(s.id);let o=s.x,a=s.y;(Math.abs(o)>50||Math.abs(a)>50)&&(o/=100,a/=100);let l=this.troopPool.getById(s.id);if(l)if(l.targetX=o,l.targetZ=a,i.inCombat||i.attackingTowerId){if(l.setAnimation("attack"),Math.random()>.95){const c=l.group.position.clone().add(new D(0,.5,0));this.particles.emitClash(c)}}else l.setAnimation("walk");else{l=this.troopPool.spawn({...s,type:i.type,owner:i.owner,x:o,y:a});const c=new D(o,0,a),f=i.owner==="playerA"?65535:16711935;this.particles.emitDeployment(c,f)}})}),this.troopPool.pool.forEach(i=>{if(i.alive&&!n.has(i.serverId)){const r=i.group.position.clone().add(new D(0,.5,0));if(i.troopType==="bombSquad")this.particles.emitExplosion(r,2.5,16755200);else{const s=i.owner==="playerA"?16729156:4474111;this.particles.emitDeathMotes(r,s)}i.returnToPool()}})}_reconcileTowers(e){["playerA","playerB"].forEach(n=>{e[n]&&Object.keys(e[n]).forEach(i=>{const r=e[n][i],s=this.towerMeshes[n][i],o=`${n}_${i}`;if(!s||!r)return;Math.random()>.98&&console.log(`[Reconciler] Tower ${n}_${i} HP: ${r.hp} / ${r.maxHp}`),B2(s,r.hp,r.maxHp);const a=this.prevTowerStates[o]!==!1;if(!r.alive&&a){const l=s.position.clone().add(new D(0,1,0));this.particles.emitTowerDestruction(l)}V2(s,r.hp,r.maxHp),this.prevTowerStates[o]=r.alive})})}}function G2(t){const e=new tn({uniforms:{time:{value:0},colorA:{value:new Be(1710618)},colorB:{value:new Be(3813158)},puddleColor:{value:new Be(4872810)},gridStrength:{value:.1}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float time;
      uniform vec3 colorA;
      uniform vec3 colorB;
      uniform vec3 puddleColor;
      uniform float gridStrength;
      varying vec2 vUv;
      varying vec3 vWorldPos;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      void main() {
        // Diseased, cracked earth
        float n = noise(vWorldPos.xz * 1.8);
        n += 0.4 * noise(vWorldPos.xz * 4.0);
        
        vec3 earth = mix(vec3(0.2, 0.05, 0.05), vec3(0.4, 0.15, 0.1), n);

        // Scarlet Rot Pools (Glowing)
        float rotNoise = noise(vWorldPos.xz * 0.7 + time * 0.03);
        float rotMask = smoothstep(0.55, 0.65, rotNoise);
        
        // Sickly pink-red glow
        vec3 rotCol = vec3(1.0, 0.1, 0.4) * (0.8 + 0.2 * sin(time * 2.0));
        vec3 col = mix(earth, rotCol * 0.3, rotMask);
        
        // Creeping Veins (Corruption)
        float vein = noise(vWorldPos.xz * 12.0);
        float veinMask = smoothstep(0.7, 0.8, vein) * (1.0 - rotMask);
        col = mix(col, vec3(0.1, 0.0, 0.0), veinMask);

        // Subtle tactical grid (Aged and broken)
        vec2 grid = abs(fract(vWorldPos.xz * 1.0 - 0.5) - 0.5);
        float line = smoothstep(0.01, 0.0, min(grid.x, grid.y));
        col += vec3(1.0, 0.4, 0.4) * line * gridStrength;

        // Edge decay (Heavy shadow)
        float dist = length(vUv - 0.5);
        col *= smoothstep(0.95, 0.2, dist);

        gl_FragColor = vec4(col, 1.0);
      }
    `}),n=new pe(new Vn(16,40,1,1),e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.position.y=-.01,t.add(n);const i=new _t({color:2893085,roughness:.9,metalness:.05}),r=new pe(new Vn(250,250),i);r.rotation.x=-Math.PI/2,r.position.y=-.15,r.receiveShadow=!0,t.add(r);const s=new sn(250,5,250),o=new _t({color:1709328}),a=new pe(s,o);a.position.set(0,-2.65,0),t.add(a);const l=new _t({color:4010017,roughness:.8,metalness:.1}),c=[-5.5,0,5.5],f=c.map(g=>{const u=new pe(new Vn(1.8,40,1,1),l);return u.rotation.x=-Math.PI/2,u.position.set(g,0,0),u.receiveShadow=!0,t.add(u),u}),p=new tn({transparent:!0,uniforms:{time:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
    `,fragmentShader:`
      uniform float time;
      varying vec2 vUv;
      void main() {
        float pulse = sin(time * 3.0) * 0.4 + 0.6;
        float fade  = 1.0 - abs(vUv.y - 0.5) * 2.0;
        gl_FragColor = vec4(1.0, 1.0, 0.6, fade * pulse * 0.7);
      }
    `}),h=new pe(new Vn(40,.25),p);h.rotation.x=-Math.PI/2,h.position.set(0,.03,0),t.add(h);const m=new Vn(3.5,20),_=new It({color:65535,transparent:!0,opacity:0,visible:!1}),x=[];return["playerA","playerB"].forEach(g=>{const u=g==="playerA",d=u?10:-10;c.forEach((v,S)=>{const T=new pe(m,_.clone());T.rotation.x=-Math.PI/2,T.position.set(v,.1,d);const w=["left","center","right"][S],C=document.createElement("div");C.className="lane-indicator",C.innerHTML=`<div style="font-size: 10px; opacity: 0.5;">LANE</div>${w.toUpperCase()}`,C.style.cssText=`
        color: ${u?"#ff4d4d":"#4d94ff"}; 
        font-family: 'Outfit', sans-serif; 
        font-weight: 900;
        font-size: 20px; 
        text-align: center;
        letter-spacing: 2px;
        text-shadow: 0 0 15px rgba(0,0,0,0.8);
        padding: 5px 10px;
        border-top: 2px solid currentColor;
        pointer-events: none;
        user-select: none;
      `;const y=new By(C);y.position.set(0,0,u?6:-6),T.add(y),T.userData.lane=w,T.userData.side=g,T.userData.isLaneZone=!0,t.add(T),x.push(T)})}),{ground:n,lanes:f,centerLine:h,clickZones:x,groundMaterial:e,centerLineMat:p}}class Wh{constructor(e,n,i){this.troopType=e,this.owner=n,this.alive=!1,this.serverId=null,this.scene=i,this.particles=null;const r=n==="playerA",s=r?16729943:3049182,o=r?12597547:623843;this.group=new Nt,this._buildModel(e,s,o,r);const a=new hm(.35,8),l=new It({color:0,transparent:!0,opacity:.35,depthWrite:!1});this.shadow=new pe(a,l),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.02,this.group.add(this.shadow),this.group.visible=!1,i.add(this.group),this.animState="walk",this.animTimer=0,this.targetX=0,this.targetZ=0}_buildModel(e,n,i,r){const s=new sn(.5,.7,.35),o=new Rg({color:n,shininess:30,emissive:n,emissiveIntensity:.2});this.body=new pe(s,o),this.body.position.y=.55,this.body.castShadow=!1,this.group.add(this.body);const a=new ti(.12,8,8),l=new It({color:r?16711680:65535});this.core=new pe(a,l),this.core.position.set(0,.6,.18),this.group.add(this.core);const c=new sn(.28,.28,.28),f=new Rg({color:2236962,shininess:10});this.head=new pe(c,f),this.head.position.y=1.05,this.head.castShadow=!1,this.group.add(this.head);const p=new sn(.08,.04,.05),h=new It({color:r?16729088:52479});this.eyeL=new pe(p,h),this.eyeL.position.set(-.07,1.08,.15),this.eyeR=new pe(p,h),this.eyeR.position.set(.07,1.08,.15),this.group.add(this.eyeL,this.eyeR);const m=new sn(.15,.15,.4),_=new _t({color:4473924,metalness:.8});if(this.shoulderL=new pe(m,_),this.shoulderL.position.set(-.3,.85,0),this.shoulderR=new pe(m,_),this.shoulderR.position.set(.3,.85,0),this.group.add(this.shoulderL,this.shoulderR),e==="low")this._addWeapon(.04,.9,9807270,.38,.7,0),this._addWeapon(.04,.9,9807270,-.38,.7,0);else if(e==="mid"){this.body.scale.set(1.3,1.2,1.4),this.shoulderL.scale.setScalar(1.5),this.shoulderR.scale.setScalar(1.5),this._addWeapon(.035,1.6,12436423,.5,.8,.1);const x=new pe(new Pi(.08,.3,4),new _t({color:5592405}));x.position.set(0,1.25,0),this.group.add(x)}else if(e==="high"){const x=new _t({color:1118481,metalness:1});this.body.scale.set(3.5,5,3.5),this.body.position.y=2.5,this.head.scale.setScalar(4),this.head.position.y=5.5,this.core.visible=!1;const g=new Pi(.3,2.5,4),u=new pe(g,x);u.position.set(-1,1.2,0),u.rotation.z=.8;const d=new pe(g,x);d.position.set(1,1.2,0),d.rotation.z=-.8,this.head.add(u,d);const v=new Pi(.4,4,4);for(let z=0;z<6;z++){const k=new pe(v,x);k.position.set((z%2===0?1:-1)*(1.2+z*.2),3+z*.5,-1.8),k.rotation.x=-Math.PI/3,k.rotation.z=z%2===0?.6:-.6,this.group.add(k)}const S=new pe(new Jt(.15,.2,10,8),new _t({color:1710618,metalness:.9})),T=new Nt,w=new pe(new sn(2.5,3.8,2.5),new _t({color:657930,metalness:1,roughness:.1}));T.add(w);const C=new _t({color:r?16729088:52479,emissive:r?16729088:52479,emissiveIntensity:2,transparent:!0,opacity:.9}),y=new pe(new Vn(1.2,2.5),C);y.position.z=1.26,T.add(y);const A=y.clone();A.position.z=-1.26,A.rotation.y=Math.PI,T.add(A),this.hammerRunes=[C];const R=new Pi(.35,1.5,4),P=new _t({color:2236962,metalness:1});for(let z=0;z<4;z++){const k=new pe(R,P),B=z/4*Math.PI*2;k.position.set(Math.cos(B)*1.25,1.9,Math.sin(B)*1.25),k.lookAt(new D(k.position.x*2,1.9+1,k.position.z*2)),T.add(k)}T.position.y=4,this.weapon=new Nt,this.weapon.add(S,T),this.weapon.position.set(3,3.5,0),this.weapon.rotation.z=-.4,this.group.add(this.weapon);const I=new ti(.35,8,8),W=new _t({color:16711680,emissive:16711680,emissiveIntensity:1.5});this.eyeL.visible=!1,this.eyeR.visible=!1;const Y=new pe(I,W);Y.position.set(-.6,.2,.45);const U=new pe(I,W);U.position.set(.6,.2,.45),this.head.add(Y,U),this.titanEyes=[Y,U],this.group.scale.setScalar(.8)}}_addWeapon(e,n,i,r,s,o){const a=new Jt(e,e*.5,n,8),l=new _t({color:i,metalness:.8,roughness:.2}),c=new pe(a,l);c.position.set(r,s,o),c.castShadow=!0,this.group.add(c),this.weapon=c}spawn(e){return this.serverId=e.id,this.alive=!0,this.group.position.set(e.x,0,e.y),this.targetX=e.x,this.targetZ=e.y,this.group.visible=!0,this.setAnimation("walk"),this.group.rotation.y=this.owner==="playerA"?0:Math.PI,this.particles&&(this.particles.emitSplash(this.group.position.clone()),this.particles.emitRipple(this.group.position.clone().setY(.05))),this}setAnimation(e){this.animState!==e&&(this.animState=e,this.animTimer=0)}update(e){if(this.alive){if(this.animTimer+=e,this.animState==="walk"){const n=Math.sin((this.animTimer-e)*10),i=Math.sin(this.animTimer*10);if(this.group.position.y=i*.02,n>0&&i<=0&&this.particles&&(this.troopType==="high"?this.particles.emitStomp(this.group.position.clone()):(this.particles.emitSplash(this.group.position.clone()),Math.random()>.5&&this.particles.emitRipple(this.group.position.clone().setY(.05)))),this.troopType==="high"){const r=1.2+Math.sin(this.animTimer*2)*.2;this.core&&this.core.visible&&(this.core.material.emissiveIntensity=r),this.titanEyes&&this.titanEyes.forEach(s=>s.material.emissiveIntensity=r*1.5),this.hammerRunes&&this.hammerRunes.forEach(s=>s.emissiveIntensity=.5+Math.sin(this.animTimer*4)*.3)}this.weapon&&(this.weapon.rotation.x=Math.sin(this.animTimer*6)*.1),this.blades&&(this.blades.rotation.y+=e*5)}else this.animState==="attack"&&this.weapon&&(this.weapon.rotation.z=-.3+Math.sin(this.animTimer*15)*.4);this.group.position.x=kd.lerp(this.group.position.x,this.targetX,.22),this.group.position.z=kd.lerp(this.group.position.z,this.targetZ,.22)}}die(){this.setAnimation("death");const e=Date.now(),n=()=>{const i=(Date.now()-e)/500;i<1?(this.group.rotation.x=i*(Math.PI/2),this.group.position.y=-i*.2,requestAnimationFrame(n)):this.returnToPool()};n()}returnToPool(){this.alive=!1,this.serverId=null,this.group.visible=!1,this.group.rotation.set(0,this.owner==="playerA"?0:Math.PI,0),this.group.position.y=0}}class W2{constructor(e,n){this.pool=[],this.scene=e,this.particles=n,this.TROOP_TYPES=["low","mid","high"],this.TROOP_TYPES.forEach(i=>{for(let r=0;r<15;r++){const s=new Wh(i,"playerA",e);s.particles=n,this.pool.push(s);const o=new Wh(i,"playerB",e);o.particles=n,this.pool.push(o)}}),console.log(`[TroopPool] Initialized with ${this.pool.length} troop meshes`)}spawn(e){console.log(`[TroopPool] Spawning: type=${e.type}, owner=${e.owner}, serverId=${e.id}`);let n=this.pool.find(i=>!i.alive&&i.troopType===e.type&&i.owner===e.owner);return n||(console.warn(`[TroopPool] No exact match for ${e.type}/${e.owner}, trying fallback from ${this.TROOP_TYPES.join(",")}`),n=this.pool.find(i=>!i.alive&&i.owner===e.owner)),n||(console.error(`[TroopPool] Pool exhausted and fallback failed! Creating new for ${e.type}`),n=new Wh(e.type||"skirmisher",e.owner,this.scene),n.particles=this.particles,this.pool.push(n)),n.spawn(e)}getById(e){return this.pool.find(n=>n.serverId===e)}updateAll(e){for(let n=0;n<this.pool.length;n++)this.pool[n].alive&&this.pool[n].update(e)}}class X2{constructor(e){this.scene=e,this.motes=[],this.explosions=[],this.clashes=[],this.moteGeo=new ti(.1,4,4),this.ripples=[],this.rippleGeo=new dm(.1,.12,24),this.rippleGeo.rotateX(-Math.PI/2),this.splashGeo=new ti(.04,4,4)}emitDeathMotes(e,n=16777215){for(let i=0;i<8;i++){const r=new It({color:n,transparent:!0,opacity:1}),s=new pe(this.moteGeo,r);s.position.copy(e),s.userData={vel:new D((Math.random()-.5)*2,Math.random()*3,(Math.random()-.5)*2),life:1},this.scene.add(s),this.motes.push(s)}}emitClash(e){const n=new Yc({map:this.createGlowTexture("#ffffff"),transparent:!0,blending:Bn}),i=new Bd(n);i.position.copy(e),i.scale.setScalar(1.5),i.userData={life:.3},this.scene.add(i),this.clashes.push(i);for(let r=0;r<5;r++){const s=new pe(new sn(.05,.05,.05),new It({color:16755200}));s.position.copy(e),s.userData={vel:new D((Math.random()-.5)*5,Math.random()*5,(Math.random()-.5)*5),life:.5},this.scene.add(s),this.motes.push(s)}}emitDeployment(e,n=16711680){const i=new It({color:n,transparent:!0,opacity:.8,side:Sn}),r=new pe(this.rippleGeo,i);r.position.copy(e).setY(.05),r.userData={life:1,scaleSpeed:15},this.scene.add(r),this.ripples.push(r);const s=[];let o=new D(e.x,20,e.z);for(let f=0;f<10;f++)s.push(o.clone()),o.y-=2,o.x+=(Math.random()-.5)*2,o.z+=(Math.random()-.5)*2;s.push(e.clone());const a=new Ct().setFromPoints(s),l=new zd({color:16777215,linewidth:2,transparent:!0,blending:Bn}),c=new Tg(a,l);c.userData={life:.2},this.scene.add(c),this.clashes.push(c),window.dispatchEvent(new CustomEvent("camera_shake",{detail:{intensity:.1,duration:200}}))}emitAmbientLightning(){const e=(Math.random()-.5)*60,n=(Math.random()-.5)*80,i=new D(e,0,n),r=[];let s=new D(i.x,30,i.z);for(let p=0;p<15;p++)r.push(s.clone()),s.y-=2,s.x+=(Math.random()-.5)*3,s.z+=(Math.random()-.5)*3;r.push(i.clone());const o=new Ct().setFromPoints(r),a=new zd({color:16777215,linewidth:3,transparent:!0,blending:Bn}),l=new Tg(o,a);l.userData={life:.15},this.scene.add(l),this.clashes.push(l);const c=new Yc({map:this.createGlowTexture("#ffffff"),transparent:!0,blending:Bn}),f=new Bd(c);f.position.copy(i).setY(.5),f.scale.setScalar(12),f.userData={life:.25},this.scene.add(f),this.clashes.push(f),window.dispatchEvent(new CustomEvent("lightning_strike",{detail:{intensity:4}})),window.dispatchEvent(new CustomEvent("camera_shake",{detail:{intensity:.15,duration:150}}))}createGlowTexture(e){const n=document.createElement("canvas");n.width=64,n.height=64;const i=n.getContext("2d"),r=i.createRadialGradient(32,32,0,32,32,32);return r.addColorStop(0,e),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,64,64),new Hd(n)}emitTowerDestruction(e){this.emitExplosion(e,6,16777215),this.emitExplosion(e,8,16755200),this.emitExplosion(e,10,16733440);const n=new It({color:16755200,transparent:!0,opacity:.8,side:Sn}),i=new pe(this.rippleGeo,n);i.position.copy(e).setY(.1),i.userData={life:1.2,scaleSpeed:25},this.scene.add(i),this.ripples.push(i);for(let r=0;r<5;r++){const s=new D((Math.random()-.5)*4,Math.random()*2,(Math.random()-.5)*4);setTimeout(()=>{this.emitExplosion(e.clone().add(s),3+Math.random()*3,16742144)},150+Math.random()*400)}for(let r=0;r<45;r++){const s=.2+Math.random()*.7,o=new pe(new sn(s,s,s),new _t({color:2236962,roughness:1}));o.position.copy(e).add(new D((Math.random()-.5)*2,Math.random()*3,(Math.random()-.5)*2)),o.userData={vel:new D((Math.random()-.5)*18,10+Math.random()*25,(Math.random()-.5)*18),rotVel:new D(Math.random()*15,Math.random()*15,Math.random()*15),life:2.5+Math.random()*1.5},this.scene.add(o),this.motes.push(o)}for(let r=0;r<20;r++){const s=new pe(new ti(1.5,6,6),new It({color:1118481,transparent:!0,opacity:.6}));s.position.copy(e).add(new D((Math.random()-.5)*2,Math.random()*2,(Math.random()-.5)*2)),s.userData={vel:new D((Math.random()-.5)*4,3+Math.random()*5,(Math.random()-.5)*4),life:2+Math.random()},this.scene.add(s),this.motes.push(s)}for(let r=0;r<25;r++){const s=new pe(new ti(.12,4,4),new It({color:16729088,transparent:!0,blending:Bn}));s.position.copy(e).add(new D((Math.random()-.5)*3,Math.random()*2,(Math.random()-.5)*3)),s.userData={vel:new D((Math.random()-.5)*6,5+Math.random()*8,(Math.random()-.5)*6),life:1.2+Math.random()},this.scene.add(s),this.motes.push(s)}window.dispatchEvent(new CustomEvent("camera_shake",{detail:{intensity:1.5,duration:400}})),window.dispatchEvent(new CustomEvent("lightning_strike",{detail:{intensity:5}}))}emitExplosion(e,n=1.5,i=16733440){const r=new ti(1,16,16),s=new It({color:i,transparent:!0,opacity:.9,blending:Bn}),o=new pe(r,s);o.position.copy(e),o.scale.setScalar(.1),o.userData={life:.6,maxLife:.6,targetScale:n},this.scene.add(o),this.explosions.push(o)}emitRipple(e){const n=new It({color:8965375,transparent:!0,opacity:.4,side:Sn}),i=new pe(this.rippleGeo,n);i.position.copy(e),i.position.y=.05,i.userData={life:1},this.scene.add(i),this.ripples.push(i)}emitStomp(e){const n=new It({color:3351057,transparent:!0,opacity:.6,side:Sn}),i=new pe(this.rippleGeo,n);i.position.copy(e).setY(.05),i.userData={life:.8,scaleSpeed:10},this.scene.add(i),this.ripples.push(i);for(let r=0;r<12;r++){const s=new pe(new sn(.1,.1,.1),new It({color:4469538}));s.position.copy(e),s.userData={vel:new D((Math.random()-.5)*4,1+Math.random()*4,(Math.random()-.5)*4),life:.8},this.scene.add(s),this.motes.push(s)}window.dispatchEvent(new CustomEvent("camera_shake",{detail:{intensity:.1,duration:150}}))}emitSplash(e){for(let n=0;n<3;n++){const i=new It({color:10070715,transparent:!0,opacity:.6}),r=new pe(this.splashGeo,i);r.position.copy(e),r.userData={vel:new D((Math.random()-.5)*1.5,Math.random()*2,(Math.random()-.5)*1.5),life:.5},this.scene.add(r),this.motes.push(r)}}update(e){if(this.motes.length>150){const i=this.motes.length-150;for(let r=0;r<i;r++){const s=this.motes.shift();this.scene.remove(s)}}for(let i=this.motes.length-1;i>=0;i--){const r=this.motes[i];if(r.position.add(r.userData.vel.clone().multiplyScalar(e)),r.userData.rotVel&&(r.rotation.x+=r.userData.rotVel.x*e,r.rotation.y+=r.userData.rotVel.y*e,r.rotation.z+=r.userData.rotVel.z*e),r.userData.vel.y-=9.8*e,r.userData.life-=e,r.material.opacity=r.userData.life,r.position.y<-.05){this.scene.remove(r),this.motes.splice(i,1);continue}r.userData.life<=0&&(this.scene.remove(r),this.motes.splice(i,1))}for(let i=this.clashes.length-1;i>=0;i--){const r=this.clashes[i];r.userData.life-=e,r.scale.setScalar(.8+(.4-r.userData.life)*2),r.material.opacity=r.userData.life/.4,r.userData.life<=0&&(this.scene.remove(r),this.clashes.splice(i,1))}for(let i=this.explosions.length-1;i>=0;i--){const r=this.explosions[i];r.userData.life-=e;const s=1-r.userData.life/r.userData.maxLife;r.scale.setScalar(.1+s*r.userData.targetScale),r.material.opacity=1-s,r.userData.life<=0&&(this.scene.remove(r),this.explosions.splice(i,1))}for(let i=this.ripples.length-1;i>=0;i--){const r=this.ripples[i];r.userData.life-=e*1.5;const s=r.userData.scaleSpeed||4;r.scale.setScalar(1+(1-r.userData.life)*s),r.material.opacity=r.userData.life,r.userData.life<=0&&(this.scene.remove(r),this.ripples.splice(i,1))}}}const j2={},m_=t=>{let e;const n=new Set,i=(f,p)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const m=e;e=p??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(_=>_(e,m))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(j2?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},q2=t=>t?m_(t):m_;var Vy={exports:{}},Hy={},Gy={exports:{}},Wy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=ie;function Y2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $2=typeof Object.is=="function"?Object.is:Y2,K2=yo.useState,Z2=yo.useEffect,Q2=yo.useLayoutEffect,J2=yo.useDebugValue;function e3(t,e){var n=e(),i=K2({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Q2(function(){r.value=n,r.getSnapshot=e,Xh(r)&&s({inst:r})},[t,n,e]),Z2(function(){return Xh(r)&&s({inst:r}),t(function(){Xh(r)&&s({inst:r})})},[t]),J2(n),n}function Xh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$2(t,n)}catch{return!0}}function t3(t,e){return e()}var n3=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?t3:e3;Wy.useSyncExternalStore=yo.useSyncExternalStore!==void 0?yo.useSyncExternalStore:n3;Gy.exports=Wy;var i3=Gy.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu=ie,r3=i3;function s3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var o3=typeof Object.is=="function"?Object.is:s3,a3=r3.useSyncExternalStore,l3=Cu.useRef,c3=Cu.useEffect,u3=Cu.useMemo,h3=Cu.useDebugValue;Hy.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=l3(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=u3(function(){function l(m){if(!c){if(c=!0,f=m,m=i(m),r!==void 0&&o.hasValue){var _=o.value;if(r(_,m))return p=_}return p=m}if(_=p,o3(f,m))return _;var x=i(m);return r!==void 0&&r(_,x)?(f=m,_):(f=m,p=x)}var c=!1,f,p,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var a=a3(t,s[0],s[1]);return c3(function(){o.hasValue=!0,o.value=a},[a]),h3(a),a};Vy.exports=Hy;var f3=Vy.exports;const d3=S_(f3),Xy={},{useDebugValue:p3}=tu,{useSyncExternalStoreWithSelector:m3}=d3;let g_=!1;const g3=t=>t;function _3(t,e=g3,n){(Xy?"production":void 0)!=="production"&&n&&!g_&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),g_=!0);const i=m3(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return p3(i),i}const __=t=>{(Xy?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?q2(t):t,n=(i,r)=>_3(e,i,r);return Object.assign(n,e),n},v3=t=>t?__(t):__,mc={low:{tier:"LOW",cost:3,hp:100,damage:45,speed:2.8,count:5,towerDPS:15,atkRange:.6,spriteScale:.7,icon:"⚔️",label:"Infantry",desc:"Swarming dual-wielding foot soldiers."},mid:{tier:"MID",cost:5,hp:320,damage:140,speed:2.2,count:3,towerDPS:45,atkRange:.8,spriteScale:.9,icon:"🛡️",label:"Guardian",desc:"Heavy armored sentinels with halberds."},high:{tier:"HIGH",cost:8,hp:900,damage:450,speed:1.6,count:1,towerDPS:120,atkRange:1.2,spriteScale:1.4,icon:"🗿",label:"Titan",desc:"Colossal monolith carrying a massive hammer."}},x3={low:"⚔️",mid:"🛡️",high:"🗿"},y3={low:"Infantry",mid:"Guardian",high:"Titan"};console.log("[gameStore] TROOPS Config:",mc);function v_(){return["low","mid","high"].map((e,n)=>({id:`card_${e}_${n}`,type:e,tier:mc[e].tier,cost:mc[e].cost,count:mc[e].count,label:y3[e],icon:x3[e],state:"ready"}))}const en=v3((t,e)=>({tokens:5,playerRole:null,playerName:"",opponentName:"",deck:v_(),handIndices:[0,1,2],selectedCardIndex:null,deployCooldown:!1,questionState:"IDLE",currentQuestion:null,lastAnswerCorrect:null,lastTokensAwarded:0,timeRemaining:3e5,gameOver:!1,gameResult:null,setTokens:n=>t({tokens:Math.max(0,Math.min(Number(n)||0,20))}),setPlayerRole:n=>t({playerRole:n?String(n):null}),setPlayerName:n=>t({playerName:n?String(n).slice(0,20):""}),setOpponentName:n=>t({opponentName:n?String(n).slice(0,20):""}),selectCard:n=>{try{const i=e();if(typeof n!="number"||n<0||n>=i.handIndices.length)return;const r=i.handIndices[n],s=i.deck[r];if(!s||s.state!=="ready"||i.tokens<s.cost)return;t({selectedCardIndex:n})}catch(i){console.error("[gameStore] selectCard error:",i)}},deployCard:n=>{try{const i=e();if(i.selectedCardIndex===null||i.deployCooldown)return null;const r=i.handIndices[i.selectedCardIndex],s=i.deck[r];if(!s||i.tokens<s.cost)return null;const o=[...i.deck];return o[r]={...s,state:"cycling"},t({deployCooldown:!0,selectedCardIndex:null,deck:o}),setTimeout(()=>{t(a=>{if(!a.deck[r])return a;const l=[...a.deck];return l[r]={...l[r],state:"ready"},{deck:l,deployCooldown:!1}})},2e3),s}catch(i){return console.error("[gameStore] deployCard error:",i),null}},setQuestion:n=>{!n||typeof n!="object"||t({currentQuestion:n,questionState:"QUESTION",lastAnswerCorrect:null})},answerResult:(n,i,r)=>{t({questionState:n?"ANSWERED":"COOLDOWN",lastAnswerCorrect:!!n,lastTokensAwarded:Number(i)||0,tokens:Math.max(0,Math.min(Number(r)||0,20))})},clearQuestionState:()=>t({questionState:"IDLE",currentQuestion:null}),setTimeRemaining:n=>t({timeRemaining:Math.max(0,Number(n)||0)}),setGameOver:n=>t({gameOver:!0,gameResult:n}),reset:()=>t({tokens:5,selectedCardIndex:null,deployCooldown:!1,questionState:"IDLE",currentQuestion:null,lastAnswerCorrect:null,timeRemaining:3e5,gameOver:!1,gameResult:null,deck:v_(),handIndices:[0,1,2]})}));class S3{constructor(e,n,i){this.camera=e,this.clickZones=n,this.scene=i,this.raycaster=new sb,this.pointer=new Ee,this.enabled=!1,this.selectedCard=null,this._onPointerMove=r=>{this.pointer.x=r.clientX/window.innerWidth*2-1,this.pointer.y=-(r.clientY/window.innerHeight)*2+1},this._onPointerDownHandler=r=>this._onPointerDown(r),this._onCardSelected=({detail:r})=>{this.selectedCard=r.cardType,this.enabled=!0,this._highlightLanes(!0)},this._onCardDeselected=()=>{this.enabled=!1,this.selectedCard=null,this._highlightLanes(!1)},window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerdown",this._onPointerDownHandler),window.addEventListener("card_selected",this._onCardSelected),window.addEventListener("card_deselected",this._onCardDeselected)}dispose(){window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerdown",this._onPointerDownHandler),window.removeEventListener("card_selected",this._onCardSelected),window.removeEventListener("card_deselected",this._onCardDeselected)}_onPointerDown(e){if(!this.enabled||e.target.tagName!=="CANVAS")return;this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.clickZones.filter(r=>r.visible),i=this.raycaster.intersectObjects(n);if(i.length>0){const r=i[0],s=r.object,o=s.userData.lane,a=s.position.x;console.log(`[LaneInput] CLICK: WorldX=${r.point.x.toFixed(2)}, ZoneX=${a}, Lane=${o}`);const l=new Jt(.5,.5,40,16),c=new It({color:16776960,transparent:!0,opacity:.3}),f=new pe(l,c);if(f.position.copy(r.point),f.position.y=20,this.scene.add(f),setTimeout(()=>this.scene.remove(f),800),!o)return;window.dispatchEvent(new CustomEvent("lane_clicked",{detail:{lane:o,cardType:this.selectedCard}})),this.enabled=!1,this.selectedCard=null,this._highlightLanes(!1)}}_highlightLanes(e){var r;let i=en.getState().playerRole||((r=window.__cipherClash)==null?void 0:r.playerRole);if(!i){const s=localStorage.getItem("cipherClash_room");s&&(i=JSON.parse(s).playerRole)}i=i||"playerA",console.log(`[LaneInput] Highlighting for ${i}, Active: ${e}`),this.clickZones.forEach(s=>{const o=s.userData.side===i;s.visible=e&&o,s.material&&(s.material.visible=e&&o,s.material.color.setHex(14743546),s.material.opacity=e&&o?.35:0)})}update(e){if(!this.enabled)return;const n=.25+Math.sin(e*3)*.1;this.clickZones.forEach(i=>{i.visible&&i.material&&(i.material.opacity=n)})}updateHover(){if(!this.enabled)return;this.raycaster.setFromCamera(this.pointer,this.camera);const e=this.raycaster.intersectObjects(this.clickZones);this.clickZones.forEach(n=>{n.material&&(n.material.opacity=.08)}),e.length>0&&(e[0].object.material.opacity=.25)}}class M3{constructor(){this.materials=new Set,this.geometries=new Set,this.textures=new Set,this.groups=new Set}track(e){if(e)if(e.isGeometry||e.isBufferGeometry)this.geometries.add(e);else if(e.isMaterial){this.materials.add(e);for(const n of Object.keys(e)){const i=e[n];i&&i.isTexture&&this.textures.add(i)}}else e.isTexture?this.textures.add(e):e.isObject3D&&(this.groups.add(e),e.geometry&&this.track(e.geometry),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>this.track(n)):this.track(e.material)))}trackTree(e){!e||!e.isObject3D||(this.track(e),e.traverse(n=>this.track(n)))}disposeAll(){let e=0,n=0,i=0,r=0;this.groups.forEach(s=>{s.parent&&s.parent.remove(s),r++}),this.groups.clear(),this.geometries.forEach(s=>{s.dispose(),n++}),this.geometries.clear(),this.materials.forEach(s=>{s.dispose(),e++}),this.materials.clear(),this.textures.forEach(s=>{s.dispose(),i++}),this.textures.clear(),console.log(`[DisposalRegistry] Cleared: ${r} objs, ${n} geos, ${e} mats, ${i} texs`)}}function E3(t,e,n){const i=t.domElement,r=o=>{o.preventDefault(),console.error("🚨 [WebGL] Context Lost! The GPU crashed or ran out of memory."),e&&e()},s=()=>{console.log("✅ [WebGL] Context Restored! Rebuilding graphics..."),n&&n()};return i.addEventListener("webglcontextlost",r,!1),i.addEventListener("webglcontextrestored",s,!1),()=>{i.removeEventListener("webglcontextlost",r),i.removeEventListener("webglcontextrestored",s)}}function w3(t){if(t){for(;t.children.length>0;){const e=t.children[0];t.remove(e)}t.background&&t.background.isTexture&&t.background.dispose(),t.environment&&t.environment.isTexture&&t.environment.dispose(),t.background=null,t.environment=null}}function T3(){const t=en(l=>l.tokens),e=en(l=>l.timeRemaining),n=window.__cipherClash||{},i=n.playerAName||"Player A",r=n.playerBName||"Player B";ie.useEffect(()=>{const l=c=>{if(c.timeRemaining!=null&&en.getState().setTimeRemaining(c.timeRemaining),c.tokens){const p=(window.__cipherClash||{}).playerIndex===0?"playerA":"playerB",h=c.tokens[p];h!=null&&en.getState().setTokens(h)}};return Je.on("game_state",l),()=>Je.off("game_state")},[]);const s=Math.floor(e/6e4),o=Math.floor(e%6e4/1e3),a=`${s}:${o.toString().padStart(2,"0")}`;return G.jsxs("div",{className:"hud-bar",children:[G.jsx("div",{className:"hud-player-info",children:G.jsx("span",{className:"hud-player-name",style:{color:"#f87171"},children:r})}),G.jsx("div",{className:"hud-timer",children:a}),G.jsxs("div",{className:"hud-player-info",children:[G.jsx("span",{className:"hud-player-name",style:{color:"#60a5fa"},children:i}),G.jsxs("span",{className:"hud-tokens",children:["🪙 ",t]},t)]})]})}class b3{constructor(){this.locked=!1,this.lockTimer=null,this.LOCK_MS=1600,this.pendingDeploy=!1}tryAcquire(){return this.locked?!1:(this.locked=!0,this.lockTimer=setTimeout(()=>{this.locked=!1,this.lockTimer=null},this.LOCK_MS),!0)}release(){this.lockTimer&&(clearTimeout(this.lockTimer),this.lockTimer=null),this.locked=!1}extendLock(e){this.lockTimer&&clearTimeout(this.lockTimer),this.lockTimer=setTimeout(()=>{this.locked=!1,this.lockTimer=null},e+200)}get isLocked(){return this.locked}}const x_=new b3;function A3(){const t=en(a=>a.deck),e=en(a=>a.handIndices),n=en(a=>a.selectedCardIndex),i=en(a=>a.tokens),r=en(a=>a.selectCard),s=en(a=>a.deployCard),o=ie.useCallback(a=>{const l=a.detail.lane;if(x_.isLocked){console.warn("[CardHand] Deployment locked, ignoring click");return}const c=s(l);if(console.log("[CardHand] handleLaneClick:",l,"Card:",c),c){if(!x_.tryAcquire())return;const f=window.__cipherClash||{};console.log("[CardHand] Emitting deploy_troop:",c.type,"to room:",f.roomCode),Je.emit("deploy_troop",{roomCode:f.roomCode,cardType:c.type,lane:l,clientTimestamp:Date.now()}),window.dispatchEvent(new CustomEvent("card_deselected"))}},[s]);return ie.useEffect(()=>{if(n!==null){const a=t[e[n]];a&&window.dispatchEvent(new CustomEvent("card_selected",{detail:{cardType:a.type}}))}else window.dispatchEvent(new CustomEvent("card_deselected"))},[n,t,e]),ie.useEffect(()=>(window.addEventListener("lane_clicked",o),()=>window.removeEventListener("lane_clicked",o)),[o]),G.jsxs("div",{className:"card-hand-bar",children:[e.map((a,l)=>{const c=t[a];if(!c)return null;const f=i<c.cost,p=n===l,h=c.state==="cycling",m=["card",`tier-${c.tier}`,p?"selected":"",f?"insufficient":"",h?"cycling":""].filter(Boolean).join(" ");return G.jsxs("div",{className:m,onClick:()=>{h||f||r(l)},children:[G.jsxs("div",{className:"card-top",children:[G.jsx("span",{className:"card-name",children:c.label}),G.jsx("span",{className:"card-icon",children:c.icon})]}),G.jsxs("div",{className:"card-bottom",children:[G.jsxs("span",{className:"card-cost",children:["🪙 ",c.cost]}),G.jsxs("span",{className:"card-count",children:["×",c.count]}),G.jsx("span",{className:"card-tier",children:c.tier})]})]},c.id)}),G.jsxs("div",{className:"token-display",children:[G.jsx("span",{children:"🪙"}),G.jsxs("span",{children:[i," / 20"]})]})]})}class C3{constructor(){this.lastSubmittedId=null,this.submitting=!1,this.SUBMIT_LOCK_MS=1800,this._timer=null}trySubmit(e,n,i){return this.lastSubmittedId===e||this.submitting?!1:(this.lastSubmittedId=e,this.submitting=!0,i("submit_answer",{questionId:e,answer:n,clientTimestamp:Date.now()}),this._timer=setTimeout(()=>{this.submitting=!1},this.SUBMIT_LOCK_MS),!0)}onNewQuestion(){this.lastSubmittedId=null,this._timer&&clearTimeout(this._timer),this.submitting=!1}destroy(){this._timer&&clearTimeout(this._timer)}}const jh=new C3;function R3(){const t=en(u=>u.questionState),e=en(u=>u.currentQuestion),n=en(u=>u.lastAnswerCorrect);en(u=>u.tokens);const[i,r]=ie.useState(15e3),[s,o]=ie.useState(null),[a,l]=ie.useState(""),[c,f]=ie.useState(!1),p=ie.useRef(null),h=["GO GET A JOB!","My calculator could solve this faster, and it runs on light bulbs.","Did you count with your toes for that one?","Is your math logic powered by a potato battery?","GATE exams don't have partial marking for wild guesses, you know.","Please tell me that was a misclick.","ERROR 404: Brain cells not found.","Congratulations, you successfully calculated absolute nonsense.","Stick to Tic-Tac-Toe, champion.","Even ChatGPT would get fired for this calculation.","A brick wall answers quicker and more accurately.","Please hand your math degree back to the cardboard box it came from."],[m,_]=ie.useState("");ie.useEffect(()=>(Je.on("new_question",u=>{jh.onNewQuestion(),f(!1),en.getState().setQuestion(u),r(u.timeLimit||15e3),o(null),l(""),pc.playNewQuestion()}),Je.on("answer_result",u=>{if(en.getState().answerResult(u.correct,u.tokensAwarded,u.newTotal),!u.correct){const d=h[Math.floor(Math.random()*h.length)];_(d)}f(!0),u.correct?pc.playCorrect():pc.playWrong()}),()=>{Je.off("new_question"),Je.off("answer_result"),jh.destroy()}),[]),ie.useEffect(()=>{if(!(t!=="QUESTION"||!e))return p.current=setInterval(()=>{r(u=>u<=100?(clearInterval(p.current),0):u-100)},100),()=>clearInterval(p.current)},[t,e==null?void 0:e.id]);const x=u=>{if(t!=="QUESTION"||!e)return;const d=window.__cipherClash||{};jh.trySubmit(e.id,u,(S,T)=>{T.roomCode=d.roomCode,Je.emit(S,T)})?o(u):console.warn("[QuestionPanel] Answer double-submit blocked by debounce.")},g=u=>{u.preventDefault(),a.trim()&&!c&&x(a.trim())};return e?G.jsxs("div",{className:`question-panel ${c?n?"correct":"wrong":""}`,children:[c&&G.jsx("div",{className:"feedback-overlay",children:G.jsx("div",{className:"feedback-content",style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",textAlign:"center",padding:"0 20px"},children:n?G.jsxs("span",{className:"feedback-icon correct",style:{fontSize:"1.4rem"},children:["✅ CORRECT! (+",en.getState().lastTokensAwarded," Tokens)"]}):G.jsxs(G.Fragment,{children:[G.jsx("span",{className:"feedback-icon wrong",style:{fontSize:"1.4rem"},children:"❌ WRONG!"}),G.jsx("span",{className:"roast-text animate-pulse",style:{fontSize:"1.1rem",color:"#ff4444",fontWeight:"800",textTransform:"uppercase",letterSpacing:"0.05em",maxWidth:"380px"},children:m})]})})}),G.jsxs("div",{className:"question-header",children:[G.jsx("span",{className:`question-difficulty ${e.difficulty}`,children:e.difficulty}),G.jsx("div",{className:"question-timer-bar",children:G.jsx("div",{className:"question-timer-fill",style:{width:`${i/(e.timeLimit||15e3)*100}%`,backgroundColor:i<5e3?"#ef4444":"#06b6d4"}})})]}),G.jsx("div",{className:"question-text",children:e.text}),e.type==="fill_blank"?G.jsxs("form",{onSubmit:g,className:"fill-blank-container",children:[G.jsx("input",{className:"question-input",type:"text",placeholder:"Type answer...",value:a,onChange:u=>l(u.target.value),disabled:t!=="QUESTION",autoFocus:!0}),G.jsx("button",{className:"btn-primary",type:"submit",disabled:t!=="QUESTION"||!a.trim(),children:"Submit"})]}):G.jsx("div",{className:"question-options",children:(e.options||[]).map((u,d)=>G.jsx("button",{className:`question-option-btn ${s===u?n?"correct":"wrong":""}`,onClick:()=>x(u),disabled:t!=="QUESTION",children:u},d))})]}):null}const P3={playerA:{main:{x:0,y:18.5,id:"a_main",type:"main",gateY:18},sub1:{x:-5.5,y:15,id:"a_sub1",type:"sub1",lane:"left",gateY:14.5},sub2:{x:5.5,y:15,id:"a_sub2",type:"sub2",lane:"right",gateY:14.5},sub3:{x:0,y:13,id:"a_sub3",type:"sub3",lane:"center",gateY:12}},playerB:{main:{x:0,y:-18.5,id:"b_main",type:"main",gateY:-18},sub1:{x:-5.5,y:-15,id:"b_sub1",type:"sub1",lane:"left",gateY:-14.5},sub2:{x:5.5,y:-15,id:"b_sub2",type:"sub2",lane:"right",gateY:-14.5},sub3:{x:0,y:-13,id:"b_sub3",type:"sub3",lane:"center",gateY:-12}}};function D3(){const t=ie.useRef(null),e=ie.useRef(null),n=Hp(),[i,r]=ie.useState(!1);return ie.useEffect(()=>{if(!t.current)return;const s=new M3,o=new LT,a=R2(window.innerWidth,window.innerHeight),l=f2(t.current),c=d2(),{composer:f,vignettePass:p}=p2(l,o,a),h=D2(a,l.domElement),m=E3(l,()=>r(!0),()=>window.location.reload()),_=L2(o);s.trackTree(_.ambientLight),s.trackTree(_.directionalLight);const x=I2(o),g=new X2(o),u=G2(o);s.trackTree(u.mesh),s.trackTree(x.skyBox);const d={playerA:{},playerB:{}};["playerA","playerB"].forEach(R=>{Object.entries(P3[R]).forEach(([P,I])=>{const W=z2(I.type,R,o);W.position.set(I.x,0,I.y),k2(W),d[R][P]=W,s.trackTree(W)})});const v=new W2(o,g),S=new S3(a,u.clickZones,o),T={lighting:_,environment:x,particles:g,ground:u,towerMeshes:d,troopPool:v,laneInput:S,vignettePass:p,cameraControls:h,towers:[...Object.values(d.playerA),...Object.values(d.playerB)]},w=new H2(T),C=new F2(l,c,f,o,a,T);e.current={gameLoop:C,stateReconciler:w,systems:T,css2d:c,disposalRegistry:s};const y="https://cipher-royale-1.onrender.com";if(console.log("🔌 Connecting to game server at:",y),Je.connect(y),!window.__cipherClash){const R=localStorage.getItem("cipherClash_room");R&&(window.__cipherClash=JSON.parse(R))}window.__cipherClash&&(console.log("[GameContainer] rejoining room:",window.__cipherClash.roomCode),Je.emit("rejoin_room",{roomCode:window.__cipherClash.roomCode,playerName:window.__cipherClash.playerName})),Je.on("game_state",R=>{w.apply(R)}),Je.on("combat_event",R=>{const P=new D(R.x,.5,R.y);R.type==="clash"?g.emitClash(P):R.type==="explosion"?g.emitExplosion(P,2,16755200):R.type==="tower_hit"?g.emitClash(P):R.type==="tower_fall"&&g.emitTowerDestruction(P)}),Je.on("game_over",R=>{window.__cipherClashResult=R,setTimeout(()=>n("/result"),1500)}),C.start();const A=()=>{l.setSize(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight),f.setSize(window.innerWidth,window.innerHeight),P2(a,window.innerWidth,window.innerHeight)};return window.addEventListener("resize",A),()=>{C.stop(),window.removeEventListener("resize",A),m(),Je.off("game_state"),Je.off("combat_event"),Je.off("game_over"),c.domElement.parentNode&&c.domElement.parentNode.removeChild(c.domElement),h&&h.dispose(),S.dispose(),w3(o),s.disposeAll(),l.dispose()}},[n]),G.jsxs("div",{className:"game-wrapper fixed inset-0 overflow-hidden bg-slate-950",children:[i&&G.jsxs("div",{className:"absolute inset-0 bg-black/80 z-50 flex items-center justify-center text-white flex-col",children:[G.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Graphics Context Lost"}),G.jsx("p",{children:"Please wait while the engine attempts to recover..."})]}),G.jsx("canvas",{ref:t,className:"block w-full h-full"}),G.jsx(T3,{}),G.jsx(R3,{}),G.jsx(A3,{})]})}function L3(){var p,h,m,_,x,g;const[t,e]=ie.useState(null),n=Hp(),i=window.__cipherClash||{};ie.useEffect(()=>(window.__cipherClashResult&&e(window.__cipherClashResult),Je.on("game_over",u=>{window.__cipherClashResult=u,e(u)}),()=>Je.off("game_over")),[]);const r=()=>{window.__cipherClashResult=null,n("/")};if(!t)return G.jsx("div",{className:"result-container",children:G.jsx("h1",{className:"result-title",style:{color:"var(--text-secondary)"},children:"Waiting for results..."})});const s=i.playerIndex===0?"playerA":"playerB",o=t.winner===s,a=t.winner==="draw",l={main_tower_destroyed:"Main Tower Destroyed",time_expired:"Time Expired — Tower Count",opponent_disconnected:"Opponent Disconnected",admin_ended:"Game Ended by Admin"}[t.reason]||t.reason,c=i.playerAName||"Player A",f=i.playerBName||"Player B";return G.jsxs("div",{className:"result-container",children:[G.jsx("h1",{className:`result-title ${a?"":o?"victory":"defeat"}`,children:a?"DRAW":o?"🏆 VICTORY!":"💀 DEFEAT"}),G.jsx("p",{className:"result-reason",children:l}),t.stats&&G.jsx("div",{className:"result-stats",children:G.jsxs("table",{children:[G.jsx("thead",{children:G.jsxs("tr",{children:[G.jsx("th",{children:"Stat"}),G.jsx("th",{style:{color:"#60a5fa"},children:c}),G.jsx("th",{style:{color:"#f87171"},children:f})]})}),G.jsxs("tbody",{children:[G.jsxs("tr",{children:[G.jsx("td",{children:"Troops Deployed"}),G.jsx("td",{children:((p=t.stats.playerA)==null?void 0:p.troopsDeployed)||0}),G.jsx("td",{children:((h=t.stats.playerB)==null?void 0:h.troopsDeployed)||0})]}),G.jsxs("tr",{children:[G.jsx("td",{children:"Questions Correct"}),G.jsx("td",{children:((m=t.stats.playerA)==null?void 0:m.questionsCorrect)||0}),G.jsx("td",{children:((_=t.stats.playerB)==null?void 0:_.questionsCorrect)||0})]}),G.jsxs("tr",{children:[G.jsx("td",{children:"Towers Destroyed"}),G.jsx("td",{children:((x=t.stats.playerA)==null?void 0:x.towersDestroyed)||0}),G.jsx("td",{children:((g=t.stats.playerB)==null?void 0:g.towersDestroyed)||0})]})]})]})}),G.jsx("button",{className:"btn-play-again",onClick:r,children:"Play Again"})]})}const y_="cipherclash2024";function N3(){const[t,e]=ie.useState(""),[n,i]=ie.useState(!1),[r,s]=ie.useState([]),[o,a]=ie.useState(300),[l,c]=ie.useState(""),[f,p]=ie.useState("");ie.useEffect(()=>{if(!n)return;Je.connect();const d=setInterval(()=>h(),2e3);return h(),Je.on("room_created",v=>{c(v.roomCode),p(`Room ${v.roomCode} created!`)}),()=>{clearInterval(d),Je.off("room_created")}},[n]);const h=async()=>{try{const d=await fetch("/api/admin/rooms",{headers:{"x-admin-secret":t}});if(d.ok){const v=await d.json();s(v.rooms||[]),(f.includes("Unauthorized")||f.includes("failed"))&&p("")}else d.status===401?p("Unauthorized: Invalid Secret"):p(`Fetch error: ${d.status}`)}catch(d){console.error("[Admin] Fetch error:",d),p("Server connection failed. Check console.")}},m=()=>{t===y_||t===(window.__ADMIN_SECRET||y_)?i(!0):p("Invalid secret")},_=()=>{Je.emit("create_room",{settings:{durationSeconds:o}})},x=d=>{Je.emit("admin_pause",{roomCode:d,adminSecret:t}),p(`Paused room ${d}`)},g=d=>{Je.emit("admin_resume",{roomCode:d,adminSecret:t}),p(`Resumed room ${d}`)},u=d=>{Je.emit("admin_end",{roomCode:d,adminSecret:t}),p(`Ended room ${d}`)};return n?G.jsxs("div",{className:"admin-container",style:{overflow:"auto"},children:[G.jsx("h1",{children:"⚔️ CIPHER CLASH — ADMIN PANEL"}),f&&G.jsx("p",{style:{color:"var(--accent-green)",marginBottom:"1rem"},children:f}),G.jsxs("div",{className:"admin-section",children:[G.jsx("h2",{children:"CREATE ROOM"}),G.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"flex-end",flexWrap:"wrap"},children:[G.jsxs("div",{className:"input-group",style:{marginBottom:0},children:[G.jsx("label",{children:"Duration (seconds)"}),G.jsx("input",{type:"number",value:o,onChange:d=>a(Number(d.target.value)),min:60,max:600,style:{width:"120px"}})]}),G.jsx("button",{className:"btn-primary",onClick:_,style:{width:"auto",padding:"0.8rem 2rem"},children:"Generate Room"}),l&&G.jsx("div",{className:"lobby-room-code",style:{fontSize:"1.5rem"},children:l})]})]}),G.jsxs("div",{className:"admin-section",children:[G.jsx("h2",{children:"ACTIVE ROOMS"}),r.length===0?G.jsx("p",{style:{color:"var(--text-muted)"},children:"No active rooms"}):G.jsxs("table",{className:"admin-table",children:[G.jsx("thead",{children:G.jsxs("tr",{children:[G.jsx("th",{children:"Code"}),G.jsx("th",{children:"Players"}),G.jsx("th",{children:"State"}),G.jsx("th",{children:"Winner"}),G.jsx("th",{children:"Duration"}),G.jsx("th",{children:"Actions"})]})}),G.jsx("tbody",{children:r.map(d=>{var v;return G.jsxs("tr",{children:[G.jsx("td",{style:{fontFamily:"var(--font-display)",color:"var(--accent-gold)"},children:d.code}),G.jsx("td",{children:((v=d.players)==null?void 0:v.join(" vs "))||"-"}),G.jsx("td",{children:G.jsx("span",{className:`state-tag ${d.state.toLowerCase()}`,children:d.state})}),G.jsx("td",{style:{color:d.winner?"var(--accent-green)":"inherit"},children:d.winner?d.winner==="playerA"?d.players[0]:d.players[1]||"Bot":"-"}),G.jsxs("td",{children:[d.duration,"s"]}),G.jsxs("td",{children:[d.state==="ACTIVE"&&G.jsx("button",{className:"btn-admin pause",onClick:()=>x(d.code),children:"Pause"}),d.state==="PAUSED"&&G.jsx("button",{className:"btn-admin resume",onClick:()=>g(d.code),children:"Resume"}),G.jsx("button",{className:"btn-admin end",onClick:()=>u(d.code),children:"End"})]})]},d.code)})})]})]})]}):G.jsx("div",{className:"lobby-container",children:G.jsxs("div",{className:"lobby-card",style:{maxWidth:"360px"},children:[G.jsx("h2",{children:"🔐 ADMIN ACCESS"}),G.jsxs("div",{className:"input-group",children:[G.jsx("label",{children:"Admin Secret"}),G.jsx("input",{type:"password",value:t,onChange:d=>e(d.target.value),onKeyDown:d=>d.key==="Enter"&&m(),placeholder:"Enter admin secret..."})]}),G.jsx("button",{className:"btn-primary",onClick:m,children:"Authenticate"}),f&&G.jsx("p",{className:"lobby-status error",children:f})]})})}function I3(){return G.jsxs(ww,{children:[G.jsx(Tw,{}),G.jsx(Ew,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:G.jsxs(yw,{children:[G.jsx(Jo,{path:"/",element:G.jsx(y1,{})}),G.jsx(Jo,{path:"/game",element:G.jsx(D3,{})}),G.jsx(Jo,{path:"/result",element:G.jsx(L3,{})}),G.jsx(Jo,{path:"/admin",element:G.jsx(N3,{})})]})})]})}qh.createRoot(document.getElementById("root")).render(G.jsx(tu.StrictMode,{children:G.jsx(I3,{})}));
