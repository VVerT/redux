(this["webpackJsonpfirst-redux-app"]=this["webpackJsonpfirst-redux-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),u=n.n(c),o=(n(21),n(22),n(3)),l="INCREMENT_COUNT",i="DECREMENT_COUNT",s="RESET_COUNT",d="SEND_COUNT",p="SEND_TEXT";var m=function(e){return console.log(e),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,e.count),r.a.createElement("button",{onClick:e.increment},"Increment"),r.a.createElement("button",{onClick:e.decrement},"Decrement"),r.a.createElement("button",{onClick:e.reset},"RESET"),r.a.createElement("button",{onClick:function(){return e.send(e.count)}},"Saved"),r.a.createElement("h1",null,e.saved))},h=Object(o.b)((function(e){return{count:e.counter.count,saved:e.counter.savedData}}),(function(e){return{increment:function(){return e({type:l})},decrement:function(){return e({type:i})},reset:function(){return e({type:s})},send:function(t){return e(function(e){return{type:d,payload:e}}(t))}}}))((function(e){var t=e.count,n=e.increment,a=e.decrement,c=e.reset,u=e.send,o=e.saved;return r.a.createElement(m,{count:t,increment:n,decrement:a,reset:c,send:u,saved:o})}));var v=n(12),E=n(13),f=n(5),b=n(16),O=n(15),j=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(E.a)(n,[{key:"handleChange",value:function(e){this.props.sendText(e.target.value)}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,this.props.count),r.a.createElement("h1",null,this.props.textData),r.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.props.textData}))}}]),n}(r.a.Component),y=Object(o.b)((function(e){return{count:e.counter.count,textData:e.main.textData}}),(function(e){return{sendText:function(t){return e(function(e){return{type:p,payload:e}}(t))}}}))(j);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(y,null))},g=n(2),D=(n(28),n(14)),N=n(1),T={count:0,savedData:0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(N.a)(Object(N.a)({},e),{},{count:e.count+1});case i:return Object(N.a)(Object(N.a)({},e),{},{count:e.count-1});case d:return Object(N.a)(Object(N.a)({},e),{},{savedData:t.payload});case s:return Object(N.a)({},T);default:return e}},k={textData:"",error:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(N.a)(Object(N.a)({},e),{},{textData:t.payload});default:return e}},_=Object(g.c)({counter:x,main:S}),w=[D.a];var R=Object(g.d)(_,g.a.apply(void 0,w));u.a.render(r.a.createElement(o.a,{store:R},r.a.createElement(C,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4cd41784.chunk.js.map