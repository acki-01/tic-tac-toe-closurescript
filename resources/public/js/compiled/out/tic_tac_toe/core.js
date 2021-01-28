// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('tic_tac_toe.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
tic_tac_toe.core.board_size = (3);
tic_tac_toe.core.win_length = (3);
tic_tac_toe.core.new_board = (function tic_tac_toe$core$new_board(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,cljs.core.vec.call(null,cljs.core.repeat.call(null,n,"B"))));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.core !== 'undefined') && (typeof tic_tac_toe.core.app_state !== 'undefined')){
} else {
tic_tac_toe.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"K\u00F3\u0142ko i krzy\u017Cyk",new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.core.new_board.call(null,tic_tac_toe.core.board_size),new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));
}
tic_tac_toe.core.computer_move = (function tic_tac_toe$core$computer_move(board){
var remaining_spots = (function (){var iter__4529__auto__ = (function tic_tac_toe$core$computer_move_$_iter__36770(s__36771){
return (new cljs.core.LazySeq(null,(function (){
var s__36771__$1 = s__36771;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36771__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var i = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__36771__$1,i,xs__6277__auto__,temp__5720__auto__){
return (function tic_tac_toe$core$computer_move_$_iter__36770_$_iter__36772(s__36773){
return (new cljs.core.LazySeq(null,((function (s__36771__$1,i,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__36773__$1 = s__36773;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__36773__$1);
if(temp__5720__auto____$1){
var s__36773__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36773__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36773__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36775 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36774 = (0);
while(true){
if((i__36774 < size__4528__auto__)){
var j = cljs.core._nth.call(null,c__4527__auto__,i__36774);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null)),"B")){
cljs.core.chunk_append.call(null,b__36775,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));

var G__36776 = (i__36774 + (1));
i__36774 = G__36776;
continue;
} else {
var G__36777 = (i__36774 + (1));
i__36774 = G__36777;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36775),tic_tac_toe$core$computer_move_$_iter__36770_$_iter__36772.call(null,cljs.core.chunk_rest.call(null,s__36773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36775),null);
}
} else {
var j = cljs.core.first.call(null,s__36773__$2);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null)),"B")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null),tic_tac_toe$core$computer_move_$_iter__36770_$_iter__36772.call(null,cljs.core.rest.call(null,s__36773__$2)));
} else {
var G__36778 = cljs.core.rest.call(null,s__36773__$2);
s__36773__$1 = G__36778;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36771__$1,i,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__36771__$1,i,xs__6277__auto__,temp__5720__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,cljs.core.range.call(null,tic_tac_toe.core.board_size)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,tic_tac_toe$core$computer_move_$_iter__36770.call(null,cljs.core.rest.call(null,s__36771__$1)));
} else {
var G__36779 = cljs.core.rest.call(null,s__36771__$1);
s__36771__$1 = G__36779;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,tic_tac_toe.core.board_size));
})();
var move = ((cljs.core.seq.call(null,remaining_spots))?cljs.core.rand_nth.call(null,remaining_spots):null);
if(cljs.core.truth_(move)){
return cljs.core.assoc_in.call(null,board,move,"C");
} else {
return board;
}
});
tic_tac_toe.core.straight = (function tic_tac_toe$core$straight(owner,board,p__36780,p__36781,n){
var vec__36782 = p__36780;
var x = cljs.core.nth.call(null,vec__36782,(0),null);
var y = cljs.core.nth.call(null,vec__36782,(1),null);
var vec__36785 = p__36781;
var dx = cljs.core.nth.call(null,vec__36785,(0),null);
var dy = cljs.core.nth.call(null,vec__36785,(1),null);
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,(function (){var iter__4529__auto__ = (function tic_tac_toe$core$straight_$_iter__36788(s__36789){
return (new cljs.core.LazySeq(null,(function (){
var s__36789__$1 = s__36789;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36789__$1);
if(temp__5720__auto__){
var s__36789__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36789__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36789__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36791 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36790 = (0);
while(true){
if((i__36790 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__36790);
cljs.core.chunk_append.call(null,b__36791,cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((dx * i) + x),((dy * i) + y)], null)),owner));

var G__36792 = (i__36790 + (1));
i__36790 = G__36792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36791),tic_tac_toe$core$straight_$_iter__36788.call(null,cljs.core.chunk_rest.call(null,s__36789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36791),null);
}
} else {
var i = cljs.core.first.call(null,s__36789__$2);
return cljs.core.cons.call(null,cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((dx * i) + x),((dy * i) + y)], null)),owner),tic_tac_toe$core$straight_$_iter__36788.call(null,cljs.core.rest.call(null,s__36789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,n));
})());
});
tic_tac_toe.core.win_QMARK_ = (function tic_tac_toe$core$win_QMARK_(owner,board,n){
return cljs.core.some.call(null,cljs.core.true_QMARK_,(function (){var iter__4529__auto__ = (function tic_tac_toe$core$win_QMARK__$_iter__36793(s__36794){
return (new cljs.core.LazySeq(null,(function (){
var s__36794__$1 = s__36794;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36794__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var i = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__36794__$1,i,xs__6277__auto__,temp__5720__auto__){
return (function tic_tac_toe$core$win_QMARK__$_iter__36793_$_iter__36795(s__36796){
return (new cljs.core.LazySeq(null,((function (s__36794__$1,i,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__36796__$1 = s__36796;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__36796__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var j = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4525__auto__ = ((function (s__36796__$1,s__36794__$1,j,xs__6277__auto____$1,temp__5720__auto____$1,i,xs__6277__auto__,temp__5720__auto__){
return (function tic_tac_toe$core$win_QMARK__$_iter__36793_$_iter__36795_$_iter__36797(s__36798){
return (new cljs.core.LazySeq(null,((function (s__36796__$1,s__36794__$1,j,xs__6277__auto____$1,temp__5720__auto____$1,i,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__36798__$1 = s__36798;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__36798__$1);
if(temp__5720__auto____$2){
var s__36798__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36798__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36798__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36800 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36799 = (0);
while(true){
if((i__36799 < size__4528__auto__)){
var dir = cljs.core._nth.call(null,c__4527__auto__,i__36799);
cljs.core.chunk_append.call(null,b__36800,tic_tac_toe.core.straight.call(null,owner,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),dir,n));

var G__36801 = (i__36799 + (1));
i__36799 = G__36801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36800),tic_tac_toe$core$win_QMARK__$_iter__36793_$_iter__36795_$_iter__36797.call(null,cljs.core.chunk_rest.call(null,s__36798__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36800),null);
}
} else {
var dir = cljs.core.first.call(null,s__36798__$2);
return cljs.core.cons.call(null,tic_tac_toe.core.straight.call(null,owner,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),dir,n),tic_tac_toe$core$win_QMARK__$_iter__36793_$_iter__36795_$_iter__36797.call(null,cljs.core.rest.call(null,s__36798__$2)));
}
} else {
return null;
}
break;
}
});})(s__36796__$1,s__36794__$1,j,xs__6277__auto____$1,temp__5720__auto____$1,i,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__36796__$1,s__36794__$1,j,xs__6277__auto____$1,temp__5720__auto____$1,i,xs__6277__auto__,temp__5720__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,tic_tac_toe$core$win_QMARK__$_iter__36793_$_iter__36795.call(null,cljs.core.rest.call(null,s__36796__$1)));
} else {
var G__36802 = cljs.core.rest.call(null,s__36796__$1);
s__36796__$1 = G__36802;
continue;
}
} else {
return null;
}
break;
}
});})(s__36794__$1,i,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__36794__$1,i,xs__6277__auto__,temp__5720__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,cljs.core.range.call(null,tic_tac_toe.core.board_size)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,tic_tac_toe$core$win_QMARK__$_iter__36793.call(null,cljs.core.rest.call(null,s__36794__$1)));
} else {
var G__36803 = cljs.core.rest.call(null,s__36794__$1);
s__36794__$1 = G__36803;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,tic_tac_toe.core.board_size));
})());
});
tic_tac_toe.core.full_QMARK_ = (function tic_tac_toe$core$full_QMARK_(board){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["C",null,"P",null], null), null),cljs.core.apply.call(null,cljs.core.concat,board));
});
tic_tac_toe.core.game_status = (function tic_tac_toe$core$game_status(board){
if(cljs.core.truth_(tic_tac_toe.core.win_QMARK_.call(null,"P",board,tic_tac_toe.core.win_length))){
return new cljs.core.Keyword(null,"player-victory","player-victory",-796755525);
} else {
if(cljs.core.truth_(tic_tac_toe.core.win_QMARK_.call(null,"C",board,tic_tac_toe.core.win_length))){
return new cljs.core.Keyword(null,"computer-victory","computer-victory",-920274681);
} else {
if(tic_tac_toe.core.full_QMARK_.call(null,board)){
return new cljs.core.Keyword(null,"draw","draw",1358331674);
} else {
return new cljs.core.Keyword(null,"in-progress","in-progress",2126442630);

}
}
}
});
tic_tac_toe.core.update_status = (function tic_tac_toe$core$update_status(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),tic_tac_toe.core.game_status.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)));
});
tic_tac_toe.core.check_game_status = (function tic_tac_toe$core$check_game_status(state){
return tic_tac_toe.core.update_status.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),tic_tac_toe.core.computer_move));
});
tic_tac_toe.core.blank = (function tic_tac_toe$core$blank(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"fill","fill",883462889),"lightblue",new cljs.core.Keyword(null,"x","x",2099068185),(0.05 + i),new cljs.core.Keyword(null,"y","y",-1757859776),(0.05 + j),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function tic_tac_toe$core$blank_$_blank_click(e){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.core.app_state)),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630))){
cljs.core.swap_BANG_.call(null,tic_tac_toe.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null),"P");

if(cljs.core.truth_(tic_tac_toe.core.win_QMARK_.call(null,"P",new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.core.app_state)),tic_tac_toe.core.win_length))){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"player-victory","player-victory",-796755525));
} else {
return cljs.core.swap_BANG_.call(null,tic_tac_toe.core.app_state,tic_tac_toe.core.check_game_status);
}
} else {
return null;
}
})], null)], null);
});
tic_tac_toe.core.circle = (function tic_tac_toe$core$circle(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"r","r",-471384190),0.25,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.05,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"cx","cx",1272694324),(0.5 + i),new cljs.core.Keyword(null,"cy","cy",755331060),(0.5 + j)], null)], null);
});
tic_tac_toe.core.cross = (function tic_tac_toe$core$cross(i,j){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + i)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + j)),") ","scale(0.2)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null);
});
tic_tac_toe.core.tictactoe = (function tic_tac_toe$core$tictactoe(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(function (){var G__36804 = new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.core.app_state));
var G__36804__$1 = (((G__36804 instanceof cljs.core.Keyword))?G__36804.fqn:null);
switch (G__36804__$1) {
case "player-victory":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Wygra\u0142e\u015B! \uD83C\uDF89"], null);

break;
case "computer-victory":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Przegra\u0142e\u015B \uD83E\uDD16"], null);

break;
case "draw":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Remis"], null);

break;
default:
return "";

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function tic_tac_toe$core$tictactoe_$_new_game_click(e){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.core.new_board.call(null,tic_tac_toe.core.board_size),new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
})], null),"Nowa Gra"], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.core.board_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.core.board_size)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null)], null),(function (){var iter__4529__auto__ = (function tic_tac_toe$core$tictactoe_$_iter__36805(s__36806){
return (new cljs.core.LazySeq(null,(function (){
var s__36806__$1 = s__36806;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36806__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var i = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__36806__$1,i,xs__6277__auto__,temp__5720__auto__){
return (function tic_tac_toe$core$tictactoe_$_iter__36805_$_iter__36807(s__36808){
return (new cljs.core.LazySeq(null,((function (s__36806__$1,i,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__36808__$1 = s__36808;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__36808__$1);
if(temp__5720__auto____$1){
var s__36808__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36808__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__36808__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__36810 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__36809 = (0);
while(true){
if((i__36809 < size__4528__auto__)){
var j = cljs.core._nth.call(null,c__4527__auto__,i__36809);
cljs.core.chunk_append.call(null,b__36810,(function (){var G__36811 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null));
switch (G__36811) {
case "B":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.blank,i,j], null);

break;
case "P":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.circle,i,j], null);

break;
case "C":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.cross,i,j], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36811)].join('')));

}
})());

var G__36815 = (i__36809 + (1));
i__36809 = G__36815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36810),tic_tac_toe$core$tictactoe_$_iter__36805_$_iter__36807.call(null,cljs.core.chunk_rest.call(null,s__36808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36810),null);
}
} else {
var j = cljs.core.first.call(null,s__36808__$2);
return cljs.core.cons.call(null,(function (){var G__36812 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null));
switch (G__36812) {
case "B":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.blank,i,j], null);

break;
case "P":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.circle,i,j], null);

break;
case "C":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.cross,i,j], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36812)].join('')));

}
})(),tic_tac_toe$core$tictactoe_$_iter__36805_$_iter__36807.call(null,cljs.core.rest.call(null,s__36808__$2)));
}
} else {
return null;
}
break;
}
});})(s__36806__$1,i,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__36806__$1,i,xs__6277__auto__,temp__5720__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,cljs.core.range.call(null,tic_tac_toe.core.board_size)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,tic_tac_toe$core$tictactoe_$_iter__36805.call(null,cljs.core.rest.call(null,s__36806__$1)));
} else {
var G__36817 = cljs.core.rest.call(null,s__36806__$1);
s__36806__$1 = G__36817;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,tic_tac_toe.core.board_size));
})())], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.tictactoe], null),document.getElementById("app"));
tic_tac_toe.core.on_js_reload = (function tic_tac_toe$core$on_js_reload(){
return cljs.core.prn.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.core.app_state)));
});

//# sourceMappingURL=core.js.map?rel=1611859303269
