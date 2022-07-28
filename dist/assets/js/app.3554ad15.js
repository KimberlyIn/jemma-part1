(function(){"use strict";var n={2683:function(n,e,t){var r=t(9963),o=(t(7244),t(9669)),i=t.n(o),u=t(2346),a=t(682),c=t.n(a),f=t(5476),s=t(2954),d=t(2387),l=t(6391),p=t(2389),m=t(6252);function h(n,e){const t=(0,m.up)("router-view");return(0,m.wg)(),(0,m.j4)(t)}var b=t(3744);const v={},g=(0,b.Z)(v,[["render",h]]);var y=g,j=t(2201);const O=[{path:"/",component:()=>t.e(150).then(t.bind(t,5150)),children:[{path:"",name:"home",component:()=>t.e(120).then(t.bind(t,8790))},{path:"about",name:"about",component:()=>t.e(278).then(t.bind(t,8338))},{path:"theno9",name:"theno9",component:()=>t.e(140).then(t.bind(t,1039))}]}],w=(0,j.p7)({history:(0,j.r5)(),routes:O});var k=w;Object.keys(d.ZP).forEach((n=>{(0,s.aH)(n,d.ZP[n])})),(0,s.jQ)({generateMessage:(0,l.NC)({zh_TW:p}),validateOnInput:!0}),(0,l.i_)("zh_TW"),(0,r.ri)(y).use(k).use(u.Z,i()).use(c()).component("Loading",f.Z).component("Form",s.l0).component("Field",s.gN).component("ErrorMessage",s.Bc).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return n[r](i,i.exports,t),i.loaded=!0,i.exports}t.m=n,function(){t.amdO={}}(),function(){var n=[];t.O=function(e,r,o,i){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],i=n[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(s--,1);var f=o();void 0!==f&&(e=f)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[r,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"assets/js/"+n+"."+{120:"d8cfda00",140:"ebfd5c56",150:"a4702362",278:"9b66bc8d"}[n]+".js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(n){return n=Object.create(n),n.children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n}}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="jemmaliu:";t.l=function(r,o,i,u){if(n[r])n[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var d=f[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+i),a.src=r),n[r]=[o];var l=function(e,t){a.onerror=a.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(e),a=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(e&&e(r);f<u.length;f++)i=u[f],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},r=self["webpackChunkjemmaliu"]=self["webpackChunkjemmaliu"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2683)}));r=t.O(r)})();
//# sourceMappingURL=app.3554ad15.js.map