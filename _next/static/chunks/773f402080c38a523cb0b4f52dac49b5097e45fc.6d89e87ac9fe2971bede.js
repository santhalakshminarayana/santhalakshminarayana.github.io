(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.default=o,t.flush=function(){var e=s.cssRules();return s.flush(),e};var n,i=r("q1tI");var s=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default);function o(e){return"undefined"===typeof window?(s.add(e),null):((0,i.useLayoutEffect)((function(){return s.add(e),function(){s.remove(e)}}),[e.id,String(e.dynamic)]),null)}o.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return s.computeId(t,r)})).join(" ")}},"8oxB":function(e,t){var r,n,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=a(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||u||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=s(r("9kyW")),i=s(r("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),s=t+i;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var s=this.computeId(i,n);return{styleId:s,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},YFqc:function(e,t,r){e.exports=r("cTJO")},b0oO:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("MX0m"),i=r.n(n),s=r("q1tI"),o=r("YFqc"),a=r.n(o),c=r("nKUr"),l=["ai","python","go","image-processing","opencv","concurrency","python-performance","color-science","react","next-js","flutter"];function u(e){return Object(c.jsxs)("div",{className:"jsx-3242260268 tags",children:[l.map((function(e){return Object(c.jsx)(a.a,{href:"/tags/".concat(e),children:Object(c.jsx)("a",{className:"jsx-3242260268",children:"#".concat(e)})})})),Object(c.jsx)(i.a,{id:"3242260268",children:[".tags.jsx-3242260268{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1vw 5vw 1vw 5vw;background-color:".concat("#fffecb",";border-bottom:5px solid ").concat("#071013",";}"),'.tags.jsx-3242260268 a.jsx-3242260268{font-family:"Share Tech Mono",monospace;color:'.concat("#1d2b35",";margin:0 1em 0 1em;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed ").concat("#fb232e",";}"),".tags.jsx-3242260268 a.jsx-3242260268:hover{background:".concat("#20a4f3",";color:").concat("#fffecb",";border-bottom:1px dashed ").concat("#fffecb",";}"),".tags.jsx-3242260268 a.jsx-3242260268:active{background:".concat("#fb232e",";}")]})]})}function d(e){var t=Object(s.useState)("none"),r=t[0],n=t[1];return Object(c.jsxs)("div",{className:"jsx-90057834 header",children:[Object(c.jsxs)("div",{className:"jsx-90057834 header-container",children:[Object(c.jsxs)("div",{className:"jsx-90057834 header-left",children:[Object(c.jsx)(a.a,{href:"/",children:Object(c.jsx)("img",{src:"/images/santha-lakshmi-narayana-logo.png",alt:"Logo",className:"jsx-90057834"})}),Object(c.jsx)(a.a,{href:"/",children:Object(c.jsx)("a",{id:"name",className:"jsx-90057834",children:Object(c.jsx)("b",{className:"jsx-90057834",children:"Santha Lakshmi Narayana"})})})]}),Object(c.jsxs)("div",{className:"jsx-90057834 header-right",children:[Object(c.jsx)(a.a,{href:"/about",children:Object(c.jsx)("a",{className:"jsx-90057834",children:"About"})}),Object(c.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),n("none"==r?"block":"none")},className:"jsx-90057834",children:"Tags"}),Object(c.jsx)(a.a,{href:"/",children:Object(c.jsx)("a",{className:"jsx-90057834",children:"Home"})})]})]}),Object(c.jsx)("div",{style:{display:r},className:"jsx-90057834",children:Object(c.jsx)(u,{})}),Object(c.jsx)(i.a,{id:"90057834",children:[".header-container.jsx-90057834{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:10px 5vw 10px 5vw;background:".concat("#1d2b35",";}"),".header-left.jsx-90057834{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",'.header-left.jsx-90057834 a.jsx-90057834{font-family:"Source Sans Pro",sans-serif;-webkit-text-decoration:none;text-decoration:none;color:'.concat("#ffaa33",";}"),"img.jsx-90057834{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:calc(1.2rem + 1vw);max-width:calc(1.2rem + 1vw);height:auto;margin:0 5px 0 5px;}","img.jsx-90057834:hover{cursor:pointer;}",".header-left.jsx-90057834 a.jsx-90057834:hover{color:".concat("#20a4f3",";}"),".header-left.jsx-90057834 a.jsx-90057834:active{color:".concat("#fb232e",";}"),".header-right.jsx-90057834{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:3;-ms-flex:3;flex:3;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",'.header-right.jsx-90057834 a.jsx-90057834{padding:0 1vw 0 1vw;font-family:"Source Sans Pro",sans-serif;-webkit-text-decoration:none;text-decoration:none;color:'.concat("#ffaa33",";}"),".header-right.jsx-90057834 a.jsx-90057834:hover{color:".concat("#20a4f3",";}"),".header-right.jsx-90057834 a.jsx-90057834:active{color:".concat("#fb232e",";}"),"@media screen and (max-width:920px){.header-container.jsx-90057834{padding:10px 2vw 10px 2vw;}#name.jsx-90057834{display:none;}img.jsx-90057834{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}","@media screen and (max-width:480px){.header-container.jsx-90057834{padding:10px 2vw 10px 2vw;overflow-x:scroll;}}","@media screen and (max-width:300px){img.jsx-90057834{display:none;}}"]})]})}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,c=void 0===a?n:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),a&&r(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("8oxB"))},cTJO:function(e,t,r){"use strict";var n=r("J4zp");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s=(i=r("q1tI"))&&i.__esModule?i:{default:i},o=r("Sgtc"),a=r("nOHt"),c=r("vNVm");var l={};function u(e,t,r,n){if(e&&o.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(i?"%"+i:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,i=a.useRouter(),d=s.default.useMemo((function(){var t=o.resolveHref(i,e.href,!0),r=n(t,2),s=r[0],a=r[1];return{href:s,as:e.as?o.resolveHref(i,e.as):a||s}}),[i,e.href,e.as]),f=d.href,h=d.as,p=e.children,m=e.replace,v=e.shallow,x=e.scroll,y=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var b=(t=s.default.Children.only(p))&&"object"===typeof t&&t.ref,_=c.useIntersection({rootMargin:"200px"}),g=n(_,2),w=g[0],j=g[1],S=s.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);s.default.useEffect((function(){var e=j&&r&&o.isLocalURL(f),t="undefined"!==typeof y?y:i&&i.locale,n=l[f+"%"+h+(t?"%"+t:"")];e&&!n&&u(i,f,h,{locale:t})}),[h,f,j,y,r,i]);var k={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,s,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[i?"replace":"push"](r,n,{shallow:s,locale:c,scroll:a}))}(e,i,f,h,m,v,x,y)},onMouseEnter:function(e){o.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof y?y:i&&i.locale,O=i&&i.isLocaleDomain&&o.getDomainLocale(h,R,i&&i.locales,i&&i.domainLocales);k.href=O||o.addBasePath(o.addLocale(h,R,i&&i.defaultLocale))}return s.default.cloneElement(t,k)};t.default=d},g4pe:function(e,t,r){e.exports=r("mLbm")},vNVm:function(e,t,r){"use strict";var n=r("J4zp");Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,c=i.useRef(),l=i.useState(!1),u=n(l,2),d=u[0],f=u[1],h=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||d||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=a.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return a.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,s=n.observer,o=n.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),a.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,d]);return i.useEffect((function(){if(!o&&!d){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),[h,d]};var i=r("q1tI"),s=r("0G5g"),o="undefined"!==typeof IntersectionObserver;var a=new Map}}]);