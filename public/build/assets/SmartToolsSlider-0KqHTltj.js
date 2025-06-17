import{g as $c,r as vt,R as In,j as ye}from"./app-vqFDKtX6.js";import{m as cn,c as Zc,e as Jc,s as vo,a as Qc,b as xo,d as eu,A as tu,f as nu}from"./ServiceSlider-nSjJ8JRJ.js";/* empty css                   */var us,Mo;function iu(){if(Mo)return us;Mo=1;var i=4,e=.001,t=1e-7,n=10,r=11,s=1/(r-1),a=typeof Float32Array=="function";function o(_,m){return 1-3*m+3*_}function l(_,m){return 3*m-6*_}function c(_){return 3*_}function u(_,m,f){return((o(m,f)*_+l(m,f))*_+c(m))*_}function h(_,m,f){return 3*o(m,f)*_*_+2*l(m,f)*_+c(m)}function d(_,m,f,v,M){var x,A,w=0;do A=m+(f-m)/2,x=u(A,v,M)-_,x>0?f=A:m=A;while(Math.abs(x)>t&&++w<n);return A}function p(_,m,f,v){for(var M=0;M<i;++M){var x=h(m,f,v);if(x===0)return m;var A=u(m,f,v)-_;m-=A/x}return m}function g(_){return _}return us=function(m,f,v,M){if(!(0<=m&&m<=1&&0<=v&&v<=1))throw new Error("bezier x values must be in [0, 1] range");if(m===f&&v===M)return g;for(var x=a?new Float32Array(r):new Array(r),A=0;A<r;++A)x[A]=u(A*s,m,v);function w(R){for(var I=0,T=1,E=r-1;T!==E&&x[T]<=R;++T)I+=s;--T;var P=(R-x[T])/(x[T+1]-x[T]),G=I+P*s,F=h(G,m,v);return F>=e?p(R,G,m,v):F===0?G:d(R,I,I+s,m,v)}return function(I){return I===0?0:I===1?1:u(w(I),f,M)}},us}var ru=iu();const yo=$c(ru);var za=function(e){this.startX=e.startX,this.startY=e.startY,this.endX=e.endX,this.endY=e.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=e.startMultiplierX||1,this.endMultiplierX=e.endMultiplierX||1,this.startMultiplierY=e.startMultiplierY||1,this.endMultiplierY=e.endMultiplierY||1};function Nn(){return Nn=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Nn.apply(this,arguments)}var Qr;(function(i){i.speed="speed",i.translateX="translateX",i.translateY="translateY",i.rotate="rotate",i.rotateX="rotateX",i.rotateY="rotateY",i.rotateZ="rotateZ",i.scale="scale",i.scaleX="scaleX",i.scaleY="scaleY",i.scaleZ="scaleZ",i.opacity="opacity"})(Qr||(Qr={}));var Qn;(function(i){i.px="px",i["%"]="%",i.vh="vh",i.vw="vw"})(Qn||(Qn={}));var Qi;(function(i){i.deg="deg",i.turn="turn",i.rad="rad"})(Qi||(Qi={}));var qs;(function(i){i[""]=""})(qs||(qs={}));var Zt;(function(i){i.vertical="vertical",i.horizontal="horizontal"})(Zt||(Zt={}));var So;(function(i){i.ease="ease",i.easeIn="easeIn",i.easeOut="easeOut",i.easeInOut="easeInOut",i.easeInQuad="easeInQuad",i.easeInCubic="easeInCubic",i.easeInQuart="easeInQuart",i.easeInQuint="easeInQuint",i.easeInSine="easeInSine",i.easeInExpo="easeInExpo",i.easeInCirc="easeInCirc",i.easeOutQuad="easeOutQuad",i.easeOutCubic="easeOutCubic",i.easeOutQuart="easeOutQuart",i.easeOutQuint="easeOutQuint",i.easeOutSine="easeOutSine",i.easeOutExpo="easeOutExpo",i.easeOutCirc="easeOutCirc",i.easeInOutQuad="easeInOutQuad",i.easeInOutCubic="easeInOutCubic",i.easeInOutQuart="easeInOutQuart",i.easeInOutQuint="easeInOutQuint",i.easeInOutSine="easeInOutSine",i.easeInOutExpo="easeInOutExpo",i.easeInOutCirc="easeInOutCirc",i.easeInBack="easeInBack",i.easeOutBack="easeOutBack",i.easeInOutBack="easeInOutBack"})(So||(So={}));var Eo=0;function su(){return++Eo,Eo}var au=function(){function i(t){var n=t.el.getBoundingClientRect();if(t.view.scrollContainer){var r=t.view.scrollContainer.getBoundingClientRect();n=Nn({},n,{top:n.top-r.top,right:n.right-r.left,bottom:n.bottom-r.top,left:n.left-r.left})}this.height=t.el.offsetHeight,this.width=t.el.offsetWidth,this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,t.rootMargin&&this._setRectWithRootMargin(t.rootMargin)}var e=i.prototype;return e._setRectWithRootMargin=function(n){var r=n.top+n.bottom,s=n.left+n.right;this.top-=n.top,this.right+=n.right,this.bottom+=n.bottom,this.left-=n.left,this.height+=r,this.width+=s},i}(),ou=[qs[""],Qn.px,Qn["%"],Qn.vh,Qn.vw,Qi.deg,Qi.turn,Qi.rad];function yi(i,e){e===void 0&&(e=Qn["%"]);var t={value:0,unit:e};if(typeof i>"u")return t;var n=typeof i=="number"||typeof i=="string";if(!n)throw new Error("Invalid value provided. Must provide a value as a string or number");i=String(i),t.value=parseFloat(i),t.unit=i.match(/[\d.\-+]*\s*(.*)/)[1]||e;var r=ou.includes(t.unit);if(!r)throw new Error("Invalid unit provided.");return t}var To={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function nc(i){if(Array.isArray(i))return yo(i[0],i[1],i[2],i[3]);if(typeof i=="string"&&typeof To[i]<"u"){var e=To[i];return yo(e[0],e[1],e[2],e[3])}}var lu=Object.values(Qr),cu={speed:"px",translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function bo(i,e){var t={};return lu.forEach(function(n){var r=cu[n];if(typeof(i==null?void 0:i[n])=="number"){var s=i==null?void 0:i[n],a=(s||0)*10+"px",o=(s||0)*-10+"px",l=yi(a),c=yi(o),u={start:l.value,end:c.value,unit:l.unit};e===Zt.vertical&&(t.translateY=u),e===Zt.horizontal&&(t.translateX=u)}if(Array.isArray(i==null?void 0:i[n])){var h=i==null?void 0:i[n];if(typeof h[0]<"u"&&typeof h[1]<"u"){var d=yi(h==null?void 0:h[0],r),p=yi(h==null?void 0:h[1],r),g=nc(h==null?void 0:h[2]);if(t[n]={start:d.value,end:p.value,unit:d.unit,easing:g},d.unit!==p.unit)throw new Error("Must provide matching units for the min and max offset values of each axis.")}}}),t}function Ao(i,e,t,n){var r=t-i,s=r/e;return n&&(s=n(s)),s}function uu(i,e,t){var n=t>=i&&t<=e;return n}function hu(i,e,t,n,r){return(t-e)*(i-n)/(r-n)+e}function ic(i,e){var t=hu(typeof i.easing=="function"?i.easing(e):e,(i==null?void 0:i.start)||0,(i==null?void 0:i.end)||0,0,1);return{value:t,unit:i==null?void 0:i.unit}}var du=Object.values(Qr).filter(function(i){return i!=="opacity"});function fu(i,e){var t=Object.keys(e),n=t.includes("opacity"),r="transform"+(n?",opacity":"");i.style.willChange=r}function pu(i,e,t){if(t){var n=gu(i,e),r=mu(i,e);t.style.transform=n,t.style.opacity=r}}function mu(i,e){var t=i.opacity&&ic(i.opacity,e);if(typeof t>"u"||typeof t.value>"u"||typeof t.unit>"u")return"";var n=""+t.value;return n}function gu(i,e){var t=du.reduce(function(n,r){var s=i[r]&&ic(i[r],e);if(typeof s>"u"||typeof s.value>"u"||typeof s.unit>"u")return n;var a=r+"("+s.value+s.unit+")";return n+a},"");return t}function Wr(i){var e=i.el;e&&(e.style.transform="",e.style.opacity="")}function _u(i,e,t,n){var r=i.top-e.height,s=i.left-e.width,a=i.bottom,o=i.right;s+=t.x,o+=t.x,r+=t.y,a+=t.y,n&&(t.y+i.top<e.height&&(r=0),t.x+i.left<e.width&&(s=0),a>e.scrollHeight-e.height&&(a=e.scrollHeight-e.height),o>e.scrollWidth-e.width&&(o=e.scrollWidth-e.width));var l=new za({startX:s,startY:r,endX:o,endY:a});return l}function si(i,e,t){var n=e>i,r=(Math.abs(i)+Math.abs(e))*(n?-1:1),s=t+r,a=Math.max(t/s,1);return a}function wo(i,e){var t=i.start,n=i.end,r=i.unit;if(r==="%"){var s=e/100;t=t*s,n=n*s}if(r==="vw"){var a=t/100,o=n/100;t=window.innerWidth*a,n=window.innerWidth*o}if(r==="vh"){var l=t/100,c=n/100;t=window.innerHeight*l,n=window.innerHeight*c}return{start:t,end:n}}var Ro={start:0,end:0,unit:""};function vu(i,e,t,n,r,s){var a=t.translateX||Ro,o=t.translateY||Ro,l=wo(a,i.width),c=l.start,u=l.end,h=wo(o,i.height),d=h.start,p=h.end,g=i.top-e.height,_=i.left-e.width,m=i.bottom,f=i.right,v=1,M=1;r===Zt.vertical&&(v=si(d,p,e.height+i.height),M=v);var x=1,A=1;if(r===Zt.horizontal&&(x=si(c,u,e.width+i.width),A=x),d<0&&(g=g+d*v),p>0&&(m=m+p*M),c<0&&(_=_+c*x),u>0&&(f=f+u*A),_+=n.x,f+=n.x,g+=n.y,m+=n.y,s){var w=n.y+i.top<e.height,R=n.x+i.left<e.width,I=n.y+i.bottom>e.scrollHeight-e.height,T=n.x+i.right>e.scrollWidth-e.height;if(w&&I&&(v=1,M=1,g=0,m=e.scrollHeight-e.height),R&&T&&(x=1,A=1,_=0,f=e.scrollWidth-e.width),!w&&I){g=i.top-e.height+n.y,m=e.scrollHeight-e.height;var E=m-g;v=si(d,p,E),M=1,d<0&&(g=g+d*v)}if(!R&&T){_=i.left-e.width+n.x,f=e.scrollWidth-e.width;var P=f-_;x=si(c,u,P),A=1,c<0&&(_=_+c*x)}if(w&&!I){g=0,m=i.bottom+n.y;var G=m-g;v=1,M=si(d,p,G),p>0&&(m=m+p*M)}if(R&&!T){_=0,f=i.right+n.x;var F=f-_;x=1,A=si(c,u,F),u>0&&(f=f+u*A)}}var H=new za({startX:_,startY:g,endX:f,endY:m,startMultiplierX:x,endMultiplierX:A,startMultiplierY:v,endMultiplierY:M});return H}function xu(i,e){var t=Nn({},i);return t.translateX&&(t.translateX=Nn({},i.translateX,{start:t.translateX.start*e.startMultiplierX,end:t.translateX.end*e.endMultiplierX})),t.translateY&&(t.translateY=Nn({},i.translateY,{start:t.translateY.start*e.startMultiplierY,end:t.translateY.end*e.endMultiplierY})),t}function Mu(i,e,t){return i.rootMargin||i.targetElement||i.shouldDisableScalingTranslations?!1:!!(e.translateX&&t===Zt.horizontal||e.translateY&&t===Zt.vertical)}var Co=function(e,t,n){return Math.min(Math.max(e,t),n)},yu=function(){function i(t){this.el=t.el,this.props=t.props,this.scrollAxis=t.scrollAxis,this.disabledParallaxController=t.disabledParallaxController||!1,this.id=su(),this.effects=bo(this.props,this.scrollAxis),this.isInView=null,this.progress=0,this._setElementEasing(t.props.easing),fu(t.el,this.effects)}var e=i.prototype;return e.updateProps=function(n){return this.props=Nn({},this.props,n),this.effects=bo(n,this.scrollAxis),this._setElementEasing(n.easing),this},e.setCachedAttributes=function(n,r){Wr(this),this.rect=new au({el:this.props.targetElement||this.el,rootMargin:this.props.rootMargin,view:n});var s=Mu(this.props,this.effects,this.scrollAxis);return typeof this.props.startScroll=="number"&&typeof this.props.endScroll=="number"?(this.limits=new za({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}),this._setElementStyles(),this):(s?(this.limits=vu(this.rect,n,this.effects,r,this.scrollAxis,this.props.shouldAlwaysCompleteAnimation),this.scaledEffects=xu(this.effects,this.limits)):this.limits=_u(this.rect,n,r,this.props.shouldAlwaysCompleteAnimation),this._setElementStyles(),this)},e._updateElementIsInView=function(n){var r=this.isInView===null;n!==this.isInView&&(n?this.props.onEnter&&this.props.onEnter(this):r||(this._setFinalProgress(),this._setElementStyles(),this.props.onExit&&this.props.onExit(this))),this.isInView=n},e._setFinalProgress=function(){var n=Co(Math.round(this.progress),0,1);this._updateElementProgress(n)},e._setElementStyles=function(){if(!(this.props.disabled||this.disabledParallaxController)){var n=this.scaledEffects||this.effects;pu(n,this.progress,this.el)}},e._updateElementProgress=function(n){this.progress=n,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this)},e._setElementEasing=function(n){this.easing=nc(n)},e.updateElementOptions=function(n){this.scrollAxis=n.scrollAxis,this.disabledParallaxController=n.disabledParallaxController||!1},e.updatePosition=function(n){if(!this.limits)return this;var r=this.scrollAxis===Zt.vertical,s=this.isInView===null,a=r?this.limits.startY:this.limits.startX,o=r?this.limits.endY:this.limits.endX,l=r?this.limits.totalY:this.limits.totalX,c=r?n.y:n.x,u=uu(a,o,c);if(this._updateElementIsInView(u),u){var h=Ao(a,l,c,this.easing);this._updateElementProgress(h),this._setElementStyles()}else s&&(this.progress=Co(Math.round(Ao(a,l,c,this.easing)),0,1),this._setElementStyles());return this},i}(),Po=function(){function i(t){this.scrollContainer=t.scrollContainer,this.width=t.width,this.height=t.height,this.scrollHeight=t.scrollHeight,this.scrollWidth=t.scrollWidth}var e=i.prototype;return e.hasChanged=function(n){return n.width!==this.width||n.height!==this.height||n.scrollWidth!==this.scrollWidth||n.scrollHeight!==this.scrollHeight},e.setSize=function(n){return this.width=n.width,this.height=n.height,this.scrollHeight=n.scrollHeight,this.scrollWidth=n.scrollWidth,this},i}(),Su=function(){function i(t,n){this.x=t,this.y=n,this.dx=0,this.dy=0}var e=i.prototype;return e.setScroll=function(n,r){return this.dx=n-this.x,this.dy=r-this.y,this.x=n,this.y=r,this},i}();function Eu(){var i=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return i=!0,!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return i}var rc=function(){function i(t){var n=t.scrollAxis,r=n===void 0?Zt.vertical:n,s=t.scrollContainer,a=t.disabled,o=a===void 0?!1:a;this.disabled=o,this.scrollAxis=r,this.elements=[],this._hasScrollContainer=!!s,this.viewEl=s??window;var l=this._getScrollPosition(),c=l[0],u=l[1];this.scroll=new Su(c,u),this.view=new Po({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:this._hasScrollContainer?s:void 0}),this._ticking=!1,this._supportsPassive=Eu(),this._bindAllMethods(),!this.disabled&&(this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize())}i.init=function(n){var r=typeof window<"u";if(!r)throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new i(n)};var e=i.prototype;return e._bindAllMethods=function(){var n=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleUpdateCache","_updateAllElements","_updateElementPosition","_setViewSize","_addResizeObserver","_checkIfViewHasChanged","_getViewParams","getElements","createElement","removeElementById","resetElementStyles","updateElementPropsById","update","updateScrollContainer","destroy"].forEach(function(r){n[r]=n[r].bind(n)})},e._addListeners=function(n){n.addEventListener("scroll",this._handleScroll,this._supportsPassive?{passive:!0}:!1),window.addEventListener("resize",this._handleUpdateCache,!1),window.addEventListener("blur",this._handleUpdateCache,!1),window.addEventListener("focus",this._handleUpdateCache,!1),window.addEventListener("load",this._handleUpdateCache,!1)},e._removeListeners=function(n){var r;n.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleUpdateCache,!1),window.removeEventListener("blur",this._handleUpdateCache,!1),window.removeEventListener("focus",this._handleUpdateCache,!1),window.removeEventListener("load",this._handleUpdateCache,!1),(r=this._resizeObserver)==null||r.disconnect()},e._addResizeObserver=function(){var n=this;try{var r=this._hasScrollContainer?this.viewEl:document.documentElement;this._resizeObserver=new ResizeObserver(function(){return n.update()}),this._resizeObserver.observe(r)}catch{console.warn("Failed to create the resize observer in the ParallaxContoller")}},e._getScrollPosition=function(){var n=this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,r=this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset;return[n,r]},e._handleScroll=function(){var n,r=this._getScrollPosition(),s=r[0],a=r[1];this.scroll.setScroll(s,a),!this._ticking&&((n=this.elements)==null?void 0:n.length)>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},e._handleUpdateCache=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},e._updateAllElements=function(n){var r=this,s=n===void 0?{}:n,a=s.updateCache;this.elements&&this.elements.forEach(function(o){a&&o.setCachedAttributes(r.view,r.scroll),r._updateElementPosition(o)}),this._ticking=!1},e._updateElementPosition=function(n){n.props.disabled||this.disabled||n.updatePosition(this.scroll)},e._getViewParams=function(){if(this._hasScrollContainer){var n=this.viewEl.offsetWidth,r=this.viewEl.offsetHeight,s=this.viewEl.scrollHeight,a=this.viewEl.scrollWidth;return this.view.setSize({width:n,height:r,scrollHeight:s,scrollWidth:a})}var o=document.documentElement,l=window.innerWidth||o.clientWidth,c=window.innerHeight||o.clientHeight,u=o.scrollHeight,h=o.scrollWidth;return{width:l,height:c,scrollHeight:u,scrollWidth:h}},e._setViewSize=function(){return this.view.setSize(this._getViewParams())},e._checkIfViewHasChanged=function(){return this.view.hasChanged(this._getViewParams())},e.getElements=function(){return this.elements},e.createElement=function(n){var r=new yu(Nn({},n,{scrollAxis:this.scrollAxis,disabledParallaxController:this.disabled}));return r.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[r]):[r],this._updateElementPosition(r),this._checkIfViewHasChanged()&&this.update(),r},e.removeElementById=function(n){this.elements&&(this.elements=this.elements.filter(function(r){return r.id!==n}))},e.updateElementPropsById=function(n,r){this.elements&&(this.elements=this.elements.map(function(s){return s.id===n?s.updateProps(r):s})),this.update()},e.resetElementStyles=function(n){Wr(n)},e.update=function(){var n=this._getScrollPosition(),r=n[0],s=n[1];this.scroll.setScroll(r,s),this._setViewSize(),this._updateAllElements({updateCache:!0})},e.updateScrollContainer=function(n){this._removeListeners(this.viewEl),this.viewEl=n,this._hasScrollContainer=!!n,this.view=new Po({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:n}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},e.disableParallaxController=function(){this.disabled=!0,this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(n){return Wr(n)})},e.enableParallaxController=function(){var n=this;this.disabled=!1,this.elements&&this.elements.forEach(function(r){return r.updateElementOptions({disabledParallaxController:!1,scrollAxis:n.scrollAxis})}),this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize()},e.disableAllElements=function(){console.warn("deprecated: use disableParallaxController() instead"),this.elements&&(this.elements=this.elements.map(function(n){return n.updateProps({disabled:!0})})),this.update()},e.enableAllElements=function(){console.warn("deprecated: use enableParallaxController() instead"),this.elements&&(this.elements=this.elements.map(function(n){return n.updateProps({disabled:!1})})),this.update()},e.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(n){return Wr(n)}),this.elements=void 0},i}();function ir(){return ir=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},ir.apply(this,arguments)}function Ha(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function Tu(i){return Object.keys(i).forEach(function(e){return i[e]===void 0&&delete i[e]}),i}var bu=["disabled","easing","endScroll","onChange","onEnter","onExit","onProgressChange","opacity","rootMargin","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","shouldAlwaysCompleteAnimation","shouldDisableScalingTranslations","speed","startScroll","targetElement","translateX","translateY"];function ka(i){var e=i.disabled,t=i.easing,n=i.endScroll,r=i.onChange,s=i.onEnter,a=i.onExit,o=i.onProgressChange,l=i.opacity,c=i.rootMargin,u=i.rotate,h=i.rotateX,d=i.rotateY,p=i.rotateZ,g=i.scale,_=i.scaleX,m=i.scaleY,f=i.scaleZ,v=i.shouldAlwaysCompleteAnimation,M=i.shouldDisableScalingTranslations,x=i.speed,A=i.startScroll,w=i.targetElement,R=i.translateX,I=i.translateY,T=Ha(i,bu),E=Tu({disabled:e,easing:t,endScroll:n,onChange:r,onEnter:s,onExit:a,onProgressChange:o,opacity:l,rootMargin:c,rotate:u,rotateX:h,rotateY:d,rotateZ:p,scale:g,scaleX:_,scaleY:m,scaleZ:f,shouldAlwaysCompleteAnimation:v,shouldDisableScalingTranslations:M,speed:x,startScroll:A,targetElement:w,translateX:R,translateY:I});return{parallaxProps:E,rest:T}}function Au(i){vt.useEffect(function(){var e=typeof window>"u",t=i instanceof rc;if(!e&&!i&&!t)throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")},[i])}var sc=In.createContext(null);function wu(){var i=vt.useContext(sc),e=typeof window>"u";if(e)return null;if(!i)throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");return i}function ac(i){var e=wu(),t=vt.useRef(null),n=ka(i),r=n.parallaxProps;Au(e);var s=vt.useState(),a=s[0],o=s[1];return vt.useEffect(function(){var l;if(t.current instanceof HTMLElement){var c={el:t.current,props:r};l=e==null?void 0:e.createElement(c),o(l)}else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");return function(){l&&(e==null||e.removeElementById(l.id))}},[]),vt.useEffect(function(){a&&(i.disabled&&(e==null||e.resetElementStyles(a)),e==null||e.updateElementPropsById(a.id,r))},[i.disabled,i.easing,i.endScroll,i.onChange,i.onEnter,i.onExit,i.onProgressChange,i.opacity,i.rootMargin,i.rotate,i.rotateX,i.rotateY,i.rotateZ,i.scale,i.scaleX,i.scaleY,i.scaleZ,i.shouldAlwaysCompleteAnimation,i.shouldDisableScalingTranslations,i.speed,i.startScroll,i.targetElement,i.translateX,i.translateY]),{ref:t,controller:e,element:a}}function wv(i){var e=ka(i),t=e.parallaxProps,n=e.rest,r=ac(t),s=r.ref;return In.createElement("div",Object.assign({ref:s},n),i.children)}var Ru={height:0};function Cu(i){if(Array.isArray(i.translateY)){var e=yi(i.translateY[0]),t=yi(i.translateY[1]);if(e.unit==="px"&&t.unit==="px")return{top:Math.abs(t.value)*-1+"px",bottom:Math.abs(e.value)*-1+"px"};if(e.unit==="%"&&t.unit==="%"){var n,r,s=(n=(r=i.targetElement)==null?void 0:r.getBoundingClientRect())!=null?n:Ru,a=Math.abs(s.height*.01*t.value)*-1,o=Math.abs(s.height*.01*e.value)*-1;return{top:a+"px",bottom:o+"px"}}}if(i.speed){var l=i.speed||0,c=Math.abs(l)*10*-1;return{top:c+"px",bottom:c+"px"}}return{}}function Pu(i){return i.image?{backgroundImage:"url("+i.image+")",backgroundPosition:"center",backgroundSize:"cover"}:{}}var Lu=["children","disabled","style","expanded","image","testId"],Iu={position:"absolute",top:0,left:0,right:0,bottom:0},Lo=function(e){var t=ka(e),n=t.parallaxProps,r=t.rest,s=r.style,a=r.expanded,o=a===void 0?!0:a,l=r.testId,c=Ha(r,Lu),u=Pu(e),h=o?Cu(e):{},d=ac(ir({targetElement:e.targetElement,shouldDisableScalingTranslations:!0},n));return In.createElement("div",Object.assign({"data-testid":l,ref:d.ref,style:ir({},u,Iu,h,s)},c),r.children)},Du=["disabled","style","layers"],Uu={position:"relative",overflow:"hidden",width:"100%"},Rv=function(e){var t=vt.useState(null),n=t[0],r=t[1],s=vt.useRef(null);vt.useEffect(function(){r(s.current)},[]);var a=e.style,o=e.layers,l=o===void 0?[]:o,c=Ha(e,Du);function u(){if(n){var d=l&&l.length>0;if(d)return l.map(function(p,g){return In.createElement(Lo,Object.assign({},p,{targetElement:n,key:"layer-"+g,testId:"layer-"+g}))})}return null}function h(){return n?In.Children.map(e.children,function(d){var p=d;if((p==null?void 0:p.type)===Lo){var g=In.cloneElement(p,{targetElement:n});return g}return d}):null}return In.createElement("div",Object.assign({ref:s,style:ir({},Uu,a)},c),u(),h())},Nu=function(e){var t=typeof window>"u";return t?null:rc.init(e)};function Cv(i){var e=vt.useRef(null);return e.current||(e.current=Nu({scrollAxis:i.scrollAxis||Zt.vertical,scrollContainer:i.scrollContainer,disabled:i.isDisabled})),vt.useEffect(function(){i.scrollContainer&&e.current&&e.current.updateScrollContainer(i.scrollContainer)},[i.scrollContainer,e.current]),vt.useEffect(function(){i.isDisabled&&e.current&&e.current.disableParallaxController(),!i.isDisabled&&e.current&&e.current.enableParallaxController()},[i.isDisabled,e.current]),vt.useEffect(function(){return function(){e!=null&&e.current&&(e==null||e.current.destroy())}},[]),In.createElement(sc.Provider,{value:e.current},i.children)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="176",Fu=0,Io=1,Ou=2,oc=1,Bu=2,gn=3,Sn=0,Pt=1,en=2,Fn=0,Ei=1,Do=2,Uo=3,No=4,zu=5,Zn=100,Hu=101,ku=102,Vu=103,Gu=104,Wu=200,Xu=201,Yu=202,qu=203,js=204,Ks=205,ju=206,Ku=207,$u=208,Zu=209,Ju=210,Qu=211,eh=212,th=213,nh=214,$s=0,Zs=1,Js=2,Ai=3,Qs=4,ea=5,ta=6,na=7,lc=0,ih=1,rh=2,On=0,sh=1,ah=2,oh=3,lh=4,ch=5,uh=6,hh=7,Fo="attached",dh="detached",cc=300,wi=301,Ri=302,ia=303,ra=304,ss=306,Ci=1e3,Dn=1001,es=1002,bt=1003,uc=1004,Zi=1005,Ut=1006,Xr=1007,vn=1008,nn=1009,hc=1010,dc=1011,rr=1012,Ga=1013,ni=1014,Kt=1015,hr=1016,Wa=1017,Xa=1018,sr=1020,fc=35902,pc=1021,mc=1022,kt=1023,ar=1026,or=1027,Ya=1028,qa=1029,gc=1030,ja=1031,Ka=1033,Yr=33776,qr=33777,jr=33778,Kr=33779,sa=35840,aa=35841,oa=35842,la=35843,ca=36196,ua=37492,ha=37496,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,va=37814,xa=37815,Ma=37816,ya=37817,Sa=37818,Ea=37819,Ta=37820,ba=37821,$r=36492,Aa=36494,wa=36495,_c=36283,Ra=36284,Ca=36285,Pa=36286,lr=2300,cr=2301,hs=2302,Oo=2400,Bo=2401,zo=2402,fh=2500,ph=0,vc=1,La=2,mh=3200,gh=3201,xc=0,_h=1,Ln="",_t="srgb",wt="srgb-linear",ts="linear",et="srgb",ai=7680,Ho=519,vh=512,xh=513,Mh=514,Mc=515,yh=516,Sh=517,Eh=518,Th=519,Ia=35044,ko="300 es",xn=2e3,ns=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vo=1234567;const er=Math.PI/180,Pi=180/Math.PI;function $t(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function $a(i,e){return(i%e+e)%e}function bh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ah(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function wh(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function Rh(i,e=1){return e-Math.abs($a(i,e*2)-e)}function Ch(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ph(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ih(i,e){return i+Math.random()*(e-i)}function Dh(i){return i*(.5-Math.random())}function Uh(i){i!==void 0&&(Vo=i);let e=Vo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nh(i){return i*er}function Fh(i){return i*Pi}function Oh(i){return(i&i-1)===0&&i!==0}function Bh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kh={DEG2RAD:er,RAD2DEG:Pi,generateUUID:$t,clamp:Oe,euclideanModulo:$a,mapLinear:bh,inverseLerp:Ah,lerp:tr,damp:wh,pingpong:Rh,smoothstep:Ch,smootherstep:Ph,randInt:Lh,randFloat:Ih,randFloatSpread:Dh,seededRandom:Uh,degToRad:Nh,radToDeg:Fh,isPowerOfTwo:Oh,ceilPowerOfTwo:Bh,floorPowerOfTwo:zh,setQuaternionFromProperEuler:Hh,normalize:Je,denormalize:qt};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,r,s,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],v=r[1],M=r[4],x=r[7],A=r[2],w=r[5],R=r[8];return s[0]=a*_+o*v+l*A,s[3]=a*m+o*M+l*w,s[6]=a*f+o*x+l*R,s[1]=c*_+u*v+h*A,s[4]=c*m+u*M+h*w,s[7]=c*f+u*x+h*R,s[2]=d*_+p*v+g*A,s[5]=d*m+p*M+g*w,s[8]=d*f+p*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new De;function yc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vh(){const i=ur("canvas");return i.style.display="block",i}const Go={};function Zr(i){i in Go||(Go[i]=!0,console.warn(i))}function Gh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Wh(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wo=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xo=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yh(){const i={enabled:!0,workingColorSpace:wt,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=Mn(r.r),r.g=Mn(r.g),r.b=Mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?ts:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wt]:{primaries:e,whitePoint:n,transfer:ts,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Wo,fromXYZ:Xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}const Ve=Yh();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oi;class qh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oi===void 0&&(oi=ur("canvas")),oi.width=e.width,oi.height=e.height;const r=oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jh=0;class Za{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=$t(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fs(r[a].image)):s.push(fs(r[a]))}else s=fs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kh=0;class mt extends Ni{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Dn,r=Dn,s=Ut,a=vn,o=kt,l=nn,c=mt.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=$t(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=cc;mt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,r=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(p+1)/2,A=(f+1)/2,w=(u+d)/4,R=(h+_)/4,I=(g+m)/4;return M>x&&M>A?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=w/n,s=R/n):x>A?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=w/r,s=I/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=R/s,r=I/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $h extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const r={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Za(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends $h{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sc extends mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zh extends mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-o;const f=l*d+c*p+u*g+h*_,v=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),w=Math.atan2(A,f*v);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const x=o*v;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ps.copy(this).projectOnVector(e),this.sub(ps)}reflect(e){return this.sub(ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ps=new U,Yo=new zn;class En{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),vr.subVectors(this.max,ki),li.subVectors(e.a,ki),ci.subVectors(e.b,ki),ui.subVectors(e.c,ki),Tn.subVectors(ci,li),bn.subVectors(ui,ci),Vn.subVectors(li,ui);let t=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-Vn.z,Vn.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,Vn.z,0,-Vn.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-Vn.y,Vn.x,0];return!ms(t,li,ci,ui,vr)||(t=[1,0,0,0,1,0,0,0,1],!ms(t,li,ci,ui,vr))?!1:(xr.crossVectors(Tn,bn),t=[xr.x,xr.y,xr.z],ms(t,li,ci,ui,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new U,new U,new U,new U,new U,new U,new U,new U],Wt=new U,_r=new En,li=new U,ci=new U,ui=new U,Tn=new U,bn=new U,Vn=new U,ki=new U,vr=new U,xr=new U,Gn=new U;function ms(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Gn.fromArray(i,s);const o=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Jh=new En,Vi=new U,gs=new U;class sn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(gs)),this.expandByPoint(Vi.copy(e.center).sub(gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new U,_s=new U,Mr=new U,An=new U,vs=new U,yr=new U,xs=new U;class dr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_s.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),An.copy(this.origin).sub(_s);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Mr),o=An.dot(this.direction),l=-An.dot(Mr),c=An.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_s).addScaledVector(Mr,d),p}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),r=hn.dot(hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,s){vs.subVectors(t,e),yr.subVectors(n,e),xs.crossVectors(vs,yr);let a=this.direction.dot(xs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(yr.crossVectors(An,yr));if(l<0)return null;const c=o*this.direction.dot(vs.cross(An));if(c<0||l+c>a)return null;const u=-o*An.dot(xs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,r,s,a,o,l,c,u,h,d,p,g,_,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,p,g,_,m)}set(e,t,n,r,s,a,o,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),s=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qh,e,ed)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),wn.crossVectors(n,It),wn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),wn.crossVectors(n,It)),wn.normalize(),Sr.crossVectors(It,wn),r[0]=wn.x,r[4]=Sr.x,r[8]=It.x,r[1]=wn.y,r[5]=Sr.y,r[9]=It.y,r[2]=wn.z,r[6]=Sr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],M=n[7],x=n[11],A=n[15],w=r[0],R=r[4],I=r[8],T=r[12],E=r[1],P=r[5],G=r[9],F=r[13],H=r[2],j=r[6],W=r[10],Q=r[14],V=r[3],ie=r[7],ue=r[11],_e=r[15];return s[0]=a*w+o*E+l*H+c*V,s[4]=a*R+o*P+l*j+c*ie,s[8]=a*I+o*G+l*W+c*ue,s[12]=a*T+o*F+l*Q+c*_e,s[1]=u*w+h*E+d*H+p*V,s[5]=u*R+h*P+d*j+p*ie,s[9]=u*I+h*G+d*W+p*ue,s[13]=u*T+h*F+d*Q+p*_e,s[2]=g*w+_*E+m*H+f*V,s[6]=g*R+_*P+m*j+f*ie,s[10]=g*I+_*G+m*W+f*ue,s[14]=g*T+_*F+m*Q+f*_e,s[3]=v*w+M*E+x*H+A*V,s[7]=v*R+M*P+x*j+A*ie,s[11]=v*I+M*G+x*W+A*ue,s[15]=v*T+M*F+x*Q+A*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*p-n*l*p)+_*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=h*m*c-_*d*c+_*l*p-o*m*p-h*l*f+o*d*f,M=g*d*c-u*m*c-g*l*p+a*m*p+u*l*f-a*d*f,x=u*_*c-g*h*c+g*o*p-a*_*p-u*o*f+a*h*f,A=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,w=t*v+n*M+r*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(_*d*s-h*m*s-_*r*p+n*m*p+h*r*f-n*d*f)*R,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*f+n*l*f)*R,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*p-n*l*p)*R,e[4]=M*R,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*R,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*R,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*R,e[8]=x*R,e[9]=(g*h*s-u*_*s-g*n*p+t*_*p+u*n*f-t*h*f)*R,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*f+t*o*f)*R,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*R,e[12]=A*R,e[13]=(u*_*r-g*h*r+g*n*d-t*_*d-u*n*m+t*h*m)*R,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*R,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,g=s*h,_=a*u,m=a*h,f=o*h,v=l*c,M=l*u,x=l*h,A=n.x,w=n.y,R=n.z;return r[0]=(1-(_+f))*A,r[1]=(p+x)*A,r[2]=(g-M)*A,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(d+f))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+M)*R,r[9]=(m-v)*R,r[10]=(1-(d+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=hi.set(r[0],r[1],r[2]).length();const a=hi.set(r[4],r[5],r[6]).length(),o=hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const c=1/s,u=1/a,h=1/o;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=h,Xt.elements[9]*=h,Xt.elements[10]*=h,t.setFromRotationMatrix(Xt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=xn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let p,g;if(o===xn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ns)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=xn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,p=(n+r)*u;let g,_;if(o===xn)g=(a+s)*h,_=-2*h;else if(o===ns)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new U,Xt=new Le,Qh=new U(0,0,0),ed=new U(1,1,1),wn=new U,Sr=new U,It=new U,qo=new Le,jo=new zn;class rn{constructor(e=0,t=0,n=0,r=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jo.setFromEuler(this),this.setFromQuaternion(jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let td=0;const Ko=new U,di=new zn,dn=new Le,Er=new U,Gi=new U,nd=new U,id=new zn,$o=new U(1,0,0),Zo=new U(0,1,0),Jo=new U(0,0,1),Qo={type:"added"},rd={type:"removed"},fi={type:"childadded",child:null},Ms={type:"childremoved",child:null};class at extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new U,t=new rn,n=new zn,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new De}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis($o,e)}rotateY(e){return this.rotateOnAxis(Zo,e)}rotateZ(e){return this.rotateOnAxis(Jo,e)}translateOnAxis(e,t){return Ko.copy(e).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($o,e)}translateY(e){return this.translateOnAxis(Zo,e)}translateZ(e){return this.translateOnAxis(Jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Gi,Er,this.up):dn.lookAt(Er,Gi,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(dn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qo),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rd),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}at.DEFAULT_UP=new U(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new U,fn=new U,ys=new U,pn=new U,pi=new U,mi=new U,el=new U,Ss=new U,Es=new U,Ts=new U,bs=new je,As=new je,ws=new je;class jt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),fn.subVectors(n,t),ys.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(fn),l=Yt.dot(ys),c=fn.dot(fn),u=fn.dot(ys),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pn.x),l.addScaledVector(a,pn.y),l.addScaledVector(o,pn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return bs.setScalar(0),As.setScalar(0),ws.setScalar(0),bs.fromBufferAttribute(e,t),As.fromBufferAttribute(e,n),ws.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(bs,s.x),a.addScaledVector(As,s.y),a.addScaledVector(ws,s.z),a}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),fn.subVectors(e,t),Yt.cross(fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Yt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;pi.subVectors(r,n),mi.subVectors(s,n),Ss.subVectors(e,n);const l=pi.dot(Ss),c=mi.dot(Ss);if(l<=0&&c<=0)return t.copy(n);Es.subVectors(e,r);const u=pi.dot(Es),h=mi.dot(Es);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(pi,a);Ts.subVectors(e,s);const p=pi.dot(Ts),g=mi.dot(Ts);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(mi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return el.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(el,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Rs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=$a(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Rs(a,s,e+1/3),this.g=Rs(a,s,e),this.b=Rs(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,r),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Ec[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ve.fromWorkingColorSpace(yt.copy(this),e),Math.round(Oe(yt.r*255,0,255))*65536+Math.round(Oe(yt.g*255,0,255))*256+Math.round(Oe(yt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,r=yt.g,s=yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=_t){Ve.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,r=yt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Tr);const n=tr(Rn.h,Tr.h,t),r=tr(Rn.s,Tr.s,t),s=tr(Rn.l,Tr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Pe;Pe.NAMES=Ec;let sd=0;class tn extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=$t(),this.name="",this.type="Material",this.blending=Ei,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=Ks,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==js&&(n.blendSrc=this.blendSrc),this.blendDst!==Ks&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ei extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new U,br=new Ge;let ad=0;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ia,this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ia&&(e.usage=this.usage),e}}class Tc extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bc extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yn extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let od=0;const zt=new Le,Cs=new at,gi=new U,Dt=new En,Wi=new En,pt=new U;class an extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yc(e)?bc:Tc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Cs.lookAt(e),Cs.updateMatrix(),this.applyMatrix4(Cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Dt.min,Wi.min),Dt.expandByPoint(pt),pt.addVectors(Dt.max,Wi.max),Dt.expandByPoint(pt)):(Dt.expandByPoint(Wi.min),Dt.expandByPoint(Wi.max))}Dt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pt.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(e,c),pt.add(gi)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new U,l[I]=new U;const c=new U,u=new U,h=new U,d=new Ge,p=new Ge,g=new Ge,_=new U,m=new U;function f(I,T,E){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,E),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,E),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[I].add(_),o[T].add(_),o[E].add(_),l[I].add(m),l[T].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,T=v.length;I<T;++I){const E=v[I],P=E.start,G=E.count;for(let F=P,H=P+G;F<H;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new U,x=new U,A=new U,w=new U;function R(I){A.fromBufferAttribute(r,I),w.copy(A);const T=o[I];M.copy(T),M.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(w,T);const P=x.dot(l[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,P)}for(let I=0,T=v.length;I<T;++I){const E=v[I],P=E.start,G=E.count;for(let F=P,H=P+G;F<H;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new At(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tl=new Le,Wn=new dr,Ar=new sn,nl=new U,wr=new U,Rr=new U,Cr=new U,Ps=new U,Pr=new U,il=new U,Lr=new U;class Nt extends at{constructor(e=new an,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Pr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ps.fromBufferAttribute(h,e),a?Pr.addScaledVector(Ps,u):Pr.addScaledVector(Ps.sub(t),u))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),!(Ar.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ar,nl)===null||Wn.origin.distanceToSquared(nl)>(e.far-e.near)**2))&&(tl.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(tl),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=M;x<A;x+=3){const w=o.getX(x),R=o.getX(x+1),I=o.getX(x+2);r=Ir(this,f,e,n,c,u,h,w,R,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);r=Ir(this,a,e,n,c,u,h,v,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=M;x<A;x+=3){const w=x,R=x+1,I=x+2;r=Ir(this,f,e,n,c,u,h,w,R,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,M=m+1,x=m+2;r=Ir(this,a,e,n,c,u,h,v,M,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ld(i,e,t,n,r,s,a,o){let l;if(e.side===Pt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Sn,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:i}}function Ir(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,wr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Cr);const u=ld(i,e,t,n,wr,Rr,Cr,il);if(u){const h=new U;jt.getBarycoord(il,wr,Rr,Cr,h),r&&(u.uv=jt.getInterpolatedAttribute(r,o,l,c,h,new Ge)),s&&(u.uv1=jt.getInterpolatedAttribute(s,o,l,c,h,new Ge)),a&&(u.normal=jt.getInterpolatedAttribute(a,o,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};jt.getNormal(wr,Rr,Cr,d.normal),u.face=d,u.barycoord=h}return u}class fr extends an{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(h,2));function g(_,m,f,v,M,x,A,w,R,I,T){const E=x/R,P=A/I,G=x/2,F=A/2,H=w/2,j=R+1,W=I+1;let Q=0,V=0;const ie=new U;for(let ue=0;ue<W;ue++){const _e=ue*P-F;for(let Fe=0;Fe<j;Fe++){const tt=Fe*E-G;ie[_]=tt*v,ie[m]=_e*M,ie[f]=H,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[f]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Fe/R),h.push(1-ue/I),Q+=1}}for(let ue=0;ue<I;ue++)for(let _e=0;_e<R;_e++){const Fe=d+_e+j*ue,tt=d+_e+j*(ue+1),Y=d+(_e+1)+j*(ue+1),ee=d+(_e+1)+j*ue;l.push(Fe,tt,ee),l.push(tt,Y,ee),V+=6}o.addGroup(p,V,T),p+=V,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const r in n)e[r]=n[r]}return e}function cd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ac(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const ud={clone:Li,merge:Tt};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wc extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new U,rl=new Ge,sl=new Ge;class Ct extends wc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,rl,sl),t.subVectors(sl,rl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class fd extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ct(_i,vi,e,t);r.layers=this.layers,this.add(r);const s=new Ct(_i,vi,e,t);s.layers=this.layers,this.add(s);const a=new Ct(_i,vi,e,t);a.layers=this.layers,this.add(a);const o=new Ct(_i,vi,e,t);o.layers=this.layers,this.add(o);const l=new Ct(_i,vi,e,t);l.layers=this.layers,this.add(l);const c=new Ct(_i,vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rc extends mt{constructor(e=[],t=wi,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pd extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Rc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fr(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Fn});s.uniforms.tEquirect.value=t;const a=new Nt(r,s),o=t.minFilter;return t.minFilter===vn&&(t.minFilter=Ut),new fd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class ti extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const md={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(md)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Pv extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ia,this.updateRanges=[],this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new U;class Qa{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const al=new U,ol=new je,ll=new je,_d=new U,cl=new Le,Dr=new U,Is=new sn,ul=new Le,Ds=new dr;class vd extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fo,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(r),e.ray.intersectsSphere(Is)!==!1&&(ul.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(ul),!(this.boundingBox!==null&&Ds.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;ol.fromBufferAttribute(r.attributes.skinIndex,e),ll.fromBufferAttribute(r.attributes.skinWeight,e),al.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=ll.getComponent(s);if(a!==0){const o=ol.getComponent(s);cl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(_d.copy(al).applyMatrix4(cl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cc extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pc extends mt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=bt,u=bt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hl=new Le,xd=new Le;class eo{constructor(e=[],t=[]){this.uuid=$t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:xd;hl.multiplyMatrices(o,t[s]),hl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new eo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Pc(t,e,e,kt,Kt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Cc),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class Da extends At{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new Le,dl=new Le,Ur=[],fl=new En,Md=new Le,Xi=new Nt,Yi=new sn;class yd extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Md)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),fl.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Yi.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Yi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(n),e.ray.intersectsSphere(Yi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xi),dl.multiplyMatrices(n,xi),Xi.matrixWorld=dl,Xi.raycast(e,Ur);for(let a=0,o=Ur.length;a<o;a++){const l=Ur[a];l.instanceId=s,l.object=this,t.push(l)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pc(new Float32Array(r*this.count),r,this.count,Ya,Kt));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Us=new U,Sd=new U,Ed=new De;class Kn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Us.subVectors(n,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Us),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ed.getNormalMatrix(e),r=this.coplanarPoint(Us).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new sn,Nr=new U;class to{constructor(e=new Kn,t=new Kn,n=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],v=r[13],M=r[14],x=r[15];if(n[0].setComponents(l-s,d-c,m-p,x-f).normalize(),n[1].setComponents(l+s,d+c,m+p,x+f).normalize(),n[2].setComponents(l+a,d+u,m+g,x+v).normalize(),n[3].setComponents(l-a,d-u,m-g,x-v).normalize(),n[4].setComponents(l-o,d-h,m-_,x-M).normalize(),t===xn)n[5].setComponents(l+o,d+h,m+_,x+M).normalize();else if(t===ns)n[5].setComponents(o,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Nr.x=r.normal.x>0?e.max.x:e.min.x,Nr.y=r.normal.y>0?e.max.y:e.min.y,Nr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lc extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const is=new U,rs=new U,pl=new Le,qi=new dr,Fr=new sn,Ns=new U,ml=new U;class no extends at{constructor(e=new an,t=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)is.fromBufferAttribute(t,r-1),rs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=is.distanceTo(rs);e.setAttribute("lineDistance",new yn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Fr.radius+=s,e.ray.intersectsSphere(Fr)===!1)return;pl.copy(r).invert(),qi.copy(e.ray).applyMatrix4(pl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=u.getX(_),v=u.getX(_+1),M=Or(this,e,qi,l,f,v,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Or(this,e,qi,l,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=Or(this,e,qi,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Or(this,e,qi,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Or(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(is.fromBufferAttribute(o,r),rs.fromBufferAttribute(o,s),t.distanceSqToSegment(is,rs,Ns,ml)>n)return;Ns.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ns);if(!(c<e.near||c>e.far))return{distance:c,point:ml.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const gl=new U,_l=new U;class Td extends no{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)gl.fromBufferAttribute(t,r),_l.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+gl.distanceTo(_l);e.setAttribute("lineDistance",new yn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bd extends no{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ic extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vl=new Le,Ua=new dr,Br=new sn,zr=new U;class Ad extends at{constructor(e=new an,t=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Br.radius+=s,e.ray.intersectsSphere(Br)===!1)return;vl.copy(r).invert(),Ua.copy(e.ray).applyMatrix4(vl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);zr.fromBufferAttribute(h,m),xl(zr,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)zr.fromBufferAttribute(h,g),xl(zr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xl(i,e,t,n,r,s,a){const o=Ua.distanceSqToPoint(i);if(o<t){const l=new U;Ua.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Dc extends mt{constructor(e,t,n=ni,r,s,a,o=bt,l=bt,c,u=ar){if(u!==ar&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class as extends an{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const v=f*d-a;for(let M=0;M<c;M++){const x=M*h-s;g.push(x,-v,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const M=v+c*f,x=v+c*(f+1),A=v+1+c*(f+1),w=v+1+c*f;p.push(M,x,w),p.push(x,A,w)}this.setIndex(p),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}class io extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class on extends io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wd extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rd extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pd(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ml(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Uc(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class pr{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ld extends pr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oo,endingEnd:Oo}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bo:s=e,o=2*t-n;break;case zo:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bo:a=e,l=2*n-t;break;case zo:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let A=0;A!==o;++A)s[A]=f*a[u+A]+v*a[c+A]+M*a[l+A]+x*a[h+A];return s}}class Id extends pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class Dd extends pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jt{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Id(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ld(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case hs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return hs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Cd(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===hs,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Jt.prototype.ValueTypeName="";Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=cr;class Fi extends Jt{constructor(e,t,n){super(e,t,n)}}Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=lr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class Nc extends Jt{constructor(e,t,n,r){super(e,t,n,r)}}Nc.prototype.ValueTypeName="color";class Ii extends Jt{constructor(e,t,n,r){super(e,t,n,r)}}Ii.prototype.ValueTypeName="number";class Ud extends pr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Di extends Jt{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ud(this.times,this.values,this.getValueSize(),e)}}Di.prototype.ValueTypeName="quaternion";Di.prototype.InterpolantFactoryMethodSmooth=void 0;class Oi extends Jt{constructor(e,t,n){super(e,t,n)}}Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=lr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ui extends Jt{constructor(e,t,n,r){super(e,t,n,r)}}Ui.prototype.ValueTypeName="vector";class Nd{constructor(e="",t=-1,n=[],r=fh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=$t(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Od(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Jt.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=Pd(l);l=Ml(l,1,u),c=Ml(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ii(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];Uc(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){const M=d[g];m.push(M.time),f.push(M.morphTarget===_?1:0)}r.push(new Ii(".morphTargetInfluence["+_+"]",m,f))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(Ui,p+".position",d,"pos",r),n(Di,p+".quaternion",d,"rot",r),n(Ui,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Fd(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return Nc;case"quaternion":return Di;case"bool":case"boolean":return Fi;case"string":return Oi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Od(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fd(i.type);if(i.times===void 0){const t=[],n=[];Uc(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Un={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Bd{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const zd=new Bd;class Bi{constructor(e){this.manager=e!==void 0?e:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";const mn={};class Hd extends Error{constructor(e,t){super(e),this.response=t}}class Fc extends Bi{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Un.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mn[e]!==void 0){mn[e].push({onLoad:t,onProgress:n,onError:r});return}mn[e]=[],mn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=mn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){v();function v(){h.read().then(({done:M,value:x})=>{if(M)f.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let w=0,R=u.length;w<R;w++){const I=u[w];I.onProgress&&I.onProgress(A)}f.enqueue(x),v()}},M=>{f.error(M)})}}});return new Response(m)}else throw new Hd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Un.add(e,c);const u=mn[e];delete mn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=mn[e];if(u===void 0)throw this.manager.itemError(e),c;delete mn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kd extends Bi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Un.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ur("img");function l(){u(),Un.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Vd extends Bi{constructor(e){super(e)}load(e,t,n,r){const s=new mt,a=new kd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ro extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Fs=new Le,yl=new U,Sl=new U;class so{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(yl),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),Fs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gd extends so{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Pi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wd extends ro{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Gd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const El=new Le,ji=new U,Os=new U;class Xd extends so{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ji.setFromMatrixPosition(e.matrixWorld),n.position.copy(ji),Os.copy(n.position),Os.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Os),n.updateMatrixWorld(),r.makeTranslation(-ji.x,-ji.y,-ji.z),El.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El)}}class Yd extends ro{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ao extends wc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qd extends so{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jd extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new qd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kd extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Un.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Un.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Un.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Un.add(e,l),s.manager.itemStart(e)}}class $d extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const oo="\\[\\]\\.:\\/",Zd=new RegExp("["+oo+"]","g"),lo="[^"+oo+"]",Jd="[^"+oo.replace("\\.","")+"]",Qd=/((?:WC+[\/:])*)/.source.replace("WC",lo),ef=/(WCOD+)?/.source.replace("WCOD",Jd),tf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lo),nf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lo),rf=new RegExp("^"+Qd+ef+tf+nf+"$"),sf=["material","materials","bones","map"];class af{constructor(e,t,n){const r=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zd,"")}static parseTrackName(e){const t=rf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);sf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=af;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Tl=new Le;class Lv{constructor(e,t,n=0,r=1/0){this.ray=new dr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tl),this}intersectObject(e,t=!0,n=[]){return Na(e,this,n,t),n.sort(bl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Na(e[r],this,n,t);return n.sort(bl),n}}function bl(i,e){return i.distance-e.distance}function Na(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Na(s[a],e,t,!0)}}function Al(i,e,t,n){const r=of(n);switch(t){case pc:return i*e;case Ya:return i*e/r.components*r.byteLength;case qa:return i*e/r.components*r.byteLength;case gc:return i*e*2/r.components*r.byteLength;case ja:return i*e*2/r.components*r.byteLength;case mc:return i*e*3/r.components*r.byteLength;case kt:return i*e*4/r.components*r.byteLength;case Ka:return i*e*4/r.components*r.byteLength;case Yr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:case la:return Math.max(i,16)*Math.max(e,8)/4;case sa:case oa:return Math.max(i,8)*Math.max(e,8)/2;case ca:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $r:case Aa:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _c:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ca:case Pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function of(i){switch(i){case nn:case hc:return{byteLength:1,components:1};case rr:case dc:case hr:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case ni:case Ga:case Kt:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Oc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function lf(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_f=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ef=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,If=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,op=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:cf,alphahash_pars_fragment:uf,alphamap_fragment:hf,alphamap_pars_fragment:df,alphatest_fragment:ff,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:gf,batching_pars_vertex:_f,batching_vertex:vf,begin_vertex:xf,beginnormal_vertex:Mf,bsdfs:yf,iridescence_fragment:Sf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:wf,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:Pf,color_vertex:Lf,common:If,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Nf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:Hf,envmap_fragment:kf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Gf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:tp,envmap_vertex:Xf,fog_vertex:Yf,fog_pars_vertex:qf,fog_fragment:jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:Zf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:Qf,lights_pars_begin:ep,lights_toon_fragment:np,lights_toon_pars_fragment:ip,lights_phong_fragment:rp,lights_phong_pars_fragment:sp,lights_physical_fragment:ap,lights_physical_pars_fragment:op,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:up,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:pp,map_fragment:mp,map_pars_fragment:gp,map_particle_fragment:_p,map_particle_pars_fragment:vp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:yp,morphcolor_vertex:Sp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:bp,normal_fragment_begin:Ap,normal_fragment_maps:wp,normal_pars_fragment:Rp,normal_pars_vertex:Cp,normal_vertex:Pp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Np,opaque_fragment:Fp,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:zp,dithering_fragment:Hp,dithering_pars_fragment:kp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:Yp,shadowmask_pars_fragment:qp,skinbase_vertex:jp,skinning_pars_vertex:Kp,skinning_vertex:$p,skinnormal_vertex:Zp,specularmap_fragment:Jp,specularmap_pars_fragment:Qp,tonemapping_fragment:em,tonemapping_pars_fragment:tm,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:rm,uv_pars_vertex:sm,uv_vertex:am,worldpos_vertex:om,background_vert:lm,background_frag:cm,backgroundCube_vert:um,backgroundCube_frag:hm,cube_vert:dm,cube_frag:fm,depth_vert:pm,depth_frag:mm,distanceRGBA_vert:gm,distanceRGBA_frag:_m,equirect_vert:vm,equirect_frag:xm,linedashed_vert:Mm,linedashed_frag:ym,meshbasic_vert:Sm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:bm,meshmatcap_vert:Am,meshmatcap_frag:wm,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Pm,meshphong_frag:Lm,meshphysical_vert:Im,meshphysical_frag:Dm,meshtoon_vert:Um,meshtoon_frag:Nm,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:Hm,sprite_frag:km},te={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Qt={basic:{uniforms:Tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Tt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Tt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Tt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Tt([te.points,te.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Tt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Tt([te.common,te.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Tt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Tt([te.sprite,te.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Tt([te.common,te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Tt([te.lights,te.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Qt.physical={uniforms:Tt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const kr={r:0,b:0,g:0},Yn=new rn,Vm=new Le;function Gm(i,e,t,n,r,s,a){const o=new Pe(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const A=g(M);A===null?f(o,l):A&&A.isColor&&(f(A,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===ss)?(u===void 0&&(u=new Nt(new fr(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Li(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Yn.copy(x.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(Yn)),u.material.toneMapped=Ve.getTransfer(A.colorSpace)!==et,(h!==A||d!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Nt(new as(2,2),new Bn({name:"BackgroundMaterial",uniforms:Li(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(A.colorSpace)!==et,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,x){M.getRGB(kr,Ac(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,x,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:_,addToRenderList:m,dispose:v}}function Wm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(E,P,G,F,H){let j=!1;const W=h(F,G,P);s!==W&&(s=W,c(s.object)),j=p(E,F,G,H),j&&g(E,F,G,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(E,P,G,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,P,G){const F=G.wireframe===!0;let H=n[E.id];H===void 0&&(H={},n[E.id]=H);let j=H[P.id];j===void 0&&(j={},H[P.id]=j);let W=j[F];return W===void 0&&(W=d(l()),j[F]=W),W}function d(E){const P=[],G=[],F=[];for(let H=0;H<t;H++)P[H]=0,G[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:F,object:E,attributes:{},index:null}}function p(E,P,G,F){const H=s.attributes,j=P.attributes;let W=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){const ue=H[V];let _e=j[V];if(_e===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function g(E,P,G,F){const H={},j=P.attributes;let W=0;const Q=G.getAttributes();for(const V in Q)if(Q[V].location>=0){let ue=j[V];ue===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),H[V]=_e,W++}s.attributes=H,s.attributesNum=W,s.index=F}function _(){const E=s.newAttributes;for(let P=0,G=E.length;P<G;P++)E[P]=0}function m(E){f(E,0)}function f(E,P){const G=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;G[E]=1,F[E]===0&&(i.enableVertexAttribArray(E),F[E]=1),H[E]!==P&&(i.vertexAttribDivisor(E,P),H[E]=P)}function v(){const E=s.newAttributes,P=s.enabledAttributes;for(let G=0,F=P.length;G<F;G++)P[G]!==E[G]&&(i.disableVertexAttribArray(G),P[G]=0)}function M(E,P,G,F,H,j,W){W===!0?i.vertexAttribIPointer(E,P,G,H,j):i.vertexAttribPointer(E,P,G,F,H,j)}function x(E,P,G,F){_();const H=F.attributes,j=G.getAttributes(),W=P.defaultAttributeValues;for(const Q in j){const V=j[Q];if(V.location>=0){let ie=H[Q];if(ie===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){const ue=ie.normalized,_e=ie.itemSize,Fe=e.get(ie);if(Fe===void 0)continue;const tt=Fe.buffer,Y=Fe.type,ee=Fe.bytesPerElement,pe=Y===i.INT||Y===i.UNSIGNED_INT||ie.gpuType===Ga;if(ie.isInterleavedBufferAttribute){const re=ie.data,Se=re.stride,qe=ie.offset;if(re.isInstancedInterleavedBuffer){for(let Ae=0;Ae<V.locationSize;Ae++)f(V.location+Ae,re.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ae=0;Ae<V.locationSize;Ae++)m(V.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Ae=0;Ae<V.locationSize;Ae++)M(V.location+Ae,_e/V.locationSize,Y,ue,Se*ee,(qe+_e/V.locationSize*Ae)*ee,pe)}else{if(ie.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)f(V.location+re,ie.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let re=0;re<V.locationSize;re++)M(V.location+re,_e/V.locationSize,Y,ue,_e*ee,_e/V.locationSize*re*ee,pe)}}else if(W!==void 0){const ue=W[Q];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(V.location,ue);break;case 3:i.vertexAttrib3fv(V.location,ue);break;case 4:i.vertexAttrib4fv(V.location,ue);break;default:i.vertexAttrib1fv(V.location,ue)}}}}v()}function A(){I();for(const E in n){const P=n[E];for(const G in P){const F=P[G];for(const H in F)u(F[H].object),delete F[H];delete P[G]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const G in P){const F=P[G];for(const H in F)u(F[H].object),delete F[H];delete P[G]}delete n[E.id]}function R(E){for(const P in n){const G=n[P];if(G[E.id]===void 0)continue;const F=G[E.id];for(const H in F)u(F[H].object),delete F[H];delete G[E.id]}}function I(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Xm(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ym(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==kt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Kt&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function qm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Kn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,M=v*4;let x=f.clippingState||null;l.value=x,x=u(g,d,M,p);for(let A=0;A!==M;++A)x[A]=t[A];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=p;M!==_;++M,x+=4)a.copy(h[M]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function jm(i){let e=new WeakMap;function t(a,o){return o===ia?a.mapping=wi:o===ra&&(a.mapping=Ri),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ia||o===ra)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pd(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Si=4,wl=[.125,.215,.35,.446,.526,.582],Jn=20,Bs=new ao,Rl=new Pe;let zs=null,Hs=0,ks=0,Vs=!1;const $n=(1+Math.sqrt(5))/2,Mi=1/$n,Cl=[new U(-$n,Mi,0),new U($n,Mi,0),new U(-Mi,0,$n),new U(Mi,0,$n),new U(0,$n,-Mi),new U(0,$n,Mi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Km=new U;class Pl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Km}=s;zs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zs,Hs,ks),this._renderer.xr.enabled=Vs,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zs=this._renderer.getRenderTarget(),Hs=this._renderer.getActiveCubeFace(),ks=this._renderer.getActiveMipmapLevel(),Vs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:hr,format:kt,colorSpace:wt,depthBuffer:!1},r=Ll(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(s)),this._blurMaterial=Zm(s,e,t)}return r}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,n,r,s){const l=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Rl),h.toneMapping=On,h.autoClear=!1;const g=new ei({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new Nt(new fr,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Rl),m=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const x=this._cubeSize;Vr(r,M*x,v>2?x:0,x,x),h.setRenderTarget(r),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===wi||e.mapping===Ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Cl[(r-s-1)%Cl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Jn;m>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const f=[];let v=0;for(let R=0;R<Jn;++R){const I=R/_,T=Math.exp(-I*I/2);f.push(T),R===0?v+=T:R<m&&(v+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[r],A=3*x*(r>M-Si?r-M+Si:0),w=4*(this._cubeSize-x);Vr(t,A,w,3*x,2*x),l.setRenderTarget(t),l.render(h,Bs)}}function $m(i){const e=[],t=[],n=[];let r=i;const s=i-Si+1+wl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Si?l=wl[a-i+Si-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),M=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,I=w>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(T,_*g*w),M.set(d,m*g*w);const E=[w,w,w,w,w,w];x.set(E,f*g*w)}const A=new an;A.setAttribute("position",new At(v,_)),A.setAttribute("uv",new At(M,m)),A.setAttribute("faceIndex",new At(x,f)),e.push(A),r>Si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ll(i,e,t){const n=new ii(i,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Zm(i,e,t){const n=new Float32Array(Jn),r=new U(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Il(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Dl(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ia||l===ra,u=l===wi||l===Ri;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Pl(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Pl(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Qm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Zr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function eg(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let M=0,x=v.length;M<x;M+=3){const A=v[M+0],w=v[M+1],R=v[M+2];d.push(A,w,w,R,R,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const A=M+0,w=M+1,R=M+2;d.push(A,w,w,R,R,A)}}else return;const m=new(yc(d)?bc:Tc)(d,1);m.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function tg(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*a,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ng(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ig(i,e,t){const n=new WeakMap,r=new je;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let x=o.attributes.position.count*M,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*A*4*h),R=new Sc(w,x,A,h);R.type=Kt,R.needsUpdate=!0;const I=M*4;for(let E=0;E<h;E++){const P=m[E],G=f[E],F=v[E],H=x*A*4*E;for(let j=0;j<P.count;j++){const W=j*I;p===!0&&(r.fromBufferAttribute(P,j),w[H+W+0]=r.x,w[H+W+1]=r.y,w[H+W+2]=r.z,w[H+W+3]=0),g===!0&&(r.fromBufferAttribute(G,j),w[H+W+4]=r.x,w[H+W+5]=r.y,w[H+W+6]=r.z,w[H+W+7]=0),_===!0&&(r.fromBufferAttribute(F,j),w[H+W+8]=r.x,w[H+W+9]=r.y,w[H+W+10]=r.z,w[H+W+11]=F.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new Ge(x,A)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function rg(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Bc=new mt,Ul=new Dc(1,1),zc=new Sc,Hc=new Zh,kc=new Rc,Nl=[],Fl=[],Ol=new Float32Array(16),Bl=new Float32Array(9),zl=new Float32Array(4);function zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Nl[r];if(s===void 0&&(s=new Float32Array(r),Nl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function os(i,e){let t=Fl[e];t===void 0&&(t=new Int32Array(e),Fl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),ft(t,n)}}function ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),ft(t,n)}}function hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),ft(t,n)}}function dg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function Mg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ul.compareFunction=Mc,s=Ul):s=Bc,t.setTexture2D(e||s,r)}function yg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hc,r)}function Sg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||kc,r)}function Eg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zc,r)}function Tg(i){switch(i){case 5126:return sg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return hg;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return vg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Eg}}function bg(i,e){i.uniform1fv(this.addr,e)}function Ag(i,e){const t=zi(e,this.size,2);i.uniform2fv(this.addr,t)}function wg(i,e){const t=zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Rg(i,e){const t=zi(e,this.size,4);i.uniform4fv(this.addr,t)}function Cg(i,e){const t=zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pg(i,e){const t=zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lg(i,e){const t=zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ig(i,e){i.uniform1iv(this.addr,e)}function Dg(i,e){i.uniform2iv(this.addr,e)}function Ug(i,e){i.uniform3iv(this.addr,e)}function Ng(i,e){i.uniform4iv(this.addr,e)}function Fg(i,e){i.uniform1uiv(this.addr,e)}function Og(i,e){i.uniform2uiv(this.addr,e)}function Bg(i,e){i.uniform3uiv(this.addr,e)}function zg(i,e){i.uniform4uiv(this.addr,e)}function Hg(i,e,t){const n=this.cache,r=e.length,s=os(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Bc,s[a])}function kg(i,e,t){const n=this.cache,r=e.length,s=os(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hc,s[a])}function Vg(i,e,t){const n=this.cache,r=e.length,s=os(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||kc,s[a])}function Gg(i,e,t){const n=this.cache,r=e.length,s=os(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zc,s[a])}function Wg(i){switch(i){case 5126:return bg;case 35664:return Ag;case 35665:return wg;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return Fg;case 36294:return Og;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}}class Yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wg(t.type)}}class qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function Hl(i,e){i.seq.push(e),i.map[e.id]=e}function jg(i,e,t){const n=i.name,r=n.length;for(Gs.lastIndex=0;;){const s=Gs.exec(n),a=Gs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Hl(t,c===void 0?new Xg(o,i,e):new Yg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new qg(o),Hl(t,h)),t=h}}}class Jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);jg(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function kl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kg=37297;let $g=0;function Zg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Vl=new De;function Jg(i){Ve._getMatrix(Vl,Ve.workingColorSpace,i);const e=`mat3( ${Vl.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case ts:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Zg(i.getShaderSource(e),a)}else return r}function Qg(i,e){const t=Jg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e_(i,e){let t;switch(e){case sh:t="Linear";break;case ah:t="Reinhard";break;case oh:t="Cineon";break;case lh:t="ACESFilmic";break;case uh:t="AgX";break;case hh:t="Neutral";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new U;function t_(){Ve.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function i_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ji(i){return i!==""}function Wl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(i){return i.replace(s_,o_)}const a_=new Map;function o_(i,e){let t=Ne[e];if(t===void 0){const n=a_.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fa(t)}const l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(i){return i.replace(l_,c_)}function c_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ql(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function h_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wi:case Ri:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function f_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lc:e="ENVMAP_BLENDING_MULTIPLY";break;case ih:e="ENVMAP_BLENDING_MIX";break;case rh:e="ENVMAP_BLENDING_ADD";break}return e}function p_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function m_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=u_(t),c=h_(t),u=d_(t),h=f_(t),d=p_(t),p=n_(t),g=i_(s),_=r.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),f.length>0&&(f+=`
`)):(m=[ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),f=[ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ne.tonemapping_pars_fragment:"",t.toneMapping!==On?e_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Qg("linearToOutputTexel",t.outputColorSpace),t_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),a=Fa(a),a=Wl(a,t),a=Xl(a,t),o=Fa(o),o=Wl(o,t),o=Xl(o,t),a=Yl(a),o=Yl(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+m+a,x=v+f+o,A=kl(r,r.VERTEX_SHADER,M),w=kl(r,r.FRAGMENT_SHADER,x);r.attachShader(_,A),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(A).trim(),H=r.getShaderInfoLog(w).trim();let j=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,w);else{const Q=Gl(r,A,"vertex"),V=Gl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Q+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||H==="")&&(W=!1);W&&(P.diagnostics={runnable:j,programLog:G,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:f}})}r.deleteShader(A),r.deleteShader(w),I=new Jr(r,_),T=r_(r,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,Kg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$g++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let g_=0;class __{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new v_(e),t.set(e,n)),n}}class v_{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}}function x_(i,e,t,n,r,s,a){const o=new Ja,l=new __,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,P,G,F){const H=G.fog,j=F.geometry,W=T.isMeshStandardMaterial?G.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),V=Q&&Q.mapping===ss?Q.image.height:null,ie=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=ue!==void 0?ue.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let tt,Y,ee,pe;if(ie){const Ze=Qt[ie];tt=Ze.vertexShader,Y=Ze.fragmentShader}else tt=T.vertexShader,Y=T.fragmentShader,l.update(T),ee=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);const re=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),qe=F.isInstancedMesh===!0,Ae=F.isBatchedMesh===!0,ct=!!T.map,st=!!T.matcap,ze=!!Q,C=!!T.aoMap,Ft=!!T.lightMap,We=!!T.bumpMap,He=!!T.normalMap,ve=!!T.displacementMap,it=!!T.emissiveMap,ge=!!T.metalnessMap,b=!!T.roughnessMap,y=T.anisotropy>0,O=T.clearcoat>0,q=T.dispersion>0,$=T.iridescence>0,X=T.sheen>0,me=T.transmission>0,se=y&&!!T.anisotropyMap,Ee=O&&!!T.clearcoatMap,Te=O&&!!T.clearcoatNormalMap,Z=O&&!!T.clearcoatRoughnessMap,he=$&&!!T.iridescenceMap,be=$&&!!T.iridescenceThicknessMap,Re=X&&!!T.sheenColorMap,de=X&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Ue=!!T.specularColorMap,nt=!!T.specularIntensityMap,L=me&&!!T.transmissionMap,ae=me&&!!T.thicknessMap,k=!!T.gradientMap,K=!!T.alphaMap,le=T.alphaTest>0,oe=!!T.alphaHash,Ie=!!T.extensions;let ot=On;T.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ot=i.toneMapping);const xt={shaderID:ie,shaderType:T.type,shaderName:T.name,vertexShader:tt,fragmentShader:Y,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&F._colorsTexture!==null,instancing:qe,instancingColor:qe&&F.instanceColor!==null,instancingMorph:qe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:wt,alphaToCoverage:!!T.alphaToCoverage,map:ct,matcap:st,envMap:ze,envMapMode:ze&&Q.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:Ft,bumpMap:We,normalMap:He,displacementMap:d&&ve,emissiveMap:it,normalMapObjectSpace:He&&T.normalMapType===_h,normalMapTangentSpace:He&&T.normalMapType===xc,metalnessMap:ge,roughnessMap:b,anisotropy:y,anisotropyMap:se,clearcoat:O,clearcoatMap:Ee,clearcoatNormalMap:Te,clearcoatRoughnessMap:Z,dispersion:q,iridescence:$,iridescenceMap:he,iridescenceThicknessMap:be,sheen:X,sheenColorMap:Re,sheenRoughnessMap:de,specularMap:ke,specularColorMap:Ue,specularIntensityMap:nt,transmission:me,transmissionMap:L,thicknessMap:ae,gradientMap:k,opaque:T.transparent===!1&&T.blending===Ei&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:le,alphaHash:oe,combine:T.combine,mapUv:ct&&_(T.map.channel),aoMapUv:C&&_(T.aoMap.channel),lightMapUv:Ft&&_(T.lightMap.channel),bumpMapUv:We&&_(T.bumpMap.channel),normalMapUv:He&&_(T.normalMap.channel),displacementMapUv:ve&&_(T.displacementMap.channel),emissiveMapUv:it&&_(T.emissiveMap.channel),metalnessMapUv:ge&&_(T.metalnessMap.channel),roughnessMapUv:b&&_(T.roughnessMap.channel),anisotropyMapUv:se&&_(T.anisotropyMap.channel),clearcoatMapUv:Ee&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(T.sheenRoughnessMap.channel),specularMapUv:ke&&_(T.specularMap.channel),specularColorMapUv:Ue&&_(T.specularColorMap.channel),specularIntensityMapUv:nt&&_(T.specularIntensityMap.channel),transmissionMapUv:L&&_(T.transmissionMap.channel),thicknessMapUv:ae&&_(T.thicknessMap.channel),alphaMapUv:K&&_(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(He||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(ct||K),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:ct&&T.map.isVideoTexture===!0&&Ve.getTransfer(T.map.colorSpace)===et,decodeVideoTextureEmissive:it&&T.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(T.emissiveMap.colorSpace)===et,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===en,flipSided:T.side===Pt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function f(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)E.push(P),E.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(v(E,T),M(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function v(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function M(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),T.push(o.mask)}function x(T){const E=g[T.type];let P;if(E){const G=Qt[E];P=ud.clone(G.uniforms)}else P=T.uniforms;return P}function A(T,E){let P;for(let G=0,F=u.length;G<F;G++){const H=u[G];if(H.cacheKey===E){P=H,++P.usedTimes;break}}return P===void 0&&(P=new m_(i,E,T,s),u.push(P)),P}function w(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:I}}function M_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Kl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||y_),n.length>1&&n.sort(d||jl),r.length>1&&r.sort(d||jl)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function S_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Kl,i.set(n,[a])):r>=s.length?(a=new Kl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function E_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Pe};break;case"SpotLight":t={position:new U,direction:new U,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function T_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let b_=0;function A_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function w_(i){const e=new E_,t=T_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,s=new Le,a=new Le;function o(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,M=0,x=0,A=0,w=0,R=0;c.sort(A_);for(let T=0,E=c.length;T<E;T++){const P=c[T],G=P.color,F=P.intensity,H=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=G.r*F,h+=G.g*F,d+=G.b*F;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],F);R++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,V=t.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=P.shadow.matrix,v++}n.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(G).multiplyScalar(F),W.distance=H,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const Q=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Q.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=Q.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=j,x++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(G).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Q=P.shadow,V=t.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F),W.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==v||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==A||I.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=v,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=A,I.numLightProbes=R,n.version=b_++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const M=c[f];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function $l(i){const e=new w_(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function R_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new $l(i),e.set(r,[o])):s>=a.length?(o=new $l(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L_(i,e,t){let n=new to;const r=new Ge,s=new Ge,a=new je,o=new wd({depthPacking:gh}),l=new Rd,c={},u=t.maxTextureSize,h={[Sn]:Pt,[Pt]:Sn,[en]:en},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:C_,fragmentShader:P_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let f=this.type;this.render=function(w,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Fn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=f!==gn&&this.type===gn,H=f===gn&&this.type!==gn;for(let j=0,W=w.length;j<W;j++){const Q=w[j],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ie=V.getFrameExtents();if(r.multiply(ie),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,V.mapSize.y=s.y)),V.map===null||F===!0||H===!0){const _e=this.type!==gn?{minFilter:bt,magFilter:bt}:{};V.map!==null&&V.map.dispose(),V.map=new ii(r.x,r.y,_e),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ue=V.getViewportCount();for(let _e=0;_e<ue;_e++){const Fe=V.getViewport(_e);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),G.viewport(a),V.updateMatrices(Q,_e),n=V.getFrustum(),x(R,I,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===gn&&v(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,E,P)};function v(w,R){const I=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ii(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,I,p,_,null)}function M(w,R,I,T){let E=null;const P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=I.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const G=E.uuid,F=R.uuid;let H=c[G];H===void 0&&(H={},c[G]=H);let j=H[F];j===void 0&&(j=E.clone(),H[F]=j,R.addEventListener("dispose",A)),E=j}if(E.visible=R.visible,E.wireframe=R.wireframe,T===gn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:h[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=i.properties.get(E);G.light=I}return E}function x(w,R,I,T,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const F=e.update(w),H=w.material;if(Array.isArray(H)){const j=F.groups;for(let W=0,Q=j.length;W<Q;W++){const V=j[W],ie=H[V.materialIndex];if(ie&&ie.visible){const ue=M(w,ie,T,E);w.onBeforeShadow(i,w,R,I,F,ue,V),i.renderBufferDirect(I,null,F,ue,w,V),w.onAfterShadow(i,w,R,I,F,ue,V)}}}else if(H.visible){const j=M(w,H,T,E);w.onBeforeShadow(i,w,R,I,F,j,null),i.renderBufferDirect(I,null,F,j,w,null),w.onAfterShadow(i,w,R,I,F,j,null)}}const G=w.children;for(let F=0,H=G.length;F<H;F++)x(G[F],R,I,T,E)}function A(w){w.target.removeEventListener("dispose",A);for(const I in c){const T=c[I],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const I_={[$s]:Zs,[Js]:ta,[Qs]:na,[Ai]:ea,[Zs]:$s,[ta]:Js,[na]:Qs,[ea]:Ai};function D_(i,e){function t(){let L=!1;const ae=new je;let k=null;const K=new je(0,0,0,0);return{setMask:function(le){k!==le&&!L&&(i.colorMask(le,le,le,le),k=le)},setLocked:function(le){L=le},setClear:function(le,oe,Ie,ot,xt){xt===!0&&(le*=ot,oe*=ot,Ie*=ot),ae.set(le,oe,Ie,ot),K.equals(ae)===!1&&(i.clearColor(le,oe,Ie,ot),K.copy(ae))},reset:function(){L=!1,k=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ae=!1,k=null,K=null,le=null;return{setReversed:function(oe){if(ae!==oe){const Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ae=oe;const ot=le;le=null,this.setClear(ot)}},getReversed:function(){return ae},setTest:function(oe){oe?re(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(oe){k!==oe&&!L&&(i.depthMask(oe),k=oe)},setFunc:function(oe){if(ae&&(oe=I_[oe]),K!==oe){switch(oe){case $s:i.depthFunc(i.NEVER);break;case Zs:i.depthFunc(i.ALWAYS);break;case Js:i.depthFunc(i.LESS);break;case Ai:i.depthFunc(i.LEQUAL);break;case Qs:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=oe}},setLocked:function(oe){L=oe},setClear:function(oe){le!==oe&&(ae&&(oe=1-oe),i.clearDepth(oe),le=oe)},reset:function(){L=!1,k=null,K=null,le=null,ae=!1}}}function r(){let L=!1,ae=null,k=null,K=null,le=null,oe=null,Ie=null,ot=null,xt=null;return{setTest:function(Ze){L||(Ze?re(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!L&&(i.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,Vt,ln){(k!==Ze||K!==Vt||le!==ln)&&(i.stencilFunc(Ze,Vt,ln),k=Ze,K=Vt,le=ln)},setOp:function(Ze,Vt,ln){(oe!==Ze||Ie!==Vt||ot!==ln)&&(i.stencilOp(Ze,Vt,ln),oe=Ze,Ie=Vt,ot=ln)},setLocked:function(Ze){L=Ze},setClear:function(Ze){xt!==Ze&&(i.clearStencil(Ze),xt=Ze)},reset:function(){L=!1,ae=null,k=null,K=null,le=null,oe=null,Ie=null,ot=null,xt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,M=null,x=null,A=null,w=null,R=new Pe(0,0,0),I=0,T=!1,E=null,P=null,G=null,F=null,H=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Q>=2);let ie=null,ue={};const _e=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),tt=new je().fromArray(_e),Y=new je().fromArray(Fe);function ee(L,ae,k,K){const le=new Uint8Array(4),oe=i.createTexture();i.bindTexture(L,oe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<k;Ie++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ae+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return oe}const pe={};pe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(Ai),We(!1),He(Io),re(i.CULL_FACE),C(Fn);function re(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Se(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function qe(L,ae){return h[L]!==ae?(i.bindFramebuffer(L,ae),h[L]=ae,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ae(L,ae){let k=p,K=!1;if(L){k=d.get(ae),k===void 0&&(k=[],d.set(ae,k));const le=L.textures;if(k.length!==le.length||k[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ie=le.length;oe<Ie;oe++)k[oe]=i.COLOR_ATTACHMENT0+oe;k.length=le.length,K=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,K=!0);K&&i.drawBuffers(k)}function ct(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const st={[Zn]:i.FUNC_ADD,[Hu]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};st[Vu]=i.MIN,st[Gu]=i.MAX;const ze={[Wu]:i.ZERO,[Xu]:i.ONE,[Yu]:i.SRC_COLOR,[js]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[$u]:i.DST_COLOR,[ju]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[Ks]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[Qu]:i.CONSTANT_COLOR,[eh]:i.ONE_MINUS_CONSTANT_COLOR,[th]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function C(L,ae,k,K,le,oe,Ie,ot,xt,Ze){if(L===Fn){_===!0&&(Se(i.BLEND),_=!1);return}if(_===!1&&(re(i.BLEND),_=!0),L!==zu){if(L!==m||Ze!==T){if((f!==Zn||x!==Zn)&&(i.blendEquation(i.FUNC_ADD),f=Zn,x=Zn),Ze)switch(L){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case No:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,M=null,A=null,w=null,R.set(0,0,0),I=0,m=L,T=Ze}return}le=le||ae,oe=oe||k,Ie=Ie||K,(ae!==f||le!==x)&&(i.blendEquationSeparate(st[ae],st[le]),f=ae,x=le),(k!==v||K!==M||oe!==A||Ie!==w)&&(i.blendFuncSeparate(ze[k],ze[K],ze[oe],ze[Ie]),v=k,M=K,A=oe,w=Ie),(ot.equals(R)===!1||xt!==I)&&(i.blendColor(ot.r,ot.g,ot.b,xt),R.copy(ot),I=xt),m=L,T=!1}function Ft(L,ae){L.side===en?Se(i.CULL_FACE):re(i.CULL_FACE);let k=L.side===Pt;ae&&(k=!k),We(k),L.blending===Ei&&L.transparent===!1?C(Fn):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),it(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){E!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),E=L)}function He(L){L!==Fu?(re(i.CULL_FACE),L!==P&&(L===Io?i.cullFace(i.BACK):L===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),P=L}function ve(L){L!==G&&(W&&i.lineWidth(L),G=L)}function it(L,ae,k){L?(re(i.POLYGON_OFFSET_FILL),(F!==ae||H!==k)&&(i.polygonOffset(ae,k),F=ae,H=k)):Se(i.POLYGON_OFFSET_FILL)}function ge(L){L?re(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function b(L){L===void 0&&(L=i.TEXTURE0+j-1),ie!==L&&(i.activeTexture(L),ie=L)}function y(L,ae,k){k===void 0&&(ie===null?k=i.TEXTURE0+j-1:k=ie);let K=ue[k];K===void 0&&(K={type:void 0,texture:void 0},ue[k]=K),(K.type!==L||K.texture!==ae)&&(ie!==k&&(i.activeTexture(k),ie=k),i.bindTexture(L,ae||pe[L]),K.type=L,K.texture=ae)}function O(){const L=ue[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){tt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),tt.copy(L))}function de(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function ke(L,ae){let k=c.get(ae);k===void 0&&(k=new WeakMap,c.set(ae,k));let K=k.get(L);K===void 0&&(K=i.getUniformBlockIndex(ae,L.name),k.set(L,K))}function Ue(L,ae){const K=c.get(ae).get(L);l.get(ae)!==K&&(i.uniformBlockBinding(ae,K,L.__bindingPointIndex),l.set(ae,K))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,ue={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,M=null,x=null,A=null,w=null,R=new Pe(0,0,0),I=0,T=!1,E=null,P=null,G=null,F=null,H=null,tt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Se,bindFramebuffer:qe,drawBuffers:Ae,useProgram:ct,setBlending:C,setMaterial:Ft,setFlipSided:We,setCullFace:He,setLineWidth:ve,setPolygonOffset:it,setScissorTest:ge,activeTexture:b,bindTexture:y,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:$,texImage2D:he,texImage3D:be,updateUBOMapping:ke,uniformBlockBinding:Ue,texStorage2D:Te,texStorage3D:Z,texSubImage2D:X,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:Ee,scissor:Re,viewport:de,reset:nt}}function U_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):ur("canvas")}function _(b,y,O){let q=1;const $=ge(b);if(($.width>O||$.height>O)&&(q=O/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(q*$.width),me=Math.floor(q*$.height);h===void 0&&(h=g(X,me));const se=y?g(X,me):h;return se.width=X,se.height=me,se.getContext("2d").drawImage(b,0,0,X,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+me+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(b,y,O,q,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=y;if(y===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),y===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),y===i.RGBA){const me=$?ts:Ve.getTransfer(q);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=me===et?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(b,y){let O;return b?y===null||y===ni||y===sr?O=i.DEPTH24_STENCIL8:y===Kt?O=i.DEPTH32F_STENCIL8:y===rr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ni||y===sr?O=i.DEPTH_COMPONENT24:y===Kt?O=i.DEPTH_COMPONENT32F:y===rr&&(O=i.DEPTH_COMPONENT16),O}function A(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==bt&&b.minFilter!==Ut?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function w(b){const y=b.target;y.removeEventListener("dispose",w),I(y),y.isVideoTexture&&u.delete(y)}function R(b){const y=b.target;y.removeEventListener("dispose",R),E(y)}function I(b){const y=n.get(b);if(y.__webglInit===void 0)return;const O=b.source,q=d.get(O);if(q){const $=q[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(b),Object.keys(q).length===0&&d.delete(O)}n.remove(b)}function T(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const O=b.source,q=d.get(O);delete q[y.__cacheKey],a.memory.textures--}function E(b){const y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let $=0;$<y.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(y.__webglFramebuffer[q][$]);else i.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)i.deleteFramebuffer(y.__webglFramebuffer[q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,$=O.length;q<$;q++){const X=n.get(O[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(b)}let P=0;function G(){P=0}function F(){const b=P;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),P+=1,b}function H(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function j(b,y){const O=n.get(b);if(b.isVideoTexture&&ve(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,b,y);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function W(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function Q(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function V(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){ee(O,b,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const ie={[Ci]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[es]:i.MIRRORED_REPEAT},ue={[bt]:i.NEAREST,[uc]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[vn]:i.LINEAR_MIPMAP_LINEAR},_e={[vh]:i.NEVER,[Th]:i.ALWAYS,[xh]:i.LESS,[Mc]:i.LEQUAL,[Mh]:i.EQUAL,[Eh]:i.GEQUAL,[yh]:i.GREATER,[Sh]:i.NOTEQUAL};function Fe(b,y){if(y.type===Kt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ut||y.magFilter===Xr||y.magFilter===Zi||y.magFilter===vn||y.minFilter===Ut||y.minFilter===Xr||y.minFilter===Zi||y.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ie[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ie[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ie[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ue[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,_e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bt||y.minFilter!==Zi&&y.minFilter!==vn||y.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function tt(b,y){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",w));const q=y.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const X=H(y);if(X!==b.__cacheKey){$[X]===void 0&&($[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[X].usedTimes++;const me=$[b.__cacheKey];me!==void 0&&($[b.__cacheKey].usedTimes--,me.usedTimes===0&&T(y)),b.__cacheKey=X,b.__webglTexture=$[X].texture}return O}function Y(b,y,O){let q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=i.TEXTURE_3D);const $=tt(b,y),X=y.source;t.bindTexture(q,b.__webglTexture,i.TEXTURE0+O);const me=n.get(X);if(X.version!==me.__version||$===!0){t.activeTexture(i.TEXTURE0+O);const se=Ve.getPrimaries(Ve.workingColorSpace),Ee=y.colorSpace===Ln?null:Ve.getPrimaries(y.colorSpace),Te=y.colorSpace===Ln||se===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Z=_(y.image,!1,r.maxTextureSize);Z=it(y,Z);const he=s.convert(y.format,y.colorSpace),be=s.convert(y.type);let Re=M(y.internalFormat,he,be,y.colorSpace,y.isVideoTexture);Fe(q,y);let de;const ke=y.mipmaps,Ue=y.isVideoTexture!==!0,nt=me.__version===void 0||$===!0,L=X.dataReady,ae=A(y,Z);if(y.isDepthTexture)Re=x(y.format===or,y.type),nt&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,Re,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Re,Z.width,Z.height,0,he,be,null));else if(y.isDataTexture)if(ke.length>0){Ue&&nt&&t.texStorage2D(i.TEXTURE_2D,ae,Re,ke[0].width,ke[0].height);for(let k=0,K=ke.length;k<K;k++)de=ke[k],Ue?L&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,he,be,de.data):t.texImage2D(i.TEXTURE_2D,k,Re,de.width,de.height,0,he,be,de.data);y.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(i.TEXTURE_2D,ae,Re,Z.width,Z.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,he,be,Z.data)):t.texImage2D(i.TEXTURE_2D,0,Re,Z.width,Z.height,0,he,be,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Re,ke[0].width,ke[0].height,Z.depth);for(let k=0,K=ke.length;k<K;k++)if(de=ke[k],y.format!==kt)if(he!==null)if(Ue){if(L)if(y.layerUpdates.size>0){const le=Al(de.width,de.height,y.format,y.type);for(const oe of y.layerUpdates){const Ie=de.data.subarray(oe*le/de.data.BYTES_PER_ELEMENT,(oe+1)*le/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,oe,de.width,de.height,1,he,Ie)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,Z.depth,he,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Re,de.width,de.height,Z.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,de.width,de.height,Z.depth,he,be,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Re,de.width,de.height,Z.depth,0,he,be,de.data)}else{Ue&&nt&&t.texStorage2D(i.TEXTURE_2D,ae,Re,ke[0].width,ke[0].height);for(let k=0,K=ke.length;k<K;k++)de=ke[k],y.format!==kt?he!==null?Ue?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Re,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?L&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,de.width,de.height,he,be,de.data):t.texImage2D(i.TEXTURE_2D,k,Re,de.width,de.height,0,he,be,de.data)}else if(y.isDataArrayTexture)if(Ue){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Re,Z.width,Z.height,Z.depth),L)if(y.layerUpdates.size>0){const k=Al(Z.width,Z.height,y.format,y.type);for(const K of y.layerUpdates){const le=Z.data.subarray(K*k/Z.data.BYTES_PER_ELEMENT,(K+1)*k/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Z.width,Z.height,1,he,be,le)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,be,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,Z.width,Z.height,Z.depth,0,he,be,Z.data);else if(y.isData3DTexture)Ue?(nt&&t.texStorage3D(i.TEXTURE_3D,ae,Re,Z.width,Z.height,Z.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,be,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Re,Z.width,Z.height,Z.depth,0,he,be,Z.data);else if(y.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(i.TEXTURE_2D,ae,Re,Z.width,Z.height);else{let k=Z.width,K=Z.height;for(let le=0;le<ae;le++)t.texImage2D(i.TEXTURE_2D,le,Re,k,K,0,he,be,null),k>>=1,K>>=1}}else if(ke.length>0){if(Ue&&nt){const k=ge(ke[0]);t.texStorage2D(i.TEXTURE_2D,ae,Re,k.width,k.height)}for(let k=0,K=ke.length;k<K;k++)de=ke[k],Ue?L&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,he,be,de):t.texImage2D(i.TEXTURE_2D,k,Re,he,be,de);y.generateMipmaps=!1}else if(Ue){if(nt){const k=ge(Z);t.texStorage2D(i.TEXTURE_2D,ae,Re,k.width,k.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,be,Z)}else t.texImage2D(i.TEXTURE_2D,0,Re,he,be,Z);m(y)&&f(q),me.__version=X.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ee(b,y,O){if(y.image.length!==6)return;const q=tt(b,y),$=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const X=n.get($);if($.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+O);const me=Ve.getPrimaries(Ve.workingColorSpace),se=y.colorSpace===Ln?null:Ve.getPrimaries(y.colorSpace),Ee=y.colorSpace===Ln||me===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Te=y.isCompressedTexture||y.image[0].isCompressedTexture,Z=y.image[0]&&y.image[0].isDataTexture,he=[];for(let K=0;K<6;K++)!Te&&!Z?he[K]=_(y.image[K],!0,r.maxCubemapSize):he[K]=Z?y.image[K].image:y.image[K],he[K]=it(y,he[K]);const be=he[0],Re=s.convert(y.format,y.colorSpace),de=s.convert(y.type),ke=M(y.internalFormat,Re,de,y.colorSpace),Ue=y.isVideoTexture!==!0,nt=X.__version===void 0||q===!0,L=$.dataReady;let ae=A(y,be);Fe(i.TEXTURE_CUBE_MAP,y);let k;if(Te){Ue&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,ke,be.width,be.height);for(let K=0;K<6;K++){k=he[K].mipmaps;for(let le=0;le<k.length;le++){const oe=k[le];y.format!==kt?Re!==null?Ue?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,oe.width,oe.height,Re,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,ke,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,oe.width,oe.height,Re,de,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,ke,oe.width,oe.height,0,Re,de,oe.data)}}}else{if(k=y.mipmaps,Ue&&nt){k.length>0&&ae++;const K=ge(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,ke,K.width,K.height)}for(let K=0;K<6;K++)if(Z){Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,he[K].width,he[K].height,Re,de,he[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,he[K].width,he[K].height,0,Re,de,he[K].data);for(let le=0;le<k.length;le++){const Ie=k[le].image[K].image;Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Ie.width,Ie.height,Re,de,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,ke,Ie.width,Ie.height,0,Re,de,Ie.data)}}else{Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,de,he[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,Re,de,he[K]);for(let le=0;le<k.length;le++){const oe=k[le];Ue?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Re,de,oe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,ke,Re,de,oe.image[K])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),X.__version=$.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function pe(b,y,O,q,$,X){const me=s.convert(O.format,O.colorSpace),se=s.convert(O.type),Ee=M(O.internalFormat,me,se,O.colorSpace),Te=n.get(y),Z=n.get(O);if(Z.__renderTarget=y,!Te.__hasExternalTextures){const he=Math.max(1,y.width>>X),be=Math.max(1,y.height>>X);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,X,Ee,he,be,y.depth,0,me,se,null):t.texImage2D($,X,Ee,he,be,0,me,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),He(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,Z.__webglTexture,0,We(y)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,Z.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(b,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer){const q=y.depthTexture,$=q&&q.isDepthTexture?q.type:null,X=x(y.stencilBuffer,$),me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=We(y);He(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,X,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,X,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,X,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,b)}else{const q=y.textures;for(let $=0;$<q.length;$++){const X=q[$],me=s.convert(X.format,X.colorSpace),se=s.convert(X.type),Ee=M(X.internalFormat,me,se,X.colorSpace),Te=We(y);O&&He(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Ee,y.width,y.height):He(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Ee,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const $=q.__webglTexture,X=We(y);if(y.depthTexture.format===ar)He(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(y.depthTexture.format===or)He(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function qe(b){const y=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=q}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=b.texture.mipmaps;q&&q.length>0?Se(y.__webglFramebuffer[0],b):Se(y.__webglFramebuffer,b)}else if(O){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=i.createRenderbuffer(),re(y.__webglDepthbuffer[q],b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),re(y.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(b,y,O){const q=n.get(b);y!==void 0&&pe(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&qe(b)}function ct(b){const y=b.texture,O=n.get(b),q=n.get(y);b.addEventListener("dispose",R);const $=b.textures,X=b.isWebGLCubeRenderTarget===!0,me=$.length>1;if(me||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=y.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)O.__webglFramebuffer[se][Ee]=i.createFramebuffer()}else O.__webglFramebuffer[se]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)O.__webglFramebuffer[se]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(me)for(let se=0,Ee=$.length;se<Ee;se++){const Te=n.get($[se]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&He(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const Ee=$[se];O.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const Te=s.convert(Ee.format,Ee.colorSpace),Z=s.convert(Ee.type),he=M(Ee.internalFormat,Te,Z,Ee.colorSpace,b.isXRRenderTarget===!0),be=We(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,he,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,O.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),re(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)pe(O.__webglFramebuffer[se][Ee],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee);else pe(O.__webglFramebuffer[se],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let se=0,Ee=$.length;se<Ee;se++){const Te=$[se],Z=n.get(Te);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Fe(i.TEXTURE_2D,Te),pe(O.__webglFramebuffer,b,Te,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),m(Te)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Fe(se,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)pe(O.__webglFramebuffer[Ee],b,y,i.COLOR_ATTACHMENT0,se,Ee);else pe(O.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,se,0);m(y)&&f(se),t.unbindTexture()}b.depthBuffer&&qe(b)}function st(b){const y=b.textures;for(let O=0,q=y.length;O<q;O++){const $=y[O];if(m($)){const X=v(b),me=n.get($).__webglTexture;t.bindTexture(X,me),f(X),t.unbindTexture()}}}const ze=[],C=[];function Ft(b){if(b.samples>0){if(He(b)===!1){const y=b.textures,O=b.width,q=b.height;let $=i.COLOR_BUFFER_BIT;const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(b),se=y.length>1;if(se)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Ee=b.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Te]);const Z=n.get(y[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,$,i.NEAREST),l===!0&&(ze.length=0,C.length=0,ze.push(i.COLOR_ATTACHMENT0+Te),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ze.push(X),C.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,me.__webglColorRenderbuffer[Te]);const Z=n.get(y[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function We(b){return Math.min(r.maxSamples,b.samples)}function He(b){const y=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ve(b){const y=a.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function it(b,y){const O=b.colorSpace,q=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==wt&&O!==Ln&&(Ve.getTransfer(O)===et?(q!==kt||$!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ae,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=He}function N_(i,e){function t(n,r=Ln){let s;const a=Ve.getTransfer(r);if(n===nn)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hc)return i.BYTE;if(n===dc)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Kt)return i.FLOAT;if(n===hr)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===kt)return i.RGBA;if(n===ar)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===Ya)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===gc)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===Yr||n===qr||n===jr||n===Kr)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===aa||n===oa||n===la)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ua||n===ha)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ca||n===ua)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ha)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa||n===Ea||n===Ta||n===ba)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===da)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ma)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$r||n===Aa||n===wa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$r)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===Ra||n===Ca||n===Pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===$r)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new mt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new as(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends Ni{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new B_,m=t.getContextAttributes();let f=null,v=null;const M=[],x=[],A=new Ge;let w=null;const R=new Ct;R.viewport=new je;const I=new Ct;I.viewport=new je;const T=[R,I],E=new $d;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=M[Y];return ee===void 0&&(ee=new Ls,M[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=M[Y];return ee===void 0&&(ee=new Ls,M[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=M[Y];return ee===void 0&&(ee=new Ls,M[Y]=ee),ee.getHandSpace()};function F(Y){const ee=x.indexOf(Y.inputSource);if(ee===-1)return;const pe=M[ee];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<M.length;Y++){const ee=x[Y];ee!==null&&(x[Y]=null,M[Y].disconnect(ee))}P=null,G=null,_.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,v=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,re=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?or:ar,re=m.stencil?sr:ni);const qe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ii(d.textureWidth,d.textureHeight,{format:kt,type:nn,depthTexture:new Dc(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ii(p.framebufferWidth,p.framebufferHeight,{format:kt,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(Y){for(let ee=0;ee<Y.removed.length;ee++){const pe=Y.removed[ee],re=x.indexOf(pe);re>=0&&(x[re]=null,M[re].disconnect(pe))}for(let ee=0;ee<Y.added.length;ee++){const pe=Y.added[ee];let re=x.indexOf(pe);if(re===-1){for(let qe=0;qe<M.length;qe++)if(qe>=x.length){x.push(pe),re=qe;break}else if(x[qe]===null){x[qe]=pe,re=qe;break}if(re===-1)break}const Se=M[re];Se&&Se.connect(pe)}}const W=new U,Q=new U;function V(Y,ee,pe){W.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const re=W.distanceTo(Q),Se=ee.projectionMatrix.elements,qe=pe.projectionMatrix.elements,Ae=Se[14]/(Se[10]-1),ct=Se[14]/(Se[10]+1),st=(Se[9]+1)/Se[5],ze=(Se[9]-1)/Se[5],C=(Se[8]-1)/Se[0],Ft=(qe[8]+1)/qe[0],We=Ae*C,He=Ae*Ft,ve=re/(-C+Ft),it=ve*-C;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(it),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ge=Ae+ve,b=ct+ve,y=We-it,O=He+(re-it),q=st*ct/b*ge,$=ze*ct/b*ge;Y.projectionMatrix.makePerspective(y,O,q,$,ge,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,pe=Y.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),E.near=I.near=R.near=ee,E.far=I.far=R.far=pe,(P!==E.near||G!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,G=E.far),R.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,E.layers.mask=R.layers.mask|I.layers.mask;const re=Y.parent,Se=E.cameras;ie(E,re);for(let qe=0;qe<Se.length;qe++)ie(Se[qe],re);Se.length===2?V(E,R,I):E.projectionMatrix.copy(R.projectionMatrix),ue(Y,E,re)};function ue(Y,ee,pe){pe===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Pi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let _e=null;function Fe(Y,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let re=!1;pe.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let Ae=0;Ae<pe.length;Ae++){const ct=pe[Ae];let st=null;if(p!==null)st=p.getViewport(ct);else{const C=h.getViewSubImage(d,ct);st=C.viewport,Ae===0&&(e.setRenderTargetTextures(v,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(v))}let ze=T[Ae];ze===void 0&&(ze=new Ct,ze.layers.enable(Ae),ze.viewport=new je,T[Ae]=ze),ze.matrix.fromArray(ct.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(ct.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(st.x,st.y,st.width,st.height),Ae===0&&(E.matrix.copy(ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(ze)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Ae=h.getDepthInformation(pe[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let pe=0;pe<M.length;pe++){const re=x[pe],Se=M[pe];re!==null&&Se!==void 0&&Se.update(re,ee,c||a)}_e&&_e(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const tt=new Oc;tt.setAnimationLoop(Fe),this.setAnimationLoop=function(Y){_e=Y},this.dispose=function(){}}}const qn=new rn,H_=new Le;function k_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ac(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,qn.copy(x),qn.x*=-1,qn.y*=-1,qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),m.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(qn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function V_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function u(v){const M=h();v.__bindingPointIndex=M;const x=i.createBuffer(),A=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=r[v.id],x=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,R=x.length;w<R;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,E=I.length;T<E;T++){const P=I[T];if(p(P,w,T,A)===!0){const G=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let j=0;j<F.length;j++){const W=F[j],Q=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,G+H,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,H),H+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,M,x,A){const w=v.value,R=M+"_"+x;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const I=A[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(v){const M=v.uniforms;let x=0;const A=16;for(let R=0,I=M.length;R<I;R++){const T=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,P=T.length;E<P;E++){const G=T[E],F=Array.isArray(G.value)?G.value:[G.value];for(let H=0,j=F.length;H<j;H++){const W=F[H],Q=_(W),V=x%A,ie=V%Q.boundary,ue=V+ie;x+=ie,ue!==0&&A-ue<Q.storage&&(x+=A-ue),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Q.storage}}}const w=x%A;return w>0&&(x+=A-w),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Iv{constructor(e={}){const{canvas:t=Vh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=_t;let w=0,R=0,I=null,T=-1,E=null;const P=new je,G=new je;let F=null;const H=new Pe(0);let j=0,W=t.width,Q=t.height,V=1,ie=null,ue=null;const _e=new je(0,0,W,Q),Fe=new je(0,0,W,Q);let tt=!1;const Y=new to;let ee=!1,pe=!1;const re=new Le,Se=new Le,qe=new U,Ae=new je,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function ze(){return I===null?V:1}let C=n;function Ft(S,D){return t.getContext(S,D)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",oe,!1),C===null){const D="webgl2";if(C=Ft(D,S),C===null)throw Ft(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let We,He,ve,it,ge,b,y,O,q,$,X,me,se,Ee,Te,Z,he,be,Re,de,ke,Ue,nt,L;function ae(){We=new Qm(C),We.init(),Ue=new N_(C,We),He=new Ym(C,We,e,Ue),ve=new D_(C,We),He.reverseDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),it=new ng(C),ge=new M_,b=new U_(C,We,ve,ge,He,Ue,it),y=new jm(x),O=new Jm(x),q=new lf(C),nt=new Wm(C,q),$=new eg(C,q,it,nt),X=new rg(C,$,q,it),Re=new ig(C,He,b),Z=new qm(ge),me=new x_(x,y,O,We,He,nt,Z),se=new k_(x,ge),Ee=new S_,Te=new R_(We),be=new Gm(x,y,O,ve,X,p,l),he=new L_(x,X,He),L=new V_(C,it,He,ve),de=new Xm(C,We,it),ke=new tg(C,We,it),it.programs=me.programs,x.capabilities=He,x.extensions=We,x.properties=ge,x.renderLists=Ee,x.shadowMap=he,x.state=ve,x.info=it}ae();const k=new z_(x,C);this.xr=k,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=We.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=We.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(W,Q,!1))},this.getSize=function(S){return S.set(W,Q)},this.setSize=function(S,D,B=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,Q=D,t.width=Math.floor(S*V),t.height=Math.floor(D*V),B===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(W*V,Q*V).floor()},this.setDrawingBufferSize=function(S,D,B){W=S,Q=D,V=B,t.width=Math.floor(S*B),t.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,D,B,z){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,D,B,z),ve.viewport(P.copy(_e).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Fe)},this.setScissor=function(S,D,B,z){S.isVector4?Fe.set(S.x,S.y,S.z,S.w):Fe.set(S,D,B,z),ve.scissor(G.copy(Fe).multiplyScalar(V).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){ve.setScissorTest(tt=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,B=!0){let z=0;if(S){let N=!1;if(I!==null){const J=I.texture.format;N=J===Ka||J===ja||J===qa}if(N){const J=I.texture.type,ne=J===nn||J===ni||J===rr||J===sr||J===Wa||J===Xa,ce=be.getClearColor(),fe=be.getClearAlpha(),Ce=ce.r,we=ce.g,xe=ce.b;ne?(g[0]=Ce,g[1]=we,g[2]=xe,g[3]=fe,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Ce,_[1]=we,_[2]=xe,_[3]=fe,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}D&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),be.dispose(),Ee.dispose(),Te.dispose(),ge.dispose(),y.dispose(),O.dispose(),X.dispose(),nt.dispose(),L.dispose(),me.dispose(),k.dispose(),k.removeEventListener("sessionstart",uo),k.removeEventListener("sessionend",ho),Hn.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const S=it.autoReset,D=he.enabled,B=he.autoUpdate,z=he.needsUpdate,N=he.type;ae(),it.autoReset=S,he.enabled=D,he.autoUpdate=B,he.needsUpdate=z,he.type=N}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ie(S){const D=S.target;D.removeEventListener("dispose",Ie),ot(D)}function ot(S){xt(S),ge.remove(S)}function xt(S){const D=ge.get(S).programs;D!==void 0&&(D.forEach(function(B){me.releaseProgram(B)}),S.isShaderMaterial&&me.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,z,N,J){D===null&&(D=ct);const ne=N.isMesh&&N.matrixWorld.determinant()<0,ce=Wc(S,D,B,z,N);ve.setMaterial(z,ne);let fe=B.index,Ce=1;if(z.wireframe===!0){if(fe=$.getWireframeAttribute(B),fe===void 0)return;Ce=2}const we=B.drawRange,xe=B.attributes.position;let Xe=we.start*Ce,Ke=(we.start+we.count)*Ce;J!==null&&(Xe=Math.max(Xe,J.start*Ce),Ke=Math.min(Ke,(J.start+J.count)*Ce)),fe!==null?(Xe=Math.max(Xe,0),Ke=Math.min(Ke,fe.count)):xe!=null&&(Xe=Math.max(Xe,0),Ke=Math.min(Ke,xe.count));const ut=Ke-Xe;if(ut<0||ut===1/0)return;nt.setup(N,z,ce,B,fe);let lt,Ye=de;if(fe!==null&&(lt=q.get(fe),Ye=ke,Ye.setIndex(lt)),N.isMesh)z.wireframe===!0?(ve.setLineWidth(z.wireframeLinewidth*ze()),Ye.setMode(C.LINES)):Ye.setMode(C.TRIANGLES);else if(N.isLine){let Me=z.linewidth;Me===void 0&&(Me=1),ve.setLineWidth(Me*ze()),N.isLineSegments?Ye.setMode(C.LINES):N.isLineLoop?Ye.setMode(C.LINE_LOOP):Ye.setMode(C.LINE_STRIP)}else N.isPoints?Ye.setMode(C.POINTS):N.isSprite&&Ye.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ye.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Ye.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Me=N._multiDrawStarts,gt=N._multiDrawCounts,$e=N._multiDrawCount,Gt=fe?q.get(fe).bytesPerElement:1,ri=ge.get(z).currentProgram.getUniforms();for(let Lt=0;Lt<$e;Lt++)ri.setValue(C,"_gl_DrawID",Lt),Ye.render(Me[Lt]/Gt,gt[Lt])}else if(N.isInstancedMesh)Ye.renderInstances(Xe,ut,N.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,gt=Math.min(B.instanceCount,Me);Ye.renderInstances(Xe,ut,gt)}else Ye.render(Xe,ut)};function Ze(S,D,B){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Pt,S.needsUpdate=!0,gr(S,D,B),S.side=Sn,S.needsUpdate=!0,gr(S,D,B),S.side=en):gr(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),f=Te.get(B),f.init(D),M.push(f),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const z=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let ne=0;ne<J.length;ne++){const ce=J[ne];Ze(ce,B,N),z.add(ce)}else Ze(J,B,N),z.add(J)}),f=M.pop(),z},this.compileAsync=function(S,D,B=null){const z=this.compile(S,D,B);return new Promise(N=>{function J(){if(z.forEach(function(ne){ge.get(ne).currentProgram.isReady()&&z.delete(ne)}),z.size===0){N(S);return}setTimeout(J,10)}We.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Vt=null;function ln(S){Vt&&Vt(S)}function uo(){Hn.stop()}function ho(){Hn.start()}const Hn=new Oc;Hn.setAnimationLoop(ln),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(S){Vt=S,k.setAnimationLoop(S),S===null?Hn.stop():Hn.start()},k.addEventListener("sessionstart",uo),k.addEventListener("sessionend",ho),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(D),D=k.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,I),f=Te.get(S,M.length),f.init(D),M.push(f),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Se),pe=this.localClippingEnabled,ee=Z.init(this.clippingPlanes,pe),m=Ee.get(S,v.length),m.init(),v.push(m),k.enabled===!0&&k.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&ls(J,D,-1/0,x.sortObjects)}ls(S,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ie,ue),st=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,st&&be.addToRenderList(m,S),this.info.render.frame++,ee===!0&&Z.beginShadows();const B=f.state.shadowsArray;he.render(B,S,D),ee===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(f.setupLights(),D.isArrayCamera){const J=D.cameras;if(N.length>0)for(let ne=0,ce=J.length;ne<ce;ne++){const fe=J[ne];po(z,N,S,fe)}st&&be.render(S);for(let ne=0,ce=J.length;ne<ce;ne++){const fe=J[ne];fo(m,S,fe,fe.viewport)}}else N.length>0&&po(z,N,S,D),st&&be.render(S),fo(m,S,D);I!==null&&R===0&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,D),nt.resetDefaultState(),T=-1,E=null,M.pop(),M.length>0?(f=M[M.length-1],ee===!0&&Z.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ls(S,D,B,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){z&&Ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);const ne=X.update(S),ce=S.material;ce.visible&&m.push(S,ne,ce,B,Ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const ne=X.update(S),ce=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ae.copy(S.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ae.copy(ne.boundingSphere.center)),Ae.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(ce)){const fe=ne.groups;for(let Ce=0,we=fe.length;Ce<we;Ce++){const xe=fe[Ce],Xe=ce[xe.materialIndex];Xe&&Xe.visible&&m.push(S,ne,Xe,B,Ae.z,xe)}}else ce.visible&&m.push(S,ne,ce,B,Ae.z,null)}}const J=S.children;for(let ne=0,ce=J.length;ne<ce;ne++)ls(J[ne],D,B,z)}function fo(S,D,B,z){const N=S.opaque,J=S.transmissive,ne=S.transparent;f.setupLightsView(B),ee===!0&&Z.setGlobalState(x.clippingPlanes,B),z&&ve.viewport(P.copy(z)),N.length>0&&mr(N,D,B),J.length>0&&mr(J,D,B),ne.length>0&&mr(ne,D,B),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function po(S,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new ii(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?hr:nn,minFilter:vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const J=f.state.transmissionRenderTarget[z.id],ne=z.viewport||P;J.setSize(ne.z*x.transmissionResolutionScale,ne.w*x.transmissionResolutionScale);const ce=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(H),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),st&&be.render(B);const fe=x.toneMapping;x.toneMapping=On;const Ce=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),ee===!0&&Z.setGlobalState(x.clippingPlanes,z),mr(S,B,z),b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J),We.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let xe=0,Xe=D.length;xe<Xe;xe++){const Ke=D[xe],ut=Ke.object,lt=Ke.geometry,Ye=Ke.material,Me=Ke.group;if(Ye.side===en&&ut.layers.test(z.layers)){const gt=Ye.side;Ye.side=Pt,Ye.needsUpdate=!0,mo(ut,B,z,lt,Ye,Me),Ye.side=gt,Ye.needsUpdate=!0,we=!0}}we===!0&&(b.updateMultisampleRenderTarget(J),b.updateRenderTargetMipmap(J))}x.setRenderTarget(ce),x.setClearColor(H,j),Ce!==void 0&&(z.viewport=Ce),x.toneMapping=fe}function mr(S,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,J=S.length;N<J;N++){const ne=S[N],ce=ne.object,fe=ne.geometry,Ce=ne.group;let we=ne.material;we.allowOverride===!0&&z!==null&&(we=z),ce.layers.test(B.layers)&&mo(ce,D,B,fe,we,Ce)}}function mo(S,D,B,z,N,J){S.onBeforeRender(x,D,B,z,N,J),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,D,B,z,S,J),N.transparent===!0&&N.side===en&&N.forceSinglePass===!1?(N.side=Pt,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,S,J),N.side=Sn,N.needsUpdate=!0,x.renderBufferDirect(B,D,z,N,S,J),N.side=en):x.renderBufferDirect(B,D,z,N,S,J),S.onAfterRender(x,D,B,z,N,J)}function gr(S,D,B){D.isScene!==!0&&(D=ct);const z=ge.get(S),N=f.state.lights,J=f.state.shadowsArray,ne=N.state.version,ce=me.getParameters(S,N.state,J,D,B),fe=me.getProgramCacheKey(ce);let Ce=z.programs;z.environment=S.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",Ie),Ce=new Map,z.programs=Ce);let we=Ce.get(fe);if(we!==void 0){if(z.currentProgram===we&&z.lightsStateVersion===ne)return _o(S,ce),we}else ce.uniforms=me.getUniforms(S),S.onBeforeCompile(ce,x),we=me.acquireProgram(ce,fe),Ce.set(fe,we),z.uniforms=ce.uniforms;const xe=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xe.clippingPlanes=Z.uniform),_o(S,ce),z.needsLights=Yc(S),z.lightsStateVersion=ne,z.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=we,z.uniformsList=null,we}function go(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Jr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function _o(S,D){const B=ge.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Wc(S,D,B,z,N){D.isScene!==!0&&(D=ct),b.resetTextureUnits();const J=D.fog,ne=z.isMeshStandardMaterial?D.environment:null,ce=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wt,fe=(z.isMeshStandardMaterial?O:y).get(z.envMap||ne),Ce=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,we=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xe=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,Ke=!!B.morphAttributes.color;let ut=On;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ut=x.toneMapping);const lt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ye=lt!==void 0?lt.length:0,Me=ge.get(z),gt=f.state.lights;if(ee===!0&&(pe===!0||S!==E)){const St=S===E&&z.id===T;Z.setState(z,S,St)}let $e=!1;z.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==gt.state.version||Me.outputColorSpace!==ce||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==fe||z.fog===!0&&Me.fog!==J||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Z.numPlanes||Me.numIntersection!==Z.numIntersection)||Me.vertexAlphas!==Ce||Me.vertexTangents!==we||Me.morphTargets!==xe||Me.morphNormals!==Xe||Me.morphColors!==Ke||Me.toneMapping!==ut||Me.morphTargetsCount!==Ye)&&($e=!0):($e=!0,Me.__version=z.version);let Gt=Me.currentProgram;$e===!0&&(Gt=gr(z,D,N));let ri=!1,Lt=!1,Hi=!1;const rt=Gt.getUniforms(),Ot=Me.uniforms;if(ve.useProgram(Gt.program)&&(ri=!0,Lt=!0,Hi=!0),z.id!==T&&(T=z.id,Lt=!0),ri||E!==S){ve.buffers.depth.getReversed()?(re.copy(S.projectionMatrix),Wh(re),Xh(re),rt.setValue(C,"projectionMatrix",re)):rt.setValue(C,"projectionMatrix",S.projectionMatrix),rt.setValue(C,"viewMatrix",S.matrixWorldInverse);const Rt=rt.map.cameraPosition;Rt!==void 0&&Rt.setValue(C,qe.setFromMatrixPosition(S.matrixWorld)),He.logarithmicDepthBuffer&&rt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&rt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Lt=!0,Hi=!0)}if(N.isSkinnedMesh){rt.setOptional(C,N,"bindMatrix"),rt.setOptional(C,N,"bindMatrixInverse");const St=N.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),rt.setValue(C,"boneTexture",St.boneTexture,b))}N.isBatchedMesh&&(rt.setOptional(C,N,"batchingTexture"),rt.setValue(C,"batchingTexture",N._matricesTexture,b),rt.setOptional(C,N,"batchingIdTexture"),rt.setValue(C,"batchingIdTexture",N._indirectTexture,b),rt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&rt.setValue(C,"batchingColorTexture",N._colorsTexture,b));const Bt=B.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&Re.update(N,B,Gt),(Lt||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,rt.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ot.envMap.value=fe,Ot.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Ot.envMapIntensity.value=D.environmentIntensity),Lt&&(rt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Xc(Ot,Hi),J&&z.fog===!0&&se.refreshFogUniforms(Ot,J),se.refreshMaterialUniforms(Ot,z,V,Q,f.state.transmissionRenderTarget[S.id]),Jr.upload(C,go(Me),Ot,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Jr.upload(C,go(Me),Ot,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&rt.setValue(C,"center",N.center),rt.setValue(C,"modelViewMatrix",N.modelViewMatrix),rt.setValue(C,"normalMatrix",N.normalMatrix),rt.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const St=z.uniformsGroups;for(let Rt=0,cs=St.length;Rt<cs;Rt++){const kn=St[Rt];L.update(kn,Gt),L.bind(kn,Gt)}}return Gt}function Xc(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Yc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,D,B){const z=ge.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ge.get(S.texture).__webglTexture=D,ge.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const B=ge.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const qc=C.createFramebuffer();this.setRenderTarget=function(S,D=0,B=0){I=S,w=D,R=B;let z=!0,N=null,J=!1,ne=!1;if(S){const fe=ge.get(S);if(fe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(fe.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(fe.__hasExternalTextures)b.rebindTextures(S,ge.get(S.texture).__webglTexture,ge.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const xe=S.depthTexture;if(fe.__boundDepthTexture!==xe){if(xe!==null&&ge.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const Ce=S.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ne=!0);const we=ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[D])?N=we[D][B]:N=we[D],J=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?N=ge.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?N=we[B]:N=we,P.copy(S.viewport),G.copy(S.scissor),F=S.scissorTest}else P.copy(_e).multiplyScalar(V).floor(),G.copy(Fe).multiplyScalar(V).floor(),F=tt;if(B!==0&&(N=qc),ve.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&ve.drawBuffers(S,N),ve.viewport(P),ve.scissor(G),ve.setScissorTest(F),J){const fe=ge.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,B)}else if(ne){const fe=ge.get(S.texture),Ce=D;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,fe.__webglTexture,B,Ce)}else if(S!==null&&B!==0){const fe=ge.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,fe.__webglTexture,B)}T=-1},this.readRenderTargetPixels=function(S,D,B,z,N,J,ne){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ne!==void 0&&(ce=ce[ne]),ce){ve.bindFramebuffer(C.FRAMEBUFFER,ce);try{const fe=S.texture,Ce=fe.format,we=fe.type;if(!He.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&B>=0&&B<=S.height-N&&C.readPixels(D,B,z,N,Ue.convert(Ce),Ue.convert(we),J)}finally{const fe=I!==null?ge.get(I).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,z,N,J,ne){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ne!==void 0&&(ce=ce[ne]),ce)if(D>=0&&D<=S.width-z&&B>=0&&B<=S.height-N){ve.bindFramebuffer(C.FRAMEBUFFER,ce);const fe=S.texture,Ce=fe.format,we=fe.type;if(!He.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,xe),C.bufferData(C.PIXEL_PACK_BUFFER,J.byteLength,C.STREAM_READ),C.readPixels(D,B,z,N,Ue.convert(Ce),Ue.convert(we),0);const Xe=I!==null?ge.get(I).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,Xe);const Ke=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Gh(C,Ke,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,J),C.deleteBuffer(xe),C.deleteSync(Ke),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,B=0){const z=Math.pow(2,-B),N=Math.floor(S.image.width*z),J=Math.floor(S.image.height*z),ne=D!==null?D.x:0,ce=D!==null?D.y:0;b.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ne,ce,N,J),ve.unbindTexture()};const jc=C.createFramebuffer(),Kc=C.createFramebuffer();this.copyTextureToTexture=function(S,D,B=null,z=null,N=0,J=null){J===null&&(N!==0?(Zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let ne,ce,fe,Ce,we,xe,Xe,Ke,ut;const lt=S.isCompressedTexture?S.mipmaps[J]:S.image;if(B!==null)ne=B.max.x-B.min.x,ce=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,Ce=B.min.x,we=B.min.y,xe=B.isBox3?B.min.z:0;else{const Bt=Math.pow(2,-N);ne=Math.floor(lt.width*Bt),ce=Math.floor(lt.height*Bt),S.isDataArrayTexture?fe=lt.depth:S.isData3DTexture?fe=Math.floor(lt.depth*Bt):fe=1,Ce=0,we=0,xe=0}z!==null?(Xe=z.x,Ke=z.y,ut=z.z):(Xe=0,Ke=0,ut=0);const Ye=Ue.convert(D.format),Me=Ue.convert(D.type);let gt;D.isData3DTexture?(b.setTexture3D(D,0),gt=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),gt=C.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),gt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const $e=C.getParameter(C.UNPACK_ROW_LENGTH),Gt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ri=C.getParameter(C.UNPACK_SKIP_PIXELS),Lt=C.getParameter(C.UNPACK_SKIP_ROWS),Hi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,lt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ce),C.pixelStorei(C.UNPACK_SKIP_ROWS,we),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xe);const rt=S.isDataArrayTexture||S.isData3DTexture,Ot=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const Bt=ge.get(S),St=ge.get(D),Rt=ge.get(Bt.__renderTarget),cs=ge.get(St.__renderTarget);ve.bindFramebuffer(C.READ_FRAMEBUFFER,Rt.__webglFramebuffer),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let kn=0;kn<fe;kn++)rt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(S).__webglTexture,N,xe+kn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(D).__webglTexture,J,ut+kn)),C.blitFramebuffer(Ce,we,ne,ce,Xe,Ke,ne,ce,C.DEPTH_BUFFER_BIT,C.NEAREST);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||ge.has(S)){const Bt=ge.get(S),St=ge.get(D);ve.bindFramebuffer(C.READ_FRAMEBUFFER,jc),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,Kc);for(let Rt=0;Rt<fe;Rt++)rt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Bt.__webglTexture,N,xe+Rt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,N),Ot?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.__webglTexture,J,ut+Rt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,St.__webglTexture,J),N!==0?C.blitFramebuffer(Ce,we,ne,ce,Xe,Ke,ne,ce,C.COLOR_BUFFER_BIT,C.NEAREST):Ot?C.copyTexSubImage3D(gt,J,Xe,Ke,ut+Rt,Ce,we,ne,ce):C.copyTexSubImage2D(gt,J,Xe,Ke,Ce,we,ne,ce);ve.bindFramebuffer(C.READ_FRAMEBUFFER,null),ve.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ot?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(gt,J,Xe,Ke,ut,ne,ce,fe,Ye,Me,lt.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(gt,J,Xe,Ke,ut,ne,ce,fe,Ye,lt.data):C.texSubImage3D(gt,J,Xe,Ke,ut,ne,ce,fe,Ye,Me,lt):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,J,Xe,Ke,ne,ce,Ye,Me,lt.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,J,Xe,Ke,lt.width,lt.height,Ye,lt.data):C.texSubImage2D(C.TEXTURE_2D,J,Xe,Ke,ne,ce,Ye,Me,lt);C.pixelStorei(C.UNPACK_ROW_LENGTH,$e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Gt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ri),C.pixelStorei(C.UNPACK_SKIP_ROWS,Lt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Hi),J===0&&D.generateMipmaps&&C.generateMipmap(gt),ve.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,z=null,N=0){return Zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,B,z,N)},this.initRenderTarget=function(S){ge.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,ve.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}function Zl(i,e){if(e===ph)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===La||e===vc){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===La)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Dv extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new q_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new ov(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=nr.extractUrlBase(e);a=nr.resolveURL(c,this.path)}else a=nr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Fc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vc){try{a[Be.KHR_BINARY_GLTF]=new lv(e)}catch(h){r&&r(h);return}s=JSON.parse(a[Be.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Be.KHR_MATERIALS_UNLIT:a[h]=new X_;break;case Be.KHR_DRACO_MESH_COMPRESSION:a[h]=new cv(s,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:a[h]=new uv;break;case Be.KHR_MESH_QUANTIZATION:a[h]=new hv;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function G_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class W_{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],wt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new jd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yd(u),c.distance=h;break;case"spot":c=new Wd(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_n(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class X_{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return ei}extendParams(e,t,n){const r=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],wt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,_t))}return Promise.all(r)}}class Y_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class q_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(o,o)}return Promise.all(s)}}class j_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class K_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class $_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],wt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,_t)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Z_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class J_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],wt),Promise.all(s)}}class Q_{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ev{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],wt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,_t)),Promise.all(s)}}class tv{constructor(e){this.parser=e,this.name=Be.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class nv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class iv{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class rv{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class sv{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class av{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,r.mode,r.filter),p})})}else return null}}class ov{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Ht.TRIANGLES&&c.mode!==Ht.TRIANGLE_STRIP&&c.mode!==Ht.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const _=new Le,m=new U,f=new zn,v=new U(1,1,1),M=new yd(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(m,f,v));for(const x in l)if(x==="_COLOR_0"){const A=l[x];M.instanceColor=new Da(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);at.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Vc="glTF",Ki=12,Jl={JSON:1313821514,BIN:5130562};class lv{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ki),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ki,s=new DataView(e,Ki);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Jl.JSON){const c=new Uint8Array(e,Ki+a,o);this.content=n.decode(c)}else if(l===Jl.BIN){const c=Ki+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Oa[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Oa[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],p=bi[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(p)},o,c,wt,d)})})}}class uv{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hv{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class Gc extends pr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,v=1-m,M=f-d+h;for(let x=0;x!==o;x++){const A=a[_+x+o],w=a[_+x+l]*u,R=a[g+x+o],I=a[g+x]*u;s[x]=v*A+M*w+m*R+f*I}return s}}const dv=new zn;class fv extends Gc{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return dv.fromArray(s).normalize().toArray(s),s}}const Ht={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ql={9728:bt,9729:Ut,9984:uc,9985:Xr,9986:Zi,9987:vn},ec={33071:Dn,33648:es,10497:Ci},Ws={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pv={CUBICSPLINE:void 0,LINEAR:cr,STEP:lr},Xs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new io({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Sn})),i.DefaultMaterial}function jn(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _n(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gv(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _v(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vv(i){let e;const t=i.extensions&&i.extensions[Be.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ys(t.attributes):e=i.indices+":"+Ys(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Ys(i.targets[n]);return e}function Ys(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ba(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Mv=new Le;class yv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new G_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new Vd(this.options.manager):this.textureLoader=new Kd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return jn(s,o,r),_n(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(nr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Ws[r.type],o=bi[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new At(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Ws[r.type],c=bi[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let M=t.cache.get(v);M||(_=new c(o,f*p,r.count*p/u),M=new gd(_,p/u),t.cache.add(v,M)),m=new Qa(M,l,d%p/u,g)}else o===null?_=new c(r.count*l):_=new c(o,d,r.count*l),m=new At(_,l,g);if(r.sparse!==void 0){const f=Ws.SCALAR,v=bi[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,A=new v(a[1],M,r.sparse.count*f),w=new c(a[2],x,r.sparse.count*l);o!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=A.length;R<I;R++){const T=A[R];if(m.setX(T,w[R*l]),l>=2&&m.setY(T,w[R*l+1]),l>=3&&m.setZ(T,w[R*l+2]),l>=4&&m.setW(T,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Ql[d.magFilter]||Ut,u.minFilter=Ql[d.minFilter]||vn,u.wrapS=ec[d.wrapS]||Ci,u.wrapT=ec[d.wrapT]||Ci,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==bt&&u.minFilter!==Ut,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new mt(_);m.needsUpdate=!0,d(m)}),t.load(nr.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),_n(h,a),h.userData.mimeType=a.mimeType||xv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Be.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ic,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Lc,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return io}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Be.KHR_MATERIALS_UNLIT]){const h=r[Be.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],wt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,_t)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=en);const u=s.alphaMode||Xs.OPAQUE;if(u===Xs.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Xs.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ei&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==ei&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ei){const h=s.emissiveFactor;o.emissive=new Pe().setRGB(h[0],h[1],h[2],wt)}return s.emissiveTexture!==void 0&&a!==ei&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,_t)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),_n(h,s),t.associations.set(h,{materials:e}),s.extensions&&jn(r,h,s),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return tc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=vv(c),h=r[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=tc(new an,c,t),r[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?mv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=a[p];let f;const v=c[p];if(m.mode===Ht.TRIANGLES||m.mode===Ht.TRIANGLE_STRIP||m.mode===Ht.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new vd(_,v):new Nt(_,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Ht.TRIANGLE_STRIP?f.geometry=Zl(f.geometry,vc):m.mode===Ht.TRIANGLE_FAN&&(f.geometry=Zl(f.geometry,La));else if(m.mode===Ht.LINES)f=new Td(_,v);else if(m.mode===Ht.LINE_STRIP)f=new no(_,v);else if(m.mode===Ht.LINE_LOOP)f=new bd(_,v);else if(m.mode===Ht.POINTS)f=new Ad(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&_v(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),_n(f,s),m.extensions&&jn(r,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&jn(r,h[0],s),h[0];const d=new ti;s.extensions&&jn(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(kh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new ao(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_n(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Le;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new eo(o,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const p=r.channels[h],g=r.samplers[p.sampler],_=p.target,m=_.node,f=r.parameters!==void 0?r.parameters[g.input]:g.input,v=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],_=h[3],m=h[4],f=[];for(let v=0,M=d.length;v<M;v++){const x=d[v],A=p[v],w=g[v],R=_[v],I=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=n._createAnimationTracks(x,A,w,R,I);if(T)for(let E=0;E<T.length;E++)f.push(T[E])}return new Nd(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Mv)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Cc:c.length>1?u=new ti:c.length===1?u=c[0]:u=new at,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),_n(u,s),s.extensions&&jn(n,u,s),s.matrix!==void 0){const h=new Le;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ti;n.name&&(s.name=r.createUniqueName(n.name)),_n(s,n),n.extensions&&jn(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of r.associations)(d instanceof tn||d instanceof mt)&&h.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&h.set(d,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];Pn[s.path]===Pn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Pn[s.path]){case Pn.weights:c=Ii;break;case Pn.rotation:c=Di;break;case Pn.translation:case Pn.scale:c=Ui;break;default:switch(n.itemSize){case 1:c=Ii;break;case 2:case 3:default:c=Ui;break}break}const u=r.interpolation!==void 0?pv[r.interpolation]:cr,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+Pn[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ba(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Di?fv:Gc;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Sv(i,e,t){const n=e.attributes,r=new En;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const u=Ba(bi[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new U,l=new U;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Ba(bi[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new sn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function tc(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Oa[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Ve.workingColorSpace!==wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),_n(i,e),Sv(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?gv(i,e.targets,t):i})}function $i(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ev(i){let{swiper:e,extendParams:t,on:n,emit:r}=i;const s="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:v=>v,formatFractionTotal:v=>v,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(v,M){const{bulletActiveClass:x}=e.params.pagination;v&&(v=v[`${M==="prev"?"previous":"next"}ElementSibling`],v&&(v.classList.add(`${x}-${M}`),v=v[`${M==="prev"?"previous":"next"}ElementSibling`],v&&v.classList.add(`${x}-${M}-${M}`)))}function u(v,M,x){if(v=v%x,M=M%x,M===v+1)return"next";if(M===v-1)return"previous"}function h(v){const M=v.target.closest($i(e.params.pagination.bulletClass));if(!M)return;v.preventDefault();const x=xo(M)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const A=u(e.realIndex,x,e.slides.length);A==="next"?e.slideNext():A==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const v=e.rtl,M=e.params.pagination;if(l())return;let x=e.pagination.el;x=cn(x);let A,w;const R=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,I=e.params.loop?Math.ceil(R/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(w=e.previousRealIndex||0,A=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(A=e.snapIndex,w=e.previousSnapIndex):(w=e.previousIndex||0,A=e.activeIndex||0),M.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const T=e.pagination.bullets;let E,P,G;if(M.dynamicBullets&&(a=Qc(T[0],e.isHorizontal()?"width":"height"),x.forEach(F=>{F.style[e.isHorizontal()?"width":"height"]=`${a*(M.dynamicMainBullets+4)}px`}),M.dynamicMainBullets>1&&w!==void 0&&(o+=A-(w||0),o>M.dynamicMainBullets-1?o=M.dynamicMainBullets-1:o<0&&(o=0)),E=Math.max(A-o,0),P=E+(Math.min(T.length,M.dynamicMainBullets)-1),G=(P+E)/2),T.forEach(F=>{const H=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(j=>`${M.bulletActiveClass}${j}`)].map(j=>typeof j=="string"&&j.includes(" ")?j.split(" "):j).flat();F.classList.remove(...H)}),x.length>1)T.forEach(F=>{const H=xo(F);H===A?F.classList.add(...M.bulletActiveClass.split(" ")):e.isElement&&F.setAttribute("part","bullet"),M.dynamicBullets&&(H>=E&&H<=P&&F.classList.add(...`${M.bulletActiveClass}-main`.split(" ")),H===E&&c(F,"prev"),H===P&&c(F,"next"))});else{const F=T[A];if(F&&F.classList.add(...M.bulletActiveClass.split(" ")),e.isElement&&T.forEach((H,j)=>{H.setAttribute("part",j===A?"bullet-active":"bullet")}),M.dynamicBullets){const H=T[E],j=T[P];for(let W=E;W<=P;W+=1)T[W]&&T[W].classList.add(...`${M.bulletActiveClass}-main`.split(" "));c(H,"prev"),c(j,"next")}}if(M.dynamicBullets){const F=Math.min(T.length,M.dynamicMainBullets+4),H=(a*F-a)/2-G*a,j=v?"right":"left";T.forEach(W=>{W.style[e.isHorizontal()?j:"top"]=`${H}px`})}}x.forEach((T,E)=>{if(M.type==="fraction"&&(T.querySelectorAll($i(M.currentClass)).forEach(P=>{P.textContent=M.formatFractionCurrent(A+1)}),T.querySelectorAll($i(M.totalClass)).forEach(P=>{P.textContent=M.formatFractionTotal(I)})),M.type==="progressbar"){let P;M.progressbarOpposite?P=e.isHorizontal()?"vertical":"horizontal":P=e.isHorizontal()?"horizontal":"vertical";const G=(A+1)/I;let F=1,H=1;P==="horizontal"?F=G:H=G,T.querySelectorAll($i(M.progressbarFillClass)).forEach(j=>{j.style.transform=`translate3d(0,0,0) scaleX(${F}) scaleY(${H})`,j.style.transitionDuration=`${e.params.speed}ms`})}M.type==="custom"&&M.renderCustom?(vo(T,M.renderCustom(e,A+1,I)),E===0&&r("paginationRender",T)):(E===0&&r("paginationRender",T),r("paginationUpdate",T)),e.params.watchOverflow&&e.enabled&&T.classList[e.isLocked?"add":"remove"](M.lockClass)})}function p(){const v=e.params.pagination;if(l())return;const M=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=cn(x);let A="";if(v.type==="bullets"){let w=e.params.loop?Math.ceil(M/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&w>M&&(w=M);for(let R=0;R<w;R+=1)v.renderBullet?A+=v.renderBullet.call(e,R,v.bulletClass):A+=`<${v.bulletElement} ${e.isElement?'part="bullet"':""} class="${v.bulletClass}"></${v.bulletElement}>`}v.type==="fraction"&&(v.renderFraction?A=v.renderFraction.call(e,v.currentClass,v.totalClass):A=`<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`),v.type==="progressbar"&&(v.renderProgressbar?A=v.renderProgressbar.call(e,v.progressbarFillClass):A=`<span class="${v.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(w=>{v.type!=="custom"&&vo(w,A||""),v.type==="bullets"&&e.pagination.bullets.push(...w.querySelectorAll($i(v.bulletClass)))}),v.type!=="custom"&&r("paginationRender",x[0])}function g(){e.params.pagination=Zc(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const v=e.params.pagination;if(!v.el)return;let M;typeof v.el=="string"&&e.isElement&&(M=e.el.querySelector(v.el)),!M&&typeof v.el=="string"&&(M=[...document.querySelectorAll(v.el)]),M||(M=v.el),!(!M||M.length===0)&&(e.params.uniqueNavElements&&typeof v.el=="string"&&Array.isArray(M)&&M.length>1&&(M=[...e.el.querySelectorAll(v.el)],M.length>1&&(M=M.find(x=>Jc(x,".swiper")[0]===e.el))),Array.isArray(M)&&M.length===1&&(M=M[0]),Object.assign(e.pagination,{el:M}),M=cn(M),M.forEach(x=>{v.type==="bullets"&&v.clickable&&x.classList.add(...(v.clickableClass||"").split(" ")),x.classList.add(v.modifierClass+v.type),x.classList.add(e.isHorizontal()?v.horizontalClass:v.verticalClass),v.type==="bullets"&&v.dynamicBullets&&(x.classList.add(`${v.modifierClass}${v.type}-dynamic`),o=0,v.dynamicMainBullets<1&&(v.dynamicMainBullets=1)),v.type==="progressbar"&&v.progressbarOpposite&&x.classList.add(v.progressbarOppositeClass),v.clickable&&x.addEventListener("click",h),e.enabled||x.classList.add(v.lockClass)}))}function _(){const v=e.params.pagination;if(l())return;let M=e.pagination.el;M&&(M=cn(M),M.forEach(x=>{x.classList.remove(v.hiddenClass),x.classList.remove(v.modifierClass+v.type),x.classList.remove(e.isHorizontal()?v.horizontalClass:v.verticalClass),v.clickable&&(x.classList.remove(...(v.clickableClass||"").split(" ")),x.removeEventListener("click",h))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...v.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const v=e.params.pagination;let{el:M}=e.pagination;M=cn(M),M.forEach(x=>{x.classList.remove(v.horizontalClass,v.verticalClass),x.classList.add(e.isHorizontal()?v.horizontalClass:v.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?f():(g(),p(),d())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{p(),d()}),n("destroy",()=>{_()}),n("enable disable",()=>{let{el:v}=e.pagination;v&&(v=cn(v),v.forEach(M=>M.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(v,M)=>{const x=M.target,A=cn(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&A&&A.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const w=A[0].classList.contains(e.params.pagination.hiddenClass);r(w===!0?"paginationShow":"paginationHide"),A.forEach(R=>R.classList.toggle(e.params.pagination.hiddenClass))}});const m=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:v}=e.pagination;v&&(v=cn(v),v.forEach(M=>M.classList.remove(e.params.pagination.paginationDisabledClass))),g(),p(),d()},f=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:v}=e.pagination;v&&(v=cn(v),v.forEach(M=>M.classList.add(e.params.pagination.paginationDisabledClass))),_()};Object.assign(e.pagination,{enable:m,disable:f,render:p,update:d,init:g,destroy:_})}function Uv(){const[i,e]=vt.useState(0),[t,n]=vt.useState(!1),[r,s]=vt.useState([{id:1,name:"Becky Nelson",rating:4,title:"Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",image:"https://randomuser.me/api/portraits/men/32.jpg"},{id:2,name:"John Brown",rating:5,title:"Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",image:"https://randomuser.me/api/portraits/men/45.jpg"},{id:3,name:"Hannah Thompson",rating:3,title:"Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",image:"https://randomuser.me/api/portraits/women/50.jpg"},{id:4,name:"Chris King",rating:5,title:"Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",image:"https://randomuser.me/api/portraits/men/55.jpg"},{id:5,name:"Sarah Lopez",rating:4,title:"Strategy, creativity, technology - aligned in perfect sync Always adjusting, always forward",image:"https://randomuser.me/api/portraits/women/60.jpg"}]),[a]=vt.useState([...r]),o=u=>{u===i||t||(n(!0),setTimeout(()=>{const h=[...r],d=h[0];h[0]=h[u],h[u]=d,s(h),e(u),setTimeout(()=>{n(!1)},300)},150))},l=u=>{if(u===i||t)return;const h=a[u],d=r.findIndex(p=>p.id===h.id);d!==-1&&o(d)},c=()=>{const u=r[0];return a.findIndex(h=>h.id===u.id)};return ye.jsxs("div",{className:"from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden",children:[ye.jsx("div",{className:"absolute inset-0 opacity-20",children:ye.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 1000 1000",children:[ye.jsx("defs",{children:ye.jsxs("pattern",{id:"network",x:"0",y:"0",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:[ye.jsx("circle",{cx:"50",cy:"50",r:"1",fill:"#60a5fa",opacity:"0.5"}),ye.jsx("line",{x1:"50",y1:"50",x2:"100",y2:"0",stroke:"#60a5fa",strokeWidth:"0.5",opacity:"0.3"}),ye.jsx("line",{x1:"50",y1:"50",x2:"100",y2:"100",stroke:"#60a5fa",strokeWidth:"0.5",opacity:"0.3"})]})}),ye.jsx("rect",{width:"100%",height:"100%",fill:"url(#network)"})]})}),ye.jsxs("div",{className:"testimonial-wrapper relative z-10 flex items-center justify-center sec-padding px-8",children:[ye.jsxs("div",{className:"floating-avatars absolute inset-0",children:[ye.jsx("div",{className:"circle-avatar absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg",style:{top:"5%",left:"15%"},children:"CK"}),[1,2,3,4].map((u,h)=>ye.jsx("img",{className:`circle-avatar absolute w-12 h-12 rounded-full cursor-pointer transform transition-all duration-500 hover:scale-125 hover:shadow-xl hover:z-20 ${t?"scale-110 animate-pulse":""}`,src:r[u].image,onClick:()=>o(u),alt:"",style:h===0?{top:"15%",left:"25%"}:h===1?{top:"35%",left:"30%"}:h===2?{top:"15%",right:"25%"}:{top:"5%",right:"15%"}},u)),ye.jsx("div",{className:"circle-avatar absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg",style:{top:"35%",left:"17%"},children:"JB"}),ye.jsx("div",{className:"circle-avatar absolute w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg",style:{top:"35%",right:"30%"},children:"HT"}),ye.jsx("div",{className:"circle-avatar absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-700 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg",style:{top:"35%",right:"17%"},children:"JB"})]}),ye.jsxs("div",{className:`center-profile text-center max-w-2xl transition-all duration-500 ${t?"transform scale-95 opacity-70":"transform scale-100 opacity-100"}`,children:[ye.jsx("div",{className:"relative mb-8",children:ye.jsx("img",{src:r[0].image,alt:"user",className:`center-image w-32 h-32 rounded-full mx-auto shadow-2xl transition-all duration-500 ${t?"transform scale-90 blur-sm":"transform scale-100 blur-0"}`})}),ye.jsxs("div",{className:`stars transition-all duration-300 ${t?"opacity-50":"opacity-100"}`,children:[Array.from({length:r[0].rating},(u,h)=>ye.jsx("span",{className:"fc-secondary animate-pulse",style:{animationDelay:`${h*.1}s`},children:"★"},h)),Array.from({length:5-r[0].rating},(u,h)=>ye.jsx("span",{className:"fc-primary",children:"☆"},h))]}),ye.jsx("h3",{className:`text-[20px] fc-primary font-bold transition-all duration-500 ${t?"transform translate-y-4 opacity-0":"transform translate-y-0 opacity-100"}`,children:r[0].name}),ye.jsx("p",{className:`text-[16px] fc-primary leading-relaxed mb-8 transition-all duration-500 ${t?"transform translate-y-4 opacity-0":"transform translate-y-0 opacity-100"}`,style:{transitionDelay:"0.1s"},children:r[0].title}),r[0].subtitle&&ye.jsx("p",{className:`subtitle fc-primary opacity-80 transition-all duration-500 ${t?"transform translate-y-4 opacity-0":"transform translate-y-0 opacity-80"}`,style:{transitionDelay:"0.2s"},children:r[0].subtitle}),ye.jsx("div",{className:`dots flex justify-center space-x-2 mt-8 transition-all duration-300 ${t?"opacity-50":"opacity-100"}`,children:a.map((u,h)=>ye.jsx("span",{className:`dot w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${h===c()?"bg-[#91A7BA] scale-125 border-testi":"bg-[#91A7BA] hover:bg-gray-400 hover:scale-110"}`,onClick:()=>l(h)},h))})]})]}),ye.jsx("style",{jsx:!0,children:`
        .floating-avatars img:hover {
          filter: brightness(1.2);
        }

        .stars span {
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .stars span:hover {
          transform: scale(1.2);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .circle-avatar {
          animation: float 6s ease-in-out infinite;
        }

        /* Stagger the float animation for different avatars */
        .circle-avatar:nth-child(2) { animation-delay: -1s; }
        .circle-avatar:nth-child(3) { animation-delay: -2s; }
        .circle-avatar:nth-child(4) { animation-delay: -3s; }
        .circle-avatar:nth-child(5) { animation-delay: -4s; }
        .circle-avatar:nth-child(6) { animation-delay: -5s; }
      `})]})}const Nv=()=>ye.jsx("div",{className:"container-fluid relative",children:ye.jsxs("div",{className:"sec-padding pb-4",children:[ye.jsx("h2",{className:"text-[30px] mb-6 fc-primary",children:"We Offer Smart Tools for Strategic Growth"}),ye.jsx("hr",{className:"border-white mb-8"}),ye.jsx("div",{className:"relative",children:ye.jsxs(eu,{modules:[Ev,tu],pagination:{clickable:!0,el:".swiper-pagination-custom"},autoplay:{delay:4e3,disableOnInteraction:!1},speed:1e3,spaceBetween:30,slidesPerView:1,className:"w-full custom-swiper",children:[[1,2,3].map((i,e)=>ye.jsx(nu,{children:ye.jsxs("div",{className:"flex flex-col md:flex-row",children:[ye.jsx("div",{className:"md:w-5/12 w-full",children:ye.jsx("img",{src:"/images/slider.png",alt:"Students in a smart classroom",className:"w-full h-[500px] object-cover"})}),ye.jsxs("div",{className:"md:w-7/12 w-full flex flex-col justify-between pt-4 pl-4 pb-0",children:[ye.jsxs("div",{children:[ye.jsx("h3",{className:"text-[28px] font-light fc-secondary mb-2",children:"Eduman"}),ye.jsx("p",{className:"text-[18px] fc-primary mb-2",children:"For Control, Clarity, & Campus-Wide Confidence"}),ye.jsx("p",{className:"text-[18px] fc-primary mb-2",children:"Eduman is a cloud-based, SaaS (Software as a Service) system that simplifies the academic, administrative, and communication workflows for modern schools."})]}),ye.jsxs("button",{className:"group text-left text-[18px] fc-primary mb-2 flex items-center",children:[ye.jsx("span",{className:"inline-block border-b-2 border-transparent group-hover:border-current transition-all duration-200",children:"Click to Explore"}),ye.jsx("span",{className:"ml-3 fc-secondary transform transition-transform duration-200 group-hover:scale-125",children:"→"})]}),ye.jsxs("div",{className:"flex items-end justify-between",children:[ye.jsx("a",{href:"#",className:"inline-block text-left text-[18px] fc-secondary font-light border-b-2 border-transparent hover:border-current transition-all duration-200",children:"View All Products"}),ye.jsx("img",{src:"/images/slider2.png",alt:"Roundabout",className:"w-[50%] h-auto rounded"})]})]})]})},e)),ye.jsx("div",{className:"swiper-pagination-custom absolute flex flex-col gap-2 z-10 align-items-end"})]})}),ye.jsx("hr",{className:"border-white mb-8"})]})});export{jd as D,Dv as G,Cv as P,Lv as R,Nv as S,Uv as T,Ge as V,Iv as W,Rv as a,Pv as b,Ct as c,Wd as d,wv as e};
