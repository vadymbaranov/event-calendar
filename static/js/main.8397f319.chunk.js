(this["webpackJsonpevent-calendar"]=this["webpackJsonpevent-calendar"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(11),i=n.n(s),r=(n(18),n(19),n(6)),l=n(3),o=n(4),d=n.n(o),u=n(0),j=function(e){var t=e.today,n=e.isFormShown,c=e.onFormShown,a=e.onNextMonth,s=e.onPrevMonth,i=e.onToday;return Object(u.jsx)("div",{className:"content is-justify-content-space-between",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("button",{type:"button",className:"button is-link is-outlined",onClick:function(){c(!n)},children:"+"}),Object(u.jsxs)("div",{className:"switcher__container",children:[Object(u.jsx)("button",{type:"button",className:"button is-primary is-outlined",onClick:i,children:"Today"}),Object(u.jsx)("button",{type:"button",className:"button is-primary is-outlined",onClick:s,children:"<"}),Object(u.jsxs)("h2",{className:"subtitle is-4",children:[t.format("MMMM"),"\xa0",t.format("YYYY")]}),Object(u.jsx)("button",{type:"button",className:"button is-primary is-outlined",onClick:a,children:">"})]})]})})},b=n(8),m=n.n(b),h=function(e){var t=e.day,n=e.isWeekend,c=function(e){return d()().isSame(e,"day")};return Object(u.jsxs)("article",{className:m()("calendar__cell",{"is-weekend":!0===n}),children:[Object(u.jsxs)("div",{className:"cell__row",children:[Object(u.jsx)("p",{className:m()("week__day",{"has-text-danger":!0===c(t)}),children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.day()]}),Object(u.jsx)("p",{className:m()("day__number",{"has-text-danger":!0===c(t)}),children:t.format("D")})]}),Object(u.jsx)("div",{className:"box"})]})},O=n(10),v=n(13),x=n(12),p={get:function(){return JSON.parse(localStorage.getItem("events")||"[]")},post:function(e){var t=p.get();localStorage.setItem("events",JSON.stringify([].concat(Object(r.a)(t),[e])))},delete:function(e){var t=p.get().filter((function(t){return t.createdAt!==e}));localStorage.setItem("events",JSON.stringify([t]))},patch:function(e){var t=p.get(),n=t.find((function(t){return e.createdAt===t.createdAt})),c=t.filter((function(e){return e.createdAt!==(null===n||void 0===n?void 0:n.createdAt)}));localStorage.setItem("events",JSON.stringify([].concat(Object(r.a)(c),[e])))}};var f=function(e){var t=e.selectedEvent,n=e.onFormShown,a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],r=s[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),b=j[0],m=j[1],h=Object(c.useState)(""),f=Object(l.a)(h,2),N=f[0],_=f[1],y=Object(c.useState)(""),S=Object(l.a)(y,2),g=S[0],w=S[1];return Object(u.jsx)("div",{className:"event event__container",children:Object(u.jsxs)("form",{className:"box event__form",children:[Object(u.jsxs)("div",{className:"event__title",children:[Object(u.jsx)("h2",{className:"subtitle is-3",children:"Add new idea item"}),t&&Object(u.jsx)("p",{children:"Created at ".concat(null===t||void 0===t?void 0:t.createdAt)}),Object(u.jsx)("button",{onClick:function(){return n(!1)},type:"button",className:"button is-danger button__close",children:"X"})]}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{htmlFor:"title",className:"label",children:["Title*:",Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("input",{name:"title",className:"input",type:"text",required:!0,placeholder:"Title goes here",value:i,onChange:function(e){return r(e.target.value)}})})]})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{htmlFor:"description",className:"label",children:["Description:",Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{name:"description",className:"input description-text",placeholder:"Description",value:b,onChange:function(e){return m(e.target.value)}})})]})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{htmlFor:"title",className:"label",children:["Date*:",Object(u.jsxs)("div",{className:"control event__date-picker",children:[Object(u.jsx)("input",{type:"date",required:!0,className:"input event__dateField",value:N,onChange:function(e){return _(e.target.value)}}),Object(u.jsx)("input",{type:"time",required:!0,className:"input event__timeField",value:N,onChange:function(e){return w(e.target.value)}})]})]})}),Object(u.jsxs)("div",{className:"save-button__container",children:[Object(u.jsx)("button",{"aria-label":"Save",type:"submit",className:"button is-danger is-outlined button__delete",children:Object(u.jsx)(v.a,{icon:x.a})}),Object(u.jsx)("button",{type:"submit",className:"button is-success is-outlined button__save",disabled:!i||!N,onClick:function(){var e,c,a={createdAt:d()().format("DD.MM.YYYY HH:MM"),title:i,description:b,date:N,time:g};t?(e=Object(O.a)(Object(O.a)({},t),{},{title:i,date:N,time:g,description:b}),p.patch(e)):(c=a,p.post(c)),n(!1)},children:"Save"})]})]})})},N=function(){var e=Object(c.useState)(d()()),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),o=i[0],b=i[1],m=Object(c.useState)(null),O=Object(l.a)(m,2),v=O[0],x=O[1];d.a.updateLocale("en",{week:{dow:1}});var p=n.clone().startOf("month").startOf("week").clone().subtract(7,"day"),N=Object(r.a)(Array(42)).map((function(){return p.add(1,"day").clone()}));return Object(u.jsx)("section",{className:"section",children:Object(u.jsxs)("div",{className:"calendar__container",children:[Object(u.jsx)("h1",{className:"title is-1",children:"Welcome to my calendar app!"}),o&&Object(u.jsx)(f,{selectedEvent:v,onFormShown:b}),Object(u.jsx)("div",{className:"calendar__header",children:Object(u.jsx)(j,{today:n,isFormShown:o,onFormShown:b,onNextMonth:function(){return a((function(e){return e.clone().add(1,"month")}))},onPrevMonth:function(){return a((function(e){return e.clone().subtract(1,"month")}))},onToday:function(){return a(d()())}})}),Object(u.jsx)("div",{className:"calendar__body",children:N.map((function(e){return Object(u.jsx)(h,{day:e,isWeekend:6===e.day()||0===e.day(),onFormShown:b,onSelectedEvent:x},e.unix())}))})]})})},_=function(){return Object(u.jsx)("main",{className:"main",children:Object(u.jsx)("div",{className:"main__container",children:Object(u.jsx)(N,{})})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8397f319.chunk.js.map