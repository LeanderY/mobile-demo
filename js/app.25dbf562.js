(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1b625606":"1dfb051d","chunk-30a5a19e":"f4408803","chunk-56161602":"d9e95379","chunk-57ea1c14":"a3a221b0","chunk-66a0931d":"e8453993","chunk-c1583dce":"88f50001"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1b625606":1,"chunk-30a5a19e":1,"chunk-56161602":1,"chunk-57ea1c14":1,"chunk-66a0931d":1,"chunk-c1583dce":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1b625606":"2f1112d4","chunk-30a5a19e":"1ac9ac00","chunk-56161602":"4e821b3a","chunk-57ea1c14":"2f1112d4","chunk-66a0931d":"31a97edb","chunk-c1583dce":"db386677"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mobile-demo/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2fbf":function(e,t,n){},"365c":function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),o=n.n(r);o.a.defaults.withCredentials=!1;var a=o.a.create({baseURL:"http://news-at.zhihu.com/api/4",timeout:5e3});a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){var t=e.data;return 200===e.status?t:Promise.reject(t.message)}),(function(e){return Promise.reject(e)}));var c=a;function u(){return c({url:"/news/latest",method:"get"})}function i(e){return c({url:"/news/".concat(e),method:"get"})}function s(e){return c({url:"/news/before/".concat(e),method:"get"})}function l(e){return c({url:"/story-extra/".concat(e),method:"get"})}function f(e){return c({url:"/story/".concat(e,"/short-comments"),method:"get"})}function d(e){return c({url:"/story/".concat(e,"/long-comments"),method:"get"})}function h(e){return c({url:"/sections",method:"get"})}function p(e){return c({url:"/section/".concat(e),method:"get"})}n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return p}))},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.color,attrs:{id:"app"}},[e.isNav?n("Nav"):e._e(),n("transition",{attrs:{name:e.transitionName}},[n("keep-alive",{attrs:{exclude:["Article","Theme"]}},[n("router-view",{staticClass:"app-view"})],1)],1)],1)},a=[],c=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-wrapper"},[n("router-link",{attrs:{tag:"div",to:"/",exact:""}},[n("i",{staticClass:"iconfont icon-shouye"}),n("div",[e._v("首页")])]),n("router-link",{attrs:{tag:"div",to:"/category"}},[n("i",{staticClass:"iconfont icon-menu--line"}),n("div",[e._v("分类")])]),n("router-link",{attrs:{tag:"div",to:"/my"}},[n("i",{staticClass:"iconfont icon-wode"}),n("div",[e._v("我的")])])],1)},i=[],s={},l=s,f=(n("e257"),n("2877")),d=Object(f["a"])(l,u,i,!1,null,null,null),h=d.exports,p=n("2f62");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={components:{Nav:h},data:function(){return{transitionName:"slide-left",isNav:!0}},computed:b({},Object(p["b"])(["color"])),watch:{$route:function(e,t){this.transitionName=e.meta.index<t.meta.index?"slide-right":"slide-left","/article"===e.path||"/theme"===e.path?this.isNav=!1:this.isNav=!0}}},g=v,y=(n("5c0b"),Object(f["a"])(g,o,a,!1,null,null,null)),k=y.exports,w=(n("499a"),n("d3b7"),n("8c4f"));r["a"].use(w["a"]);var O=[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-57ea1c14"),n.e("chunk-66a0931d")]).then(n.bind(null,"7abe"))},meta:{index:1}},{path:"/article",name:"article",component:function(){return Promise.all([n.e("chunk-57ea1c14"),n.e("chunk-c1583dce")]).then(n.bind(null,"230c"))},meta:{index:2}},{path:"/theme",name:"theme",component:function(){return n.e("chunk-1b625606").then(n.bind(null,"d63e"))},meta:{index:3}},{path:"/category",name:"category",component:function(){return n.e("chunk-30a5a19e").then(n.bind(null,"a192"))},meta:{index:4}},{path:"/my",name:"my",component:function(){return n.e("chunk-56161602").then(n.bind(null,"9639"))},meta:{index:5}}],j=new w["a"]({mode:"history",linkActiveClass:"active",routes:O}),P=j,x=n("0e44"),_=n("365c");r["a"].use(p["a"]);var S=new p["a"].Store({state:{list:[],color:"cyan"},mutations:{SET_LIST:function(e,t){e.list=t}},actions:{getList:function(e){var t=e.commit;return new Promise((function(e,n){Object(_["e"])().then((function(e){var n=e.data;t("SET_LIST",n)}))}))}},modules:{},plugins:[Object(x["a"])()]});n("b20f");new r["a"]({router:P,store:S,data:{eventBus:new r["a"]},render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},b20f:function(e,t,n){},e257:function(e,t,n){"use strict";var r=n("2fbf"),o=n.n(r);o.a}});
//# sourceMappingURL=app.25dbf562.js.map