goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__7318 = (((x == null))?null:x);
if((p[goog.typeOf(x__7318)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__7319__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7319 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7319__delegate.call(this, array, i, idxs);
};
G__7319.cljs$lang$maxFixedArity = 2;
G__7319.cljs$lang$applyTo = (function (arglist__7320){
var array = cljs.core.first(arglist__7320);
var i = cljs.core.first(cljs.core.next(arglist__7320));
var idxs = cljs.core.rest(cljs.core.next(arglist__7320));
return G__7319__delegate(array, i, idxs);
});
G__7319.cljs$lang$arity$variadic = G__7319__delegate;
return G__7319;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3941__auto____7405 = this$;
if(and__3941__auto____7405)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3941__auto____7405;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__3392__auto____7406 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7407 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7406)]);
if(or__3943__auto____7407)
{return or__3943__auto____7407;
} else
{var or__3943__auto____7408 = (cljs.core._invoke["_"]);
if(or__3943__auto____7408)
{return or__3943__auto____7408;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3941__auto____7409 = this$;
if(and__3941__auto____7409)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3941__auto____7409;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__3392__auto____7410 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7411 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7410)]);
if(or__3943__auto____7411)
{return or__3943__auto____7411;
} else
{var or__3943__auto____7412 = (cljs.core._invoke["_"]);
if(or__3943__auto____7412)
{return or__3943__auto____7412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3941__auto____7413 = this$;
if(and__3941__auto____7413)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3941__auto____7413;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__3392__auto____7414 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7415 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7414)]);
if(or__3943__auto____7415)
{return or__3943__auto____7415;
} else
{var or__3943__auto____7416 = (cljs.core._invoke["_"]);
if(or__3943__auto____7416)
{return or__3943__auto____7416;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3941__auto____7417 = this$;
if(and__3941__auto____7417)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3941__auto____7417;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__3392__auto____7418 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7419 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7418)]);
if(or__3943__auto____7419)
{return or__3943__auto____7419;
} else
{var or__3943__auto____7420 = (cljs.core._invoke["_"]);
if(or__3943__auto____7420)
{return or__3943__auto____7420;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3941__auto____7421 = this$;
if(and__3941__auto____7421)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3941__auto____7421;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__3392__auto____7422 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7423 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7422)]);
if(or__3943__auto____7423)
{return or__3943__auto____7423;
} else
{var or__3943__auto____7424 = (cljs.core._invoke["_"]);
if(or__3943__auto____7424)
{return or__3943__auto____7424;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3941__auto____7425 = this$;
if(and__3941__auto____7425)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3941__auto____7425;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__3392__auto____7426 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7427 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7426)]);
if(or__3943__auto____7427)
{return or__3943__auto____7427;
} else
{var or__3943__auto____7428 = (cljs.core._invoke["_"]);
if(or__3943__auto____7428)
{return or__3943__auto____7428;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3941__auto____7429 = this$;
if(and__3941__auto____7429)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3941__auto____7429;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__3392__auto____7430 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7431 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7430)]);
if(or__3943__auto____7431)
{return or__3943__auto____7431;
} else
{var or__3943__auto____7432 = (cljs.core._invoke["_"]);
if(or__3943__auto____7432)
{return or__3943__auto____7432;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3941__auto____7433 = this$;
if(and__3941__auto____7433)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3941__auto____7433;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__3392__auto____7434 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7435 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7434)]);
if(or__3943__auto____7435)
{return or__3943__auto____7435;
} else
{var or__3943__auto____7436 = (cljs.core._invoke["_"]);
if(or__3943__auto____7436)
{return or__3943__auto____7436;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3941__auto____7437 = this$;
if(and__3941__auto____7437)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3941__auto____7437;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__3392__auto____7438 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7439 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7438)]);
if(or__3943__auto____7439)
{return or__3943__auto____7439;
} else
{var or__3943__auto____7440 = (cljs.core._invoke["_"]);
if(or__3943__auto____7440)
{return or__3943__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3941__auto____7441 = this$;
if(and__3941__auto____7441)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3941__auto____7441;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__3392__auto____7442 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7443 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7442)]);
if(or__3943__auto____7443)
{return or__3943__auto____7443;
} else
{var or__3943__auto____7444 = (cljs.core._invoke["_"]);
if(or__3943__auto____7444)
{return or__3943__auto____7444;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3941__auto____7445 = this$;
if(and__3941__auto____7445)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3941__auto____7445;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__3392__auto____7446 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7447 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7446)]);
if(or__3943__auto____7447)
{return or__3943__auto____7447;
} else
{var or__3943__auto____7448 = (cljs.core._invoke["_"]);
if(or__3943__auto____7448)
{return or__3943__auto____7448;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3941__auto____7449 = this$;
if(and__3941__auto____7449)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3941__auto____7449;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__3392__auto____7450 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7451 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7450)]);
if(or__3943__auto____7451)
{return or__3943__auto____7451;
} else
{var or__3943__auto____7452 = (cljs.core._invoke["_"]);
if(or__3943__auto____7452)
{return or__3943__auto____7452;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3941__auto____7453 = this$;
if(and__3941__auto____7453)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3941__auto____7453;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__3392__auto____7454 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7455 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7454)]);
if(or__3943__auto____7455)
{return or__3943__auto____7455;
} else
{var or__3943__auto____7456 = (cljs.core._invoke["_"]);
if(or__3943__auto____7456)
{return or__3943__auto____7456;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3941__auto____7457 = this$;
if(and__3941__auto____7457)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3941__auto____7457;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__3392__auto____7458 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7459 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7458)]);
if(or__3943__auto____7459)
{return or__3943__auto____7459;
} else
{var or__3943__auto____7460 = (cljs.core._invoke["_"]);
if(or__3943__auto____7460)
{return or__3943__auto____7460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3941__auto____7461 = this$;
if(and__3941__auto____7461)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3941__auto____7461;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__3392__auto____7462 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7463 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7462)]);
if(or__3943__auto____7463)
{return or__3943__auto____7463;
} else
{var or__3943__auto____7464 = (cljs.core._invoke["_"]);
if(or__3943__auto____7464)
{return or__3943__auto____7464;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3941__auto____7465 = this$;
if(and__3941__auto____7465)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3941__auto____7465;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__3392__auto____7466 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7467 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7466)]);
if(or__3943__auto____7467)
{return or__3943__auto____7467;
} else
{var or__3943__auto____7468 = (cljs.core._invoke["_"]);
if(or__3943__auto____7468)
{return or__3943__auto____7468;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3941__auto____7469 = this$;
if(and__3941__auto____7469)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3941__auto____7469;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__3392__auto____7470 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7471 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7470)]);
if(or__3943__auto____7471)
{return or__3943__auto____7471;
} else
{var or__3943__auto____7472 = (cljs.core._invoke["_"]);
if(or__3943__auto____7472)
{return or__3943__auto____7472;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3941__auto____7473 = this$;
if(and__3941__auto____7473)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3941__auto____7473;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__3392__auto____7474 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7475 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7474)]);
if(or__3943__auto____7475)
{return or__3943__auto____7475;
} else
{var or__3943__auto____7476 = (cljs.core._invoke["_"]);
if(or__3943__auto____7476)
{return or__3943__auto____7476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3941__auto____7477 = this$;
if(and__3941__auto____7477)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3941__auto____7477;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__3392__auto____7478 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7479 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7478)]);
if(or__3943__auto____7479)
{return or__3943__auto____7479;
} else
{var or__3943__auto____7480 = (cljs.core._invoke["_"]);
if(or__3943__auto____7480)
{return or__3943__auto____7480;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3941__auto____7481 = this$;
if(and__3941__auto____7481)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3941__auto____7481;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__3392__auto____7482 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7483 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7482)]);
if(or__3943__auto____7483)
{return or__3943__auto____7483;
} else
{var or__3943__auto____7484 = (cljs.core._invoke["_"]);
if(or__3943__auto____7484)
{return or__3943__auto____7484;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3941__auto____7485 = this$;
if(and__3941__auto____7485)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3941__auto____7485;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__3392__auto____7486 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7487 = (cljs.core._invoke[goog.typeOf(x__3392__auto____7486)]);
if(or__3943__auto____7487)
{return or__3943__auto____7487;
} else
{var or__3943__auto____7488 = (cljs.core._invoke["_"]);
if(or__3943__auto____7488)
{return or__3943__auto____7488;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3941__auto____7493 = coll;
if(and__3941__auto____7493)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3941__auto____7493;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__3392__auto____7494 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7495 = (cljs.core._count[goog.typeOf(x__3392__auto____7494)]);
if(or__3943__auto____7495)
{return or__3943__auto____7495;
} else
{var or__3943__auto____7496 = (cljs.core._count["_"]);
if(or__3943__auto____7496)
{return or__3943__auto____7496;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3941__auto____7501 = coll;
if(and__3941__auto____7501)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3941__auto____7501;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__3392__auto____7502 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7503 = (cljs.core._empty[goog.typeOf(x__3392__auto____7502)]);
if(or__3943__auto____7503)
{return or__3943__auto____7503;
} else
{var or__3943__auto____7504 = (cljs.core._empty["_"]);
if(or__3943__auto____7504)
{return or__3943__auto____7504;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3941__auto____7509 = coll;
if(and__3941__auto____7509)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3941__auto____7509;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__3392__auto____7510 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7511 = (cljs.core._conj[goog.typeOf(x__3392__auto____7510)]);
if(or__3943__auto____7511)
{return or__3943__auto____7511;
} else
{var or__3943__auto____7512 = (cljs.core._conj["_"]);
if(or__3943__auto____7512)
{return or__3943__auto____7512;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3941__auto____7521 = coll;
if(and__3941__auto____7521)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3941__auto____7521;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__3392__auto____7522 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7523 = (cljs.core._nth[goog.typeOf(x__3392__auto____7522)]);
if(or__3943__auto____7523)
{return or__3943__auto____7523;
} else
{var or__3943__auto____7524 = (cljs.core._nth["_"]);
if(or__3943__auto____7524)
{return or__3943__auto____7524;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3941__auto____7525 = coll;
if(and__3941__auto____7525)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3941__auto____7525;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__3392__auto____7526 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7527 = (cljs.core._nth[goog.typeOf(x__3392__auto____7526)]);
if(or__3943__auto____7527)
{return or__3943__auto____7527;
} else
{var or__3943__auto____7528 = (cljs.core._nth["_"]);
if(or__3943__auto____7528)
{return or__3943__auto____7528;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3941__auto____7533 = coll;
if(and__3941__auto____7533)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3941__auto____7533;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__3392__auto____7534 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7535 = (cljs.core._first[goog.typeOf(x__3392__auto____7534)]);
if(or__3943__auto____7535)
{return or__3943__auto____7535;
} else
{var or__3943__auto____7536 = (cljs.core._first["_"]);
if(or__3943__auto____7536)
{return or__3943__auto____7536;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3941__auto____7541 = coll;
if(and__3941__auto____7541)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3941__auto____7541;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__3392__auto____7542 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7543 = (cljs.core._rest[goog.typeOf(x__3392__auto____7542)]);
if(or__3943__auto____7543)
{return or__3943__auto____7543;
} else
{var or__3943__auto____7544 = (cljs.core._rest["_"]);
if(or__3943__auto____7544)
{return or__3943__auto____7544;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3941__auto____7549 = coll;
if(and__3941__auto____7549)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3941__auto____7549;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__3392__auto____7550 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7551 = (cljs.core._next[goog.typeOf(x__3392__auto____7550)]);
if(or__3943__auto____7551)
{return or__3943__auto____7551;
} else
{var or__3943__auto____7552 = (cljs.core._next["_"]);
if(or__3943__auto____7552)
{return or__3943__auto____7552;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3941__auto____7561 = o;
if(and__3941__auto____7561)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3941__auto____7561;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__3392__auto____7562 = (((o == null))?null:o);
return (function (){var or__3943__auto____7563 = (cljs.core._lookup[goog.typeOf(x__3392__auto____7562)]);
if(or__3943__auto____7563)
{return or__3943__auto____7563;
} else
{var or__3943__auto____7564 = (cljs.core._lookup["_"]);
if(or__3943__auto____7564)
{return or__3943__auto____7564;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3941__auto____7565 = o;
if(and__3941__auto____7565)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3941__auto____7565;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__3392__auto____7566 = (((o == null))?null:o);
return (function (){var or__3943__auto____7567 = (cljs.core._lookup[goog.typeOf(x__3392__auto____7566)]);
if(or__3943__auto____7567)
{return or__3943__auto____7567;
} else
{var or__3943__auto____7568 = (cljs.core._lookup["_"]);
if(or__3943__auto____7568)
{return or__3943__auto____7568;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3941__auto____7573 = coll;
if(and__3941__auto____7573)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3941__auto____7573;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__3392__auto____7574 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7575 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__3392__auto____7574)]);
if(or__3943__auto____7575)
{return or__3943__auto____7575;
} else
{var or__3943__auto____7576 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3943__auto____7576)
{return or__3943__auto____7576;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3941__auto____7581 = coll;
if(and__3941__auto____7581)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3941__auto____7581;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__3392__auto____7582 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7583 = (cljs.core._assoc[goog.typeOf(x__3392__auto____7582)]);
if(or__3943__auto____7583)
{return or__3943__auto____7583;
} else
{var or__3943__auto____7584 = (cljs.core._assoc["_"]);
if(or__3943__auto____7584)
{return or__3943__auto____7584;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3941__auto____7589 = coll;
if(and__3941__auto____7589)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3941__auto____7589;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__3392__auto____7590 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7591 = (cljs.core._dissoc[goog.typeOf(x__3392__auto____7590)]);
if(or__3943__auto____7591)
{return or__3943__auto____7591;
} else
{var or__3943__auto____7592 = (cljs.core._dissoc["_"]);
if(or__3943__auto____7592)
{return or__3943__auto____7592;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3941__auto____7597 = coll;
if(and__3941__auto____7597)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3941__auto____7597;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__3392__auto____7598 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7599 = (cljs.core._key[goog.typeOf(x__3392__auto____7598)]);
if(or__3943__auto____7599)
{return or__3943__auto____7599;
} else
{var or__3943__auto____7600 = (cljs.core._key["_"]);
if(or__3943__auto____7600)
{return or__3943__auto____7600;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3941__auto____7605 = coll;
if(and__3941__auto____7605)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3941__auto____7605;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__3392__auto____7606 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7607 = (cljs.core._val[goog.typeOf(x__3392__auto____7606)]);
if(or__3943__auto____7607)
{return or__3943__auto____7607;
} else
{var or__3943__auto____7608 = (cljs.core._val["_"]);
if(or__3943__auto____7608)
{return or__3943__auto____7608;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3941__auto____7613 = coll;
if(and__3941__auto____7613)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3941__auto____7613;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__3392__auto____7614 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7615 = (cljs.core._disjoin[goog.typeOf(x__3392__auto____7614)]);
if(or__3943__auto____7615)
{return or__3943__auto____7615;
} else
{var or__3943__auto____7616 = (cljs.core._disjoin["_"]);
if(or__3943__auto____7616)
{return or__3943__auto____7616;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3941__auto____7621 = coll;
if(and__3941__auto____7621)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3941__auto____7621;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__3392__auto____7622 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7623 = (cljs.core._peek[goog.typeOf(x__3392__auto____7622)]);
if(or__3943__auto____7623)
{return or__3943__auto____7623;
} else
{var or__3943__auto____7624 = (cljs.core._peek["_"]);
if(or__3943__auto____7624)
{return or__3943__auto____7624;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3941__auto____7629 = coll;
if(and__3941__auto____7629)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3941__auto____7629;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__3392__auto____7630 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7631 = (cljs.core._pop[goog.typeOf(x__3392__auto____7630)]);
if(or__3943__auto____7631)
{return or__3943__auto____7631;
} else
{var or__3943__auto____7632 = (cljs.core._pop["_"]);
if(or__3943__auto____7632)
{return or__3943__auto____7632;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3941__auto____7637 = coll;
if(and__3941__auto____7637)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3941__auto____7637;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__3392__auto____7638 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7639 = (cljs.core._assoc_n[goog.typeOf(x__3392__auto____7638)]);
if(or__3943__auto____7639)
{return or__3943__auto____7639;
} else
{var or__3943__auto____7640 = (cljs.core._assoc_n["_"]);
if(or__3943__auto____7640)
{return or__3943__auto____7640;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3941__auto____7645 = o;
if(and__3941__auto____7645)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3941__auto____7645;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__3392__auto____7646 = (((o == null))?null:o);
return (function (){var or__3943__auto____7647 = (cljs.core._deref[goog.typeOf(x__3392__auto____7646)]);
if(or__3943__auto____7647)
{return or__3943__auto____7647;
} else
{var or__3943__auto____7648 = (cljs.core._deref["_"]);
if(or__3943__auto____7648)
{return or__3943__auto____7648;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3941__auto____7653 = o;
if(and__3941__auto____7653)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3941__auto____7653;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__3392__auto____7654 = (((o == null))?null:o);
return (function (){var or__3943__auto____7655 = (cljs.core._deref_with_timeout[goog.typeOf(x__3392__auto____7654)]);
if(or__3943__auto____7655)
{return or__3943__auto____7655;
} else
{var or__3943__auto____7656 = (cljs.core._deref_with_timeout["_"]);
if(or__3943__auto____7656)
{return or__3943__auto____7656;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3941__auto____7661 = o;
if(and__3941__auto____7661)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3941__auto____7661;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__3392__auto____7662 = (((o == null))?null:o);
return (function (){var or__3943__auto____7663 = (cljs.core._meta[goog.typeOf(x__3392__auto____7662)]);
if(or__3943__auto____7663)
{return or__3943__auto____7663;
} else
{var or__3943__auto____7664 = (cljs.core._meta["_"]);
if(or__3943__auto____7664)
{return or__3943__auto____7664;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3941__auto____7669 = o;
if(and__3941__auto____7669)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3941__auto____7669;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__3392__auto____7670 = (((o == null))?null:o);
return (function (){var or__3943__auto____7671 = (cljs.core._with_meta[goog.typeOf(x__3392__auto____7670)]);
if(or__3943__auto____7671)
{return or__3943__auto____7671;
} else
{var or__3943__auto____7672 = (cljs.core._with_meta["_"]);
if(or__3943__auto____7672)
{return or__3943__auto____7672;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3941__auto____7681 = coll;
if(and__3941__auto____7681)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3941__auto____7681;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__3392__auto____7682 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7683 = (cljs.core._reduce[goog.typeOf(x__3392__auto____7682)]);
if(or__3943__auto____7683)
{return or__3943__auto____7683;
} else
{var or__3943__auto____7684 = (cljs.core._reduce["_"]);
if(or__3943__auto____7684)
{return or__3943__auto____7684;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3941__auto____7685 = coll;
if(and__3941__auto____7685)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3941__auto____7685;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__3392__auto____7686 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7687 = (cljs.core._reduce[goog.typeOf(x__3392__auto____7686)]);
if(or__3943__auto____7687)
{return or__3943__auto____7687;
} else
{var or__3943__auto____7688 = (cljs.core._reduce["_"]);
if(or__3943__auto____7688)
{return or__3943__auto____7688;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3941__auto____7693 = coll;
if(and__3941__auto____7693)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3941__auto____7693;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__3392__auto____7694 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7695 = (cljs.core._kv_reduce[goog.typeOf(x__3392__auto____7694)]);
if(or__3943__auto____7695)
{return or__3943__auto____7695;
} else
{var or__3943__auto____7696 = (cljs.core._kv_reduce["_"]);
if(or__3943__auto____7696)
{return or__3943__auto____7696;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3941__auto____7701 = o;
if(and__3941__auto____7701)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3941__auto____7701;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__3392__auto____7702 = (((o == null))?null:o);
return (function (){var or__3943__auto____7703 = (cljs.core._equiv[goog.typeOf(x__3392__auto____7702)]);
if(or__3943__auto____7703)
{return or__3943__auto____7703;
} else
{var or__3943__auto____7704 = (cljs.core._equiv["_"]);
if(or__3943__auto____7704)
{return or__3943__auto____7704;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3941__auto____7709 = o;
if(and__3941__auto____7709)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3941__auto____7709;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__3392__auto____7710 = (((o == null))?null:o);
return (function (){var or__3943__auto____7711 = (cljs.core._hash[goog.typeOf(x__3392__auto____7710)]);
if(or__3943__auto____7711)
{return or__3943__auto____7711;
} else
{var or__3943__auto____7712 = (cljs.core._hash["_"]);
if(or__3943__auto____7712)
{return or__3943__auto____7712;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3941__auto____7717 = o;
if(and__3941__auto____7717)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3941__auto____7717;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__3392__auto____7718 = (((o == null))?null:o);
return (function (){var or__3943__auto____7719 = (cljs.core._seq[goog.typeOf(x__3392__auto____7718)]);
if(or__3943__auto____7719)
{return or__3943__auto____7719;
} else
{var or__3943__auto____7720 = (cljs.core._seq["_"]);
if(or__3943__auto____7720)
{return or__3943__auto____7720;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3941__auto____7725 = coll;
if(and__3941__auto____7725)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3941__auto____7725;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__3392__auto____7726 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7727 = (cljs.core._rseq[goog.typeOf(x__3392__auto____7726)]);
if(or__3943__auto____7727)
{return or__3943__auto____7727;
} else
{var or__3943__auto____7728 = (cljs.core._rseq["_"]);
if(or__3943__auto____7728)
{return or__3943__auto____7728;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3941__auto____7733 = coll;
if(and__3941__auto____7733)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3941__auto____7733;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__3392__auto____7734 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7735 = (cljs.core._sorted_seq[goog.typeOf(x__3392__auto____7734)]);
if(or__3943__auto____7735)
{return or__3943__auto____7735;
} else
{var or__3943__auto____7736 = (cljs.core._sorted_seq["_"]);
if(or__3943__auto____7736)
{return or__3943__auto____7736;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3941__auto____7741 = coll;
if(and__3941__auto____7741)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3941__auto____7741;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__3392__auto____7742 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7743 = (cljs.core._sorted_seq_from[goog.typeOf(x__3392__auto____7742)]);
if(or__3943__auto____7743)
{return or__3943__auto____7743;
} else
{var or__3943__auto____7744 = (cljs.core._sorted_seq_from["_"]);
if(or__3943__auto____7744)
{return or__3943__auto____7744;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3941__auto____7749 = coll;
if(and__3941__auto____7749)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3941__auto____7749;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__3392__auto____7750 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7751 = (cljs.core._entry_key[goog.typeOf(x__3392__auto____7750)]);
if(or__3943__auto____7751)
{return or__3943__auto____7751;
} else
{var or__3943__auto____7752 = (cljs.core._entry_key["_"]);
if(or__3943__auto____7752)
{return or__3943__auto____7752;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3941__auto____7757 = coll;
if(and__3941__auto____7757)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3941__auto____7757;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__3392__auto____7758 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7759 = (cljs.core._comparator[goog.typeOf(x__3392__auto____7758)]);
if(or__3943__auto____7759)
{return or__3943__auto____7759;
} else
{var or__3943__auto____7760 = (cljs.core._comparator["_"]);
if(or__3943__auto____7760)
{return or__3943__auto____7760;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3941__auto____7765 = o;
if(and__3941__auto____7765)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3941__auto____7765;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__3392__auto____7766 = (((o == null))?null:o);
return (function (){var or__3943__auto____7767 = (cljs.core._pr_seq[goog.typeOf(x__3392__auto____7766)]);
if(or__3943__auto____7767)
{return or__3943__auto____7767;
} else
{var or__3943__auto____7768 = (cljs.core._pr_seq["_"]);
if(or__3943__auto____7768)
{return or__3943__auto____7768;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3941__auto____7773 = d;
if(and__3941__auto____7773)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3941__auto____7773;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__3392__auto____7774 = (((d == null))?null:d);
return (function (){var or__3943__auto____7775 = (cljs.core._realized_QMARK_[goog.typeOf(x__3392__auto____7774)]);
if(or__3943__auto____7775)
{return or__3943__auto____7775;
} else
{var or__3943__auto____7776 = (cljs.core._realized_QMARK_["_"]);
if(or__3943__auto____7776)
{return or__3943__auto____7776;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3941__auto____7781 = this$;
if(and__3941__auto____7781)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3941__auto____7781;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__3392__auto____7782 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7783 = (cljs.core._notify_watches[goog.typeOf(x__3392__auto____7782)]);
if(or__3943__auto____7783)
{return or__3943__auto____7783;
} else
{var or__3943__auto____7784 = (cljs.core._notify_watches["_"]);
if(or__3943__auto____7784)
{return or__3943__auto____7784;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3941__auto____7789 = this$;
if(and__3941__auto____7789)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3941__auto____7789;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__3392__auto____7790 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7791 = (cljs.core._add_watch[goog.typeOf(x__3392__auto____7790)]);
if(or__3943__auto____7791)
{return or__3943__auto____7791;
} else
{var or__3943__auto____7792 = (cljs.core._add_watch["_"]);
if(or__3943__auto____7792)
{return or__3943__auto____7792;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3941__auto____7797 = this$;
if(and__3941__auto____7797)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3941__auto____7797;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__3392__auto____7798 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7799 = (cljs.core._remove_watch[goog.typeOf(x__3392__auto____7798)]);
if(or__3943__auto____7799)
{return or__3943__auto____7799;
} else
{var or__3943__auto____7800 = (cljs.core._remove_watch["_"]);
if(or__3943__auto____7800)
{return or__3943__auto____7800;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3941__auto____7805 = coll;
if(and__3941__auto____7805)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3941__auto____7805;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__3392__auto____7806 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7807 = (cljs.core._as_transient[goog.typeOf(x__3392__auto____7806)]);
if(or__3943__auto____7807)
{return or__3943__auto____7807;
} else
{var or__3943__auto____7808 = (cljs.core._as_transient["_"]);
if(or__3943__auto____7808)
{return or__3943__auto____7808;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3941__auto____7813 = tcoll;
if(and__3941__auto____7813)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3941__auto____7813;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__3392__auto____7814 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7815 = (cljs.core._conj_BANG_[goog.typeOf(x__3392__auto____7814)]);
if(or__3943__auto____7815)
{return or__3943__auto____7815;
} else
{var or__3943__auto____7816 = (cljs.core._conj_BANG_["_"]);
if(or__3943__auto____7816)
{return or__3943__auto____7816;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3941__auto____7821 = tcoll;
if(and__3941__auto____7821)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3941__auto____7821;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__3392__auto____7822 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7823 = (cljs.core._persistent_BANG_[goog.typeOf(x__3392__auto____7822)]);
if(or__3943__auto____7823)
{return or__3943__auto____7823;
} else
{var or__3943__auto____7824 = (cljs.core._persistent_BANG_["_"]);
if(or__3943__auto____7824)
{return or__3943__auto____7824;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3941__auto____7829 = tcoll;
if(and__3941__auto____7829)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3941__auto____7829;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__3392__auto____7830 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7831 = (cljs.core._assoc_BANG_[goog.typeOf(x__3392__auto____7830)]);
if(or__3943__auto____7831)
{return or__3943__auto____7831;
} else
{var or__3943__auto____7832 = (cljs.core._assoc_BANG_["_"]);
if(or__3943__auto____7832)
{return or__3943__auto____7832;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3941__auto____7837 = tcoll;
if(and__3941__auto____7837)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3941__auto____7837;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__3392__auto____7838 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7839 = (cljs.core._dissoc_BANG_[goog.typeOf(x__3392__auto____7838)]);
if(or__3943__auto____7839)
{return or__3943__auto____7839;
} else
{var or__3943__auto____7840 = (cljs.core._dissoc_BANG_["_"]);
if(or__3943__auto____7840)
{return or__3943__auto____7840;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3941__auto____7845 = tcoll;
if(and__3941__auto____7845)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3941__auto____7845;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__3392__auto____7846 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7847 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__3392__auto____7846)]);
if(or__3943__auto____7847)
{return or__3943__auto____7847;
} else
{var or__3943__auto____7848 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3943__auto____7848)
{return or__3943__auto____7848;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3941__auto____7853 = tcoll;
if(and__3941__auto____7853)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3941__auto____7853;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__3392__auto____7854 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7855 = (cljs.core._pop_BANG_[goog.typeOf(x__3392__auto____7854)]);
if(or__3943__auto____7855)
{return or__3943__auto____7855;
} else
{var or__3943__auto____7856 = (cljs.core._pop_BANG_["_"]);
if(or__3943__auto____7856)
{return or__3943__auto____7856;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3941__auto____7861 = tcoll;
if(and__3941__auto____7861)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3941__auto____7861;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__3392__auto____7862 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7863 = (cljs.core._disjoin_BANG_[goog.typeOf(x__3392__auto____7862)]);
if(or__3943__auto____7863)
{return or__3943__auto____7863;
} else
{var or__3943__auto____7864 = (cljs.core._disjoin_BANG_["_"]);
if(or__3943__auto____7864)
{return or__3943__auto____7864;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3941__auto____7869 = x;
if(and__3941__auto____7869)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3941__auto____7869;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__3392__auto____7870 = (((x == null))?null:x);
return (function (){var or__3943__auto____7871 = (cljs.core._compare[goog.typeOf(x__3392__auto____7870)]);
if(or__3943__auto____7871)
{return or__3943__auto____7871;
} else
{var or__3943__auto____7872 = (cljs.core._compare["_"]);
if(or__3943__auto____7872)
{return or__3943__auto____7872;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3941__auto____7877 = coll;
if(and__3941__auto____7877)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3941__auto____7877;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__3392__auto____7878 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7879 = (cljs.core._drop_first[goog.typeOf(x__3392__auto____7878)]);
if(or__3943__auto____7879)
{return or__3943__auto____7879;
} else
{var or__3943__auto____7880 = (cljs.core._drop_first["_"]);
if(or__3943__auto____7880)
{return or__3943__auto____7880;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3941__auto____7885 = coll;
if(and__3941__auto____7885)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3941__auto____7885;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__3392__auto____7886 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7887 = (cljs.core._chunked_first[goog.typeOf(x__3392__auto____7886)]);
if(or__3943__auto____7887)
{return or__3943__auto____7887;
} else
{var or__3943__auto____7888 = (cljs.core._chunked_first["_"]);
if(or__3943__auto____7888)
{return or__3943__auto____7888;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3941__auto____7893 = coll;
if(and__3941__auto____7893)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3941__auto____7893;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__3392__auto____7894 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7895 = (cljs.core._chunked_rest[goog.typeOf(x__3392__auto____7894)]);
if(or__3943__auto____7895)
{return or__3943__auto____7895;
} else
{var or__3943__auto____7896 = (cljs.core._chunked_rest["_"]);
if(or__3943__auto____7896)
{return or__3943__auto____7896;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3941__auto____7901 = coll;
if(and__3941__auto____7901)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3941__auto____7901;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__3392__auto____7902 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7903 = (cljs.core._chunked_next[goog.typeOf(x__3392__auto____7902)]);
if(or__3943__auto____7903)
{return or__3943__auto____7903;
} else
{var or__3943__auto____7904 = (cljs.core._chunked_next["_"]);
if(or__3943__auto____7904)
{return or__3943__auto____7904;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3943__auto____7906 = (x === y);
if(or__3943__auto____7906)
{return or__3943__auto____7906;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7907__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7908 = y;
var G__7909 = cljs.core.first.call(null,more);
var G__7910 = cljs.core.next.call(null,more);
x = G__7908;
y = G__7909;
more = G__7910;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7907 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7907__delegate.call(this, x, y, more);
};
G__7907.cljs$lang$maxFixedArity = 2;
G__7907.cljs$lang$applyTo = (function (arglist__7911){
var x = cljs.core.first(arglist__7911);
var y = cljs.core.first(cljs.core.next(arglist__7911));
var more = cljs.core.rest(cljs.core.next(arglist__7911));
return G__7907__delegate(x, y, more);
});
G__7907.cljs$lang$arity$variadic = G__7907__delegate;
return G__7907;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7912 = null;
var G__7912__2 = (function (o,k){
return null;
});
var G__7912__3 = (function (o,k,not_found){
return not_found;
});
G__7912 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7912__2.call(this,o,k);
case 3:
return G__7912__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7912;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7913 = null;
var G__7913__2 = (function (_,f){
return f.call(null);
});
var G__7913__3 = (function (_,f,start){
return start;
});
G__7913 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7913__2.call(this,_,f);
case 3:
return G__7913__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7913;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7914 = null;
var G__7914__2 = (function (_,n){
return null;
});
var G__7914__3 = (function (_,n,not_found){
return not_found;
});
G__7914 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7914__2.call(this,_,n);
case 3:
return G__7914__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7914;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3941__auto____7915 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3941__auto____7915)
{return (o.toString() === other.toString());
} else
{return and__3941__auto____7915;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7928 = cljs.core._count.call(null,cicoll);
if((cnt__7928 === 0))
{return f.call(null);
} else
{var val__7929 = cljs.core._nth.call(null,cicoll,0);
var n__7930 = 1;
while(true){
if((n__7930 < cnt__7928))
{var nval__7931 = f.call(null,val__7929,cljs.core._nth.call(null,cicoll,n__7930));
if(cljs.core.reduced_QMARK_.call(null,nval__7931))
{return cljs.core.deref.call(null,nval__7931);
} else
{{
var G__7940 = nval__7931;
var G__7941 = (n__7930 + 1);
val__7929 = G__7940;
n__7930 = G__7941;
continue;
}
}
} else
{return val__7929;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7932 = cljs.core._count.call(null,cicoll);
var val__7933 = val;
var n__7934 = 0;
while(true){
if((n__7934 < cnt__7932))
{var nval__7935 = f.call(null,val__7933,cljs.core._nth.call(null,cicoll,n__7934));
if(cljs.core.reduced_QMARK_.call(null,nval__7935))
{return cljs.core.deref.call(null,nval__7935);
} else
{{
var G__7942 = nval__7935;
var G__7943 = (n__7934 + 1);
val__7933 = G__7942;
n__7934 = G__7943;
continue;
}
}
} else
{return val__7933;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7936 = cljs.core._count.call(null,cicoll);
var val__7937 = val;
var n__7938 = idx;
while(true){
if((n__7938 < cnt__7936))
{var nval__7939 = f.call(null,val__7937,cljs.core._nth.call(null,cicoll,n__7938));
if(cljs.core.reduced_QMARK_.call(null,nval__7939))
{return cljs.core.deref.call(null,nval__7939);
} else
{{
var G__7944 = nval__7939;
var G__7945 = (n__7938 + 1);
val__7937 = G__7944;
n__7938 = G__7945;
continue;
}
}
} else
{return val__7937;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7958 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7959 = (arr[0]);
var n__7960 = 1;
while(true){
if((n__7960 < cnt__7958))
{var nval__7961 = f.call(null,val__7959,(arr[n__7960]));
if(cljs.core.reduced_QMARK_.call(null,nval__7961))
{return cljs.core.deref.call(null,nval__7961);
} else
{{
var G__7970 = nval__7961;
var G__7971 = (n__7960 + 1);
val__7959 = G__7970;
n__7960 = G__7971;
continue;
}
}
} else
{return val__7959;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7962 = arr.length;
var val__7963 = val;
var n__7964 = 0;
while(true){
if((n__7964 < cnt__7962))
{var nval__7965 = f.call(null,val__7963,(arr[n__7964]));
if(cljs.core.reduced_QMARK_.call(null,nval__7965))
{return cljs.core.deref.call(null,nval__7965);
} else
{{
var G__7972 = nval__7965;
var G__7973 = (n__7964 + 1);
val__7963 = G__7972;
n__7964 = G__7973;
continue;
}
}
} else
{return val__7963;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7966 = arr.length;
var val__7967 = val;
var n__7968 = idx;
while(true){
if((n__7968 < cnt__7966))
{var nval__7969 = f.call(null,val__7967,(arr[n__7968]));
if(cljs.core.reduced_QMARK_.call(null,nval__7969))
{return cljs.core.deref.call(null,nval__7969);
} else
{{
var G__7974 = nval__7969;
var G__7975 = (n__7968 + 1);
val__7967 = G__7974;
n__7968 = G__7975;
continue;
}
}
} else
{return val__7967;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7976 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7977 = this;
if(((this__7977.i + 1) < this__7977.a.length))
{return (new cljs.core.IndexedSeq(this__7977.a,(this__7977.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7978 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7979 = this;
var c__7980 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7980 > 0))
{return (new cljs.core.RSeq(coll,(c__7980 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7981 = this;
var this__7982 = this;
return cljs.core.pr_str.call(null,this__7982);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7983 = this;
if(cljs.core.counted_QMARK_.call(null,this__7983.a))
{return cljs.core.ci_reduce.call(null,this__7983.a,f,(this__7983.a[this__7983.i]),(this__7983.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7983.a[this__7983.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7984 = this;
if(cljs.core.counted_QMARK_.call(null,this__7984.a))
{return cljs.core.ci_reduce.call(null,this__7984.a,f,start,this__7984.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7985 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7986 = this;
return (this__7986.a.length - this__7986.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7987 = this;
return (this__7987.a[this__7987.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7988 = this;
if(((this__7988.i + 1) < this__7988.a.length))
{return (new cljs.core.IndexedSeq(this__7988.a,(this__7988.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7989 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7990 = this;
var i__7991 = (n + this__7990.i);
if((i__7991 < this__7990.a.length))
{return (this__7990.a[i__7991]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7992 = this;
var i__7993 = (n + this__7992.i);
if((i__7993 < this__7992.a.length))
{return (this__7992.a[i__7993]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7994 = null;
var G__7994__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7994__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7994 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7994__2.call(this,array,f);
case 3:
return G__7994__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7994;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7995 = null;
var G__7995__2 = (function (array,k){
return (array[k]);
});
var G__7995__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7995 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7995__2.call(this,array,k);
case 3:
return G__7995__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7995;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7996 = null;
var G__7996__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7996__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7996 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7996__2.call(this,array,n);
case 3:
return G__7996__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7996;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7997 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7998 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7999 = this;
var this__8000 = this;
return cljs.core.pr_str.call(null,this__8000);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8001 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8002 = this;
return (this__8002.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8003 = this;
return cljs.core._nth.call(null,this__8003.ci,this__8003.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8004 = this;
if((this__8004.i > 0))
{return (new cljs.core.RSeq(this__8004.ci,(this__8004.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8005 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__8006 = this;
return (new cljs.core.RSeq(this__8006.ci,this__8006.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8007 = this;
return this__8007.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8011__8012 = coll;
if(G__8011__8012)
{if((function (){var or__3943__auto____8013 = (G__8011__8012.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3943__auto____8013)
{return or__3943__auto____8013;
} else
{return G__8011__8012.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__8011__8012.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8011__8012);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8011__8012);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8018__8019 = coll;
if(G__8018__8019)
{if((function (){var or__3943__auto____8020 = (G__8018__8019.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____8020)
{return or__3943__auto____8020;
} else
{return G__8018__8019.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8018__8019.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8018__8019);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8018__8019);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__8021 = cljs.core.seq.call(null,coll);
if((s__8021 == null))
{return null;
} else
{return cljs.core._first.call(null,s__8021);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__8026__8027 = coll;
if(G__8026__8027)
{if((function (){var or__3943__auto____8028 = (G__8026__8027.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____8028)
{return or__3943__auto____8028;
} else
{return G__8026__8027.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8026__8027.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8026__8027);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8026__8027);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__8029 = cljs.core.seq.call(null,coll);
if(!((s__8029 == null)))
{return cljs.core._rest.call(null,s__8029);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8033__8034 = coll;
if(G__8033__8034)
{if((function (){var or__3943__auto____8035 = (G__8033__8034.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3943__auto____8035)
{return or__3943__auto____8035;
} else
{return G__8033__8034.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__8033__8034.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8033__8034);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8033__8034);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__8037 = cljs.core.next.call(null,s);
if(!((sn__8037 == null)))
{{
var G__8038 = sn__8037;
s = G__8038;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__8039__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8040 = conj.call(null,coll,x);
var G__8041 = cljs.core.first.call(null,xs);
var G__8042 = cljs.core.next.call(null,xs);
coll = G__8040;
x = G__8041;
xs = G__8042;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8039 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8039__delegate.call(this, coll, x, xs);
};
G__8039.cljs$lang$maxFixedArity = 2;
G__8039.cljs$lang$applyTo = (function (arglist__8043){
var coll = cljs.core.first(arglist__8043);
var x = cljs.core.first(cljs.core.next(arglist__8043));
var xs = cljs.core.rest(cljs.core.next(arglist__8043));
return G__8039__delegate(coll, x, xs);
});
G__8039.cljs$lang$arity$variadic = G__8039__delegate;
return G__8039;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__8046 = cljs.core.seq.call(null,coll);
var acc__8047 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__8046))
{return (acc__8047 + cljs.core._count.call(null,s__8046));
} else
{{
var G__8048 = cljs.core.next.call(null,s__8046);
var G__8049 = (acc__8047 + 1);
s__8046 = G__8048;
acc__8047 = G__8049;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__8056__8057 = coll;
if(G__8056__8057)
{if((function (){var or__3943__auto____8058 = (G__8056__8057.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____8058)
{return or__3943__auto____8058;
} else
{return G__8056__8057.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8056__8057.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8056__8057);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8056__8057);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__8059__8060 = coll;
if(G__8059__8060)
{if((function (){var or__3943__auto____8061 = (G__8059__8060.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____8061)
{return or__3943__auto____8061;
} else
{return G__8059__8060.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8059__8060.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8059__8060);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8059__8060);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__8064__delegate = function (coll,k,v,kvs){
while(true){
var ret__8063 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__8065 = ret__8063;
var G__8066 = cljs.core.first.call(null,kvs);
var G__8067 = cljs.core.second.call(null,kvs);
var G__8068 = cljs.core.nnext.call(null,kvs);
coll = G__8065;
k = G__8066;
v = G__8067;
kvs = G__8068;
continue;
}
} else
{return ret__8063;
}
break;
}
};
var G__8064 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8064__delegate.call(this, coll, k, v, kvs);
};
G__8064.cljs$lang$maxFixedArity = 3;
G__8064.cljs$lang$applyTo = (function (arglist__8069){
var coll = cljs.core.first(arglist__8069);
var k = cljs.core.first(cljs.core.next(arglist__8069));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8069)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8069)));
return G__8064__delegate(coll, k, v, kvs);
});
G__8064.cljs$lang$arity$variadic = G__8064__delegate;
return G__8064;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__8072__delegate = function (coll,k,ks){
while(true){
var ret__8071 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8073 = ret__8071;
var G__8074 = cljs.core.first.call(null,ks);
var G__8075 = cljs.core.next.call(null,ks);
coll = G__8073;
k = G__8074;
ks = G__8075;
continue;
}
} else
{return ret__8071;
}
break;
}
};
var G__8072 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8072__delegate.call(this, coll, k, ks);
};
G__8072.cljs$lang$maxFixedArity = 2;
G__8072.cljs$lang$applyTo = (function (arglist__8076){
var coll = cljs.core.first(arglist__8076);
var k = cljs.core.first(cljs.core.next(arglist__8076));
var ks = cljs.core.rest(cljs.core.next(arglist__8076));
return G__8072__delegate(coll, k, ks);
});
G__8072.cljs$lang$arity$variadic = G__8072__delegate;
return G__8072;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__8080__8081 = o;
if(G__8080__8081)
{if((function (){var or__3943__auto____8082 = (G__8080__8081.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____8082)
{return or__3943__auto____8082;
} else
{return G__8080__8081.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8080__8081.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8080__8081);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8080__8081);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__8085__delegate = function (coll,k,ks){
while(true){
var ret__8084 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8086 = ret__8084;
var G__8087 = cljs.core.first.call(null,ks);
var G__8088 = cljs.core.next.call(null,ks);
coll = G__8086;
k = G__8087;
ks = G__8088;
continue;
}
} else
{return ret__8084;
}
break;
}
};
var G__8085 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8085__delegate.call(this, coll, k, ks);
};
G__8085.cljs$lang$maxFixedArity = 2;
G__8085.cljs$lang$applyTo = (function (arglist__8089){
var coll = cljs.core.first(arglist__8089);
var k = cljs.core.first(cljs.core.next(arglist__8089));
var ks = cljs.core.rest(cljs.core.next(arglist__8089));
return G__8085__delegate(coll, k, ks);
});
G__8085.cljs$lang$arity$variadic = G__8085__delegate;
return G__8085;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__8091 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__8091);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__8091;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__8093 = (cljs.core.string_hash_cache[k]);
if(!((h__8093 == null)))
{return h__8093;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3941__auto____8095 = goog.isString(o);
if(and__3941__auto____8095)
{return check_cache;
} else
{return and__3941__auto____8095;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8099__8100 = x;
if(G__8099__8100)
{if((function (){var or__3943__auto____8101 = (G__8099__8100.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto____8101)
{return or__3943__auto____8101;
} else
{return G__8099__8100.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__8099__8100.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8099__8100);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8099__8100);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8105__8106 = x;
if(G__8105__8106)
{if((function (){var or__3943__auto____8107 = (G__8105__8106.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto____8107)
{return or__3943__auto____8107;
} else
{return G__8105__8106.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__8105__8106.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8105__8106);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8105__8106);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__8111__8112 = x;
if(G__8111__8112)
{if((function (){var or__3943__auto____8113 = (G__8111__8112.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3943__auto____8113)
{return or__3943__auto____8113;
} else
{return G__8111__8112.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__8111__8112.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8111__8112);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8111__8112);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__8117__8118 = x;
if(G__8117__8118)
{if((function (){var or__3943__auto____8119 = (G__8117__8118.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto____8119)
{return or__3943__auto____8119;
} else
{return G__8117__8118.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__8117__8118.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8117__8118);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8117__8118);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__8123__8124 = x;
if(G__8123__8124)
{if((function (){var or__3943__auto____8125 = (G__8123__8124.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3943__auto____8125)
{return or__3943__auto____8125;
} else
{return G__8123__8124.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__8123__8124.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8123__8124);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8123__8124);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__8129__8130 = x;
if(G__8129__8130)
{if((function (){var or__3943__auto____8131 = (G__8129__8130.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____8131)
{return or__3943__auto____8131;
} else
{return G__8129__8130.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8129__8130.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8129__8130);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8129__8130);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__8135__8136 = x;
if(G__8135__8136)
{if((function (){var or__3943__auto____8137 = (G__8135__8136.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____8137)
{return or__3943__auto____8137;
} else
{return G__8135__8136.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8135__8136.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8135__8136);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8135__8136);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8141__8142 = x;
if(G__8141__8142)
{if((function (){var or__3943__auto____8143 = (G__8141__8142.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto____8143)
{return or__3943__auto____8143;
} else
{return G__8141__8142.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__8141__8142.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8141__8142);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8141__8142);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__8147__8148 = x;
if(G__8147__8148)
{if((function (){var or__3943__auto____8149 = (G__8147__8148.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto____8149)
{return or__3943__auto____8149;
} else
{return G__8147__8148.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__8147__8148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8147__8148);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8147__8148);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__8153__8154 = x;
if(G__8153__8154)
{if(cljs.core.truth_((function (){var or__3943__auto____8155 = null;
if(cljs.core.truth_(or__3943__auto____8155))
{return or__3943__auto____8155;
} else
{return G__8153__8154.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__8153__8154.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8153__8154);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8153__8154);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__8156__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__8156 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8156__delegate.call(this, keyvals);
};
G__8156.cljs$lang$maxFixedArity = 0;
G__8156.cljs$lang$applyTo = (function (arglist__8157){
var keyvals = cljs.core.seq(arglist__8157);;
return G__8156__delegate(keyvals);
});
G__8156.cljs$lang$arity$variadic = G__8156__delegate;
return G__8156;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__8159 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__8159.push(key);
}));
return keys__8159;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__8163 = i;
var j__8164 = j;
var len__8165 = len;
while(true){
if((len__8165 === 0))
{return to;
} else
{(to[j__8164] = (from[i__8163]));
{
var G__8166 = (i__8163 + 1);
var G__8167 = (j__8164 + 1);
var G__8168 = (len__8165 - 1);
i__8163 = G__8166;
j__8164 = G__8167;
len__8165 = G__8168;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__8172 = (i + (len - 1));
var j__8173 = (j + (len - 1));
var len__8174 = len;
while(true){
if((len__8174 === 0))
{return to;
} else
{(to[j__8173] = (from[i__8172]));
{
var G__8175 = (i__8172 - 1);
var G__8176 = (j__8173 - 1);
var G__8177 = (len__8174 - 1);
i__8172 = G__8175;
j__8173 = G__8176;
len__8174 = G__8177;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__8181__8182 = s;
if(G__8181__8182)
{if((function (){var or__3943__auto____8183 = (G__8181__8182.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____8183)
{return or__3943__auto____8183;
} else
{return G__8181__8182.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8181__8182.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8181__8182);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8181__8182);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__8187__8188 = s;
if(G__8187__8188)
{if((function (){var or__3943__auto____8189 = (G__8187__8188.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____8189)
{return or__3943__auto____8189;
} else
{return G__8187__8188.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8187__8188.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8187__8188);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8187__8188);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3941__auto____8192 = goog.isString(x);
if(and__3941__auto____8192)
{return !((function (){var or__3943__auto____8193 = (x.charAt(0) === "\uFDD0");
if(or__3943__auto____8193)
{return or__3943__auto____8193;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3941__auto____8192;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3941__auto____8195 = goog.isString(x);
if(and__3941__auto____8195)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3941__auto____8195;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3941__auto____8197 = goog.isString(x);
if(and__3941__auto____8197)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3941__auto____8197;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3943__auto____8202 = cljs.core.fn_QMARK_.call(null,f);
if(or__3943__auto____8202)
{return or__3943__auto____8202;
} else
{var G__8203__8204 = f;
if(G__8203__8204)
{if((function (){var or__3943__auto____8205 = (G__8203__8204.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3943__auto____8205)
{return or__3943__auto____8205;
} else
{return G__8203__8204.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__8203__8204.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8203__8204);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8203__8204);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3941__auto____8207 = cljs.core.number_QMARK_.call(null,n);
if(and__3941__auto____8207)
{return (n == n.toFixed());
} else
{return and__3941__auto____8207;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3941__auto____8210 = coll;
if(cljs.core.truth_(and__3941__auto____8210))
{var and__3941__auto____8211 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3941__auto____8211)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3941__auto____8211;
}
} else
{return and__3941__auto____8210;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__8220__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__8216 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__8217 = more;
while(true){
var x__8218 = cljs.core.first.call(null,xs__8217);
var etc__8219 = cljs.core.next.call(null,xs__8217);
if(cljs.core.truth_(xs__8217))
{if(cljs.core.contains_QMARK_.call(null,s__8216,x__8218))
{return false;
} else
{{
var G__8221 = cljs.core.conj.call(null,s__8216,x__8218);
var G__8222 = etc__8219;
s__8216 = G__8221;
xs__8217 = G__8222;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__8220 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8220__delegate.call(this, x, y, more);
};
G__8220.cljs$lang$maxFixedArity = 2;
G__8220.cljs$lang$applyTo = (function (arglist__8223){
var x = cljs.core.first(arglist__8223);
var y = cljs.core.first(cljs.core.next(arglist__8223));
var more = cljs.core.rest(cljs.core.next(arglist__8223));
return G__8220__delegate(x, y, more);
});
G__8220.cljs$lang$arity$variadic = G__8220__delegate;
return G__8220;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__8227__8228 = x;
if(G__8227__8228)
{if(cljs.core.truth_((function (){var or__3943__auto____8229 = null;
if(cljs.core.truth_(or__3943__auto____8229))
{return or__3943__auto____8229;
} else
{return G__8227__8228.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__8227__8228.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8227__8228);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8227__8228);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__8234 = cljs.core.count.call(null,xs);
var yl__8235 = cljs.core.count.call(null,ys);
if((xl__8234 < yl__8235))
{return -1;
} else
{if((xl__8234 > yl__8235))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__8234,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__8236 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3941__auto____8237 = (d__8236 === 0);
if(and__3941__auto____8237)
{return ((n + 1) < len);
} else
{return and__3941__auto____8237;
}
})())
{{
var G__8238 = xs;
var G__8239 = ys;
var G__8240 = len;
var G__8241 = (n + 1);
xs = G__8238;
ys = G__8239;
len = G__8240;
n = G__8241;
continue;
}
} else
{return d__8236;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__8243 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__8243))
{return r__8243;
} else
{if(cljs.core.truth_(r__8243))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__8245 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__8245,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8245);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4090__auto____8251 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____8251)
{var s__8252 = temp__4090__auto____8251;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8252),cljs.core.next.call(null,s__8252));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__8253 = val;
var coll__8254 = cljs.core.seq.call(null,coll);
while(true){
if(coll__8254)
{var nval__8255 = f.call(null,val__8253,cljs.core.first.call(null,coll__8254));
if(cljs.core.reduced_QMARK_.call(null,nval__8255))
{return cljs.core.deref.call(null,nval__8255);
} else
{{
var G__8256 = nval__8255;
var G__8257 = cljs.core.next.call(null,coll__8254);
val__8253 = G__8256;
coll__8254 = G__8257;
continue;
}
}
} else
{return val__8253;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__8259 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__8259);
return cljs.core.vec.call(null,a__8259);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__8266__8267 = coll;
if(G__8266__8267)
{if((function (){var or__3943__auto____8268 = (G__8266__8267.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____8268)
{return or__3943__auto____8268;
} else
{return G__8266__8267.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8266__8267.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8266__8267);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8266__8267);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__8269__8270 = coll;
if(G__8269__8270)
{if((function (){var or__3943__auto____8271 = (G__8269__8270.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____8271)
{return or__3943__auto____8271;
} else
{return G__8269__8270.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8269__8270.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8269__8270);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8269__8270);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__8272 = this;
return this__8272.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__8273__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8273 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8273__delegate.call(this, x, y, more);
};
G__8273.cljs$lang$maxFixedArity = 2;
G__8273.cljs$lang$applyTo = (function (arglist__8274){
var x = cljs.core.first(arglist__8274);
var y = cljs.core.first(cljs.core.next(arglist__8274));
var more = cljs.core.rest(cljs.core.next(arglist__8274));
return G__8273__delegate(x, y, more);
});
G__8273.cljs$lang$arity$variadic = G__8273__delegate;
return G__8273;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__8275__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8275 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8275__delegate.call(this, x, y, more);
};
G__8275.cljs$lang$maxFixedArity = 2;
G__8275.cljs$lang$applyTo = (function (arglist__8276){
var x = cljs.core.first(arglist__8276);
var y = cljs.core.first(cljs.core.next(arglist__8276));
var more = cljs.core.rest(cljs.core.next(arglist__8276));
return G__8275__delegate(x, y, more);
});
G__8275.cljs$lang$arity$variadic = G__8275__delegate;
return G__8275;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__8277__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8277 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8277__delegate.call(this, x, y, more);
};
G__8277.cljs$lang$maxFixedArity = 2;
G__8277.cljs$lang$applyTo = (function (arglist__8278){
var x = cljs.core.first(arglist__8278);
var y = cljs.core.first(cljs.core.next(arglist__8278));
var more = cljs.core.rest(cljs.core.next(arglist__8278));
return G__8277__delegate(x, y, more);
});
G__8277.cljs$lang$arity$variadic = G__8277__delegate;
return G__8277;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__8279__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8279 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8279__delegate.call(this, x, y, more);
};
G__8279.cljs$lang$maxFixedArity = 2;
G__8279.cljs$lang$applyTo = (function (arglist__8280){
var x = cljs.core.first(arglist__8280);
var y = cljs.core.first(cljs.core.next(arglist__8280));
var more = cljs.core.rest(cljs.core.next(arglist__8280));
return G__8279__delegate(x, y, more);
});
G__8279.cljs$lang$arity$variadic = G__8279__delegate;
return G__8279;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__8281__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__8282 = y;
var G__8283 = cljs.core.first.call(null,more);
var G__8284 = cljs.core.next.call(null,more);
x = G__8282;
y = G__8283;
more = G__8284;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8281 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8281__delegate.call(this, x, y, more);
};
G__8281.cljs$lang$maxFixedArity = 2;
G__8281.cljs$lang$applyTo = (function (arglist__8285){
var x = cljs.core.first(arglist__8285);
var y = cljs.core.first(cljs.core.next(arglist__8285));
var more = cljs.core.rest(cljs.core.next(arglist__8285));
return G__8281__delegate(x, y, more);
});
G__8281.cljs$lang$arity$variadic = G__8281__delegate;
return G__8281;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__8286__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__8287 = y;
var G__8288 = cljs.core.first.call(null,more);
var G__8289 = cljs.core.next.call(null,more);
x = G__8287;
y = G__8288;
more = G__8289;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8286 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8286__delegate.call(this, x, y, more);
};
G__8286.cljs$lang$maxFixedArity = 2;
G__8286.cljs$lang$applyTo = (function (arglist__8290){
var x = cljs.core.first(arglist__8290);
var y = cljs.core.first(cljs.core.next(arglist__8290));
var more = cljs.core.rest(cljs.core.next(arglist__8290));
return G__8286__delegate(x, y, more);
});
G__8286.cljs$lang$arity$variadic = G__8286__delegate;
return G__8286;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__8291__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__8292 = y;
var G__8293 = cljs.core.first.call(null,more);
var G__8294 = cljs.core.next.call(null,more);
x = G__8292;
y = G__8293;
more = G__8294;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8291 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8291__delegate.call(this, x, y, more);
};
G__8291.cljs$lang$maxFixedArity = 2;
G__8291.cljs$lang$applyTo = (function (arglist__8295){
var x = cljs.core.first(arglist__8295);
var y = cljs.core.first(cljs.core.next(arglist__8295));
var more = cljs.core.rest(cljs.core.next(arglist__8295));
return G__8291__delegate(x, y, more);
});
G__8291.cljs$lang$arity$variadic = G__8291__delegate;
return G__8291;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__8296__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__8297 = y;
var G__8298 = cljs.core.first.call(null,more);
var G__8299 = cljs.core.next.call(null,more);
x = G__8297;
y = G__8298;
more = G__8299;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8296 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8296__delegate.call(this, x, y, more);
};
G__8296.cljs$lang$maxFixedArity = 2;
G__8296.cljs$lang$applyTo = (function (arglist__8300){
var x = cljs.core.first(arglist__8300);
var y = cljs.core.first(cljs.core.next(arglist__8300));
var more = cljs.core.rest(cljs.core.next(arglist__8300));
return G__8296__delegate(x, y, more);
});
G__8296.cljs$lang$arity$variadic = G__8296__delegate;
return G__8296;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__8301__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8301 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8301__delegate.call(this, x, y, more);
};
G__8301.cljs$lang$maxFixedArity = 2;
G__8301.cljs$lang$applyTo = (function (arglist__8302){
var x = cljs.core.first(arglist__8302);
var y = cljs.core.first(cljs.core.next(arglist__8302));
var more = cljs.core.rest(cljs.core.next(arglist__8302));
return G__8301__delegate(x, y, more);
});
G__8301.cljs$lang$arity$variadic = G__8301__delegate;
return G__8301;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__8303__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8303 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8303__delegate.call(this, x, y, more);
};
G__8303.cljs$lang$maxFixedArity = 2;
G__8303.cljs$lang$applyTo = (function (arglist__8304){
var x = cljs.core.first(arglist__8304);
var y = cljs.core.first(cljs.core.next(arglist__8304));
var more = cljs.core.rest(cljs.core.next(arglist__8304));
return G__8303__delegate(x, y, more);
});
G__8303.cljs$lang$arity$variadic = G__8303__delegate;
return G__8303;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__8306 = (n % d);
return cljs.core.fix.call(null,((n - rem__8306) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8308 = cljs.core.quot.call(null,n,d);
return (n - (d * q__8308));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__8311 = (v - ((v >> 1) & 1431655765));
var v__8312 = ((v__8311 & 858993459) + ((v__8311 >> 2) & 858993459));
return ((((v__8312 + (v__8312 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__8313__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8314 = y;
var G__8315 = cljs.core.first.call(null,more);
var G__8316 = cljs.core.next.call(null,more);
x = G__8314;
y = G__8315;
more = G__8316;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8313 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8313__delegate.call(this, x, y, more);
};
G__8313.cljs$lang$maxFixedArity = 2;
G__8313.cljs$lang$applyTo = (function (arglist__8317){
var x = cljs.core.first(arglist__8317);
var y = cljs.core.first(cljs.core.next(arglist__8317));
var more = cljs.core.rest(cljs.core.next(arglist__8317));
return G__8313__delegate(x, y, more);
});
G__8313.cljs$lang$arity$variadic = G__8313__delegate;
return G__8313;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__8321 = n;
var xs__8322 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8323 = xs__8322;
if(and__3941__auto____8323)
{return (n__8321 > 0);
} else
{return and__3941__auto____8323;
}
})()))
{{
var G__8324 = (n__8321 - 1);
var G__8325 = cljs.core.next.call(null,xs__8322);
n__8321 = G__8324;
xs__8322 = G__8325;
continue;
}
} else
{return xs__8322;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__8326__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8327 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8328 = cljs.core.next.call(null,more);
sb = G__8327;
more = G__8328;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8326 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8326__delegate.call(this, x, ys);
};
G__8326.cljs$lang$maxFixedArity = 1;
G__8326.cljs$lang$applyTo = (function (arglist__8329){
var x = cljs.core.first(arglist__8329);
var ys = cljs.core.rest(arglist__8329);
return G__8326__delegate(x, ys);
});
G__8326.cljs$lang$arity$variadic = G__8326__delegate;
return G__8326;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__8330__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8331 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8332 = cljs.core.next.call(null,more);
sb = G__8331;
more = G__8332;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8330 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8330__delegate.call(this, x, ys);
};
G__8330.cljs$lang$maxFixedArity = 1;
G__8330.cljs$lang$applyTo = (function (arglist__8333){
var x = cljs.core.first(arglist__8333);
var ys = cljs.core.rest(arglist__8333);
return G__8330__delegate(x, ys);
});
G__8330.cljs$lang$arity$variadic = G__8330__delegate;
return G__8330;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__8334){
var fmt = cljs.core.first(arglist__8334);
var args = cljs.core.rest(arglist__8334);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8337 = cljs.core.seq.call(null,x);
var ys__8338 = cljs.core.seq.call(null,y);
while(true){
if((xs__8337 == null))
{return (ys__8338 == null);
} else
{if((ys__8338 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8337),cljs.core.first.call(null,ys__8338)))
{{
var G__8339 = cljs.core.next.call(null,xs__8337);
var G__8340 = cljs.core.next.call(null,ys__8338);
xs__8337 = G__8339;
ys__8338 = G__8340;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__8341_SHARP_,p2__8342_SHARP_){
return cljs.core.hash_combine.call(null,p1__8341_SHARP_,cljs.core.hash.call(null,p2__8342_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__8346 = 0;
var s__8347 = cljs.core.seq.call(null,m);
while(true){
if(s__8347)
{var e__8348 = cljs.core.first.call(null,s__8347);
{
var G__8349 = ((h__8346 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8348)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8348)))) % 4503599627370496);
var G__8350 = cljs.core.next.call(null,s__8347);
h__8346 = G__8349;
s__8347 = G__8350;
continue;
}
} else
{return h__8346;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8354 = 0;
var s__8355 = cljs.core.seq.call(null,s);
while(true){
if(s__8355)
{var e__8356 = cljs.core.first.call(null,s__8355);
{
var G__8357 = ((h__8354 + cljs.core.hash.call(null,e__8356)) % 4503599627370496);
var G__8358 = cljs.core.next.call(null,s__8355);
h__8354 = G__8357;
s__8355 = G__8358;
continue;
}
} else
{return h__8354;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8379__8380 = cljs.core.seq.call(null,fn_map);
if(G__8379__8380)
{var G__8382__8384 = cljs.core.first.call(null,G__8379__8380);
var vec__8383__8385 = G__8382__8384;
var key_name__8386 = cljs.core.nth.call(null,vec__8383__8385,0,null);
var f__8387 = cljs.core.nth.call(null,vec__8383__8385,1,null);
var G__8379__8388 = G__8379__8380;
var G__8382__8389 = G__8382__8384;
var G__8379__8390 = G__8379__8388;
while(true){
var vec__8391__8392 = G__8382__8389;
var key_name__8393 = cljs.core.nth.call(null,vec__8391__8392,0,null);
var f__8394 = cljs.core.nth.call(null,vec__8391__8392,1,null);
var G__8379__8395 = G__8379__8390;
var str_name__8396 = cljs.core.name.call(null,key_name__8393);
(obj[str_name__8396] = f__8394);
var temp__4092__auto____8397 = cljs.core.next.call(null,G__8379__8395);
if(temp__4092__auto____8397)
{var G__8379__8398 = temp__4092__auto____8397;
{
var G__8399 = cljs.core.first.call(null,G__8379__8398);
var G__8400 = G__8379__8398;
G__8382__8389 = G__8399;
G__8379__8390 = G__8400;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8401 = this;
var h__3221__auto____8402 = this__8401.__hash;
if(!((h__3221__auto____8402 == null)))
{return h__3221__auto____8402;
} else
{var h__3221__auto____8403 = cljs.core.hash_coll.call(null,coll);
this__8401.__hash = h__3221__auto____8403;
return h__3221__auto____8403;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8404 = this;
if((this__8404.count === 1))
{return null;
} else
{return this__8404.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8405 = this;
return (new cljs.core.List(this__8405.meta,o,coll,(this__8405.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__8406 = this;
var this__8407 = this;
return cljs.core.pr_str.call(null,this__8407);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8408 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8409 = this;
return this__8409.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8410 = this;
return this__8410.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8411 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8412 = this;
return this__8412.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8413 = this;
if((this__8413.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__8413.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8414 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8415 = this;
return (new cljs.core.List(meta,this__8415.first,this__8415.rest,this__8415.count,this__8415.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8416 = this;
return this__8416.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8417 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8418 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8419 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8420 = this;
return (new cljs.core.List(this__8420.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8421 = this;
var this__8422 = this;
return cljs.core.pr_str.call(null,this__8422);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8423 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8424 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8425 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8426 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8427 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8428 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8429 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8430 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8431 = this;
return this__8431.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8432 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8436__8437 = coll;
if(G__8436__8437)
{if((function (){var or__3943__auto____8438 = (G__8436__8437.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3943__auto____8438)
{return or__3943__auto____8438;
} else
{return G__8436__8437.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8436__8437.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8436__8437);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8436__8437);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__8439__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__8439 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8439__delegate.call(this, x, y, z, items);
};
G__8439.cljs$lang$maxFixedArity = 3;
G__8439.cljs$lang$applyTo = (function (arglist__8440){
var x = cljs.core.first(arglist__8440);
var y = cljs.core.first(cljs.core.next(arglist__8440));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8440)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8440)));
return G__8439__delegate(x, y, z, items);
});
G__8439.cljs$lang$arity$variadic = G__8439__delegate;
return G__8439;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8441 = this;
var h__3221__auto____8442 = this__8441.__hash;
if(!((h__3221__auto____8442 == null)))
{return h__3221__auto____8442;
} else
{var h__3221__auto____8443 = cljs.core.hash_coll.call(null,coll);
this__8441.__hash = h__3221__auto____8443;
return h__3221__auto____8443;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8444 = this;
if((this__8444.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__8444.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8445 = this;
return (new cljs.core.Cons(null,o,coll,this__8445.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__8446 = this;
var this__8447 = this;
return cljs.core.pr_str.call(null,this__8447);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8448 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8449 = this;
return this__8449.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8450 = this;
if((this__8450.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8450.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8451 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8452 = this;
return (new cljs.core.Cons(meta,this__8452.first,this__8452.rest,this__8452.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8453 = this;
return this__8453.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8454 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8454.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3943__auto____8459 = (coll == null);
if(or__3943__auto____8459)
{return or__3943__auto____8459;
} else
{var G__8460__8461 = coll;
if(G__8460__8461)
{if((function (){var or__3943__auto____8462 = (G__8460__8461.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____8462)
{return or__3943__auto____8462;
} else
{return G__8460__8461.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8460__8461.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8460__8461);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8460__8461);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8466__8467 = x;
if(G__8466__8467)
{if((function (){var or__3943__auto____8468 = (G__8466__8467.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto____8468)
{return or__3943__auto____8468;
} else
{return G__8466__8467.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8466__8467.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8466__8467);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8466__8467);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8469 = null;
var G__8469__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8469__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8469 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8469__2.call(this,string,f);
case 3:
return G__8469__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8469;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8470 = null;
var G__8470__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8470__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8470 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8470__2.call(this,string,k);
case 3:
return G__8470__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8470;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8471 = null;
var G__8471__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8471__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8471 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8471__2.call(this,string,n);
case 3:
return G__8471__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8471;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__8483 = null;
var G__8483__2 = (function (this_sym8474,coll){
var this__8476 = this;
var this_sym8474__8477 = this;
var ___8478 = this_sym8474__8477;
if((coll == null))
{return null;
} else
{var strobj__8479 = coll.strobj;
if((strobj__8479 == null))
{return cljs.core._lookup.call(null,coll,this__8476.k,null);
} else
{return (strobj__8479[this__8476.k]);
}
}
});
var G__8483__3 = (function (this_sym8475,coll,not_found){
var this__8476 = this;
var this_sym8475__8480 = this;
var ___8481 = this_sym8475__8480;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__8476.k,not_found);
}
});
G__8483 = function(this_sym8475,coll,not_found){
switch(arguments.length){
case 2:
return G__8483__2.call(this,this_sym8475,coll);
case 3:
return G__8483__3.call(this,this_sym8475,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8483;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym8472,args8473){
var this__8482 = this;
return this_sym8472.call.apply(this_sym8472,[this_sym8472].concat(args8473.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8492 = null;
var G__8492__2 = (function (this_sym8486,coll){
var this_sym8486__8488 = this;
var this__8489 = this_sym8486__8488;
return cljs.core._lookup.call(null,coll,this__8489.toString(),null);
});
var G__8492__3 = (function (this_sym8487,coll,not_found){
var this_sym8487__8490 = this;
var this__8491 = this_sym8487__8490;
return cljs.core._lookup.call(null,coll,this__8491.toString(),not_found);
});
G__8492 = function(this_sym8487,coll,not_found){
switch(arguments.length){
case 2:
return G__8492__2.call(this,this_sym8487,coll);
case 3:
return G__8492__3.call(this,this_sym8487,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8492;
})()
;
String.prototype.apply = (function (this_sym8484,args8485){
return this_sym8484.call.apply(this_sym8484,[this_sym8484].concat(args8485.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8494 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8494;
} else
{lazy_seq.x = x__8494.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8495 = this;
var h__3221__auto____8496 = this__8495.__hash;
if(!((h__3221__auto____8496 == null)))
{return h__3221__auto____8496;
} else
{var h__3221__auto____8497 = cljs.core.hash_coll.call(null,coll);
this__8495.__hash = h__3221__auto____8497;
return h__3221__auto____8497;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8498 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8499 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8500 = this;
var this__8501 = this;
return cljs.core.pr_str.call(null,this__8501);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8502 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8503 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8504 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8505 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8506 = this;
return (new cljs.core.LazySeq(meta,this__8506.realized,this__8506.x,this__8506.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8507 = this;
return this__8507.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8508 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8508.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8509 = this;
return this__8509.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8510 = this;
var ___8511 = this;
(this__8510.buf[this__8510.end] = o);
return this__8510.end = (this__8510.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8512 = this;
var ___8513 = this;
var ret__8514 = (new cljs.core.ArrayChunk(this__8512.buf,0,this__8512.end));
this__8512.buf = null;
return ret__8514;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8515 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__8515.arr[this__8515.off]),(this__8515.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8516 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__8516.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8517 = this;
if((this__8517.off === this__8517.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8517.arr,(this__8517.off + 1),this__8517.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8518 = this;
return (this__8518.arr[(this__8518.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8519 = this;
if((function (){var and__3941__auto____8520 = (i >= 0);
if(and__3941__auto____8520)
{return (i < (this__8519.end - this__8519.off));
} else
{return and__3941__auto____8520;
}
})())
{return (this__8519.arr[(this__8519.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8521 = this;
return (this__8521.end - this__8521.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__8522 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8523 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8524 = this;
return cljs.core._nth.call(null,this__8524.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8525 = this;
if((cljs.core._count.call(null,this__8525.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__8525.chunk),this__8525.more,this__8525.meta));
} else
{if((this__8525.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8525.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8526 = this;
if((this__8526.more == null))
{return null;
} else
{return this__8526.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8527 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8528 = this;
return (new cljs.core.ChunkedCons(this__8528.chunk,this__8528.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8529 = this;
return this__8529.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8530 = this;
return this__8530.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8531 = this;
if((this__8531.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8531.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__8535__8536 = s;
if(G__8535__8536)
{if(cljs.core.truth_((function (){var or__3943__auto____8537 = null;
if(cljs.core.truth_(or__3943__auto____8537))
{return or__3943__auto____8537;
} else
{return G__8535__8536.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8535__8536.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8535__8536);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8535__8536);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8540 = [];
var s__8541 = s;
while(true){
if(cljs.core.seq.call(null,s__8541))
{ary__8540.push(cljs.core.first.call(null,s__8541));
{
var G__8542 = cljs.core.next.call(null,s__8541);
s__8541 = G__8542;
continue;
}
} else
{return ary__8540;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8546 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8547 = 0;
var xs__8548 = cljs.core.seq.call(null,coll);
while(true){
if(xs__8548)
{(ret__8546[i__8547] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8548)));
{
var G__8549 = (i__8547 + 1);
var G__8550 = cljs.core.next.call(null,xs__8548);
i__8547 = G__8549;
xs__8548 = G__8550;
continue;
}
} else
{}
break;
}
return ret__8546;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__8558 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8559 = cljs.core.seq.call(null,init_val_or_seq);
var i__8560 = 0;
var s__8561 = s__8559;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8562 = s__8561;
if(and__3941__auto____8562)
{return (i__8560 < size);
} else
{return and__3941__auto____8562;
}
})()))
{(a__8558[i__8560] = cljs.core.first.call(null,s__8561));
{
var G__8565 = (i__8560 + 1);
var G__8566 = cljs.core.next.call(null,s__8561);
i__8560 = G__8565;
s__8561 = G__8566;
continue;
}
} else
{return a__8558;
}
break;
}
} else
{var n__3556__auto____8563 = size;
var i__8564 = 0;
while(true){
if((i__8564 < n__3556__auto____8563))
{(a__8558[i__8564] = init_val_or_seq);
{
var G__8567 = (i__8564 + 1);
i__8564 = G__8567;
continue;
}
} else
{}
break;
}
return a__8558;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__8575 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8576 = cljs.core.seq.call(null,init_val_or_seq);
var i__8577 = 0;
var s__8578 = s__8576;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8579 = s__8578;
if(and__3941__auto____8579)
{return (i__8577 < size);
} else
{return and__3941__auto____8579;
}
})()))
{(a__8575[i__8577] = cljs.core.first.call(null,s__8578));
{
var G__8582 = (i__8577 + 1);
var G__8583 = cljs.core.next.call(null,s__8578);
i__8577 = G__8582;
s__8578 = G__8583;
continue;
}
} else
{return a__8575;
}
break;
}
} else
{var n__3556__auto____8580 = size;
var i__8581 = 0;
while(true){
if((i__8581 < n__3556__auto____8580))
{(a__8575[i__8581] = init_val_or_seq);
{
var G__8584 = (i__8581 + 1);
i__8581 = G__8584;
continue;
}
} else
{}
break;
}
return a__8575;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__8592 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8593 = cljs.core.seq.call(null,init_val_or_seq);
var i__8594 = 0;
var s__8595 = s__8593;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8596 = s__8595;
if(and__3941__auto____8596)
{return (i__8594 < size);
} else
{return and__3941__auto____8596;
}
})()))
{(a__8592[i__8594] = cljs.core.first.call(null,s__8595));
{
var G__8599 = (i__8594 + 1);
var G__8600 = cljs.core.next.call(null,s__8595);
i__8594 = G__8599;
s__8595 = G__8600;
continue;
}
} else
{return a__8592;
}
break;
}
} else
{var n__3556__auto____8597 = size;
var i__8598 = 0;
while(true){
if((i__8598 < n__3556__auto____8597))
{(a__8592[i__8598] = init_val_or_seq);
{
var G__8601 = (i__8598 + 1);
i__8598 = G__8601;
continue;
}
} else
{}
break;
}
return a__8592;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__8606 = s;
var i__8607 = n;
var sum__8608 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8609 = (i__8607 > 0);
if(and__3941__auto____8609)
{return cljs.core.seq.call(null,s__8606);
} else
{return and__3941__auto____8609;
}
})()))
{{
var G__8610 = cljs.core.next.call(null,s__8606);
var G__8611 = (i__8607 - 1);
var G__8612 = (sum__8608 + 1);
s__8606 = G__8610;
i__8607 = G__8611;
sum__8608 = G__8612;
continue;
}
} else
{return sum__8608;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8617 = cljs.core.seq.call(null,x);
if(s__8617)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__8617))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__8617),concat.call(null,cljs.core.chunk_rest.call(null,s__8617),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8617),concat.call(null,cljs.core.rest.call(null,s__8617),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__8621__delegate = function (x,y,zs){
var cat__8620 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8619 = cljs.core.seq.call(null,xys);
if(xys__8619)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__8619))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__8619),cat.call(null,cljs.core.chunk_rest.call(null,xys__8619),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8619),cat.call(null,cljs.core.rest.call(null,xys__8619),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__8620.call(null,concat.call(null,x,y),zs);
};
var G__8621 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8621__delegate.call(this, x, y, zs);
};
G__8621.cljs$lang$maxFixedArity = 2;
G__8621.cljs$lang$applyTo = (function (arglist__8622){
var x = cljs.core.first(arglist__8622);
var y = cljs.core.first(cljs.core.next(arglist__8622));
var zs = cljs.core.rest(cljs.core.next(arglist__8622));
return G__8621__delegate(x, y, zs);
});
G__8621.cljs$lang$arity$variadic = G__8621__delegate;
return G__8621;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__8623__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8623 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8623__delegate.call(this, a, b, c, d, more);
};
G__8623.cljs$lang$maxFixedArity = 4;
G__8623.cljs$lang$applyTo = (function (arglist__8624){
var a = cljs.core.first(arglist__8624);
var b = cljs.core.first(cljs.core.next(arglist__8624));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8624)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8624))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8624))));
return G__8623__delegate(a, b, c, d, more);
});
G__8623.cljs$lang$arity$variadic = G__8623__delegate;
return G__8623;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__8666 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__8667 = cljs.core._first.call(null,args__8666);
var args__8668 = cljs.core._rest.call(null,args__8666);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8667);
} else
{return f.call(null,a__8667);
}
} else
{var b__8669 = cljs.core._first.call(null,args__8668);
var args__8670 = cljs.core._rest.call(null,args__8668);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8667,b__8669);
} else
{return f.call(null,a__8667,b__8669);
}
} else
{var c__8671 = cljs.core._first.call(null,args__8670);
var args__8672 = cljs.core._rest.call(null,args__8670);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8667,b__8669,c__8671);
} else
{return f.call(null,a__8667,b__8669,c__8671);
}
} else
{var d__8673 = cljs.core._first.call(null,args__8672);
var args__8674 = cljs.core._rest.call(null,args__8672);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8667,b__8669,c__8671,d__8673);
} else
{return f.call(null,a__8667,b__8669,c__8671,d__8673);
}
} else
{var e__8675 = cljs.core._first.call(null,args__8674);
var args__8676 = cljs.core._rest.call(null,args__8674);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8667,b__8669,c__8671,d__8673,e__8675);
} else
{return f.call(null,a__8667,b__8669,c__8671,d__8673,e__8675);
}
} else
{var f__8677 = cljs.core._first.call(null,args__8676);
var args__8678 = cljs.core._rest.call(null,args__8676);
if((argc === 6))
{if(f__8677.cljs$lang$arity$6)
{return f__8677.cljs$lang$arity$6(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677);
}
} else
{var g__8679 = cljs.core._first.call(null,args__8678);
var args__8680 = cljs.core._rest.call(null,args__8678);
if((argc === 7))
{if(f__8677.cljs$lang$arity$7)
{return f__8677.cljs$lang$arity$7(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679);
}
} else
{var h__8681 = cljs.core._first.call(null,args__8680);
var args__8682 = cljs.core._rest.call(null,args__8680);
if((argc === 8))
{if(f__8677.cljs$lang$arity$8)
{return f__8677.cljs$lang$arity$8(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681);
}
} else
{var i__8683 = cljs.core._first.call(null,args__8682);
var args__8684 = cljs.core._rest.call(null,args__8682);
if((argc === 9))
{if(f__8677.cljs$lang$arity$9)
{return f__8677.cljs$lang$arity$9(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683);
}
} else
{var j__8685 = cljs.core._first.call(null,args__8684);
var args__8686 = cljs.core._rest.call(null,args__8684);
if((argc === 10))
{if(f__8677.cljs$lang$arity$10)
{return f__8677.cljs$lang$arity$10(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685);
}
} else
{var k__8687 = cljs.core._first.call(null,args__8686);
var args__8688 = cljs.core._rest.call(null,args__8686);
if((argc === 11))
{if(f__8677.cljs$lang$arity$11)
{return f__8677.cljs$lang$arity$11(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687);
}
} else
{var l__8689 = cljs.core._first.call(null,args__8688);
var args__8690 = cljs.core._rest.call(null,args__8688);
if((argc === 12))
{if(f__8677.cljs$lang$arity$12)
{return f__8677.cljs$lang$arity$12(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689);
}
} else
{var m__8691 = cljs.core._first.call(null,args__8690);
var args__8692 = cljs.core._rest.call(null,args__8690);
if((argc === 13))
{if(f__8677.cljs$lang$arity$13)
{return f__8677.cljs$lang$arity$13(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691);
}
} else
{var n__8693 = cljs.core._first.call(null,args__8692);
var args__8694 = cljs.core._rest.call(null,args__8692);
if((argc === 14))
{if(f__8677.cljs$lang$arity$14)
{return f__8677.cljs$lang$arity$14(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693);
}
} else
{var o__8695 = cljs.core._first.call(null,args__8694);
var args__8696 = cljs.core._rest.call(null,args__8694);
if((argc === 15))
{if(f__8677.cljs$lang$arity$15)
{return f__8677.cljs$lang$arity$15(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695);
}
} else
{var p__8697 = cljs.core._first.call(null,args__8696);
var args__8698 = cljs.core._rest.call(null,args__8696);
if((argc === 16))
{if(f__8677.cljs$lang$arity$16)
{return f__8677.cljs$lang$arity$16(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697);
}
} else
{var q__8699 = cljs.core._first.call(null,args__8698);
var args__8700 = cljs.core._rest.call(null,args__8698);
if((argc === 17))
{if(f__8677.cljs$lang$arity$17)
{return f__8677.cljs$lang$arity$17(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697,q__8699);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697,q__8699);
}
} else
{var r__8701 = cljs.core._first.call(null,args__8700);
var args__8702 = cljs.core._rest.call(null,args__8700);
if((argc === 18))
{if(f__8677.cljs$lang$arity$18)
{return f__8677.cljs$lang$arity$18(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697,q__8699,r__8701);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697,q__8699,r__8701);
}
} else
{var s__8703 = cljs.core._first.call(null,args__8702);
var args__8704 = cljs.core._rest.call(null,args__8702);
if((argc === 19))
{if(f__8677.cljs$lang$arity$19)
{return f__8677.cljs$lang$arity$19(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697,q__8699,r__8701,s__8703);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697,q__8699,r__8701,s__8703);
}
} else
{var t__8705 = cljs.core._first.call(null,args__8704);
var args__8706 = cljs.core._rest.call(null,args__8704);
if((argc === 20))
{if(f__8677.cljs$lang$arity$20)
{return f__8677.cljs$lang$arity$20(a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697,q__8699,r__8701,s__8703,t__8705);
} else
{return f__8677.call(null,a__8667,b__8669,c__8671,d__8673,e__8675,f__8677,g__8679,h__8681,i__8683,j__8685,k__8687,l__8689,m__8691,n__8693,o__8695,p__8697,q__8699,r__8701,s__8703,t__8705);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__8721 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8722 = cljs.core.bounded_count.call(null,args,(fixed_arity__8721 + 1));
if((bc__8722 <= fixed_arity__8721))
{return cljs.core.apply_to.call(null,f,bc__8722,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8723 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8724 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8725 = cljs.core.bounded_count.call(null,arglist__8723,(fixed_arity__8724 + 1));
if((bc__8725 <= fixed_arity__8724))
{return cljs.core.apply_to.call(null,f,bc__8725,arglist__8723);
} else
{return f.cljs$lang$applyTo(arglist__8723);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8723));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8726 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8727 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8728 = cljs.core.bounded_count.call(null,arglist__8726,(fixed_arity__8727 + 1));
if((bc__8728 <= fixed_arity__8727))
{return cljs.core.apply_to.call(null,f,bc__8728,arglist__8726);
} else
{return f.cljs$lang$applyTo(arglist__8726);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8726));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8729 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8730 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8731 = cljs.core.bounded_count.call(null,arglist__8729,(fixed_arity__8730 + 1));
if((bc__8731 <= fixed_arity__8730))
{return cljs.core.apply_to.call(null,f,bc__8731,arglist__8729);
} else
{return f.cljs$lang$applyTo(arglist__8729);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8729));
}
});
var apply__6 = (function() { 
var G__8735__delegate = function (f,a,b,c,d,args){
var arglist__8732 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8733 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8734 = cljs.core.bounded_count.call(null,arglist__8732,(fixed_arity__8733 + 1));
if((bc__8734 <= fixed_arity__8733))
{return cljs.core.apply_to.call(null,f,bc__8734,arglist__8732);
} else
{return f.cljs$lang$applyTo(arglist__8732);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8732));
}
};
var G__8735 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8735__delegate.call(this, f, a, b, c, d, args);
};
G__8735.cljs$lang$maxFixedArity = 5;
G__8735.cljs$lang$applyTo = (function (arglist__8736){
var f = cljs.core.first(arglist__8736);
var a = cljs.core.first(cljs.core.next(arglist__8736));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8736)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8736))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8736)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8736)))));
return G__8735__delegate(f, a, b, c, d, args);
});
G__8735.cljs$lang$arity$variadic = G__8735__delegate;
return G__8735;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__8737){
var obj = cljs.core.first(arglist__8737);
var f = cljs.core.first(cljs.core.next(arglist__8737));
var args = cljs.core.rest(cljs.core.next(arglist__8737));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__8738__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8738 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8738__delegate.call(this, x, y, more);
};
G__8738.cljs$lang$maxFixedArity = 2;
G__8738.cljs$lang$applyTo = (function (arglist__8739){
var x = cljs.core.first(arglist__8739);
var y = cljs.core.first(cljs.core.next(arglist__8739));
var more = cljs.core.rest(cljs.core.next(arglist__8739));
return G__8738__delegate(x, y, more);
});
G__8738.cljs$lang$arity$variadic = G__8738__delegate;
return G__8738;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__8740 = pred;
var G__8741 = cljs.core.next.call(null,coll);
pred = G__8740;
coll = G__8741;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3943__auto____8743 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3943__auto____8743))
{return or__3943__auto____8743;
} else
{{
var G__8744 = pred;
var G__8745 = cljs.core.next.call(null,coll);
pred = G__8744;
coll = G__8745;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__8746 = null;
var G__8746__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8746__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8746__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8746__3 = (function() { 
var G__8747__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8747 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8747__delegate.call(this, x, y, zs);
};
G__8747.cljs$lang$maxFixedArity = 2;
G__8747.cljs$lang$applyTo = (function (arglist__8748){
var x = cljs.core.first(arglist__8748);
var y = cljs.core.first(cljs.core.next(arglist__8748));
var zs = cljs.core.rest(cljs.core.next(arglist__8748));
return G__8747__delegate(x, y, zs);
});
G__8747.cljs$lang$arity$variadic = G__8747__delegate;
return G__8747;
})()
;
G__8746 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8746__0.call(this);
case 1:
return G__8746__1.call(this,x);
case 2:
return G__8746__2.call(this,x,y);
default:
return G__8746__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8746.cljs$lang$maxFixedArity = 2;
G__8746.cljs$lang$applyTo = G__8746__3.cljs$lang$applyTo;
return G__8746;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8749__delegate = function (args){
return x;
};
var G__8749 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8749__delegate.call(this, args);
};
G__8749.cljs$lang$maxFixedArity = 0;
G__8749.cljs$lang$applyTo = (function (arglist__8750){
var args = cljs.core.seq(arglist__8750);;
return G__8749__delegate(args);
});
G__8749.cljs$lang$arity$variadic = G__8749__delegate;
return G__8749;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__8757 = null;
var G__8757__0 = (function (){
return f.call(null,g.call(null));
});
var G__8757__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8757__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8757__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8757__4 = (function() { 
var G__8758__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8758 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8758__delegate.call(this, x, y, z, args);
};
G__8758.cljs$lang$maxFixedArity = 3;
G__8758.cljs$lang$applyTo = (function (arglist__8759){
var x = cljs.core.first(arglist__8759);
var y = cljs.core.first(cljs.core.next(arglist__8759));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8759)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8759)));
return G__8758__delegate(x, y, z, args);
});
G__8758.cljs$lang$arity$variadic = G__8758__delegate;
return G__8758;
})()
;
G__8757 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8757__0.call(this);
case 1:
return G__8757__1.call(this,x);
case 2:
return G__8757__2.call(this,x,y);
case 3:
return G__8757__3.call(this,x,y,z);
default:
return G__8757__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8757.cljs$lang$maxFixedArity = 3;
G__8757.cljs$lang$applyTo = G__8757__4.cljs$lang$applyTo;
return G__8757;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8760 = null;
var G__8760__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8760__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8760__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8760__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8760__4 = (function() { 
var G__8761__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8761 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8761__delegate.call(this, x, y, z, args);
};
G__8761.cljs$lang$maxFixedArity = 3;
G__8761.cljs$lang$applyTo = (function (arglist__8762){
var x = cljs.core.first(arglist__8762);
var y = cljs.core.first(cljs.core.next(arglist__8762));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8762)));
return G__8761__delegate(x, y, z, args);
});
G__8761.cljs$lang$arity$variadic = G__8761__delegate;
return G__8761;
})()
;
G__8760 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8760__0.call(this);
case 1:
return G__8760__1.call(this,x);
case 2:
return G__8760__2.call(this,x,y);
case 3:
return G__8760__3.call(this,x,y,z);
default:
return G__8760__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8760.cljs$lang$maxFixedArity = 3;
G__8760.cljs$lang$applyTo = G__8760__4.cljs$lang$applyTo;
return G__8760;
})()
});
var comp__4 = (function() { 
var G__8763__delegate = function (f1,f2,f3,fs){
var fs__8754 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__8764__delegate = function (args){
var ret__8755 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8754),args);
var fs__8756 = cljs.core.next.call(null,fs__8754);
while(true){
if(fs__8756)
{{
var G__8765 = cljs.core.first.call(null,fs__8756).call(null,ret__8755);
var G__8766 = cljs.core.next.call(null,fs__8756);
ret__8755 = G__8765;
fs__8756 = G__8766;
continue;
}
} else
{return ret__8755;
}
break;
}
};
var G__8764 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8764__delegate.call(this, args);
};
G__8764.cljs$lang$maxFixedArity = 0;
G__8764.cljs$lang$applyTo = (function (arglist__8767){
var args = cljs.core.seq(arglist__8767);;
return G__8764__delegate(args);
});
G__8764.cljs$lang$arity$variadic = G__8764__delegate;
return G__8764;
})()
;
};
var G__8763 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8763__delegate.call(this, f1, f2, f3, fs);
};
G__8763.cljs$lang$maxFixedArity = 3;
G__8763.cljs$lang$applyTo = (function (arglist__8768){
var f1 = cljs.core.first(arglist__8768);
var f2 = cljs.core.first(cljs.core.next(arglist__8768));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8768)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8768)));
return G__8763__delegate(f1, f2, f3, fs);
});
G__8763.cljs$lang$arity$variadic = G__8763__delegate;
return G__8763;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__8769__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8769 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8769__delegate.call(this, args);
};
G__8769.cljs$lang$maxFixedArity = 0;
G__8769.cljs$lang$applyTo = (function (arglist__8770){
var args = cljs.core.seq(arglist__8770);;
return G__8769__delegate(args);
});
G__8769.cljs$lang$arity$variadic = G__8769__delegate;
return G__8769;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8771__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8771 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8771__delegate.call(this, args);
};
G__8771.cljs$lang$maxFixedArity = 0;
G__8771.cljs$lang$applyTo = (function (arglist__8772){
var args = cljs.core.seq(arglist__8772);;
return G__8771__delegate(args);
});
G__8771.cljs$lang$arity$variadic = G__8771__delegate;
return G__8771;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8773__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8773 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8773__delegate.call(this, args);
};
G__8773.cljs$lang$maxFixedArity = 0;
G__8773.cljs$lang$applyTo = (function (arglist__8774){
var args = cljs.core.seq(arglist__8774);;
return G__8773__delegate(args);
});
G__8773.cljs$lang$arity$variadic = G__8773__delegate;
return G__8773;
})()
;
});
var partial__5 = (function() { 
var G__8775__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8776__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8776 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8776__delegate.call(this, args);
};
G__8776.cljs$lang$maxFixedArity = 0;
G__8776.cljs$lang$applyTo = (function (arglist__8777){
var args = cljs.core.seq(arglist__8777);;
return G__8776__delegate(args);
});
G__8776.cljs$lang$arity$variadic = G__8776__delegate;
return G__8776;
})()
;
};
var G__8775 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8775__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8775.cljs$lang$maxFixedArity = 4;
G__8775.cljs$lang$applyTo = (function (arglist__8778){
var f = cljs.core.first(arglist__8778);
var arg1 = cljs.core.first(cljs.core.next(arglist__8778));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8778)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8778))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8778))));
return G__8775__delegate(f, arg1, arg2, arg3, more);
});
G__8775.cljs$lang$arity$variadic = G__8775__delegate;
return G__8775;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__8779 = null;
var G__8779__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__8779__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__8779__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__8779__4 = (function() { 
var G__8780__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__8780 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8780__delegate.call(this, a, b, c, ds);
};
G__8780.cljs$lang$maxFixedArity = 3;
G__8780.cljs$lang$applyTo = (function (arglist__8781){
var a = cljs.core.first(arglist__8781);
var b = cljs.core.first(cljs.core.next(arglist__8781));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8781)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8781)));
return G__8780__delegate(a, b, c, ds);
});
G__8780.cljs$lang$arity$variadic = G__8780__delegate;
return G__8780;
})()
;
G__8779 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8779__1.call(this,a);
case 2:
return G__8779__2.call(this,a,b);
case 3:
return G__8779__3.call(this,a,b,c);
default:
return G__8779__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8779.cljs$lang$maxFixedArity = 3;
G__8779.cljs$lang$applyTo = G__8779__4.cljs$lang$applyTo;
return G__8779;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8782 = null;
var G__8782__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8782__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__8782__4 = (function() { 
var G__8783__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8783 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8783__delegate.call(this, a, b, c, ds);
};
G__8783.cljs$lang$maxFixedArity = 3;
G__8783.cljs$lang$applyTo = (function (arglist__8784){
var a = cljs.core.first(arglist__8784);
var b = cljs.core.first(cljs.core.next(arglist__8784));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8784)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8784)));
return G__8783__delegate(a, b, c, ds);
});
G__8783.cljs$lang$arity$variadic = G__8783__delegate;
return G__8783;
})()
;
G__8782 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8782__2.call(this,a,b);
case 3:
return G__8782__3.call(this,a,b,c);
default:
return G__8782__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8782.cljs$lang$maxFixedArity = 3;
G__8782.cljs$lang$applyTo = G__8782__4.cljs$lang$applyTo;
return G__8782;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8785 = null;
var G__8785__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8785__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__8785__4 = (function() { 
var G__8786__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8786 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8786__delegate.call(this, a, b, c, ds);
};
G__8786.cljs$lang$maxFixedArity = 3;
G__8786.cljs$lang$applyTo = (function (arglist__8787){
var a = cljs.core.first(arglist__8787);
var b = cljs.core.first(cljs.core.next(arglist__8787));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8787)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8787)));
return G__8786__delegate(a, b, c, ds);
});
G__8786.cljs$lang$arity$variadic = G__8786__delegate;
return G__8786;
})()
;
G__8785 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8785__2.call(this,a,b);
case 3:
return G__8785__3.call(this,a,b,c);
default:
return G__8785__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8785.cljs$lang$maxFixedArity = 3;
G__8785.cljs$lang$applyTo = G__8785__4.cljs$lang$applyTo;
return G__8785;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8803 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8811 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8811)
{var s__8812 = temp__4092__auto____8811;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8812))
{var c__8813 = cljs.core.chunk_first.call(null,s__8812);
var size__8814 = cljs.core.count.call(null,c__8813);
var b__8815 = cljs.core.chunk_buffer.call(null,size__8814);
var n__3556__auto____8816 = size__8814;
var i__8817 = 0;
while(true){
if((i__8817 < n__3556__auto____8816))
{cljs.core.chunk_append.call(null,b__8815,f.call(null,(idx + i__8817),cljs.core._nth.call(null,c__8813,i__8817)));
{
var G__8818 = (i__8817 + 1);
i__8817 = G__8818;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8815),mapi.call(null,(idx + size__8814),cljs.core.chunk_rest.call(null,s__8812)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8812)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__8812)));
}
} else
{return null;
}
}),null));
});
return mapi__8803.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8828 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8828)
{var s__8829 = temp__4092__auto____8828;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8829))
{var c__8830 = cljs.core.chunk_first.call(null,s__8829);
var size__8831 = cljs.core.count.call(null,c__8830);
var b__8832 = cljs.core.chunk_buffer.call(null,size__8831);
var n__3556__auto____8833 = size__8831;
var i__8834 = 0;
while(true){
if((i__8834 < n__3556__auto____8833))
{var x__8835 = f.call(null,cljs.core._nth.call(null,c__8830,i__8834));
if((x__8835 == null))
{} else
{cljs.core.chunk_append.call(null,b__8832,x__8835);
}
{
var G__8837 = (i__8834 + 1);
i__8834 = G__8837;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8832),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8829)));
} else
{var x__8836 = f.call(null,cljs.core.first.call(null,s__8829));
if((x__8836 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8829));
} else
{return cljs.core.cons.call(null,x__8836,keep.call(null,f,cljs.core.rest.call(null,s__8829)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8863 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8873 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8873)
{var s__8874 = temp__4092__auto____8873;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8874))
{var c__8875 = cljs.core.chunk_first.call(null,s__8874);
var size__8876 = cljs.core.count.call(null,c__8875);
var b__8877 = cljs.core.chunk_buffer.call(null,size__8876);
var n__3556__auto____8878 = size__8876;
var i__8879 = 0;
while(true){
if((i__8879 < n__3556__auto____8878))
{var x__8880 = f.call(null,(idx + i__8879),cljs.core._nth.call(null,c__8875,i__8879));
if((x__8880 == null))
{} else
{cljs.core.chunk_append.call(null,b__8877,x__8880);
}
{
var G__8882 = (i__8879 + 1);
i__8879 = G__8882;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8877),keepi.call(null,(idx + size__8876),cljs.core.chunk_rest.call(null,s__8874)));
} else
{var x__8881 = f.call(null,idx,cljs.core.first.call(null,s__8874));
if((x__8881 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8874));
} else
{return cljs.core.cons.call(null,x__8881,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8874)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8863.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8968 = p.call(null,x);
if(cljs.core.truth_(and__3941__auto____8968))
{return p.call(null,y);
} else
{return and__3941__auto____8968;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8969 = p.call(null,x);
if(cljs.core.truth_(and__3941__auto____8969))
{var and__3941__auto____8970 = p.call(null,y);
if(cljs.core.truth_(and__3941__auto____8970))
{return p.call(null,z);
} else
{return and__3941__auto____8970;
}
} else
{return and__3941__auto____8969;
}
})());
});
var ep1__4 = (function() { 
var G__9039__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8971 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____8971))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3941__auto____8971;
}
})());
};
var G__9039 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9039__delegate.call(this, x, y, z, args);
};
G__9039.cljs$lang$maxFixedArity = 3;
G__9039.cljs$lang$applyTo = (function (arglist__9040){
var x = cljs.core.first(arglist__9040);
var y = cljs.core.first(cljs.core.next(arglist__9040));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9040)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9040)));
return G__9039__delegate(x, y, z, args);
});
G__9039.cljs$lang$arity$variadic = G__9039__delegate;
return G__9039;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8983 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____8983))
{return p2.call(null,x);
} else
{return and__3941__auto____8983;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8984 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____8984))
{var and__3941__auto____8985 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____8985))
{var and__3941__auto____8986 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____8986))
{return p2.call(null,y);
} else
{return and__3941__auto____8986;
}
} else
{return and__3941__auto____8985;
}
} else
{return and__3941__auto____8984;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8987 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____8987))
{var and__3941__auto____8988 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____8988))
{var and__3941__auto____8989 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____8989))
{var and__3941__auto____8990 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____8990))
{var and__3941__auto____8991 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____8991))
{return p2.call(null,z);
} else
{return and__3941__auto____8991;
}
} else
{return and__3941__auto____8990;
}
} else
{return and__3941__auto____8989;
}
} else
{return and__3941__auto____8988;
}
} else
{return and__3941__auto____8987;
}
})());
});
var ep2__4 = (function() { 
var G__9041__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8992 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____8992))
{return cljs.core.every_QMARK_.call(null,(function (p1__8838_SHARP_){
var and__3941__auto____8993 = p1.call(null,p1__8838_SHARP_);
if(cljs.core.truth_(and__3941__auto____8993))
{return p2.call(null,p1__8838_SHARP_);
} else
{return and__3941__auto____8993;
}
}),args);
} else
{return and__3941__auto____8992;
}
})());
};
var G__9041 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9041__delegate.call(this, x, y, z, args);
};
G__9041.cljs$lang$maxFixedArity = 3;
G__9041.cljs$lang$applyTo = (function (arglist__9042){
var x = cljs.core.first(arglist__9042);
var y = cljs.core.first(cljs.core.next(arglist__9042));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9042)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9042)));
return G__9041__delegate(x, y, z, args);
});
G__9041.cljs$lang$arity$variadic = G__9041__delegate;
return G__9041;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9012 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____9012))
{var and__3941__auto____9013 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____9013))
{return p3.call(null,x);
} else
{return and__3941__auto____9013;
}
} else
{return and__3941__auto____9012;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9014 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____9014))
{var and__3941__auto____9015 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____9015))
{var and__3941__auto____9016 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____9016))
{var and__3941__auto____9017 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____9017))
{var and__3941__auto____9018 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____9018))
{return p3.call(null,y);
} else
{return and__3941__auto____9018;
}
} else
{return and__3941__auto____9017;
}
} else
{return and__3941__auto____9016;
}
} else
{return and__3941__auto____9015;
}
} else
{return and__3941__auto____9014;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9019 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____9019))
{var and__3941__auto____9020 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____9020))
{var and__3941__auto____9021 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____9021))
{var and__3941__auto____9022 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____9022))
{var and__3941__auto____9023 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____9023))
{var and__3941__auto____9024 = p3.call(null,y);
if(cljs.core.truth_(and__3941__auto____9024))
{var and__3941__auto____9025 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____9025))
{var and__3941__auto____9026 = p2.call(null,z);
if(cljs.core.truth_(and__3941__auto____9026))
{return p3.call(null,z);
} else
{return and__3941__auto____9026;
}
} else
{return and__3941__auto____9025;
}
} else
{return and__3941__auto____9024;
}
} else
{return and__3941__auto____9023;
}
} else
{return and__3941__auto____9022;
}
} else
{return and__3941__auto____9021;
}
} else
{return and__3941__auto____9020;
}
} else
{return and__3941__auto____9019;
}
})());
});
var ep3__4 = (function() { 
var G__9043__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9027 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____9027))
{return cljs.core.every_QMARK_.call(null,(function (p1__8839_SHARP_){
var and__3941__auto____9028 = p1.call(null,p1__8839_SHARP_);
if(cljs.core.truth_(and__3941__auto____9028))
{var and__3941__auto____9029 = p2.call(null,p1__8839_SHARP_);
if(cljs.core.truth_(and__3941__auto____9029))
{return p3.call(null,p1__8839_SHARP_);
} else
{return and__3941__auto____9029;
}
} else
{return and__3941__auto____9028;
}
}),args);
} else
{return and__3941__auto____9027;
}
})());
};
var G__9043 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9043__delegate.call(this, x, y, z, args);
};
G__9043.cljs$lang$maxFixedArity = 3;
G__9043.cljs$lang$applyTo = (function (arglist__9044){
var x = cljs.core.first(arglist__9044);
var y = cljs.core.first(cljs.core.next(arglist__9044));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9044)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9044)));
return G__9043__delegate(x, y, z, args);
});
G__9043.cljs$lang$arity$variadic = G__9043__delegate;
return G__9043;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__9045__delegate = function (p1,p2,p3,ps){
var ps__9030 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8840_SHARP_){
return p1__8840_SHARP_.call(null,x);
}),ps__9030);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8841_SHARP_){
var and__3941__auto____9035 = p1__8841_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto____9035))
{return p1__8841_SHARP_.call(null,y);
} else
{return and__3941__auto____9035;
}
}),ps__9030);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8842_SHARP_){
var and__3941__auto____9036 = p1__8842_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto____9036))
{var and__3941__auto____9037 = p1__8842_SHARP_.call(null,y);
if(cljs.core.truth_(and__3941__auto____9037))
{return p1__8842_SHARP_.call(null,z);
} else
{return and__3941__auto____9037;
}
} else
{return and__3941__auto____9036;
}
}),ps__9030);
});
var epn__4 = (function() { 
var G__9046__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9038 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____9038))
{return cljs.core.every_QMARK_.call(null,(function (p1__8843_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8843_SHARP_,args);
}),ps__9030);
} else
{return and__3941__auto____9038;
}
})());
};
var G__9046 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9046__delegate.call(this, x, y, z, args);
};
G__9046.cljs$lang$maxFixedArity = 3;
G__9046.cljs$lang$applyTo = (function (arglist__9047){
var x = cljs.core.first(arglist__9047);
var y = cljs.core.first(cljs.core.next(arglist__9047));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9047)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9047)));
return G__9046__delegate(x, y, z, args);
});
G__9046.cljs$lang$arity$variadic = G__9046__delegate;
return G__9046;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__9045 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9045__delegate.call(this, p1, p2, p3, ps);
};
G__9045.cljs$lang$maxFixedArity = 3;
G__9045.cljs$lang$applyTo = (function (arglist__9048){
var p1 = cljs.core.first(arglist__9048);
var p2 = cljs.core.first(cljs.core.next(arglist__9048));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9048)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9048)));
return G__9045__delegate(p1, p2, p3, ps);
});
G__9045.cljs$lang$arity$variadic = G__9045__delegate;
return G__9045;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3943__auto____9129 = p.call(null,x);
if(cljs.core.truth_(or__3943__auto____9129))
{return or__3943__auto____9129;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3943__auto____9130 = p.call(null,x);
if(cljs.core.truth_(or__3943__auto____9130))
{return or__3943__auto____9130;
} else
{var or__3943__auto____9131 = p.call(null,y);
if(cljs.core.truth_(or__3943__auto____9131))
{return or__3943__auto____9131;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__9200__delegate = function (x,y,z,args){
var or__3943__auto____9132 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____9132))
{return or__3943__auto____9132;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__9200 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9200__delegate.call(this, x, y, z, args);
};
G__9200.cljs$lang$maxFixedArity = 3;
G__9200.cljs$lang$applyTo = (function (arglist__9201){
var x = cljs.core.first(arglist__9201);
var y = cljs.core.first(cljs.core.next(arglist__9201));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9201)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9201)));
return G__9200__delegate(x, y, z, args);
});
G__9200.cljs$lang$arity$variadic = G__9200__delegate;
return G__9200;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3943__auto____9144 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9144))
{return or__3943__auto____9144;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3943__auto____9145 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9145))
{return or__3943__auto____9145;
} else
{var or__3943__auto____9146 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____9146))
{return or__3943__auto____9146;
} else
{var or__3943__auto____9147 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9147))
{return or__3943__auto____9147;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3943__auto____9148 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9148))
{return or__3943__auto____9148;
} else
{var or__3943__auto____9149 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____9149))
{return or__3943__auto____9149;
} else
{var or__3943__auto____9150 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____9150))
{return or__3943__auto____9150;
} else
{var or__3943__auto____9151 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9151))
{return or__3943__auto____9151;
} else
{var or__3943__auto____9152 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____9152))
{return or__3943__auto____9152;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__9202__delegate = function (x,y,z,args){
var or__3943__auto____9153 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____9153))
{return or__3943__auto____9153;
} else
{return cljs.core.some.call(null,(function (p1__8883_SHARP_){
var or__3943__auto____9154 = p1.call(null,p1__8883_SHARP_);
if(cljs.core.truth_(or__3943__auto____9154))
{return or__3943__auto____9154;
} else
{return p2.call(null,p1__8883_SHARP_);
}
}),args);
}
};
var G__9202 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9202__delegate.call(this, x, y, z, args);
};
G__9202.cljs$lang$maxFixedArity = 3;
G__9202.cljs$lang$applyTo = (function (arglist__9203){
var x = cljs.core.first(arglist__9203);
var y = cljs.core.first(cljs.core.next(arglist__9203));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9203)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9203)));
return G__9202__delegate(x, y, z, args);
});
G__9202.cljs$lang$arity$variadic = G__9202__delegate;
return G__9202;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3943__auto____9173 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9173))
{return or__3943__auto____9173;
} else
{var or__3943__auto____9174 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9174))
{return or__3943__auto____9174;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3943__auto____9175 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9175))
{return or__3943__auto____9175;
} else
{var or__3943__auto____9176 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9176))
{return or__3943__auto____9176;
} else
{var or__3943__auto____9177 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____9177))
{return or__3943__auto____9177;
} else
{var or__3943__auto____9178 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____9178))
{return or__3943__auto____9178;
} else
{var or__3943__auto____9179 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____9179))
{return or__3943__auto____9179;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3943__auto____9180 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9180))
{return or__3943__auto____9180;
} else
{var or__3943__auto____9181 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9181))
{return or__3943__auto____9181;
} else
{var or__3943__auto____9182 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____9182))
{return or__3943__auto____9182;
} else
{var or__3943__auto____9183 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____9183))
{return or__3943__auto____9183;
} else
{var or__3943__auto____9184 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____9184))
{return or__3943__auto____9184;
} else
{var or__3943__auto____9185 = p3.call(null,y);
if(cljs.core.truth_(or__3943__auto____9185))
{return or__3943__auto____9185;
} else
{var or__3943__auto____9186 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____9186))
{return or__3943__auto____9186;
} else
{var or__3943__auto____9187 = p2.call(null,z);
if(cljs.core.truth_(or__3943__auto____9187))
{return or__3943__auto____9187;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__9204__delegate = function (x,y,z,args){
var or__3943__auto____9188 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____9188))
{return or__3943__auto____9188;
} else
{return cljs.core.some.call(null,(function (p1__8884_SHARP_){
var or__3943__auto____9189 = p1.call(null,p1__8884_SHARP_);
if(cljs.core.truth_(or__3943__auto____9189))
{return or__3943__auto____9189;
} else
{var or__3943__auto____9190 = p2.call(null,p1__8884_SHARP_);
if(cljs.core.truth_(or__3943__auto____9190))
{return or__3943__auto____9190;
} else
{return p3.call(null,p1__8884_SHARP_);
}
}
}),args);
}
};
var G__9204 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9204__delegate.call(this, x, y, z, args);
};
G__9204.cljs$lang$maxFixedArity = 3;
G__9204.cljs$lang$applyTo = (function (arglist__9205){
var x = cljs.core.first(arglist__9205);
var y = cljs.core.first(cljs.core.next(arglist__9205));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9205)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9205)));
return G__9204__delegate(x, y, z, args);
});
G__9204.cljs$lang$arity$variadic = G__9204__delegate;
return G__9204;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__9206__delegate = function (p1,p2,p3,ps){
var ps__9191 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8885_SHARP_){
return p1__8885_SHARP_.call(null,x);
}),ps__9191);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8886_SHARP_){
var or__3943__auto____9196 = p1__8886_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto____9196))
{return or__3943__auto____9196;
} else
{return p1__8886_SHARP_.call(null,y);
}
}),ps__9191);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8887_SHARP_){
var or__3943__auto____9197 = p1__8887_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto____9197))
{return or__3943__auto____9197;
} else
{var or__3943__auto____9198 = p1__8887_SHARP_.call(null,y);
if(cljs.core.truth_(or__3943__auto____9198))
{return or__3943__auto____9198;
} else
{return p1__8887_SHARP_.call(null,z);
}
}
}),ps__9191);
});
var spn__4 = (function() { 
var G__9207__delegate = function (x,y,z,args){
var or__3943__auto____9199 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____9199))
{return or__3943__auto____9199;
} else
{return cljs.core.some.call(null,(function (p1__8888_SHARP_){
return cljs.core.some.call(null,p1__8888_SHARP_,args);
}),ps__9191);
}
};
var G__9207 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9207__delegate.call(this, x, y, z, args);
};
G__9207.cljs$lang$maxFixedArity = 3;
G__9207.cljs$lang$applyTo = (function (arglist__9208){
var x = cljs.core.first(arglist__9208);
var y = cljs.core.first(cljs.core.next(arglist__9208));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9208)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9208)));
return G__9207__delegate(x, y, z, args);
});
G__9207.cljs$lang$arity$variadic = G__9207__delegate;
return G__9207;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__9206 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9206__delegate.call(this, p1, p2, p3, ps);
};
G__9206.cljs$lang$maxFixedArity = 3;
G__9206.cljs$lang$applyTo = (function (arglist__9209){
var p1 = cljs.core.first(arglist__9209);
var p2 = cljs.core.first(cljs.core.next(arglist__9209));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9209)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9209)));
return G__9206__delegate(p1, p2, p3, ps);
});
G__9206.cljs$lang$arity$variadic = G__9206__delegate;
return G__9206;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9228 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9228)
{var s__9229 = temp__4092__auto____9228;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9229))
{var c__9230 = cljs.core.chunk_first.call(null,s__9229);
var size__9231 = cljs.core.count.call(null,c__9230);
var b__9232 = cljs.core.chunk_buffer.call(null,size__9231);
var n__3556__auto____9233 = size__9231;
var i__9234 = 0;
while(true){
if((i__9234 < n__3556__auto____9233))
{cljs.core.chunk_append.call(null,b__9232,f.call(null,cljs.core._nth.call(null,c__9230,i__9234)));
{
var G__9246 = (i__9234 + 1);
i__9234 = G__9246;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9232),map.call(null,f,cljs.core.chunk_rest.call(null,s__9229)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__9229)),map.call(null,f,cljs.core.rest.call(null,s__9229)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9235 = cljs.core.seq.call(null,c1);
var s2__9236 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto____9237 = s1__9235;
if(and__3941__auto____9237)
{return s2__9236;
} else
{return and__3941__auto____9237;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9235),cljs.core.first.call(null,s2__9236)),map.call(null,f,cljs.core.rest.call(null,s1__9235),cljs.core.rest.call(null,s2__9236)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9238 = cljs.core.seq.call(null,c1);
var s2__9239 = cljs.core.seq.call(null,c2);
var s3__9240 = cljs.core.seq.call(null,c3);
if((function (){var and__3941__auto____9241 = s1__9238;
if(and__3941__auto____9241)
{var and__3941__auto____9242 = s2__9239;
if(and__3941__auto____9242)
{return s3__9240;
} else
{return and__3941__auto____9242;
}
} else
{return and__3941__auto____9241;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9238),cljs.core.first.call(null,s2__9239),cljs.core.first.call(null,s3__9240)),map.call(null,f,cljs.core.rest.call(null,s1__9238),cljs.core.rest.call(null,s2__9239),cljs.core.rest.call(null,s3__9240)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__9247__delegate = function (f,c1,c2,c3,colls){
var step__9245 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9244 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9244))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__9244),step.call(null,map.call(null,cljs.core.rest,ss__9244)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__9049_SHARP_){
return cljs.core.apply.call(null,f,p1__9049_SHARP_);
}),step__9245.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__9247 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9247__delegate.call(this, f, c1, c2, c3, colls);
};
G__9247.cljs$lang$maxFixedArity = 4;
G__9247.cljs$lang$applyTo = (function (arglist__9248){
var f = cljs.core.first(arglist__9248);
var c1 = cljs.core.first(cljs.core.next(arglist__9248));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9248)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9248))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9248))));
return G__9247__delegate(f, c1, c2, c3, colls);
});
G__9247.cljs$lang$arity$variadic = G__9247__delegate;
return G__9247;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__4092__auto____9251 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9251)
{var s__9252 = temp__4092__auto____9251;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9252),take.call(null,(n - 1),cljs.core.rest.call(null,s__9252)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__9258 = (function (n,coll){
while(true){
var s__9256 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3941__auto____9257 = (n > 0);
if(and__3941__auto____9257)
{return s__9256;
} else
{return and__3941__auto____9257;
}
})()))
{{
var G__9259 = (n - 1);
var G__9260 = cljs.core.rest.call(null,s__9256);
n = G__9259;
coll = G__9260;
continue;
}
} else
{return s__9256;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9258.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__9263 = cljs.core.seq.call(null,coll);
var lead__9264 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__9264)
{{
var G__9265 = cljs.core.next.call(null,s__9263);
var G__9266 = cljs.core.next.call(null,lead__9264);
s__9263 = G__9265;
lead__9264 = G__9266;
continue;
}
} else
{return s__9263;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__9272 = (function (pred,coll){
while(true){
var s__9270 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3941__auto____9271 = s__9270;
if(and__3941__auto____9271)
{return pred.call(null,cljs.core.first.call(null,s__9270));
} else
{return and__3941__auto____9271;
}
})()))
{{
var G__9273 = pred;
var G__9274 = cljs.core.rest.call(null,s__9270);
pred = G__9273;
coll = G__9274;
continue;
}
} else
{return s__9270;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9272.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9277 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9277)
{var s__9278 = temp__4092__auto____9277;
return cljs.core.concat.call(null,s__9278,cycle.call(null,s__9278));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9283 = cljs.core.seq.call(null,c1);
var s2__9284 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto____9285 = s1__9283;
if(and__3941__auto____9285)
{return s2__9284;
} else
{return and__3941__auto____9285;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9283),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9284),interleave.call(null,cljs.core.rest.call(null,s1__9283),cljs.core.rest.call(null,s2__9284))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__9287__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9286 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9286))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9286),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9286)));
} else
{return null;
}
}),null));
};
var G__9287 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9287__delegate.call(this, c1, c2, colls);
};
G__9287.cljs$lang$maxFixedArity = 2;
G__9287.cljs$lang$applyTo = (function (arglist__9288){
var c1 = cljs.core.first(arglist__9288);
var c2 = cljs.core.first(cljs.core.next(arglist__9288));
var colls = cljs.core.rest(cljs.core.next(arglist__9288));
return G__9287__delegate(c1, c2, colls);
});
G__9287.cljs$lang$arity$variadic = G__9287__delegate;
return G__9287;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__9298 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____9296 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____9296)
{var coll__9297 = temp__4090__auto____9296;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9297),cat.call(null,cljs.core.rest.call(null,coll__9297),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__9298.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__9299__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9299 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9299__delegate.call(this, f, coll, colls);
};
G__9299.cljs$lang$maxFixedArity = 2;
G__9299.cljs$lang$applyTo = (function (arglist__9300){
var f = cljs.core.first(arglist__9300);
var coll = cljs.core.first(cljs.core.next(arglist__9300));
var colls = cljs.core.rest(cljs.core.next(arglist__9300));
return G__9299__delegate(f, coll, colls);
});
G__9299.cljs$lang$arity$variadic = G__9299__delegate;
return G__9299;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9310 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9310)
{var s__9311 = temp__4092__auto____9310;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9311))
{var c__9312 = cljs.core.chunk_first.call(null,s__9311);
var size__9313 = cljs.core.count.call(null,c__9312);
var b__9314 = cljs.core.chunk_buffer.call(null,size__9313);
var n__3556__auto____9315 = size__9313;
var i__9316 = 0;
while(true){
if((i__9316 < n__3556__auto____9315))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__9312,i__9316))))
{cljs.core.chunk_append.call(null,b__9314,cljs.core._nth.call(null,c__9312,i__9316));
} else
{}
{
var G__9319 = (i__9316 + 1);
i__9316 = G__9319;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9314),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__9311)));
} else
{var f__9317 = cljs.core.first.call(null,s__9311);
var r__9318 = cljs.core.rest.call(null,s__9311);
if(cljs.core.truth_(pred.call(null,f__9317)))
{return cljs.core.cons.call(null,f__9317,filter.call(null,pred,r__9318));
} else
{return filter.call(null,pred,r__9318);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__9322 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__9322.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9320_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__9320_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__9326__9327 = to;
if(G__9326__9327)
{if((function (){var or__3943__auto____9328 = (G__9326__9327.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3943__auto____9328)
{return or__3943__auto____9328;
} else
{return G__9326__9327.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__9326__9327.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9326__9327);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9326__9327);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__9329__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__9329 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9329__delegate.call(this, f, c1, c2, c3, colls);
};
G__9329.cljs$lang$maxFixedArity = 4;
G__9329.cljs$lang$applyTo = (function (arglist__9330){
var f = cljs.core.first(arglist__9330);
var c1 = cljs.core.first(cljs.core.next(arglist__9330));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9330)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9330))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9330))));
return G__9329__delegate(f, c1, c2, c3, colls);
});
G__9329.cljs$lang$arity$variadic = G__9329__delegate;
return G__9329;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9337 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9337)
{var s__9338 = temp__4092__auto____9337;
var p__9339 = cljs.core.take.call(null,n,s__9338);
if((n === cljs.core.count.call(null,p__9339)))
{return cljs.core.cons.call(null,p__9339,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9338)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9340 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9340)
{var s__9341 = temp__4092__auto____9340;
var p__9342 = cljs.core.take.call(null,n,s__9341);
if((n === cljs.core.count.call(null,p__9342)))
{return cljs.core.cons.call(null,p__9342,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9341)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9342,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__9347 = cljs.core.lookup_sentinel;
var m__9348 = m;
var ks__9349 = cljs.core.seq.call(null,ks);
while(true){
if(ks__9349)
{var m__9350 = cljs.core._lookup.call(null,m__9348,cljs.core.first.call(null,ks__9349),sentinel__9347);
if((sentinel__9347 === m__9350))
{return not_found;
} else
{{
var G__9351 = sentinel__9347;
var G__9352 = m__9350;
var G__9353 = cljs.core.next.call(null,ks__9349);
sentinel__9347 = G__9351;
m__9348 = G__9352;
ks__9349 = G__9353;
continue;
}
}
} else
{return m__9348;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__9354,v){
var vec__9359__9360 = p__9354;
var k__9361 = cljs.core.nth.call(null,vec__9359__9360,0,null);
var ks__9362 = cljs.core.nthnext.call(null,vec__9359__9360,1);
if(cljs.core.truth_(ks__9362))
{return cljs.core.assoc.call(null,m,k__9361,assoc_in.call(null,cljs.core._lookup.call(null,m,k__9361,null),ks__9362,v));
} else
{return cljs.core.assoc.call(null,m,k__9361,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__9363,f,args){
var vec__9368__9369 = p__9363;
var k__9370 = cljs.core.nth.call(null,vec__9368__9369,0,null);
var ks__9371 = cljs.core.nthnext.call(null,vec__9368__9369,1);
if(cljs.core.truth_(ks__9371))
{return cljs.core.assoc.call(null,m,k__9370,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__9370,null),ks__9371,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9370,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__9370,null),args));
}
};
var update_in = function (m,p__9363,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9363, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9372){
var m = cljs.core.first(arglist__9372);
var p__9363 = cljs.core.first(cljs.core.next(arglist__9372));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9372)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9372)));
return update_in__delegate(m, p__9363, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9375 = this;
var h__3221__auto____9376 = this__9375.__hash;
if(!((h__3221__auto____9376 == null)))
{return h__3221__auto____9376;
} else
{var h__3221__auto____9377 = cljs.core.hash_coll.call(null,coll);
this__9375.__hash = h__3221__auto____9377;
return h__3221__auto____9377;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9378 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9379 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9380 = this;
var new_array__9381 = this__9380.array.slice();
(new_array__9381[k] = v);
return (new cljs.core.Vector(this__9380.meta,new_array__9381,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__9412 = null;
var G__9412__2 = (function (this_sym9382,k){
var this__9384 = this;
var this_sym9382__9385 = this;
var coll__9386 = this_sym9382__9385;
return coll__9386.cljs$core$ILookup$_lookup$arity$2(coll__9386,k);
});
var G__9412__3 = (function (this_sym9383,k,not_found){
var this__9384 = this;
var this_sym9383__9387 = this;
var coll__9388 = this_sym9383__9387;
return coll__9388.cljs$core$ILookup$_lookup$arity$3(coll__9388,k,not_found);
});
G__9412 = function(this_sym9383,k,not_found){
switch(arguments.length){
case 2:
return G__9412__2.call(this,this_sym9383,k);
case 3:
return G__9412__3.call(this,this_sym9383,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9412;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym9373,args9374){
var this__9389 = this;
return this_sym9373.call.apply(this_sym9373,[this_sym9373].concat(args9374.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9390 = this;
var new_array__9391 = this__9390.array.slice();
new_array__9391.push(o);
return (new cljs.core.Vector(this__9390.meta,new_array__9391,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__9392 = this;
var this__9393 = this;
return cljs.core.pr_str.call(null,this__9393);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9394 = this;
return cljs.core.ci_reduce.call(null,this__9394.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9395 = this;
return cljs.core.ci_reduce.call(null,this__9395.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9396 = this;
if((this__9396.array.length > 0))
{var vector_seq__9397 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__9396.array.length))
{return cljs.core.cons.call(null,(this__9396.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__9397.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9398 = this;
return this__9398.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9399 = this;
var count__9400 = this__9399.array.length;
if((count__9400 > 0))
{return (this__9399.array[(count__9400 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9401 = this;
if((this__9401.array.length > 0))
{var new_array__9402 = this__9401.array.slice();
new_array__9402.pop();
return (new cljs.core.Vector(this__9401.meta,new_array__9402,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9403 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9404 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9405 = this;
return (new cljs.core.Vector(meta,this__9405.array,this__9405.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9406 = this;
return this__9406.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9407 = this;
if((function (){var and__3941__auto____9408 = (0 <= n);
if(and__3941__auto____9408)
{return (n < this__9407.array.length);
} else
{return and__3941__auto____9408;
}
})())
{return (this__9407.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9409 = this;
if((function (){var and__3941__auto____9410 = (0 <= n);
if(and__3941__auto____9410)
{return (n < this__9409.array.length);
} else
{return and__3941__auto____9410;
}
})())
{return (this__9409.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9411 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9411.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__3339__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__9414 = pv.cnt;
if((cnt__9414 < 32))
{return 0;
} else
{return (((cnt__9414 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__9420 = level;
var ret__9421 = node;
while(true){
if((ll__9420 === 0))
{return ret__9421;
} else
{var embed__9422 = ret__9421;
var r__9423 = cljs.core.pv_fresh_node.call(null,edit);
var ___9424 = cljs.core.pv_aset.call(null,r__9423,0,embed__9422);
{
var G__9425 = (ll__9420 - 5);
var G__9426 = r__9423;
ll__9420 = G__9425;
ret__9421 = G__9426;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9432 = cljs.core.pv_clone_node.call(null,parent);
var subidx__9433 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__9432,subidx__9433,tailnode);
return ret__9432;
} else
{var child__9434 = cljs.core.pv_aget.call(null,parent,subidx__9433);
if(!((child__9434 == null)))
{var node_to_insert__9435 = push_tail.call(null,pv,(level - 5),child__9434,tailnode);
cljs.core.pv_aset.call(null,ret__9432,subidx__9433,node_to_insert__9435);
return ret__9432;
} else
{var node_to_insert__9436 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__9432,subidx__9433,node_to_insert__9436);
return ret__9432;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3941__auto____9440 = (0 <= i);
if(and__3941__auto____9440)
{return (i < pv.cnt);
} else
{return and__3941__auto____9440;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__9441 = pv.root;
var level__9442 = pv.shift;
while(true){
if((level__9442 > 0))
{{
var G__9443 = cljs.core.pv_aget.call(null,node__9441,((i >>> level__9442) & 31));
var G__9444 = (level__9442 - 5);
node__9441 = G__9443;
level__9442 = G__9444;
continue;
}
} else
{return node__9441.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9447 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__9447,(i & 31),val);
return ret__9447;
} else
{var subidx__9448 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9447,subidx__9448,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9448),i,val));
return ret__9447;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9454 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9455 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9454));
if((function (){var and__3941__auto____9456 = (new_child__9455 == null);
if(and__3941__auto____9456)
{return (subidx__9454 === 0);
} else
{return and__3941__auto____9456;
}
})())
{return null;
} else
{var ret__9457 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9457,subidx__9454,new_child__9455);
return ret__9457;
}
} else
{if((subidx__9454 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__9458 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9458,subidx__9454,null);
return ret__9458;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9461 = this;
return (new cljs.core.TransientVector(this__9461.cnt,this__9461.shift,cljs.core.tv_editable_root.call(null,this__9461.root),cljs.core.tv_editable_tail.call(null,this__9461.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9462 = this;
var h__3221__auto____9463 = this__9462.__hash;
if(!((h__3221__auto____9463 == null)))
{return h__3221__auto____9463;
} else
{var h__3221__auto____9464 = cljs.core.hash_coll.call(null,coll);
this__9462.__hash = h__3221__auto____9464;
return h__3221__auto____9464;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9465 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9466 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9467 = this;
if((function (){var and__3941__auto____9468 = (0 <= k);
if(and__3941__auto____9468)
{return (k < this__9467.cnt);
} else
{return and__3941__auto____9468;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__9469 = this__9467.tail.slice();
(new_tail__9469[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9467.meta,this__9467.cnt,this__9467.shift,this__9467.root,new_tail__9469,null));
} else
{return (new cljs.core.PersistentVector(this__9467.meta,this__9467.cnt,this__9467.shift,cljs.core.do_assoc.call(null,coll,this__9467.shift,this__9467.root,k,v),this__9467.tail,null));
}
} else
{if((k === this__9467.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__9467.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9517 = null;
var G__9517__2 = (function (this_sym9470,k){
var this__9472 = this;
var this_sym9470__9473 = this;
var coll__9474 = this_sym9470__9473;
return coll__9474.cljs$core$ILookup$_lookup$arity$2(coll__9474,k);
});
var G__9517__3 = (function (this_sym9471,k,not_found){
var this__9472 = this;
var this_sym9471__9475 = this;
var coll__9476 = this_sym9471__9475;
return coll__9476.cljs$core$ILookup$_lookup$arity$3(coll__9476,k,not_found);
});
G__9517 = function(this_sym9471,k,not_found){
switch(arguments.length){
case 2:
return G__9517__2.call(this,this_sym9471,k);
case 3:
return G__9517__3.call(this,this_sym9471,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9517;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym9459,args9460){
var this__9477 = this;
return this_sym9459.call.apply(this_sym9459,[this_sym9459].concat(args9460.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__9478 = this;
var step_init__9479 = [0,init];
var i__9480 = 0;
while(true){
if((i__9480 < this__9478.cnt))
{var arr__9481 = cljs.core.array_for.call(null,v,i__9480);
var len__9482 = arr__9481.length;
var init__9486 = (function (){var j__9483 = 0;
var init__9484 = (step_init__9479[1]);
while(true){
if((j__9483 < len__9482))
{var init__9485 = f.call(null,init__9484,(j__9483 + i__9480),(arr__9481[j__9483]));
if(cljs.core.reduced_QMARK_.call(null,init__9485))
{return init__9485;
} else
{{
var G__9518 = (j__9483 + 1);
var G__9519 = init__9485;
j__9483 = G__9518;
init__9484 = G__9519;
continue;
}
}
} else
{(step_init__9479[0] = len__9482);
(step_init__9479[1] = init__9484);
return init__9484;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9486))
{return cljs.core.deref.call(null,init__9486);
} else
{{
var G__9520 = (i__9480 + (step_init__9479[0]));
i__9480 = G__9520;
continue;
}
}
} else
{return (step_init__9479[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9487 = this;
if(((this__9487.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__9488 = this__9487.tail.slice();
new_tail__9488.push(o);
return (new cljs.core.PersistentVector(this__9487.meta,(this__9487.cnt + 1),this__9487.shift,this__9487.root,new_tail__9488,null));
} else
{var root_overflow_QMARK___9489 = ((this__9487.cnt >>> 5) > (1 << this__9487.shift));
var new_shift__9490 = ((root_overflow_QMARK___9489)?(this__9487.shift + 5):this__9487.shift);
var new_root__9492 = ((root_overflow_QMARK___9489)?(function (){var n_r__9491 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__9491,0,this__9487.root);
cljs.core.pv_aset.call(null,n_r__9491,1,cljs.core.new_path.call(null,null,this__9487.shift,(new cljs.core.VectorNode(null,this__9487.tail))));
return n_r__9491;
})():cljs.core.push_tail.call(null,coll,this__9487.shift,this__9487.root,(new cljs.core.VectorNode(null,this__9487.tail))));
return (new cljs.core.PersistentVector(this__9487.meta,(this__9487.cnt + 1),new_shift__9490,new_root__9492,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9493 = this;
if((this__9493.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__9493.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9494 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9495 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9496 = this;
var this__9497 = this;
return cljs.core.pr_str.call(null,this__9497);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9498 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9499 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9500 = this;
if((this__9500.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9501 = this;
return this__9501.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9502 = this;
if((this__9502.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9502.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9503 = this;
if((this__9503.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9503.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9503.meta);
} else
{if((1 < (this__9503.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__9503.meta,(this__9503.cnt - 1),this__9503.shift,this__9503.root,this__9503.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9504 = cljs.core.array_for.call(null,coll,(this__9503.cnt - 2));
var nr__9505 = cljs.core.pop_tail.call(null,coll,this__9503.shift,this__9503.root);
var new_root__9506 = (((nr__9505 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9505);
var cnt_1__9507 = (this__9503.cnt - 1);
if((function (){var and__3941__auto____9508 = (5 < this__9503.shift);
if(and__3941__auto____9508)
{return (cljs.core.pv_aget.call(null,new_root__9506,1) == null);
} else
{return and__3941__auto____9508;
}
})())
{return (new cljs.core.PersistentVector(this__9503.meta,cnt_1__9507,(this__9503.shift - 5),cljs.core.pv_aget.call(null,new_root__9506,0),new_tail__9504,null));
} else
{return (new cljs.core.PersistentVector(this__9503.meta,cnt_1__9507,this__9503.shift,new_root__9506,new_tail__9504,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9509 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9510 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9511 = this;
return (new cljs.core.PersistentVector(meta,this__9511.cnt,this__9511.shift,this__9511.root,this__9511.tail,this__9511.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9512 = this;
return this__9512.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9513 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9514 = this;
if((function (){var and__3941__auto____9515 = (0 <= n);
if(and__3941__auto____9515)
{return (n < this__9514.cnt);
} else
{return and__3941__auto____9515;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9516 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9516.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9521 = xs.length;
var xs__9522 = (((no_clone === true))?xs:xs.slice());
if((l__9521 < 32))
{return (new cljs.core.PersistentVector(null,l__9521,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9522,null));
} else
{var node__9523 = xs__9522.slice(0,32);
var v__9524 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9523,null));
var i__9525 = 32;
var out__9526 = cljs.core._as_transient.call(null,v__9524);
while(true){
if((i__9525 < l__9521))
{{
var G__9527 = (i__9525 + 1);
var G__9528 = cljs.core.conj_BANG_.call(null,out__9526,(xs__9522[i__9525]));
i__9525 = G__9527;
out__9526 = G__9528;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9526);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__9529){
var args = cljs.core.seq(arglist__9529);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9530 = this;
if(((this__9530.off + 1) < this__9530.node.length))
{var s__9531 = cljs.core.chunked_seq.call(null,this__9530.vec,this__9530.node,this__9530.i,(this__9530.off + 1));
if((s__9531 == null))
{return null;
} else
{return s__9531;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9532 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9533 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9534 = this;
return (this__9534.node[this__9534.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9535 = this;
if(((this__9535.off + 1) < this__9535.node.length))
{var s__9536 = cljs.core.chunked_seq.call(null,this__9535.vec,this__9535.node,this__9535.i,(this__9535.off + 1));
if((s__9536 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9536;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9537 = this;
var l__9538 = this__9537.node.length;
var s__9539 = ((((this__9537.i + l__9538) < cljs.core._count.call(null,this__9537.vec)))?cljs.core.chunked_seq.call(null,this__9537.vec,(this__9537.i + l__9538),0):null);
if((s__9539 == null))
{return null;
} else
{return s__9539;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9540 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9541 = this;
return cljs.core.chunked_seq.call(null,this__9541.vec,this__9541.node,this__9541.i,this__9541.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9542 = this;
return this__9542.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9543 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9543.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9544 = this;
return cljs.core.array_chunk.call(null,this__9544.node,this__9544.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9545 = this;
var l__9546 = this__9545.node.length;
var s__9547 = ((((this__9545.i + l__9546) < cljs.core._count.call(null,this__9545.vec)))?cljs.core.chunked_seq.call(null,this__9545.vec,(this__9545.i + l__9546),0):null);
if((s__9547 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9547;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9550 = this;
var h__3221__auto____9551 = this__9550.__hash;
if(!((h__3221__auto____9551 == null)))
{return h__3221__auto____9551;
} else
{var h__3221__auto____9552 = cljs.core.hash_coll.call(null,coll);
this__9550.__hash = h__3221__auto____9552;
return h__3221__auto____9552;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9553 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9554 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9555 = this;
var v_pos__9556 = (this__9555.start + key);
return (new cljs.core.Subvec(this__9555.meta,cljs.core._assoc.call(null,this__9555.v,v_pos__9556,val),this__9555.start,((this__9555.end > (v_pos__9556 + 1)) ? this__9555.end : (v_pos__9556 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9582 = null;
var G__9582__2 = (function (this_sym9557,k){
var this__9559 = this;
var this_sym9557__9560 = this;
var coll__9561 = this_sym9557__9560;
return coll__9561.cljs$core$ILookup$_lookup$arity$2(coll__9561,k);
});
var G__9582__3 = (function (this_sym9558,k,not_found){
var this__9559 = this;
var this_sym9558__9562 = this;
var coll__9563 = this_sym9558__9562;
return coll__9563.cljs$core$ILookup$_lookup$arity$3(coll__9563,k,not_found);
});
G__9582 = function(this_sym9558,k,not_found){
switch(arguments.length){
case 2:
return G__9582__2.call(this,this_sym9558,k);
case 3:
return G__9582__3.call(this,this_sym9558,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9582;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9548,args9549){
var this__9564 = this;
return this_sym9548.call.apply(this_sym9548,[this_sym9548].concat(args9549.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9565 = this;
return (new cljs.core.Subvec(this__9565.meta,cljs.core._assoc_n.call(null,this__9565.v,this__9565.end,o),this__9565.start,(this__9565.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9566 = this;
var this__9567 = this;
return cljs.core.pr_str.call(null,this__9567);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9568 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9569 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9570 = this;
var subvec_seq__9571 = (function subvec_seq(i){
if((i === this__9570.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9570.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__9571.call(null,this__9570.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9572 = this;
return (this__9572.end - this__9572.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9573 = this;
return cljs.core._nth.call(null,this__9573.v,(this__9573.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9574 = this;
if((this__9574.start === this__9574.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9574.meta,this__9574.v,this__9574.start,(this__9574.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9575 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9576 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9577 = this;
return (new cljs.core.Subvec(meta,this__9577.v,this__9577.start,this__9577.end,this__9577.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9578 = this;
return this__9578.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9579 = this;
return cljs.core._nth.call(null,this__9579.v,(this__9579.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9580 = this;
return cljs.core._nth.call(null,this__9580.v,(this__9580.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9581 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9581.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__9584 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__9584,0,tl.length);
return ret__9584;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9588 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__9589 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9588,subidx__9589,(((level === 5))?tail_node:(function (){var child__9590 = cljs.core.pv_aget.call(null,ret__9588,subidx__9589);
if(!((child__9590 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__9590,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9588;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9595 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__9596 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9597 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__9595,subidx__9596));
if((function (){var and__3941__auto____9598 = (new_child__9597 == null);
if(and__3941__auto____9598)
{return (subidx__9596 === 0);
} else
{return and__3941__auto____9598;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__9595,subidx__9596,new_child__9597);
return node__9595;
}
} else
{if((subidx__9596 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__9595,subidx__9596,null);
return node__9595;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3941__auto____9603 = (0 <= i);
if(and__3941__auto____9603)
{return (i < tv.cnt);
} else
{return and__3941__auto____9603;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__9604 = tv.root;
var node__9605 = root__9604;
var level__9606 = tv.shift;
while(true){
if((level__9606 > 0))
{{
var G__9607 = cljs.core.tv_ensure_editable.call(null,root__9604.edit,cljs.core.pv_aget.call(null,node__9605,((i >>> level__9606) & 31)));
var G__9608 = (level__9606 - 5);
node__9605 = G__9607;
level__9606 = G__9608;
continue;
}
} else
{return node__9605.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__9648 = null;
var G__9648__2 = (function (this_sym9611,k){
var this__9613 = this;
var this_sym9611__9614 = this;
var coll__9615 = this_sym9611__9614;
return coll__9615.cljs$core$ILookup$_lookup$arity$2(coll__9615,k);
});
var G__9648__3 = (function (this_sym9612,k,not_found){
var this__9613 = this;
var this_sym9612__9616 = this;
var coll__9617 = this_sym9612__9616;
return coll__9617.cljs$core$ILookup$_lookup$arity$3(coll__9617,k,not_found);
});
G__9648 = function(this_sym9612,k,not_found){
switch(arguments.length){
case 2:
return G__9648__2.call(this,this_sym9612,k);
case 3:
return G__9648__3.call(this,this_sym9612,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9648;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9609,args9610){
var this__9618 = this;
return this_sym9609.call.apply(this_sym9609,[this_sym9609].concat(args9610.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9619 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9620 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9621 = this;
if(this__9621.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9622 = this;
if((function (){var and__3941__auto____9623 = (0 <= n);
if(and__3941__auto____9623)
{return (n < this__9622.cnt);
} else
{return and__3941__auto____9623;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9624 = this;
if(this__9624.root.edit)
{return this__9624.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__9625 = this;
if(this__9625.root.edit)
{if((function (){var and__3941__auto____9626 = (0 <= n);
if(and__3941__auto____9626)
{return (n < this__9625.cnt);
} else
{return and__3941__auto____9626;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__9625.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__9631 = (function go(level,node){
var node__9629 = cljs.core.tv_ensure_editable.call(null,this__9625.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__9629,(n & 31),val);
return node__9629;
} else
{var subidx__9630 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__9629,subidx__9630,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__9629,subidx__9630)));
return node__9629;
}
}).call(null,this__9625.shift,this__9625.root);
this__9625.root = new_root__9631;
return tcoll;
}
} else
{if((n === this__9625.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__9625.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__9632 = this;
if(this__9632.root.edit)
{if((this__9632.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9632.cnt))
{this__9632.cnt = 0;
return tcoll;
} else
{if((((this__9632.cnt - 1) & 31) > 0))
{this__9632.cnt = (this__9632.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__9633 = cljs.core.editable_array_for.call(null,tcoll,(this__9632.cnt - 2));
var new_root__9635 = (function (){var nr__9634 = cljs.core.tv_pop_tail.call(null,tcoll,this__9632.shift,this__9632.root);
if(!((nr__9634 == null)))
{return nr__9634;
} else
{return (new cljs.core.VectorNode(this__9632.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3941__auto____9636 = (5 < this__9632.shift);
if(and__3941__auto____9636)
{return (cljs.core.pv_aget.call(null,new_root__9635,1) == null);
} else
{return and__3941__auto____9636;
}
})())
{var new_root__9637 = cljs.core.tv_ensure_editable.call(null,this__9632.root.edit,cljs.core.pv_aget.call(null,new_root__9635,0));
this__9632.root = new_root__9637;
this__9632.shift = (this__9632.shift - 5);
this__9632.cnt = (this__9632.cnt - 1);
this__9632.tail = new_tail__9633;
return tcoll;
} else
{this__9632.root = new_root__9635;
this__9632.cnt = (this__9632.cnt - 1);
this__9632.tail = new_tail__9633;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9638 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9639 = this;
if(this__9639.root.edit)
{if(((this__9639.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__9639.tail[(this__9639.cnt & 31)] = o);
this__9639.cnt = (this__9639.cnt + 1);
return tcoll;
} else
{var tail_node__9640 = (new cljs.core.VectorNode(this__9639.root.edit,this__9639.tail));
var new_tail__9641 = cljs.core.make_array.call(null,32);
(new_tail__9641[0] = o);
this__9639.tail = new_tail__9641;
if(((this__9639.cnt >>> 5) > (1 << this__9639.shift)))
{var new_root_array__9642 = cljs.core.make_array.call(null,32);
var new_shift__9643 = (this__9639.shift + 5);
(new_root_array__9642[0] = this__9639.root);
(new_root_array__9642[1] = cljs.core.new_path.call(null,this__9639.root.edit,this__9639.shift,tail_node__9640));
this__9639.root = (new cljs.core.VectorNode(this__9639.root.edit,new_root_array__9642));
this__9639.shift = new_shift__9643;
this__9639.cnt = (this__9639.cnt + 1);
return tcoll;
} else
{var new_root__9644 = cljs.core.tv_push_tail.call(null,tcoll,this__9639.shift,this__9639.root,tail_node__9640);
this__9639.root = new_root__9644;
this__9639.cnt = (this__9639.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9645 = this;
if(this__9645.root.edit)
{this__9645.root.edit = null;
var len__9646 = (this__9645.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__9647 = cljs.core.make_array.call(null,len__9646);
cljs.core.array_copy.call(null,this__9645.tail,0,trimmed_tail__9647,0,len__9646);
return (new cljs.core.PersistentVector(null,this__9645.cnt,this__9645.shift,this__9645.root,trimmed_tail__9647,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9649 = this;
var h__3221__auto____9650 = this__9649.__hash;
if(!((h__3221__auto____9650 == null)))
{return h__3221__auto____9650;
} else
{var h__3221__auto____9651 = cljs.core.hash_coll.call(null,coll);
this__9649.__hash = h__3221__auto____9651;
return h__3221__auto____9651;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9652 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__9653 = this;
var this__9654 = this;
return cljs.core.pr_str.call(null,this__9654);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9655 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9656 = this;
return cljs.core._first.call(null,this__9656.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9657 = this;
var temp__4090__auto____9658 = cljs.core.next.call(null,this__9657.front);
if(temp__4090__auto____9658)
{var f1__9659 = temp__4090__auto____9658;
return (new cljs.core.PersistentQueueSeq(this__9657.meta,f1__9659,this__9657.rear,null));
} else
{if((this__9657.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9657.meta,this__9657.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9660 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9661 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9661.front,this__9661.rear,this__9661.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9662 = this;
return this__9662.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9663 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9663.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9664 = this;
var h__3221__auto____9665 = this__9664.__hash;
if(!((h__3221__auto____9665 == null)))
{return h__3221__auto____9665;
} else
{var h__3221__auto____9666 = cljs.core.hash_coll.call(null,coll);
this__9664.__hash = h__3221__auto____9666;
return h__3221__auto____9666;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9667 = this;
if(cljs.core.truth_(this__9667.front))
{return (new cljs.core.PersistentQueue(this__9667.meta,(this__9667.count + 1),this__9667.front,cljs.core.conj.call(null,(function (){var or__3943__auto____9668 = this__9667.rear;
if(cljs.core.truth_(or__3943__auto____9668))
{return or__3943__auto____9668;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__9667.meta,(this__9667.count + 1),cljs.core.conj.call(null,this__9667.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__9669 = this;
var this__9670 = this;
return cljs.core.pr_str.call(null,this__9670);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9671 = this;
var rear__9672 = cljs.core.seq.call(null,this__9671.rear);
if(cljs.core.truth_((function (){var or__3943__auto____9673 = this__9671.front;
if(cljs.core.truth_(or__3943__auto____9673))
{return or__3943__auto____9673;
} else
{return rear__9672;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9671.front,cljs.core.seq.call(null,rear__9672),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9674 = this;
return this__9674.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9675 = this;
return cljs.core._first.call(null,this__9675.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9676 = this;
if(cljs.core.truth_(this__9676.front))
{var temp__4090__auto____9677 = cljs.core.next.call(null,this__9676.front);
if(temp__4090__auto____9677)
{var f1__9678 = temp__4090__auto____9677;
return (new cljs.core.PersistentQueue(this__9676.meta,(this__9676.count - 1),f1__9678,this__9676.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__9676.meta,(this__9676.count - 1),cljs.core.seq.call(null,this__9676.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9679 = this;
return cljs.core.first.call(null,this__9679.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9680 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9681 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9682 = this;
return (new cljs.core.PersistentQueue(meta,this__9682.count,this__9682.front,this__9682.rear,this__9682.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9683 = this;
return this__9683.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9684 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9685 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__9688 = array.length;
var i__9689 = 0;
while(true){
if((i__9689 < len__9688))
{if((k === (array[i__9689])))
{return i__9689;
} else
{{
var G__9690 = (i__9689 + incr);
i__9689 = G__9690;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__9693 = cljs.core.hash.call(null,a);
var b__9694 = cljs.core.hash.call(null,b);
if((a__9693 < b__9694))
{return -1;
} else
{if((a__9693 > b__9694))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__9702 = m.keys;
var len__9703 = ks__9702.length;
var so__9704 = m.strobj;
var out__9705 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__9706 = 0;
var out__9707 = cljs.core.transient$.call(null,out__9705);
while(true){
if((i__9706 < len__9703))
{var k__9708 = (ks__9702[i__9706]);
{
var G__9709 = (i__9706 + 1);
var G__9710 = cljs.core.assoc_BANG_.call(null,out__9707,k__9708,(so__9704[k__9708]));
i__9706 = G__9709;
out__9707 = G__9710;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__9707,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__9716 = {};
var l__9717 = ks.length;
var i__9718 = 0;
while(true){
if((i__9718 < l__9717))
{var k__9719 = (ks[i__9718]);
(new_obj__9716[k__9719] = (obj[k__9719]));
{
var G__9720 = (i__9718 + 1);
i__9718 = G__9720;
continue;
}
} else
{}
break;
}
return new_obj__9716;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9723 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9724 = this;
var h__3221__auto____9725 = this__9724.__hash;
if(!((h__3221__auto____9725 == null)))
{return h__3221__auto____9725;
} else
{var h__3221__auto____9726 = cljs.core.hash_imap.call(null,coll);
this__9724.__hash = h__3221__auto____9726;
return h__3221__auto____9726;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9727 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9728 = this;
if((function (){var and__3941__auto____9729 = goog.isString(k);
if(and__3941__auto____9729)
{return !((cljs.core.scan_array.call(null,1,k,this__9728.keys) == null));
} else
{return and__3941__auto____9729;
}
})())
{return (this__9728.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9730 = this;
if(goog.isString(k))
{if((function (){var or__3943__auto____9731 = (this__9730.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3943__auto____9731)
{return or__3943__auto____9731;
} else
{return (this__9730.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__9730.keys) == null)))
{var new_strobj__9732 = cljs.core.obj_clone.call(null,this__9730.strobj,this__9730.keys);
(new_strobj__9732[k] = v);
return (new cljs.core.ObjMap(this__9730.meta,this__9730.keys,new_strobj__9732,(this__9730.update_count + 1),null));
} else
{var new_strobj__9733 = cljs.core.obj_clone.call(null,this__9730.strobj,this__9730.keys);
var new_keys__9734 = this__9730.keys.slice();
(new_strobj__9733[k] = v);
new_keys__9734.push(k);
return (new cljs.core.ObjMap(this__9730.meta,new_keys__9734,new_strobj__9733,(this__9730.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9735 = this;
if((function (){var and__3941__auto____9736 = goog.isString(k);
if(and__3941__auto____9736)
{return !((cljs.core.scan_array.call(null,1,k,this__9735.keys) == null));
} else
{return and__3941__auto____9736;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__9758 = null;
var G__9758__2 = (function (this_sym9737,k){
var this__9739 = this;
var this_sym9737__9740 = this;
var coll__9741 = this_sym9737__9740;
return coll__9741.cljs$core$ILookup$_lookup$arity$2(coll__9741,k);
});
var G__9758__3 = (function (this_sym9738,k,not_found){
var this__9739 = this;
var this_sym9738__9742 = this;
var coll__9743 = this_sym9738__9742;
return coll__9743.cljs$core$ILookup$_lookup$arity$3(coll__9743,k,not_found);
});
G__9758 = function(this_sym9738,k,not_found){
switch(arguments.length){
case 2:
return G__9758__2.call(this,this_sym9738,k);
case 3:
return G__9758__3.call(this,this_sym9738,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9758;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym9721,args9722){
var this__9744 = this;
return this_sym9721.call.apply(this_sym9721,[this_sym9721].concat(args9722.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9745 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__9746 = this;
var this__9747 = this;
return cljs.core.pr_str.call(null,this__9747);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9748 = this;
if((this__9748.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__9711_SHARP_){
return cljs.core.vector.call(null,p1__9711_SHARP_,(this__9748.strobj[p1__9711_SHARP_]));
}),this__9748.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9749 = this;
return this__9749.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9750 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9751 = this;
return (new cljs.core.ObjMap(meta,this__9751.keys,this__9751.strobj,this__9751.update_count,this__9751.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9752 = this;
return this__9752.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9753 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__9753.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9754 = this;
if((function (){var and__3941__auto____9755 = goog.isString(k);
if(and__3941__auto____9755)
{return !((cljs.core.scan_array.call(null,1,k,this__9754.keys) == null));
} else
{return and__3941__auto____9755;
}
})())
{var new_keys__9756 = this__9754.keys.slice();
var new_strobj__9757 = cljs.core.obj_clone.call(null,this__9754.strobj,this__9754.keys);
new_keys__9756.splice(cljs.core.scan_array.call(null,1,k,new_keys__9756),1);
cljs.core.js_delete.call(null,new_strobj__9757,k);
return (new cljs.core.ObjMap(this__9754.meta,new_keys__9756,new_strobj__9757,(this__9754.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9762 = this;
var h__3221__auto____9763 = this__9762.__hash;
if(!((h__3221__auto____9763 == null)))
{return h__3221__auto____9763;
} else
{var h__3221__auto____9764 = cljs.core.hash_imap.call(null,coll);
this__9762.__hash = h__3221__auto____9764;
return h__3221__auto____9764;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9765 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9766 = this;
var bucket__9767 = (this__9766.hashobj[cljs.core.hash.call(null,k)]);
var i__9768 = (cljs.core.truth_(bucket__9767)?cljs.core.scan_array.call(null,2,k,bucket__9767):null);
if(cljs.core.truth_(i__9768))
{return (bucket__9767[(i__9768 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9769 = this;
var h__9770 = cljs.core.hash.call(null,k);
var bucket__9771 = (this__9769.hashobj[h__9770]);
if(cljs.core.truth_(bucket__9771))
{var new_bucket__9772 = bucket__9771.slice();
var new_hashobj__9773 = goog.object.clone(this__9769.hashobj);
(new_hashobj__9773[h__9770] = new_bucket__9772);
var temp__4090__auto____9774 = cljs.core.scan_array.call(null,2,k,new_bucket__9772);
if(cljs.core.truth_(temp__4090__auto____9774))
{var i__9775 = temp__4090__auto____9774;
(new_bucket__9772[(i__9775 + 1)] = v);
return (new cljs.core.HashMap(this__9769.meta,this__9769.count,new_hashobj__9773,null));
} else
{new_bucket__9772.push(k,v);
return (new cljs.core.HashMap(this__9769.meta,(this__9769.count + 1),new_hashobj__9773,null));
}
} else
{var new_hashobj__9776 = goog.object.clone(this__9769.hashobj);
(new_hashobj__9776[h__9770] = [k,v]);
return (new cljs.core.HashMap(this__9769.meta,(this__9769.count + 1),new_hashobj__9776,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9777 = this;
var bucket__9778 = (this__9777.hashobj[cljs.core.hash.call(null,k)]);
var i__9779 = (cljs.core.truth_(bucket__9778)?cljs.core.scan_array.call(null,2,k,bucket__9778):null);
if(cljs.core.truth_(i__9779))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9804 = null;
var G__9804__2 = (function (this_sym9780,k){
var this__9782 = this;
var this_sym9780__9783 = this;
var coll__9784 = this_sym9780__9783;
return coll__9784.cljs$core$ILookup$_lookup$arity$2(coll__9784,k);
});
var G__9804__3 = (function (this_sym9781,k,not_found){
var this__9782 = this;
var this_sym9781__9785 = this;
var coll__9786 = this_sym9781__9785;
return coll__9786.cljs$core$ILookup$_lookup$arity$3(coll__9786,k,not_found);
});
G__9804 = function(this_sym9781,k,not_found){
switch(arguments.length){
case 2:
return G__9804__2.call(this,this_sym9781,k);
case 3:
return G__9804__3.call(this,this_sym9781,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9804;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym9760,args9761){
var this__9787 = this;
return this_sym9760.call.apply(this_sym9760,[this_sym9760].concat(args9761.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9788 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9789 = this;
var this__9790 = this;
return cljs.core.pr_str.call(null,this__9790);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9791 = this;
if((this__9791.count > 0))
{var hashes__9792 = cljs.core.js_keys.call(null,this__9791.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__9759_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9791.hashobj[p1__9759_SHARP_])));
}),hashes__9792);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9793 = this;
return this__9793.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9794 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9795 = this;
return (new cljs.core.HashMap(meta,this__9795.count,this__9795.hashobj,this__9795.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9796 = this;
return this__9796.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9797 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9797.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9798 = this;
var h__9799 = cljs.core.hash.call(null,k);
var bucket__9800 = (this__9798.hashobj[h__9799]);
var i__9801 = (cljs.core.truth_(bucket__9800)?cljs.core.scan_array.call(null,2,k,bucket__9800):null);
if(cljs.core.not.call(null,i__9801))
{return coll;
} else
{var new_hashobj__9802 = goog.object.clone(this__9798.hashobj);
if((3 > bucket__9800.length))
{cljs.core.js_delete.call(null,new_hashobj__9802,h__9799);
} else
{var new_bucket__9803 = bucket__9800.slice();
new_bucket__9803.splice(i__9801,2);
(new_hashobj__9802[h__9799] = new_bucket__9803);
}
return (new cljs.core.HashMap(this__9798.meta,(this__9798.count - 1),new_hashobj__9802,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9805 = ks.length;
var i__9806 = 0;
var out__9807 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9806 < len__9805))
{{
var G__9808 = (i__9806 + 1);
var G__9809 = cljs.core.assoc.call(null,out__9807,(ks[i__9806]),(vs[i__9806]));
i__9806 = G__9808;
out__9807 = G__9809;
continue;
}
} else
{return out__9807;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9813 = m.arr;
var len__9814 = arr__9813.length;
var i__9815 = 0;
while(true){
if((len__9814 <= i__9815))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__9813[i__9815]),k))
{return i__9815;
} else
{if("\uFDD0'else")
{{
var G__9816 = (i__9815 + 2);
i__9815 = G__9816;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9819 = this;
return (new cljs.core.TransientArrayMap({},this__9819.arr.length,this__9819.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9820 = this;
var h__3221__auto____9821 = this__9820.__hash;
if(!((h__3221__auto____9821 == null)))
{return h__3221__auto____9821;
} else
{var h__3221__auto____9822 = cljs.core.hash_imap.call(null,coll);
this__9820.__hash = h__3221__auto____9822;
return h__3221__auto____9822;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9823 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9824 = this;
var idx__9825 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9825 === -1))
{return not_found;
} else
{return (this__9824.arr[(idx__9825 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9826 = this;
var idx__9827 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9827 === -1))
{if((this__9826.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9826.meta,(this__9826.cnt + 1),(function (){var G__9828__9829 = this__9826.arr.slice();
G__9828__9829.push(k);
G__9828__9829.push(v);
return G__9828__9829;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9826.arr[(idx__9827 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9826.meta,this__9826.cnt,(function (){var G__9830__9831 = this__9826.arr.slice();
(G__9830__9831[(idx__9827 + 1)] = v);
return G__9830__9831;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9832 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9864 = null;
var G__9864__2 = (function (this_sym9833,k){
var this__9835 = this;
var this_sym9833__9836 = this;
var coll__9837 = this_sym9833__9836;
return coll__9837.cljs$core$ILookup$_lookup$arity$2(coll__9837,k);
});
var G__9864__3 = (function (this_sym9834,k,not_found){
var this__9835 = this;
var this_sym9834__9838 = this;
var coll__9839 = this_sym9834__9838;
return coll__9839.cljs$core$ILookup$_lookup$arity$3(coll__9839,k,not_found);
});
G__9864 = function(this_sym9834,k,not_found){
switch(arguments.length){
case 2:
return G__9864__2.call(this,this_sym9834,k);
case 3:
return G__9864__3.call(this,this_sym9834,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9864;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9817,args9818){
var this__9840 = this;
return this_sym9817.call.apply(this_sym9817,[this_sym9817].concat(args9818.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9841 = this;
var len__9842 = this__9841.arr.length;
var i__9843 = 0;
var init__9844 = init;
while(true){
if((i__9843 < len__9842))
{var init__9845 = f.call(null,init__9844,(this__9841.arr[i__9843]),(this__9841.arr[(i__9843 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9845))
{return cljs.core.deref.call(null,init__9845);
} else
{{
var G__9865 = (i__9843 + 2);
var G__9866 = init__9845;
i__9843 = G__9865;
init__9844 = G__9866;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9846 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9847 = this;
var this__9848 = this;
return cljs.core.pr_str.call(null,this__9848);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9849 = this;
if((this__9849.cnt > 0))
{var len__9850 = this__9849.arr.length;
var array_map_seq__9851 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9850))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9849.arr[i]),(this__9849.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9851.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9852 = this;
return this__9852.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9853 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9854 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9854.cnt,this__9854.arr,this__9854.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9855 = this;
return this__9855.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9856 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9856.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9857 = this;
var idx__9858 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9858 >= 0))
{var len__9859 = this__9857.arr.length;
var new_len__9860 = (len__9859 - 2);
if((new_len__9860 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9861 = cljs.core.make_array.call(null,new_len__9860);
var s__9862 = 0;
var d__9863 = 0;
while(true){
if((s__9862 >= len__9859))
{return (new cljs.core.PersistentArrayMap(this__9857.meta,(this__9857.cnt - 1),new_arr__9861,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9857.arr[s__9862])))
{{
var G__9867 = (s__9862 + 2);
var G__9868 = d__9863;
s__9862 = G__9867;
d__9863 = G__9868;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9861[d__9863] = (this__9857.arr[s__9862]));
(new_arr__9861[(d__9863 + 1)] = (this__9857.arr[(s__9862 + 1)]));
{
var G__9869 = (s__9862 + 2);
var G__9870 = (d__9863 + 2);
s__9862 = G__9869;
d__9863 = G__9870;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__9871 = cljs.core.count.call(null,ks);
var i__9872 = 0;
var out__9873 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9872 < len__9871))
{{
var G__9874 = (i__9872 + 1);
var G__9875 = cljs.core.assoc_BANG_.call(null,out__9873,(ks[i__9872]),(vs[i__9872]));
i__9872 = G__9874;
out__9873 = G__9875;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9873);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9876 = this;
if(cljs.core.truth_(this__9876.editable_QMARK_))
{var idx__9877 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9877 >= 0))
{(this__9876.arr[idx__9877] = (this__9876.arr[(this__9876.len - 2)]));
(this__9876.arr[(idx__9877 + 1)] = (this__9876.arr[(this__9876.len - 1)]));
var G__9878__9879 = this__9876.arr;
G__9878__9879.pop();
G__9878__9879.pop();
G__9878__9879;
this__9876.len = (this__9876.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9880 = this;
if(cljs.core.truth_(this__9880.editable_QMARK_))
{var idx__9881 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9881 === -1))
{if(((this__9880.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9880.len = (this__9880.len + 2);
this__9880.arr.push(key);
this__9880.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9880.len,this__9880.arr),key,val);
}
} else
{if((val === (this__9880.arr[(idx__9881 + 1)])))
{return tcoll;
} else
{(this__9880.arr[(idx__9881 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9882 = this;
if(cljs.core.truth_(this__9882.editable_QMARK_))
{if((function (){var G__9883__9884 = o;
if(G__9883__9884)
{if((function (){var or__3943__auto____9885 = (G__9883__9884.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____9885)
{return or__3943__auto____9885;
} else
{return G__9883__9884.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9883__9884.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9883__9884);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9883__9884);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9886 = cljs.core.seq.call(null,o);
var tcoll__9887 = tcoll;
while(true){
var temp__4090__auto____9888 = cljs.core.first.call(null,es__9886);
if(cljs.core.truth_(temp__4090__auto____9888))
{var e__9889 = temp__4090__auto____9888;
{
var G__9895 = cljs.core.next.call(null,es__9886);
var G__9896 = tcoll__9887.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9887,cljs.core.key.call(null,e__9889),cljs.core.val.call(null,e__9889));
es__9886 = G__9895;
tcoll__9887 = G__9896;
continue;
}
} else
{return tcoll__9887;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9890 = this;
if(cljs.core.truth_(this__9890.editable_QMARK_))
{this__9890.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9890.len,2),this__9890.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9891 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9892 = this;
if(cljs.core.truth_(this__9892.editable_QMARK_))
{var idx__9893 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9893 === -1))
{return not_found;
} else
{return (this__9892.arr[(idx__9893 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9894 = this;
if(cljs.core.truth_(this__9894.editable_QMARK_))
{return cljs.core.quot.call(null,this__9894.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9899 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9900 = 0;
while(true){
if((i__9900 < len))
{{
var G__9901 = cljs.core.assoc_BANG_.call(null,out__9899,(arr[i__9900]),(arr[(i__9900 + 1)]));
var G__9902 = (i__9900 + 2);
out__9899 = G__9901;
i__9900 = G__9902;
continue;
}
} else
{return out__9899;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__3339__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__9907__9908 = arr.slice();
(G__9907__9908[i] = a);
return G__9907__9908;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9909__9910 = arr.slice();
(G__9909__9910[i] = a);
(G__9909__9910[j] = b);
return G__9909__9910;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__9912 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9912,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9912,(2 * i),(new_arr__9912.length - (2 * i)));
return new_arr__9912;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__9915 = inode.ensure_editable(edit);
(editable__9915.arr[i] = a);
return editable__9915;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9916 = inode.ensure_editable(edit);
(editable__9916.arr[i] = a);
(editable__9916.arr[j] = b);
return editable__9916;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__9923 = arr.length;
var i__9924 = 0;
var init__9925 = init;
while(true){
if((i__9924 < len__9923))
{var init__9928 = (function (){var k__9926 = (arr[i__9924]);
if(!((k__9926 == null)))
{return f.call(null,init__9925,k__9926,(arr[(i__9924 + 1)]));
} else
{var node__9927 = (arr[(i__9924 + 1)]);
if(!((node__9927 == null)))
{return node__9927.kv_reduce(f,init__9925);
} else
{return init__9925;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9928))
{return cljs.core.deref.call(null,init__9928);
} else
{{
var G__9929 = (i__9924 + 2);
var G__9930 = init__9928;
i__9924 = G__9929;
init__9925 = G__9930;
continue;
}
}
} else
{return init__9925;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9931 = this;
var inode__9932 = this;
if((this__9931.bitmap === bit))
{return null;
} else
{var editable__9933 = inode__9932.ensure_editable(e);
var earr__9934 = editable__9933.arr;
var len__9935 = earr__9934.length;
editable__9933.bitmap = (bit ^ editable__9933.bitmap);
cljs.core.array_copy.call(null,earr__9934,(2 * (i + 1)),earr__9934,(2 * i),(len__9935 - (2 * (i + 1))));
(earr__9934[(len__9935 - 2)] = null);
(earr__9934[(len__9935 - 1)] = null);
return editable__9933;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9936 = this;
var inode__9937 = this;
var bit__9938 = (1 << ((hash >>> shift) & 0x01f));
var idx__9939 = cljs.core.bitmap_indexed_node_index.call(null,this__9936.bitmap,bit__9938);
if(((this__9936.bitmap & bit__9938) === 0))
{var n__9940 = cljs.core.bit_count.call(null,this__9936.bitmap);
if(((2 * n__9940) < this__9936.arr.length))
{var editable__9941 = inode__9937.ensure_editable(edit);
var earr__9942 = editable__9941.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9942,(2 * idx__9939),earr__9942,(2 * (idx__9939 + 1)),(2 * (n__9940 - idx__9939)));
(earr__9942[(2 * idx__9939)] = key);
(earr__9942[((2 * idx__9939) + 1)] = val);
editable__9941.bitmap = (editable__9941.bitmap | bit__9938);
return editable__9941;
} else
{if((n__9940 >= 16))
{var nodes__9943 = cljs.core.make_array.call(null,32);
var jdx__9944 = ((hash >>> shift) & 0x01f);
(nodes__9943[jdx__9944] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9945 = 0;
var j__9946 = 0;
while(true){
if((i__9945 < 32))
{if((((this__9936.bitmap >>> i__9945) & 1) === 0))
{{
var G__9999 = (i__9945 + 1);
var G__10000 = j__9946;
i__9945 = G__9999;
j__9946 = G__10000;
continue;
}
} else
{(nodes__9943[i__9945] = ((!(((this__9936.arr[j__9946]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9936.arr[j__9946])),(this__9936.arr[j__9946]),(this__9936.arr[(j__9946 + 1)]),added_leaf_QMARK_):(this__9936.arr[(j__9946 + 1)])));
{
var G__10001 = (i__9945 + 1);
var G__10002 = (j__9946 + 2);
i__9945 = G__10001;
j__9946 = G__10002;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9940 + 1),nodes__9943));
} else
{if("\uFDD0'else")
{var new_arr__9947 = cljs.core.make_array.call(null,(2 * (n__9940 + 4)));
cljs.core.array_copy.call(null,this__9936.arr,0,new_arr__9947,0,(2 * idx__9939));
(new_arr__9947[(2 * idx__9939)] = key);
(new_arr__9947[((2 * idx__9939) + 1)] = val);
cljs.core.array_copy.call(null,this__9936.arr,(2 * idx__9939),new_arr__9947,(2 * (idx__9939 + 1)),(2 * (n__9940 - idx__9939)));
added_leaf_QMARK_.val = true;
var editable__9948 = inode__9937.ensure_editable(edit);
editable__9948.arr = new_arr__9947;
editable__9948.bitmap = (editable__9948.bitmap | bit__9938);
return editable__9948;
} else
{return null;
}
}
}
} else
{var key_or_nil__9949 = (this__9936.arr[(2 * idx__9939)]);
var val_or_node__9950 = (this__9936.arr[((2 * idx__9939) + 1)]);
if((key_or_nil__9949 == null))
{var n__9951 = val_or_node__9950.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9951 === val_or_node__9950))
{return inode__9937;
} else
{return cljs.core.edit_and_set.call(null,inode__9937,edit,((2 * idx__9939) + 1),n__9951);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9949))
{if((val === val_or_node__9950))
{return inode__9937;
} else
{return cljs.core.edit_and_set.call(null,inode__9937,edit,((2 * idx__9939) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9937,edit,(2 * idx__9939),null,((2 * idx__9939) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9949,val_or_node__9950,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9952 = this;
var inode__9953 = this;
return cljs.core.create_inode_seq.call(null,this__9952.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9954 = this;
var inode__9955 = this;
var bit__9956 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9954.bitmap & bit__9956) === 0))
{return inode__9955;
} else
{var idx__9957 = cljs.core.bitmap_indexed_node_index.call(null,this__9954.bitmap,bit__9956);
var key_or_nil__9958 = (this__9954.arr[(2 * idx__9957)]);
var val_or_node__9959 = (this__9954.arr[((2 * idx__9957) + 1)]);
if((key_or_nil__9958 == null))
{var n__9960 = val_or_node__9959.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9960 === val_or_node__9959))
{return inode__9955;
} else
{if(!((n__9960 == null)))
{return cljs.core.edit_and_set.call(null,inode__9955,edit,((2 * idx__9957) + 1),n__9960);
} else
{if((this__9954.bitmap === bit__9956))
{return null;
} else
{if("\uFDD0'else")
{return inode__9955.edit_and_remove_pair(edit,bit__9956,idx__9957);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9958))
{(removed_leaf_QMARK_[0] = true);
return inode__9955.edit_and_remove_pair(edit,bit__9956,idx__9957);
} else
{if("\uFDD0'else")
{return inode__9955;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9961 = this;
var inode__9962 = this;
if((e === this__9961.edit))
{return inode__9962;
} else
{var n__9963 = cljs.core.bit_count.call(null,this__9961.bitmap);
var new_arr__9964 = cljs.core.make_array.call(null,(((n__9963 < 0))?4:(2 * (n__9963 + 1))));
cljs.core.array_copy.call(null,this__9961.arr,0,new_arr__9964,0,(2 * n__9963));
return (new cljs.core.BitmapIndexedNode(e,this__9961.bitmap,new_arr__9964));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9965 = this;
var inode__9966 = this;
return cljs.core.inode_kv_reduce.call(null,this__9965.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9967 = this;
var inode__9968 = this;
var bit__9969 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9967.bitmap & bit__9969) === 0))
{return not_found;
} else
{var idx__9970 = cljs.core.bitmap_indexed_node_index.call(null,this__9967.bitmap,bit__9969);
var key_or_nil__9971 = (this__9967.arr[(2 * idx__9970)]);
var val_or_node__9972 = (this__9967.arr[((2 * idx__9970) + 1)]);
if((key_or_nil__9971 == null))
{return val_or_node__9972.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9971))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9971,val_or_node__9972], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9973 = this;
var inode__9974 = this;
var bit__9975 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9973.bitmap & bit__9975) === 0))
{return inode__9974;
} else
{var idx__9976 = cljs.core.bitmap_indexed_node_index.call(null,this__9973.bitmap,bit__9975);
var key_or_nil__9977 = (this__9973.arr[(2 * idx__9976)]);
var val_or_node__9978 = (this__9973.arr[((2 * idx__9976) + 1)]);
if((key_or_nil__9977 == null))
{var n__9979 = val_or_node__9978.inode_without((shift + 5),hash,key);
if((n__9979 === val_or_node__9978))
{return inode__9974;
} else
{if(!((n__9979 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9973.bitmap,cljs.core.clone_and_set.call(null,this__9973.arr,((2 * idx__9976) + 1),n__9979)));
} else
{if((this__9973.bitmap === bit__9975))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9973.bitmap ^ bit__9975),cljs.core.remove_pair.call(null,this__9973.arr,idx__9976)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9977))
{return (new cljs.core.BitmapIndexedNode(null,(this__9973.bitmap ^ bit__9975),cljs.core.remove_pair.call(null,this__9973.arr,idx__9976)));
} else
{if("\uFDD0'else")
{return inode__9974;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9980 = this;
var inode__9981 = this;
var bit__9982 = (1 << ((hash >>> shift) & 0x01f));
var idx__9983 = cljs.core.bitmap_indexed_node_index.call(null,this__9980.bitmap,bit__9982);
if(((this__9980.bitmap & bit__9982) === 0))
{var n__9984 = cljs.core.bit_count.call(null,this__9980.bitmap);
if((n__9984 >= 16))
{var nodes__9985 = cljs.core.make_array.call(null,32);
var jdx__9986 = ((hash >>> shift) & 0x01f);
(nodes__9985[jdx__9986] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9987 = 0;
var j__9988 = 0;
while(true){
if((i__9987 < 32))
{if((((this__9980.bitmap >>> i__9987) & 1) === 0))
{{
var G__10003 = (i__9987 + 1);
var G__10004 = j__9988;
i__9987 = G__10003;
j__9988 = G__10004;
continue;
}
} else
{(nodes__9985[i__9987] = ((!(((this__9980.arr[j__9988]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9980.arr[j__9988])),(this__9980.arr[j__9988]),(this__9980.arr[(j__9988 + 1)]),added_leaf_QMARK_):(this__9980.arr[(j__9988 + 1)])));
{
var G__10005 = (i__9987 + 1);
var G__10006 = (j__9988 + 2);
i__9987 = G__10005;
j__9988 = G__10006;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9984 + 1),nodes__9985));
} else
{var new_arr__9989 = cljs.core.make_array.call(null,(2 * (n__9984 + 1)));
cljs.core.array_copy.call(null,this__9980.arr,0,new_arr__9989,0,(2 * idx__9983));
(new_arr__9989[(2 * idx__9983)] = key);
(new_arr__9989[((2 * idx__9983) + 1)] = val);
cljs.core.array_copy.call(null,this__9980.arr,(2 * idx__9983),new_arr__9989,(2 * (idx__9983 + 1)),(2 * (n__9984 - idx__9983)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9980.bitmap | bit__9982),new_arr__9989));
}
} else
{var key_or_nil__9990 = (this__9980.arr[(2 * idx__9983)]);
var val_or_node__9991 = (this__9980.arr[((2 * idx__9983) + 1)]);
if((key_or_nil__9990 == null))
{var n__9992 = val_or_node__9991.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9992 === val_or_node__9991))
{return inode__9981;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9980.bitmap,cljs.core.clone_and_set.call(null,this__9980.arr,((2 * idx__9983) + 1),n__9992)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9990))
{if((val === val_or_node__9991))
{return inode__9981;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9980.bitmap,cljs.core.clone_and_set.call(null,this__9980.arr,((2 * idx__9983) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9980.bitmap,cljs.core.clone_and_set.call(null,this__9980.arr,(2 * idx__9983),null,((2 * idx__9983) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9990,val_or_node__9991,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9993 = this;
var inode__9994 = this;
var bit__9995 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9993.bitmap & bit__9995) === 0))
{return not_found;
} else
{var idx__9996 = cljs.core.bitmap_indexed_node_index.call(null,this__9993.bitmap,bit__9995);
var key_or_nil__9997 = (this__9993.arr[(2 * idx__9996)]);
var val_or_node__9998 = (this__9993.arr[((2 * idx__9996) + 1)]);
if((key_or_nil__9997 == null))
{return val_or_node__9998.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9997))
{return val_or_node__9998;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__10014 = array_node.arr;
var len__10015 = (2 * (array_node.cnt - 1));
var new_arr__10016 = cljs.core.make_array.call(null,len__10015);
var i__10017 = 0;
var j__10018 = 1;
var bitmap__10019 = 0;
while(true){
if((i__10017 < len__10015))
{if((function (){var and__3941__auto____10020 = !((i__10017 === idx));
if(and__3941__auto____10020)
{return !(((arr__10014[i__10017]) == null));
} else
{return and__3941__auto____10020;
}
})())
{(new_arr__10016[j__10018] = (arr__10014[i__10017]));
{
var G__10021 = (i__10017 + 1);
var G__10022 = (j__10018 + 2);
var G__10023 = (bitmap__10019 | (1 << i__10017));
i__10017 = G__10021;
j__10018 = G__10022;
bitmap__10019 = G__10023;
continue;
}
} else
{{
var G__10024 = (i__10017 + 1);
var G__10025 = j__10018;
var G__10026 = bitmap__10019;
i__10017 = G__10024;
j__10018 = G__10025;
bitmap__10019 = G__10026;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__10019,new_arr__10016));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10027 = this;
var inode__10028 = this;
var idx__10029 = ((hash >>> shift) & 0x01f);
var node__10030 = (this__10027.arr[idx__10029]);
if((node__10030 == null))
{var editable__10031 = cljs.core.edit_and_set.call(null,inode__10028,edit,idx__10029,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__10031.cnt = (editable__10031.cnt + 1);
return editable__10031;
} else
{var n__10032 = node__10030.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10032 === node__10030))
{return inode__10028;
} else
{return cljs.core.edit_and_set.call(null,inode__10028,edit,idx__10029,n__10032);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__10033 = this;
var inode__10034 = this;
return cljs.core.create_array_node_seq.call(null,this__10033.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10035 = this;
var inode__10036 = this;
var idx__10037 = ((hash >>> shift) & 0x01f);
var node__10038 = (this__10035.arr[idx__10037]);
if((node__10038 == null))
{return inode__10036;
} else
{var n__10039 = node__10038.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10039 === node__10038))
{return inode__10036;
} else
{if((n__10039 == null))
{if((this__10035.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10036,edit,idx__10037);
} else
{var editable__10040 = cljs.core.edit_and_set.call(null,inode__10036,edit,idx__10037,n__10039);
editable__10040.cnt = (editable__10040.cnt - 1);
return editable__10040;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__10036,edit,idx__10037,n__10039);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__10041 = this;
var inode__10042 = this;
if((e === this__10041.edit))
{return inode__10042;
} else
{return (new cljs.core.ArrayNode(e,this__10041.cnt,this__10041.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__10043 = this;
var inode__10044 = this;
var len__10045 = this__10043.arr.length;
var i__10046 = 0;
var init__10047 = init;
while(true){
if((i__10046 < len__10045))
{var node__10048 = (this__10043.arr[i__10046]);
if(!((node__10048 == null)))
{var init__10049 = node__10048.kv_reduce(f,init__10047);
if(cljs.core.reduced_QMARK_.call(null,init__10049))
{return cljs.core.deref.call(null,init__10049);
} else
{{
var G__10068 = (i__10046 + 1);
var G__10069 = init__10049;
i__10046 = G__10068;
init__10047 = G__10069;
continue;
}
}
} else
{return null;
}
} else
{return init__10047;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10050 = this;
var inode__10051 = this;
var idx__10052 = ((hash >>> shift) & 0x01f);
var node__10053 = (this__10050.arr[idx__10052]);
if(!((node__10053 == null)))
{return node__10053.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__10054 = this;
var inode__10055 = this;
var idx__10056 = ((hash >>> shift) & 0x01f);
var node__10057 = (this__10054.arr[idx__10056]);
if(!((node__10057 == null)))
{var n__10058 = node__10057.inode_without((shift + 5),hash,key);
if((n__10058 === node__10057))
{return inode__10055;
} else
{if((n__10058 == null))
{if((this__10054.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10055,null,idx__10056);
} else
{return (new cljs.core.ArrayNode(null,(this__10054.cnt - 1),cljs.core.clone_and_set.call(null,this__10054.arr,idx__10056,n__10058)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__10054.cnt,cljs.core.clone_and_set.call(null,this__10054.arr,idx__10056,n__10058)));
} else
{return null;
}
}
}
} else
{return inode__10055;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10059 = this;
var inode__10060 = this;
var idx__10061 = ((hash >>> shift) & 0x01f);
var node__10062 = (this__10059.arr[idx__10061]);
if((node__10062 == null))
{return (new cljs.core.ArrayNode(null,(this__10059.cnt + 1),cljs.core.clone_and_set.call(null,this__10059.arr,idx__10061,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__10063 = node__10062.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10063 === node__10062))
{return inode__10060;
} else
{return (new cljs.core.ArrayNode(null,this__10059.cnt,cljs.core.clone_and_set.call(null,this__10059.arr,idx__10061,n__10063)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10064 = this;
var inode__10065 = this;
var idx__10066 = ((hash >>> shift) & 0x01f);
var node__10067 = (this__10064.arr[idx__10066]);
if(!((node__10067 == null)))
{return node__10067.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__10072 = (2 * cnt);
var i__10073 = 0;
while(true){
if((i__10073 < lim__10072))
{if(cljs.core.key_test.call(null,key,(arr[i__10073])))
{return i__10073;
} else
{{
var G__10074 = (i__10073 + 2);
i__10073 = G__10074;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10075 = this;
var inode__10076 = this;
if((hash === this__10075.collision_hash))
{var idx__10077 = cljs.core.hash_collision_node_find_index.call(null,this__10075.arr,this__10075.cnt,key);
if((idx__10077 === -1))
{if((this__10075.arr.length > (2 * this__10075.cnt)))
{var editable__10078 = cljs.core.edit_and_set.call(null,inode__10076,edit,(2 * this__10075.cnt),key,((2 * this__10075.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__10078.cnt = (editable__10078.cnt + 1);
return editable__10078;
} else
{var len__10079 = this__10075.arr.length;
var new_arr__10080 = cljs.core.make_array.call(null,(len__10079 + 2));
cljs.core.array_copy.call(null,this__10075.arr,0,new_arr__10080,0,len__10079);
(new_arr__10080[len__10079] = key);
(new_arr__10080[(len__10079 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__10076.ensure_editable_array(edit,(this__10075.cnt + 1),new_arr__10080);
}
} else
{if(((this__10075.arr[(idx__10077 + 1)]) === val))
{return inode__10076;
} else
{return cljs.core.edit_and_set.call(null,inode__10076,edit,(idx__10077 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__10075.collision_hash >>> shift) & 0x01f)),[null,inode__10076,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__10081 = this;
var inode__10082 = this;
return cljs.core.create_inode_seq.call(null,this__10081.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10083 = this;
var inode__10084 = this;
var idx__10085 = cljs.core.hash_collision_node_find_index.call(null,this__10083.arr,this__10083.cnt,key);
if((idx__10085 === -1))
{return inode__10084;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__10083.cnt === 1))
{return null;
} else
{var editable__10086 = inode__10084.ensure_editable(edit);
var earr__10087 = editable__10086.arr;
(earr__10087[idx__10085] = (earr__10087[((2 * this__10083.cnt) - 2)]));
(earr__10087[(idx__10085 + 1)] = (earr__10087[((2 * this__10083.cnt) - 1)]));
(earr__10087[((2 * this__10083.cnt) - 1)] = null);
(earr__10087[((2 * this__10083.cnt) - 2)] = null);
editable__10086.cnt = (editable__10086.cnt - 1);
return editable__10086;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__10088 = this;
var inode__10089 = this;
if((e === this__10088.edit))
{return inode__10089;
} else
{var new_arr__10090 = cljs.core.make_array.call(null,(2 * (this__10088.cnt + 1)));
cljs.core.array_copy.call(null,this__10088.arr,0,new_arr__10090,0,(2 * this__10088.cnt));
return (new cljs.core.HashCollisionNode(e,this__10088.collision_hash,this__10088.cnt,new_arr__10090));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__10091 = this;
var inode__10092 = this;
return cljs.core.inode_kv_reduce.call(null,this__10091.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10093 = this;
var inode__10094 = this;
var idx__10095 = cljs.core.hash_collision_node_find_index.call(null,this__10093.arr,this__10093.cnt,key);
if((idx__10095 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10093.arr[idx__10095])))
{return cljs.core.PersistentVector.fromArray([(this__10093.arr[idx__10095]),(this__10093.arr[(idx__10095 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__10096 = this;
var inode__10097 = this;
var idx__10098 = cljs.core.hash_collision_node_find_index.call(null,this__10096.arr,this__10096.cnt,key);
if((idx__10098 === -1))
{return inode__10097;
} else
{if((this__10096.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__10096.collision_hash,(this__10096.cnt - 1),cljs.core.remove_pair.call(null,this__10096.arr,cljs.core.quot.call(null,idx__10098,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10099 = this;
var inode__10100 = this;
if((hash === this__10099.collision_hash))
{var idx__10101 = cljs.core.hash_collision_node_find_index.call(null,this__10099.arr,this__10099.cnt,key);
if((idx__10101 === -1))
{var len__10102 = this__10099.arr.length;
var new_arr__10103 = cljs.core.make_array.call(null,(len__10102 + 2));
cljs.core.array_copy.call(null,this__10099.arr,0,new_arr__10103,0,len__10102);
(new_arr__10103[len__10102] = key);
(new_arr__10103[(len__10102 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__10099.collision_hash,(this__10099.cnt + 1),new_arr__10103));
} else
{if(cljs.core._EQ_.call(null,(this__10099.arr[idx__10101]),val))
{return inode__10100;
} else
{return (new cljs.core.HashCollisionNode(null,this__10099.collision_hash,this__10099.cnt,cljs.core.clone_and_set.call(null,this__10099.arr,(idx__10101 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__10099.collision_hash >>> shift) & 0x01f)),[null,inode__10100])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10104 = this;
var inode__10105 = this;
var idx__10106 = cljs.core.hash_collision_node_find_index.call(null,this__10104.arr,this__10104.cnt,key);
if((idx__10106 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10104.arr[idx__10106])))
{return (this__10104.arr[(idx__10106 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__10107 = this;
var inode__10108 = this;
if((e === this__10107.edit))
{this__10107.arr = array;
this__10107.cnt = count;
return inode__10108;
} else
{return (new cljs.core.HashCollisionNode(this__10107.edit,this__10107.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__10113 = cljs.core.hash.call(null,key1);
if((key1hash__10113 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10113,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10114 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__10113,key1,val1,added_leaf_QMARK___10114).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___10114);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__10115 = cljs.core.hash.call(null,key1);
if((key1hash__10115 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10115,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10116 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__10115,key1,val1,added_leaf_QMARK___10116).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___10116);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10117 = this;
var h__3221__auto____10118 = this__10117.__hash;
if(!((h__3221__auto____10118 == null)))
{return h__3221__auto____10118;
} else
{var h__3221__auto____10119 = cljs.core.hash_coll.call(null,coll);
this__10117.__hash = h__3221__auto____10119;
return h__3221__auto____10119;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10120 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__10121 = this;
var this__10122 = this;
return cljs.core.pr_str.call(null,this__10122);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10123 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10124 = this;
if((this__10124.s == null))
{return cljs.core.PersistentVector.fromArray([(this__10124.nodes[this__10124.i]),(this__10124.nodes[(this__10124.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__10124.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10125 = this;
if((this__10125.s == null))
{return cljs.core.create_inode_seq.call(null,this__10125.nodes,(this__10125.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__10125.nodes,this__10125.i,cljs.core.next.call(null,this__10125.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10126 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10127 = this;
return (new cljs.core.NodeSeq(meta,this__10127.nodes,this__10127.i,this__10127.s,this__10127.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10128 = this;
return this__10128.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10129 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10129.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__10136 = nodes.length;
var j__10137 = i;
while(true){
if((j__10137 < len__10136))
{if(!(((nodes[j__10137]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__10137,null,null));
} else
{var temp__4090__auto____10138 = (nodes[(j__10137 + 1)]);
if(cljs.core.truth_(temp__4090__auto____10138))
{var node__10139 = temp__4090__auto____10138;
var temp__4090__auto____10140 = node__10139.inode_seq();
if(cljs.core.truth_(temp__4090__auto____10140))
{var node_seq__10141 = temp__4090__auto____10140;
return (new cljs.core.NodeSeq(null,nodes,(j__10137 + 2),node_seq__10141,null));
} else
{{
var G__10142 = (j__10137 + 2);
j__10137 = G__10142;
continue;
}
}
} else
{{
var G__10143 = (j__10137 + 2);
j__10137 = G__10143;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10144 = this;
var h__3221__auto____10145 = this__10144.__hash;
if(!((h__3221__auto____10145 == null)))
{return h__3221__auto____10145;
} else
{var h__3221__auto____10146 = cljs.core.hash_coll.call(null,coll);
this__10144.__hash = h__3221__auto____10146;
return h__3221__auto____10146;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10147 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__10148 = this;
var this__10149 = this;
return cljs.core.pr_str.call(null,this__10149);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10150 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10151 = this;
return cljs.core.first.call(null,this__10151.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10152 = this;
return cljs.core.create_array_node_seq.call(null,null,this__10152.nodes,this__10152.i,cljs.core.next.call(null,this__10152.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10153 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10154 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__10154.nodes,this__10154.i,this__10154.s,this__10154.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10155 = this;
return this__10155.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10156 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10156.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__10163 = nodes.length;
var j__10164 = i;
while(true){
if((j__10164 < len__10163))
{var temp__4090__auto____10165 = (nodes[j__10164]);
if(cljs.core.truth_(temp__4090__auto____10165))
{var nj__10166 = temp__4090__auto____10165;
var temp__4090__auto____10167 = nj__10166.inode_seq();
if(cljs.core.truth_(temp__4090__auto____10167))
{var ns__10168 = temp__4090__auto____10167;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__10164 + 1),ns__10168,null));
} else
{{
var G__10169 = (j__10164 + 1);
j__10164 = G__10169;
continue;
}
}
} else
{{
var G__10170 = (j__10164 + 1);
j__10164 = G__10170;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10173 = this;
return (new cljs.core.TransientHashMap({},this__10173.root,this__10173.cnt,this__10173.has_nil_QMARK_,this__10173.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10174 = this;
var h__3221__auto____10175 = this__10174.__hash;
if(!((h__3221__auto____10175 == null)))
{return h__3221__auto____10175;
} else
{var h__3221__auto____10176 = cljs.core.hash_imap.call(null,coll);
this__10174.__hash = h__3221__auto____10176;
return h__3221__auto____10176;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10177 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10178 = this;
if((k == null))
{if(this__10178.has_nil_QMARK_)
{return this__10178.nil_val;
} else
{return not_found;
}
} else
{if((this__10178.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__10178.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10179 = this;
if((k == null))
{if((function (){var and__3941__auto____10180 = this__10179.has_nil_QMARK_;
if(and__3941__auto____10180)
{return (v === this__10179.nil_val);
} else
{return and__3941__auto____10180;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10179.meta,((this__10179.has_nil_QMARK_)?this__10179.cnt:(this__10179.cnt + 1)),this__10179.root,true,v,null));
}
} else
{var added_leaf_QMARK___10181 = (new cljs.core.Box(false));
var new_root__10182 = (((this__10179.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10179.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10181);
if((new_root__10182 === this__10179.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10179.meta,((added_leaf_QMARK___10181.val)?(this__10179.cnt + 1):this__10179.cnt),new_root__10182,this__10179.has_nil_QMARK_,this__10179.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10183 = this;
if((k == null))
{return this__10183.has_nil_QMARK_;
} else
{if((this__10183.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__10183.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__10206 = null;
var G__10206__2 = (function (this_sym10184,k){
var this__10186 = this;
var this_sym10184__10187 = this;
var coll__10188 = this_sym10184__10187;
return coll__10188.cljs$core$ILookup$_lookup$arity$2(coll__10188,k);
});
var G__10206__3 = (function (this_sym10185,k,not_found){
var this__10186 = this;
var this_sym10185__10189 = this;
var coll__10190 = this_sym10185__10189;
return coll__10190.cljs$core$ILookup$_lookup$arity$3(coll__10190,k,not_found);
});
G__10206 = function(this_sym10185,k,not_found){
switch(arguments.length){
case 2:
return G__10206__2.call(this,this_sym10185,k);
case 3:
return G__10206__3.call(this,this_sym10185,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10206;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym10171,args10172){
var this__10191 = this;
return this_sym10171.call.apply(this_sym10171,[this_sym10171].concat(args10172.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10192 = this;
var init__10193 = ((this__10192.has_nil_QMARK_)?f.call(null,init,null,this__10192.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__10193))
{return cljs.core.deref.call(null,init__10193);
} else
{if(!((this__10192.root == null)))
{return this__10192.root.kv_reduce(f,init__10193);
} else
{if("\uFDD0'else")
{return init__10193;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10194 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__10195 = this;
var this__10196 = this;
return cljs.core.pr_str.call(null,this__10196);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10197 = this;
if((this__10197.cnt > 0))
{var s__10198 = ((!((this__10197.root == null)))?this__10197.root.inode_seq():null);
if(this__10197.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__10197.nil_val], true),s__10198);
} else
{return s__10198;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10199 = this;
return this__10199.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10200 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10201 = this;
return (new cljs.core.PersistentHashMap(meta,this__10201.cnt,this__10201.root,this__10201.has_nil_QMARK_,this__10201.nil_val,this__10201.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10202 = this;
return this__10202.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10203 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__10203.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10204 = this;
if((k == null))
{if(this__10204.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__10204.meta,(this__10204.cnt - 1),this__10204.root,false,null,null));
} else
{return coll;
}
} else
{if((this__10204.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__10205 = this__10204.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__10205 === this__10204.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10204.meta,(this__10204.cnt - 1),new_root__10205,this__10204.has_nil_QMARK_,this__10204.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__10207 = ks.length;
var i__10208 = 0;
var out__10209 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__10208 < len__10207))
{{
var G__10210 = (i__10208 + 1);
var G__10211 = cljs.core.assoc_BANG_.call(null,out__10209,(ks[i__10208]),(vs[i__10208]));
i__10208 = G__10210;
out__10209 = G__10211;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10209);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10212 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10213 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__10214 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10215 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10216 = this;
if((k == null))
{if(this__10216.has_nil_QMARK_)
{return this__10216.nil_val;
} else
{return null;
}
} else
{if((this__10216.root == null))
{return null;
} else
{return this__10216.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10217 = this;
if((k == null))
{if(this__10217.has_nil_QMARK_)
{return this__10217.nil_val;
} else
{return not_found;
}
} else
{if((this__10217.root == null))
{return not_found;
} else
{return this__10217.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10218 = this;
if(this__10218.edit)
{return this__10218.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__10219 = this;
var tcoll__10220 = this;
if(this__10219.edit)
{if((function (){var G__10221__10222 = o;
if(G__10221__10222)
{if((function (){var or__3943__auto____10223 = (G__10221__10222.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____10223)
{return or__3943__auto____10223;
} else
{return G__10221__10222.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10221__10222.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10221__10222);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10221__10222);
}
})())
{return tcoll__10220.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10224 = cljs.core.seq.call(null,o);
var tcoll__10225 = tcoll__10220;
while(true){
var temp__4090__auto____10226 = cljs.core.first.call(null,es__10224);
if(cljs.core.truth_(temp__4090__auto____10226))
{var e__10227 = temp__4090__auto____10226;
{
var G__10238 = cljs.core.next.call(null,es__10224);
var G__10239 = tcoll__10225.assoc_BANG_(cljs.core.key.call(null,e__10227),cljs.core.val.call(null,e__10227));
es__10224 = G__10238;
tcoll__10225 = G__10239;
continue;
}
} else
{return tcoll__10225;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__10228 = this;
var tcoll__10229 = this;
if(this__10228.edit)
{if((k == null))
{if((this__10228.nil_val === v))
{} else
{this__10228.nil_val = v;
}
if(this__10228.has_nil_QMARK_)
{} else
{this__10228.count = (this__10228.count + 1);
this__10228.has_nil_QMARK_ = true;
}
return tcoll__10229;
} else
{var added_leaf_QMARK___10230 = (new cljs.core.Box(false));
var node__10231 = (((this__10228.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10228.root).inode_assoc_BANG_(this__10228.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10230);
if((node__10231 === this__10228.root))
{} else
{this__10228.root = node__10231;
}
if(added_leaf_QMARK___10230.val)
{this__10228.count = (this__10228.count + 1);
} else
{}
return tcoll__10229;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__10232 = this;
var tcoll__10233 = this;
if(this__10232.edit)
{if((k == null))
{if(this__10232.has_nil_QMARK_)
{this__10232.has_nil_QMARK_ = false;
this__10232.nil_val = null;
this__10232.count = (this__10232.count - 1);
return tcoll__10233;
} else
{return tcoll__10233;
}
} else
{if((this__10232.root == null))
{return tcoll__10233;
} else
{var removed_leaf_QMARK___10234 = (new cljs.core.Box(false));
var node__10235 = this__10232.root.inode_without_BANG_(this__10232.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___10234);
if((node__10235 === this__10232.root))
{} else
{this__10232.root = node__10235;
}
if(cljs.core.truth_((removed_leaf_QMARK___10234[0])))
{this__10232.count = (this__10232.count - 1);
} else
{}
return tcoll__10233;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__10236 = this;
var tcoll__10237 = this;
if(this__10236.edit)
{this__10236.edit = null;
return (new cljs.core.PersistentHashMap(null,this__10236.count,this__10236.root,this__10236.has_nil_QMARK_,this__10236.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__10242 = node;
var stack__10243 = stack;
while(true){
if(!((t__10242 == null)))
{{
var G__10244 = ((ascending_QMARK_)?t__10242.left:t__10242.right);
var G__10245 = cljs.core.conj.call(null,stack__10243,t__10242);
t__10242 = G__10244;
stack__10243 = G__10245;
continue;
}
} else
{return stack__10243;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10246 = this;
var h__3221__auto____10247 = this__10246.__hash;
if(!((h__3221__auto____10247 == null)))
{return h__3221__auto____10247;
} else
{var h__3221__auto____10248 = cljs.core.hash_coll.call(null,coll);
this__10246.__hash = h__3221__auto____10248;
return h__3221__auto____10248;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10249 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__10250 = this;
var this__10251 = this;
return cljs.core.pr_str.call(null,this__10251);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10252 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10253 = this;
if((this__10253.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__10253.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__10254 = this;
return cljs.core.peek.call(null,this__10254.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__10255 = this;
var t__10256 = cljs.core.first.call(null,this__10255.stack);
var next_stack__10257 = cljs.core.tree_map_seq_push.call(null,((this__10255.ascending_QMARK_)?t__10256.right:t__10256.left),cljs.core.next.call(null,this__10255.stack),this__10255.ascending_QMARK_);
if(!((next_stack__10257 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__10257,this__10255.ascending_QMARK_,(this__10255.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10258 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10259 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__10259.stack,this__10259.ascending_QMARK_,this__10259.cnt,this__10259.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10260 = this;
return this__10260.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3941__auto____10262 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3941__auto____10262)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3941__auto____10262;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3941__auto____10264 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3941__auto____10264)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3941__auto____10264;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__10268 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__10268))
{return cljs.core.deref.call(null,init__10268);
} else
{var init__10269 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__10268):init__10268);
if(cljs.core.reduced_QMARK_.call(null,init__10269))
{return cljs.core.deref.call(null,init__10269);
} else
{var init__10270 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__10269):init__10269);
if(cljs.core.reduced_QMARK_.call(null,init__10270))
{return cljs.core.deref.call(null,init__10270);
} else
{return init__10270;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10273 = this;
var h__3221__auto____10274 = this__10273.__hash;
if(!((h__3221__auto____10274 == null)))
{return h__3221__auto____10274;
} else
{var h__3221__auto____10275 = cljs.core.hash_coll.call(null,coll);
this__10273.__hash = h__3221__auto____10275;
return h__3221__auto____10275;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10276 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10277 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10278 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10278.key,this__10278.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__10326 = null;
var G__10326__2 = (function (this_sym10279,k){
var this__10281 = this;
var this_sym10279__10282 = this;
var node__10283 = this_sym10279__10282;
return node__10283.cljs$core$ILookup$_lookup$arity$2(node__10283,k);
});
var G__10326__3 = (function (this_sym10280,k,not_found){
var this__10281 = this;
var this_sym10280__10284 = this;
var node__10285 = this_sym10280__10284;
return node__10285.cljs$core$ILookup$_lookup$arity$3(node__10285,k,not_found);
});
G__10326 = function(this_sym10280,k,not_found){
switch(arguments.length){
case 2:
return G__10326__2.call(this,this_sym10280,k);
case 3:
return G__10326__3.call(this,this_sym10280,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10326;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym10271,args10272){
var this__10286 = this;
return this_sym10271.call.apply(this_sym10271,[this_sym10271].concat(args10272.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10287 = this;
return cljs.core.PersistentVector.fromArray([this__10287.key,this__10287.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10288 = this;
return this__10288.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10289 = this;
return this__10289.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__10290 = this;
var node__10291 = this;
return ins.balance_right(node__10291);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__10292 = this;
var node__10293 = this;
return (new cljs.core.RedNode(this__10292.key,this__10292.val,this__10292.left,this__10292.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__10294 = this;
var node__10295 = this;
return cljs.core.balance_right_del.call(null,this__10294.key,this__10294.val,this__10294.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__10296 = this;
var node__10297 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__10298 = this;
var node__10299 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10299,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__10300 = this;
var node__10301 = this;
return cljs.core.balance_left_del.call(null,this__10300.key,this__10300.val,del,this__10300.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__10302 = this;
var node__10303 = this;
return ins.balance_left(node__10303);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__10304 = this;
var node__10305 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__10305,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__10327 = null;
var G__10327__0 = (function (){
var this__10306 = this;
var this__10308 = this;
return cljs.core.pr_str.call(null,this__10308);
});
G__10327 = function(){
switch(arguments.length){
case 0:
return G__10327__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10327;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__10309 = this;
var node__10310 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10310,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__10311 = this;
var node__10312 = this;
return node__10312;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10313 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10314 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10315 = this;
return cljs.core.list.call(null,this__10315.key,this__10315.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10316 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10317 = this;
return this__10317.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10318 = this;
return cljs.core.PersistentVector.fromArray([this__10318.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10319 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10319.key,this__10319.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10320 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10321 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10321.key,this__10321.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10322 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10323 = this;
if((n === 0))
{return this__10323.key;
} else
{if((n === 1))
{return this__10323.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10324 = this;
if((n === 0))
{return this__10324.key;
} else
{if((n === 1))
{return this__10324.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10325 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10330 = this;
var h__3221__auto____10331 = this__10330.__hash;
if(!((h__3221__auto____10331 == null)))
{return h__3221__auto____10331;
} else
{var h__3221__auto____10332 = cljs.core.hash_coll.call(null,coll);
this__10330.__hash = h__3221__auto____10332;
return h__3221__auto____10332;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10333 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10334 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10335 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10335.key,this__10335.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__10383 = null;
var G__10383__2 = (function (this_sym10336,k){
var this__10338 = this;
var this_sym10336__10339 = this;
var node__10340 = this_sym10336__10339;
return node__10340.cljs$core$ILookup$_lookup$arity$2(node__10340,k);
});
var G__10383__3 = (function (this_sym10337,k,not_found){
var this__10338 = this;
var this_sym10337__10341 = this;
var node__10342 = this_sym10337__10341;
return node__10342.cljs$core$ILookup$_lookup$arity$3(node__10342,k,not_found);
});
G__10383 = function(this_sym10337,k,not_found){
switch(arguments.length){
case 2:
return G__10383__2.call(this,this_sym10337,k);
case 3:
return G__10383__3.call(this,this_sym10337,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10383;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym10328,args10329){
var this__10343 = this;
return this_sym10328.call.apply(this_sym10328,[this_sym10328].concat(args10329.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10344 = this;
return cljs.core.PersistentVector.fromArray([this__10344.key,this__10344.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10345 = this;
return this__10345.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10346 = this;
return this__10346.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__10347 = this;
var node__10348 = this;
return (new cljs.core.RedNode(this__10347.key,this__10347.val,this__10347.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__10349 = this;
var node__10350 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__10351 = this;
var node__10352 = this;
return (new cljs.core.RedNode(this__10351.key,this__10351.val,this__10351.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__10353 = this;
var node__10354 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__10355 = this;
var node__10356 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10356,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__10357 = this;
var node__10358 = this;
return (new cljs.core.RedNode(this__10357.key,this__10357.val,del,this__10357.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__10359 = this;
var node__10360 = this;
return (new cljs.core.RedNode(this__10359.key,this__10359.val,ins,this__10359.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__10361 = this;
var node__10362 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10361.left))
{return (new cljs.core.RedNode(this__10361.key,this__10361.val,this__10361.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__10361.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10361.right))
{return (new cljs.core.RedNode(this__10361.right.key,this__10361.right.val,(new cljs.core.BlackNode(this__10361.key,this__10361.val,this__10361.left,this__10361.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__10361.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__10362,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__10384 = null;
var G__10384__0 = (function (){
var this__10363 = this;
var this__10365 = this;
return cljs.core.pr_str.call(null,this__10365);
});
G__10384 = function(){
switch(arguments.length){
case 0:
return G__10384__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10384;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__10366 = this;
var node__10367 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10366.right))
{return (new cljs.core.RedNode(this__10366.key,this__10366.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10366.left,null)),this__10366.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10366.left))
{return (new cljs.core.RedNode(this__10366.left.key,this__10366.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10366.left.left,null)),(new cljs.core.BlackNode(this__10366.key,this__10366.val,this__10366.left.right,this__10366.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10367,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__10368 = this;
var node__10369 = this;
return (new cljs.core.BlackNode(this__10368.key,this__10368.val,this__10368.left,this__10368.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10370 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10371 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10372 = this;
return cljs.core.list.call(null,this__10372.key,this__10372.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10373 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10374 = this;
return this__10374.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10375 = this;
return cljs.core.PersistentVector.fromArray([this__10375.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10376 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10376.key,this__10376.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10377 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10378 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10378.key,this__10378.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10379 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10380 = this;
if((n === 0))
{return this__10380.key;
} else
{if((n === 1))
{return this__10380.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10381 = this;
if((n === 0))
{return this__10381.key;
} else
{if((n === 1))
{return this__10381.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10382 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__10388 = comp.call(null,k,tree.key);
if((c__10388 === 0))
{(found[0] = tree);
return null;
} else
{if((c__10388 < 0))
{var ins__10389 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__10389 == null)))
{return tree.add_left(ins__10389);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__10390 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__10390 == null)))
{return tree.add_right(ins__10390);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__10393 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10393))
{return (new cljs.core.RedNode(app__10393.key,app__10393.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__10393.left,null)),(new cljs.core.RedNode(right.key,right.val,app__10393.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__10393,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__10394 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10394))
{return (new cljs.core.RedNode(app__10394.key,app__10394.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__10394.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__10394.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__10394,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__10400 = comp.call(null,k,tree.key);
if((c__10400 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__10400 < 0))
{var del__10401 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3943__auto____10402 = !((del__10401 == null));
if(or__3943__auto____10402)
{return or__3943__auto____10402;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__10401,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__10401,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__10403 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3943__auto____10404 = !((del__10403 == null));
if(or__3943__auto____10404)
{return or__3943__auto____10404;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__10403);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__10403,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__10407 = tree.key;
var c__10408 = comp.call(null,k,tk__10407);
if((c__10408 === 0))
{return tree.replace(tk__10407,v,tree.left,tree.right);
} else
{if((c__10408 < 0))
{return tree.replace(tk__10407,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__10407,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10411 = this;
var h__3221__auto____10412 = this__10411.__hash;
if(!((h__3221__auto____10412 == null)))
{return h__3221__auto____10412;
} else
{var h__3221__auto____10413 = cljs.core.hash_imap.call(null,coll);
this__10411.__hash = h__3221__auto____10413;
return h__3221__auto____10413;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10414 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10415 = this;
var n__10416 = coll.entry_at(k);
if(!((n__10416 == null)))
{return n__10416.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10417 = this;
var found__10418 = [null];
var t__10419 = cljs.core.tree_map_add.call(null,this__10417.comp,this__10417.tree,k,v,found__10418);
if((t__10419 == null))
{var found_node__10420 = cljs.core.nth.call(null,found__10418,0);
if(cljs.core._EQ_.call(null,v,found_node__10420.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10417.comp,cljs.core.tree_map_replace.call(null,this__10417.comp,this__10417.tree,k,v),this__10417.cnt,this__10417.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10417.comp,t__10419.blacken(),(this__10417.cnt + 1),this__10417.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10421 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__10455 = null;
var G__10455__2 = (function (this_sym10422,k){
var this__10424 = this;
var this_sym10422__10425 = this;
var coll__10426 = this_sym10422__10425;
return coll__10426.cljs$core$ILookup$_lookup$arity$2(coll__10426,k);
});
var G__10455__3 = (function (this_sym10423,k,not_found){
var this__10424 = this;
var this_sym10423__10427 = this;
var coll__10428 = this_sym10423__10427;
return coll__10428.cljs$core$ILookup$_lookup$arity$3(coll__10428,k,not_found);
});
G__10455 = function(this_sym10423,k,not_found){
switch(arguments.length){
case 2:
return G__10455__2.call(this,this_sym10423,k);
case 3:
return G__10455__3.call(this,this_sym10423,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10455;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym10409,args10410){
var this__10429 = this;
return this_sym10409.call.apply(this_sym10409,[this_sym10409].concat(args10410.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10430 = this;
if(!((this__10430.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__10430.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10431 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10432 = this;
if((this__10432.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10432.tree,false,this__10432.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__10433 = this;
var this__10434 = this;
return cljs.core.pr_str.call(null,this__10434);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__10435 = this;
var coll__10436 = this;
var t__10437 = this__10435.tree;
while(true){
if(!((t__10437 == null)))
{var c__10438 = this__10435.comp.call(null,k,t__10437.key);
if((c__10438 === 0))
{return t__10437;
} else
{if((c__10438 < 0))
{{
var G__10456 = t__10437.left;
t__10437 = G__10456;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__10457 = t__10437.right;
t__10437 = G__10457;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10439 = this;
if((this__10439.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10439.tree,ascending_QMARK_,this__10439.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10440 = this;
if((this__10440.cnt > 0))
{var stack__10441 = null;
var t__10442 = this__10440.tree;
while(true){
if(!((t__10442 == null)))
{var c__10443 = this__10440.comp.call(null,k,t__10442.key);
if((c__10443 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__10441,t__10442),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__10443 < 0))
{{
var G__10458 = cljs.core.conj.call(null,stack__10441,t__10442);
var G__10459 = t__10442.left;
stack__10441 = G__10458;
t__10442 = G__10459;
continue;
}
} else
{{
var G__10460 = stack__10441;
var G__10461 = t__10442.right;
stack__10441 = G__10460;
t__10442 = G__10461;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__10443 > 0))
{{
var G__10462 = cljs.core.conj.call(null,stack__10441,t__10442);
var G__10463 = t__10442.right;
stack__10441 = G__10462;
t__10442 = G__10463;
continue;
}
} else
{{
var G__10464 = stack__10441;
var G__10465 = t__10442.left;
stack__10441 = G__10464;
t__10442 = G__10465;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__10441 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__10441,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10444 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10445 = this;
return this__10445.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10446 = this;
if((this__10446.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10446.tree,true,this__10446.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10447 = this;
return this__10447.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10448 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10449 = this;
return (new cljs.core.PersistentTreeMap(this__10449.comp,this__10449.tree,this__10449.cnt,meta,this__10449.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10450 = this;
return this__10450.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10451 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__10451.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10452 = this;
var found__10453 = [null];
var t__10454 = cljs.core.tree_map_remove.call(null,this__10452.comp,this__10452.tree,k,found__10453);
if((t__10454 == null))
{if((cljs.core.nth.call(null,found__10453,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10452.comp,null,0,this__10452.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10452.comp,t__10454.blacken(),(this__10452.cnt - 1),this__10452.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__10468 = cljs.core.seq.call(null,keyvals);
var out__10469 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__10468)
{{
var G__10470 = cljs.core.nnext.call(null,in__10468);
var G__10471 = cljs.core.assoc_BANG_.call(null,out__10469,cljs.core.first.call(null,in__10468),cljs.core.second.call(null,in__10468));
in__10468 = G__10470;
out__10469 = G__10471;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10469);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__10472){
var keyvals = cljs.core.seq(arglist__10472);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__10473){
var keyvals = cljs.core.seq(arglist__10473);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__10477 = [];
var obj__10478 = {};
var kvs__10479 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__10479)
{ks__10477.push(cljs.core.first.call(null,kvs__10479));
(obj__10478[cljs.core.first.call(null,kvs__10479)] = cljs.core.second.call(null,kvs__10479));
{
var G__10480 = cljs.core.nnext.call(null,kvs__10479);
kvs__10479 = G__10480;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__10477,obj__10478);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__10481){
var keyvals = cljs.core.seq(arglist__10481);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__10484 = cljs.core.seq.call(null,keyvals);
var out__10485 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__10484)
{{
var G__10486 = cljs.core.nnext.call(null,in__10484);
var G__10487 = cljs.core.assoc.call(null,out__10485,cljs.core.first.call(null,in__10484),cljs.core.second.call(null,in__10484));
in__10484 = G__10486;
out__10485 = G__10487;
continue;
}
} else
{return out__10485;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__10488){
var keyvals = cljs.core.seq(arglist__10488);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__10491 = cljs.core.seq.call(null,keyvals);
var out__10492 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__10491)
{{
var G__10493 = cljs.core.nnext.call(null,in__10491);
var G__10494 = cljs.core.assoc.call(null,out__10492,cljs.core.first.call(null,in__10491),cljs.core.second.call(null,in__10491));
in__10491 = G__10493;
out__10492 = G__10494;
continue;
}
} else
{return out__10492;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__10495){
var comparator = cljs.core.first(arglist__10495);
var keyvals = cljs.core.rest(arglist__10495);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__10496_SHARP_,p2__10497_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3943__auto____10499 = p1__10496_SHARP_;
if(cljs.core.truth_(or__3943__auto____10499))
{return or__3943__auto____10499;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10497_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__10500){
var maps = cljs.core.seq(arglist__10500);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__10508 = (function (m,e){
var k__10506 = cljs.core.first.call(null,e);
var v__10507 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__10506))
{return cljs.core.assoc.call(null,m,k__10506,f.call(null,cljs.core._lookup.call(null,m,k__10506,null),v__10507));
} else
{return cljs.core.assoc.call(null,m,k__10506,v__10507);
}
});
var merge2__10510 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__10508,(function (){var or__3943__auto____10509 = m1;
if(cljs.core.truth_(or__3943__auto____10509))
{return or__3943__auto____10509;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__10510,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__10511){
var f = cljs.core.first(arglist__10511);
var maps = cljs.core.rest(arglist__10511);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__10516 = cljs.core.ObjMap.EMPTY;
var keys__10517 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__10517)
{var key__10518 = cljs.core.first.call(null,keys__10517);
var entry__10519 = cljs.core._lookup.call(null,map,key__10518,"\uFDD0'cljs.core/not-found");
{
var G__10520 = ((cljs.core.not_EQ_.call(null,entry__10519,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__10516,key__10518,entry__10519):ret__10516);
var G__10521 = cljs.core.next.call(null,keys__10517);
ret__10516 = G__10520;
keys__10517 = G__10521;
continue;
}
} else
{return ret__10516;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10525 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__10525.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10526 = this;
var h__3221__auto____10527 = this__10526.__hash;
if(!((h__3221__auto____10527 == null)))
{return h__3221__auto____10527;
} else
{var h__3221__auto____10528 = cljs.core.hash_iset.call(null,coll);
this__10526.__hash = h__3221__auto____10528;
return h__3221__auto____10528;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10529 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10530 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10530.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10551 = null;
var G__10551__2 = (function (this_sym10531,k){
var this__10533 = this;
var this_sym10531__10534 = this;
var coll__10535 = this_sym10531__10534;
return coll__10535.cljs$core$ILookup$_lookup$arity$2(coll__10535,k);
});
var G__10551__3 = (function (this_sym10532,k,not_found){
var this__10533 = this;
var this_sym10532__10536 = this;
var coll__10537 = this_sym10532__10536;
return coll__10537.cljs$core$ILookup$_lookup$arity$3(coll__10537,k,not_found);
});
G__10551 = function(this_sym10532,k,not_found){
switch(arguments.length){
case 2:
return G__10551__2.call(this,this_sym10532,k);
case 3:
return G__10551__3.call(this,this_sym10532,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10551;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10523,args10524){
var this__10538 = this;
return this_sym10523.call.apply(this_sym10523,[this_sym10523].concat(args10524.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10539 = this;
return (new cljs.core.PersistentHashSet(this__10539.meta,cljs.core.assoc.call(null,this__10539.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10540 = this;
var this__10541 = this;
return cljs.core.pr_str.call(null,this__10541);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10542 = this;
return cljs.core.keys.call(null,this__10542.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10543 = this;
return (new cljs.core.PersistentHashSet(this__10543.meta,cljs.core.dissoc.call(null,this__10543.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10544 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10545 = this;
var and__3941__auto____10546 = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto____10546)
{var and__3941__auto____10547 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____10547)
{return cljs.core.every_QMARK_.call(null,(function (p1__10522_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10522_SHARP_);
}),other);
} else
{return and__3941__auto____10547;
}
} else
{return and__3941__auto____10546;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10548 = this;
return (new cljs.core.PersistentHashSet(meta,this__10548.hash_map,this__10548.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10549 = this;
return this__10549.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10550 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__10550.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__10552 = cljs.core.count.call(null,items);
var i__10553 = 0;
var out__10554 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__10553 < len__10552))
{{
var G__10555 = (i__10553 + 1);
var G__10556 = cljs.core.conj_BANG_.call(null,out__10554,(items[i__10553]));
i__10553 = G__10555;
out__10554 = G__10556;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10554);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__10574 = null;
var G__10574__2 = (function (this_sym10560,k){
var this__10562 = this;
var this_sym10560__10563 = this;
var tcoll__10564 = this_sym10560__10563;
if((cljs.core._lookup.call(null,this__10562.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10574__3 = (function (this_sym10561,k,not_found){
var this__10562 = this;
var this_sym10561__10565 = this;
var tcoll__10566 = this_sym10561__10565;
if((cljs.core._lookup.call(null,this__10562.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10574 = function(this_sym10561,k,not_found){
switch(arguments.length){
case 2:
return G__10574__2.call(this,this_sym10561,k);
case 3:
return G__10574__3.call(this,this_sym10561,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10574;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10558,args10559){
var this__10567 = this;
return this_sym10558.call.apply(this_sym10558,[this_sym10558].concat(args10559.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10568 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10569 = this;
if((cljs.core._lookup.call(null,this__10569.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10570 = this;
return cljs.core.count.call(null,this__10570.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10571 = this;
this__10571.transient_map = cljs.core.dissoc_BANG_.call(null,this__10571.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10572 = this;
this__10572.transient_map = cljs.core.assoc_BANG_.call(null,this__10572.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10573 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__10573.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10577 = this;
var h__3221__auto____10578 = this__10577.__hash;
if(!((h__3221__auto____10578 == null)))
{return h__3221__auto____10578;
} else
{var h__3221__auto____10579 = cljs.core.hash_iset.call(null,coll);
this__10577.__hash = h__3221__auto____10579;
return h__3221__auto____10579;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10580 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10581 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10581.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10607 = null;
var G__10607__2 = (function (this_sym10582,k){
var this__10584 = this;
var this_sym10582__10585 = this;
var coll__10586 = this_sym10582__10585;
return coll__10586.cljs$core$ILookup$_lookup$arity$2(coll__10586,k);
});
var G__10607__3 = (function (this_sym10583,k,not_found){
var this__10584 = this;
var this_sym10583__10587 = this;
var coll__10588 = this_sym10583__10587;
return coll__10588.cljs$core$ILookup$_lookup$arity$3(coll__10588,k,not_found);
});
G__10607 = function(this_sym10583,k,not_found){
switch(arguments.length){
case 2:
return G__10607__2.call(this,this_sym10583,k);
case 3:
return G__10607__3.call(this,this_sym10583,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10607;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10575,args10576){
var this__10589 = this;
return this_sym10575.call.apply(this_sym10575,[this_sym10575].concat(args10576.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10590 = this;
return (new cljs.core.PersistentTreeSet(this__10590.meta,cljs.core.assoc.call(null,this__10590.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10591 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__10591.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10592 = this;
var this__10593 = this;
return cljs.core.pr_str.call(null,this__10593);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10594 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__10594.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10595 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__10595.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10596 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10597 = this;
return cljs.core._comparator.call(null,this__10597.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10598 = this;
return cljs.core.keys.call(null,this__10598.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10599 = this;
return (new cljs.core.PersistentTreeSet(this__10599.meta,cljs.core.dissoc.call(null,this__10599.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10600 = this;
return cljs.core.count.call(null,this__10600.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10601 = this;
var and__3941__auto____10602 = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto____10602)
{var and__3941__auto____10603 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____10603)
{return cljs.core.every_QMARK_.call(null,(function (p1__10557_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10557_SHARP_);
}),other);
} else
{return and__3941__auto____10603;
}
} else
{return and__3941__auto____10602;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10604 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10604.tree_map,this__10604.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10605 = this;
return this__10605.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10606 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__10606.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__10612__delegate = function (keys){
var in__10610 = cljs.core.seq.call(null,keys);
var out__10611 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__10610))
{{
var G__10613 = cljs.core.next.call(null,in__10610);
var G__10614 = cljs.core.conj_BANG_.call(null,out__10611,cljs.core.first.call(null,in__10610));
in__10610 = G__10613;
out__10611 = G__10614;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10611);
}
break;
}
};
var G__10612 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10612__delegate.call(this, keys);
};
G__10612.cljs$lang$maxFixedArity = 0;
G__10612.cljs$lang$applyTo = (function (arglist__10615){
var keys = cljs.core.seq(arglist__10615);;
return G__10612__delegate(keys);
});
G__10612.cljs$lang$arity$variadic = G__10612__delegate;
return G__10612;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__10616){
var keys = cljs.core.seq(arglist__10616);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__10618){
var comparator = cljs.core.first(arglist__10618);
var keys = cljs.core.rest(arglist__10618);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__10624 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__4090__auto____10625 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4090__auto____10625))
{var e__10626 = temp__4090__auto____10625;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__10626));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__10624,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__10617_SHARP_){
var temp__4090__auto____10627 = cljs.core.find.call(null,smap,p1__10617_SHARP_);
if(cljs.core.truth_(temp__4090__auto____10627))
{var e__10628 = temp__4090__auto____10627;
return cljs.core.second.call(null,e__10628);
} else
{return p1__10617_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__10658 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__10651,seen){
while(true){
var vec__10652__10653 = p__10651;
var f__10654 = cljs.core.nth.call(null,vec__10652__10653,0,null);
var xs__10655 = vec__10652__10653;
var temp__4092__auto____10656 = cljs.core.seq.call(null,xs__10655);
if(temp__4092__auto____10656)
{var s__10657 = temp__4092__auto____10656;
if(cljs.core.contains_QMARK_.call(null,seen,f__10654))
{{
var G__10659 = cljs.core.rest.call(null,s__10657);
var G__10660 = seen;
p__10651 = G__10659;
seen = G__10660;
continue;
}
} else
{return cljs.core.cons.call(null,f__10654,step.call(null,cljs.core.rest.call(null,s__10657),cljs.core.conj.call(null,seen,f__10654)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__10658.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__10663 = cljs.core.PersistentVector.EMPTY;
var s__10664 = s;
while(true){
if(cljs.core.next.call(null,s__10664))
{{
var G__10665 = cljs.core.conj.call(null,ret__10663,cljs.core.first.call(null,s__10664));
var G__10666 = cljs.core.next.call(null,s__10664);
ret__10663 = G__10665;
s__10664 = G__10666;
continue;
}
} else
{return cljs.core.seq.call(null,ret__10663);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3943__auto____10669 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto____10669)
{return or__3943__auto____10669;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10670 = x.lastIndexOf("/");
if((i__10670 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__10670 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3943__auto____10673 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto____10673)
{return or__3943__auto____10673;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10674 = x.lastIndexOf("/");
if((i__10674 > -1))
{return cljs.core.subs.call(null,x,2,i__10674);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__10681 = cljs.core.ObjMap.EMPTY;
var ks__10682 = cljs.core.seq.call(null,keys);
var vs__10683 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3941__auto____10684 = ks__10682;
if(and__3941__auto____10684)
{return vs__10683;
} else
{return and__3941__auto____10684;
}
})())
{{
var G__10685 = cljs.core.assoc.call(null,map__10681,cljs.core.first.call(null,ks__10682),cljs.core.first.call(null,vs__10683));
var G__10686 = cljs.core.next.call(null,ks__10682);
var G__10687 = cljs.core.next.call(null,vs__10683);
map__10681 = G__10685;
ks__10682 = G__10686;
vs__10683 = G__10687;
continue;
}
} else
{return map__10681;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__10690__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10675_SHARP_,p2__10676_SHARP_){
return max_key.call(null,k,p1__10675_SHARP_,p2__10676_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__10690 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10690__delegate.call(this, k, x, y, more);
};
G__10690.cljs$lang$maxFixedArity = 3;
G__10690.cljs$lang$applyTo = (function (arglist__10691){
var k = cljs.core.first(arglist__10691);
var x = cljs.core.first(cljs.core.next(arglist__10691));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10691)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10691)));
return G__10690__delegate(k, x, y, more);
});
G__10690.cljs$lang$arity$variadic = G__10690__delegate;
return G__10690;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__10692__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10688_SHARP_,p2__10689_SHARP_){
return min_key.call(null,k,p1__10688_SHARP_,p2__10689_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__10692 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10692__delegate.call(this, k, x, y, more);
};
G__10692.cljs$lang$maxFixedArity = 3;
G__10692.cljs$lang$applyTo = (function (arglist__10693){
var k = cljs.core.first(arglist__10693);
var x = cljs.core.first(cljs.core.next(arglist__10693));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10693)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10693)));
return G__10692__delegate(k, x, y, more);
});
G__10692.cljs$lang$arity$variadic = G__10692__delegate;
return G__10692;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10696 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10696)
{var s__10697 = temp__4092__auto____10696;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__10697),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__10697)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10700 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10700)
{var s__10701 = temp__4092__auto____10700;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__10701))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10701),take_while.call(null,pred,cljs.core.rest.call(null,s__10701)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__10703 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__10703.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__10715 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4092__auto____10716 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4092__auto____10716))
{var vec__10717__10718 = temp__4092__auto____10716;
var e__10719 = cljs.core.nth.call(null,vec__10717__10718,0,null);
var s__10720 = vec__10717__10718;
if(cljs.core.truth_(include__10715.call(null,e__10719)))
{return s__10720;
} else
{return cljs.core.next.call(null,s__10720);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10715,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____10721 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4092__auto____10721))
{var vec__10722__10723 = temp__4092__auto____10721;
var e__10724 = cljs.core.nth.call(null,vec__10722__10723,0,null);
var s__10725 = vec__10722__10723;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__10724))?s__10725:cljs.core.next.call(null,s__10725)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__10737 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4092__auto____10738 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4092__auto____10738))
{var vec__10739__10740 = temp__4092__auto____10738;
var e__10741 = cljs.core.nth.call(null,vec__10739__10740,0,null);
var s__10742 = vec__10739__10740;
if(cljs.core.truth_(include__10737.call(null,e__10741)))
{return s__10742;
} else
{return cljs.core.next.call(null,s__10742);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10737,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____10743 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4092__auto____10743))
{var vec__10744__10745 = temp__4092__auto____10743;
var e__10746 = cljs.core.nth.call(null,vec__10744__10745,0,null);
var s__10747 = vec__10744__10745;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__10746))?s__10747:cljs.core.next.call(null,s__10747)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__10748 = this;
var h__3221__auto____10749 = this__10748.__hash;
if(!((h__3221__auto____10749 == null)))
{return h__3221__auto____10749;
} else
{var h__3221__auto____10750 = cljs.core.hash_coll.call(null,rng);
this__10748.__hash = h__3221__auto____10750;
return h__3221__auto____10750;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__10751 = this;
if((this__10751.step > 0))
{if(((this__10751.start + this__10751.step) < this__10751.end))
{return (new cljs.core.Range(this__10751.meta,(this__10751.start + this__10751.step),this__10751.end,this__10751.step,null));
} else
{return null;
}
} else
{if(((this__10751.start + this__10751.step) > this__10751.end))
{return (new cljs.core.Range(this__10751.meta,(this__10751.start + this__10751.step),this__10751.end,this__10751.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__10752 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__10753 = this;
var this__10754 = this;
return cljs.core.pr_str.call(null,this__10754);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__10755 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__10756 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__10757 = this;
if((this__10757.step > 0))
{if((this__10757.start < this__10757.end))
{return rng;
} else
{return null;
}
} else
{if((this__10757.start > this__10757.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__10758 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__10758.end - this__10758.start) / this__10758.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__10759 = this;
return this__10759.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__10760 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__10760.meta,(this__10760.start + this__10760.step),this__10760.end,this__10760.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__10761 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__10762 = this;
return (new cljs.core.Range(meta,this__10762.start,this__10762.end,this__10762.step,this__10762.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__10763 = this;
return this__10763.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__10764 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10764.start + (n * this__10764.step));
} else
{if((function (){var and__3941__auto____10765 = (this__10764.start > this__10764.end);
if(and__3941__auto____10765)
{return (this__10764.step === 0);
} else
{return and__3941__auto____10765;
}
})())
{return this__10764.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__10766 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10766.start + (n * this__10766.step));
} else
{if((function (){var and__3941__auto____10767 = (this__10766.start > this__10766.end);
if(and__3941__auto____10767)
{return (this__10766.step === 0);
} else
{return and__3941__auto____10767;
}
})())
{return this__10766.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__10768 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10768.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10771 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10771)
{var s__10772 = temp__4092__auto____10771;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10772),take_nth.call(null,n,cljs.core.drop.call(null,n,s__10772)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10779 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10779)
{var s__10780 = temp__4092__auto____10779;
var fst__10781 = cljs.core.first.call(null,s__10780);
var fv__10782 = f.call(null,fst__10781);
var run__10783 = cljs.core.cons.call(null,fst__10781,cljs.core.take_while.call(null,(function (p1__10773_SHARP_){
return cljs.core._EQ_.call(null,fv__10782,f.call(null,p1__10773_SHARP_));
}),cljs.core.next.call(null,s__10780)));
return cljs.core.cons.call(null,run__10783,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__10783),s__10780))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____10798 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____10798)
{var s__10799 = temp__4090__auto____10798;
return reductions.call(null,f,cljs.core.first.call(null,s__10799),cljs.core.rest.call(null,s__10799));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10800 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10800)
{var s__10801 = temp__4092__auto____10800;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__10801)),cljs.core.rest.call(null,s__10801));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__10804 = null;
var G__10804__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__10804__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__10804__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__10804__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__10804__4 = (function() { 
var G__10805__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__10805 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10805__delegate.call(this, x, y, z, args);
};
G__10805.cljs$lang$maxFixedArity = 3;
G__10805.cljs$lang$applyTo = (function (arglist__10806){
var x = cljs.core.first(arglist__10806);
var y = cljs.core.first(cljs.core.next(arglist__10806));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10806)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10806)));
return G__10805__delegate(x, y, z, args);
});
G__10805.cljs$lang$arity$variadic = G__10805__delegate;
return G__10805;
})()
;
G__10804 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10804__0.call(this);
case 1:
return G__10804__1.call(this,x);
case 2:
return G__10804__2.call(this,x,y);
case 3:
return G__10804__3.call(this,x,y,z);
default:
return G__10804__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10804.cljs$lang$maxFixedArity = 3;
G__10804.cljs$lang$applyTo = G__10804__4.cljs$lang$applyTo;
return G__10804;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10807 = null;
var G__10807__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__10807__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__10807__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__10807__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__10807__4 = (function() { 
var G__10808__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10808 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10808__delegate.call(this, x, y, z, args);
};
G__10808.cljs$lang$maxFixedArity = 3;
G__10808.cljs$lang$applyTo = (function (arglist__10809){
var x = cljs.core.first(arglist__10809);
var y = cljs.core.first(cljs.core.next(arglist__10809));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10809)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10809)));
return G__10808__delegate(x, y, z, args);
});
G__10808.cljs$lang$arity$variadic = G__10808__delegate;
return G__10808;
})()
;
G__10807 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10807__0.call(this);
case 1:
return G__10807__1.call(this,x);
case 2:
return G__10807__2.call(this,x,y);
case 3:
return G__10807__3.call(this,x,y,z);
default:
return G__10807__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10807.cljs$lang$maxFixedArity = 3;
G__10807.cljs$lang$applyTo = G__10807__4.cljs$lang$applyTo;
return G__10807;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10810 = null;
var G__10810__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__10810__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__10810__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__10810__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__10810__4 = (function() { 
var G__10811__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__10811 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10811__delegate.call(this, x, y, z, args);
};
G__10811.cljs$lang$maxFixedArity = 3;
G__10811.cljs$lang$applyTo = (function (arglist__10812){
var x = cljs.core.first(arglist__10812);
var y = cljs.core.first(cljs.core.next(arglist__10812));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10812)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10812)));
return G__10811__delegate(x, y, z, args);
});
G__10811.cljs$lang$arity$variadic = G__10811__delegate;
return G__10811;
})()
;
G__10810 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10810__0.call(this);
case 1:
return G__10810__1.call(this,x);
case 2:
return G__10810__2.call(this,x,y);
case 3:
return G__10810__3.call(this,x,y,z);
default:
return G__10810__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10810.cljs$lang$maxFixedArity = 3;
G__10810.cljs$lang$applyTo = G__10810__4.cljs$lang$applyTo;
return G__10810;
})()
});
var juxt__4 = (function() { 
var G__10813__delegate = function (f,g,h,fs){
var fs__10803 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__10814 = null;
var G__10814__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__10784_SHARP_,p2__10785_SHARP_){
return cljs.core.conj.call(null,p1__10784_SHARP_,p2__10785_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__10803);
});
var G__10814__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__10786_SHARP_,p2__10787_SHARP_){
return cljs.core.conj.call(null,p1__10786_SHARP_,p2__10787_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__10803);
});
var G__10814__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__10788_SHARP_,p2__10789_SHARP_){
return cljs.core.conj.call(null,p1__10788_SHARP_,p2__10789_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__10803);
});
var G__10814__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__10790_SHARP_,p2__10791_SHARP_){
return cljs.core.conj.call(null,p1__10790_SHARP_,p2__10791_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__10803);
});
var G__10814__4 = (function() { 
var G__10815__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__10792_SHARP_,p2__10793_SHARP_){
return cljs.core.conj.call(null,p1__10792_SHARP_,cljs.core.apply.call(null,p2__10793_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10803);
};
var G__10815 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10815__delegate.call(this, x, y, z, args);
};
G__10815.cljs$lang$maxFixedArity = 3;
G__10815.cljs$lang$applyTo = (function (arglist__10816){
var x = cljs.core.first(arglist__10816);
var y = cljs.core.first(cljs.core.next(arglist__10816));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10816)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10816)));
return G__10815__delegate(x, y, z, args);
});
G__10815.cljs$lang$arity$variadic = G__10815__delegate;
return G__10815;
})()
;
G__10814 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10814__0.call(this);
case 1:
return G__10814__1.call(this,x);
case 2:
return G__10814__2.call(this,x,y);
case 3:
return G__10814__3.call(this,x,y,z);
default:
return G__10814__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10814.cljs$lang$maxFixedArity = 3;
G__10814.cljs$lang$applyTo = G__10814__4.cljs$lang$applyTo;
return G__10814;
})()
};
var G__10813 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10813__delegate.call(this, f, g, h, fs);
};
G__10813.cljs$lang$maxFixedArity = 3;
G__10813.cljs$lang$applyTo = (function (arglist__10817){
var f = cljs.core.first(arglist__10817);
var g = cljs.core.first(cljs.core.next(arglist__10817));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10817)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10817)));
return G__10813__delegate(f, g, h, fs);
});
G__10813.cljs$lang$arity$variadic = G__10813__delegate;
return G__10813;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__10820 = cljs.core.next.call(null,coll);
coll = G__10820;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____10819 = cljs.core.seq.call(null,coll);
if(and__3941__auto____10819)
{return (n > 0);
} else
{return and__3941__auto____10819;
}
})()))
{{
var G__10821 = (n - 1);
var G__10822 = cljs.core.next.call(null,coll);
n = G__10821;
coll = G__10822;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__10824 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__10824),s))
{if((cljs.core.count.call(null,matches__10824) === 1))
{return cljs.core.first.call(null,matches__10824);
} else
{return cljs.core.vec.call(null,matches__10824);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__10826 = re.exec(s);
if((matches__10826 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__10826) === 1))
{return cljs.core.first.call(null,matches__10826);
} else
{return cljs.core.vec.call(null,matches__10826);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10831 = cljs.core.re_find.call(null,re,s);
var match_idx__10832 = s.search(re);
var match_str__10833 = ((cljs.core.coll_QMARK_.call(null,match_data__10831))?cljs.core.first.call(null,match_data__10831):match_data__10831);
var post_match__10834 = cljs.core.subs.call(null,s,(match_idx__10832 + cljs.core.count.call(null,match_str__10833)));
if(cljs.core.truth_(match_data__10831))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__10831,re_seq.call(null,re,post_match__10834));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10841__10842 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10843 = cljs.core.nth.call(null,vec__10841__10842,0,null);
var flags__10844 = cljs.core.nth.call(null,vec__10841__10842,1,null);
var pattern__10845 = cljs.core.nth.call(null,vec__10841__10842,2,null);
return (new RegExp(pattern__10845,flags__10844));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__10835_SHARP_){
return print_one.call(null,p1__10835_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3941__auto____10855 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3941__auto____10855))
{var and__3941__auto____10859 = (function (){var G__10856__10857 = obj;
if(G__10856__10857)
{if((function (){var or__3943__auto____10858 = (G__10856__10857.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____10858)
{return or__3943__auto____10858;
} else
{return G__10856__10857.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10856__10857.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10856__10857);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10856__10857);
}
})();
if(cljs.core.truth_(and__3941__auto____10859))
{return cljs.core.meta.call(null,obj);
} else
{return and__3941__auto____10859;
}
} else
{return and__3941__auto____10855;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3941__auto____10860 = !((obj == null));
if(and__3941__auto____10860)
{return obj.cljs$lang$type;
} else
{return and__3941__auto____10860;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10861__10862 = obj;
if(G__10861__10862)
{if((function (){var or__3943__auto____10863 = (G__10861__10862.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto____10863)
{return or__3943__auto____10863;
} else
{return G__10861__10862.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10861__10862.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10861__10862);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10861__10862);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10883 = (new goog.string.StringBuffer());
var G__10884__10885 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10884__10885)
{var string__10886 = cljs.core.first.call(null,G__10884__10885);
var G__10884__10887 = G__10884__10885;
while(true){
sb__10883.append(string__10886);
var temp__4092__auto____10888 = cljs.core.next.call(null,G__10884__10887);
if(temp__4092__auto____10888)
{var G__10884__10889 = temp__4092__auto____10888;
{
var G__10902 = cljs.core.first.call(null,G__10884__10889);
var G__10903 = G__10884__10889;
string__10886 = G__10902;
G__10884__10887 = G__10903;
continue;
}
} else
{}
break;
}
} else
{}
var G__10890__10891 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10890__10891)
{var obj__10892 = cljs.core.first.call(null,G__10890__10891);
var G__10890__10893 = G__10890__10891;
while(true){
sb__10883.append(" ");
var G__10894__10895 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10892,opts));
if(G__10894__10895)
{var string__10896 = cljs.core.first.call(null,G__10894__10895);
var G__10894__10897 = G__10894__10895;
while(true){
sb__10883.append(string__10896);
var temp__4092__auto____10898 = cljs.core.next.call(null,G__10894__10897);
if(temp__4092__auto____10898)
{var G__10894__10899 = temp__4092__auto____10898;
{
var G__10904 = cljs.core.first.call(null,G__10894__10899);
var G__10905 = G__10894__10899;
string__10896 = G__10904;
G__10894__10897 = G__10905;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____10900 = cljs.core.next.call(null,G__10890__10893);
if(temp__4092__auto____10900)
{var G__10890__10901 = temp__4092__auto____10900;
{
var G__10906 = cljs.core.first.call(null,G__10890__10901);
var G__10907 = G__10890__10901;
obj__10892 = G__10906;
G__10890__10893 = G__10907;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10883;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__10909 = cljs.core.pr_sb.call(null,objs,opts);
sb__10909.append("\n");
return [cljs.core.str(sb__10909)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10928__10929 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10928__10929)
{var string__10930 = cljs.core.first.call(null,G__10928__10929);
var G__10928__10931 = G__10928__10929;
while(true){
cljs.core.string_print.call(null,string__10930);
var temp__4092__auto____10932 = cljs.core.next.call(null,G__10928__10931);
if(temp__4092__auto____10932)
{var G__10928__10933 = temp__4092__auto____10932;
{
var G__10946 = cljs.core.first.call(null,G__10928__10933);
var G__10947 = G__10928__10933;
string__10930 = G__10946;
G__10928__10931 = G__10947;
continue;
}
} else
{}
break;
}
} else
{}
var G__10934__10935 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10934__10935)
{var obj__10936 = cljs.core.first.call(null,G__10934__10935);
var G__10934__10937 = G__10934__10935;
while(true){
cljs.core.string_print.call(null," ");
var G__10938__10939 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10936,opts));
if(G__10938__10939)
{var string__10940 = cljs.core.first.call(null,G__10938__10939);
var G__10938__10941 = G__10938__10939;
while(true){
cljs.core.string_print.call(null,string__10940);
var temp__4092__auto____10942 = cljs.core.next.call(null,G__10938__10941);
if(temp__4092__auto____10942)
{var G__10938__10943 = temp__4092__auto____10942;
{
var G__10948 = cljs.core.first.call(null,G__10938__10943);
var G__10949 = G__10938__10943;
string__10940 = G__10948;
G__10938__10941 = G__10949;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____10944 = cljs.core.next.call(null,G__10934__10937);
if(temp__4092__auto____10944)
{var G__10934__10945 = temp__4092__auto____10944;
{
var G__10950 = cljs.core.first.call(null,G__10934__10945);
var G__10951 = G__10934__10945;
obj__10936 = G__10950;
G__10934__10937 = G__10951;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__10952){
var objs = cljs.core.seq(arglist__10952);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__10953){
var objs = cljs.core.seq(arglist__10953);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__10954){
var objs = cljs.core.seq(arglist__10954);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__10955){
var objs = cljs.core.seq(arglist__10955);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10956){
var objs = cljs.core.seq(arglist__10956);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10957){
var objs = cljs.core.seq(arglist__10957);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10958){
var objs = cljs.core.seq(arglist__10958);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10959){
var objs = cljs.core.seq(arglist__10959);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__10960){
var fmt = cljs.core.first(arglist__10960);
var args = cljs.core.rest(arglist__10960);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10961 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10961,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10962 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10962,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10963 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10963,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__4092__auto____10964 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto____10964))
{var nspc__10965 = temp__4092__auto____10964;
return [cljs.core.str(nspc__10965),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__4092__auto____10966 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto____10966))
{var nspc__10967 = temp__4092__auto____10966;
return [cljs.core.str(nspc__10967),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10968 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10968,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10970 = (function (n,len){
var ns__10969 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10969) < len))
{{
var G__10972 = [cljs.core.str("0"),cljs.core.str(ns__10969)].join('');
ns__10969 = G__10972;
continue;
}
} else
{return ns__10969;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10970.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10970.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10970.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10970.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10970.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10970.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10971 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10971,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10973 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10974 = this;
var G__10975__10976 = cljs.core.seq.call(null,this__10974.watches);
if(G__10975__10976)
{var G__10978__10980 = cljs.core.first.call(null,G__10975__10976);
var vec__10979__10981 = G__10978__10980;
var key__10982 = cljs.core.nth.call(null,vec__10979__10981,0,null);
var f__10983 = cljs.core.nth.call(null,vec__10979__10981,1,null);
var G__10975__10984 = G__10975__10976;
var G__10978__10985 = G__10978__10980;
var G__10975__10986 = G__10975__10984;
while(true){
var vec__10987__10988 = G__10978__10985;
var key__10989 = cljs.core.nth.call(null,vec__10987__10988,0,null);
var f__10990 = cljs.core.nth.call(null,vec__10987__10988,1,null);
var G__10975__10991 = G__10975__10986;
f__10990.call(null,key__10989,this$,oldval,newval);
var temp__4092__auto____10992 = cljs.core.next.call(null,G__10975__10991);
if(temp__4092__auto____10992)
{var G__10975__10993 = temp__4092__auto____10992;
{
var G__11000 = cljs.core.first.call(null,G__10975__10993);
var G__11001 = G__10975__10993;
G__10978__10985 = G__11000;
G__10975__10986 = G__11001;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10994 = this;
return this$.watches = cljs.core.assoc.call(null,this__10994.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10995 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10995.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10996 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10996.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10997 = this;
return this__10997.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10998 = this;
return this__10998.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10999 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__11013__delegate = function (x,p__11002){
var map__11008__11009 = p__11002;
var map__11008__11010 = ((cljs.core.seq_QMARK_.call(null,map__11008__11009))?cljs.core.apply.call(null,cljs.core.hash_map,map__11008__11009):map__11008__11009);
var validator__11011 = cljs.core._lookup.call(null,map__11008__11010,"\uFDD0'validator",null);
var meta__11012 = cljs.core._lookup.call(null,map__11008__11010,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__11012,validator__11011,null));
};
var G__11013 = function (x,var_args){
var p__11002 = null;
if (goog.isDef(var_args)) {
  p__11002 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11013__delegate.call(this, x, p__11002);
};
G__11013.cljs$lang$maxFixedArity = 1;
G__11013.cljs$lang$applyTo = (function (arglist__11014){
var x = cljs.core.first(arglist__11014);
var p__11002 = cljs.core.rest(arglist__11014);
return G__11013__delegate(x, p__11002);
});
G__11013.cljs$lang$arity$variadic = G__11013__delegate;
return G__11013;
})()
;
atom = function(x,var_args){
var p__11002 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__4092__auto____11018 = a.validator;
if(cljs.core.truth_(temp__4092__auto____11018))
{var validate__11019 = temp__4092__auto____11018;
if(cljs.core.truth_(validate__11019.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value__11020 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__11020,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__11021__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__11021 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11021__delegate.call(this, a, f, x, y, z, more);
};
G__11021.cljs$lang$maxFixedArity = 5;
G__11021.cljs$lang$applyTo = (function (arglist__11022){
var a = cljs.core.first(arglist__11022);
var f = cljs.core.first(cljs.core.next(arglist__11022));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11022)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11022))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11022)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11022)))));
return G__11021__delegate(a, f, x, y, z, more);
});
G__11021.cljs$lang$arity$variadic = G__11021__delegate;
return G__11021;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__11023){
var iref = cljs.core.first(arglist__11023);
var f = cljs.core.first(cljs.core.next(arglist__11023));
var args = cljs.core.rest(cljs.core.next(arglist__11023));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__11024 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__11024.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11025 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__11025.state,(function (p__11026){
var map__11027__11028 = p__11026;
var map__11027__11029 = ((cljs.core.seq_QMARK_.call(null,map__11027__11028))?cljs.core.apply.call(null,cljs.core.hash_map,map__11027__11028):map__11027__11028);
var curr_state__11030 = map__11027__11029;
var done__11031 = cljs.core._lookup.call(null,map__11027__11029,"\uFDD0'done",null);
if(cljs.core.truth_(done__11031))
{return curr_state__11030;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__11025.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__11060__11061 = options;
var map__11060__11062 = ((cljs.core.seq_QMARK_.call(null,map__11060__11061))?cljs.core.apply.call(null,cljs.core.hash_map,map__11060__11061):map__11060__11061);
var keywordize_keys__11063 = cljs.core._lookup.call(null,map__11060__11062,"\uFDD0'keywordize-keys",null);
var keyfn__11064 = (cljs.core.truth_(keywordize_keys__11063)?cljs.core.keyword:cljs.core.str);
var f__11087 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__3491__auto____11086 = (function iter__11076(s__11077){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11077__11082 = s__11077;
while(true){
var temp__4092__auto____11083 = cljs.core.seq.call(null,s__11077__11082);
if(temp__4092__auto____11083)
{var xs__4579__auto____11084 = temp__4092__auto____11083;
var k__11085 = cljs.core.first.call(null,xs__4579__auto____11084);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__11064.call(null,k__11085),thisfn.call(null,(x[k__11085]))], true),iter__11076.call(null,cljs.core.rest.call(null,s__11077__11082)));
} else
{return null;
}
break;
}
}),null));
});
return iter__3491__auto____11086.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__11087.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__11088){
var x = cljs.core.first(arglist__11088);
var options = cljs.core.rest(arglist__11088);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__11093 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__11097__delegate = function (args){
var temp__4090__auto____11094 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__11093),args,null);
if(cljs.core.truth_(temp__4090__auto____11094))
{var v__11095 = temp__4090__auto____11094;
return v__11095;
} else
{var ret__11096 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__11093,cljs.core.assoc,args,ret__11096);
return ret__11096;
}
};
var G__11097 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11097__delegate.call(this, args);
};
G__11097.cljs$lang$maxFixedArity = 0;
G__11097.cljs$lang$applyTo = (function (arglist__11098){
var args = cljs.core.seq(arglist__11098);;
return G__11097__delegate(args);
});
G__11097.cljs$lang$arity$variadic = G__11097__delegate;
return G__11097;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__11100 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__11100))
{{
var G__11101 = ret__11100;
f = G__11101;
continue;
}
} else
{return ret__11100;
}
break;
}
});
var trampoline__2 = (function() { 
var G__11102__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__11102 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11102__delegate.call(this, f, args);
};
G__11102.cljs$lang$maxFixedArity = 1;
G__11102.cljs$lang$applyTo = (function (arglist__11103){
var f = cljs.core.first(arglist__11103);
var args = cljs.core.rest(arglist__11103);
return G__11102__delegate(f, args);
});
G__11102.cljs$lang$arity$variadic = G__11102__delegate;
return G__11102;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__11105 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__11105,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__11105,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3943__auto____11114 = cljs.core._EQ_.call(null,child,parent);
if(or__3943__auto____11114)
{return or__3943__auto____11114;
} else
{var or__3943__auto____11115 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3943__auto____11115)
{return or__3943__auto____11115;
} else
{var and__3941__auto____11116 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3941__auto____11116)
{var and__3941__auto____11117 = cljs.core.vector_QMARK_.call(null,child);
if(and__3941__auto____11117)
{var and__3941__auto____11118 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3941__auto____11118)
{var ret__11119 = true;
var i__11120 = 0;
while(true){
if((function (){var or__3943__auto____11121 = cljs.core.not.call(null,ret__11119);
if(or__3943__auto____11121)
{return or__3943__auto____11121;
} else
{return (i__11120 === cljs.core.count.call(null,parent));
}
})())
{return ret__11119;
} else
{{
var G__11122 = isa_QMARK_.call(null,h,child.call(null,i__11120),parent.call(null,i__11120));
var G__11123 = (i__11120 + 1);
ret__11119 = G__11122;
i__11120 = G__11123;
continue;
}
}
break;
}
} else
{return and__3941__auto____11118;
}
} else
{return and__3941__auto____11117;
}
} else
{return and__3941__auto____11116;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724,"\uFDD0'column",12))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728,"\uFDD0'column",12))))].join('')));
}
var tp__11132 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__11133 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__11134 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__11135 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3943__auto____11136 = ((cljs.core.contains_QMARK_.call(null,tp__11132.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__11134.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__11134.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__11132,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__11135.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__11133,parent,ta__11134),"\uFDD0'descendants":tf__11135.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__11134,tag,td__11133)});
})());
if(cljs.core.truth_(or__3943__auto____11136))
{return or__3943__auto____11136;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__11141 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__11142 = (cljs.core.truth_(parentMap__11141.call(null,tag))?cljs.core.disj.call(null,parentMap__11141.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__11143 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__11142))?cljs.core.assoc.call(null,parentMap__11141,tag,childsParents__11142):cljs.core.dissoc.call(null,parentMap__11141,tag));
var deriv_seq__11144 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__11124_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__11124_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__11124_SHARP_),cljs.core.second.call(null,p1__11124_SHARP_)));
}),cljs.core.seq.call(null,newParents__11143)));
if(cljs.core.contains_QMARK_.call(null,parentMap__11141.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__11125_SHARP_,p2__11126_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__11125_SHARP_,p2__11126_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__11144));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__11152 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3943__auto____11154 = (cljs.core.truth_((function (){var and__3941__auto____11153 = xprefs__11152;
if(cljs.core.truth_(and__3941__auto____11153))
{return xprefs__11152.call(null,y);
} else
{return and__3941__auto____11153;
}
})())?true:null);
if(cljs.core.truth_(or__3943__auto____11154))
{return or__3943__auto____11154;
} else
{var or__3943__auto____11156 = (function (){var ps__11155 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__11155) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__11155),prefer_table)))
{} else
{}
{
var G__11159 = cljs.core.rest.call(null,ps__11155);
ps__11155 = G__11159;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____11156))
{return or__3943__auto____11156;
} else
{var or__3943__auto____11158 = (function (){var ps__11157 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__11157) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__11157),y,prefer_table)))
{} else
{}
{
var G__11160 = cljs.core.rest.call(null,ps__11157);
ps__11157 = G__11160;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____11158))
{return or__3943__auto____11158;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3943__auto____11162 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3943__auto____11162))
{return or__3943__auto____11162;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__11180 = cljs.core.reduce.call(null,(function (be,p__11172){
var vec__11173__11174 = p__11172;
var k__11175 = cljs.core.nth.call(null,vec__11173__11174,0,null);
var ___11176 = cljs.core.nth.call(null,vec__11173__11174,1,null);
var e__11177 = vec__11173__11174;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__11175))
{var be2__11179 = (cljs.core.truth_((function (){var or__3943__auto____11178 = (be == null);
if(or__3943__auto____11178)
{return or__3943__auto____11178;
} else
{return cljs.core.dominates.call(null,k__11175,cljs.core.first.call(null,be),prefer_table);
}
})())?e__11177:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__11179),k__11175,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__11175),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__11179)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__11179;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__11180))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__11180));
return cljs.core.second.call(null,best_entry__11180);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3941__auto____11185 = mf;
if(and__3941__auto____11185)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3941__auto____11185;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__3392__auto____11186 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____11187 = (cljs.core._reset[goog.typeOf(x__3392__auto____11186)]);
if(or__3943__auto____11187)
{return or__3943__auto____11187;
} else
{var or__3943__auto____11188 = (cljs.core._reset["_"]);
if(or__3943__auto____11188)
{return or__3943__auto____11188;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3941__auto____11193 = mf;
if(and__3941__auto____11193)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3941__auto____11193;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__3392__auto____11194 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____11195 = (cljs.core._add_method[goog.typeOf(x__3392__auto____11194)]);
if(or__3943__auto____11195)
{return or__3943__auto____11195;
} else
{var or__3943__auto____11196 = (cljs.core._add_method["_"]);
if(or__3943__auto____11196)
{return or__3943__auto____11196;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3941__auto____11201 = mf;
if(and__3941__auto____11201)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3941__auto____11201;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__3392__auto____11202 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____11203 = (cljs.core._remove_method[goog.typeOf(x__3392__auto____11202)]);
if(or__3943__auto____11203)
{return or__3943__auto____11203;
} else
{var or__3943__auto____11204 = (cljs.core._remove_method["_"]);
if(or__3943__auto____11204)
{return or__3943__auto____11204;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3941__auto____11209 = mf;
if(and__3941__auto____11209)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3941__auto____11209;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__3392__auto____11210 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____11211 = (cljs.core._prefer_method[goog.typeOf(x__3392__auto____11210)]);
if(or__3943__auto____11211)
{return or__3943__auto____11211;
} else
{var or__3943__auto____11212 = (cljs.core._prefer_method["_"]);
if(or__3943__auto____11212)
{return or__3943__auto____11212;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3941__auto____11217 = mf;
if(and__3941__auto____11217)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3941__auto____11217;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__3392__auto____11218 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____11219 = (cljs.core._get_method[goog.typeOf(x__3392__auto____11218)]);
if(or__3943__auto____11219)
{return or__3943__auto____11219;
} else
{var or__3943__auto____11220 = (cljs.core._get_method["_"]);
if(or__3943__auto____11220)
{return or__3943__auto____11220;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3941__auto____11225 = mf;
if(and__3941__auto____11225)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3941__auto____11225;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__3392__auto____11226 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____11227 = (cljs.core._methods[goog.typeOf(x__3392__auto____11226)]);
if(or__3943__auto____11227)
{return or__3943__auto____11227;
} else
{var or__3943__auto____11228 = (cljs.core._methods["_"]);
if(or__3943__auto____11228)
{return or__3943__auto____11228;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3941__auto____11233 = mf;
if(and__3941__auto____11233)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3941__auto____11233;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__3392__auto____11234 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____11235 = (cljs.core._prefers[goog.typeOf(x__3392__auto____11234)]);
if(or__3943__auto____11235)
{return or__3943__auto____11235;
} else
{var or__3943__auto____11236 = (cljs.core._prefers["_"]);
if(or__3943__auto____11236)
{return or__3943__auto____11236;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3941__auto____11241 = mf;
if(and__3941__auto____11241)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3941__auto____11241;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__3392__auto____11242 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____11243 = (cljs.core._dispatch[goog.typeOf(x__3392__auto____11242)]);
if(or__3943__auto____11243)
{return or__3943__auto____11243;
} else
{var or__3943__auto____11244 = (cljs.core._dispatch["_"]);
if(or__3943__auto____11244)
{return or__3943__auto____11244;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__11247 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__11248 = cljs.core._get_method.call(null,mf,dispatch_val__11247);
if(cljs.core.truth_(target_fn__11248))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__11247)].join('')));
}
return cljs.core.apply.call(null,target_fn__11248,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11249 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__11250 = this;
cljs.core.swap_BANG_.call(null,this__11250.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11250.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11250.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11250.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__11251 = this;
cljs.core.swap_BANG_.call(null,this__11251.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__11251.method_cache,this__11251.method_table,this__11251.cached_hierarchy,this__11251.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__11252 = this;
cljs.core.swap_BANG_.call(null,this__11252.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__11252.method_cache,this__11252.method_table,this__11252.cached_hierarchy,this__11252.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__11253 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__11253.cached_hierarchy),cljs.core.deref.call(null,this__11253.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__11253.method_cache,this__11253.method_table,this__11253.cached_hierarchy,this__11253.hierarchy);
}
var temp__4090__auto____11254 = cljs.core.deref.call(null,this__11253.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4090__auto____11254))
{var target_fn__11255 = temp__4090__auto____11254;
return target_fn__11255;
} else
{var temp__4090__auto____11256 = cljs.core.find_and_cache_best_method.call(null,this__11253.name,dispatch_val,this__11253.hierarchy,this__11253.method_table,this__11253.prefer_table,this__11253.method_cache,this__11253.cached_hierarchy);
if(cljs.core.truth_(temp__4090__auto____11256))
{var target_fn__11257 = temp__4090__auto____11256;
return target_fn__11257;
} else
{return cljs.core.deref.call(null,this__11253.method_table).call(null,this__11253.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__11258 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__11258.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__11258.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__11258.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__11258.method_cache,this__11258.method_table,this__11258.cached_hierarchy,this__11258.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__11259 = this;
return cljs.core.deref.call(null,this__11259.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__11260 = this;
return cljs.core.deref.call(null,this__11260.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__11261 = this;
return cljs.core.do_dispatch.call(null,mf,this__11261.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__11263__delegate = function (_,args){
var self__11262 = this;
return cljs.core._dispatch.call(null,self__11262,args);
};
var G__11263 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11263__delegate.call(this, _, args);
};
G__11263.cljs$lang$maxFixedArity = 1;
G__11263.cljs$lang$applyTo = (function (arglist__11264){
var _ = cljs.core.first(arglist__11264);
var args = cljs.core.rest(arglist__11264);
return G__11263__delegate(_, args);
});
G__11263.cljs$lang$arity$variadic = G__11263__delegate;
return G__11263;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__11265 = this;
return cljs.core._dispatch.call(null,self__11265,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__3338__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11266 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_11268,_){
var this__11267 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__11267.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__11269 = this;
var and__3941__auto____11270 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3941__auto____11270)
{return (this__11269.uuid === other.uuid);
} else
{return and__3941__auto____11270;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__11271 = this;
var this__11272 = this;
return cljs.core.pr_str.call(null,this__11272);
});
cljs.core.UUID;
