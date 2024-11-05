"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[4279],{64889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var i=n(74559),s=n(74848),o=n(28453),a=n(30039);const r={title:"Fixing Blog-Post Truncation",date:"2024-09-16T16:01",authors:["iain"],tags:["docusaurus","troubleshooting"]},l=void 0,c={authorsImageUrls:[void 0]},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"It's a best-practice in Docusaurus to include a truncation marker in your blog\nposts. That way, when you're looking at a list of posts, you just see a brief\nintroduction from each post, instead of the full content of the first post\npushing the second post clear off the page."}),"\n",(0,s.jsxs)(t.p,{children:['It\'s where all those "Read more" links are coming from on the ',(0,s.jsx)(t.a,{href:"/blog",children:"main page for my blog"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The default truncation marker for markdown files looks like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\x3c!-- truncate --\x3e\n"})}),"\n",(0,s.jsx)(t.p,{}),"\n",(0,s.jsx)(t.p,{children:"If you're somebody who's looked even a little under the hood of the\nwebsites you visit, you'll recognize that as a simple XML comment. That's all well and\ngood."}),"\n",(0,s.jsx)(t.p,{children:"Until you try to open that file in VS Code with the MDX plugin installed. Then,\nyour syntax highlighting looks like this:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Screen shot showing MDX syntax highlighting showing many error-checking false\npositives",src:n(79492).A+"",title:"Yikes.",width:"1720",height:"1324"}),";"]}),"\n",(0,s.jsx)(t.p,{children:"It's distracting, to say the least."}),"\n",(0,s.jsx)(t.p,{children:"Luckily, Docusaurus gives you a mechanism for overriding the default token.\nThere's a property in the presets for the blog plugin that lets you specify the\ntoken that Docusaurus will use to identify where the summary portion ends:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="docusaurus.config.ts"',children:"export default config: Config = {\n    presets: {\n        blog: {\n            // this is the default for mdx\n            truncateMarker: /\\s\x3c!-- truncate --\x3e\\s/\n            /* other blog configs*/\n        }\n        /* other preset configs*/\n    }\n    /* other docusaurus configs*/\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["So I updated mine to ",(0,s.jsx)(t.code,{children:"TRUNCATE_HERE"})," (full disclosure, an AI picked the actual\ntoken to use)."]}),"\n",(0,s.jsxs)(t.p,{children:["That worked pretty well! All my blogs are nicely truncated on the main blog\npage, ",(0,s.jsx)(t.em,{children:"and"})," they don't look horrendous in the editor. Cool."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"editor"}),(0,s.jsx)(t.th,{children:"main blog page"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.img,{alt:"screen capture showing corrected view in editor",src:n(66761).A+"",width:"1720",height:"1320"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.img,{alt:"screen capture showing correct view on website",src:n(92115).A+"",width:"1992",height:"1838"})})]})})]}),"\n",(0,s.jsx)(t.admonition,{title:"There is just... one more thing",type:"caution",children:(0,s.jsx)("img",{style:{height:"200px"},src:a.A,alt:"Freeze frame of Lieutenant Detective Columbo looking disheveled, about\nto wreck your whole dastardly plan"})}),"\n",(0,s.jsx)(t.p,{children:"Everything looks fine until you actually open the blog post:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Screen capture showing the truncate token still visible in the blog\npost",src:n(75704).A+"",width:"1162",height:"1058"})}),"\n",(0,s.jsx)(t.p,{children:"Okay. I can fix this. Can I fix this? I'm pretty sure I can fix this."}),"\n",(0,s.jsx)(t.p,{children:"It turns out yes. Yes, I can."}),"\n",(0,s.jsx)(t.p,{children:"The solution is to add a custom Remark plugin that strips out that line\nmanually. Me and my friendly neighborhood artificial intelligence sorted it out.\nIt steered me a bit wrong, but eventually together we were able to sort it out.\nMuch faster than I'd have done it on my own, I'm sure."}),"\n",(0,s.jsxs)(t.p,{children:["You can see the AI transcript\n",(0,s.jsx)(t.a,{href:"https://chatgpt.com/share/66e7d39f-9b30-8000-a12f-a9b8efa5992a",children:"here"})," (it's\nquite long, I don't actually expect you to look at that, but maybe somebody's\ninterested)."]}),"\n",(0,s.jsxs)(t.p,{children:["And my final solution in ",(0,s.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/pull/6",children:"the PR"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},30039:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/there-is-just-one-more-thing-41282594a909054c59f107266dcda5d4.webp"},66761:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/much-better-editor-13dd7a2cc7921b45a7b0f914f9dfe460.png"},92115:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/much-better-site-86d7e66d9ac0614d1983d4ae119d394a.png"},79492:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/truncate-em-i-hardly-know-em-ce908cdfb67b21284caf362e09ec14b4.png"},75704:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/uhwhut-d7f00fbaa683d8f2ed3292bb17ab115d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}},74559:e=>{e.exports=JSON.parse('{"permalink":"/preview/pr-70/blog/2024/09/16/2024-09-16-fixing-blog-post-truncation/fixing-blog-post-truncation","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-16-fixing-blog-post-truncation/2024-09-16-fixing-blog-post-truncation.mdx","source":"@site/blog/2024-09-16-fixing-blog-post-truncation/2024-09-16-fixing-blog-post-truncation.mdx","title":"Fixing Blog-Post Truncation","description":"It\'s a best-practice in Docusaurus to include a truncation marker in your blog","date":"2024-09-16T16:01:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/preview/pr-70/blog/tags/docusaurus","description":"Posts related to working with Docusaurus configuration and components"},{"inline":false,"label":"Trouble-shooting","permalink":"/preview/pr-70/blog/tags/troubleshooting","description":"Posts having to do with solving problems"}],"readingTime":2.265,"hasTruncateMarker":true,"authors":[{"name":"Iain Davis","title":"Software Engineer, Principal @ IainDavis.dev","url":"https://iaindavis.dev","email":"iain@iaindavis.dev","page":{"permalink":"/preview/pr-70/blog/authors/iain"},"socials":{"github":"https://github.com/IainDavis","linkedin":"https://www.linkedin.com/in/iaindavis-dev/","stackoverflow":"https://stackoverflow.com/users/11380293/iaindavis-dev","reddit":"https://www.reddit.com/user/IainDavis-dev/"},"imageURL":"/preview/pr-70/img/authors/idavis.jpg","key":"iain"}],"frontMatter":{"title":"Fixing Blog-Post Truncation","date":"2024-09-16T16:01","authors":["iain"],"tags":["docusaurus","troubleshooting"]},"unlisted":false,"prevItem":{"title":"Getting Set-Up For Unit Tests","permalink":"/preview/pr-70/blog/2024/09/20/2024-09-20-getting-set-up-for-unit-tests/getting-set-up-for-unit-tests"},"nextItem":{"title":"Switching automation providers","permalink":"/preview/pr-70/blog/2024/09/16/2024-09-16-switching-automation-provider/switching-automation-provider"}}')}}]);