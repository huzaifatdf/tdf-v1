import{r as p,j as e,Q as P,S as j}from"./app-BKKrfPOM.js";import{A as R}from"./AuthenticatedLayout-Bv59O-pT.js";import{B as o,I as t}from"./breadcrumb-BWjFOHGP.js";import{T as h}from"./textarea-DUM0v6CZ.js";import{S as g,a as f,b,c as F,d as _}from"./select-CLmzDP0_.js";import{C as y,a as C,b as S,c as T}from"./card-CtA0jZqA.js";import{D as W,a as H,b as G,c as M,d as Q}from"./dialog-q8G-h7VS.js";import{L as r}from"./label-1mkR8CqC.js";import{S as U}from"./switch-B079F17d.js";import{T as Y,a as J,b as $,c as q}from"./tabs-DPfhAABc.js";import{F as K,a as X,b as c,E as v,c as Z}from"./formik.esm-bZhbRDwB.js";import{c as w,d as V,b as m}from"./index.esm-DefWCrKl.js";import{P as ee}from"./plus-DZ2bNOAt.js";import{G as se}from"./grip-vertical-BF3cQQzF.js";import{S as le}from"./settings-pHpwCvuK.js";import{T as ae}from"./trash-2-6vYW72ZX.js";import{E as ie}from"./eye-AUKqkiHm.js";import"./toast-sj-if5eX.js";import"./index-sJv-J0vs.js";import"./toaster-UeHU4vph.js";import"./index-DEGscCao.js";import"./chevron-down-Bhm0dQOe.js";const re=[{value:"text",label:"Text"},{value:"email",label:"Email"},{value:"number",label:"Number"},{value:"tel",label:"Telephone"},{value:"url",label:"URL"},{value:"textarea",label:"Textarea"},{value:"select",label:"Select Dropdown"},{value:"radio",label:"Radio Button"},{value:"checkbox",label:"Checkbox"},{value:"date",label:"Date"},{value:"file",label:"File Upload"},{value:"hidden",label:"Hidden Field"}],te=[{value:"full",label:"Full Width"},{value:"half",label:"Half Width"},{value:"third",label:"Third Width"}];function qe(){const[E,k]=p.useState("form-settings"),[D,x]=p.useState(null),[O,u]=p.useState(!1),L=w({name:m().required("Form name is required").min(2,"Name must be at least 2 characters"),slug:m().required("Slug is required").matches(/^[a-z0-9-]+$/,"Slug can only contain lowercase letters, numbers, and hyphens"),submit_button_text:m().required("Submit button text is required"),success_message:m().required("Success message is required"),fields:V().of(w({name:m().required("Field name is required"),label:m().required("Field label is required"),type:m().required("Field type is required")})).min(1,"At least one field is required")}),A=(a,{setSubmitting:l,resetForm:i})=>{!a.slug&&a.name&&(a.slug=a.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")),j.post(route("form.store"),a,{onSuccess:()=>{l(!1),i()},onError:s=>{l(!1),console.error("Form submission errors:",s)}})},I=(a,l="text")=>{const i={name:`field_${Date.now()}`,label:"New Field",type:l,placeholder:"",default_value:"",help_text:"",required:!1,max_length:null,min_length:null,options:[],sort_order:a.form.values.fields.length,width:"full"};a.push(i),x(a.form.values.fields.length),u(!0)},z=(a,l)=>{a.remove(l)},B=({field:a,index:l,setFieldValue:i})=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:`fields.${l}.name`,children:"Field Name"}),e.jsx(t,{id:`fields.${l}.name`,value:a.name,onChange:s=>i(`fields.${l}.name`,s.target.value),placeholder:"field_name"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:`fields.${l}.label`,children:"Field Label"}),e.jsx(t,{id:`fields.${l}.label`,value:a.label,onChange:s=>i(`fields.${l}.label`,s.target.value),placeholder:"Field Label"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:`fields.${l}.type`,children:"Field Type"}),e.jsxs(g,{value:a.type,onValueChange:s=>i(`fields.${l}.type`,s),children:[e.jsx(f,{children:e.jsx(b,{})}),e.jsx(F,{children:re.map(s=>e.jsx(_,{value:s.value,children:s.label},s.value))})]})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:`fields.${l}.width`,children:"Width"}),e.jsxs(g,{value:a.width,onValueChange:s=>i(`fields.${l}.width`,s),children:[e.jsx(f,{children:e.jsx(b,{})}),e.jsx(F,{children:te.map(s=>e.jsx(_,{value:s.value,children:s.label},s.value))})]})]})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:`fields.${l}.placeholder`,children:"Placeholder"}),e.jsx(t,{id:`fields.${l}.placeholder`,value:a.placeholder||"",onChange:s=>i(`fields.${l}.placeholder`,s.target.value),placeholder:"Enter placeholder text"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:`fields.${l}.help_text`,children:"Help Text"}),e.jsx(t,{id:`fields.${l}.help_text`,value:a.help_text||"",onChange:s=>i(`fields.${l}.help_text`,s.target.value),placeholder:"Optional help text"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(U,{id:`fields.${l}.required`,checked:a.required||!1,onCheckedChange:s=>i(`fields.${l}.required`,s)}),e.jsx(r,{htmlFor:`fields.${l}.required`,children:"Required Field"})]}),["select","radio","checkbox"].includes(a.type)&&e.jsxs("div",{children:[e.jsx(r,{children:"Options (one per line)"}),e.jsx(h,{value:a.options?a.options.join(`
`):"",onChange:s=>{const n=s.target.value.split(`
`).filter(d=>d.trim());i(`fields.${l}.options`,n)},placeholder:`Option 1
Option 2
Option 3`,rows:4})]})]});return e.jsxs(R,{children:[e.jsx(P,{title:"Create Form"}),e.jsx("div",{className:"flex flex-1 flex-col",children:e.jsxs("div",{className:"@container/main flex flex-1 flex-col gap-2 p-10",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Create New Form"}),e.jsx(o,{variant:"outline",onClick:()=>j.get(route("form.index")),children:"Back to Forms"})]}),e.jsx(K,{initialValues:{name:"",description:"",slug:"",submit_button_text:"Submit",success_message:"Thank you for your submission!",redirect_url:"",notification_email:"",alternative_email:"",info_email:"",email_subject:"",status:"active",require_captcha:!1,store_submissions:!0,fields:[]},validationSchema:L,onSubmit:A,children:({isSubmitting:a,setFieldValue:l,values:i})=>e.jsxs(X,{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsxs(y,{children:[e.jsx(C,{children:e.jsx(S,{children:"Form Builder"})}),e.jsx(T,{children:e.jsxs(Y,{value:E,onValueChange:k,children:[e.jsxs(J,{className:"mb-4",children:[e.jsx($,{value:"form-settings",children:"Form Settings"}),e.jsx($,{value:"form-fields",children:"Form Fields"})]}),e.jsx(q,{value:"form-settings",className:"space-y-4",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{children:[e.jsx(r,{htmlFor:"name",children:"Form Name"}),e.jsx(c,{as:t,id:"name",name:"name",placeholder:"Contact Form",onChange:s=>{l("name",s.target.value);const n=s.target.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");l("slug",n)}}),e.jsx(v,{name:"name",component:"div",className:"text-red-500 text-sm"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"slug",children:"Form Slug"}),e.jsx(c,{as:t,id:"slug",name:"slug",placeholder:"contact-form"}),e.jsx(v,{name:"slug",component:"div",className:"text-red-500 text-sm"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"description",children:"Description"}),e.jsx(c,{as:h,id:"description",name:"description",placeholder:"Optional form description"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"submit_button_text",children:"Submit Button Text"}),e.jsx(c,{as:t,id:"submit_button_text",name:"submit_button_text",placeholder:"Submit"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"success_message",children:"Success Message"}),e.jsx(c,{as:h,id:"success_message",name:"success_message",placeholder:"Thank you for your submission!"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"notification_email",children:"Notification Email"}),e.jsx(c,{as:t,id:"notification_email",name:"notification_email",type:"email",placeholder:"admin@example.com"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"alternative_email",children:"Alternative Email"}),e.jsx(c,{as:t,id:"alternative_email",name:"alternative_email",type:"email",placeholder:"admin@example.com"})]}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"info_email",children:"Info Email"}),e.jsx(c,{as:t,id:"info_email",name:"info_email",type:"email",placeholder:"info@example.com"})]})]})}),e.jsx(q,{value:"form-fields",children:e.jsx(Z,{name:"fields",children:s=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Form Fields"}),e.jsxs(o,{type:"button",onClick:()=>I(s),size:"sm",children:[e.jsx(ee,{className:"w-4 h-4 mr-2"}),"Add Field"]})]}),i.fields.length===0?e.jsx("div",{className:"text-center py-8 text-gray-500",children:e.jsx("p",{children:'No fields added yet. Click "Add Field" to get started.'})}):e.jsx("div",{className:"space-y-2",children:i.fields.map((n,d)=>e.jsxs("div",{className:"flex items-center space-x-2 p-3 border rounded-lg bg-gray-50",children:[e.jsx(se,{className:"w-4 h-4 text-gray-400"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-medium",children:n.label}),e.jsxs("div",{className:"text-sm text-gray-500",children:[n.type," • ",n.required?"Required":"Optional"]})]}),e.jsxs(W,{open:O&&D===d,onOpenChange:N=>{u(N),N||x(null)},children:[e.jsx(H,{asChild:!0,children:e.jsx(o,{type:"button",variant:"outline",size:"sm",onClick:()=>{x(d),u(!0)},children:e.jsx(le,{className:"w-4 h-4"})})}),e.jsxs(G,{className:"max-w-2xl",children:[e.jsx(M,{children:e.jsx(Q,{children:"Edit Field"})}),e.jsx(B,{field:n,index:d,setFieldValue:l})]})]}),e.jsx(o,{type:"button",variant:"outline",size:"sm",onClick:()=>z(s,d),children:e.jsx(ae,{className:"w-4 h-4"})})]},d))}),e.jsx(v,{name:"fields",component:"div",className:"text-red-500 text-sm"})]})})})]})})]})}),e.jsx("div",{className:"lg:col-span-1",children:e.jsxs(y,{children:[e.jsx(C,{children:e.jsxs(S,{className:"flex items-center",children:[e.jsx(ie,{className:"w-4 h-4 mr-2"}),"Preview"]})}),e.jsx(T,{children:e.jsxs("div",{className:"space-y-4 p-4 border rounded-lg bg-gray-50",children:[e.jsx("h3",{className:"font-medium",children:i.name||"Form Name"}),i.description&&e.jsx("p",{className:"text-sm text-gray-600",children:i.description}),i.fields.map((s,n)=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs(r,{className:"text-sm",children:[s.label,s.required&&e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),s.type==="textarea"?e.jsx(h,{placeholder:s.placeholder,disabled:!0,className:"bg-white"}):s.type==="select"?e.jsx(g,{disabled:!0,children:e.jsx(f,{className:"bg-white",children:e.jsx(b,{placeholder:s.placeholder||"Select an option"})})}):e.jsx(t,{type:s.type,placeholder:s.placeholder,disabled:!0,className:"bg-white"}),s.help_text&&e.jsx("p",{className:"text-xs text-gray-500",children:s.help_text})]},n)),e.jsx(o,{disabled:!0,className:"w-full",children:i.submit_button_text})]})})]})})]}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4",children:[e.jsx(o,{type:"button",variant:"outline",onClick:()=>j.get(route("form.index")),children:"Cancel"}),e.jsx(o,{type:"submit",disabled:a,children:a?"Creating...":"Create Form"})]})]})})]})})]})}export{qe as default};
