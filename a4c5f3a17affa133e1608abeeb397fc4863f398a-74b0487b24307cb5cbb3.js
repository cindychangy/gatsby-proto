"use strict";(self.webpackChunkplatform_onboarding=self.webpackChunkplatform_onboarding||[]).push([[1108],{84721:function(e,t,i){i.d(t,{Z:function(){return _}});var l=i(87462),r=i(63366),n=i(23431),s=i(67294),o=i(61158),a=i(74233),c=i(63735),u=i(41612),d=i(15803),p=i(2501),h=i(18714),m=i(93992),g=i(62044),y=i(34279),b=i(65715),f=i(19693),v=i(16e3),k=i(58951),w=i(61781),Z=i(35059),S=i(79882),x=i(89510),E=i(21193),P=i(98946),z=i(62679),C=i(77748),O=i(1597),A=i(10280),q=i(78490),G=i(35960),T=i(50168),L=i(9040),R=i(41762),F=i(97839),I=i(65465),W=i(10872),N=i(84314),j=function(e){var t=e.step,i=e.confetti,l=e.newUserStartPage,r=e.stepNumber,a=e.stepComplete,c=e.completedSteps,u=e.section,h=e.forceState,m=(0,o.r)().euiTheme,y=(0,N.E)(m),b=r===t.order,v="done"===c["step-"+t.order];(0,s.useEffect)((function(){1!==r&&setTimeout((function(){var e;null===(e=document.getElementById("currentStep"))||void 0===e||e.scrollIntoView({behavior:"smooth"})}),10)}),[]);var w=[y.step,l&&1===t.order&&y.stepOutline,b&&y.stepOutline,h&&y.stepOutline,v&&y.stepDone],x=void 0!==l&&1===t.order||!1===l&&t.pageProgressOpen||void 0!==!l&&t.order===r+1,E=l&&1===t.order||!1===l&&"Search"===u&&1===t.order||!1===l&&"Observe"===u&&3===t.order;return(0,n.tZ)("div",{id:b&&"currentStep"},(0,n.tZ)(R.Gv,{gutterSize:"none",responsive:!1,"aria-label":"step-"+t.order},(0,n.tZ)(p.J,{grow:1},(0,n.tZ)(I._,{id:"step-"+t.order,arrowDisplay:"right",forceState:h||a&&"closed",css:w,buttonContent:(0,n.tZ)(R.Gv,{gutterSize:"none",responsive:!1},(0,n.tZ)(p.J,{grow:!1},a&&b||a||v?(0,n.tZ)(d.pH,{type:"check",size:"m",color:"white"}):(0,n.tZ)(k.a,{size:"s",css:(0,n.iv)("font-weight:",m.font.weight.medium,";lineheight:1.4;","")},t.order)),(0,n.tZ)(p.J,null,(0,n.tZ)(k.a,{css:(0,n.iv)("font-weight:",m.font.weight.semiBold,";","")},t.title))),paddingSize:"none",initialIsOpen:E},(0,n.tZ)(W.xe,{paddingSize:"none",style:{position:"relative",boxShadow:"none"},css:i&&b&&!a&&y.confetti},(0,n.tZ)(f.F,{size:"s"}),(0,n.tZ)(k.a,{size:"s",dangerouslySetInnerHTML:{__html:t.description},css:y.stepText}),t.link&&(0,n.tZ)(Z.Xs,{iconType:"popout",iconSide:"right",iconSize:"s",href:t.link.url,style:{marginLeft:"24px"}},(0,n.tZ)(k.a,{size:"xs"},t.link.title)),x?(0,n.tZ)(R.Gv,{justifyContent:"flexEnd",gutterSize:"none"},(0,n.tZ)(p.J,{grow:!1},(0,n.tZ)(f.F,{size:"m"}),(0,n.tZ)(S.g2,{fill:!0,onClick:function(){return(0,O.c4)("/8.6/guided-setup/"+t.stepPath)}},"Start"))):null)),(0,n.tZ)(g.Gt,{margin:"l"}))))},B=i(88454),U=i(78801),M=function(e){var t=e.guideOpen,i=e.section,l=e.buttonDisabled,r=e.newUserStartPage,a=e.confetti,c=e.stepNumber,u=e.onClick,h=e.handleOptOut,m=e.completedSteps,y=(0,o.r)().euiTheme,b=(0,B.E)(y),w={animation:"transitionIn 850ms ease-in-out"},x=(0,s.useState)(c),E=x[0],P=x[1],z=(0,s.useState)(!1),C=z[0],I=z[1],W=(0,s.useState)(0),N=W[0],M=W[1],H=U.K[1];"Search"===i&&(H=U.K[0]),"Observe"===i&&(H=U.K[1]),"Security"===i&&(H=U.K[3]);var D=H.guideCompleted||C;return(0,s.useEffect)((function(){a&&setTimeout((function(){m["step-"+c]="done",1===c&&(P(2),setTimeout((function(){M(1)}),150)),2===c&&P(3),3===c&&P(4),4===c&&(P(5),setTimeout((function(){I(!0)}),0))}),1500)}),[a,H,m]),(0,n.tZ)(s.Fragment,null,(0,n.tZ)("div",{css:b.buttonContainer},(0,n.tZ)(S.g2,{color:"success",size:"s",onClick:u,key:"onboarding-setup-button",disabled:l,fill:!0},"Setup guide",void 0!==r?"":": step "+c)),!!t&&(0,n.tZ)(A.c2,{ownFocus:!0,onClose:u,"aria-labelledby":"onboarding-guide"},(0,n.tZ)(s.Fragment,null,(0,n.tZ)(q.A,{css:b.panelHeaderBg},(0,n.tZ)(f.F,{size:"m"}),(0,n.tZ)(G.p,{href:(0,O.dq)("/8.6/guided-setup"),onClick:u,color:"text"},(0,n.tZ)(d.pH,{type:"arrowLeft",size:"m"}),"Back to guides"),(0,n.tZ)(f.F,{size:"m"}),(0,n.tZ)(v.yR,{size:"m"},(0,n.tZ)("h2",{css:D&&w},D?"Well done!":H.title)),(0,n.tZ)(f.F,{size:"s"}),(0,n.tZ)(g.Gt,{margin:"s"})),(0,n.tZ)(T.o,null,H.media&&(0,n.tZ)("div",{css:b.media},D?null:(0,n.tZ)(s.Fragment,null,(0,n.tZ)("div",{dangerouslySetInnerHTML:{__html:H.media}}),(0,n.tZ)(f.F,{size:"m"}))),(0,n.tZ)(k.a,{size:"m"},D?(0,n.tZ)("div",null,(0,n.tZ)("img",{src:(0,O.dq)("/images/guide-complete-animation.gif"),alt:"Guide complete",width:"100%",height:"auto"}),(0,n.tZ)("p",{css:D&&w},"You’ve completed the Guide. Feel free to come back to the Guides for more onboarding help or a refresher anytime you’d like.")):(0,n.tZ)("p",null,H.intro)),H.link&&!D&&(0,n.tZ)(s.Fragment,null,(0,n.tZ)(f.F,{size:"m"}),(0,n.tZ)(k.a,{size:"m"},(0,n.tZ)(G.p,{target:"_blank",href:H.link.url,css:(0,n.iv)("font-weight:",y.font.weight.regular,";","")},H.link.title))),(0,n.tZ)(f.F,{size:"xs"}),0===Object.keys(m).length&&a&&(0,n.tZ)(s.Fragment,null,(0,n.tZ)(f.F,{size:"l"}),(0,n.tZ)(L.fx,{valueText:Object.keys(m).length+"/4 steps",value:1===c?N:Object.keys(m).length,max:4,size:"l",label:4===Object.keys(m).length?"Completed":"Progress"}),(0,n.tZ)(f.F,{size:"s"})),0!==Object.keys(m).length&&(0,n.tZ)(s.Fragment,null,(0,n.tZ)(f.F,{size:"l"}),(0,n.tZ)(L.fx,{valueText:Object.keys(m).length+"/4 steps",value:1===c?N:Object.keys(m).length,max:4,size:"l",label:4===Object.keys(m).length?"Completed":"Progress"}),(0,n.tZ)(f.F,{size:"s"})),(0,n.tZ)(g.Gt,null),H.steps.map((function(e){return(0,n.tZ)(j,{key:e.order,step:e,confetti:a,newUserStartPage:r,stepNumber:c,section:i,stepComplete:e.stepComplete,completedSteps:m,forceState:E===e.order?"open":(E-1===e.order?"closed":!1===r&&"Search"===i&&1===e.order&&"open")||!1===r&&"Observe"===i&&3===e.order&&"open"})})),C&&(0,n.tZ)(R.Gv,{gutterSize:"m",justifyContent:"flexEnd"},(0,n.tZ)(p.J,{grow:!1},(0,n.tZ)(S.g2,{onClick:function(){return(0,O.c4)("/8.6/kibana-confetti")},fill:!0},"Continue using Elastic")))),(0,n.tZ)(F.i,{css:b.panelFooterBg},(0,n.tZ)(R.Gv,{alignItems:"center",justifyContent:"center"},(0,n.tZ)(Z.Xs,{iconType:"questionInCircle",iconSide:"right",href:"https://cloud.elastic.co/support",style:{color:y.colors.darkShade,fontWeight:400},css:b.iconQuestion},"Need help?"),(0,n.tZ)(k.a,{size:"xs",style:{color:y.colors.disabled}},"|"),(0,n.tZ)(Z.Xs,{iconType:"faceHappy",iconSide:"right",color:"text",href:"https://www.elastic.co/kibana/feedback",style:{color:y.colors.darkShade,fontWeight:400}},"Give feedback"),(0,n.tZ)(k.a,{size:"xs",style:{color:y.colors.disabled}},"|"),(0,n.tZ)(Z.Xs,{iconType:"exit",iconSide:"right",color:"text",onClick:h,style:{color:y.colors.darkShade,fontWeight:400}},"Quit guide"),(0,n.tZ)(f.F,{size:"s"})),(0,n.tZ)(f.F,{size:"m"})))))},H=i(98975),D=["onClick","guideOpen","setGuide","section","confetti","buttonDisabled","newUserStartPage","pageHeader","stepNumber","breadcrumbs","hasSidebar","children","completedSteps"];var K={name:"1koy43t",styles:"margin-top:96px;min-height:calc(100vh - 96px);display:flex"},_=function(e){var t,i=e.onClick,O=e.guideOpen,A=(e.setGuide,e.section),q=e.confetti,G=e.buttonDisabled,T=e.newUserStartPage,L=e.pageHeader,R=e.stepNumber,F=e.breadcrumbs,I=e.hasSidebar,W=e.children,N=e.completedSteps,j=(0,r.Z)(e,D),B=(0,o.r)().euiTheme,U=(0,H.v)(B),_=(0,s.useState)(!1),J=_[0],Q=_[1],X=(0,s.useState)(!1),Y=X[0],V=X[1],$=(0,s.useState)(!1),ee=$[0],te=$[1],ie=(0,a.P)({prefix:"collapsibleNav"}),le=[(0,n.tZ)(c.H,{ownFocus:!1,css:K,id:ie,"aria-label":"Main navigation",isOpen:J,button:(0,n.tZ)(u.j,{"aria-label":"Toggle main navigation",onClick:function(){return Q(!J)}},(0,n.tZ)(d.pH,{type:"menu",size:"m","aria-hidden":"true"})),onClose:function(){return Q(!1)}},(0,n.tZ)(p.J,{grow:!1,style:{flexShrink:0}},(0,n.tZ)(h.T,{isCollapsible:!1,background:"dark"},(0,n.tZ)(m.n,{color:"ghost",maxWidth:"none",gutterSize:"none",size:"s",listItems:[{label:"Manage deployment",href:"#",iconType:"logoCloud",iconProps:{color:"ghost"}}]}))),(0,n.tZ)(g.Gt,{margin:"none"}),(0,n.tZ)(p.J,{className:"eui-yScroll"},(0,n.tZ)(h.T,{title:(0,n.tZ)("a",{className:"eui-textInheritColor",href:"#/navigation/collapsible-nav",onClick:function(e){return e.stopPropagation()}},"Analytics"),buttonElement:"div",iconType:"logoKibana",isCollapsible:!0,initialIsOpen:"Kibana"})))];return Y&&(t=(0,n.tZ)(y.w,{maxWidth:448,"aria-label":"optOutModal"},(0,n.tZ)(b.D,null,(0,n.tZ)(f.F,{size:"m"}),(0,n.tZ)(v.yR,{size:"m"},(0,n.tZ)("h2",null,"Quit this setup guide and discard progress?")),(0,n.tZ)(f.F,{size:"m"}),(0,n.tZ)(k.a,null,(0,n.tZ)("p",null,"You can restart anytime, just click Setup guide on the homepage."))),(0,n.tZ)(w.s,null,(0,n.tZ)(Z.Xs,{onClick:function(){return V(!1)}},"Cancel"),(0,n.tZ)(S.g2,{color:"warning",onClick:function(){V(!1),te(!0)},fill:!0},"Quit Guide")))),"undefined"==typeof HTMLElement||(0,n.tZ)(s.Fragment,null,t,(0,n.tZ)("div",{css:U.mainWrapper},(0,n.tZ)(x.j,{position:"fixed",theme:"dark",sections:[{items:[(0,n.tZ)(E.N,{key:"elastic-logo",iconType:"logoElastic",href:"#"},"Elastic")],borders:"none"},{items:[!ee&&(0,n.tZ)(M,{key:"onboarding-setup",onClick:i,handleOptOut:function(){i(),V(!0)},guideOpen:O,buttonDisabled:G,section:A,confetti:q,newUserStartPage:T,stepNumber:R,completedSteps:N}),,(0,n.tZ)(u.j,{flush:"both"},(0,n.tZ)(C.Z,null)),(0,n.tZ)(u.j,{flush:"both"},(0,n.tZ)(P.Zs,{color:"#25282f",iconType:"cheer",name:"account"})),(0,n.tZ)(u.j,{key:"user","aria-label":"Account menu"},(0,n.tZ)(P.Zs,{size:"s",name:"Else Lane",color:"#06bfb4"}))],borders:"none"}]}),(0,n.tZ)(x.j,{position:"fixed",sections:[{items:le,borders:"right"},{items:[(0,n.tZ)(u.j,{key:(0,a.P)(),"aria-label":"Account menu"},(0,n.tZ)(P.Zs,{type:"space",name:"Default Space",size:"s"}))],breadcrumbs:F,borders:"right"}]}),L&&(0,n.tZ)("div",{css:U.header},(0,n.tZ)("div",{className:"euiPageBody--restrictWidth-default"},(0,n.tZ)(v.yR,{size:"l"},(0,n.tZ)("h1",null,L)))),(0,n.tZ)("div",{css:U.contentWrapper,className:"fullBody"},I?W:(0,n.tZ)(z.g,(0,l.Z)({restrictWidth:!0},j),W))))}},78801:function(e,t,i){var l;i.d(t,{K:function(){return r}});var r=[{section:"Search",title:"Add search to my application",intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"},progress:"3/4 steps complete",steps:[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data-confetti",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}]},{section:"Security",title:"Manage my security information and events",complete:!0,intro:"We'll help you quickly gain visibility into your environment using Elastic's out-of-the-box integrations.",link:{title:"Observability 101 Documentation",url:"#"},startPageProgress:!0,startPageSteps:2,steps:[{title:"Add data",description:"<ul><li>Send your data easily.</li><li>Quickly monitor popular cloud services, applications, systems, containers, and more.</li><li>Select your integrations.</li></ul>",link:{title:"Integrations for Observability",url:"#"},stepPath:"observability/add-data",order:1},{title:"Tour Elastic Observability",description:"<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>",link:null,stepPath:"observability/tour",order:2},{title:"Create an Alert",description:"<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>",link:null,stepPath:"observability/alert",pageProgressOpen:!0,order:3},{title:"Do more with Elastic Observability",description:"<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>",link:null,stepPath:"observability/do-more",order:4}]},{section:"Observability",title:"Monitor my Kubernetes",progress:"2/4 steps complete",intro:"The following steps will help you get started with monitoring. We recommend going in order. ",link:null,started:!1,steps:[{title:"Monitoring Step 1",description:"<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>",link:null,stepPath:"monitoring/step-1",order:1},{title:"Monitoring Step 2",description:"<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>",link:null,stepPath:"monitoring/step-2",order:2},{title:"Monitoring Step 3",description:"<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>",link:null,stepPath:"monitoring/step-3",order:3},{title:"Monitoring Step 4",description:"<ul><li>Lorem ipsum dolor sit amet, consectetur.</li><li>Sed ut perspiciatis.</li><li>Nemo enim ipsam voluptatem quia.</li></ul>",link:null,stepPath:"monitoring/step-4",order:4}]},{section:"Search",title:"Add search to my ecommerce store",complete:!0,intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"},steps:[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}]},{section:"Observability",title:"Monitor my application's performance (APM)",intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"},steps:[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}]},{section:"Search",title:"Search my internal workplace documents",progress:"1/4 steps complete",intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"},steps:[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}]},{section:"Security",title:"Protect my cloud assets",complete:!0,intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"},steps:[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}]},(l={section:"Observability",title:"Analyze my logs",progress:"3/4 steps complete",intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"}},l.progress="3/4 steps complete",l.steps=[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}],l),{section:"Security",title:"Protect my endpoints",complete:!0,intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"},steps:[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}]},{section:"Search",title:"Add search to my knowledgebase",intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"},steps:[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}]},{section:"Observability",title:"Monitor my infrastructure",intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"},progress:"3/4 steps complete",steps:[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}]},{section:"Search",title:"Add search to my website",complete:!0,intro:"We'll help you build world-class search experiences with your data, using Elastic's out-of-the-box web crawler, connectors, and our robust APIs. Gain deep insights from the built-in search analytics and use that data to inform changes to relevance.",link:{title:"Learn more about Elastic Enterprise Search",url:"#"},steps:[{title:"Add data",description:"<ul><li>Select an ingestion method </li><li>Create a new Elasticsearch index.</li><li>Configure your ingestion setting.</li></ul>",link:{title:"Getting started with Elastic Enterprise Search",url:"#"},stepPath:"search/add-data",order:1},{title:"Build a search experience",description:"<p>Learn how you can easily unlock the power of the Elastic search platform to build world-class search experiences for your users, customers, and employees.</p>",link:null,stepPath:"search/build",order:2},{title:"Optimize your search relevance",description:'<p style="margin-bottom: 10px;">Take a tour of Elastic’s relevance refinement tools, including</p><ul><li>Relevance and precision tuning</li><li>Adaptive relevance and curations</li><li>Snynonym management</li></ul>',link:null,stepPath:"search/optimize",order:3},{title:"Review your search analytics",description:'<p style="margin-bottom: 10px;">Explore recent activity in your search engines, including:</p><ul><li>Recent queries, clicks, and other events</li><li>Popular queries and documents</li><li>Underperforming metrics, like queries with no results</li></ul>',link:null,stepPath:"search/review",order:4}]}]}}]);
//# sourceMappingURL=a4c5f3a17affa133e1608abeeb397fc4863f398a-74b0487b24307cb5cbb3.js.map