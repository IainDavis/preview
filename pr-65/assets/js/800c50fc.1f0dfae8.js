"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[1998],{7662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>m,toc:()=>b});var s=n(74848),o=n(28453),i=n(97793);function a(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"copying-styles",children:"Copying Styles"}),"\n",(0,s.jsx)(i.A,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)(t.p,{children:"Docusaurus does not rely on a static file for it's global CSS.\nInstead, it generates a new CSS file (with a new name) on each build."}),(0,s.jsx)(t.p,{children:"This makes rendering Storybook with styles that mirror the Docusaurus\nstyles a bit of a challenge."}),(0,s.jsxs)(t.p,{children:["The solution has been to add a ",(0,s.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/src/buildUtils/docusaurus/postBuild/copyStylesPlugin.js",title:"src/buildUtils/docusaurus/postBuild/copyStylesPlugin.js",children:"custom Docusaurus plugin"})," that runs\nafter the build, and populates the styles in a known location with a\nstable name that Storybook stories can then import."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/docusaurus.config.ts#L29-L31",children:"CopyStylesPlugin applied to the Docusaurus configuration"})}),(0,s.jsx)(t.h3,{id:"assumptions",children:"Assumptions"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Docusaurus global styles will always be a single CSS file"}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["This imposes a limitation on the build order. Docusaurus\n",(0,s.jsx)(t.strong,{children:"must"})," build before Storybook.  For this reason, the preproduction and\nproduction builds have Storybook place its build output directly in\nthe 'build' directory (as opposed to 'static' which would be the\nnormal Docusaurus practice)"]})}),"\n"]}),"\n"]})]})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function r(e){const t={a:"a",em:"em",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"blog-truncation",children:"Blog Truncation"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.p,{children:"Docusaurus allows you to set a custom token for determining where, when shown as\npart of a list, a blog post will be truncated."}),(0,s.jsxs)(t.p,{children:["Docusaurus ",(0,s.jsx)(t.em,{children:"does not"})," automatically strip the new token from the blog post content\nwhen viewed outside of a list."]}),(0,s.jsxs)(t.p,{children:["See this ",(0,s.jsx)(t.a,{href:"/blog/2024/09/16/2024-09-16-fixing-blog-post-truncation/fixing-blog-post-truncation",children:"related blog\npost"})]}),(0,s.jsxs)(t.p,{children:["The fix for this was to add a ",(0,s.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/src/buildUtils/docusaurus/remark/removeTruncateMarker.ts",title:"src/buildUtils/docusaurus/remark/removeTruncateMarker.ts",children:"custom Remark plugin"})," to the ",(0,s.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/docusaurus.config.ts#L58-L60",children:"docusaurus configuration"})]})]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"webpack",children:"Webpack"}),"\n",(0,s.jsx)(t.p,{children:"Storybook and Docusaurus both rely on Webpack, but with different basic\nassumptions."}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.h3,{id:"file-formats",children:"File Formats"}),(0,s.jsx)(t.h4,{id:"mdx",children:"MDX"}),(0,s.jsx)(t.p,{children:"The bulk of the content that will be passed to custom React components\nis defined as MDX. Storybook knows how to ingest MDX fies when they\nare definitions for stories or documentation pages within the Storybook realm,\nbut when MDX is imported as part of a component-under-test, Storybook fails."}),(0,s.jsx)(t.h4,{id:"svg",children:"SVG"}),(0,s.jsxs)(t.p,{children:["Docusaurus is, by default, configured to import SVG files as React\ncomponents using ",(0,s.jsx)(t.a,{href:"https://react-svgr.com/",title:"react-svgr",children:"SVGR"}),". Storybook does not know about this dependency,\neven with the babel configuration in place"]}),(0,s.jsx)("div",{style:{fontSize:"smaller",paddingLeft:"1.5em",paddingBottom:".75em"},children:(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["see ",(0,s.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/src/components/brand/Logo/Logo.tsx#L2",title:"src/components/brand/Logo/Logo.tsx",children:"my Logo component"})," for an examples of\nSVG images being imported, then used as React components."]})})}),(0,s.jsx)(t.p,{children:"When a component-under-test imports SVG in this way, Storybook fails,\nbecause Storybook is trying to import the SVG as text."}),(0,s.jsx)(t.h3,{id:"solution",children:"Solution"}),(0,s.jsx)(t.p,{children:"The solution fixes both of these issues, with the added benefit of aligning the\nDocusaurus and Storybook Babel configurations (which solved some additional\nissues with JSX loading correctly)."}),(0,s.jsx)(t.p,{children:"The solution is a small module that transforms a webpack configuration.\nCurrently the only transformations are applied to the 'module.rules' array, but\nthe module is easily extensible to apply to other portions of the config object."}),(0,s.jsx)(t.mermaid,{value:'graph LR\n    rules[RuleSetRule]\n    transforms["Transform&lt;RuleSetRule[]&gt;"]\n    composed["Ordered sequence of transformations"]\n    config["Webpack Config"]\n\n    rules --\x3e|populate| transforms \n    transforms --\x3e|compose| composed\n    composed --\x3e|apply rules| config'}),(0,s.jsxs)(t.p,{children:["A rule is an object conforming to the TypeScript type ",(0,s.jsx)(t.code,{children:"RuleSetRule"}),", provided by\nwebpack."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/src/buildUtils/storybook/webpack/webpackRules.ts",title:"Set of defined webpack rules",children:"rules"})}),(0,s.jsxs)(t.p,{children:["A Transform is a function that accepts a ",(0,s.jsx)(t.code,{children:"RuleSetRule[]"})," and produces another\n",(0,s.jsx)(t.code,{children:"RuleSetRule[]"}),", assumed to be a transformation of the first set. Used to apply\na single rule."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/src/buildUtils/storybook/webpack/webpackTransforms.ts",title:"Essentially reducer functions that apply rules in various ways",children:"transforms"})}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/src/buildUtils/storybook/webpack/webpackFinal.ts",title:"Function that composes and applies transformations",children:"webpackFinal"})," function applies the above logic to\nthe original configuration logic."]}),(0,s.jsx)(t.p,{children:"This approach is highly maintainable and extensible"}),(0,s.jsx)(t.p,{children:"The current rules applied:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Ensure Storybook is using the same babel config as Docusaurus (solving JSX and\nMDX issues)"}),"\n",(0,s.jsx)(t.li,{children:"Exclude Storybook from importing SVG files using any default configuration"}),"\n",(0,s.jsx)(t.li,{children:"Prompt Storybook to import SVG using SVGR (as Docusaurus does)"}),"\n"]})]}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}const h={title:"Glue",date:"2024-09-30T11:24"},p=void 0,m={id:"projects/iaindavis.dev/implementation/challenges/glue/glue",title:"Glue",description:"This website includes several different technologies that do not fit",source:"@site/docs/projects/01-iaindavis.dev/03-implementation/02-challenges/01-glue/01-glue.mdx",sourceDirName:"projects/01-iaindavis.dev/03-implementation/02-challenges/01-glue",slug:"/projects/iaindavis.dev/implementation/challenges/glue/",permalink:"/preview/pr-65/docs/projects/iaindavis.dev/implementation/challenges/glue/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/01-iaindavis.dev/03-implementation/02-challenges/01-glue/01-glue.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Glue",date:"2024-09-30T11:24"},sidebar:"projectsSidebar",previous:{title:"Major Segments",permalink:"/preview/pr-65/docs/projects/iaindavis.dev/implementation/segments/"},next:{title:"Other Challenges",permalink:"/preview/pr-65/docs/projects/iaindavis.dev/implementation/challenges/other-challenges/"}},f={},b=[{value:"Copying Styles",id:"copying-styles",level:2},{value:"Assumptions",id:"assumptions",level:3},{value:"Blog Truncation",id:"blog-truncation",level:2},{value:"Webpack",id:"webpack",level:2},{value:"File Formats",id:"file-formats",level:3},{value:"MDX",id:"mdx",level:4},{value:"SVG",id:"svg",level:4},{value:"Solution",id:"solution",level:3}];function g(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This website includes several different technologies that do not fit\nneatly together out-of-the-box. This page identifies some of the\nthings that have been done to make these different elements act like a team."}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(u,{})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},97793:(e,t,n)=>{var s=n(24994).default,o=n(6305).default;t.A=void 0;var i=o(n(96540)),a=s(n(7085)),l=s(n(17805)),r=n(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:n,collapsePrompt:s,children:o}=e;const c=(0,i.useId)(),d=(0,i.useRef)(null),u=(0,i.useRef)(null),h=n||(0,l.default)("expandable-component-default-expand-prompt"),p=s||(0,l.default)("expandable-component-default-collapse-prompt"),[m,f]=(0,i.useState)(t);(0,i.useEffect)((()=>{f((()=>t))}),[t]),(0,i.useEffect)((()=>{m?d.current.focus():u.current.focus()}));const b=()=>f((e=>!e));return(0,r.jsxs)("div",{className:a.default.container,children:[(0,r.jsx)("div",{ref:d,tabIndex:m?0:1,"data-testid":`expandable-section-${c}`,id:`expandable-section-${c}`,className:a.default.expandableBlock,hidden:!m,children:o}),(0,r.jsx)("button",{ref:u,tabIndex:0,className:a.default.toggle,onClick:e=>{b()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),b())},"aria-expanded":m,"aria-controls":`expandable-section-toggle-${c}`,children:m?p:h})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,n)=>{var s=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(92260));t.default=e=>o.default[e]},92260:(e,t,n)=>{var s=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(77178));t.default={...o.default}},7085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);