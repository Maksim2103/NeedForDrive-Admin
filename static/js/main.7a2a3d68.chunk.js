(this["webpackJsonpneed-for-drive-admin"]=this["webpackJsonpneed-for-drive-admin"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(27),s=n.n(r),c=n(42),i=(n(99),n(8)),u=n(169),l=n(11),d=n(166),p=n(170),j=n(167),h=n(171),b=n(20),g=n.n(b),f=n.p+"static/media/Logo.bc4f3ee8.svg",m=n(30),O=n(36),x=n.n(O),_=n(54),v=n(33),L=n(76),R=n.n(L).a.create({baseURL:"https://api-factory.simbirsoft1.com/api",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b","Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}),k=window.btoa("".concat(function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=n.length,o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*a));return t}(10),":").concat("4cbcea96de")),N="Basic ".concat(k),T=Object(v.b)("auth/login/fetchAsyncLogin",function(){var e=Object(_.a)(x.a.mark((function e(t,n){var a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,R.post("/auth/login",t,{headers:{Authorization:N}});case 4:return o=e.sent,sessionStorage.setItem("access_token",o.data.access_token),sessionStorage.setItem("refresh_token",o.data.refresh_token),e.abrupt("return",o.data);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",a(e.t0.response.status));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),w=Object(v.b)("auth/logout/fetchAsyncLogout",function(){var e=Object(_.a)(x.a.mark((function e(t,n){var a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,R.post("/auth/logout",{},{headers:{Authorization:t}});case 4:return o=e.sent,sessionStorage.removeItem("access_token"),sessionStorage.removeItem("refresh_token"),e.abrupt("return",o.data);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",a(e.t0.response.status));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),W=Object(v.b)("auth/refresh/fetchAsyncRefreshToken",function(){var e=Object(_.a)(x.a.mark((function e(t,n){var a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,R.post("/auth/refresh",t);case 4:return o=e.sent,sessionStorage.setItem("access_token",o.data.access_token),sessionStorage.setItem("refresh_token",o.data.refresh_token),e.abrupt("return",o.data);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",a(e.t0.response.status));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),y=n(77),C=n.n(y),P=n(78),z=Object(v.c)({name:"auth",initialState:{dataResponseLogin:null,errorResponseLogin:null},reducers:{},extraReducers:function(e){e.addCase(T.pending,(function(e){e.loadingResponseLogin="pending"})),e.addCase(T.fulfilled,(function(e,t){e.dataResponseLogin=t.payload,e.loadingResponseLogin="succeeded",e.loadingResponseLogout=null,e.errorResponseLogin=null})),e.addCase(T.rejected,(function(e,t){e.loadingResponseLogin="failed",e.errorResponseLogin=t.error.message})),e.addCase(w.pending,(function(e){e.loadingResponseLogout="pending",e.dataResponseLogin=null})),e.addCase(w.fulfilled,(function(e){e.loadingResponseLogout="succeeded",e.dataResponseLogin=null,e.loadingResponseLogin=null})),e.addCase(w.rejected,(function(e,t){e.loadingResponseLogout="failed",e.errorResponseLogout=t.error.message})),e.addCase(W.pending,(function(e){e.loadingResponseRefreshToken="pending"})),e.addCase(W.fulfilled,(function(e,t){e.dataResponseRefreshToken=t.payload,e.loadingResponseRefreshToken="succeeded"})),e.addCase(W.rejected,(function(e,t){e.loadingResponseRefreshToken="failed",e.errorResponseRefreshToken=t.error.message}))}}),I=function(e){return e.auth.loadingResponseLogin},A=function(e){return e.auth.loadingResponseLogout},S=function(e){return e.auth.errorResponseLogin};Object(P.a)(z.actions);var F=z.reducer,M=n(2),E=(C.a.bind(g.a),function(){var e,t,n=Object(i.g)(),o=Object(i.f)(),r=Object(m.c)(S),s=(null===(e=o.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname)||"/admin/main",c=Object(m.b)(),b=Object(a.useState)(null),O=Object(l.a)(b,2),x=O[0],_=O[1],v=Object(a.useState)(null),L=Object(l.a)(v,2),R=L[0],k=L[1],N=Object(m.c)(I);return Object(a.useEffect)((function(){"succeeded"===N&&n(s)}),[N]),Object(M.jsxs)(u.a,{children:[Object(M.jsxs)(u.a,{className:g.a.logoWrapper,children:[Object(M.jsx)("img",{className:g.a.logo,src:f,alt:"logo"}),Object(M.jsx)(p.a,{className:g.a.logoTitle,children:"Need for drive"})]}),Object(M.jsxs)(h.a,{className:g.a.formWrapper,children:[Object(M.jsx)(p.a,{className:g.a.mainTitle,children:"\u0412\u0445\u043e\u0434"}),Object(M.jsxs)(u.a,{className:g.a.inputWrapper,children:[Object(M.jsx)(p.a,{className:g.a.inputTitle,children:"\u041b\u043e\u0433\u0438\u043d"}),Object(M.jsx)(d.a,{className:g.a.inputInput,type:"text",size:"small",fullWidth:!0,id:"outlined-login",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",error:r,required:!0,value:x,onChange:function(e){_(e.target.value)}})]}),Object(M.jsxs)(u.a,{className:g.a.inputWrapper,children:[Object(M.jsx)(p.a,{className:g.a.inputTitle,children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(M.jsx)(d.a,{className:g.a.inputInput,type:"password",size:"small",fullWidth:!0,id:"outlined-password",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",error:r,helperText:r&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",required:!0,value:R,onChange:function(e){k(e.target.value)}})]}),Object(M.jsxs)(u.a,{className:g.a.buttonsWrapper,children:[Object(M.jsx)(j.a,{className:g.a.buttonAuth,variant:"text",disabled:!0,children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"}),Object(M.jsx)(j.a,{className:g.a.buttonLogin,variant:"contained",onClick:function(){c(T({username:x,password:R}))},children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})}),V=n(82),B=n.n(V),D=function(){var e=Object(m.b)(),t=Object(i.g)(),n=window.sessionStorage.access_token,o="Bearer ".concat(n),r=Object(m.c)(A);return Object(a.useEffect)((function(){"succeeded"===r&&t("/",{replace:!0})}),[r]),Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{children:"Main Page"}),Object(M.jsx)(j.a,{className:B.a.buttonLogout,variant:"contained",onClick:function(){e(w(o))},children:"Log out"})]})},X=n(83),Y=n.n(X),q=function(){return Object(M.jsxs)("div",{className:Y.a.notFoundPage,children:[Object(M.jsx)("h3",{children:"404"}),Object(M.jsx)("h3",{children:"\u0423\u043f\u0441, \u0434\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442..."})]})},J=n(84),Z=n.n(J),G=function(e){var t=e.children,n=Object(i.f)();return window.sessionStorage.getItem("access_token")?t:Object(M.jsx)(i.a,{to:"/",state:{from:n}})};var K=function(){return Object(M.jsx)(u.a,{className:Z.a.app,children:Object(M.jsxs)(i.d,{children:[Object(M.jsx)(i.b,{path:"/",element:Object(M.jsx)(E,{})}),Object(M.jsx)(i.b,{path:"/admin/main",element:Object(M.jsx)(G,{children:Object(M.jsx)(D,{})})}),Object(M.jsx)(i.b,{path:"*",element:Object(M.jsx)(q,{})})]})})},Q=Object(v.a)({reducer:{auth:F}});s.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)(c.a,{children:Object(M.jsx)(m.a,{store:Q,children:Object(M.jsx)(K,{})})})}),document.getElementById("root"))},20:function(e,t,n){e.exports={logoWrapper:"authorizationPage_logoWrapper__2GeF5",logoTitle:"authorizationPage_logoTitle__Mr34W",formWrapper:"authorizationPage_formWrapper__2dv-T",mainTitle:"authorizationPage_mainTitle__2sDsN",inputTitle:"authorizationPage_inputTitle__1Ok6Y",inputInput:"authorizationPage_inputInput__1ZXCV",buttonsWrapper:"authorizationPage_buttonsWrapper__3XpyY",buttonAuth:"authorizationPage_buttonAuth__eaaM7",buttonLogin:"authorizationPage_buttonLogin__30jyY",disabledLink:"authorizationPage_disabledLink__3-Kxl"}},82:function(e,t,n){e.exports={buttonLogout:"mainPage_buttonLogout__1Ijj4"}},83:function(e,t,n){e.exports={notFoundPage:"notFoundPage_notFoundPage__2QED2"}},84:function(e,t,n){e.exports={app:"app_app__cDkZh"}},99:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.7a2a3d68.chunk.js.map