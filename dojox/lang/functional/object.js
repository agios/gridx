//>>built
define("dojox/lang/functional/object",["dojo/_base/kernel","dojo/_base/lang","./lambda"],function(i,j,f){var g={};j.mixin(f,{keys:function(c){var b=[],a;for(a in c)a in g||b.push(a);return b},values:function(c){var b=[],a;for(a in c)a in g||b.push(c[a]);return b},filterIn:function(c,b,a){var a=a||i.global,b=f.lambda(b),d={},e,h;for(h in c)h in g||(e=c[h],b.call(a,e,h,c)&&(d[h]=e));return d},forIn:function(c,b,a){var a=a||i.global,b=f.lambda(b),d;for(d in c)d in g||b.call(a,c[d],d,c);return a},mapIn:function(c,
b,a){var a=a||i.global,b=f.lambda(b),d={},e;for(e in c)e in g||(d[e]=b.call(a,c[e],e,c));return d}});return f});