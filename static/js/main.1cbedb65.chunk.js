(this.webpackJsonpideapp=this.webpackJsonpideapp||[]).push([[0],{32:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c(18),s=c.n(r),i=function(e){var t=e.history;return Object(a.jsxs)("div",{className:"container mt-5",children:[Object(a.jsx)("h1",{children:"LoginScreen"}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{className:"btn btn-primary",onClick:function(){t.replace("/StartPage")},children:"Login"})]})},o=c(2),j=c(8),d=c(9),l=c.n(d),u=c(11),b=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://devarc.herokuapp.com/dev",e.next=3,fetch("https://devarc.herokuapp.com/dev");case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,n=a.urlDevarc,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=function(e){var t=Object(n.useState)({data:[],loading:!0}),c=Object(j.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(e),c=t.data,r=t.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"DevScreen"}),r&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Por favor, espere aque el servidor se ponga en marcha"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:c.github,children:"GitHub"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:c.readme,children:"Readme"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:c.postman,children:"Postman"})]})]})},m=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://devarc.herokuapp.com/products/searchByID/".concat(t),e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=!0===(n=e.sent).ok?n.products:[],e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.history,c=function(e){var t=Object(n.useState)({data:[],loading:!0}),c=Object(j.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){m(e).then((function(e){r({data:e[0],loading:!1})})).catch()}),[e]),a}(Object(o.g)().productID),r=c.data;c.loading;if(!r)return Object(a.jsx)(o.a,{to:"/"});var s=r.img,i=(r.avaiable,r.stock),d=(r._id,r.name),l=r.price,u=(r.priceCost,r.description);r.category,r.__v;return Object(a.jsxs)("div",{className:"row mt-5",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)("img",{src:s,alt:d,className:"img-thumbmail animate__animated animate__fadeIn",width:"320"})}),Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsx)("h3",{children:d}),Object(a.jsx)("p",{children:u}),Object(a.jsxs)("h5",{children:[i," Uni."]}),Object(a.jsxs)("h5",{children:[l," \u20ac"]}),Object(a.jsx)("button",{className:"btn btn-outline-info",onClick:function(){t>=2?t.push("/"):t.goBack()},children:"Return"}),Object(a.jsx)("button",{type:"button",class:"btn btn-primary",children:"Buy"})]})]})},p=c(20),O=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://devarc.herokuapp.com/products/search/".concat(t),e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=(n=e.sent).products,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.setWord,c=Object(n.useState)(""),r=Object(j.a)(c,2),s=r[0],i=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.trim().length>1&&(t(s.trim()),i(""))},children:Object(a.jsx)("input",{type:"text",value:s,onChange:function(e){i(e.target.value)}})})},f=c(4),g=function(e){var t=e.img,c=(e.avaiable,e.stock,e._id),n=e.name,r=e.price,s=(e.priceCost,e.description);e.category,e.__v;return Object(a.jsx)("div",{className:"card ms-3",style:{maxWidth:420},children:Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("img",{src:t,className:"card-img",alt:n})}),Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:n}),Object(a.jsxs)("p",{className:"card-text",children:[Object(a.jsxs)("small",{className:"text-muted",children:[" ",s.substr(0,100)," ... "]}),Object(a.jsxs)("h6",{className:"card-text",children:[r," \u20ac"]})]}),Object(a.jsx)(f.b,{to:"./product/".concat(c),children:"Info"})]})})]})})},N=function(){var e=Object(n.useState)(["xiaomi"]),t=Object(j.a)(e,2),c=t[0],r=t[1],s=function(e){var t=Object(n.useState)({data:[],loading:!0}),c=Object(j.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){O(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(c),i=s.data,o=s.loading;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Busqueda ...."}),Object(a.jsx)(v,{setWord:r}),Object(a.jsx)("hr",{}),o&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Por favor, espere aque el servidor se ponga en marcha"}),Object(a.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:i.map((function(e){return Object(a.jsx)(g,Object(p.a)({},e),e.id)}))})]})},k=function(){return Object(a.jsx)("div",{children:"Mi p\xe1gina de inicio"})},_=function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(a.jsx)(f.b,{className:"navbar-brand",to:"/",children:"Inicio"}),Object(a.jsx)("div",{className:"navbar-collapse",children:Object(a.jsxs)("div",{className:"navbar-nav",children:[Object(a.jsx)(f.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/product",children:"Producto"}),Object(a.jsx)(f.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/",children:"Pedidos"}),Object(a.jsx)(f.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/",children:"Usuario"}),Object(a.jsx)(f.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dev",children:"About"})]})}),Object(a.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(a.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(a.jsx)(f.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",children:"Logout"})})})]})},y=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"UserScreen"})})},w=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_,{}),Object(a.jsx)("div",{className:"container mt-2",children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/product",component:N}),Object(a.jsx)(o.b,{exact:!0,path:"/product/:productID",component:x}),Object(a.jsx)(o.b,{exact:!0,path:"/user",component:y}),Object(a.jsx)(o.b,{exact:!0,path:"/dev",component:h}),Object(a.jsx)(o.b,{exact:!0,path:"/StartPage",component:k}),Object(a.jsx)(o.a,{to:"/StartPage"})]})})]})},S=function(){return Object(a.jsx)(f.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/login",component:i}),Object(a.jsx)(o.b,{path:"/",component:w})]})})})},C=function(){return Object(a.jsx)(S,{})};s.a.render(Object(a.jsx)(C,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1cbedb65.chunk.js.map