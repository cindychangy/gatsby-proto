"use strict";(self.webpackChunkplatform_onboarding=self.webpackChunkplatform_onboarding||[]).push([[8907],{31355:function(e,t,r){r.d(t,{wO:function(){return d}});r(67294);var n=r(45697),i=r.n(n),a=r(75900),l=r.n(a),o=r(55713),u=r(23431);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var g={row:null,column:"euiFlexGrid--directionColumn"},m=((0,o.u)(g),{none:"euiFlexGrid--gutterNone",s:"euiFlexGrid--gutterSmall",m:"euiFlexGrid--gutterMedium",l:"euiFlexGrid--gutterLarge",xl:"euiFlexGrid--gutterXLarge"}),f=((0,o.u)(m),{0:"euiFlexGrid--wrap",1:"euiFlexGrid--single",2:"euiFlexGrid--halves",3:"euiFlexGrid--thirds",4:"euiFlexGrid--fourths"}),d=(Object.keys(f).map((function(e){return parseInt(e,10)})),function(e){var t=e.children,r=e.className,n=e.gutterSize,i=void 0===n?"l":n,a=e.direction,o=void 0===a?"row":a,d=e.responsive,p=void 0===d||d,b=e.columns,y=void 0===b?0:b,h=e.component,v=void 0===h?"div":h,O=c(e,["children","className","gutterSize","direction","responsive","columns","component"]),S=l()("euiFlexGrid",i?m[i]:void 0,null!=y?f[y]:void 0,o?g[o]:void 0,{"euiFlexGrid--responsive":p},r);return(0,u.tZ)(v,s({className:S},O),t)});d.propTypes={className:i().string,"aria-label":i().string,"data-test-subj":i().string,children:i().node,columns:i().oneOf([0,1,2,3,4]),direction:i().oneOf(["row","column"]),gutterSize:i().oneOf(["none","s","m","l","xl"]),responsive:i().bool,component:i().any}},22929:function(e,t,r){r.d(t,{K:function(){return Z}});var n=r(67294),i=r(45697),a=r.n(i),l=r(75900),o=r.n(l),u=r(25030),s=r(15803),c=r(38925),g=r(54173),m=r(54119),f=r(79830),d=r(23431);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var S={s:"euiImage--small",m:"euiImage--medium",l:"euiImage--large",xl:"euiImage--xlarge",fullWidth:"euiImage--fullWidth",original:"euiImage--original"},x={s:"euiImage--marginSmall",m:"euiImage--marginMedium",l:"euiImage--marginLarge",xl:"euiImage--marginXlarge"},I={left:"euiImage--floatLeft",right:"euiImage--floatRight"},w=Object.keys(S),j={light:"ghost",dark:"default"},Z=function(e){var t=e.className,r=e.url,i=e.src,a=e.size,l=void 0===a?"original":a,v=e.caption,Z=e.hasShadow,k=e.allowFullScreen,F=e.fullScreenIconColor,_=void 0===F?"light":F,N=e.alt,P=e.style,z=e.float,C=e.margin,G=O(e,["className","url","src","size","caption","hasShadow","allowFullScreen","fullScreenIconColor","alt","style","float","margin"]),A=h((0,n.useState)(!1),2),D=A[0],T=A[1],q=function(){T(!1)},R=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},P),W=o()("euiImage",{"euiImage--hasShadow":Z,"euiImage--allowFullScreen":k},C?x[C]:null,z?I[z]:null,t);"string"==typeof l&&w.includes(l)?W="".concat(W," ").concat(S[l]):(W="".concat(W),R.maxWidth=l,R.maxHeight=l,R.width="auto");var E="euiImage__button";E="string"==typeof l&&"original"!==l&&w.includes(l)?"".concat(E," euiImage__button--fullWidth"):"".concat(E);var H,K=h((0,f.m)(),2),L=K[0],M=K[1];v&&(H=(0,d.tZ)("figcaption",{ref:L,className:"euiImage__caption"},v));var B=(0,d.tZ)(s.pH,{type:"fullScreen",color:j[_],className:"euiImage__icon"}),X=(0,d.tZ)(u.$,{"data-test-subj":"fullScreenOverlayMask",onClick:q},(0,d.tZ)(g.n,{clickOutsideDisables:!0},(0,d.tZ)(n.Fragment,null,(0,d.tZ)("figure",{className:"euiImage euiImage-isFullScreen","aria-label":M},(0,d.tZ)("button",{type:"button","aria-label":(0,c.l)("euiImage.closeImage","Close fullscreen {alt} image",{alt:N}),className:"euiImage__button","data-test-subj":"deactivateFullScreenButton",onClick:q,onKeyDown:function(e){e.key===m.hY&&(e.preventDefault(),e.stopPropagation(),q())}},(0,d.tZ)("img",p({src:i||r,alt:N,className:"euiImage-isFullScreen__img"},G))),H),(0,d.tZ)(s.pH,{type:"cross",color:"default",className:"euiImage-isFullScreenCloseIcon"})))),U=(0,c.l)("euiImage.openImage","Open fullscreen {alt} image",{alt:N});return k?(0,d.tZ)("figure",{className:W,"aria-label":M},(0,d.tZ)("button",{type:"button","aria-label":U,className:E,"data-test-subj":"activateFullScreenButton",onClick:function(){T(!0)}},(0,d.tZ)("img",p({style:R,src:i||r,alt:N,className:"euiImage__img"},G)),B),D&&X,H):(0,d.tZ)("figure",{className:W,"aria-label":M},(0,d.tZ)("img",p({style:R,src:i||r,className:"euiImage__img",alt:N},G)),H)};Z.propTypes={className:a().string,"aria-label":a().string,"data-test-subj":a().string,src:a().string,url:a().string,alt:a().string.isRequired,size:a().oneOfType([a().oneOf(["s","m","l","xl","fullWidth","original"]).isRequired,a().number.isRequired,a().string.isRequired]),fullScreenIconColor:a().oneOf(["light","dark"]),caption:a().node,hasShadow:a().bool,allowFullScreen:a().bool,float:a().oneOf(["left","right"]),margin:a().oneOf(["s","m","l","xl"])}},97847:function(e,t,r){r.d(t,{A:function(){return a}});var n=r(23431);var i={name:"1mng3k9",styles:"padding:10px 10px 0"},a=function(e){return{container:i,icon:(0,n.iv)("background:",e.colors.lightestShade,";width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:auto;",""),footer:(0,n.iv)("span.euiProgress__label{flex-grow:0;margin-bottom:5px;}span.euiProgress__valueText{color:",e.colors.darkShade,";}","")}}},31841:function(e,t,r){r.r(t);var n=r(23431),i=r(67294),a=r(61158),l=r(19693),o=r(16e3),u=r(58951),s=r(31355),c=r(2501),g=r(44481),m=r(22929),f=r(79882),d=r(62044),p=r(35059),b=r(79227),y=r(97847),h=r(18792),v=r(1597);t.default=function(){var e=(0,a.r)().euiTheme,t=(0,y.A)(e),r=(0,i.useState)(!1),O=r[0],S=r[1],x=(0,i.useState)("Observability"),I=x[0],w=x[1],j=(0,i.useState)(!0),Z=j[0],k=j[1],F=(0,i.useState)(!0),_=F[0],N=F[1],P=function(e){S(!O),k(!Z),e&&(w(e),N(!0))};return(0,n.tZ)(b.Z,{template:"empty",breadcrumbs:[{text:"Home",href:"#"},{text:"Setup guide"}],guideOpen:O,section:I,buttonDisabled:Z,onClick:function(){return P(I)},completedSteps:{},newUserStartPage:_},(0,n.tZ)(l.F,{size:"xxl"}),(0,n.tZ)("div",{css:t.container},(0,n.tZ)(o.yR,{size:"l",className:"eui-textCenter"},(0,n.tZ)("h1",null,"What would you like to do first?")),(0,n.tZ)(l.F,{size:"s"}),(0,n.tZ)(u.a,{color:"text",size:"m",textAlign:"center"},(0,n.tZ)("p",null,"Select a guide to help you make the most of your data.")),(0,n.tZ)(l.F,{size:"s"}),(0,n.tZ)(l.F,{size:"xxl"}),(0,n.tZ)(s.wO,{columns:4,gutterSize:"l"},h.K.map((function(e,r){return(0,n.tZ)(c.J,{key:r},(0,n.tZ)(g.cq,{image:(0,n.tZ)(m.K,{src:(0,v.dq)("/images/"+e.cardImage),size:200,margin:"s"}),onClick:"Observe my data"!==e.cardTitle?function(){return P(e.section)}:function(){return(0,v.c4)("pages/integrations")},paddingSize:"l",textAlign:"center",title:e.cardTitle,description:e.cardSummary,betaBadgeProps:{label:e.section},footer:(0,n.tZ)("div",{css:t.footer},!e.started&&!e.static&&(0,n.tZ)(f.g2,{fill:!0},"View Guide"),e.static&&(0,n.tZ)(f.g2,{fill:!0},"View integrations")),titleSize:"xs"}))}))),(0,n.tZ)(d.Gt,{margin:"xl"}),(0,n.tZ)(u.a,{size:"s",textAlign:"center"},(0,n.tZ)(p.Xs,{iconSide:"right",onClick:function(){return(0,v.c4)("../kibana")}},"I'd like to do something else (skip)"))))}}}]);
//# sourceMappingURL=component---src-pages-8-6-guided-setup-index-js-127b531c6624a49e7c75.js.map