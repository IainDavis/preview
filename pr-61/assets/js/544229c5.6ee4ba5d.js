"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[5473],{99455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var o=n(74848),i=n(28453);const r={title:"Challenges"},s=void 0,a={id:"projects/projects/nova/challenges/challenges",title:"Challenges",description:"GitHub robots.txt",source:"@site/docs/projects/projects/nova/02-challenges/02-challenges.mdx",sourceDirName:"projects/projects/nova/02-challenges",slug:"/projects/projects/nova/challenges/",permalink:"/preview/pr-61/docs/projects/projects/nova/challenges/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/projects/nova/02-challenges/02-challenges.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Challenges"},sidebar:"projectsSidebar",previous:{title:"Key Features",permalink:"/preview/pr-61/docs/projects/projects/nova/key-features/"},next:{title:"Planned Features",permalink:"/preview/pr-61/docs/projects/projects/nova/future-plans/"}},l={},h=[{value:"GitHub robots.txt",id:"github-robotstxt",level:2},{value:"Problem:",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"GitHub file paths",id:"github-file-paths",level:2},{value:"Problem",id:"problem-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Jira Auth",id:"jira-auth",level:2},{value:"Problem 1",id:"problem-1-1",level:3},{value:"Problem 2",id:"problem-2",level:3},{value:"Solution",id:"solution-2",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"github-robotstxt",children:"GitHub robots.txt"}),"\n",(0,o.jsx)(t.h3,{id:"problem",children:"Problem:"}),"\n",(0,o.jsx)(t.p,{children:"Early in my interactions with Nova, I struggled to get them to\ncorrectly identify, then retrieve, a file from my repository to\nperform some analysis on it. Nova would insist they didn't have the\ncapacity to view public files, and prompt me to just copy/paste the\ncode into the chat window, which is exactly the sort of\ncontext-switching I wanted to avoid."}),"\n",(0,o.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsxs)(t.p,{children:["Eventually I discovered that GitHub employs a\n",(0,o.jsx)(t.a,{href:"https://developers.google.com/search/docs/crawling-indexing/robots/intro#:~:text=A%20robots.txt%20file%20tells,or%20password%2Dprotect%20the%20page.",title:"About robots.txt",children:"robots.txt"})," file to prevent crawlers from accessing\nsites. I further discovered that the same does not apply to the 'raw'\nversions of files available on the ",(0,o.jsx)(t.code,{children:"raw.githubusercontent.com"})," domain."]}),"\n",(0,o.jsxs)(t.p,{children:["Now Nova knows to check the relevant ",(0,o.jsx)(t.code,{children:"raw.githubusercontent.com"})," URL."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"github-file-paths",children:"GitHub file paths"}),"\n",(0,o.jsx)(t.h3,{id:"problem-1",children:"Problem"}),"\n",(0,o.jsx)(t.p,{children:"With the above problem solved, Nova was able to retrieve files if given the\nabsolute path, but giving her the filename either didn't get the result I\nwanted, or else required an additional API call to perform a search so that the\ncorrect path could be inferred."}),"\n",(0,o.jsx)(t.h3,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsxs)(t.p,{children:["A GitHub Action executes on every branch creation within the repository to\ncreate a map of the repository (using command-line utility ",(0,o.jsx)(t.a,{href:"https://linux.die.net/man/1/tree",title:"Command-line utility 'tree'",children:"tree"}),"). Maps\nare stored in a special-purpose [",(0,o.jsx)(t.code,{children:"metadata"})," branch][] of the\nrepository which does not share commit history with the rest of the\nrepository. Nova knows to find them there, and can now correctly infer file\nlocations given a file name."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"jira-auth",children:"Jira Auth"}),"\n",(0,o.jsx)(t.h3,{id:"problem-1-1",children:"Problem 1"}),"\n",(0,o.jsx)(t.p,{children:"Jira allows authentication via Basic Auth or OAuth."}),"\n",(0,o.jsx)(t.p,{children:"I could not get the OAuth configuration to work. The authentication went as\nexpected, but then the redirect came back to the wrong URL, and I'd have to\nauthenticate again."}),"\n",(0,o.jsx)(t.h3,{id:"problem-2",children:"Problem 2"}),"\n",(0,o.jsxs)(t.p,{children:["I was able to partially work around the above problem by using Basic\nauth. All of the calls I wanted to make were sent successfully from my\n",(0,o.jsx)(t.a,{href:"https://github.com/IainDavis/Nova/blob/main/requestValidation/jira.net.http",title:"File for VS Code's REST Client featuring API calls that mirror Nova's\nactions and relevant credentials",children:"REST Client file"}),". But when I had Nova perform the same\nactions, using the same credentials, they were rejected for failing to return\nthe ",(0,o.jsx)(t.code,{children:"XSRF"})," token."]}),"\n",(0,o.jsx)(t.h3,{id:"solution-2",children:"Solution"}),"\n",(0,o.jsxs)(t.p,{children:["In the end it turns out OAuth was working just fine. The difficulty\nwas a usability issue in the ChatGPT UI. When you edit a GPT, or its\nactions, you work in a temporary preview space that lets you trial\nchanges before committing them. When Jira's OAuth implementation was\nredirecting, it was returning to the wrong URL.  Committing the\nchanges and ",(0,o.jsx)(t.em,{children:"then"})," testing them solved the problem."]}),"\n",(0,o.jsx)(t.p,{children:"Thanks to [this article] for helping finally identify the issue."}),"\n"]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);