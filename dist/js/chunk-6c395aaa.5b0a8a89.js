(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c395aaa"],{"8adc":function(t,e,i){},"8ce9":function(t,e,i){},c9e5:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{src:i("30b3"),height:"auto"}},[a("v-row",{staticStyle:{"margin-top":"5%"},attrs:{justify:"center"}},[a("div",{staticClass:"text-lg-h1 text-md-h1 text-h2 text-center black--text mb-10"},[t._v(" My Works ")])]),a("v-row",{attrs:{justify:"center"}},t._l(t.cards,(function(e){return a("v-col",{key:e.title},[a("v-card",{staticClass:"card_id mx-auto my-12",attrs:{color:"rgb(255, 255, 255, 0.0)","max-width":"374"}},[a("v-img",{attrs:{height:"250",src:e.img}}),a("div",{staticClass:"text-h5 font-weight-bold ma-5"},[t._v(t._s(e.title))]),a("v-chip",[t._v(t._s(e.tag))]),a("v-card-text",[a("div",[t._v(t._s(e.text))])]),a("v-divider",{staticClass:"mx-4"}),a("v-card-text",[a("v-btn",{staticClass:"my-10 mx-5",attrs:{rounded:"",dark:"",color:"terziario",href:e.report,target:"_blank",large:""}},[t._v(" Read the Report ")]),a("v-btn",{staticClass:"my-10 mx-5",attrs:{rounded:"",color:"terziario",href:e.gitRepo,large:"",icon:""}},[a("v-icon",[t._v(" mdi-github ")])],1)],1)],1)],1)})),1)],1)},o=[],r={name:"Portfolio",data:function(){return{cards:[{title:"Google Play Store App Rating Prediction",img:"https://techcrunch.com/wp-content/uploads/2019/05/google-play-store-ratings.jpg",report:"https://github.com/ZioTrib/BDA_project/blob/main/report/midterm3_BDA_project.pdf",gitRepo:"https://github.com/ZioTrib/BDA_project",tag:"Machine Learning"},{title:"Airline Ticket Booking Database Design",img:"https://img.cheapair.com/uploads/2016/02/whentobuy-e1455745258419.jpg",report:"https://github.com/ZioTrib/BD_project/blob/main/BD_project_report.pdf",gitRepo:"",tag:"Database",text:""},{title:"Geological Resources Visualization in Italy",img:"https://www.un-spider.org/sites/default/files/190401_italy%20edited.jpg",report:"https://github.com/ZioTrib/progetto_VA/blob/main/report/VA_project_report.pdf",gitRepo:"https://github.com/ZioTrib/progetto_VA",tag:"Visual Analytics",text:""},{title:"Google Ads Campaign",img:"https://www.wearemarketing.com/media/cache/dynamic/rc/rrepl4Kc//uploads/media/default/0001/21/cd02f7f6393676420be1f04e6ca4b191344ee313.jpeg",report:"https://github.com/ZioTrib/TWM-project/blob/main/TWM_project.pdf",gitRepo:" ",tag:"Analytics",text:""},{title:"Predicting Room Occupancy",img:"https://www.trueoccupancy.com/hubfs/Meeting%20Room.png",report:"https://github.com/ZioTrib/DM2-project/blob/master/Report_prog_DM2.pdf",gitRepo:"https://github.com/ZioTrib/DM2-project",tag:"Data Mining",text:""},{title:"Carvana - Is It a Bad Buy?",img:"https://www.lautomobile.aci.it/fileadmin/_processed_/d/9/csm_carvana-dealer-store-vending-machine_6d338fe8b1.jpg",report:"https://github.com/ZioTrib/DM1-project/blob/main/DM1_Project.pdf",gitRepo:"https://github.com/ZioTrib/DM1-project",tag:"Data Mining",text:""}]}}},s=r,c=i("2877"),l=i("6544"),n=i.n(l),p=i("8336"),h=i("b0af"),d=i("99d9"),u=(i("4de4"),i("4160"),i("3835")),g=i("5530"),b=(i("8adc"),i("58df")),v=i("0789"),m=i("9d26"),f=i("a9ad"),_=i("4e82"),C=i("7560"),j=i("f2e7"),x=i("1c87"),y=i("af2b"),w=i("d9bd"),k=Object(b["a"])(f["a"],y["a"],x["a"],C["a"],Object(_["a"])("chipGroup"),Object(j["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(g["a"])(Object(g["a"])(Object(g["a"])(Object(g["a"])({"v-chip":!0},x["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(u["a"])(e,2),a=i[0],o=i[1];t.$attrs.hasOwnProperty(a)&&Object(w["a"])(a,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(m["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(v["b"],t)},genClose:function(){var t=this;return this.$createElement(m["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),a=i.tag,o=i.data;o.attrs=Object(g["a"])(Object(g["a"])({},o.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:o.attrs.tabindex}),o.directives.push({name:"show",value:this.active}),o=this.setBackgroundColor(this.color,o);var r=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(r,o),e)}}),B=i("62ad"),D=i("ce7e"),$=i("132d"),O=i("adda"),R=i("8b9c"),V=i("0fd9"),T=Object(c["a"])(s,a,o,!1,null,"4b76e546",null);e["default"]=T.exports;n()(T,{VBtn:p["a"],VCard:h["a"],VCardText:d["b"],VChip:k,VCol:B["a"],VDivider:D["a"],VIcon:$["a"],VImg:O["a"],VParallax:R["a"],VRow:V["a"]})},ce7e:function(t,e,i){"use strict";var a=i("5530"),o=(i("8ce9"),i("7560"));e["a"]=o["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-6c395aaa.5b0a8a89.js.map