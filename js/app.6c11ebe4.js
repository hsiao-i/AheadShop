(function(){"use strict";var e={4902:function(e,n,t){var o=t(9391);const r=(0,o.Z)();n["Z"]=r},3360:function(e,n,t){var o=t(9963),r=t(6252);function i(e,n){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t)}var a=t(3744);const c={},s=(0,a.Z)(c,[["render",i]]);var u=s,d=(t(7244),t(9669)),l=t.n(d),f=t(2346),p=t(5205);(0,p.z)("/AheadShop/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var h=t(2119);const m=[{path:"/",component:()=>Promise.all([t.e(798),t.e(31),t.e(942)]).then(t.bind(t,5521)),children:[{path:"",name:"",component:()=>Promise.all([t.e(181),t.e(424)]).then(t.bind(t,4424))},{path:"products",name:"products",component:()=>t.e(449).then(t.bind(t,9449))},{path:"product/:id",name:"product",component:()=>Promise.all([t.e(181),t.e(840)]).then(t.bind(t,2840))},{path:"cart",name:"cart",component:()=>t.e(121).then(t.bind(t,121))},{path:"order/:id",name:"order",component:()=>t.e(168).then(t.bind(t,168))},{path:"complete",name:"complete",component:()=>t.e(399).then(t.bind(t,6399))},{path:"favorite",name:"favorite",component:()=>t.e(922).then(t.bind(t,4922))},{path:"about",name:"about",component:()=>t.e(960).then(t.bind(t,3960))}]},{path:"/login",component:()=>Promise.all([t.e(798),t.e(31),t.e(44)]).then(t.bind(t,9007))},{path:"/admin",component:()=>t.e(433).then(t.bind(t,8433)),children:[{path:"products",component:()=>Promise.all([t.e(798),t.e(703),t.e(804)]).then(t.bind(t,2804))},{path:"coupon",component:()=>Promise.all([t.e(798),t.e(703),t.e(651)]).then(t.bind(t,7651))},{path:"order",component:()=>Promise.all([t.e(798),t.e(703),t.e(150)]).then(t.bind(t,1150))}]},{path:"/:pathMatch(.*)*",redirect:"/"}],b=(0,h.p7)({history:(0,h.r5)(),routes:m,linkActiveClass:"active"});var g=b,v=t(7398),y=t.n(v);function w(e){const n=new Date(1e3*e).toLocaleDateString();return n}function k(e){const n=/(\d)(?=(?:\d{3})+$)/g;return(e+"").replace(n,"$1,")}function O(e){const n=e.split("");return n}var P=t(4902);function S(e,n="更新"){if(e.data.success)P.Z.emit("get-message",{state:"success",title:`${n}成功`});else{const t="string"===typeof e.data.message?[e.data.message]:e.data.message;P.Z.emit("get-message",{state:"danger",title:`${n}失敗`,content:t.join("、")})}}var j=t(2954),A=t(2387),E=t(6391),C=t(2389),T=t(3982),N=t.n(T),x=t(8630),_=t.n(x);new(_())({live:!0,offset:4}).init(),Object.keys(A.ZP).forEach((e=>{(0,j.aH)(e,A.ZP[e])})),(0,j.jQ)({generateMessage:(0,E.NC)({zh_TW:C}),validateOnInput:!0}),(0,E.i_)("zh_TW"),g.afterEach(((e,n,t)=>{window.scrollTo(0,0)}));const F=(0,o.ri)(u);F.config.globalProperties.$filters={date:w,toThousandths:k},F.config.globalProperties.$messageState=S,F.config.globalProperties.$descriptionSplit=O,F.use(g),F.use(f.Z,l()),F.use(N()),F.component(w),F.component("LoadingOverlay",y()),F.component("VForm",j.l0),F.component("VField",j.gN),F.component("ErrorMessage",j.Bc),F.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{31:"f9bb0e45",44:"bc890263",121:"55008006",150:"9835acbd",168:"6ec20f1b",181:"62bf96eb",399:"c181197c",424:"79423253",433:"2ade2ae0",449:"749d3ca4",651:"206c5922",703:"73fe9be0",798:"e316d8cb",804:"209ae993",840:"1b457b88",922:"40b02d08",942:"7e3b93c4",960:"9ed55e62"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{44:"295f831d",121:"9b19a56d",168:"2ee4586b",399:"9d51e37d",424:"ac517cc8",449:"dcb7266f",840:"8840ed80",922:"05676f1e",942:"59531aa1",960:"145b4088"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="AheadShop:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+i){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var f=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/AheadShop/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=i,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),c=t.p+a;if(n(a,c))return r();e(o,c,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={44:1,121:1,168:1,399:1,424:1,449:1,840:1,922:1,942:1,960:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),c=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};t.l(a,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],s=o[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(s)var d=s(t)}for(n&&n(o);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},o=self["webpackChunkAheadShop"]=self["webpackChunkAheadShop"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3360)}));o=t.O(o)})();
//# sourceMappingURL=app.6c11ebe4.js.map