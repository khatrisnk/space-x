(window.webpackJsonp=window.webpackJsonp||[]).push([[1,0,3],{18:function(e,t,n){"use strict";function r(e,t){return e===t}function a(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}n.r(t),n.d(t,"Home",(function(){return A}));var i=n(0),s=n.n(i),c=n(6),u=n.n(c),l=n(26),f=n(2),p=n(55),h=n.n(p),d=n(56),m=n.n(d),y=n(58),v=n.n(y),_=n(10),g=function(){var e=m()(h.a.mark((function e(){var t,n,r,a=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<a.length&&void 0!==a[0]?a[0]:_.a,e.prev=1,e.next=4,v()(t);case 4:if(!(400<=(n=e.sent).status)){e.next=7;break}throw new Error("Bad response from server");case 7:return e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),b=function(){return{type:_.c}},E=function(e){return{type:_.d,payload:e}},w=function(e){return{type:_.b,payload:e}},x=function(e){var t=e.classname,n=e.queryKey,r=e.children,a=e.evtHandler;return s.a.createElement("button",{className:t,onClick:function(e){return a(e,n)}},r)};x.propTypes={classname:u.a.string,queryKey:u.a.string,children:u.a.node,evtHandler:u.a.func};n(59);var O=function(){var e=Object(f.g)(),t=new URLSearchParams(Object(f.h)().search),n=function(n,r){var a=function(e){var t=e.key,n=e.value,r=e.history,a=e.query,o=r.location.pathname,i=r.location.search;return""===i?{url:"".concat(o,"?").concat(t,"=").concat(n),replace:!1}:null===a.get(t)?{url:"".concat(o).concat(i,"&").concat(t,"=").concat(n),replace:!1}:(a.set(t,n),{url:"".concat(o,"?").concat(a.toString()),replace:!0})}({key:r,value:n.target.textContent,history:e,query:t}),o=a.url;a.replace?e.replace(o):e.push(o)};return s.a.createElement("div",{className:"spx-filters"},s.a.createElement("h2",null,"Filters"),s.a.createElement("div",{className:"spx-filters__type"},s.a.createElement("p",null,"Launch Year")),s.a.createElement("div",{className:"spx-filters__filter"},s.a.createElement("div",{className:"spx-filters__filter__btns"},s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2006"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2008"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2010"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2012"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2014"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2016"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2018"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2020")),s.a.createElement("div",{className:"spx-filters__filter__btns"},s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2007"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2009"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2011"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2013"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2015"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2017"),s.a.createElement(x,{classname:"spx-filters__filter__btns__btn year",queryKey:"launch_year",evtHandler:n},"2019"))),s.a.createElement("div",{className:"spx-filters__type"},s.a.createElement("p",null,"Successful Launch")),s.a.createElement("div",{className:"spx-filters__filter"},s.a.createElement("div",{className:"spx-filters__filter__btns"},s.a.createElement(x,{classname:"spx-filters__filter__btns__btn launch",queryKey:"launch_success",evtHandler:n},"true")),s.a.createElement("div",{className:"spx-filters__filter__btns"},s.a.createElement(x,{classname:"spx-filters__filter__btns__btn launch",queryKey:"launch_success",evtHandler:n},"false"))),s.a.createElement("div",{className:"spx-filters__type"},s.a.createElement("p",null,"Successful Landing")),s.a.createElement("div",{className:"spx-filters__filter"},s.a.createElement("div",{className:"spx-filters__filter__btns"},s.a.createElement(x,{classname:"spx-filters__filter__btns__btn land",queryKey:"land_success",evtHandler:n},"true")),s.a.createElement("div",{className:"spx-filters__filter__btns"},s.a.createElement(x,{classname:"spx-filters__filter__btns__btn land",queryKey:"land_success",evtHandler:n},"false"))))},T=(n(60),function(e){var t=e.program;return s.a.createElement("div",{className:"scx-prgm",tabIndex:"0"},s.a.createElement("div",{className:"scx-prgm__img"},s.a.createElement("img",{src:t.imgLink})),s.a.createElement("div",{className:"scx-prgm__name"},s.a.createElement("span",null,t.name),s.a.createElement("span",null," #".concat(t.flightNumber))),s.a.createElement("div",{className:"spx-prgm__mission-ids"},s.a.createElement("label",null,"Mission Ids: "),s.a.createElement("div",null,s.a.createElement("ul",null,t.ids.map((function(e){return s.a.createElement("li",{key:e},e)}))))),s.a.createElement("div",{className:"spx-prgm__launch-year"},s.a.createElement("label",null,"Launch Year: "),s.a.createElement("span",null,t.launchYear)),s.a.createElement("div",{className:"spx-prgm__launch-suc"},s.a.createElement("label",null,"Successful Launch: "),s.a.createElement("span",null,(!!t.launchSuccess).toString())),s.a.createElement("div",{className:"spx-prgm__land-suc"},s.a.createElement("label",null,"Successful Landing: "),s.a.createElement("span",null,(!!t.landingSuccess).toString())))});T.propTypes={program:u.a.shape({imgLink:u.a.string,flightNumber:u.a.number,name:u.a.string,ids:u.a.arrayOf(u.a.string),launchYear:u.a.string,launchSuccess:u.a.bool,landingSuccess:u.a.bool})};n(61);var D=function(e){var t=e.programs,n=e.isLoading,r="".concat(n?"spx-prgm-list loading":"spx-prgm-list");return s.a.createElement("div",{className:r},n?"Loading...":t.map((function(e){return s.a.createElement(T,{program:e,key:e.flightNumber})})))};D.propTypes={programs:u.a.arrayOf(u.a.shape({})),isLoading:u.a.bool};var S=function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var i=0,s=r.pop(),c=o(r),u=e.apply(void 0,[function(){return i++,s.apply(null,arguments)}].concat(n)),l=e((function(){for(var e=[],t=c.length,n=0;n<t;n++)e.push(c[n].apply(null,arguments));return u.apply(null,e)}));return l.resultFunc=s,l.dependencies=c,l.recomputations=function(){return i},l.resetRecomputations=function(){return i=0},l}}((function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r,n=null,o=null;return function(){return a(t,n,arguments)||(o=e.apply(null,arguments)),n=arguments,o}})),C=function(e){return e.home.spaceX.isLoading},L=S((function(e){return e.home.spaceX.data}),(function(e){try{return e.map((function(e){var t=e.flight_number,n=e.mission_name,r=e.mission_id,a=e.launch_year,o=e.launch_success,i=e.rocket.first_stage.cores,s=e.links.mission_patch_small;return{flightNumber:t,name:n,ids:r,launchYear:a,launchSuccess:o,landingSuccess:i[0].land_success,imgLink:s}}))}catch(e){console.log("spaceXDataSelector",e)}})),A=(n(35),function(e){var t=e.spaceXPrograms,n=e.isSpaceXDataLoading,r=Object(f.h)();return Object(i.useEffect)((function(){e.loadSpaceXData()}),[]),Object(i.useEffect)((function(){var t=function(e){if(e){var t=e.replace("?","");return"".concat(_.a,"&").concat(t)}}(r.search);e.loadSpaceXData(t)}),[r.search]),s.a.createElement("main",{className:"spx-home"},s.a.createElement("h1",null,"SpaceX Launch Programs"),s.a.createElement("div",{className:"spx-home-container"},s.a.createElement(O,null),s.a.createElement(D,{programs:t,isLoading:n})))});A.defaulProps={spaceXPrograms:[]},A.propTypes={loadSpaceXData:u.a.func,spaceXPrograms:u.a.arrayOf(u.a.shape({})),isSpaceXDataLoading:u.a.bool},t.default=Object(l.b)((function(e){return{isSpaceXDataLoading:C(e),spaceXPrograms:L(e)}}),(function(e){return{loadSpaceXData:function(t){return e(function(e){return function(){var t=m()(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(b()),t.next=4,g(e);case 4:r=t.sent,n(E(r)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),n(w(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()}(t))}}}))(A)},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),i=(n.n(o),n(62)),s=(n.n(i),n(18),jest.fn(),null);jest.mock("react-router-dom",(function(){return{useLocation:function(){return{}}}})),jest.mock("../components/filters",(function(){return function(){return a.a.createElement("div",{id:"filter"})}})),jest.mock("../components/program-list",(function(){return function(){return a.a.createElement("div",{id:"program-list"})}})),beforeEach((function(){s=document.createElement("div"),document.body.appendChild(s)})),afterEach((function(){Object(o.unmountComponentAtNode)(s),s.remove(),s=null})),it("Should render home page",(function(){var e=document.querySelectorAll(".spx-home");expect(e.length).toBe(0)}))},35:function(){},55:function(e,t,n){e.exports=n(57)},56:function(e){function t(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(a,o){function i(e){t(c,a,o,i,s,"next",e)}function s(e){t(c,a,o,i,s,"throw",e)}var c=e.apply(n,r);i(void 0)}))}}},57:function(e){var t=function(e){"use strict";function t(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}function n(e,t,n,r){var o=t&&t.prototype instanceof a?t:a,i=Object.create(o.prototype),s=new h(r||[]);return i._invoke=u(e,n,s),i}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function a(){}function o(){}function i(){}function s(e){["next","throw","return"].forEach((function(n){t(e,n,(function(e){return this._invoke(n,e)}))}))}function c(e,t){function n(a,o,i,s){var c=r(e[a],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&v.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(l).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function u(e,t,n){var a=w;return function(o,i){if(a===O)throw new Error("Generator is already running");if(a===T){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var c=l(s,n);if(c){if(c===D)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===w)throw a=T,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=O;var u=r(e,t,n);if("normal"===u.type){if(a=n.done?T:x,u.arg===D)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=T,n.method="throw",n.arg=u.arg)}}}function l(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,l(e,t),"throw"===t.method))return D;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return D}var a=r(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,D;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,D):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,D)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function h(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function d(e){if(e){var t=e[g];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(v.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:m}}function m(){return{value:void 0,done:!0}}var y=Object.prototype,v=y.hasOwnProperty,_="function"==typeof Symbol?Symbol:{},g=_.iterator||"@@iterator",b=_.asyncIterator||"@@asyncIterator",E=_.toStringTag||"@@toStringTag";try{t({},"")}catch(e){t=function(e,t,n){return e[t]=n}}e.wrap=n;var w="suspendedStart",x="suspendedYield",O="executing",T="completed",D={},S={};S[g]=function(){return this};var C=Object.getPrototypeOf,L=C&&C(C(d([])));L&&L!==y&&v.call(L,g)&&(S=L);var A=i.prototype=a.prototype=Object.create(S);return o.prototype=A.constructor=i,i.constructor=o,o.displayName=t(i,E,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,t(e,E,"GeneratorFunction")),e.prototype=Object.create(A),e},e.awrap=function(e){return{__await:e}},s(c.prototype),c.prototype[b]=function(){return this},e.AsyncIterator=c,e.async=function(t,r,a,o,i){void 0===i&&(i=Promise);var s=new c(n(t,r,a,o),i);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},s(A),t(A,E,"Generator"),A[g]=function(){return this},A.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=d,h.prototype={constructor:h,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){function t(t,r){return o.type="throw",o.arg=e,n.next=t,r&&(n.method="next",n.arg=void 0),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;0<=r;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var i=v.call(a,"catchLoc"),s=v.call(a,"finallyLoc");if(i&&s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,t){for(var n,r=this.tryEntries.length-1;0<=r;--r)if((n=this.tryEntries[r]).tryLoc<=this.prev&&v.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,D):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),D},finish:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if((t=this.tryEntries[n]).finallyLoc===e)return this.complete(t.completion,t.afterLoc),p(t),D},catch:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if((t=this.tryEntries[n]).tryLoc===e){var r=t.completion;if("throw"===r.type){var a=r.arg;p(t)}return a}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:d(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),D}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},58:function(e,t){var n=function(e){function t(){this.fetch=!1,this.DOMException=e.DOMException}return t.prototype=e,new t}("undefined"==typeof self?this:self);(function(e){!function(t){function n(e){if("string"!=typeof e&&(e+=""),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!=typeof e&&(e+=""),e}function a(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return y.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function s(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function c(e){var t=new FileReader,n=s(t);return t.readAsArrayBuffer(e),n}function u(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:y.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:y.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():y.arrayBuffer&&y.blob&&function(e){return e&&DataView.prototype.isPrototypeOf(e)}(e)?(this._bodyArrayBuffer=u(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):y.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||_(e))?this._bodyArrayBuffer=u(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,n=s(t);return t.readAsText(e),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(e,t){var n=(t=t||{}).body;if(e instanceof f){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=e+"";if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new o(t.headers)),this.method=function(e){var t=e.toUpperCase();return-1<g.indexOf(t)?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),a=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(a))}})),t}function h(e){var t=new o;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var a=n.join(":").trim();t.append(r,a)}})),t}function d(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&300>this.status,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}function m(e,n){return new Promise((function(r,a){function o(){s.abort()}var i=new f(e,n);if(i.signal&&i.signal.aborted)return a(new t.DOMException("Aborted","AbortError"));var s=new XMLHttpRequest;s.onload=function(){var e={status:s.status,statusText:s.statusText,headers:h(s.getAllResponseHeaders()||"")};e.url="responseURL"in s?s.responseURL:e.headers.get("X-Request-URL");var t="response"in s?s.response:s.responseText;r(new d(t,e))},s.onerror=function(){a(new TypeError("Network request failed"))},s.ontimeout=function(){a(new TypeError("Network request failed"))},s.onabort=function(){a(new t.DOMException("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&y.blob&&(s.responseType="blob"),i.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),i.signal&&(i.signal.addEventListener("abort",o),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",o)}),s.send(void 0===i._bodyInit?null:i._bodyInit)}))}var y={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(y.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],_=ArrayBuffer.isView||function(e){return e&&-1<v.indexOf(Object.prototype.toString.call(e))};o.prototype.append=function(e,t){e=n(e),t=r(t);var a=this.map[e];this.map[e]=a?a+", "+t:t},o.prototype.delete=function(e){delete this.map[n(e)]},o.prototype.get=function(e){return e=n(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(n(e))},o.prototype.set=function(e,t){this.map[n(e)]=r(t)},o.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},o.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),a(e)},o.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),a(e)},o.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),a(e)},y.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this,{body:this._bodyInit})},l.call(f.prototype),l.call(d.prototype),d.prototype.clone=function(){return new d(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},d.error=function(){var e=new d(null,{status:0,statusText:""});return e.type="error",e};var b=[301,302,303,307,308];d.redirect=function(e,t){if(-1===b.indexOf(t))throw new RangeError("Invalid status code");return new d(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}m.polyfill=!0,e.fetch||(e.fetch=m,e.Headers=o,e.Request=f,e.Response=d),t.Headers=o,t.Request=f,t.Response=d,t.fetch=m}({})})(n),delete n.fetch.polyfill,(t=n.fetch).default=n.fetch,t.fetch=n.fetch,t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response,e.exports=t},59:function(){},60:function(){},61:function(){},62:function(e,t,n){"use strict";e.exports=n(63)},63:function(e,t,n){"use strict";(function(e){function t(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).effectTag)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function a(e){if(r(e)!==e)throw Error(t(188))}function o(e){var n=e.alternate;if(!n){if(null===(n=r(e)))throw Error(t(188));return n===e?e:null}for(var o,i=e,s=n;null!==(o=i.return);){var c=o.alternate;if(null===c){if(null!==(s=o.return)){i=s;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===i)return a(o),e;if(c===s)return a(o),n;c=c.sibling}throw Error(t(188))}if(i.return!==s.return)i=o,s=c;else{for(var u=!1,l=o.child;l;){if(l===i){u=!0,i=o,s=c;break}if(l===s){u=!0,s=o,i=c;break}l=l.sibling}if(!u){for(l=c.child;l;){if(l===i){u=!0,i=c,s=o;break}if(l===s){u=!0,s=c,i=o;break}l=l.sibling}if(!u)throw Error(t(189))}}if(i.alternate!==s)throw Error(t(190))}if(3!==i.tag)throw Error(t(188));return i.stateNode.current===i?e:n}function i(){return!0}function s(){return!1}function c(e,t,n,r){for(var a in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(a)&&((t=e[a])?this[a]=t(n):"target"===a?this.target=r:this[a]=n[a]);return this.isDefaultPrevented=(null==n.defaultPrevented?!1===n.returnValue:n.defaultPrevented)?i:s,this.isPropagationStopped=s,this}function u(e,t,n,r){if(this.eventPool.length){var a=this.eventPool.pop();return this.call(a,e,t,n,r),a}return new this(e,t,n,r)}function l(e){if(!(e instanceof this))throw Error(t(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function f(e){e.eventPool=[],e.getPooled=u,e.release=l}function p(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function h(e){if(D[e])return D[e];if(!T[e])return e;var t,n=T[e];for(t in n)if(n.hasOwnProperty(t)&&t in S)return D[e]=n[t];return e}function d(t){if(null===R)try{var n=("require"+Math.random()).slice(0,7);R=(e&&e[n])("timers").setImmediate}catch(e){R=function(e){var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}return R(t)}function m(){}function y(e,t){if(!e)return[];if(!(e=o(e)))return[];for(var n=e,r=[];;){if(5===n.tag||6===n.tag||1===n.tag||0===n.tag){var a=n.stateNode;t(a)&&r.push(a)}if(n.child)n.child.return=n,n=n.child;else{if(n===e)return r;for(;!n.sibling;){if(!n.return||n.return===e)return r;n=n.return}n.sibling.return=n.return,n=n.sibling}}}function v(e,n){if(e&&!e._reactInternalFiber){var r=""+e;throw e=Array.isArray(e)?"an array":e&&1===e.nodeType&&e.tagName?"a DOM node":"[object Object]"==r?"object with keys {"+Object.keys(e).join(", ")+"}":r,Error(t(286,n,e))}}function _(e){return function(n,r){if(b.isValidElement(n))throw Error(t(228));if(Q.isCompositeComponent(n))throw Error(t(229));var a=X[e],o=new m;o.target=n,o.type=e.toLowerCase();var i=new c(a,K(n),o,n);i.persist(),g(i,r),a.phasedRegistrationNames?G(i):Y(i),E.unstable_batchedUpdates((function(){V(n),$(i)})),z()}}
/** @license React v16.13.1
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g=n(24),b=n(0),E=n(11),w=n(36),x=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;x.hasOwnProperty("ReactCurrentDispatcher")||(x.ReactCurrentDispatcher={current:null}),x.hasOwnProperty("ReactCurrentBatchConfig")||(x.ReactCurrentBatchConfig={suspense:null}),g(c.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=i)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=i)},persist:function(){this.isPersistent=i},isPersistent:s,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=s,this._dispatchInstances=this._dispatchListeners=null}}),c.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},c.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var a=new t;return g(a,n.prototype),n.prototype=a,n.prototype.constructor=n,n.Interface=g({},r.Interface,e),n.extend=r.extend,f(n),n},f(c);var O="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,T={animationend:p("Animation","AnimationEnd"),animationiteration:p("Animation","AnimationIteration"),animationstart:p("Animation","AnimationStart"),transitionend:p("Transition","TransitionEnd")},D={},S={};O&&(S=document.createElement("div").style,"AnimationEvent"in window||(delete T.animationend.animation,delete T.animationiteration.animation,delete T.animationstart.animation),"TransitionEvent"in window||delete T.transitionend.transition);var C=h("animationend"),L=h("animationiteration"),A=h("animationstart"),P=h("transitionend"),R=null,N=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,k=N[11],I=N[12],j=E.unstable_batchedUpdates,B=x.IsSomeRendererActing,M="function"==typeof w.unstable_flushAllWithoutAsserting,U=w.unstable_flushAllWithoutAsserting||function(){for(var e=!1;k();)e=!0;return e},q=0,H=!1,F=E.findDOMNode,W=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,K=W[0],X=W[4],G=W[5],Y=W[6],V=W[7],z=W[8],J=W[9],$=W[10],Q={renderIntoDocument:function(e){var t=document.createElement("div");return E.render(e,t)},isElement:function(e){return b.isValidElement(e)},isElementOfType:function(e,t){return b.isValidElement(e)&&e.type===t},isDOMComponent:function(e){return e&&1===e.nodeType&&e.tagName},isDOMComponentElement:function(e){return!!(e&&b.isValidElement(e)&&e.tagName)},isCompositeComponent:function(e){return!Q.isDOMComponent(e)&&null!=e&&"function"==typeof e.render&&"function"==typeof e.setState},isCompositeComponentWithType:function(e,t){return!!Q.isCompositeComponent(e)&&e._reactInternalFiber.type===t},findAllInRenderedTree:function(e,t){return v(e,"findAllInRenderedTree"),e?y(e._reactInternalFiber,t):[]},scryRenderedDOMComponentsWithClass:function(e,n){return v(e,"scryRenderedDOMComponentsWithClass"),Q.findAllInRenderedTree(e,(function(e){if(Q.isDOMComponent(e)){var r=e.className;"string"!=typeof r&&(r=e.getAttribute("class")||"");var a=r.split(/\s+/);if(!Array.isArray(n)){if(void 0===n)throw Error(t(11));n=n.split(/\s+/)}return n.every((function(e){return-1!==a.indexOf(e)}))}return!1}))},findRenderedDOMComponentWithClass:function(e,t){if(v(e,"findRenderedDOMComponentWithClass"),1!==(e=Q.scryRenderedDOMComponentsWithClass(e,t)).length)throw Error("Did not find exactly one match (found: "+e.length+") for class:"+t);return e[0]},scryRenderedDOMComponentsWithTag:function(e,t){return v(e,"scryRenderedDOMComponentsWithTag"),Q.findAllInRenderedTree(e,(function(e){return Q.isDOMComponent(e)&&e.tagName.toUpperCase()===t.toUpperCase()}))},findRenderedDOMComponentWithTag:function(e,t){if(v(e,"findRenderedDOMComponentWithTag"),1!==(e=Q.scryRenderedDOMComponentsWithTag(e,t)).length)throw Error("Did not find exactly one match (found: "+e.length+") for tag:"+t);return e[0]},scryRenderedComponentsWithType:function(e,t){return v(e,"scryRenderedComponentsWithType"),Q.findAllInRenderedTree(e,(function(e){return Q.isCompositeComponentWithType(e,t)}))},findRenderedComponentWithType:function(e,t){if(v(e,"findRenderedComponentWithType"),1!==(e=Q.scryRenderedComponentsWithType(e,t)).length)throw Error("Did not find exactly one match (found: "+e.length+") for componentType:"+t);return e[0]},mockComponent:function(e,t){return t=t||e.mockTagName||"div",e.prototype.render.mockImplementation((function(){return b.createElement(t,null,this.props.children)})),this},nativeTouchData:function(e,t){return{touches:[{pageX:e,pageY:t}]}},Simulate:null,SimulateNative:{},act:function(e){function t(){q--,B.current=n,I.current=r}0==H&&(H=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),q++;var n=B.current,r=I.current;B.current=!0,I.current=!0;try{var a=j(e)}catch(e){throw t(),e}if(null!==a&&"object"==typeof a&&"function"==typeof a.then)return{then:function(e,r){a.then((function(){1<q||!0===M&&!0===n?(t(),e()):function e(t){try{U(),d((function(){U()?e(t):t()}))}catch(e){t(e)}}((function(n){t(),n?r(n):e()}))}),(function(e){t(),r(e)}))}};try{1!==q||!1!==M&&!1!==n||U(),t()}catch(e){throw t(),e}return{then:function(e){e()}}}};for(var Z in Q.Simulate={},X)Q.Simulate[Z]=_(Z);[["abort","abort"],[C,"animationEnd"],[L,"animationIteration"],[A,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[P,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach((function(e){var t=e[1];Q.SimulateNative[t]=function(e,t){return function(n,r){var a=new m(e);g(a,r),Q.isDOMComponent(n)?(n=F(n),a.target=n,J(t,1,document,a)):n.tagName&&(a.target=n,J(t,1,document,a))}}(t,e[0])})),e.exports=Q.default||Q}).call(this,n(25)(e))}}]);