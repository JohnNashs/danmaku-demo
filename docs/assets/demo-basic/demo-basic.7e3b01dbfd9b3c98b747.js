!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../assets/",n(n.s=14)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultDanmakuData=t.DEFAULT_RENDER_INTERVAL=t.DEFAULT_TRACK_SIZE=t.SPEED_ARG=void 0;t.SPEED_ARG=.0058;t.DEFAULT_TRACK_SIZE=12;t.DEFAULT_RENDER_INTERVAL=150;t.defaultDanmakuData={msg:"",fontSize:24,fontColor:"#ffffff",fontMode:"roll",fontArea:"full",fontAreaPercent:.25,rollTime:0,rolledDistance:0,top:0}},function(e,t,n){"use strict";var r=n(3),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"body {\n  margin: 0;\n}\n.container {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  overflow: hidden;\n  background: #000;\n}\n",""]),t.a=i},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],u=t.base?o[0]+t.base:o[0],l=n[u]||0,c="".concat(u," ").concat(l);n[u]=l+1;var d=s(c),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:c,updater:y(f,t),references:1}),r.push(c)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,p=0;function y(e,t){var n,r,i;if(t.singleton){var o=p++;n=v||(v=l(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=l(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=u(e,t),l=0;l<n.length;l++){var c=s(n[l]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),o=n(1),a={insert:"head",singleton:!1};i()(o.a,a);t.default=o.a.locals||{}},function(e,t,n){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.visibilityChangeEvent=t.hiddenProp=t.getTranslateX=void 0,t.getTranslateX=n;var r,i,o=e.WebKitCSSMatrix||e.DOMMatrix||e.MSCSSMatrix;e.getComputedStyle&&o?t.getTranslateX=n=function(t){var n=e.getComputedStyle(t,null).getPropertyValue("transform");return Number(new o(n).m41)}:t.getTranslateX=n=function(t){var n=e.getComputedStyle(t,null).getPropertyValue("transform");return Number(n.match(/[+-]?\d+/g)[4])},t.visibilityChangeEvent=i,t.hiddenProp=r,void 0!==document.hidden?(t.hiddenProp=r="hidden",t.visibilityChangeEvent=i="visibilitychange"):void 0!==document.msHidden?(t.hiddenProp=r="msHidden",t.visibilityChangeEvent=i="msvisibilitychange"):void 0!==document.webkitHidden&&(t.hiddenProp=r="webkitHidden",t.visibilityChangeEvent=i="webkitvisibilitychange")}).call(this,n(7))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),i=n(5);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=t.container,this._totalWidth=null,this._totalHeight=null,this._trackSize=t.trackSize||r.DEFAULT_TRACK_SIZE,this._renderInterval=parseInt(t.renderInterval)||r.DEFAULT_RENDER_INTERVAL,this._renderTimer=null,this._queue=[],this._tracks=null,this._autoId=0,this.resize(),this._resetTracks()}var t,n,a;return t=e,(n=[{key:"resize",value:function(){this._totalWidth=this._container.offsetWidth,this._totalHeight=this._container.offsetHeight,this.clearScreen()}},{key:"clearScreen",value:function(){this._clearDanmakuNodes(),this._resetTracks()}},{key:"_resetTracks",value:function(){var e=Math.floor(this._totalHeight/this._trackSize);this._tracks=new Array(e);for(var t=0;t<e;t++)this._tracks[t]=[]}},{key:"_eachDanmakuNode",value:function(e){for(var t,n,r=this._container.firstChild;r;)1===r.nodeType&&(n=r.getAttribute("data-y"),t=r.getAttribute("data-id"),n&&t&&e(r,Number(n),Number(t))),r=r.nextSibling}},{key:"_clearDanmakuNodes",value:function(){var e=this,t=[];this._eachDanmakuNode((function(e){t.push(e)})),t.forEach((function(t){e._container.removeChild(t)}))}},{key:"_parseData",value:function(e){return Object.assign({autoId:++this._autoId},r.defaultDanmakuData,e)}},{key:"add",value:function(e){this._queue.push(this._parseData(e)),this._renderTimer||this._render()}},{key:"_addToTrack",value:function(e){for(var t,n,r,o=this,a=[],s=0;s<this._tracks.length;s++)if((t=this._tracks[s]).length?(n=t[t.length-1],(r=-(0,i.getTranslateX)(n.node))>n.width&&(e.rollSpeed<=n.rollSpeed||(r-n.width)/(e.rollSpeed-n.rollSpeed)>(this._totalWidth+n.width-r)/n.rollSpeed)?a.push(s):a=[]):a.push(s),a.length>=e.useTracks){e.y=a,a.forEach((function(t){o._tracks[t].push(e)}));break}}},{key:"_removeFromTrack",value:function(e,t){var n=this;e.forEach((function(e){for(var r=n._tracks[e],i=0;i<r.length;i++)if(r[i].autoId===t){r.splice(i,1);break}}))}},{key:"_findData",value:function(e,t){for(var n=this._tracks[e],r=0;r<n.length;r++)if(n[r].autoId===t)return n[r]}},{key:"_render",value:function(){try{this._renderToDOM()}finally{this._renderEnd()}}},{key:"_renderToDOM",value:function(){var e=this,t=this._queue[0],n=t.node;if(!n){if(t.node=n=document.createElement("div"),n.innerText=t.msg,n.style.position="absolute",n.style.left="100%",n.style.whiteSpace="nowrap",n.style.color=t.fontColor,n.style.fontSize=t.fontSize+"px",n.style.willChange="transform",this._container.appendChild(n),t.useTracks=Math.ceil(n.offsetHeight/this._trackSize),t.useTracks>this._tracks.length)return this._queue.shift(),void this._container.removeChild(n);t.width=n.offsetWidth,t.totalDistance=t.width+this._totalWidth,t.rollTime=t.rollTime||Math.floor(t.totalDistance*r.SPEED_ARG*(.3*Math.random()+.7)),t.rollSpeed=t.totalDistance/t.rollTime}this._addToTrack(t),t.y&&(this._queue.shift(),n.setAttribute("data-id",t.autoId),n.setAttribute("data-y",t.y[0]),n.style.top=t.y[0]*this._trackSize+"px",n.style.transition="transform ".concat(t.rollTime,"s linear"),n.style.transform="translateX(-".concat(t.totalDistance,"px)"),n.addEventListener("transitionend",(function(){e._removeFromTrack(t.y,t.autoId),e._container.removeChild(n)}),!1))}},{key:"_renderEnd",value:function(){var e=this;this._queue.length>0?this._renderTimer=setTimeout((function(){e._render()}),this._renderInterval):this._renderTimer=null}}])&&o(t.prototype,n),a&&o(t,a),e}();t.default=a},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(i=window)}e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=0;n<500;n++)e.add({msg:r[parseInt(Math.random()*r.length)],fontSize:Math.floor(20*Math.random())+20});var i=t.offsetWidth,o=t.offsetHeight;window.addEventListener("resize",(function(){t.offsetWidth===i&&t.offsetHeight===o||(e.resize(),i=t.offsetWidth,o=t.offsetHeight)}),!1)},n(4),Object.assign=Object.assign||function(e){if(null==e)throw new Error("target cannot be null");for(var t,n,r=0,i=arguments.length;++r<i;)if(null!=(n=arguments[r]))for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e};var r=["坚决同时打赢疫情防控和经济社会发展“两大战役”","国际社会高度评价中国为全球抗疫作出贡献","五粮液斥资25亿跨界造车，车标似酒杯售价不超8万","蔚来中国项目完成注资，今年已累计完成超百亿融资","老iPhone降速 苹果同意赔偿美国用户最多5亿美元",'四门轿跑设计 比亚迪旗舰车"汉"车长近5米',"虎牙创始人古丰加盟，百度直播跃进","印度宣布禁用59款中国应用，包括TikTok和微信","特斯拉德国厂三月底动工 马斯克将出席奠基仪式","特斯拉车主反映，中国本土制造生产的特斯拉Model3采用的控制器硬件代码与实际的环保信息随车清单不一致",'特斯拉电池缺陷被曝隐瞒8年!品控问题"埋下"隐患',"一颗小行星预计5月初飞掠地球 735万千米外与地球交会","比特币挖矿耗电惊人：每年耗电量等于智利全国耗电量","广州又出台新政刺激车市复苏，新能源车可获1万元补贴","《哥斯拉大战金刚》试映会好评不断！","《神奇女侠1984》编剧确认：《神奇女侠3》故事线将设定于现代","教育部：全国义务教育阶段辍学人数下降近99%","哈哈哈哈哈","呵呵呵","嘻嘻"]},,,,,function(e,t,n){"use strict";var r=n(3),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"html, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  background: #aaa;\n}\n.container {\n  overflow: visible;\n}\n.outer {\n  width: 70%;\n  margin: 0 auto;\n}\n",""]),t.a=i},function(e,t,n){"use strict";var r=o(n(6)),i=o(n(8));function o(e){return e&&e.__esModule?e:{default:e}}n(15);var a=document.getElementById("container"),s=new r.default({container:a});(0,i.default)(s,a)},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),o=n(13),a={insert:"head",singleton:!1};i()(o.a,a);t.default=o.a.locals||{}}]);