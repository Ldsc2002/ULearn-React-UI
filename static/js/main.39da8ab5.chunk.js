(this["webpackJsonpulearn-react-ui"]=this["webpackJsonpulearn-react-ui"]||[]).push([[0],{284:function(e,t,n){},285:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var a=n(9),o=n.n(a),c=n(66),s=n.n(c),i=n(101),r=n(21),l=n(1),d=n(2),u=n(10),h=n(11),b=n(22),j=o.a.createContext({appActions:{},deviceInfo:{}}),p=n(6),g=n(27),v=n(54),O=n(102),x=n.n(O),f=n(4),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.html!==this.editable.innerHTML}},{key:"componentDidUpdate",value:function(){this.props.html!==this.editable.innerHTML&&(this.editable.innerHTML=this.props.html)}},{key:"emitChange",value:function(){var e=this.editable.innerHTML;this.props.onChange&&e!==this.lastHtml&&this.props.onChange({target:{value:e}}),this.lastHtml=e}},{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{onInput:this.emitChange.bind(this),onBlur:this.emitChange.bind(this),contentEditable:!0,dangerouslySetInnerHTML:{__html:this.props.html},ref:function(t){return e.editable=t}})}}]),n}(a.Component),y=n(59),C=(n(294),n(257),n(259),n(58)),S="";S=y.a.apps.length?y.a.app():y.a.initializeApp({apiKey:"AIzaSyDtufOv6ScvHdl-SGog3CQmdEhtjl8oX6Q",authDomain:"ulearn-42d0d.firebaseapp.com",databaseURL:"https://ulearn-42d0d-default-rtdb.firebaseio.com/",projectId:"ulearn-42d0d",storageBucket:"ulearn-42d0d.appspot.com",messagingSenderId:"897319107558",appId:"1:1:897319107558:web:ba8d79e49bbd752e0ef427"});var k=y.a.auth(S),N=y.a.firestore(),F=Object(C.b)(),w=n(78).WidthProvider,I=n(78).Responsive;function T(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return"".concat(e()+e(),"-").concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e()).concat(e()).concat(e())}function _(e){return(e.default||e).map((function(e){var t=e.default?e.default.text:e.text||"";return e.editorState=e.editorState||v.EditorState.createWithContent(v.ContentState.createFromText(t)),e}))}I=w(I);var A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={newCounter:0,notes:e.notes?_(e.notes):[],colors:e.colors||["#86E3CE","#CCABD8"],dateFormat:e.dateFormat||"lll"},a.createBlankNote=a.createBlankNote.bind(Object(g.a)(a)),a.renderNote=a.renderNote.bind(Object(g.a)(a)),a.onLayoutChange=a.onLayoutChange.bind(Object(g.a)(a)),a.onBreakpointChange=a.onBreakpointChange.bind(Object(g.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.notes&&!this.props.notes.length&&this.fetch()}},{key:"componentWillReceiveProps",value:function(e){e.notes&&e.notes.length&&this.setState({notes:_(e.notes)}),this.setState({colors:e.colors||["#B32168","#0487A4","#F7C536","#E84A64","#10B6C1","#E84A64"],dateFormat:e.dateFormat||"lll"})}},{key:"handleTitleChange",value:function(e,t){var n=this;t.disable=!1;var a=this.state.notes;a.forEach((function(n){t.id===n.id&&(n.title=e.target.value)})),this.setState({notes:a},(function(){n.props.onTitleChange&&n.props.onTitleChange(e,t)}))}},{key:"onBreakpointChange",value:function(e){this.setState({cols:e})}},{key:"onChange",value:function(e,t){t.disable=!1;var n=this.state.notes,a=this.state.dateFormat;n.forEach((function(n){t.id===n.id&&(n.editorState=e,n.timeStamp=x()().format(a))})),"function"===typeof this.props.onChange&&this.props.onChange(function(e){return Object.assign([],e).map((function(e){return e.text=e.editorState.getCurrentContent().getPlainText(),e}))}(this.state.notes),"update")}},{key:"noteFirebase",value:function(e){var t=e.title,n=e.text,a=e.timeStamp,o=e.id;N.collection("notitas").doc(o).set({content:n,date:a,title:t})}},{key:"deleteNote",value:function(e){var t=this,n=this.state.notes,a=e.id;N.collection("notitas").doc(a).delete(),n.forEach((function(t,a){e.id===t.id&&n.splice(a,1)})),this.setState({notes:n},(function(){"function"===typeof t.props.onChange&&(t.props.onChange(t.state.notes,"delete"),"function"===typeof t.props.onDelete&&t.props.onDelete(e))}))}},{key:"createBlankNote",value:function(){var e=this.state.dateFormat,t=this.props.grid||{},n=T(),a={grid:{i:"".concat(n),x:2*this.state.notes.length%(this.state.cols||12),y:1/0,w:t.w||2,h:t.h||2},id:n,editorState:v.EditorState.createEmpty(),title:"Title",color:this.generateRandomColors(),degree:this.generateRandomDegree(-2,2),timeStamp:x()().format(e),contentEditable:!0,disable:!0};this.setState({notes:this.state.notes.concat(a),newCounter:this.state.newCounter+1}),"function"===typeof this.props.onAdd&&this.props.onAdd(a)}},{key:"createNote",value:function(e,t,n,a){var o=this.props.grid||{},c=T(),s={grid:{i:"".concat(c),x:2*this.state.notes.length%(this.state.cols||12),y:1/0,w:o.w||2,h:o.h||2},id:a,editorState:v.EditorState.createWithContent(v.ContentState.createFromText(t)),title:e,color:this.generateRandomColors(),degree:this.generateRandomDegree(-2,2),timeStamp:n,contentEditable:!1,disable:!0};this.setState({notes:this.state.notes.concat(s),newCounter:this.state.newCounter+1}),"function"===typeof this.props.onAdd&&this.props.onAdd(s)}},{key:"onLayoutChange",value:function(e){var t=this,n=this.state.notes;n.forEach((function(t){e.forEach((function(e){e.i===t.id&&(t.grid=e)}))})),this.setState({notes:n},(function(){"function"===typeof t.props.onChange&&(t.props.onChange(t.state.notes,"layout"),"function"===typeof t.props.onLayoutChange&&t.props.onLayoutChange(e))}))}},{key:"generateRandomDegree",value:function(e,t){return"".concat(Math.floor(Math.random()*(e-t+1))+t,"deg")}},{key:"generateRandomColors",value:function(){var e=this.state.colors;return e[Math.floor(Math.random()*(e.length-1))]}},{key:"fetch",value:function(){var e=this,t=[],n=[],a=[],o=[],c=T();N.collection("notitas").get().then((function(s){s.forEach((function(e){t.push(e.get("title")),n.push(e.get("content")),a.push(e.get("date")),o.push(e.id)}));for(var i=0;i<t.length;i++)e.createNote(t[i],n[i],a[i],o[i]);0===t.length&&e.createNote("Welcome","This is an example","May 1, 2022 3:17 PM",c)}))}},{key:"renderNote",value:function(e){var t=this,n=Object(r.a)({display:1===this.state.notes.length?"none":"block"},this.props.closeStyle||{}),a=this.props.addStyle||{},o=this.props.closeIcon||"",c=this.props.addIcon||"",s=Object(r.a)({background:e.color,transform:e.degree},this.props.noteStyle||{}),i=Object(r.a)({display:!1===this.props.header?"none":"block"},this.props.noteHeaderStyle||{}),l=this.props.noteBodyStyle||{},d=Object(r.a)({display:!1===this.props.title?"none":"block"},this.props.noteTitleStyle||{}),u=Object(r.a)({display:!1===this.props.footer?"none":"block"},this.props.noteFooterStyle||{}),h=e.grid.add?"+":e.grid.i,b=e.grid;return b.y=b.y||1/0,Object(f.jsx)("div",{"data-grid":b,children:Object(f.jsxs)("aside",{className:"note-wrap note ".concat(this.props.tape?"tape":""),style:s,children:[Object(f.jsxs)("div",{class:"pushpin tilted",children:[Object(f.jsx)("div",{class:"pinhead"}),Object(f.jsx)("div",{class:"pinbase"}),Object(f.jsx)("div",{class:"pinshaft"}),Object(f.jsx)("div",{class:"pinpoint"})]}),Object(f.jsxs)("div",{className:"note-header",style:i,children:[Object(f.jsx)("div",{className:"".concat(c?"":"add"),onClick:this.createBlankNote,style:a,children:c}),Object(f.jsx)("div",{className:"title",stycle:d,children:Object(f.jsx)(m,{html:e.title,onChange:function(n){return t.handleTitleChange(n,e)}})}),Object(f.jsx)("div",{className:"".concat(o?"":"close"),style:n,onClick:function(){return t.deleteNote(e)},children:o})]}),Object(f.jsx)("input",{disabled:e.disable,className:"note-footerB",style:u,type:"button",id:"save",value:"Save",onClick:function(){return t.noteFirebase(e)}}),Object(f.jsx)("div",{className:"note-body",id:"myInput",style:l,children:Object(f.jsx)(v.Editor,{editorState:e.editorState,onChange:function(n){return t.onChange(n,e)},placeholder:"Add your notes..."})}),Object(f.jsx)("div",{className:"note-footer",style:u,children:e.timeStamp})]})},h)}},{key:"render",value:function(){var e=this.props.grid||{},t={className:"layout",cols:e.cols||{lg:12,md:10,sm:6,xs:4,xxs:2},rowHeight:e.rowHeight||100,isDraggable:void 0===e.isDraggable||e.isDraggable,isResizable:void 0===e.isResizable||e.isResizable,useCSSTransforms:void 0===e.useCSSTransforms||e.useCSSTransforms,margin:e.margin},n=this.props.wrapperStyle||{};return Object(f.jsx)("div",{className:"react-stickies-wrapper clearfix",style:n,children:Object(f.jsx)(I,Object(r.a)(Object(r.a)({onLayoutChange:this.onLayoutChange},t),{},{children:this.state.notes.map(this.renderNote)}))})}}]),n}(a.Component),M=(n(278),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={notes:[],showTape:!0,showTitle:!0,output:"",colors:["#FFFFFF"]},a.toggleValue=a.toggleValue.bind(Object(g.a)(a)),a.onChange=a.onChange.bind(Object(g.a)(a)),a}return Object(d.a)(n,[{key:"onChange",value:function(e){this.setState({output:JSON.stringify(e,null,2),notes:e})}},{key:"toggleValue",value:function(e){this.setState(Object(p.a)({},e.target.name,!this.state[e.target.name]))}},{key:"render",value:function(){var e={};return this.state.showBound&&(e={height:"700px",width:"700px",background:"rgba(0, 0, 0, 0.2)",border:"2px solid #fff",overflow:"auto",padding:"10px"}),Object(f.jsx)("div",{children:Object(f.jsx)(A,{notes:this.state.notes,tape:this.state.showTape,style:{float:"left"},colors:this.state.showCustomColors?this.state.colors:void 0,title:this.state.showTitle,footer:this.state.showFooter,onChange:this.onChange,wrapperStyle:e})})}}]),n}(a.Component)),E=n(14),D=n(78).WidthProvider,B=n(78).Responsive;B=D(B);var R=function(e){var t=e.books.map((function(t){return Object(f.jsxs)("div",{className:"book-item",children:[Object(f.jsx)("h2",{className:"title",children:t.title}),Object(f.jsx)("p",{className:"desc",children:t.content}),Object(f.jsx)("button",{type:"button",onClick:function(){return e.setButton(!0,t)},children:"Abrir"})]},t.id)}));return Object(f.jsx)(B,{children:t})};var L=function(e){return e.trigger?Object(f.jsx)("div",{className:"popup",children:Object(f.jsxs)("div",{className:"popup-inner",children:[Object(f.jsx)("button",{type:"button",className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:"x"}),e.children]})}):""};var P=function(){var e=[];return N.collection("archivos").get().then((function(t){t.forEach((function(t){var n=t.get("titulo"),a=t.get("content"),o=t.get("file"),c={id:t.id,title:n,content:a,file:o};e.push(c)}))})),e}();var U=function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(E.a)(s,2),r=i[0],l=i[1],d=Object(a.useState)(""),u=Object(E.a)(d,2),h=u[0],b=u[1],j=Object(a.useState)(""),p=Object(E.a)(j,2),g=p[0],v=p[1],O=Object(a.useState)(""),x=Object(E.a)(O,2),m=x[0],y=x[1],S=Object(a.useState)(""),k=Object(E.a)(S,2),w=k[0],I=k[1],T=Object(a.useState)({}),_=Object(E.a)(T,2),A=_[0],M=_[1],D=function(e){"titulo"===e.target.name?b(e.target.value):"descripcion"===e.target.name&&y(e.target.value)};return Object(f.jsxs)("div",{children:[Object(f.jsx)(R,{books:P,setButton:function(e,t){M(t),c(e)}}),Object(f.jsx)(L,{trigger:o,setTrigger:c,onClick:function(){return e.setButton(!1)},children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:A.title}),Object(f.jsx)("p",{children:A.content}),Object(f.jsx)("button",{type:"button",className:"popUp-btn",children:"Descargar"})]})}),Object(f.jsx)("div",{className:"botonAgregarDiv",children:Object(f.jsx)("button",{type:"button",className:"botonAgregar",onClick:function(){return l(!0)},children:"+"})}),Object(f.jsx)(L,{trigger:r,setTrigger:l,onClick:function(){return e.setShowAdd(!1)},children:Object(f.jsxs)("div",{className:"addPopUp",children:[Object(f.jsx)("input",{type:"text",placeholder:"T\xedtulo",name:"titulo",onChange:D}),Object(f.jsx)("input",{type:"text",placeholder:"Descripci\xf3n",name:"descripcion",onChange:D}),Object(f.jsx)("input",{type:"file",name:"file",onChange:function(e){var t=e.target.files[0];t&&I(t)}}),Object(f.jsx)("button",{type:"button",onClick:function(){if(w){var e=Object(C.c)(F,w.name);Object(C.d)(e,w).then((function(){Object(C.a)(e).then((function(e){v(e)})),alert("Upload file")}))}},children:"UPLOAD"}),Object(f.jsx)("button",{type:"button",className:"popUp-btn",onClick:function(){return function(e,t,n){var a=e,o=t,c=n;N.collection("archivos").add({titulo:a,content:o,file:c})}(h,m,g)},children:"Terminar"})]})})]})},z=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(U,{})})}}]),n}(a.Component);z.contextType=j;var V=n(17),H=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Y=["January","February","March","April","May","June","July","August","September","October","November","December"],W=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y,n=new Date,o="".concat(n.getDate(),"-").concat(n.getMonth()+1,"-").concat(n.getFullYear()),c=[1,2,3,4,5,6,0],s=Object(a.useState)(n),i=Object(E.a)(s,2),r=i[0],l=i[1],d=new Date(r.getFullYear(),r.getMonth()+1,0),u=new Date(r.getFullYear(),r.getMonth(),0),h=d.getDate(),b=new Date(r.getFullYear(),r.getMonth(),1).getDay(),j=c.indexOf(b)+1,p=u.getDate()-c.indexOf(b)+1,g=1,v=1,O=6,x=7,f={},m=1;m<O+1;m++)for(var y=1;y<x+1;y++)f[m]||(f[m]=[]),1===m?y<j?(f[m]=[].concat(Object(V.a)(f[m]),[{classes:"in-prev-month",date:"".concat(p,"-").concat(0===r.getMonth()?12:r.getMonth(),"-").concat(0===r.getMonth()?r.getFullYear()-1:r.getFullYear()),value:p}]),p++):(f[m]=[].concat(Object(V.a)(f[m]),[{classes:"in-this-month",date:"".concat(g,"-").concat(r.getMonth()+1,"-").concat(r.getFullYear()),value:g}]),g++):m>1&&g<h+1?(f[m]=[].concat(Object(V.a)(f[m]),[{classes:"in-this-month",date:"".concat(g,"-").concat(r.getMonth()+1,"-").concat(r.getFullYear()),value:g}]),g++):(f[m]=[].concat(Object(V.a)(f[m]),[{classes:"in-next-month",date:"".concat(v,"-").concat(r.getMonth()+2===13?1:r.getMonth()+2,"-").concat(r.getMonth()+2===13?r.getFullYear()+1:r.getFullYear()),value:v}]),v++);var C=function(){l((function(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}))},S=function(){l((function(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}))};return{daysShort:e,monthNames:t,todayFormatted:o,calendarRows:f,selectedDate:r,getPrevMonth:C,getNextMonth:S}};var J=function(){var e=W(),t=e.calendarRows,n=e.selectedDate,o=e.todayFormatted,c=e.daysShort,s=e.monthNames,i=e.getNextMonth,r=e.getPrevMonth,l=Object(a.useState)({contenido:"-",fecha:"dd-mm-yyyy",titulo:"-"}),d=Object(E.a)(l,2),u=d[0],h=d[1],b=Object(a.useState)(!1),j=Object(E.a)(b,2),p=j[0],g=j[1],v=Object(a.useState)(""),O=Object(E.a)(v,2),x=O[0],m=O[1],y=Object(a.useState)(""),C=Object(E.a)(y,2),S=C[0],k=C[1],F=Object(a.useState)(""),w=Object(E.a)(F,2),I=w[0],T=w[1],_=Object(a.useState)(""),A=Object(E.a)(_,2),M=A[0],D=A[1],B=Object(a.useState)(""),R=Object(E.a)(B,2),P=R[0],U=R[1],z=function(e){"titulo"===e.target.name?m(e.target.value):"dia"===e.target.name?k(e.target.value):"mes"===e.target.name?T(e.target.value):"ano"===e.target.name?D(e.target.value):"contenido"===e.target.name&&U(e.target.value)},V=function(e){console.log("entro");var t=[],n=[],a=[],o=[];console.log(e),N.collection("eventos").get().then((function(c){c.forEach((function(e){o.push(e.id),t.push(e.get("contenido")),n.push(e.get("fecha")),a.push(e.get("titulo"))}));for(var s=0;s<a.length;s++){var i={contenido:t[s],fecha:n[s],titulo:a[s],id:o[s]};n[s]===e&&(console.log("llego"),h(i))}}))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("p",{className:"mountTitle",children:["Selected Month:"," ".concat(s[n.getMonth()]," - ").concat(n.getFullYear())]}),Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:c.map((function(e){return Object(f.jsx)("th",{children:e},e)}))})}),Object(f.jsx)("tbody",{children:Object.values(t).map((function(e){return Object(f.jsx)("tr",{children:e.map((function(e){return e.date===o?Object(f.jsx)("td",{className:"".concat(e.classes," today"),onClick:function(){return V(e.date)},children:e.value},e.date):Object(f.jsx)("td",{className:e.classes,onClick:function(){return V(e.date)},children:e.value},e.date)}))},e[0].date)}))})]}),Object(f.jsxs)("div",{className:"megacontenedordebotones8000",children:[Object(f.jsx)("button",{type:"button",className:"buttonControl",onClick:r,children:"Prev"}),Object(f.jsx)("button",{type:"button",className:"buttonControl",onClick:i,children:"Next"})]}),Object(f.jsx)(L,{trigger:p,setTrigger:g,children:Object(f.jsxs)("div",{className:"preguntaInador",children:[Object(f.jsx)("div",{className:"fechaInador1",children:Object(f.jsxs)("div",{className:"ingresador",children:[Object(f.jsx)("h3",{children:"TITULO"}),Object(f.jsx)("input",{type:"text",name:"titulo",onChange:z})]})}),Object(f.jsxs)("div",{className:"fechaInador2",children:[Object(f.jsxs)("div",{className:"ingresador",children:[Object(f.jsx)("h3",{children:"DIA"}),Object(f.jsx)("input",{name:"dia",type:"text",onChange:z})]}),Object(f.jsxs)("div",{className:"ingresador",children:[Object(f.jsx)("h3",{children:"MES"}),Object(f.jsx)("input",{name:"mes",type:"text",onChange:z})]}),Object(f.jsxs)("div",{className:"ingresador",children:[Object(f.jsx)("h3",{children:"A\xd1O"}),Object(f.jsx)("input",{name:"ano",type:"text",onChange:z})]})]}),Object(f.jsx)("div",{className:"fechaInador3",children:Object(f.jsxs)("div",{className:"ingresador",children:[Object(f.jsx)("h3",{children:"CONTENIDO"}),Object(f.jsx)("input",{name:"contenido",type:"text",onChange:z})]})}),Object(f.jsx)("button",{className:"continuaBotoncito",type:"button",onClick:function(){var e="".concat(S,"-").concat(I,"-").concat(M);console.log(x," ",e," ",P);var t=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return"".concat(e()+e(),"-").concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e()).concat(e()).concat(e())}();N.collection("eventos").doc(t).set({contenido:P,fecha:e,titulo:x}),g(!1)},children:"Continuar"})]})}),Object(f.jsxs)("div",{className:"eventDiv",children:[Object(f.jsxs)("div",{className:"eventDiv1",children:[Object(f.jsxs)("h1",{children:[u.fecha," "]}),Object(f.jsx)("h1",{children:"EVENT'S"})]}),Object(f.jsxs)("div",{className:"eventDiv2",children:[Object(f.jsxs)("h2",{children:["TITULO: ",u.titulo]}),Object(f.jsxs)("h2",{children:["CONTENIDO: ",u.contenido]})]}),Object(f.jsx)("button",{type:"button",className:"buttonControl",onClick:function(){var e=u.id;N.collection("eventos").doc(e).delete();h({contenido:"",fecha:"",titulo:"",id:""}),console.log("----------------------borrar id",e)},children:"BORRAR"})]}),Object(f.jsx)("div",{className:"botonAgregarDiv",children:Object(f.jsx)("button",{type:"button",className:"botonAgregar",onClick:function(){return g(!0)},children:"+"})}),Object(f.jsx)("div",{className:"botonAgregarDiv",children:Object(f.jsx)("button",{type:"button",className:"botonAgregar",onClick:function(){return g(!0)},children:"+"})})]})},G=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Calendario",children:Object(f.jsx)("div",{className:"container has-text-centered",children:Object(f.jsx)(J,{})})})}}]),n}(a.Component);G.contextType=j;var Q=n(0),K=n(3),X=n(47),q=n.n(X),Z=n.p+"static/media/studentUlearn.5b2099a2.jpeg",$=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onClick_LogOut=Object(K.a)(Object(Q.a)().mark((function e(){return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.signOut(),a.context.appActions.goToScreen("logIn",a.context.baseScreenId,{transitionId:"fadeIn"});case 2:case"end":return e.stop()}}),e)}))),a.state={s_email:"",s_name:"",s_major:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){try{this.setState({s_email:k.currentUser.email}),this.setState({s_name:k.currentUser.displayName}),this.setState({s_major:k.currentUser.photoURL})}catch(e){this.setState({s_email:"ERROR"}),this.setState({s_name:"ERROR"}),this.setState({s_major:"ERROR"})}}},{key:"render",value:function(){var e={color:"black",paddingTop:"10px",fontFamily:"Arial"};return Object(f.jsxs)("div",{className:"Usuario",children:[Object(f.jsx)("div",{className:"background",children:Object(f.jsx)("div",{className:"containerMinHeight elBackgroundShape",style:{background:"rgba(255, 255, 255, 1.000)"}})}),Object(f.jsxs)("div",{className:"layoutFlow",children:[Object(f.jsx)("div",{className:"elText",children:Object(f.jsxs)("div",{className:"baseFont",style:{color:"black",textAlign:"center"},children:[Object(f.jsx)("img",{src:Z,style:{height:200,width:200,borderRadius:100},alt:"Imagen de usuario"}),Object(f.jsx)("div",{className:"name",style:{color:"black",paddingTop:"30px",fontFamily:"Arial"},children:this.state.s_name}),Object(f.jsx)("div",{className:"info",style:e,children:this.state.s_major}),Object(f.jsx)("div",{className:"info",style:e,children:this.state.s_email})]})}),Object(f.jsx)("div",{className:"elButton",children:Object(f.jsx)(q.a,{className:"elButton",style:{display:"block",color:"#fff",textAlign:"center",backgroundColor:"rgba(250, 54, 54, 1.000)",cursor:"pointer",pointerEvents:"auto"},onClick:this.onClick_LogOut,children:"LOG OUT"})})]})]})}}]),n}(a.Component);$.contextType=j;var ee=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"renderState0",value:function(){var e=function(e){if(e instanceof String||"string"===typeof e)return e;try{return JSON.stringify(e)}catch(t){return e.toString()}}(this.props.title);return Object(f.jsx)("div",{className:"TabBarButton",children:Object(f.jsx)("div",{className:"foreground",children:Object(f.jsx)("div",{className:"baseFont state0_elTitle",style:{color:"#fefeff",textAlign:"center"},children:Object(f.jsx)("div",{children:e})})})})}},{key:"renderState1",value:function(){var e=function(e){if(e instanceof String||"string"===typeof e)return e;try{return JSON.stringify(e)}catch(t){return e.toString()}}(this.props.title);return Object(f.jsx)("div",{className:"TabBarButton",children:Object(f.jsxs)("div",{className:"foreground",children:[Object(f.jsx)("div",{className:"baseFont state1_elTitle",style:{color:"#fa3636",textAlign:"center"},children:Object(f.jsx)("div",{children:e})}),Object(f.jsx)("div",{className:"state1_elSelectionMarker",style:{background:"rgba(250, 54, 54, 1.000)"}})]})})}},{key:"render",value:function(){switch(parseInt(this.state&&void 0!==this.state.visualStateIndexOverride?this.state.visualStateIndexOverride:this.props.visualStateIndex,10)){case 0:return this.renderState0();case 1:return this.renderState1();default:return""}}}]),n}(a.Component);ee.contextType=j;var te=n(40),ne=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).selectorSelectionChanged=function(e,t){a.setState({selectedIndex_selector:e}),a.context.appActions.updateDataSlot("ds_SlotSelectedTab",e.toString())},a.state={},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({loged:!0}),console.log(this.state.loged);var t=Object(te.c)();Object(te.d)(t,(function(t){t||(e.setState({loged:!1}),e.context.appActions.goToScreen("logIn",e.context.baseScreenId,{transitionId:"fadeIn"}))}))}},{key:"render",value:function(){var e=this,t={},n={};this.context.transitionId&&this.context.transitionId.length>0&&this.context.atTopOfScreenStack&&this.context.transitionForward&&(n.animation="0.25s ease-in-out ".concat(this.context.transitionId)),this.context.atTopOfScreenStack||(t.height="100vh",t.overflow="hidden");var a,o=function(){var t=e.context.appActions.dataSlots?e.context.appActions.dataSlots.ds_SlotSelectedTab:"";return void 0===t||(t=parseInt(t,10),Number.isNaN(t))?Number.isNaN(e.state.selectedIndex_selector)?0:e.state.selectedIndex_selector:t}();switch(o){case 0:a=Object(f.jsx)(M,Object(r.a)({},this.props));break;case 1:a=Object(f.jsx)(z,Object(r.a)({},this.props));break;case 2:a=Object(f.jsx)(G,Object(r.a)({},this.props));break;case 3:a=Object(f.jsx)($,Object(r.a)({},this.props))}var c={display:"inline-block",position:"relative",width:"25.0%",cursor:"pointer",pointerEvents:"auto"};return Object(f.jsxs)("div",{className:"AppScreen StartScreen",style:n,children:[Object(f.jsx)("div",{className:"background",children:Object(f.jsx)("div",{className:"containerMinHeight elBackgroundShape",style:{background:"rgba(255, 255, 255, 1.000)"}})}),Object(f.jsx)("div",{className:"layoutFlow",style:t,children:Object(f.jsx)("div",{className:"hasNestedComps elTabContent",children:Object(f.jsx)("div",{children:a})})}),Object(f.jsx)("div",{className:"screenFgContainer",children:Object(f.jsxs)("div",{className:"foreground",children:[Object(f.jsx)("div",{className:"elRectangle",style:{background:"rgba(161, 14, 24, 1.000)"}}),Object(f.jsxs)("div",{className:"hasNestedComps elSelector",style:{overflow:"hidden"},children:[Object(f.jsx)("div",{style:c,onClick:this.selectorSelectionChanged.bind(this,0),children:Object(f.jsx)(ee,{visualStateIndex:0===o?1:0,title:"Pizarr\xf3n",unselectedStateIndex:"0",selectedStateIndex:"0"})}),Object(f.jsx)("div",{style:c,onClick:this.selectorSelectionChanged.bind(this,1),children:Object(f.jsx)(ee,{visualStateIndex:1===o?1:0,title:"Biblioteca"})}),Object(f.jsx)("div",{style:c,onClick:this.selectorSelectionChanged.bind(this,2),children:Object(f.jsx)(ee,{visualStateIndex:2===o?1:0,title:"Calendario"})}),Object(f.jsx)("div",{style:c,onClick:this.selectorSelectionChanged.bind(this,3),children:Object(f.jsx)(ee,{visualStateIndex:3===o?1:0,title:"Usuario"})})]})]})})]})}}]),n}(a.Component);ne.contextType=j;var ae=n(48),oe=n.n(ae),ce=n.p+"static/media/CrearCuentaScreen_elCitCopy_837553.7abb956c.jpg",se=n.p+"static/media/CrearCuentaScreen_elPerson_405468.15d43b3f.png",ie=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).textInputChanged_elField=function(e){a.setState({field:e.target.value}),a.setState({registerName:e.target.value})},a.getValue_elField=function(){return a.state.field||""},a.textInputChanged_elField2=function(e){a.setState({field2:e.target.value}),a.setState({registerMajor:e.target.value})},a.getValue_elField2=function(){return a.state.field2||""},a.textInputChanged_elFieldCopy2=function(e){a.setState({fieldCopy2:e.target.value}),a.setState({registerEmail:e.target.value})},a.getValue_elFieldCopy2=function(){return a.state.fieldCopy2||""},a.textInputChanged_elFieldCopy=function(e){a.setState({fieldCopy:e.target.value}),a.setState({registerPassword:e.target.value})},a.getValue_elFieldCopy=function(){return a.state.fieldCopy||""},a.onClick_elButtonCopy=Object(K.a)(Object(Q.a)().mark((function e(){return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.b)(k,a.state.registerEmail,a.state.registerPassword);case 3:e.sent,Object(te.g)(k.currentUser,{displayName:a.state.registerName,photoURL:a.state.registerMajor}),N.collection("usuarios").add({usuario:a.state.registerEmail,nombre:a.state.registerName,carrera:a.state.registerMajor}),a.context.appActions.goToScreen("start",a.context.baseScreenId,{transitionId:"fadeIn"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Los datos ingresados no son v\xe1lido, por favor intente nuevamente.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),a.onClick_elButton=Object(K.a)(Object(Q.a)().mark((function e(){return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.context.appActions.goToScreen("logIn",a.context.baseScreenId,{transitionId:"fadeIn"});case 1:case"end":return e.stop()}}),e)}))),a.state={registerEmail:"",registerPassword:"",registerName:"",registerMajor:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e={},t={};this.context.transitionId&&this.context.transitionId.length>0&&this.context.atTopOfScreenStack&&this.context.transitionForward&&(t.animation="0.25s ease-in-out ".concat(this.context.transitionId)),this.context.atTopOfScreenStack||(e.height="100vh",e.overflow="hidden");var n={backgroundImage:"url(".concat(ce,")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundSize:"cover"},a={display:"block",paddingTop:0,textAlign:"left",pointerEvents:"auto"},o={backgroundImage:"url(".concat(se,")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundSize:"cover"};return Object(f.jsxs)("div",{className:"AppScreen CrearCuentaScreen",style:t,children:[Object(f.jsx)("div",{className:"background",children:Object(f.jsx)("div",{className:"containerMinHeight elCitCopy",style:n})}),Object(f.jsxs)("div",{className:"layoutFlow",style:e,children:[Object(f.jsx)("div",{className:"elCard",style:{boxSizing:"border-box",backgroundColor:"white",filter:"drop-shadow(0.0px 2.3px 18px rgba(0, 0, 0, 0.1600))",overflow:"visible"},children:Object(f.jsx)("div",{className:"cardBg"})}),Object(f.jsx)("div",{className:"elField",children:Object(f.jsx)(oe.a,{className:"baseFont",style:a,type:"text",placeholder:"Nombre completo",onChange:this.textInputChanged_elField,value:this.getValue_elField()})}),Object(f.jsx)("div",{className:"elFieldCopy",children:Object(f.jsx)(oe.a,{className:"baseFont",style:a,type:"text",placeholder:"Carrera",onChange:this.textInputChanged_elField2,value:this.getValue_elField2()})}),Object(f.jsx)("div",{className:"elFieldCopy2",children:Object(f.jsx)(oe.a,{className:"baseFont",style:a,type:"email",placeholder:"alguien@ejemplo.com",onChange:this.textInputChanged_elFieldCopy2,value:this.getValue_elFieldCopy2()})}),Object(f.jsx)("div",{className:"elFieldCopy",children:Object(f.jsx)(oe.a,{className:"baseFont",style:a,type:"password",placeholder:"Contrase\xf1a",onChange:this.textInputChanged_elFieldCopy,value:this.getValue_elFieldCopy()})}),Object(f.jsx)("div",{className:"elButtonCopy",children:Object(f.jsx)(q.a,{className:"actionFont",style:{display:"block",color:"(null)",textAlign:"center",backgroundColor:"rgba(250, 54, 54, 1.000)",cursor:"pointer",pointerEvents:"auto"},color:"accent",onClick:this.onClick_elButtonCopy,children:"Crear cuenta"})}),Object(f.jsx)("div",{className:"elButton",children:Object(f.jsx)(q.a,{className:"actionFont",style:{display:"block",color:"#fff",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.5000)",cursor:"pointer",pointerEvents:"auto"},onClick:this.onClick_elButton,children:"Iniciar sesi\xf3n"})})]}),Object(f.jsx)("div",{className:"screenFgContainer",children:Object(f.jsx)("div",{className:"foreground",children:Object(f.jsx)("div",{className:"elPerson",style:o})})})]})}}]),n}(a.Component);ie.contextType=j;var re=n(153),le=n.n(re),de=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).textInputChanged_elField=function(e){a.setState({field:e.target.value}),a.setState({loginEmail:e.target.value})},a.getValue_elField=function(){return a.state.field||""},a.textInputChanged_elFieldCopy=function(e){a.setState({fieldCopy:e.target.value}),a.setState({loginPassword:e.target.value})},a.getValue_elFieldCopy=function(){return a.state.fieldCopy||""},a.getValue_elCheckbox=function(){return void 0!==a.state.checkbox?a.state.checkbox:"false"},a.checkboxChanged_elCheckbox=function(e){a.setState({checkbox:e.target.checked?"true":"false"})},a.onClick_elButton=Object(K.a)(Object(Q.a)().mark((function e(){var t;return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.f)(k,a.state.loginEmail,a.state.loginPassword);case 3:t=e.sent,Object(te.e)(k,te.a).then((function(){return t})),a.context.appActions.goToScreen("start",a.context.baseScreenId,{transitionId:"fadeIn"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("El correo o la contrase\xf1a ingresados no son v\xe1lidos.");case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.onClick_elButtonCopy=Object(K.a)(Object(Q.a)().mark((function e(){return Object(Q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.context.appActions.goToScreen("crearCuenta",a.context.baseScreenId,{transitionId:"fadeIn"});case 1:case"end":return e.stop()}}),e)}))),a.state={loginEmail:"",loginPassword:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e={},t={};this.context.transitionId&&this.context.transitionId.length>0&&this.context.atTopOfScreenStack&&this.context.transitionForward&&(t.animation="0.25s ease-in-out ".concat(this.context.transitionId)),this.context.atTopOfScreenStack||(e.height="100vh",e.overflow="hidden");var n={backgroundImage:"url(".concat(ce,")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundSize:"cover"},a=this.getValue_elCheckbox(),o={backgroundImage:"url(".concat(se,")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundSize:"cover"};return Object(f.jsxs)("div",{className:"AppScreen LogInScreen",style:t,children:[Object(f.jsx)("div",{className:"background",children:Object(f.jsx)("div",{className:"containerMinHeight elCit",style:n})}),Object(f.jsxs)("div",{className:"layoutFlow",style:e,children:[Object(f.jsx)("div",{className:"elCard",style:{boxSizing:"border-box",backgroundColor:"white",filter:"drop-shadow(0.0px 2.3px 18px rgba(0, 0, 0, 0.1600))",overflow:"visible"},children:Object(f.jsx)("div",{className:"cardBg"})}),Object(f.jsx)("div",{className:"elField",children:Object(f.jsx)(oe.a,{className:"baseFont",style:{display:"block",paddingTop:0,textAlign:"left",pointerEvents:"auto"},type:"email",placeholder:"alguien@ejemplo.com",onChange:this.textInputChanged_elField,value:this.getValue_elField()})}),Object(f.jsx)("div",{className:"elFieldCopy",children:Object(f.jsx)(oe.a,{className:"baseFont",style:{display:"block",paddingTop:0,textAlign:"left",pointerEvents:"auto"},type:"password",placeholder:"Contrase\xf1a",onChange:this.textInputChanged_elFieldCopy,value:this.getValue_elFieldCopy()})}),Object(f.jsx)("div",{className:"elCheckbox",children:Object(f.jsx)(le.a,{className:"baseFont",style:{cursor:"pointer",pointerEvents:"auto"},label:"Recordarme",checked:"true"===a||!0===a||"1"==="".concat(a),onChange:this.checkboxChanged_elCheckbox})}),Object(f.jsx)("div",{className:"elButton",children:Object(f.jsx)(q.a,{className:"actionFont",style:{display:"block",color:"(null)",backgroundColor:"rgba(250, 54, 54, 1.000)",textAlign:"center",cursor:"pointer",pointerEvents:"auto"},color:"accent",onClick:this.onClick_elButton,children:"Iniciar sesi\xf3n"})}),Object(f.jsx)("div",{className:"elButtonCopy",children:Object(f.jsx)(q.a,{className:"actionFont",style:{display:"block",color:"#fff",textAlign:"center",backgroundColor:"rgba(0, 0, 0, 0.5000)",cursor:"pointer",pointerEvents:"auto"},onClick:this.onClick_elButtonCopy,children:"Crear cuenta"})})]}),Object(f.jsx)("div",{className:"screenFgContainer",children:Object(f.jsx)("div",{className:"foreground",children:Object(f.jsx)("div",{className:"elPerson",style:o})})})]})}}]),n}(a.Component);de.contextType=j;var ue=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).windowDidResize=function(){var e,t=window.innerWidth;(e=t<576?"narrow-phone":t<768?"wide-phone":t<1024?"narrow-tablet":"wide-tablet")!==a.state.screenFormatId&&a.setState({screenFormatId:e})},a.goToScreen=function(e,t,n){var o="/".concat(e);t&&t.length>0&&(o="/".concat(t).concat(o),n={}),a.props.history.push(o,Object(r.a)({},n)),window.scrollTo(0,0)},a.updateDataSlot=function(e,t,n){t!==a.dataSlots[e]&&(a.dataSlots[e]=t,a.setState({}))},a.dataSlots={},a.dataSlots.ds_SlotSelectedTab="0",a.state={},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.windowDidResize(),window.addEventListener("resize",this.windowDidResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.windowDidResize)}},{key:"render",value:function(){var e=this,t=function(t,n,a,o,c){var s,i=Object(r.a)(Object(r.a)({},n),{},{atTopOfScreenStack:a,transitionForward:o,appActions:e,deviceInfo:{screenFormatId:e.state.screenFormatId}});switch(t){case"crearCuenta":s=Object(f.jsx)(ie,Object(r.a)({},n));break;case"logIn":s=Object(f.jsx)(de,Object(r.a)({},n));break;case"start":s=Object(f.jsx)(ne,Object(r.a)({},n));break;default:s=null}if(s)return Object(f.jsx)(j.Provider,{value:i,children:s})};return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/",render:function(e){return t("logIn",e.location.state,!0,!0)},exact:!0}),Object(f.jsx)(b.a,{path:"/crearCuenta",render:function(e){return t("crearCuenta",e.location.state,!0,!0)}}),Object(f.jsx)(b.a,{path:"/logIn",render:function(e){return t("logIn",e.location.state,!0,!0)}}),Object(f.jsx)(b.a,{path:"/start",render:function(e){return t("start",e.location.state,!0,!0)}})]})})}}]),n}(a.Component),he=Object(b.f)(ue);n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292);s.a.render(Object(f.jsx)(i.a,{children:Object(f.jsx)(he,{})}),document.getElementById("root"))}},[[293,1,2]]]);
//# sourceMappingURL=main.39da8ab5.chunk.js.map