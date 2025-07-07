import{b as Q,g as V,J as Y,R as $,d as F,j as s}from"./app-qJx-n9sh.js";var b={},L;function ee(){if(L)return b;L=1;function p(t){if(typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=t,document.head.appendChild(n),t}Object.defineProperty(b,"__esModule",{value:!0});var e=Q();function j(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var i=j(e);p(`.rfm-marquee-container {
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
}`);const E=e.forwardRef(function({style:n={},className:o="",autoFill:l=!1,play:c=!0,pauseOnHover:q=!1,pauseOnClick:N=!1,direction:r="left",speed:v=50,delay:O=0,loop:R=0,gradient:B=!1,gradientColor:k="white",gradientWidth:y=200,onFinish:U,onCycleComplete:X,onMount:z,children:g},J){const[M,P]=e.useState(0),[x,T]=e.useState(0),[w,A]=e.useState(1),[S,Z]=e.useState(!1),G=e.useRef(null),u=J||G,d=e.useRef(null),h=e.useCallback(()=>{if(d.current&&u.current){const a=u.current.getBoundingClientRect(),_=d.current.getBoundingClientRect();let f=a.width,m=_.width;(r==="up"||r==="down")&&(f=a.height,m=_.height),A(l&&f&&m&&m<f?Math.ceil(f/m):1),P(f),T(m)}},[l,u,r]);e.useEffect(()=>{if(S&&(h(),d.current&&u.current)){const a=new ResizeObserver(()=>h());return a.observe(u.current),a.observe(d.current),()=>{a&&a.disconnect()}}},[h,u,S]),e.useEffect(()=>{h()},[h,g]),e.useEffect(()=>{Z(!0)},[]),e.useEffect(()=>{typeof z=="function"&&z()},[]);const D=e.useMemo(()=>l?x*w/v:x<M?M/v:x/v,[l,M,x,w,v]),H=e.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!c||q?"paused":"running","--pause-on-click":!c||q&&!N||N?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[n,c,q,N,r]),K=e.useMemo(()=>({"--gradient-color":k,"--gradient-width":typeof y=="number"?`${y}px`:y}),[k,y]),W=e.useMemo(()=>({"--play":c?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${D}s`,"--delay":`${O}s`,"--iteration-count":R?`${R}`:"infinite","--min-width":l?"auto":"100%"}),[c,r,D,O,R,l]),C=e.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),I=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((_,f)=>i.default.createElement(e.Fragment,{key:f},e.Children.map(g,m=>i.default.createElement("div",{style:C,className:"rfm-child"},m)))),[C,g]);return S?i.default.createElement("div",{ref:u,style:H,className:"rfm-marquee-container "+o},B&&i.default.createElement("div",{style:K,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:W,onAnimationIteration:X,onAnimationEnd:U},i.default.createElement("div",{className:"rfm-initial-child-container",ref:d},e.Children.map(g,a=>i.default.createElement("div",{style:C,className:"rfm-child"},a))),I(w-1)),i.default.createElement("div",{className:"rfm-marquee",style:W},I(w))):null});return b.default=E,b}var te=ee();const ne=V(te);function ae(){const{appUrl:p}=Y().props,[e,j]=$.useState([]),[i,E]=$.useState([]);return $.useEffect(()=>{F.get("/api/v1/ourclient").then(t=>{const n=t.data,o=Math.ceil(n.length/2),l=n.slice(0,o),c=n.slice(o);j(l),E(c)}).catch(t=>{console.error(t)})},[]),s.jsx("div",{className:"pb-4",children:s.jsxs("div",{className:"container-fluid relative",children:[s.jsx("p",{className:"text-[30px] mb-6 fc-secondary",children:"Our Clients"}),s.jsx("hr",{className:"border-white mb-8"}),s.jsx("div",{className:"space-y-12",children:s.jsx("div",{className:"overflow-hidden pb-5 mt-5",children:s.jsx(ne,{gradient:!1,speed:100,direction:"right",pauseOnHover:!0,children:e.map((t,n)=>s.jsxs("div",{className:"mx-6 flex items-center justify-center h-20 w-32 group relative",children:[s.jsx("img",{src:`${p}/${t.image}`,alt:t.name||`Client ${n+1}`,className:"max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-0",onError:o=>{o.target.style.display="none"}}),t.colored_image&&s.jsx("img",{src:`${p}/${t.colored_image}`,alt:t.name||`Client ${n+1}`,className:"max-h-full max-w-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",onError:o=>{o.target.style.display="none"}})]},n))})})}),s.jsx("hr",{className:"border-white mb-8"})]})})}export{ae as default};
