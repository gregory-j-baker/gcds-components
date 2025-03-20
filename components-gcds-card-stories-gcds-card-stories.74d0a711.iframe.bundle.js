"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[3287],{"./src/components/gcds-card/stories/gcds-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Badge:()=>Badge,Default:()=>Default,Description:()=>Description,Image:()=>Image,Playground:()=>Playground,Props:()=>Props,Slot:()=>Slot,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Card",argTypes:{cardTitle:{name:"card-title",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},href:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},badge:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},description:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},imgSrc:{name:"img-src",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},imgAlt:{name:"img-alt",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},cardTitleTag:{name:"card-title-tag",control:"select",options:["h3","h4","h5","h6","a"],table:{type:{summary:"string"},defaultValue:{summary:"a"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.qK,default:{control:{type:"text"},description:"Customize the content or include additional elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires.",table:{category:"Slots | Fentes"}},gcdsClick:{action:"click",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in},gcdsFocus:{action:"focus",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in},gcdsBlur:{action:"blur",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href?`href="${args.href}"`:null}\n  ${"a"!=args.cardTitleTag?`card-title-tag="${args.cardTitleTag}"`:null}\n  ${args.badge?`badge="${args.badge}"`:null}\n  ${args.description?`description="${args.description}"`:null}\n  ${args.imgSrc?`img-src="${args.imgSrc}"`:null}\n  ${args.imgAlt?`img-alt="${args.imgAlt}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.default?`<gcds-text>${args.default}</gcds-text>`:null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href?`href="${args.href}"`:null}\n  ${"a"!=args.cardTitleTag?`cardTitleTag="${args.cardTitleTag}"`:null}\n  ${args.badge?`badge="${args.badge}"`:null}\n  ${args.description?`description="${args.description}"`:null}\n  ${args.imgSrc?`imgSrc="${args.imgSrc}"`:null}\n  ${args.imgAlt?`imgAlt="${args.imgAlt}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.default?`<GcdsText>${args.default}</GcdsText>`:null}\n</GcdsCard>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={cardTitle:"Card title link",href:"#",cardTitleTag:"a",badge:"badge",description:"Description or supporting text relating to the headline.",imgSrc:"",imgAlt:"",default:"",lang:"en"};const Description=Template.bind({});Description.args={cardTitle:"Card title link",href:"#",cardTitleTag:"a",badge:"",description:"Description or supporting text relating to the headline.",imgSrc:"",imgAlt:"",default:"",lang:"en"};const Slot=Template.bind({});Slot.args={cardTitle:"Card title link",href:"#",cardTitleTag:"a",badge:"",description:"",imgSrc:"",imgAlt:"",default:"Description or supporting text relating to the headline.",lang:"en"};const Badge=Template.bind({});Badge.args={cardTitle:"Card title link",href:"#",cardTitleTag:"a",badge:"Badge",description:"Description or supporting text relating to the headline.",imgSrc:"",imgAlt:"",default:"",lang:"en"};const Image=Template.bind({});Image.args={cardTitle:"Card title link",href:"#",cardTitleTag:"a",badge:"",description:"Description or supporting text relating to the headline.",imgSrc:"https://picsum.photos/480/270",imgAlt:"An image with the card component",default:"",lang:"en"};const Props=Template.bind({});Props.args={cardTitle:"Card title link",href:"#",cardTitleTag:"a",badge:"badge",description:"Description or supporting text relating to the headline.",imgSrc:"",imgAlt:"",default:"",lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href?`href="${args.href}"`:null}\n  ${"a"!=args.cardTitleTag?`card-title-tag="${args.cardTitleTag}"`:null}\n  ${args.badge?`badge="${args.badge}"`:null}\n  ${args.description?`description="${args.description}"`:null}\n  ${args.imgSrc?`img-src="${args.imgSrc}"`:null}\n  ${args.imgAlt?`img-alt="${args.imgAlt}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.default?`<gcds-text>${args.default}</gcds-text>`:null}\n</gcds-card>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={cardTitle:"Card title link",href:"#",cardTitleTag:"a",badge:"",description:"Description or supporting text relating to the headline.",imgSrc:"",imgAlt:"",default:"",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `card-title-tag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<gcds-text>${args.default}</gcds-text>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `cardTitleTag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<GcdsText>${args.default}</GcdsText>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Description.parameters={...Description.parameters,docs:{...Description.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `card-title-tag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<gcds-text>${args.default}</gcds-text>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `cardTitleTag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<GcdsText>${args.default}</GcdsText>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Description.parameters?.docs?.source}}},Slot.parameters={...Slot.parameters,docs:{...Slot.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `card-title-tag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<gcds-text>${args.default}</gcds-text>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `cardTitleTag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<GcdsText>${args.default}</GcdsText>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Slot.parameters?.docs?.source}}},Badge.parameters={...Badge.parameters,docs:{...Badge.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `card-title-tag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<gcds-text>${args.default}</gcds-text>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `cardTitleTag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<GcdsText>${args.default}</GcdsText>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Badge.parameters?.docs?.source}}},Image.parameters={...Image.parameters,docs:{...Image.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `card-title-tag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<gcds-text>${args.default}</gcds-text>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `cardTitleTag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<GcdsText>${args.default}</GcdsText>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Image.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `card-title-tag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<gcds-text>${args.default}</gcds-text>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `cardTitleTag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<GcdsText>${args.default}</GcdsText>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.cardTitleTag != \'a\' ? `card-title-tag="${args.cardTitleTag}"` : null}\n  ${args.badge ? `badge="${args.badge}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.default ? `<gcds-text>${args.default}</gcds-text>` : null}\n</gcds-card>\n`.replace(/\\s\\snull\\n/g, \'\')',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Description","Slot","Badge","Image","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fd:()=>validatorProps,in:()=>eventProp,qK:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}}}]);