/*! For license information please see components-gcds-search-stories-properties-mdx.d0f16781.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[6854,9055],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/gcds-search/stories/properties.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_search_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-search/stories/gcds-search.stories.tsx");function _createMdxContent(props){const _components={h1:"h1",...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_gcds_search_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Events & properties"}),"\n",!new URLSearchParams(window.location.search).get("demo")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{children:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_gcds_search_stories__WEBPACK_IMPORTED_MODULE_2__.Props,story:{inline:!0},sourceState:"shown",type:"dynamic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{of:_gcds_search_stories__WEBPACK_IMPORTED_MODULE_2__.Props,sort:"requiredFirst"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/gcds-search/stories/gcds-search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Default:()=>Default,French:()=>French,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Search",argTypes:{action:{name:"action",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"/sr/srb.html"}}},name:{name:"name",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"q"}}},placeholder:{name:"placeholder",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Canada.ca"}}},method:{control:"select",options:["get","post"],table:{type:{summary:"string"},defaultValue:{summary:"get"}}},searchId:{name:"search-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"search"}}},...__webpack_require__("./src/utils/storybook/component-properties.js").qK}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${"/sr/srb.html"!=args.action?`action="${args.action}"`:null}\n  ${"get"!=args.method?`method="${args.method}"`:null}\n  ${"q"!=args.name?`name="${args.name}"`:null}\n  ${"Canada.ca"!=args.placeholder?`placeholder="${args.placeholder}"`:null}\n  ${"search"!=args.searchId?`search-id="${args.searchId}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${"/sr/srb.html"!=args.action?`action="${args.action}"`:null}\n  ${"get"!=args.method?`method="${args.method}"`:null}\n  ${"q"!=args.name?`name="${args.name}"`:null}\n  ${"Canada.ca"!=args.placeholder?`placeholder="${args.placeholder}"`:null}\n  ${"search"!=args.searchId?`searchId="${args.searchId}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsSearch>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={action:"/sr/srb.html",method:"get",name:"q",placeholder:"Canada.ca",searchId:"search",lang:"en"};const French=Template.bind({});French.args={action:"/sr/srb.html",method:"get",name:"q",placeholder:"Canada.ca",searchId:"search",lang:"fr"};const Custom=Template.bind({});Custom.args={action:"search.html",method:"post",name:"search",placeholder:"sitename",searchId:"searchform",lang:"en"};const Props=Template.bind({});Props.args={action:"/sr/srb.html",method:"get",name:"q",placeholder:"Canada.ca",searchId:"search",lang:"en"};const Playground=(args=>`\n<gcds-search\n  ${"/sr/srb.html"!=args.action?`action="${args.action}"`:null}\n  ${"get"!=args.method?`method="${args.method}"`:null}\n  ${"q"!=args.name?`name="${args.name}"`:null}\n  ${"Canada.ca"!=args.placeholder?`placeholder="${args.placeholder}"`:null}\n  ${"search"!=args.searchId?`search-id="${args.searchId}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-search>\n`).bind({});Playground.args={action:"/sr/srb.html",method:"get",name:"q",placeholder:"Canada.ca",searchId:"search",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `searchId=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsSearch>\n`.replace(/\\s\\snull\\n/g, '')",...Default.parameters?.docs?.source}}},French.parameters={...French.parameters,docs:{...French.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `searchId=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsSearch>\n`.replace(/\\s\\snull\\n/g, '')",...French.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `searchId=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsSearch>\n`.replace(/\\s\\snull\\n/g, '')",...Custom.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `searchId=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsSearch>\n`.replace(/\\s\\snull\\n/g, '')",...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"args => `\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n`",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","French","Custom","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{fd:()=>validatorProps,in:()=>eventProp,qK:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);