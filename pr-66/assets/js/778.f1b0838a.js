"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[778],{30778:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,g.jsxs)(r.HtmlClassNameProvider,{className:(0,s.default)(r.ThemeClassNames.wrapper.blogPages,r.ThemeClassNames.page.blogAuthorsPostsPage),children:[(0,g.jsx)(h,{...e}),(0,g.jsx)(p,{...e})]})};l(a(96540));var s=l(a(71508)),r=a(95068),o=a(50155),n=l(a(28774)),d=a(47653),i=l(a(61728)),u=l(a(47713)),c=l(a(41463)),f=l(a(33892)),m=l(a(91911)),g=a(74848);function h(e){let{author:t}=e;const a=(0,o.useBlogAuthorPageTitle)(t);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.PageMetadata,{title:a}),(0,g.jsx)(c.default,{tag:"blog_authors_posts"})]})}function j(){const{authorsListPath:e}=(0,d.useBlogMetadata)();return(0,g.jsx)(n.default,{href:e,children:(0,g.jsx)(o.BlogAuthorsListViewAllLabel,{})})}function p(e){let{author:t,items:a,sidebar:l,listMetadata:s}=e;return(0,g.jsxs)(i.default,{sidebar:l,children:[(0,g.jsxs)("header",{className:"margin-bottom--xl",children:[(0,g.jsx)(m.default,{as:"h1",author:t}),t.description&&(0,g.jsx)("p",{children:t.description}),(0,g.jsx)(j,{})]}),(0,g.jsx)("hr",{}),(0,g.jsx)(f.default,{items:a}),(0,g.jsx)(u.default,{metadata:s})]})}},47713:(e,t,a)=>{var l=a(6305).default,s=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(o.default,{permalink:a,title:(0,n.jsx)(r.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,n.jsx)(o.default,{permalink:l,title:(0,n.jsx)(r.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})};s(a(96540));var r=l(a(70986)),o=s(a(39022)),n=a(74848)},32819:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t,className:a}=e;return(0,s.jsx)("article",{className:a,children:t})};l(a(96540));var s=a(74848)},23125:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,o.useBlogPost)();return(0,d.jsx)("div",{id:l?r.blogPostContainerID:void 0,className:(0,s.default)("markdown",a),children:(0,d.jsx)(n.default,{children:t})})};l(a(96540));var s=l(a(71508)),r=a(70440),o=a(47653),n=l(a(77910)),d=a(74848)},90485:(e,t,a)=>{var l=a(6305).default,s=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(o.default,{"aria-label":(0,r.translate)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(d,{})})};s(a(96540));var r=l(a(70986)),o=s(a(28774)),n=a(74848);function d(){return(0,n.jsx)("b",{children:(0,n.jsx)(r.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}},1391:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const{metadata:e,isBlogPostPage:t}=(0,r.useBlogPost)(),{tags:a,title:l,editUrl:c,hasTruncateMarker:f,lastUpdatedBy:m,lastUpdatedAt:g}=e,h=!t&&f,j=a.length>0;if(!(j||h||c))return null;if(t){const e=!!(c||g||m);return(0,u.jsxs)("footer",{className:"docusaurus-mt-lg",children:[j&&(0,u.jsx)("div",{className:(0,s.default)("row","margin-top--sm",o.ThemeClassNames.blog.blogFooterEditMetaRow),children:(0,u.jsx)("div",{className:"col",children:(0,u.jsx)(d.default,{tags:a})})}),e&&(0,u.jsx)(n.default,{className:(0,s.default)("margin-top--sm",o.ThemeClassNames.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:g,lastUpdatedBy:m})]})}return(0,u.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[j&&(0,u.jsx)("div",{className:(0,s.default)("col",{"col--9":h}),children:(0,u.jsx)(d.default,{tags:a})}),h&&(0,u.jsx)("div",{className:(0,s.default)("col text--right",{"col--3":j}),children:(0,u.jsx)(i.default,{blogPostTitle:l,to:e.permalink})})]})};l(a(96540));var s=l(a(71508)),r=a(47653),o=a(95068),n=l(a(63989)),d=l(a(48986)),i=l(a(90485)),u=a(74848)},96866:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,r.useBlogPost)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),u=1===a.length;return(0,d.jsx)("div",{className:(0,s.default)("margin-top--md margin-bottom--sm",i?n.default.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,d.jsx)("div",{className:(0,s.default)(!i&&(u?"col col--12":"col col--6"),i?n.default.imageOnlyAuthorCol:n.default.authorCol),children:(0,d.jsx)(o.default,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})};l(a(96540));var s=l(a(71508)),r=a(47653),o=l(a(91911)),n=l(a(70502)),d=a(74848)},90058:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t}=e;const{metadata:a}=(0,d.useBlogPost)(),{date:l,readingTime:r}=a,o=(0,n.useDateTimeFormat)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,u.jsxs)("div",{className:(0,s.default)(i.default.container,"margin-vert--md",t),children:[(0,u.jsx)(f,{date:l,formattedDate:(g=l,o.format(new Date(g)))}),void 0!==r&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m,{}),(0,u.jsx)(c,{readingTime:r})]})]});var g};l(a(96540));var s=l(a(71508)),r=a(70986),o=a(95068),n=a(50155),d=a(47653),i=l(a(29906)),u=a(74848);function c(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,o.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,(0,r.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,u.jsx)(u.Fragment,{children:a(t)})}function f(e){let{date:t,formattedDate:a}=e;return(0,u.jsx)("time",{dateTime:t,children:a})}function m(){return(0,u.jsx)(u.Fragment,{children:" \xb7 "})}},15800:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,o.useBlogPost)(),{permalink:i,title:u}=a,c=l?"h1":"h2";return(0,d.jsx)(c,{className:(0,s.default)(n.default.title,t),children:l?u:(0,d.jsx)(r.default,{to:i,children:u})})};l(a(96540));var s=l(a(71508)),r=l(a(28774)),o=a(47653),n=l(a(20772)),d=a(74848)},67045:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(s.default,{}),(0,n.jsx)(r.default,{}),(0,n.jsx)(o.default,{})]})};l(a(96540));var s=l(a(15800)),r=l(a(90058)),o=l(a(96866)),n=a(74848)},33355:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,r.useBlogPost)();return e?void 0:"margin-bottom--xl"}();return(0,u.jsxs)(o.default,{className:(0,s.default)(l,a),children:[(0,u.jsx)(n.default,{}),(0,u.jsx)(d.default,{children:t}),(0,u.jsx)(i.default,{})]})};l(a(96540));var s=l(a(71508)),r=a(47653),o=l(a(32819)),n=l(a(67045)),d=l(a(23125)),i=l(a(1391)),u=a(74848)},33892:(e,t,a)=>{var l=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{items:t,component:a=r.default}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(s.BlogPostProvider,{content:t,children:(0,o.jsx)(a,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})};l(a(96540));var s=a(47653),r=l(a(33355)),o=a(74848)},70502:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"}},29906:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={container:"container_mt6G"}},20772:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={title:"title_f1Hy"}}}]);