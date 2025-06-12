import{a as V,g as Y,q as F,R as _,d as ee,j as s}from"./app-BvJgUZ4-.js";var b={},L;function te(){if(L)return b;L=1;function h(t){if(typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=t,document.head.appendChild(n),t}Object.defineProperty(b,"__esModule",{value:!0});var e=V();function j(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var i=j(e);h(`.rfm-marquee-container {
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
}`);const q=e.forwardRef(function({style:n={},className:v="",autoFill:o=!1,play:l=!0,pauseOnHover:E=!1,pauseOnClick:R=!1,direction:r="left",speed:p=50,delay:$=0,loop:N=0,gradient:U=!1,gradientColor:k="white",gradientWidth:g=200,onFinish:X,onCycleComplete:H,onMount:z,children:y},P){const[M,T]=e.useState(0),[x,Z]=e.useState(0),[w,A]=e.useState(1),[S,G]=e.useState(!1),J=e.useRef(null),c=P||J,f=e.useRef(null),m=e.useCallback(()=>{if(f.current&&c.current){const a=c.current.getBoundingClientRect(),O=f.current.getBoundingClientRect();let u=a.width,d=O.width;(r==="up"||r==="down")&&(u=a.height,d=O.height),A(o&&u&&d&&d<u?Math.ceil(u/d):1),T(u),Z(d)}},[o,c,r]);e.useEffect(()=>{if(S&&(m(),f.current&&c.current)){const a=new ResizeObserver(()=>m());return a.observe(c.current),a.observe(f.current),()=>{a&&a.disconnect()}}},[m,c,S]),e.useEffect(()=>{m()},[m,y]),e.useEffect(()=>{G(!0)},[]),e.useEffect(()=>{typeof z=="function"&&z()},[]);const D=e.useMemo(()=>o?x*w/p:x<M?M/p:x/p,[o,M,x,w,p]),K=e.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||E?"paused":"running","--pause-on-click":!l||E&&!R||R?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[n,l,E,R,r]),Q=e.useMemo(()=>({"--gradient-color":k,"--gradient-width":typeof g=="number"?`${g}px`:g}),[k,g]),W=e.useMemo(()=>({"--play":l?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${D}s`,"--delay":`${$}s`,"--iteration-count":N?`${N}`:"infinite","--min-width":o?"auto":"100%"}),[l,r,D,$,N,o]),C=e.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),I=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((O,u)=>i.default.createElement(e.Fragment,{key:u},e.Children.map(y,d=>i.default.createElement("div",{style:C,className:"rfm-child"},d)))),[C,y]);return S?i.default.createElement("div",{ref:c,style:K,className:"rfm-marquee-container "+v},U&&i.default.createElement("div",{style:Q,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:W,onAnimationIteration:H,onAnimationEnd:X},i.default.createElement("div",{className:"rfm-initial-child-container",ref:f},e.Children.map(y,a=>i.default.createElement("div",{style:C,className:"rfm-child"},a))),I(w-1)),i.default.createElement("div",{className:"rfm-marquee",style:W},I(w))):null});return b.default=q,b}var ne=te();const B=Y(ne);function ae(){const{appUrl:h}=F().props,[e,j]=_.useState([]),[i,q]=_.useState([]);return _.useEffect(()=>{ee.get("/api/v1/ourclient").then(t=>{const n=t.data,v=Math.ceil(n.length/2),o=n.slice(0,v),l=n.slice(v);j(o),q(l)}).catch(t=>{console.error(t)})},[]),s.jsx("div",{className:"pb-4",children:s.jsxs("div",{className:"container-fluid relative",children:[s.jsx("p",{className:"text-[20px] mb-8 fc-primary",children:"Our Clients"}),s.jsxs("div",{className:"space-y-12",children:[s.jsx("div",{className:"overflow-hidden  pb-5 mt-5",children:s.jsx(B,{gradient:!1,speed:40,direction:"right",pauseOnHover:!1,children:e.map((t,n)=>s.jsx("img",{src:`${h}/${t.image}`,alt:t,className:"mx-6 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"},n))})}),s.jsx("div",{className:"overflow-hidden  pb-5 mt-2",children:s.jsx(B,{gradient:!1,speed:40,direction:"left",pauseOnHover:!1,children:i.map((t,n)=>s.jsx("img",{src:`${h}/${t.image}`,alt:t,className:"mx-6 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"},n))})})]}),s.jsx("hr",{class:"border-white mb-8"})]})})}export{ae as default};
