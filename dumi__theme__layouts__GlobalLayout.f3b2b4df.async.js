"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1032],{35518:function(A,v,t){t.r(v),t.d(v,{default:function(){return s3}});var n=t(97857),m=t.n(n),i=t(805574),k=t.n(i),Z=t(489995),l=t(513669),d=t(606641),E=t(667294),X=t(967333),P=t.n(X),G=t(513769),H=t.n(G),N=t(73287),K=t(592779),e=t(370917),V=["children"],U=function(a){var r=a.children,o=H()(a,V),c=(0,E.useContext)(N.E_),f=c.getPrefixCls,u=c.iconPrefixCls,h=f(),S=l.theme.useToken(),s=S.token;return(0,e.tZ)(K.f6,P()({},o,{customToken:{headerHeight:64,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:s.colorFillTertiary,antCls:".".concat(h),iconCls:".".concat(u),marginFarXS:s.marginXXL/6*7,marginFarSM:s.marginXXL/3*5,marginFar:s.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"}}),r)},$=U,b=t(438746),J=t(719632),D=t.n(J),Q=t(468839),Y=t(122366),q=t(173224),_=t(352180),F=t(373638),t3=t(316165),e3=function(a){var r=E.useCallback(function(){return(0,e.tZ)("svg",P()({width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor"},a),(0,e.tZ)("g",{fillRule:"evenodd"},(0,e.tZ)("g",{fillRule:"nonzero"},(0,e.tZ)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"}))))},[a]);return(0,e.tZ)(t3.Z,P()({component:r},a))},n3=e3,a3=function(a){var r=a.value,o=r===void 0?["light"]:r,c=a.onChange,f=(0,_.Z)(),u=f.token,h=(0,d.TH)(),S=h.pathname,s=h.search;return(0,e.tZ)(l.FloatButton.Group,{trigger:"click",icon:(0,e.tZ)(n3,null)},(0,e.tZ)(d.rU,{to:(0,F.J1)("/theme-editor",(0,F.KE)(S),s),style:{display:"block",marginBottom:u.margin}},(0,e.tZ)(l.FloatButton,{icon:(0,e.tZ)(q.Z,null),tooltip:(0,e.tZ)(d._H,{id:"app.footer.theme"})})),(0,e.tZ)(l.FloatButton,{icon:(0,e.tZ)(Q.Z,null),type:o.includes("dark")?"primary":"default",onClick:function(){o.includes("dark")?c(o.filter(function(C){return C!=="dark"})):c([].concat(D()(o),["dark"]))},tooltip:(0,e.tZ)(d._H,{id:"app.theme.switch.dark"})}),(0,e.tZ)(l.FloatButton,{icon:(0,e.tZ)(Y.Z,null),type:o.includes("compact")?"primary":"default",onClick:function(){o.includes("compact")?c(o.filter(function(C){return C!=="compact"})):c([].concat(D()(o),["compact"]))},tooltip:(0,e.tZ)(d._H,{id:"app.theme.switch.compact"})}))},o3=a3,r3=t(438199),i3=t(217187),l3=768,w=(0,Z.Df)();typeof t.g!="undefined"&&(t.g.styleCache=w);var c3=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return a.map(function(r){return r==="dark"?l.theme.darkAlgorithm:r==="compact"?l.theme.compactAlgorithm:l.theme.defaultAlgorithm})},u3=function(){var a=(0,d.pC)(),r=(0,b.Z)(),o=r.pathname,c=(0,d.lr)(),f=k()(c,2),u=f[0],h=f[1],S=(0,i3.Z)({isMobile:!1,direction:"ltr",theme:["light"]}),s=k()(S,2),y=s[0],C=y.theme,z=y.direction,O=y.isMobile,j=s[1],p=(0,E.useCallback)(function(g){j(function(B){return m()(m()({},B),g)});var M=u.toString(),L=u;Object.entries(g).forEach(function(B){var I=k()(B,2),R=I[0],W=I[1];R==="direction"&&(W==="rtl"?L.set("direction","rtl"):L.delete("direction")),R==="theme"&&(L=(0,d.fW)(m()(m()({},L),{},{theme:W.filter(function(d3){return d3!=="light"})})))}),L.toString()!==M&&h(L)},[u,h]),T=function(){p({isMobile:window.innerWidth<l3})};(0,E.useEffect)(function(){var g=u.getAll("theme"),M=u.get("direction");return j({theme:g,direction:M==="rtl"?"rtl":"ltr"}),T(),window.addEventListener("resize",T),function(){window.removeEventListener("resize",T)}},[]);var m3=(0,E.useMemo)(function(){return{direction:z,updateSiteConfig:p,theme:C,isMobile:O}},[O,z,p,C]);return(0,e.tZ)(Z.V9,{cache:w,linters:[Z.nc,Z.Ke,Z.rA]},(0,e.tZ)(r3.Z.Provider,{value:m3},(0,e.tZ)($,{theme:{algorithm:c3(C)}},(0,e.tZ)(l.App,null,a,!o.startsWith("/~demos")&&(0,e.tZ)(o3,{value:C,onChange:function(M){return p({theme:M})}})))))},s3=u3},122366:function(A,v,t){var n=t(667294);function m(i){return n.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i,{style:Object.assign({verticalAlign:"-0.125em"},i.style),className:["nanqu-token-panel-icon",i.className].filter(Boolean).join(" ")}),n.createElement("g",{id:"Compact-\u9875\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"Compact-\u9ED8\u8BA4",transform:"translate(-9.000000, -82.500000)",fill:"currentColor",fillRule:"nonzero"},n.createElement("g",{id:"Compact-\u9009\u9879\u4E00",transform:"translate(9.268811, 79.500000)"},n.createElement("g",{id:"Compact-smaller",transform:"translate(0.000000, 3.000000)"},n.createElement("rect",{id:"Compact-\u77E9\u5F62",opacity:0,x:0,y:0,width:16,height:16}),n.createElement("path",{d:"M10,14 L10,12 C10,10.8666667 10.8666667,10 12,10 L14,10 C14.4,10 14.6666667,10.2666667 14.6666667,10.6666667 C14.6666667,11.0666667 14.4,11.3333333 14,11.3333333 L12,11.3333333 C11.6,11.3333333 11.3333333,11.6 11.3333333,12 L11.3333333,14 C11.3333333,14.4 11.0666667,14.6666667 10.6666667,14.6666667 C10.2666667,14.6666667 10,14.4 10,14 L10,14 Z M4.66666667,14 L4.66666667,12 C4.66666667,11.6 4.4,11.3333333 4,11.3333333 L2,11.3333333 C1.6,11.3333333 1.33333333,11.0666667 1.33333333,10.6666667 C1.33333333,10.2666667 1.6,10 2,10 L4,10 C5.13333333,10 6,10.8666667 6,12 L6,14 C6,14.4 5.73333333,14.6666667 5.33333333,14.6666667 C4.93333333,14.6666667 4.66666666,14.4 4.66666667,14 L4.66666667,14 Z M12,6 C10.8666667,6 10,5.13333333 10,4 L10,2 C10,1.6 10.2666667,1.33333333 10.6666667,1.33333333 C11.0666667,1.33333333 11.3333333,1.6 11.3333333,2 L11.3333333,4 C11.3333333,4.4 11.6,4.66666667 12,4.66666667 L14,4.66666667 C14.4,4.66666667 14.6666667,4.93333334 14.6666667,5.33333333 C14.6666667,5.73333331 14.4,6 14,6 L12,6 L12,6 Z M2,6 C1.6,6 1.33333333,5.73333333 1.33333333,5.33333333 C1.33333333,4.93333333 1.6,4.66666666 2,4.66666667 L4,4.66666667 C4.4,4.66666667 4.66666667,4.4 4.66666667,4 L4.66666667,2 C4.66666667,1.6 4.93333334,1.33333333 5.33333333,1.33333333 C5.73333331,1.33333333 6,1.6 6,2 L6,4 C6,5.13333333 5.13333333,6 4,6 L2,6 Z",id:"Compact-\u5F62\u72B6"}))))))}v.Z=m},468839:function(A,v,t){var n=t(667294);function m(i){return n.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i,{style:Object.assign({verticalAlign:"-0.125em"},i.style),className:["nanqu-token-panel-icon",i.className].filter(Boolean).join(" ")}),n.createElement("g",{id:"Dark-\u9875\u9762-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"Dark-\u9ED8\u8BA4",transform:"translate(-9.000000, -49.500000)",fill:"currentColor",fillRule:"nonzero"},n.createElement("g",{id:"Dark-\u7F16\u7EC4-17",transform:"translate(0.000000, 42.500000)"},n.createElement("g",{id:"Dark-moon",transform:"translate(9.268811, 7.500000)"},n.createElement("rect",{id:"Dark-\u77E9\u5F62",opacity:0,x:0,y:0,width:16,height:16}),n.createElement("path",{d:"M8,1.33333333 C8.14933333,1.33333333 8.29688889,1.33844444 8.44266667,1.34866666 C8.14755556,1.98422221 8,2.64577777 8,3.33333333 C8,3.96533333 8.12333333,4.56955555 8.37,5.146 C8.61666667,5.72244445 8.94822222,6.21888889 9.36466667,6.63533333 C9.78111112,7.05177777 10.2775556,7.38333332 10.854,7.63 C11.4304444,7.87666668 12.0346667,8.00000001 12.6666667,8 C13.3542222,8 14.0157778,7.85244444 14.6513333,7.55733333 C14.6615556,7.70311111 14.6666667,7.85066667 14.6666667,8 C14.6666667,8.604 14.5868889,9.19422222 14.4273333,9.77066667 C14.2677778,10.3471111 14.0446667,10.8793333 13.758,11.3673333 C13.4713333,11.8553333 13.1233333,12.3042222 12.714,12.714 C12.3046667,13.1237778 11.8557778,13.4717778 11.3673333,13.758 C10.8788889,14.0442222 10.3466667,14.2673333 9.77066667,14.4273333 C9.19466667,14.5873333 8.60444445,14.6671111 8,14.6666685 C7.39555555,14.6662222 6.80533333,14.5864444 6.22933333,14.4273333 C5.65333333,14.2682222 5.1211111,14.0451111 4.63266666,13.758 C4.14422221,13.4708889 3.69533332,13.1228889 3.28599998,12.714 C2.87666665,12.3051111 2.52866665,11.8562222 2.24199998,11.3673333 C1.95533332,10.8784444 1.73222221,10.3462222 1.57266666,9.77066667 C1.4131111,9.19511112 1.33333333,8.6048889 1.33333333,8 C1.33333333,7.3951111 1.4131111,6.80488888 1.57266666,6.22933333 C1.73222221,5.65377778 1.95533332,5.12155555 2.24199998,4.63266666 C2.52866665,4.14377776 2.87666665,3.69488887 3.28599998,3.28599998 C3.69533332,2.8771111 4.14422221,2.5291111 4.63266666,2.24199998 C5.1211111,1.95488887 5.65333333,1.73177776 6.22933333,1.57266666 C6.80533333,1.41355555 7.39555555,1.33377778 8,1.33333333 Z M6.68733333,2.828 C6.11444444,2.97377778 5.58066667,3.20977778 5.086,3.536 C4.59133333,3.86222222 4.166,4.24933333 3.81,4.69733333 C3.454,5.14533333 3.17444444,5.65488889 2.97133333,6.226 C2.76822221,6.79711111 2.66666666,7.38822222 2.66666666,7.99933333 C2.66666666,8.72155555 2.80733332,9.41155555 3.08866666,10.0693333 C3.36999999,10.7271111 3.74933332,11.2948889 4.22666666,11.7726667 C4.70399999,12.2504444 5.27177777,12.6297778 5.92999998,12.9106667 C6.5882222,13.1915556 7.2782222,13.3322222 7.99999998,13.3326667 C8.6111111,13.3326667 9.20222221,13.2311111 9.77333331,13.028 C10.3444444,12.8248889 10.854,12.5453333 11.302,12.1893333 C11.75,11.8333333 12.1371111,11.408 12.4633333,10.9133333 C12.7895555,10.4186666 13.0255555,9.88488887 13.1713333,9.31199998 C13.022,9.32577777 12.8535555,9.33266666 12.666,9.33266666 C11.8535555,9.33266666 11.0775555,9.17377777 10.338,8.85599998 C9.59844443,8.5382222 8.96044443,8.11111109 8.42399998,7.57466666 C7.88755554,7.03822222 7.46044443,6.40022222 7.14266666,5.66066666 C6.82488889,4.92111109 6.66599999,4.14511109 6.66599998,3.33266666 C6.66599998,3.1451111 6.67288888,2.97666666 6.68666666,2.82733333 L6.68733333,2.828 Z",id:"Dark-\u5F62\u72B6"}))))))}v.Z=m}}]);
