import{r as u}from"./react.a7ab7074.js";import{R,u as g,a as x,b as C,c as b}from"./react-router.f0f539b8.js";import{c as L,b as h}from"./@remix-run.4f127cc9.js";import{j as k}from"./@emotion.e89d8f29.js";/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(e,a){if(e==null)return{};var n={},o=Object.keys(e),r,t;for(t=0;t<o.length;t++)r=o[t],!(a.indexOf(r)>=0)&&(n[r]=e[r]);return n}function w(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function K(e,a){return e.button===0&&(!a||a==="_self")&&!w(e)}const S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function E(e){let{basename:a,children:n,window:o}=e,r=u.exports.useRef();r.current==null&&(r.current=L({window:o,v5Compat:!0}));let t=r.current,[i,l]=u.exports.useState({action:t.action,location:t.location});return u.exports.useLayoutEffect(()=>t.listen(l),[t]),k(R,{basename:a,children:n,location:i.location,navigationType:i.action,navigator:t})}const W=u.exports.forwardRef(function(a,n){let{onClick:o,relative:r,reloadDocument:t,replace:i,state:l,target:s,to:c,preventScrollReset:f}=a,p=P(a,S),m=g(c,{relative:r}),v=j(c,{replace:i,state:l,target:s,preventScrollReset:f,relative:r});function y(d){o&&o(d),d.defaultPrevented||v(d)}return k("a",{...p,href:m,onClick:t?o:y,ref:n,target:s})});function j(e,a){let{target:n,replace:o,state:r,preventScrollReset:t,relative:i}=a===void 0?{}:a,l=x(),s=C(),c=b(e,{relative:i});return u.exports.useCallback(f=>{if(K(f,n)){f.preventDefault();let p=o!==void 0?o:h(s)===h(c);l(e,{replace:p,state:r,preventScrollReset:t,relative:i})}},[s,l,c,o,r,n,e,t,i])}export{E as B,W as L};
