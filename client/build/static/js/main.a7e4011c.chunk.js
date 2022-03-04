(this.webpackJsonpvisual_compiler=this.webpackJsonpvisual_compiler||[]).push([[0],{114:function(e,t){},116:function(e,t){},135:function(e,t){e.exports={ExpressionWrapper:function(e,t,r){this.type="expression",this.value=e,this.from=t,this.to=r},ConditionWrapper:function(e,t,r){this.type="condition",this.value=e,this.nextIfFalse=null,this.from=t,this.to=r},VariableWrapper:function(e,t,r){this.type="variable",this.name=e[3],this.datatype=e[1]+(e[2]?e[2]:""),this.from=t,this.to=r},ReturnWrapper:function(e,t,r){this.type="return",this.value="$=".concat(e.value),this.returnType=e.returnType,this.from=t,this.to=r},FunctionWrapper:function(e,t,r){this.type=e.type,this.name=e.functionName,this.args=e.args,this.from=t,this.to=r},LibFunctionWrapper:function(e,t,r){this.type="lib_function_call",this.name=e.functionName,this.args=e.args,this.from=t,this.to=r}}},143:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(76),i=r.n(a),s=(r(89),r(14)),c=r(17),l=r(19),u=r(18),p=r(55),d=r.n(p),h=r(77),f=r(42),m=r(1);function g(e){e.items;var t=e.toggleMenuStatus;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{style:{height:"100vh",width:"100vw",background:"#000000AA",position:"absolute",top:"0",left:"0"},onClick:t}),Object(m.jsx)("div",{style:{height:"100vh",width:"30vw",background:"#00fff0",position:"absolute",top:"0",left:"-10",zIndex:"4"}})]})}r(57),r(58),r(92);var x=r(43),v=(r(93),r(94),{height:"300px"}),I=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).handleChange=function(t,r,n){e.props.onChange(n,t)},e}return Object(c.a)(r,[{key:"render",value:function(){return Object(m.jsx)("div",{style:v,children:Object(m.jsx)(x.Controlled,{onBeforeChange:this.handleChange,value:this.props.value,className:"",options:{lineWrapping:!0,lint:!0,mode:this.props.language,lineNumbers:!0,theme:"material"}},"mainEditor")})}}]),r}(o.a.Component),j=r(51),b={height:"60px",display:"flex"},_={display:"flex",flex:"2",padding:"5px",flexDirection:"column"},C={width:"150px",height:"30px",outline:"none",borderRadius:"5%"},k={marginLeft:"2px",fontSize:"15px",height:"50%",display:"flex",fontWeight:"bold",alignItems:"center"},O={display:"flex",flex:"3",padding:"5px",position:"relative"},y={height:"35px",width:"100px",background:"#d43a1c99",display:"flex",justifyContent:"right",position:"absolute",top:"25px",left:"500px"};function w(e){var t=e.onSelect,r=e.onMaximize,n=e.onRun,o=e.onNext;return Object(m.jsxs)("div",{style:b,children:[Object(m.jsxs)("div",{style:_,children:[Object(m.jsxs)("select",{style:C,onChange:function(e){t(e.target.value)},children:[Object(m.jsx)("option",{value:"lang",children:"Languages"}),Object(m.jsx)("option",{value:"clike",children:"C"}),Object(m.jsx)("option",{value:"clike",children:"C++"}),Object(m.jsx)("option",{value:"javascript",children:"JavaScript"})]}),Object(m.jsxs)("div",{style:k,children:[Object(m.jsx)("p",{children:"Code"}),Object(m.jsx)("button",{style:{margin:"2px"},onClick:function(){n()},children:"Run"}),Object(m.jsx)("button",{style:{margin:"2px"},onClick:function(){o()},children:"Next"}),Object(m.jsx)("button",{style:{margin:"2px"},children:"Pause"})]},"codeHeader")]},"left"),Object(m.jsx)("div",{style:O,children:Object(m.jsx)("div",{style:y,id:"minExeBoard",children:Object(m.jsx)("button",{id:"maximize",onClick:function(){r()},children:"Max"})},"minExeBoard")},"right")]},"toolbar")}r(59);function D(e){var t=[];for(var r in e)t.push({name:r,value:e[r].value});return console.log(t),t}function S(e){return Object(m.jsxs)("div",{className:"activationRecords",children:[Object(m.jsx)("div",{className:"funcName",children:e.functionName}),Object(m.jsx)("div",{className:"variable-cont",children:D(e.data).map((function(e){return Object(m.jsxs)("div",{className:"variable",children:[Object(m.jsx)("div",{className:"varName",children:e.name}),Object(m.jsx)("div",{className:"varValue",children:e.value})]},e.name)}))})]})}var E=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"visualWrapper",children:[Object(m.jsxs)("div",{className:"callStack-wrapper",children:[Object(m.jsx)("h5",{children:"Call Stack"}),Object(m.jsx)("div",{className:"callStack",children:this.props.virtualCallStack.map((function(e,t){return Object(m.jsx)(S,{functionName:e.name,data:e.data},e.name+t)})).reverse()},"callstack")]}),Object(m.jsx)("div",{className:"heap",children:Object(m.jsx)("h5",{children:"Heap"})},"heap"),Object(m.jsx)("div",{className:"data",children:Object(m.jsx)("h5",{children:"Data"})},"data"),Object(m.jsx)("div",{className:"bss",children:Object(m.jsx)("h5",{children:"bss"})},"bss")]},"visualWrapper")}}]),r}(o.a.Component),P={height:"30px",widht:"400px"},F={height:"170px",widht:"400px"},L={},z=(o.a.Component,r(29)),M={width:"100vw",height:"100vh",display:"flex"},R={height:"30px",width:"100%",display:"flex",alignItems:"center",padding:"5px",fontWeight:"bold"},B={flex:"2",flexBasis:"0",display:"flex",flexDirection:"column"},T={flex:"3",flexBasis:"0",display:"flex",flexDirection:"column"},N={position:"relative",height:"100%",width:"100%",top:"0",left:"0"},W=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={code:"",language:"text",ExeBoard:!1,output:"",top:-1,programCounter:0},n.handleChange=function(e,t){z.a.editor=t,n.setState((function(t){return t.code=e}))},n.handleOutputChange=function(e){n.setState({output:e})},n.handleSelect=function(e){n.setState({language:e}),console.log(n.state.language)},n.handleExeBoardToggle=function(){n.setState((function(){return{ExeBoard:!n.state.ExeBoard}}))},n.handleRunCode=Object(h.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({output:"Compiling..."}),e.next=3,fetch("http://localhost:3001/api/compile",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({code:n.state.code,language:n.state.language})});case 3:return t=e.sent,e.next=6,t.json();case 6:if(!(r=e.sent).err){e.next=11;break}return console.log(r.err),n.setState({output:r.err}),e.abrupt("return");case 11:console.log("code compiled"),n.setState({output:"code compiled"}),z.a.tokenizeCode(n.state.code),z.a.initCallStack();case 15:case"end":return e.stop()}}),e)}))),n.handleNext=function(){console.log("next"),z.a.readToken()},z.a.init(Object(f.a)(n)),n}return Object(c.a)(r,[{key:"render",value:function(){var e=this.props,t=e.toggleState,r=e.toggleMenuStatus;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{onSelect:this.handleSelect,onMaximize:this.handleExeBoardToggle,onRun:this.handleRunCode,onNext:this.handleNext}),Object(m.jsxs)("div",{className:"body",children:[Object(m.jsxs)("div",{style:M,children:[Object(m.jsxs)("div",{style:B,children:[Object(m.jsx)(I,{value:this.state.code,onChange:this.handleChange,language:this.state.language},"editor"),Object(m.jsx)("div",{style:R,children:"Output"},"divider"),Object(m.jsx)(j.a,{value:this.state.output,onChange:this.handleOutputChange})]},"codeEditorWrapper"),Object(m.jsx)("div",{style:T,children:Object(m.jsx)("div",{style:N,children:Object(m.jsx)(E,{virtualCallStack:z.a.virtualCallStack})},"visual")},"visualsWrap")]},"contains"),t?Object(m.jsx)(g,{items:!0,toggleMenuStatus:r}):Object(m.jsx)(m.Fragment,{})]},"body")]})}}]),r}(o.a.Component),G=r(5),A=r(81),V=r.n(A),U=r(158);function q(e){e.toggleState;var t,r=e.toggleMenuStatus,n=(t={display:"flex",justifyContent:"center",fontFamily:"sans-serif"},Object(G.a)(t,"justifyContent","left"),Object(G.a)(t,"alignItems","center"),Object(G.a)(t,"height","40px"),Object(G.a)(t,"background","#113f73"),Object(G.a)(t,"color","#fff"),Object(G.a)(t,"borderRadius","0px 0px 20px 20px"),t);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("header",{style:n,children:[Object(m.jsx)(U.a,{onClick:r,children:Object(m.jsx)(V.a,{color:"primary",fontSize:"large"})}),Object(m.jsx)("h3",{children:"Visual Compiler"})]})})}var K=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={menuStatus:!1},e.toggleMenuStatus=function(){e.setState((function(e){return{menuStatus:!e.menuStatus}})),console.log(e.state.menuStatus)},e}return Object(c.a)(r,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(q,{toggleState:this.state.menuStatus,toggleMenuStatus:this.toggleMenuStatus}),Object(m.jsx)(W,{toggleState:this.state.menuStatus,toggleMenuStatus:this.toggleMenuStatus})]})}}]),r}(o.a.Component),J=K,$=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,160)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"));var H=document.querySelectorAll(".CodeMirror");H[0].style.height="300px",H[1].style.height="200px",H[1].style.background="#0f0f0f",$()},29:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Interpreter}));var _home_joy_Documents_workspace_project_deployment_visual_compiler_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),_components_OutputBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(51),_utility__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(78),_utility__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_utility__WEBPACK_IMPORTED_MODULE_2__),Interpreter=function e(){Object(_home_joy_Documents_workspace_project_deployment_visual_compiler_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e)};Interpreter.virtualCallStack=new Array,Interpreter.returnValueOfFunction=null,Interpreter.editor=null,Interpreter.lastMark=null,Interpreter.tempReturnAddress=null,Interpreter.currentCall="main",Interpreter.accumulator=0,Interpreter.init=function(e,t){Interpreter.self=e},Interpreter.initCallStack=function(){console.log("self",Interpreter.self),Interpreter.virtualCallStack.push({name:"main",data:{}}),Interpreter.self.setState({top:0})},Interpreter.tokenizeCode=function(e){var t=new _utility__WEBPACK_IMPORTED_MODULE_2__.CLikeInterpreterUtilities(e);t.mapIndexVsLine(),Interpreter.token=t.createFunctionMap()},Interpreter.readToken=function(){if(console.log(Interpreter.self.state.programCounter),Interpreter.self.state.programCounter>=Interpreter.token[Interpreter.currentCall].body.length&&(Interpreter.virtualCallStack.pop(),0===Interpreter.virtualCallStack.length))return console.log("execution complete"),void Interpreter.self.setState((function(e){return{output:e.output+"\nExecution completed!!"}}));if(Interpreter.currInstruction=Interpreter.token[Interpreter.currentCall].body[Interpreter.self.state.programCounter],console.log(Interpreter.currInstruction),"variable"===Interpreter.currInstruction.type)Interpreter.processVariable(Interpreter.currInstruction);else if("expression"===Interpreter.currInstruction.type)Interpreter.processExpression(Interpreter.currInstruction.value);else{if("function_call"===Interpreter.currInstruction.type)return void Interpreter.processFunctionCall();if("lib_function_call"===Interpreter.currInstruction.type);else{if("return"===Interpreter.currInstruction.type)return void Interpreter.processReturn();if("condition"===Interpreter.currInstruction.type)return void Interpreter.processCondition()}}Interpreter.updateMark(),"jump"!==Interpreter.currInstruction.type?Interpreter.self.setState((function(e){return{programCounter:e.programCounter+1}})):Interpreter.self.setState((function(e){return{programCounter:Interpreter.currInstruction.instruction}}))},Interpreter.processCondition=function(){if(Interpreter.processExpression(Interpreter.currInstruction.value),Interpreter.accumulator)return Interpreter.updateMark(),void Interpreter.self.setState((function(e){return{programCounter:e.programCounter+1}}));Interpreter.updateMark(),Interpreter.self.setState({programCounter:Interpreter.currInstruction.nextIfFalse})},Interpreter.processVariable=function(e){var t=e.name,r=e.initialValue,n=e.datatype,o=Interpreter.virtualCallStack.length-1;Interpreter.virtualCallStack[o].data[t]={value:r,datatype:n},console.log("vs",Interpreter.virtualCallStack)},Interpreter.processExpression=function(expression){console.log("expression");for(var top=Interpreter.virtualCallStack.length-1,activeStackFrame=Interpreter.virtualCallStack[top].data,operandExp=/\$|\w+/g,operandDetails=null,modifiedExpression="",start=0;operandDetails=operandExp.exec(expression);){for(var i=start;i<operandDetails.index;i++)modifiedExpression+=operandDetails.input[i];var operand=operandDetails[0];"$"==operand?modifiedExpression+="this.returnValueOfFunction":operand.match(/\d+/)?modifiedExpression+=operand:modifiedExpression+=operand.replace(operand,"activeStackFrame['".concat(operand[0],"'].value")),start=operandExp.lastIndex,console.debug(start),console.log(modifiedExpression)}console.log("modifiedExpression",modifiedExpression),Interpreter.accumulator=eval(modifiedExpression),console.log(Interpreter.accumulator)},Interpreter.processFunctionCall=function(){var e=[];Interpreter.currInstruction.args.forEach((function(t){e.push(Interpreter.virtualCallStack[Interpreter.self.state.top].data[t].value)})),console.log(e),Interpreter.currentCall=Interpreter.currInstruction.name;var t={name:Interpreter.currentCall,data:{},returnAddress:Interpreter.self.state.programCounter+1};Interpreter.virtualCallStack.push(t),Interpreter.self.setState((function(e){return{top:e.top+1}}));var r=Interpreter.token[Interpreter.currentCall].parameters;r.length>0&&r.forEach((function(t,r){var n={name:t.name,initialValue:e[r],datatype:t.datatype};console.log(Interpreter.self.state.top),Interpreter.processVariable(n)})),Interpreter.self.setState({programCounter:0})},Interpreter.processReturn=function(){var e=Interpreter.virtualCallStack.length-1;Interpreter.tempReturnAddress=Interpreter.virtualCallStack[e].returnAddress,Interpreter.currentCall=Interpreter.virtualCallStack[e-1].name,console.log(Interpreter.tempReturnAddress),"void"!==Interpreter.currInstruction.returnType&&(Interpreter.processExpression(Interpreter.currInstruction.value),Interpreter.virtualCallStack.pop()),Interpreter.self.setState({programCounter:Interpreter.tempReturnAddress})},Interpreter.adjustFromTo=function(){var e={},t={};return e.line=Interpreter.currInstruction.from.line+-1,t.line=Interpreter.currInstruction.to.line+-1,e.ch=Interpreter.currInstruction.from.ch+-2,t.ch=Interpreter.currInstruction.to.ch+-2,{from:e,to:t}},Interpreter.updateMark=function(){if(Interpreter.currInstruction.from&&Interpreter.currInstruction.from){var e=Interpreter.adjustFromTo(),t=e.from,r=e.to;console.log(Interpreter.editor),Interpreter.self.lastMark&&Interpreter.self.lastMark.clear(),Interpreter.self.lastMark=Interpreter.editor.markText(t,r,{className:"codemirror-highlighted"})}}},51:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(0),r(57),r(58);var n=r(43),o=r(1),a={height:"200px"};function i(e){var t=e.value,r=e.onChange;return Object(o.jsx)("div",{style:a,children:Object(o.jsx)(n.Controlled,{onBeforeChange:function(e,t,n){r(n)},value:t,className:"",options:{lineWrapping:!0,theme:"material",mode:""}},"outputbox")},"outputwrapper")}},59:function(e,t,r){},60:function(e,t,r){r(96).param;var n="((?:\\w+\\**\\s+\\**)+)(\\s*\\**)*",o="(\\w+)",a="\\s*\\t*\\n*",i="\\((.*)\\)",s=new RegExp("".concat(n,"(").concat(a,")").concat(o,"(").concat(a,")").concat(i).concat(a,"\\{"),"gm"),c=new RegExp("".concat(o).concat(a).concat(i),""),l=new RegExp("".concat(n).concat(a).concat(o)),u=new RegExp(i,"g"),p=new RegExp("while".concat(a).concat(i)),d=new RegExp("for".concat(a,"\\(.*")),h=new RegExp("for".concat(a).concat(i)),f=new RegExp("if".concat(a).concat(i)),m=new RegExp("else if".concat(a).concat(i)),g=new RegExp("else"),x=new RegExp("(\\d*\\w*".concat(a,"[-/+*=<>]+").concat(a,"\\d*\\w*)+")),v=new RegExp("return\\s".concat(a,"(.+").concat(a,")*"));console.log("-------------debug--------------------"),console.log("functionSignatureDetector",s),console.log("functionCallDetector",c),console.log("whileloopDetector",p),console.log("forloopDetector",h),console.log("if detector",f),console.log("else if detector",m),console.log("else detector",g),console.log("variable detector",l),console.log("returnStatementDetector",v),console.log("expressionDetector",x),console.log("-------------end--------------------"),e.exports={includeDetector:/#include.+/gm,macroDefinitionDetector:/#define\s(\w+)\s+(.+)/g,functionCallDetector:c,functionSignatureDetector:s,whileloopDetector:p,partialForLoopDetector:d,forloopDetector:h,ifDetector:f,elseIfDetector:m,elseDetector:g,variableDetector:l,expressionDetector:x,returnStatementDetector:v,functionParamsDetector:u}},78:function(e,t,r){var n=r(95).Tokenizer,o=r(60),a=(o.includeDetector,o.macroDefinitionDetector),i=o.functionSignatureDetector;e.exports={CLikeInterpreterUtilities:function(e){var t=this;function r(t){for(var r=t,n=1,o=r+1;0!==n;o++)"{"==e[o]?n++:"}"==e[o]&&n--;console.log(r,o);for(var a="",i=r;i<o;i++)a+=e[i];return{statements:a.split(";"),endOfBody:o}}this.getMacroMap=function(){for(var t,r=new Map;t=a.exec(e);)r.set(t[1],t[2]);return r},this.indexVsLine=[0],this.mapIndexVsLine=function(){for(var r=0;r<e.length;r++)"\n"==e[r]&&t.indexVsLine.push(r);var n=e.length-1;"\n"!=e[n]&&t.indexVsLine.push(n)},this.getLineColumn=function(e){for(var r=1;r<t.indexVsLine.length;r++)if(e<=t.indexVsLine[r])return console.log(r,e-t.indexVsLine[r-1]+1),{line:r,ch:e-t.indexVsLine[r-1]+1};console.log("invalid index")},this.createFunctionMap=function(){for(var o,a={};o=i.exec(e);){var s=i.lastIndex-1,c=r(s),l=c.statements,u=c.endOfBody,p=new n(l,t,o[4]),d=p.tokenizeBody,h=p.tokenizeParameters,f=p.flowGraph,m=h(o.index,o);i.lastIndex=u,d(s,0),f.forEach((function(e,t){return console.log(t,e)})),a[o[4].trim()]={parameters:m,body:f}}return console.log(a),a}}}},89:function(e,t,r){},92:function(e,t,r){},95:function(e,t,r){var n=r(60),o=n.functionCallDetector,a=n.functionParamsDetector,i=n.partialForLoopDetector,s=(n.forloopDetector,n.whileloopDetector),c=n.ifDetector,l=n.elseDetector,u=n.elseIfDetector,p=n.variableDetector,d=n.expressionDetector,h=n.returnStatementDetector,f=r(135),m=f.ExpressionWrapper,g=f.ConditionWrapper,x=f.VariableWrapper,v=f.ReturnWrapper,I=f.FunctionWrapper,j=(f.LibFunctionWrapper,["printf","scanf"]);e.exports={Tokenizer:function(e,t,r){var n=this;this.lastTokenStack=[],this.statementDetails=null,this.from=null,this.to=null,this.flowGraph=[],this.unspecifiedJumps=[],this.currentPos=0,this.tokenizeBody=function(t,a){n.currentPos=t,console.log("In function "+r);for(var l=a;l<e.length;l++){var u=e[l];if(n.statementDetails=u.match("}"))return console.log("end of previous body detected: "),e[l]=e[l].replace("}"," "),console.log(">>>",u[0].length),l;u.match(i)?(console.log("for loop detected: "),l=n.tokenizeForLoop(l)):(n.statementDetails=u.match(s))?(console.log("while loop detected: "),l=n.tokenizeWhileLoop(l)):(n.statementDetails=u.match(c))?l=n.tokenizeIfElseLadder(l):(n.statementDetails=u.match(h))?n.tokenizeReturnStatement():(n.statementDetails=u.match(o))?n.tokenizeFunctionCall():(n.statementDetails=u.match(d))?n.tokenizeExpression():(n.statementDetails=u.match(p))?n.tokenizeVariable():u.match("break")?console.log("break"):u.match("continue")?console.log("continue"):(console.log("cant detected it: "),console.log(u))}console.log("flow graph")},this.setFromTo=function(){n.currentPos+=n.statementDetails.index,n.from=t.getLineColumn(n.currentPos),n.currentPos+=n.statementDetails[0].length,n.to=t.getLineColumn(n.currentPos)},this.tokenizeFunctionCall=function(){console.log("function detected: "),console.log(n.statementDetails);var e=n.statementDetails[1].trim(),t=n.statementDetails[2].split(",").map((function(e){return e.trim()}));n.setFromTo(),n.currentPos++;var r="function_call";j.find((function(t){return t==e}))&&(r="lib_function_call"),n.flowGraph.push(new I({type:r,functionName:e,args:t},n.from,n.to))},this.tokenizeVariable=function(){console.log("variable detected: "),n.setFromTo(),n.currentPos++,console.log(n.statementDetails),n.flowGraph.push(new x(n.statementDetails,n.from,n.to))},this.tokenizeExpression=function(){console.log("expression detected: "),console.log(n.statementDetails);var e=n.statementDetails[0].trim();n.setFromTo(),n.currentPos++,n.flowGraph.push(new m(e,n.from,n.to))},this.tokenizeReturnStatement=function(){console.log(n.statementDetails),n.setFromTo(),n.currentPos++,n.flowGraph.push(new v({value:n.statementDetails[1],returnType:"int"},n.from,n.to))},this.tokenizeParameters=function(e,r){for(var n,o=[];n=a.exec(r[0]);)o.push({name:n[4],datatype:n[1]+(n[2]?n[2]:""),from:t.getLineColumn(n.index+e),to:t.getLineColumn(a.lastIndex+e)});return console.log(o),o},this.tokenizeForLoopInitialization=function(e){n.statementDetails=e.match(/\(.+/),n.setFromTo(),n.currentPos++,n.flowGraph.push(new m(n.statementDetails[0].slice(1),n.from,n.to))},this.tokenizeCondition=function(e){return n.from=t.getLineColumn(n.currentPos),n.currentPos+=e.length,n.to=t.getLineColumn(n.currentPos),n.currentPos++,n.flowGraph.push(new g(e,n.from,n.to)),n.flowGraph.length-1},this.tokenizeForLoopIncrementDecrement=function(e,t){n.statementDetails=e.match(/.+\)/);var r=n.statementDetails[0].slice(0,-1);return n.setFromTo(),n.currentPos++,t.push(new m(r,n.from,n.to)),e.slice(r.length+1)},this.tokenizeForLoop=function(t){var r=[];n.tokenizeForLoopInitialization(e[t]);var o=n.tokenizeCondition(e[++t]),a=n.tokenizeForLoopIncrementDecrement(e[++t],r);e[t]=a,e[t].match("{")||(e[t+1]="}".concat(e[t+1]),n.currentPos--);var i=n.tokenizeBody(n.currentPos,t)-1;return r.forEach((function(e){return n.flowGraph.push(e)})),n.flowGraph.push({type:"jump",instruction:t-1}),n.flowGraph[o].nextIfFalse=n.flowGraph.length,i},this.tokenizeWhileLoop=function(t){var r=e[t].match(/\(/).index;n.currentPos+=r;var o=n.tokenizeCondition(n.statementDetails[1]);e[t].match("{")||(e[t+1]="}".concat(e[t+1]),n.currentPos--);var a=e[t].match(/\)/);console.log(a),e[t]=e[t].slice(a.index+1),console.log(">>>",e[t]);var i=n.tokenizeBody(n.currentPos,t)-1;return n.flowGraph.push({type:"jump",instruction:t}),n.flowGraph[o].nextIfFalse=n.flowGraph.length,i},this.addEndOfCurlyBraceAtBegining=function(t){e[t]="}".concat(e[t]),n.currentPos--},this.tokenizeIfElseLadder=function(t){var r=e[t].match(/\(/).index;n.currentPos+=r;var o=n.tokenizeCondition(n.statementDetails[1]);e[t].match("{")||n.addEndOfCurlyBraceAtBegining(t+1);var a=e[t].match(/\)/);e[t]=e[t].slice(a.index+1),console.log("if body",e[t]);var i=n.tokenizeBody(n.currentPos,t)-1;t=i+1,n.flowGraph.push({type:"jump",instruction:null});var s=n.flowGraph.length-1;return n.flowGraph[o].nextIfFalse=n.flowGraph.length+1,n.unspecifiedJumps.push(i),(n.statementDetails=e[t].match(u))?t=n.tokenizeIfElseLadder(t):(n.statementDetails=e[t].match(l))&&(e[t].match("{")||n.addEndOfCurlyBraceAtBegining(t+1),t=n.tokenizeBody(n.currentPos,t),n.flowGraph.push({type:"jump",instruction:null}),n.flowGraph[n.flowGraph.length-1].instruction=n.flowGraph.length),n.flowGraph[s].instruction=n.flowGraph.length,t}}}}},[[143,1,2]]]);
//# sourceMappingURL=main.a7e4011c.chunk.js.map