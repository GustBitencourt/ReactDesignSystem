var x=Object.defineProperty;var l=(e,r)=>x(e,"name",{value:r,configurable:!0});import{r as o}from"./index.7865bba5.js";function d(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=d(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}l(d,"r");function C(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=d(e))&&(n&&(n+=" "),n+=r);return n}l(C,"clsx");function f(){return f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(this,arguments)}l(f,"_extends");function $(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}l($,"$6ed0406888f73fc4$var$setRef");function m(...e){return r=>e.forEach(t=>$(t,r))}l(m,"$6ed0406888f73fc4$export$43e446d32b3d21af");function V(...e){return o.exports.useCallback(m(...e),e)}l(V,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const h=o.exports.forwardRef((e,r)=>{const{children:t,...n}=e,c=o.exports.Children.toArray(t),s=c.find(b);if(s){const i=s.props.children,a=c.map(u=>u===s?o.exports.Children.count(i)>1?o.exports.Children.only(null):o.exports.isValidElement(i)?i.props.children:null:u);return o.exports.createElement(p,f({},n,{ref:r}),o.exports.isValidElement(i)?o.exports.cloneElement(i,void 0,a):null)}return o.exports.createElement(p,f({},n,{ref:r}),t)});h.displayName="Slot";const p=o.exports.forwardRef((e,r)=>{const{children:t,...n}=e;return o.exports.isValidElement(t)?o.exports.cloneElement(t,{...g(n,t.props),ref:m(r,t.ref)}):o.exports.Children.count(t)>1?o.exports.Children.only(null):null});p.displayName="SlotClone";const y=l(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function b(e){return o.exports.isValidElement(e)&&e.type===y}l(b,"$5e63c961fc1ce211$var$isSlottable");function g(e,r){const t={...r};for(const n in r){const c=e[n],s=r[n];/^on[A-Z]/.test(n)?t[n]=(...a)=>{s==null||s(...a),c==null||c(...a)}:n==="style"?t[n]={...c,...s}:n==="className"&&(t[n]=[c,s].filter(Boolean).join(" "))}return{...e,...t}}l(g,"$5e63c961fc1ce211$var$mergeProps");export{h as $,V as a,C as c};
//# sourceMappingURL=index.module.47376b20.js.map
