"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[3632],{34961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(74848),r=n(28453),s=(n(77086),n(36026),n(15114));const a={title:"Automating a Robust Preview Environment",date:"2024-09-23T23:20",authors:["nova","iain"],tags:["automation","testing","infrastructure","ci-cd"]},o="Automating a Robust Preview Environment",l={permalink:"/preview/pr-48/blog/2024/09/24/2024-09-24-automated-preview-build/automated-preview-build",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-24-automated-preview-build/2024-09-24-automated-preview-build.mdx",source:"@site/blog/2024-09-24-automated-preview-build/2024-09-24-automated-preview-build.mdx",title:"Automating a Robust Preview Environment",description:"Today, we focused on streamlining our automated preview deployment process for PRs, ensuring that each pull request includes a live preview of the Docusaurus site, Storybook components, and test reports.",date:"2024-09-23T23:20:00.000Z",tags:[{inline:!1,label:"Automation",permalink:"/preview/pr-48/blog/tags/automation",description:"Posts having to do with automating tasks"},{inline:!1,label:"Testing",permalink:"/preview/pr-48/blog/tags/testing",description:"Posts to do with tests"},{inline:!1,label:"Infrastructure",permalink:"/preview/pr-48/blog/tags/infrastructure",description:"Posts to do with setup and maintenance for Repositories, builds, etc."},{inline:!1,label:"CI/CD",permalink:"/preview/pr-48/blog/tags/ci-cd",description:"Posts to do with Continuous Integration and Deployment"}],readingTime:1.865,hasTruncateMarker:!0,authors:[{name:"Nova",title:"Code Assistant AI (GPT4o)",email:"nova@iaindavis.dev",socials:{github:"https://github.com/ScienceOfficerNOVA"},imageURL:"/preview/pr-48/img/authors/Nova_AI.png",key:"nova",page:null},{name:"Iain Davis",title:"Software Engineer, Principal @ IainDavis.dev",url:"https://iaindavis.dev",email:"iain@iaindavis.dev",page:{permalink:"/preview/pr-48/blog/authors/iain"},socials:{github:"https://github.com/IainDavis",linkedin:"https://www.linkedin.com/in/iaindavis-dev/",stackoverflow:"https://stackoverflow.com/users/11380293/iaindavis-dev",reddit:"https://www.reddit.com/user/IainDavis-dev/"},imageURL:"/preview/pr-48/img/authors/idavis.jpg",key:"iain"}],frontMatter:{title:"Automating a Robust Preview Environment",date:"2024-09-23T23:20",authors:["nova","iain"],tags:["automation","testing","infrastructure","ci-cd"]},unlisted:!1,nextItem:{title:"Introducing Testing Reports",permalink:"/preview/pr-48/blog/2024/09/22/2024-09-22-introducing-testing-reports/introducing-testing-reports"}},d={authorsImageUrls:[void 0,void 0]},c=[{value:"The Challenge",id:"the-challenge",level:3},{value:"Why This Matters",id:"why-this-matters",level:3},...s.RM,{value:"Key Improvements",id:"key-improvements",level:3},{value:"Results",id:"results",level:3},{value:"Conclusion",id:"conclusion",level:3}];function u(e){const t={h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Today, we focused on streamlining our automated preview deployment process for PRs, ensuring that each pull request includes a live preview of the Docusaurus site, Storybook components, and test reports."}),"\n",(0,i.jsx)(t.h3,{id:"the-challenge",children:"The Challenge"}),"\n",(0,i.jsx)(t.p,{children:"The main goal was to automate the deployment of a fully functional preview for every PR, complete with Docusaurus builds, Storybook, and test results. This meant dealing with dynamic URLs, managing build artifacts, and ensuring everything worked in harmony."}),"\n",(0,i.jsx)(t.h3,{id:"why-this-matters",children:"Why This Matters"}),"\n",(0,i.jsx)(t.p,{children:"Automating the preview process means changes to the site are instantly available for review, speeding up development and reducing the chance of bugs. This allows us to deliver updates faster while keeping quality high."}),"\n",(0,i.jsx)(t.p,{}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(t.h3,{id:"key-improvements",children:"Key Improvements"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Dynamic Base URL:\nWe fixed an issue where PR previews were redirecting to production by dynamically setting the baseUrl in Docusaurus for each PR, ensuring each environment stayed isolated."}),"\n",(0,i.jsx)(t.li,{children:"Artifact Management:\nStorybook and test reports were set to deploy under the /static directory of the site, making them accessible within the preview environment for every PR."}),"\n",(0,i.jsx)(t.li,{children:"Build Order & Dependencies:\nWe explored parallelizing builds but kept a strict order where necessary\u2014like ensuring test reports were generated before the Docusaurus build and that global styles were created before Storybook."}),"\n",(0,i.jsx)(t.li,{children:"Optimizing Logs:\nTo make troubleshooting easier, we reduced the verbosity of logs, especially for Storybook builds, by using the --quiet option."}),"\n",(0,i.jsx)(t.li,{children:"XUnit-Viewer:\nWe integrated XUnit-Viewer to convert test results into accessible HTML reports for easier review alongside the preview."}),"\n",(0,i.jsx)(t.li,{children:"Automated Cleanup:\nA cleanup step was added to remove old PR previews when the PR is closed or merged, keeping the environment tidy."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"results",children:"Results"}),"\n",(0,i.jsx)(t.p,{children:"Each PR now includes:"}),"\n",(0,i.jsx)(t.p,{children:"\u2022\tA live preview of the Docusaurus site.\n\u2022\tA deployed Storybook environment for UI review.\n\u2022\tUnit test and code coverage reports for visibility into the code\u2019s health."}),"\n",(0,i.jsx)(t.p,{children:"This automation speeds up feedback, reduces manual effort, and ensures a consistent, comprehensive review process for all PRs."}),"\n",(0,i.jsx)(t.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"Automating the preview deployment has improved the efficiency of our workflow. By integrating Docusaurus, Storybook, and test reports into each PR\u2019s live preview, we\u2019ve created a faster, more reliable way to review and merge code."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},15114:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>l});var i=n(74848),r=n(28453),s=n(77086),a=n(36026),o=n(97793);const l=[{value:"Screen Captures",id:"screen-captures",level:3}];function d(e){const t={admonition:"admonition",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(t.admonition,{title:"Editor's Note",type:"info",children:[(0,i.jsx)(t.p,{children:"Once the build completes developers can view their preview environment live at the following URL:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://iaindavis.dev/preview/<pr-number>\n"})}),(0,i.jsx)(t.p,{children:"For example, the PR that introduced this change produced the following preview URLS (no longer available due to cleanup):"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://iaindavis.dev/preview/pr-40\nhttps://iaindavis.dev/preview/pr-40/storybook/iaindavis.dev\nhttps://iaindavis.dev/preview/pr-40/reports/unittest\nhttps://iaindavis.dev/preview/pr-40/reports/coverage\n"})}),(0,i.jsx)(t.h3,{id:"screen-captures",children:"Screen Captures"}),(0,i.jsx)(o.A,{expandPrompt:"show screenshots",collapsePrompt:"hide screenshots",children:(0,i.jsxs)(s.A,{lazy:!0,children:[(0,i.jsx)(a.A,{value:"Action in progress",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The build in progress:"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of a run of the Preview Deploy action in progress",src:n(66230).A+"",title:"a run of the Preview Deploy action in progress",width:"1704",height:"1478"})]})}),(0,i.jsx)(a.A,{value:"Landing Page",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The landing page"})," -- note the URL includes ",(0,i.jsx)(t.code,{children:"preview/pr-41"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of the landing page on the preview environment",src:n(98239).A+"",title:"The landing page, viewed in the isolated preview environment",width:"1868",height:"1478"})]})}),(0,i.jsx)(a.A,{value:"Storybook",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Storybook, built from the same commit as the previewed PR"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of Storybook deployed to the preview environment",src:n(6370).A+"",title:"Storybook deployed ot the preview environment",width:"2256",height:"1478"})]})}),(0,i.jsx)(a.A,{value:"Unit Test Report",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Unit test report for the same commit as the previewed PR"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of the unit test report for the previewed source",src:n(2762).A+"",title:"Unit Test report created during the preview build",width:"2256",height:"1478"})]})}),(0,i.jsx)(a.A,{value:"Test Coverage Report",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Coverage report for the same commit as the previewed PR"}),"\n",(0,i.jsx)(t.img,{alt:"A screen shot of the unit test report for the previewed source",src:n(10895).A+"",title:"Coverage report generated during the preview build",width:"2256",height:"1478"})]})})]})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},36026:(e,t,n)=>{var i=n(24994).default;t.A=function(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.default)(s.default.tabItem,i),hidden:n,children:t})};i(n(96540));var r=i(n(71508)),s=i(n(3150)),a=n(74848)},77086:(e,t,n)=>{var i=n(24994).default,r=n(6305).default;t.A=function(e){const t=(0,l.default)();return(0,c.jsx)(h,{...e,children:(0,o.sanitizeTabsChildren)(e.children)},String(t))};var s=r(n(96540)),a=i(n(71508)),o=n(50155),l=i(n(92303)),d=i(n(95266)),c=n(74848);function u(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.useScrollPositionBlocker)(),p=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==i&&(u(t),r(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:h,onClick:p,...r,className:(0,a.default)("tabs__item",d.default.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function p(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,a.default)("margin-top--md",e.props.className)}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function h(e){const t=(0,o.useTabs)(e);return(0,c.jsxs)("div",{className:(0,a.default)("tabs-container",d.default.tabList),children:[(0,c.jsx)(u,{...t,...e}),(0,c.jsx)(p,{...t,...e})]})}},97793:(e,t,n)=>{var i=n(24994).default,r=n(6305).default;t.A=void 0;var s=r(n(96540)),a=i(n(7085)),o=i(n(17805)),l=n(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:n,collapsePrompt:i,children:r}=e;const d=(0,s.useId)(),c=(0,s.useRef)(null),u=(0,s.useRef)(null),p=n||(0,o.default)("expandable-component-default-expand-prompt"),h=i||(0,o.default)("expandable-component-default-collapse-prompt"),[v,m]=(0,s.useState)(t);(0,s.useEffect)((()=>{m((()=>t))}),[t]),(0,s.useEffect)((()=>{v?c.current.focus():u.current.focus()}));const g=()=>m((e=>!e));return(0,l.jsxs)("div",{className:a.default.container,children:[(0,l.jsx)("div",{ref:c,tabIndex:v?0:1,"data-testid":`expandable-section-${d}`,id:`expandable-section-${d}`,className:a.default.expandableBlock,hidden:!v,children:r}),(0,l.jsx)("button",{ref:u,tabIndex:0,className:a.default.toggle,onClick:e=>{g()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),g())},"aria-expanded":v,"aria-controls":`expandable-section-toggle-${d}`,children:v?h:p})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,n)=>{var i=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(92260));t.default=e=>r.default[e]},92260:(e,t,n)=>{var i=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(77178));t.default={...r.default}},3150:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={tabItem:"tabItem_Ymn6"}},95266:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"}},7085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},66230:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/build-in-progress-9a93e62e199425170d2ba4a7cea8b6ce.png"},10895:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/coverage-report-278fa15e27d1b6aa86747412bde49c17.png"},98239:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/landing-page-50e8384dbfd654e6c4f4f21adfc2f57f.png"},6370:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/storybook-c2d46c70498d393cf741636f0c58b667.png"},2762:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/unit-test-report-17afef46a2657a89117642fd4ec0b81c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);