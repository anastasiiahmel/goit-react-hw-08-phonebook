"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[874],{874:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(9434),r=n(4217),i=n(5861),o=n(4942),s=n(1413),u=n(9439),d=n(4687),c=n.n(d),l=n(2791),m=n(7689),p=n(1614),f=n(890),h=n(4554),x=n(5950),v=n(4294),b=n(4027),g=n(9273),Z=n(184),w=function(){var e=(0,a.I0)(),t=(0,m.s0)(),n=(0,a.v9)(r.Kg),d=(0,l.useState)({email:"",password:""}),w=(0,u.Z)(d,2),W=w[0],k=w[1];(0,l.useEffect)((function(){n&&t("/contacts")}),[n,t]);var S=function(e){var t=e.target,n=t.name,a=t.value;k((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,o.Z)({},n,a))}))},j=function(){var t=(0,i.Z)(c().mark((function t(n){var a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a={email:W.email,password:W.password},e((0,g.pH)(a)).then((function(){b.ZP.success("Login success!")})).catch((function(e){b.ZP.error("Login error, Email or Password wrong!")}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,Z.jsxs)(p.Z,{maxWidth:"100vh",children:[(0,Z.jsx)(f.Z,{variant:"h3",align:"center",children:"Authentication"}),(0,Z.jsx)(h.Z,{maxWidth:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingLeft:50,children:(0,Z.jsxs)("form",{onSubmit:j,children:[(0,Z.jsx)(x.Z,{label:"Email",type:"email",name:"email",value:W.email,onChange:S,variant:"outlined",fullWidth:!0,required:!0,margin:"normal"}),(0,Z.jsx)(x.Z,{label:"Password",type:"password",name:"password",value:W.password,onChange:S,variant:"outlined",fullWidth:!0,required:!0,margin:"normal"}),(0,Z.jsx)(v.Z,{type:"submit",variant:"contained",color:"primary",sx:{display:"block",margin:"0 auto"},children:"Sign in"})]})})]})},W=n(331),k=function(){var e=(0,a.v9)(r.xU);return(0,Z.jsx)(Z.Fragment,{children:e?(0,Z.jsx)(W.a,{}):(0,Z.jsx)(w,{})})}},1614:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(4942),r=n(3366),i=n(7462),o=n(2791),s=n(3733),u=n(1122),d=n(1217),c=n(4419),l=n(7078),m=(0,n(4046).ZP)(),p=n(5080),f=n(184),h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,p.Z)(),v=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,u.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:x})},g=function(e,t){var n=e.classes,a=e.fixed,r=e.disableGutters,i=e.maxWidth,o={root:["root",i&&"maxWidth".concat((0,u.Z)(String(i))),a&&"fixed",r&&"disableGutters"]};return(0,c.Z)(o,(function(e){return(0,d.Z)(t,e)}),n)};var Z=n(4036),w=n(6934),W=n(1402),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,u=e.useThemeProps,d=void 0===u?b:u,c=e.componentName,l=void 0===c?"MuiContainer":c,m=n((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,a.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=n,r=t.breakpoints.values[a];return 0!==r&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(r).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"xs"===n.maxWidth&&(0,a.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,a.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),p=o.forwardRef((function(e,t){var n=d(e),a=n.className,o=n.component,u=void 0===o?"div":o,c=n.disableGutters,p=void 0!==c&&c,x=n.fixed,v=void 0!==x&&x,b=n.maxWidth,Z=void 0===b?"lg":b,w=(0,r.Z)(n,h),W=(0,i.Z)({},n,{component:u,disableGutters:p,fixed:v,maxWidth:Z}),k=g(W,l);return(0,f.jsx)(m,(0,i.Z)({as:u,ownerState:W,className:(0,s.Z)(k.root,a),ref:t},w))}));return p}({createStyledComponent:(0,w.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,W.Z)({props:e,name:"MuiContainer"})}}),S=k}}]);
//# sourceMappingURL=874.2fffec5b.chunk.js.map