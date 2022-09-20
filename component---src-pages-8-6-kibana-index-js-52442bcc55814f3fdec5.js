"use strict";(self.webpackChunkplatform_onboarding=self.webpackChunkplatform_onboarding||[]).push([[6318],{22929:function(e,t,a){a.d(t,{K:function(){return O}});var l=a(67294),n=a(45697),i=a.n(n),r=a(75900),o=a.n(r),s=a(25030),u=a(15803),c=a(38925),g=a(54173),m=a(54119),f=a(79830),p=a(23431);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},h.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function Z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],l=!0,n=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(s){n=!0,i=s}finally{try{l||null==o.return||o.return()}finally{if(n)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function v(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var w={s:"euiImage--small",m:"euiImage--medium",l:"euiImage--large",xl:"euiImage--xlarge",fullWidth:"euiImage--fullWidth",original:"euiImage--original"},I={s:"euiImage--marginSmall",m:"euiImage--marginMedium",l:"euiImage--marginLarge",xl:"euiImage--marginXlarge"},x={left:"euiImage--floatLeft",right:"euiImage--floatRight"},z=Object.keys(w),S={light:"ghost",dark:"default"},O=function(e){var t=e.className,a=e.url,n=e.src,i=e.size,r=void 0===i?"original":i,b=e.caption,O=e.hasShadow,j=e.allowFullScreen,_=e.fullScreenIconColor,M=void 0===_?"light":_,k=e.alt,C=e.style,J=e.float,A=e.margin,H=v(e,["className","url","src","size","caption","hasShadow","allowFullScreen","fullScreenIconColor","alt","style","float","margin"]),q=y((0,l.useState)(!1),2),F=q[0],L=q[1],T=function(){L(!1)},N=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Z(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},C),P=o()("euiImage",{"euiImage--hasShadow":O,"euiImage--allowFullScreen":j},A?I[A]:null,J?x[J]:null,t);"string"==typeof r&&z.includes(r)?P="".concat(P," ").concat(w[r]):(P="".concat(P),N.maxWidth=r,N.maxHeight=r,N.width="auto");var G="euiImage__button";G="string"==typeof r&&"original"!==r&&z.includes(r)?"".concat(G," euiImage__button--fullWidth"):"".concat(G);var V,E=y((0,f.m)(),2),R=E[0],D=E[1];b&&(V=(0,p.tZ)("figcaption",{ref:R,className:"euiImage__caption"},b));var B=(0,p.tZ)(u.pH,{type:"fullScreen",color:S[M],className:"euiImage__icon"}),W=(0,p.tZ)(s.$,{"data-test-subj":"fullScreenOverlayMask",onClick:T},(0,p.tZ)(g.n,{clickOutsideDisables:!0},(0,p.tZ)(l.Fragment,null,(0,p.tZ)("figure",{className:"euiImage euiImage-isFullScreen","aria-label":D},(0,p.tZ)("button",{type:"button","aria-label":(0,c.l)("euiImage.closeImage","Close fullscreen {alt} image",{alt:k}),className:"euiImage__button","data-test-subj":"deactivateFullScreenButton",onClick:T,onKeyDown:function(e){e.key===m.hY&&(e.preventDefault(),e.stopPropagation(),T())}},(0,p.tZ)("img",h({src:n||a,alt:k,className:"euiImage-isFullScreen__img"},H))),V),(0,p.tZ)(u.pH,{type:"cross",color:"default",className:"euiImage-isFullScreenCloseIcon"})))),X=(0,c.l)("euiImage.openImage","Open fullscreen {alt} image",{alt:k});return j?(0,p.tZ)("figure",{className:P,"aria-label":D},(0,p.tZ)("button",{type:"button","aria-label":X,className:G,"data-test-subj":"activateFullScreenButton",onClick:function(){L(!0)}},(0,p.tZ)("img",h({style:N,src:n||a,alt:k,className:"euiImage__img"},H)),B),F&&W,V):(0,p.tZ)("figure",{className:P,"aria-label":D},(0,p.tZ)("img",h({style:N,src:n||a,className:"euiImage__img",alt:k},H)),V)};O.propTypes={className:i().string,"aria-label":i().string,"data-test-subj":i().string,src:i().string,url:i().string,alt:i().string.isRequired,size:i().oneOfType([i().oneOf(["s","m","l","xl","fullWidth","original"]).isRequired,i().number.isRequired,i().string.isRequired]),fullScreenIconColor:i().oneOf(["light","dark"]),caption:i().node,hasShadow:i().bool,allowFullScreen:i().bool,float:i().oneOf(["left","right"]),margin:i().oneOf(["s","m","l","xl"])}},64861:function(e,t,a){a.r(t);var l=a(67294),n=a(89510),i=a(21193),r=a(79882),o=a(41612),s=a(98946),u=a(15803),c=a(62679),g=a(16e3),m=a(19693),f=a(41762),p=a(2501),h=a(44481),d=a(62044),Z=a(58951),y=a(35059),b=a(22929),v=a(1597),w=a(77748),I=a(23431);t.default=function(){return"undefined"==typeof HTMLElement||(0,I.tZ)(l.Fragment,null,(0,I.tZ)(n.j,{theme:"dark",sections:[{items:[(0,I.tZ)(i.N,{iconType:"logoElastic"},"Elastic")],borders:"none"},{items:[(0,I.tZ)(r.g2,{color:"success",size:"s",onClick:function(){return(0,v.c4)("../../8.6/guided-setup")},key:"onboarding-setup-button",fill:!0,style:{margin:"0 10px"}},"Setup guide"),(0,I.tZ)(o.j,{flush:"both"},(0,I.tZ)(w.Z,{showGuideLink:!0})),(0,I.tZ)(o.j,{flush:"both"},(0,I.tZ)(s.Zs,{color:"#25282f",iconType:"cheer",name:"account"})),(0,I.tZ)(o.j,{key:"user","aria-label":"Account menu"},(0,I.tZ)(s.Zs,{size:"s",name:"Else Lane",color:"#06bfb4"}))],borders:"none"}]}),(0,I.tZ)(n.j,{sections:[{items:[(0,I.tZ)(o.j,{"aria-label":"menu navigation",flush:"both"},(0,I.tZ)(u.pH,{type:"menu"})),(0,I.tZ)(o.j,{"aria-label":"menu navigation",flush:"both"},(0,I.tZ)(s.Zs,{name:"Elastic Space",size:"s",type:"space"}))],breadcrumbs:[{text:"Cloud",href:"#"},{text:"Deployments",href:"#"},{text:"Create"}]}]}),(0,I.tZ)(c.g,{template:"empty"},(0,I.tZ)(g.yR,{size:"l"},(0,I.tZ)("h1",null,"Welcome home")),(0,I.tZ)(m.F,{size:"l"}),(0,I.tZ)(f.Gv,null,(0,I.tZ)(p.J,null,(0,I.tZ)(h.cq,{description:"Create search experiences with a refined set of APIs and tools.",image:(0,v.dq)("/images/home--enterprise.png"),title:"Enterprise Search"})),(0,I.tZ)(p.J,null,(0,I.tZ)(h.cq,{description:"Consolidate your logs, metrics, application traces, and system availability with purpose-built UIs.",image:(0,v.dq)("/images/home--observability.png"),title:"Observability"})),(0,I.tZ)(p.J,null,(0,I.tZ)(h.cq,{description:"Prevent, collect, detect, and respond to threats for unified protection across your infrastructure.",image:(0,v.dq)("/images/home--security.png"),title:"Security"})),(0,I.tZ)(p.J,null,(0,I.tZ)(h.cq,{description:"Explore, visualize, and analyze your data using a powerful suite of analytical tools and applications.",image:(0,v.dq)("/images/home--analytics.png"),title:"Analytics"}))),(0,I.tZ)(d.Gt,{margin:"xxl"}),(0,I.tZ)(f.Gv,{alignItems:"center",gutterSize:"l"},(0,I.tZ)(p.J,null,(0,I.tZ)(g.yR,{size:"s"},(0,I.tZ)("h2",null,"Get started by adding integrations")),(0,I.tZ)(m.F,{size:"l"}),(0,I.tZ)(Z.a,{size:"m"},(0,I.tZ)("p",null,"To start working with your data, use one of our many ingest options. Collect data from an app or service, or upload a file. If you're not ready to use your own data, add a sample data set.")),(0,I.tZ)(m.F,{size:"l"}),(0,I.tZ)(f.Gv,{justifyContent:"flexStart",gutterSize:"m"},(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(r.g2,{fill:!0,onClick:function(){return(0,v.c4)("/8.6/guided-setup")},iconType:"plusInCircle"},"Launch setup guide")),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(r.g2,{iconType:"plusInCircle"},"Add Integrations")),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(y.Xs,{iconType:"documents"},"Try sample data")),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(y.Xs,{iconType:"importAction"},"Upload a file")))),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(b.K,{size:"xl",src:(0,v.dq)("/images/illustration--integrations.svg"),alt:"packing box with integrations"}))),(0,I.tZ)(d.Gt,{margin:"none"}),(0,I.tZ)(m.F,{size:"xxl"}),(0,I.tZ)(f.Gv,{alignItems:"flexEnd"},(0,I.tZ)(p.J,{grow:1},(0,I.tZ)(g.yR,{size:"s"},(0,I.tZ)("h3",null,"Management"))),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(y.Xs,{iconType:"wrench",minWidth:100},"Dev Tools")),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(y.Xs,{iconType:"gear",fullWidth:!1},"Stack Management"))),(0,I.tZ)(m.F,{size:"l"}),(0,I.tZ)(f.Gv,{alignItems:"flexStart"},(0,I.tZ)(p.J,null,(0,I.tZ)(h.cq,null,(0,I.tZ)(f.Gv,null,(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"euiIcon euiIcon--large euiIcon--text euiCard__icon",focusable:"false",role:"img","aria-hidden":"true"},(0,I.tZ)("path",{d:"M14 32l-.36-.14A21.07 21.07 0 010 12.07V5.44L14 .06l14 5.38v6.63a21.07 21.07 0 01-13.64 19.78L14 32zM2 6.82v5.25a19.08 19.08 0 0012 17.77 19.08 19.08 0 0012-17.77V6.82L14 2.2 2 6.82z"}),(0,I.tZ)("path",{class:"euiIcon__fillSecondary",d:"M9 17.83h2V23H9zM11 10.18V7H9v3.18a3 3 0 102 0zM10 14a1 1 0 110-2 1 1 0 010 2zM17 7h2v5.17h-2zM21 17a3 3 0 10-4 2.82V23h2v-3.18A3 3 0 0021 17zm-3 1a1 1 0 110-2 1 1 0 010 2z"}))),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(g.yR,{size:"xs"},(0,I.tZ)("h3",null,"Manage permissions")))),(0,I.tZ)(Z.a,{size:"s",textAlign:"left",style:{marginLeft:"47px"}},(0,I.tZ)("p",null,"Control who has access and what tasks they can perform.")))),(0,I.tZ)(p.J,null,(0,I.tZ)(h.cq,null,(0,I.tZ)(f.Gv,null,(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"euiIcon euiIcon--large euiIcon--text euiCard__icon",focusable:"false",role:"img","aria-hidden":"true"},(0,I.tZ)("path",{d:"M1.81 15.19A8.94 8.94 0 0115.62 3.86l.38.42.38-.42a8.94 8.94 0 0114.26 10.68l-1.7-1.07a6.94 6.94 0 00-11.07-8.28L16 7.29l-1.87-2.1A6.94 6.94 0 003.41 14l-1.6 1.19zM16 31.18l-7.74-8.51 1.48-1.34L16 28.21l6.26-6.88 1.48 1.34z"}),(0,I.tZ)("path",{class:"euiIcon__fillSecondary",d:"M16.16 23.29l-4.1-7.17L10.62 19H0v-2h9.38l2.56-5.12 3.9 6.83 4.13-10.32L23.66 17H32v2h-9.66l-2.31-5.39z"}))),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(g.yR,{size:"xs"},(0,I.tZ)("h3",null,"Monitor the stack")))),(0,I.tZ)(Z.a,{size:"s",textAlign:"left",style:{marginLeft:"47px"}},(0,I.tZ)("p",{style:{marginBottom:0}},"Track the real-time health and performance of your deployment.")))),(0,I.tZ)(p.J,null,(0,I.tZ)(h.cq,null,(0,I.tZ)(f.Gv,null,(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",class:"euiIcon euiIcon--large euiIcon--text euiCard__icon",focusable:"false",role:"img","aria-hidden":"true"},(0,I.tZ)("g",{"fill-rule":"evenodd",transform:"translate(0 2)"},(0,I.tZ)("path",{"fill-rule":"nonzero",d:"M2 6a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1H2zm13 2v3a1 1 0 01-1 1H2a1 1 0 01-1-1V8a1 1 0 011-1h12a1 1 0 011 1zm1-3V2a2 2 0 00-2-2H2a2 2 0 00-2 2v3c0 .601.271 1.133.69 1.5C.271 6.867 0 7.399 0 8v3a2 2 0 002 2h12a2 2 0 002-2V8c0-.601-.271-1.133-.689-1.5.418-.367.689-.899.689-1.5z"}),(0,I.tZ)("circle",{cx:"4.5",cy:"9.5",r:"1.5"}),(0,I.tZ)("circle",{cx:"4.5",cy:"3.5",r:"1.5"}),(0,I.tZ)("path",{d:"M12 8h1v3h-1zM10 8h1v3h-1zM12 2h1v3h-1zM10 2h1v3h-1z"})))),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(g.yR,{size:"xs"},(0,I.tZ)("h3",null,"Backup and restore")))),(0,I.tZ)(Z.a,{size:"s",textAlign:"left",style:{marginLeft:"47px"}},(0,I.tZ)("p",{style:{marginBottom:0}},"Save snapshots to backup repository, restore to recover index and cluster state.")))),(0,I.tZ)(p.J,null,(0,I.tZ)(h.cq,null,(0,I.tZ)(f.Gv,null,(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",class:"euiIcon euiIcon--large euiIcon--text euiCard__icon",focusable:"false",role:"img","aria-hidden":"true"},(0,I.tZ)("path",{d:"M32 26v-2h-2.1a5 5 0 00-.73-1.75l1.49-1.49-1.41-1.41-1.49 1.49A5 5 0 0026 20.1V18h-2v2.1a5 5 0 00-1.75.73l-1.49-1.49-1.41 1.41 1.49 1.49A5 5 0 0020.1 24H18v2h2.1a5 5 0 00.73 1.75l-1.49 1.49 1.41 1.41 1.49-1.49a5 5 0 001.76.74V32h2v-2.1a5 5 0 001.75-.73l1.49 1.49 1.41-1.41-1.49-1.49A5 5 0 0029.9 26H32zm-7 2a3 3 0 110-6 3 3 0 010 6z"}),(0,I.tZ)("path",{d:"M25.71 24.29a1 1 0 00-1.09-.21 1.15 1.15 0 00-.33.21.93.93 0 00-.21.33 1 1 0 001.3 1.3 1.15 1.15 0 00.33-.21 1 1 0 00.21-1.09.94.94 0 00-.21-.33z"}),(0,I.tZ)("path",{class:"euiIcon__fillSecondary",d:"M5 6h16v2H5zM5 12h16v2H5zM5 18h10v2H5zM5 24h8v2H5z"}),(0,I.tZ)("path",{d:"M16 32H3a3 3 0 01-3-3V3a3 3 0 013-3h20a3 3 0 013 3v13h-2V3a1 1 0 00-1-1H3a1 1 0 00-1 1v26a1 1 0 001 1h13v2z"}))),(0,I.tZ)(p.J,{grow:!1},(0,I.tZ)(g.yR,{size:"xs"},(0,I.tZ)("h3",null,"Manage index lifecycles")))),(0,I.tZ)(Z.a,{size:"s",textAlign:"left",style:{marginLeft:"47px"}},(0,I.tZ)("p",{style:{marginBottom:0}},"Define lifecycle policies to automatically perform operations as an index ages."))))),(0,I.tZ)(m.F,{size:"xxl"}),(0,I.tZ)(d.Gt,null),(0,I.tZ)(y.Xs,{iconType:"home"},"Display a different page on log in")))}}}]);
//# sourceMappingURL=component---src-pages-8-6-kibana-index-js-52442bcc55814f3fdec5.js.map