"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[5087],{93796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(74848),o=n(28453),i=n(97793);const a={title:"Major Segments"},r=void 0,l={id:"projects/iaindavis.dev/implementation/segments/segments",title:"Major Segments",description:"As of this writing, this website features three broad segments relying on different technologies",source:"@site/docs/projects/01-iaindavis.dev/03-implementation/01-segments/01-segments.mdx",sourceDirName:"projects/01-iaindavis.dev/03-implementation/01-segments",slug:"/projects/iaindavis.dev/implementation/segments/",permalink:"/preview/pr-67/docs/projects/iaindavis.dev/implementation/segments/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/01-iaindavis.dev/03-implementation/01-segments/01-segments.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Major Segments"},sidebar:"projectsSidebar",previous:{title:"Implementation Details",permalink:"/preview/pr-67/docs/projects/iaindavis.dev/implementation/"},next:{title:"Glue",permalink:"/preview/pr-67/docs/projects/iaindavis.dev/implementation/challenges/glue/"}},d={},c=[{value:"Website",id:"website",level:3},{value:"Pages",id:"pages",level:4},{value:"Docs",id:"docs",level:4},{value:"Blog",id:"blog",level:4},{value:"Custom Components",id:"custom-components",level:3},{value:"Storybook",id:"storybook",level:3},{value:"Reports",id:"reports",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"As of this writing, this website features three broad segments relying on different technologies"}),"\n",(0,s.jsx)(t.h3,{id:"website",children:"Website"}),"\n",(0,s.jsxs)(t.p,{children:["The core of this site is a Docusaurus static documentation site,\nmaking use of primarily the ",(0,s.jsx)(t.code,{children:"docs"})," and ",(0,s.jsx)(t.code,{children:"blog"})," plugins."]}),"\n",(0,s.jsx)(t.p,{children:"The bulk of the content is written in MDX with occasional use of\nMermaid diagrams and other Docusaurus extensions."}),"\n",(0,s.jsx)(t.p,{children:"Docusaurus provides a customizable navbar and footer that is applicable to all plugins."}),"\n",(0,s.jsx)(t.p,{children:"Custom UI elements\nare React (18) components, written in TypeScript."}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.h4,{id:"pages",children:"Pages"}),(0,s.jsx)(t.p,{children:"Static pages managed by the Docusaurus 'pages' plugin. Currently limited to the landing page."}),(0,s.jsx)(t.h4,{id:"docs",children:"Docs"}),(0,s.jsx)(t.p,{children:"The bulk of the planned content relies on the Docusaurus 'docs' plugin. Docs feature an auto-generated sidebar and table of contents, as well as forward/back navigation."}),(0,s.jsx)(t.h4,{id:"blog",children:"Blog"}),(0,s.jsx)(t.p,{children:"A developer blog is currently the only use of the Docusaurus 'blog' plugin, but this may be extended at a later date to include a release history/changelog and any other time-series types of information.\nThe blog page features time-sequential ordering, a 'recent items' menu, grouping posts by tag, and sharing profile information about the author(s)"})]}),"\n",(0,s.jsx)(t.h3,{id:"custom-components",children:"Custom Components"}),"\n",(0,s.jsx)(t.p,{children:"This site features a small (but growing) number of custom React\ncomponents to extend the in-built capabilities of Docusaurus"}),"\n",(0,s.jsx)(t.h3,{id:"storybook",children:"Storybook"}),"\n",(0,s.jsxs)(t.p,{children:["A Storybook showcase of the custom components has been integrated with\nthe website and published alongside it\n",(0,s.jsx)(t.a,{href:"https://iaindavis.dev/storybook/iaindavis.dev",children:"here"})]}),"\n",(0,s.jsx)(t.p,{children:"Storybook stories have also been incorporated into the unit test suite."}),"\n",(0,s.jsx)(t.h3,{id:"reports",children:"Reports"}),"\n",(0,s.jsx)(t.p,{children:"Building the website generates reports, which are shared on the website.\nCurrently generated reports are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Unit tests (pass/fail for individual tests)"}),"\n",(0,s.jsx)(t.li,{children:"Unit test coverage"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},97793:(e,t,n)=>{var s=n(24994).default,o=n(6305).default;t.A=void 0;var i=o(n(96540)),a=s(n(7085)),r=s(n(17805)),l=n(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:n,collapsePrompt:s,children:o}=e;const d=(0,i.useId)(),c=(0,i.useRef)(null),u=(0,i.useRef)(null),p=n||(0,r.default)("expandable-component-default-expand-prompt"),h=s||(0,r.default)("expandable-component-default-collapse-prompt"),[m,f]=(0,i.useState)(t);(0,i.useEffect)((()=>{f((()=>t))}),[t]),(0,i.useEffect)((()=>{m?c.current.focus():u.current.focus()}));const g=()=>f((e=>!e));return(0,l.jsxs)("div",{className:a.default.container,children:[(0,l.jsx)("div",{ref:c,tabIndex:m?0:1,"data-testid":`expandable-section-${d}`,id:`expandable-section-${d}`,className:a.default.expandableBlock,hidden:!m,children:o}),(0,l.jsx)("button",{ref:u,tabIndex:0,className:a.default.toggle,onClick:e=>{g()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),g())},"aria-expanded":m,"aria-controls":`expandable-section-toggle-${d}`,children:m?h:p})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,n)=>{var s=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(92260));t.default=e=>o.default[e]},92260:(e,t,n)=>{var s=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(77178));t.default={...o.default}},7085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);