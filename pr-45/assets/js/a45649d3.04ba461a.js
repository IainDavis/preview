"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[1739],{85981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(74848),s=n(28453);const i={title:"Getting Set-Up For Unit Tests",date:"2024-09-20T10:48",authors:["iain"],tags:["storybook","testing","infrastructure"]},a=void 0,r={permalink:"/preview/pr-45/blog/2024/09/20/2024-09-20-getting-set-up-for-unit-tests/getting-set-up-for-unit-tests",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-20-getting-set-up-for-unit-tests/2024-09-20-getting-set-up-for-unit-tests.mdx",source:"@site/blog/2024-09-20-getting-set-up-for-unit-tests/2024-09-20-getting-set-up-for-unit-tests.mdx",title:"Getting Set-Up For Unit Tests",description:"It's been a few days since I posted. That's not because I haven't been busy,",date:"2024-09-20T10:48:00.000Z",tags:[{inline:!1,label:"Storybook",permalink:"/preview/pr-45/blog/tags/storybook",description:"Posts to do with configuring or using Storybook"},{inline:!1,label:"Testing",permalink:"/preview/pr-45/blog/tags/testing",description:"Posts to do with tests"},{inline:!1,label:"Infrastructure",permalink:"/preview/pr-45/blog/tags/infrastructure",description:"Posts to do with setup and maintenance for Repositories, builds, etc."}],readingTime:5.23,hasTruncateMarker:!0,authors:[{name:"Iain Davis",title:"Software Engineer, Principal @ IainDavis.dev",url:"https://iaindavis.dev",email:"iain@iaindavis.dev",page:{permalink:"/preview/pr-45/blog/authors/iain"},socials:{github:"https://github.com/IainDavis",linkedin:"https://www.linkedin.com/in/iaindavis-dev/",stackoverflow:"https://stackoverflow.com/users/11380293/iaindavis-dev",reddit:"https://www.reddit.com/user/IainDavis-dev/"},imageURL:"/preview/pr-45/img/authors/idavis.jpg",key:"iain"}],frontMatter:{title:"Getting Set-Up For Unit Tests",date:"2024-09-20T10:48",authors:["iain"],tags:["storybook","testing","infrastructure"]},unlisted:!1,prevItem:{title:"Building and Refining the Expandable Component",permalink:"/preview/pr-45/blog/2024/09/21/2024-09-21-unit-test-collaboration/unit-test-collaboration"},nextItem:{title:"Fixing Blog-Post Truncation",permalink:"/preview/pr-45/blog/2024/09/16/2024-09-16-fixing-blog-post-truncation/fixing-blog-post-truncation"}},d={authorsImageUrls:[void 0]},l=[{value:"What I learned from all this",id:"what-i-learned-from-all-this",level:2},{value:"How to go about modifying Webpack, Babel, Jest",id:"how-to-go-about-modifying-webpack-babel-jest",level:2},{value:"Persistence",id:"persistence",level:2},{value:"Give up sooner",id:"give-up-sooner",level:2}];function h(e){const t={code:"code",em:"em",h2:"h2",mermaid:"mermaid",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["It's been a few days since I posted. That's not because I haven't been busy,\nit's because setting up unit testing turned out to be ",(0,o.jsx)(t.em,{children:"much harder"})," than I\nanticipated."]}),"\n",(0,o.jsx)(t.p,{children:"To be fair, I was trying to achieve a somewhat complex setup."}),"\n",(0,o.jsx)(t.p,{}),"\n",(0,o.jsx)(t.mermaid,{value:"graph RL\n    mdx_source[MDX]\n    jsx_source[React/JSX]\n    stories[Storybook Story]\n    docusaurus[Docusaurus]\n    storybook[Storybook]\n    jest[Jest]\n\n    jsx_source ---\x3e|import| docusaurus & storybook & jest\n    mdx_source --\x3e|transform|jsx_source--\x3e stories --\x3e|import| jest\n    mdx_source --\x3e|import| docusaurus"}),"\n",(0,o.jsx)(t.p,{children:"Honestly, I could have mocked the MDX inputs, and in a professional setting\nthat's what I would have done."}),"\n",(0,o.jsx)(t.p,{children:"But what would I learn from that?"}),"\n",(0,o.jsx)(t.p,{children:"In the past, I've not really had to set up many JavaScript repositories. I've\njoined an already active project, or used a paved road, and I just started\nwriting tests. I figured that's more or less what would happen here."}),"\n",(0,o.jsxs)(t.p,{children:["Part of the problem is that Docusaurus and Storybook both use webpack by\ndefault, to preprocess and bundle code. Jest doesn't do that, so I had to figure\nout how to emulate that behavior. In particular, I needed to tell it how to\nhandle the imported ",(0,o.jsx)(t.code,{children:".mdx"})," content. That turned out to be surprisingly\ndifficult. My AI coding assitant did their best to help, but I was getting a\nconsiderable amount of hallucination and just outdated information. To make\nthings worse the problem was large enough that the AI seemed to keep forgetting\ncontext and taking me back around paths we'd already been over."]}),"\n",(0,o.jsxs)(t.p,{children:["In the end, we ended up creating a custom Jest transformer that leveraged the\n",(0,o.jsx)(t.code,{children:"@mdx-js/mdx"})," library and babel to handle the transformation. That got us much\ncloser, but we began getting more errors from the produced JSX having\nunrecognized attributes (",(0,o.jsx)(t.code,{children:"parentName"}),", ",(0,o.jsx)(t.code,{children:"mdxType"}),") and including a ",(0,o.jsx)(t.code,{children:"wrapper"}),"\nelement that React didn't know what to do with."]}),"\n",(0,o.jsxs)(t.p,{children:["Another round of fixes... the best solution I ended up with was monkey-patching\nReact.createElement in ",(0,o.jsx)(t.code,{children:"jest.setup.ts"})," to have some special handling for the\n",(0,o.jsx)(t.code,{children:"wrapper"})," component and strip out the unrecognized MDX elements."]}),"\n",(0,o.jsx)(t.p,{children:"And we got it working! I had two unit tests passing, one of which incorporated a\nStorybook story, which in turn incorporated some boilerplate MDX content, which\nis what I was trying to achieve."}),"\n",(0,o.jsx)(t.p,{children:"Round of drinks, high fives all around, call it a night."}),"\n",(0,o.jsxs)(t.p,{children:['The next day, I fell victim to that most insidious of demons, the one that\nwhispers in your ear and says "yeah, go ahead and commit these changes but...\n',(0,o.jsx)(t.em,{children:"while"})," you're committing, shouldn't you just refactor a bit? Surely that bit\nover there couldn't hurt anything. It's practically a separate module.\""]}),"\n",(0,o.jsxs)(t.p,{children:["Needless to say, I broke my working solution. Part of (but I don't think all of)\nthe break had to do with upgrading my dependencies with yarn, so ",(0,o.jsx)(t.em,{children:"I suspect"})," it\nwould have broken eventually anyway, which is kind of disappointing, but also\nmakes me feel marginally less stupid about it."]}),"\n",(0,o.jsxs)(t.p,{children:["The problem we began to run into was that ",(0,o.jsx)(t.code,{children:"@mdx-js"})," has switched over to\nESModules-only. No more CommonJS support, which is what Jest expects to use. My\ntransformer wouldn't compile anymore, because it couldn't import anything from\n",(0,o.jsx)(t.code,{children:"@mdx-js"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Well that's fixable, right? We're using Jest 29, which supports transformers\nthat provide a ",(0,o.jsx)(t.code,{children:"processAsync"})," method. Shouldn't be a problem. We'll just throw a\nfew async/awaits in there, rename the ",(0,o.jsx)(t.code,{children:"process"})," method, and we'll be good to go."]}),"\n",(0,o.jsxs)(t.p,{children:["Y'all, I tried for hours to get Jest to recognize that ",(0,o.jsx)(t.code,{children:"processAsync"})," method.\nWhen the ",(0,o.jsx)(t.code,{children:"process"})," method was absent, Jest would throw an exception and not run\nthe transformer at all. When both ",(0,o.jsx)(t.code,{children:"process"})," and ",(0,o.jsx)(t.code,{children:"processAsync"})," were present,\nJest automatically preferred ",(0,o.jsx)(t.code,{children:"process"}),", and no way I could figure out to force\nit to use the async method so I could do a dynamic import of an ESModule in the\nCommonJS context that Jest uses."]}),"\n",(0,o.jsx)(t.p,{children:"The last thing we tried was to abandon the Jest Transformer approach entirely\nand try to write our own babel plugin, but we ended up with basically the same\nerrors."}),"\n",(0,o.jsx)(t.p,{children:"No luck."}),"\n",(0,o.jsxs)(t.p,{children:["Finally, I decided if ",(0,o.jsx)(t.code,{children:"Jest"})," was the problem, maybe it was worth pursuing\nalternatives. I'm so used to Jest, it honestly didn't occur to me to use\nanything else."]}),"\n",(0,o.jsxs)(t.p,{children:["This morning I gave up and set up ",(0,o.jsx)(t.code,{children:"Vitest"}),". I actually still had a little\ntrouble with ESModules/CommonJS importing, but resolving it was much, much\neasier. I probably spent an hour on it this morning, total. That includes\nlearning a bit about it, adding the relevant VS Code extension and making the\nchanges."]}),"\n",(0,o.jsxs)(t.p,{children:["I now have the same two unit tests running. I have fewer custom build components\n(no Jest transformer, no Babel plugin, no monkey-patching of\n",(0,o.jsx)(t.code,{children:"React.createElement"}),")."]}),"\n",(0,o.jsx)(t.p,{children:"And I have to say, there's a noticable difference, even with my currently\ntrivial test suite, in how fast the tests run."}),"\n",(0,o.jsx)(t.p,{children:"I'm a little disappointed that Docusaurus and Storybook are now on different\nbuild tools than my tests, but I think the benefits far outweight the\ndisadvantages. And Storybook supports Vite, so I may migrate it eventually as\nwell. Unfortunately, Docusaurus is webpack-only for now."}),"\n",(0,o.jsx)(t.h2,{id:"what-i-learned-from-all-this",children:"What I learned from all this"}),"\n",(0,o.jsx)(t.p,{children:"How different JS tools and build configurations hang together. This has always\nbeen a bit of a frustrating thicket to wade into for me, and I feel like I\nunderstand it just a little better after all this."}),"\n",(0,o.jsx)(t.h2,{id:"how-to-go-about-modifying-webpack-babel-jest",children:"How to go about modifying Webpack, Babel, Jest"}),"\n",(0,o.jsx)(t.p,{children:"It hadn't really occurred to me before to solve a problem by writing custom\nextensions, and now I've written them for all three of these tools. It never\nreally seemed strange to me to write a decorator or addon for Storybook, and I\ndon't know why that should be any different really, but here we are. I guess\nI've just been conditioned no to mess with the build."}),"\n",(0,o.jsx)(t.h2,{id:"persistence",children:"Persistence"}),"\n",(0,o.jsx)(t.p,{children:"I'd never do this in a professional setting, but I'm glad I chased the Jest\nsolution down. It was a pretty satisfying feeling to see that \"2 tests passed\"\nafter all the struggle it took to get there."}),"\n",(0,o.jsx)(t.h2,{id:"give-up-sooner",children:"Give up sooner"}),"\n",(0,o.jsx)(t.p,{children:"Okay, that's a contradiction. But I guess what I really mean is think outside\nthe box for another solution. I started with the assumption that \"Jest is what\nyou use\" and it cost me some time, even if it wasn't a total loss. I could have\ngotten to a solution much sooner."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(96540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);