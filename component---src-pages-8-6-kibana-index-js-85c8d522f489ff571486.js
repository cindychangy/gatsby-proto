"use strict";(self.webpackChunkplatform_onboarding=self.webpackChunkplatform_onboarding||[]).push([[6318],{22929:function(e,t,a){a.d(t,{K:function(){return x}});var r=a(67294),n=a(45697),i=a.n(n),l=a(75900),o=a.n(l),s=a(25030),u=a(15803),c=a(38925),g=a(54173),m=a(54119),f=a(79830),p=a(23431);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(s){n=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function I(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var v={s:"euiImage--small",m:"euiImage--medium",l:"euiImage--large",xl:"euiImage--xlarge",fullWidth:"euiImage--fullWidth",original:"euiImage--original"},O={s:"euiImage--marginSmall",m:"euiImage--marginMedium",l:"euiImage--marginLarge",xl:"euiImage--marginXlarge"},w={left:"euiImage--floatLeft",right:"euiImage--floatRight"},S=Object.keys(v),j={light:"ghost",dark:"default"},x=function(e){var t=e.className,a=e.url,n=e.src,i=e.size,l=void 0===i?"original":i,Z=e.caption,x=e.hasShadow,k=e.allowFullScreen,C=e.fullScreenIconColor,_=void 0===C?"light":C,z=e.alt,N=e.style,P=e.float,F=e.margin,q=I(e,["className","url","src","size","caption","hasShadow","allowFullScreen","fullScreenIconColor","alt","style","float","margin"]),A=h((0,r.useState)(!1),2),T=A[0],E=A[1],J=function(){E(!1)},D=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},N),R=o()("euiImage",{"euiImage--hasShadow":x,"euiImage--allowFullScreen":k},F?O[F]:null,P?w[P]:null,t);"string"==typeof l&&S.includes(l)?R="".concat(R," ").concat(v[l]):(R="".concat(R),D.maxWidth=l,D.maxHeight=l,D.width="auto");var G="euiImage__button";G="string"==typeof l&&"original"!==l&&S.includes(l)?"".concat(G," euiImage__button--fullWidth"):"".concat(G);var W,H=h((0,f.m)(),2),L=H[0],K=H[1];Z&&(W=(0,p.tZ)("figcaption",{ref:L,className:"euiImage__caption"},Z));var M=(0,p.tZ)(u.pH,{type:"fullScreen",color:j[_],className:"euiImage__icon"}),U=(0,p.tZ)(s.$,{"data-test-subj":"fullScreenOverlayMask",onClick:J},(0,p.tZ)(g.n,{clickOutsideDisables:!0},(0,p.tZ)(r.Fragment,null,(0,p.tZ)("figure",{className:"euiImage euiImage-isFullScreen","aria-label":K},(0,p.tZ)("button",{type:"button","aria-label":(0,c.l)("euiImage.closeImage","Close fullscreen {alt} image",{alt:z}),className:"euiImage__button","data-test-subj":"deactivateFullScreenButton",onClick:J,onKeyDown:function(e){e.key===m.hY&&(e.preventDefault(),e.stopPropagation(),J())}},(0,p.tZ)("img",d({src:n||a,alt:z,className:"euiImage-isFullScreen__img"},q))),W),(0,p.tZ)(u.pH,{type:"cross",color:"default",className:"euiImage-isFullScreenCloseIcon"})))),X=(0,c.l)("euiImage.openImage","Open fullscreen {alt} image",{alt:z});return k?(0,p.tZ)("figure",{className:R,"aria-label":K},(0,p.tZ)("button",{type:"button","aria-label":X,className:G,"data-test-subj":"activateFullScreenButton",onClick:function(){E(!0)}},(0,p.tZ)("img",d({style:D,src:n||a,alt:z,className:"euiImage__img"},q)),M),T&&U,W):(0,p.tZ)("figure",{className:R,"aria-label":K},(0,p.tZ)("img",d({style:D,src:n||a,className:"euiImage__img",alt:z},q)),W)};x.propTypes={className:i().string,"aria-label":i().string,"data-test-subj":i().string,src:i().string,url:i().string,alt:i().string.isRequired,size:i().oneOfType([i().oneOf(["s","m","l","xl","fullWidth","original"]).isRequired,i().number.isRequired,i().string.isRequired]),fullScreenIconColor:i().oneOf(["light","dark"]),caption:i().node,hasShadow:i().bool,allowFullScreen:i().bool,float:i().oneOf(["left","right"]),margin:i().oneOf(["s","m","l","xl"])}},64861:function(e,t,a){a.r(t);var r=a(67294),n=a(89510),i=a(21193),l=a(79882),o=a(41612),s=a(98946),u=a(15803),c=a(62679),g=a(16e3),m=a(19693),f=a(41762),p=a(2501),d=a(44481),y=a(62044),b=a(58951),h=a(35059),Z=a(22929),I=a(1597),v=a(23431);t.default=function(){return(0,v.tZ)(r.Fragment,null,(0,v.tZ)(n.j,{theme:"dark",sections:[{items:[(0,v.tZ)(i.N,{iconType:"logoElastic"},"Elastic")],borders:"none"},{items:[(0,v.tZ)(l.g2,{color:"success",size:"s",onClick:function(){return(0,I.c4)("../../8.6/guided-setup")},key:"onboarding-setup-button",fill:!0,style:{margin:"0 10px"}},"Setup guide"),(0,v.tZ)(o.j,{flush:"both"},(0,v.tZ)(s.Zs,{color:"#25282f",iconType:"cheer",name:"account"})),(0,v.tZ)(o.j,{key:"user","aria-label":"Account menu"},(0,v.tZ)(s.Zs,{size:"s",name:"Else Lane",color:"#06bfb4"}))],borders:"none"}]}),(0,v.tZ)(n.j,{sections:[{items:[(0,v.tZ)(o.j,{"aria-label":"menu navigation",flush:"both"},(0,v.tZ)(u.pH,{type:"menu"})),(0,v.tZ)(o.j,{"aria-label":"menu navigation",flush:"both"},(0,v.tZ)(s.Zs,{name:"Elastic Space",size:"s",type:"space"}))],breadcrumbs:[{text:"Cloud",href:"#"},{text:"Deployments",href:"#"},{text:"Create"}]}]}),(0,v.tZ)(c.g,{template:"empty"},(0,v.tZ)(g.yR,{size:"l"},(0,v.tZ)("h1",null,"Welcome home")),(0,v.tZ)(m.F,{size:"l"}),(0,v.tZ)(f.Gv,null,(0,v.tZ)(p.J,null,(0,v.tZ)(d.cq,{description:"Create search experiences with a refined set of APIs and tools.",image:(0,I.dq)("/images/home--enterprise.png"),title:"Enterprise Search"})),(0,v.tZ)(p.J,null,(0,v.tZ)(d.cq,{description:"Consolidate your logs, metrics, application traces, and system availability with purpose-built UIs.",image:(0,I.dq)("/images/home--observability.png"),title:"Observability"})),(0,v.tZ)(p.J,null,(0,v.tZ)(d.cq,{description:"Prevent, collect, detect, and respond to threats for unified protection across your infrastructure.",image:(0,I.dq)("/images/home--security.png"),title:"Security"})),(0,v.tZ)(p.J,null,(0,v.tZ)(d.cq,{description:"Explore, visualize, and analyze your data using a powerful suite of analytical tools and applications.",image:(0,I.dq)("/images/home--analytics.png"),title:"Analytics"}))),(0,v.tZ)(y.Gt,{margin:"xxl"}),(0,v.tZ)(f.Gv,{alignItems:"center",gutterSize:"l"},(0,v.tZ)(p.J,null,(0,v.tZ)(g.yR,{size:"s"},(0,v.tZ)("h2",null,"Get started by adding integrations")),(0,v.tZ)(m.F,{size:"l"}),(0,v.tZ)(b.a,{size:"m"},(0,v.tZ)("p",null,"To start working with your data, use one of our many ingest options. Collect data from an app or service, or upload a file. If you're not ready to use your own data, add a sample data set.")),(0,v.tZ)(m.F,{size:"l"}),(0,v.tZ)(f.Gv,{justifyContent:"flexStart",gutterSize:"m"},(0,v.tZ)(p.J,{grow:!1},(0,v.tZ)(l.g2,{fill:!0,onClick:function(){return(0,I.c4)("/8.6/guided-setup")},iconType:"plusInCircle"},"Launch setup guide")),(0,v.tZ)(p.J,{grow:!1},(0,v.tZ)(l.g2,{iconType:"plusInCircle"},"Add Integrations")),(0,v.tZ)(p.J,{grow:!1},(0,v.tZ)(h.Xs,{iconType:"documents"},"Try sample data")),(0,v.tZ)(p.J,{grow:!1},(0,v.tZ)(h.Xs,{iconType:"importAction"},"Upload a file")))),(0,v.tZ)(p.J,{grow:!1},(0,v.tZ)(Z.K,{size:"xl",src:(0,I.dq)("/images/illustration--integrations.svg"),alt:"packing box with integrations"}))),(0,v.tZ)(y.Gt,{margin:"xxl"})))}}}]);
//# sourceMappingURL=component---src-pages-8-6-kibana-index-js-85c8d522f489ff571486.js.map