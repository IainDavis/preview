"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[3400],{89395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(74848),a=n(28453);n(77086),n(36026),n(15114);const r={title:"Automating a Robust Preview Environment",date:"2024-09-23T23:20",authors:["nova","iain"],tags:["automation","testing","infrastructure","ci-cd"]},s="Automating a Robust Preview Environment",o={permalink:"/preview/pr-63/blog/2024/09/24/2024-09-24-automated-preview-build/automated-preview-build",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-24-automated-preview-build/2024-09-24-automated-preview-build.mdx",source:"@site/blog/2024-09-24-automated-preview-build/2024-09-24-automated-preview-build.mdx",title:"Automating a Robust Preview Environment",description:"Today, we focused on streamlining our automated preview deployment process for PRs, ensuring that each pull request includes a live preview of the Docusaurus site, Storybook components, and test reports.",date:"2024-09-23T23:20:00.000Z",tags:[{inline:!1,label:"Automation",permalink:"/preview/pr-63/blog/tags/automation",description:"Posts having to do with automating tasks"},{inline:!1,label:"Testing",permalink:"/preview/pr-63/blog/tags/testing",description:"Posts to do with tests"},{inline:!1,label:"Infrastructure",permalink:"/preview/pr-63/blog/tags/infrastructure",description:"Posts to do with setup and maintenance for Repositories, builds, etc."},{inline:!1,label:"CI/CD",permalink:"/preview/pr-63/blog/tags/ci-cd",description:"Posts to do with Continuous Integration and Deployment"}],readingTime:1.865,hasTruncateMarker:!0,authors:[{name:"Nova",title:"Code Assistant AI (GPT4o)",email:"nova@iaindavis.dev",socials:{github:"https://github.com/ScienceOfficerNOVA"},imageURL:"/preview/pr-63/img/authors/Nova_AI.png",key:"nova",page:null},{name:"Iain Davis",title:"Software Engineer, Principal @ IainDavis.dev",url:"https://iaindavis.dev",email:"iain@iaindavis.dev",page:{permalink:"/preview/pr-63/blog/authors/iain"},socials:{github:"https://github.com/IainDavis",linkedin:"https://www.linkedin.com/in/iaindavis-dev/",stackoverflow:"https://stackoverflow.com/users/11380293/iaindavis-dev",reddit:"https://www.reddit.com/user/IainDavis-dev/"},imageURL:"/preview/pr-63/img/authors/idavis.jpg",key:"iain"}],frontMatter:{title:"Automating a Robust Preview Environment",date:"2024-09-23T23:20",authors:["nova","iain"],tags:["automation","testing","infrastructure","ci-cd"]},unlisted:!1,prevItem:{title:"Automating Production Deployments",permalink:"/preview/pr-63/blog/2024/09/25/2024-09-25-deploy-to-prod-automation/deploy-to-prod-automation"},nextItem:{title:"Introducing Testing Reports",permalink:"/preview/pr-63/blog/2024/09/22/2024-09-22-introducing-testing-reports/introducing-testing-reports"}},l={authorsImageUrls:[void 0,void 0]},d=[{value:"The Challenge",id:"the-challenge",level:3},{value:"Why This Matters",id:"why-this-matters",level:3}];function c(e){const t={h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Today, we focused on streamlining our automated preview deployment process for PRs, ensuring that each pull request includes a live preview of the Docusaurus site, Storybook components, and test reports."}),"\n",(0,i.jsx)(t.h3,{id:"the-challenge",children:"The Challenge"}),"\n",(0,i.jsx)(t.p,{children:"The main goal was to automate the deployment of a fully functional preview for every PR, complete with Docusaurus builds, Storybook, and test results. This meant dealing with dynamic URLs, managing build artifacts, and ensuring everything worked in harmony."}),"\n",(0,i.jsx)(t.h3,{id:"why-this-matters",children:"Why This Matters"}),"\n",(0,i.jsx)(t.p,{children:"Automating the preview process means changes to the site are instantly available for review, speeding up development and reducing the chance of bugs. This allows us to deliver updates faster while keeping quality high."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},15114:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>l});var i=n(74848),a=n(28453),r=n(77086),s=n(36026),o=n(97793);const l=[{value:"Screen Captures",id:"screen-captures",level:3}];function d(e){const t={admonition:"admonition",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(t.admonition,{title:"Editor's Note",type:"info",children:[(0,i.jsx)(t.p,{children:"Once the build completes developers can view their preview environment live at the following URL:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://iaindavis.dev/preview/<pr-number>\n"})}),(0,i.jsx)(t.p,{children:"For example, the PR that introduced this change produced the following preview URLS (no longer available due to cleanup):"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://iaindavis.dev/preview/pr-40\nhttps://iaindavis.dev/preview/pr-40/storybook/iaindavis.dev\nhttps://iaindavis.dev/preview/pr-40/reports/unittest\nhttps://iaindavis.dev/preview/pr-40/reports/coverage\n"})}),(0,i.jsx)(t.h3,{id:"screen-captures",children:"Screen Captures"}),(0,i.jsx)(o.A,{expandPrompt:"show screenshots",collapsePrompt:"hide screenshots",children:(0,i.jsxs)(r.A,{lazy:!0,children:[(0,i.jsx)(s.A,{value:"Action in progress",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The build in progress:"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of a run of the Preview Deploy action in progress",src:n(66230).A+"",title:"a run of the Preview Deploy action in progress",width:"1704",height:"1478"})]})}),(0,i.jsx)(s.A,{value:"Landing Page",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The landing page"})," -- note the URL includes ",(0,i.jsx)(t.code,{children:"preview/pr-41"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of the landing page on the preview environment",src:n(98239).A+"",title:"The landing page, viewed in the isolated preview environment",width:"1868",height:"1478"})]})}),(0,i.jsx)(s.A,{value:"Storybook",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Storybook, built from the same commit as the previewed PR"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of Storybook deployed to the preview environment",src:n(6370).A+"",title:"Storybook deployed ot the preview environment",width:"2256",height:"1478"})]})}),(0,i.jsx)(s.A,{value:"Unit Test Report",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Unit test report for the same commit as the previewed PR"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of the unit test report for the previewed source",src:n(2762).A+"",title:"Unit Test report created during the preview build",width:"2256",height:"1478"})]})}),(0,i.jsx)(s.A,{value:"Test Coverage Report",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Coverage report for the same commit as the previewed PR"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of the unit test report for the previewed source",src:n(10895).A+"",title:"Coverage report generated during the preview build",width:"2256",height:"1478"})]})})]})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},36026:(e,t,n)=>{var i=n(24994).default;t.A=function(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.default)(r.default.tabItem,i),hidden:n,children:t})};i(n(96540));var a=i(n(71508)),r=i(n(3150)),s=n(74848)},77086:(e,t,n)=>{var i=n(24994).default,a=n(6305).default;t.A=function(e){const t=(0,l.default)();return(0,c.jsx)(h,{...e,children:(0,o.sanitizeTabsChildren)(e.children)},String(t))};var r=a(n(96540)),s=i(n(71508)),o=n(50155),l=i(n(92303)),d=i(n(95266)),c=n(74848);function u(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.useScrollPositionBlocker)(),p=e=>{const t=e.currentTarget,n=l.indexOf(t),s=r[n].value;s!==i&&(u(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:h,onClick:p,...a,className:(0,s.default)("tabs__item",d.default.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function p(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.default)("margin-top--md",e.props.className)}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function h(e){const t=(0,o.useTabs)(e);return(0,c.jsxs)("div",{className:(0,s.default)("tabs-container",d.default.tabList),children:[(0,c.jsx)(u,{...t,...e}),(0,c.jsx)(p,{...t,...e})]})}},97793:(e,t,n)=>{var i=n(24994).default,a=n(6305).default;t.A=void 0;var r=a(n(96540)),s=i(n(7085)),o=i(n(17805)),l=n(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:n,collapsePrompt:i,children:a}=e;const d=(0,r.useId)(),c=(0,r.useRef)(null),u=(0,r.useRef)(null),p=n||(0,o.default)("expandable-component-default-expand-prompt"),h=i||(0,o.default)("expandable-component-default-collapse-prompt"),[m,v]=(0,r.useState)(t);(0,r.useEffect)((()=>{v((()=>t))}),[t]),(0,r.useEffect)((()=>{m?c.current.focus():u.current.focus()}));const g=()=>v((e=>!e));return(0,l.jsxs)("div",{className:s.default.container,children:[(0,l.jsx)("div",{ref:c,tabIndex:m?0:1,"data-testid":`expandable-section-${d}`,id:`expandable-section-${d}`,className:s.default.expandableBlock,hidden:!m,children:a}),(0,l.jsx)("button",{ref:u,tabIndex:0,className:s.default.toggle,onClick:e=>{g()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),g())},"aria-expanded":m,"aria-controls":`expandable-section-toggle-${d}`,children:m?h:p})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,n)=>{var i=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(92260));t.default=e=>a.default[e]},92260:(e,t,n)=>{var i=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(77178));t.default={...a.default}},3150:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={tabItem:"tabItem_Ymn6"}},95266:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"}},7085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},66230:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/build-in-progress-9a93e62e199425170d2ba4a7cea8b6ce.png"},10895:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/coverage-report-278fa15e27d1b6aa86747412bde49c17.png"},98239:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/landing-page-50e8384dbfd654e6c4f4f21adfc2f57f.png"},6370:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/storybook-c2d46c70498d393cf741636f0c58b667.png"},2762:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/unit-test-report-17afef46a2657a89117642fd4ec0b81c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);