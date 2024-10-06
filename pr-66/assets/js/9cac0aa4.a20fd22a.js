"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[5989],{3868:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(74848),r=o(28453);const s={title:"Challenges"},i=void 0,l={id:"projects/cover-letter-automation/challenges/challenges",title:"Challenges",description:"The Google APIs",source:"@site/docs/projects/03-cover-letter-automation/02-challenges/02-challenges.mdx",sourceDirName:"projects/03-cover-letter-automation/02-challenges",slug:"/projects/cover-letter-automation/challenges/",permalink:"/preview/pr-66/docs/projects/cover-letter-automation/challenges/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/03-cover-letter-automation/02-challenges/02-challenges.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Challenges"},sidebar:"projectsSidebar",previous:{title:"Implementation Details",permalink:"/preview/pr-66/docs/projects/cover-letter-automation/implementation-details/"},next:{title:"Key Learnings",permalink:"/preview/pr-66/docs/projects/cover-letter-automation/key-learnings/"}},a={},c=[{value:"The Google APIs",id:"the-google-apis",level:2},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3}];function h(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"the-google-apis",children:"The Google APIs"}),"\n",(0,n.jsxs)(t.p,{children:["The Google APIs are surprisingly difficult to work with, and things\nyou would expect to find are not there. There's no easy way to\noverwrite the body of one document with the body of another, for\nexample. You can ",(0,n.jsx)(t.em,{children:"copy"})," a document, to be sure. But if you want to\npreserve version history, all you can do is step through the children\nof the body of the source document and copy them across one-by-one."]}),"\n",(0,n.jsx)(t.h3,{id:"problem",children:"Problem"}),"\n",(0,n.jsx)(t.p,{children:"I went through several iterations of trying to create the cover letter files."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Creating the file with the ",(0,n.jsx)(t.code,{children:"DriveApp"})," class... not possible to create a Google Docs folder this way."]}),"\n",(0,n.jsxs)(t.li,{children:["Creating a file with the ",(0,n.jsx)(t.code,{children:"DocumentApp"})," class: will only create the\ndocument at the Drive root folder, and moving a file is also\nsuprisingly challenging"]}),"\n",(0,n.jsxs)(t.li,{children:["Creating a file through the ",(0,n.jsx)(t.code,{children:"Drive.Files"})," API: I was able to\nsuccessfully create a file in the Google Docs format (and MIME type),\nbut it created a default header that I could not remove that broke the\noutput."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,n.jsx)(t.p,{children:"In the end, I didn't bother creating a new file at all, I just cloned\nthe template directly. It means I'm essentially copying the template\ntwice, on first-creation of every cover letter, because the actual\nupdate phase doesn't know whether the document is a fresh clone or\nnot, but I figure that's small concern for this limited use case. If\nthis were a bigger scale project, I'd spend some more time trying to\nfigure this out, but I'm probably not going to apply for enough jobs\nto have to worry about scaling issues and efficiency."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>l});var n=o(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);