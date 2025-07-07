import{b as Q,g as V,J as Y,R as W,d as F,j as i}from"./app-BgsCCkFb.js";var b={},B;function ee(){if(B)return b;B=1;function p(n){if(typeof window>"u")return;const u=document.createElement("style");return u.setAttribute("type","text/css"),u.innerHTML=n,document.head.appendChild(u),n}Object.defineProperty(b,"__esModule",{value:!0});var e=Q();function j(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var t=j(e);p(`.rfm-marquee-container {
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
}`);const s=e.forwardRef(function({style:u={},className:I="",autoFill:f=!1,play:m=!0,pauseOnHover:E=!1,pauseOnClick:q=!1,direction:r="left",speed:v=50,delay:$=0,loop:N=0,gradient:L=!1,gradientColor:_="white",gradientWidth:y=200,onFinish:U,onCycleComplete:X,onMount:k,children:g},J){const[R,P]=e.useState(0),[x,T]=e.useState(0),[w,O]=e.useState(1),[M,Z]=e.useState(!1),G=e.useRef(null),o=J||G,d=e.useRef(null),h=e.useCallback(()=>{if(d.current&&o.current){const a=o.current.getBoundingClientRect(),S=d.current.getBoundingClientRect();let l=a.width,c=S.width;(r==="up"||r==="down")&&(l=a.height,c=S.height),O(f&&l&&c&&c<l?Math.ceil(l/c):1),P(l),T(c)}},[f,o,r]);e.useEffect(()=>{if(M&&(h(),d.current&&o.current)){const a=new ResizeObserver(()=>h());return a.observe(o.current),a.observe(d.current),()=>{a&&a.disconnect()}}},[h,o,M]),e.useEffect(()=>{h()},[h,g]),e.useEffect(()=>{Z(!0)},[]),e.useEffect(()=>{typeof k=="function"&&k()},[]);const z=e.useMemo(()=>f?x*w/v:x<R?R/v:x/v,[f,R,x,w,v]),H=e.useMemo(()=>Object.assign(Object.assign({},u),{"--pause-on-hover":!m||E?"paused":"running","--pause-on-click":!m||E&&!q||q?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[u,m,E,q,r]),K=e.useMemo(()=>({"--gradient-color":_,"--gradient-width":typeof y=="number"?`${y}px`:y}),[_,y]),A=e.useMemo(()=>({"--play":m?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${z}s`,"--delay":`${$}s`,"--iteration-count":N?`${N}`:"infinite","--min-width":f?"auto":"100%"}),[m,r,z,$,N,f]),C=e.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),D=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((S,l)=>t.default.createElement(e.Fragment,{key:l},e.Children.map(g,c=>t.default.createElement("div",{style:C,className:"rfm-child"},c)))),[C,g]);return M?t.default.createElement("div",{ref:o,style:H,className:"rfm-marquee-container "+I},L&&t.default.createElement("div",{style:K,className:"rfm-overlay"}),t.default.createElement("div",{className:"rfm-marquee",style:A,onAnimationIteration:X,onAnimationEnd:U},t.default.createElement("div",{className:"rfm-initial-child-container",ref:d},e.Children.map(g,a=>t.default.createElement("div",{style:C,className:"rfm-child"},a))),D(w-1)),t.default.createElement("div",{className:"rfm-marquee",style:A},D(w))):null});return b.default=s,b}var te=ee();const ne=V(te);function ae(){const{appUrl:p}=Y().props,[e,j]=W.useState([]);return W.useEffect(()=>{F.get("/api/v1/ourclient").then(t=>{const s=t.data;j(s)}).catch(t=>{console.error(t)})},[]),i.jsx("div",{className:"pb-4",children:i.jsxs("div",{className:"container-fluid relative",children:[i.jsx("p",{className:"text-[30px] mb-6 fc-secondary",children:"Our Clients"}),i.jsx("hr",{className:"border-white mb-8"}),i.jsx("div",{className:"space-y-12",children:i.jsx("div",{className:"overflow-hidden pb-5 mt-5",children:i.jsx(ne,{gradient:!1,speed:100,direction:"right",pauseOnHover:!0,children:e.map((t,s)=>i.jsxs("div",{className:"mx-6 flex items-center justify-center h-20 w-32 group relative",children:[i.jsx("img",{src:`${p}/${t.image}`,alt:t.name||`Client ${s+1}`,className:"max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-0",onError:n=>{n.target.style.display="none"}}),t.coloredimage&&i.jsx("img",{src:`${p}/${t.coloredimage}`,alt:t.name||`Client ${s+1}`,className:"max-h-full max-w-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",onError:n=>{n.target.style.display="none"}})]},s))})})}),i.jsx("hr",{className:"border-white mb-8"})]})})}export{ae as default};
