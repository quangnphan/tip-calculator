(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),l=c(4),a=c.n(l),j=(c(9),c(2)),i=c(0),r=function(e){return Object(i.jsxs)("button",{className:"btn",value:e.value,onClick:function(t){e.setPercent(t.target.value)},children:[e.value,"%"]})},b=c.p+"static/media/icon-person.65bfd204.svg",o=c.p+"static/media/icon-dollar.9f9be353.svg",u=function(){var e=Object(s.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],l=Object(s.useState)(0),a=Object(j.a)(l,2),u=a[0],O=a[1],d=Object(s.useState)(""),h=Object(j.a)(d,2),x=h[0],p=h[1],m=Object(s.useState)(""),v=Object(j.a)(m,2),f=v[0],N=v[1],g=Object(s.useState)(""),S=Object(j.a)(g,2),P=S[0],y=S[1];Object(s.useEffect)((function(){if(""!==x&&""!==P&&""!==f){var e=x/P,t=f/100*e,c=(e+t).toFixed(2);n(t),O(c)}else n(0),O(0)}),[x,P,f]);return Object(i.jsxs)("div",{className:"calc",children:[Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(i.jsxs)("label",{className:"bill",children:[Object(i.jsx)("h4",{children:"Bill"}),Object(i.jsxs)("section",{className:"input-container",children:[Object(i.jsx)("img",{src:o,alt:"dollar icon"}),Object(i.jsx)("input",{className:"input-bill",type:"number",name:"bill",placeholder:"0",value:x,onChange:function(e){return p(e.target.value)}})]})]}),Object(i.jsxs)("label",{className:"percent",children:[Object(i.jsx)("h4",{children:"Select Tip %"}),Object(i.jsxs)("section",{className:"select-container",children:[Object(i.jsx)(r,{setPercent:N,value:5}),Object(i.jsx)(r,{setPercent:N,value:10}),Object(i.jsx)(r,{setPercent:N,value:15}),Object(i.jsx)(r,{setPercent:N,value:25}),Object(i.jsx)(r,{setPercent:N,value:50}),Object(i.jsx)("input",{className:"custom",type:"number",placeholder:"custom",onChange:function(e){N(e.target.value)}})]})]}),Object(i.jsxs)("label",{className:"people",children:[Object(i.jsx)("h4",{children:"Number of People"}),Object(i.jsxs)("section",{className:"input-container",children:[Object(i.jsx)("img",{src:b,alt:"person"}),Object(i.jsx)("input",{className:"input-people",type:"number",name:"people",placeholder:"0",onChange:function(e){y(e.target.value)},value:P})]})]})]}),Object(i.jsxs)("div",{className:"screen",children:[Object(i.jsxs)("div",{className:"result",children:[Object(i.jsxs)("div",{className:"amount-result",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("h3",{children:"Tip Amount"}),Object(i.jsx)("h4",{children:"/ person"})]}),Object(i.jsxs)("h1",{children:["$",Number(c).toFixed(2)]})]}),Object(i.jsxs)("div",{className:"total-result",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("h3",{children:"Total"}),Object(i.jsx)("h4",{children:"/ person"})]}),Object(i.jsxs)("h1",{children:["$",Number(u).toFixed(2)]})]})]}),Object(i.jsx)("button",{className:"reset",type:"reset",onClick:function(){p(""),y(""),N("")},children:"Reset"})]})]})},O=c.p+"static/media/logo.3cc0528b.svg";var d=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{className:"logo",src:O,alt:"logo"}),Object(i.jsx)(u,{})]})};a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.8bcc75dc.chunk.js.map