import{r as s,j as e,R as A}from"./app-DPjt5Uwz.js";import{B as w}from"./toast-BGPdqEOK.js";const E=new Set,R=(r,x="script")=>new Promise((u,p)=>{if(E.has(r)){u();return}const n=x==="script"?document.createElement("script"):document.createElement("link");x==="script"?(n.src=r,n.onload=()=>{E.add(r),u()},n.onerror=p):(n.rel="stylesheet",n.href=r,n.onload=()=>{E.add(r),u()},n.onerror=p),document.head.appendChild(n)}),T=A.memo(({value:r,onChange:x,placeholder:u,height:p=200})=>{const n=s.useRef(null),[g,j]=s.useState(r||""),[d,f]=s.useState(!1),l=s.useCallback(t=>{const o=t.target.innerHTML;j(o),x(o)},[x]),a=s.useCallback(t=>{var o,m;if(t.ctrlKey||t.metaKey)switch(t.key){case"b":t.preventDefault(),document.execCommand("bold");break;case"i":t.preventDefault(),document.execCommand("italic");break;case"u":t.preventDefault(),document.execCommand("underline");break}if(t.key==="Enter"){const c=window.getSelection();if(c.rangeCount>0){const b=c.getRangeAt(0).commonAncestorContainer;if(b.nodeType===Node.TEXT_NODE?(o=b.parentElement)==null?void 0:o.closest("li"):(m=b.closest)==null?void 0:m.call(b,"li"))return}}},[]),i=s.useCallback((t,o=null)=>{var b;const m=n.current;if(!m)return;m.focus();const c=window.getSelection();let C=null;if(c.rangeCount>0&&(C=c.getRangeAt(0)),t==="insertOrderedList"||t==="insertUnorderedList"){const h=((b=c.anchorNode)==null?void 0:b.nodeType)===Node.TEXT_NODE?c.anchorNode.parentElement:c.anchorNode,N=h==null?void 0:h.closest("ol, ul");if(h==null||h.closest("li"),N){const B=N.tagName.toLowerCase()==="ol",L=t==="insertOrderedList";if(B===L)document.execCommand(t,!1,null);else{const D=L?"ol":"ul",S=document.createElement(D);if(Array.from(N.children).forEach(I=>{S.appendChild(I.cloneNode(!0))}),N.parentNode.replaceChild(S,N),C)try{c.removeAllRanges(),c.addRange(C)}catch{const k=document.createRange();k.selectNodeContents(m),k.collapse(!1),c.removeAllRanges(),c.addRange(k)}const z=new Event("input",{bubbles:!0});m.dispatchEvent(z);return}}else document.execCommand(t,!1,null)}else document.execCommand(t,!1,o);setTimeout(()=>{m.focus();const h=new Event("input",{bubbles:!0});m.dispatchEvent(h)},10)},[]),y=s.useCallback(()=>{f(!0)},[]),v=s.useCallback(()=>{f(!1)},[]);return s.useEffect(()=>{if(n.current&&g!==n.current.innerHTML){const t=window.getSelection(),o=t.rangeCount>0?t.getRangeAt(0):null;if(n.current.innerHTML=g,o&&n.current.contains(o.commonAncestorContainer))try{t.removeAllRanges(),t.addRange(o)}catch{const c=document.createRange();c.selectNodeContents(n.current),c.collapse(!1),t.removeAllRanges(),t.addRange(c)}}},[g]),e.jsxs("div",{className:"border rounded-md overflow-hidden",children:[e.jsxs("div",{className:"border-b p-2 bg-gray-50 flex gap-1 flex-wrap",children:[e.jsx(w,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("bold"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Bold (Ctrl+B)",children:e.jsx("strong",{children:"B"})}),e.jsx(w,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("italic"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Italic (Ctrl+I)",children:e.jsx("em",{children:"I"})}),e.jsx(w,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("underline"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Underline (Ctrl+U)",children:e.jsx("u",{children:"U"})}),e.jsx("div",{className:"w-px bg-gray-300 mx-1"}),e.jsx(w,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("insertUnorderedList"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Bullet List",children:e.jsx("span",{className:"text-lg leading-none",children:"•"})}),e.jsx(w,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("insertOrderedList"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Numbered List",children:e.jsx("span",{className:"text-sm font-mono",children:"1."})}),e.jsx("div",{className:"w-px bg-gray-300 mx-1"}),e.jsx(w,{type:"button",variant:"ghost",size:"sm",onClick:()=>{const t=prompt("Enter URL:");t&&i("createLink",t)},className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Insert Link",children:"🔗"}),e.jsx(w,{type:"button",variant:"ghost",size:"sm",onClick:()=>i("removeFormat"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Clear Formatting",children:"✕"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{ref:n,contentEditable:!0,onInput:l,onKeyDown:a,onFocus:y,onBlur:v,className:"p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",style:{minHeight:`${p}px`,wordBreak:"break-word",lineHeight:"1.5"},dangerouslySetInnerHTML:{__html:g},suppressContentEditableWarning:!0}),!g&&!d&&e.jsx("div",{className:"absolute top-3 left-3 pointer-events-none text-gray-400 select-none",style:{lineHeight:"1.5"},children:u||"Enter content..."})]}),e.jsx("style",{jsx:!0,children:`
        .p-3 ol {
          list-style-type: decimal;
          margin-left: 1.5em;
          padding-left: 0.5em;
        }
        .p-3 ul {
          list-style-type: disc;
          margin-left: 1.5em;
          padding-left: 0.5em;
        }
        .p-3 li {
          margin: 0.25em 0;
          padding-left: 0.25em;
        }
        .p-3 ol ol {
          list-style-type: lower-alpha;
        }
        .p-3 ol ol ol {
          list-style-type: lower-roman;
        }
        .p-3 ul ul {
          list-style-type: circle;
        }
        .p-3 ul ul ul {
          list-style-type: square;
        }
      `})]})});T.displayName="SimpleRichTextEditor";const $=A.memo(({value:r,onChange:x,placeholder:u,height:p=200})=>{const n=s.useRef(null),[g,j]=s.useState(!1),d=s.useRef(null),f=s.useRef(!0);return s.useEffect(()=>{if(!g||!n.current||!window.$||!window.$.fn.summernote)return;const l=window.$(n.current);if(d.current){r!==l.summernote("code")&&l.summernote("code",r||"");return}return l.summernote({placeholder:u||"Enter content...",tabsize:2,height:p,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],styleTags:["p",{title:"Blockquote",tag:"blockquote",className:"blockquote",value:"blockquote"},"pre","h1","h2","h3","h4","h5","h6"],callbacks:{onChange:a=>{f.current&&x(a)},onInit:function(){r&&f.current&&l.summernote("code",r);const a=l.next(".note-editor").find(".note-toolbar");a.find('[data-name="ul"]').off("click").on("click",function(i){i.preventDefault(),l.summernote("editor.insertUnorderedList")}),a.find('[data-name="ol"]').off("click").on("click",function(i){i.preventDefault(),l.summernote("editor.insertOrderedList")})},onKeydown:function(a){var i,y;if(a.keyCode===13){const v=window.getSelection();if(v.rangeCount>0){const o=v.getRangeAt(0).commonAncestorContainer,m=o.nodeType===Node.TEXT_NODE?(i=o.parentElement)==null?void 0:i.closest("li"):(y=o.closest)==null?void 0:y.call(o,"li");if(m&&m.textContent.trim()==="")return!0}}return!0}}}),d.current=l,()=>{if(d.current&&d.current.summernote){try{d.current.summernote("destroy")}catch(a){console.error("Error destroying Summernote:",a)}d.current=null}}},[g,p,u]),s.useEffect(()=>{d.current&&r!==d.current.summernote("code")&&d.current.summernote("code",r||"")},[r]),s.useEffect(()=>{const l=()=>window.$&&window.$.fn.summernote?(j(!0),!0):!1;if(!l()){const a=setInterval(()=>{l()&&clearInterval(a)},100);return()=>{clearInterval(a),f.current=!1}}},[]),g?e.jsxs("div",{className:"summernote-wrapper",children:[e.jsx("textarea",{ref:n,className:"form-control",style:{display:"none"},defaultValue:r||""}),e.jsx("style",{jsx:!0,global:!0,children:`
        .note-editable ol {
          list-style-type: decimal !important;
          margin-left: 1.5em !important;
          padding-left: 0.5em !important;
        }
        .note-editable ul {
          list-style-type: disc !important;
          margin-left: 1.5em !important;
          padding-left: 0.5em !important;
        }
        .note-editable li {
          margin: 0.25em 0 !important;
          padding-left: 0.25em !important;
          display: list-item !important;
        }
        .note-editable ol ol {
          list-style-type: lower-alpha !important;
        }
        .note-editable ol ol ol {
          list-style-type: lower-roman !important;
        }
        .note-editable ul ul {
          list-style-type: circle !important;
        }
        .note-editable ul ul ul {
          list-style-type: square !important;
        }
      `})]}):e.jsxs("div",{className:"border rounded-md p-4 bg-gray-50 flex items-center justify-center",style:{height:`${p+40}px`},children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Loading advanced editor..."})]})});$.displayName="AdvancedSummernoteEditor";const q=({value:r="",onChange:x,placeholder:u="Enter content...",height:p=200,className:n="",disabled:g=!1,showToggle:j=!0,defaultMode:d="simple"})=>{const[f,l]=s.useState(d),[a,i]=s.useState(!1),y=s.useRef(!1);s.useEffect(()=>{window.$&&window.$.fn.summernote&&(y.current=!0)},[]);const v=s.useCallback(async()=>{if(!(a||y.current)){i(!0);try{window.jQuery||await R("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"),await Promise.all([R("https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.css","link"),R("https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.js")]),y.current=!0,l("advanced")}catch(o){console.error("Failed to load Summernote:",o),l("simple")}finally{i(!1)}}},[a]),t=s.useCallback(()=>{f==="simple"?y.current?l("advanced"):v():l("simple")},[f,v]);return g?e.jsx("div",{className:`border rounded-md p-3 bg-gray-50 ${n}`,style:{minHeight:`${p}px`},dangerouslySetInnerHTML:{__html:r||`<span class="text-gray-400">${u}</span>`}}):e.jsxs("div",{className:`summernote-input-wrapper ${n}`,children:[j&&e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("span",{className:"text-xs text-gray-500",children:["Editor: ",f==="simple"?"Simple":"Advanced"]}),e.jsx(w,{type:"button",variant:"ghost",size:"sm",onClick:t,disabled:a,className:"text-xs h-6 px-2",children:a?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b border-current mr-1"}),"Loading..."]}):`Switch to ${f==="simple"?"Advanced":"Simple"}`})]}),f==="simple"?e.jsx(T,{value:r,onChange:x,placeholder:u,height:p}):e.jsx($,{value:r,onChange:x,placeholder:u,height:p})]})};export{q as S};
