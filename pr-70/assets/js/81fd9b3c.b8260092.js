"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[8331],{76017:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var n=o(22554),a=o(74848),s=o(28453);o(97793);const r={title:"Challenges Getting Docusaurus Styles Into Storybook",date:"2024-09-14T14:40",tags:["docusaurus","storybook","formatting"]},i=void 0,l={authorsImageUrls:[]},d=[];function u(e){const t={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"I thought it would be a good idea to have a central location to showcase\nwhatever components I add to the Docusaurus repertoire."}),"\n",(0,a.jsxs)(t.p,{children:["I'd worked with ",(0,a.jsx)(t.a,{href:"https://storybook.js.org/",children:"Storybook"})," before, and found it\npretty handy. During development, it gives you a way to interact with a component-in-progress and\nsee that it works as intended. It can serve as a beginning basis for unit and\ncomponent tests, and it can be a really handy tool for communicating with\nnon-technical stakeholders... clicking on a component and seeing immediately how\nit responds is much easier to grasp than an engineer trying to explain something\nto you in non-engineer-speak as best they can. The proof is in the pudding, as\nthey say."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},97793:(e,t,o)=>{var n=o(47635).default,a=o(95754).default;t.A=void 0;var s=a(o(96540)),r=n(o(7290)),i=n(o(17805)),l=o(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:o,collapsePrompt:n,children:a}=e;const d=(0,s.useId)(),u=(0,s.useRef)(null),c=(0,s.useRef)(null),p=o||(0,i.default)("expandable-component-default-expand-prompt"),f=n||(0,i.default)("expandable-component-default-collapse-prompt"),[g,m]=(0,s.useState)(t);(0,s.useEffect)((()=>{m((()=>t))}),[t]),(0,s.useEffect)((()=>{g?u.current.focus():c.current.focus()}));const b=()=>m((e=>!e));return(0,l.jsxs)("div",{className:r.default.container,children:[(0,l.jsx)("div",{ref:u,tabIndex:g?0:1,"data-testid":`expandable-section-${d}`,id:`expandable-section-${d}`,className:r.default.expandableBlock,hidden:!g,children:a}),(0,l.jsx)("button",{ref:c,tabIndex:0,className:r.default.toggle,onClick:e=>{b()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),b())},"aria-expanded":g,"aria-controls":`expandable-section-toggle-${d}`,children:g?f:p})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,o)=>{var n=o(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(92260));t.default=e=>a.default[e]},92260:(e,t,o)=>{var n=o(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(77178));t.default={...a.default}},7290:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var n=o(96540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}},22554:e=>{e.exports=JSON.parse('{"permalink":"/preview/pr-70/blog/2024/09/14/2024-09-14-docusaurus-styles-in-storybook/docusaurus-styles-in-storybook","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-14-docusaurus-styles-in-storybook/2024-09-14-docusaurus-styles-in-storybook.mdx","source":"@site/blog/2024-09-14-docusaurus-styles-in-storybook/2024-09-14-docusaurus-styles-in-storybook.mdx","title":"Challenges Getting Docusaurus Styles Into Storybook","description":"I thought it would be a good idea to have a central location to showcase","date":"2024-09-14T14:40:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/preview/pr-70/blog/tags/docusaurus","description":"Posts related to working with Docusaurus configuration and components"},{"inline":false,"label":"Storybook","permalink":"/preview/pr-70/blog/tags/storybook","description":"Posts to do with configuring or using Storybook"},{"inline":false,"label":"Formatting/Styles/CSS","permalink":"/preview/pr-70/blog/tags/formatting","description":"Posts to do with configuring styles and formatting"}],"readingTime":2.655,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Challenges Getting Docusaurus Styles Into Storybook","date":"2024-09-14T14:40","tags":["docusaurus","storybook","formatting"]},"unlisted":false,"prevItem":{"title":"Impromptu Brand Work","permalink":"/preview/pr-70/blog/2024/09/14/2024-09-14-impromptu-brand-work/impromptu-brand-work"},"nextItem":{"title":"Expandable!","permalink":"/preview/pr-70/blog/2024/09/14/2024-09-14-expandable/expandable"}}')}}]);