"use strict";(self.webpackChunkplatform_onboarding=self.webpackChunkplatform_onboarding||[]).push([[8129],{22929:function(e,t,n){n.d(t,{K:function(){return Z}});var r=n(67294),a=n(45697),i=n.n(a),o=n(75900),l=n.n(o),u=n(25030),c=n(15803),s=n(38925),f=n(54173),g=n(54119),m=n(79830),d=n(23431);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I={s:"euiImage--small",m:"euiImage--medium",l:"euiImage--large",xl:"euiImage--xlarge",fullWidth:"euiImage--fullWidth",original:"euiImage--original"},S={s:"euiImage--marginSmall",m:"euiImage--marginMedium",l:"euiImage--marginLarge",xl:"euiImage--marginXlarge"},j={left:"euiImage--floatLeft",right:"euiImage--floatRight"},w=Object.keys(I),k={light:"ghost",dark:"default"},Z=function(e){var t=e.className,n=e.url,a=e.src,i=e.size,o=void 0===i?"original":i,v=e.caption,Z=e.hasShadow,x=e.allowFullScreen,E=e.fullScreenIconColor,C=void 0===E?"light":E,N=e.alt,_=e.style,P=e.float,A=e.margin,F=O(e,["className","url","src","size","caption","hasShadow","allowFullScreen","fullScreenIconColor","alt","style","float","margin"]),L=h((0,r.useState)(!1),2),R=L[0],M=L[1],q=function(){M(!1)},D=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},_),T=l()("euiImage",{"euiImage--hasShadow":Z,"euiImage--allowFullScreen":x},A?S[A]:null,P?j[P]:null,t);"string"==typeof o&&w.includes(o)?T="".concat(T," ").concat(I[o]):(T="".concat(T),D.maxWidth=o,D.maxHeight=o,D.width="auto");var W="euiImage__button";W="string"==typeof o&&"original"!==o&&w.includes(o)?"".concat(W," euiImage__button--fullWidth"):"".concat(W);var z,H=h((0,m.m)(),2),B=H[0],$=H[1];v&&(z=(0,d.tZ)("figcaption",{ref:B,className:"euiImage__caption"},v));var J=(0,d.tZ)(c.pH,{type:"fullScreen",color:k[C],className:"euiImage__icon"}),K=(0,d.tZ)(u.$,{"data-test-subj":"fullScreenOverlayMask",onClick:q},(0,d.tZ)(f.n,{clickOutsideDisables:!0},(0,d.tZ)(r.Fragment,null,(0,d.tZ)("figure",{className:"euiImage euiImage-isFullScreen","aria-label":$},(0,d.tZ)("button",{type:"button","aria-label":(0,s.l)("euiImage.closeImage","Close fullscreen {alt} image",{alt:N}),className:"euiImage__button","data-test-subj":"deactivateFullScreenButton",onClick:q,onKeyDown:function(e){e.key===g.hY&&(e.preventDefault(),e.stopPropagation(),q())}},(0,d.tZ)("img",y({src:a||n,alt:N,className:"euiImage-isFullScreen__img"},F))),z),(0,d.tZ)(c.pH,{type:"cross",color:"default",className:"euiImage-isFullScreenCloseIcon"})))),U=(0,s.l)("euiImage.openImage","Open fullscreen {alt} image",{alt:N});return x?(0,d.tZ)("figure",{className:T,"aria-label":$},(0,d.tZ)("button",{type:"button","aria-label":U,className:W,"data-test-subj":"activateFullScreenButton",onClick:function(){M(!0)}},(0,d.tZ)("img",y({style:D,src:a||n,alt:N,className:"euiImage__img"},F)),J),R&&K,z):(0,d.tZ)("figure",{className:T,"aria-label":$},(0,d.tZ)("img",y({style:D,src:a||n,className:"euiImage__img",alt:N},F)),z)};Z.propTypes={className:i().string,"aria-label":i().string,"data-test-subj":i().string,src:i().string,url:i().string,alt:i().string.isRequired,size:i().oneOfType([i().oneOf(["s","m","l","xl","fullWidth","original"]).isRequired,i().number.isRequired,i().string.isRequired]),fullScreenIconColor:i().oneOf(["light","dark"]),caption:i().node,hasShadow:i().bool,allowFullScreen:i().bool,float:i().oneOf(["left","right"]),margin:i().oneOf(["s","m","l","xl"])}},25030:function(e,t,n){n.d(t,{$:function(){return y}});var r=n(67294),a=n(45697),i=n.n(a),o=n(73935),l=n(75900),u=n.n(l),c=n(55713),s=n(89835),f=n(23431);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=function(e){var t=e.className,n=e.children,a=e.onClick,i=e.headerZindexLocation,l=void 0===i?"above":i,m=e.maskRef,y=d(e,["className","children","onClick","headerZindexLocation","maskRef"]),p=(0,r.useRef)(),b=(0,s.H)([p,m]),h=g((0,r.useState)(!1),2),v=h[0],O=h[1];return(0,r.useEffect)((function(){return document.body.classList.add("euiBody-hasOverlayMask"),function(){document.body.classList.remove("euiBody-hasOverlayMask")}}),[]),(0,r.useEffect)((function(){"undefined"!=typeof document&&b(document.createElement("div"))}),[]),(0,r.useEffect)((function(){var e=p.current;return e&&document.body.appendChild(e),O(!0),function(){e&&document.body.removeChild(e)}}),[]),(0,r.useEffect)((function(){p.current&&(0,c.u)(y).forEach((function(e){if("string"!=typeof y[e])throw new Error("Unhandled property type. EuiOverlayMask property ".concat(e," is not a string."));p.current&&p.current.setAttribute(e,y[e])}))}),[]),(0,r.useEffect)((function(){p.current&&(p.current.className=u()("euiOverlayMask","euiOverlayMask--".concat(l,"Header"),t))}),[t,l]),(0,r.useEffect)((function(){var e=p.current;if(e&&a){var t=function(t){t.target===e&&a()};return e.addEventListener("click",t),function(){e.removeEventListener("click",t)}}}),[a]),v?(0,f.tZ)(r.Fragment,null,(0,o.createPortal)(n,p.current)):null};y.propTypes={className:i().string,"aria-label":i().string,"data-test-subj":i().string,onClick:i().func,children:i().node,headerZindexLocation:i().oneOf(["above","below"]),maskRef:i().oneOfType([i().any.isRequired,i().any.isRequired])}},89835:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(67294),a=function(e){return(0,r.useCallback)((function(t){return e.forEach((function(e){e&&("function"==typeof e?e(t):e.current=t)}))}),[e])}},44695:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(23431),a=n(67294),i=n(41762),o=n(2501),l=n(79882),u=n(58951),c=n(22929),s=n(1597);var f={name:"1jys13o",styles:"position:absolute;left:50%;transform:translate(-50%, -85%)"},g={name:"1tib92t",styles:"margin:35px 30px 40px 30px;position:relative"},m=function(){return{container:g,logo:f}},d=function(e){var t=e.accountType,n=e.signedIn,f=m(),g="login"===t,d=function(e){setTimeout((function(){(0,s.c4)(e)}),1e3)};return(0,r.tZ)(a.Fragment,null,(0,r.tZ)("div",{css:f.container},n?(0,r.tZ)(i.Gv,{justifyContent:"flexEnd",alignItems:"center"},(0,r.tZ)(o.J,{grow:!1},(0,r.tZ)(l.g2,{minWidth:0,fill:!0},"Log out"))):(0,r.tZ)(i.Gv,{justifyContent:"flexEnd",alignItems:"center"},(0,r.tZ)(o.J,{grow:!1},(0,r.tZ)(u.a,{textAlign:"right",size:"s"},g?"Don't have an account?":"Already have an account? ")),(0,r.tZ)(o.J,{grow:!1},(0,r.tZ)(l.g2,{fill:!0,size:"s",minWidth:0,onClick:g?function(){return d("/8.6/signup")}:function(){return d("/8.6")}},g?"Sign up":"Log in"))),(0,r.tZ)(c.K,{size:170,src:g?(0,s.dq)("/images/logo-elastic.png"):(0,s.dq)("images/logo-elastic.png"),alt:"Elastic logo",css:f.logo})))}}}]);
//# sourceMappingURL=a10b12efa5d3ac27f140e2ac20ae074850f15c3f-f50a72e71bbacef73605.js.map