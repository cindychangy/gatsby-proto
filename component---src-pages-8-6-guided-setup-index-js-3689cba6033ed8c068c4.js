"use strict";(self.webpackChunkplatform_onboarding=self.webpackChunkplatform_onboarding||[]).push([[8907],{70838:function(e,t,i){i.r(t),i.d(t,{default:function(){return P}});var r=i(23431),n=i(67294),o=i(61158),s=i(19693),a=i(10872),l=i(16e3),u=i(58951),c=i(45697),d=i.n(c),p=i(75900),g=i.n(p),m=i(55713);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},b.apply(this,arguments)}function f(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var v={row:null,column:"euiFlexGrid--directionColumn"},y=((0,m.u)(v),{none:"euiFlexGrid--gutterNone",s:"euiFlexGrid--gutterSmall",m:"euiFlexGrid--gutterMedium",l:"euiFlexGrid--gutterLarge",xl:"euiFlexGrid--gutterXLarge"}),x=((0,m.u)(y),{0:"euiFlexGrid--wrap",1:"euiFlexGrid--single",2:"euiFlexGrid--halves",3:"euiFlexGrid--thirds",4:"euiFlexGrid--fourths"}),h=(Object.keys(x).map((function(e){return parseInt(e,10)})),function(e){var t=e.children,i=e.className,n=e.gutterSize,o=void 0===n?"l":n,s=e.direction,a=void 0===s?"row":s,l=e.responsive,u=void 0===l||l,c=e.columns,d=void 0===c?0:c,p=e.component,m=void 0===p?"div":p,h=f(e,["children","className","gutterSize","direction","responsive","columns","component"]),S=g()("euiFlexGrid",o?y[o]:void 0,null!=d?x[d]:void 0,a?v[a]:void 0,{"euiFlexGrid--responsive":u},i);return(0,r.tZ)(m,b({className:S},h),t)});h.propTypes={className:d().string,"aria-label":d().string,"data-test-subj":d().string,children:d().node,columns:d().oneOf([0,1,2,3,4]),direction:d().oneOf(["row","column"]),gutterSize:d().oneOf(["none","s","m","l","xl"]),responsive:d().bool,component:d().any};var S=i(2501),Z=i(44481),O=i(9040),F=i(79882),k=i(62044),w=i(35960),z=i(6539);var G={name:"1mng3k9",styles:"padding:10px 10px 0"},C=[{title:"Search my Data",image:"illustration-search.png",description:"Create a search experience for your websites, applications, workplace content, or anything in between.",icon:"logoElasticsearch",section:"Search",started:!1},{title:"Observe my Kubernetes infrastructure",image:"illustration-observability.png",description:"Monitor your Kubernetes infrastructure by consolidating your logs and metrics.",icon:"logoObservability",section:"Observe",started:!0,progress:2},{title:"Observe my data",image:"illustration-observability.png",description:"Choose one of our many integrations to bring your data in, and start visualizing it.",icon:"logoSecurity",section:"Observe",started:null},{title:"Protect my Environment",image:"illustration-security.png",description:"Protect your environment by unifying SIEM, endpoint security, and cloud security to protect against threats.",icon:"logoElasticsearch",section:"Security",started:!0,progress:4}],j=i(1597),P=function(){var e=function(e){return{container:G,icon:(0,r.iv)("background:",e.colors.lightestShade,";width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:auto;",""),footer:(0,r.iv)("span.euiProgress__label{flex-grow:0;margin-bottom:5px;}span.euiProgress__valueText{color:",e.colors.darkShade,";}","")}}((0,o.r)().euiTheme),t=(0,n.useState)(!1),i=t[0],c=t[1],d=(0,n.useState)("Observability"),p=d[0],g=d[1],m=(0,n.useState)(!0),b=m[0],f=m[1],v=(0,n.useState)(!0),y=v[0],x=v[1],P=function(e){c(!i),f(!b),e&&(g(e),x(!0))};return(0,r.tZ)(z.Z,{template:"empty",breadcrumbs:[{text:"Home",href:"#"},{text:"Guided setup"}],guideOpen:i,section:p,buttonDisabled:b,onClick:function(){return P(p)},completedSteps:{"step-1":"","step-2":"","step-3":"","step-4":"","step-5":"","step-6":""},isSetupPage:y},(0,r.tZ)(s.F,{size:"xxl"}),(0,r.tZ)(a.xe,{paddingSize:"l"},(0,r.tZ)("div",{css:e.container},(0,r.tZ)(l.yR,{size:"l",className:"eui-textCenter"},(0,r.tZ)("h1",null,"What would you like to do first?")),(0,r.tZ)(s.F,{size:"s"}),(0,r.tZ)(u.a,{color:"subdued",size:"m",textAlign:"center"},(0,r.tZ)("p",null,"Select an option below to get a quick tour of the most valuable features based on your preferences.")),(0,r.tZ)(s.F,{size:"s"}),(0,r.tZ)(s.F,{size:"xxl"}),(0,r.tZ)(h,{columns:4,gutterSize:"l"},C.map((function(t,i){return(0,r.tZ)(S.J,{key:i},(0,r.tZ)(Z.cq,{display:"subdued",image:(0,j.dq)("/images/"+t.image),onClick:"Observe my data"!==t.title?function(){return P(t.section)}:function(){return(0,j.c4)("pages/integrations")},paddingSize:"l",textAlign:"center",title:t.title,description:t.description,betaBadgeProps:{label:t.section},footer:(0,r.tZ)("div",{css:e.footer},t.started&&(0,r.tZ)(n.Fragment,null,(0,r.tZ)(O.fx,{valueText:t.progress+"/4 steps",value:t.progress,max:4,size:"s",label:4===t.progress?"Completed":"In progress"}),(0,r.tZ)(s.F,{size:"l"})),4!==t.progress&&void 0!==t.progress&&(0,r.tZ)(F.g2,{fill:!0},"Continue"),!t.progress&&(0,r.tZ)(F.g2,{fill:!0},"View Guide")),titleSize:"xs"}))}))),(0,r.tZ)(k.Gt,{margin:"xl"}),(0,r.tZ)(u.a,{size:"s",textAlign:"center"},(0,r.tZ)(w.p,{href:"../kibana"},"I'd like to do something else (Skip)")))))}}}]);
//# sourceMappingURL=component---src-pages-8-6-guided-setup-index-js-3689cba6033ed8c068c4.js.map