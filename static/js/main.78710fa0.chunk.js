(this.webpackJsonpideapp=this.webpackJsonpideapp||[]).push([[0],{49:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c(23),s=c.n(r),i=function(e){var t=e.history;return Object(a.jsxs)("div",{className:"container mt-5",children:[Object(a.jsx)("h1",{children:"LoginScreen"}),Object(a.jsx)("hr",{}),Object(a.jsx)("button",{className:"btn btn-primary",onClick:function(){t.replace("/StartPage")},children:"Login"})]})},o=c(2),j=c(7),d=c(9),l=c.n(d),b=c(11),u=function(){var e=Object(b.a)(l.a.mark((function e(t){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://devarc-production.up.railway.app/dev",e.next=3,fetch("https://devarc-production.up.railway.app/dev");case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,n=a.urlDevarc,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=function(e){var t=Object(n.useState)({data:[],loading:!0}),c=Object(j.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){u(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(e),c=t.data,r=t.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"DevScreen"}),r&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Por favor, espere aque el servidor se ponga en marcha"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:c.github,children:"GitHub"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:c.readme,children:"Readme"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:c.postman,children:"Postman"})]})]})},m=function(){var e=Object(b.a)(l.a.mark((function e(t){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://devarc-production.up.railway.app/products/searchByID/".concat(t),console.log(c),e.next=4,fetch(c);case 4:return a=e.sent,e.next=7,a.json();case 7:return n=!0===(n=e.sent).ok?n.products:[],e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.history,c=function(e){var t=Object(n.useState)({data:[],loading:!0}),c=Object(j.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){m(e).then((function(e){r({data:e[0],loading:!1})})).catch()}),[e]),a}(Object(o.i)().productID),r=c.data;c.loading;if(!r)return Object(a.jsx)(o.a,{to:"/"});var s=r.img,i=(r.avaiable,r.stock),d=(r._id,r.name),l=r.price,b=(r.priceCost,r.description);r.category,r.__v;return Object(a.jsxs)("div",{className:"row mt-5",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)("img",{src:s,alt:d,className:"img-thumbmail animate__animated animate__fadeIn",width:"320"})}),Object(a.jsxs)("div",{className:"col-6",children:[Object(a.jsx)("h3",{children:d}),Object(a.jsx)("p",{children:b}),Object(a.jsxs)("h5",{children:[i," Uni."]}),Object(a.jsxs)("h5",{children:[l," \u20ac"]}),Object(a.jsxs)("div",{class:"btn-toolbar",children:[Object(a.jsx)("button",{id:"btnReturn",type:"button",class:"btn btn-outline-info mr-2 mb-2",onClick:function(){console.log(t),t>=2?t.push("/"):t.goBack()},children:"Volver"}),Object(a.jsx)("button",{id:"btnADD",type:"button",class:"btn btn-success mr-2 mb-2",children:"Comprar"}),Object(a.jsx)("button",{id:"btnCancel",type:"button",class:"btn btn-danger mr-2 mb-2",children:"Cancelar"})]})]})]})},x=c(13),O=function(){var e=Object(b.a)(l.a.mark((function e(t){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://devarc-production.up.railway.app/products/search/".concat(t),e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=(n=e.sent).products,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=c(15),f=c.n(v),g=c(14),N=function(e){var t=e.setWord,c=Object(o.h)(),r=f.a.parse(c.search).query,s=void 0===r?"":r,i=Object(o.g)(),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),c=Object(j.a)(t,2),a=c[0],r=c[1];return[a,function(e){var t=e.target;r(Object(x.a)(Object(x.a)({},a),{},Object(g.a)({},t.name,t.value)))},function(){r(e)}]}({searchText:s}),l=Object(j.a)(d,2),b=l[0],u=l[1],h=b.searchText;return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),h.trim().length>1&&(t(h.trim()),console.log(h),i.push("?q=".concat(h)))},children:Object(a.jsx)("input",{type:"text",placeHolder:"Busque sus art\xedculos",name:"searchText",value:h,onChange:u})})},_=c(4),y=function(e){var t=e.img,c=(e.avaiable,e.stock,e._id),n=e.name,r=e.price,s=(e.priceCost,e.description);e.category,e.__v;return Object(a.jsx)("div",{className:"card ms-3",style:{maxWidth:420},children:Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("img",{src:t,className:"card-img",alt:n})}),Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:n}),Object(a.jsxs)("p",{className:"card-text",children:[Object(a.jsxs)("small",{className:"text-muted",children:[" ",s.substr(0,100)," ... "]}),Object(a.jsxs)("h6",{className:"card-text",children:[r," \u20ac"]})]}),Object(a.jsx)(_.b,{to:"./product/".concat(c),children:"Info"})]})})]})})},k=function(){var e=Object(o.h)(),t=f.a.parse(e.search).q,c=void 0===t?"re":t,r=Object(n.useState)([c]),s=Object(j.a)(r,2),i=(s[0],s[1]),d=function(e){var t=Object(n.useState)({data:[],loading:!0}),c=Object(j.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){O(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(c),l=d.data,b=d.loading;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Busqueda..."}),Object(a.jsx)(N,{setWord:i}),Object(a.jsx)("hr",{}),b&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Por favor, espere aque el servidor se ponga en marcha"}),Object(a.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:l.map((function(e){return Object(a.jsx)(y,Object(x.a)({},e),e.id)}))})]})},w=function(){return Object(a.jsx)("div",{children:"Mi p\xe1gina de inicio"})},C=function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(a.jsx)(_.b,{className:"navbar-brand",to:"/",children:"Inicio"}),Object(a.jsx)("div",{className:"navbar-collapse",children:Object(a.jsxs)("div",{className:"navbar-nav",children:[Object(a.jsx)(_.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/product",children:"Productos"}),Object(a.jsx)(_.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/",children:"Pedidos"}),Object(a.jsx)(_.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/",children:"Usuario"}),Object(a.jsx)(_.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dev",children:"About"})]})}),Object(a.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(a.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(a.jsx)(_.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",children:"Logout"})})})]})},S=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"UserScreen"})})},D=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C,{}),Object(a.jsx)("div",{className:"container mt-2",children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/product",component:k}),Object(a.jsx)(o.b,{exact:!0,path:"/product/:productID",component:p}),Object(a.jsx)(o.b,{exact:!0,path:"/user",component:S}),Object(a.jsx)(o.b,{exact:!0,path:"/dev",component:h}),Object(a.jsx)(o.b,{exact:!0,path:"/StartPage",component:w}),Object(a.jsx)(o.a,{to:"/StartPage"})]})})]})},I=function(){return Object(a.jsx)(_.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/login",component:i}),Object(a.jsx)(o.b,{path:"/",component:D})]})})})},P=function(){return Object(a.jsx)(I,{})};s.a.render(Object(a.jsx)(P,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.78710fa0.chunk.js.map