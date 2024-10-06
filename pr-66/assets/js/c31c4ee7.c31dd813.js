"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[8508],{25437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(74848),n=a(28453);a(97793);const r={title:"Key Features"},s=void 0,o={id:"projects/nova/key-features/key-features",title:"Key Features",description:"Nova's Current Abilities",source:"@site/docs/projects/02-nova/01-key-features/01-key-features.mdx",sourceDirName:"projects/02-nova/01-key-features",slug:"/projects/nova/key-features/",permalink:"/preview/pr-66/docs/projects/nova/key-features/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/02-nova/01-key-features/01-key-features.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Key Features"},sidebar:"projectsSidebar",previous:{title:"Nova (AI Code Assistant)",permalink:"/preview/pr-66/docs/projects/nova/"},next:{title:"Challenges",permalink:"/preview/pr-66/docs/projects/nova/challenges/"}},l={},c=[{value:"Nova&#39;s Current Abilities",id:"novas-current-abilities",level:2},{value:"Awareness of Project Structure",id:"awareness-of-project-structure",level:3},{value:"Integration with GitHub",id:"integration-with-github",level:3},{value:"Integration with Jira",id:"integration-with-jira",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"novas-current-abilities",children:"Nova's Current Abilities"}),"\n",(0,i.jsx)(t.h3,{id:"awareness-of-project-structure",children:"Awareness of Project Structure"}),"\n",(0,i.jsxs)(t.p,{children:["For every branch created in this website's repository, a GitHub\nAction produces a ",(0,i.jsx)(t.a,{href:"https://github.com/IainDavis/iaindavis.github.io/tree/metadata/repository-maps",title:"current set of repository maps",children:"map of the repository"})," (using command-line\nutility ",(0,i.jsx)(t.a,{href:"https://linux.die.net/man/1/tree",title:"Command-line utility 'tree'",children:(0,i.jsx)(t.code,{children:"tree"})}),"). Repository maps are stored in a\nspecial-purpose branch called ",(0,i.jsx)(t.code,{children:"metadata"})," within the repository."]}),"\n",(0,i.jsxs)(t.p,{children:["Nova is able to access these maps to infer the structure of the\nrepository and the locations of files.  This makes ",(0,i.jsx)(t.a,{href:"https://chatgpt.com/share/66f4dbb5-5d8c-8000-a0b9-c02b6b03a3c8",title:"Chat log of Nova interacting with a file by name, when prompted",children:"collaborating on files more fluid"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Nova relies on raw GitHub files in a public repository, so no authentication is needed."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"integration-with-github",children:"Integration with GitHub"}),"\n",(0,i.jsxs)(t.p,{children:["Nova also has ",(0,i.jsx)(t.a,{href:"https://github.com/ScienceOfficerNOVA",title:"Nova GitHub profile",children:"their own GitHub account"}),"\nwhich she can use to submit reviews on my pull requests. Nova's\nfeedback is often quite valuable. Having the review submitted to\nthe PR provides several benefits over simply getting feedback in\nthe chat window:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"it promotes dilligence (PRs require approval)"}),"\n",(0,i.jsx)(t.li,{children:"it keeps the reviews viewable for historical purposes (why did I make that change?)"}),"\n",(0,i.jsx)(t.li,{children:"it makes reviews viewable by anyone evaluating my work/process"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Nova authenticates with GitHub via a Personal Access Token"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"integration-with-jira",children:"Integration with Jira"}),"\n",(0,i.jsxs)(t.p,{children:["Nova has an account on my personal Jira instance, which ",(0,i.jsx)(t.a,{href:"https://chatgpt.com/share/66f76a08-8448-8000-afc0-e52ca62f5a28",title:"Chat log showing Nova creating a Jira issue on request",children:"they can\nuse to submit issues for me"}),".  This saves a lot\nof lost productivity in context switching. Stories generally still\nrequire some grooming, but it's much less effot than creating them\nfrom scratch.  Being able to create stories quickly, and without\nhaving to switch context (much) means my backlog generally stays\npretty full with workable stories."]}),"\n",(0,i.jsx)(t.p,{children:"Nova authenicates with Jira via OAuth2 using the Jira Developer Platform"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("div",{style:{width:"80%"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"\nScreen capture of a Jira Story created by Nova\n",src:a(89885).A+"",title:"A Jira story Nova created for me",width:"2640",height:"1184"})})}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},97793:(e,t,a)=>{var i=a(24994).default,n=a(6305).default;t.A=void 0;var r=n(a(96540)),s=i(a(7085)),o=i(a(17805)),l=a(74848);t.A=e=>{let{startExpanded:t=!1,expandPrompt:a,collapsePrompt:i,children:n}=e;const c=(0,r.useId)(),d=(0,r.useRef)(null),u=(0,r.useRef)(null),h=a||(0,o.default)("expandable-component-default-expand-prompt"),p=i||(0,o.default)("expandable-component-default-collapse-prompt"),[f,v]=(0,r.useState)(t);(0,r.useEffect)((()=>{v((()=>t))}),[t]),(0,r.useEffect)((()=>{f?d.current.focus():u.current.focus()}));const m=()=>v((e=>!e));return(0,l.jsxs)("div",{className:s.default.container,children:[(0,l.jsx)("div",{ref:d,tabIndex:f?0:1,"data-testid":`expandable-section-${c}`,id:`expandable-section-${c}`,className:s.default.expandableBlock,hidden:!f,children:n}),(0,l.jsx)("button",{ref:u,tabIndex:0,className:s.default.toggle,onClick:e=>{m()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),m())},"aria-expanded":f,"aria-controls":`expandable-section-toggle-${c}`,children:f?p:h})]})}},77178:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},17805:(e,t,a)=>{var i=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(92260));t.default=e=>n.default[e]},92260:(e,t,a)=>{var i=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(77178));t.default={...n.default}},7085:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const i={container:"container_hWMK",toggle:"toggle_dJXd",expandableBlock:"expandableBlock_ggz7"}},89885:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/nova-jira-issue-34638503fc01c875d232f0ce89a6f112.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var i=a(96540);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);