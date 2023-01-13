"use strict";(self.webpackChunkplatform_onboarding=self.webpackChunkplatform_onboarding||[]).push([[6318],{22929:function(e,t,n){n.d(t,{K:function(){return z}});var a=n(67294),i=n(45697),r=n.n(i),o=n(75900),l=n.n(o),s=n(25030),u=n(15803),c=n(38925),m=n(54173),g=n(54119),p=n(79830),f=n(23431);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){i=!0,r=s}finally{try{a||null==l.return||l.return()}finally{if(i)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function v(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var I={s:"euiImage--small",m:"euiImage--medium",l:"euiImage--large",xl:"euiImage--xlarge",fullWidth:"euiImage--fullWidth",original:"euiImage--original"},O={s:"euiImage--marginSmall",m:"euiImage--marginMedium",l:"euiImage--marginLarge",xl:"euiImage--marginXlarge"},S={left:"euiImage--floatLeft",right:"euiImage--floatRight"},w=Object.keys(I),j={light:"ghost",dark:"default"},z=function(e){var t=e.className,n=e.url,i=e.src,r=e.size,o=void 0===r?"original":r,h=e.caption,z=e.hasShadow,k=e.allowFullScreen,x=e.fullScreenIconColor,C=void 0===x?"light":x,P=e.alt,_=e.style,F=e.float,H=e.margin,N=v(e,["className","url","src","size","caption","hasShadow","allowFullScreen","fullScreenIconColor","alt","style","float","margin"]),q=Z((0,a.useState)(!1),2),T=q[0],A=q[1],E=function(){A(!1)},J=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},_),D=l()("euiImage",{"euiImage--hasShadow":z,"euiImage--allowFullScreen":k},H?O[H]:null,F?S[F]:null,t);"string"==typeof o&&w.includes(o)?D="".concat(D," ").concat(I[o]):(D="".concat(D),J.maxWidth=o,J.maxHeight=o,J.width="auto");var G="euiImage__button";G="string"==typeof o&&"original"!==o&&w.includes(o)?"".concat(G," euiImage__button--fullWidth"):"".concat(G);var R,L=Z((0,p.m)(),2),W=L[0],M=L[1];h&&(R=(0,f.tZ)("figcaption",{ref:W,className:"euiImage__caption"},h));var X=(0,f.tZ)(u.pH,{type:"fullScreen",color:j[C],className:"euiImage__icon"}),B=(0,f.tZ)(s.$,{"data-test-subj":"fullScreenOverlayMask",onClick:E},(0,f.tZ)(m.n,{clickOutsideDisables:!0},(0,f.tZ)(a.Fragment,null,(0,f.tZ)("figure",{className:"euiImage euiImage-isFullScreen","aria-label":M},(0,f.tZ)("button",{type:"button","aria-label":(0,c.l)("euiImage.closeImage","Close fullscreen {alt} image",{alt:P}),className:"euiImage__button","data-test-subj":"deactivateFullScreenButton",onClick:E,onKeyDown:function(e){e.key===g.hY&&(e.preventDefault(),e.stopPropagation(),E())}},(0,f.tZ)("img",d({src:i||n,alt:P,className:"euiImage-isFullScreen__img"},N))),R),(0,f.tZ)(u.pH,{type:"cross",color:"default",className:"euiImage-isFullScreenCloseIcon"})))),K=(0,c.l)("euiImage.openImage","Open fullscreen {alt} image",{alt:P});return k?(0,f.tZ)("figure",{className:D,"aria-label":M},(0,f.tZ)("button",{type:"button","aria-label":K,className:G,"data-test-subj":"activateFullScreenButton",onClick:function(){A(!0)}},(0,f.tZ)("img",d({style:J,src:i||n,alt:P,className:"euiImage__img"},N)),X),T&&B,R):(0,f.tZ)("figure",{className:D,"aria-label":M},(0,f.tZ)("img",d({style:J,src:i||n,className:"euiImage__img",alt:P},N)),R)};z.propTypes={className:r().string,"aria-label":r().string,"data-test-subj":r().string,src:r().string,url:r().string,alt:r().string.isRequired,size:r().oneOfType([r().oneOf(["s","m","l","xl","fullWidth","original"]).isRequired,r().number.isRequired,r().string.isRequired]),fullScreenIconColor:r().oneOf(["light","dark"]),caption:r().node,hasShadow:r().bool,allowFullScreen:r().bool,float:r().oneOf(["left","right"]),margin:r().oneOf(["s","m","l","xl"])}},40138:function(e,t,n){var a=n(67294),i=n(61158),r=n(19285),o=n(98946),l=n(22842),s=n(15803),u=n(89510),c=n(21193),m=n(41612),g=n(35059),p=n(1597),f=n(23431);t.Z=function(e){var t=e.crumbs,n=e.isCloud,d=e.isIntegrations,y=(0,i.r)().euiTheme;return"undefined"==typeof HTMLElement||(0,f.tZ)(a.Fragment,null,(0,f.tZ)(u.j,{theme:"dark",sections:[{items:[(0,f.tZ)(c.N,{iconType:"logoElastic"},"Elastic")],borders:"none"},{items:[(0,f.tZ)(m.j,{flush:"both"},(0,f.tZ)((function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,f.tZ)(r.zD,{anchorPosition:"downRight",button:(0,f.tZ)(o.Zs,{color:"#25282f",iconType:"help",name:"account",onClick:function(){return n(!t)}}),closePopover:function(){return n(!1)},isOpen:t,panelPaddingSize:"none"},(0,f.tZ)(l.G,{initialPanelId:0,panels:[{id:0,title:"geauxtrude@suedemont.com",items:[{name:"Profile",icon:(0,f.tZ)(s.pH,{color:y.colors.mediumShade,type:"user",size:"m"})},{name:"Billing",icon:(0,f.tZ)(s.pH,{color:y.colors.mediumShade,type:"payment",size:"m"})},{name:"Organization",icon:(0,f.tZ)(s.pH,{color:y.colors.mediumShade,type:"users",size:"m"})},{name:"Preferences",icon:(0,f.tZ)(s.pH,{color:y.colors.mediumShade,type:"controlsHorizontal",size:"m"})},{name:"Help & Support",icon:(0,f.tZ)(s.pH,{color:y.colors.mediumShade,type:"questionInCircle",size:"m"}),panel:1},{name:"Log out",icon:(0,f.tZ)(s.pH,{color:y.colors.mediumShade,type:"exit",size:"m"}),onClick:function(){(0,p.c4)("/")}}]},{id:1,title:"Help & Support",items:[{name:"Documentation"},{name:"Ask Elastic"},{name:"Give feedback"},{name:"Open an issue in GitHub"}]}]}))}),null)),(0,f.tZ)(m.j,{flush:"both"},(0,f.tZ)(o.Zs,{color:"#25282f",iconType:"cheer",name:"account"})),(0,f.tZ)(m.j,{key:"user","aria-label":"Account menu"},(0,f.tZ)(o.Zs,{size:"s",name:"Else Lane",color:"#06bfb4"})),(0,f.tZ)(a.Fragment,null)],borders:"none"}]}),(0,f.tZ)(u.j,{sections:[{items:n?[]:[(0,f.tZ)(m.j,{"aria-label":"menu navigation",flush:"both"},(0,f.tZ)(s.pH,{type:"menu"})),(0,f.tZ)(m.j,{"aria-label":"menu navigation",flush:"both"},(0,f.tZ)(o.Zs,{name:"Elastic Space",size:"s",type:"space"}))],breadcrumbs:t},{items:d?[(0,f.tZ)(g.Xs,{className:"s-tour-4",size:"s",iconType:"indexOpen",onClick:function(){return(0,p.c4)("/8.4/integrations/browse/security")}},"Add integrations")]:[]}]}))}},64861:function(e,t,n){n.r(t);var a=n(67294),i=n(62679),r=n(16e3),o=n(19693),l=n(41762),s=n(2501),u=n(44481),c=n(62044),m=n(58951),g=n(79882),p=n(35059),f=n(22929),d=n(40138),y=n(1597),b=n(23431);t.default=function(){return(0,b.tZ)(a.Fragment,null,(0,b.tZ)(d.Z,{crumbs:[{text:"Home"}]}),(0,b.tZ)(i.g,{template:"empty"},(0,b.tZ)(r.yR,{size:"l"},(0,b.tZ)("h1",null,"Welcome home")),(0,b.tZ)(o.F,{size:"l"}),(0,b.tZ)(l.Gv,null,(0,b.tZ)(s.J,null,(0,b.tZ)(u.cq,{description:"Create search experiences with a refined set of APIs and tools.",image:(0,y.dq)("/images/home--enterprise.png"),title:"Enterprise Search"})),(0,b.tZ)(s.J,null,(0,b.tZ)(u.cq,{description:"Consolidate your logs, metrics, application traces, and system availability with purpose-built UIs.",image:(0,y.dq)("/images/home--observability.png"),title:"Observability"})),(0,b.tZ)(s.J,null,(0,b.tZ)(u.cq,{description:"Prevent, collect, detect, and respond to threats for unified protection across your infrastructure.",image:(0,y.dq)("/images/home--security.png"),title:"Security"})),(0,b.tZ)(s.J,null,(0,b.tZ)(u.cq,{description:"Explore, visualize, and analyze your data using a powerful suite of analytical tools and applications.",image:(0,y.dq)("/images/home--analytics.png"),title:"Analytics"}))),(0,b.tZ)(c.Gt,{margin:"xxl"}),(0,b.tZ)(l.Gv,{alignItems:"center",gutterSize:"l"},(0,b.tZ)(s.J,null,(0,b.tZ)(r.yR,{size:"s"},(0,b.tZ)("h2",null,"Get started by adding integrations")),(0,b.tZ)(o.F,{size:"l"}),(0,b.tZ)(m.a,{size:"m"},(0,b.tZ)("p",null,"To start working with your data, use one of our many ingest options. Collect data from an app or service, or upload a file. If you're not ready to use your own data, add a sample data set.")),(0,b.tZ)(o.F,{size:"l"}),(0,b.tZ)(l.Gv,{justifyContent:"flexStart",gutterSize:"m"},(0,b.tZ)(s.J,{grow:!1},(0,b.tZ)(g.g2,{fill:!0,onClick:function(){return(0,y.c4)("/8.6/guided-setup")}},"Launch setup guide")),(0,b.tZ)(s.J,{grow:!1},(0,b.tZ)(g.g2,{iconType:"plusInCircle"},"Add Integrations")),(0,b.tZ)(s.J,{grow:!1},(0,b.tZ)(p.Xs,{iconType:"documents"},"Try sample data")),(0,b.tZ)(s.J,{grow:!1},(0,b.tZ)(p.Xs,{iconType:"importAction"},"Upload a file")))),(0,b.tZ)(s.J,{grow:!1},(0,b.tZ)(f.K,{size:"xl",src:(0,y.dq)("/images/illustration--integrations.svg"),alt:"packing box with integrations"}))),(0,b.tZ)(c.Gt,{margin:"xxl"})))}}}]);
//# sourceMappingURL=component---src-pages-8-6-kibana-index-js-d340378f74d5b5647f54.js.map