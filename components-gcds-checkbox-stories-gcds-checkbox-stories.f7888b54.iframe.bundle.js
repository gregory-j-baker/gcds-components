"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[4223],{"./src/components/gcds-checkbox/stories/gcds-checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Playground:()=>Playground,Props:()=>Props,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Checkbox",parameters:{actions:{argTypesRegex:"^gcds.*",handles:["change","focus","blur"]}},argTypes:{checkboxId:{name:"checkbox-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},name:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},checked:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.fd,..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.qK,gcdsChange:{action:"change",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in},gcdsFocus:{action:"focus",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in},gcdsBlur:{action:"blur",..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.in}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.checked?"checked":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.checked?"checked":null}\n  ${"blur"!=args.validateOn?`validateOn="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsCheckbox>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={checkboxId:"checkbox-default",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!1,value:"",checked:!1,validateOn:"blur",lang:"en"};const Required=Template.bind({});Required.args={checkboxId:"checkbox-required",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!0,disabled:!1,value:"",checked:!1,validateOn:"other",lang:"en"};const Disabled=Template.bind({});Disabled.args={checkboxId:"checkbox-disabled",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!0,value:"",checked:!1,validateOn:"blur",lang:"en"};const Error=Template.bind({});Error.args={checkboxId:"checkbox-error",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"You must check the box to continue.",required:!1,disabled:!1,value:"",checked:!1,validateOn:"blur",lang:"en"};const Checked=Template.bind({});Checked.args={checkboxId:"checkbox-checked",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!1,value:"",checked:!0,validateOn:"other",lang:"en"};const Props=Template.bind({});Props.args={checkboxId:"checkbox-default",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!1,value:"",checked:!1,validateOn:"blur",lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.checked?"checked":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-checkbox>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={checkboxId:"checkbox-playground",label:"Label",name:"checkbox",hint:"Description or example to make the option clearer.",errorMessage:"",required:!1,disabled:!1,value:"",checked:!1,validateOn:"blur",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Required.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Checked.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n\n\x3c!-- React code --\x3e\n<GcdsCheckbox\n  checkboxId="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsCheckbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-checkbox\n  checkbox-id="${args.checkboxId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.checked ? `checked` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-checkbox>\n`.replace(/\\s\\snull\\n/g, \'\')',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Required","Disabled","Error","Checked","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fd:()=>validatorProps,in:()=>eventProp,qK:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}}}]);