(this["webpackJsonpmy-todolist"]=this["webpackJsonpmy-todolist"]||[]).push([[0],{63:function(e,t,a){e.exports=a(75)},68:function(e,t,a){},69:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),l=a.n(i),r=(a(68),a(69),a(29)),o=a(115),u=a(105),s=a(106),d=c.a.memo((function(e){var t=e.addItem,a=Object(n.useState)(""),i=Object(r.a)(a,2),l=i[0],d=i[1],m=Object(n.useState)(null),T=Object(r.a)(m,2),O=T[0],f=T[1],b=function(){""!==l.trim()?(t(l),d("")):f("Title is required")};return c.a.createElement("div",null,c.a.createElement(o.a,{variant:"outlined",error:!!O,label:"Title",helperText:O,value:l,onChange:function(e){d(e.currentTarget.value)},onKeyPress:function(e){null!==O&&f(null),13===e.charCode&&b()}}),c.a.createElement(u.a,{onClick:b},c.a.createElement(s.a,null)))})),m=c.a.memo((function(e){var t=e.onChange,a=e.value,i=Object(n.useState)(!1),l=Object(r.a)(i,2),u=l[0],s=l[1],d=Object(n.useState)(a),m=Object(r.a)(d,2),T=m[0],O=m[1];return u?c.a.createElement(o.a,{variant:"outlined",value:T,onChange:function(e){O(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t(T)}}):c.a.createElement("span",{onDoubleClick:function(){s(!0),O(a)}},a)})),T=a(108),O=a(107),f=a(116),b=c.a.memo((function(e){var t=e.removeTask,a=e.task,n=e.todolistID,i=e.changeTaskStatus,l=e.changeTaskTitle;return c.a.createElement("div",{className:a.isDone?"is-done":""},c.a.createElement(f.a,{size:"small",color:"primary",onChange:function(e){var t=e.currentTarget.checked;i(a.id,t,n)},checked:a.isDone}),c.a.createElement(m,{value:a.title,onChange:function(e){l(a.id,e,n)}}),c.a.createElement(u.a,{onClick:function(){return t(a.id,n)}},c.a.createElement(O.a,null)))})),E=c.a.memo((function(e){var t=e.id,a=e.tasks,i=e.filter,l=e.title,r=e.changeFilter,o=e.addTask,s=e.removeTodolist,f=e.changeTodolistTitle,E=e.changeTaskTitle,v=e.removeTask,k=e.changeTaskStatus,D=a;"active"===i&&(D=a.filter((function(e){return!1===e.isDone}))),"completed"===i&&(D=a.filter((function(e){return!0===e.isDone})));var j=Object(n.useCallback)((function(e){o(e,t)}),[o,t]),I=Object(n.useCallback)((function(){s(t)}),[s,t]),h=Object(n.useCallback)((function(e){f(t,e)}),[f,t]),p=Object(n.useCallback)((function(){return r("all",t)}),[r,t]),C=Object(n.useCallback)((function(){return r("active",t)}),[r,t]),g=Object(n.useCallback)((function(){return r("completed",t)}),[r,t]);return c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement(m,{value:l,onChange:h}),c.a.createElement(u.a,{onClick:I},c.a.createElement(O.a,null))),c.a.createElement(d,{addItem:j}),c.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"0"}},D.map((function(e){return c.a.createElement(b,{key:e.id,task:e,todolistID:t,removeTask:v,changeTaskStatus:k,changeTaskTitle:E})}))),c.a.createElement("div",null,c.a.createElement(T.a,{size:"small",variant:"all"===i?"contained":"outlined",color:"primary",onClick:p},"All"),c.a.createElement(T.a,{size:"small",variant:"active"===i?"contained":"outlined",color:"primary",onClick:C},"ACTIVE"),c.a.createElement(T.a,{size:"small",variant:"completed"===i?"contained":"outlined",color:"primary",onClick:g},"COMPLETED")))})),v=a(109),k=a(110),D=a(112),j=a(113),I=a(114),h=a(76),p=a(111),C=a(30),g=a(117),S=[],y=a(27),A=a(14),L={},w=a(28);var N=function(){var e=Object(w.c)((function(e){return e.todolists})),t=Object(w.c)((function(e){return e.tasks})),a=Object(w.b)(),i=Object(n.useCallback)((function(e,t){var n={type:"REMOVE-TASK",taskID:e,todolistID:t};a(n)}),[a]),l=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"ADD-TASK",title:e,todolistID:t}}(e,t);a(n)}),[a]),r=Object(n.useCallback)((function(e,t){var n={type:"CHANGE-TODOLIST-FILTER",filter:e,id:t};a(n)}),[a]),o=Object(n.useCallback)((function(e,t,n){var c=function(e,t,a){return{type:"CHANGE-TASK-STATUS",taskID:e,isDone:t,todolistID:a}}(e,t,n);a(c)}),[a]),s=Object(n.useCallback)((function(e,t,n){var c=function(e,t,a){return{type:"CHANGE-TASK-TITLE",taskID:e,newTitle:t,todolistID:a}}(e,t,n);a(c)}),[a]),m=Object(n.useCallback)((function(e){var t={type:"REMOVE-TODOLIST",id:e};a(t)}),[a]),O=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(e,t);a(n)}),[a]),f=Object(n.useCallback)((function(e){var t=function(e){return{type:"ADD-TODOLIST",title:e,todolistID:Object(g.a)()}}(e);a(t)}),[a]);return c.a.createElement("div",{className:"App"},c.a.createElement(v.a,{position:"static"},c.a.createElement(k.a,null,c.a.createElement(u.a,{edge:"start",color:"inherit","aria-label":"menu"},c.a.createElement(p.a,null)),c.a.createElement(D.a,{variant:"h6"},"News"),c.a.createElement(T.a,{color:"inherit"},"Login"))),c.a.createElement(j.a,{fixed:!0},c.a.createElement(I.a,{container:!0,style:{padding:"20px 0"}},c.a.createElement(d,{addItem:f})),c.a.createElement(I.a,{container:!0,spacing:3},e.map((function(e){return c.a.createElement(I.a,{item:!0,key:e.id},c.a.createElement(h.a,{elevation:3,style:{padding:"20px"}},c.a.createElement(E,{key:e.id,id:e.id,title:e.title,tasks:t[e.id],removeTask:i,changeFilter:r,addTask:l,changeTaskStatus:o,filter:e.filter,removeTodolist:m,changeTaskTitle:s,changeTodolistTitle:O})))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(35),G=Object(K.b)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":var a=Object(A.a)({},e);return a[t.todolistID]=a[t.todolistID].filter((function(e){return e.id!==t.taskID})),a;case"ADD-TASK":var n=Object(A.a)({},e),c={id:Object(g.a)(),title:t.title,isDone:!1};return n[t.todolistID]=[c].concat(Object(C.a)(n[t.todolistID])),n;case"CHANGE-TASK-STATUS":return Object(A.a)({},e,Object(y.a)({},t.todolistID,e[t.todolistID].map((function(e){return e.id!==t.taskID?Object(A.a)({},e):Object(A.a)({},e,{isDone:t.isDone})}))));case"CHANGE-TASK-TITLE":return Object(A.a)({},e,Object(y.a)({},t.todolistID,e[t.todolistID].map((function(e){return e.id===t.taskID?Object(A.a)({},e):Object(A.a)({},e,{title:t.newTitle})}))));case"ADD-TODOLIST":return Object(A.a)({},e,Object(y.a)({},t.todolistID,[]));case"REMOVE-TODOLIST":var i=Object(A.a)({},e);return delete i[t.id],i;default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!==t.id}));case"ADD-TODOLIST":var a={id:t.todolistID,title:t.title,filter:"all"};return[].concat(Object(C.a)(e),[a]);case"CHANGE-TODOLIST-TITLE":var n=e.find((function(e){return e.id===t.id}));return n?(n.title=t.title,Object(C.a)(e)):e;case"CHANGE-TODOLIST-FILTER":var c=e.find((function(e){return e.id===t.id}));return c?(c.filter=t.filter,Object(C.a)(e)):e;default:return e}}}),H=Object(K.c)(G);window.store=H,l.a.render(c.a.createElement(w.a,{store:H},c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.86bd8d37.chunk.js.map