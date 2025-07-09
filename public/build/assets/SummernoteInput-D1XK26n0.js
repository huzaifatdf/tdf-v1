import{r as o,j as e,R as A}from"./app-DbwgdvnC.js";import{B as b}from"./breadcrumb-DC2UZjpG.js";const k=new Set,E=(s,y="script")=>new Promise((f,x)=>{if(k.has(s)){f();return}const n=y==="script"?document.createElement("script"):document.createElement("link");y==="script"?(n.src=s,n.onload=()=>{k.add(s),f()},n.onerror=x):(n.rel="stylesheet",n.href=s,n.onload=()=>{k.add(s),f()},n.onerror=x),document.head.appendChild(n)}),I=A.memo(({value:s,onChange:y,placeholder:f,height:x=200})=>{const n=o.useRef(null),[g,z]=o.useState(s||""),[c,m]=o.useState(!1),i=o.useCallback(t=>{const a=t.target.innerHTML;z(a),y(a)},[y]),r=o.useCallback(t=>{var a,p;if(t.ctrlKey||t.metaKey)switch(t.key){case"b":t.preventDefault(),document.execCommand("bold");break;case"i":t.preventDefault(),document.execCommand("italic");break;case"u":t.preventDefault(),document.execCommand("underline");break}if(t.key==="Enter"){const d=window.getSelection();if(d.rangeCount>0){const w=d.getRangeAt(0).commonAncestorContainer;if(w.nodeType===Node.TEXT_NODE?(a=w.parentElement)==null?void 0:a.closest("li"):(p=w.closest)==null?void 0:p.call(w,"li"))return}}},[]),l=o.useCallback((t,a=null)=>{var w;const p=n.current;if(!p)return;p.focus();const d=window.getSelection();let N=null;if(d.rangeCount>0&&(N=d.getRangeAt(0)),t==="insertOrderedList"||t==="insertUnorderedList"){const h=((w=d.anchorNode)==null?void 0:w.nodeType)===Node.TEXT_NODE?d.anchorNode.parentElement:d.anchorNode,j=h==null?void 0:h.closest("ol, ul");if(h==null||h.closest("li"),j){const $=j.tagName.toLowerCase()==="ol",R=t==="insertOrderedList";if($===R)document.execCommand(t,!1,null);else{const D=R?"ol":"ul",S=document.createElement(D);if(Array.from(j.children).forEach(L=>{S.appendChild(L.cloneNode(!0))}),j.parentNode.replaceChild(S,j),N)try{d.removeAllRanges(),d.addRange(N)}catch{const C=document.createRange();C.selectNodeContents(p),C.collapse(!1),d.removeAllRanges(),d.addRange(C)}const B=new Event("input",{bubbles:!0});p.dispatchEvent(B);return}}else document.execCommand(t,!1,null)}else document.execCommand(t,!1,a);setTimeout(()=>{p.focus();const h=new Event("input",{bubbles:!0});p.dispatchEvent(h)},10)},[]),u=o.useCallback(()=>{m(!0)},[]),v=o.useCallback(()=>{m(!1)},[]);return o.useEffect(()=>{if(n.current&&g!==n.current.innerHTML){const t=window.getSelection(),a=t.rangeCount>0?t.getRangeAt(0):null;if(n.current.innerHTML=g,a&&n.current.contains(a.commonAncestorContainer))try{t.removeAllRanges(),t.addRange(a)}catch{const d=document.createRange();d.selectNodeContents(n.current),d.collapse(!1),t.removeAllRanges(),t.addRange(d)}}},[g]),e.jsxs("div",{className:"border rounded-md overflow-hidden",children:[e.jsxs("div",{className:"border-b p-2 bg-gray-50 flex gap-1 flex-wrap",children:[e.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:()=>l("bold"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Bold (Ctrl+B)",children:e.jsx("strong",{children:"B"})}),e.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:()=>l("italic"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Italic (Ctrl+I)",children:e.jsx("em",{children:"I"})}),e.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:()=>l("underline"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Underline (Ctrl+U)",children:e.jsx("u",{children:"U"})}),e.jsx("div",{className:"w-px bg-gray-300 mx-1"}),e.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:()=>l("insertUnorderedList"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Bullet List",children:e.jsx("span",{className:"text-lg leading-none",children:"•"})}),e.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:()=>l("insertOrderedList"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Numbered List",children:e.jsx("span",{className:"text-sm font-mono",children:"1."})}),e.jsx("div",{className:"w-px bg-gray-300 mx-1"}),e.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:()=>{const t=prompt("Enter URL:");t&&l("createLink",t)},className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Insert Link",children:"🔗"}),e.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:()=>l("removeFormat"),className:"px-2 py-1 text-xs h-8 hover:bg-gray-200",title:"Clear Formatting",children:"✕"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{ref:n,contentEditable:!0,onInput:i,onKeyDown:r,onFocus:u,onBlur:v,className:"p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",style:{minHeight:`${x}px`,wordBreak:"break-word",lineHeight:"1.5"},dangerouslySetInnerHTML:{__html:g},suppressContentEditableWarning:!0}),!g&&!c&&e.jsx("div",{className:"absolute top-3 left-3 pointer-events-none text-gray-400 select-none",style:{lineHeight:"1.5"},children:f||"Enter content..."})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})});I.displayName="SimpleRichTextEditor";const T=A.memo(({value:s,onChange:y,placeholder:f,height:x=200})=>{const n=o.useRef(null),[g,z]=o.useState(!1),c=o.useRef(null),m=o.useRef(!0);return o.useEffect(()=>{if(!g||!n.current||!window.$||!window.$.fn.summernote)return;const i=window.$(n.current);if(c.current){s!==i.summernote("code")&&i.summernote("code",s||"");return}return i.summernote({placeholder:f||"Enter content...",tabsize:2,height:x,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["fontname",["fontname"]],["fontsize",["fontsize"]],["color",["color"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["fullscreen","codeview","help"]]],fontSizes:["8","9","10","11","12","14","16","18","20","22","24","26","28","30","32","36","48","64","72"],fontSizeUnits:["px","pt"],styleTags:["p",{title:"Blockquote",tag:"blockquote",className:"blockquote",value:"blockquote"},"pre","h1","h2","h3","h4","h5","h6"],callbacks:{onChange:r=>{m.current&&y(r)},onInit:function(){s&&m.current&&i.summernote("code",s);const r=i.next(".note-editor").find(".note-toolbar");r.find('[data-name="ul"]').off("click").on("click",function(u){u.preventDefault(),i.summernote("editor.insertUnorderedList")}),r.find('[data-name="ol"]').off("click").on("click",function(u){u.preventDefault(),i.summernote("editor.insertOrderedList")});const l=r.find(".note-fontsize .dropdown-menu");l.length&&l.css({"max-height":"200px","overflow-y":"auto"})},onKeydown:function(r){var l,u;if(r.keyCode===13){const v=window.getSelection();if(v.rangeCount>0){const a=v.getRangeAt(0).commonAncestorContainer,p=a.nodeType===Node.TEXT_NODE?(l=a.parentElement)==null?void 0:l.closest("li"):(u=a.closest)==null?void 0:u.call(a,"li");if(p&&p.textContent.trim()==="")return!0}}return!0}}}),c.current=i,()=>{if(c.current&&c.current.summernote){try{c.current.summernote("destroy")}catch(r){console.error("Error destroying Summernote:",r)}c.current=null}}},[g,x,f]),o.useEffect(()=>{c.current&&s!==c.current.summernote("code")&&c.current.summernote("code",s||"")},[s]),o.useEffect(()=>{const i=()=>window.$&&window.$.fn.summernote?(z(!0),!0):!1;if(!i()){const r=setInterval(()=>{i()&&clearInterval(r)},100);return()=>{clearInterval(r),m.current=!1}}},[]),g?e.jsxs("div",{className:"summernote-wrapper",children:[e.jsx("textarea",{ref:n,className:"form-control",style:{display:"none"},defaultValue:s||""}),e.jsx("style",{jsx:!0,global:!0,children:`
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

        /* Enhanced font size dropdown styling */
        .note-fontsize .dropdown-menu {
          max-height: 200px;
          overflow-y: auto;
          min-width: 80px;
        }

        .note-fontsize .dropdown-menu li a {
          padding: 4px 12px;
          font-size: 12px;
          line-height: 1.4;
        }

        /* Font size preview in dropdown */
        .note-fontsize .dropdown-menu li[data-value="8"] a { font-size: 8px !important; }
        .note-fontsize .dropdown-menu li[data-value="9"] a { font-size: 9px !important; }
        .note-fontsize .dropdown-menu li[data-value="10"] a { font-size: 10px !important; }
        .note-fontsize .dropdown-menu li[data-value="11"] a { font-size: 11px !important; }
        .note-fontsize .dropdown-menu li[data-value="12"] a { font-size: 12px !important; }
        .note-fontsize .dropdown-menu li[data-value="14"] a { font-size: 14px !important; }
        .note-fontsize .dropdown-menu li[data-value="16"] a { font-size: 16px !important; }
        .note-fontsize .dropdown-menu li[data-value="18"] a { font-size: 18px !important; }
        .note-fontsize .dropdown-menu li[data-value="20"] a { font-size: 20px !important; }
        .note-fontsize .dropdown-menu li[data-value="22"] a { font-size: 22px !important; }
        .note-fontsize .dropdown-menu li[data-value="24"] a { font-size: 24px !important; }
        .note-fontsize .dropdown-menu li[data-value="26"] a { font-size: 26px !important; }
        .note-fontsize .dropdown-menu li[data-value="28"] a { font-size: 28px !important; }
        .note-fontsize .dropdown-menu li[data-value="30"] a { font-size: 30px !important; }
        .note-fontsize .dropdown-menu li[data-value="32"] a { font-size: 32px !important; }
        .note-fontsize .dropdown-menu li[data-value="36"] a { font-size: 36px !important; }
        .note-fontsize .dropdown-menu li[data-value="48"] a { font-size: 48px !important; }
        .note-fontsize .dropdown-menu li[data-value="64"] a { font-size: 64px !important; }
        .note-fontsize .dropdown-menu li[data-value="72"] a { font-size: 72px !important; }
      `})]}):e.jsxs("div",{className:"border rounded-md p-4 bg-gray-50 flex items-center justify-center",style:{height:`${x+40}px`},children:[e.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Loading advanced editor..."})]})});T.displayName="AdvancedSummernoteEditor";const O=({value:s="",onChange:y,placeholder:f="Enter content...",height:x=200,className:n="",disabled:g=!1,showToggle:z=!0,defaultMode:c="simple"})=>{const[m,i]=o.useState(c),[r,l]=o.useState(!1),u=o.useRef(!1);o.useEffect(()=>{window.$&&window.$.fn.summernote&&(u.current=!0)},[]);const v=o.useCallback(async()=>{if(!(r||u.current)){l(!0);try{window.jQuery||await E("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"),await Promise.all([E("https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.css","link"),E("https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.js")]),u.current=!0,i("advanced")}catch(a){console.error("Failed to load Summernote:",a),i("simple")}finally{l(!1)}}},[r]),t=o.useCallback(()=>{m==="simple"?u.current?i("advanced"):v():i("simple")},[m,v]);return g?e.jsx("div",{className:`border rounded-md p-3 bg-gray-50 ${n}`,style:{minHeight:`${x}px`},dangerouslySetInnerHTML:{__html:s||`<span class="text-gray-400">${f}</span>`}}):e.jsxs("div",{className:`summernote-input-wrapper ${n}`,children:[z&&e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsxs("span",{className:"text-xs text-gray-500",children:["Editor: ",m==="simple"?"Simple":"Advanced",m==="advanced"&&e.jsx("span",{className:"text-green-600 ml-1",children:"• Font Size Available"})]}),e.jsx(b,{type:"button",variant:"ghost",size:"sm",onClick:t,disabled:r,className:"text-xs h-6 px-2",children:r?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"animate-spin rounded-full h-3 w-3 border-b border-current mr-1"}),"Loading..."]}):`Switch to ${m==="simple"?"Advanced":"Simple"}`})]}),m==="simple"?e.jsx(I,{value:s,onChange:y,placeholder:f,height:x}):e.jsx(T,{value:s,onChange:y,placeholder:f,height:x})]})};export{O as S};
