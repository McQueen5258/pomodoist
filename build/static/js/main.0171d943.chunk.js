(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),s=(a(16),a(2)),o=a(3),i=a(4),m=a(6),u=a(5),f=a(7),d=a(1);function p(e){return e>9?String(e):"0".concat(e)}var h=function(e){var t=p(Math.floor(e%3600/60)),a=p(Math.floor(e%3600%60));return"".concat(t,":").concat(a)};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createElement("polygon",{points:"5 3 19 12 5 21 5 3"}),g=function(e){var t=e.svgRef,a=v(e,["svgRef"]);return r.a.createElement("svg",y({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-play",ref:t},a),b)},E=r.a.forwardRef(function(e,t){return r.a.createElement(g,y({svgRef:t},e))});a.p;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var x=r.a.createElement("rect",{x:6,y:4,width:4,height:16}),k=r.a.createElement("rect",{x:14,y:4,width:4,height:16}),N=function(e){var t=e.svgRef,a=j(e,["svgRef"]);return r.a.createElement("svg",O({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-pause",ref:t},a),x,k)},C=r.a.forwardRef(function(e,t){return r.a.createElement(N,O({svgRef:t},e))});a.p;var w=function(e){var t=e.onClick,a=e.isPlaying;return r.a.createElement("button",{className:"timer-button",type:"button",onClick:t},a?r.a.createElement(C,null):r.a.createElement(E,null))};function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var R=r.a.createElement("line",{x1:18,y1:6,x2:6,y2:18}),P=r.a.createElement("line",{x1:6,y1:6,x2:18,y2:18}),M=function(e){var t=e.svgRef,a=S(e,["svgRef"]);return r.a.createElement("svg",I({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x",ref:t},a),R,P)},Z=r.a.forwardRef(function(e,t){return r.a.createElement(M,I({svgRef:t},e))});a.p;var L=function(e){var t=e.onClick;return r.a.createElement("button",{className:"timer-button",type:"button",onClick:t},r.a.createElement(Z,null))},W=(a(17),{WORK:2,BREAK:1}),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).setTimer=a.setTimer.bind(Object(d.a)(Object(d.a)(a))),a.stop=a.stop.bind(Object(d.a)(Object(d.a)(a))),a.tick=a.tick.bind(Object(d.a)(Object(d.a)(a))),a.completeSession=a.completeSession.bind(Object(d.a)(Object(d.a)(a))),a.toggleIsPlaying=a.toggleIsPlaying.bind(Object(d.a)(Object(d.a)(a))),a.reset=a.reset.bind(Object(d.a)(Object(d.a)(a))),a.state={mode:e.mode,time:W[e.mode],isPlaying:e.autoPlays},a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.state,t=e.mode,a=e.time;this.setTimer(t,a)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"setTimer",value:function(e,t){this.setState({mode:e,time:t}),this.timerID=setInterval(this.tick,1e3)}},{key:"stop",value:function(){this.setState({isPlaying:!1}),clearInterval(this.timerID)}},{key:"tick",value:function(){var e=this,t=this.state,a=t.mode,n=t.isPlaying,r=t.time;n&&this.setState(function(e){return{time:e.time-1}},function(){0===r&&(e.stop(),"WORK"===a&&e.setTimer("BREAK",W.BREAK),"BREAK"===a&&(e.completeSession(),e.setTimer("WORK",W.WORK)))})}},{key:"toggleIsPlaying",value:function(){this.setState(function(e){return{isPlaying:!e.isPlaying}})}},{key:"reset",value:function(){this.stop(),this.setTimer("WORK",W.WORK,!1)}},{key:"completeSession",value:function(){(0,this.props.onSessionComplete)()}},{key:"render",value:function(){var e=this.state,t=e.mode,a=e.time,n=e.isPlaying,l=h(a),c="card timer-container ".concat("WORK"===t?"timer-work":"timer-break");return r.a.createElement("div",{className:c},r.a.createElement("div",null,r.a.createElement(L,{onClick:this.reset})),r.a.createElement("div",null,l),r.a.createElement("div",null,r.a.createElement(w,{isPlaying:n,onClick:this.toggleIsPlaying})))}}]),t}(r.a.Component);a(18),a(19);var B=function(e){var t=e.sessionsCompleted;return r.a.createElement("div",{className:"sessions-completed-container"},Object(s.a)(Array(t)).map(function(e,t){return r.a.createElement("div",{className:"sessions-completed-line",key:t})}))};function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A=r.a.createElement("polyline",{points:"20 6 9 17 4 12"}),H=function(e){var t=e.svgRef,a=V(e,["svgRef"]);return r.a.createElement("svg",K({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-check",ref:t},a),A)},D=r.a.forwardRef(function(e,t){return r.a.createElement(H,K({svgRef:t},e))});a.p;function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Y=r.a.createElement("circle",{cx:12,cy:12,r:10}),_=r.a.createElement("polyline",{points:"12 6 12 12 16 14"}),q=function(e){var t=e.svgRef,a=U(e,["svgRef"]);return r.a.createElement("svg",J({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-clock",ref:t},a),Y,_)},z=r.a.forwardRef(function(e,t){return r.a.createElement(q,J({svgRef:t},e))});a.p;var F=function(e){var t=e.description,a=e.sessionsCompleted,n=e.isCompleted,l=e.startSession,c=e.toggleIsCompleted;return r.a.createElement("div",{className:"card todo-item-container"},r.a.createElement("div",{className:"todo-item-container-left"},r.a.createElement("button",{onClick:c,type:"button",className:"todo-item-complete-button"},n?r.a.createElement("div",{className:"todo-item-circle todo-item-circle-check"},r.a.createElement(D,null)):r.a.createElement("div",{className:"todo-item-circle todo-item-circle-empty"})),r.a.createElement("div",null,r.a.createElement("div",{className:"todo-item-description"},t),r.a.createElement(B,{sessionsCompleted:a}))),r.a.createElement("button",{type:"button",onClick:l,className:"todo-item-start-session-button"},r.a.createElement(z,null)))};a(20);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var X=r.a.createElement("line",{x1:12,y1:5,x2:12,y2:19}),$=r.a.createElement("line",{x1:5,y1:12,x2:19,y2:12}),ee=function(e){var t=e.svgRef,a=Q(e,["svgRef"]);return r.a.createElement("svg",G({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-plus",ref:t},a),X,$)},te=r.a.forwardRef(function(e,t){return r.a.createElement(ee,G({svgRef:t},e))}),ae=(a.p,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={newTodoItemValue:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({newTodoItemValue:t})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.addItem,a=this.state.newTodoItemValue;""!==a&&(t(a),this.setState({newTodoItemValue:""}))}},{key:"render",value:function(){var e=this.state.newTodoItemValue;return r.a.createElement("div",{className:"todo-input-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"Add Task...",value:e,onChange:this.handleChange,className:"todo-input"}),r.a.createElement("button",{type:"submit",className:"todo-input-button"},r.a.createElement(te,null))))}}]),t}(r.a.Component));function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var le=r.a.createElement("polyline",{points:"21 8 21 21 3 21 3 8"}),ce=r.a.createElement("rect",{x:1,y:3,width:22,height:5}),se=r.a.createElement("line",{x1:10,y1:12,x2:14,y2:12}),oe=function(e){var t=e.svgRef,a=re(e,["svgRef"]);return r.a.createElement("svg",ne({width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-archive",ref:t},a),le,ce,se)},ie=r.a.forwardRef(function(e,t){return r.a.createElement(oe,ne({svgRef:t},e))});a.p;var me=function(e){var t=e.onClick;return r.a.createElement("button",{className:"clear-button",type:"button",onClick:t},r.a.createElement(ie,null))};function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var de=r.a.createElement("defs",null,r.a.createElement("style",null,".cls-1{fill:#e2e2e2;}.cls-2{fill:#f3f3f3;}.cls-3{fill:#d37c59;}.cls-4{fill:#de8e68;}.cls-5{fill:#56cad8;}.cls-6{fill:#74d5de;}.cls-7{fill:#fed385;}.cls-8{fill:#dc8e6c;}.cls-9{fill:#fb836d;}.cls-10{fill:#d3d3d3;}.cls-11,.cls-13,.cls-14,.cls-15,.cls-16{fill:none;}.cls-11{stroke:#d3d3d3;stroke-miterlimit:10;}.cls-11,.cls-14,.cls-15{stroke-width:3.69px;}.cls-12{fill:#fed892;}.cls-13,.cls-14,.cls-16{stroke:#fed385;}.cls-13,.cls-14,.cls-15,.cls-16{stroke-linecap:round;stroke-linejoin:round;}.cls-13{stroke-width:3.84px;}.cls-15{stroke:#74d5de;}.cls-16{stroke-width:2.39px;}")),pe=r.a.createElement("title",null,"Artboard 1"),he=r.a.createElement("path",{className:"cls-1",d:"M711.1,528.1c0-21.86-47-74.85-84.67-74.85-28.93,0-29.4,15.3-57.59,15.3-43.46,0-75.71-72.66-159.29-72.66-89.05,0-205.41,83.58-205.41,149.14C204.14,638.91,711.1,661.41,711.1,528.1Z"}),ye=r.a.createElement("path",{className:"cls-2",d:"M935.51,849.68c1-102,2.6-265.85,2.6-290.1,0-35.58-52.84-142.15-145.27-142.15-101.26,0-151.3,116.21-217.58,116.21-60.75,0-65.54-30.76-140.74-30.76-49,0-149.82,62.8-149.82,127l67.11,219.75Z"}),ve=r.a.createElement("ellipse",{className:"cls-3",cx:602.59,cy:679.96,rx:11.73,ry:5.25,transform:"translate(-105.6 1249.11) rotate(-87.24)"}),be=r.a.createElement("path",{className:"cls-3",d:"M590.19,739.68c-.2-1.94,4.32-42.23,7.92-55a16,16,0,0,1,6.71-.94l-.34,39.7-5,18.67Z"}),ge=r.a.createElement("polygon",{points:"620.7 683.58 589.26 686.18 588.26 679.96 618.52 670.39 620.7 683.58"}),Ee=r.a.createElement("rect",{className:"cls-4",x:544.3,y:999.24,width:13.77,height:11.65}),Oe=r.a.createElement("rect",{className:"cls-4",x:586.9,y:1001.06,width:13.77,height:11.65}),je=r.a.createElement("path",{className:"cls-5",d:"M542.87,805V999.88H559l18.54-104.26S580.09,839.22,542.87,805Z"}),xe=r.a.createElement("path",{className:"cls-6",d:"M596,801.16c.45,5.62,6.06,107.88,6.06,107.88v93.11l-16.55,1.77-10.64-99-32-99.92C547.71,802.34,583.16,797.33,596,801.16Z"}),ke=r.a.createElement("path",{className:"cls-7",d:"M566.51,715.47c31.79,0,33.3,80.83,29.52,85.69s-49,8.17-53.16,3.83S526.9,715.47,566.51,715.47Z"}),Ne=r.a.createElement("ellipse",{className:"cls-4",cx:607.86,cy:679.96,rx:11.73,ry:5.25,transform:"translate(-100.59 1254.37) rotate(-87.24)"}),Ce=r.a.createElement("polygon",{points:"585.61 1010.89 585.61 1022.54 618.35 1022.54 618.35 1018.3 601.32 1010.89 585.61 1010.89"}),we=r.a.createElement("polygon",{points:"543.87 1009.05 543.87 1020.7 576.61 1020.7 576.61 1016.46 559.58 1009.05 543.87 1009.05"}),Ie=r.a.createElement("rect",{x:585.55,y:681.34,width:3.86,height:3.86,transform:"translate(-98.87 99.39) rotate(-8.92)"}),Se=r.a.createElement("path",{className:"cls-3",d:"M568.84,722.5c0,2.67-12.41,3-12.41,0V696h12.41Z"}),Re=r.a.createElement("ellipse",{className:"cls-8",cx:568.46,cy:688.32,rx:13.03,ry:19.89}),Pe=r.a.createElement("path",{className:"cls-9",d:"M545.77,680.12c0-6.13,2.67-10,4.84-11.23,4.19-2.4,5.94-1.33,10.16-3.2,4.57-2,8.49-7.84,13.84-7.84,5,0,4.55,2.84,7.94,3.68,2,.49,13.36-2.12,13.36,5.23,0,11.32-12.57,12.24-15.48,13.69a37.43,37.43,0,0,0-1.52-3.83c-2.29,2.36-10.58,4-11.92,4.53-3.1,1.28-4.58,6.13-4.58,9.3s-2.87,3.18-3.59,3.18C552.19,693.63,545.77,689.38,545.77,680.12Z"}),Me=r.a.createElement("circle",{className:"cls-8",cx:556.67,cy:691.67,r:4.33}),Ze=r.a.createElement("rect",{className:"cls-10",x:512.81,y:718.34,width:25.14,height:84.61,rx:12.57,ry:12.57}),Le=r.a.createElement("ellipse",{className:"cls-11",cx:544.89,cy:751.24,rx:30.38,ry:32.89}),We=r.a.createElement("path",{className:"cls-4",d:"M576.84,736.83c2.53,0,15.29.53,20.48,2.4.4-2.53,2.66-38.77,6.51-50.91,1.47-1.62,7.45-1.43,7.45,0s8.51,60.88,0,67.93-37.37-2.4-38.56-3.33S576.84,736.83,576.84,736.83Z"}),Te=r.a.createElement("path",{className:"cls-12",d:"M549.66,734.69c2.82-11.48,28.36-1.93,30.67.69,2.77,3.14-2.18,20.84-6,21.66C568.1,758.39,546,749.58,549.66,734.69Z"}),Be=r.a.createElement("polygon",{className:"cls-12",points:"266.38 341.65 142.64 849.68 390.13 849.68 266.38 341.65"}),Ke=r.a.createElement("polygon",{className:"cls-5",points:"169.62 341.65 45.87 893.9 293.36 893.9 169.62 341.65"}),Ve=r.a.createElement("line",{className:"cls-13",x1:170.29,y1:891.44,x2:170.29,y2:395.36}),Ae=r.a.createElement("line",{className:"cls-13",x1:170.29,y1:558.95,x2:197.18,y2:529.72}),He=r.a.createElement("line",{className:"cls-13",x1:170.29,y1:698.94,x2:210.7,y2:655.02}),De=r.a.createElement("line",{className:"cls-13",x1:170.29,y1:844.98,x2:233.14,y2:776.66}),Je=r.a.createElement("line",{className:"cls-13",x1:170.29,y1:558.95,x2:143.4,y2:529.72}),Ue=r.a.createElement("line",{className:"cls-13",x1:170.29,y1:698.94,x2:129.89,y2:655.02}),Ye=r.a.createElement("line",{className:"cls-13",x1:170.29,y1:844.98,x2:107.44,y2:776.66}),_e=r.a.createElement("rect",{className:"cls-6",x:190.5,y:734.34,width:135.39,height:197.16,rx:67.69,ry:67.69}),qe=r.a.createElement("line",{className:"cls-14",x1:258.19,y1:982.94,x2:258.19,y2:795.85}),ze=r.a.createElement("path",{className:"cls-14",d:"M258.19,875.41c37,0,37-22.28,37-56"}),Fe=r.a.createElement("path",{className:"cls-14",d:"M258.19,841.33c-25.65,0-25.65-15.47-25.65-38.84"}),Ge=r.a.createElement("path",{className:"cls-7",d:"M1152.37,849.68V667.57a81.52,81.52,0,0,0-81.28-81.28h0a81.65,81.65,0,0,0-13.07,1.06V377.78a55.64,55.64,0,0,0-55.63-55.64h0a55.64,55.64,0,0,0-55.64,55.64v44.86a80.64,80.64,0,0,0-26-4.31h0a81.52,81.52,0,0,0-81.28,81.29V649H804.08a55.7,55.7,0,0,0-55.53,55.53V833.86a55.18,55.18,0,0,0,2.32,15.82Z"}),Qe=r.a.createElement("path",{className:"cls-15",d:"M1000.16,740.85c91.61,0,91.61-41,91.61-103"}),Xe=r.a.createElement("path",{className:"cls-15",d:"M1000.25,795.48c-50.4,0-50.4-22.56-50.4-56.67"}),$e=r.a.createElement("line",{className:"cls-15",x1:1000.16,y1:849.68,x2:1000.16,y2:364.17}),et=r.a.createElement("line",{className:"cls-15",x1:1000.16,y1:637.85,x2:949.94,y2:587.62}),tt=r.a.createElement("line",{className:"cls-15",x1:1000.16,y1:534.21,x2:1030.55,y2:503.83}),at=r.a.createElement("path",{className:"cls-2",d:"M750.49,341.65a47.18,47.18,0,0,0-86.25-35.55,37.43,37.43,0,0,0-52.84,34.1c0,.49,0,1,0,1.45Z"}),nt=r.a.createElement("path",{className:"cls-2",d:"M291.91,268.28a47.18,47.18,0,0,1,86.25-35.55A37.4,37.4,0,0,1,431,266.83c0,.48,0,1,0,1.45Z"}),rt=r.a.createElement("path",{className:"cls-6",d:"M924.33,936.06c-50.28,0-91,21.47-91,48h182.05C1015.35,957.53,974.6,936.06,924.33,936.06Z"}),lt=r.a.createElement("path",{className:"cls-9",d:"M502.76,1006.93c-12.55,0-22.73,8.76-22.73,19.57H525.5C525.5,1015.69,515.32,1006.93,502.76,1006.93Z"}),ct=r.a.createElement("path",{className:"cls-9",d:"M833.3,902.44c-12.56,0-22.73,13-22.73,29.06H856C856,915.45,845.85,902.44,833.3,902.44Z"}),st=r.a.createElement("path",{className:"cls-9",d:"M120.87,974.57c-20,0-36.16,6.51-36.16,14.53H157C157,981.08,140.84,974.57,120.87,974.57Z"}),ot=r.a.createElement("path",{className:"cls-9",d:"M1030.55,974.57c-20,0-36.16,6.51-36.16,14.53h72.31C1066.7,981.08,1050.52,974.57,1030.55,974.57Z"}),it=r.a.createElement("rect",{className:"cls-6",x:838.22,y:746.55,width:87.67,height:127.66,rx:43.83,ry:43.83}),mt=r.a.createElement("line",{className:"cls-16",x1:882.06,y1:907.53,x2:882.06,y2:786.38}),ut=r.a.createElement("path",{className:"cls-16",d:"M882.06,837.9C906,837.9,906,823.47,906,801.64"}),ft=r.a.createElement("path",{className:"cls-16",d:"M882.06,815.83c-16.61,0-16.61-10-16.61-25.16"}),dt=r.a.createElement("line",{className:"cls-14",x1:331.71,y1:947.65,x2:412.75,y2:947.65}),pt=r.a.createElement("line",{className:"cls-14",x1:668.4,y1:893.9,x2:722.14,y2:893.9}),ht=r.a.createElement("line",{className:"cls-14",x1:627.87,y1:907.53,x2:681.62,y2:907.53}),yt=r.a.createElement("line",{className:"cls-14",x1:116.88,y1:918.64,x2:170.63,y2:918.64}),vt=r.a.createElement("line",{className:"cls-14",x1:748.55,y1:999.24,x2:824.1,y2:999.24}),bt=function(e){var t=e.svgRef,a=fe(e,["svgRef"]);return r.a.createElement("svg",ue({id:"Layer_2","data-name":"Layer 2",viewBox:"0 0 1200 1200",ref:t},a),de,pe,he,ye,ve,be,ge,Ee,Oe,je,xe,ke,Ne,Ce,we,Ie,Se,Re,Pe,Me,Ze,Le,We,Te,Be,Ke,Ve,Ae,He,De,Je,Ue,Ye,_e,qe,ze,Fe,Ge,Qe,Xe,$e,et,tt,at,nt,rt,lt,ct,st,ot,it,mt,ut,ft,dt,pt,ht,yt,vt)},gt=r.a.forwardRef(function(e,t){return r.a.createElement(bt,ue({svgRef:t},e))});a.p;var Et=function(){return r.a.createElement("div",{className:"empty-state-container"},r.a.createElement(gt,null),r.a.createElement("p",{className:"empty-state-text"},"Your todolist is empty"))},Ot=(a(21),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).addItem=a.addItem.bind(Object(d.a)(Object(d.a)(a))),a.clearCompletedItems=a.clearCompletedItems.bind(Object(d.a)(Object(d.a)(a))),a.startSession=a.startSession.bind(Object(d.a)(Object(d.a)(a))),a.increaseSessionsCompleted=a.increaseSessionsCompleted.bind(Object(d.a)(Object(d.a)(a))),a.toggleItemIsCompleted=a.toggleItemIsCompleted.bind(Object(d.a)(Object(d.a)(a))),a.toggleIsCompleted=a.toggleIsCompleted.bind(Object(d.a)(Object(d.a)(a))),a.state={items:[],nextItemId:0,sessionIsRunning:!1,itemIdRunning:null},a}return Object(f.a)(t,e),Object(i.a)(t,[{key:"addItem",value:function(e){var t=this,a=this.state.nextItemId,n={id:a,description:e,sessionsCompleted:0,isCompleted:!1};this.setState(function(e){return{items:t.state.items.concat(n),nextItemId:a+1}})}},{key:"clearCompletedItems",value:function(){var e=Object(s.a)(this.state.items);this.setState(function(){return{items:Object(s.a)(e.filter(function(e){return!1===e.isCompleted}))}})}},{key:"increaseSessionsCompleted",value:function(e){var t=Object(s.a)(this.state.items);t.map(function(a,n){a.id===e&&(t[n].isCompleted=!t[n].isCompleted)}),this.setState(function(){return{items:Object(s.a)(t)}})}},{key:"toggleItemIsCompleted",value:function(e){var t=Object(s.a)(this.state.items);t.map(function(a,n){a.id===e&&t[n].sessionsCompleted++}),this.setState(function(){return{items:Object(s.a)(t)}})}},{key:"startSession",value:function(e){this.setState(function(){return{sessionIsRunning:!0,itemIdRunning:e}})}},{key:"toggleIsCompleted",value:function(e){var t=Object(s.a)(this.state.items);t.map(function(a,n){a.id===e&&(t[n].isCompleted=!t[n].isCompleted)}),this.setState(function(){return{items:Object(s.a)(t)}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.sessionIsRunning,l=t.itemIdRunning;t.areItemsMarkedAsCompleted;return r.a.createElement("div",{className:"flex-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("h1",{className:"heading"},"Today"),r.a.createElement(me,{onClick:this.clearCompletedItems})),n&&r.a.createElement(T,{key:l,mode:"WORK",onSessionComplete:function(){console.log("complete"),e.increaseSessionsCompleted(l)},autoPlays:!0}),r.a.createElement("div",{className:"items-container"},0==a.length?r.a.createElement(Et,null):a.map(function(t,a){return r.a.createElement(F,{key:t.id,description:t.description,sessionsCompleted:t.sessionsCompleted,isCompleted:t.isCompleted,startSession:function(){return e.startSession(t.id)},toggleItemIsCompleted:function(){return e.toggleItemIsCompleted(t.id)},toggleIsCompleted:function(){return e.toggleIsCompleted(t.id)}})}))),r.a.createElement("footer",null,r.a.createElement(ae,{addItem:this.addItem})))}}]),t}(r.a.Component));c.a.render(r.a.createElement(Ot,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.0171d943.chunk.js.map