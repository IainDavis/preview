"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[9349],{58491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var o=n(33593),s=n(74848),a=n(28453),i=n(97793);const l={title:"Expandable!",date:"2024-09-14T11:28",authors:["iain"],tags:["storybook","docusaurus","customComponents","react"]},r=void 0,d={authorsImageUrls:[void 0]},u=[{value:"Expandable!",id:"expandable",level:3},{value:"What I learned from building this component",id:"what-i-learned-from-building-this-component",level:3},{value:"CSS Modules",id:"css-modules",level:4},{value:"CSS Pseudo-Selectors",id:"css-pseudo-selectors",level:4},{value:"What I still want to do",id:"what-i-still-want-to-do",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["I really like Docusaurus, but I also find there are some things it's missing.\nHappily, one of the ",(0,s.jsx)(t.em,{children:"best"})," things about it is that it is, at bottom, React,\nwhich means you can add the things you find missing."]}),"\n",(0,s.jsx)(t.p,{}),"\n",(0,s.jsxs)(t.p,{children:["One of the things I run into most frequently that strikes me as a glaring and\npuzzling ommission is the lack of a collapsible section of content. To be sure,\nmarkdown generally (and Docusaurus specifically) supports using the ",(0,s.jsx)(t.code,{children:"details"}),"\nelement. But Docusaurus handling of it adds styling I would not choose to add by\ndefault, like so:"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"<details>\n<summary>This is an expandable block</summary>\n\nIt has some additional content that you may opt-in to, or simply pass over as you please.\nIt's also obnoxiously removed from the primary flow of the document.\n</details>\n"})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"This is an expandable block"}),(0,s.jsx)(t.p,{children:"It has some additional content that you may opt-into, or simply pass over as you please."}),(0,s.jsx)(t.p,{children:"It's also obnoxiously shifted out of the primary flow of the document by\nexcessive default styling."})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["This is fine and good if what you want is to highlight something. But very often\nwhat I want is to ",(0,s.jsx)(t.em,{children:"elide"})," something -- to give the reader only the information\nthey need at the time, and not bury it in unnecessary content. An example might\nbe instructions on installing Java. Some subset of your team might need those\ninstructions if they are new joiners, and it should be there in the flow of the\ndocument where they would expect to find it. But most folks who've been on your\nteam a while will probably know how to install Java, and can quite happily skip\nover those instructions."]}),"\n",(0,s.jsx)(t.p,{children:"So I came up with my own little Expandable component:"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"expandable",children:"Expandable!"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(t.p,{children:"It's discreet, and it leaves the elided content in place in the regular flow of\nthe document. It also features simple visual elements to clarify the extent of\nthe expanded portion. It supports content in:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"text"}),"\n",(0,s.jsx)(t.li,{children:"JSX"}),"\n",(0,s.jsx)(t.li,{children:"markdown"}),"\n"]}),(0,s.jsx)("h2",{children:"Here's some JSX"})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Here's what the code/markdown looks like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:"### Expandable\n<Expandable>\n\nIt's discreet, and it leaves the elided content in place in the regular flow of\nthe document. It also features simple visual elements to clarify the extent of\nthe expanded portion. It supports content in:\n\n* text\n* JSX\n* markdown\n\n<h2>Here's some JSX</h2>\n</Expandable>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In addition to the above, it supports starting in the expanded state, and custom\nexpand/collapse prompts. See the ",(0,s.jsx)(t.a,{href:"http://localhost:3000/storybook/iaindavis.dev/?path=/docs/custom-components-expandable--docs",children:"Storybook"})]}),"\n",(0,s.jsx)(t.h3,{id:"what-i-learned-from-building-this-component",children:"What I learned from building this component"}),"\n",(0,s.jsx)(t.h4,{id:"css-modules",children:"CSS Modules"}),"\n",(0,s.jsxs)(t.p,{children:["CSS Modules is the default assumption of Docusaurus. I hadn't much used it\nyet... I've used CSS in JS a bit, and ",(0,s.jsx)(t.code,{children:"styled-components"})," a bit. I like CSS\nModules for keeping things, well, modular. And the simplicity and directness of\nit is nice. I do like the dynamism that ",(0,s.jsx)(t.code,{children:"styled-components"})," provides though."]}),"\n",(0,s.jsx)(t.h4,{id:"css-pseudo-selectors",children:"CSS Pseudo-Selectors"}),"\n",(0,s.jsxs)(t.p,{children:["I also had to give myself a little bit of a refresher on pseudo-selectors. I\nused ",(0,s.jsx)(t.code,{children:":before"})," and ",(0,s.jsx)(t.code,{children:":after"})," to inject the little ornamental circles at the top\nand bottom of the left-hand line showing the extent of the expandable section."]}),"\n",(0,s.jsx)(t.h3,{id:"what-i-still-want-to-do",children:"What I still want to do"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"I'd love to introduce an 'exclusive' option so that you can assign each one to a\ngroup, and then expanding one block in the group causes the rest to\nautomatically collapse. Not really sure what the best way to go about producing\nthe shared state is yet. I suppose maybe swapping out my functional react\ncomponent with a class component and storing some of the state on the class\ndefinition, but I'll give it some more thought before I jump in. For now, I'm\nhappy with how it is."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"I also initially played around with a 'title' property that caused some text to\nbe rendered above the expandable portion. I eventually landed on the decision\nthat the surrounding markdown was already suitable for that purpose, but I may\nchange my mind some time in the future and reintroduce that feature."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Eventually, I'd like to move this and any other component I build for this\npurpose into their own Docusaurus component library so that I can use them in\nother repositories as well."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Still need to sort out testing. I've had some difficulty converting my\nStorybook stories to Jest tests. Mostly with the import of various assets\nbeing handled differently by Storybook, Jest, and Docusaurus. I'm working with\nseveral tiers of pre-processing (TypeScript, React/JSX, Storybook, Jest) and\nseveral kinds of files being treated as modules that are not usually (CSS,\nMDX). Getting all those things to work in concert has been something of a\nchallenge. I may do another blog post just on that. But in the mean-time, I'm\nthinking of just using Storybook as a showcase, and relying on something\npurpose built for testing. I'm considering giving Playwright a go for\ncomponent testing. Or maybe I'll use the Storybook environment directly,\nrather than running it through Jest, if I can figure out how to automate that."}),"\n",(0,s.jsx)(t.p,{children:"Time will tell. For now, I'm happy to have my new little component that makes\nDocusaurus just that little bit more useful to me."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},97793:(e,t,n)=>{var o=n(47635).default,s=n(95754).default;t.A=void 0;var a=s(n(96540)),i=o(n(7290)),l=o(n(17805)),r=n(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:n,collapsePrompt:o,children:s}=e;const d=(0,a.useId)(),u=(0,a.useRef)(null),c=(0,a.useRef)(null),h=n||(0,l.default)("expandable-component-default-expand-prompt"),p=o||(0,l.default)("expandable-component-default-collapse-prompt"),[m,f]=(0,a.useState)(t);(0,a.useEffect)((()=>{f((()=>t))}),[t]),(0,a.useEffect)((()=>{m?u.current.focus():c.current.focus()}));const b=()=>f((e=>!e));return(0,r.jsxs)("div",{className:i.default.container,children:[(0,r.jsx)("div",{ref:u,tabIndex:m?0:1,"data-testid":`expandable-section-${d}`,id:`expandable-section-${d}`,className:i.default.expandableBlock,hidden:!m,children:s}),(0,r.jsx)("button",{ref:c,tabIndex:0,className:i.default.toggle,onClick:e=>{b()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),b())},"aria-expanded":m,"aria-controls":`expandable-section-toggle-${d}`,children:m?p:h})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,n)=>{var o=n(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n(92260));t.default=e=>s.default[e]},92260:(e,t,n)=>{var o=n(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n(77178));t.default={...s.default}},7290:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(96540);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}},33593:e=>{e.exports=JSON.parse('{"permalink":"/preview/pr-70/blog/2024/09/14/2024-09-14-expandable/expandable","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-14-expandable/2024-09-14-expandable.mdx","source":"@site/blog/2024-09-14-expandable/2024-09-14-expandable.mdx","title":"Expandable!","description":"I really like Docusaurus, but I also find there are some things it\'s missing.","date":"2024-09-14T11:28:00.000Z","tags":[{"inline":false,"label":"Storybook","permalink":"/preview/pr-70/blog/tags/storybook","description":"Posts to do with configuring or using Storybook"},{"inline":false,"label":"Docusaurus","permalink":"/preview/pr-70/blog/tags/docusaurus","description":"Posts related to working with Docusaurus configuration and components"},{"inline":false,"label":"Custom Docusaurus Components","permalink":"/preview/pr-70/blog/tags/custom-components","description":"Posts to do with components I\'ve developed to extend Docusaurus functionallity"},{"inline":false,"label":"React","permalink":"/preview/pr-70/blog/tags/react","description":"Posts to do with the React ecosystem"}],"readingTime":4.455,"hasTruncateMarker":true,"authors":[{"name":"Iain Davis","title":"Software Engineer, Principal @ IainDavis.dev","url":"https://iaindavis.dev","email":"iain@iaindavis.dev","page":{"permalink":"/preview/pr-70/blog/authors/iain"},"socials":{"github":"https://github.com/IainDavis","linkedin":"https://www.linkedin.com/in/iaindavis-dev/","stackoverflow":"https://stackoverflow.com/users/11380293/iaindavis-dev","reddit":"https://www.reddit.com/user/IainDavis-dev/"},"imageURL":"/preview/pr-70/img/authors/idavis.jpg","key":"iain"}],"frontMatter":{"title":"Expandable!","date":"2024-09-14T11:28","authors":["iain"],"tags":["storybook","docusaurus","customComponents","react"]},"unlisted":false,"prevItem":{"title":"Challenges Getting Docusaurus Styles Into Storybook","permalink":"/preview/pr-70/blog/2024/09/14/2024-09-14-docusaurus-styles-in-storybook/docusaurus-styles-in-storybook"},"nextItem":{"title":"Catch-Up Post","permalink":"/preview/pr-70/blog/2024/09/14/2024-09-14-catch-up/catch-up"}}')}}]);