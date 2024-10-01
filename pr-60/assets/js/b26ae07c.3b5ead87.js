"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[973],{51943:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(74848),a=i(28453);const o={title:"Externalizing Nova",date:"2024-09-25T16:01",authors:["iain"],tags:["ai"]},s=void 0,r={permalink:"/preview/pr-60/blog/2024/09/25/2024-09-25-externalizing-nova/externalizing-nova",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-25-externalizing-nova/2024-09-25-externalizing-nova.md",source:"@site/blog/2024-09-25-externalizing-nova/2024-09-25-externalizing-nova.md",title:"Externalizing Nova",description:"I didn't really set out to work this much on my AI Code assistant. I subscribed to ChatGPT, and started asking it questions. But the more I used it, the more I discovered ways I could use it, and how to adjust it to suit my needs more, and have abilities it didn't have before.",date:"2024-09-25T16:01:00.000Z",tags:[{inline:!1,label:"Artificial Intelligence",permalink:"/preview/pr-60/blog/tags/ai",description:"Posts to do with artificial intelligence applications"}],readingTime:3.27,hasTruncateMarker:!1,authors:[{name:"Iain Davis",title:"Software Engineer, Principal @ IainDavis.dev",url:"https://iaindavis.dev",email:"iain@iaindavis.dev",page:{permalink:"/preview/pr-60/blog/authors/iain"},socials:{github:"https://github.com/IainDavis",linkedin:"https://www.linkedin.com/in/iaindavis-dev/",stackoverflow:"https://stackoverflow.com/users/11380293/iaindavis-dev",reddit:"https://www.reddit.com/user/IainDavis-dev/"},imageURL:"/preview/pr-60/img/authors/idavis.jpg",key:"iain"}],frontMatter:{title:"Externalizing Nova",date:"2024-09-25T16:01",authors:["iain"],tags:["ai"]},unlisted:!1,nextItem:{title:"Automating Production Deployments",permalink:"/preview/pr-60/blog/2024/09/25/2024-09-25-deploy-to-prod-automation/deploy-to-prod-automation"}},h={authorsImageUrls:[void 0]},l=[];function d(e){const t={code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["I didn't really set out to work this much on my AI Code assistant. I subscribed to ChatGPT, and started asking it questions. But the more I used it, the more I discovered ways I ",(0,n.jsx)(t.em,{children:"could"})," use it, and how to adjust it to suit my needs more, and have abilities it didn't have before."]}),"\n",(0,n.jsx)(t.p,{children:"That's been a bit of an odyssey, not everything I've tried has worked out (or has worked inconsistently) but it's fascinating and there's tons of potential here."}),"\n",(0,n.jsx)(t.p,{children:"Some examples of things that haven't worked out well (yet)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Accessing the GitHub API through actions"}),"\nThis has worked ",(0,n.jsx)(t.em,{children:"somewhat"}),". I have been able to get Nova to review diffs and actually create pull requests, and that's pretty cool, but I do struggle to get them to repeat the action correctly in a consistent way."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Accessing the Jira API through actions"}),"\nThis has not worked. Pretty much anything I've had to do with OAuth hasn't been a success yet. It took a while to tease out, but apparently there's some kind of internal client that Nova uses to try to reach out to Jira, and it wouldn't allow some required header. I'll come back to this though, because I think it's potentially a huge benefit."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Accessing Google Drive through the API"}),"\nLimited success here. I've been able to read the contents of a spreadsheet when I've explicitly provided the URL, but that's not really what I want. Getting Nova to pull it through the API when prompted has been as yet, unsuccessful."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"But not everything has been a failure."}),"\n",(0,n.jsx)(t.p,{children:"One of the things I've been trying to do is to get to a place where I can ask Nova to review a file from my repository in a more conversational way, which means giving Nova some context. I had a version of that working with the GitHub API actions... I'd ask Nova for a file by name, and she'd have to do a search for the file, and then she could retrieve the file contents from the URL in the search response. But it was not as consistent as I'd like, and we did occasionally hit the API rate limits."}),"\n",(0,n.jsxs)(t.p,{children:["Then I found out that Nova can read GitHub files directly at the URL, so long as she looks for the raw file (so, a URL that begins with ",(0,n.jsx)(t.code,{children:"https://raw.githubusercontent.com/"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["I decided to add a GitHub action. All it does is, on any push to a branch (or tag), it uses the common command-line utility 'tree' to print out the structure of my repository at that branch (or tag), and stores that on an orphan branch that I've called ",(0,n.jsx)(t.code,{children:"metadata"})," (no commits in common with the ",(0,n.jsx)(t.code,{children:"main"})," branch, just the metadata files). There's an additional step to clean up these trees when a branch (or tag) is deleted."]}),"\n",(0,n.jsx)(t.p,{children:"I've split Nova's instructions into two places -- in their \"Instructions\" configuration is everything to do with their personality and purpose. And then she has a knowledge file (just a markdown file, to give it some structure but keep it readable) which includes information about me and my project. Inside that knowledge file is the url to the repository map."}),"\n",(0,n.jsx)(t.p,{children:"And now I can ask for files by name. Nova can infer the file's location, and they know to look up the \"raw\" file, instead of the usual GitHub UI location, which means we aren't using API rate limits at all. Nova's additional context is hosted and retrieved for free."}),"\n",(0,n.jsx)(t.p,{children:"Retrieval is still a little bit cumbersome, but it's getting much closer to what I want all the time, and I have much greater control over the instructions now."}),"\n",(0,n.jsx)(t.p,{children:"I've also stored ALL of her instructions in a github repository for version control."}),"\n",(0,n.jsx)(t.p,{children:"Looking forward to a day when OpenAI actually lets me source that data from an external file and just fetches it every time I start a new conversation."})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var n=i(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);