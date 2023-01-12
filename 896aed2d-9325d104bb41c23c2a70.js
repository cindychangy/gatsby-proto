"use strict";(self.webpackChunkplatform_onboarding=self.webpackChunkplatform_onboarding||[]).push([[1064],{12425:function(e,t,s){var i=s(23431),o=s(67294),n=s(1597),l=s(61158),r=s(79882),a=s(10280),c=s(78490),u=s(19693),d=s(35960),g=s(15803),p=s(16e3),m=s(62044),Z=s(50168),h=s(58951),f=s(9040),b=s(41762),k=s(2501),y=s(97839),v=s(35059),z=s(39835),F=s(54751);var S={name:"lbtgsv",styles:"margin:0 10px"},x={name:"16g1jri",styles:"width:100%;img{width:100%;}"},C={name:"kl40u6",styles:".euiIcon{width:21px;height:21px;margin-left:-2px;}"};t.Z=function(e){var t=e.guideOpen,s=e.section,w=e.buttonDisabled,O=e.newUserStartPage,j=e.confetti,T=e.stepNumber,G=e.onClick,q=e.handleOptOut,I=e.completedSteps,_=(0,l.r)().euiTheme,K=(0,n.dq)("/images/panel-bg-top-gray.svg"),P=(0,n.dq)("/images/panel-bg-bottom-gray.svg"),W=C,E=x,H=(0,i.iv)("background:url(",P,") no-repeat!important;background-size:cover!important;",""),N=(0,i.iv)("background:url(",K,") no-repeat;",""),X={animation:"transitionIn 850ms ease-in-out"},L=(0,o.useState)(T),U=L[0],A=L[1],B=(0,o.useState)(!1),D=B[0],J=B[1],M=(0,o.useState)(0),Q=M[0],R=M[1],Y=F.K[1];"Search"===s&&(Y=F.K[0]),"Observe"===s&&(Y=F.K[1]),"Security"===s&&(Y=F.K[3]);var V=Y.guideCompleted||D;return(0,o.useEffect)((function(){j&&setTimeout((function(){I["step-"+T]="done",1===T&&(A(2),setTimeout((function(){R(1)}),150)),2===T&&A(3),3===T&&A(4),4===T&&(A(5),setTimeout((function(){J(!0)}),0))}),1500)}),[j,Y,I]),(0,i.tZ)(o.Fragment,null,(0,i.tZ)("div",{css:S},(0,i.tZ)(r.g2,{color:"success",size:"s",onClick:G,key:"onboarding-setup-button",disabled:w,fill:!0},"Setup guide",void 0!==O?"":": step "+T)),!!t&&(0,i.tZ)(a.c2,{ownFocus:!0,onClose:G,"aria-labelledby":"onboarding-guide"},(0,i.tZ)(o.Fragment,null,(0,i.tZ)(c.A,{css:N},(0,i.tZ)(u.F,{size:"m"}),(0,i.tZ)(d.p,{href:(0,n.dq)("/8.6/guided-setup"),onClick:G,color:"text"},(0,i.tZ)(g.pH,{type:"arrowLeft",size:"m"}),"Back to guides"),(0,i.tZ)(u.F,{size:"m"}),(0,i.tZ)(p.yR,{size:"m"},(0,i.tZ)("h2",{css:V&&X},V?"Well done!":Y.title)),(0,i.tZ)(u.F,{size:"s"}),(0,i.tZ)(m.Gt,{margin:"s"})),(0,i.tZ)(Z.o,null,Y.media&&(0,i.tZ)("div",{css:E},V?null:(0,i.tZ)(o.Fragment,null,(0,i.tZ)("div",{dangerouslySetInnerHTML:{__html:Y.media}}),(0,i.tZ)(u.F,{size:"m"}))),(0,i.tZ)(h.a,{size:"m"},V?(0,i.tZ)("div",null,(0,i.tZ)("img",{src:(0,n.dq)("/images/guide-complete-animation.gif"),alt:"Guide complete",width:"100%",height:"auto"}),(0,i.tZ)("p",{css:V&&X},"You’ve completed the Guide. Feel free to come back to the Guides for more onboarding help or a refresher anytime you’d like.")):(0,i.tZ)("p",null,Y.intro)),Y.link&&!V&&(0,i.tZ)(o.Fragment,null,(0,i.tZ)(u.F,{size:"m"}),(0,i.tZ)(h.a,{size:"m"},(0,i.tZ)(d.p,{target:"_blank",href:Y.link.url,css:(0,i.iv)("font-weight:",_.font.weight.regular,";","")},Y.link.title))),(0,i.tZ)(u.F,{size:"xs"}),0===Object.keys(I).length&&j&&(0,i.tZ)(o.Fragment,null,(0,i.tZ)(u.F,{size:"l"}),(0,i.tZ)(f.fx,{valueText:Object.keys(I).length+"/4 steps",value:1===T?Q:Object.keys(I).length,max:4,size:"l",label:4===Object.keys(I).length?"Completed":"Progress"}),(0,i.tZ)(u.F,{size:"s"})),0!==Object.keys(I).length&&(0,i.tZ)(o.Fragment,null,(0,i.tZ)(u.F,{size:"l"}),(0,i.tZ)(f.fx,{valueText:Object.keys(I).length+"/4 steps",value:1===T?Q:Object.keys(I).length,max:4,size:"l",label:4===Object.keys(I).length?"Completed":"Progress"}),(0,i.tZ)(u.F,{size:"s"})),(0,i.tZ)(m.Gt,null),Y.steps.map((function(e){return(0,i.tZ)(z.Z,{key:e.order,step:e,confetti:j,newUserStartPage:O,stepNumber:T,section:s,stepComplete:e.stepComplete,completedSteps:I,forceState:U===e.order?"open":(U-1===e.order?"closed":!1===O&&"Search"===s&&1===e.order&&"open")||!1===O&&"Observe"===s&&3===e.order&&"open"})})),D&&(0,i.tZ)(b.Gv,{gutterSize:"m",justifyContent:"flexEnd"},(0,i.tZ)(k.J,{grow:!1},(0,i.tZ)(r.g2,{onClick:function(){return(0,n.c4)("/8.6/kibana-confetti")},fill:!0},"Continue using Elastic")))),(0,i.tZ)(y.i,{css:H},(0,i.tZ)(b.Gv,{alignItems:"center",justifyContent:"center"},(0,i.tZ)(v.Xs,{iconType:"questionInCircle",iconSide:"right",href:"https://cloud.elastic.co/support",style:{color:_.colors.darkShade,fontWeight:400},css:W},"Need help?"),(0,i.tZ)(h.a,{size:"xs",style:{color:_.colors.disabled}},"|"),(0,i.tZ)(v.Xs,{iconType:"faceHappy",iconSide:"right",color:"text",href:"https://www.elastic.co/kibana/feedback",style:{color:_.colors.darkShade,fontWeight:400}},"Give feedback"),(0,i.tZ)(h.a,{size:"xs",style:{color:_.colors.disabled}},"|"),(0,i.tZ)(v.Xs,{iconType:"exit",iconSide:"right",color:"text",onClick:q,style:{color:_.colors.darkShade,fontWeight:400}},"Quit guide"),(0,i.tZ)(u.F,{size:"s"})),(0,i.tZ)(u.F,{size:"m"})))))}}}]);
//# sourceMappingURL=896aed2d-9325d104bb41c23c2a70.js.map