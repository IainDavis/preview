"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[2711],{89331:(e,a,t)=>{var r=t(24994).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){let{archive:a}=e;const t=(0,i.translate)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,i.translate)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=function(e){const a=e.reduce(((e,a)=>{const t=a.metadata.date.split("-")[0],r=e.get(t)??[];return e.set(t,[a,...r])}),new Map);return Array.from(a,(e=>{let[a,t]=e;return{year:a,posts:t}}))}(a.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.PageMetadata,{title:t,description:r}),(0,o.jsxs)(c.default,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(d.default,{as:"h1",className:"hero__title",children:t}),(0,o.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,o.jsx)("main",{children:s.length>0&&(0,o.jsx)(m,{years:s})})]})]})};r(t(96540));var s=r(t(28774)),i=t(70986),n=t(95068),l=t(50155),c=r(t(8768)),d=r(t(44608)),o=t(74848);function h(e){let{year:a,posts:t}=e;const r=(0,l.useDateTimeFormat)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.default,{as:"h3",id:a,children:a}),(0,o.jsx)("ul",{children:t.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(s.default,{to:e.metadata.permalink,children:[(a=e.metadata.date,r.format(new Date(a)))," - ",e.metadata.title]})},e.metadata.date);var a}))})]})}function m(e){let{years:a}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:a.map(((e,a)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(h,{...e})},a)))})})})}}}]);