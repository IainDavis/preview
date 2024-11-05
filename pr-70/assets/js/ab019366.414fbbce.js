"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[7471],{86423:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"projects/iaindavis.dev/implementation/ci-cd/ci-cd","title":"CI/CD","description":"This website implements Continuous Integration/Continuous Deployment","source":"@site/docs/projects/01-iaindavis.dev/03-implementation/03-ci-cd/03-ci-cd.mdx","sourceDirName":"projects/01-iaindavis.dev/03-implementation/03-ci-cd","slug":"/projects/iaindavis.dev/implementation/ci-cd/","permalink":"/preview/pr-70/docs/projects/iaindavis.dev/implementation/ci-cd/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/01-iaindavis.dev/03-implementation/03-ci-cd/03-ci-cd.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"CI/CD","date":"2024-10-01T10:23"},"sidebar":"projectsSidebar","previous":{"title":"Other Challenges","permalink":"/preview/pr-70/docs/projects/iaindavis.dev/implementation/challenges/other-challenges/"},"next":{"title":"Tests","permalink":"/preview/pr-70/docs/projects/iaindavis.dev/implementation/tests/"}}');var o=t(74848),s=t(28453);const r={title:"CI/CD",date:"2024-10-01T10:23"},a=void 0,l={},c=[{value:"Deploy To Preview Environment",id:"deploy-to-preview-environment",level:2},{value:"Deploy to Production",id:"deploy-to-production",level:2},{value:"Repository Map",id:"repository-map",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"This website implements Continuous Integration/Continuous Deployment\nwith GitHub Actions. The following flows are supported:"}),"\n",(0,o.jsx)(i.h2,{id:"deploy-to-preview-environment",children:"Deploy To Preview Environment"}),"\n",(0,o.jsx)(i.p,{children:"A separate repository (with it's own GitHub Pages space) is maintained\nas a pre-prod environment. On any PR creation, a full build is run\nagainst the source, including:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Unit test run & reports generation"}),"\n",(0,o.jsx)(i.li,{children:"Docusaurus build (including dynamic, global CSS file required for Storybook)"}),"\n",(0,o.jsx)(i.li,{children:"Storybook build (with dynamic styles in place)"}),"\n",(0,o.jsx)(i.li,{children:"Deploy to remote branch"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"At the end of the build, a status is posted back to the pull request\nnotifying the user the preview environment is ready."}),"\n",(0,o.jsxs)(i.p,{children:["The developer can view the preview site at ",(0,o.jsx)(i.code,{children:"iaindavis.dev/preview/(pr-number)"}),"."]}),"\n",(0,o.jsx)(i.p,{children:"When the PR is closed or merged, a separate job runs to delete the preview environment."}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/.github/workflows/preview-deploy.yml",title:".github/workflows/preview-deploy.yml",children:"GitHub Actions Spec"})}),"\n",(0,o.jsx)(i.hr,{}),"\n",(0,o.jsx)(i.h2,{id:"deploy-to-production",children:"Deploy to Production"}),"\n",(0,o.jsxs)(i.p,{children:["The same process is carried out as the deploy-to-preview action,\nexcept that some stages which are allowed to fail in the preview build\n(like unit tests) will abort the build if they fail in production. And\nof course, the end result is that the website is deployed in its\nprimary location at ",(0,o.jsx)(i.a,{href:"https://iaindavis.dev",children:"https://iaindavis.dev"})]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/.github/workflows/production-deploy.yml",title:".github/workflows/production-deploy.yml",children:"GitHub Actions Spec"})}),"\n",(0,o.jsx)(i.hr,{}),"\n",(0,o.jsx)(i.h2,{id:"repository-map",children:"Repository Map"}),"\n",(0,o.jsxs)(i.p,{children:["Not strictly a part of the website: a GitHub Actions job runs on\ncreation or update of any branch (or tag). That job runs the\ncommand-line utility ",(0,o.jsx)(i.code,{children:"tree"})," to create a map of the repository contents\nat the head of the created ref.  This map allows my AI code assistant,\nNova, to infer file locations from filenames.  This low-effort,\nlow-tech fix streamlines instructions to Nova, and avoids wasting\nrate-limited API calls on fetching data that is publicly available."]}),"\n",(0,o.jsxs)(i.p,{children:["Repository trees are maintained in an orphan branch of the repository\ncalled ",(0,o.jsx)(i.code,{children:"metadata"})]}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/.github/workflows/generate-repository-map.yml",title:".github/workflows/generate-repository-map.yml",children:"GitHub actions spec"})," for branch creation\n",(0,o.jsx)(i.a,{href:"https://github.com/IainDavis/iaindavis.github.io/blob/main/.github/workflows/cleanup-repository-map.yml",title:".github/workflows/cleanup-repository-map.yml",children:"GitHub actions spec"})," for branch clean-up"]}),"\n"]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(96540);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);