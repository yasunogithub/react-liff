(this["webpackJsonpreact-liff"]=this["webpackJsonpreact-liff"]||[]).push([[0],{18:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},24:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),i=(n(23),n(5)),s=n(61),l=(n(24),n(6)),u=n.n(l),d=window.liff,f=u.a.create({baseURL:"https://mighty-anchorage-01609.herokuapp.com/api/"});f.interceptors.request.use((function(e){return e.headers.Authorization="Bearer HkYXti6w52aaG9XcI0ziDxhodbqkw3/hkZ8heSNcGVceJsh6iwldnuAYr7X363ErEMUBVKvzrRHJcFnS/MwjFg==",e}),(function(e){return Promise.reject(e)}));var h=function(){var e=Object(a.useState)([{}]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),h=l[0],m=l[1],g=Object(a.useState)(!1),p=Object(i.a)(g,2),v=p[0],b=p[1];Object(a.useEffect)((function(){d.init({liffId:"1650692153-d6KL8yKX"}).then((function(){b(d.isLoggedIn())}))}),[]);Object(a.useEffect)((function(){f.get("/plant_categories").then((function(e){c(e.data)}))}),[]);return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"qrValue"},h),o.a.createElement("div",{className:"loginButton"},o.a.createElement(s.a,{variant:"contained",color:"primary",onClick:function(){d.init({liffId:"1650692153-d6KL8yKX"}).then((function(){d.login(),b(d.isLoggedIn())}))},disabled:v},"Login!!!")),o.a.createElement("div",{className:"qrButton"},o.a.createElement(s.a,{variant:"contained",color:"secondary",onClick:function(){d.init({liffId:"1650692153-d6KL8yKX"}).then((function(){try{u()({method:"post",url:"https://mighty-anchorage-01609.herokuapp.com/remind",data:{},headers:{"Access-Control-Allow-Origin":"*"}}),d.scanCode().then((function(e){return m(e.value)})).catch((function(){return alert("cannot read QR")}))}catch(e){alert("cannot open QR camera")}}))},disabled:!v},"Open QR camera")),o.a.createElement("div",{className:"qrButton"},o.a.createElement(s.a,{variant:"contained",color:"secondary",onClick:function(){f.get("/plant_categories").then((function(e){console.log("status:",e.status),console.log("body:",e.data)})).catch((function(e){console.log("err:",e)}))},disabled:!v},"Get Plant")),o.a.createElement("div",{className:"button"},n))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2d112345.chunk.js.map