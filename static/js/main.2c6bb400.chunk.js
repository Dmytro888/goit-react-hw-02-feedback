(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{10:function(e,t,n){e.exports={statBox:"Statistics_statBox__2-FNk"}},11:function(e,t,n){e.exports={widgetCard:"ReviewsWidget_widgetCard__1yu90"}},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(6),i=n.n(s),o=n(7),c=n(8),u=n(9),d=n(13),b=n(12),l=n(1),j=n.n(l),p=n(10),h=n.n(p),O=n(0),v=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,s=e.positivePercentage;return Object(O.jsxs)("div",{className:h.a.statBox,children:[Object(O.jsxs)("span",{children:["GOOD: ",t]}),Object(O.jsxs)("span",{children:["NEUTRAL: ",n]}),Object(O.jsxs)("span",{children:["BAD: ",a]}),Object(O.jsxs)("span",{children:["TOTAL FEEDBACK: ",r]}),Object(O.jsxs)("span",{children:["POSITIVE FEEDBACK: ",s,"%"]})]})};v.prototype={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired,total:j.a.number.isRequired,positivePercentage:j.a.number.isRequired};var x=v,g=n(4),m=n.n(g),f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(O.jsx)("div",{className:m.a.buttonBox,children:t.map((function(e){return Object(O.jsx)("button",{className:m.a.button,type:"button",name:e,onClick:n,children:e.toUpperCase()},e)}))})};f.prototype={options:j.a.string.isRequired,onLeaveFeedback:j.a.func.isRequired};var k=f,_=n(5),F=n.n(_),y=function(e){var t=e.title,n=e.children;return Object(O.jsxs)("div",{className:F.a.section,children:[Object(O.jsx)("h2",{className:F.a.title,children:t}),n]})};y.prototype={title:j.a.string.isRequired,children:j.a.array.isRequired};var R=y,A=function(e){var t=e.message;return Object(O.jsx)("div",{children:Object(O.jsx)("span",{children:t})})};A.prototype={message:j.a.string.isRequired};var B=A,E=n(11),q=n.n(E),w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.reviewAdd=function(t){e.setState((function(e){return Object(o.a)({},t.target.name,e[t.target.name]+1)}))},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,a=t.neutral,r=t.bad;return Math.round(100*n/(n+r+a))},e}return Object(u.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state,t=e.good,n=e.neutral;return t+e.bad+n}},{key:"render",value:function(){var e=Object.keys(this.state),t=this.state,n=t.good,a=t.neutral,r=n+t.bad+a;return Object(O.jsxs)("div",{className:q.a.widgetCard,children:[Object(O.jsx)(R,{title:"PLEASE LEAVE FEEDBACK",children:Object(O.jsx)(k,{options:e,onLeaveFeedback:this.reviewAdd})}),Object(O.jsx)(R,{title:"STATISTICS",children:r>0&&Object(O.jsx)(x,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()||0})||Object(O.jsx)(B,{message:"No feedback given"})})]})}}]),n}(r.a.Component),C=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(w,{})})};n(21),n(22);i.a.render(Object(O.jsx)(C,{}),document.querySelector("#root"))},4:function(e,t,n){e.exports={buttonBox:"FeedbackOptions_buttonBox__3ObBo",button:"FeedbackOptions_button__2BNak"}},5:function(e,t,n){e.exports={section:"Section_section__3OW-u",title:"Section_title__rReVp"}}},[[23,1,2]]]);
//# sourceMappingURL=main.2c6bb400.chunk.js.map