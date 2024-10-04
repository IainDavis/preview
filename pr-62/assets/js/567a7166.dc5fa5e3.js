"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[3530],{8327:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>f});var d=e(74848),t=e(28453);const a={title:"Fixing Diffs",date:"2024-09-15T11:47",authors:["iain"],image:"/img/logo/logo-compact-square-dark.svg",tags:["docusaurus","formatting"]},o=void 0,s={permalink:"/preview/pr-62/blog/2024/09/15/2024-09-15-fixing-diffs/fixing-diffs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-15-fixing-diffs/2024-09-15-fixing-diffs.mdx",source:"@site/blog/2024-09-15-fixing-diffs/2024-09-15-fixing-diffs.mdx",title:"Fixing Diffs",description:"In my last blog post, I used a diff to show how my SVG files had changed.",date:"2024-09-15T11:47:00.000Z",tags:[{inline:!1,label:"Docusaurus",permalink:"/preview/pr-62/blog/tags/docusaurus",description:"Posts related to working with Docusaurus configuration and components"},{inline:!1,label:"Formatting/Styles/CSS",permalink:"/preview/pr-62/blog/tags/formatting",description:"Posts to do with configuring styles and formatting"}],readingTime:3.695,hasTruncateMarker:!0,authors:[{name:"Iain Davis",title:"Software Engineer, Principal @ IainDavis.dev",url:"https://iaindavis.dev",email:"iain@iaindavis.dev",page:{permalink:"/preview/pr-62/blog/authors/iain"},socials:{github:"https://github.com/IainDavis",linkedin:"https://www.linkedin.com/in/iaindavis-dev/",stackoverflow:"https://stackoverflow.com/users/11380293/iaindavis-dev",reddit:"https://www.reddit.com/user/IainDavis-dev/"},imageURL:"/preview/pr-62/img/authors/idavis.jpg",key:"iain"}],frontMatter:{title:"Fixing Diffs",date:"2024-09-15T11:47",authors:["iain"],image:"/img/logo/logo-compact-square-dark.svg",tags:["docusaurus","formatting"]},unlisted:!1,prevItem:{title:"How I Automated My LinkedIn Posts",permalink:"/preview/pr-62/blog/2024/09/15/2024-09-15-automating-linkedin-posts/automating-linkedin-posts"},nextItem:{title:"Making My Logo a Component",permalink:"/preview/pr-62/blog/2024/09/15/2024-09-15-logo-component/logo-component"}},r={authorsImageUrls:[void 0]},f=[{value:"Definition of magic comments:",id:"definition-of-magic-comments",level:3}];function l(i){const n={a:"a",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...i.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"In my last blog post, I used a diff to show how my SVG files had changed."}),"\n",(0,d.jsx)(n.p,{children:"For those who don't know a diff is an operation on two files that shows a graphical representation of how one is different than the other."}),"\n",(0,d.jsx)(n.p,{children:"They look like this:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"on the command line"}),(0,d.jsx)(n.th,{children:"in a nice UI like GitHub"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.img,{alt:"Screen capture showing a command-line diff",src:e(86365).A+"",width:"1026",height:"766"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.img,{alt:"Screen capture showing a diff in GitHub",src:e(34611).A+"",width:"2342",height:"1364"})})]})})]}),"\n",(0,d.jsx)(n.p,{}),"\n",(0,d.jsx)(n.p,{children:"The green lines show something being added, the red ones something\nbeing removed. A change to a line will produce a red line AND a green\nline in the output."}),"\n",(0,d.jsx)(n.p,{children:"In theory, Docusaurs supports a notation to produce nicely formatted diff\noutput."}),"\n",(0,d.jsx)(n.p,{children:"Indeed, in my VS Code editor, the lines prefixed with '+' were highlighted\ngreen, and the ones prefixed with '-' were highlighted red. But in the rendered\npage, there was no change from a standard code block:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"editor: right!"}),(0,d.jsx)(n.th,{children:"where it matters: wrong!"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.img,{alt:"Screen capture showing appropriate line-coloring in editor",src:e(32691).A+"",title:"Yay!",width:"1818",height:"564"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.img,{alt:"Screen capture showing no line-coloring in rendered website",src:e(34278).A+"",title:"Dang.",width:"1526",height:"670"})})]})})]}),"\n",(0,d.jsx)(n.p,{children:"I'm not the first to run into this problem (and in fact it's not the first time\nI've run into it)."}),"\n",(0,d.jsxs)(n.p,{children:["I found ",(0,d.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3318#issuecomment-1909563681",title:"'Magic Comments' fix",children:"this solution"})," online:"]}),"\n",(0,d.jsx)(n.p,{children:"Docusaurus relies on a library called 'Prism' for its syntax highlighting, and\nPrism includes a feature called 'magic comments'. If you define a magic comment,\nand then include that magic comment in your code blocks, prism will remove it\nfrom the output and apply a CSS class to the next line, which you can use to\napply formatting. Docusaurus allows you to modify the Prism configuration (including\nmagic comments) from within its own configuration file."}),"\n",(0,d.jsx)(n.p,{children:"Applied to my repository, it looks like this:"}),"\n",(0,d.jsx)(n.h3,{id:"definition-of-magic-comments",children:"Definition of magic comments:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-typescript",metastring:"title=docusaurus.config.ts",children:"const config: Config = {\n    // ... other docusaurus configuration options\n  themeConfig: {\n    // Replace with your project's social card\n    // ... other theming configuration\n    prism: {\n        // ... other prism configuration\n        // diff-add\n      magicComments: [\n        // diff-add\n        {\n        // diff-add\n          className: 'code-block-diff-add-line',\n        // diff-add\n          line: 'diff-add',\n        // diff-add\n        },\n        // diff-add\n        {\n        // diff-add\n          className: 'code-block-diff-remove-line',\n        // diff-add\n          line: 'diff-remove'\n        // diff-add\n        }\n        // diff-add\n      ]\n        // diff-add\n    },\n        // diff-add\n  } ,\n        // diff-add\n};\n"})}),"\n",(0,d.jsx)(n.p,{children:"adding variables and styles to my global style definitions:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-css",metastring:"title=src/css/custom.css",children:":root {\n/* ...existing light-theme (default) variable defs styles... */\n  // diff-add\n  --iaindavisdev-diff-insertion: #b0f6ac;\n  // diff-add\n  --iaindavisdev-diff-deletion: #fcc8c0;\n}\n\n/* For readability concerns, you should choose a lighter palette in dark mode. */\n[data-theme='dark'] {\n    /* ...existing dark-theme variable defs styles... */\n  // diff-add\n  --iaindavisdev-diff-insertion: #254323;\n  // diff-add\n  --iaindavisdev-diff-deletion: #432723;\n}\n\n/* new styles! */\n// diff-add\n.code-block-diff-add-line {\n// diff-add\n  background-color: var(--iaindavisdev-diff-insertion);\n// diff-add\n  display: block;\n// diff-add\n  margin: 0 -40px;\n// diff-add\n  padding: 0 40px;\n// diff-add\n}\n// diff-add\n\n// diff-add\n.code-block-diff-add-line::before {\n// diff-add\n  position: absolute;\n// diff-add\n  left: 8px;\n// diff-add\n  padding-right: 8px;\n// diff-add\n  content: '+';\n// diff-add\n}\n// diff-add\n\n// diff-add\n.code-block-diff-remove-line {\n// diff-add\n  background-color: var(--iaindavisdev-diff-deletion);\n// diff-add\n  display: block;\n// diff-add\n  margin: 0 -40px;\n// diff-add\n  padding: 0 40px;\n// diff-add\n}\n// diff-add\n\n// diff-add\n.code-block-diff-remove-line::before {\n// diff-add\n  position: absolute;\n// diff-add\n  left: 8px;\n// diff-add\n  padding-right: 8px;\n// diff-add\n  content: '-';\n// diff-add\n}\n// diff-add\n\n// diff-add\n/**\n// diff-add\n * use magic comments to mark diff blocks\n// diff-add\n */\n// diff-add\npre code:has(.code-block-diff-add-line) {\n// diff-add\n  padding-left: 40px!important;\n// diff-add\n}\n// diff-add\n\n// diff-add\npre code:has(.code-block-diff-remove-line) {\n// diff-add\n  padding-left: 40px!important;\n// diff-add\n}\n"})}),"\n",(0,d.jsx)(n.p,{children:"And you can see the result in this post."}),"\n",(0,d.jsxs)(n.p,{children:["There's an added bonus: my code blocks now retain their ",(0,d.jsx)(n.em,{children:"original"})," syntax\nhighlighting as well as adding the diff highlights. In the default Docusaurus\ndiff highlighting, all formatting is stripped out except for the diff\nhighlights, unless you're willing to do some more work to shoehorn some more of\nprism's native capabilities in to Docusaurus."]}),"\n",(0,d.jsxs)(n.p,{children:["On the down-side, in the editor now, those blocks are littered with kind of\nobnoxious comments that make it harder to read. Eventually, I will probably\nimplement ",(0,d.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3318#issuecomment-2065547731",title:"More robust Prism-renderer fix",children:"this more robust fix"})," (from the same\nthread as the quick-fix I've applied!):"]}),"\n",(0,d.jsx)(n.p,{children:"For now, this was a solution I can implement (and document here) much more\nquickly, so I'm happy with it for today."})]})}function c(i={}){const{wrapper:n}={...(0,t.R)(),...i.components};return n?(0,d.jsx)(n,{...i,children:(0,d.jsx)(l,{...i})}):l(i)}},34611:(i,n,e)=>{e.d(n,{A:()=>d});const d=e.p+"assets/images/old_git_diff-196450b3c68ce8ab8c38a566c9e8143c.png"},86365:(i,n,e)=>{e.d(n,{A:()=>d});const d=e.p+"assets/images/small_command_line_diff-7a373fdd748196e1972052e2e8d9617f.png"},32691:(i,n,e)=>{e.d(n,{A:()=>d});const d=e.p+"assets/images/right-cfbe6f42ba4dac16a301ad02b30319ba.png"},34278:(i,n,e)=>{e.d(n,{A:()=>d});const d=e.p+"assets/images/wrong-9b86a5c17f95bba9bb25d353def3e0d2.png"},28453:(i,n,e)=>{e.d(n,{R:()=>o,x:()=>s});var d=e(96540);const t={},a=d.createContext(t);function o(i){const n=d.useContext(a);return d.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function s(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:o(i.components),d.createElement(a.Provider,{value:n},i.children)}}}]);