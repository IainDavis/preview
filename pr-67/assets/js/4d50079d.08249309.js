"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[5392],{58083:(e,t,a)=>{a.r(t),a.d(t,{Compact:()=>v,CompactSquare:()=>m,Expanded:()=>s,assets:()=>c,contentTitle:()=>h,default:()=>g,fieldStyle:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(74848),l=a(28453),o=a(87013);const r={title:"Making My Logo a Component",date:"2024-09-15T10:34",authors:["iain"],image:"/img/logo-compact-square-dark.svg",tags:["svg","react","brand","graphics","customComponents"]},h=void 0,i={permalink:"/preview/pr-67/blog/2024/09/15/2024-09-15-logo-component/logo-component",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-15-logo-component/2024-09-15-logo-component.mdx",source:"@site/blog/2024-09-15-logo-component/2024-09-15-logo-component.mdx",title:"Making My Logo a Component",description:"After creating my logo, I wanted to turn it into a re-usable React component",date:"2024-09-15T10:34:00.000Z",tags:[{inline:!1,label:"SVG",permalink:"/preview/pr-67/blog/tags/svg",description:"Posts to do with the SVG format"},{inline:!1,label:"React",permalink:"/preview/pr-67/blog/tags/react",description:"Posts to do with the React ecosystem"},{inline:!1,label:"My Brand",permalink:"/preview/pr-67/blog/tags/brand",description:"Posts to do with developing my personal brand"},{inline:!1,label:"Graphics, Icons & Logos",permalink:"/preview/pr-67/blog/tags/graphics",description:"Posts to do with created visual elements"},{inline:!1,label:"Custom Docusaurus Components",permalink:"/preview/pr-67/blog/tags/custom-components",description:"Posts to do with components I've developed to extend Docusaurus functionallity"}],readingTime:5.85,hasTruncateMarker:!0,authors:[{name:"Iain Davis",title:"Software Engineer, Principal @ IainDavis.dev",url:"https://iaindavis.dev",email:"iain@iaindavis.dev",page:{permalink:"/preview/pr-67/blog/authors/iain"},socials:{github:"https://github.com/IainDavis",linkedin:"https://www.linkedin.com/in/iaindavis-dev/",stackoverflow:"https://stackoverflow.com/users/11380293/iaindavis-dev",reddit:"https://www.reddit.com/user/IainDavis-dev/"},imageURL:"/preview/pr-67/img/authors/idavis.jpg",key:"iain"}],frontMatter:{title:"Making My Logo a Component",date:"2024-09-15T10:34",authors:["iain"],image:"/img/logo-compact-square-dark.svg",tags:["svg","react","brand","graphics","customComponents"]},unlisted:!1,prevItem:{title:"Fixing Diffs",permalink:"/preview/pr-67/blog/2024/09/15/2024-09-15-fixing-diffs/fixing-diffs"},nextItem:{title:"Impromptu Brand Work",permalink:"/preview/pr-67/blog/2024/09/14/2024-09-14-impromptu-brand-work/impromptu-brand-work"}},c={authorsImageUrls:[void 0]},d={background:"gray",padding:"2em"},s=()=>{const e={div:"div",...(0,l.R)()};return(0,n.jsx)(e.div,{style:d,children:(0,n.jsx)(o.default,{})})},v=()=>{const e={div:"div",...(0,l.R)()};return(0,n.jsx)(e.div,{style:d,children:(0,n.jsx)(o.default,{variant:"compact"})})},m=()=>{const e={div:"div",...(0,l.R)()};return(0,n.jsx)(e.div,{style:d,children:(0,n.jsx)(o.default,{variant:"compact-square"})})},u=[{value:"Variants",id:"variants",level:3}];function p(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"After creating my logo, I wanted to turn it into a re-usable React component\nthat would respond to theming, and let the logo variant be controllable by\nproperties, so that essentially, I would only need one component that I could\nuse wherever I wanted a logo"}),"\n",(0,n.jsx)(t.h3,{id:"variants",children:"Variants"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"expanded"}),(0,n.jsx)(t.th,{children:"compact"}),(0,n.jsx)(t.th,{children:"compactSquare"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s,{})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(v,{})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(m,{})})]})})]}),"\n",(0,n.jsx)(t.p,{}),"\n",(0,n.jsxs)(t.p,{children:["Initially, I had one SVG for each variant, in the light and dark theme. I\nimported all of them (about ten .SVG files) and used JavaScript logic\nto choose between them. To apply my themes, I was using Docusaurus'\nprovided\n",(0,n.jsx)(t.a,{href:"https://docusaurus.io/docs/markdown-features/assets#themed-images",children:(0,n.jsx)(t.code,{children:"ThemedImage"})}),"\ncomponent."]}),"\n",(0,n.jsx)(t.p,{children:"That's where the trouble started."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:"ThemedImage",children:"import useBaseUrl from '@docusaurus/useBaseUrl';\nimport ThemedImage from '@theme/ThemedImage';\n\n<ThemedImage\n  alt=\"Docusaurus themed image\"\n  sources={{\n    light: useBaseUrl('/img/docusaurus_light.svg'),\n    dark: useBaseUrl('/img/docusaurus_dark.svg'),\n  }}\n/>;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Those imports at the top are well and good in Docusaurus (and Storybook, it\nturns out) but when I tried to run my Storybook stories through Jest, those\nimports failed, sending me on a journey of redefining aliases and configuring\npreprocessors. I never did find the right combination of aliases definitions,\nand some of the docusaurus dependencies seem to rely on ",(0,n.jsx)(t.em,{children:"different paths"})," for\nthe same alias. It's entirely possible I'm misunderstanding what was going on,\nbecause I stopped trying to solve that problem before I ever licked it (and\nwhile I still had some hair\nleft)."]}),"\n",(0,n.jsxs)(t.p,{children:["So, what I need then is a way to accomplish the same thing, but without any\nnested Docusaurus dependencies. I couldn't even programatically detect the\ntheme, because ",(0,n.jsx)(t.em,{children:"that"})," logic is in a React hook which is also defined in\nDocusaurus dependencies, and I really didn't want to reinvent that wheel."]}),"\n",(0,n.jsx)(t.p,{children:"It occurred to me that SVG files are stylable with CSS. I'd never done it\nbefore, and I wasn't sure how it would go with CSS Modules, but I figured it was\nworth a shot."}),"\n",(0,n.jsx)(t.p,{children:"First I had to generalize all my SVG files by removing the \"fill\" attributes and\nreplace them with 'data-fill' attributes, that I can use as selectors in my CSS:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-svg",metastring:"logo-expanded-dark.svg -> logo-expanded-generic.svg",children:'<svg xmlns="http://www.w3.org/2000/svg" width="180" height="50" fill="none" viewBox="0 0 180 50">\n   // diff-remove\n   <rect width="180" height="50" fill="#1F1F1F" rx="8"/>\n   // diff-add\n   <rect width="180" height="50" data-fill="background" rx="8"/>\n   // diff-remove\n   <path fill="#1F1F1F" d="M10 9.76h130v30H10v-30Zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/>\n   // diff-remove\n   <path fill="#569CD6" fill-rule="evenodd" d="M8.5 8.26h133V23.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H8.5v-33Zm3 3v27h127v-27h-127ZM159 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" clip-rule="evenodd"/>\n   // diff-remove\n   <path fill="#4EC9B0" d="M150.196 14.88c-.656 0-1.188-.228-1.596-.684-.4-.456-.6-1.068-.6-1.836v-1.788c0-.776.2-1.392.6-1.848.4-.456.932-.684 1.596-.684.544 0 .976.156 1.296.468.32.304.48.724.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348c0 .536-.16.96-.48 1.272-.32.304-.752.456-1.296.456Zm.528-1.296c.384 0 .68-.112.888-.336.216-.232.324-.552.324-.96v-1.656c0-.408-.108-.724-.324-.948-.208-.232-.504-.348-.888-.348s-.684.112-.9.336c-.216.224-.324.544-.324.96v1.656c0 .416.108.736.324.96.216.224.516.336.9.336Zm7.243 1.296c-.56 0-1.048-.108-1.464-.324a2.402 2.402 0 0 1-.972-.9c-.224-.392-.336-.848-.336-1.368v-1.656c0-.52.112-.972.336-1.356.232-.392.556-.696.972-.912.416-.216.904-.324 1.464-.324.552 0 1.032.108 1.44.324.416.216.736.52.96.912.232.384.348.836.348 1.356v1.188h-4.068v.468c0 .464.112.816.336 1.056.224.232.556.348.996.348.336 0 .608-.056.816-.168a.801.801 0 0 0 .396-.516h1.476c-.112.568-.416 1.024-.912 1.368-.488.336-1.084.504-1.788.504Zm1.296-3.9v-.36c0-.456-.108-.804-.324-1.044-.216-.248-.54-.372-.972-.372-.432 0-.76.124-.984.372-.224.248-.336.6-.336 1.056v.252l2.724-.024-.108.12Zm4.928 3.78-2.172-6.6h1.536l1.26 4.008c.072.24.14.488.204.744.072.256.124.46.156.612.04-.152.092-.356.156-.612s.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6h-1.932Z"/>\n   // diff-remove\n   <path fill="#CE9178" d="M19.89 32.76v-2.31h3.087V19.74H19.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31h-8.82Zm15.72.21c-1.19 0-2.127-.315-2.813-.945-.686-.63-1.03-1.477-1.03-2.541 0-1.134.379-2.009 1.135-2.625.756-.616 1.827-.924 3.213-.924h2.877v-.987c0-.56-.182-.994-.546-1.302-.364-.322-.861-.483-1.491-.483-.574 0-1.05.126-1.428.378a1.476 1.476 0 0 0-.672 1.029h-2.562c.126-1.092.616-1.96 1.47-2.604.854-.644 1.946-.966 3.276-.966 1.414 0 2.527.357 3.339 1.071.826.7 1.239 1.652 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567c0 .854-.315 1.533-.945 2.037-.63.504-1.47.756-2.52.756Zm.862-1.974c.742 0 1.344-.189 1.806-.567.476-.378.714-.868.714-1.47v-1.407h-2.835c-.532 0-.96.154-1.281.462-.322.308-.483.714-.483 1.218 0 .546.182.98.546 1.302.378.308.889.462 1.533.462Zm8.308 1.764v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394H44.78Zm5.082-13.482c-.532 0-.952-.133-1.26-.399-.308-.28-.462-.651-.462-1.113 0-.462.154-.826.462-1.092.308-.28.728-.42 1.26-.42s.952.14 1.26.42c.308.266.462.63.462 1.092 0 .462-.154.833-.462 1.113-.308.266-.728.399-1.26.399Zm7.53 13.482V21.21h2.562v2.205h.714l-.714.609c0-.952.273-1.694.82-2.226.56-.532 1.322-.798 2.288-.798 1.134 0 2.037.378 2.71 1.134.685.756 1.028 1.771 1.028 3.045v7.581h-2.625v-7.308c0-.7-.182-1.239-.546-1.617-.364-.378-.875-.567-1.533-.567-.644 0-1.155.196-1.533.588-.364.392-.546.952-.546 1.68v7.224h-2.625Zm12.55 0V17.43H74.5c1.036 0 1.932.196 2.688.588.77.392 1.365.945 1.785 1.659.42.714.63 1.561.63 2.541v5.733c0 .966-.21 1.813-.63 2.541a4.401 4.401 0 0 1-1.785 1.68c-.756.392-1.652.588-2.688.588h-4.557Zm2.625-2.415H74.5c.756 0 1.358-.21 1.806-.63.448-.434.672-1.022.672-1.764v-5.733c0-.728-.224-1.302-.672-1.722-.448-.434-1.05-.651-1.806-.651h-1.932v10.5Zm13.411 2.625c-1.19 0-2.128-.315-2.814-.945-.686-.63-1.029-1.477-1.029-2.541 0-1.134.378-2.009 1.134-2.625.756-.616 1.827-.924 3.213-.924h2.877v-.987c0-.56-.182-.994-.546-1.302-.364-.322-.861-.483-1.491-.483-.574 0-1.05.126-1.428.378a1.476 1.476 0 0 0-.672 1.029H82.66c.126-1.092.616-1.96 1.47-2.604.854-.644 1.946-.966 3.276-.966 1.414 0 2.527.357 3.339 1.071.826.7 1.239 1.652 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567c0 .854-.315 1.533-.945 2.037-.63.504-1.47.756-2.52.756Zm.861-1.974c.742 0 1.344-.189 1.806-.567.476-.378.714-.868.714-1.47v-1.407h-2.835c-.532 0-.959.154-1.281.462-.322.308-.483.714-.483 1.218 0 .546.182.98.546 1.302.378.308.889.462 1.533.462ZM98.17 32.76l-3.8-11.55h2.688l2.205 7.014c.126.42.245.854.357 1.302.126.448.217.805.273 1.071.07-.266.161-.623.273-1.071.112-.448.224-.875.336-1.281l2.163-7.035h2.667l-3.78 11.55h-3.381Zm9.569 0v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394h-10.122Zm5.082-13.482c-.532 0-.952-.133-1.26-.399-.308-.28-.462-.651-.462-1.113 0-.462.154-.826.462-1.092.308-.28.728-.42 1.26-.42s.952.14 1.26.42c.308.266.462.63.462 1.092 0 .462-.154.833-.462 1.113-.308.266-.728.399-1.26.399Zm11.772 13.671c-.882 0-1.652-.14-2.31-.42-.658-.28-1.176-.665-1.554-1.155-.364-.504-.56-1.092-.588-1.764h2.625c.028.364.203.658.525.882.336.224.77.336 1.302.336h.924c.644 0 1.127-.126 1.449-.378.322-.252.483-.595.483-1.029 0-.406-.147-.721-.441-.945-.28-.238-.721-.392-1.323-.462l-1.428-.21c-1.316-.182-2.282-.532-2.898-1.05-.616-.518-.924-1.295-.924-2.331 0-1.078.364-1.911 1.092-2.499.728-.602 1.799-.903 3.213-.903h.798c1.288 0 2.317.287 3.087.861.77.574 1.183 1.344 1.239 2.31h-2.625c-.042-.308-.217-.56-.525-.756-.294-.196-.686-.294-1.176-.294h-.798c-.602 0-1.043.112-1.323.336-.266.21-.399.525-.399.945 0 .392.119.686.357.882.238.182.623.315 1.155.399l1.491.21c1.372.196 2.38.567 3.024 1.113.658.532.987 1.323.987 2.373 0 1.12-.385 1.995-1.155 2.625-.756.616-1.876.924-3.36.924h-.924Z"/>\n   // diff-add\n   <path data-fill="background" d="M10 9.76h130v30H10v-30Zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/>\n   // diff-add\n   <path data-fill="border" fill-rule="evenodd" d="M8.5 8.26h133V23.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H8.5v-33Zm3 3v27h127v-27h-127ZM159 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" clip-rule="evenodd"/>\n   // diff-add\n   <path data-fill="text-accent" d="M150.196 14.88c-.656 0-1.188-.228-1.596-.684-.4-.456-.6-1.068-.6-1.836v-1.788c0-.776.2-1.392.6-1.848.4-.456.932-.684 1.596-.684.544 0 .976.156 1.296.468.32.304.48.724.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348c0 .536-.16.96-.48 1.272-.32.304-.752.456-1.296.456Zm.528-1.296c.384 0 .68-.112.888-.336.216-.232.324-.552.324-.96v-1.656c0-.408-.108-.724-.324-.948-.208-.232-.504-.348-.888-.348s-.684.112-.9.336c-.216.224-.324.544-.324.96v1.656c0 .416.108.736.324.96.216.224.516.336.9.336Zm7.243 1.296c-.56 0-1.048-.108-1.464-.324a2.402 2.402 0 0 1-.972-.9c-.224-.392-.336-.848-.336-1.368v-1.656c0-.52.112-.972.336-1.356.232-.392.556-.696.972-.912.416-.216.904-.324 1.464-.324.552 0 1.032.108 1.44.324.416.216.736.52.96.912.232.384.348.836.348 1.356v1.188h-4.068v.468c0 .464.112.816.336 1.056.224.232.556.348.996.348.336 0 .608-.056.816-.168a.801.801 0 0 0 .396-.516h1.476c-.112.568-.416 1.024-.912 1.368-.488.336-1.084.504-1.788.504Zm1.296-3.9v-.36c0-.456-.108-.804-.324-1.044-.216-.248-.54-.372-.972-.372-.432 0-.76.124-.984.372-.224.248-.336.6-.336 1.056v.252l2.724-.024-.108.12Zm4.928 3.78-2.172-6.6h1.536l1.26 4.008c.072.24.14.488.204.744.072.256.124.46.156.612.04-.152.092-.356.156-.612s.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6h-1.932Z"/>\n   // diff-add\n   <path data-fill="text-main" d="M19.89 32.76v-2.31h3.087V19.74H19.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31h-8.82Zm15.72.21c-1.19 0-2.127-.315-2.813-.945-.686-.63-1.03-1.477-1.03-2.541 0-1.134.379-2.009 1.135-2.625.756-.616 1.827-.924 3.213-.924h2.877v-.987c0-.56-.182-.994-.546-1.302-.364-.322-.861-.483-1.491-.483-.574 0-1.05.126-1.428.378a1.476 1.476 0 0 0-.672 1.029h-2.562c.126-1.092.616-1.96 1.47-2.604.854-.644 1.946-.966 3.276-.966 1.414 0 2.527.357 3.339 1.071.826.7 1.239 1.652 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567c0 .854-.315 1.533-.945 2.037-.63.504-1.47.756-2.52.756Zm.862-1.974c.742 0 1.344-.189 1.806-.567.476-.378.714-.868.714-1.47v-1.407h-2.835c-.532 0-.96.154-1.281.462-.322.308-.483.714-.483 1.218 0 .546.182.98.546 1.302.378.308.889.462 1.533.462Zm8.308 1.764v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394H44.78Zm5.082-13.482c-.532 0-.952-.133-1.26-.399-.308-.28-.462-.651-.462-1.113 0-.462.154-.826.462-1.092.308-.28.728-.42 1.26-.42s.952.14 1.26.42c.308.266.462.63.462 1.092 0 .462-.154.833-.462 1.113-.308.266-.728.399-1.26.399Zm7.53 13.482V21.21h2.562v2.205h.714l-.714.609c0-.952.273-1.694.82-2.226.56-.532 1.322-.798 2.288-.798 1.134 0 2.037.378 2.71 1.134.685.756 1.028 1.771 1.028 3.045v7.581h-2.625v-7.308c0-.7-.182-1.239-.546-1.617-.364-.378-.875-.567-1.533-.567-.644 0-1.155.196-1.533.588-.364.392-.546.952-.546 1.68v7.224h-2.625Zm12.55 0V17.43H74.5c1.036 0 1.932.196 2.688.588.77.392 1.365.945 1.785 1.659.42.714.63 1.561.63 2.541v5.733c0 .966-.21 1.813-.63 2.541a4.401 4.401 0 0 1-1.785 1.68c-.756.392-1.652.588-2.688.588h-4.557Zm2.625-2.415H74.5c.756 0 1.358-.21 1.806-.63.448-.434.672-1.022.672-1.764v-5.733c0-.728-.224-1.302-.672-1.722-.448-.434-1.05-.651-1.806-.651h-1.932v10.5Zm13.411 2.625c-1.19 0-2.128-.315-2.814-.945-.686-.63-1.029-1.477-1.029-2.541 0-1.134.378-2.009 1.134-2.625.756-.616 1.827-.924 3.213-.924h2.877v-.987c0-.56-.182-.994-.546-1.302-.364-.322-.861-.483-1.491-.483-.574 0-1.05.126-1.428.378a1.476 1.476 0 0 0-.672 1.029H82.66c.126-1.092.616-1.96 1.47-2.604.854-.644 1.946-.966 3.276-.966 1.414 0 2.527.357 3.339 1.071.826.7 1.239 1.652 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567c0 .854-.315 1.533-.945 2.037-.63.504-1.47.756-2.52.756Zm.861-1.974c.742 0 1.344-.189 1.806-.567.476-.378.714-.868.714-1.47v-1.407h-2.835c-.532 0-.959.154-1.281.462-.322.308-.483.714-.483 1.218 0 .546.182.98.546 1.302.378.308.889.462 1.533.462ZM98.17 32.76l-3.8-11.55h2.688l2.205 7.014c.126.42.245.854.357 1.302.126.448.217.805.273 1.071.07-.266.161-.623.273-1.071.112-.448.224-.875.336-1.281l2.163-7.035h2.667l-3.78 11.55h-3.381Zm9.569 0v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394h-10.122Zm5.082-13.482c-.532 0-.952-.133-1.26-.399-.308-.28-.462-.651-.462-1.113 0-.462.154-.826.462-1.092.308-.28.728-.42 1.26-.42s.952.14 1.26.42c.308.266.462.63.462 1.092 0 .462-.154.833-.462 1.113-.308.266-.728.399-1.26.399Zm11.772 13.671c-.882 0-1.652-.14-2.31-.42-.658-.28-1.176-.665-1.554-1.155-.364-.504-.56-1.092-.588-1.764h2.625c.028.364.203.658.525.882.336.224.77.336 1.302.336h.924c.644 0 1.127-.126 1.449-.378.322-.252.483-.595.483-1.029 0-.406-.147-.721-.441-.945-.28-.238-.721-.392-1.323-.462l-1.428-.21c-1.316-.182-2.282-.532-2.898-1.05-.616-.518-.924-1.295-.924-2.331 0-1.078.364-1.911 1.092-2.499.728-.602 1.799-.903 3.213-.903h.798c1.288 0 2.317.287 3.087.861.77.574 1.183 1.344 1.239 2.31h-2.625c-.042-.308-.217-.56-.525-.756-.294-.196-.686-.294-1.176-.294h-.798c-.602 0-1.043.112-1.323.336-.266.21-.399.525-.399.945 0 .392.119.686.357.882.238.182.623.315 1.155.399l1.491.21c1.372.196 2.38.567 3.024 1.113.658.532.987 1.323.987 2.373 0 1.12-.385 1.995-1.155 2.625-.756.616-1.876.924-3.36.924h-.924Z"/>\n</svg>\n'})}),"\n",(0,n.jsx)(t.p,{children:"Then I had to create my CSS module for the logo component:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-css",metastring:'title="scr/components/brand/logo/Logo.module.css"',children:':root,\n[data-theme=\'light\'] {\n    --color-logo-background: #FDF6E3;\n    --color-logo-border: #B58900;\n    --color-logo-text-main: #2AA198;\n    --color-logo-text-accent: #CB4B16;\n}\n\n[data-theme=\'dark\'] {\n    --color-logo-background: #1F1F1F;\n    --color-logo-text-accent: #4EC9B0;\n    --color-logo-text-main: #CE9178;\n    --color-logo-border: #569CD6;\n}\n\n[data-fill="background"] {\n    fill: var(--color-logo-background);\n}\n\n[data-fill="text-main"] {\n    fill: var(--color-logo-text-main);\n}\n\n[data-fill="text-accent"]{\n    fill: var(--color-logo-text-accent);\n}\n\n[data-fill="border"]{\n    fill: var(--color-logo-border);\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"and it worked straight away!"}),"\n",(0,n.jsx)(o.default,{}),"\n",(0,n.jsx)(t.p,{children:"At the moment, I still have a dependency on the original .svg files in a couple\nof places: the favicon for sure. And the navbar expects a file path, instead of\na React component. But there is a work-around for that that I've used before\nwhen I was working on a project with OAuth login and I wanted to include a\nlogin-state component in the navbar. I'll probably re-implement that eventually,\nand then I can strip down the number of files I'm managing for my logo from\nsomething like thirty down to six. I may try to figure out later how to make the\nback-plate element responsive to styles too, and then I can get that number down\neven further."}),"\n",(0,n.jsx)(t.p,{children:"And the resulting React component is more portable, because it has no\ndependencies on things that are in supplementary Docusaurus addons. And if the\ntime comes I want a variation in different colors, all I have to do is define\nnew CSS variables to get it."})]})}function g(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},93861:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n,l,o,r,h,i=a(96540);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(null,arguments)}const d=e=>{let{title:t,titleId:a,...d}=e;return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:82,height:50,fill:"none",viewBox:"0 0 82 50","aria-labelledby":a},d),t?i.createElement("title",{id:a},t):null,n||(n=i.createElement("rect",{width:82,height:50,"data-fill":"background",rx:8})),l||(l=i.createElement("path",{d:"M10 9.76h40v30H10zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),o||(o=i.createElement("path",{d:"M8.5 8.26h43V23.5h9.599a8 8 0 1 1 .091 3H51.5v14.76h-43zm3 3v27h37v-27zM69 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),r||(r=i.createElement("path",{d:"M60.196 14.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),h||(h=i.createElement("path",{d:"M18.89 32v-2.31h3.087V18.98H18.89v-2.31h8.82v2.31h-3.087v10.71h3.087V32zm12.277 0V16.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q37.278 32 35.724 32zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))}},70522:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n,l,o,r,h=a(96540);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(null,arguments)}const c=e=>{let{title:t,titleId:a,...c}=e;return h.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:71,height:36,fill:"none",viewBox:"0 0 71 36","aria-labelledby":a},c),t?h.createElement("title",{id:a},t):null,n||(n=h.createElement("path",{d:"M2 3.76h40v30H2zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),l||(l=h.createElement("path",{d:"M.5 2.26h43V17.5h9.599a8 8 0 1 1 .091 3H43.5v14.76H.5zm3 3v27h37v-27zM61 23.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),o||(o=h.createElement("path",{d:"M52.196 8.88q-.984 0-1.596-.684-.6-.684-.6-1.836V4.572q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V0h1.5v8.76h-1.464V7.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96V4.632q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368V4.632q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356V5.82h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),r||(r=h.createElement("path",{d:"M10.89 26v-2.31h3.087V12.98H10.89v-2.31h8.82v2.31h-3.087v10.71h3.087V26zm12.277 0V10.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q29.278 26 27.724 26zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))}},10175:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n,l,o,r,h,i=a(96540);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(null,arguments)}const d=e=>{let{title:t,titleId:a,...d}=e;return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:82,height:82,fill:"none",viewBox:"0 0 82 82","aria-labelledby":a},d),t?i.createElement("title",{id:a},t):null,n||(n=i.createElement("rect",{width:82,height:82,"data-fill":"background",rx:8})),l||(l=i.createElement("path",{d:"M10 27.76h40v30H10zm67 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),o||(o=i.createElement("path",{d:"M8.5 26.26h43V41.5h9.599a8 8 0 1 1 .091 3H51.5v14.76h-43zm3 3v27h37v-27zM69 47.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),r||(r=i.createElement("path",{d:"M60.196 32.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V24h1.5v8.76h-1.464V31.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.927 3.78-2.171-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),h||(h=i.createElement("path",{d:"M18.89 50v-2.31h3.087V36.98H18.89v-2.31h8.82v2.31h-3.087v10.71h3.087V50zm12.277 0V34.67h4.557q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68Q37.278 50 35.724 50zm2.625-2.415h1.932q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932z","data-fill":"text-main"})))}},81797:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n,l,o,r,h,i=a(96540);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(null,arguments)}const d=e=>{let{title:t,titleId:a,...d}=e;return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:180,height:50,fill:"none",viewBox:"0 0 180 50","aria-labelledby":a},d),t?i.createElement("title",{id:a},t):null,n||(n=i.createElement("rect",{width:180,height:50,"data-fill":"background",rx:8})),l||(l=i.createElement("path",{d:"M10 9.76h130v30H10zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),o||(o=i.createElement("path",{d:"M8.5 8.26h133V23.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H8.5zm3 3v27h127v-27zM159 29.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),r||(r=i.createElement("path",{d:"M150.196 14.88q-.984 0-1.596-.684-.6-.684-.6-1.836v-1.788q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V6h1.5v8.76h-1.464V13.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96v-1.656q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368v-1.656q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356v1.188h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.928 3.78-2.172-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),h||(h=i.createElement("path",{d:"M19.89 32.76v-2.31h3.087V19.74H19.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31zm15.72.21q-1.785 0-2.813-.945-1.03-.945-1.03-2.541 0-1.701 1.135-2.625 1.134-.924 3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029h-2.562q.189-1.638 1.47-2.604T37.039 21q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756Zm.862-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.799 0-1.281.462-.483.462-.483 1.218 0 .819.546 1.302.567.462 1.533.462m8.308 1.764v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m7.53 13.482V21.21h2.562v2.205h.714l-.714.609q0-1.428.82-2.226.84-.798 2.288-.798 1.7 0 2.71 1.134 1.028 1.134 1.028 3.045v7.581h-2.625v-7.308q0-1.05-.546-1.617t-1.533-.567q-.966 0-1.533.588-.546.588-.546 1.68v7.224zm12.55 0V17.43H74.5q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68q-1.134.588-2.688.588h-4.557Zm2.625-2.415H74.5q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932v10.5Zm13.411 2.625q-1.785 0-2.814-.945t-1.029-2.541q0-1.701 1.134-2.625t3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029H82.66q.189-1.638 1.47-2.604T87.406 21q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756m.861-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.798 0-1.281.462t-.483 1.218q0 .819.546 1.302.567.462 1.533.462M98.17 32.76l-3.8-11.55h2.688l2.205 7.014q.189.63.357 1.302.189.672.273 1.071.105-.399.273-1.071t.336-1.281l2.163-7.035h2.667l-3.78 11.55zm9.569 0v-2.394h4.032v-6.783h-3.507V21.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m11.772 13.671q-1.323 0-2.31-.42t-1.554-1.155q-.546-.756-.588-1.764h2.625q.042.546.525.882.504.336 1.302.336h.924q.966 0 1.449-.378t.483-1.029q0-.609-.441-.945-.42-.357-1.323-.462l-1.428-.21q-1.974-.273-2.898-1.05t-.924-2.331q0-1.617 1.092-2.499 1.092-.903 3.213-.903h.798q1.932 0 3.087.861t1.239 2.31h-2.625q-.063-.462-.525-.756-.441-.294-1.176-.294h-.798q-.903 0-1.323.336-.399.315-.399.945 0 .588.357.882.357.273 1.155.399l1.491.21q2.058.294 3.024 1.113.987.798.987 2.373 0 1.68-1.155 2.625-1.134.924-3.36.924z","data-fill":"text-main"})))}},69274:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n,l,o,r,h=a(96540);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(null,arguments)}const c=e=>{let{title:t,titleId:a,...c}=e;return h.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:161,height:36,fill:"none",viewBox:"0 0 161 36","aria-labelledby":a},c),t?h.createElement("title",{id:a},t):null,n||(n=h.createElement("path",{d:"M2 3.76h130v30H2zm157 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0","data-fill":"background"})),l||(l=h.createElement("path",{d:"M.5 2.26h133V17.5h9.599a8.001 8.001 0 1 1 .091 3h-9.69v14.76H.5zm3 3v27h127v-27zM151 23.76a5 5 0 1 0 0-10 5 5 0 0 0 0 10",clipRule:"evenodd","data-fill":"border"})),o||(o=h.createElement("path",{d:"M142.196 8.88q-.984 0-1.596-.684-.6-.684-.6-1.836V4.572q0-1.164.6-1.848t1.596-.684q.816 0 1.296.468.48.456.48 1.26l-.336-.348h.348l-.048-1.572V0h1.5v8.76h-1.464V7.5h-.336l.336-.348q0 .804-.48 1.272-.48.456-1.296.456m.528-1.296q.576 0 .888-.336.324-.348.324-.96V4.632q0-.612-.324-.948-.312-.348-.888-.348c-.576 0-.684.112-.9.336q-.324.336-.324.96v1.656q0 .624.324.96t.9.336m7.243 1.296q-.84 0-1.464-.324a2.4 2.4 0 0 1-.972-.9q-.336-.588-.336-1.368V4.632q0-.78.336-1.356.348-.588.972-.912t1.464-.324q.828 0 1.44.324.624.324.96.912.348.576.348 1.356V5.82h-4.068v.468q0 .696.336 1.056.336.348.996.348.504 0 .816-.168a.8.8 0 0 0 .396-.516h1.476q-.168.852-.912 1.368-.732.504-1.788.504m1.296-3.9v-.36q0-.684-.324-1.044-.324-.372-.972-.372t-.984.372-.336 1.056v.252l2.724-.024zm4.928 3.78-2.172-6.6h1.536l1.26 4.008q.108.36.204.744.108.384.156.612.06-.228.156-.612c.096-.384.128-.5.192-.732l1.236-4.02h1.524l-2.16 6.6z","data-fill":"text-accent"})),r||(r=h.createElement("path",{d:"M11.89 26.76v-2.31h3.087V13.74H11.89v-2.31h8.82v2.31h-3.087v10.71h3.087v2.31zm15.72.21q-1.785 0-2.813-.945-1.03-.945-1.03-2.541 0-1.701 1.135-2.625 1.134-.924 3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029h-2.562q.189-1.638 1.47-2.604T29.039 15q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756Zm.862-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.799 0-1.281.462-.483.462-.483 1.218 0 .819.546 1.302.567.462 1.533.462m8.308 1.764v-2.394h4.032v-6.783h-3.507V15.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m7.53 13.482V15.21h2.562v2.205h.714l-.714.609q0-1.428.82-2.226.84-.798 2.288-.798 1.7 0 2.71 1.134 1.028 1.134 1.028 3.045v7.581h-2.625v-7.308q0-1.05-.546-1.617t-1.533-.567q-.966 0-1.533.588-.546.588-.546 1.68v7.224zm12.55 0V11.43H66.5q1.554 0 2.688.588 1.155.588 1.785 1.659t.63 2.541v5.733q0 1.449-.63 2.541a4.4 4.4 0 0 1-1.785 1.68q-1.134.588-2.688.588zm2.625-2.415H66.5q1.134 0 1.806-.63.672-.651.672-1.764v-5.733q0-1.092-.672-1.722-.672-.651-1.806-.651h-1.932v10.5Zm13.411 2.625q-1.785 0-2.814-.945t-1.029-2.541q0-1.701 1.134-2.625t3.213-.924h2.877v-.987q0-.84-.546-1.302-.546-.483-1.491-.483-.861 0-1.428.378a1.48 1.48 0 0 0-.672 1.029H74.66q.189-1.638 1.47-2.604T79.406 15q2.121 0 3.339 1.071 1.239 1.05 1.239 2.856v7.833h-2.541v-2.016h-.42l.42-.567q0 1.281-.945 2.037t-2.52.756m.861-1.974q1.113 0 1.806-.567.714-.567.714-1.47v-1.407h-2.835q-.798 0-1.281.462t-.483 1.218q0 .819.546 1.302.567.462 1.533.462M90.17 26.76l-3.8-11.55h2.688l2.205 7.014q.189.63.357 1.302.189.672.273 1.071.104-.399.273-1.071.168-.672.336-1.281l2.163-7.035h2.667l-3.78 11.55zm9.569 0v-2.394h4.032v-6.783h-3.507V15.21h6.027v9.156h3.57v2.394zm5.082-13.482q-.798 0-1.26-.399-.462-.42-.462-1.113t.462-1.092q.462-.42 1.26-.42c.798 0 .952.14 1.26.42q.462.399.462 1.092t-.462 1.113q-.462.399-1.26.399m11.772 13.671q-1.323 0-2.31-.42t-1.554-1.155q-.546-.756-.588-1.764h2.625q.042.546.525.882.504.336 1.302.336h.924q.966 0 1.449-.378t.483-1.029q0-.609-.441-.945-.42-.357-1.323-.462l-1.428-.21q-1.974-.273-2.898-1.05t-.924-2.331q0-1.617 1.092-2.499 1.092-.903 3.213-.903h.798q1.932 0 3.087.861t1.239 2.31h-2.625q-.063-.462-.525-.756-.441-.294-1.176-.294h-.798q-.903 0-1.323.336-.399.315-.399.945 0 .588.357.882.357.273 1.155.399l1.491.21q2.058.294 3.024 1.113.987.798.987 2.373 0 1.68-1.155 2.625-1.134.924-3.36.924z","data-fill":"text-main"})))}},87013:(e,t,a)=>{var n=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ExpandedNoBG=t.Expanded=t.CompactSquare=t.CompactNoBG=t.Compact=void 0;n(a(96540));var l=n(a(81797)),o=n(a(69274)),r=n(a(93861)),h=n(a(10175)),i=n(a(70522)),c=n(a(60913)),d=a(74848);const s=()=>(0,d.jsx)(l.default,{style:c.default});t.Expanded=s;const v=()=>(0,d.jsx)(o.default,{style:c.default});t.ExpandedNoBG=v;const m=()=>(0,d.jsx)(r.default,{style:c.default});t.Compact=m;const u=()=>(0,d.jsx)(h.default,{style:c.default});t.CompactSquare=u;const p=()=>(0,d.jsx)(i.default,{style:c.default});t.CompactNoBG=p;t.default=e=>{let{variant:t="expanded",hideBackground:a=!1}=e;switch(t){case"expanded":return a?(0,d.jsx)(v,{}):(0,d.jsx)(s,{});case"compact":return a?(0,d.jsx)(p,{}):(0,d.jsx)(m,{});case"compact-square":return a?(0,d.jsx)(p,{}):(0,d.jsx)(u,{})}}},60913:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n={}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>h});var n=a(96540);const l={},o=n.createContext(l);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);