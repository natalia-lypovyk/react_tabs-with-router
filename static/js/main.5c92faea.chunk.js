(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(14),r=a.n(l),i=a(5),m=a(6),s=(a(22),function(){return c.a.createElement("nav",null,c.a.createElement("ul",{className:"nav"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(i.b,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link_active"},"Home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(i.b,{to:"/tabs",exact:!0,className:"nav__link",activeClassName:"nav__link_active"},"Tabs"))))}),o=function(){return c.a.createElement("h2",null,"Home Page")},u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],b=(a(28),function(e){var t=e.tabs,a=e.activeTab,n=t.find((function(e){return e.id===a}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"tabs-nav"},t.map((function(e){return c.a.createElement("li",{className:"tabs-nav__item"},c.a.createElement(i.b,{to:"/tabs/".concat(e.id),key:e.id,className:"tabs-nav__link",activeClassName:"active"},e.title))}))),c.a.createElement("p",{className:"text"},null===n||void 0===n?void 0:n.content))}),v=function(e){var t=e.match;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("h2",null,"Tabs Page"),c.a.createElement(b,{tabs:u,activeTab:t.params.tabId}))},E=(a(29),function(){return c.a.createElement("div",{className:"container"},c.a.createElement(s,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:o}),c.a.createElement(m.a,{path:"/tabs/:tabId?",component:v})))});r.a.render(c.a.createElement(i.a,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5c92faea.chunk.js.map