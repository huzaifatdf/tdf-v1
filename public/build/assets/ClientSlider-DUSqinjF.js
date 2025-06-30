import{b as Q,g as V,q as Y,R as O,d as F,j as i}from"./app-GfA-xDby.js";var x={},L;function ee(){if(L)return x;L=1;function b(t){if(typeof window>"u")return;const a=document.createElement("style");return a.setAttribute("type","text/css"),a.innerHTML=t,document.head.appendChild(a),t}Object.defineProperty(x,"__esModule",{value:!0});var e=Q();function q(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var s=q(e);b(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const E=e.forwardRef(function({style:a={},className:h="",autoFill:o=!1,play:l=!0,pauseOnHover:R=!1,pauseOnClick:j=!1,direction:n="left",speed:v=50,delay:$=0,loop:M=0,gradient:B=!1,gradientColor:k="white",gradientWidth:p=200,onFinish:U,onCycleComplete:X,onMount:z,children:y},P){const[N,T]=e.useState(0),[g,Z]=e.useState(0),[w,A]=e.useState(1),[S,G]=e.useState(!1),H=e.useRef(null),c=P||H,d=e.useRef(null),m=e.useCallback(()=>{if(d.current&&c.current){const r=c.current.getBoundingClientRect(),_=d.current.getBoundingClientRect();let u=r.width,f=_.width;(n==="up"||n==="down")&&(u=r.height,f=_.height),A(o&&u&&f&&f<u?Math.ceil(u/f):1),T(u),Z(f)}},[o,c,n]);e.useEffect(()=>{if(S&&(m(),d.current&&c.current)){const r=new ResizeObserver(()=>m());return r.observe(c.current),r.observe(d.current),()=>{r&&r.disconnect()}}},[m,c,S]),e.useEffect(()=>{m()},[m,y]),e.useEffect(()=>{G(!0)},[]),e.useEffect(()=>{typeof z=="function"&&z()},[]);const D=e.useMemo(()=>o?g*w/v:g<N?N/v:g/v,[o,N,g,w,v]),J=e.useMemo(()=>Object.assign(Object.assign({},a),{"--pause-on-hover":!l||R?"paused":"running","--pause-on-click":!l||R&&!j||j?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[a,l,R,j,n]),K=e.useMemo(()=>({"--gradient-color":k,"--gradient-width":typeof p=="number"?`${p}px`:p}),[k,p]),W=e.useMemo(()=>({"--play":l?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${D}s`,"--delay":`${$}s`,"--iteration-count":M?`${M}`:"infinite","--min-width":o?"auto":"100%"}),[l,n,D,$,M,o]),C=e.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),I=e.useCallback(r=>[...Array(Number.isFinite(r)&&r>=0?r:0)].map((_,u)=>s.default.createElement(e.Fragment,{key:u},e.Children.map(y,f=>s.default.createElement("div",{style:C,className:"rfm-child"},f)))),[C,y]);return S?s.default.createElement("div",{ref:c,style:J,className:"rfm-marquee-container "+h},B&&s.default.createElement("div",{style:K,className:"rfm-overlay"}),s.default.createElement("div",{className:"rfm-marquee",style:W,onAnimationIteration:X,onAnimationEnd:U},s.default.createElement("div",{className:"rfm-initial-child-container",ref:d},e.Children.map(y,r=>s.default.createElement("div",{style:C,className:"rfm-child"},r))),I(w-1)),s.default.createElement("div",{className:"rfm-marquee",style:W},I(w))):null});return x.default=E,x}var te=ee();const ne=V(te);function ae(){const{appUrl:b}=Y().props,[e,q]=O.useState([]),[s,E]=O.useState([]);return O.useEffect(()=>{F.get("/api/v1/ourclient").then(t=>{const a=t.data,h=Math.ceil(a.length/2),o=a.slice(0,h),l=a.slice(h);q(o),E(l)}).catch(t=>{console.error(t)})},[]),i.jsx("div",{className:"pb-4",children:i.jsxs("div",{className:"container-fluid relative",children:[i.jsx("p",{className:"text-[30px] mb-6 fc-secondary",children:"Our Clients"}),i.jsx("hr",{class:"border-white mb-8"}),i.jsx("div",{className:"space-y-12",children:i.jsx("div",{className:"overflow-hidden  pb-5 mt-5",children:i.jsx(ne,{gradient:!1,speed:40,direction:"right",pauseOnHover:!1,children:e.map((t,a)=>i.jsx("img",{src:`${b}/${t.image}`,alt:t,className:"mx-6 h-25 object-contain grayscale hover:grayscale-0 transition duration-300"},a))})})}),i.jsx("hr",{class:"border-white mb-8"})]})})}export{ae as default};
