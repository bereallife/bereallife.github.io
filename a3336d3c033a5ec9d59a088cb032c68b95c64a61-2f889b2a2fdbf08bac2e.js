"use strict";(self.webpackChunkgatsby_antd_docs=self.webpackChunkgatsby_antd_docs||[]).push([[452],{8682:function(t,e,n){n.d(e,{Z:function(){return $}});var a=n(7462),r=n(4942),o=n(9439),i=n(1002),c=n(7294),l=n(5900),s=n.n(l),u=n(8613),d=n(7024),f=n(5671),m=function t(e){return(0,f.Z)(this,t),new Error("unreachable case: ".concat(JSON.stringify(e)))},p=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},v=function(t){return c.createElement(d.C,null,(function(e){var n,o=e.getPrefixCls,i=e.direction,l=t.prefixCls,u=t.size,d=t.className,f=p(t,["prefixCls","size","className"]),v=o("btn-group",l),g="";switch(u){case"large":g="lg";break;case"small":g="sm";break;case"middle":case void 0:break;default:console.warn(new m(u))}var h=s()(v,(n={},(0,r.Z)(n,"".concat(v,"-").concat(g),g),(0,r.Z)(n,"".concat(v,"-rtl"),"rtl"===i),n),d);return c.createElement("div",(0,a.Z)({},f,{className:h}))}))},g=n(3144),h=n(7326),b=n(136),y=n(8557),E=n(7759),x=n(2275),k=n(518),N=0,C={};function Z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=N++,a=e;function r(){(a-=1)<=0?(t(),delete C[n]):C[n]=(0,k.Z)(r)}return C[n]=(0,k.Z)(r),n}Z.cancel=function(t){void 0!==t&&(k.Z.cancel(C[t]),delete C[t])},Z.ids=C;var w,T=n(4221);function O(t){return!t||null===t.offsetParent||t.hidden}function S(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}var P=function(t){(0,b.Z)(n,t);var e=(0,y.Z)(n);function n(){var t;return(0,f.Z)(this,n),(t=e.apply(this,arguments)).containerRef=c.createRef(),t.animationStart=!1,t.destroyed=!1,t.onClick=function(e,n){var a,r;if(!(!e||O(e)||e.className.indexOf("-leave")>=0)){var o=t.props.insertExtraNode;t.extraNode=document.createElement("div");var i=(0,h.Z)(t).extraNode,c=t.context.getPrefixCls;i.className="".concat(c(""),"-click-animating-node");var l=t.getAttributeName();if(e.setAttribute(l,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&S(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){i.style.borderColor=n;var s=(null===(a=e.getRootNode)||void 0===a?void 0:a.call(e))||e.ownerDocument,u=s instanceof Document?s.body:null!==(r=s.firstChild)&&void 0!==r?r:s;w=(0,E.hq)("\n      [".concat(c(""),"-click-animating-without-extra-node='true']::after, .").concat(c(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:t.csp,attachTo:u})}o&&e.appendChild(i),["transition","animation"].forEach((function(n){e.addEventListener("".concat(n,"start"),t.onTransitionStart),e.addEventListener("".concat(n,"end"),t.onTransitionEnd)}))}},t.onTransitionStart=function(e){if(!t.destroyed){var n=t.containerRef.current;e&&e.target===n&&!t.animationStart&&t.resetEffect(n)}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!O(n.target)){t.resetEffect(e);var a=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(e,a)}),0),Z.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=Z((function(){t.animationStart=!1}),10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.renderWave=function(e){var n=e.csp,a=t.props.children;if(t.csp=n,!c.isValidElement(a))return a;var r=t.containerRef;return(0,x.Yr)(a)&&(r=(0,x.sQ)(a.ref,t.containerRef)),(0,T.Tm)(a,{ref:r})},t}return(0,g.Z)(n,[{key:"componentDidMount",value:function(){var t=this.containerRef.current;t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,e=this.props.insertExtraNode;return"".concat(t(""),e?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){var e=this;if(t&&t!==this.extraNode&&t instanceof Element){var n=this.props.insertExtraNode,a=this.getAttributeName();t.setAttribute(a,"false"),w&&(w.innerHTML=""),n&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),["transition","animation"].forEach((function(n){t.removeEventListener("".concat(n,"start"),e.onTransitionStart),t.removeEventListener("".concat(n,"end"),e.onTransitionEnd)}))}}},{key:"render",value:function(){return c.createElement(d.C,null,this.renderWave)}}]),n}(c.Component);P.contextType=d.E_;var A=n(4224),I=n(200),R=c.createContext(void 0),j=R,L=n(4552),_=n(1413),W={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},B=n(4971),z=function(t,e){return c.createElement(B.Z,(0,_.Z)((0,_.Z)({},t),{},{ref:e,icon:W}))};z.displayName="LoadingOutlined";var V=c.forwardRef(z),D=function(){return{width:0,opacity:0,transform:"scale(0)"}},M=function(t){return{width:t.scrollWidth,opacity:1,transform:"scale(1)"}},U=function(t){var e=t.prefixCls,n=!!t.loading;return t.existIcon?c.createElement("span",{className:"".concat(e,"-loading-icon")},c.createElement(V,null)):c.createElement(L.Z,{visible:n,motionName:"".concat(e,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:D,onAppearActive:M,onEnterStart:D,onEnterActive:M,onLeaveStart:M,onLeaveActive:D},(function(t,n){var a=t.className,r=t.style;return c.createElement("span",{className:"".concat(e,"-loading-icon"),style:r,ref:n},c.createElement(V,{className:a}))}))},q=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(n[a[r]]=t[a[r]])}return n},F=/^[\u4e00-\u9fa5]{2}$/,G=F.test.bind(F);function H(t){return"text"===t||"link"===t}function J(t,e){if(null!=t){var n,a=e?" ":"";return"string"!=typeof t&&"number"!=typeof t&&"string"==typeof t.type&&G(t.props.children)?(0,T.Tm)(t,{children:t.props.children.split("").join(a)}):"string"==typeof t?G(t)?c.createElement("span",null,t.split("").join(a)):c.createElement("span",null,t):(n=t,c.isValidElement(n)&&n.type===c.Fragment?c.createElement("span",null,t):t)}}(0,A.b)("default","primary","ghost","dashed","link","text"),(0,A.b)("circle","round"),(0,A.b)("submit","button","reset");var Q=function(t,e){var n,l,f=t.loading,m=void 0!==f&&f,p=t.prefixCls,v=t.type,g=t.danger,h=t.shape,b=t.size,y=t.className,E=t.children,x=t.icon,k=t.ghost,N=void 0!==k&&k,C=t.block,Z=void 0!==C&&C,w=t.htmlType,T=void 0===w?"button":w,O=q(t,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),S=c.useContext(j),A=c.useState(!!m),R=(0,o.Z)(A,2),L=R[0],_=R[1],W=c.useState(!1),B=(0,o.Z)(W,2),z=B[0],V=B[1],D=c.useContext(d.E_),M=D.getPrefixCls,F=D.autoInsertSpaceInButton,Q=D.direction,Y=e||c.createRef(),$=c.useRef(),K=function(){return 1===c.Children.count(E)&&!x&&!H(v)};l="object"===(0,i.Z)(m)&&m.delay?m.delay||!0:!!m,c.useEffect((function(){clearTimeout($.current),"number"==typeof l?$.current=window.setTimeout((function(){_(l)}),l):_(l)}),[l]),c.useEffect((function(){if(Y&&Y.current&&!1!==F){var t=Y.current.textContent;K()&&G(t)?z||V(!0):z&&V(!1)}}),[Y]);var X=function(e){var n,a=t.onClick,r=t.disabled;L||r?e.preventDefault():null===(n=a)||void 0===n||n(e)};(0,I.Z)(!("string"==typeof x&&x.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(x,"` at https://ant.design/components/icon")),(0,I.Z)(!(N&&H(v)),"Button","`link` or `text` button can't be a `ghost` button.");var tt=M("btn",p),et=!1!==F,nt="";switch(b||S){case"large":nt="lg";break;case"small":nt="sm"}var at=L?"loading":x,rt=s()(tt,(n={},(0,r.Z)(n,"".concat(tt,"-").concat(v),v),(0,r.Z)(n,"".concat(tt,"-").concat(h),h),(0,r.Z)(n,"".concat(tt,"-").concat(nt),nt),(0,r.Z)(n,"".concat(tt,"-icon-only"),!E&&0!==E&&!!at),(0,r.Z)(n,"".concat(tt,"-background-ghost"),N&&!H(v)),(0,r.Z)(n,"".concat(tt,"-loading"),L),(0,r.Z)(n,"".concat(tt,"-two-chinese-chars"),z&&et),(0,r.Z)(n,"".concat(tt,"-block"),Z),(0,r.Z)(n,"".concat(tt,"-dangerous"),!!g),(0,r.Z)(n,"".concat(tt,"-rtl"),"rtl"===Q),n),y),ot=x&&!L?x:c.createElement(U,{existIcon:!!x,prefixCls:tt,loading:!!L}),it=E||0===E?function(t,e){var n=!1,a=[];return c.Children.forEach(t,(function(t){var e=(0,i.Z)(t),r="string"===e||"number"===e;if(n&&r){var o=a.length-1,c=a[o];a[o]="".concat(c).concat(t)}else a.push(t);n=r})),c.Children.map(a,(function(t){return J(t,e)}))}(E,K()&&et):null,ct=(0,u.Z)(O,["navigate"]);if(void 0!==ct.href)return c.createElement("a",(0,a.Z)({},ct,{className:rt,onClick:X,ref:Y}),ot,it);var lt=c.createElement("button",(0,a.Z)({},O,{type:T,className:rt,onClick:X,ref:Y}),ot,it);return H(v)?lt:c.createElement(P,null,lt)},Y=c.forwardRef(Q);Y.displayName="Button",Y.Group=v,Y.__ANT_BUTTON=!0;var $=Y}}]);
//# sourceMappingURL=a3336d3c033a5ec9d59a088cb032c68b95c64a61-2f889b2a2fdbf08bac2e.js.map