"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[600],{600:function(n,e,t){t.r(e),t.d(e,{MoviePage:function(){return b}});var r,a,u,c=t(861),o=t(439),i=t(687),s=t.n(i),f=t(689),p=t(168),l=t(934),v=l.Z.form(r||(r=(0,p.Z)(["\n  margin: 20px;\n"]))),m=t(791),d=t(596),h=t(184),x=function(n){var e=n.onSubmit,t=(0,m.useState)(""),r=(0,o.Z)(t,2),a=r[0],u=r[1];return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?e(a):(0,d.Am)("Enter the name of the picture!")},children:[(0,h.jsx)("input",{name:"name",type:"text",value:a,onChange:function(n){u(n.currentTarget.value.toLowerCase())}}),(0,h.jsx)("button",{type:"submit",children:"Search"})]})})},g=t(87),Z=l.Z.li(a||(a=(0,p.Z)(["\n  text-decoration: none;\n  list-style-type: none;\n  color: #a0522d;\n  margin: 5px;\n"]))),w=(0,l.Z)(g.OL)(u||(u=(0,p.Z)(["\ntext-decoration: none; \ncolor: #A0522D;\n\n}"]))),y=function(n){var e=n.movies,t=(0,f.TH)();return(0,h.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(n){return(0,h.jsx)(Z,{children:(0,h.jsx)(w,{to:"".concat(n.id),state:{from:t},children:n.title})},n.id)}))})},k=t(933),b=function(){var n=(0,m.useState)(null),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,g.lr)(),u=(0,o.Z)(a,2),i=u[0],p=u[1],l=i.get("moviesName"),v=(0,m.useState)(null),Z=(0,o.Z)(v,2),w=Z[0],b=Z[1];(0,m.useEffect)((function(){if(l){var n=function(){var n=(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.bI)(l);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),b((0,d.Am)("Something went wrong!"));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[w,l]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{onSubmit:function(n){n!==t&&p({moviesName:n})}}),t&&(0,h.jsx)(y,{movies:t}),(0,h.jsx)(f.j3,{})]})}},933:function(n,e,t){t.d(e,{Bt:function(){return p},Ny:function(){return s},bI:function(){return l},wr:function(){return i},y:function(){return f}});var r=t(861),a=t(687),u=t.n(a),c=t(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="6ae976ca2f3433c900811972ef517fed",i=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=600.06c63d2c.chunk.js.map