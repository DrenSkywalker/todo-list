(this.webpackJsonpex1_todolist=this.webpackJsonpex1_todolist||[]).push([[0],{110:function(e){e.exports=JSON.parse('{"add_memo":"Add memo","edit_memo":"Edit memo","delete_memo":"Delete memo","delete_confirmation":"Do you really want to delete {{name}}?","delete_info":"This memo will not be restored.","memo_title":"Title","memo_description":"Description","memo_created":"Memo created!","button_add":"Add","button_edit":"Edit","button_delete":"Delete","button_confirm":"Confirm","button_cancel":"Cancel","select_language":"Select language","language_it":"Italian","language_en":"English"}')},111:function(e){e.exports=JSON.parse('{"add_memo":"Aggiungi promemoria","edit_memo":"Modifica promemoria","delete_memo":"Elimina promemoria","delete_confirmation":"Vuoi veramente eliminare {{name}}?","delete_info":"Una volta cancellato, questo promemoria non potr\xe0 essere ripristinato.","memo_title":"Titolo","memo_description":"Descrizione","memo_created":"Promemoria creato!","button_add":"Aggiungi","button_edit":"Modifica","button_delete":"Elimina","button_confirm":"Conferma","button_cancel":"Cancella","select_language":"Seleziona lingua","language_it":"Italiano","language_en":"Inglese"}')},129:function(e,t,n){},130:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var i,r=n(0),o=n.n(r),l=n(39),c=n.n(l),a=(n(129),n(4)),s=n(175),d=n(176),j=n(167),u=n(171),m=n(169),b=n(161),O=["title","titleId"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function h(e,t){var n=e.title,o=e.titleId,l=f(e,O);return r.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,i||(i=r.createElement("path",{d:"M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"})))}var g,x,v=r.forwardRef(h),y=(n.p,["title","titleId"]);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function T(e,t){var n=e.title,i=e.titleId,o=w(e,y);return r.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,g||(g=r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),x||(x=r.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})))}var C,S,E=r.forwardRef(T),k=(n.p,n(130),n(3)),D=function(e){var t=e.onOpen,n=e.setDialogType;return Object(k.jsx)("header",{id:"header",children:Object(k.jsxs)("div",{id:"header-content",children:[Object(k.jsxs)("h1",{id:"title",children:[Object(k.jsx)(E,{className:"icon"})," To-Do"]}),Object(k.jsx)(m.a,{label:"Add new memo","aria-label":"A tooltip",children:Object(k.jsx)(b.a,{size:"sm",onClick:function(){n("add"),t()},children:Object(k.jsx)(v,{className:"icon"})})})]})})},I=n(162),N=(n(138),function(e){var t=e.onOpen,n=e.reminders,i=e.setCurrentReminder,r=e.setDialogType;return Object(k.jsx)("ul",{id:"memo-list",children:n.map((function(e,n){return Object(k.jsx)("li",{className:"memo-element",onClick:function(){i(e),r("view"),t()},children:Object(k.jsxs)(I.a,{borderWidth:"1px",borderRadius:"lg",overflow:"hidden",p:"4",children:[Object(k.jsx)(I.a,{fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:e.title}),Object(k.jsx)(I.a,{children:e.description})]})},n)}))})}),R=n(12),M=n(172),P=n(170),z=n(164),V=n(165),L=n(114),A=n(32),B={imageDelete:n.p+"static/media/image_delete.7da827fb.png"},F=(n(139),function(e){var t=e.isOpen,n=e.onOpen,i=e.onClose,o=e.currentReminder,l=e.reminders,c=e.setReminders,a=e.dialogType,d=e.setDialogType,j=Object(s.a)().t,u=Object(P.a)(),m=Object(r.useRef)(),b=Object(r.useRef)(),O=function(){c(l.filter((function(e){return e.id!==o.id})))},p=function(e){return"add"===e.dialogType?Object(k.jsx)("h2",{className:"h2",children:j("add_memo")}):"view"===e.dialogType?Object(k.jsx)("h2",{className:"h2",children:o.title}):"edit"===e.dialogType?Object(k.jsx)("h2",{className:"h2",children:j("edit_memo")}):Object(k.jsx)("h2",{className:"h2",children:j("delete_memo")})},f=function(e){return"add"===e.dialogType?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(z.a,{ref:m,mb:4,placeholder:j("memo_title")}),Object(k.jsx)(V.a,{ref:b,placeholder:j("memo_description")})]}):"view"===e.dialogType?Object(k.jsx)("p",{className:"text",children:o.description}):"edit"===e.dialogType?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(z.a,{ref:m,mb:4,defaultValue:o.title}),Object(k.jsx)(V.a,{ref:b,defaultValue:o.description})]}):Object(k.jsxs)("div",{className:"description",children:[Object(k.jsx)("img",{src:B.imageDelete,alt:"",className:"image"}),Object(k.jsxs)("p",{className:"text",children:[j("delete_confirmation",{name:o.title}),Object(k.jsx)("br",{}),j("delete_info")]})]})},h=function(e){return Object(k.jsxs)(k.Fragment,{children:["add"===e.dialogType?Object(k.jsx)(L.a,{colorScheme:"blue",mr:3,onClick:function(){!function(){var e={id:Object(M.a)(),title:m.current.value,description:b.current.value};c((function(t){return[].concat(Object(R.a)(t),[e])}))}(),u({title:"Memo created",status:"info",duration:5e3,isClosable:!0}),i()},children:j("button_add")}):"view"===e.dialogType?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(L.a,{colorScheme:"blue",mr:3,onClick:function(){d("edit"),n()},children:j("button_edit")}),Object(k.jsx)(L.a,{colorScheme:"red",mr:3,onClick:function(){d("delete"),n()},children:j("button_delete")})]}):"edit"===e.dialogType?Object(k.jsx)(L.a,{colorScheme:"blue",mr:3,onClick:function(){!function(){var e={id:o.id,title:m.current.value,description:b.current.value};O(),c((function(t){return[e].concat(Object(R.a)(t))}))}(),i()},children:j("button_confirm")}):Object(k.jsx)(L.a,{colorScheme:"red",mr:3,onClick:function(){O(),i()},children:j("button_delete")}),Object(k.jsx)(L.a,{variant:"ghost",onClick:i,children:j("button_cancel")})]})};return Object(k.jsxs)(A.a,{isOpen:t,onClose:i,children:[Object(k.jsx)(A.h,{}),Object(k.jsxs)(A.d,{children:[Object(k.jsx)(A.g,{children:Object(k.jsx)(p,{dialogType:a})}),Object(k.jsx)(A.c,{}),Object(k.jsx)(A.b,{children:Object(k.jsx)(f,{dialogType:a})}),Object(k.jsx)(A.f,{children:Object(k.jsx)(h,{dialogType:a})})]})]})}),H=n(177),J=n(166),W=["title","titleId"];function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function G(e,t){var n=e.title,i=e.titleId,o=U(e,W);return r.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,C||(C=r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),S||(S=r.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})))}var K=r.forwardRef(G),Q=(n.p,n(147),function(e){var t=e.i18n,n=Object(d.a)(),i=n.isOpen,r=n.onOpen,o=n.onClose,l=Object(s.a)().t;return Object(k.jsxs)("footer",{id:"footer",children:[Object(k.jsx)(b.a,{size:"sm",onClick:r,children:Object(k.jsx)(K,{className:"icon"})}),Object(k.jsxs)(H.a,{isOpen:i,placement:"bottom",onClose:o,children:[Object(k.jsx)(A.h,{}),Object(k.jsxs)(H.b,{children:[Object(k.jsx)(A.c,{}),Object(k.jsx)(A.b,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(k.jsxs)(J.a,{maxW:"200",placeholder:l("select_language"),onChange:function(e){var n;n=e.target.value,t.changeLanguage(n)},children:[Object(k.jsx)("option",{value:"it",children:l("language_it")}),Object(k.jsx)("option",{value:"en",children:l("language_en")})]})})]})]})]})});var X=function(){var e=Object(s.a)().i18n,t=Object(d.a)(),n=t.isOpen,i=t.onOpen,o=t.onClose,l=Object(r.useState)([]),c=Object(a.a)(l,2),m=c[0],b=c[1],O=Object(r.useState)(),p=Object(a.a)(O,2),f=p[0],h=p[1],g=Object(r.useState)(),x=Object(a.a)(g,2),v=x[0],y=x[1],_=Object(j.a)({components:{Button:{baseStyle:{_focus:{boxShadow:"none"}}}}});return console.log(m),Object(k.jsxs)(u.a,{theme:_,children:[n&&Object(k.jsx)(F,{isOpen:n,onOpen:i,onClose:o,currentReminder:f,reminders:m,setReminders:b,dialogType:v,setDialogType:y}),Object(k.jsx)(D,{onOpen:i,setDialogType:y}),Object(k.jsx)("main",{id:"main",children:Object(k.jsx)("div",{id:"main-content",children:Object(k.jsx)(N,{onOpen:i,reminders:m,setCurrentReminder:h,setDialogType:y})})}),Object(k.jsx)(Q,{i18n:e})]})},Y=n(89),Z=n(65),$=n(110),ee={it:{translation:n(111)},en:{translation:$}};Y.a.use(Z.e).init({resources:ee,lng:"it",fallbackLng:"en",interpolation:{escapeValue:!1}},(function(e,t){e&&console.log(e)}));Y.a;c.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(X,{})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.b07380dd.chunk.js.map