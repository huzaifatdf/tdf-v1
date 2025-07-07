import{b as Q,g as V,J as Y,R as O,d as F,j as s}from"./app-Db-Klrcb.js";var w={},L;function ee(){if(L)return w;L=1;function b(t){if(typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=t,document.head.appendChild(n),t}Object.defineProperty(w,"__esModule",{value:!0});var e=Q();function j(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var i=j(e);b(`.rfm-marquee-container {
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
}`);const q=e.forwardRef(function({style:n={},className:d="",autoFill:o=!1,play:l=!0,pauseOnHover:E=!1,pauseOnClick:R=!1,direction:r="left",speed:v=50,delay:$=0,loop:N=0,gradient:B=!1,gradientColor:k="white",gradientWidth:p=200,onFinish:U,onCycleComplete:X,onMount:z,children:y},J){const[M,P]=e.useState(0),[g,T]=e.useState(0),[x,A]=e.useState(1),[S,Z]=e.useState(!1),G=e.useRef(null),c=J||G,m=e.useRef(null),h=e.useCallback(()=>{if(m.current&&c.current){const a=c.current.getBoundingClientRect(),_=m.current.getBoundingClientRect();let u=a.width,f=_.width;(r==="up"||r==="down")&&(u=a.height,f=_.height),A(o&&u&&f&&f<u?Math.ceil(u/f):1),P(u),T(f)}},[o,c,r]);e.useEffect(()=>{if(S&&(h(),m.current&&c.current)){const a=new ResizeObserver(()=>h());return a.observe(c.current),a.observe(m.current),()=>{a&&a.disconnect()}}},[h,c,S]),e.useEffect(()=>{h()},[h,y]),e.useEffect(()=>{Z(!0)},[]),e.useEffect(()=>{typeof z=="function"&&z()},[]);const D=e.useMemo(()=>o?g*x/v:g<M?M/v:g/v,[o,M,g,x,v]),H=e.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||E?"paused":"running","--pause-on-click":!l||E&&!R||R?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[n,l,E,R,r]),K=e.useMemo(()=>({"--gradient-color":k,"--gradient-width":typeof p=="number"?`${p}px`:p}),[k,p]),W=e.useMemo(()=>({"--play":l?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${D}s`,"--delay":`${$}s`,"--iteration-count":N?`${N}`:"infinite","--min-width":o?"auto":"100%"}),[l,r,D,$,N,o]),C=e.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),I=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((_,u)=>i.default.createElement(e.Fragment,{key:u},e.Children.map(y,f=>i.default.createElement("div",{style:C,className:"rfm-child"},f)))),[C,y]);return S?i.default.createElement("div",{ref:c,style:H,className:"rfm-marquee-container "+d},B&&i.default.createElement("div",{style:K,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:W,onAnimationIteration:X,onAnimationEnd:U},i.default.createElement("div",{className:"rfm-initial-child-container",ref:m},e.Children.map(y,a=>i.default.createElement("div",{style:C,className:"rfm-child"},a))),I(x-1)),i.default.createElement("div",{className:"rfm-marquee",style:W},I(x))):null});return w.default=q,w}var te=ee();const ne=V(te);function ae(){const{appUrl:b}=Y().props,[e,j]=O.useState([]),[i,q]=O.useState([]);return O.useEffect(()=>{F.get("/api/v1/ourclient").then(t=>{const n=t.data,d=Math.ceil(n.length/2),o=n.slice(0,d),l=n.slice(d);j(o),q(l)}).catch(t=>{console.error(t)})},[]),s.jsx("div",{className:"pb-4",children:s.jsxs("div",{className:"container-fluid relative",children:[s.jsx("p",{className:"text-[30px] mb-6 fc-secondary",children:"Our Clients"}),s.jsx("hr",{className:"border-white mb-8"}),s.jsx("div",{className:"space-y-12",children:s.jsx("div",{className:"overflow-hidden pb-5 mt-5",children:s.jsx(ne,{gradient:!1,speed:100,direction:"right",pauseOnHover:!0,children:e.map((t,n)=>s.jsx("div",{className:"box client-logos mx-6 flex items-center justify-center h-20 w-32",children:s.jsx("img",{src:`${b}/${t.image}`,alt:t.name||`Client ${n+1}`,className:"max-h-full max-w-full object-contain transition duration-300",onError:d=>{d.target.style.display="none"}})},n))})})}),s.jsx("hr",{className:"border-white mb-8"})]})})}export{ae as default};
