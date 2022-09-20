"use strict";(self.webpackChunkplatform_onboarding=self.webpackChunkplatform_onboarding||[]).push([[6318],{22929:function(e,t,n){n.d(t,{K:function(){return x}});var a=n(67294),i=n(45697),r=n.n(i),l=n(75900),o=n.n(l),s=n(25030),u=n(15803),c=n(38925),g=n(54173),m=n(54119),f=n(79830),p=n(23431);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(s){i=!0,r=s}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function v(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var I={s:"euiImage--small",m:"euiImage--medium",l:"euiImage--large",xl:"euiImage--xlarge",fullWidth:"euiImage--fullWidth",original:"euiImage--original"},w={s:"euiImage--marginSmall",m:"euiImage--marginMedium",l:"euiImage--marginLarge",xl:"euiImage--marginXlarge"},O={left:"euiImage--floatLeft",right:"euiImage--floatRight"},S=Object.keys(I),j={light:"ghost",dark:"default"},x=function(e){var t=e.className,n=e.url,i=e.src,r=e.size,l=void 0===r?"original":r,Z=e.caption,x=e.hasShadow,C=e.allowFullScreen,k=e.fullScreenIconColor,z=void 0===k?"light":k,_=e.alt,P=e.style,N=e.float,A=e.margin,F=v(e,["className","url","src","size","caption","hasShadow","allowFullScreen","fullScreenIconColor","alt","style","float","margin"]),q=h((0,a.useState)(!1),2),T=q[0],E=q[1],J=function(){E(!1)},D=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},P),G=o()("euiImage",{"euiImage--hasShadow":x,"euiImage--allowFullScreen":C},A?w[A]:null,N?O[N]:null,t);"string"==typeof l&&S.includes(l)?G="".concat(G," ").concat(I[l]):(G="".concat(G),D.maxWidth=l,D.maxHeight=l,D.width="auto");var R="euiImage__button";R="string"==typeof l&&"original"!==l&&S.includes(l)?"".concat(R," euiImage__button--fullWidth"):"".concat(R);var X,H=h((0,f.m)(),2),W=H[0],L=H[1];Z&&(X=(0,p.tZ)("figcaption",{ref:W,className:"euiImage__caption"},Z));var M=(0,p.tZ)(u.pH,{type:"fullScreen",color:j[z],className:"euiImage__icon"}),B=(0,p.tZ)(s.$,{"data-test-subj":"fullScreenOverlayMask",onClick:J},(0,p.tZ)(g.n,{clickOutsideDisables:!0},(0,p.tZ)(a.Fragment,null,(0,p.tZ)("figure",{className:"euiImage euiImage-isFullScreen","aria-label":L},(0,p.tZ)("button",{type:"button","aria-label":(0,c.l)("euiImage.closeImage","Close fullscreen {alt} image",{alt:_}),className:"euiImage__button","data-test-subj":"deactivateFullScreenButton",onClick:J,onKeyDown:function(e){e.key===m.hY&&(e.preventDefault(),e.stopPropagation(),J())}},(0,p.tZ)("img",d({src:i||n,alt:_,className:"euiImage-isFullScreen__img"},F))),X),(0,p.tZ)(u.pH,{type:"cross",color:"default",className:"euiImage-isFullScreenCloseIcon"})))),K=(0,c.l)("euiImage.openImage","Open fullscreen {alt} image",{alt:_});return C?(0,p.tZ)("figure",{className:G,"aria-label":L},(0,p.tZ)("button",{type:"button","aria-label":K,className:R,"data-test-subj":"activateFullScreenButton",onClick:function(){E(!0)}},(0,p.tZ)("img",d({style:D,src:i||n,alt:_,className:"euiImage__img"},F)),M),T&&B,X):(0,p.tZ)("figure",{className:G,"aria-label":L},(0,p.tZ)("img",d({style:D,src:i||n,className:"euiImage__img",alt:_},F)),X)};x.propTypes={className:r().string,"aria-label":r().string,"data-test-subj":r().string,src:r().string,url:r().string,alt:r().string.isRequired,size:r().oneOfType([r().oneOf(["s","m","l","xl","fullWidth","original"]).isRequired,r().number.isRequired,r().string.isRequired]),fullScreenIconColor:r().oneOf(["light","dark"]),caption:r().node,hasShadow:r().bool,allowFullScreen:r().bool,float:r().oneOf(["left","right"]),margin:r().oneOf(["s","m","l","xl"])}},64861:function(e,t,n){n.r(t);var a=n(67294),i=n(19285),r=n(98946),l=n(10872),o=n(41762),s=n(2501),u=n(58951),c=n(62044),g=n(35059),m=n(89510),f=n(21193),p=n(79882),d=n(41612),y=n(15803),b=n(62679),h=n(16e3),Z=n(19693),v=n(44481),I=n(22929),w=n(1597),O=n(23431);t.default=function(){return"undefined"==typeof HTMLElement||(0,O.tZ)(a.Fragment,null,(0,O.tZ)(m.j,{theme:"dark",sections:[{items:[(0,O.tZ)(f.N,{iconType:"logoElastic"},"Elastic")],borders:"none"},{items:[(0,O.tZ)(p.g2,{color:"success",size:"s",onClick:function(){return(0,w.c4)("../../8.6/guided-setup")},key:"onboarding-setup-button",fill:!0,style:{margin:"0 10px"}},"Setup guide"),(0,O.tZ)(d.j,{flush:"both"},(0,O.tZ)((function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,O.tZ)(i.zD,{anchorPosition:"downRight",button:(0,O.tZ)(r.Zs,{color:"#25282f",iconType:"help",name:"account",onClick:function(){return n(!t)}}),closePopover:function(){return n(!1)},isOpen:t,panelPaddingSize:"none"},(0,O.tZ)(l.xe,{style:{width:"255px"}},(0,O.tZ)(o.Gv,null,(0,O.tZ)(s.J,null,(0,O.tZ)(u.a,{size:"s"},(0,O.tZ)("h4",null,"Help"))),(0,O.tZ)(s.J,null,(0,O.tZ)(u.a,{textAlign:"right",size:"s"},(0,O.tZ)("h4",null,"v 8.2.1")))),(0,O.tZ)(c.Gt,{margin:"s"}),(0,O.tZ)(g.Xs,{onClick:function(){return(0,w.c4)("../../8.6/guided-setup")}},"Setup guide onboarding"),(0,O.tZ)(g.Xs,null,"Kibana documentation"),(0,O.tZ)(g.Xs,null,"Ask Elastic"),(0,O.tZ)(g.Xs,null,(0,O.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"euiIcon euiIcon--medium euiIcon--inherit euiButtonContent__icon",focusable:"false",role:"img","aria-hidden":"true"},(0,O.tZ)("path",{d:"M16 0C7.164 0 0 7.343 0 16.4c0 7.248 4.584 13.394 10.942 15.562.8.15 1.092-.356 1.092-.789 0-.39-.014-1.684-.022-3.053-4.45.991-5.39-1.934-5.39-1.934-.728-1.894-1.776-2.398-1.776-2.398-1.454-1.017.11-.997.11-.997 1.606.114 2.452 1.69 2.452 1.69 1.428 2.506 3.746 1.781 4.656 1.36.146-1.056.56-1.78 1.016-2.19-3.552-.414-7.288-1.821-7.288-8.105 0-1.792.624-3.254 1.646-4.402-.164-.416-.714-2.085.158-4.342 0 0 1.341-.44 4.4 1.681A14.882 14.882 0 0116 7.932c1.36.006 2.728.188 4.006.553 3.053-2.124 4.396-1.681 4.396-1.681.875 2.259.325 3.926.16 4.34 1.026 1.148 1.645 2.61 1.645 4.402 0 6.3-3.742 7.687-7.307 8.094.577.508 1.086 1.505 1.086 3.035 0 2.192-.021 3.96-.021 4.5 0 .437.29.947 1.101.787C27.42 29.79 32 23.644 32 16.4 32 7.343 24.836 0 16 0z"}))," Open an issue with Github")))}),null)),(0,O.tZ)(d.j,{flush:"both"},(0,O.tZ)(r.Zs,{color:"#25282f",iconType:"cheer",name:"account"})),(0,O.tZ)(d.j,{key:"user","aria-label":"Account menu"},(0,O.tZ)(r.Zs,{size:"s",name:"Else Lane",color:"#06bfb4"}))],borders:"none"}]}),(0,O.tZ)(m.j,{sections:[{items:[(0,O.tZ)(d.j,{"aria-label":"menu navigation",flush:"both"},(0,O.tZ)(y.pH,{type:"menu"})),(0,O.tZ)(d.j,{"aria-label":"menu navigation",flush:"both"},(0,O.tZ)(r.Zs,{name:"Elastic Space",size:"s",type:"space"}))],breadcrumbs:[{text:"Cloud",href:"#"},{text:"Deployments",href:"#"},{text:"Create"}]}]}),(0,O.tZ)(b.g,{template:"empty"},(0,O.tZ)(h.yR,{size:"l"},(0,O.tZ)("h1",null,"Welcome home")),(0,O.tZ)(Z.F,{size:"l"}),(0,O.tZ)(o.Gv,null,(0,O.tZ)(s.J,null,(0,O.tZ)(v.cq,{description:"Create search experiences with a refined set of APIs and tools.",image:(0,w.dq)("/images/home--enterprise.png"),title:"Enterprise Search"})),(0,O.tZ)(s.J,null,(0,O.tZ)(v.cq,{description:"Consolidate your logs, metrics, application traces, and system availability with purpose-built UIs.",image:(0,w.dq)("/images/home--observability.png"),title:"Observability"})),(0,O.tZ)(s.J,null,(0,O.tZ)(v.cq,{description:"Prevent, collect, detect, and respond to threats for unified protection across your infrastructure.",image:(0,w.dq)("/images/home--security.png"),title:"Security"})),(0,O.tZ)(s.J,null,(0,O.tZ)(v.cq,{description:"Explore, visualize, and analyze your data using a powerful suite of analytical tools and applications.",image:(0,w.dq)("/images/home--analytics.png"),title:"Analytics"}))),(0,O.tZ)(c.Gt,{margin:"xxl"}),(0,O.tZ)(o.Gv,{alignItems:"center",gutterSize:"l"},(0,O.tZ)(s.J,null,(0,O.tZ)(h.yR,{size:"s"},(0,O.tZ)("h2",null,"Get started by adding integrations")),(0,O.tZ)(Z.F,{size:"l"}),(0,O.tZ)(u.a,{size:"m"},(0,O.tZ)("p",null,"To start working with your data, use one of our many ingest options. Collect data from an app or service, or upload a file. If you're not ready to use your own data, add a sample data set.")),(0,O.tZ)(Z.F,{size:"l"}),(0,O.tZ)(o.Gv,{justifyContent:"flexStart",gutterSize:"m"},(0,O.tZ)(s.J,{grow:!1},(0,O.tZ)(p.g2,{fill:!0,onClick:function(){return(0,w.c4)("/8.6/guided-setup")},iconType:"plusInCircle"},"Launch setup guide")),(0,O.tZ)(s.J,{grow:!1},(0,O.tZ)(p.g2,{iconType:"plusInCircle"},"Add Integrations")),(0,O.tZ)(s.J,{grow:!1},(0,O.tZ)(g.Xs,{iconType:"documents"},"Try sample data")),(0,O.tZ)(s.J,{grow:!1},(0,O.tZ)(g.Xs,{iconType:"importAction"},"Upload a file")))),(0,O.tZ)(s.J,{grow:!1},(0,O.tZ)(I.K,{size:"xl",src:(0,w.dq)("/images/illustration--integrations.svg"),alt:"packing box with integrations"}))),(0,O.tZ)(c.Gt,{margin:"xxl"})))}}}]);
//# sourceMappingURL=component---src-pages-8-6-kibana-index-js-e12a120bb8693aa9e110.js.map