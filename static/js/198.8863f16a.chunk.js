"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[198],{687:function(r,e,t){t.d(e,{Hx:function(){return v},Y5:function(){return p},uV:function(){return f},vw:function(){return o},wr:function(){return i}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="64941d9c048dcb2fddefbcc98313b7a0",i=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/trending/movie/day",{signal:e,params:{api_key:s}});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e,t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie",{signal:e,params:{api_key:s,query:t}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e,t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(Number(t)),{signal:e,params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e,t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(Number(t),"/credits"),{signal:e,params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e,t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(Number(t),"/reviews"),{signal:e,params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},198:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),i=t(14),o=t(687),p=t(87),f=t(184),v=function(r){var e=r.movies,t=r.state;return(0,f.jsx)("ul",{children:e.map((function(r){return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"movies/".concat(r.id),state:t,children:r.title})},r.id)}))})},d=t(689),l=function(){var r=(0,s.useState)([]),e=(0,a.Z)(r,2),t=e[0],u=e[1],p=(0,d.TH)();return(0,s.useEffect)((function(){var r=new AbortController,e=r.signal;function t(){return(t=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.wr)(e);case 3:t=r.sent,u(t.results),r.next=13;break;case 7:if(r.prev=7,r.t0=r.catch(0),"canceled"!==r.t0.message){r.next=12;break}return console.error(r.t0),r.abrupt("return");case 12:i.ZP.error("Movies not found. Please try it again.");case 13:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){r.abort()}}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.x7,{position:"top-right",reverseOrder:!1}),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(v,{movies:t,state:{from:p}})]})]})}}}]);
//# sourceMappingURL=198.8863f16a.chunk.js.map