"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[8149],{30709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(74848),o=n(28453);const a={title:"Automating Production Deployments",date:"2024-09-24T12:37",authors:["iain","nova"],tags:["automation","infrastructure","ci-cd"]},r=void 0,s={permalink:"/preview/pr-53/blog/2024/09/25/2024-09-25-deploy-to-prod-automation/deploy-to-prod-automation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-25-deploy-to-prod-automation/2024-09-25-deploy-to-prod-automation.mdx",source:"@site/blog/2024-09-25-deploy-to-prod-automation/2024-09-25-deploy-to-prod-automation.mdx",title:"Automating Production Deployments",description:"Streamlining the Deployment Pipeline",date:"2024-09-24T12:37:00.000Z",tags:[{inline:!1,label:"Automation",permalink:"/preview/pr-53/blog/tags/automation",description:"Posts having to do with automating tasks"},{inline:!1,label:"Infrastructure",permalink:"/preview/pr-53/blog/tags/infrastructure",description:"Posts to do with setup and maintenance for Repositories, builds, etc."},{inline:!1,label:"CI/CD",permalink:"/preview/pr-53/blog/tags/ci-cd",description:"Posts to do with Continuous Integration and Deployment"}],readingTime:1.215,hasTruncateMarker:!0,authors:[{name:"Iain Davis",title:"Software Engineer, Principal @ IainDavis.dev",url:"https://iaindavis.dev",email:"iain@iaindavis.dev",page:{permalink:"/preview/pr-53/blog/authors/iain"},socials:{github:"https://github.com/IainDavis",linkedin:"https://www.linkedin.com/in/iaindavis-dev/",stackoverflow:"https://stackoverflow.com/users/11380293/iaindavis-dev",reddit:"https://www.reddit.com/user/IainDavis-dev/"},imageURL:"/preview/pr-53/img/authors/idavis.jpg",key:"iain"},{name:"Nova",title:"Code Assistant AI (GPT4o)",email:"nova@iaindavis.dev",socials:{github:"https://github.com/ScienceOfficerNOVA"},imageURL:"/preview/pr-53/img/authors/Nova_AI.png",key:"nova",page:null}],frontMatter:{title:"Automating Production Deployments",date:"2024-09-24T12:37",authors:["iain","nova"],tags:["automation","infrastructure","ci-cd"]},unlisted:!1,prevItem:{title:"Externalizing Nova",permalink:"/preview/pr-53/blog/2024/09/25/2024-09-25-externalizing-nova/externalizing-nova"},nextItem:{title:"Automating a Robust Preview Environment",permalink:"/preview/pr-53/blog/2024/09/24/2024-09-24-automated-preview-build/automated-preview-build"}},l={authorsImageUrls:[void 0,void 0]},d=[{value:"Streamlining the Deployment Pipeline",id:"streamlining-the-deployment-pipeline",level:2},{value:"Why This Matters",id:"why-this-matters",level:3},{value:"Key Changes",id:"key-changes",level:3},{value:"The Bottom Line",id:"the-bottom-line",level:3}];function c(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"streamlining-the-deployment-pipeline",children:"Streamlining the Deployment Pipeline"}),"\n",(0,i.jsx)(t.p,{children:"Today, we took a major step toward automating the deployment of this site,\neliminating manual steps and reducing the risk of errors."}),"\n",(0,i.jsxs)(t.p,{children:["Now, every pull request (PR) generates a preview build, and every merge to the\n",(0,i.jsx)(t.code,{children:"main"})," branch automatically triggers a production deployment. This new setup\nspeeds up the process, ensures consistency, and minimizes the chances of\nmistakes."]}),"\n",(0,i.jsx)(t.p,{}),"\n",(0,i.jsx)(t.h3,{id:"why-this-matters",children:"Why This Matters"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"No More Manual Deployments"}),": Previously, deploying required manual steps\nfrom my local machine, which added risk. Now, everything is automated\u2014merges\nto ",(0,i.jsx)(t.code,{children:"main"})," deploy directly to production."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Faster, More Reliable"}),": Each PR has its own preview environment, so I can\nverify changes before they go live. Once merged, they deploy automatically."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Reduced Mental Overhead"}),": The process used to require careful sequencing of\nbuild steps. That\u2019s all automated now, freeing up more focus for actual\ndevelopment."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"key-changes",children:"Key Changes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Preview Builds for PRs"}),": Each PR generates a preview environment for easy\nreview."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Automated Production Deployments"}),": Merges to ",(0,i.jsx)(t.code,{children:"main"})," trigger a pipeline\nthat handles everything from building the site to updating Storybook and test\nreports."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Error Handling"}),": If anything fails during the build or deploy, I get\nimmediate feedback via GitHub Actions, and the deployment halts."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"the-bottom-line",children:"The Bottom Line"}),"\n",(0,i.jsx)(t.p,{children:"The new automated pipeline is faster, more reliable, and takes much less effort.\nI can now focus more on building features, confident that the deployment process\nis working smoothly in the background."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);