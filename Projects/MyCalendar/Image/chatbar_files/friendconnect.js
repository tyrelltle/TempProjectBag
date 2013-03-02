window.google = window["google"] || {};google.friendconnect = google.friendconnect_ || {};if (!window['__ps_loaded__']) {/*http://www-a-fc-opensocial.googleusercontent.com/gadgets/js/rpc.js?c=1*/
window['___jsl']={'u':'http:\/\/www-a-fc-opensocial.googleusercontent.com\/gadgets\/js\/rpc.js?c=1','f':['rpc']};
var gadgets=window.gadgets||{},shindig=window.shindig||{},osapi=window.osapi||{};
;
if(!gadgets.config){gadgets.config=function(){var ___jsl;
var components={};
var configuration;
function foldConfig(origConfig,updConfig){for(var key in updConfig){if(!updConfig.hasOwnProperty(key)){continue
}if(typeof origConfig[key]==="object"&&typeof updConfig[key]==="object"){foldConfig(origConfig[key],updConfig[key])
}else{origConfig[key]=updConfig[key]
}}}function getLoadingScript(){var scripts=document.scripts||document.getElementsByTagName("script");
if(!scripts||scripts.length==0){return null
}var scriptTag;
if(___jsl.u){for(var i=0;
!scriptTag&&i<scripts.length;
++i){var candidate=scripts[i];
if(candidate.src&&candidate.src.indexOf(___jsl.u)==0){scriptTag=candidate
}}}if(!scriptTag){scriptTag=scripts[scripts.length-1]
}if(!scriptTag.src){return null
}return scriptTag
}function getInnerText(scriptNode){var scriptText="";
if(scriptNode.nodeType==3||scriptNode.nodeType==4){scriptText=scriptNode.nodeValue
}else{if(scriptNode.innerText){scriptText=scriptNode.innerText
}else{if(scriptNode.firstChild){var content=[];
for(var child=scriptNode.firstChild;
child;
child=child.nextSibling){content.push(getInnerText(child))
}scriptText=content.join("")
}}}return scriptText
}function parseConfig(configText){var config;
try{eval("config=("+configText+"\n)")
}catch(e){}if(typeof config==="object"){return config
}try{eval("config=({"+configText+"\n})")
}catch(e){}return typeof config==="object"?config:{}
}function augmentConfig(baseConfig){var loadScript=getLoadingScript();
if(!loadScript){return
}var scriptText=getInnerText(loadScript);
var configAugment=parseConfig(scriptText);
if(___jsl.f&&___jsl.f.length==1){var feature=___jsl.f[0];
if(!configAugment[feature]){var newConfig={};
newConfig[___jsl.f[0]]=configAugment;
configAugment=newConfig
}}foldConfig(baseConfig,configAugment)
}return{register:function(component,opt_validators,opt_callback){var registered=components[component];
if(!registered){registered=[];
components[component]=registered
}registered.push({validators:opt_validators||{},callback:opt_callback})
},get:function(opt_component){if(opt_component){return configuration[opt_component]||{}
}return configuration
},init:function(config,opt_noValidation){___jsl=window.___jsl||{};
if(configuration){foldConfig(configuration,config)
}else{configuration=config
}augmentConfig(configuration);
var inlineOverride=window.___config||{};
foldConfig(configuration,inlineOverride);
for(var name in components){if(components.hasOwnProperty(name)){var componentList=components[name],conf=configuration[name];
for(var i=0,j=componentList.length;
i<j;
++i){var component=componentList[i];
if(conf&&!opt_noValidation){var validators=component.validators;
for(var v in validators){if(validators.hasOwnProperty(v)){if(!validators[v](conf[v])){throw new Error('Invalid config value "'+conf[v]+'" for parameter "'+v+'" in component "'+name+'"')
}}}}if(component.callback){component.callback(configuration)
}}}}},update:function(updateConfig,opt_replace){configuration=opt_replace?{}:configuration||{};
foldConfig(configuration,updateConfig)
}}
}()
};;
gadgets.config.isGadget=false;
gadgets.config.isContainer=true;;
(function(){gadgets.config.EnumValidator=function(d){var c=[];
if(arguments.length>1){for(var b=0,a;
(a=arguments[b]);
++b){c.push(a)
}}else{c=d
}return function(f){for(var e=0,g;
(g=c[e]);
++e){if(f===c[e]){return true
}}return false
}
};
gadgets.config.RegExValidator=function(a){return function(b){return a.test(b)
}
};
gadgets.config.ExistsValidator=function(a){return typeof a!=="undefined"
};
gadgets.config.NonEmptyStringValidator=function(a){return typeof a==="string"&&a.length>0
};
gadgets.config.BooleanValidator=function(a){return typeof a==="boolean"
};
gadgets.config.LikeValidator=function(a){return function(c){for(var d in a){if(a.hasOwnProperty(d)){var b=a[d];
if(!b(c[d])){return false
}}}return true
}
}
})();;
gadgets.util=function(){var a=null;
function b(e){var f;
var c=e.indexOf("?");
var d=e.indexOf("#");
if(d===-1){f=e.substr(c+1)
}else{f=[e.substr(c+1,d-c-1),"&",e.substr(d+1)].join("")
}return f.split("&")
}return{getUrlParameters:function(p){var d=typeof p==="undefined";
if(a!==null&&d){return a
}var l={};
var f=b(p||document.location.href);
var n=window.decodeURIComponent?decodeURIComponent:unescape;
for(var h=0,g=f.length;
h<g;
++h){var m=f[h].indexOf("=");
if(m===-1){continue
}var c=f[h].substring(0,m);
var o=f[h].substring(m+1);
o=o.replace(/\+/g," ");
try{l[c]=n(o)
}catch(k){}}if(d){a=l
}return l
}}
}();
gadgets.util.getUrlParameters();;
gadgets.log=(function(){var e=1;
var a=2;
var f=3;
var c=4;
var d=function(i){b(e,i)
};
gadgets.warn=function(i){b(a,i)
};
gadgets.error=function(i){b(f,i)
};
gadgets.setLogLevel=function(i){h=i
};
function b(j,i){if(j<h||!g){return
}if(j===a&&g.warn){g.warn(i)
}else{if(j===f&&g.error){g.error(i)
}else{if(g.log){g.log(i)
}}}}d.INFO=e;
d.WARNING=a;
d.NONE=c;
var h=e;
var g=window.console?window.console:window.opera?window.opera.postError:undefined;
return d
})();;
var tamings___=tamings___||[];
tamings___.push(function(a){___.grantRead(gadgets.log,"INFO");
___.grantRead(gadgets.log,"WARNING");
___.grantRead(gadgets.log,"ERROR");
___.grantRead(gadgets.log,"NONE");
caja___.whitelistFuncs([[gadgets,"log"],[gadgets,"warn"],[gadgets,"error"],[gadgets,"setLogLevel"]])
});;
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json=(function(){var a=/___$/;
return{parse:function(c){try{return window.JSON.parse(c)
}catch(b){return false
}},stringify:function(c){try{return window.JSON.stringify(c,function(e,d){return !a.test(e)?d:null
})
}catch(b){return null
}}}
})()
};;
if(!(window.JSON&&window.JSON.parse&&window.JSON.stringify)){gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(k.match("___$")){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}return""
}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
gadgets.json.flatten=function(c){var d={};
if(c===null||c===undefined){return d
}for(var a in c){if(c.hasOwnProperty(a)){var b=c[a];
if(null===b||undefined===b){continue
}d[a]=(typeof b==="string")?b:gadgets.json.stringify(b)
}}return d
};;
var tamings___=tamings___||[];
tamings___.push(function(a){___.tamesTo(gadgets.json.stringify,safeJSON.stringify);
___.tamesTo(gadgets.json.parse,safeJSON.parse)
});;
var __getUrlParameters=gadgets.util.getUrlParameters;
gadgets.util=function(){var d={};
var c={};
var e=[];
var a={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true};
function b(g,h){return String.fromCharCode(h)
}function f(g){d=g["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,f)
}return{getUrlParameters:__getUrlParameters,makeClosure:function(l,n,m){var k=[];
for(var h=2,g=arguments.length;
h<g;
++h){k.push(arguments[h])
}return function(){var o=k.slice();
for(var q=0,p=arguments.length;
q<p;
++q){o.push(arguments[q])
}return n.apply(l,o)
}
},makeEnum:function(h){var j,g,k={};
for(j=0;
(g=h[j]);
++j){k[g]=g
}return k
},getFeatureParameters:function(g){return typeof d[g]==="undefined"?null:d[g]
},hasFeature:function(g){return typeof d[g]!=="undefined"
},getServices:function(){return c
},registerOnLoadHandler:function(g){e.push(g)
},runOnLoadHandlers:function(){for(var h=0,g=e.length;
h<g;
++h){e[h]()
}},escape:function(g,m){if(!g){return g
}else{if(typeof g==="string"){return gadgets.util.escapeString(g)
}else{if(typeof g==="array"){for(var l=0,h=g.length;
l<h;
++l){g[l]=gadgets.util.escape(g[l])
}}else{if(typeof g==="object"&&m){var k={};
for(var n in g){if(g.hasOwnProperty(n)){k[gadgets.util.escapeString(n)]=gadgets.util.escape(g[n],true)
}}return k
}}}}return g
},escapeString:function(m){if(!m){return m
}var h=[],l,n;
for(var k=0,g=m.length;
k<g;
++k){l=m.charCodeAt(k);
n=a[l];
if(n===true){h.push("&#",l,";")
}else{if(n!==false){h.push(m.charAt(k))
}}}return h.join("")
},unescapeString:function(g){if(!g){return g
}return g.replace(/&#([0-9]+);/g,b)
},attachBrowserEvent:function(i,h,j,g){if(typeof i.addEventListener!="undefined"){i.addEventListener(h,j,g)
}else{if(typeof i.attachEvent!="undefined"){i.attachEvent("on"+h,j)
}else{gadgets.warn("cannot attachBrowserEvent: "+h)
}}},removeBrowserEvent:function(i,h,j,g){if(i.removeEventListener){i.removeEventListener(h,j,g)
}else{if(i.detachEvent){i.detachEvent("on"+h,j)
}else{gadgets.warn("cannot removeBrowserEvent: "+h)
}}}}
}();;
var tamings___=tamings___||[];
tamings___.push(function(a){caja___.whitelistFuncs([[gadgets.util,"escapeString"],[gadgets.util,"getFeatureParameters"],[gadgets.util,"getUrlParameters"],[gadgets.util,"hasFeature"],[gadgets.util,"registerOnLoadHandler"],[gadgets.util,"unescapeString"]])
});;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.wpm){gadgets.rpctx.wpm=function(){var b,g;
var h;
var j=false;
var i=false;
var d=false;
function c(l,m,k){if(typeof window.addEventListener!="undefined"){window.addEventListener(l,m,k)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("on"+l,m)
}}}function e(l,m,k){if(window.removeEventListener){window.removeEventListener(l,m,k)
}else{if(window.detachEvent){window.detachEvent("on"+l,m)
}}}function a(){var k=false;
function l(m){if(m.data=="postmessage.test"){k=true;
if(typeof m.origin==="undefined"){i=true
}}}c("message",l,false);
window.postMessage("postmessage.test","*");
if(k){j=true
}e("message",l,false)
}function f(m){var n=gadgets.json.parse(m.data);
if(d){if(!n||!n.f){return
}var l=gadgets.rpc.getRelayUrl(n.f)||gadgets.util.getUrlParameters()["parent"];
var k=gadgets.rpc.getOrigin(l);
if(!i?m.origin!==k:m.domain!==/^.+:\/\/([^:]+).*/.exec(k)[1]){return
}}b(n)
}return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(k,l){b=k;
g=l;
a();
if(!j){h=function(n,o,m){n.postMessage(o,m)
}
}else{h=function(n,o,m){window.setTimeout(function(){n.postMessage(o,m)
},0)
}
}c("message",f,false);
g("..",true);
return true
},setup:function(m,l,k){d=k;
if(m===".."){if(d){gadgets.rpc._createRelayIframe(l)
}else{gadgets.rpc.call(m,gadgets.rpc.ACK)
}}return true
},call:function(l,o,n){var k=gadgets.rpc.getTargetOrigin(l);
var m=gadgets.rpc._getTargetWin(l);
if(k){h(m,gadgets.json.stringify(n),k)
}else{gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
}return true
},relayOnload:function(l,k){g(l,true)
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.frameElement){gadgets.rpctx.frameElement=function(){var e="__g2c_rpc";
var b="__c2g_rpc";
var d;
var c;
function a(g,k,j){try{if(k!==".."){var f=window.frameElement;
if(typeof f[e]==="function"){if(typeof f[e][b]!=="function"){f[e][b]=function(l){d(gadgets.json.parse(l))
}
}f[e](gadgets.json.stringify(j));
return true
}}else{var i=document.getElementById(g);
if(typeof i[e]==="function"&&typeof i[e][b]==="function"){i[e][b](gadgets.json.stringify(j));
return true
}}}catch(h){}return false
}return{getCode:function(){return"fe"
},isParentVerifiable:function(){return false
},init:function(f,g){d=f;
c=g;
return true
},setup:function(j,f){if(j!==".."){try{var i=document.getElementById(j);
i[e]=function(k){d(gadgets.json.parse(k))
}
}catch(h){return false
}}if(j===".."){c("..",true);
var g=function(){window.setTimeout(function(){gadgets.rpc.call(j,gadgets.rpc.ACK)
},500)
};
gadgets.util.registerOnLoadHandler(g)
}return true
},call:function(f,h,g){return a(f,h,g)
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.nix){gadgets.rpctx.nix=function(){var c="GRPC____NIXVBS_wrapper";
var d="GRPC____NIXVBS_get_wrapper";
var f="GRPC____NIXVBS_handle_message";
var b="GRPC____NIXVBS_create_channel";
var a=10;
var j=500;
var i={};
var h;
var g=0;
function e(){var l=i[".."];
if(l){return
}if(++g>a){gadgets.warn("Nix transport setup failed, falling back...");
h("..",false);
return
}if(!l&&window.opener&&"GetAuthToken" in window.opener){l=window.opener;
if(l.GetAuthToken()==gadgets.rpc.getAuthToken("..")){var k=gadgets.rpc.getAuthToken("..");
l.CreateChannel(window[d]("..",k),k);
i[".."]=l;
window.opener=null;
h("..",true);
return
}}window.setTimeout(function(){e()
},j)
}return{getCode:function(){return"nix"
},isParentVerifiable:function(){return false
},init:function(l,m){h=m;
if(typeof window[d]!=="unknown"){window[f]=function(o){window.setTimeout(function(){l(gadgets.json.parse(o))
},0)
};
window[b]=function(o,q,p){if(gadgets.rpc.getAuthToken(o)===p){i[o]=q;
h(o,true)
}};
var k="Class "+c+"\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n "+f+"(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call "+b+"(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction "+d+"(name, auth)\nDim wrap\nSet wrap = New "+c+"\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet "+d+" = wrap\nEnd Function";
try{window.execScript(k,"vbscript")
}catch(n){return false
}}return true
},setup:function(o,k){if(o===".."){e();
return true
}try{var m=document.getElementById(o);
var n=window[d](o,k);
m.contentWindow.opener=n
}catch(l){return false
}return true
},call:function(k,n,m){try{if(i[k]){i[k].SendMessage(gadgets.json.stringify(m))
}}catch(l){return false
}return true
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.rmr){gadgets.rpctx.rmr=function(){var g=500;
var e=10;
var h={};
var b;
var i;
function k(p,n,o,m){var q=function(){document.body.appendChild(p);
p.src="about:blank";
if(m){p.onload=function(){l(m)
}
}p.src=n+"#"+o
};
if(document.body){q()
}else{gadgets.util.registerOnLoadHandler(function(){q()
})
}}function c(o){if(typeof h[o]==="object"){return
}var p=document.createElement("iframe");
var m=p.style;
m.position="absolute";
m.top="0px";
m.border="0";
m.opacity="0";
m.width="10px";
m.height="1px";
p.id="rmrtransport-"+o;
p.name=p.id;
var n=gadgets.rpc.getRelayUrl(o);
if(!n){n=gadgets.rpc.getOrigin(gadgets.util.getUrlParameters()["parent"])+"/robots.txt"
}h[o]={frame:p,receiveWindow:null,relayUri:n,searchCounter:0,width:10,waiting:true,queue:[],sendId:0,recvId:0};
if(o!==".."){k(p,n,a(o))
}d(o)
}function d(o){var q=null;
h[o].searchCounter++;
try{var n=gadgets.rpc._getTargetWin(o);
if(o===".."){q=n.frames["rmrtransport-"+gadgets.rpc.RPC_ID]
}else{q=n.frames["rmrtransport-.."]
}}catch(p){}var m=false;
if(q){m=f(o,q)
}if(!m){if(h[o].searchCounter>e){return
}window.setTimeout(function(){d(o)
},g)
}}function j(n,p,t,s){var o=null;
if(t!==".."){o=h[".."]
}else{o=h[n]
}if(o){if(p!==gadgets.rpc.ACK){o.queue.push(s)
}if(o.waiting||(o.queue.length===0&&!(p===gadgets.rpc.ACK&&s&&s.ackAlone===true))){return true
}if(o.queue.length>0){o.waiting=true
}var m=o.relayUri+"#"+a(n);
try{o.frame.contentWindow.location=m;
var q=o.width==10?20:10;
o.frame.style.width=q+"px";
o.width=q
}catch(r){return false
}}return true
}function a(n){var o=h[n];
var m={id:o.sendId};
if(o){m.d=Array.prototype.slice.call(o.queue,0);
m.d.push({s:gadgets.rpc.ACK,id:o.recvId})
}return gadgets.json.stringify(m)
}function l(x){var u=h[x];
var q=u.receiveWindow.location.hash.substring(1);
var y=gadgets.json.parse(decodeURIComponent(q))||{};
var n=y.d||[];
var o=false;
var t=false;
var v=0;
var m=(u.recvId-y.id);
for(var p=0;
p<n.length;
++p){var s=n[p];
if(s.s===gadgets.rpc.ACK){i(x,true);
if(u.waiting){t=true
}u.waiting=false;
var r=Math.max(0,s.id-u.sendId);
u.queue.splice(0,r);
u.sendId=Math.max(u.sendId,s.id||0);
continue
}o=true;
if(++v<=m){continue
}++u.recvId;
b(s)
}if(o||(t&&u.queue.length>0)){var w=(x==="..")?gadgets.rpc.RPC_ID:"..";
j(x,gadgets.rpc.ACK,w,{ackAlone:o})
}}function f(p,s){var o=h[p];
try{var n=false;
n="document" in s;
if(!n){return false
}n=typeof s.document=="object";
if(!n){return false
}var r=s.location.href;
if(r==="about:blank"){return false
}}catch(m){return false
}o.receiveWindow=s;
function q(){l(p)
}if(typeof s.attachEvent==="undefined"){s.onresize=q
}else{s.attachEvent("onresize",q)
}if(p===".."){k(o.frame,o.relayUri,a(p),p)
}else{l(p)
}return true
}return{getCode:function(){return"rmr"
},isParentVerifiable:function(){return true
},init:function(m,n){b=m;
i=n;
return true
},setup:function(o,m){try{c(o)
}catch(n){gadgets.warn("Caught exception setting up RMR: "+n);
return false
}return true
},call:function(m,o,n){return j(m,n.s,o,n)
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.ifpc){gadgets.rpctx.ifpc=function(){var e=[];
var d=0;
var c;
function b(h){var f=[];
for(var k=0,g=h.length;
k<g;
++k){f.push(encodeURIComponent(gadgets.json.stringify(h[k])))
}return f.join("&")
}function a(j){var g;
for(var f=e.length-1;
f>=0;
--f){var k=e[f];
try{if(k&&(k.recyclable||k.readyState==="complete")){k.parentNode.removeChild(k);
if(window.ActiveXObject){e[f]=k=null;
e.splice(f,1)
}else{k.recyclable=false;
g=k;
break
}}}catch(h){}}if(!g){g=document.createElement("iframe");
g.style.border=g.style.width=g.style.height="0px";
g.style.visibility="hidden";
g.style.position="absolute";
g.onload=function(){this.recyclable=true
};
e.push(g)
}g.src=j;
window.setTimeout(function(){document.body.appendChild(g)
},0)
}return{getCode:function(){return"ifpc"
},isParentVerifiable:function(){return true
},init:function(f,g){c=g;
c("..",true);
return true
},setup:function(g,f){c(g,true);
return true
},call:function(f,k,i){var j=gadgets.rpc.getRelayUrl(f);
++d;
if(!j){gadgets.warn("No relay file assigned for IFPC");
return false
}var h=null;
if(i.l){var g=i.a;
h=[j,"#",b([k,d,1,0,b([k,i.s,"","",k].concat(g))])].join("")
}else{h=[j,"#",f,"&",k,"@",d,"&1&0&",encodeURIComponent(gadgets.json.stringify(i))].join("")
}a(h);
return true
}}
}()
};;
if(!gadgets.rpc){gadgets.rpc=function(){var E="__cb";
var L="";
var M="__ack";
var f=500;
var y=10;
var c="|";
var n={};
var P={};
var u={};
var t={};
var r=0;
var j={};
var k={};
var J={};
var e={};
var l={};
var v={};
var s=(window.top!==window.self);
var p=window.name;
var B=function(){};
var I=0;
var S=1;
var a=2;
var O=window.console&&console.log?console.log:function(){};
var K=(function(){function W(X){return function(){O(X+": call ignored")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:W("init"),setup:W("setup"),call:W("call")}
})();
if(gadgets.util){e=gadgets.util.getUrlParameters()
}function C(){return typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?gadgets.rpctx.nix:navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc
}function i(ab,Z){var X=z;
if(!Z){X=K
}l[ab]=X;
var W=v[ab]||[];
for(var Y=0;
Y<W.length;
++Y){var aa=W[Y];
aa.t=x(ab);
X.call(ab,aa.f,aa)
}v[ab]=[]
}var A=false,N=false;
function G(){if(N){return
}function W(){A=true
}gadgets.util.attachBrowserEvent(window,"unload",W,false);
N=true
}function h(W,aa,X,Z,Y){if(!t[aa]||t[aa]!==X){gadgets.error("Invalid auth token. "+t[aa]+" vs "+X);
B(aa,a)
}Y.onunload=function(){if(k[aa]&&!A){B(aa,S);
gadgets.rpc.removeReceiver(aa)
}};
G();
Z=gadgets.json.parse(decodeURIComponent(Z));
z.relayOnload(aa,Z)
}function T(X){if(X&&typeof X.s==="string"&&typeof X.f==="string"&&X.a instanceof Array){if(t[X.f]){if(t[X.f]!==X.t){gadgets.error("Invalid auth token. "+t[X.f]+" vs "+X.t);
B(X.f,a)
}}if(X.s===M){window.setTimeout(function(){i(X.f,true)
},0);
return
}if(X.c){X.callback=function(Y){gadgets.rpc.call(X.f,E,null,X.c,Y)
}
}var W=(n[X.s]||n[L]).apply(X,X.a);
if(X.c&&typeof W!=="undefined"){gadgets.rpc.call(X.f,E,null,X.c,W)
}}}function o(Y){if(!Y){return""
}Y=Y.toLowerCase();
if(Y.indexOf("//")==0){Y=window.location.protocol+Y
}if(Y.indexOf("://")==-1){Y=window.location.protocol+"//"+Y
}var Z=Y.substring(Y.indexOf("://")+3);
var W=Z.indexOf("/");
if(W!=-1){Z=Z.substring(0,W)
}var ab=Y.substring(0,Y.indexOf("://"));
var aa="";
var ac=Z.indexOf(":");
if(ac!=-1){var X=Z.substring(ac+1);
Z=Z.substring(0,ac);
if((ab==="http"&&X!=="80")||(ab==="https"&&X!=="443")){aa=":"+X
}}return ab+"://"+Z+aa
}function w(X,W){return"/"+X+(W?c+W:"")
}function q(Z){if(Z.charAt(0)=="/"){var X=Z.indexOf(c);
var Y=X>0?Z.substring(1,X):Z.substring(1);
var W=X>0?Z.substring(X+1):null;
return{id:Y,origin:W}
}else{return null
}}function V(Y){if(typeof Y==="undefined"||Y===".."){return window.parent
}var X=q(Y);
if(X){return window.top.frames[X.id]
}Y=String(Y);
var W=window.frames[Y];
if(W){return W
}W=document.getElementById(Y);
if(W&&W.contentWindow){return W.contentWindow
}return null
}function D(Z){var Y=null;
var W=H(Z);
if(W){Y=W
}else{var X=q(Z);
if(X){Y=X.origin
}else{if(Z==".."){Y=e.parent
}else{Y=document.getElementById(Z).src
}}}return o(Y)
}var z=C();
n[L]=function(){O("Unknown RPC service: "+this.s)
};
n[E]=function(X,W){var Y=j[X];
if(Y){delete j[X];
Y(W)
}};
function R(Z,X,W){if(k[Z]===true){return
}if(typeof k[Z]==="undefined"){k[Z]=0
}var Y=V(Z);
if(Z===".."||Y!=null){if(z.setup(Z,X,W)===true){k[Z]=true;
return
}}if(k[Z]!==true&&k[Z]++<y){window.setTimeout(function(){R(Z,X,W)
},f)
}else{l[Z]=K;
k[Z]=true
}}function F(X,aa){if(typeof J[X]==="undefined"){J[X]=false;
var Z=H(X);
if(o(Z)!==o(window.location.href)){return false
}var Y=V(X);
try{J[X]=Y.gadgets.rpc.receiveSameDomain
}catch(W){gadgets.error("Same domain call failed: parent= incorrectly set.")
}}if(typeof J[X]==="function"){J[X](aa);
return true
}return false
}function H(X){var W=P[X];
if(W&&W.substring(0,1)==="/"){if(W.substring(1,2)==="/"){W=document.location.protocol+W
}else{W=document.location.protocol+"//"+document.location.host+W
}}return W
}function U(X,W,Y){if(!/http(s)?:\/\/.+/.test(W)){if(W.indexOf("//")==0){W=window.location.protocol+W
}else{if(W.charAt(0)=="/"){W=window.location.protocol+"//"+window.location.host+W
}else{if(W.indexOf("://")==-1){W=window.location.protocol+"//"+W
}}}}P[X]=W;
u[X]=!!Y
}function x(W){return t[W]
}function d(W,Y,X){Y=Y||"";
t[W]=String(Y);
R(W,Y,X)
}function b(W,X){function Y(ac){var ab=ac?ac.rpc:{};
var aa=ab.useLegacyProtocol;
if(typeof aa==="string"){aa=aa==="true"
}var Z=ab.parentRelayUrl||"";
Z=o(e.parent)+Z;
var ad=!!aa;
U("..",Z,ad);
if(ad){z=gadgets.rpctx.ifpc;
z.init(T,i)
}d("..",W,X||e.forcesecure)
}gadgets.config.register("rpc",null,Y)
}function Q(Z,W,aa){var X=aa||e.forcesecure||false;
var Y=W||e.parent;
if(Y){U("..",Y);
d("..",Z,X)
}}function m(Y,aa,W,Z){if(Y.charAt(0)!="/"){if(!gadgets.util){return
}var ae=document.getElementById(Y);
if(!ae){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+Y+", element not found.")
}}var ac=aa||ae.src;
U(Y,ac);
var ad=gadgets.util.getUrlParameters(ac);
var X=W||ad.rpctoken;
var ab=Z||ad.forcesecure;
d(Y,X,ab)
}function g(W,Y,aa,Z){if(W===".."){var X=aa||e.rpctoken||e.ifpctok||"";
if(window.__isgadget===true){b(X,Z)
}else{Q(X,Y,Z)
}}else{m(W,Y,aa,Z)
}}return{config:function(W){if(typeof W.securityCallback==="function"){B=W.securityCallback
}},register:function(X,W){if(X===E||X===M){throw new Error("Cannot overwrite callback/ack service")
}if(X===L){throw new Error("Cannot overwrite default service: use registerDefault")
}n[X]=W
},unregister:function(W){if(W===E||W===M){throw new Error("Cannot delete callback/ack service")
}if(W===L){throw new Error("Cannot delete default service: use unregisterDefault")
}delete n[W]
},registerDefault:function(W){n[L]=W
},unregisterDefault:function(){delete n[L]
},forceParentVerifiable:function(){if(!z.isParentVerifiable()){z=gadgets.rpctx.ifpc
}},call:function(W,X,ac,aa){W=W||"..";
var ab="..";
if(W===".."){ab=p
}else{if(W.charAt(0)=="/"){ab=w(p,gadgets.rpc.getOrigin(location.href))
}}++r;
if(ac){j[r]=ac
}var Z={s:X,f:ab,c:ac?r:0,a:Array.prototype.slice.call(arguments,3),t:t[W],l:u[W]};
if(W!==".."&&q(W)==null&&!document.getElementById(W)){return
}if(F(W,Z)){return
}var Y=l[W]||z;
if(!Y){if(!v[W]){v[W]=[Z]
}else{v[W].push(Z)
}return
}if(u[W]){Y=gadgets.rpctx.ifpc
}if(Y.call(W,ab,Z)===false){l[W]=K;
z.call(W,ab,Z)
}},getRelayUrl:H,setRelayUrl:U,setAuthToken:d,setupReceiver:g,getAuthToken:x,removeReceiver:function(W){delete P[W];
delete u[W];
delete t[W];
delete k[W];
delete J[W];
delete l[W]
},getRelayChannel:function(){return z.getCode()
},receive:function(X,W){if(X.length>4){T(gadgets.json.parse(decodeURIComponent(X[X.length-1])))
}else{h.apply(null,X.concat(W))
}},receiveSameDomain:function(W){W.a=Array.prototype.slice.call(W.a);
window.setTimeout(function(){T(W)
},0)
},getOrigin:o,getTargetOrigin:D,init:function(){if(z.init(T,i)===false){z=K
}if(s){g("..")
}},_getTargetWin:V,_parseSiblingId:q,_createRelayIframe:function(W,Y){var ab=H("..");
if(!ab){return null
}var aa=ab+"#..&"+p+"&"+W+"&"+encodeURIComponent(gadgets.json.stringify(Y));
var X=document.createElement("iframe");
X.style.border=X.style.width=X.style.height="0px";
X.style.visibility="hidden";
X.style.position="absolute";
function Z(){document.body.appendChild(X);
X.src='javascript:"<html></html>"';
X.src=aa
}if(document.body){Z()
}else{gadgets.util.registerOnLoadHandler(function(){Z()
})
}return X
},ACK:M,RPC_ID:p,SEC_ERROR_LOAD_TIMEOUT:I,SEC_ERROR_FRAME_PHISH:S,SEC_ERROR_FORGED_MSG:a}
}();
gadgets.rpc.init()
};;
gadgets.config.init({"rpc":{"parentRelayUrl":"/rpc_relay.html"}});
var friendconnect_serverBase = "http://www.google.com";var friendconnect_loginUrl = "https://www.google.com/accounts";var friendconnect_gadgetPrefix = "http://www-a-fc-opensocial.googleusercontent.com/gadgets";
var friendconnect_serverVersion = "0.556.7";
var friendconnect_imageUrl = "http://www.google.com/friendconnect/scs/images";
var friendconnect_lightbox = true;
function fca(a){throw a;}var fcb=true,fcc=null,fcd=false,fce=gadgets,fcf=Error,fcg=undefined,fch=friendconnect_serverBase,fci=encodeURIComponent,fcaa=parseInt,fcj=String,fck=window,fcba=setTimeout,fcca=Object,fcl=document,fcm=Array,fcn=Math;function fcda(a,b){return a.toString=b}function fcea(a,b){return a.length=b}function fcfa(a,b){return a.className=b}function fco(a,b){return a.width=b}function fcp(a,b){return a.innerHTML=b}function fcq(a,b){return a.height=b}
var fcr="appendChild",fcs="push",fcga="toString",fct="length",fcha="propertyIsEnumerable",fcia="stringify",fc="prototype",fcja="test",fcu="width",fcv="round",fcw="slice",fcx="replace",fcy="document",fcka="data",fcz="split",fcA="getElementById",fcla="offsetWidth",fcB="charAt",fcC="location",fcD="getUrlParameters",fcE="indexOf",fcma="Dialog",fcF="style",fcna="body",fcG="left",fcH="call",fcI="match",fcJ="options",fcoa="random",fcK="createElement",fcpa="json",fcqa="addEventListener",fcra="bottom",fcL=
"setAttribute",fcsa="href",fcta="substring",fcM="util",fcua="maxHeight",fcva="type",fcN="apply",fcwa="auth",fcxa="reset",fcya="getSecurityToken",fcza="bind",fcO="name",fcP="parentNode",fcAa="display",fcQ="height",fcBa="offsetHeight",fcR="register",fcS="join",fcCa="unshift",fcDa="toLowerCase",fcT="right",goog=goog||{},fcU=this,fcFa=function(a,b,c){a=a[fcz](".");c=c||fcU;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a[fct]&&(d=a.shift());)if(!a[fct]&&fcEa(b))c[d]=b;else c=c[d]?c[d]:
c[d]={}},fcGa=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof fcm||!(a instanceof fcca)&&fcca[fc][fcga][fcH](a)=="[object Array]"||typeof a[fct]=="number"&&typeof a.splice!="undefined"&&typeof a[fcha]!="undefined"&&!a[fcha]("splice"))return"array";if(!(a instanceof fcca)&&(fcca[fc][fcga][fcH](a)=="[object Function]"||typeof a[fcH]!="undefined"&&typeof a[fcha]!="undefined"&&!a[fcha]("call")))return"function"}else return"null";else if(b=="function"&&typeof a[fcH]=="undefined")return"object";
return b},fcEa=function(a){return a!==fcg},fcHa=function(a){var b=fcGa(a);return b=="array"||b=="object"&&typeof a[fct]=="number"},fcIa=function(a){return typeof a=="string"},fcJa=function(a){a=fcGa(a);return a=="object"||a=="array"||a=="function"};"closure_uid_"+fcn.floor(fcn[fcoa]()*2147483648)[fcga](36);
var fcKa=function(a){var b=fcGa(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();b=b=="array"?[]:{};for(var c in a)b[c]=fcKa(a[c]);return b}return a},fcLa=function(a){return a[fcH][fcN](a[fcza],arguments)},fcMa=function(a,b){var c=b||fcU;if(arguments[fct]>2){var d=fcm[fc][fcw][fcH](arguments,2);return function(){var e=fcm[fc][fcw][fcH](arguments);fcm[fc][fcCa][fcN](e,d);return a[fcN](c,e)}}else return function(){return a[fcN](c,arguments)}},fcV=function(){fcV=Function[fc][fcza]&&Function[fc][fcza][fcga]()[fcE]("native code")!=
-1?fcLa:fcMa;return fcV[fcN](fcc,arguments)},fcNa=function(a){var b=fcm[fc][fcw][fcH](arguments,1);return function(){var c=fcm[fc][fcw][fcH](arguments);c[fcCa][fcN](c,b);return a[fcN](this,c)}},fcOa=function(a,b){for(var c in b)a[c]=b[c]},fcPa=Date.now||function(){return+new Date},fcW=function(a,b,c){fcFa(a,b,c)},fcX=function(a,b){function c(){}c.prototype=b[fc];a.Qc=b[fc];a.prototype=new c;a[fc].constructor=a};
Function[fc].bind=Function[fc][fcza]||function(a){if(arguments[fct]>1){var b=fcm[fc][fcw][fcH](arguments,1);b[fcCa](this,a);return fcV[fcN](fcc,b)}else return fcV(this,a)};SHA1=function(){this.c=fcm(5);this.fa=fcm(64);this.Hc=fcm(80);this.va=fcm(64);this.va[0]=128;for(var a=1;a<64;++a)this.va[a]=0;this[fcxa]()};SHA1[fc].reset=function(){this.c[0]=1732584193;this.c[1]=4023233417;this.c[2]=2562383102;this.c[3]=271733878;this.c[4]=3285377520;this.Ba=this.A=0};SHA1[fc].Aa=function(a,b){return(a<<b|a>>>32-b)&4294967295};
SHA1[fc].N=function(a){for(var b=this.Hc,c=0;c<64;c+=4){var d=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];b[c/4]=d}for(c=16;c<80;++c)b[c]=this.Aa(b[c-3]^b[c-8]^b[c-14]^b[c-16],1);a=this.c[0];d=this.c[1];var e=this.c[2],f=this.c[3],i=this.c[4],j,k;for(c=0;c<80;++c){if(c<40)if(c<20){j=f^d&(e^f);k=1518500249}else{j=d^e^f;k=1859775393}else if(c<60){j=d&e|f&(d|e);k=2400959708}else{j=d^e^f;k=3395469782}j=this.Aa(a,5)+j+i+k+b[c]&4294967295;i=f;f=e;e=this.Aa(d,30);d=a;a=j}this.c[0]=this.c[0]+a&4294967295;this.c[1]=
this.c[1]+d&4294967295;this.c[2]=this.c[2]+e&4294967295;this.c[3]=this.c[3]+f&4294967295;this.c[4]=this.c[4]+i&4294967295};SHA1[fc].update=function(a,b){if(!b)b=a[fct];var c=0;if(this.A==0)for(;c+64<b;){this.N(a[fcw](c,c+64));c+=64;this.Ba+=64}for(;c<b;){this.fa[this.A++]=a[c++];++this.Ba;if(this.A==64){this.A=0;for(this.N(this.fa);c+64<b;){this.N(a[fcw](c,c+64));c+=64;this.Ba+=64}}}};
SHA1[fc].digest=function(){var a=fcm(20),b=this.Ba*8;this.A<56?this.update(this.va,56-this.A):this.update(this.va,64-(this.A-56));for(var c=63;c>=56;--c){this.fa[c]=b&255;b>>>=8}this.N(this.fa);for(c=b=0;c<5;++c)for(var d=24;d>=0;d-=8)a[b++]=this.c[c]>>d&255;return a};G_HMAC=function(a,b,c){if(!a||typeof a!="object"||!a[fcxa]||!a.update||!a.digest)fca(fcf("Invalid hasher object. Hasher unspecified or does not implement expected interface."));if(b.constructor!=fcm)fca(fcf("Invalid key."));if(c&&typeof c!="number")fca(fcf("Invalid block size."));this.k=a;this.ea=c||16;this.Wb=fcm(this.ea);this.Vb=fcm(this.ea);if(b[fct]>this.ea){this.k.update(b);b=this.k.digest()}for(c=0;c<this.ea;c++){a=c<b[fct]?b[c]:0;this.Wb[c]=a^G_HMAC.OPAD;this.Vb[c]=a^G_HMAC.IPAD}};
G_HMAC.OPAD=92;G_HMAC.IPAD=54;G_HMAC[fc].reset=function(){this.k[fcxa]();this.k.update(this.Vb)};G_HMAC[fc].update=function(a){if(a.constructor!=fcm)fca(fcf("Invalid data. Data must be an array."));this.k.update(a)};G_HMAC[fc].digest=function(){var a=this.k.digest();this.k[fcxa]();this.k.update(this.Wb);this.k.update(a);return this.k.digest()};G_HMAC[fc].Ib=function(a){this[fcxa]();this.update(a);return this.digest()};var fcQa=function(a){for(var b=[],c=0,d=0;d<a[fct];d++){for(var e=a.charCodeAt(d);e>255;){b[c++]=e&255;e>>=8}b[c++]=e}return b};var fcRa=fcc,fcSa=fcc,fcTa=fcc,fcUa=fcc,fcWa=function(a,b){if(!fcHa(a))fca(fcf("encodeByteArray takes an array as a parameter"));fcVa();for(var c=b?fcTa:fcRa,d=[],e=0;e<a[fct];e+=3){var f=a[e],i=e+1<a[fct],j=i?a[e+1]:0,k=e+2<a[fct],l=k?a[e+2]:0,h=f>>2;f=(f&3)<<4|j>>4;j=(j&15)<<2|l>>6;l=l&63;if(!k){l=64;i||(j=64)}d[fcs](c[h],c[f],c[j],c[l])}return d[fcS]("")},fcXa=function(a,b){if(a[fct]%4)fca(fcf("Length of b64-encoded data must be zero mod four"));fcVa();for(var c=b?fcUa:fcSa,d=[],e=0;e<a[fct];e+=
4){var f=c[a[fcB](e)],i=c[a[fcB](e+1)],j=c[a[fcB](e+2)],k=c[a[fcB](e+3)];if(f==fcc||i==fcc||j==fcc||k==fcc)fca(fcf());f=f<<2|i>>4;d[fcs](f);if(j!=64){i=i<<4&240|j>>2;d[fcs](i);if(k!=64){j=j<<6&192|k;d[fcs](j)}}}return d},fcVa=function(){if(!fcRa){fcRa={};fcSa={};fcTa={};fcUa={};for(var a=0;a<65;a++){fcRa[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[fcB](a);fcSa[fcRa[a]]=a;fcTa[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[fcB](a);fcUa[fcTa[a]]=a}}};var fcYa=function(a){for(var b=1;b<arguments[fct];b++){var c=fcj(arguments[b])[fcx](/\$/g,"$$$$");a=a[fcx](/\%s/,c)}return a},fcZa=function(a,b){var c=fcj(a)[fcDa](),d=fcj(b)[fcDa]();return c<d?-1:c==d?0:1},fc4a=function(a,b){if(b)return a[fcx](fc_a,"&amp;")[fcx](fc0a,"&lt;")[fcx](fc1a,"&gt;")[fcx](fc2a,"&quot;");else{if(!fc3a[fcja](a))return a;if(a[fcE]("&")!=-1)a=a[fcx](fc_a,"&amp;");if(a[fcE]("<")!=-1)a=a[fcx](fc0a,"&lt;");if(a[fcE](">")!=-1)a=a[fcx](fc1a,"&gt;");if(a[fcE]('"')!=-1)a=a[fcx](fc2a,
"&quot;");return a}},fc_a=/&/g,fc0a=/</g,fc1a=/>/g,fc2a=/\"/g,fc3a=/[&<>\"]/,fc6a=function(a,b){for(var c=0,d=fcj(a)[fcx](/^[\s\xa0]+|[\s\xa0]+$/g,"")[fcz]("."),e=fcj(b)[fcx](/^[\s\xa0]+|[\s\xa0]+$/g,"")[fcz]("."),f=fcn.max(d[fct],e[fct]),i=0;c==0&&i<f;i++){var j=d[i]||"",k=e[i]||"",l=RegExp("(\\d*)(\\D*)","g"),h=RegExp("(\\d*)(\\D*)","g");do{var g=l.exec(j)||["","",""],m=h.exec(k)||["","",""];if(g[0][fct]==0&&m[0][fct]==0)break;c=g[1][fct]==0?0:fcaa(g[1],10);var n=m[1][fct]==0?0:fcaa(m[1],10);c=
fc5a(c,n)||fc5a(g[2][fct]==0,m[2][fct]==0)||fc5a(g[2],m[2])}while(c==0)}return c},fc5a=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var fc7a,fc8a,fc9a,fc$a,fcab,fcbb,fccb,fcdb,fceb,fcfb=function(){return fcU.navigator?fcU.navigator.userAgent:fcc},fcgb=function(){return fcU.navigator},fchb=function(){fcab=fc$a=fc9a=fc8a=fc7a=fcd;var a;if(a=fcfb()){var b=fcgb();fc7a=a[fcE]("Opera")==0;fc8a=!fc7a&&a[fcE]("MSIE")!=-1;fc$a=(fc9a=!fc7a&&a[fcE]("WebKit")!=-1)&&a[fcE]("Mobile")!=-1;fcab=!fc7a&&!fc9a&&b.product=="Gecko"}};fchb();
var fcib=fc7a,fcY=fc8a,fcjb=fcab,fckb=fc9a,fclb=fc$a,fcmb=function(){var a=fcgb();return a&&a.platform||""},fcnb=fcmb(),fcob=function(){fcbb=fcnb[fcE]("Mac")!=-1;fccb=fcnb[fcE]("Win")!=-1;fcdb=fcnb[fcE]("Linux")!=-1;fceb=!!fcgb()&&(fcgb().appVersion||"")[fcE]("X11")!=-1};fcob();
var fcqb=function(){var a="",b;if(fcib&&fcU.opera){a=fcU.opera.version;a=typeof a=="function"?a():a}else{if(fcjb)b=/rv\:([^\);]+)(\)|;)/;else if(fcY)b=/MSIE\s+([^\);]+)(\)|;)/;else if(fckb)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(fcfb()))?a[1]:""}if(fcY){b=fcpb();if(b>parseFloat(a))return fcj(b)}return a},fcpb=function(){var a=fcU[fcy];return a?a.documentMode:fcg},fcrb=fcqb(),fcsb={},fctb=function(a){return fcsb[a]||(fcsb[a]=fc6a(fcrb,a)>=0)};var fcZ=function(a){this.Q=a},fcub=/\s*;\s*/;fcZ[fc].Tb=function(a){return!/[;=\s]/[fcja](a)};fcZ[fc].Ub=function(a){return!/[;\r\n]/[fcja](a)};
fcZ[fc].set=function(a,b,c,d,e,f){if(!this.Tb(a))fca(fcf('Invalid cookie name "'+a+'"'));if(!this.Ub(b))fca(fcf('Invalid cookie value "'+b+'"'));fcEa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";if(c<0)c="";else if(c==0){c=new Date(1970,1,1);c=";expires="+c.toUTCString()}else{c=new Date(fcPa()+c*1E3);c=";expires="+c.toUTCString()}this.vc(a+"="+b+e+d+c+f)};fcZ[fc].get=function(a,b){for(var c=a+"=",d=this.na(),e=0,f;f=d[e];e++)if(f[fcE](c)==0)return f.substr(c[fct]);return b};
fcZ[fc].remove=function(a,b,c){var d=this.O(a);this.set(a,"",0,b,c);return d};fcZ[fc].z=function(){return this.la().keys};fcZ[fc].F=function(){return this.la().values};fcZ[fc].S=function(){var a=this.Pa();if(!a)return 0;return this.na()[fct]};fcZ[fc].O=function(a){return fcEa(this.get(a))};fcZ[fc].clear=function(){for(var a=this.la().keys,b=a[fct]-1;b>=0;b--)this.remove(a[b])};fcZ[fc].vc=function(a){this.Q.cookie=a};fcZ[fc].Pa=function(){return this.Q.cookie};
fcZ[fc].na=function(){return(this.Pa()||"")[fcz](fcub)};fcZ[fc].la=function(){for(var a=this.na(),b=[],c=[],d,e,f=0;e=a[f];f++){d=e[fcE]("=");if(d==-1){b[fcs]("");c[fcs](e)}else{b[fcs](e[fcta](0,d));c[fcs](e[fcta](d+1))}}return{keys:b,values:c}};var fcvb=new fcZ(fcl);fcvb.MAX_COOKIE_LENGTH=3950;var fcwb=function(a){this.stack=fcf().stack||"";if(a)this.message=fcj(a)};fcX(fcwb,fcf);fcwb[fc].name="CustomError";var fcxb=function(a,b){b[fcCa](a);fcwb[fcH](this,fcYa[fcN](fcc,b));b.shift();this.messagePattern=a};fcX(fcxb,fcwb);fcxb[fc].name="AssertionError";var fcyb=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else if(a){e+=": "+a;f=b}fca(new fcxb(""+e,f||[]))},fczb=function(a,b){a||fcyb("",fcc,b,fcm[fc][fcw][fcH](arguments,2));return a};var fc_=fcm[fc],fcAb=fc_[fcE]?function(a,b,c){fczb(a[fct]!=fcc);return fc_[fcE][fcH](a,b,c)}:function(a,b,c){c=c==fcc?0:c<0?fcn.max(0,a[fct]+c):c;if(fcIa(a)){if(!fcIa(b)||b[fct]!=1)return-1;return a[fcE](b,c)}for(c=c;c<a[fct];c++)if(c in a&&a[c]===b)return c;return-1},fcBb=fc_.forEach?function(a,b,c){fczb(a[fct]!=fcc);fc_.forEach[fcH](a,b,c)}:function(a,b,c){for(var d=a[fct],e=fcIa(a)?a[fcz](""):a,f=0;f<d;f++)f in e&&b[fcH](c,e[f],f,a)},fcCb=function(a,b){return fcAb(a,b)>=0},fcDb=function(){return fc_.concat[fcN](fc_,
arguments)},fcEb=function(a){if(fcGa(a)=="array")return fcDb(a);else{for(var b=[],c=0,d=a[fct];c<d;c++)b[c]=a[c];return b}},fcFb=function(a,b,c){fczb(a[fct]!=fcc);return arguments[fct]<=2?fc_[fcw][fcH](a,b):fc_[fcw][fcH](a,b,c)};var fcGb=function(a,b){this.x=fcEa(a)?a:0;this.y=fcEa(b)?b:0};fcGb[fc].clone=function(){return new fcGb(this.x,this.y)};fcda(fcGb[fc],function(){return"("+this.x+", "+this.y+")"});var fc0=function(a,b){fco(this,a);fcq(this,b)};fc0[fc].clone=function(){return new fc0(this[fcu],this[fcQ])};fcda(fc0[fc],function(){return"("+this[fcu]+" x "+this[fcQ]+")"});fc0[fc].ceil=function(){fco(this,fcn.ceil(this[fcu]));fcq(this,fcn.ceil(this[fcQ]));return this};fc0[fc].floor=function(){fco(this,fcn.floor(this[fcu]));fcq(this,fcn.floor(this[fcQ]));return this};fc0[fc].round=function(){fco(this,fcn[fcv](this[fcu]));fcq(this,fcn[fcv](this[fcQ]));return this};
fc0[fc].scale=function(a){this.width*=a;this.height*=a;return this};var fcHb=function(a,b,c){for(var d in a)b[fcH](c,a[d],d,a)},fcIb=function(a){var b=[],c=0;for(var d in a)b[c++]=a[d];return b},fcJb=function(a){var b=[],c=0;for(var d in a)b[c++]=d;return b},fcKb=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],fcLb=function(a){for(var b,c,d=1;d<arguments[fct];d++){c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<fcKb[fct];e++){b=fcKb[e];if(fcca[fc].hasOwnProperty[fcH](c,b))a[b]=c[b]}}};var fcMb=!fcY||fctb("9");fcY&&!fctb("9");var fcNb=function(a){return(a=a.className)&&typeof a[fcz]=="function"?a[fcz](/\s+/):[]},fcPb=function(a){var b=fcNb(a),c=fcFb(arguments,1);c=fcOb(b,c);fcfa(a,b[fcS](" "));return c},fcOb=function(a,b){for(var c=0,d=0;d<b[fct];d++)if(!fcCb(a,b[d])){a[fcs](b[d]);c++}return c==b[fct]};var fcQb=function(a){return fcIa(a)?fcl[fcA](a):a},fcRb=fcQb,fcSb=function(a,b,c,d){a=d||a;b=b&&b!="*"?b.toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(!fckb||fcl.compatMode=="CSS1Compat"||fctb("528"))&&(b||c)){c=b+(c?"."+c:"");return a.querySelectorAll(c)}if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,i;i=a[f];f++)if(b==i.nodeName)d[e++]=i;fcea(d,e);return d}else return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;i=a[f];f++){b=i.className;
if(typeof b[fcz]=="function"&&fcCb(b[fcz](/\s+/),c))d[e++]=i}fcea(d,e);return d}else return a},fcUb=function(a,b){fcHb(b,function(c,d){if(d=="style")a[fcF].cssText=c;else if(d=="class")fcfa(a,c);else if(d=="for")a.htmlFor=c;else if(d in fcTb)a[fcL](fcTb[d],c);else a[d]=c})},fcTb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"},fcVb=function(a){var b=
a[fcy];if(fckb&&!fctb("500")&&!fclb){if(typeof a.innerHeight=="undefined")a=fck;b=a.innerHeight;var c=a[fcy].documentElement.scrollHeight;if(a==a.top)if(c<b)b-=15;return new fc0(a.innerWidth,b)}a=b.compatMode=="CSS1Compat";if(fcib&&!fctb("9.50"))a=fcd;a=a?b.documentElement:b[fcna];return new fc0(a.clientWidth,a.clientHeight)},fc1=function(){return fcWb(fcl,arguments)},fcWb=function(a,b){var c=b[0],d=b[1];if(!fcMb&&d&&(d[fcO]||d[fcva])){c=["<",c];d[fcO]&&c[fcs](' name="',fc4a(d[fcO]),'"');if(d[fcva]){c[fcs](' type="',
fc4a(d[fcva]),'"');var e={};fcLb(e,d);d=e;delete d[fcva]}c[fcs](">");c=c[fcS]("")}c=a[fcK](c);if(d)if(fcIa(d))fcfa(c,d);else fcGa(d)=="array"?fcPb[fcN](fcc,[c].concat(d)):fcUb(c,d);b[fct]>2&&fcXb(a,c,b,2);return c},fcXb=function(a,b,c,d){function e(i){if(i)b[fcr](fcIa(i)?a.createTextNode(i):i)}for(d=d;d<c[fct];d++){var f=c[d];fcHa(f)&&!(fcJa(f)&&f.nodeType>0)?fcBb(fcYb(f)?fcEb(f):f,e):e(f)}},fcZb=function(a,b){a[fcr](b)},fc_b=function(a){return a&&a[fcP]?a[fcP].removeChild(a):fcc},fc0b=function(a,
b){var c=b[fcP];c&&c.replaceChild(a,b)},fc1b=function(a,b){if(a.contains&&b.nodeType==1)return a==b||a.contains(b);if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b[fcP];return b==a},fcYb=function(a){if(a&&typeof a[fct]=="number")if(fcJa(a))return typeof a.item=="function"||typeof a.item=="string";else if(fcGa(a)=="function")return typeof a.item=="function";return fcd},fc2b=function(a){this.Q=a||fcU[fcy]||fcl};
fc2b[fc].createElement=function(a){return this.Q[fcK](a)};fc2b[fc].createTextNode=function(a){return this.Q.createTextNode(a)};fc2b[fc].appendChild=fcZb;fc2b[fc].removeNode=fc_b;fc2b[fc].replaceNode=fc0b;fc2b[fc].contains=fc1b;var fc3b="StopIteration"in fcU?fcU.StopIteration:fcf("StopIteration"),fc4b=function(){};fc4b[fc].next=function(){fca(fc3b)};fc4b[fc].__iterator__=function(){return this};var fc2=function(a){this.i={};this.e=[];var b=arguments[fct];if(b>1){if(b%2)fca(fcf("Uneven number of arguments"));for(var c=0;c<b;c+=2)this.set(arguments[c],arguments[c+1])}else a&&this.ob(a)};fc2[fc].q=0;fc2[fc].L=0;fc2[fc].S=function(){return this.q};fc2[fc].F=function(){this.M();for(var a=[],b=0;b<this.e[fct];b++){var c=this.e[b];a[fcs](this.i[c])}return a};fc2[fc].z=function(){this.M();return this.e.concat()};fc2[fc].O=function(a){return fc5b(this.i,a)};
fc2[fc].clear=function(){this.i={};fcea(this.e,0);this.L=this.q=0};fc2[fc].remove=function(a){if(fc5b(this.i,a)){delete this.i[a];this.q--;this.L++;this.e[fct]>2*this.q&&this.M();return fcb}return fcd};fc2[fc].M=function(){if(this.q!=this.e[fct]){for(var a=0,b=0;a<this.e[fct];){var c=this.e[a];if(fc5b(this.i,c))this.e[b++]=c;a++}fcea(this.e,b)}if(this.q!=this.e[fct]){var d={};for(b=a=0;a<this.e[fct];){c=this.e[a];if(!fc5b(d,c)){this.e[b++]=c;d[c]=1}a++}fcea(this.e,b)}};
fc2[fc].get=function(a,b){if(fc5b(this.i,a))return this.i[a];return b};fc2[fc].set=function(a,b){if(!fc5b(this.i,a)){this.q++;this.e[fcs](a);this.L++}this.i[a]=b};fc2[fc].ob=function(a){var b;if(a instanceof fc2){b=a.z();a=a.F()}else{b=fcJb(a);a=fcIb(a)}for(var c=0;c<b[fct];c++)this.set(b[c],a[c])};fc2[fc].clone=function(){return new fc2(this)};
fc2[fc].__iterator__=function(a){this.M();var b=0,c=this.e,d=this.i,e=this.L,f=this,i=new fc4b;i.next=function(){for(;;){if(e!=f.L)fca(fcf("The map has changed since the iterator was created"));if(b>=c[fct])fca(fc3b);var j=c[b++];return a?j:d[j]}};return i};var fc5b=function(a,b){return fcca[fc].hasOwnProperty[fcH](a,b)};var fc6b=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};fc6b[fc].clone=function(){return new fc6b(this.top,this[fcT],this[fcra],this[fcG])};fcda(fc6b[fc],function(){return"("+this.top+"t, "+this[fcT]+"r, "+this[fcra]+"b, "+this[fcG]+"l)"});fc6b[fc].contains=function(a){return fc7b(this,a)};fc6b[fc].expand=function(a,b,c,d){if(fcJa(a)){this.top-=a.top;this.right+=a[fcT];this.bottom+=a[fcra];this.left-=a[fcG]}else{this.top-=a;this.right+=b;this.bottom+=c;this.left-=d}return this};
var fc7b=function(a,b){if(!a||!b)return fcd;if(b instanceof fc6b)return b[fcG]>=a[fcG]&&b[fcT]<=a[fcT]&&b.top>=a.top&&b[fcra]<=a[fcra];return b.x>=a[fcG]&&b.x<=a[fcT]&&b.y>=a.top&&b.y<=a[fcra]};var fc8b=function(a,b,c,d){this.left=a;this.top=b;fco(this,c);fcq(this,d)};fc8b[fc].clone=function(){return new fc8b(this[fcG],this.top,this[fcu],this[fcQ])};fcda(fc8b[fc],function(){return"("+this[fcG]+", "+this.top+" - "+this[fcu]+"w x "+this[fcQ]+"h)"});fc8b[fc].contains=function(a){return a instanceof fc8b?this[fcG]<=a[fcG]&&this[fcG]+this[fcu]>=a[fcG]+a[fcu]&&this.top<=a.top&&this.top+this[fcQ]>=a.top+a[fcQ]:a.x>=this[fcG]&&a.x<=this[fcG]+this[fcu]&&a.y>=this.top&&a.y<=this.top+this[fcQ]};var fc$b=function(a,b,c){fcIa(b)?fc9b(a,c,b):fcHb(b,fcNa(fc9b,a))},fc9b=function(a,b,c){a[fcF][fcac(c)]=b},fcbc=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a[fcy];if(c.defaultView&&c.defaultView.getComputedStyle)if(c=c.defaultView.getComputedStyle(a,fcc))return c[b]||c.getPropertyValue(b);return""},fcec=function(a,b,c){if(b instanceof fc0){c=b[fcQ];b=b[fcu]}else{if(c==fcg)fca(fcf("missing height argument"));c=c}fccc(a,b);fcdc(a,c)},fcfc=function(a,b){if(typeof a=="number")a=(b?fcn[fcv](a):
a)+"px";return a},fcdc=function(a,b){fcq(a[fcF],fcfc(b,fcb))},fccc=function(a,b){fco(a[fcF],fcfc(b,fcb))},fcgc=function(a){var b=fcib&&!fctb("10");if((fcbc(a,"display")||(a.currentStyle?a.currentStyle[fcAa]:fcc)||a[fcF][fcAa])!="none")return b?new fc0(a[fcla]||a.clientWidth,a[fcBa]||a.clientHeight):new fc0(a[fcla],a[fcBa]);var c=a[fcF],d=c[fcAa],e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";if(b){b=a[fcla]||a.clientWidth;a=a[fcBa]||a.clientHeight}else{b=
a[fcla];a=a[fcBa]}c.display=d;c.position=f;c.visibility=e;return new fc0(b,a)},fchc={},fcac=function(a){return fchc[a]||(fchc[a]=fcj(a)[fcx](/\-([a-z])/g,function(b,c){return c.toUpperCase()}))},fcic=function(a,b){a[fcF].display=b?"":"none"};var fcjc={},fckc={};var fclc=function(a,b,c,d){b=b||"800";c=c||"550";d=d||"friendconnect";a=fck.open(a,d,"menubar=no,toolbar=no,dialog=yes,location=yes,alwaysRaised=yes,width="+b+",height="+c+",resizable=yes,scrollbars=1,status=1");fck.focus&&a&&a.focus()},fcmc=function(a,b){var c=fce[fcM][fcD]().communityId;fce.rpc[fcH](fcc,"signin",fcc,c,a,b)};fcW("goog.peoplesense.util.openPopup",fclc);fcW("goog.peoplesense.util.finishSignIn",fcmc);var fcpc=function(a,b){var c=fcnc()+"/friendconnect/invite/friends",d=fci(shindig[fcwa][fcya]());fcoc(c,d,a,b)},fcoc=function(a,b,c,d){a+="?st="+b;if(c)a+="&customMessage="+fci(c);if(d)a+="&customInviteUrl="+fci(d);b=760;if(fcY)b+=25;fclc(a,fcj(b),"515","friendconnect_invite")};fcW("goog.peoplesense.util.invite",fcpc);fcW("goog.peoplesense.util.inviteFriends",fcoc);var fcqc=function(a){this.url=a};fcqc[fc].l=function(a,b){if(this.url[fcE]("?"+a+"=")>=0||this.url[fcE]("&"+a+"=")>=0)fca(fcf("duplicate: "+a));if(b===fcc||b===fcg)return this;var c=this.url[fcE]("?")>=0?"&":"?";this.url+=c+a+"="+fci(b);return this};fcda(fcqc[fc],function(){return this.url});var fcnc=function(){return fck.friendconnect_serverBase},fcrc=function(a,b,c,d,e,f,i){b=b||"800";c=c||"550";d=d||"friendconnect";f=f||fcd;fce.rpc[fcH](fcc,"openLightboxIframe",i,a,shindig[fcwa][fcya](),b,c,d,e,fcc,fcc,fcc,f)},fcsc=function(a,b){var c=fce[fcM][fcD]().psinvite||"",d=new fcqc(fcnc()+"/friendconnect/signin/home");d.l("st",fck.shindig[fcwa][fcya]());d.l("psinvite",c);d.l("iframeId",a);d.l("loginProvider",b);d.l("subscribeOnSignin","1");fclc(d[fcga]());return fcd},fctc=function(){var a=
fce[fcM][fcD]().communityId;fce.rpc[fcH](fcc,"signout",fcc,a)},fcvc=function(a,b){var c=fcnc()+"/friendconnect/settings/edit?st="+fci(shindig[fcwa][fcya]())+(a?"&iframeId="+fci(a):"");if(b)c=c+"&"+b;fcuc(c)},fcwc=function(a){a=fcnc()+"/friendconnect/settings/siteProfile?st="+fci(a);fcuc(a)},fcuc=function(a){var b=800,c=510;if(fcY)b+=25;fclc(a,fcj(b),fcj(c))},fcxc=function(a,b,c,d){d=d||2;var e=fcc;if(b=="text"){e=fc1("div",{"class":"gfc-button-text"},fc1("div",{"class":"gfc-icon"},fc1("a",{href:"javascript:void(0);"},
c)));a[fcr](e)}else if(b=="long"||b=="standard"){e=d==1?fc1("div",{"class":"gfc-inline-block gfc-primaryactionbutton gfc-button-base"},fc1("div",{"class":"gfc-inline-block gfc-button-base-outer-box"},fc1("div",{"class":"gfc-inline-block gfc-button-base-inner-box"},fc1("div",{"class":"gfc-button-base-pos"},fc1("div",{"class":"gfc-button-base-top-shadow",innerHTML:"&nbsp;"}),fc1("div",{"class":"gfc-button-base-content"},fc1("div",{"class":"gfc-icon"},c)))))):fc1("table",{"class":"gfc-button-base-v2 gfc-button",
cellpadding:"0",cellspacing:"0"},fc1("tbody",{"class":""},fc1("tr",{"class":""},fc1("td",{"class":"gfc-button-base-v2 gfc-button-1"}),fc1("td",{"class":"gfc-button-base-v2 gfc-button-2"},c),fc1("td",{"class":"gfc-button-base-v2 gfc-button-3"}))));a[fcr](e);if(b=="standard"){b=fc1("div",{"class":"gfc-footer-msg"},"with Google Friend Connect");d==1&&a[fcr](fc1("br"));a[fcr](b)}}return e},fcyc=function(a,b){if(!a)fca("google.friendconnect.renderSignInButton: missing options");var c=a[fcF]||"standard",
d=a.text,e=a.version;if(c=="standard")d=a.text||"Sign in";else if(c=="text"||c=="long")d=a.text||"Sign in with Friend Connect";var f=a.element;if(!f){f=a.id;if(!f)fca("google.friendconnect.renderSignInButton: options[id] and options[element] == null");f=fcRb(f);if(!f)fca("google.friendconnect.renderSignInButton: element "+a.id+" not found")}fcp(f,"");c=fcxc(f,c,d,e);fck[fcqa]?c[fcqa]("click",b,fcd):c.attachEvent("onclick",b)},fczc=function(a,b){b=b||fcV(fcsc,fcc,fcc,fcc,fcc);fcyc(a,b)},fcAc=function(a,
b){fce.rpc[fcH](fcc,"putReloadViewParam",fcc,a,b);var c=fce.views.getParams();c[a]=b},fcBc=function(a,b){var c=new fcqc("/friendconnect/gadgetshare/friends");c.l("customMessage",a);c.l("customInviteUrl",b);c.l("container","glb");var d=310;if(fcY)d+=25;fcrc(c[fcga](),fcj(d),"370")};fcW("goog.peoplesense.util.getBaseUrl",fcnc);fcW("goog.peoplesense.util.finishSignIn",fcmc);fcW("goog.peoplesense.util.signout",fctc);fcW("goog.peoplesense.util.signin",fcsc);fcW("goog.peoplesense.util.editSettings",fcvc);
fcW("goog.peoplesense.util.editSSProfile",fcwc);fcW("goog.peoplesense.util.setStickyViewParamToken",fcAc);fcW("google.friendconnect.renderSignInButton",fczc);fcW("goog.peoplesense.util.share",fcBc);fcW("goog.peoplesense.util.userAgent.IE",fcY);var fcCc={},fcDc={},fc3=function(a){this.h=new fc2;this.snippetId=a.id;this.site=a.site;a=a["view-params"];var b=a.skin;this.gc=(b?b.POSITION:"top")||"top";this.Ic={allowAnonymousPost:a.allowAnonymousPost||fcd,scope:a.scope||"SITE",docId:a.docId||"",features:a.features||"video,comment",startMaximized:"true",disableMinMax:"true",skin:b};this.absoluteBottom=fcY&&!fctb("7");this.fixedIeSizes=fcY;fck[fcqa]?fck[fcqa]("resize",fcV(this.eb,this),fcd):fck.attachEvent("onresize",fcV(this.eb,this));this.tb()};
fc3[fc].tb=function(){if(!this.site)fca(fcf("Must supply site ID."));if(!this.snippetId)fca(fcf("Must supply a snippet ID."))};fc3[fc].b=10;fc3[fc].Ea=1;fc3[fc].p="fc-friendbar-";fc3[fc].t=fc3[fc].p+"outer";fc3[fc].hb=fc3[fc].t+"-shadow";fc3[fc].render=function(){fcl.write(this.Ab());var a=fcQb(this.snippetId);fcp(a,this.R())};fc3[fc].Bb=function(){var a=fcQb(this.t);return a=fcgc(a)[fcu]};fc3[fc].eb=function(){for(var a=this.h.z(),b=0;b<a[fct];b++)this.sc(a[b]);goog&&fcjc&&fckc&&fcEc&&fcFc("resize")};
fc3[fc].n=function(){return this.gc};fc3[fc].d=function(a){return this.p+"shadow-"+a};fc3[fc].ma=function(a){return this.p+"menus-"+a};fc3[fc].U=function(a){return this.p+a+"Target"};fc3[fc].ja=function(a){return this.p+a+"Drawer"};fc3[fc].Ua=function(){return this.U("")};fc3[fc].Va=function(){return this.p+"wallpaper"};fc3[fc].Qa=function(){return this.ja("")};
fc3[fc].Ab=function(){var a=fck.friendconnect_imageUrl+"/",b=a+"shadow_tc.png",c=a+"shadow_bc.png",d=a+"shadow_bl.png",e=a+"shadow_tl.png",f=a+"shadow_tr.png",i=a+"shadow_br.png";a=a+"shadow_cr.png";var j=function(m,n){return fcY?'filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+m+'", sizingMethod="scale");':"background-image: url("+m+");background-repeat: "+n+"; "},k="position:absolute; top:";if(this.n()!="top"){k="position:fixed; bottom:";if(this.absoluteBottom)k="position:absolute; bottom:"}var l=
c;if(this.n()!="top")l=b;var h=0,g=[];g[h++]='<style type="text/css">';if(this.n()!="top"&&this.absoluteBottom)g[h++]="html, body {height: 100%; overflow: auto; };";g[h++]="#"+this.t+" {";g[h++]="background:#E0ECFF;";g[h++]="left:0;";g[h++]="height: "+(fcY?"35px;":"36px;");if(this.n()!="top"&&this.absoluteBottom)g[h++]="margin-right: 20px;";g[h++]="padding:0;";g[h++]=k+" 0;";g[h++]="width:100%;";g[h++]="z-index:5000;";g[h++]="}";g[h++]="#"+this.hb+" {";g[h++]=j(l,"repeat-x");g[h++]="left:0;";g[h++]=
"height:"+this.b+"px;";if(this.n()!="top"&&this.absoluteBottom)g[h++]="margin-right: 20px;";g[h++]="padding:0;";g[h++]=k+(fcY?"35px;":"36px;");g[h++]="width:100%;";g[h++]="z-index:4998;";g[h++]="}";g[h++]="."+this.Qa()+" {";g[h++]="display: block;";g[h++]="padding:0;";g[h++]=k+(fcY?"34px;":"35px;");g[h++]="z-index:4999;";g[h++]="}";g[h++]="."+this.Va()+" {";g[h++]="background: white;";g[h++]="height: 100%;";g[h++]="margin-right: "+this.b+"px;";g[h++]="}";g[h++]="."+this.Ua()+" {";g[h++]="border: "+
this.Ea+"px solid #ccc;";g[h++]="height: 100%;";g[h++]="left: 0;";g[h++]="background-image: url("+fck.friendconnect_imageUrl+"/loading.gif);";g[h++]="background-position: center;";g[h++]="background-repeat: no-repeat;";g[h++]="}";g[h++]="."+this.d("cr")+" {";g[h++]=j(a,"repeat-y");g[h++]="height: 100%;";g[h++]="position:absolute;";g[h++]="right: 0;";g[h++]="top: 0;";g[h++]="width:"+this.b+"px;";g[h++]="}";g[h++]="."+this.d("bl")+" {";g[h++]=j(d,"no-repeat");g[h++]="height: "+this.b+"px;";g[h++]="position:absolute;";
g[h++]="width:"+this.b+"px;";g[h++]="}";g[h++]="."+this.d("tl")+" {";g[h++]=j(e,"no-repeat");g[h++]="height: "+this.b+"px;";g[h++]="position:absolute;";g[h++]="left:0px;";g[h++]="width:"+this.b+"px;";g[h++]="}";g[h++]="."+this.d("bc")+" {";g[h++]=j(c,"repeat-x");g[h++]="height: "+this.b+"px;";g[h++]="left: "+this.b+"px;";g[h++]="position:absolute;";g[h++]="right: "+this.b+"px;";g[h++]="}";g[h++]="."+this.d("tc")+" {";g[h++]=j(b,"repeat-x");g[h++]="height: "+this.b+"px;";g[h++]="left: "+this.b+"px;";
g[h++]="margin-left: "+this.b+"px;";g[h++]="margin-right: "+this.b+"px;";g[h++]="right: "+this.b+"px;";g[h++]="}";g[h++]="."+this.d("br")+" {";g[h++]=j(i,"no-repeat");g[h++]="height: "+this.b+"px;";g[h++]="position:absolute;";g[h++]="right: 0;";g[h++]="width: "+this.b+"px;";g[h++]="}";g[h++]="."+this.d("tr")+" {";g[h++]=j(f,"no-repeat");g[h++]="height: "+this.b+"px;";g[h++]="position:absolute;";g[h++]="right: 0;";g[h++]="top: 0;";g[h++]="width: "+this.b+"px;";g[h++]="}";g[h++]="</style>";return g[fcS]("")};
fc3[fc].R=function(){var a=['<div id="'+this.t+'"></div>','<div id="'+this.hb+'"></div>','<div id="'+this.ma(this.h.S())+'"></div>'];return a[fcS]("")};fc3[fc].vb=function(a,b,c,d){if(!this.h.O(a)){b=new fc4(this,a,b,c,d);c=this.h.S();d=fcQb(this.ma(c));fcp(d,b.R()+'<div id="'+this.ma(c+1)+'"></div>');this.h.set(a,b)}};fc3[fc].qa=function(a){(a=this.h.get(a))&&a.drawer&&fcic(a.drawer,fcd)};fc3[fc].ic=function(a){if(a=this.h.get(a))a.rendered=fcd};
fc3[fc].refresh=function(){for(var a=this.h.z(),b=0;b<a[fct];b++){var c=a[b];this.qa(c);this.ic(c)}};fc3[fc].cc=function(a){for(var b=this.h.F(),c=0;c<b[fct];c++){var d=b[c];if(d.id==a){d.Fc();break}}};fc3[fc].bc=function(a){for(var b=this.h.F(),c=0;c<b[fct];c++){var d=b[c];if(d.id==a){d.Zb();break}}};fc3[fc].sc=function(a){if((a=this.h.get(a))&&a.drawer&&a.sa()){a.ha();a.Ma();a.Da()}};
fc3[fc].Ec=function(a,b){var c=this.h.get(a);if(c){if(!c.drawer){c.drawer=fcQb(this.ja(c[fcO]));c.target=fcQb(this.U(c[fcO]));c.sha_bc=fcSb(fcl,"div",this.n()=="top"?this.d("bc"):this.d("tc"),c.drawer)[0];c.sha_cr=fcSb(fcl,"div",this.d("cr"),c.drawer)[0]}for(var d=this.h.z(),e=0;e<d[fct];e++){var f=d[e];a!==f&&this.qa(f)}c.ha(b);fcic(c.drawer,fcb);fck.setTimeout(function(){c.Da();c.Ma();c.render()},0)}};
var fc4=function(a,b,c,d,e){this.id=-1;this.bar=a;this.name=b;this.constraints=d;this.skin=e||{};fcq(this,this.skin.HEIGHT||"0");this.url=fck.friendconnect_serverBase+c;this.sha_bc=this.target=this.drawer=fcc;this.loaded=this.rendered=fcd;this.ha()};
fc4[fc].ha=function(a){fcLb(this.constraints,a||{});fcLb(this.skin,this.constraints);if(this.bar.fixedIeSizes&&this.constraints[fcG]&&this.constraints[fcT]){a=this.bar.Bb();var b=this.constraints[fcG],c=this.constraints[fcT];a=a-(b+c);if(a%2){a-=1;this.skin.right+=1}fco(this.skin,a);delete this.skin[fcG]}};
fc4[fc].Da=function(){if(this.drawer){if(this.skin[fcu]){var a=this.bar.Ea,b=this.bar.b,c=fcY?2:0;fcec(this.target,this.skin[fcu],"");fcec(this.sha_bc,this.skin[fcu]-b+2*a-c,"");this.skin.rightShadow?fcec(this.drawer,this.skin[fcu]+b+2*a-c,""):fcec(this.drawer,this.skin[fcu]+2*a-c,"")}if(this.skin[fcT])this.drawer[fcF].right=this.skin[fcT]+0+"px"}};
fc4[fc].Ma=function(){if(fcY&&this.drawer){var a=fcgc(this.target),b=a[fcu]-this.bar.b;a=a[fcQ];if(b<0)b=0;this.sha_bc&&this.sha_bc[fcF]&&fcec(this.sha_bc,b,"");this.sha_cr&&this.sha_cr[fcF]&&fcec(this.sha_cr,"",a)}};
fc4[fc].R=function(){var a="display:none;",b="position: relative; ",c="",d="",e="",f="",i=!!this.skin.rightShadow;if(!i){c+="display: none; ";e+="display: none; ";d+="right: 0px; ";f+="margin-right: 0px; "}for(var j in this.skin){var k=Number(this.skin[j]);if(i&&fcZa(j,"width")==0)k+=this.bar.b;if(fcZa(j,"height")==0)b+=j+": "+k+"px; ";if(j!="rightShadow"){if(fcZa(j,"height")==0)k+=this.bar.b;if(fcZa(j,"width")==0)k+=2;a+=j+": "+k+"px; "}if(fcY&&fcZa(j,"width")==0){k-=i?2*this.bar.b:this.bar.b;d+=
j+": "+k+"px; "}}if(fcY&&(this[fcQ]|0)>0){i=(this[fcQ]|0)+2;c+="height: "+i+"px; "}i=0;j=[];j[i++]='<div id="'+this.bar.ja(this[fcO])+'"class="'+this.bar.Qa()+'"style="'+a+'"> ';if(this.bar.n()=="bottom")j[i++]='<div class="'+this.bar.d("tl")+'"></div> <div class="'+this.bar.d("tc")+'"style="'+d+'"></div> <div class="'+this.bar.d("tr")+'"style="'+e+'"></div> ';j[i++]='<div style="'+b+'"> <div class="'+this.bar.Va()+'"style="'+f+'"><div id="'+this.bar.U(this[fcO])+'"class="'+this.bar.Ua()+'"></div> <div class="'+
this.bar.d("cr")+'"style="'+c+'"></div> </div> </div> ';if(this.bar.n()=="top")j[i++]='<div class="'+this.bar.d("bl")+'"></div> <div class="'+this.bar.d("bc")+'"style="'+d+'"></div> <div class="'+this.bar.d("br")+'"style="'+e+'"></div> ';j[i++]="</div> ";return j[fcS]("")};fc4[fc].Fc=function(){this.rendered=this.sa()};fc4[fc].Zb=function(){this.loaded=this.sa()};fc4[fc].sa=function(){return!!this.drawer&&this.drawer[fcF][fcAa]!="none"};
fc4[fc].render=function(){if(this.rendered==fcd){var a={};a.url=this.url;a.id=this.bar.U(this[fcO]);a.site=this.bar.site;a["view-params"]=fcKa(this.bar.Ic);if(this[fcO]=="profile")a["view-params"].profileId="VIEWER";this.skin&&fcLb(a["view-params"].skin,this.skin);a["view-params"].menuName=this[fcO];a["view-params"].opaque="true";a["view-params"].menuPosition=this.bar.gc;fcq(a,"1px");if(fcCc&&fcDc&&fc5)this.id=fc5.render(a)}};fcW("google.friendconnect.FriendBar",fc3);var fcGc="0123456789abcdefghijklmnopqrstuv",fcIc=function(a){a=new fcHc(a);if(a.ua()%5)fca(fcf());for(var b=[],c=0;a.ua()>0;c++)b[c]=fcGc[fcB](a.ec(5));return b[fcS]("")},fcHc=function(a){this.G=this.r=0;this.ga=a};fcHc[fc].ua=function(){return 8*(this.ga[fct]-this.G)-this.r};
fcHc[fc].ec=function(a){var b=0;if(a>this.ua())fca(fcf());if(this.r>0){b=255>>this.r&this.ga[this.G];var c=8-this.r,d=fcn.min(a%8,c);c=c-d;b=b>>c;a-=d;this.r+=d;if(this.r==8){this.r=0;this.G++}}for(;a>=8;){b<<=8;b|=this.ga[this.G];this.G++;a-=8}if(a>0){b<<=a;b|=this.ga[this.G]>>8-a;this.r=a}return b};var fcJc=function(){};fcJc[fc].H=function(){};fcJc[fc].K=function(){};var fcKc=(new Date).getTime(),fc6=function(){},fcLc=function(){},fcMc=function(){},fcNc=function(){};fcX(fcNc,fcMc);var fcOc=function(a){if(a)for(var b in a)if(a.hasOwnProperty(b))this[b]=a[b];if(this.viewParams)for(var c in this.viewParams)if(/^FC_RELOAD_.*$/[fcja](c))this.viewParams[c]=fcc};fcOc[fc].render=function(a){var b=this;if(a){b.Gc();this.Db(function(c){fc$b(a,"visibility","hidden");fcp(a,c);b.refresh(a,c);c=function(d){fc$b(d,"visibility","visible")};c=fcNa(c,a);fcba(c,500);b.chrome=a})}};
fcOc[fc].Db=function(a){return this.Jb(a)};var fc7=function(a){fcOc[fcH](this,a);this.Y="../../";this.rpcToken=fcj(fcn[fcv](2147483647*fcn[fcoa]()))};fcX(fc7,fcOc);fc7[fc].mb="gfc_iframe_";fc7[fc].nb="friendconnect";fc7[fc].Na="";fc7[fc].tc="rpc_relay.html";fc7[fc].aa=function(a){this.Y=a};fc7[fc].Gc=function(){return this.Na=fcj(fcn[fcv](2147483647*fcn[fcoa]()))};fc7[fc].ka=function(){return this.mb+this.Na+"_"+this.id};
fc7[fc].refresh=function(a,b){var c=fc5.Lc,d,e={},f=fc5.Oa(this.communityId),i=f[fcz]("~"),j=fc5.wb;if(j&&i[fct]>1){d=i[2];i=i[1];var k=[this.specUrl,this.communityId,i,j][fcS](":");e.sig=fc5.hash(d,k);e.userId=i;e.dateStamp=j}e.container=this.nb;e.mid=this.id;e.nocache=fc5.fc;e.view=this.ca;e.parent=fc5.W;if(this.debug)e.debug="1";if(this.specUrl)e.url=this.specUrl;if(this.communityId){j=fce[fcM][fcD]().profileId;e.communityId=this.communityId;if(d=fce[fcM][fcD]().psinvite)e.psinvite=d;if(j)e.profileId=
j}e.caller=fcPc();e.rpctoken=this.rpcToken;j=fcd;d="";i=/Version\/3\..*Safari/;if((i=fckb&&fcfb()[fcI](i))||!fc5.V[this.specUrl]&&this.viewParams){e["view-params"]=fce[fcpa][fcia](this.viewParams);d="?viewParams="+fci(e["view-params"]);j=fcb}if(this.prefs)e.prefs=fce[fcpa][fcia](this.prefs);if(this.viewParams&&this.sendViewParamsToServer)e["view-params"]=fce[fcpa][fcia](this.viewParams);if(this.locale)e.locale=this.locale;if(this.secureToken)e.st=this.secureToken;i=fc5.Ta(this.specUrl);d=i+"ifr"+
d+(this.hashData?"&"+this.hashData:"");if(fc5.Kc!=1||j||f||this.secureToken){if(f&&!e.sig)e.fcauth=f}else e.sig||(c="get");f=this.ka();fcQc(f,d,c,e,a,b,this.rpcToken)};var fc8=function(){this.j={};this.W="http://"+fcl[fcC].host;this.ca="default";this.fc=1;this.Pc=0;this.Mc="US";this.Nc="en";this.Oc=2147483647};fcX(fc8,fcLc);fc8[fc].v=fcOc;fc8[fc].B=new fcNc;fc8[fc].gb=function(a){this.fc=a};fc8[fc].La=function(a){this.Kc=a};fc8[fc].Sa=function(a){return"gadget_"+a};fc8[fc].w=function(a){return this.j[this.Sa(a)]};
fc8[fc].P=function(a){return new this.v(a)};fc8[fc].pb=function(a){a.id=this.Kb();this.j[this.Sa(a.id)]=a};fc8[fc].dc=0;fc8[fc].Kb=function(){return this.dc++};var fcSc=function(){fc8[fcH](this);this.B=new fcRc};fcX(fcSc,fc8);fcSc[fc].v=fc7;fcSc[fc].$=function(a){a[fcI](/^http[s]?:\/\//)||(a=fcl[fcC][fcsa][fcI](/^[^?#]+\//)[0]+a);this.W=a};fcSc[fc].J=function(a){var b=this.B.Ra(a);a.render(b)};var fcRc=function(){this.zb={}};fcX(fcRc,fcMc);
fcRc[fc].qb=function(a,b){this.zb[a]=b;var c=fcl[fcA](b).className;if(!c&&c[fct]==0)fcfa(fcl[fcA](b),"gadgets-gadget-container")};fcRc[fc].Ra=function(a){return(a=this.zb[a.id])?fcl[fcA](a):fcc};var fc9=function(a){fc7[fcH](this,a);a=a||{};this.ca=a.view||"profile"};fcX(fc9,fc7);fc9[fc].sb="canvas.html";fc9[fc].xb="/friendconnect/embed/";
var fcPc=function(){var a=fce[fcM][fcD]().canvas=="1"||fce[fcM][fcD]().embed=="1",b=fcc;if(a)b=fce[fcM][fcD]().caller;if(!b){a=fcl[fcC];b=a.search[fcx](/([&?]?)psinvite=[^&]*(&?)/,function(c,d,e){return e?d:""});b=a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")+a.pathname+b}return b};fc9[fc].Cc=function(a){this.ca=a};fc9[fc].pa=function(){return this.ca};fc9[fc].getBodyId=function(){return this.ka()+"_body"};
fc9[fc].Jb=function(a){var b=this.specUrl;if(b===fcg)b="";b=(fc5.Ta(b)||this.Y)+this.tc;var c=this.ka();fce.rpc.setRelayUrl(c,b);b='<div id="'+this.getBodyId()+'"><iframe id="'+c+'" name="'+c;b+=this[fcQ]==0?'" style="width:1px; height:1px;':'" style="width:100%;';if(this.viewParams.opaque)b+="background-color:white;";b+='"';b+=' frameborder="0" scrolling="no"';this.viewParams.opaque||(b+=' allowtransparency="true"');b+=this[fcQ]?' height="'+this[fcQ]+'"':"";b+=this[fcu]?' width="'+this[fcu]+'"':
"";b+="></iframe>";if(this.showEmbedThis)b+='<a href="javascript:void(0);" onclick="google.friendconnect.container.showEmbedDialog(\''+this.divId+"'); return false;\">Embed this</a>";b+="</div>";a(b)};
fc9[fc].Cb=function(){var a=fcPc();a="canvas=1&caller="+fci(a);var b=fce[fcM][fcD]().psinvite;if(b)a+="&psinvite="+fci(b);a+="&site="+fci(this.communityId);b=fcKa(this.viewParams);if(b.skin!=fcc)for(var c=["BG_IMAGE","BG_COLOR","FONT_COLOR","BG_POSITION","BG_REPEAT","ANCHOR_COLOR","FONT_FACE","BORDER_COLOR","CONTENT_BG_COLOR","CONTENT_HEADLINE_COLOR","CONTENT_LINK_COLOR","CONTENT_SECONDARY_TEXT_COLOR","CONTENT_SECONDARY_LINK_COLOR","CONTENT_TEXT_COLOR","ENDCAP_BG_COLOR","ENDCAP_LINK_COLOR","ENDCAP_TEXT_COLOR",
"CONTENT_VISITED_LINK_COLOR","ALTERNATE_BG_COLOR"],d=0;d<c[fct];d++)delete b.skin[c[d]];b=fci(fce[fcpa][fcia](b));b=b[fcx]("\\","%5C");return fc5.W+this.sb+"?url="+fci(this.specUrl)+(a?"&"+a:"")+"&view-params="+b};fc9[fc].D=function(a){a=a||fch+this.xb+this.communityId;return this.Eb(a,"embed=1")};fc9[fc].C=function(a){return'<iframe src="'+this.D(a)+'" style="height:500px" scrolling="no" allowtransparency="true" border="0" frameborder="0" ></iframe>'};
fc9[fc].Eb=function(a,b){var c=fci(fce[fcpa][fcia](this.viewParams));c=c[fcx]("\\","%5C");return a+"?url="+fci(this.specUrl)+(b?"&"+b:"")+"&view-params="+c};fc9[fc].Nb=function(){var a=fce[fcM][fcD]().canvas=="1"||fce[fcM][fcD]().embed=="1",b=fcc;if(a)(b=fce[fcM][fcD]().caller)||(b="javascript:history.go(-1)");return b};fc9[fc].Ob=function(a){var b=fcc;if(a=="canvas")b=this.Cb();else if(a=="profile")b=this.Nb();return b};
var fc$=function(){fcSc[fcH](this);fce.rpc[fcR]("signin",fc6[fc].signin);fce.rpc[fcR]("signout",fc6[fc].signout);fce.rpc[fcR]("resize_iframe",fc6[fc].fb);fce.rpc[fcR]("set_title",fc6[fc].setTitle);fce.rpc[fcR]("requestNavigateTo",fc6[fc].db);fce.rpc[fcR]("api_loaded",fc6[fc].Ca);fce.rpc[fcR]("createFriendBarMenu",fc6[fc].Ha);fce.rpc[fcR]("showFriendBarMenu",fc6[fc].ib);fce.rpc[fcR]("hideFriendBarMenu",fc6[fc].Wa);fce.rpc[fcR]("putReloadViewParam",fc6[fc].$a);fce.rpc[fcR]("getViewParams",fc6[fc].Ka);
fce.rpc[fcR]("getContainerBaseTime",fc6[fc].Ja);fce.rpc[fcR]("openLightboxIframe",fc6[fc].Za);fce.rpc[fcR]("showMemberProfile",fc6[fc].kb);fce.rpc[fcR]("closeLightboxIframe",fcV(this.u,this));fce.rpc[fcR]("setLightboxIframeTitle",fcV(this.yc,this));fce.rpc[fcR]("refreshAndCloseIframeLightbox",fcV(this.hc,this));var a=fcTc;a[fcR]();a.lb(this,"load",this.Qb);a.lb(this,"start",this.Rb);this.Y="../../";this.$("");this.gb(0);this.La(1);this.ta=fcc;this.apiVersion="0.8";this.openSocialSecurityToken=fcc;
this.Z="";this.Ia={};this.Yb=fcc;this.Xb=fcd;this.wb=this.ac=this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=fcc;this.Lc="post"};fcX(fc$,fcSc);fc$[fc].wc=function(a){this.wb=a};fc$[fc].v=fc9;fc$[fc].V={};fc$[fc].Ac=function(a){this.ta=a};fc$[fc].Ta=function(a){var b=fc$[fc].V[a];if(!b)if(this.ta[fcE]("http://")!==0){a=this.ub(a);b=["http://",a,this.ta][fcS]("")}else b=this.ta;return b};
fc$[fc].ub=function(a){var b=new SHA1;a=fcQa(a);b.update(a);b=b.digest();return b=fcIc(b)};
var fcUc=function(a,b){var c=b?b:fck.top,d=c.frames;try{if(c.frameElement.id==a)return c}catch(e){}for(c=0;c<d[fct];++c){var f=fcUc(a,d[c]);if(f)return f}return fcc},fcQc=function(a,b,c,d,e,f,i){var j="gfc_load_"+a;b='<html><head><style type="text/css">body {background:transparent;}</style>'+(fcY?'<script type="text/javascript">window.goback=function(){history.go(-1);};setTimeout("goback();", 0);<\/script>':"")+"</head><body><form onsubmit='window.goback=function(){};return false;' style='margin:0;padding:0;' id='"+
j+"' method='"+c+"' ' action='"+fce[fcM].escapeString(b)+"'>";for(var k in d)b+="<input type='hidden' name='"+k+"' value='' >";b+="</form></body></html>";c=fcUc(a);var l;try{l=c[fcy]||c.contentWindow[fcy]}catch(h){if(e&&f){fcp(e,"");fcp(e,f);c=fcUc(a);l=c[fcy]||c.contentWindow[fcy]}}i&&fce.rpc.setAuthToken(a,i);l.open();l.write(b);l.close();a=l[fcA](j);for(k in d)a[k].value=d[k];fcY&&a.onsubmit();a.submit()};
fc$[fc].yb=function(){var a=fce[fcM][fcD]().fcsite,b=fce[fcM][fcD]().fcprofile;a&&b&&fc5.K(b,a)};fc$[fc].xc=function(a,b){this.V[a]=b};fc$[fc].X=function(){var a=/Version\/3\..*Safari/;if(a=fckb&&fcfb()[fcI](a))fcl[fcC].reload();else{fc5.g!=fcc&&fc5.g.refresh();for(var b in fc5.j){a=fc5.j[b];this.J(a)}if(this.lastIframeLightboxOpenArguments!=fcc){b=this.lastIframeLightboxOpenArguments;this.u();this.H[fcN](this,b)}}};
fc$[fc].$=function(a){a[fcI](/^http[s]?:\/\//)||(a=a&&a[fct]>0&&a[fcta](0,1)=="/"?fcl[fcC][fcsa][fcI](/^http[s]?:\/\/[^\/]+\//)[0]+a[fcta](1):fcl[fcC][fcsa][fcI](/^[^?#]+\//)[0]+a);this.W=a};fc$[fc].ia=function(a){return"fcauth"+a};fc$[fc].oa=function(a){return"fcauth"+a+"-s"};fc$[fc].hash=function(a,b){var c=new SHA1,d=fcXa(a,fcb);c=new G_HMAC(c,d,64);d=fcQa(b);c=c.Ib(d);(new Date).getTime();return fcWa(c,fcb)};
fc$[fc].Oa=function(a){return a=fcvb.get(this.ia(a))||fcvb.get(this.oa(a))||this.Ia[a]||""};fc$[fc].aa=function(a){this.Y=a};fc$[fc].Bc=function(a){this.Z=a};fc$[fc].P=function(a){a=new this.v(a);a.aa(this.Y);return a};fc$[fc].pa=function(){return this.ca};fc$[fc].zc=function(a){this.ac=a};var fcVc=function(a){return(a=a[fcI](/_([0-9]+)$/))?fcaa(a[1],10):fcc};
fc$[fc].ba=function(a,b,c,d,e,f){if(!this.Jc){this.da(fck.friendconnect_serverBase+"/friendconnect/styles/container.css?d="+this.Z);this.Jc=fcb}var i=fcWc(d);if(this.Yb!=(i?"rtl":"ltr")){this.da(fck.friendconnect_serverBase+"/friendconnect/styles/lightbox"+(i?"-rtl":"")+".css?d="+this.Z);this.Yb=i?"rtl":"ltr"}if(!this.Xb){this.rb(fck.friendconnect_serverBase+"/friendconnect/script/lightbox.js?d="+this.Z);this.Xb=fcb}b=b||0;if(goog.ui&&goog.ui[fcma]){this.u();b=new goog.ui[fcma]("lightbox-dialog",
fcb);var j=this;goog.events.listen(b,goog.ui[fcma].EventType.AFTER_HIDE,function(){j.lastLightboxCallback&&j.lastLightboxCallback();j.Ga()});b.setDraggable(fcb);b.setDisposeOnHide(fcb);b.setBackgroundElementOpacity(0.5);b.setButtonSet(new goog.ui[fcma].ButtonSet);this.lastLightboxDialog=b;this.lastLightboxCallback=c||fcc;c=b.getDialogElement();e=e||702;fc$b(c,"width",fcj(e)+"px");f&&fc$b(c,"height",fcj(f)+"px");a(b);b.getDialogElement()[fcF].direction=i?"rtl":"ltr"}else if(b<5){b++;a=fcV(this.ba,
this,a,b,c,d,e,f);fcba(a,1E3)}else{this.Ga();fca(fcf("lightbox.js failed to load"))}};fc$[fc].u=function(a){var b=this.lastLightboxDialog,c=this.lastLightboxCallback;this.lastLightboxCallback=fcc;if(b!=fcc){this.lastLightboxDialog.dispatchEvent(goog.ui[fcma].EventType.AFTER_HIDE);b.dispose();c!=fcc&&c(a)}};fc$[fc].Ga=function(){this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=fcc};fc$[fc].yc=function(a){this.lastLightboxDialog&&this.lastLightboxDialog.setTitle(a)};
fc$[fc].hc=function(){this.u();this.X()};fc6[fc].db=function(a,b){var c=fcVc(this.f);c=fc5.w(c);var d=fcKa(c.originalParams);if(b){d["view-params"]=d["view-params"]||{};d["view-params"]=b}d.locale=c.locale;if(c.useLightBoxForCanvas){d.presentation=a;fc5.lastLightboxDialog!=fcc?fc5.u():fc5.jb(d)}else if((c=c.Ob(a))&&fcl[fcC][fcsa]!=c)if(fce[fcM][fcD]().embed=="1")try{fck.parent.location=c}catch(e){fck.top.location=c}else fcl[fcC].href=c};
fc$[fc].jb=function(a,b){a=a||{};var c=a.locale,d=fcWc(c),e=this;this.u();this.ba(function(f){var i=fc1("div",{},fc1("div",{id:"gadget-signin",style:"background-color:#ffffff;height:32px;"}),fc1("div",{id:"gadget-lb-canvas",style:"background-color:#ffffff;"}));f.getTitleTextElement()[fcr](fc1("div",{id:"gfc-canvas-title",style:"color:#000000;"}));f.getContentElement()[fcr](i);f.setVisible(fcb);i=fcKa(a);var j=fcVb(fck),k=fcn[fcv](j[fcQ]*0.7);j={};j.BORDER_COLOR="#cccccc";j.ENDCAP_BG_COLOR="#e0ecff";
j.ENDCAP_TEXT_COLOR="#333333";j.ENDCAP_LINK_COLOR="#0000cc";j.ALTERNATE_BG_COLOR="#ffffff";j.CONTENT_BG_COLOR="#ffffff";j.CONTENT_LINK_COLOR="#0000cc";j.CONTENT_TEXT_COLOR="#333333";j.CONTENT_SECONDARY_LINK_COLOR="#7777cc";j.CONTENT_SECONDARY_TEXT_COLOR="#666666";j.CONTENT_HEADLINE_COLOR="#333333";i.id="gadget-lb-canvas";fcq(i,fcn.min(498,k)+"px");i.maxHeight=k;if(i.keepMax){fcq(i,k);fc$b(f.getContentElement(),"height",k+35+"px")}i["view-params"]=i["view-params"]||{};i["view-params"].opaque=fcb;i["view-params"].skin=
i["view-params"].skin||{};fcOa(i["view-params"].skin,j);e.render(i);k={};k.id="gadget-signin";k.presentation="canvas";k.site=i.site;k.titleDivId="gfc-canvas-title";k["view-params"]={};k["view-params"].opaque=fcb;k.keepMax=i.keepMax;if(i.securityToken)k.securityToken=i.securityToken;i=fcKa(j);i.ALIGNMENT=d?"left":"right";e.bb(k,i);f.reposition()},fcg,b,c)};fc6[fc].ib=function(a,b){fc5.g!=fcc&&fc5.g.Ec(a,b)};fc6[fc].Wa=function(a){fc5.g!=fcc&&fc5.g.qa(a)};
fc6[fc].Za=function(a,b,c,d,e,f,i,j,k,l){var h=this.f;a=a+(a[fcE]("?")>=0?"&":"?")+"iframeId="+h;fc5.H(a,b,c,d,e,f,i,j,k,l,this.callback)};
fc$[fc].H=function(a,b,c,d,e,f,i,j,k,l,h){var g=fcVb(fck);d!=fcc||(d=fcn[fcv](g[fcQ]*0.7));c!=fcc||(c=fcn[fcv](g[fcu]*0.7));var m=[];for(g=0;g<arguments[fct]&&g<10;g++)m[fcs](arguments[g]);if(!a[0]=="/")fca(fcf("lightbox iframes must be relative to fc server"));var n=this,o=f?fcKa(f):{},s=fcj(fcn[fcv](2147483647*fcn[fcoa]())),p="gfc_lbox_iframe_"+s;fce.rpc.setAuthToken(p,s);if(!b)b=fc5.openSocialSecurityToken;var t=fc5.openSocialSiteId;fc5.ba(function(q){n.lastIframeLightboxOpenArguments=m;var v=
"st="+fci(b)+"&parent="+fci(fc5.W)+"&rpctoken="+fci(s);if(!j){o.iframeId=p;o.iurl=a;a=fch+"/friendconnect/lightbox"}var r=d-54;fcq(o,r);var u='<iframe id="'+p;u+='" width="100%" height="'+r+'" frameborder="0" scrolling="auto"></iframe>';q.setContent(u);if(e){q.setTitle(e);if(l){r=q.getTitleTextElement();fcPb(r,"lightbox-dialog-title-small-text")}}q.setVisible(fcb);k||(o.fcauth=fc5.Oa(t));a+=(a[fcE]("?")>=0?"&":"?")+v+"&communityId="+t;fcQc(p,a,"POST",o,fcc,fcc,fcc)},fcg,h,fcg,c,d)};
fc6[fc].Ka=function(){var a=fcVc(this.f);a=fc5.w(a);return a.viewParams};fc6[fc].Ja=function(){return fcKc};fc6[fc].$a=function(a,b){var c=fcVc(this.f);c=fc5.w(c);c.viewParams[a]=b};fc$[fc].Qb=function(a,b){fc5.g!=fcc&&fc5.g.bc(b)};fc$[fc].Rb=function(a,b){fc5.g!=fcc&&fc5.g.cc(b)};fc6[fc].Ha=function(a,b,c,d){fc5.g!=fcc&&fc5.g.vb(a,b,c,d)};fc$[fc].J=function(a){var b=this.B.Ra(a);a.render(b);this.B.postProcessGadget&&this.B.postProcessGadget(a)};
fc6[fc].signout=function(a){fc5.ab(fc5.ia(a));fc5.ab(fc5.oa(a));fc5.Ia={};fc5.X();return fcd};fc$[fc].ab=function(a){var b=fcl[fcC].pathname;b=b[fcz]("/");for(var c=0;c<b[fct];c++){for(var d=fcm(c+1),e=0;e<c+1;e++)d[e]=b[e];fcvb.remove(a,d[fcS]("/")+"/")}};
fc6[fc].fb=function(a){var b=fcl[fcA](this.f);if(b&&a>0)fcq(b[fcF],a+"px");if((b=fcl[fcA](this.f+"_body"))&&a>0)fcq(b[fcF],a+"px");if(b=fcVc(this.f)){var c=fc5.w(b);if(c){if((b=fcl[fcA](c.divId))&&a>0){if(c&&c[fcua]&&c[fcua]<a){a=c[fcua];b[fcF].overflowY="auto"}fcq(b[fcF],a+"px")}!c.keepMax&&c.pa()=="canvas"&&fc5.lastLightboxDialog&&fc5.lastLightboxDialog.reposition();fc$b(c.chrome,"visibility","visible")}}};
fc6[fc].setTitle=function(a){var b=fcVc(this.f);b=fc5.w(b);if(b=b.titleDivId)fcp(fcl[fcA](b),fce[fcM].escapeString(a))};fc6[fc].signin=function(a,b,c){fcvb.set(fc5.ia(a),b,31104E3,c);fcvb.set(fc5.oa(a),b,-1,c);fc5.Ia[a]=b;fc5.X()};var fcYc=function(a){fcyc(a,fcXc)};fc$[fc].nc=function(a,b){b&&this.m(b,a);var c={};c.url=fch+"/friendconnect/gadgets/members.xml";this.render(this.s(a,c))};
fc$[fc].pc=function(a,b){b&&this.m(b,a);var c={};c.url=fch+"/friendconnect/gadgets/review.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"review"};this.render(this.s(a,c))};fc$[fc].wa=function(a,b){b&&this.m(b,a);var c={};c.url=fch+"/friendconnect/gadgets/wall.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"comment"};this.render(this.s(a,c))};
fc$[fc].bb=function(a,b){b&&this.m(b,a);var c={};c.url=fch+"/friendconnect/gadgets/signin.xml";fcq(c,32);this.render(this.s(a,c))};fc$[fc].kc=function(a,b){b&&this.m(b,a);a.prefs=a.prefs||{};a.sendViewParamsToServer=fcb;a.prefs.hints=fck.google_hints;var c={};c.url=fch+"/friendconnect/gadgets/ads.xml";fcq(c,90);this.render(this.s(a,c))};
fc$[fc].za=function(a,b){if(a.id){b&&this.m(b,a);a["view-params"]=a["view-params"]||{};a["view-params"].opaque="true";this.g=new fc3(a);this.g.render();var c={};c.url=fch+"/friendconnect/gadgets/friendbar.xml";a.id=this.g.t;fcq(a,"1");this.render(this.s(a,c))}};fc$[fc].mc=fc$[fc].za;fc$[fc].ya=function(a,b){a=a||{};a.url=fch+"/friendconnect/gadgets/signin.xml";a.site=a.site||fce[fcM][fcD]().site;fcq(a,32);this.xa(a,b)};fc$[fc].lc=fc$[fc].ya;fc$[fc].rc=fc$[fc].wa;
fc$[fc].m=function(a,b){var c=b["view-params"];if(!c){c={};b["view-params"]=c}c.skin=a};fc$[fc].s=function(a,b){var c=this.Ya(b,a);if(b["view-params"]){var d=b["view-params"];if(a["view-params"])d=this.Ya(d,a["view-params"]);c["view-params"]=d}return c};fc$[fc].oc=function(a,b){b&&this.m(b,a);this.render(a)};fc$[fc].Ya=function(a,b){var c={},d;for(d in b)c[d]=b[d];for(d in a)if(typeof c[d]=="undefined")c[d]=a[d];return c};
fc$[fc].render=function(a){this.openSocialSiteId=a.site;a["view-params"]=a["view-params"]||{};var b=this.P({divId:a.id,specUrl:a.url,communityId:a.site,height:a[fcQ],locale:a.locale||this.ac,secureToken:a.securityToken,titleDivId:a.titleDivId,showEmbedThis:a.showEmbedThis,useLightBoxForCanvas:a.useLightBoxForCanvas||typeof a.useLightBoxForCanvas=="undefined"&&fck.friendconnect_lightbox,viewParams:a["view-params"],prefs:a.prefs,originalParams:a,debug:a.debug,maxHeight:a[fcua],sendViewParamsToServer:a.sendViewParamsToServer,
keepMax:a.keepMax});a.presentation&&b.Cc(a.presentation);this.pb(b);this.B.qb(b.id,a.id);fcba(function(){fc5.J(b)},0);return b.id};fc$[fc].qc=function(a,b){a=a||{};a.presentation="canvas";this.cb(a,b)};
fc$[fc].cb=function(a,b,c){a=a||{};a.url=fce[fcM][fcD]().url;a.site=fce[fcM][fcD]().site||a.site;var d=fce[fcM][fcD]()["view-params"];if(d)a["view-params"]=fce[fcpa].parse(decodeURIComponent(d));if(c){a["view-params"]=a["view-params"]||{};a["view-params"].useFixedHeight=fcb;fcq(a["view-params"],c);b=b||{};b.HEIGHT=fcj(c)}this.xa(a,b)};fc$[fc].xa=function(a,b){a=a||{};b&&this.m(b,a);if(fce[fcM][fcD]().canvas=="1")a.presentation="canvas";else if(fce[fcM][fcD]().embed=="1")a.presentation="embed";fc5.render(a)};
fc$[fc].Pb=function(){var a=fce[fcM][fcD]().caller;if(a&&fcl[fcC][fcsa]!=a&&a[fct]>8&&(a.substr(0,7)[fcDa]()=="http://"||a.substr(0,8)[fcDa]()=="https://"))fcl[fcC].href=a;else if(a=fce[fcM][fcD]().site)fcl[fcC].href=fch+"/friendconnect/directory/site?id="+a;else fck.history.go(-1)};fc$[fc].I="";fc$[fc].Lb=function(){return this.I};fc$[fc].uc=function(a){this.apiVersion=a};fc$[fc].da=function(a){var b=fcl[fcK]("link");b[fcL]("rel","stylesheet");b[fcL]("type","text/css");b[fcL]("href",a);fcl.getElementsByTagName("head")[0][fcr](b)};
fc$[fc].rb=function(a){var b=fcl[fcK]("script");b[fcL]("src",a);b[fcL]("type","text/javascript");fcl.getElementsByTagName("head")[0][fcr](b)};fc$[fc].Fa=function(a){if(fcl[fcna])a();else fck[fcqa]?fck[fcqa]("load",a,fcd):fck.attachEvent("onload",a)};
fc$[fc].ra=function(a){if(!a.site)fca("API not loaded, please pass in a 'site'");this.da(fck.friendconnect_serverBase+"/friendconnect/styles/container.css?d="+this.Z);this.openSocialSiteId=a.site;this.apiLoadedCallback=a.onload;this.Fa(fcV(this.Xa,this,a,"fc-opensocial-api"))};fc$[fc].$b=fc$[fc].ra;fc$[fc].Sb=function(a){var b={};b.site=this.openSocialSiteId;b["view-params"]={txnId:a};this.Xa(b,"gfc-"+a)};
fc$[fc].jc=function(a){var b={};for(var c in this.j){var d=this.j[c];if(d.viewParams&&d.viewParams.txnId==a)break;else b[c]=d}this.j=b;(a=fcl[fcA]("gfc-"+a))&&a[fcP]&&a[fcP].removeChild&&a[fcP].removeChild(a)};fc$[fc].Fb=function(){return"<Templates xmlns:fc='http://www.google.com/friendconnect/makeThisReal'>  <Namespace prefix='fc' url='http://www.google.com/friendconnect/makeThisReal'/>  <Template tag='fc:signIn'>    <div onAttach='google.friendconnect.renderSignInButton({element: this})'></div>  </Template></Templates>"};
fc$[fc].Mb=function(){return"<Templates xmlns:os='http://ns.opensocial.org/2008/markup'><Namespace prefix='os' url='http://ns.opensocial.org/2008/markup'/><Template tag='os:Name'>  <span if='${!My.person.profileUrl}'>${My.person.displayName}</span>  <a if='${My.person.profileUrl}' href='${My.person.profileUrl}'>      ${My.person.displayName}</a></Template><Template tag='os:Badge'>  <div><img if='${My.person.thumbnailUrl}' src='${My.person.thumbnailUrl}'/>   <os:Name person='${My.person}'/></div></Template><Template tag='os:PeopleSelector'>  <select onchange='google.friendconnect.PeopleSelectorOnChange(this)' name='${My.inputName}'          multiple='${My.multiple}' x-var='${My.var}' x-max='${My.max}'          x-onselect='${My.onselect}'>    <option repeat='${My.group}' value='${Cur.id}' selected='${Cur.id == My.selected}'>        ${Cur.displayName}    </option>  </select></Template></Templates>"};
var fcZc=function(a){var b;if(a.multiple){b=[];for(var c=0;c<a[fcJ][fct];c++)a[fcJ][c].selected&&b[fcs](a[fcJ][c].value);c=a.getAttribute("x-max");try{c=1*c}catch(d){c=0}if(c&&b[fct]>c&&a["x-selected"]){b=a["x-selected"];for(c=0;c<a[fcJ][fct];c++){a[fcJ][c].selected=fcd;for(var e=0;e<b[fct];e++)if(a[fcJ][c].value==b[e]){a[fcJ][c].selected=fcb;break}}}}else b=a[fcJ][a.selectedIndex].value;a["x-selected"]=b;(c=a.getAttribute("x-var"))&&fck.opensocial[fcka]&&fck.opensocial[fcka].getDataContext().putDataSet(c,
b);if(c=a.getAttribute("x-onselect"))if(fck[c]&&typeof fck[c]=="function")fck[c](b);else if(a["x-onselect-fn"])a["x-onselect-fn"][fcN](a);else a["x-onselect-fn"]=new Function(c)};
fc$[fc].Xa=function(a,b){fck.opensocial.template.Loader.loadContent(this.Mb());fck.opensocial.template.Loader.loadContent(this.Fb());fck.opensocial[fcka].processDocumentMarkup();var c=fcl[fcK]("div");c.id=b;fcq(c[fcF],"0px");fco(c[fcF],"0px");c[fcF].position="absolute";c[fcF].visibility="hidden";fcl[fcna][fcr](c);var d={};d.url=fch+"/friendconnect/gadgets/osapi-"+this.apiVersion+".xml";fcq(d,0);d.id=c.id;d.site=a.site;d["view-params"]=a["view-params"];this.render(d)};
fc6[fc].Ca=function(){fc5.I=this.f;fc5.openSocialSecurityToken=this.a[0];var a=fc5.openSocialSecurityToken;fck.opensocial[fcka].executeRequests();fck.opensocial.template.process();if(fc5.apiLoadedCallback){a=fcNa(fc5.apiLoadedCallback,a);fcba(a,0)}};fc$[fc].T=function(a){var b=fcc;for(var c in this.j)if(this.j[c].divId==a){b=this.j[c];break}return b};fc$[fc].D=function(a,b){var c=this.T(a),d=fcc;if(c)d=c.D(b);return d};fc$[fc].C=function(a,b){var c=this.T(a),d=fcc;if(c)d=c.C(b);return d};
fc$[fc].Dc=function(a,b){this.ba(function(c){var d=fcl.createTextNode("Copy & paste this code into your site.");c.getContentElement()[fcr](d);c.getContentElement()[fcr](fcl[fcK]("br"));d=fc5.C(a,b);var e=fcl[fcK]("textarea");fcp(e,d);e[fcL]("style","width:500px;");c.getContentElement()[fcr](e);c.setVisible(fcb)})};
var fc_c=["ar","dv","fa","iw","he","ku","pa","sd","tk","ug","ur","yi"],fcWc=function(a){a=a;var b=fcd;if(a){a=a[fcz]("_")[0];b=fcCb(fc_c,a)}else b=(a=fcbc(fcl[fcna],"direction"))&&a=="rtl";return b};fc6[fc].kb=function(a,b){var c=0,d=fcc;try{var e=fcVc(this.f),f=fc5.w(e);d=f.secureToken;c=f.communityId}catch(i){}if(b)c=b;fc5.K(a,c,this.callback,d)};
fc$[fc].K=function(a,b,c,d){b=b||this.openSocialSiteId;a={keepMax:fcb,presentation:"canvas",url:fch+"/friendconnect/gadgets/members.xml",site:b,"view-params":{profileId:a}};if(d)a.securityToken=d;this.jb(a,c)};fc$[fc].Hb=function(a){var b=fcc;if((a=this.T(a))&&a.secureToken)b=a.secureToken;return b};fc$[fc].Gb=function(a){var b=fcc;if((a=this.T(a))&&a.communityId)b=a.communityId;return b};
var fcXc=function(a){fc5.I&&fcsc(fc5.I,a)},fc0c=function(){fc6[fc].signout(fc5.openSocialSiteId)},fc1c=function(){fcvc(fc5.I)},fc2c=function(a,b){fcpc(a,b)},fcEc=function(){this.o={}};fcEc[fc].register=function(){fce.rpc[fcR]("subscribeEventType",fc6[fc].subscribe);fce.rpc[fcR]("publishEvent",fc6[fc].publish)};fc6[fc].subscribe=function(a){var b=fcTc;b.o[a]=b.o[a]||[];a=b.o[a];a[a[fct]]={frameId:this}};fcEc[fc].lb=function(a,b,c){var d=this;d.o[b]=d.o[b]||[];b=d.o[b];b[b[fct]]={container:a,callback:c}};
fc6[fc].publish=function(a){var b=fcTc,c=0;if(this.f)c=fcVc(this.f);b.o[a]=b.o[a]||[];b=b.o[a];for(var d=0;d<b[fct];d++)b[d].container?b[d].callback[fcH](b[d].container,a,c):fce.rpc[fcH](b[d].frameId,a,fcc,a,c)};var fcFc=fcV(fc6[fc].publish,new fc6),fcTc=new fcEc,fc5=new fc$;fc5.Fa(fc5.yb);fcW("google.friendconnect.container",fc5);fcW("google.friendconnect.container.refreshGadgets",fc5.X);fcW("google.friendconnect.container.setParentUrl",fc5.$);fcW("google.friendconnect.container.setServerBase",fc5.aa);
fcW("google.friendconnect.container.setServerVersion",fc5.Bc);fcW("google.friendconnect.container.createGadget",fc5.P);fcW("google.friendconnect.container.openLightboxIframe",fc5.H);fcW("google.friendconnect.container.renderGadget",fc5.J);fcW("google.friendconnect.container.render",fc5.render);fcW("google.friendconnect.container.goBackToSite",fc5.Pb);fcW("google.friendconnect.container.renderMembersGadget",fc5.nc);fcW("google.friendconnect.container.renderReviewGadget",fc5.pc);
fcW("google.friendconnect.container.renderCommentsGadget",fc5.wa);fcW("google.friendconnect.container.renderSignInGadget",fc5.bb);fcW("google.friendconnect.container.renderFriendBar",fc5.mc);fcW("google.friendconnect.container.renderSocialBar",fc5.za);fcW("google.friendconnect.container.renderCanvasSignInGadget",fc5.lc);fcW("google.friendconnect.container.renderUrlCanvasGadget",fc5.qc);fcW("google.friendconnect.container.renderEmbedSignInGadget",fc5.ya);
fcW("google.friendconnect.container.renderUrlEmbedGadget",fc5.cb);fcW("google.friendconnect.container.renderEmbedGadget",fc5.xa);fcW("google.friendconnect.container.renderWallGadget",fc5.rc);fcW("google.friendconnect.container.renderAdsGadget",fc5.kc);fcW("google.friendconnect.container.renderOpenSocialGadget",fc5.oc);fcW("google.friendconnect.container.setNoCache",fc5.gb);fcW("google.friendconnect.container.enableProxy",fc5.La);fcW("google.friendconnect.container.setDomain",fc5.xc);
fcW("google.friendconnect.container.setLockedDomainSuffix",fc5.Ac);fcW("google.friendconnect.container.setLocale",fc5.zc);fcW("google.friendconnect.container.loadOpenSocialApi",fc5.$b);fcW("google.friendconnect.container.initOpenSocialApi",fc5.ra);fcW("google.friendconnect.container.getOpenSocialApiIframeId",fc5.Lb);fcW("google.friendconnect.container.setApiVersion",fc5.uc);fcW("google.friendconnect.container.getEmbedUrl",fc5.D);fcW("google.friendconnect.container.getEmbedHtml",fc5.C);
fcW("google.friendconnect.container.getGadgetSecurityToken",fc5.Hb);fcW("google.friendconnect.container.getGadgetCommunityId",fc5.Gb);fcW("google.friendconnect.container.showEmbedDialog",fc5.Dc);fcW("google.friendconnect.container.showMemberProfile",fc5.K);fcW("google.friendconnect.requestSignIn",fcXc);fcW("google.friendconnect.requestSignOut",fc0c);fcW("google.friendconnect.requestSettings",fc1c);fcW("google.friendconnect.requestInvite",fc2c);fcW("google.friendconnect.renderSignInButton",fcYc);
fcW("google.friendconnect.container.invokeOpenSocialApiViaIframe",fc5.Sb);fcW("google.friendconnect.container.removeOpenSocialApiViaIframe",fc5.jc);fcW("google.friendconnect.userAgent.WEBKIT",fckb);fcW("google.friendconnect.userAgent.IE",fcY);fcW("google.friendconnect.PeopleSelectorOnChange",fcZc);fcW("google.friendconnect.container.setDateStamp_",fc5.wc);
google.friendconnect.container.setServerBase('http://www-a-fc-opensocial.googleusercontent.com/ps/');google.friendconnect.container.setServerVersion('0.556.7');google.friendconnect.container.setApiVersion('0.8');
google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/activities.xml', 'http://q8j0igk2u2f6kf7jogh6s66md2d7r154-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ads.xml', 'http://t767uouk8skpac15v8ue0n16regb3m2t-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/ask.xml', 'http://uofgf6lm45rimd9jp6hn983ul6n2en81-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/friendbar.xml', 'http://p7rjrrl49ose4gob99eonlvp0drmce3d-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/content_reveal.xml', 'http://n0mc7q283f00tpk3uifa7sjv4hmrults-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/chat.xml', 'http://4mmefl67as0q39gf1o4pnocubqmdgei0-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/donate.xml', 'http://7v4nflqvq38notsghmcr5a9t6o9g6kn4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/lamegame.xml', 'http://ffbrstu9puk7qmt45got9mqe5k7ijrs4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/map.xml', 'http://k0dfp8trn0hi5d2spmo7jmc88n6kr1cc-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/members.xml', 'http://r1rk9np7bpcsfoeekl0khkd2juj27q3o-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/newsletterSubscribe.xml', 'http://k830suiki828goudg9448o6bp0tpu5r3-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/poll.xml', 'http://1ivjd75aqp679vbgohjv74tlhn13rgdu-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/recommended_pages.xml', 'http://iqavu79a908u5vcecp0pq80hhbhkv33b-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/review.xml', 'http://r85jiaoot111joesr8bilfhfeslcc496-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/sample.xml', 'http://785aoao97uti9iqffknjp5e0kn2ljlm4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/signin.xml', 'http://8fkcem1ves287v3g5lu9gep1j91p3kk1-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/wall.xml', 'http://o29lt44ell30t7ljcdfr8lq2mjakv2co-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/osapi-0.8.xml', 'http://mc8tdi0ripmbpds25eboaupdulritrp6-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setLockedDomainSuffix('-a-fc-opensocial.googleusercontent.com/ps/');
window['__ps_loaded__'] = true; 
 }google.friendconnect_ = google.friendconnect;
google.friendconnect.container.setDateStamp_('12f1d441ae2');