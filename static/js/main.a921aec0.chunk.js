(this["webpackJsonphomepage-win95"]=this["webpackJsonphomepage-win95"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('["(GMT-11:00) Pacific/Pago_Pago","(GMT-10:00) Pacific/Honolulu","(GMT-08:00) America/Los_Angeles","(GMT-07:00) America/Denver","(GMT-06:00) America/Chicago","(GMT-06:00) America/Guatemala","(GMT-05:00) America/Bogota","(GMT-05:00) America/New_York","(GMT-05:00) America/Lima","(GMT-04:30) America/Caracas","(GMT-04:00) America/Guyana","(GMT-04:00) America/La_Paz","(GMT-03:00) America/Argentina/Buenos_Aires","(GMT-03:00) America/Godthab","(GMT-03:00) America/Montevideo","(GMT-03:00) America/Santiago","(GMT-02:00) America/Sao_Paulo","(GMT-02:00) Atlantic/South_Georgia","(GMT-01:00) Atlantic/Azores","(GMT-01:00) Atlantic/Cape_Verde","(GMT+00:00) Africa/Casablanca","(GMT+00:00) Europe/Dublin","(GMT+00:00) Europe/Lisbon","(GMT+00:00) Europe/London","(GMT+00:00) Africa/Monrovia","(GMT+01:00) Africa/Algiers","(GMT+01:00) Europe/Amsterdam","(GMT+01:00) Europe/Berlin","(GMT+01:00) Europe/Brussels","(GMT+01:00) Europe/Budapest","(GMT+01:00) Europe/Copenhagen","(GMT+01:00) Europe/Madrid","(GMT+01:00) Europe/Paris","(GMT+01:00) Europe/Rome","(GMT+01:00) Europe/Stockholm","(GMT+01:00) Europe/Vienna","(GMT+01:00) Europe/Warsaw","(GMT+02:00) Europe/Athens","(GMT+02:00) Europe/Bucharest","(GMT+02:00) Africa/Cairo","(GMT+02:00) Asia/Jerusalem","(GMT+02:00) Africa/Johannesburg","(GMT+02:00) Europe/Helsinki","(GMT+02:00) Europe/Kiev","(GMT+02:00) Europe/Riga","(GMT+02:00) Europe/Sofia","(GMT+02:00) Europe/Tallinn","(GMT+02:00) Europe/Vilnius","(GMT+03:00) Europe/Istanbul","(GMT+03:00) Asia/Baghdad","(GMT+03:00) Africa/Nairobi","(GMT+03:00) Europe/Minsk","(GMT+03:00) Asia/Riyadh","(GMT+03:30) Asia/Tehran","(GMT+04:00) Asia/Baku","(GMT+04:00) Asia/Tbilisi","(GMT+04:00) Asia/Yerevan","(GMT+04:30) Asia/Kabul","(GMT+05:00) Asia/Karachi","(GMT+05:00) Asia/Tashkent","(GMT+05:30) Asia/Colombo","(GMT+06:00) Asia/Almaty","(GMT+06:00) Asia/Dhaka","(GMT+06:30) Asia/Rangoon","(GMT+07:00) Asia/Bangkok","(GMT+07:00) Asia/Jakarta","(GMT+08:00) Asia/Hong_Kong","(GMT+08:00) Asia/Kuala_Lumpur","(GMT+08:00) Asia/Singapore","(GMT+08:00) Asia/Taipei","(GMT+08:00) Asia/Ulaanbaatar","(GMT+09:00) Asia/Seoul","(GMT+09:00) Asia/Tokyo","(GMT+10:00) Pacific/Guam","(GMT+10:00) Pacific/Port_Moresby","(GMT+11:00) Pacific/Guadalcanal","(GMT+11:00) Pacific/Noumea","(GMT+12:00) Pacific/Majuro","(GMT+13:00) Pacific/Auckland","(GMT+13:00) Pacific/Fakaofo","(GMT+13:00) Pacific/Fiji","(GMT+13:00) Pacific/Tongatapu","(GMT+14:00) Pacific/Apia"]')},38:function(e,t,n){e.exports=n(67)},43:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),c=n.n(r),l=(n(43),n(26)),o=n(13),s=n(4),u=n(7),p=n(6),m=n(9),d=n(8),h=n(10),f=n(37),v=n(2),T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={open:!1},n.handleClick=n.handleClick.bind(Object(v.a)(n)),n.handleBlur=n.handleBlur.bind(Object(v.a)(n)),n.handleClose=n.handleClose.bind(Object(v.a)(n)),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(){if(this.props.popover){var e=this.state.open;this.setState({open:!e})}(0,this.props.onClick)()}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"handleBlur",value:function(){this.props.closeOnBlur&&this.handleClose()}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.trigger,a=t.popover,r=t.horizontalAlign,c=t.verticalAlign,l=t.variant;return i.a.createElement("div",{style:{position:"relative",display:"inline-block"}},e&&a&&i.a.createElement(s.List,{horizontalAlign:r,verticalAlign:c},a),i.a.createElement(s.Button,{onBlurCapture:this.handleBlur,onClick:this.handleClick,active:e,variant:l},n))}}]),t}(i.a.Component);T.defaultProps={popover:null,closeOnBlur:!0,trigger:i.a.createElement("span",null," "),horizontalAlign:"right",verticalAlign:"top",onClick:function(){},variant:"menu"};var E=T,A=n(3),b=n(15),g=n(23),M=n(29),O=n.n(M),G=(n(49),n(14)),k=function(e){var t=document.body;e instanceof HTMLElement&&(t=e);var n=document.webkitIsFullScreen||document.mozFullScreen||!1;t.requestFullScreen=t.requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||function(){return!1},document.cancelFullScreen=document.cancelFullScreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||function(){return!1},n?document.cancelFullScreen():t.requestFullScreen()},j=new G.EventEmitter,y="TIMEZONE_LIST",C="TIMEZONELIST_UPDATE",S=function(){return j.emit(C)},N=function(e){return j.off(C,e)},w=function(e){return t=y,n=e,localStorage.setItem(t,JSON.stringify(n));var t,n},P=function(){return e=y,JSON.parse(localStorage.getItem(e));var e},z=n(30).map((function(e){return{label:e,value:e,lag:parseInt(e.replace(/^\(GMT([-+]\d{2}).*$/,"$1"),10)}})),L=z.findIndex((function(e){return"(GMT+08:00) Asia/Taipei"===e.value})),I=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).onSortEnd=function(e){var t=e.oldIndex,a=e.newIndex,i=n.state.timezoneList,r=O()(i,t,a);w(r),S()},n.onSelectChange=function(e){n.setState({selectedTimezone:e})},n.submitAddTz=function(){var e=n.state,t=e.timezoneSelections,a=e.selectedTimezone,i=e.timezoneList,r=t.find((function(e){return e.value===a})),c=[].concat(Object(b.a)(i),[r]);w(c),n.setState({timezoneList:c}),S()},n.handleDelete=function(e){var t=n.state.timezoneList,a=t.findIndex((function(t){return t.value===e}));t.splice(a,1),w(t),n.setState({timezoneList:t}),S()},n.state={timezoneSelections:z,selectedTimezone:z[L].value,timezoneList:P()||[]},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.timezoneSelections,a=t.timezoneList,r=Object(g.b)((function(t){var n=t.value;return i.a.createElement(s.ListItem,{key:n.label},i.a.createElement("div",{className:"timezone-list-item"},i.a.createElement("div",{className:"label"},n.label),i.a.createElement(s.Button,{onClick:function(){return e.handleDelete(n.value)},style:{marginRight:"-6px",marginTop:"1px"},size:"sm",square:!0},i.a.createElement("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"}},"X"))))})),c=Object(g.a)((function(e){var t=e.items;return i.a.createElement("ul",null,t&&t.map((function(e,t){return i.a.createElement(r,{key:"item-".concat(e.value),index:t,value:e})})))}));return i.a.createElement("div",{className:"tz-editor"},i.a.createElement(s.Fieldset,{label:"ADD A TIMEZONE"},i.a.createElement("div",{className:"tz-add"},i.a.createElement(s.Select,{selectedIndex:L,items:n,onChange:this.onSelectChange,height:"100px",width:"400px"}),i.a.createElement(s.Button,{onClick:this.submitAddTz,disabled:a.length>=5},i.a.createElement("span",null,"ADD")))),i.a.createElement(s.Fieldset,{label:"SELECTED TIMEZONE"},i.a.createElement(c,{items:a,onSortEnd:this.onSortEnd,distance:2})))}}]),t}(i.a.Component),B=n(31),D=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).parentClassname=null,n.handleCloseApp=function(){var e=n.props.appid;window.terminateApp(e)},n.getParentClassName=function(){return n._reactInternalFiber._debugOwner.type.name},n.state={},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.parentClassname=this.getParentClassName()}},{key:"render",value:function(){var e=this.props,t=e.header,n=e.content,a=e.width,r=e.height,c=e.enableResizing;return i.a.createElement(B.a,{default:{x:0,y:0,width:a,height:r},dragHandleClassName:"header",enableResizing:c},i.a.createElement(s.Window,{style:{width:"100%",height:"100%"}},i.a.createElement(s.WindowHeader,{className:"header",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},t,i.a.createElement(s.Button,{onClick:this.handleCloseApp,style:{marginRight:"-6px",marginTop:"1px"},size:"sm",square:!0},i.a.createElement("span",{style:{fontWeight:"bold",transform:"translateY(-1px)"}},"X"))),i.a.createElement(s.WindowContent,{style:{overflow:"hidden"}},n)))}}]),t}(i.a.Component);D.defaultProps={header:i.a.createElement("span",null,"APPLICATION"),content:i.a.createElement("div",null,"_BLANK"),width:"auto",height:"auto",enableResizing:!0};var x=D,F=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).appName="system.clocksetting",n.state={},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=i.a.createElement("span",null,"Clock Setting"),t=i.a.createElement(I,null);return i.a.createElement(x,{header:e,content:t,enableResizing:!1,appid:this.appName})}}]),t}(i.a.Component),R={APP:"APPS",SETTING:"SETTINGS",ABOUT:"ABOUT"},_=[{id:"system.clocksetting",app:F,catalog:R.SETTING,name:"Clock Setting"}];function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleClickMainlistItem=function(e){var t=n.state.mainList.map((function(t,n){return J({},t,{active:n===e})}));n.setState({mainList:t})},n.handleClickApplication=function(e){window.launchApp(e.id)};var a=Object.keys(R).map((function(e,t){return{name:R["".concat(e)],active:0===t,children:_.filter((function(t){return t.catalog===R["".concat(e)]})).map((function(e){return J({},e)}))}}));return n.state={mainList:a},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.mainList,n=t.find((function(e){return e.active})).children||[];return i.a.createElement("div",{className:"startmenu"},i.a.createElement("div",{className:"panel left"},t.map((function(t,n){return i.a.createElement(s.ListItem,{onClick:function(){return e.handleClickMainlistItem(n)},style:{textDecoration:t.active?"underline":"none"}},t.name)}))),i.a.createElement(s.Divider,{vertical:!0,size:"sm",style:{height:"100%"}}),i.a.createElement("div",{className:"panel right"},n.map((function(t){return i.a.createElement(s.ListItem,{onClick:function(){return e.handleClickApplication(t)}},t.name)}))))}}]),t}(i.a.Component),q=(n(53),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=i.a.createElement("span",null,"START"),t=i.a.createElement(W,null);return i.a.createElement(E,{trigger:e,popover:t,horizontalAlign:"left",closeOnBlur:!1,variant:"default"})}}]),t}(i.a.Component)),K=n(20),U=n.n(K),Y=n(21),Z=n.n(Y),V=(n(62),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).componentWillUnmount=function(){clearInterval(n.timeout),N(n.updateTimezoneList)},n.updateCurrentTime=function(){n.setState({currentTime:Z()()})},n.updateTimezoneList=function(){var e=P();n.setState({timezoneList:e})},n.handleClickSetting=function(){window.launchApp("system.clocksetting")},n.handleClickClose=function(){n.dockAppRef.current.handleClose()},n.state={timeFormat:"HH:mm:ss",currentTime:Z()(),timezoneList:P()||[]},n.timeout=null,n.dockAppRef=i.a.createRef(),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;this.timeout=setInterval((function(){t.updateCurrentTime()}),10),e=this.updateTimezoneList,j.on(C,e)}},{key:"render",value:function(){var e=this.state,t=e.currentTime,n=e.timeFormat,a=e.timezoneList,r=i.a.createElement("span",null,t.format(n)),c=i.a.createElement("div",{className:"clock-popover"},i.a.createElement("div",{className:"clock-display"},i.a.createElement("div",{className:"one-clock"},i.a.createElement(U.a,{value:t.toDate()}),i.a.createElement("div",{className:"desc"},"LOCAL TIME")),a.map((function(e){var n=e.lag,a=e.label;return i.a.createElement("div",{className:"one-clock"},i.a.createElement(U.a,{value:t.add(n,"h").toDate()}),i.a.createElement("div",{className:"desc"},a.split(" ").join("\n")))}))),i.a.createElement("div",{className:"panel"},i.a.createElement(s.Button,{onClick:this.handleClickSetting},"SETTING"),i.a.createElement(s.Button,{onClick:this.handleClickClose},"X")));return i.a.createElement(E,{trigger:r,popover:c,closeOnBlur:!1,ref:this.dockAppRef})}}]),t}(i.a.Component)),X=n(34),$=i.a.createElement("span",null,i.a.createElement(X.a,null)),Q=function(){return i.a.createElement(E,{trigger:$,onClick:k})},ee=n(33),te=n(22),ne=(n(63),n(5)),ae=new G.EventEmitter;window.launchApp=function(e){return ae.emit("launch",e)},window.terminateApp=function(e){return ae.emit("terminate",e)},window.killApp=function(e){return ae.emit("kill",e)};var ie,re,ce=ae,le=new(ie=function(){function e(){Object(u.a)(this,e),this.appid=0,Object(ee.a)(this,"runningApps",re,this),Object(ne.d)((function(){return console.log("system")}))}return Object(p.a)(e,[{key:"runningAppids",get:function(){return this.runningApps.map((function(e){return e.id}))}}]),Object(p.a)(e,[{key:"launchApp",value:function(e){var t=e.id;if(this.runningAppids.includes(t))return-1;this.appid+=1;var n=e.app,a=i.a.createElement(n,{key:this.appid}),r=e.name||"UNKNOWN APP";return this.runningApps.push({id:t,displayName:r,app:a,pid:this.appid,isActive:!0}),this.activateApp(t),this.appid}},{key:"activateApp",value:function(e){for(var t=0;t<this.runningApps.length;t+=1)this.runningApps[t].isActive=e===this.runningApps[t].id}},{key:"terminateApp",value:function(e){this.runningApps=this.runningApps.filter((function(t){return t.id!==e}))}},{key:"killApp",value:function(e){this.runningApps=this.runningApps.filter((function(t){return t.pid!==e}))}}]),e}(),re=Object(te.a)(ie.prototype,"runningApps",[ne.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(te.a)(ie.prototype,"runningAppids",[ne.e],Object.getOwnPropertyDescriptor(ie.prototype,"runningAppids"),ie.prototype),ie);ce.on("launch",(function(e){var t=_.find((function(t){return t.id.split("#")[0]===e}));t&&console.log(le.launchApp(t))})),ce.on("terminate",(function(e){le.terminateApp(e)})),ce.on("kill",(function(e){le.killApp(e)}));var oe,se=le,ue=(n(64),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){n.props.store.activateApp(e)},n.state={},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.store;return i.a.createElement(s.AppBar,{style:{top:"auto",bottom:0}},i.a.createElement(s.Toolbar,null,i.a.createElement("div",null,i.a.createElement(q,null)),i.a.createElement("div",{className:"running-apps"},t.runningApps.map((function(t){return i.a.createElement(s.Button,{className:"app-docker",onClick:function(){return e.handleClick(t.id)},active:t.isActive},t.displayName)}))),i.a.createElement("div",{className:"widgets"},i.a.createElement(s.Divider,{vertical:!0,style:{margin:"6px 0",height:"auto"}}),i.a.createElement(Q,null),i.a.createElement(V,null))))}}]),t}(i.a.Component)),pe=(n(65),Object(f.a)(oe=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.store,t=e.runningApps;return i.a.createElement("div",{className:"system-view"},i.a.createElement("div",{className:"desktop"},t.map((function(e){return e.app}))),i.a.createElement("div",{className:"dock"},i.a.createElement(ue,{store:e})))}}]),t}(a.Component))||oe);pe.defaultProps={store:{runningApps:[]}};var me=pe;n(66);function de(){var e=Object(l.a)(["\n  ","\n"]);return de=function(){return e},e}var he=Object(o.createGlobalStyle)(de(),s.reset);var fe=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(he,null),i.a.createElement(o.ThemeProvider,{theme:s.themes.default},i.a.createElement(me,{store:se})))};document.addEventListener("contextmenu",(function(e){return e.preventDefault(),!1})),c.a.render(i.a.createElement(fe,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a921aec0.chunk.js.map