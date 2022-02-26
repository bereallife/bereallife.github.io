"use strict";(self.webpackChunkgatsby_antd_docs=self.webpackChunkgatsby_antd_docs||[]).push([[691],{200:function(e,t,n){var r=n(7840);t.Z=function(e,t,n){(0,r.ZP)(e,"[antd: ".concat(t,"] ").concat(n))}},4224:function(e,t,n){n.d(t,{b:function(){return r}});var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},8613:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(1413);function a(e,t){var n=(0,r.Z)({},e);return Array.isArray(t)&&t.forEach((function(e){delete n[e]})),n}},3820:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var r=n(7294),a=n(1597),o=n(7462),i=n(4942),c=n(9439),l=n(1002),s=n(5900),u=n.n(s),d=n(8613),f=n(7024),m=n(5671),p=function e(t){return(0,m.Z)(this,e),new Error("unreachable case: ".concat(JSON.stringify(t)))},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},g=function(e){return r.createElement(f.C,null,(function(t){var n,a=t.getPrefixCls,c=t.direction,l=e.prefixCls,s=e.size,d=e.className,f=v(e,["prefixCls","size","className"]),m=a("btn-group",l),g="";switch(s){case"large":g="lg";break;case"small":g="sm";break;case"middle":case void 0:break;default:console.warn(new p(s))}var h=u()(m,(n={},(0,i.Z)(n,"".concat(m,"-").concat(g),g),(0,i.Z)(n,"".concat(m,"-rtl"),"rtl"===c),n),d);return r.createElement("div",(0,o.Z)({},f,{className:h}))}))},h=n(3144),b=n(7326),y=n(136),E=n(8557),x=n(7759),Z=n(2275),k=n(518),N=0,C={};function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=N++,r=t;function a(){(r-=1)<=0?(e(),delete C[n]):C[n]=(0,k.Z)(a)}return C[n]=(0,k.Z)(a),n}w.cancel=function(e){void 0!==e&&(k.Z.cancel(C[e]),delete C[e])},w.ids=C;var T,O=n(4221);function S(e){return!e||null===e.offsetParent||e.hidden}function A(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var P=function(e){(0,y.Z)(n,e);var t=(0,E.Z)(n);function n(){var e;return(0,m.Z)(this,n),(e=t.apply(this,arguments)).containerRef=r.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var r,a;if(!(!t||S(t)||t.className.indexOf("-leave")>=0)){var o=e.props.insertExtraNode;e.extraNode=document.createElement("div");var i=(0,b.Z)(e).extraNode,c=e.context.getPrefixCls;i.className="".concat(c(""),"-click-animating-node");var l=e.getAttributeName();if(t.setAttribute(l,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&A(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){i.style.borderColor=n;var s=(null===(r=t.getRootNode)||void 0===r?void 0:r.call(t))||t.ownerDocument,u=s instanceof Document?s.body:null!==(a=s.firstChild)&&void 0!==a?a:s;T=(0,x.hq)("\n      [".concat(c(""),"-click-animating-without-extra-node='true']::after, .").concat(c(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:u})}o&&t.appendChild(i),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!S(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,r)}),0),w.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=w((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,a=e.props.children;if(e.csp=n,!r.isValidElement(a))return a;var o=e.containerRef;return(0,Z.Yr)(a)&&(o=(0,Z.sQ)(a.ref,e.containerRef)),(0,O.Tm)(a,{ref:o})},e}return(0,h.Z)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,r=this.getAttributeName();e.setAttribute(r,"false"),T&&(T.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return r.createElement(f.C,null,this.renderWave)}}]),n}(r.Component);P.contextType=f.E_;var I=n(4224),L=n(200),R=r.createContext(void 0),j=R,_=n(4552),z=n(1413),W={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},B=n(4971),V=function(e,t){return r.createElement(B.Z,(0,z.Z)((0,z.Z)({},e),{},{ref:t,icon:W}))};V.displayName="LoadingOutlined";var D=r.forwardRef(V),M=function(){return{width:0,opacity:0,transform:"scale(0)"}},U=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},G=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?r.createElement("span",{className:"".concat(t,"-loading-icon")},r.createElement(D,null)):r.createElement(_.Z,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:M,onAppearActive:U,onEnterStart:M,onEnterActive:U,onLeaveStart:U,onLeaveActive:M},(function(e,n){var a=e.className,o=e.style;return r.createElement("span",{className:"".concat(t,"-loading-icon"),style:o,ref:n},r.createElement(D,{className:a}))}))},q=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},F=/^[\u4e00-\u9fa5]{2}$/,H=F.test.bind(F);function J(e){return"text"===e||"link"===e}function Q(e,t){if(null!=e){var n,a=t?" ":"";return"string"!=typeof e&&"number"!=typeof e&&"string"==typeof e.type&&H(e.props.children)?(0,O.Tm)(e,{children:e.props.children.split("").join(a)}):"string"==typeof e?H(e)?r.createElement("span",null,e.split("").join(a)):r.createElement("span",null,e):(n=e,r.isValidElement(n)&&n.type===r.Fragment?r.createElement("span",null,e):e)}}(0,I.b)("default","primary","ghost","dashed","link","text"),(0,I.b)("circle","round"),(0,I.b)("submit","button","reset");var Y=function(e,t){var n,a,s=e.loading,m=void 0!==s&&s,p=e.prefixCls,v=e.type,g=e.danger,h=e.shape,b=e.size,y=e.className,E=e.children,x=e.icon,Z=e.ghost,k=void 0!==Z&&Z,N=e.block,C=void 0!==N&&N,w=e.htmlType,T=void 0===w?"button":w,O=q(e,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),S=r.useContext(j),A=r.useState(!!m),I=(0,c.Z)(A,2),R=I[0],_=I[1],z=r.useState(!1),W=(0,c.Z)(z,2),B=W[0],V=W[1],D=r.useContext(f.E_),M=D.getPrefixCls,U=D.autoInsertSpaceInButton,F=D.direction,Y=t||r.createRef(),$=r.useRef(),K=function(){return 1===r.Children.count(E)&&!x&&!J(v)};a="object"===(0,l.Z)(m)&&m.delay?m.delay||!0:!!m,r.useEffect((function(){clearTimeout($.current),"number"==typeof a?$.current=window.setTimeout((function(){_(a)}),a):_(a)}),[a]),r.useEffect((function(){if(Y&&Y.current&&!1!==U){var e=Y.current.textContent;K()&&H(e)?B||V(!0):B&&V(!1)}}),[Y]);var X=function(t){var n,r=e.onClick,a=e.disabled;R||a?t.preventDefault():null===(n=r)||void 0===n||n(t)};(0,L.Z)(!("string"==typeof x&&x.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(x,"` at https://ant.design/components/icon")),(0,L.Z)(!(k&&J(v)),"Button","`link` or `text` button can't be a `ghost` button.");var ee=M("btn",p),te=!1!==U,ne="";switch(b||S){case"large":ne="lg";break;case"small":ne="sm"}var re=R?"loading":x,ae=u()(ee,(n={},(0,i.Z)(n,"".concat(ee,"-").concat(v),v),(0,i.Z)(n,"".concat(ee,"-").concat(h),h),(0,i.Z)(n,"".concat(ee,"-").concat(ne),ne),(0,i.Z)(n,"".concat(ee,"-icon-only"),!E&&0!==E&&!!re),(0,i.Z)(n,"".concat(ee,"-background-ghost"),k&&!J(v)),(0,i.Z)(n,"".concat(ee,"-loading"),R),(0,i.Z)(n,"".concat(ee,"-two-chinese-chars"),B&&te),(0,i.Z)(n,"".concat(ee,"-block"),C),(0,i.Z)(n,"".concat(ee,"-dangerous"),!!g),(0,i.Z)(n,"".concat(ee,"-rtl"),"rtl"===F),n),y),oe=x&&!R?x:r.createElement(G,{existIcon:!!x,prefixCls:ee,loading:!!R}),ie=E||0===E?function(e,t){var n=!1,a=[];return r.Children.forEach(e,(function(e){var t=(0,l.Z)(e),r="string"===t||"number"===t;if(n&&r){var o=a.length-1,i=a[o];a[o]="".concat(i).concat(e)}else a.push(e);n=r})),r.Children.map(a,(function(e){return Q(e,t)}))}(E,K()&&te):null,ce=(0,d.Z)(O,["navigate"]);if(void 0!==ce.href)return r.createElement("a",(0,o.Z)({},ce,{className:ae,onClick:X,ref:Y}),oe,ie);var le=r.createElement("button",(0,o.Z)({},O,{type:T,className:ae,onClick:X,ref:Y}),oe,ie);return J(v)?le:r.createElement(P,null,le)},$=r.forwardRef(Y);$.displayName="Button",$.Group=g,$.__ANT_BUTTON=!0;var K=$,X=function(){return r.createElement("div",{style:{padding:80,alignItems:"center"}},r.createElement("p",null,r.createElement("h1",{style:{color:"cornflowerblue",fontSize:50,fontWeight:"bold"}},"นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ",r.createElement("br",null),"นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ",r.createElement("br",null),"นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ",r.createElement("br",null))),r.createElement("br",null),r.createElement("h2",null,"ขอนอบน้อมแด่พระผู้มีพระภาคเจ้า พระองค์นั้น ซึ่งเป็นผู้ไกลจากกิเลส ตรัสรู้ชอบได้โดยพระองค์เอง"),r.createElement("br",null),r.createElement(K.Group,{size:"large"},r.createElement(K,{type:"primary",size:"large"},r.createElement(a.Link,{to:"/docs/template/get-started/introduction"},"พระไตรปิฎก"))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d3d22fd7d39a10d854d0.js.map