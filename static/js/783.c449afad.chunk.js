"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[783],{5783:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a=n(9439),o=n(2791),i=n(4420),r=n(826),s=n(756),c=n(4294),d=n(7577),l=n(3329),u=function(){var e=(0,i.v9)((function(e){return e.contacts.items})),t=(0,i.I0)(),n=(0,o.useState)(""),u=(0,a.Z)(n,2),m=u[0],p=u[1],v=(0,o.useState)(""),f=(0,a.Z)(v,2),g=f[0],b=f[1],h=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":p(a);break;case"number":b(a);break;default:return}},y=function(){p(""),b("")};return(0,l.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),e.find((function(e){return e.name.toLowerCase()===m.toLowerCase()})))return(0,d.dp)(m),void y();var a={name:m,number:g};t((0,r.el)(a)),y()},children:[(0,l.jsx)(s.Z,{style:{marginBottom:20},onChange:h,type:"text",label:"Name",value:m,name:"name",fullWidth:!0,id:"outlined-basic",required:!0}),(0,l.jsx)(s.Z,{onChange:h,style:{marginBottom:20},type:"tel",fullWidth:!0,value:g,name:"number",label:"Number",required:!0}),(0,l.jsx)(c.Z,{style:{textTransform:"none",margin:"auto",display:"block"},variant:"contained",type:"submit",children:"Add contact"})]})},m=n(4808),p=function(){var e=(0,i.v9)((function(e){return e.contacts.filter})),t=(0,i.I0)();return(0,l.jsx)(s.Z,{style:{marginBottom:15},onChange:function(e){t((0,m.T)(e.target.value))},type:"text",name:"filter",value:e,fullWidth:!0,label:"Find contacts by name",id:"outlined-basic"})},v=n(9923),f=n(493),g=n(4942),b=n(3366),h=n(7462),y=n(3733),Z=n(4419),x=n(627),C=n(4402),j=n(7630),I=n(1046),S=n(2982),w=n(9103),k=n(162),A=n(2071),P=n(6199),L=n(5878),N=n(1217);function R(e){return(0,N.ZP)("MuiListItem",e)}var G=(0,L.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var F=(0,L.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function O(e){return(0,N.ZP)("MuiListItemSecondaryAction",e)}(0,L.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var M=["className"],B=(0,j.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,h.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),_=o.forwardRef((function(e,t){var n=(0,I.Z)({props:e,name:"MuiListItemSecondaryAction"}),a=n.className,i=(0,b.Z)(n,M),r=o.useContext(P.Z),s=(0,h.Z)({},n,{disableGutters:r.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,Z.Z)(a,O,n)}(s);return(0,l.jsx)(B,(0,h.Z)({className:(0,y.Z)(c.root,a),ownerState:s,ref:t},i))}));_.muiName="ListItemSecondaryAction";var V=_,T=["className"],q=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],D=(0,j.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,h.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,h.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,g.Z)({},"& > .".concat(F.root),{paddingRight:48}),(t={},(0,g.Z)(t,"&.".concat(G.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,g.Z)(t,"&.".concat(G.selected),(0,g.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,C.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(G.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,C.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,g.Z)(t,"&.".concat(G.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,g.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(G.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,C.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,C.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),W=(0,j.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),X=o.forwardRef((function(e,t){var n=(0,I.Z)({props:e,name:"MuiListItem"}),a=n.alignItems,i=void 0===a?"center":a,r=n.autoFocus,s=void 0!==r&&r,c=n.button,d=void 0!==c&&c,u=n.children,m=n.className,p=n.component,v=n.components,f=void 0===v?{}:v,g=n.componentsProps,C=void 0===g?{}:g,j=n.ContainerComponent,L=void 0===j?"li":j,N=n.ContainerProps,F=(N=void 0===N?{}:N).className,O=n.dense,M=void 0!==O&&O,B=n.disabled,_=void 0!==B&&B,X=n.disableGutters,z=void 0!==X&&X,E=n.disablePadding,Y=void 0!==E&&E,H=n.divider,J=void 0!==H&&H,K=n.focusVisibleClassName,Q=n.secondaryAction,U=n.selected,$=void 0!==U&&U,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,ae=void 0===ne?{}:ne,oe=(0,b.Z)(n.ContainerProps,T),ie=(0,b.Z)(n,q),re=o.useContext(P.Z),se=o.useMemo((function(){return{dense:M||re.dense||!1,alignItems:i,disableGutters:z}}),[i,re.dense,M,z]),ce=o.useRef(null);(0,k.Z)((function(){s&&ce.current&&ce.current.focus()}),[s]);var de=o.Children.toArray(u),le=de.length&&(0,w.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,h.Z)({},n,{alignItems:i,autoFocus:s,button:d,dense:se.dense,disabled:_,disableGutters:z,disablePadding:Y,divider:J,hasSecondaryAction:le,selected:$}),me=function(e){var t=e.alignItems,n=e.button,a=e.classes,o=e.dense,i=e.disabled,r={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,Z.Z)(r,R,a)}(ue),pe=(0,A.Z)(ce,t),ve=ae.root||f.Root||D,fe=te.root||C.root||{},ge=(0,h.Z)({className:(0,y.Z)(me.root,fe.className,m),disabled:_},ie),be=p||"li";return d&&(ge.component=p||"div",ge.focusVisibleClassName=(0,y.Z)(G.focusVisible,K),be=S.Z),le?(be=ge.component||p?be:"div","li"===L&&("li"===be?be="div":"li"===ge.component&&(ge.component="div")),(0,l.jsx)(P.Z.Provider,{value:se,children:(0,l.jsxs)(W,(0,h.Z)({as:L,className:(0,y.Z)(me.container,F),ref:pe,ownerState:ue},oe,{children:[(0,l.jsx)(ve,(0,h.Z)({},fe,!(0,x.X)(ve)&&{as:be,ownerState:(0,h.Z)({},ue,fe.ownerState)},ge,{children:de})),de.pop()]}))})):(0,l.jsx)(P.Z.Provider,{value:se,children:(0,l.jsxs)(ve,(0,h.Z)({},fe,{as:be,ref:pe},!(0,x.X)(ve)&&{ownerState:(0,h.Z)({},ue,fe.ownerState)},ge,{children:[de,Q&&(0,l.jsx)(V,{children:Q})]}))})})),z=n(890),E=n(697),Y=(0,n(3553).P1)([function(e){return e.contacts.items},function(e){return e.filter}],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),H=function(){var e=(0,i.v9)(Y),t=(0,i.v9)((function(e){return e.contacts.error})),n=(0,i.v9)((function(e){return e.contacts.isLoading})),a=(0,i.I0)();return(0,o.useEffect)((function(){a((0,r.yF)())}),[a]),"rejected"===t?(0,l.jsx)("div",{children:"Not found contacts"}):n?(0,l.jsx)("div",{children:(0,l.jsx)(v.Z,{})}):0===e.length?(0,l.jsx)("div",{children:"Add your contacts"}):(0,l.jsx)(f.Z,{style:{width:"100%",backgroundColor:"#fff"},children:e.map((function(e){return(0,l.jsxs)(X,{style:{display:"flex",alignItems:"center"},children:[(0,l.jsx)(z.Z,{style:{marginRight:25},typography:"h6",color:"#1954d2",component:"span",children:e.name}),(0,l.jsxs)(E.Z,{style:{marginLeft:"auto"},children:[(0,l.jsx)(z.Z,{style:{marginRight:25},typography:"h6",color:"#1954d2",component:"span",children:e.number}),(0,l.jsx)(c.Z,{variant:"contained",style:{backgroundColor:"darkBlue"},onClick:function(){return a((0,r._f)(e.id))},children:"Delete"})]})]},e.id)}))})},J=function(){return(0,l.jsxs)(E.Z,{style:{marginTop:40,marginLeft:"auto",marginRight:"auto",width:500},children:[(0,l.jsx)(u,{}),(0,l.jsx)(z.Z,{style:{textAlign:"center",marginBottom:15,marginTop:20,fontWeight:500},variant:"h4",component:"p",children:"Contacts"}),(0,l.jsx)(p,{}),(0,l.jsx)(H,{})]})}}}]);
//# sourceMappingURL=783.c449afad.chunk.js.map