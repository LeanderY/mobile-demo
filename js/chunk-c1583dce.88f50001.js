(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1583dce"],{"0b7b":function(t,r,e){var n=e("8f95"),o=e("7463"),i=e("0363"),a=i("iterator");t.exports=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||o[n(t)]}},1316:function(t,r,e){t.exports=e("9cd3")},"1e8c":function(t,r,e){},"230c":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"con"},[t.data.body?t._e():e("Loading"),t.data.image?e("div",{staticClass:"con-img"},[e("img",{attrs:{src:t.data.image}}),e("div",{staticClass:"con-img-mask"}),e("h2",[t._v(t._s(t.data.title))])]):t._e(),e("div",{staticClass:"con-answer",domProps:{innerHTML:t._s(t.data.body)},on:{click:function(r){return r.preventDefault(),t.pop(r)}}}),e("bottom-menu"),e("comments")],1)},o=[],i=e("781b"),a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"bottom-wrapper"},[e("div",[e("i",{staticClass:"iconfont icon-thumb-up"}),e("span",{staticClass:"extra"},[t._v(t._s(t.popularity))])]),e("div",{on:{click:function(r){return t.showComments()}}},[e("i",{staticClass:"iconfont icon-pinglun"}),e("span",{staticClass:"extra"},[t._v(t._s(t.comments))])])])},c=[],s=e("365c"),u={data:function(){return{comments:0,popularity:0,id:this.$route.query.id}},created:function(){var t=this;Object(s["h"])(this.id).then((function(r){var e=r.comments,n=r.popularity;t.comments=e,t.popularity=n}))},methods:{showComments:function(){this.$root.eventBus.$emit("show")}}},f=u,l=(e("e7a6"),e("2877")),h=Object(l["a"])(f,a,c,!1,null,null,null),p=h.exports,d=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"comments-wrapper",class:{open:t.show},on:{click:t.close}},[e("div",{staticClass:"comments-content"},[e("div",{staticClass:"title"},[t._v("评论 "+t._s(t.list.length))]),e("div",{staticClass:"comments-total"},t._l(t.list,(function(r){return e("div",{key:r.id,staticClass:"comments-item"},[e("img",{staticClass:"avatar",attrs:{src:r.avatar}}),e("div",{staticClass:"content"},[e("span",{staticClass:"name"},[t._v(t._s(r.author))]),e("span",{staticClass:"thumb"},[e("i",{staticClass:"iconfont icon-thumb-up"}),t._v(t._s(r.likes)+" ")]),e("p",{staticClass:"detail"},[t._v(t._s(r.content))]),e("span",[t._v(" "+t._s(t._f("format")(r.time))+" ")])])])})),0)])])},v=[],m=(e("4160"),e("d3b7"),e("3ca3"),e("159b"),e("ddb0"),e("1316")),y=e.n(m);function g(t){if(y()(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}var w=e("a06f"),b=e.n(w),x=e("2dc0"),_=e.n(x);function L(t){if(_()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return b()(t)}function E(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function C(t){return g(t)||L(t)||E()}e("96cf"),e("0d03"),e("ac1f"),e("25f0"),e("5319");function O(t,r){var e=["Y","M","D","h","m","s"],n=[],o=new Date(1e3*t);for(var i in n.push(o.getFullYear()),n.push(j(o.getMonth()+1)),n.push(j(o.getDate())),n.push(j(o.getHours())),n.push(j(o.getMinutes())),n.push(j(o.getSeconds())),n)r=r.replace(e[i],n[i]);return r}function j(t){return t=t.toString(),t[1]?t:"0"+t}var A=function(t){var r;return{afterOpen:function(){r=document.scrollingElement.scrollTop,document.body.classList.add(t),document.body.style.top=-r+"px"},beforeClose:function(){document.body.classList.remove(t),document.scrollingElement.scrollTop=r}}}("modal-open"),k={filters:{format:function(t){return O(t,"Y/M/D h:m:s")}},data:function(){return{list:[],id:this.$route.query.id,show:!1}},created:function(){var t,r,e,n=this;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t=Object(s["b"])(this.id),r=Object(s["g"])(this.id),o.next=4,regeneratorRuntime.awrap(Promise.all([t,r]));case 4:e=o.sent,e.forEach((function(t){var r,e=t.comments;(r=n.list).push.apply(r,C(e))}));case 6:case"end":return o.stop()}}),null,this)},mounted:function(){var t=this;this.$root.eventBus.$on("show",(function(){t.show=!0,A.afterOpen()}))},methods:{close:function(){A.beforeClose(),this.show=!this.show}}},S=k,$=(e("cc29"),Object(l["a"])(S,d,v,!1,null,null,null)),P=$.exports,T={name:"Article",components:{Loading:i["a"],BottomMenu:p,Comments:P},data:function(){return{data:"",share:!1,scroller:window}},mounted:function(){this.scroller=this.$el},created:function(){var t=this,r=this.$route.query.id;Object(s["d"])(r).then((function(r){t.data=r}))},methods:{pop:function(t){var r=t.target.href;r&&window.open(r)}}},F=T,G=(e("dfe9"),Object(l["a"])(F,n,o,!1,null,null,null));r["default"]=G.exports},2616:function(t,r,e){var n=e("0363"),o=e("7463"),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},"2dc0":function(t,r,e){t.exports=e("588c")},"3ca3":function(t,r,e){"use strict";var n=e("6547").charAt,o=e("69f3"),i=e("7dd0"),a="String Iterator",c=o.set,s=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,r=s(this),e=r.string,o=r.index;return o>=e.length?{value:void 0,done:!0}:(t=n(e,o),r.index+=t.length,{value:t,done:!1})}))},"471b":function(t,r,e){"use strict";var n=e("194a"),o=e("4fff"),i=e("faaa"),a=e("2616"),c=e("6725"),s=e("6c15"),u=e("0b7b");t.exports=function(t){var r,e,f,l,h,p=o(t),d="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,y=void 0!==m,g=0,w=u(p);if(y&&(m=n(m,v>2?arguments[2]:void 0,2)),void 0==w||d==Array&&a(w))for(r=c(p.length),e=new d(r);r>g;g++)s(e,g,y?m(p[g],g):p[g]);else for(l=w.call(p),h=l.next,e=new d;!(f=h.call(l)).done;g++)s(e,g,y?i(l,m,[f.value,g],!0):f.value);return e.length=g,e}},"484e":function(t,r,e){var n=e("a5eb"),o=e("471b"),i=e("7de7"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},"588c":function(t,r,e){e("5145"),e("3e47b"),t.exports=e("59d7")},"59d7":function(t,r,e){var n=e("8f95"),o=e("0363"),i=e("7463"),a=o("iterator");t.exports=function(t){var r=Object(t);return void 0!==r[a]||"@@iterator"in r||i.hasOwnProperty(n(r))}},"5ab9":function(t,r,e){e("e519");var n=e("764b");t.exports=n.Array.isArray},"74e7":function(t,r,e){t.exports=e("bc59")},"7de7":function(t,r,e){var n=e("0363"),o=n("iterator"),i=!1;try{var a=0,c={next:function(){return{done:!!a++}},return:function(){i=!0}};c[o]=function(){return this},Array.from(c,(function(){throw 2}))}catch(s){}t.exports=function(t,r){if(!r&&!i)return!1;var e=!1;try{var n={};n[o]=function(){return{next:function(){return{done:e=!0}}}},t(n)}catch(s){}return e}},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=E(t,e,a),i}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",d={};function v(){}function m(){}function y(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(k([])));b&&b!==e&&n.call(b,i)&&(g=b);var x=y.prototype=v.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function L(t){function r(e,o,i,a){var c=u(t[e],t,o);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):Promise.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,a)}))}a(c.arg)}var e;function o(t,n){function o(){return new Promise((function(e,o){r(t,n,e,o)}))}return e=e?e.then(o,o):o()}this._invoke=o}function E(t,r,e){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return S()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var c=C(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var s=u(t,r,e);if("normal"===s.type){if(n=e.done?p:l,s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=p,e.method="throw",e.arg=s.arg)}}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:r,done:!0}}return m.prototype=x.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(r,e,n,o){var i=new L(s(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9cd3":function(t,r,e){t.exports=e("5ab9")},a06f:function(t,r,e){t.exports=e("74e7")},bc59:function(t,r,e){e("3e47b"),e("484e");var n=e("764b");t.exports=n.Array.from},c1b0:function(t,r,e){},cc29:function(t,r,e){"use strict";var n=e("eeb7"),o=e.n(n);o.a},ddb0:function(t,r,e){var n=e("da84"),o=e("fdbc"),i=e("e260"),a=e("9112"),c=e("b622"),s=c("iterator"),u=c("toStringTag"),f=i.values;for(var l in o){var h=n[l],p=h&&h.prototype;if(p){if(p[s]!==f)try{a(p,s,f)}catch(v){p[s]=f}if(p[u]||a(p,u,l),o[l])for(var d in i)if(p[d]!==i[d])try{a(p,d,i[d])}catch(v){p[d]=i[d]}}}},dfe9:function(t,r,e){"use strict";var n=e("c1b0"),o=e.n(n);o.a},e519:function(t,r,e){var n=e("a5eb"),o=e("6220");n({target:"Array",stat:!0},{isArray:o})},e7a6:function(t,r,e){"use strict";var n=e("1e8c"),o=e.n(n);o.a},eeb7:function(t,r,e){},faaa:function(t,r,e){var n=e("6f8d");t.exports=function(t,r,e,o){try{return o?r(n(e)[0],e[1]):r(e)}catch(a){var i=t["return"];throw void 0!==i&&n(i.call(t)),a}}}}]);
//# sourceMappingURL=chunk-c1583dce.88f50001.js.map