// Compiled by ClojureScript 0.0-2197
goog.provide('svg.core');
goog.require('cljs.core');
svg.core.gapWidth = 5;
svg.core.tileSize = 35;
svg.core.gridStart = (2 * svg.core.tileSize);
svg.core.gridSize = 10;
svg.core.bias = 0.75;
svg.core.mouseState = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
svg.core.solGrid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
cljs.core.enable_console_print_BANG_();
svg.core.log = (function log(x){return console.log(x);
});
svg.core.math = Math;
svg.core.length = (function length(nodes){return nodes.length;
});
svg.core.by_id = (function() {
var by_id = null;
var by_id__1 = (function (id){return by_id.cljs$core$IFn$_invoke$arity$2(id,svg.core.doc);
});
var by_id__2 = (function (id,elem){return elem.getElementById(cljs.core.name(id));
});
by_id = function(id,elem){
switch(arguments.length){
case 1:
return by_id__1.call(this,id);
case 2:
return by_id__2.call(this,id,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
by_id.cljs$core$IFn$_invoke$arity$1 = by_id__1;
by_id.cljs$core$IFn$_invoke$arity$2 = by_id__2;
return by_id;
})()
;
svg.core.by_class = (function() {
var by_class = null;
var by_class__1 = (function (class$){return by_class.cljs$core$IFn$_invoke$arity$2(class$,svg.core.doc);
});
var by_class__2 = (function (class$,elem){return elem.getElementsByClassName(cljs.core.name(class$));
});
by_class = function(class$,elem){
switch(arguments.length){
case 1:
return by_class__1.call(this,class$);
case 2:
return by_class__2.call(this,class$,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
by_class.cljs$core$IFn$_invoke$arity$1 = by_class__1;
by_class.cljs$core$IFn$_invoke$arity$2 = by_class__2;
return by_class;
})()
;
svg.core.by_tag = (function() {
var by_tag = null;
var by_tag__1 = (function (tag){return by_tag.cljs$core$IFn$_invoke$arity$2(tag,svg.core.doc);
});
var by_tag__2 = (function (tag,elem){return elem.getElementsByTagName(cljs.core.name(tag));
});
by_tag = function(tag,elem){
switch(arguments.length){
case 1:
return by_tag__1.call(this,tag);
case 2:
return by_tag__2.call(this,tag,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
by_tag.cljs$core$IFn$_invoke$arity$1 = by_tag__1;
by_tag.cljs$core$IFn$_invoke$arity$2 = by_tag__2;
return by_tag;
})()
;
svg.core.random = (function random(b){return svg.core.math.round(svg.core.math.pow(svg.core.math.random(),b));
});
svg.core.setStyles = (function setStyles(elem,data){var seq__6485 = cljs.core.seq(data);var chunk__6486 = null;var count__6487 = 0;var i__6488 = 0;while(true){
if((i__6488 < count__6487))
{var vec__6489 = chunk__6486.cljs$core$IIndexed$_nth$arity$2(null,i__6488);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6489,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6489,1,null);(elem.style[k] = v);
{
var G__6491 = seq__6485;
var G__6492 = chunk__6486;
var G__6493 = count__6487;
var G__6494 = (i__6488 + 1);
seq__6485 = G__6491;
chunk__6486 = G__6492;
count__6487 = G__6493;
i__6488 = G__6494;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__6485);if(temp__4092__auto__)
{var seq__6485__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6485__$1))
{var c__4226__auto__ = cljs.core.chunk_first(seq__6485__$1);{
var G__6495 = cljs.core.chunk_rest(seq__6485__$1);
var G__6496 = c__4226__auto__;
var G__6497 = cljs.core.count(c__4226__auto__);
var G__6498 = 0;
seq__6485 = G__6495;
chunk__6486 = G__6496;
count__6487 = G__6497;
i__6488 = G__6498;
continue;
}
} else
{var vec__6490 = cljs.core.first(seq__6485__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6490,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6490,1,null);(elem.style[k] = v);
{
var G__6499 = cljs.core.next(seq__6485__$1);
var G__6500 = null;
var G__6501 = 0;
var G__6502 = 0;
seq__6485 = G__6499;
chunk__6486 = G__6500;
count__6487 = G__6501;
i__6488 = G__6502;
continue;
}
}
} else
{return null;
}
}
break;
}
});
svg.core.setAttributes = (function setAttributes(elem,data){var seq__6509 = cljs.core.seq(data);var chunk__6510 = null;var count__6511 = 0;var i__6512 = 0;while(true){
if((i__6512 < count__6511))
{var vec__6513 = chunk__6510.cljs$core$IIndexed$_nth$arity$2(null,i__6512);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6513,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6513,1,null);elem.setAttribute(k,v);
{
var G__6515 = seq__6509;
var G__6516 = chunk__6510;
var G__6517 = count__6511;
var G__6518 = (i__6512 + 1);
seq__6509 = G__6515;
chunk__6510 = G__6516;
count__6511 = G__6517;
i__6512 = G__6518;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__6509);if(temp__4092__auto__)
{var seq__6509__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6509__$1))
{var c__4226__auto__ = cljs.core.chunk_first(seq__6509__$1);{
var G__6519 = cljs.core.chunk_rest(seq__6509__$1);
var G__6520 = c__4226__auto__;
var G__6521 = cljs.core.count(c__4226__auto__);
var G__6522 = 0;
seq__6509 = G__6519;
chunk__6510 = G__6520;
count__6511 = G__6521;
i__6512 = G__6522;
continue;
}
} else
{var vec__6514 = cljs.core.first(seq__6509__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6514,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6514,1,null);elem.setAttribute(k,v);
{
var G__6523 = cljs.core.next(seq__6509__$1);
var G__6524 = null;
var G__6525 = 0;
var G__6526 = 0;
seq__6509 = G__6523;
chunk__6510 = G__6524;
count__6511 = G__6525;
i__6512 = G__6526;
continue;
}
}
} else
{return null;
}
}
break;
}
});
svg.core.docSettings = (function docSettings(){svg.core.doc.addEventListener("mousedown",(function (){return cljs.core.reset_BANG_(svg.core.mouseState,true);
}));
svg.core.doc.addEventListener("mouseup",(function (){return cljs.core.reset_BANG_(svg.core.mouseState,false);
}));
svg.core.svg.parentElement.addEventListener("contextmenu",(function (e){return e.preventDefault();
}));
svg.core.by_id.cljs$core$IFn$_invoke$arity$1("svgBanner").addEventListener("onclick",(function (){return svg.core.nonogram;
}));
var maxSize = (svg.core.gridStart + (svg.core.gridSize * (svg.core.tileSize + svg.core.gapWidth)));svg.core.setStyles(svg.core.svg,new cljs.core.PersistentArrayMap(null, 2, ["maxHeight",maxSize,"maxWidth",maxSize], null));
svg.core.setAttributes(svg.core.svg,new cljs.core.PersistentArrayMap(null, 2, ["viewBox",[cljs.core.str("0,0,"),cljs.core.str(maxSize),cljs.core.str(","),cljs.core.str(maxSize)].join(''),"preserveAspectRatio","xMidYMid meet"], null));
return (svg.core.by_id.cljs$core$IFn$_invoke$arity$1("svgBanner").style["visibility"] = "hidden");
});
svg.core.createSVG = (function createSVG(type){return svg.core.doc.createElementNS("http://www.w3.org/2000/svg",type);
});
svg.core.drawTile = (function drawTile(x,y,sol){var tile = svg.core.createSVG("rect");var data = new cljs.core.PersistentArrayMap(null, 7, ["x",(x + svg.core.gridStart),"y",(y + svg.core.gridStart),"width",svg.core.tileSize,"height",svg.core.tileSize,"sol",sol,"curr",0,"flag",0], null);svg.core.setAttributes(tile,data);
return svg.core.svg.appendChild(tile);
});
svg.core.drawGrid = (function drawGrid(){var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);var g = svg.core.gridSize;var seq__6545 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(g));var chunk__6553 = null;var count__6554 = 0;var i__6555 = 0;while(true){
if((i__6555 < count__6554))
{var y = chunk__6553.cljs$core$IIndexed$_nth$arity$2(null,i__6555);if((cljs.core.deref(counter) < (g * g)))
{var seq__6557_6563 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(g));var chunk__6559_6564 = null;var count__6560_6565 = 0;var i__6561_6566 = 0;while(true){
if((i__6561_6566 < count__6560_6565))
{var x_6567 = chunk__6559_6564.cljs$core$IIndexed$_nth$arity$2(null,i__6561_6566);if((cljs.core.deref(counter) < (g * g)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(svg.core.solGrid,cljs.core.conj,svg.core.random(svg.core.bias));
svg.core.drawTile((x_6567 * (svg.core.tileSize + svg.core.gapWidth)),(y * (svg.core.tileSize + svg.core.gapWidth)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(svg.core.solGrid),cljs.core.deref(counter)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
{
var G__6568 = seq__6557_6563;
var G__6569 = chunk__6559_6564;
var G__6570 = count__6560_6565;
var G__6571 = (i__6561_6566 + 1);
seq__6557_6563 = G__6568;
chunk__6559_6564 = G__6569;
count__6560_6565 = G__6570;
i__6561_6566 = G__6571;
continue;
}
} else
{}
} else
{var temp__4092__auto___6572 = cljs.core.seq(seq__6557_6563);if(temp__4092__auto___6572)
{var seq__6557_6573__$1 = temp__4092__auto___6572;if(cljs.core.chunked_seq_QMARK_(seq__6557_6573__$1))
{var c__4226__auto___6574 = cljs.core.chunk_first(seq__6557_6573__$1);{
var G__6575 = cljs.core.chunk_rest(seq__6557_6573__$1);
var G__6576 = c__4226__auto___6574;
var G__6577 = cljs.core.count(c__4226__auto___6574);
var G__6578 = 0;
seq__6557_6563 = G__6575;
chunk__6559_6564 = G__6576;
count__6560_6565 = G__6577;
i__6561_6566 = G__6578;
continue;
}
} else
{var x_6579 = cljs.core.first(seq__6557_6573__$1);if((cljs.core.deref(counter) < (g * g)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(svg.core.solGrid,cljs.core.conj,svg.core.random(svg.core.bias));
svg.core.drawTile((x_6579 * (svg.core.tileSize + svg.core.gapWidth)),(y * (svg.core.tileSize + svg.core.gapWidth)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(svg.core.solGrid),cljs.core.deref(counter)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
{
var G__6580 = cljs.core.next(seq__6557_6573__$1);
var G__6581 = null;
var G__6582 = 0;
var G__6583 = 0;
seq__6557_6563 = G__6580;
chunk__6559_6564 = G__6581;
count__6560_6565 = G__6582;
i__6561_6566 = G__6583;
continue;
}
} else
{}
}
} else
{}
}
break;
}
{
var G__6584 = seq__6545;
var G__6585 = chunk__6553;
var G__6586 = count__6554;
var G__6587 = (i__6555 + 1);
seq__6545 = G__6584;
chunk__6553 = G__6585;
count__6554 = G__6586;
i__6555 = G__6587;
continue;
}
} else
{return null;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__6545);if(temp__4092__auto__)
{var seq__6545__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__6545__$1))
{var c__4226__auto__ = cljs.core.chunk_first(seq__6545__$1);{
var G__6588 = cljs.core.chunk_rest(seq__6545__$1);
var G__6589 = c__4226__auto__;
var G__6590 = cljs.core.count(c__4226__auto__);
var G__6591 = 0;
seq__6545 = G__6588;
chunk__6553 = G__6589;
count__6554 = G__6590;
i__6555 = G__6591;
continue;
}
} else
{var y = cljs.core.first(seq__6545__$1);if((cljs.core.deref(counter) < (g * g)))
{var seq__6547_6592 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(g));var chunk__6549_6593 = null;var count__6550_6594 = 0;var i__6551_6595 = 0;while(true){
if((i__6551_6595 < count__6550_6594))
{var x_6596 = chunk__6549_6593.cljs$core$IIndexed$_nth$arity$2(null,i__6551_6595);if((cljs.core.deref(counter) < (g * g)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(svg.core.solGrid,cljs.core.conj,svg.core.random(svg.core.bias));
svg.core.drawTile((x_6596 * (svg.core.tileSize + svg.core.gapWidth)),(y * (svg.core.tileSize + svg.core.gapWidth)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(svg.core.solGrid),cljs.core.deref(counter)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
{
var G__6597 = seq__6547_6592;
var G__6598 = chunk__6549_6593;
var G__6599 = count__6550_6594;
var G__6600 = (i__6551_6595 + 1);
seq__6547_6592 = G__6597;
chunk__6549_6593 = G__6598;
count__6550_6594 = G__6599;
i__6551_6595 = G__6600;
continue;
}
} else
{}
} else
{var temp__4092__auto___6601__$1 = cljs.core.seq(seq__6547_6592);if(temp__4092__auto___6601__$1)
{var seq__6547_6602__$1 = temp__4092__auto___6601__$1;if(cljs.core.chunked_seq_QMARK_(seq__6547_6602__$1))
{var c__4226__auto___6603 = cljs.core.chunk_first(seq__6547_6602__$1);{
var G__6604 = cljs.core.chunk_rest(seq__6547_6602__$1);
var G__6605 = c__4226__auto___6603;
var G__6606 = cljs.core.count(c__4226__auto___6603);
var G__6607 = 0;
seq__6547_6592 = G__6604;
chunk__6549_6593 = G__6605;
count__6550_6594 = G__6606;
i__6551_6595 = G__6607;
continue;
}
} else
{var x_6608 = cljs.core.first(seq__6547_6602__$1);if((cljs.core.deref(counter) < (g * g)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(svg.core.solGrid,cljs.core.conj,svg.core.random(svg.core.bias));
svg.core.drawTile((x_6608 * (svg.core.tileSize + svg.core.gapWidth)),(y * (svg.core.tileSize + svg.core.gapWidth)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(svg.core.solGrid),cljs.core.deref(counter)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
{
var G__6609 = cljs.core.next(seq__6547_6602__$1);
var G__6610 = null;
var G__6611 = 0;
var G__6612 = 0;
seq__6547_6592 = G__6609;
chunk__6549_6593 = G__6610;
count__6550_6594 = G__6611;
i__6551_6595 = G__6612;
continue;
}
} else
{}
}
} else
{}
}
break;
}
{
var G__6613 = cljs.core.next(seq__6545__$1);
var G__6614 = null;
var G__6615 = 0;
var G__6616 = 0;
seq__6545 = G__6613;
chunk__6553 = G__6614;
count__6554 = G__6615;
i__6555 = G__6616;
continue;
}
} else
{return null;
}
}
} else
{return null;
}
}
break;
}
});
svg.core.clearGrid = (function clearGrid(){while(true){
if(cljs.core.truth_(svg.core.svg.firstChild))
{svg.core.svg.removeChild(svg.core.svg.firstChild);
{
continue;
}
} else
{return null;
}
break;
}
});
svg.core.flagWrite = (function flagWrite(a,b){var n__4326__auto__ = svg.core.length(a);var i = 0;while(true){
if((i < n__4326__auto__))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b.getAttribute("flag"),"0"))
{(a[i]).setAttribute("flag","1");
} else
{(a[i]).setAttribute("flag","0");
}
{
var G__6617 = (i + 1);
i = G__6617;
continue;
}
} else
{return null;
}
break;
}
});
svg.core.toggleFlag = (function toggleFlag(){var a = event.target;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",a.getAttribute("curr")))
{return svg.core.setAttributes(a,new cljs.core.PersistentArrayMap(null, 2, ["curr",0,"flag",1], null));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",a.getAttribute("flag")))
{return a.setAttribute("flag",0);
} else
{return a.setAttribute("flag",1);
}
}
});
svg.core.toggleTile = (function toggleTile(){var a_6618 = event.target;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",a_6618.getAttribute("curr")))
{svg.core.setAttributes(a_6618,new cljs.core.PersistentArrayMap(null, 2, ["curr",0,"flag",0], null));
} else
{a_6618.setAttribute("curr",1);
}
return (svg.core.update.cljs$core$IFn$_invoke$arity$0 ? svg.core.update.cljs$core$IFn$_invoke$arity$0() : svg.core.update.call(null));
});
svg.core.horzText = (function horzText(rect){var textList = svg.core.svg.querySelectorAll([cljs.core.str("rect[x='"),cljs.core.str(rect.getAttribute("x")),cljs.core.str("']")].join(''));var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);var n__4326__auto___6619 = svg.core.gridSize;var i_6620 = 0;while(true){
if((i_6620 < n__4326__auto___6619))
{if(cljs.core.truth_((textList[i_6620]).hasAttribute("sol")))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.conj,(textList[i_6620]).getAttribute("sol"));
} else
{}
{
var G__6621 = (i_6620 + 1);
i_6620 = G__6621;
continue;
}
} else
{}
break;
}
rect.parentElement.addEventListener("click",((function (textList,a){
return (function (){return svg.core.flagWrite(textList,rect);
});})(textList,a))
);
return cljs.core.deref(a);
});
svg.core.vertText = (function vertText(rect){var textList = svg.core.svg.querySelectorAll([cljs.core.str("rect[y='"),cljs.core.str(rect.getAttribute("y")),cljs.core.str("']")].join(''));var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);var n__4326__auto___6622 = svg.core.gridSize;var i_6623 = 0;while(true){
if((i_6623 < n__4326__auto___6622))
{if(cljs.core.truth_((textList[i_6623]).hasAttribute("sol")))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.conj,(textList[i_6623]).getAttribute("sol"));
} else
{}
{
var G__6624 = (i_6623 + 1);
i_6623 = G__6624;
continue;
}
} else
{}
break;
}
rect.parentElement.addEventListener("click",((function (textList,a){
return (function (){return svg.core.flagWrite(textList,rect);
});})(textList,a))
);
return cljs.core.deref(a);
});
svg.core.islandCalc = (function islandCalc(a){var n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);var m = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);var n__4326__auto___6625 = cljs.core.count(a);var i_6626 = 0;while(true){
if((i_6626 < n__4326__auto___6625))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,i_6626)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc);
} else
{}
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,i_6626))) && ((cljs.core.deref(n) > 0))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_6626,(cljs.core.count(a) - 1))) && ((cljs.core.deref(n) > 0))))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.conj,cljs.core.deref(n)).call(null,cljs.core.reset_BANG_(n,0));
} else
{}
{
var G__6627 = (i_6626 + 1);
i_6626 = G__6627;
continue;
}
} else
{}
break;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.count(cljs.core.deref(m))))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.conj,0);
} else
{}
return cljs.core.deref(m);
});
svg.core.solTile = (function solTile(x,y,deg){var group = svg.core.svg.appendChild(svg.core.createSVG("g"));var rect = group.appendChild(svg.core.createSVG("rect"));var text = group.appendChild(svg.core.createSVG("text"));svg.core.setAttributes(rect,new cljs.core.PersistentArrayMap(null, 6, ["x",x,"y",y,"width",((svg.core.tileSize * 2) - svg.core.gapWidth),"height",svg.core.tileSize,"transform",[cljs.core.str("rotate("),cljs.core.str(deg),cljs.core.str(","),cljs.core.str(x),cljs.core.str(",0)")].join(''),"flag",0], null));
svg.core.setAttributes(text,new cljs.core.PersistentArrayMap(null, 3, ["x",(x + svg.core.gapWidth),"y",((y + svg.core.gapWidth) + (svg.core.tileSize / 2)),"transform",[cljs.core.str("rotate("),cljs.core.str(deg),cljs.core.str(","),cljs.core.str(x),cljs.core.str(",0)")].join('')], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",rect.getAttribute("x")))
{return text.textContent = svg.core.islandCalc(svg.core.vertText(rect));
} else
{return text.textContent = svg.core.islandCalc(svg.core.horzText(rect));
}
});
svg.core.writeClues = (function writeClues(){var size = (function (a){return ((a * (svg.core.gapWidth + svg.core.tileSize)) + svg.core.gridStart);
});var n__4326__auto__ = svg.core.gridSize;var i = 0;while(true){
if((i < n__4326__auto__))
{svg.core.solTile(size(i),(- svg.core.tileSize),90);
svg.core.solTile(0,size(i),0);
{
var G__6628 = (i + 1);
i = G__6628;
continue;
}
} else
{return null;
}
break;
}
});
svg.core.update = (function update(){var grid = svg.core.doc.querySelectorAll("rect[curr]");var currGrid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);var n__4326__auto___6629 = grid.length;var i_6630 = 0;while(true){
if((i_6630 < n__4326__auto___6629))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(currGrid,cljs.core.conj,parseInt((grid[i_6630]).getAttribute("curr")));
{
var G__6631 = (i_6630 + 1);
i_6630 = G__6631;
continue;
}
} else
{}
break;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(currGrid),cljs.core.deref(svg.core.solGrid)))
{return (svg.core.onWin.cljs$core$IFn$_invoke$arity$0 ? svg.core.onWin.cljs$core$IFn$_invoke$arity$0() : svg.core.onWin.call(null));
} else
{return null;
}
});
svg.core.onWin = (function onWin(){return svg.core.log("Yay");
});
svg.core.mouseClick = (function mouseClick(){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(0,event.button))
{return svg.core.toggleTile();
} else
{return svg.core.toggleFlag();
}
});
svg.core.mouseDrag = (function mouseDrag(){if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(svg.core.mouseState),true)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(0,event.button)))
{svg.core.toggleTile();
} else
{}
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(svg.core.mouseState),true)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(2,event.button)))
{return svg.core.toggleFlag();
} else
{return null;
}
});
svg.core.addEvents = (function addEvents(){var grid = svg.core.doc.querySelectorAll("svg>rect");var n__4326__auto__ = svg.core.length(grid);var i = 0;while(true){
if((i < n__4326__auto__))
{(grid[i]).addEventListener("mousedown",svg.core.mouseClick);
(grid[i]).addEventListener("mouseover",svg.core.mouseDrag);
{
var G__6632 = (i + 1);
i = G__6632;
continue;
}
} else
{return null;
}
break;
}
});
svg.core.doc = document;
svg.core.svg = svg.core.by_id.cljs$core$IFn$_invoke$arity$1("svgElement");
svg.core.nonogram = (function nonogram(){svg.core.docSettings();
svg.core.clearGrid();
svg.core.drawGrid();
svg.core.writeClues();
return svg.core.addEvents();
});
svg.core.nonogram();
