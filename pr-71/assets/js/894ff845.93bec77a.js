"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[4023],{4827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"projects/iaindavis.dev/key-learnings/key-learnings","title":"Key Learnings","description":"A lot of the things I\'ve learned working on this site have been about","source":"@site/docs/projects/01-iaindavis.dev/04-key-learnings/04-key-learnings.mdx","sourceDirName":"projects/01-iaindavis.dev/04-key-learnings","slug":"/projects/iaindavis.dev/key-learnings/","permalink":"/preview/pr-71/docs/projects/iaindavis.dev/key-learnings/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/01-iaindavis.dev/04-key-learnings/04-key-learnings.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Key Learnings"},"sidebar":"projectsSidebar","previous":{"title":"Tests","permalink":"/preview/pr-71/docs/projects/iaindavis.dev/implementation/tests/"},"next":{"title":"Planned Features","permalink":"/preview/pr-71/docs/projects/iaindavis.dev/future-plans/"}}');var s=t(74848),a=t(28453);const r={title:"Key Learnings"},o=void 0,l={},d=[{value:"TypeScript",id:"typescript",level:2},{value:"AI",id:"ai",level:2},{value:"JavaScript/TypeScript EcoSystem",id:"javascripttypescript-ecosystem",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Key Learning: Use the &#39;Hidden&#39; Attribute",id:"key-learning-use-the-hidden-attribute",level:3},{value:"Additional learning:",id:"additional-learning",level:4},{value:"Key Learning: Focus Management",id:"key-learning-focus-management",level:3},{value:"CSS Modules",id:"css-modules",level:2},{value:"Figma",id:"figma",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Habit",id:"habit",level:2},{value:"Key Learning: Explore alternatives sooner",id:"key-learning-explore-alternatives-sooner",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'A lot of the things I\'ve learned working on this site have been about\ngetting into details that have been abstracted away, when working for\na big enterprise corporation with pre-established "Paved Roads".'}),"\n",(0,s.jsx)(n.p,{children:"Getting various JavaScript tools to work together peaceably, setting up a\npreview environment, or a CI/CD flow, or thinking about accessibility... these\nthings all used to be done for me."}),"\n",(0,s.jsx)(n.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,s.jsx)(n.p,{children:"I'm fluent with TypeScript to the extent that I can usually make it do\nwhat I want, and anyone reading my TypeScript code doesn't themselves\nhave to be a TypeScript expert to understand it."}),"\n",(0,s.jsx)(n.p,{children:"That said, there's always more to learn. In this project that has been more\nabout the slow accumulation of fluency, rather than any new features."}),"\n",(0,s.jsx)(n.p,{children:"I started using TypeScript about a year ago, I'd guess, and it's quickly become\nmy language of choice."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"ai",children:"AI"}),"\n",(0,s.jsx)(n.p,{children:"I'm including my AI Code Assistant as a separate project. You can see more about\nthese learnings there. Suffice it to say that really getting my hands dirty with\nAI and incorporating it into my workflow has been a revelation about what is\npossible, and how it will change the way I work."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"javascripttypescript-ecosystem",children:"JavaScript/TypeScript EcoSystem"}),"\n",(0,s.jsx)(n.p,{children:"I've been aware of the challenges of the JavaScript ecosystem for some\ntime...  the need for preprocessing (transpiling & type-checking) and\nintegration of various independent tools (linters, test libraries,\netc.) and then making all of those things work together. But this\ndetail has largely been obscured from me in the past by paved roads.\nSure, I've had to tweak an integration here or there, but building a\nJavaScript/TypeScript entity with some fairly complex interactions\nfrom the ground up has been a new experience, and I feel like I\nunderstand things like Babel and Webpack a little better than I did\nbefore."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,s.jsx)(n.p,{children:"My AI Code assistant pointed out I wasn't following accessibility best-practices."}),"\n",(0,s.jsx)(n.h3,{id:"key-learning-use-the-hidden-attribute",children:"Key Learning: Use the 'Hidden' Attribute"}),"\n",(0,s.jsx)(n.p,{children:"The 'hidden' attribute is semantically more-correct than simply omitting a\nsubtree from the during rendering. Omitting elements also runs the risk of\ncreating an WAI-ARIA attribute referencing an ID that is not there."}),"\n",(0,s.jsx)(n.h4,{id:"additional-learning",children:"Additional learning:"}),"\n",(0,s.jsxs)(n.p,{children:["Using 'hidden' means that test matchers like ",(0,s.jsx)(n.code,{children:"expect(element).toBeVisible()"}),"\nwork correctly, where simply applying CSS styles may not."]}),"\n",(0,s.jsx)(n.h3,{id:"key-learning-focus-management",children:"Key Learning: Focus Management"}),"\n",(0,s.jsx)(n.p,{children:"Directing the browser focus to the right element can make a huge difference in\nthe usability of your compnent for someone relying on assistive technologies\nlike screen readers."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"css-modules",children:"CSS Modules"}),"\n",(0,s.jsxs)(n.p,{children:["Previously I used ",(0,s.jsx)(n.a,{href:"https://styled-components.com/",title:"library | styled-components",children:(0,s.jsx)(n.code,{children:"styled-components"})})," (or CSS-in-JS) for React component\nstyling."]}),"\n",(0,s.jsxs)(n.p,{children:["Achieving the dynamism possible with ",(0,s.jsx)(n.code,{children:"styled-components"})," is a challenge with CSS\nModules, but it's undoubtedly simpler to use, and I like the modularity of it."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"figma",children:"Figma"}),"\n",(0,s.jsxs)(n.p,{children:["As a Software Engineer, I never really had much call to use Figma, although I've\nviewed numerous Figma documents when working with Designers. I've been able to\nget what I need out of ",(0,s.jsx)(n.code,{children:"diagrams.net"}),", or in a real pinch, Inkscape."]}),"\n",(0,s.jsx)(n.p,{children:"The brand work for this project is the first time I created anything in Figma\nmyself, and I have to say, I'm prettly pleased with it. The ability to set up\nthemes alone seems worth the price of admission."}),"\n",(0,s.jsx)(n.p,{children:"[my Figma]"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,s.jsx)(n.p,{children:"This site has been my first foray into GitHub Actions, which I am using for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CI/CD","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"preview build deployment"}),"\n",(0,s.jsx)(n.li,{children:"production build deployment"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["AI Code Assistant integration","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"generating a repository map that my code assistant can use for inference"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"habit",children:"Habit"}),"\n",(0,s.jsxs)(n.p,{children:["I spent a lot of time ",(0,s.jsx)(n.a,{href:"https://iaindavis.dev/docs/projects/projects/iaindavis.dev/implementation/challenges/other-challenges/#module-hell-with-jest",title:"IainDavis.dev > Other Challenges > Module Hell with Jest",children:'trying to "fix" Jest'}),", so that it would read the new\n",(0,s.jsx)(n.code,{children:"mdx-js/mdx"}),' package, which no longer supportx CommonJS. This was based purely on\ntaking for granted that "Jest is what I use for testing JavaScript".']}),"\n",(0,s.jsx)(n.p,{children:"Ultimately, I abandoned Jest in favor of Vitest, which solved the\nproblems I was having, with the additional benefit of running the\ntests faster."}),"\n",(0,s.jsx)(n.h3,{id:"key-learning-explore-alternatives-sooner",children:"Key Learning: Explore alternatives sooner"}),"\n",(0,s.jsx)(n.p,{children:"I need to be more open to throwing away the things I'm taking for granted."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);