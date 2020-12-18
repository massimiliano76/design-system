import{openBlock as n,createBlock as t,renderSlot as a,withScopeId as o}from"vue";var e=Object.freeze(["default","primary","secondary","tertiary-darkest","high"]),i={name:"BIMDataButton",props:{width:{type:String,default:"32px"},height:{type:String,default:"32px"},fill:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},square:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},icon:{type:Boolean,default:!1},color:{type:String,default:"default",validator:n=>e.includes(n)}},emits:["click"],computed:{classes(){return{"bimdata-btn__icon":this.icon,"bimdata-btn__fill":this.fill,"bimdata-btn__outline":this.outline,"bimdata-btn__ghost":this.ghost,"bimdata-btn__radius":this.radius,"bimdata-btn__square":this.square,"bimdata-btn__rounded":this.rounded,["bimdata-btn__fill--"+this.color]:this.fill&&this.color,["bimdata-btn__outline--"+this.color]:this.outline&&this.color,["bimdata-btn__ghost--"+this.color]:this.ghost&&this.color}},style(){return{"min-width":""+this.width,"min-height":""+this.height}}}};const r=o("data-v-3f903003")((o,e,i,r,d,b)=>(n(),t("button",{class:["bimdata-btn",b.classes],style:b.style,onClick:e[1]||(e[1]=n=>o.$emit("click",n)),color:i.color,type:"button"},[a(o.$slots,"default")],14,["color"])));function d(n,t){void 0===t&&(t={});var a=t.insertAt;if(n&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===a&&o.firstChild?o.insertBefore(e,o.firstChild):o.appendChild(e),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}}d('/* base COLORS --------------------------------------------- */\n/* brand colors */\n/* variant colors */\n/* common colors */\n/* state colors */\n/* base FONT SIZE ----------------------------------------- */\n/* base BOX-SHADOW ----------------------------------------- */\n/* base SPACING UNIT -------------------------------------- */\n/* base FONTS -------------------------------------- */\n.bimdata-h1[data-v-3f903003],\n.bimdata-h2[data-v-3f903003],\n.bimdata-h3[data-v-3f903003],\n.bimdata-h4[data-v-3f903003],\n.bimdata-h5[data-v-3f903003],\n.bimdata-h6[data-v-3f903003],\n.bimdata-text[data-v-3f903003] {\n  margin: 0.5em 0;\n}\n\n/* BIMDATA FONT SIZE */\n.bimdata-h1[data-v-3f903003] {\n  font-size: 2.4285714286em;\n}\n.bimdata-h2[data-v-3f903003] {\n  font-size: 2.1428571429em;\n}\n.bimdata-h3[data-v-3f903003] {\n  font-size: 1.8571428571em;\n}\n.bimdata-h4[data-v-3f903003] {\n  font-size: 1.7142857143em;\n}\n.bimdata-h5[data-v-3f903003] {\n  font-size: 1.4285714286em;\n}\n.bimdata-h6[data-v-3f903003] {\n  font-size: 1.1428571429em;\n}\n.bimdata-text[data-v-3f903003] {\n  font-size: 1em;\n}\n.bimdata-link[data-v-3f903003] {\n  color: #2f374a;\n  border-bottom: 1px solid #2f374a;\n  font-weight: bold;\n}\n\n/* BIMDATA FONT WEIGHT */\n.primary-font[data-v-3f903003] {\n  font-family: "robotoregular", sans-serif;\n}\n.primary-font-medium[data-v-3f903003] {\n  font-family: "robotomedium", sans-serif;\n}\n.primary-font-bold[data-v-3f903003] {\n  font-family: "robotobold", sans-serif;\n}');d('/* base COLORS --------------------------------------------- */\n/* brand colors */\n/* variant colors */\n/* common colors */\n/* state colors */\n/* base FONT SIZE ----------------------------------------- */\n/* base BOX-SHADOW ----------------------------------------- */\n/* base SPACING UNIT -------------------------------------- */\n/* base FONTS -------------------------------------- */\n.bimdata-btn {\n  padding: 0 12px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  border: none;\n  color: #2f374a;\n  cursor: pointer;\n  font-family: "robotoregular", sans-serif;\n  font-size: 12px;\n  -webkit-transition: all 0.1s ease;\n  transition: all 0.1s ease;\n  /* style BIMDATA BTN RADIUS ------------------ */\n  /* style BIMDATA BTN FILL -------------------- */\n}\n.bimdata-btn:hover {\n  -webkit-transition: all 0.25s ease-in;\n  transition: all 0.25s ease-in;\n}\n.bimdata-btn:focus {\n  outline: none;\n}\n.bimdata-btn svg {\n  margin-right: calc(12px / 2);\n}\n.bimdata-btn svg:only-child, .bimdata-btn svg:last-child {\n  margin: 0;\n}\n.bimdata-btn__icon {\n  padding: 0;\n}\n.bimdata-btn__radius {\n  border-radius: 3px;\n}\n.bimdata-btn__square {\n  border-radius: 0;\n}\n.bimdata-btn__rounded {\n  border-radius: 50%;\n}\n.bimdata-btn__fill {\n  background-color: white;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /* style BIMDATA BTN DEFAULT FILL ---------- */\n  /* style BIMDATA BTN PRIMARY FILL ---------- */\n  /* style BIMDATA BTN SECONDARY FILL ---------- */\n  /* style BIMDATA BTN GREY FILL ------------- */\n  /* style BIMDATA BTN RED FILL ------------- */\n  /* style BIMDATA BTN FILL BTN ICON --------- */\n}\n.bimdata-btn__fill--default {\n  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);\n}\n.bimdata-btn__fill--default:hover {\n  background-color: #f7f7f7;\n}\n.bimdata-btn__fill--primary {\n  background-color: #2f374a;\n  color: white;\n}\n.bimdata-btn__fill--primary:hover {\n  background-color: #3b455d;\n}\n.bimdata-btn__fill--secondary {\n  background-color: #f9c72c;\n  color: #2f374a;\n}\n.bimdata-btn__fill--secondary:hover {\n  background-color: #fad45e;\n}\n.bimdata-btn__fill--tertiary-darkest {\n  background-color: #7a7a7a;\n  color: white;\n}\n.bimdata-btn__fill--tertiary-darkest:hover {\n  background-color: #939393;\n}\n.bimdata-btn__fill--high {\n  background-color: #ff3d1e;\n  color: white;\n}\n.bimdata-btn__fill--high:hover {\n  background-color: #ff573d;\n}\n.bimdata-btn__fill--btn-icon svg {\n  margin: 0 6px;\n}\n.bimdata-btn__fill:disabled {\n  background-color: #bdbdbd;\n  color: white;\n  cursor: auto;\n}\n.bimdata-btn__outline {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border: 1px solid;\n}\n.bimdata-btn__outline--default {\n  border-color: #d8d8d8;\n  color: #2f374a;\n}\n.bimdata-btn__outline--default:hover {\n  background-color: #f7f7f7;\n}\n.bimdata-btn__outline--primary {\n  border-color: #2f374a;\n  color: #2f374a;\n}\n.bimdata-btn__outline--primary:hover {\n  background-color: #f8f9fa;\n}\n.bimdata-btn__outline--secondary {\n  border-color: #f9c72c;\n  color: #2f374a;\n}\n.bimdata-btn__outline--secondary:hover {\n  background-color: #fffcf2;\n}\n.bimdata-btn__outline--tertiary-darkest {\n  border-color: #7a7a7a;\n  color: #7a7a7a;\n}\n.bimdata-btn__outline--tertiary-darkest:hover {\n  background-color: #f7f7f7;\n}\n.bimdata-btn__outline--high {\n  border-color: #ff3d1e;\n  color: #ff3d1e;\n}\n.bimdata-btn__outline--high:hover {\n  background-color: #ffedea;\n}\n.bimdata-btn__outline:disabled {\n  border-color: #bdbdbd;\n  color: #bdbdbd;\n  cursor: auto;\n}\n.bimdata-btn__ghost {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.bimdata-btn__ghost svg {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.bimdata-btn__ghost--default {\n  color: #2f374a;\n}\n.bimdata-btn__ghost--default:hover {\n  background-color: #f7f7f7;\n}\n.bimdata-btn__ghost--primary {\n  color: #2f374a;\n}\n.bimdata-btn__ghost--primary:hover {\n  background-color: #f8f9fa;\n}\n.bimdata-btn__ghost--secondary {\n  color: #f9c72c;\n}\n.bimdata-btn__ghost--secondary:hover {\n  background-color: #fffcf2;\n}\n.bimdata-btn__ghost--tertiary-darkest {\n  color: #7a7a7a;\n}\n.bimdata-btn__ghost--tertiary-darkest:hover {\n  background-color: #f7f7f7;\n}\n.bimdata-btn__ghost--high {\n  color: #ff3d1e;\n}\n.bimdata-btn__ghost--high:hover {\n  background-color: #ffedea;\n}\n.bimdata-btn__ghost:disabled {\n  color: #bdbdbd;\n  cursor: auto;\n}'),i.render=r,i.__scopeId="data-v-3f903003",i.__file="src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";export default i;
