(this["webpackJsonpreact-liff"]=this["webpackJsonpreact-liff"]||[]).push([[0],{20:function(e,t,n){e.exports=n(49)},25:function(e,t,n){},27:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),i=(n(25),n(6)),s=n.n(i),l=n(17),u=n(5),f=n(64),d=(n(27),n(7)),m=n.n(d),h=window.liff,p=m.a.create({baseURL:"https://mighty-anchorage-01609.herokuapp.com/api/"});p.interceptors.request.use((function(e){return e.headers.Authorization="Bearer HkYXti6w52aaG9XcI0ziDxhodbqkw3/hkZ8heSNcGVceJsh6iwldnuAYr7X363ErEMUBVKvzrRHJcFnS/MwjFg==",e}),(function(e){return Promise.reject(e)}));var g=function(){var e=Object(a.useState)({plantCategories:[{name:"",imageUrl:""}]}),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),d=i[0],m=(i[1],Object(a.useState)(!1)),g=Object(u.a)(m,2),v=g[0],b=g[1];Object(a.useEffect)((function(){h.init({liffId:"1650692153-d6KL8yKX"}).then((function(){b(h.isLoggedIn())}))}),[]);Object(a.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/plant_categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"qrValue"},d),o.a.createElement("div",{className:"loginButton"},o.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){h.init({liffId:"1650692153-d6KL8yKX"}).then((function(){h.login(),b(h.isLoggedIn())}))},disabled:v},"Login!!!")),o.a.createElement("div",{className:"qrButton"},o.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(){p.get("/plant_categories").then((function(e){console.log("status:",e.status),console.log("body:",e.data)})).catch((function(e){console.log("err:",e)}))},disabled:!v},"Get Plant")),o.a.createElement("div",{className:"button"},o.a.createElement("ul",null,n.plantCategories.map((function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:"https://saientist.s3-ap-northeast-1.amazonaws.com/radish.jpg"},e.name))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3242d9ee.chunk.js.map