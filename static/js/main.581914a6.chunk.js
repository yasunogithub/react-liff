(this["webpackJsonpreact-liff"]=this["webpackJsonpreact-liff"]||[]).push([[0],{20:function(e,t,n){e.exports=n(49)},25:function(e,t,n){},27:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),i=(n(25),n(6)),l=n.n(i),s=n(17),u=n(5),d=n(64),f=(n(27),n(7)),m=n.n(f),h=window.liff,p=m.a.create({baseURL:"https://mighty-anchorage-01609.herokuapp.com/api/"});p.interceptors.request.use((function(e){return e.headers.Authorization="Bearer HkYXti6w52aaG9XcI0ziDxhodbqkw3/hkZ8heSNcGVceJsh6iwldnuAYr7X363ErEMUBVKvzrRHJcFnS/MwjFg==",e}),(function(e){return Promise.reject(e)}));var g=function(){var e=Object(a.useState)({plantCategories:[{name:"",imageUrl:""}]}),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),f=i[0],g=i[1],v=Object(a.useState)(!1),b=Object(u.a)(v,2),E=b[0],w=b[1];Object(a.useEffect)((function(){h.init({liffId:"1650692153-d6KL8yKX"}).then((function(){w(h.isLoggedIn())}))}),[]);Object(a.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/plant_categories");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"qrValue"},f),c.a.createElement("div",{className:"loginButton"},c.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){h.init({liffId:"1650692153-d6KL8yKX"}).then((function(){h.login(),w(h.isLoggedIn())}))},disabled:E},"Login!!!")),c.a.createElement("div",{className:"qrButton"},c.a.createElement(d.a,{variant:"contained",color:"secondary",onClick:function(){h.init({liffId:"1650692153-d6KL8yKX"}).then((function(){try{m()({method:"post",url:"https://mighty-anchorage-01609.herokuapp.com/remind",data:{},headers:{"Access-Control-Allow-Origin":"*"}}),h.scanCode().then((function(e){return g(e.value)})).catch((function(){return alert("cannot read QR")}))}catch(e){alert("cannot open QR camera")}}))},disabled:!E},"Open QR camera")),c.a.createElement("div",{className:"qrButton"},c.a.createElement(d.a,{variant:"contained",color:"secondary",onClick:function(){p.get("/plant_categories").then((function(e){console.log("status:",e.status),console.log("body:",e.data)})).catch((function(e){console.log("err:",e)}))},disabled:!E},"Get Plant")),c.a.createElement("div",{className:"button"},c.a.createElement("ul",null,n.plantCategories.map((function(e){return c.a.createElement("li",null,c.a.createElement("a",{href:e.imageUrl},e.name))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.581914a6.chunk.js.map