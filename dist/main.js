"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[179],{424:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),a=e.n(t),o=e(645),i=e.n(o)()(a());i.push([n.id,"body {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#nav-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color:black;\r\n  position: fix;\r\n}\r\n\r\n#logo {\r\n  padding-right: 3rem;\r\n  background-repeat: no-repeat;\r\n  height: 50px;\r\n  width: 110px;\r\n}\r\n\r\n.search {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  \r\n}\r\n.search input {\r\n  border-radius: 2rem 0 0 2rem;\r\n  width:400px;\r\n  height: 30px;\r\n}\r\n\r\ninput::placeholder {\r\n  text-align:center;\r\n}\r\n\r\n.search-btn .fa {\r\n  padding: 15px;\r\n  background-color: aqua;\r\n}\r\n\r\n \r\n.nav-lists {\r\n  display: flex;\r\n  gap: 80px;\r\n  list-style: none;\r\n}\r\n\r\n.nav-lists:last-child {\r\n  margin-right: 20px;\r\n\r\n}\r\n\r\n.nav-item {\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-item:hover {\r\n  text-decoration: underline;\r\n  font-weight: bold;\r\n \r\n}\r\n\r\n.footer {\r\n  padding: 2rem;\r\n  background-color:#000;\r\n  color: aliceblue;\r\n  border:1px solid black;\r\n  font-weight: 800;\r\n  text-align: center;\r\n  font-size: 40px;\r\n\r\n\r\n}",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);t&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),r.push(u))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var d=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var h=a(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=e(o[i]);r[c].references--}for(var s=t(n,a),l=0;l<o.length;l++){var u=e(o[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}o=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,a&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},57:(n,r,e)=>{var t=e(379),a=e.n(t),o=e(795),i=e.n(o),c=e(569),s=e.n(c),l=e(565),u=e.n(l),p=e(216),d=e.n(p),f=e(589),h=e.n(f),v=e(424),m={};m.styleTagTransform=h(),m.setAttributes=u(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),a()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals}},n=>{n(n.s=57)}]);