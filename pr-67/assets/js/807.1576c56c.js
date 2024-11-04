"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[807],{32819:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t,className:a}=e;return(0,s.jsx)("article",{className:a,children:t})};l(a(96540));var s=a(74848)},23125:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,r.useBlogPost)();return(0,d.jsx)("div",{id:l?n.blogPostContainerID:void 0,className:(0,s.default)("markdown",a),children:(0,d.jsx)(o.default,{children:t})})};l(a(96540));var s=l(a(71508)),n=a(70440),r=a(47653),o=l(a(77910)),d=a(74848)},90485:(e,t,a)=>{var l=a(6305).default,s=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{blogPostTitle:t,...a}=e;return(0,o.jsx)(r.default,{"aria-label":(0,n.translate)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,o.jsx)(d,{})})};s(a(96540));var n=l(a(70986)),r=s(a(28774)),o=a(74848);function d(){return(0,o.jsx)("b",{children:(0,o.jsx)(n.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}},1391:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const{metadata:e,isBlogPostPage:t}=(0,n.useBlogPost)(),{tags:a,title:l,editUrl:c,hasTruncateMarker:f,lastUpdatedBy:m,lastUpdatedAt:g}=e,h=!t&&f,v=a.length>0;if(!(v||h||c))return null;if(t){const e=!!(c||g||m);return(0,u.jsxs)("footer",{className:"docusaurus-mt-lg",children:[v&&(0,u.jsx)("div",{className:(0,s.default)("row","margin-top--sm",r.ThemeClassNames.blog.blogFooterEditMetaRow),children:(0,u.jsx)("div",{className:"col",children:(0,u.jsx)(d.default,{tags:a})})}),e&&(0,u.jsx)(o.default,{className:(0,s.default)("margin-top--sm",r.ThemeClassNames.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:g,lastUpdatedBy:m})]})}return(0,u.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[v&&(0,u.jsx)("div",{className:(0,s.default)("col",{"col--9":h}),children:(0,u.jsx)(d.default,{tags:a})}),h&&(0,u.jsx)("div",{className:(0,s.default)("col text--right",{"col--3":v}),children:(0,u.jsx)(i.default,{blogPostTitle:l,to:e.permalink})})]})};l(a(96540));var s=l(a(71508)),n=a(47653),r=a(95068),o=l(a(63989)),d=l(a(48986)),i=l(a(90485)),u=a(74848)},96866:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,n.useBlogPost)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),u=1===a.length;return(0,d.jsx)("div",{className:(0,s.default)("margin-top--md margin-bottom--sm",i?o.default.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,d.jsx)("div",{className:(0,s.default)(!i&&(u?"col col--12":"col col--6"),i?o.default.imageOnlyAuthorCol:o.default.authorCol),children:(0,d.jsx)(r.default,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})};l(a(96540));var s=l(a(71508)),n=a(47653),r=l(a(91911)),o=l(a(70502)),d=a(74848)},90058:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t}=e;const{metadata:a}=(0,d.useBlogPost)(),{date:l,readingTime:n}=a,r=(0,o.useDateTimeFormat)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,u.jsxs)("div",{className:(0,s.default)(i.default.container,"margin-vert--md",t),children:[(0,u.jsx)(f,{date:l,formattedDate:(g=l,r.format(new Date(g)))}),void 0!==n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{}),(0,u.jsx)(c,{readingTime:n})]})]});var g};l(a(96540));var s=l(a(71508)),n=a(70986),r=a(95068),o=a(50155),d=a(47653),i=l(a(29906)),u=a(74848);function c(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,r.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,(0,n.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,u.jsx)(u.Fragment,{children:a(t)})}function f(e){let{date:t,formattedDate:a}=e;return(0,u.jsx)("time",{dateTime:t,children:a})}function m(){return(0,u.jsx)(u.Fragment,{children:" \xb7 "})}},15800:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,r.useBlogPost)(),{permalink:i,title:u}=a,c=l?"h1":"h2";return(0,d.jsx)(c,{className:(0,s.default)(o.default.title,t),children:l?u:(0,d.jsx)(n.default,{to:i,children:u})})};l(a(96540));var s=l(a(71508)),n=l(a(28774)),r=a(47653),o=l(a(20772)),d=a(74848)},67045:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(s.default,{}),(0,o.jsx)(n.default,{}),(0,o.jsx)(r.default,{})]})};l(a(96540));var s=l(a(15800)),n=l(a(90058)),r=l(a(96866)),o=a(74848)},33355:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,n.useBlogPost)();return e?void 0:"margin-bottom--xl"}();return(0,u.jsxs)(r.default,{className:(0,s.default)(l,a),children:[(0,u.jsx)(o.default,{}),(0,u.jsx)(d.default,{children:t}),(0,u.jsx)(i.default,{})]})};l(a(96540));var s=l(a(71508)),n=a(47653),r=l(a(32819)),o=l(a(67045)),d=l(a(23125)),i=l(a(1391)),u=a(74848)},66377:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const{assets:e,metadata:t}=(0,n.useBlogPost)(),{title:a,description:l,date:o,tags:d,authors:i,frontMatter:u}=t,{keywords:c}=u,f=e.image??u.image;return(0,r.jsxs)(s.PageMetadata,{title:a,description:l,keywords:c,image:f,children:[(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"article:published_time",content:o}),i.some((e=>e.url))&&(0,r.jsx)("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),d.length>0&&(0,r.jsx)("meta",{property:"article:tag",content:d.map((e=>e.label)).join(",")})]})};l(a(96540));var s=a(95068),n=a(47653),r=a(74848)},28571:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=(0,n.useBlogPostStructuredData)();return(0,r.jsx)(s.default,{children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})};l(a(96540));var s=l(a(5260)),n=a(47653),r=a(74848)},10807:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=e.content;return(0,g.jsx)(r.BlogPostProvider,{content:e.content,isBlogPostPage:!0,children:(0,g.jsxs)(n.HtmlClassNameProvider,{className:(0,s.default)(n.ThemeClassNames.wrapper.blogPages,n.ThemeClassNames.page.blogPostPage),children:[(0,g.jsx)(u.default,{}),(0,g.jsx)(c.default,{}),(0,g.jsx)(h,{sidebar:e.sidebar,children:(0,g.jsx)(t,{})})]})})};l(a(96540));var s=l(a(71508)),n=a(95068),r=a(47653),o=l(a(61728)),d=l(a(33355)),i=l(a(23759)),u=l(a(66377)),c=l(a(28571)),f=l(a(30032)),m=l(a(44935)),g=a(74848);function h(e){let{sidebar:t,children:a}=e;const{metadata:l,toc:s}=(0,r.useBlogPost)(),{nextItem:n,prevItem:u,frontMatter:c}=l,{hide_table_of_contents:h,toc_min_heading_level:v,toc_max_heading_level:j}=c;return(0,g.jsxs)(o.default,{sidebar:t,toc:!h&&s.length>0?(0,g.jsx)(f.default,{toc:s,minHeadingLevel:v,maxHeadingLevel:j}):void 0,children:[(0,g.jsx)(m.default,{metadata:l}),(0,g.jsx)(d.default,{children:a}),(n||u)&&(0,g.jsx)(i.default,{nextItem:n,prevItem:u})]})}},23759:(e,t,a)=>{var l=a(6305).default,s=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{nextItem:t,prevItem:a}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.translate)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[a&&(0,o.jsx)(r.default,{...a,subLabel:(0,o.jsx)(n.default,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,o.jsx)(r.default,{...t,subLabel:(0,o.jsx)(n.default,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})};s(a(96540));var n=l(a(70986)),r=s(a(39022)),o=a(74848)},91203:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t}=e;return(0,o.jsx)(r.default,{type:"caution",title:(0,o.jsx)(n.DraftBannerTitle,{}),className:(0,s.default)(t,n.ThemeClassNames.common.draftBanner),children:(0,o.jsx)(n.DraftBannerMessage,{})})};l(a(96540));var s=l(a(71508)),n=a(95068),r=l(a(84552)),o=a(74848)},32234:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.UnlistedMetadata,{}),(0,o.jsx)(d,{...e})]})};l(a(96540));var s=l(a(71508)),n=a(95068),r=l(a(84552)),o=a(74848);function d(e){let{className:t}=e;return(0,o.jsx)(r.default,{type:"caution",title:(0,o.jsx)(n.UnlistedBannerTitle,{}),className:(0,s.default)(t,n.ThemeClassNames.common.unlistedBanner),children:(0,o.jsx)(n.UnlistedBannerMessage,{})})}},44935:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{metadata:t}=e;const{unlisted:a,frontMatter:l}=t;return(0,r.jsxs)(r.Fragment,{children:[(a||l.unlisted)&&(0,r.jsx)(n.default,{}),l.draft&&(0,r.jsx)(s.default,{})]})};l(a(96540));var s=l(a(91203)),n=l(a(32234)),r=a(74848)},30032:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t,...a}=e;return(0,o.jsx)("div",{className:(0,s.default)(r.default.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(n.default,{...a,linkClassName:d,linkActiveClassName:i})})};l(a(96540));var s=l(a(71508)),n=l(a(49180)),r=l(a(73924)),o=a(74848);const d="table-of-contents__link toc-highlight",i="table-of-contents__link--active"},44338:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(a(96540)),n=l(a(28774)),r=a(74848);function o(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?(0,r.jsx)("ul",{className:s?void 0:a,children:t.map((e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(n.default,{to:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,r.jsx)(o,{isChild:!0,toc:e.children,className:a,linkClassName:l})]},e.id)))}):null}t.default=s.default.memo(o)},49180:(e,t,a)=>{var l=a(24994).default,s=a(6305).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:c,...f}=e;const m=(0,r.useThemeConfig)(),g=u??m.tableOfContents.minHeadingLevel,h=c??m.tableOfContents.maxHeadingLevel,v=(0,o.useFilteredAndTreeifiedTOC)({toc:t,minHeadingLevel:g,maxHeadingLevel:h}),j=(0,n.useMemo)((()=>{if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:h}}),[l,s,g,h]);return(0,o.useTOCHighlight)(j),(0,i.jsx)(d.default,{toc:v,className:a,linkClassName:l,...f})};var n=s(a(96540)),r=a(95068),o=a(50155),d=l(a(44338)),i=a(74848)},70502:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"}},29906:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={container:"container_mt6G"}},20772:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={title:"title_f1Hy"}},73924:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"}}}]);