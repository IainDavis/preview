"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[9001],{99767:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(74848),r=i(28453),a=i(72550);const s={title:"Implementation Details"},o=void 0,c={id:"projects/iaindavis.dev/implementation/implementation",title:"Implementation Details",description:"",source:"@site/docs/projects/01-iaindavis.dev/03-implementation/03-implementation.mdx",sourceDirName:"projects/01-iaindavis.dev/03-implementation",slug:"/projects/iaindavis.dev/implementation/",permalink:"/preview/pr-67/docs/projects/iaindavis.dev/implementation/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/01-iaindavis.dev/03-implementation/03-implementation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Implementation Details"},sidebar:"projectsSidebar",previous:{title:"Key Features",permalink:"/preview/pr-67/docs/projects/iaindavis.dev/key-features/"},next:{title:"Major Segments",permalink:"/preview/pr-67/docs/projects/iaindavis.dev/implementation/segments/"}},d={},l=[];function u(e){return(0,n.jsx)(a.A,{})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},12050:(e,t,i)=>{var n=i(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(h,{item:t});case"category":return(0,m.jsx)(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}};n(i(96540));var r=n(i(71508)),a=n(i(28774)),s=i(37712),o=i(95068),c=n(i(16654)),d=i(70986),l=n(i(44608)),u=n(i(99474)),m=i(74848);function p(e){let{href:t,children:i}=e;return(0,m.jsx)(a.default,{href:t,className:(0,r.default)("card padding--lg",u.default.cardContainer),children:i})}function f(e){let{href:t,icon:i,title:n,description:a}=e;return(0,m.jsxs)(p,{href:t,children:[(0,m.jsxs)(l.default,{as:"h2",className:(0,r.default)("text--truncate",u.default.cardTitle),title:n,children:[i," ",n]}),a&&(0,m.jsx)("p",{className:(0,r.default)("text--truncate",u.default.cardDescription),title:a,children:a})]})}function v(e){let{item:t}=e;const i=(0,s.findFirstSidebarItemLink)(t),n=function(){const{selectMessage:e}=(0,o.usePluralForm)();return t=>e(t,(0,d.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,m.jsx)(f,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const i=(0,c.default)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.useDocById)(t.docId??void 0);return(0,m.jsx)(f,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}},72550:(e,t,i)=>{var n=i(24994).default;t.A=d;n(i(96540));var r=n(i(71508)),a=i(37712),s=n(i(12050)),o=i(74848);function c(e){let{className:t}=e;const i=(0,a.useCurrentSidebarCategory)();return(0,o.jsx)(d,{items:i.items,className:t})}function d(e){const{items:t,className:i}=e;if(!t)return(0,o.jsx)(c,{...e});const n=(0,a.filterDocCardListItems)(t);return(0,o.jsx)("section",{className:(0,r.default)("row",i),children:n.map(((e,t)=>(0,o.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,o.jsx)(s.default,{item:e})},t)))})}},99474:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);