import{b as Q,g as V,J as Y,R as _,d as F,j as s}from"./app-CkUBYloB.js";var b={},L;function ee(){if(L)return b;L=1;function v(t){if(typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=t,document.head.appendChild(n),t}Object.defineProperty(b,"__esModule",{value:!0});var e=Q();function j(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var i=j(e);v(`.rfm-marquee-container {
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
}`);const q=e.forwardRef(function({style:n={},className:f="",autoFill:o=!1,play:l=!0,pauseOnHover:E=!1,pauseOnClick:N=!1,direction:r="left",speed:p=50,delay:O=0,loop:R=0,gradient:B=!1,gradientColor:k="white",gradientWidth:g=200,onFinish:U,onCycleComplete:X,onMount:z,children:y},J){const[M,P]=e.useState(0),[x,T]=e.useState(0),[w,A]=e.useState(1),[S,Z]=e.useState(!1),G=e.useRef(null),c=J||G,d=e.useRef(null),h=e.useCallback(()=>{if(d.current&&c.current){const a=c.current.getBoundingClientRect(),$=d.current.getBoundingClientRect();let u=a.width,m=$.width;(r==="up"||r==="down")&&(u=a.height,m=$.height),A(o&&u&&m&&m<u?Math.ceil(u/m):1),P(u),T(m)}},[o,c,r]);e.useEffect(()=>{if(S&&(h(),d.current&&c.current)){const a=new ResizeObserver(()=>h());return a.observe(c.current),a.observe(d.current),()=>{a&&a.disconnect()}}},[h,c,S]),e.useEffect(()=>{h()},[h,y]),e.useEffect(()=>{Z(!0)},[]),e.useEffect(()=>{typeof z=="function"&&z()},[]);const D=e.useMemo(()=>o?x*w/p:x<M?M/p:x/p,[o,M,x,w,p]),H=e.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||E?"paused":"running","--pause-on-click":!l||E&&!N||N?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[n,l,E,N,r]),K=e.useMemo(()=>({"--gradient-color":k,"--gradient-width":typeof g=="number"?`${g}px`:g}),[k,g]),W=e.useMemo(()=>({"--play":l?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${D}s`,"--delay":`${O}s`,"--iteration-count":R?`${R}`:"infinite","--min-width":o?"auto":"100%"}),[l,r,D,O,R,o]),C=e.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),I=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map(($,u)=>i.default.createElement(e.Fragment,{key:u},e.Children.map(y,m=>i.default.createElement("div",{style:C,className:"rfm-child"},m)))),[C,y]);return S?i.default.createElement("div",{ref:c,style:H,className:"rfm-marquee-container "+f},B&&i.default.createElement("div",{style:K,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:W,onAnimationIteration:X,onAnimationEnd:U},i.default.createElement("div",{className:"rfm-initial-child-container",ref:d},e.Children.map(y,a=>i.default.createElement("div",{style:C,className:"rfm-child"},a))),I(w-1)),i.default.createElement("div",{className:"rfm-marquee",style:W},I(w))):null});return b.default=q,b}var te=ee();const ne=V(te);function ae(){const{appUrl:v}=Y().props,[e,j]=_.useState([]),[i,q]=_.useState([]);return _.useEffect(()=>{F.get("/api/v1/ourclient").then(t=>{const n=t.data,f=Math.ceil(n.length/2),o=n.slice(0,f),l=n.slice(f);j(o),q(l)}).catch(t=>{console.error(t)})},[]),s.jsx("div",{className:"pb-4",children:s.jsxs("div",{className:"container-fluid relative",children:[s.jsx("p",{className:"text-[30px] mb-6 fc-secondary",children:"Our Clients"}),s.jsx("hr",{className:"border-white mb-8"}),s.jsx("div",{className:"space-y-12",children:s.jsx("div",{className:"overflow-hidden pb-5 mt-5",children:s.jsx(ne,{gradient:!1,speed:100,direction:"right",pauseOnHover:!0,children:e.map((t,n)=>s.jsxs("div",{className:"box client-logos mx-6 flex items-center justify-center h-20 w-32",children:[s.jsx("img",{src:`${v}/${t.image}`,alt:t.name||`Client ${n+1}`,className:"hide-img max-h-full max-w-full object-contain transition duration-300",onError:f=>{f.target.style.display="none"}}),s.jsx("img",{src:`${v}/${t.coloredimage}`,alt:t.name||`Client ${n+1}`,className:"show-img max-h-full max-w-full object-contain transition duration-300"})]},n))})})}),s.jsx("hr",{className:"border-white mb-8"})]})})}export{ae as default};
