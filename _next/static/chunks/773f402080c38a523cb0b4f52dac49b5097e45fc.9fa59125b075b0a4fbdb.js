(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var n,i=r("q1tI");var s=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),a=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return s.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=a},"8oxB":function(e,t){var r,n,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,f=[],l=!1,u=-1;function d(){l&&c&&(l=!1,c.length?f=c.concat(f):u=-1,f.length&&h())}function h(){if(!l){var e=o(d);l=!0;for(var t=f.length;t;){for(c=f,f=[];++u<t;)c&&c[u].run();u=-1,t=f.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new p(e,t)),1!==f.length||l||o(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},MX0m:function(e,t,r){e.exports=r("3niX")},OoXJ:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("MX0m"),i=r.n(n),s=r("q1tI"),a=r.n(s),o=r("YFqc"),c=r.n(o),f=a.a.createElement,l="#1d2b35";function u(e){return f("div",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])+" tags"},f(c.a,{href:"/tags/machine-learning"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#machine-learning")),f(c.a,{href:"/tags/deep-learning"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#deep-learning")),f(c.a,{href:"/tags/computer-vision"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#computer-vision")),f(c.a,{href:"/tags/natural-language-processing"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#natural-language-processing")),f(c.a,{href:"/tags/data-science"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#data-science")),f(c.a,{href:"/tags/pytorch"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#pytorch")),f(c.a,{href:"/tags/keras"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#keras")),f(c.a,{href:"/tags/tensorflow"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#tensorflow")),f(c.a,{href:"/tags/opencv"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#opencv")),f(c.a,{href:"/tags/react"},f("a",{className:i.a.dynamic([["1437225962",["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]]])},"#react")),f(i.a,{id:"1437225962",dynamic:["#fffecb","#071013",l,"#fb232e","#20a4f3","#fffecb","#fffecb","#fb232e"]},[".tags.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:1vw 5vw 1vw 5vw;background-color:".concat("#fffecb",";border-bottom:5px solid ").concat("#071013",";}"),".tags.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-family:'Share Tech Mono',monospace;color:".concat(l,";margin:0 1em 0 1em;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed ").concat("#fb232e",";}"),".tags.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{background:".concat("#20a4f3",";color:").concat("#fffecb",";border-bottom:1px dashed ").concat("#fffecb",";}"),".tags.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:active{background:".concat("#fb232e",";}")]))}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=s(r("9kyW")),i=s(r("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,a=void 0!==s&&s,o=t.isBrowser,c=void 0===o?"undefined"!==typeof window:o;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),n&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),s=t+i;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var s=this.computeId(i,n);return{styleId:s,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},YFqc:function(e,t,r){e.exports=r("cTJO")},b0oO:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("MX0m"),i=r.n(n),s=r("q1tI"),a=r.n(s),o=r("YFqc"),c=r.n(o),f=r("OoXJ"),l=a.a.createElement,u="#071013";function d(e){var t=Object(s.useState)("none"),r=t[0],n=t[1];return l("div",{className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])+" header"},l("div",{className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])+" header-container"},l("div",{className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])+" header-left"},l(c.a,{href:"/"},l("img",{src:"/images/santha lakshmi narayana logo.png",alt:"Logo",className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])})),l(c.a,{href:"/"},l("a",{id:"name",className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])},l("b",{className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])},"Santha Lakshmi Narayana")))),l("div",{className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])+" header-right"},l(c.a,{href:"/about"},l("a",{className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])},"About")),l("a",{href:"#",onClick:function(e){e.preventDefault(),n("none"==r?"block":"none")},className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])},"Tags"),l(c.a,{href:"/"},l("a",{className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])},"Home")))),l("div",{style:{display:r},className:i.a.dynamic([["1151275696",[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]]])},l(f.a,null)),l(i.a,{id:"1151275696",dynamic:[u,"#ffaa33","#20a4f3","#fb232e","#ffaa33","#20a4f3","#fb232e"]},[".header-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:10px 5vw 10px 5vw;background:".concat(u,";}"),".header-left.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".header-left.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-family:'Source Sans Pro',sans-serif;-webkit-text-decoration:none;text-decoration:none;color:".concat("#ffaa33",";}"),"img.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;width:calc(1.2rem + 1vw);max-width:calc(1.2rem + 1vw);height:auto;margin:0 5px 0 5px;}","img.__jsx-style-dynamic-selector:hover{cursor:pointer;}",".header-left.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:".concat("#20a4f3",";}"),".header-left.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:active{color:".concat("#fb232e",";}"),".header-right.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:3;-ms-flex:3;flex:3;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".header-right.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{padding:0 1vw 0 1vw;font-family:'Source Sans Pro',sans-serif;-webkit-text-decoration:none;text-decoration:none;color:".concat("#ffaa33",";}"),".header-right.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:".concat("#20a4f3",";}"),".header-right.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:active{color:".concat("#fb232e",";}"),"@media screen and (max-width:920px){.header-container.__jsx-style-dynamic-selector{padding:10px 2vw 10px 2vw;overflow-x:scroll;}#name.__jsx-style-dynamic-selector{display:none;}img.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}","@media screen and (max-width:480px){.header-container.__jsx-style-dynamic-selector{padding:10px 2vw 10px 2vw;overflow-x:scroll;}}","@media screen and (max-width:300px){img.__jsx-style-dynamic-selector{display:none;}}"]))}},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,o=t.optimizeForSpeed,c=void 0===o?n:o,f=t.isBrowser,l=void 0===f?"undefined"!==typeof window:f;a(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",a("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var u=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=u?u.getAttribute("content"):null}var t,s,o,c=e.prototype;return c.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(a(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(o){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];a(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&a(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),o&&r(t,o),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("8oxB"))},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),i=r("284h");t.__esModule=!0,t.default=void 0;var s,a=i(r("q1tI")),o=r("elyg"),c=r("nOHt"),f=new Map,l=window.IntersectionObserver,u={};var d=function(e,t){var r=s||(l?s=new l((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),f.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function h(e,t,r,n){(0,o.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),u[t+"%"+r]=!0)}var p=function(e){var t=!1!==e.prefetch,r=a.default.useState(),i=n(r,2),s=i[0],f=i[1],p=(0,c.useRouter)(),m=p&&p.pathname||"/",y=a.default.useMemo((function(){var t=(0,o.resolveHref)(m,e.href);return{href:t,as:e.as?(0,o.resolveHref)(m,e.as):t}}),[m,e.href,e.as]),_=y.href,b=y.as;a.default.useEffect((function(){if(t&&l&&s&&s.tagName&&(0,o.isLocalURL)(_)&&!u[_+"%"+b])return d(s,(function(){h(p,_,b)}))}),[t,s,_,b,p]);var v=e.children,g=e.replace,x=e.shallow,w=e.scroll;"string"===typeof v&&(v=a.default.createElement("a",null,v));var S=a.Children.only(v),k={ref:function(e){e&&f(e),S&&"object"===typeof S&&S.ref&&("function"===typeof S.ref?S.ref(e):"object"===typeof S.ref&&(S.ref.current=e))},onClick:function(e){S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,s,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),t[i?"replace":"push"](r,n,{shallow:s}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,_,b,g,x,w)}};return t&&(k.onMouseEnter=function(e){(0,o.isLocalURL)(_)&&(S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),h(p,_,b,{priority:!0}))}),(e.passHref||"a"===S.type&&!("href"in S.props))&&(k.href=(0,o.addBasePath)(b)),a.default.cloneElement(S,k)};t.default=p}}]);