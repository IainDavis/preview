(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[807],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./.storybook/assets/mdx/lorem_ipsum.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_iaindavis_github_io_iaindavis_github_io_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js");function _createMdxContent(props){const _components={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,_home_runner_work_iaindavis_github_io_iaindavis_github_io_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"lorem-ipsum-dolor-sit-amet",children:"Lorem ipsum dolor sit amet..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Ut enim ad minim veniam"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["quis nostrud ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"exercitation ullamco laboris"})," nisi ut aliquip"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"ex ea commodo consequat."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("details",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("summary",{children:"Duis aute irure dolor in reprehenderit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["in voluptate velit esse cillum dolore eu ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"fugiat nulla pariatur"}),". Excepteur sint occaecat cupidatat non proident, sunt in culpa ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"http://www.github.com",rel:"nofollow",children:"qui officia"})," deserunt mollit anim id est laborum."]})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_iaindavis_github_io_iaindavis_github_io_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/Expandable/Expandable.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-NUUEMKO5.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs"),__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")),Expandable_stories=__webpack_require__("./src/components/Expandable/Expandable.stories.tsx");function _createMdxContent(props){const _components={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:Expandable_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"expandable",children:"Expandable"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The 'Expandable' component wraps a block of content, making it\nselectively shown (expanded) or hidden (collapsed). When expanded, it\nprovides a visual indication of the extent of the expandable block."}),"\n",(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:"Rationale/Use Case"}),(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The Docusaurus default styling for the <details> block uses the\nsame styling as admonitions and alerts, ",(0,jsx_runtime.jsx)(_components.em,{children:"i.e."})," a bright, colored\nborder which separates the content from the rest of the text."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.strong,{children:"Expandable"})," component is for content that you want to\npresent to the user in an opt-in (or opt-out) manner, without also\nremoving it from the normal flow of content or unduly highlighting it."]}),"\n"]})]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"parameters",children:"Parameters"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-typescript",children:"type ExpandablePropsType = {\n    startExpanded?: boolean;\n    expandPrompt?: string;\n    collapsePrompt?: string;\n}\n"})}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"behavior",children:"Behavior"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Expandable"})," renders the expandable content in an opt-in manner, by default"]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:Expandable_stories.Default}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"pre-expanded",children:"Pre-Expanded"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Supply the 'startExpanded' attribute for 'opt-out' behavior"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:Expandable_stories.PreExpanded}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-custom-expandcollapse-prompts",children:"With Custom Expand/Collapse Prompts"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The text prompts for the Expand/Collapse prompts are customizable"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:Expandable_stories.CustomExpandCollapsePrompt}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"nested",children:"Nested"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["An ",(0,jsx_runtime.jsx)(_components.strong,{children:"Expandable"})," block can be nested within another ",(0,jsx_runtime.jsx)(_components.strong,{children:"Expandable"})," block"]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:Expandable_stories.Nested})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/Expandable/Expandable.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@docusaurus/babel/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default,_interopRequireWildcard=__webpack_require__("./node_modules/@docusaurus/babel/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_ExpandableModule=_interopRequireDefault(__webpack_require__("./src/components/Expandable/Expandable.module.css")),_getString=_interopRequireDefault(__webpack_require__("./src/strings/getString.ts"));const Expandable=_ref=>{let{startExpanded=!1,expandPrompt,collapsePrompt,children}=_ref;const idDiscriminator=(0,_react.useId)(),contentRef=(0,_react.useRef)(null),buttonRef=(0,_react.useRef)(null),effectiveExpandPrompt=expandPrompt||(0,_getString.default)("expandable-component-default-expand-prompt"),effectiveCollapsePrompt=collapsePrompt||(0,_getString.default)("expandable-component-default-collapse-prompt"),[isExpanded,setExpanded]=(0,_react.useState)(startExpanded);(0,_react.useEffect)((()=>{setExpanded((()=>startExpanded))}),[startExpanded]),(0,_react.useEffect)((()=>{isExpanded?contentRef.current.focus():buttonRef.current.focus()}));const toggleExpanded=()=>setExpanded((prevExpanded=>!prevExpanded));return _react.default.createElement("div",{className:_ExpandableModule.default.container},_react.default.createElement("div",{ref:contentRef,tabIndex:isExpanded?0:1,"data-testid":`expandable-section-${idDiscriminator}`,id:`expandable-section-${idDiscriminator}`,className:_ExpandableModule.default.expandableBlock,hidden:!isExpanded},children),_react.default.createElement("button",{ref:buttonRef,tabIndex:0,className:_ExpandableModule.default.toggle,onClick:e=>{toggleExpanded()},onKeyDown:e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),toggleExpanded())},"aria-expanded":isExpanded,"aria-controls":`expandable-section-toggle-${idDiscriminator}`},isExpanded?effectiveCollapsePrompt:effectiveExpandPrompt))};exports.default=Expandable;Expandable.__docgenInfo={description:"",methods:[],displayName:"Expandable",props:{startExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandPrompt:{required:!1,tsType:{name:"string"},description:""},collapsePrompt:{required:!1,tsType:{name:"string"},description:""}}}},"./src/strings/Expandable.strings.ts":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={"expandable-component-default-expand-prompt":"show more...","expandable-component-default-collapse-prompt":"show less"}},"./src/strings/getString.ts":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@docusaurus/babel/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=_interopRequireDefault(__webpack_require__("./src/strings/index.ts"));exports.default=id=>_index.default[id]},"./src/strings/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@docusaurus/babel/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _Expandable=_interopRequireDefault(__webpack_require__("./src/strings/Expandable.strings.ts"));exports.default={..._Expandable.default}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Expandable/Expandable.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'html {\n    --secondary-light: lightGray;\n    --secondary-dark: gray;\n}\n\n[data-theme=\'dark\'] {\n    --secondary-light: gray;\n    --secondary-dark: lightGray;\n}\n\n.u9kCMsUSe59fhy3w85V6 {\n    padding-bottom: 1em;\n}\n\n.vz_j2OdarbDoARwx0ELg {\n    border-width: 0px;\n    background-color: inherit;\n    color: var(--secondary-dark);\n    font-size: smaller;\n    margin-left: 1em;\n    margin-top: 1em;\n    line-height: 50%;\n}\n\n.fAkaluGNrlv8nBtpiasa {\n    position: relative;\n    margin-left: 1em;\n    padding-left: 1.3em;\n    border-left: 1px solid;\n    border-color: var(--secondary-light)\n}\n\n.fAkaluGNrlv8nBtpiasa:before {\n    content: " ";\n    background: var(--secondary-light);\n    position: absolute;\n    left: -0.125em;\n    width: 0.25em;\n    height: 0.25em;\n    border-radius: 50%;\n}\n\n.fAkaluGNrlv8nBtpiasa:after {\n    content: " ";\n    background: var(--secondary-light);\n    position: absolute;\n    left: -0.125em;\n    width: 0.25em;\n    height: 0.25em;\n    bottom: -0.2em;\n    border-radius: 50%;\n}',"",{version:3,sources:["webpack://./src/components/Expandable/Expandable.module.css"],names:[],mappings:"AAAA;IACI,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,4BAA4B;IAC5B,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;IACtB;AACJ;;AAEA;IACI,YAAY;IACZ,kCAAkC;IAClC,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kCAAkC;IAClC,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,cAAc;IACd,cAAc;IACd,kBAAkB;AACtB",sourcesContent:['html {\n    --secondary-light: lightGray;\n    --secondary-dark: gray;\n}\n\n[data-theme=\'dark\'] {\n    --secondary-light: gray;\n    --secondary-dark: lightGray;\n}\n\n.container {\n    padding-bottom: 1em;\n}\n\n.toggle {\n    border-width: 0px;\n    background-color: inherit;\n    color: var(--secondary-dark);\n    font-size: smaller;\n    margin-left: 1em;\n    margin-top: 1em;\n    line-height: 50%;\n}\n\n.expandableBlock {\n    position: relative;\n    margin-left: 1em;\n    padding-left: 1.3em;\n    border-left: 1px solid;\n    border-color: var(--secondary-light)\n}\n\n.expandableBlock:before {\n    content: " ";\n    background: var(--secondary-light);\n    position: absolute;\n    left: -0.125em;\n    width: 0.25em;\n    height: 0.25em;\n    border-radius: 50%;\n}\n\n.expandableBlock:after {\n    content: " ";\n    background: var(--secondary-light);\n    position: absolute;\n    left: -0.125em;\n    width: 0.25em;\n    height: 0.25em;\n    bottom: -0.2em;\n    border-radius: 50%;\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"u9kCMsUSe59fhy3w85V6",toggle:"vz_j2OdarbDoARwx0ELg",expandableBlock:"fAkaluGNrlv8nBtpiasa"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Expandable/Expandable.module.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_Expandable_module_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Expandable/Expandable.module.css"),options={};options.styleTagTransform=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_storybook_builder_webpack5_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_Expandable_module_css__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_Expandable_module_css__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_Expandable_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_Expandable_module_css__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/Expandable/Expandable.stories.tsx":(module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@docusaurus/babel/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.PreExpanded=exports.Nested=exports.Default=exports.CustomExpandCollapsePrompt=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Expandable=_interopRequireDefault(__webpack_require__("./src/components/Expandable/Expandable.tsx")),_lorem_ipsum=_interopRequireDefault(__webpack_require__("./.storybook/assets/mdx/lorem_ipsum.mdx"));const meta={title:"Custom Components/Expandable",component:_Expandable.default,parameters:{layout:"centered"},argTypes:{startExpanded:{control:"boolean",description:"Should the section be expanded when the page first loads?"},expandPrompt:{control:"text",description:"The text to use when prompting the user to expand the region and reveal the hidden content"},collapsePrompt:{control:"text",description:"The text to use when prompting the user to collapse the region and hide the revealed content"}},render:args=>_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("h2",null,"Lorem Ipsum..."),_react.default.createElement(_Expandable.default,args,_react.default.createElement("div",null,_react.default.createElement(_lorem_ipsum.default,null))))};exports.default=meta;exports.Default={args:{}},exports.PreExpanded={args:{startExpanded:!0}},exports.CustomExpandCollapsePrompt={name:"Customizable Expand/Collapse Prompts",args:{expandPrompt:"Click for more details (customized expand prompt)",collapsePrompt:"Hide details (customized collapse prompt)"}},exports.Nested={name:"Nested Expandable Sections",render:(args,context)=>_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("h1",null,"Lorem Ipsum..."),_react.default.createElement(_Expandable.default,{startExpanded:!0},_react.default.createElement("div",null,_react.default.createElement(_lorem_ipsum.default,null)),_react.default.createElement(_Expandable.default,{startExpanded:!0},"Nested expanded content")))};module.exports.__namedExportsOrder=["PreExpanded","Nested","Default","CustomExpandCollapsePrompt"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);