(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){e.exports=n(69)},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);n(37);var l=n(0),a=n.n(l),c=n(14),r=n.n(c),i=n(8),o=n(10),s=n(33),u=(n(46),n(11)),m=n(2),p=n(35),d=(n(47),n(48),n(34)),E=n.n(d),h=(n(49),n(13)),f=n.n(h),C=n(18),v=n(19),g=n.n(v),y=function(){var e=Object(i.b)(),t=function(t){return e(function(e){return function(){var t=Object(C.a)(f.a.mark((function t(n){var l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.post("/api/stripe",e);case 2:l=t.sent,console.log(l),n({type:"FETCH_USER",payload:l.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};return a.a.createElement(E.a,{amount:5e4,name:"FeedBack",description:"Add 500rs per credit",token:function(e){return t(e)},stripeKey:"pk_test_51HAUS9CkXmV1JvZbnc3JBicoKFWETDOffaOq05xtOEdjebdE4AjwT9xrLezB5A6y0rgMQtCOKcW7iJkuGDNOY1YP00AxCORrBw",currency:"INR",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPFoyqHh1rOEfLBtqjZNtd2kzMTk6HNHJgOw&usqp=CAU"},a.a.createElement("button",{className:"btn-small"},"Pay to Add Credits"))},b=function(e){console.log(e.link,e.renderContent());var t=a.a.createElement("a",{href:e.link?"/api/logout":"/auth/google",onClick:e.linkClicked,className:"btn-large"},a.a.createElement("svg",{className:e.renderContent()?null:"loading",viewBox:"0 0 48 48",width:"48px",height:"48px"},a.a.createElement("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),a.a.createElement("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),a.a.createElement("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),a.a.createElement("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})),e.renderContent());return a.a.createElement("ul",{className:"left"},a.a.createElement("li",null,t),a.a.createElement("li",null,e.link?a.a.createElement(y,null):null),a.a.createElement("li",null,a.a.createElement(u.c,{to:"",activeClassName:"active"},a.a.createElement("span",{className:"new badge"},e.userCredits))))},k=function(e){return a.a.createElement("nav",null,a.a.createElement("div",{className:"nav-wrapper"},a.a.createElement(u.b,{to:"/",className:"brand-logo right"},a.a.createElement("svg",{x:"0px",y:"0px",className:"element-position",viewBox:"0 0 512.002 512.002",width:"48px",height:"48px",style:{enableBackground:"new 0 0 512.002 512.002"}},a.a.createElement("path",{style:{fill:"#FF9269"},d:"M256.804,8.174v149.243c41.245,0,74.621-33.376,74.621-74.621S298.051,8.174,256.804,8.174z"}),a.a.createElement("path",{style:{fill:"#FFB082"},d:"M256.804,8.174c-41.245,0-74.621,33.376-74.621,74.621s33.376,74.621,74.621,74.621\r c28.238,0,51.089-33.376,51.089-74.621S285.043,8.174,256.804,8.174z"}),a.a.createElement("path",{style:{fill:"#C20035"},d:"M256.001,185.742v131.311h131.311C387.312,244.533,328.522,185.742,256.001,185.742z"}),a.a.createElement("path",{style:{fill:"#FF3D00"},d:"M256.001,185.742c-72.521,0-131.311,58.79-131.311,131.311h229.941\r C354.632,244.531,310.474,185.742,256.001,185.742z"}),a.a.createElement("polygon",{style:{fill:"#F3A933"},points:"327.717,419.521 293.021,454.849 300.32,503.827 255.994,481.756 240.743,429.209 \r 255.994,367.417 278.881,411.329 "}),a.a.createElement("polygon",{style:{fill:"#FFBE35"},points:"255.994,367.417 255.994,481.756 211.679,503.827 218.966,454.849 184.281,419.521 \r 233.117,411.329 "}),a.a.createElement("polygon",{style:{fill:"#F3A933"},points:"503.831,419.521 469.135,454.849 476.434,503.827 432.108,481.756 416.857,429.209 \r 432.108,367.417 454.995,411.329 "}),a.a.createElement("polygon",{style:{fill:"#FFBE35"},points:"432.108,367.417 432.108,481.756 387.792,503.827 395.08,454.849 360.395,419.521 \r 409.231,411.329 "}),a.a.createElement("polygon",{style:{fill:"#F3A933"},points:"151.608,419.521 116.912,454.849 124.21,503.827 79.884,481.756 64.633,429.209 \r 79.884,367.417 102.772,411.329 "}),a.a.createElement("polygon",{style:{fill:"#FFBE35"},points:"79.884,367.417 79.884,481.756 35.569,503.827 42.857,454.849 8.172,419.521 57.008,411.329 \r "}),a.a.createElement("path",{d:"M256.001,161.236c44.452,0,80.617-36.165,80.617-80.618C336.618,36.165,300.454,0,256.001,0s-80.617,36.165-80.617,80.617\r C175.384,125.071,211.549,161.236,256.001,161.236z M256.001,16.341c35.442,0,64.277,28.834,64.277,64.277\r s-28.834,64.278-64.277,64.278s-64.277-28.835-64.277-64.278S220.559,16.341,256.001,16.341z"}),a.a.createElement("path",{d:"M256.001,193.916c65.156,0,118.655,50.862,122.872,114.97H190.051c-4.512,0-8.17,3.657-8.17,8.17\r c0,4.512,3.658,8.17,8.17,8.17h197.262c4.512,0,8.17-3.658,8.17-8.17c0-76.91-62.572-139.481-139.482-139.481\r S116.52,240.148,116.52,317.057c0,4.512,3.658,8.17,8.17,8.17h32.681c4.512,0,8.17-3.658,8.17-8.17c0-4.513-3.658-8.17-8.17-8.17\r h-24.243C137.346,244.779,190.846,193.916,256.001,193.916z"}),a.a.createElement("path",{d:"M152.956,411.465l-44.82-7.522l-21.004-40.301c-1.407-2.701-4.199-4.394-7.245-4.394c-3.045,0-5.838,1.694-7.245,4.394\r l-21.004,40.301l-44.82,7.522c-3.003,0.504-5.477,2.636-6.419,5.533c-0.941,2.896-0.193,6.075,1.94,8.248l31.839,32.43l-6.696,44.95\r c-0.449,3.013,0.815,6.024,3.279,7.814c2.462,1.79,5.717,2.061,8.445,0.704l40.681-20.259l40.681,20.259\r c1.153,0.573,2.4,0.856,3.641,0.856c1.696,0,3.381-0.527,4.803-1.561c2.464-1.79,3.728-4.801,3.279-7.814l-6.696-44.95l31.839-32.43\r c2.133-2.172,2.881-5.352,1.94-8.248C158.434,414.101,155.96,411.97,152.956,411.465z M111.085,449.132\r c-1.794,1.828-2.629,4.392-2.251,6.927l4.986,33.468l-30.29-15.084c-2.293-1.143-4.99-1.143-7.285,0l-30.291,15.084l4.986-33.468\r c0.378-2.535-0.455-5.1-2.251-6.927l-23.707-24.147l33.372-5.602c2.527-0.425,4.709-2.01,5.893-4.282l15.639-30.008l15.639,30.008\r c1.184,2.272,3.366,3.857,5.893,4.282l33.372,5.602L111.085,449.132z"}),a.a.createElement("path",{d:"M329.07,411.465l-44.82-7.522l-21.004-40.301c-1.407-2.701-4.199-4.394-7.245-4.394c-3.045,0-5.838,1.694-7.245,4.394\r l-21.004,40.301l-44.82,7.522c-3.003,0.504-5.477,2.636-6.419,5.533c-0.941,2.896-0.193,6.075,1.94,8.248l31.839,32.43l-6.695,44.95\r c-0.449,3.013,0.815,6.024,3.279,7.814c2.462,1.79,5.718,2.061,8.444,0.704l40.681-20.259l40.681,20.259\r c1.153,0.573,2.4,0.856,3.641,0.856c1.696,0,3.381-0.527,4.803-1.561c2.464-1.79,3.728-4.801,3.279-7.814l-6.696-44.95l31.839-32.43\r c2.133-2.172,2.881-5.352,1.94-8.248C334.548,414.101,332.074,411.97,329.07,411.465z M287.199,449.132\r c-1.795,1.828-2.629,4.392-2.251,6.927l4.985,33.468l-30.29-15.084c-1.147-0.571-2.394-0.856-3.642-0.856\r c-1.247,0-2.495,0.285-3.642,0.856l-30.29,15.084l4.985-33.468c0.378-2.535-0.455-5.1-2.251-6.927l-23.707-24.147l33.372-5.602\r c2.527-0.425,4.709-2.01,5.893-4.282l15.639-30.006l15.639,30.008c1.184,2.272,3.366,3.857,5.893,4.282l33.371,5.602\r L287.199,449.132z"}),a.a.createElement("path",{d:"M511.602,416.998c-0.941-2.897-3.414-5.028-6.419-5.533l-44.82-7.522l-21.004-40.301c-1.407-2.701-4.199-4.395-7.245-4.395\r s-5.838,1.694-7.245,4.395l-21.004,40.301l-44.82,7.522c-3.003,0.504-5.477,2.636-6.419,5.533c-0.941,2.896-0.193,6.075,1.94,8.248\r l31.839,32.43l-6.696,44.95c-0.449,3.013,0.815,6.024,3.279,7.814c1.422,1.034,3.107,1.561,4.803,1.561\r c1.242,0,2.489-0.283,3.641-0.856l40.681-20.259l40.681,20.259c2.727,1.356,5.981,1.084,8.444-0.704\r c2.464-1.79,3.728-4.801,3.279-7.814l-6.696-44.95l31.839-32.43C511.794,423.073,512.543,419.894,511.602,416.998z M463.312,449.132\r c-1.795,1.828-2.629,4.392-2.251,6.927l4.986,33.468l-30.291-15.084c-1.147-0.571-2.394-0.856-3.642-0.856\r c-1.248,0-2.495,0.285-3.642,0.856l-30.29,15.084l4.986-33.468c0.378-2.535-0.455-5.1-2.251-6.927l-23.707-24.147l33.372-5.602\r c2.527-0.425,4.709-2.01,5.893-4.282l15.639-30.008l15.639,30.008c1.184,2.272,3.366,3.857,5.893,4.282l33.371,5.602\r L463.312,449.132z"}),a.a.createElement("path",{d:"M256.001,117.661c10.71,0,20.898-4.654,27.953-12.768c2.96-3.405,2.6-8.566-0.805-11.527\r c-3.406-2.961-8.567-2.6-11.527,0.805c-3.949,4.544-9.644,7.149-15.621,7.149s-11.671-2.606-15.621-7.149\r c-2.961-3.405-8.121-3.765-11.527-0.805c-3.405,2.961-3.765,8.121-0.805,11.527C235.103,113.006,245.292,117.661,256.001,117.661z"}))),a.a.createElement(b,{renderContent:e.content,link:e.linkPath,linkClicked:e.clicked,userCredits:e.credits})))},w=function(){var e=Object(l.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(i.c)((function(e){return e.auth}));return a.a.createElement(k,{content:function(){switch(r){case null:return;case!1:return a.a.createElement("span",null,"sign in");default:return a.a.createElement("span",null,"sign out")}},linkPath:!!r,clicked:function(e){c(!n),n&&e.preventDefault()}.bind(null),credits:r&&r.credits?r.credits:null})},F=function(){return a.a.createElement("h2",null,"Dashboard")},M=function(){return a.a.createElement("h2",null,"SurveryNew")},z=function(){return a.a.createElement("h2",null,"Landing")},O=function(){var e=Object(i.b)(),t=Object(l.useCallback)((function(){return e(function(){var e=Object(C.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/current_user");case 2:(n=e.sent)&&t({type:"FETCH_USER",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(l.useEffect)((function(){t()}),[t]),a.a.createElement("div",null,a.a.createElement(u.a,null,a.a.createElement("div",null,a.a.createElement(w,null),a.a.createElement(m.a,{exact:!0,path:"/",component:z}),a.a.createElement(m.a,{exact:!0,path:"/surveys",component:F}),a.a.createElement(m.a,{path:"/surveys/new",component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return t.payload||!1;default:return e}},j=Object(o.c)({auth:x}),N=null,B=Object(o.d)(j,{},N(Object(o.a)(s.a)));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:B},a.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f65e8cf2.chunk.js.map