goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__11273){
var vec__11274__11275 = p__11273;
var k__11276 = cljs.core.nth.call(null,vec__11274__11275,0,null);
var v__11277 = cljs.core.nth.call(null,vec__11274__11275,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__11276.toLowerCase()),v__11277], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3941__auto____11294 = this$;
if(and__3941__auto____11294)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3941__auto____11294;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__3392__auto____11295 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11296 = (clojure.browser.net.connect[goog.typeOf(x__3392__auto____11295)]);
if(or__3943__auto____11296)
{return or__3943__auto____11296;
} else
{var or__3943__auto____11297 = (clojure.browser.net.connect["_"]);
if(or__3943__auto____11297)
{return or__3943__auto____11297;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3941__auto____11298 = this$;
if(and__3941__auto____11298)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3941__auto____11298;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__3392__auto____11299 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11300 = (clojure.browser.net.connect[goog.typeOf(x__3392__auto____11299)]);
if(or__3943__auto____11300)
{return or__3943__auto____11300;
} else
{var or__3943__auto____11301 = (clojure.browser.net.connect["_"]);
if(or__3943__auto____11301)
{return or__3943__auto____11301;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3941__auto____11302 = this$;
if(and__3941__auto____11302)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3941__auto____11302;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__3392__auto____11303 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11304 = (clojure.browser.net.connect[goog.typeOf(x__3392__auto____11303)]);
if(or__3943__auto____11304)
{return or__3943__auto____11304;
} else
{var or__3943__auto____11305 = (clojure.browser.net.connect["_"]);
if(or__3943__auto____11305)
{return or__3943__auto____11305;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3941__auto____11306 = this$;
if(and__3941__auto____11306)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3941__auto____11306;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__3392__auto____11307 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11308 = (clojure.browser.net.connect[goog.typeOf(x__3392__auto____11307)]);
if(or__3943__auto____11308)
{return or__3943__auto____11308;
} else
{var or__3943__auto____11309 = (clojure.browser.net.connect["_"]);
if(or__3943__auto____11309)
{return or__3943__auto____11309;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return connect__1.call(this,this$);
case 2:
return connect__2.call(this,this$,opt1);
case 3:
return connect__3.call(this,this$,opt1,opt2);
case 4:
return connect__4.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
connect.cljs$lang$arity$1 = connect__1;
connect.cljs$lang$arity$2 = connect__2;
connect.cljs$lang$arity$3 = connect__3;
connect.cljs$lang$arity$4 = connect__4;
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__2 = (function (this$,opt){
if((function (){var and__3941__auto____11330 = this$;
if(and__3941__auto____11330)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3941__auto____11330;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__3392__auto____11331 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11332 = (clojure.browser.net.transmit[goog.typeOf(x__3392__auto____11331)]);
if(or__3943__auto____11332)
{return or__3943__auto____11332;
} else
{var or__3943__auto____11333 = (clojure.browser.net.transmit["_"]);
if(or__3943__auto____11333)
{return or__3943__auto____11333;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3941__auto____11334 = this$;
if(and__3941__auto____11334)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3941__auto____11334;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__3392__auto____11335 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11336 = (clojure.browser.net.transmit[goog.typeOf(x__3392__auto____11335)]);
if(or__3943__auto____11336)
{return or__3943__auto____11336;
} else
{var or__3943__auto____11337 = (clojure.browser.net.transmit["_"]);
if(or__3943__auto____11337)
{return or__3943__auto____11337;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3941__auto____11338 = this$;
if(and__3941__auto____11338)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3941__auto____11338;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__3392__auto____11339 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11340 = (clojure.browser.net.transmit[goog.typeOf(x__3392__auto____11339)]);
if(or__3943__auto____11340)
{return or__3943__auto____11340;
} else
{var or__3943__auto____11341 = (clojure.browser.net.transmit["_"]);
if(or__3943__auto____11341)
{return or__3943__auto____11341;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3941__auto____11342 = this$;
if(and__3941__auto____11342)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3941__auto____11342;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__3392__auto____11343 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11344 = (clojure.browser.net.transmit[goog.typeOf(x__3392__auto____11343)]);
if(or__3943__auto____11344)
{return or__3943__auto____11344;
} else
{var or__3943__auto____11345 = (clojure.browser.net.transmit["_"]);
if(or__3943__auto____11345)
{return or__3943__auto____11345;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3941__auto____11346 = this$;
if(and__3941__auto____11346)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3941__auto____11346;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__3392__auto____11347 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11348 = (clojure.browser.net.transmit[goog.typeOf(x__3392__auto____11347)]);
if(or__3943__auto____11348)
{return or__3943__auto____11348;
} else
{var or__3943__auto____11349 = (clojure.browser.net.transmit["_"]);
if(or__3943__auto____11349)
{return or__3943__auto____11349;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return transmit__2.call(this,this$,opt);
case 3:
return transmit__3.call(this,this$,opt,opt2);
case 4:
return transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
transmit.cljs$lang$arity$2 = transmit__2;
transmit.cljs$lang$arity$3 = transmit__3;
transmit.cljs$lang$arity$4 = transmit__4;
transmit.cljs$lang$arity$5 = transmit__5;
transmit.cljs$lang$arity$6 = transmit__6;
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if((function (){var and__3941__auto____11354 = this$;
if(and__3941__auto____11354)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3941__auto____11354;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__3392__auto____11355 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11356 = (clojure.browser.net.close[goog.typeOf(x__3392__auto____11355)]);
if(or__3943__auto____11356)
{return or__3943__auto____11356;
} else
{var or__3943__auto____11357 = (clojure.browser.net.close["_"]);
if(or__3943__auto____11357)
{return or__3943__auto____11357;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__11358){
var vec__11359__11360 = p__11358;
var k__11361 = cljs.core.nth.call(null,vec__11359__11360,0,null);
var v__11362 = cljs.core.nth.call(null,vec__11359__11360,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__11361.toLowerCase()),v__11362], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__11363){
var vec__11364__11365 = p__11363;
var k__11366 = cljs.core.nth.call(null,vec__11364__11365,0,null);
var v__11367 = cljs.core.nth.call(null,vec__11364__11365,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__11366.toLowerCase()),v__11367], true);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3941__auto____11376 = this$;
if(and__3941__auto____11376)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3941__auto____11376;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__3392__auto____11377 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11378 = (clojure.browser.net.register_service[goog.typeOf(x__3392__auto____11377)]);
if(or__3943__auto____11378)
{return or__3943__auto____11378;
} else
{var or__3943__auto____11379 = (clojure.browser.net.register_service["_"]);
if(or__3943__auto____11379)
{return or__3943__auto____11379;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3941__auto____11380 = this$;
if(and__3941__auto____11380)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3941__auto____11380;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__3392__auto____11381 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____11382 = (clojure.browser.net.register_service[goog.typeOf(x__3392__auto____11381)]);
if(or__3943__auto____11382)
{return or__3943__auto____11382;
} else
{var or__3943__auto____11383 = (clojure.browser.net.register_service["_"]);
if(or__3943__auto____11383)
{return or__3943__auto____11383;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return register_service__3.call(this,this$,service_name,fn);
case 4:
return register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
register_service.cljs$lang$arity$3 = register_service__3;
register_service.cljs$lang$arity$4 = register_service__4;
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__0 = (function (){
var temp__4092__auto____11395 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__4092__auto____11395))
{var config__11396 = temp__4092__auto____11395;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__11396)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__11397){
var vec__11398__11399 = p__11397;
var k__11400 = cljs.core.nth.call(null,vec__11398__11399,0,null);
var v__11401 = cljs.core.nth.call(null,vec__11398__11399,1,null);
var temp__4090__auto____11402 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__11400,null);
if(cljs.core.truth_(temp__4090__auto____11402))
{var field__11403 = temp__4090__auto____11402;
var G__11404__11405 = sum;
(G__11404__11405[field__11403] = v__11401);
return G__11404__11405;
} else
{return sum;
}
}),{},config)));
});
xpc_connection = function(config){
switch(arguments.length){
case 0:
return xpc_connection__0.call(this);
case 1:
return xpc_connection__1.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
xpc_connection.cljs$lang$arity$0 = xpc_connection__0;
xpc_connection.cljs$lang$arity$1 = xpc_connection__1;
return xpc_connection;
})()
;
