"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[8209],{13585:(e,t,a)=>{var r=a(47635).default,s=a(95754).default;Object.defineProperty(t,"__esModule",{value:!0}),t.BlogPostProvider=function(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return(0,o.jsx)(u.Provider,{value:s,children:t})},t.useBlogMetadata=function(){const e=(0,n.default)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t},t.useBlogPost=function(){const e=(0,l.useContext)(u);if(null===e)throw new i.ReactContextError("BlogPostProvider");return e};var l=s(a(96540)),i=a(50155),n=r(a(36803)),o=a(74848);const u=l.default.createContext(null)},47653:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BlogPostProvider",{enumerable:!0,get:function(){return r.BlogPostProvider}}),Object.defineProperty(t,"BlogSidebarItemList",{enumerable:!0,get:function(){return l.BlogSidebarItemList}}),Object.defineProperty(t,"groupBlogSidebarItemsByYear",{enumerable:!0,get:function(){return l.groupBlogSidebarItemsByYear}}),Object.defineProperty(t,"useBlogListPageStructuredData",{enumerable:!0,get:function(){return s.useBlogListPageStructuredData}}),Object.defineProperty(t,"useBlogMetadata",{enumerable:!0,get:function(){return r.useBlogMetadata}}),Object.defineProperty(t,"useBlogPost",{enumerable:!0,get:function(){return r.useBlogPost}}),Object.defineProperty(t,"useBlogPostStructuredData",{enumerable:!0,get:function(){return s.useBlogPostStructuredData}}),Object.defineProperty(t,"useVisibleBlogSidebarItems",{enumerable:!0,get:function(){return l.useVisibleBlogSidebarItems}});var r=a(13585),s=a(79925),l=a(9220)},9220:(e,t,a)=>{var r=a(47635).default,s=a(95754).default;Object.defineProperty(t,"__esModule",{value:!0}),t.BlogSidebarItemList=function(e){let{items:t,ulClassName:a,liClassName:r,linkClassName:s,linkActiveClassName:l}=e;return(0,d.jsx)("ul",{className:a,children:t.map((e=>(0,d.jsx)("li",{className:r,children:(0,d.jsx)(n.default,{isNavLink:!0,to:e.permalink,className:s,activeClassName:l,children:e.title})},e.permalink)))})},t.groupBlogSidebarItemsByYear=function(e){const t=(0,o.groupBy)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a},t.useVisibleBlogSidebarItems=function(e){const{pathname:t}=(0,i.useLocation)();return(0,l.useMemo)((()=>e.filter((e=>function(e,t){if(e.unlisted&&!(0,u.isSamePath)(e.permalink,t))return!1;return!0}(e,t)))),[e,t])};var l=s(a(96540)),i=a(85567),n=r(a(28774)),o=a(95068),u=a(50155),d=a(74848)},79925:(e,t,a)=>{var r=a(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useBlogListPageStructuredData=function(e){const{siteConfig:t}=(0,l.default)(),{withBaseUrl:a}=(0,s.useBaseUrlUtils)(),{metadata:{blogDescription:r,blogTitle:i,permalink:n}}=e,c=`${t.url}${n}`;return{"@context":"https://schema.org","@type":"Blog","@id":c,mainEntityOfPage:c,headline:i,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:r,frontMatter:s,metadata:l}=e,{date:i,title:n,description:c,lastUpdatedAt:m}=l,g=r.image??s.image,f=s.keywords??[],b=`${t.url}${l.permalink}`,p=m?o(m):void 0;return{"@type":"BlogPosting","@id":b,mainEntityOfPage:b,url:b,headline:n,name:n,description:c,datePublished:i,...p?{dateModified:p}:{},...u(l.authors),...d(g,a,n),...f?{keywords:f}:{}}}(e.content,t,a)))}},t.useBlogPostStructuredData=function(){const e=(0,i.useBlogMetadata)(),{assets:t,metadata:a}=(0,n.useBlogPost)(),{siteConfig:r}=(0,l.default)(),{withBaseUrl:c}=(0,s.useBaseUrlUtils)(),{date:m,title:g,description:f,frontMatter:b,lastUpdatedAt:p}=a,h=t.image??b.image,v=b.keywords??[],j=p?o(p):void 0,P=`${r.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":P,mainEntityOfPage:P,url:P,headline:g,name:g,description:f,datePublished:m,...j?{dateModified:j}:{},...u(a.authors),...d(h,c,g),...v?{keywords:v}:{},isPartOf:{"@type":"Blog","@id":`${r.url}${e.blogBasePath}`,name:e.blogTitle}}};var s=a(86025),l=r(a(44586)),i=a(47653),n=a(13585);const o=e=>new Date(e).toISOString();function u(e){const t=e.map(c);return{author:1===t.length?t[0]:t}}function d(e,t,a){return e?{image:m({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function c(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function m(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},61728:(e,t,a)=>{var r=a(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{sidebar:t,toc:a,children:r,...o}=e,u=t&&t.items.length>0;return(0,n.jsx)(l.default,{...o,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(i.default,{sidebar:t}),(0,n.jsx)("main",{className:(0,s.default)("col",{"col--7":u,"col--9 col--offset-1":!u}),children:r}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})};r(a(96540));var s=r(a(71508)),l=r(a(8768)),i=r(a(38)),n=a(74848)},2232:(e,t,a)=>{var r=a(47635).default,s=a(95754).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(a(96540)),i=a(95068),n=a(47653),o=r(a(44608)),u=a(74848);function d(e){let{year:t,yearGroupHeadingClassName:a,children:r}=e;return(0,u.jsxs)("div",{role:"group",children:[(0,u.jsx)(o.default,{as:"h3",className:a,children:t}),r]})}function c(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:r}=e;if((0,i.useThemeConfig)().blog.sidebar.groupByYear){const e=(0,n.groupBlogSidebarItemsByYear)(t);return(0,u.jsx)(u.Fragment,{children:e.map((e=>{let[t,s]=e;return(0,u.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,u.jsx)(r,{items:s})},t)}))})}return(0,u.jsx)(r,{items:t})}t.default=(0,l.memo)(c)},70845:(e,t,a)=>{var r=a(47635).default,s=a(95754).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(a(96540)),i=r(a(71508)),n=a(70986),o=a(47653),u=r(a(2232)),d=r(a(46202)),c=a(74848);const m=e=>{let{items:t}=e;return(0,c.jsx)(o.BlogSidebarItemList,{items:t,ulClassName:(0,i.default)(d.default.sidebarItemList,"clean-list"),liClassName:d.default.sidebarItem,linkClassName:d.default.sidebarItemLink,linkActiveClassName:d.default.sidebarItemLinkActive})};function g(e){let{sidebar:t}=e;const a=(0,o.useVisibleBlogSidebarItems)(t.items);return(0,c.jsx)("aside",{className:"col col--3",children:(0,c.jsxs)("nav",{className:(0,i.default)(d.default.sidebar,"thin-scrollbar"),"aria-label":(0,n.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,c.jsx)("div",{className:(0,i.default)(d.default.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,c.jsx)(u.default,{items:a,ListComponent:m,yearGroupHeadingClassName:d.default.yearGroupHeading})]})})}t.default=(0,l.memo)(g)},11241:(e,t,a)=>{var r=a(47635).default,s=a(95754).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(a(96540)),i=a(47653),n=a(95068),o=r(a(2232)),u=r(a(95700)),d=a(74848);const c=e=>{let{items:t}=e;return(0,d.jsx)(i.BlogSidebarItemList,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function m(e){let{sidebar:t}=e;const a=(0,i.useVisibleBlogSidebarItems)(t.items);return(0,d.jsx)(o.default,{items:a,ListComponent:c,yearGroupHeadingClassName:u.default.yearGroupHeading})}function g(e){return(0,d.jsx)(n.NavbarSecondaryMenuFiller,{component:m,props:e})}t.default=(0,l.memo)(g)},38:(e,t,a)=>{var r=a(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{sidebar:t}=e;const a=(0,s.useWindowSize)();if(!t?.items.length)return null;if("mobile"===a)return(0,n.jsx)(i.default,{sidebar:t});return(0,n.jsx)(l.default,{sidebar:t})};r(a(96540));var s=a(95068),l=r(a(70845)),i=r(a(11241)),n=a(74848)},29140:(e,t,a)=>{var r=a(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{tags:t,sidebar:a}=e;const r=(0,l.translateTagsPageTitle)();return(0,d.jsxs)(l.HtmlClassNameProvider,{className:(0,s.default)(l.ThemeClassNames.wrapper.blogPages,l.ThemeClassNames.page.blogTagsListPage),children:[(0,d.jsx)(l.PageMetadata,{title:r}),(0,d.jsx)(o.default,{tag:"blog_tags_list"}),(0,d.jsxs)(i.default,{sidebar:a,children:[(0,d.jsx)(u.default,{as:"h1",children:r}),(0,d.jsx)(n.default,{tags:t})]})]})};r(a(96540));var s=r(a(71508)),l=a(95068),i=r(a(61728)),n=r(a(10402)),o=r(a(41463)),u=r(a(44608)),d=a(74848)},8282:(e,t,a)=>{var r=a(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{permalink:t,label:a,count:r,description:o}=e;return(0,n.jsxs)(l.default,{href:t,title:o,className:(0,s.default)(i.default.tag,r?i.default.tagWithCount:i.default.tagRegular),children:[a,r&&(0,n.jsx)("span",{children:r})]})};r(a(96540));var s=r(a(71508)),l=r(a(28774)),i=r(a(3887)),n=a(74848)},10402:(e,t,a)=>{var r=a(47635).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{tags:t}=e;const a=(0,s.listTagsByLetters)(t);return(0,o.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,o.jsx)(u,{letterEntry:e},e.letter)))})};r(a(96540));var s=a(95068),l=r(a(8282)),i=r(a(44608)),n=r(a(37225)),o=a(74848);function u(e){let{letterEntry:t}=e;return(0,o.jsxs)("article",{children:[(0,o.jsx)(i.default,{as:"h2",id:t.letter,children:t.letter}),(0,o.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,o.jsx)("li",{className:n.default.tag,children:(0,o.jsx)(l.default,{...e})},e.permalink)))}),(0,o.jsx)("hr",{})]})}},46202:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP",yearGroupHeading:"yearGroupHeading_rMGB"}},95700:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r={yearGroupHeading:"yearGroupHeading_QT03"}},3887:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"}},37225:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const r={tag:"tag_Nnez"}}}]);