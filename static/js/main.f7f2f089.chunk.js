(this.webpackJsonplex=this.webpackJsonplex||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=n(8),l=n(5),o=n(25),u=n(27),d="DATA_LIST_REQUEST",j="DATA_LIST_SUCCESS",b="DATA_LIST_FAIL",O="FILTERED_LIST_SUCCESS",p="FILTERED_LIST_FAIL",m=Object(s.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{loading:!0};case j:return{loading:!1,data:t.payload};case b:return{loading:!1,error:"something wrong"};default:return e}},confirmData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{datas:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{datas:[].concat(Object(u.a)(e.datas),[t.payload])};case p:return{error:"something wrong"};default:return e}}}),h=n(0),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,v=Object(s.d)(m,f(Object(s.a)(o.a))),x=function(e){var t=e.children;return Object(h.jsx)(l.a,{store:v,children:t})},g=n(4),S=n(2),N=function(e){var t,n=Object.assign({},e),c=n.setOpen,r=n.setOpen3,i=Object(l.c)((function(e){return e.data.data})),s=Object(a.useState)(0),o=Object(S.a)(s,2),u=o[0],d=o[1],j=Object(a.useState)(),b=Object(S.a)(j,2),O=b[0],p=b[1],m=Object(a.useState)(null===(t=i[0])||void 0===t?void 0:t.name),f=Object(S.a)(m,2),v=f[0],x=f[1],g=null===i||void 0===i?void 0:i.find((function(e){return e.name===v})),N=Object(a.useState)(""),_=Object(S.a)(N,2),y=_[0],T=_[1],C=Object(a.useState)(""),E=Object(S.a)(C,2),w=E[0],I=E[1],k=Object(a.useState)(),D=Object(S.a)(k,2),P=D[0],A=D[1];Object(a.useEffect)((function(){!function(e,t){var n=new Date(e),a=new Date(t).getTime()-n.getTime(),c=Math.round(a/864e5);A(c)}(y,w)}),[y,w]);var F;F=P>=(null===g||void 0===g?void 0:g.minimum_rent_period);var L=i.find((function(e){return e.name===v}));Object(a.useEffect)((function(){"meter"===L.type&&d(L.mileage)}),[d,L]);var R=i.find((function(e){return e.name===v}));Object(a.useEffect)((function(){"meter"===R.type&&p(R.durability-2*P),"plain"===R.type&&p(R.durability-1*P)}),[p,R,P]);var M=P*(null===g||void 0===g?void 0:g.price),B={selectedData:g,mileage:u,returningMileage:u+10*P,durability:O};return Object(h.jsxs)("div",{className:"BookModal_wrapper",children:[Object(h.jsx)("h1",{children:"Book a product"}),Object(h.jsxs)("select",{defaultValue:"DEFAULT",onChange:function(e){x(e.target.value)},children:[Object(h.jsx)("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:v})," ",null===i||void 0===i?void 0:i.map((function(e,t){return Object(h.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(h.jsxs)("div",{className:"selectedItem_details",children:[Object(h.jsxs)("p",{children:["Name: ",null===g||void 0===g?void 0:g.name]}),Object(h.jsxs)("p",{children:["Rental: ",null===g||void 0===g?void 0:g.minimum_rent_period]}),Object(h.jsxs)("p",{children:["Milleage: ",null===(null===g||void 0===g?void 0:g.mileage)?"N/A":null===g||void 0===g?void 0:g.mileage]}),Object(h.jsxs)("p",{children:["Repair Needed: ",!1===(null===g||void 0===g?void 0:g.needing_repair)?"false":"true"]})]}),Object(h.jsxs)("div",{className:"dates",children:[Object(h.jsxs)("label",{htmlFor:"From",children:["From ",""]}),Object(h.jsx)("input",{type:"date",value:y,onChange:function(e){return function(e){T(e.target.value)}(e)}}),Object(h.jsxs)("label",{htmlFor:"To",children:["To ",""]}),Object(h.jsx)("input",{type:"date",value:w,onChange:function(e){return function(e){I(e.target.value)}(e)}})]}),Object(h.jsx)("span",{className:"err_msg",children:!1===isNaN(P)?!0===F?"":"The rental period needs to be at least ".concat(null===g||void 0===g?void 0:g.minimum_rent_period," day"):""}),Object(h.jsxs)("div",{className:"exit_buttons",children:[Object(h.jsx)("button",{className:!0===isNaN(P)||!1===F?"not_validate":"yes_btn",onClick:function(){c(!1),setTimeout((function(){localStorage.setItem("price",M),localStorage.setItem("selectedObj",JSON.stringify(B))}),1e3)},disabled:!0===isNaN(P)||!1===F,children:"Yes"}),Object(h.jsx)("button",{className:"no_btn",onClick:function(){r(!1),c(!1)},children:"No"})]})]})},_=n(7),y=n.n(_),T=n(16),C=n(26),E=n.n(C),w=function(e){var t=e.setOpen3,n=Object(a.useState)(),c=Object(S.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(),o=Object(S.a)(s,2),u=o[0],d=o[1];Object(a.useEffect)((function(){i(localStorage.getItem("price"))}),[r]),Object(a.useEffect)((function(){d(JSON.parse(localStorage.getItem("selectedObj")))}),[u]);var j=Object(l.b)();return Object(h.jsxs)("div",{className:"confirm_modal_wrapper",children:[Object(h.jsx)("h1",{children:"Book a product"}),Object(h.jsxs)("div",{className:"confirm_info",children:[Object(h.jsxs)("p",{children:["your estimated price is $",r]}),Object(h.jsx)("small",{children:" Do you want to proceed?"})]}),Object(h.jsx)("button",{onClick:function(){var e;t(!1),j((e=u,function(){var t=Object(T.a)(y.a.mark((function t(n,a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("data",e);try{n({type:O,payload:e}),localStorage.setItem("returnProduct",JSON.stringify(a().data))}catch(c){n({type:p,payload:"No data available!"})}case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))},children:"confirm"})]})},I=function(e){var t,n,r=e.setOpen2,i=e.setOpen4,s=Object(a.useState)([]),l=Object(S.a)(s,2),o=l[0],u=l[1],d=Object(a.useState)(""),j=Object(S.a)(d,2),b=j[0],O=j[1],p=Object(a.useState)("Air Compressor 12 GAS"),m=Object(S.a)(p,2),f=m[0],v=m[1],x=null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.find((function(e){return e.name===f}));c.a.useMemo((function(){u(JSON.parse(localStorage.getItem("returnProduct")))}),[u]),c.a.useMemo((function(){localStorage.setItem("returnPrice",null===x||void 0===x?void 0:x.price)}),[x]);return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"BookModal_wrapper",children:[Object(h.jsx)("h1",{children:"Book a product"}),Object(h.jsxs)("select",{defaultValue:"DEFAULT",onChange:function(e){v(e.target.value)},children:[Object(h.jsx)("option",{value:"DEFAULT",disabled:!0,hidden:!0,children:f})," ",null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.map((function(e,t){return Object(h.jsx)("option",{value:e.name,children:e.name},t)}))]}),Object(h.jsxs)("div",{className:"selectedItem_details",children:[Object(h.jsxs)("p",{children:["Name: ",null===x||void 0===x?void 0:x.name]}),Object(h.jsxs)("p",{children:["Rental: ",null===x||void 0===x?void 0:x.minimum_rent_period]}),Object(h.jsxs)("p",{children:["Milleage: ",null===(null===x||void 0===x?void 0:x.mileage)?"N/A":null===x||void 0===x?void 0:x.mileage]}),Object(h.jsxs)("p",{children:["Repair Needed: ",!1===(null===x||void 0===x?void 0:x.needing_repair)?"false":"true"]})]}),Object(h.jsx)("div",{className:"mileageCount",children:Object(h.jsx)("input",{type:"number",name:"mileage",value:b,placeholder:"used mileage",onChange:function(e){return O(e.target.value)}})}),Object(h.jsxs)("div",{className:"exit_buttons",children:[Object(h.jsx)("button",{className:"yes_btn",onClick:function(){return r(!1)},disabled:!b,children:"Yes"}),Object(h.jsx)("button",{className:"no_btn",onClick:function(){i(!1),r(!1)},children:"No"})]})]})})},k=function(e){var t=e.setOpen4,n=Object(a.useState)(),c=Object(S.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){setTimeout((function(){i(localStorage.getItem("returnPrice"))}),500)}),[r]),Object(h.jsxs)("div",{className:"confirm_modal_wrapper",children:[Object(h.jsx)("h1",{children:"Book a product"}),Object(h.jsxs)("div",{className:"confirm_info",children:[Object(h.jsxs)("p",{children:["your estimated price is $",r]}),Object(h.jsx)("small",{children:" Do you want to proceed?"})]}),Object(h.jsx)("button",{onClick:function(){return t(!1)},children:"confirm"})]})},D=function(){var e=Object(a.useState)(!1),t=Object(S.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),i=Object(S.a)(r,2),s=i[0],l=i[1],o=Object(a.useState)(!1),u=Object(S.a)(o,2),d=u[0],j=u[1],b=Object(a.useState)(!1),O=Object(S.a)(b,2),p=O[0],m=O[1];return Object(h.jsxs)("div",{className:"btn_container",children:[Object(h.jsx)("button",{className:"btn1",onClick:function(){c(!0),j(!0)},children:"Book"}),n&&Object(h.jsx)(N,{setOpen:c,setOpen3:j}),n?"":d&&Object(h.jsx)(w,{setOpen3:j}),Object(h.jsx)("button",{className:"btn2",onClick:function(){l(!0),m(!0)},children:"Return"}),s&&Object(h.jsx)(I,{setOpen2:l,setOpen4:m}),s?"":p&&Object(h.jsx)(k,{setOpen4:m})]})},P=n(6),A=[{Header:"Name",accessor:"name"},{Header:"Code",accessor:"code"},{Header:"Availability",accessor:function(e){return!0===e.availability?"true":"false"}},{Header:"Need To Repair",accessor:function(e){return!0===e.needing_repair?"true":"false"}},{Header:"Durability",accessor:"durability"},{Header:"Mileage",accessor:function(e){return null===e.mileage?"null":e.mileage}}],F=function(e){var t=e.filter,n=e.setFilter,c=Object(a.useState)(t),r=Object(S.a)(c,2),i=r[0],s=r[1],l=Object(P.useAsyncDebounce)((function(e){n(e||void 0)}));return Object(h.jsxs)("div",{className:"search-wrapper",children:[Object(h.jsx)("h1",{children:"Rental"}),Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",placeholder:"Search",value:i||"",onChange:function(e){s(e.target.value),l(e.target.value)}})})]})},L=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.data.data}));Object(a.useEffect)((function(){e(function(){var e=Object(T.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("http://localhost:3000/data.json");case 3:n=e.sent,a=n.data,t({type:j,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:b,payload:"Something Wrong 500!"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var n=Object(a.useMemo)((function(){return A}),[]),c=Object(a.useMemo)((function(){return t}),[t]),r=Object(P.useTable)({columns:n,data:c},P.useGlobalFilter,P.useSortBy,P.usePagination),i=r.getTableBodyProps,s=r.getTableProps,o=r.headerGroups,u=r.prepareRow,d=r.page,O=r.nextPage,p=r.previousPage,m=r.canPreviousPage,f=r.canNextPage,v=r.state,x=r.pageOptions,N=r.gotoPage,_=r.setPageSize,C=r.setGlobalFilter,w=v.pageIndex,I=v.pageSize,k=v.globalFilter,L=Object(a.useState)(!1),R=Object(S.a)(L,2),M=R[0],B=R[1];return Object(a.useEffect)((function(){B(JSON.parse(localStorage.getItem("confirm")))}),[M]),Object(h.jsxs)("div",{className:"table_wrapper",children:[Object(h.jsx)(F,{filter:k,setFilter:C}),Object(h.jsxs)("table",Object(g.a)(Object(g.a)({},s()),{},{children:[Object(h.jsx)("thead",{children:o.map((function(e){return Object(h.jsx)("tr",Object(g.a)(Object(g.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsxs)("th",Object(g.a)(Object(g.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(h.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(h.jsx)("span",{children:"\u2228"}):Object(h.jsx)("span",{children:"\u2227"}):""})]}))}))}))}))}),Object(h.jsx)("tbody",Object(g.a)(Object(g.a)({},i()),{},{children:d.map((function(e){return u(e),Object(h.jsx)("tr",Object(g.a)(Object(g.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){var t;return Object(h.jsx)("td",Object(g.a)(Object(g.a)({},e.getCellProps()),{},{"data-label":null===e||void 0===e||null===(t=e.column)||void 0===t?void 0:t.Header,children:e.render("Cell")}))}))}))}))}))]})),Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)("div",{className:"select",children:Object(h.jsx)("select",{value:I,onChange:function(e){return _(Number(e.target.value))},children:[5,10,15,20].map((function(e){return Object(h.jsxs)("option",{value:e,children:["show ",e]},e)}))})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return p()},disabled:!m,children:Object(h.jsx)("i",{className:"fas fa-chevron-left"})}),Object(h.jsxs)("span",{children:[Object(h.jsx)("input",{type:"number",defaultValue:w+1,onChange:function(e){N(e.target.value?Number(e.target.value)-1:0)}}),Object(h.jsxs)("b",{children:[w+1,"/",x.length]})]}),Object(h.jsx)("button",{onClick:function(){return O()},disabled:!f,children:Object(h.jsx)("i",{className:"fas fa-chevron-right"})})]})]}),Object(h.jsx)(D,{})]})},R=(n(58),function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(L,{})})});i.a.render(Object(h.jsx)(x,{children:Object(h.jsx)(R,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.f7f2f089.chunk.js.map