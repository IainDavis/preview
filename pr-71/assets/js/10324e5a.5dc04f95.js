"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[7268],{42601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"projects/cover-letter-automation/key-learnings/key-learnings","title":"Key Learnings","description":"Google AppsScript","source":"@site/docs/projects/03-cover-letter-automation/03-key-learnings/03-key-learnings.mdx","sourceDirName":"projects/03-cover-letter-automation/03-key-learnings","slug":"/projects/cover-letter-automation/key-learnings/","permalink":"/preview/pr-71/docs/projects/cover-letter-automation/key-learnings/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/03-cover-letter-automation/03-key-learnings/03-key-learnings.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Key Learnings"},"sidebar":"projectsSidebar","previous":{"title":"Challenges","permalink":"/preview/pr-71/docs/projects/cover-letter-automation/challenges/"}}');var i=t(74848),s=t(28453);const r={title:"Key Learnings"},a=void 0,c={},l=[{value:"Google AppsScript",id:"google-appsscript",level:2},{value:"Compose and Decorator",id:"compose-and-decorator",level:2},{value:"Functions, Arrow Functions, and Hoisting",id:"functions-arrow-functions-and-hoisting",level:2},{value:"Function Names",id:"function-names",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"google-appsscript",children:"Google AppsScript"}),"\n",(0,i.jsx)(n.p,{children:"This is my second foray into Google AppsScript. There's not much to\nlearn about AppsScript itself, it's basically JavaScript. But there's\nplenty to learn about the Google APIs exposed in it. My previous\neffort is more or less scoped to GMail only -- this was my first time\nusing different Google Services in an inter-dependent way. It was\ninteresting seeing the trade-offs Google have made. They seem to be\nmaintaining separation of concerns in ways that maybe are sacrificing\nthe utility of the platform. Certainly there are things that\nintuitively seemed I should be able to do, that I could not do."}),"\n",(0,i.jsx)(n.h2,{id:"compose-and-decorator",children:"Compose and Decorator"}),"\n",(0,i.jsx)(n.p,{children:"I'm really fond of both of these patterns. I think they go along way\ntowards making your code comprehensible, declarative, and self-documenting."}),"\n",(0,i.jsx)(n.h2,{id:"functions-arrow-functions-and-hoisting",children:"Functions, Arrow Functions, and Hoisting"}),"\n",(0,i.jsxs)(n.p,{children:["I think I've just gotten so used to modules, I forgot you sometimes\nhave to ensure you define things before you use them. It turns out, in\nAppsScript (and perhaps elsewhere), conventional functions (using the\n",(0,i.jsx)(n.code,{children:"function"})," keyword) are hoisted and can be invoked anywhere. Arrow\nfunctions are not."]}),"\n",(0,i.jsx)(n.h2,{id:"function-names",children:"Function Names"}),"\n",(0,i.jsxs)(n.p,{children:["I didn't expect to find that function names are immutable. I had hoped\nto use the ",(0,i.jsx)(n.code,{children:"Function.name"})," property in my logging decorators, but that\nonly worked if the base function I wanted to invoke was directly below\nthe logging decorator in the call stack. If anything intervened, the\nlogging decorator no longer had access to ",(0,i.jsx)(n.code,{children:"Function.name"})," for the base function."]}),"\n",(0,i.jsx)(n.p,{children:"In the end, I just supplied an explicit string to the logging decorator, which is a bit\ninelegant, but it works."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);