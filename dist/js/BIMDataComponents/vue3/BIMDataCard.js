import{openBlock as a,createBlock as n,createVNode as t,renderSlot as e,toDisplayString as o,createCommentVNode as s,pushScopeId as d,popScopeId as i,resolveComponent as r,withScopeId as c}from"vue";var b={props:{text:{type:String}}};const l={class:"bimdata-card__brand"},f={class:"bimdata-card__brand--left"},m={key:0};function p(a,n){void 0===n&&(n={});var t=n.insertAt;if(a&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&e.firstChild?e.insertBefore(o,e.firstChild):e.appendChild(o),o.styleSheet?o.styleSheet.cssText=a:o.appendChild(document.createTextNode(a))}}p("/* base COLORS --------------------------------------------- */\n/* brand colors */\n/* variant colors */\n/* common colors */\n/* state colors */\n/* base FONT SIZE ----------------------------------------- */\n/* base BOX-SHADOW ----------------------------------------- */\n/* base SPACING UNIT -------------------------------------- */\n/* base FONTS -------------------------------------- */\n.bimdata-card__brand {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.bimdata-card__brand--left {\n  margin-right: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.bimdata-card__brand--left svg {\n  margin-right: calc(12px / 2);\n}"),b.render=function(d,i,r,c,b,p){return a(),n("div",l,[t("div",f,[e(d.$slots,"left"),r.text?(a(),n("span",m,o(r.text),1)):s("v-if",!0)]),e(d.$slots,"right")])},b.__file="src/BIMDataComponents/BIMDataCard/BIMDataCardBand.vue";var x={components:{BIMDataCardBand:b},props:{titleHeader:{type:String},submenuText:{type:String},width:{type:[Number,String],default:"215px"}}};const h=c("data-v-5c84207f");d("data-v-5c84207f");const v={key:2,class:"bimdata-card__content"},g={key:3,class:"bimdata-card__footer"};i();const u=h((t,o,d,i,c,b)=>{const l=r("BIMDataCardBand");return a(),n("div",{class:"bimdata-card",style:{"min-width":d.width}},[d.titleHeader||t.$scopedSlots.headerIcons?(a(),n(l,{key:0,text:d.titleHeader,class:"bimdata-card__header"},{right:h(()=>[e(t.$slots,"headerIcons")]),_:1},8,["text"])):s("v-if",!0),t.$scopedSlots.left||d.submenuText||t.$scopedSlots.right?(a(),n(l,{key:1,class:"bimdata-card__submenu",text:d.submenuText},{left:h(()=>[e(t.$slots,"left")]),right:h(()=>[e(t.$slots,"right")]),_:1},8,["text"])):s("v-if",!0),t.$scopedSlots.content?(a(),n("div",v,[e(t.$slots,"content")])):s("v-if",!0),t.$scopedSlots.footer?(a(),n("footer",g,[e(t.$slots,"footer")])):s("v-if",!0)],4)});p('/* base COLORS --------------------------------------------- */\n/* brand colors */\n/* variant colors */\n/* common colors */\n/* state colors */\n/* base FONT SIZE ----------------------------------------- */\n/* base BOX-SHADOW ----------------------------------------- */\n/* base SPACING UNIT -------------------------------------- */\n/* base FONTS -------------------------------------- */\n.bimdata-h1[data-v-5c84207f],\n.bimdata-h2[data-v-5c84207f],\n.bimdata-h3[data-v-5c84207f],\n.bimdata-h4[data-v-5c84207f],\n.bimdata-h5[data-v-5c84207f],\n.bimdata-h6[data-v-5c84207f],\n.bimdata-text[data-v-5c84207f] {\n  margin: 0.5em 0;\n}\n\n/* BIMDATA FONT SIZE */\n.bimdata-h1[data-v-5c84207f] {\n  font-size: 2.4285714286em;\n}\n.bimdata-h2[data-v-5c84207f] {\n  font-size: 2.1428571429em;\n}\n.bimdata-h3[data-v-5c84207f] {\n  font-size: 1.8571428571em;\n}\n.bimdata-h4[data-v-5c84207f] {\n  font-size: 1.7142857143em;\n}\n.bimdata-h5[data-v-5c84207f] {\n  font-size: 1.4285714286em;\n}\n.bimdata-h6[data-v-5c84207f] {\n  font-size: 1.1428571429em;\n}\n.bimdata-text[data-v-5c84207f] {\n  font-size: 1em;\n}\n.bimdata-link[data-v-5c84207f] {\n  color: #2f374a;\n  border-bottom: 1px solid #2f374a;\n  font-weight: bold;\n}\n\n/* BIMDATA FONT WEIGHT */\n.primary-font[data-v-5c84207f] {\n  font-family: "robotoregular", sans-serif;\n}\n.primary-font-medium[data-v-5c84207f] {\n  font-family: "robotomedium", sans-serif;\n}\n.primary-font-bold[data-v-5c84207f] {\n  font-family: "robotobold", sans-serif;\n}');p('/* base COLORS --------------------------------------------- */\n/* brand colors */\n/* variant colors */\n/* common colors */\n/* state colors */\n/* base FONT SIZE ----------------------------------------- */\n/* base BOX-SHADOW ----------------------------------------- */\n/* base SPACING UNIT -------------------------------------- */\n/* base FONTS -------------------------------------- */\n.bimdata-card {\n  background-color: white;\n  -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\n  font-family: "robotoregular", sans-serif;\n  font-size: 1em;\n}\n.bimdata-card__content, .bimdata-card__footer {\n  font-size: 0.8571428571em;\n}\n.bimdata-card__header {\n  padding: 10px 12px;\n  height: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: #f7f7f7;\n  color: #2f374a;\n  font-size: 0.9285714286em;\n}\n.bimdata-card__submenu {\n  padding: calc(12px / 2) 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  background: white;\n  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  font-size: 0.8571428571em;\n}\n.bimdata-card__content {\n  padding: 12px;\n  color: #7a7a7a;\n}\n.bimdata-card__footer {\n  padding: 0 12px 12px;\n}'),x.render=u,x.__scopeId="data-v-5c84207f",x.__file="src/BIMDataComponents/BIMDataCard/BIMDataCard.vue";export default x;
