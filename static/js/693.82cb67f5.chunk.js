"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[693],{693:function(n,e,t){t.r(e),t.d(e,{ReviewsPage:function(){return k}});var r,a,u,c=t(861),s=t(439),o=t(687),i=t.n(o),p=t(689),f=t(791),l=t(933),v=t(168),d=t(934),h=d.Z.h3(r||(r=(0,v.Z)(["\n  color: #a0522d;\n"]))),g=d.Z.p(a||(a=(0,v.Z)(["\n  color: #deb887;\n"]))),m=d.Z.li(u||(u=(0,v.Z)(["\nlist-style-type: none;\ncolor: #D2B48C;\nbackground: \t#F5F5F5;\nmargin: 5px;\n}"]))),x=t(184),w=function(){var n=(0,f.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,p.UO)().id;return(0,f.useEffect)((function(){var n=function(){var n=(0,c.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.Bt)(a);case 3:e=n.sent,r(e),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),t=n.t0.responce,console.log(t.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,x.jsx)(x.Fragment,{children:t.results&&t.results.length?(0,x.jsx)("ul",{children:null===t||void 0===t?void 0:t.results.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,x.jsxs)(m,{children:[(0,x.jsx)(h,{children:e}),(0,x.jsx)(g,{children:t})]},r)}))}):(0,x.jsx)("div",{children:"We don't have any reviews for this movie"})})},k=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(w,{})})}},933:function(n,e,t){t.d(e,{Bt:function(){return f},Ny:function(){return i},bI:function(){return l},wr:function(){return o},y:function(){return p}});var r=t(861),a=t(687),u=t.n(a),c=t(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="6ae976ca2f3433c900811972ef517fed",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=693.82cb67f5.chunk.js.map