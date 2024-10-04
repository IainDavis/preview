"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[5399],{10012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(74848),s=n(28453),o=n(97793);const a={title:"Other Challenges"},l=void 0,r={id:"projects/iaindavis.dev/implementation/challenges/other-challenges/other-challenges",title:"Other Challenges",description:"Docusaurus Diff Formatting",source:"@site/docs/projects/iaindavis.dev/03-implementation/02-challenges/02-other-challenges/02-other-challenges.mdx",sourceDirName:"projects/iaindavis.dev/03-implementation/02-challenges/02-other-challenges",slug:"/projects/iaindavis.dev/implementation/challenges/other-challenges/",permalink:"/preview/pr-63/docs/projects/iaindavis.dev/implementation/challenges/other-challenges/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/iaindavis.dev/03-implementation/02-challenges/02-other-challenges/02-other-challenges.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Other Challenges"},sidebar:"projectsSidebar",previous:{title:"Glue",permalink:"/preview/pr-63/docs/projects/iaindavis.dev/implementation/challenges/glue/"},next:{title:"CI/CD",permalink:"/preview/pr-63/docs/projects/iaindavis.dev/implementation/ci-cd/"}},d={},c=[{value:"Docusaurus Diff Formatting",id:"docusaurus-diff-formatting",level:2},{value:"Solution",id:"solution",level:3},{value:"Bonus Win",id:"bonus-win",level:3},{value:"Caveat",id:"caveat",level:3},{value:"Module Hell With Jest",id:"module-hell-with-jest",level:2},{value:"Solution",id:"solution-1",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"docusaurus-diff-formatting",children:"Docusaurus Diff Formatting"}),"\n",(0,i.jsxs)(t.p,{children:["Docusaurus ",(0,i.jsx)(t.code,{children:"diff"})," highlighting didn't work properly in code blocks --\nno highlights appeared in the rendered output at all."]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)(t.h3,{id:"solution",children:"Solution"}),(0,i.jsx)(t.p,{children:'Define "magic comments" in remark configuration and custom CSS styles for\nadd/remove highlights.'}),(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://docusaurus.io/docs/markdown-features/code-blocks#custom-magic-comments",title:"'Magic Comments' documentation in Docusaurus",children:"Magic comments"})," are a remark feature that applies a CSS style to the next line in\nthe output."]})}),(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"https://iaindavis.dev/blog/2024/09/15/2024-09-15-fixing-diffs/fixing-diffs",title:"Fixing Diffs",children:"this blog post"})," for more details."]}),(0,i.jsx)(t.h3,{id:"bonus-win",children:"Bonus Win"}),(0,i.jsx)(t.p,{children:"This approach means that Docusaurus code blocks retain their original\nsyntax highlighting for the underlying language!"}),(0,i.jsx)(t.h3,{id:"caveat",children:"Caveat"}),(0,i.jsx)(t.p,{children:"Adding or removing more than just a line or two results in ugly\nwrite-time markdown."}),(0,i.jsxs)(t.p,{children:["There is a ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/3318#issuecomment-2065547731",title:"More robust fix from Docusaurus PR",children:"more robust fix"}),"\nthat may be applied later, but for now this restores an essential feature\nwith minimal effort"]})]}),"\n",(0,i.jsx)(t.h2,{id:"module-hell-with-jest",children:"Module Hell With Jest"}),"\n",(0,i.jsxs)(t.p,{children:["During development Docusaurus was updated from v3.2 to v3.5. That\ncarried with it an update to ",(0,i.jsx)(t.code,{children:"mdx-js"})," to ",(0,i.jsx)(t.code,{children:"v3"}),", which changed from a\nhybrid CommonJS/ESModules package to being purely ESModules, which\nentirely broke Jest (which relies on CommonJS for importing modules.)."]}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsx)(t.p,{children:"This was compounded by Jest not performing according to it's\ndocumentation."}),(0,i.jsxs)(t.p,{children:["Jest allows custom transformers. As of Jest v28 (this\nsite was using v29 at the time), those transformers conform to an\ninterface that requires ",(0,i.jsx)(t.em,{children:"either"})," a synchronous ",(0,i.jsx)(t.code,{children:"process"})," function or an\nasynchronous ",(0,i.jsx)(t.code,{children:"processAsync"})," function. If the ",(0,i.jsx)(t.code,{children:"processAsync"})," function is supplied,\nJest should prefer it, and the ",(0,i.jsx)(t.code,{children:"process"})," function should be irrelevant."]}),(0,i.jsxs)(t.p,{children:["That ",(0,i.jsx)(t.em,{children:"should"})," have allowed a dynamic import (inherently asynchronous)\nof the problem module. Unfortunately, Jest continually insisted"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["using the synchronous ",(0,i.jsx)(t.code,{children:"process"})," function, if it was supplied"]}),"\n",(0,i.jsxs)(t.li,{children:["failing to compile if ",(0,i.jsx)(t.code,{children:"process"})," was not supplied"]}),"\n"]}),(0,i.jsx)(t.h3,{id:"solution-1",children:"Solution"}),(0,i.jsx)(t.p,{children:"Abandon Jest."}),(0,i.jsxs)(t.p,{children:["I explored alternatives with my AI and landed on using\n[Vitest][",(0,i.jsx)(t.a,{href:"https://vitest.dev/",children:"https://vitest.dev/"}),"]."]}),(0,i.jsxs)(t.p,{children:["Vitest is built with an ESModules-first mindset. But there was ",(0,i.jsx)(t.em,{children:"still"}),"\na problem because Vitest also uses an underlying library for module\nimport that depends on CommonJS. But in the case of Vitest, the\ndynamic import solution ",(0,i.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/vitest.config.ts#L4-L6",title:"Dynamic import of module `mdx-js/rollup` in Vitest configuration",children:"worked as expected."})]})]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},97793:(e,t,n)=>{var i=n(24994).default,s=n(6305).default;t.A=void 0;var o=s(n(96540)),a=i(n(7085)),l=i(n(17805)),r=n(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:n,collapsePrompt:i,children:s}=e;const d=(0,o.useId)(),c=(0,o.useRef)(null),u=(0,o.useRef)(null),h=n||(0,l.default)("expandable-component-default-expand-prompt"),p=i||(0,l.default)("expandable-component-default-collapse-prompt"),[m,f]=(0,o.useState)(t);(0,o.useEffect)((()=>{f((()=>t))}),[t]),(0,o.useEffect)((()=>{m?c.current.focus():u.current.focus()}));const g=()=>f((e=>!e));return(0,r.jsxs)("div",{className:a.default.container,children:[(0,r.jsx)("div",{ref:c,tabIndex:m?0:1,"data-testid":`expandable-section-${d}`,id:`expandable-section-${d}`,className:a.default.expandableBlock,hidden:!m,children:s}),(0,r.jsx)("button",{ref:u,tabIndex:0,className:a.default.toggle,onClick:e=>{g()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),g())},"aria-expanded":m,"aria-controls":`expandable-section-toggle-${d}`,children:m?p:h})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,n)=>{var i=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(92260));t.default=e=>s.default[e]},92260:(e,t,n)=>{var i=n(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(77178));t.default={...s.default}},7085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);