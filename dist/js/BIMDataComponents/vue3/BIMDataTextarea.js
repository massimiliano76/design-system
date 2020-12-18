import{pushScopeId as a,popScopeId as e,resolveDirective as t,openBlock as n,createBlock as r,withDirectives as o,createVNode as s,toDisplayString as i,createCommentVNode as d,withScopeId as l}from"vue";var b={directives:{focus:{inserted:function(a,{value:e}){e&&a.focus()}}},model:{prop:"modelValue",event:"update:modelValue"},props:{name:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:null},autofocus:{type:Boolean,default:!1},placeholder:{type:String,default:null},label:{type:String,default:""},width:{type:[Number,String],default:"150px"},height:{type:[Number,String],default:"32px"},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},success:{type:Boolean,default:!1},errorMessage:{type:String,default:""},successMessage:{type:String,default:""}},emits:["update:modelValue"],created(){this.$watch(()=>this.success&&this.error,a=>{if(a)throw"Textarea state cannot be both success and error."})},methods:{focus(){this.$refs.input&&this.$refs.input.focus()}}};const f=l("data-v-76eaf75a");a("data-v-76eaf75a");const m=s("span",{class:"bar"},null,-1),c={key:0,class:"error"},u={key:1,class:"success"};e();const p=f((a,e,l,b,f,p)=>{const h=t("focus");return n(),r("div",{class:["bimdata-textarea",{"not-empty":null!==l.modelValue&&""!==l.modelValue||null!==l.placeholder,error:l.error,success:l.success}],style:{"min-width":l.width,"min-height":l.height}},[o(s("textarea",{name:l.name,id:l.name,value:l.modelValue,placeholder:l.placeholder,disabled:l.disabled,onInput:e[1]||(e[1]=e=>a.$emit("update:modelValue",e.currentTarget.value))},null,40,["name","id","value","placeholder","disabled"]),[[h,l.autofocus]]),s("label",{for:l.name},i(l.label),9,["for"]),m,l.error?(n(),r("span",c,i(l.errorMessage),1)):d("v-if",!0),l.success?(n(),r("span",u,i(l.successMessage),1)):d("v-if",!0)],6)});function h(a,e){void 0===e&&(e={});var t=e.insertAt;if(a&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=a:r.appendChild(document.createTextNode(a))}}h('/* base COLORS --------------------------------------------- */\n/* brand colors */\n/* variant colors */\n/* common colors */\n/* state colors */\n/* base FONT SIZE ----------------------------------------- */\n/* base BOX-SHADOW ----------------------------------------- */\n/* base SPACING UNIT -------------------------------------- */\n/* base FONTS -------------------------------------- */\n.bimdata-h1[data-v-76eaf75a],\n.bimdata-h2[data-v-76eaf75a],\n.bimdata-h3[data-v-76eaf75a],\n.bimdata-h4[data-v-76eaf75a],\n.bimdata-h5[data-v-76eaf75a],\n.bimdata-h6[data-v-76eaf75a],\n.bimdata-text[data-v-76eaf75a] {\n  margin: 0.5em 0;\n}\n\n/* BIMDATA FONT SIZE */\n.bimdata-h1[data-v-76eaf75a] {\n  font-size: 2.4285714286em;\n}\n.bimdata-h2[data-v-76eaf75a] {\n  font-size: 2.1428571429em;\n}\n.bimdata-h3[data-v-76eaf75a] {\n  font-size: 1.8571428571em;\n}\n.bimdata-h4[data-v-76eaf75a] {\n  font-size: 1.7142857143em;\n}\n.bimdata-h5[data-v-76eaf75a] {\n  font-size: 1.4285714286em;\n}\n.bimdata-h6[data-v-76eaf75a] {\n  font-size: 1.1428571429em;\n}\n.bimdata-text[data-v-76eaf75a] {\n  font-size: 1em;\n}\n.bimdata-link[data-v-76eaf75a] {\n  color: #2f374a;\n  border-bottom: 1px solid #2f374a;\n  font-weight: bold;\n}\n\n/* BIMDATA FONT WEIGHT */\n.primary-font[data-v-76eaf75a] {\n  font-family: "robotoregular", sans-serif;\n}\n.primary-font-medium[data-v-76eaf75a] {\n  font-family: "robotomedium", sans-serif;\n}\n.primary-font-bold[data-v-76eaf75a] {\n  font-family: "robotobold", sans-serif;\n}');h('/* base COLORS --------------------------------------------- */\n/* brand colors */\n/* variant colors */\n/* common colors */\n/* state colors */\n/* base FONT SIZE ----------------------------------------- */\n/* base BOX-SHADOW ----------------------------------------- */\n/* base SPACING UNIT -------------------------------------- */\n/* base FONTS -------------------------------------- */\ntextarea:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px white inset;\n          box-shadow: 0 0 0px 1000px white inset;\n}\n.bimdata-textarea {\n  margin: 12px 0;\n  position: relative;\n  inline-size: -webkit-min-content;\n  inline-size: -moz-min-content;\n  inline-size: min-content;\n  font-family: "robotoregular", sans-serif;\n  font-size: 1em;\n}\n.bimdata-textarea textarea {\n  padding: 0px;\n  width: 100%;\n  min-width: inherit;\n  max-width: 100%;\n  min-height: inherit;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0px;\n  border: none;\n}\n.bimdata-textarea textarea:disabled {\n  background-color: transparent;\n}\n.bimdata-textarea textarea:disabled ~ label {\n  color: #bdbdbd;\n  cursor: default;\n}\n.bimdata-textarea textarea:focus {\n  outline: none;\n}\n.bimdata-textarea textarea:focus ~ label {\n  top: -26px;\n  font-size: 0.7142857143em;\n}\n.bimdata-textarea textarea:focus ~ .bar:after {\n  width: 100%;\n  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition: -webkit-transform 0.2s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition: transform 0.2s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition: transform 0.2s cubic-bezier(0.55, 0, 0.55, 0.2), -webkit-transform 0.2s cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-transform: scaleX(1);\n          transform: scaleX(1);\n}\n.bimdata-textarea.not-empty label {\n  top: -26px;\n  color: #2f374a;\n  font-size: 0.7142857143em;\n}\n.bimdata-textarea label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 0.8571428571em;\n  -webkit-transform: translateY(8px);\n          transform: translateY(8px);\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all;\n  color: #7a7a7a;\n  cursor: pointer;\n}\n.bimdata-textarea .bar {\n  width: 100%;\n  height: 1px;\n  display: block;\n  background: #d8d8d8;\n}\n.bimdata-textarea .bar::after {\n  width: 0;\n  height: 2px;\n  content: "";\n  display: block;\n  position: absolute;\n  background-color: #2f374a;\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n}\n.bimdata-textarea .error {\n  color: #ff3d1e;\n  font-size: 0.7857142857em;\n}\n.bimdata-textarea .success {\n  color: #00af50;\n  font-size: 0.7857142857em;\n}\n.bimdata-textarea.error label {\n  color: #ff3d1e;\n}\n.bimdata-textarea.error .bar {\n  background-color: #ff3d1e;\n}\n.bimdata-textarea.error .bar::before, .bimdata-textarea.error .bar::after {\n  background-color: #ff3d1e;\n}\n.bimdata-textarea.success label {\n  color: #00af50;\n}\n.bimdata-textarea.success .bar {\n  background-color: #00af50;\n}\n.bimdata-textarea.success .bar::before, .bimdata-textarea.success .bar::after {\n  background-color: #00af50;\n}'),b.render=p,b.__scopeId="data-v-76eaf75a",b.__file="src/BIMDataComponents/BIMDataTextarea/BIMDataTextarea.vue";export default b;
