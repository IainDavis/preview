"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[6334],{35981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=a(74848),n=a(28453);a(97793);const s={title:"Expandable!",date:"2024-09-14T11:28",authors:["iain"],tags:["storybook","docusaurus","customComponents","react"]},i=void 0,r={permalink:"/preview/pr-62/blog/2024/09/14/2024-09-14-expandable/expandable",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-14-expandable/2024-09-14-expandable.mdx",source:"@site/blog/2024-09-14-expandable/2024-09-14-expandable.mdx",title:"Expandable!",description:"I really like Docusaurus, but I also find there are some things it's missing.",date:"2024-09-14T11:28:00.000Z",tags:[{inline:!1,label:"Storybook",permalink:"/preview/pr-62/blog/tags/storybook",description:"Posts to do with configuring or using Storybook"},{inline:!1,label:"Docusaurus",permalink:"/preview/pr-62/blog/tags/docusaurus",description:"Posts related to working with Docusaurus configuration and components"},{inline:!1,label:"Custom Docusaurus Components",permalink:"/preview/pr-62/blog/tags/custom-components",description:"Posts to do with components I've developed to extend Docusaurus functionallity"},{inline:!1,label:"React",permalink:"/preview/pr-62/blog/tags/react",description:"Posts to do with the React ecosystem"}],readingTime:4.455,hasTruncateMarker:!0,authors:[{name:"Iain Davis",title:"Software Engineer, Principal @ IainDavis.dev",url:"https://iaindavis.dev",email:"iain@iaindavis.dev",page:{permalink:"/preview/pr-62/blog/authors/iain"},socials:{github:"https://github.com/IainDavis",linkedin:"https://www.linkedin.com/in/iaindavis-dev/",stackoverflow:"https://stackoverflow.com/users/11380293/iaindavis-dev",reddit:"https://www.reddit.com/user/IainDavis-dev/"},imageURL:"/preview/pr-62/img/authors/idavis.jpg",key:"iain"}],frontMatter:{title:"Expandable!",date:"2024-09-14T11:28",authors:["iain"],tags:["storybook","docusaurus","customComponents","react"]},unlisted:!1,prevItem:{title:"Challenges Getting Docusaurus Styles Into Storybook",permalink:"/preview/pr-62/blog/2024/09/14/2024-09-14-docusaurus-styles-in-storybook/docusaurus-styles-in-storybook"},nextItem:{title:"Catch-Up Post",permalink:"/preview/pr-62/blog/2024/09/14/2024-09-14-catch-up/catch-up"}},l={authorsImageUrls:[void 0]},d=[];function u(e){const t={em:"em",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(t.p,{children:["I really like Docusaurus, but I also find there are some things it's missing.\nHappily, one of the ",(0,o.jsx)(t.em,{children:"best"})," things about it is that it is, at bottom, React,\nwhich means you can add the things you find missing."]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},97793:(e,t,a)=>{var o=a(24994).default,n=a(6305).default;t.A=void 0;var s=n(a(96540)),i=o(a(7085)),r=o(a(17805)),l=a(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:a,collapsePrompt:o,children:n}=e;const d=(0,s.useId)(),u=(0,s.useRef)(null),c=(0,s.useRef)(null),p=a||(0,r.default)("expandable-component-default-expand-prompt"),m=o||(0,r.default)("expandable-component-default-collapse-prompt"),[f,b]=(0,s.useState)(t);(0,s.useEffect)((()=>{b((()=>t))}),[t]),(0,s.useEffect)((()=>{f?u.current.focus():c.current.focus()}));const v=()=>b((e=>!e));return(0,l.jsxs)("div",{className:i.default.container,children:[(0,l.jsx)("div",{ref:u,tabIndex:f?0:1,"data-testid":`expandable-section-${d}`,id:`expandable-section-${d}`,className:i.default.expandableBlock,hidden:!f,children:n}),(0,l.jsx)("button",{ref:c,tabIndex:0,className:i.default.toggle,onClick:e=>{v()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),v())},"aria-expanded":f,"aria-controls":`expandable-section-toggle-${d}`,children:f?m:p})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,a)=>{var o=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(92260));t.default=e=>n.default[e]},92260:(e,t,a)=>{var o=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(77178));t.default={...n.default}},7085:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});const o={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var o=a(96540);const n={},s=o.createContext(n);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);