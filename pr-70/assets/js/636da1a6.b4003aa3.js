"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[1695],{56627:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>h});var n=o(20513),i=o(74848),a=o(28453);const s={title:"What's Next Here?",date:"2024-09-15T14:48",authors:["iain"],tags:["customComponents","automation"]},r=void 0,l={authorsImageUrls:[void 0]},h=[{value:"Content",id:"content",level:2},{value:"Front Page",id:"front-page",level:3},{value:"Footer",id:"footer",level:3},{value:"Pages",id:"pages",level:3},{value:"Bio",id:"bio",level:4},{value:"Projects",id:"projects",level:4},{value:"Kata",id:"kata",level:4},{value:"Support",id:"support",level:3},{value:"Infrastructure",id:"infrastructure",level:2},{value:"Process",id:"process",level:3},{value:"Tests!",id:"tests",level:3},{value:"Refactoring",id:"refactoring",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Automation",id:"automation",level:3}];function d(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This post is just a listing of some of the things I'm planning to add here in\nthe coming days."}),"\n",(0,i.jsx)(t.p,{}),"\n",(0,i.jsx)(t.h2,{id:"content",children:"Content"}),"\n",(0,i.jsx)(t.h3,{id:"front-page",children:"Front Page"}),"\n",(0,i.jsx)(t.p,{children:"That front page is pretty spare, hey? Right now it's just the default Docusaurus\npage with all their branding stripped out. I've got to decide what I'm going to\nput there. It's a lot of real estate to fill."}),"\n",(0,i.jsx)(t.h3,{id:"footer",children:"Footer"}),"\n",(0,i.jsx)(t.p,{children:"I've got some idea what I want to do here, at least. I'll have to include my\nlinked-in social card at a minimum. Will probably also put up a GitHub card of\nsome kind, and my CodeWars badge. Not sure what all yet. I'll have some time to\nthink about it"}),"\n",(0,i.jsx)(t.h3,{id:"pages",children:"Pages"}),"\n",(0,i.jsx)(t.h4,{id:"bio",children:"Bio"}),"\n",(0,i.jsx)(t.p,{children:"Need a bio page for sure. I'm anticipating just regurgitation my LinkedIn bio,\nbut I may add some additional sub-pages to share a little bit about me outside\nof my working persona. Haven't decided yet if that's A) appropriate and B) work\nI want to do"}),"\n",(0,i.jsx)(t.h4,{id:"projects",children:"Projects"}),"\n",(0,i.jsx)(t.p,{children:"Technically there's a projects page now, but there's not much on it. Ultimately,\nthis page was the root cause for creating this whole website, but then I kind of\nstopped working on projects to create this website. This website BECAME the\nproject. There will be a page for this there soon, at least."}),"\n",(0,i.jsx)(t.h4,{id:"kata",children:"Kata"}),"\n",(0,i.jsx)(t.p,{children:"I figure if I'm doing these kata to keep my language fluency up, maybe they'll\nbe useful as a demo too. Show a potential employer that I can write nice tidy\ncode. I also have a notion to include a section for Design kata, which I'm new\nto. They seem less structured and less easy to share out in a regular format,\nbut maybe that's good. Anyway, looking forward to putting something up here."}),"\n",(0,i.jsx)(t.h3,{id:"support",children:"Support"}),"\n",(0,i.jsxs)(t.p,{children:["I don't think anyone's likely to ",(0,i.jsx)(t.em,{children:"need"})," support from me ",(0,i.jsx)(t.em,{children:"yet"}),". But I do hope\neventually somebody might want to use some of the custom components I'm working\non. I've been organizaing my personal work in Jira, so I'll include a widget\nhere to submit requests. I don't think I'm ambitious enough to include a Slack\ninterface, but we'll see how I feel when I start in."]}),"\n",(0,i.jsx)(t.h2,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,i.jsx)(t.h3,{id:"process",children:"Process"}),"\n",(0,i.jsxs)(t.p,{children:["Probably about time I protected my ",(0,i.jsx)(t.code,{children:"main"})," branch and stopped pushing directly to\nit. PRs, from now on. Oh! And I need to make my repository public, so I can\nshare it on the Projects page."]}),"\n",(0,i.jsx)(t.h3,{id:"tests",children:"Tests!"}),"\n",(0,i.jsx)(t.p,{children:"I've had a couple of abortive attempts to introduce Jest and use my Storybook\nstories as the basis for the first tests. So far that hasn't worked out so well.\nMostly it's had to do with imports. Both Docusaurus and Storybook rely on a lot\nof preprocessing, and getting Jest configured to keep step with them has been a\nbit of a headache. I was actually on the verge of abandoning Storybook\naltogether, but I've decided it still serves nicely as a showcase, and home for\nthe individual components's documentation. Solving that SVG issue I mentioned in\na previous blog post helped too."}),"\n",(0,i.jsx)(t.p,{children:"I also want to use this as a chance to explore Playwright. I've used it only\nvery briefly before when I contributed to someone else's project that was using\nit. I like Cypress a lot, but I definitely prefer Playwright in one regard: it\nlets you use standard JavaScript idioms, where Cypress traps you in their very\na-typical world that is similar to working with Promises, but predates promises,\nso it has it's own idioms that require learning."}),"\n",(0,i.jsx)(t.p,{children:"Last, I think I'll probably explore what Storybook can do for me as a test\nplatform all by itself (in the absence of Jest)."}),"\n",(0,i.jsx)(t.h3,{id:"refactoring",children:"Refactoring"}),"\n",(0,i.jsx)(t.p,{children:"My Logo Storybook stories are looking about how I want them, but there's a lot\nof boilerplate in the story definition file to make that happen. I think I may\nextract that all out to a component just for the sake of tidiness."}),"\n",(0,i.jsx)(t.h3,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsx)(t.p,{children:"By default, Docusaurus uses a token that looks like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"\x3c!-- truncate --\x3e\n"})}),"\n",(0,i.jsx)(t.p,{children:"to indicate where a blog post should be truncated when you're viewing it as part\nof a list of all posts. Unfortunately, that breaks the Visual Studio MDX parser\nquite badly. The code still compiles and displays just fine, but Visual Studio\nshouts at me that the whole file after that point is riddled with errors, which\nis distracting, and bad, and potentially hides other problems I should know\nabout."}),"\n",(0,i.jsxs)(t.p,{children:["I discovered there's a mechanism to redefine that token in the docusaurus config\nfile, so I've changed it to ",(0,i.jsx)(t.code,{children:"TRUNCATE_HERE"}),", which is working beautifully,\nexcept that it still shows up in the document content now, which is not a great\nlook."]}),"\n",(0,i.jsxs)(t.p,{children:["So I'll have to figure out some way of masking that from the displayed content\nthat ",(0,i.jsx)(t.em,{children:"isn't"})," an XML comment. Maybe I can wrap it in a <div> and use CSS to\nhide it? That's a lot of text to type for every blog post though. Will have to\ncreate a snippet. Anyway, it's worth exploring."]}),"\n",(0,i.jsx)(t.h3,{id:"automation",children:"Automation"}),"\n",(0,i.jsxs)(t.p,{children:["I'm currently using the provided ",(0,i.jsx)(t.code,{children:"docusaurus deploy"})," command to push my built\nsite to GitHub Pages. Sometime in the next week or two, I want to get that\nchanged over to a GitHub actions flow, so that the definitions in my ",(0,i.jsx)(t.code,{children:"main"}),"\nbranch and the published site are in sync. In that build, I also plan to:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"run tests"}),"\n",(0,i.jsx)(t.li,{children:"publish a test/coverage report to the website"}),"\n",(0,i.jsx)(t.li,{children:"migrate the global docusaurus styles for Storybook"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"I'm sure I'm probably forgetting something either that's already in my Jira or\nthat I've thought of while working on something else and forgot to write down.\nI'm sure eventually something will prompt my memory."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var n=o(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}},20513:e=>{e.exports=JSON.parse('{"permalink":"/preview/pr-70/blog/2024/09/15/2024-09-15-whats-next/whats-next","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-15-whats-next/2024-09-15-whats-next.mdx","source":"@site/blog/2024-09-15-whats-next/2024-09-15-whats-next.mdx","title":"What\'s Next Here?","description":"This post is just a listing of some of the things I\'m planning to add here in","date":"2024-09-15T14:48:00.000Z","tags":[{"inline":false,"label":"Custom Docusaurus Components","permalink":"/preview/pr-70/blog/tags/custom-components","description":"Posts to do with components I\'ve developed to extend Docusaurus functionallity"},{"inline":false,"label":"Automation","permalink":"/preview/pr-70/blog/tags/automation","description":"Posts having to do with automating tasks"}],"readingTime":4.785,"hasTruncateMarker":true,"authors":[{"name":"Iain Davis","title":"Software Engineer, Principal @ IainDavis.dev","url":"https://iaindavis.dev","email":"iain@iaindavis.dev","page":{"permalink":"/preview/pr-70/blog/authors/iain"},"socials":{"github":"https://github.com/IainDavis","linkedin":"https://www.linkedin.com/in/iaindavis-dev/","stackoverflow":"https://stackoverflow.com/users/11380293/iaindavis-dev","reddit":"https://www.reddit.com/user/IainDavis-dev/"},"imageURL":"/preview/pr-70/img/authors/idavis.jpg","key":"iain"}],"frontMatter":{"title":"What\'s Next Here?","date":"2024-09-15T14:48","authors":["iain"],"tags":["customComponents","automation"]},"unlisted":false,"prevItem":{"title":"Switching automation providers","permalink":"/preview/pr-70/blog/2024/09/16/2024-09-16-switching-automation-provider/switching-automation-provider"},"nextItem":{"title":"How I Automated My LinkedIn Posts","permalink":"/preview/pr-70/blog/2024/09/15/2024-09-15-automating-linkedin-posts/automating-linkedin-posts"}}')}}]);