(this["webpackJsonpreact-liff"]=this["webpackJsonpreact-liff"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(3),i=t.n(c),r=(t(13),t(4)),l=t(34),s=(t(14),window.liff),u=function(){var e=Object(a.useState)(""),n=Object(r.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)(!1),u=Object(r.a)(i,2),d=u[0],f=u[1];Object(a.useEffect)((function(){s.init({liffId:"1650692153-d6KL8yKX"}).then((function(){f(s.isLoggedIn())}))}),[]);return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"qrValue"},t),o.a.createElement("div",{className:"loginButton"},o.a.createElement(l.a,{variant:"contained",color:"primary",onClick:function(){s.init({liffId:"1650692153-d6KL8yKX"}).then((function(){s.login(),f(s.isLoggedIn())}))},disabled:d},"Login")),o.a.createElement("div",{className:"qrButton"},o.a.createElement(l.a,{variant:"contained",color:"secondary",onClick:function(){s.init({liffId:"1650692153-d6KL8yKX"}).then((function(){try{s.scanCode().then((function(e){return c(e.value)})).catch((function(){return alert("cannot read QR")}))}catch(e){alert("cannot open QR camera")}}))},disabled:!d},"Open QR camera")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports=t(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.74c9ee40.chunk.js.map