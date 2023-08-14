import{r as t}from"./index.070054a4.js";import{j as e}from"./jsx-runtime.6940b965.js";const l=[{label:"Authors' Infomation",path:"/authors-information"},{label:"Peer Review Policy",path:"/peer-review-policy"},{label:"Editorial Board",path:"/editorial-board"},{label:"Archives",path:"/archives"}];function n(s){var i,r,a="";if(typeof s=="string"||typeof s=="number")a+=s;else if(typeof s=="object")if(Array.isArray(s))for(i=0;i<s.length;i++)s[i]&&(r=n(s[i]))&&(a&&(a+=" "),a+=r);else for(i in s)s[i]&&(a&&(a+=" "),a+=i);return a}function o(){for(var s,i,r=0,a="";r<arguments.length;)(s=arguments[r++])&&(i=n(s))&&(a&&(a+=" "),a+=i);return a}const m=()=>{const[s,i]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex lg:hidden",children:e.jsxs("button",{id:"hamburger-menu",type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:()=>i(!0),children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})]})}),e.jsxs("div",{id:"main-mobile-nav",className:o(!s&&"hidden","last:lg:hidden"),role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"fixed inset-0 z-50"}),e.jsxs("div",{className:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("a",{href:"/",className:"-m-1.5 p-1.5",children:[e.jsx("span",{className:"sr-only",children:"Pixous Publication"}),e.jsx("img",{className:"h-8 w-auto",src:"/images/logo.png",alt:""})]}),e.jsxs("button",{id:"mobile-nav-close",type:"button",className:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:()=>i(!1),children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})]}),e.jsx("div",{className:"mt-6 flow-root",children:e.jsxs("div",{className:"-my-6 divide-y divide-gray-500/10",children:[e.jsx("div",{className:"space-y-2 py-6",children:l.map(r=>e.jsx("a",{href:r.path,className:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",children:r.label},r.path))}),e.jsx("div",{className:"py-6",children:e.jsx("a",{href:"/submit-paper",className:"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Submit Paper"})})]})})]})]})]})};export{m as default};
