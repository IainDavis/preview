"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[2948],{37645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>m,default:()=>b,frontMatter:()=>h,metadata:()=>f,toc:()=>v});var r=n(74848),s=n(28453),i=n(77086),a=n(36026);function o(e){const t={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"project-summary",children:"Project Summary"}),"\n",(0,r.jsx)(t.h3,{id:"what-it-is",children:"What It Is"}),"\n",(0,r.jsx)(t.p,{children:"This project is a Google AppsScript program that combines a Cover Letter template (as\na Google Doc) with row data from a spreadsheet of job listings to\ncreate customized cover letters for each listing."}),"\n",(0,r.jsx)(t.h3,{id:"why-i-built-it",children:"Why I Built It"}),"\n",(0,r.jsx)(t.p,{children:"Google Docs requires a subscription to use variables in a document. A\nroll-your-own solution saves a monthly expense and:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"simplifies data-entry"}),"\n",(0,r.jsx)(t.li,{children:"gives me one source-of-truth (the spreadsheet) for my job search process"}),"\n",(0,r.jsx)(t.li,{children:"saves time and potential for error in manually editing cover letters"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"And, as ever, it's an opportunity to learn. This is not my first\nAppsScript project, but it's my first time dealing with the Drive,\nDocs, and Sheets features in a meaningful way."}),"\n",(0,r.jsx)(t.p,{children:"Also, I'm petty, and I resent Google withholding this simple essential feature."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function c(e){const t={li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"spreadsheet data entry (plus some simple validation)"}),"\n",(0,r.jsx)(t.li,{children:"target specific rows, or the whole sheet"}),"\n",(0,r.jsx)(t.li,{children:"file created in logical folder structure (company/listing/cover-letter)"}),"\n",(0,r.jsx)(t.li,{children:"created file gets written-back to the spreadsheet as a hyperlink"}),"\n",(0,r.jsx)(t.li,{children:"changing the spreadsheet and running the script again updates the files"}),"\n",(0,r.jsx)(t.li,{children:"updates preserve version history for generated cover-list files"}),"\n",(0,r.jsx)(t.li,{children:"easily run script from UI menu item"}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function d(e){const t={li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Google Drive/Docs/Sheets"}),"\n",(0,r.jsx)(t.li,{children:"Google AppsScript"}),"\n"]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}const h={title:"Automated Cover Letter Generation"},m=void 0,f={id:"projects/cover-letter-automation/cover-letter-automation",title:"Automated Cover Letter Generation",description:"",source:"@site/docs/projects/03-cover-letter-automation/03-cover-letter-automation.mdx",sourceDirName:"projects/03-cover-letter-automation",slug:"/projects/cover-letter-automation/",permalink:"/preview/pr-67/docs/projects/cover-letter-automation/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/03-cover-letter-automation/03-cover-letter-automation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Automated Cover Letter Generation"},sidebar:"projectsSidebar",previous:{title:"Planned Features",permalink:"/preview/pr-67/docs/projects/nova/future-plans/"},next:{title:"Implementation Details",permalink:"/preview/pr-67/docs/projects/cover-letter-automation/implementation-details/"}},j={},v=[{value:"Project Summary",id:"project-summary",level:2},{value:"What It Is",id:"what-it-is",level:3},{value:"Why I Built It",id:"why-i-built-it",level:3}];function x(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"Key Features",children:(0,r.jsx)(u,{})}),(0,r.jsx)(a.A,{value:"Technology Used",children:(0,r.jsx)(p,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x()}},36026:(e,t,n)=>{var r=n(24994).default;t.A=function(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.default)(i.default.tabItem,r),hidden:n,children:t})};r(n(96540));var s=r(n(71508)),i=r(n(3150)),a=n(74848)},77086:(e,t,n)=>{var r=n(24994).default,s=n(6305).default;t.A=function(e){const t=(0,l.default)();return(0,u.jsx)(h,{...e,children:(0,o.sanitizeTabsChildren)(e.children)},String(t))};var i=s(n(96540)),a=r(n(71508)),o=n(50155),l=r(n(92303)),c=r(n(95266)),u=n(74848);function d(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.useScrollPositionBlocker)(),p=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(d(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,u.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,u.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:p,...s,className:(0,a.default)("tabs__item",c.default.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function p(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,a.default)("margin-top--md",e.props.className)}):null}return(0,u.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function h(e){const t=(0,o.useTabs)(e);return(0,u.jsxs)("div",{className:(0,a.default)("tabs-container",c.default.tabList),children:[(0,u.jsx)(d,{...t,...e}),(0,u.jsx)(p,{...t,...e})]})}},3150:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={tabItem:"tabItem_Ymn6"}},95266:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);