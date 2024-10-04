"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[5551],{78079:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(74848),s=o(28453);o(97793);const a={title:"Challenges Getting Docusaurus Styles Into Storybook",date:"2024-09-14T14:40",tags:["docusaurus","storybook","formatting"]},r=void 0,i={permalink:"/preview/pr-63/blog/2024/09/14/2024-09-14-docusaurus-styles-in-storybook/docusaurus-styles-in-storybook",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-14-docusaurus-styles-in-storybook/2024-09-14-docusaurus-styles-in-storybook.mdx",source:"@site/blog/2024-09-14-docusaurus-styles-in-storybook/2024-09-14-docusaurus-styles-in-storybook.mdx",title:"Challenges Getting Docusaurus Styles Into Storybook",description:"I thought it would be a good idea to have a central location to showcase",date:"2024-09-14T14:40:00.000Z",tags:[{inline:!1,label:"Docusaurus",permalink:"/preview/pr-63/blog/tags/docusaurus",description:"Posts related to working with Docusaurus configuration and components"},{inline:!1,label:"Storybook",permalink:"/preview/pr-63/blog/tags/storybook",description:"Posts to do with configuring or using Storybook"},{inline:!1,label:"Formatting/Styles/CSS",permalink:"/preview/pr-63/blog/tags/formatting",description:"Posts to do with configuring styles and formatting"}],readingTime:2.655,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Challenges Getting Docusaurus Styles Into Storybook",date:"2024-09-14T14:40",tags:["docusaurus","storybook","formatting"]},unlisted:!1,prevItem:{title:"Impromptu Brand Work",permalink:"/preview/pr-63/blog/2024/09/14/2024-09-14-impromptu-brand-work/impromptu-brand-work"},nextItem:{title:"Expandable!",permalink:"/preview/pr-63/blog/2024/09/14/2024-09-14-expandable/expandable"}},l={authorsImageUrls:[]},d=[];function c(e){const t={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"I thought it would be a good idea to have a central location to showcase\nwhatever components I add to the Docusaurus repertoire."}),"\n",(0,n.jsxs)(t.p,{children:["I'd worked with ",(0,n.jsx)(t.a,{href:"https://storybook.js.org/",children:"Storybook"})," before, and found it\npretty handy. During development, it gives you a way to interact with a component-in-progress and\nsee that it works as intended. It can serve as a beginning basis for unit and\ncomponent tests, and it can be a really handy tool for communicating with\nnon-technical stakeholders... clicking on a component and seeing immediately how\nit responds is much easier to grasp than an engineer trying to explain something\nto you in non-engineer-speak as best they can. The proof is in the pudding, as\nthey say."]}),"\n",(0,n.jsx)(t.p,{}),"\n",(0,n.jsx)(t.p,{children:"Another nice feature is its extensibility. If it doesn't do something you want\nit to do, you can often create an addon or a decorator that will accomplish it."}),"\n",(0,n.jsx)(t.p,{children:"So I downloaded the dependency, and began writing stories for my shiny new\n'Expandable' component."}),"\n",(0,n.jsx)(t.p,{children:"Imagine my distress when I started up the development server for the first time\nand saw that my themes weren't being applied to the custom element. I worked\nhard to include those themes!"}),"\n",(0,n.jsx)(t.p,{children:"(I promise, I'm clicking the button in the screen recording shown below)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"screen capture showing theme button being clicked, and nothing changing in the\ndisplay",src:o(4898).A+"",title:"Oh Noes!",width:"640",height:"507"})}),"\n",(0,n.jsxs)(t.p,{children:["It took me a little while to track down the problem. It turns out that\nDocusaurus and Storybook drive their theme-based styles off of different\nconditions. Docusaurus applies a data attribute at the root of the HTML\ndocument, which it then uses as the selector for its CSS styles. Storybook uses\nthe built-in ",(0,n.jsx)(t.code,{children:"class"})," attribute."]}),"\n",(0,n.jsx)(t.p,{children:"I didn't want to pollute my code with a bunch of redundant attributes that\naccomplish the same thing. Happily, I was able to leverage Storybook's\nextensibility to solve that problem."}),"\n",(0,n.jsxs)(t.p,{children:["I created a Decorator... an object that Storybook, in essence, wraps ",(0,n.jsx)(t.em,{children:"around"}),"\nyour stories to provide new functionality. In this case, I captured the current\ntheme from the Storybook context, and set the ",(0,n.jsx)(t.code,{children:"data-theme"})," attribute at the root\nof the preview pane accordingly."]}),"\n",(0,n.jsx)(t.p,{children:"Here's my very simple decorator:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:"title='withDocusaurusStyles.ts'",children:"import React from \"react\";\nimport { useEffect } from \"react\";\n\n// apply a data attribute ('data-theme') at the root element of the\n// Storybook preview iframe so that Docusaurus styles are applied\n// within the preview\nexport default (Story, context) => {\n    const { theme='light' } = context?.globals;\n    useEffect(() => {\n        const themeRoot = document.querySelector('html');\n        themeRoot && themeRoot.setAttribute('data-theme', theme);\n    }, [theme])\n\n    return <Story />\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["I applied those to every published story via my ",(0,n.jsx)(t.code,{children:".storybook/preview.ts"})," file, and now my\nthemed Docusaurus components respond to the dark/light theme in Storybook!"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:'title=".storybook/preview.ts"',children:"import type { Preview } from \"@storybook/react\";\nimport './assets/styles/docusaurus_global.css'\nimport withDocusaurusStyles from './decorators/withDocusaurusStyles';\nimport { withThemeByClassName } from \"@storybook/addon-themes\";\n\nconst preview: Preview = {\n  decorators: [\n    // highlight-next-line\n    withDocusaurusStyles,\n    withThemeByClassName({\n      themes: {\n        light: 'light',\n        dark: 'dark' ,\n      },\n      defaultTheme: 'light',\n    })\n  ],\n  parameters: {\n    controls: {\n      matchers: {\n        color: /(background|color)$/i,\n        date: /Date$/i,\n      },\n    },\n  },\n};\n\nexport default preview;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Pretty pleased."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Screen capture showing theme button being clicked and colors being applied as expected",src:o(69477).A+"",title:"Thats more like it",width:"640",height:"507"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},97793:(e,t,o)=>{var n=o(24994).default,s=o(6305).default;t.A=void 0;var a=s(o(96540)),r=n(o(7085)),i=n(o(17805)),l=o(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:o,collapsePrompt:n,children:s}=e;const d=(0,a.useId)(),c=(0,a.useRef)(null),u=(0,a.useRef)(null),p=o||(0,i.default)("expandable-component-default-expand-prompt"),h=n||(0,i.default)("expandable-component-default-collapse-prompt"),[m,g]=(0,a.useState)(t);(0,a.useEffect)((()=>{g((()=>t))}),[t]),(0,a.useEffect)((()=>{m?c.current.focus():u.current.focus()}));const b=()=>g((e=>!e));return(0,l.jsxs)("div",{className:r.default.container,children:[(0,l.jsx)("div",{ref:c,tabIndex:m?0:1,"data-testid":`expandable-section-${d}`,id:`expandable-section-${d}`,className:r.default.expandableBlock,hidden:!m,children:s}),(0,l.jsx)("button",{ref:u,tabIndex:0,className:r.default.toggle,onClick:e=>{b()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),b())},"aria-expanded":m,"aria-controls":`expandable-section-toggle-${d}`,children:m?h:p})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,o)=>{var n=o(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(o(92260));t.default=e=>s.default[e]},92260:(e,t,o)=>{var n=o(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(o(77178));t.default={...s.default}},7085:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},4898:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/broken-4fe89e7d100605a80c880b6d1c94359f.gif"},69477:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/fixed-c35545543586568f55c431c0ac093e55.gif"},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var n=o(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);