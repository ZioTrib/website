(function(t){function e(e){for(var o,i,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);m&&m(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r={app:0},a=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d208bfd":"c1d0ca98","chunk-2d210c47":"4fe337c5","chunk-46ff8124":"cc8dd06f","chunk-6c395aaa":"5b0a8a89"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-46ff8124":1,"chunk-6c395aaa":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-2d208bfd":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-46ff8124":"e671db77","chunk-6c395aaa":"4eac7897"}[t]+".css",r=s.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[t],m.parentNode.removeChild(m),n(a)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"30b3":function(t,e,n){t.exports=n.p+"img/background.d1154164.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{relative:"",right:"",app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{rounded:""}},[n("v-list-item-group",{attrs:{"active-class":"terziario--text"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[t._l(t.menu,(function(e){return n("v-list-item",{key:e.link,attrs:{to:e.root,link:""}},[n("v-list-item-icon",{staticClass:"text-button text-center"},[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-button text-left"},[t._v(t._s(e.title))])],1)],1)})),n("v-list-item",{attrs:{href:"https://github.com/ZioTrib/cv/raw/main/CV_Tribuzio_Daniele.pdf",link:""}},[n("v-list-item-icon",{staticClass:"text-button text-center"},[n("v-icon",[t._v("mdi-pdf-box")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-button text-left"},[t._v("Download CV")])],1)],1)],2)],1)],1),n("v-app-bar",{attrs:{color:"white",height:"70"}},[n("v-row",{attrs:{align:"center"}},[n("v-toolbar-title",{staticClass:"text-h font-weight-thin ma-2"},[t._v("Daniele Tribuzio")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.menu,(function(e){return n("v-col",{key:e.link},[n("v-btn",{attrs:{color:"terziario",text:"",rounded:"",to:e.root}},[n("v-icon",{staticClass:"mr-2"},[t._v(" "+t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)],1)})),n("v-col",[n("v-btn",{attrs:{dark:"",color:"terziario",rounded:"",href:"https://github.com/ZioTrib/cv/raw/main/CV_Tribuzio_Daniele.pdf"}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-pdf-box")]),t._v(" Download CV ")],1)],1)],2),n("v-toolbar-items",{staticClass:"hidden-md-and-up"},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1)],1),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{padless:"",color:"white"}},[n("v-row",{staticStyle:{"margin-top":"10px"}},[n("v-spacer",{staticClass:"hidden-sm-and-down"}),n("v-col",{attrs:{xl:"2",lg:"2",md:"6",sm:"5",xs:"5"}},[n("div",{staticClass:"font-weight-thin black--text text-subtitle-2 text-center"},[n("strong",[t._v(" Contact me ")])]),n("v-btn",{attrs:{icon:"",color:"terziario",href:"mailto:Tribuzio.Daniele@gmail.com",target:"_blank"}},[n("v-icon",{attrs:{size:"20px"}},[t._v(" mdi-email-edit-outline ")])],1),n("v-btn",{attrs:{icon:"",color:"terziario",target:"_blank",href:"https://t.me/DanieleTribuzio"}},[n("v-icon",{attrs:{size:"20px"}},[t._v(" mdi-telegram ")])],1)],1),n("v-col",{attrs:{xl:"2",lg:"2",md:"6",sm:"7",xs:"7"}},[n("div",{staticClass:"font-weight-thin black--text text-subtitle-2 text-center"},[n("strong",[t._v("Follow me")]),t._v(" "),n("br")]),t._l(t.icons,(function(e){return n("v-btn",{key:e.icon,attrs:{icon:"",color:"terziario",href:e.link,target:"_blank"}},[n("v-icon",{attrs:{size:"20px"}},[t._v(" "+t._s(e.icon)+" ")])],1)}))],2),n("v-spacer",{staticClass:"hidden-sm-and-down"})],1)],1)],1)},r=[],a={name:"App",data:function(){return{menu:[{icon:"mdi-home-roof",title:"Home",root:"/"},{icon:"mdi-briefcase-outline",title:"Portfolio",root:"/portfolio"},{icon:"mdi-account-circle-outline",title:"About Me",root:"/about"},{icon:"mdi-email-edit-outline",title:"Contact Me",root:"/contact"}],icons:[{icon:"mdi-instagram",link:"https://www.instagram.com/danieletribuzio/"},{icon:"mdi-facebook",link:"https://www.facebook.com/daniele.tribuzio/"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/daniele-tribuzio/"},{icon:"mdi-github",link:"https://github.com/ZioTrib"}],drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}}},c=a,s=(n("5c0b"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),m=n("40dc"),f=n("5bc1"),v=n("8336"),h=n("62ad"),p=n("553a"),b=n("132d"),g=n("8860"),w=n("da13"),x=n("5d23"),_=n("1baa"),k=n("34c3"),y=n("f6c4"),C=n("f774"),V=n("0fd9"),z=n("2fa4"),T=n("2a7f"),I=Object(s["a"])(c,i,r,!1,null,null,null),D=I.exports;u()(I,{VApp:d["a"],VAppBar:m["a"],VAppBarNavIcon:f["a"],VBtn:v["a"],VCol:h["a"],VFooter:p["a"],VIcon:b["a"],VList:g["a"],VListItem:w["a"],VListItemContent:x["a"],VListItemGroup:_["a"],VListItemIcon:k["a"],VListItemTitle:x["b"],VMain:y["a"],VNavigationDrawer:C["a"],VRow:V["a"],VSpacer:z["a"],VToolbarItems:T["a"],VToolbarTitle:T["b"]});var E=n("ce5b"),P=n.n(E);n("bf40");o["default"].use(P.a);var j=new P.a({theme:{themes:{light:{primario:"#4D4E9D",secondario:"#BEC0E3",terziario:"#F89915"}}},palette:{Liberty:"4D4E9D","Periwinkle Crayola":"BEC0E3","Yellow Orange Color Wheel":"F89915",White:"FFFFFF"}}),S=(n("d3b7"),n("8c4f")),A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-parallax",{attrs:{src:n("30b3"),height:t.height}},[o("v-row",{staticStyle:{"margin-top":"5%"},attrs:{justify:"center"}},[o("v-col",{attrs:{lg:"3",sm:"6",xs:"7",md:"4"}},[o("v-card",{staticClass:"card_id",attrs:{color:"rgb(255, 255, 255, 0.5)",elevation:"10"}},[o("v-row",[o("v-col",[o("v-avatar",{staticClass:"ma-7",attrs:{color:"grey lighten-2",size:"205"}},[o("img",{attrs:{src:n("915e"),alt:"Daniele Tribuzio"}})]),o("div",{staticClass:"text-h4 font-weight-thin"},[t._v(" Daniele "),o("br"),t._v(" Tribuzio ")]),o("hr",{staticStyle:{height:"2px",width:"15%","margin-left":"auto","margin-right":"auto","margin-top":"20px","margin-bottom":"20px","border-width":"0",color:"#F89915","background-color":"#F89915"}}),o("div",{staticClass:"text-overline",staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[t._v(" Data Science Student ")])],1)],1),o("v-card-actions",{staticClass:"terziario justify-center"},t._l(t.icons,(function(e){return o("v-btn",{key:e.icon,staticClass:"mx-4 my-4",attrs:{icon:"",color:"white",href:e.link,target:"_blank"}},[o("v-icon",{attrs:{size:"30px"}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1)],1)],1),o("v-col",{attrs:{lg:"6",sm:"10",xs:"7",md:"7"}},[o("v-card",{staticClass:"textcard text-center text-md-left text-lg-left",attrs:{color:"rgb(255, 255, 255, 0.0)",elevation:"0"}},[o("div",{staticClass:"text-lg-h1 text-md-h1 text-h2"},[t._v(" Hello ")]),o("div",{staticClass:"text-h5 font-weight-thin"},[t._v(" Here's who I am & what I do ")]),o("v-btn",{staticClass:"my-5 mr-5 my-lg-5",attrs:{rounded:"",color:"terziario",dark:"",large:"",to:"/portfolio"}},[t._v(" Portfolio ")]),o("v-btn",{staticClass:"my-10",attrs:{rounded:"",outlined:"",color:"terziario",to:"/about",large:""}},[t._v(" About Me ")]),o("div",{class:["text-lg-body-1 text-justify text-md-body-1 text-body-1 "+t.color+" mb-10"]},[t._v(" I am a master student of "),o("strong",[t._v(" Data Science and Business Informatics ")]),t._v(" at the University of Pisa with a degree in "),o("strong",[t._v("Business Economics")]),t._v(" who believes in the "),o("strong",[t._v("power of data")]),t._v(" and how it can improve the way we do things every day. I like to "),o("strong",[t._v("find solutions")]),t._v(" to problems, even if these are difficult. I feel confident in everything I do and "),o("strong",[t._v("I love to learn")]),t._v(" something new every day. ")])],1)],1)],1)],1)},O=[],F=(n("b0c0"),{name:"Home",data:function(){return{icons:[{icon:"mdi-instagram",link:"https://www.instagram.com/danieletribuzio/"},{icon:"mdi-facebook",link:"https://www.facebook.com/daniele.tribuzio/"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/daniele-tribuzio/"},{icon:"mdi-github",link:"https://github.com/ZioTrib"}]}},computed:{color:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"white--text";case"sm":return"white--text"}},height:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"1200";case"sm":return"1000";case"md":return"700";case"lg":return"700";case"xl":return"700"}}}}),L=F,B=(n("cccb"),n("8212")),M=n("b0af"),N=n("99d9"),H=n("8b9c"),$=Object(s["a"])(L,A,O,!1,null,null,null),Z=$.exports;u()($,{VAvatar:B["a"],VBtn:v["a"],VCard:M["a"],VCardActions:N["a"],VCol:h["a"],VIcon:b["a"],VParallax:H["a"],VRow:V["a"]}),o["default"].use(S["a"]);var q=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:function(){return n.e("chunk-46ff8124").then(n.bind(null,"f820"))}},{path:"/contact",name:"ContactMe",component:function(){return n.e("chunk-2d210c47").then(n.bind(null,"b8fa"))}},{path:"/portfolio",name:"Portfolio",component:function(){return n.e("chunk-6c395aaa").then(n.bind(null,"c9e5"))}},{path:"*",name:"PageNotFound",component:function(){return n.e("chunk-2d208bfd").then(n.bind(null,"a5b5"))}}],J=new S["a"]({mode:"history",base:"/",routes:q}),R=J;o["default"].config.productionTip=!1,new o["default"]({vuetify:j,router:R,render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ced":function(t,e,n){},"915e":function(t,e,n){t.exports=n.p+"img/avatar.fa6ecf45.jpg"},"9c0c":function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.7bfe5638.js.map