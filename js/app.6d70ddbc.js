(function(e){function t(t){for(var o,a,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)a=s[u],r[a]&&d.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i=[];function a(e){return s.p+"js/"+({DevExample2:"DevExample2",DocsPage:"DocsPage",Example2:"Example2",Example3:"Example3"}[e]||e)+"."+{DevExample2:"be5c5d5f",DocsPage:"f1e99513",Example2:"ab33e893",Example3:"8bb03c35"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var i,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e),i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,l.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-cool-select/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;i.push(["51e7","chunk-vendors"]),n()})({"0179":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".IZ-select *{-webkit-box-sizing:border-box;box-sizing:border-box}.fade-leave-active{position:absolute}.fade-enter-active,.fade-leave,.fade-leave-to{-webkit-transition:opacity .2s;transition:opacity .2s}.fade-enter,.fade-leave-to{opacity:0}",""])},2583:function(e,t,n){var o=n("0179");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("14b06bae",o,!0,{sourceMap:!1,shadowMode:!1})},"4cc3":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".IZ-select *{font-size:16px;font-weight:400;webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif}.IZ-select__input{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border-radius:2px;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition:background .8s;transition:background .8s}.IZ-select__input:not(.IZ-select__input--disabled).IZ-select__input:not(.IZ-select__input--readonly){background-position:50%}.IZ-select__input:not(.IZ-select__input--disabled).IZ-select__input:not(.IZ-select__input--readonly):hover{background:#fbfbfb radial-gradient(circle,transparent 1%,#fbfbfb 0) 50%/15000%}.IZ-select__input:not(.IZ-select__input--disabled).IZ-select__input:not(.IZ-select__input--readonly):active{background-color:#f5f5f5;background-size:100%;-webkit-transition:background 0s;transition:background 0s}.IZ-select__input.IZ-select__input--has-menu{border-bottom-left-radius:0;border-bottom-right-radius:0}.IZ-select__input.IZ-select__input--selection-slot{padding-left:20px}.IZ-select__input.IZ-select__input--selection-slot input{padding-left:10px}.IZ-select__input.IZ-select__input--has-error{-webkit-box-shadow:0 3px 1px -2px rgba(255,0,0,.2),0 2px 2px 0 rgba(255,0,0,.14),0 1px 5px 0 rgba(255,0,0,.12);box-shadow:0 3px 1px -2px rgba(255,0,0,.2),0 2px 2px 0 rgba(255,0,0,.14),0 1px 5px 0 rgba(255,0,0,.12);border:1px solid #ff5252!important;caret-color:#ff5252!important}.IZ-select__input.IZ-select__input--has-error input{color:#ff5252!important}.IZ-select__input.IZ-select__input--disabled{pointer-events:none;background:rgba(0,0,0,.01)}.IZ-select__input.IZ-select__input--disabled input{color:#c8c8c8!important}.IZ-select__input.IZ-select__input--disabled input::-webkit-input-placeholder{color:#c8c8c8}.IZ-select__input.IZ-select__input--disabled input::-ms-input-placeholder{color:#c8c8c8}.IZ-select__input.IZ-select__input--disabled input::placeholder{color:#c8c8c8}.IZ-select__input input{background-size:25px 25px;background-position:right 10px center;background-repeat:no-repeat;background-color:transparent;padding:12px 20px;border-style:none;pointer-events:auto;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1;margin-top:0;min-width:0;position:relative;line-height:20px;max-width:100%;width:100%}.IZ-select__input input:focus{outline:none}.IZ-select__menu{position:absolute;z-index:8;-webkit-transform-origin:left top 0;transform-origin:left top 0;max-height:300px;overflow-y:auto;overflow-x:hidden;background-color:#fff;padding:8px 0 8px;border:1px solid #ced4da;border-radius:.25rem;border-top-left-radius:0;border-top-right-radius:0;-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.IZ-select__menu .IZ-select__no-data{margin-left:10px}.IZ-select__item{cursor:pointer;padding:18px 20px;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.IZ-select__item:hover{background-color:#f2f2f2}.IZ-select__item.IZ-select__item--selected{color:#1976d2!important}.IZ-select__error{margin-top:.55rem;font-size:85%;color:#ff5252}",""])},"51e7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("p",{staticStyle:{"text-align":"center","font-size":"20px"}},[n("router-link",{attrs:{to:{name:"Example1"}}},[e._v("\n      Countries example\n    ")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:{name:"Example2"}}},[e._v("\n      Async search example\n    ")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:{name:"Example3"}}},[e._v("\n      Simple example\n    ")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:{name:"Example4"}}},[e._v("\n      Validation example\n    ")]),n("br"),n("router-link",{attrs:{to:{name:"Docs"}}},[e._v("\n      Documentation 🗎\n    ")])],1),"development"===e.env?n("p",{staticStyle:{"text-align":"center","font-size":"20px"}},[n("router-link",{attrs:{to:"/dev/"}},[e._v("\n      Dev 1\n    ")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:"/dev/2"}},[e._v("\n      Dev 2\n    ")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:"/dev/3"}},[e._v("\n      Dev 3\n    ")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:"/dev/4"}},[e._v("\n      Dev 4\n    ")]),e._v("\n    |\n    "),n("router-link",{attrs:{to:"/dev/5"}},[e._v("\n      Dev 5\n    ")]),e.$route.fullPath.includes("dev")?n("switch-theme"):e._e()],1):e._e(),n("router-view")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme-wrapp"},[e._l(e.themes,function(t,o){return[n("div",{key:t.name,staticClass:"theme",on:{click:function(n){e.changeTheme(t.name)}}},[n("img",{attrs:{src:t.img}}),t.name===e.currentTheme?n("img",{staticStyle:{width:"20px",position:"absolute",transform:"translateX(-5px) translateY(-5px)"},attrs:{src:"https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-128.png"}}):e._e(),n("br"),e._v("\n      "+e._s(t.name)+"\n    ")]),o!==e.themes.length-1?n("span",{key:o},[e._v("\n      or\n    ")]):e._e()]})],2)},s=[];n("6b54"),n("386d");function l(){return new URLSearchParams(window.location.search).get("theme")||"bootstrap"}function c(e){var t=new URLSearchParams(window.location.search);t.set("theme",e),window.location.search=t.toString()}var u={data:function(){return{themes:[{name:"bootstrap",img:"http://wordyblend.com/wp-content/uploads/2017/03/bootstrap-solid.jpg"},{name:"material-design",img:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Material_Design_Logo.svg"}]}},computed:{currentTheme:l},methods:{changeTheme:c}},p=u,d=(n("8205"),n("2877")),f=Object(d["a"])(p,a,s,!1,null,null,null);f.options.__file="SwitchTheme.vue";var m=f.exports,h={components:{SwitchTheme:m},data:function(){return{env:"production"}}},b=h,_=(n("524c"),Object(d["a"])(b,r,i,!1,null,null,null));_.options.__file="App.vue";var x=_.exports,g=n("8afe"),v=n("8c4f"),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"60px"}},[n("iframe",{staticClass:"example-frame",attrs:{src:"https://codesandbox.io/embed/o9l38l1kj6?module=%2Fsrc%2FApp.vue",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}})])}],y={},k=Object(d["a"])(y,w,I,!1,null,null,null);k.options.__file="Example1.vue";var Z=k.exports;o["a"].use(v["a"]);var S=new v["a"]({base:"/vue-cool-select/",routes:[{path:"/",name:"Example1",component:Z},{path:"/ex2",name:"Example2",component:function(){return n.e("Example2").then(n.bind(null,"1503"))}},{path:"/ex3",name:"Example3",component:function(){return n.e("Example3").then(n.bind(null,"b750"))}},{path:"/ex4",name:"Example4",component:function(){return n.e("Example3").then(n.bind(null,"6029"))}},{path:"/docs",name:"Docs",component:function(){return n.e("DocsPage").then(n.bind(null,"7136"))}}].concat(Object(g["a"])(E("/dev",[{path:"/",component:function(){return n.e("DevExample2").then(n.bind(null,"753e"))}},{path:"/2",component:function(){return n.e("DevExample2").then(n.bind(null,"1064"))}},{path:"/3",component:function(){return n.e("DevExample2").then(n.bind(null,"e8e2"))}},{path:"/4",component:function(){return n.e("DevExample2").then(n.bind(null,"885e"))}},{path:"/5",component:function(){return n.e("DevExample2").then(n.bind(null,"8cd7"))}}])))});function E(e,t){return t.map(function(t){return t.path=e+t.path,t})}var T=n("56d7"),M=l();o["a"].use(T["b"],{theme:M}),o["a"].config.productionTip=!1,new o["a"]({el:"#app",router:S,render:function(e){return e(x)}})},"524c":function(e,t,n){"use strict";var o=n("b1f4"),r=n.n(o);r.a},"566a":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".IZ-select__input{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}.IZ-select__input.IZ-select__input--has-menu{border-bottom-left-radius:0;border-bottom-right-radius:0}.IZ-select__input.IZ-select__input--selection-slot{padding-left:.75rem}.IZ-select__input.IZ-select__input--selection-slot input{padding-left:10px}.IZ-select__input.IZ-select__input--has-error{border:1px solid #dc3545!important;caret-color:#ff5252!important}.IZ-select__input.IZ-select__input--has-error input{color:#ff5252!important}.IZ-select__input.IZ-select__input--focused{border-color:#80bdff;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(128,189,255,.5);box-shadow:0 0 0 .2rem rgba(128,189,255,.5)}.IZ-select__input.IZ-select__input--focused.IZ-select__input--has-error{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.IZ-select__input.IZ-select__input--disabled{pointer-events:none;background-color:#e9ecef;opacity:1}.IZ-select__input input{font-size:1rem;background-size:25px 25px;background-position:right 10px center;background-repeat:no-repeat;background-color:transparent;padding:.375rem .75rem;border-style:none;pointer-events:auto;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1;margin-top:0;min-width:0;position:relative;line-height:20px;max-width:100%;width:100%}.IZ-select__input input:focus{outline:none}.IZ-select__menu{position:absolute;z-index:8;-webkit-transform-origin:left top 0;transform-origin:left top 0;max-height:300px;overflow-y:auto;overflow-x:hidden;background-color:#fff;padding:8px 0 8px;border:1px solid #ced4da;border-radius:.25rem;border-top:0;border-top-left-radius:0;border-top-right-radius:0;-webkit-box-shadow:0 2px 11px -2px rgba(0,0,0,.19);box-shadow:0 2px 11px -2px rgba(0,0,0,.19)}.IZ-select__menu .IZ-select__no-data{margin-left:10px}.IZ-select__item{cursor:pointer;padding:10px 14px;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.IZ-select__item:hover{background-color:#f2f2f2}.IZ-select__item.IZ-select__item--selected{color:#1976d2!important}.IZ-select__error{margin-top:.55rem;font-size:85%;color:#dc3545}",""])},"56d7":function(e,t,n){"use strict";n("6762"),n("2fdb"),n("2583");var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"IZ-select"},[n("div",{ref:"IZ-select__input",class:{"IZ-select__input":!0,"IZ-select__input--focused":e.focused,"IZ-select__input--has-menu":e.hasMenu,"IZ-select__input--has-error":e.hasError,"IZ-select__input--selection-slot":e.showSelectionSlot,"IZ-select__input--disabled":e.disabled,"IZ-select__input--readonly":e.readonly},on:{click:e.onInputClick}},[e.showSelectionSlot?e._t("selection",null,{item:e.selectedItem}):e._e(),n("input",e._b({ref:"IZ-select__input-for-text",style:e.inputForTextStyles,attrs:{placeholder:e.placeholder,disabled:e.disableSearch||e.disabled,readonly:e.readonly,type:"text",role:"combobox",autocomplete:"off"},domProps:{value:e.inputValue},on:{keyup:e.onSearchKeyUp,keydown:e.onSearchKeyDown,input:e.onSearch}},"input",e.inputElCustomAttributes,!1))],2),n("transition",{attrs:{name:"fade"}},[e.hasMenu?n("div",{ref:"IZ-select__menu",staticClass:"IZ-select__menu",style:{"min-width":this.$refs["IZ-select__input"].offsetWidth+"px","pointer-events":e.hasMenu?"auto":"none"},on:{scroll:e.onScroll}},[e._l(e.computedItems,function(t,o){return o<e.itemsLimit?n("div",{key:"IZ-item-"+o,class:{"IZ-select__item":!0,"IZ-select__item--selected":e.selectedItem===t},on:{click:function(n){e.onSelect(t)}}},[e._t("item",[n("span",[e._v("\n            "+e._s(e.getItemText(t))+"\n          ")])],{item:t})],2):e._e()}),e.computedItems.length||e.loading?e._e():n("span",{staticClass:"IZ-select__no-data"},[e._t("no-data",[e._v("\n          No data avalidable\n        ")])],2)],2):e._e()]),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"IZ-select__error"},[e._t("error",[e._v("\n        "+e._s(e.errorMessage)+"\n      ")],{errorMessage:e.errorMessage})],2)])],1)},r=[],i=(n("7514"),n("386d"),n("6b54"),n("c5f6"),{name:"VueSelect",introduction:"an amazing select",description:"\n  This `select` is amazing, you should _check_ it out 😊.\n  ",token:'<cool-select v-model="selected" :items="items" />',props:{value:{type:[Array,Object,String,Number,Boolean],default:function(){return null},note:"value for v-model"},items:{type:Array,required:!0,note:"array of suggestions (data fetched from backend, etc)"},itemText:{type:String,default:null,note:"property in item for text"},itemValue:{type:String,default:null,note:"property in item for value"},placeholder:{type:String,default:null,note:"placeholder for input"},loading:{type:Boolean,default:!1,note:"display the loading indicator"},loadingIndicator:{type:String,default:"https://i.imgur.com/fLYd7PN.gif",note:"sets custom loading spinner/indicator. https://loading.io/"},errorMessage:{type:String,default:null},disabled:{type:Boolean,default:!1,note:"disable the select"},readonly:{type:Boolean,default:!1,note:"readonly state"},filter:{type:Function,default:function(e,t,n){var o=function(e){return null!=e?e:""},r=o(n),i=o(t);return r.toString().toLowerCase().indexOf(i.toString().toLowerCase())>-1},note:"filter function for search"},inputElCustomAttributes:{type:Object,default:function(){return{}},note:"you can pass your attributes to the input element"},disableSearch:{type:Boolean,default:!1,note:"disable search input element"},disableFilteringBySearch:{type:Boolean,default:!1,note:"disable filtering by search (you can use search for manually getting items)"},resetSearchOnBlur:{type:Boolean,default:!0,note:"reset search on blur event"}},data:function(){return{focused:!1,selectedItem:null,itemsLimit:20,search:""}},computed:{inputValue:function(){return this.$scopedSlots.selection&&""===this.search?"":""!==this.search?this.search:this.getItemText(this.selectedItem)||this.currentItemValue},currentItemValue:function(){return this.getItemValue(this.selectedItem)},computedItems:function(){return this.filteredBySearchItems},filteredBySearchItems:function(){var e=this;return!this.search||this.disableFilteringBySearch?this.items:this.items.filter(function(t){return e.filter(t,e.search,e.getItemText(t))})},showSelectionSlot:function(){return this.$scopedSlots.selection&&this.selectedItem&&!this.search},inputForTextStyles:function(){return this.loading?{"background-image":"url(".concat(this.loadingIndicator,")")}:{}},hasMenu:function(){return this.focused&&!this.loading},hasError:function(){return!!this.errorMessage}},watch:{value:function(){this.setSelectedItemByValue()},items:function(e){this.setSelectedItemByValue()},selectedItem:function(){this.$emit("input",this.currentItemValue)},focused:function(){this.focused?this.$emit("focus"):(this.$emit("blur"),this.resetSearchOnBlur&&(this.search=""))}},created:function(){var e=this;this.setSelectedItemByValue(),window.addEventListener("click",function(t){var n=t.target,o=e.$refs["IZ-select__menu"],r=e.$refs["IZ-select__input"];!o||o.contains(n)||r.contains(n)||(e.focused=!1)})},methods:{onInputClick:function(){this.disabled||this.readonly||(this.$refs["IZ-select__input-for-text"].focus(),this.focused=!0)},onSelect:function(e){this.selectedItem=e,this.focused=!1,this.search="",this.$emit("select",e)},onSearchKeyDown:function(e){e.target.value||"Backspace"!==e.key||(this.selectedItem=null),this.$emit("keydown",e)},onSearchKeyUp:function(e){this.$emit("keyup",e)},onSearch:function(e){this.selectedItem=null,this.search=e.target.value,this.$emit("search",this.search)},onScroll:function(e){if(this.$emit("scroll",e),!(this.itemsLimit>=this.computedItems.length)){var t=e.target,n=t.scrollHeight-(t.scrollTop+t.clientHeight)<200;n&&(this.itemsLimit+=20)}},getItemText:function(e){return e?this.itemText?e[this.itemText]:e:null},getItemValue:function(e){return e?this.itemValue?e[this.itemValue]:e:null},setSelectedItemByValue:function(){var e=this;this.selectedItem=this.items.find(function(t){return e.getItemValue(t)===e.value})}}}),a=i,s=n("2877"),l=Object(s["a"])(a,o,r,!1,null,null,null);l.options.__file="component.vue";var c=l.exports,u="en";n.d(t,"a",function(){return c});t["b"]=new p;function p(){var e=this;return e.themes=["bootstrap","material-design"],e.currentTheme=null,e.currentLocale=null,{install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.locale,r=void 0===o?u:o,i=n.theme,a=void 0===i?"bootstrap":i;d(a,e.themes),t.prototype.$avatarUploader=this,this.locale=r},locales:["en","ru"],get locale(){return e.currentLocale},set locale(t){if(!this.locales.includes(t))throw new Error("Non-existent locale");e.currentLocale=t},get theme(){return e.currentTheme}}}function d(e,t){var o="Theme ".concat(e," is not supported! Available Themes: ").concat(t.join(", "),".");if(!t.includes(e))throw Error(o);n("7d20")("./".concat(e,".styl"))}},"7d20":function(e,t,n){var o={"./bootstrap.styl":"8e47","./material-design.styl":"e027"};function r(e){var t=i(e);return n(t)}function i(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id="7d20"},8108:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"\n.theme-wrapp{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:120px;margin:30px 0\n}\n.theme{text-align:center;width:120px\n}\n.theme img{width:50%\n}\n.theme:hover{font-weight:700;cursor:pointer\n}\n.theme:hover img{width:55%\n}",""])},8205:function(e,t,n){"use strict";var o=n("eea7"),r=n.n(o);r.a},"8e47":function(e,t,n){var o=n("566a");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("355d7c2f",o,!0,{sourceMap:!1,shadowMode:!1})},b1be:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"\n.example-frame{width:100%;height:800px;border:0;border-radius:4px;overflow:hidden\n}\n.demo-page-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100vh\n}\n.demo-page-wrap>div{width:450px;height:100%\n}\nbody{margin:0\n}",""])},b1f4:function(e,t,n){var o=n("b1be");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("1e3d6505",o,!0,{sourceMap:!1,shadowMode:!1})},e027:function(e,t,n){var o=n("4cc3");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("80f0d6a2",o,!0,{sourceMap:!1,shadowMode:!1})},eea7:function(e,t,n){var o=n("8108");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("20d20bad",o,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.6d70ddbc.js.map