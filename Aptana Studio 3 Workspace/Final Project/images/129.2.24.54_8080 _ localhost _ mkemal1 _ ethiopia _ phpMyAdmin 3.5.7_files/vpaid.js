(function(){var h = void 0, i = !0, j = null, k = !1;
function aa(a) {
  return function(c) {
    this[a] = c
  }
}
function l(a) {
  return function() {
    return this[a]
  }
}
var p, s = this;
function ba(a) {
  for(var a = a.split("."), c = s, b;b = a.shift();) {
    if(c[b] != j) {
      c = c[b]
    }else {
      return j
    }
  }
  return c
}
function ca(a) {
  var c = typeof a;
  if("object" == c) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return c
      }
      var b = Object.prototype.toString.call(a);
      if("[object Window]" == b) {
        return"object"
      }
      if("[object Array]" == b || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == b || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == c && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return c
}
function t(a) {
  return"array" == ca(a)
}
function da(a) {
  var c = ca(a);
  return"array" == c || "object" == c && "number" == typeof a.length
}
function u(a) {
  return"string" == typeof a
}
function ea(a) {
  return"function" == ca(a)
}
function fa(a) {
  var c = typeof a;
  return"object" == c && a != j || "function" == c
}
function v(a) {
  return a[ga] || (a[ga] = ++ha)
}
var ga = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ha = 0;
function ia(a, c, b) {
  return a.call.apply(a.bind, arguments)
}
function ja(a, c, b) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, d);
      return a.apply(c, b)
    }
  }
  return function() {
    return a.apply(c, arguments)
  }
}
function x(a, c, b) {
  x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
  return x.apply(j, arguments)
}
var y = Date.now || function() {
  return+new Date
};
function z(a, c) {
  var b = a.split("."), d = s;
  !(b[0] in d) && d.execScript && d.execScript("var " + b[0]);
  for(var f;b.length && (f = b.shift());) {
    !b.length && c !== h ? d[f] = c : d = d[f] ? d[f] : d[f] = {}
  }
}
function A(a, c) {
  function b() {
  }
  b.prototype = c.prototype;
  a.g = c.prototype;
  a.prototype = new b
}
;function ka(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
A(ka, Error);
ka.prototype.name = "CustomError";
function la(a, c) {
  for(var b = 1;b < arguments.length;b++) {
    var d = ("" + arguments[b]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var ma = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function na(a) {
  a = "" + a;
  return!ma.test(a) ? encodeURIComponent(a) : a
}
function B(a) {
  if(!oa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(pa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(qa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(ra, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));
  return a
}
var pa = /&/g, qa = /</g, ra = />/g, sa = /\"/g, oa = /[&<>\"]/;
function ta(a, c) {
  for(var b = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + c).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(d.length, f.length), g = 0;0 == b && g < e;g++) {
    var m = d[g] || "", n = f[g] || "", q = RegExp("(\\d*)(\\D*)", "g"), O = RegExp("(\\d*)(\\D*)", "g");
    do {
      var o = q.exec(m) || ["", "", ""], r = O.exec(n) || ["", "", ""];
      if(0 == o[0].length && 0 == r[0].length) {
        break
      }
      b = ((0 == o[1].length ? 0 : parseInt(o[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == o[1].length ? 0 : parseInt(o[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == o[2].length) < (0 == r[2].length) ? -1 : (0 == o[2].length) > (0 == r[2].length) ? 1 : 0) || (o[2] < r[2] ? -1 : o[2] > r[2] ? 1 : 0)
    }while(0 == b)
  }
  return b
}
;function ua(a, c) {
  c.unshift(a);
  ka.call(this, la.apply(j, c));
  c.shift()
}
A(ua, ka);
ua.prototype.name = "AssertionError";
function va(a, c) {
  throw new ua("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var C = Array.prototype, wa = C.indexOf ? function(a, c, b) {
  return C.indexOf.call(a, c, b)
} : function(a, c, b) {
  b = b == j ? 0 : 0 > b ? Math.max(0, a.length + b) : b;
  if(u(a)) {
    return!u(c) || 1 != c.length ? -1 : a.indexOf(c, b)
  }
  for(;b < a.length;b++) {
    if(b in a && a[b] === c) {
      return b
    }
  }
  return-1
}, xa = C.forEach ? function(a, c, b) {
  C.forEach.call(a, c, b)
} : function(a, c, b) {
  for(var d = a.length, f = u(a) ? a.split("") : a, e = 0;e < d;e++) {
    e in f && c.call(b, f[e], e, a)
  }
};
function ya(a, c) {
  var b = wa(a, c);
  0 <= b && C.splice.call(a, b, 1)
}
function za(a) {
  return C.concat.apply(C, arguments)
}
function Aa(a) {
  if(t(a)) {
    return za(a)
  }
  for(var c = [], b = 0, d = a.length;b < d;b++) {
    c[b] = a[b]
  }
  return c
}
function Ba(a, c, b) {
  return 2 >= arguments.length ? C.slice.call(a, c) : C.slice.call(a, c, b)
}
;function Ca(a, c, b) {
  for(var d in a) {
    c.call(b, a[d], d, a)
  }
}
function Da(a) {
  var c = [], b = 0, d;
  for(d in a) {
    c[b++] = a[d]
  }
  return c
}
var Ea = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Fa(a, c) {
  for(var b, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(b in d) {
      a[b] = d[b]
    }
    for(var e = 0;e < Ea.length;e++) {
      b = Ea[e], Object.prototype.hasOwnProperty.call(d, b) && (a[b] = d[b])
    }
  }
}
;function D(a, c) {
  this.p = {};
  this.a = [];
  var b = arguments.length;
  if(1 < b) {
    if(b % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < b;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      if(a instanceof D) {
        d = Ga(a), b = Ha(a)
      }else {
        var b = [], f = 0;
        for(d in a) {
          b[f++] = d
        }
        d = b;
        b = Da(a)
      }
      for(f = 0;f < d.length;f++) {
        this.set(d[f], b[f])
      }
    }
  }
}
D.prototype.b = 0;
function Ha(a) {
  Ia(a);
  for(var c = [], b = 0;b < a.a.length;b++) {
    c.push(a.p[a.a[b]])
  }
  return c
}
function Ga(a) {
  Ia(a);
  return a.a.concat()
}
function Ia(a) {
  if(a.b != a.a.length) {
    for(var c = 0, b = 0;c < a.a.length;) {
      var d = a.a[c];
      Object.prototype.hasOwnProperty.call(a.p, d) && (a.a[b++] = d);
      c++
    }
    a.a.length = b
  }
  if(a.b != a.a.length) {
    for(var f = {}, b = c = 0;c < a.a.length;) {
      d = a.a[c], Object.prototype.hasOwnProperty.call(f, d) || (a.a[b++] = d, f[d] = 1), c++
    }
    a.a.length = b
  }
}
D.prototype.get = function(a, c) {
  return Object.prototype.hasOwnProperty.call(this.p, a) ? this.p[a] : c
};
D.prototype.set = function(a, c) {
  Object.prototype.hasOwnProperty.call(this.p, a) || (this.b++, this.a.push(a));
  this.p[a] = c
};
var E, Ja, Ka, La;
function Ma() {
  return s.navigator ? s.navigator.userAgent : j
}
La = Ka = Ja = E = k;
var Na;
if(Na = Ma()) {
  var Oa = s.navigator;
  E = 0 == Na.indexOf("Opera");
  Ja = !E && -1 != Na.indexOf("MSIE");
  Ka = !E && -1 != Na.indexOf("WebKit");
  La = !E && !Ka && "Gecko" == Oa.product
}
var Pa = E, F = Ja, G = La, H = Ka, Qa;
a: {
  var Ra = "", Sa;
  if(Pa && s.opera) {
    var Ta = s.opera.version, Ra = "function" == typeof Ta ? Ta() : Ta
  }else {
    if(G ? Sa = /rv\:([^\);]+)(\)|;)/ : F ? Sa = /MSIE\s+([^\);]+)(\)|;)/ : H && (Sa = /WebKit\/(\S+)/), Sa) {
      var Ua = Sa.exec(Ma()), Ra = Ua ? Ua[1] : ""
    }
  }
  if(F) {
    var Va, Wa = s.document;
    Va = Wa ? Wa.documentMode : h;
    if(Va > parseFloat(Ra)) {
      Qa = "" + Va;
      break a
    }
  }
  Qa = Ra
}
var Xa = {};
function I(a) {
  return Xa[a] || (Xa[a] = 0 <= ta(Qa, a))
}
var Ya = {};
function Za() {
  return Ya[9] || (Ya[9] = F && !!document.documentMode && 9 <= document.documentMode)
}
;function $a(a) {
  return ab(a || arguments.callee.caller, [])
}
function ab(a, c) {
  var b = [];
  if(0 <= wa(c, a)) {
    b.push("[...circular reference...]")
  }else {
    if(a && 50 > c.length) {
      b.push(bb(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && b.push(", ");
        var e;
        e = d[f];
        switch(typeof e) {
          case "object":
            e = e ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            e = "" + e;
            break;
          case "boolean":
            e = e ? "true" : "false";
            break;
          case "function":
            e = (e = bb(e)) ? e : "[fn]";
            break;
          default:
            e = typeof e
        }
        40 < e.length && (e = e.substr(0, 40) + "...");
        b.push(e)
      }
      c.push(a);
      b.push(")\n");
      try {
        b.push(ab(a.caller, c))
      }catch(g) {
        b.push("[exception trying to get caller]\n")
      }
    }else {
      a ? b.push("[...long stack...]") : b.push("[end]")
    }
  }
  return b.join("")
}
function bb(a) {
  if(cb[a]) {
    return cb[a]
  }
  a = "" + a;
  if(!cb[a]) {
    var c = /function ([^\(]+)/.exec(a);
    cb[a] = c ? c[1] : "[Anonymous]"
  }
  return cb[a]
}
var cb = {};
function db(a, c, b, d, f) {
  this.reset(a, c, b, d, f)
}
db.prototype.P = j;
db.prototype.O = j;
var eb = 0;
db.prototype.reset = function(a, c, b, d, f) {
  "number" == typeof f || eb++;
  this.ra = d || y();
  this.m = a;
  this.ka = c;
  this.ja = b;
  delete this.P;
  delete this.O
};
db.prototype.W = aa("m");
function J(a) {
  this.Ea = a
}
J.prototype.d = j;
J.prototype.m = j;
J.prototype.k = j;
J.prototype.u = j;
function K(a, c) {
  this.name = a;
  this.value = c
}
K.prototype.toString = l("name");
var fb = new K("SHOUT", 1200), gb = new K("SEVERE", 1E3), hb = new K("WARNING", 900), ib = new K("INFO", 800), jb = new K("CONFIG", 700), kb = new K("ALL", 0);
p = J.prototype;
p.getParent = l("d");
p.W = aa("m");
function lb(a) {
  if(a.m) {
    return a.m
  }
  if(a.d) {
    return lb(a.d)
  }
  va("Root logger has no level set.");
  return j
}
p.log = function(a, c, b) {
  if(a.value >= lb(this).value) {
    a = this.za(a, c, b);
    c = "log:" + a.ka;
    s.console && (s.console.timeStamp ? s.console.timeStamp(c) : s.console.markTimeline && s.console.markTimeline(c));
    s.msWriteProfilerMark && s.msWriteProfilerMark(c);
    for(c = this;c;) {
      var b = c, d = a;
      if(b.u) {
        for(var f = 0, e = h;e = b.u[f];f++) {
          e(d)
        }
      }
      c = c.getParent()
    }
  }
};
p.za = function(a, c, b) {
  var d = new db(a, "" + c, this.Ea);
  if(b) {
    d.P = b;
    var f;
    var e = arguments.callee.caller;
    try {
      var g;
      var m = ba("window.location.href");
      if(u(b)) {
        g = {message:b, name:"Unknown error", lineNumber:"Not available", fileName:m, stack:"Not available"}
      }else {
        var n, q, O = k;
        try {
          n = b.lineNumber || b.cc || "Not available"
        }catch(o) {
          n = "Not available", O = i
        }
        try {
          q = b.fileName || b.filename || b.sourceURL || m
        }catch(r) {
          q = "Not available", O = i
        }
        g = O || !b.lineNumber || !b.fileName || !b.stack ? {message:b.message, name:b.name, lineNumber:n, fileName:q, stack:b.stack || "Not available"} : b
      }
      f = "Message: " + B(g.message) + '\nUrl: <a href="view-source:' + g.fileName + '" target="_new">' + g.fileName + "</a>\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + B(g.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + B($a(e) + "-> ")
    }catch(w) {
      f = "Exception trying to expose exception! You win, we lose. " + w
    }
    d.O = f
  }
  return d
};
p.info = function(a, c) {
  this.log(ib, a, c)
};
var mb = {}, nb = j;
function ob() {
  nb || (nb = new J(""), mb[""] = nb, nb.W(jb))
}
function pb(a) {
  ob();
  var c;
  if(!(c = mb[a])) {
    c = new J(a);
    var b = a.lastIndexOf("."), d = a.substr(b + 1), b = pb(a.substr(0, b));
    b.k || (b.k = {});
    b.k[d] = c;
    c.d = b;
    mb[a] = c
  }
  return c
}
;function L() {
}
L.prototype.ba = k;
L.prototype.i = function() {
  this.ba || (this.ba = i, this.c())
};
L.prototype.c = function() {
  this.wa && qb.apply(j, this.wa)
};
function qb(a) {
  for(var c = 0, b = arguments.length;c < b;++c) {
    var d = arguments[c];
    da(d) ? qb.apply(j, d) : d && "function" == typeof d.i && d.i()
  }
}
;!F || Za();
var rb = !F || Za();
F && I("8");
!H || I("528");
G && I("1.9b") || F && I("8") || Pa && I("9.5") || H && I("528");
!G || I("8");
function M(a, c) {
  this.type = a;
  this.currentTarget = this.target = c
}
A(M, L);
M.prototype.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
M.prototype.n = k;
M.prototype.I = i;
M.prototype.stopPropagation = function() {
  this.n = i
};
function sb(a) {
  a.stopPropagation()
}
;var tb = {Va:"click", cb:"dblclick", xb:"mousedown", Bb:"mouseup", Ab:"mouseover", zb:"mouseout", yb:"mousemove", Ub:"selectstart", rb:"keypress", qb:"keydown", sb:"keyup", Ra:"blur", kb:"focus", eb:"deactivate", lb:F ? "focusin" : "DOMFocusIn", mb:F ? "focusout" : "DOMFocusOut", Ua:"change", Tb:"select", Vb:"submit", pb:"input", Mb:"propertychange", ib:"dragstart", fb:"dragenter", hb:"dragover", gb:"dragleave", jb:"drop", Zb:"touchstart", Yb:"touchmove", Xb:"touchend", Wb:"touchcancel", Za:"contextmenu", 
ta:"error", ob:"help", ub:"load", vb:"losecapture", Nb:"readystatechange", Ob:"resize", Sb:"scroll", ac:"unload", nb:"hashchange", Hb:"pagehide", Ib:"pageshow", Lb:"popstate", $a:"copy", Jb:"paste", bb:"cut", Oa:"beforecopy", Pa:"beforecut", Qa:"beforepaste", wb:"message", Ya:"connect", $b:H ? "webkitTransitionEnd" : Pa ? "oTransitionEnd" : "transitionend"};
function ub(a) {
  ub[" "](a);
  return a
}
ub[" "] = function() {
};
function N(a, c) {
  a && this.init(a, c)
}
A(N, M);
p = N.prototype;
p.target = j;
p.relatedTarget = j;
p.offsetX = 0;
p.offsetY = 0;
p.clientX = 0;
p.clientY = 0;
p.screenX = 0;
p.screenY = 0;
p.button = 0;
p.keyCode = 0;
p.charCode = 0;
p.ctrlKey = k;
p.altKey = k;
p.shiftKey = k;
p.metaKey = k;
p.t = j;
p.init = function(a, c) {
  var b = this.type = a.type;
  M.call(this, b);
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  var d = a.relatedTarget;
  if(d) {
    if(G) {
      var f;
      a: {
        try {
          ub(d.nodeName);
          f = i;
          break a
        }catch(e) {
        }
        f = k
      }
      f || (d = j)
    }
  }else {
    "mouseover" == b ? d = a.fromElement : "mouseout" == b && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = H || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = H || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == b ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.t = a;
  delete this.I;
  delete this.n
};
p.stopPropagation = function() {
  N.g.stopPropagation.call(this);
  this.t.stopPropagation ? this.t.stopPropagation() : this.t.cancelBubble = i
};
p.c = function() {
  N.g.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.t = j
};
function vb() {
}
var wb = 0;
p = vb.prototype;
p.key = 0;
p.q = k;
p.$ = k;
p.init = function(a, c, b, d, f, e) {
  if(ea(a)) {
    this.ga = i
  }else {
    if(a && a.handleEvent && ea(a.handleEvent)) {
      this.ga = k
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.w = a;
  this.na = c;
  this.src = b;
  this.type = d;
  this.capture = !!f;
  this.S = e;
  this.$ = k;
  this.key = ++wb;
  this.q = k
};
p.handleEvent = function(a) {
  return this.ga ? this.w.call(this.S || this.src, a) : this.w.handleEvent.call(this.w, a)
};
var P = {}, Q = {}, R = {}, S = {};
function xb(a, c, b, d, f) {
  if(c) {
    if(t(c)) {
      for(var e = 0;e < c.length;e++) {
        xb(a, c[e], b, d, f)
      }
      return j
    }
    var d = !!d, g = Q;
    c in g || (g[c] = {b:0, e:0});
    g = g[c];
    d in g || (g[d] = {b:0, e:0}, g.b++);
    var g = g[d], m = v(a), n;
    g.e++;
    if(g[m]) {
      n = g[m];
      for(e = 0;e < n.length;e++) {
        if(g = n[e], g.w == b && g.S == f) {
          if(g.q) {
            break
          }
          return n[e].key
        }
      }
    }else {
      n = g[m] = [], g.b++
    }
    e = yb();
    e.src = a;
    g = new vb;
    g.init(b, e, a, c, d, f);
    b = g.key;
    e.key = b;
    n.push(g);
    P[b] = g;
    R[m] || (R[m] = []);
    R[m].push(g);
    a.addEventListener ? (a == s || !a.aa) && a.addEventListener(c, e, d) : a.attachEvent(c in S ? S[c] : S[c] = "on" + c, e);
    return b
  }
  throw Error("Invalid event type");
}
function yb() {
  var a = zb, c = rb ? function(b) {
    return a.call(c.src, c.key, b)
  } : function(b) {
    b = a.call(c.src, c.key, b);
    if(!b) {
      return b
    }
  };
  return c
}
function Ab(a, c, b, d, f) {
  if(t(c)) {
    for(var e = 0;e < c.length;e++) {
      Ab(a, c[e], b, d, f)
    }
  }else {
    d = !!d;
    a: {
      e = Q;
      if(c in e && (e = e[c], d in e && (e = e[d], a = v(a), e[a]))) {
        a = e[a];
        break a
      }
      a = j
    }
    if(a) {
      for(e = 0;e < a.length;e++) {
        if(a[e].w == b && a[e].capture == d && a[e].S == f) {
          Bb(a[e].key);
          break
        }
      }
    }
  }
}
function Bb(a) {
  if(!P[a]) {
    return k
  }
  var c = P[a];
  if(c.q) {
    return k
  }
  var b = c.src, d = c.type, f = c.na, e = c.capture;
  b.removeEventListener ? (b == s || !b.aa) && b.removeEventListener(d, f, e) : b.detachEvent && b.detachEvent(d in S ? S[d] : S[d] = "on" + d, f);
  b = v(b);
  f = Q[d][e][b];
  if(R[b]) {
    var g = R[b];
    ya(g, c);
    0 == g.length && delete R[b]
  }
  c.q = i;
  f.la = i;
  Cb(d, e, b, f);
  delete P[a];
  return i
}
function Cb(a, c, b, d) {
  if(!d.F && d.la) {
    for(var f = 0, e = 0;f < d.length;f++) {
      d[f].q ? d[f].na.src = j : (f != e && (d[e] = d[f]), e++)
    }
    d.length = e;
    d.la = k;
    0 == e && (delete Q[a][c][b], Q[a][c].b--, 0 == Q[a][c].b && (delete Q[a][c], Q[a].b--), 0 == Q[a].b && delete Q[a])
  }
}
function Db(a) {
  var c, b = 0, d = c == j;
  c = !!c;
  if(a == j) {
    Ca(R, function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var f = a[e];
        if(d || c == f.capture) {
          Bb(f.key), b++
        }
      }
    })
  }else {
    if(a = v(a), R[a]) {
      for(var a = R[a], f = a.length - 1;0 <= f;f--) {
        var e = a[f];
        if(d || c == e.capture) {
          Bb(e.key), b++
        }
      }
    }
  }
}
function Eb(a, c, b, d, f) {
  var e = 1, c = v(c);
  if(a[c]) {
    a.e--;
    a = a[c];
    a.F ? a.F++ : a.F = 1;
    try {
      for(var g = a.length, m = 0;m < g;m++) {
        var n = a[m];
        n && !n.q && (e &= Fb(n, f) !== k)
      }
    }finally {
      a.F--, Cb(b, d, c, a)
    }
  }
  return Boolean(e)
}
function Fb(a, c) {
  var b = a.handleEvent(c);
  a.$ && Bb(a.key);
  return b
}
function zb(a, c) {
  if(!P[a]) {
    return i
  }
  var b = P[a], d = b.type, f = Q;
  if(!(d in f)) {
    return i
  }
  var f = f[d], e, g;
  if(!rb) {
    e = c || ba("window.event");
    var m = i in f, n = k in f;
    if(m) {
      if(0 > e.keyCode || e.returnValue != h) {
        return i
      }
      a: {
        var q = k;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(O) {
            q = i
          }
        }
        if(q || e.returnValue == h) {
          e.returnValue = i
        }
      }
    }
    q = new N;
    q.init(e, this);
    e = i;
    try {
      if(m) {
        for(var o = [], r = q.currentTarget;r;r = r.parentNode) {
          o.push(r)
        }
        g = f[i];
        g.e = g.b;
        for(var w = o.length - 1;!q.n && 0 <= w && g.e;w--) {
          q.currentTarget = o[w], e &= Eb(g, o[w], d, i, q)
        }
        if(n) {
          g = f[k];
          g.e = g.b;
          for(w = 0;!q.n && w < o.length && g.e;w++) {
            q.currentTarget = o[w], e &= Eb(g, o[w], d, k, q)
          }
        }
      }else {
        e = Fb(b, q)
      }
    }finally {
      o && (o.length = 0), q.i()
    }
    return e
  }
  d = new N(c, this);
  try {
    e = Fb(b, d)
  }finally {
    d.i()
  }
  return e
}
;function Gb() {
}
A(Gb, L);
p = Gb.prototype;
p.aa = i;
p.H = j;
p.X = aa("H");
p.addEventListener = function(a, c, b, d) {
  xb(this, a, c, b, d)
};
p.removeEventListener = function(a, c, b, d) {
  Ab(this, a, c, b, d)
};
p.dispatchEvent = function(a) {
  var c = a.type || a, b = Q;
  if(c in b) {
    if(u(a)) {
      a = new M(a, this)
    }else {
      if(a instanceof M) {
        a.target = a.target || this
      }else {
        var d = a, a = new M(c, this);
        Fa(a, d)
      }
    }
    var d = 1, f, b = b[c], c = i in b, e;
    if(c) {
      f = [];
      for(e = this;e;e = e.H) {
        f.push(e)
      }
      e = b[i];
      e.e = e.b;
      for(var g = f.length - 1;!a.n && 0 <= g && e.e;g--) {
        a.currentTarget = f[g], d &= Eb(e, f[g], a.type, i, a) && a.I != k
      }
    }
    if(k in b) {
      if(e = b[k], e.e = e.b, c) {
        for(g = 0;!a.n && g < f.length && e.e;g++) {
          a.currentTarget = f[g], d &= Eb(e, f[g], a.type, k, a) && a.I != k
        }
      }else {
        for(f = this;!a.n && f && e.e;f = f.H) {
          a.currentTarget = f, d &= Eb(e, f, a.type, k, a) && a.I != k
        }
      }
    }
    a = Boolean(d)
  }else {
    a = i
  }
  return a
};
p.c = function() {
  Gb.g.c.call(this);
  Db(this);
  this.H = j
};
function Hb(a, c) {
  this.D = a || 1;
  this.z = c || Ib;
  this.K = x(this.Ma, this);
  this.U = y()
}
A(Hb, Gb);
Hb.prototype.enabled = k;
var Ib = s.window;
p = Hb.prototype;
p.o = j;
p.Ma = function() {
  if(this.enabled) {
    var a = y() - this.U;
    0 < a && a < 0.8 * this.D ? this.o = this.z.setTimeout(this.K, this.D - a) : (this.dispatchEvent(Jb), this.enabled && (this.o = this.z.setTimeout(this.K, this.D), this.U = y()))
  }
};
p.start = function() {
  this.enabled = i;
  this.o || (this.o = this.z.setTimeout(this.K, this.D), this.U = y())
};
p.stop = function() {
  this.enabled = k;
  this.o && (this.z.clearTimeout(this.o), this.o = j)
};
p.c = function() {
  Hb.g.c.call(this);
  this.stop();
  delete this.z
};
var Jb = "tick";
function Kb(a, c) {
  if(ea(a)) {
    c && (a = x(a, c))
  }else {
    if(a && "function" == typeof a.handleEvent) {
      a = x(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return Ib.setTimeout(a, 500)
}
;function Lb(a) {
  this.Aa = a;
  this.a = []
}
A(Lb, L);
var Mb = [];
function Nb(a) {
  xa(a.a, Bb);
  a.a.length = 0
}
Lb.prototype.c = function() {
  Lb.g.c.call(this);
  Nb(this)
};
Lb.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
var Ob, Pb = !F || Za();
!G && !F || F && Za() || G && I("1.9.1");
F && I("9");
function Qb(a, c) {
  var b;
  b = (b = a.className) && "function" == typeof b.split ? b.split(/\s+/) : [];
  var d = Ba(arguments, 1), f;
  f = b;
  for(var e = 0, g = 0;g < d.length;g++) {
    0 <= wa(f, d[g]) || (f.push(d[g]), e++)
  }
  f = e == d.length;
  a.className = b.join(" ");
  return f
}
;function Rb(a) {
  return a ? new Sb(9 == a.nodeType ? a : a.ownerDocument || a.document) : Ob || (Ob = new Sb)
}
function Tb(a, c) {
  Ca(c, function(b, c) {
    "style" == c ? a.style.cssText = b : "class" == c ? a.className = b : "for" == c ? a.htmlFor = b : c in Ub ? a.setAttribute(Ub[c], b) : 0 == c.lastIndexOf("aria-", 0) ? a.setAttribute(c, b) : a[c] = b
  })
}
var Ub = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Vb(a, c, b) {
  function d(b) {
    b && c.appendChild(u(b) ? a.createTextNode(b) : b)
  }
  for(var f = 2;f < b.length;f++) {
    var e = b[f];
    if(da(e) && !(fa(e) && 0 < e.nodeType)) {
      var g;
      a: {
        if(e && "number" == typeof e.length) {
          if(fa(e)) {
            g = "function" == typeof e.item || "string" == typeof e.item;
            break a
          }
          if(ea(e)) {
            g = "function" == typeof e.item;
            break a
          }
        }
        g = k
      }
      xa(g ? Aa(e) : e, d)
    }else {
      d(e)
    }
  }
}
function Wb(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Sb(a) {
  this.s = a || s.document || document
}
p = Sb.prototype;
p.ca = Rb;
p.j = function(a) {
  return u(a) ? this.s.getElementById(a) : a
};
p.L = function(a, c, b) {
  var d = this.s, f = arguments, e = f[0], g = f[1];
  if(!Pb && g && (g.name || g.type)) {
    e = ["<", e];
    g.name && e.push(' name="', B(g.name), '"');
    if(g.type) {
      e.push(' type="', B(g.type), '"');
      var m = {};
      Fa(m, g);
      g = m;
      delete g.type
    }
    e.push(">");
    e = e.join("")
  }
  e = d.createElement(e);
  g && (u(g) ? e.className = g : t(g) ? Qb.apply(j, [e].concat(g)) : Tb(e, g));
  2 < f.length && Vb(d, e, f);
  return e
};
p.createElement = function(a) {
  return this.s.createElement(a)
};
p.createTextNode = function(a) {
  return this.s.createTextNode(a)
};
p.appendChild = function(a, c) {
  a.appendChild(c)
};
function Xb(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
;function Yb() {
}
(function(a) {
  a.da = function() {
    return a.Ca || (a.Ca = new a)
  }
})(Yb);
Yb.prototype.Fa = 0;
Yb.da();
function T(a) {
  this.A = a || Rb()
}
A(T, Gb);
p = T.prototype;
p.Ba = Yb.da();
p.ea = j;
p.l = k;
p.f = j;
p.d = j;
p.k = j;
p.r = j;
p.Na = k;
function U(a) {
  return a.ea || (a.ea = ":" + (a.Ba.Fa++).toString(36))
}
p.j = l("f");
p.getParent = l("d");
p.X = function(a) {
  if(this.d && this.d != a) {
    throw Error("Method not supported");
  }
  T.g.X.call(this, a)
};
p.ca = l("A");
p.L = function() {
  this.f = this.A.createElement("div")
};
function Zb(a, c) {
  if(a.l) {
    throw Error("Component already rendered");
  }
  a.f || a.L();
  c ? c.insertBefore(a.f, j) : a.A.s.body.appendChild(a.f);
  (!a.d || a.d.l) && a.B()
}
p.B = function() {
  this.l = i;
  $b(this, function(a) {
    !a.l && a.j() && a.B()
  })
};
function ac(a) {
  $b(a, function(a) {
    a.l && ac(a)
  });
  a.C && Nb(a.C);
  a.l = k
}
p.c = function() {
  T.g.c.call(this);
  this.l && ac(this);
  this.C && (this.C.i(), delete this.C);
  $b(this, function(a) {
    a.i()
  });
  !this.Na && this.f && Wb(this.f);
  this.d = this.f = this.r = this.k = j
};
function $b(a, c) {
  a.k && xa(a.k, c, h)
}
p.removeChild = function(a, c) {
  if(a) {
    var b = u(a) ? a : U(a), a = this.r && b ? (b in this.r ? this.r[b] : h) || j : j;
    if(b && a) {
      var d = this.r;
      b in d && delete d[b];
      ya(this.k, a);
      c && (ac(a), a.f && Wb(a.f));
      b = a;
      if(b == j) {
        throw Error("Unable to set parent component");
      }
      b.d = j;
      T.g.X.call(b, j)
    }
  }
  if(!a) {
    throw Error("Child is not in parent component");
  }
  return a
};
var V = k, W = "";
function bc(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var cc = navigator.plugins["Shockwave Flash"];
  cc && (V = i, cc.description && (W = bc(cc.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (V = i, W = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var dc = navigator.mimeTypes["application/x-shockwave-flash"];
    (V = dc && dc.enabledPlugin) && (W = bc(dc.enabledPlugin.description))
  }else {
    try {
      var ec = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), V = i, W = bc(ec.GetVariable("$version"))
    }catch(fc) {
      try {
        ec = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), V = i, W = "6.0.21"
      }catch(gc) {
        try {
          ec = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), V = i, W = bc(ec.GetVariable("$version"))
        }catch(hc) {
        }
      }
    }
  }
}
var ic = W;
function jc(a, c) {
  this.A = c || Rb();
  this.ya = a;
  this.N = new Lb(this);
  this.Q = new D
}
A(jc, T);
p = jc.prototype;
p.Da = pb("goog.ui.media.FlashObject");
p.sa = "window";
p.va = "#000000";
p.Z = "sameDomain";
function kc(a, c, b) {
  a.Y = u(c) ? c : Math.round(c) + "px";
  a.T = u(b) ? b : Math.round(b) + "px";
  if(a.j()) {
    c = lc(a);
    b = a.T;
    if(b == h) {
      throw Error("missing height argument");
    }
    c.style.width = Xb(a.Y);
    c.style.height = Xb(b)
  }
}
p.B = function() {
  jc.g.B.call(this);
  var a = this.j(), c;
  c = F ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var b = F ? '<param name="wmode" value="%s"/>' : "wmode=%s", b = la(b, this.sa), d = Ga(this.Q), f = Ha(this.Q), e = [], g = 0;g < d.length;g++) {
    var m = na(d[g]), n = na(f[g]);
    e.push(m + "=" + n)
  }
  c = la(c, U(this), U(this), "goog-ui-media-flash-object", B(this.ya), B(e.join("&")), this.va, this.Z, b);
  a.innerHTML = c;
  this.Y && this.T && kc(this, this.Y, this.T);
  a = this.N;
  c = this.j();
  b = Da(tb);
  t(b) || (Mb[0] = b, b = Mb);
  for(d = 0;d < b.length;d++) {
    a.a.push(xb(c, b[d], sb || a, k, a.Aa || a))
  }
};
p.L = function() {
  if(this.V != j && !(0 <= ta(ic, this.V))) {
    throw this.Da.log(hb, "Required flash version not found:" + this.V, h), Error("Method not supported");
  }
  var a = this.ca().createElement("div");
  a.className = "goog-ui-media-flash";
  this.f = a
};
function lc(a) {
  return a.j() ? a.j().firstChild : j
}
p.c = function() {
  jc.g.c.call(this);
  this.Q = j;
  this.N.i();
  this.N = j
};
function mc(a) {
  return!a.l || !a.j() ? k : lc(a).readyState && 4 == lc(a).readyState || lc(a).PercentLoaded && 100 == lc(a).PercentLoaded() ? i : k
}
;var nc = {Ta:"breakStarted", Sa:"breakEnded", Qb:"scriptFetched", Rb:"scriptTimeout", ab:"custom", Wa:"clickThru", tb:"linearChanged", Xa:"companion", Cb:"noCompanion", Kb:"paused", Pb:"resumed", bc:"volumeChanged", Fb:"overlayStarted", Gb:"overlayStopped", Eb:"overlayExpanded", Db:"overlayCollapsed", ta:"error"};
function X(a) {
  this.G = pb("adaptv.ads.VPAIDAd");
  this.G.info("VPAIDAd()");
  this.M = a;
  this.ha = []
}
function Y(a, c, b) {
  xa(a.ha, function(a) {
    a.type == c && (b = b || {}, a.fn.call(a.scope, {target:this, type:c, data:b}))
  }, a)
}
p = X.prototype;
p.initAd = function(a, c, b) {
  "number" == typeof a && "number" == typeof c || (a = 500, c = 400);
  this.width = a;
  this.height = c;
  var d = "https:" == document.location.protocol ? "https://secure-assets.adap.tv" : "http://redir.adap.tv", f = new jc(d + "/redir/client/swfloader.swf?id=swfloader");
  kc(f, a, c);
  f.sa = "opaque";
  f.V = "9.0.124";
  f.Z = "always";
  Zb(f, u(this.M) ? document.getElementById(this.M) : this.M);
  f.j().id = "adaptvDiv";
  var e = setInterval(x(function() {
    if(mc(f) && !(window.__adaptv__.jsproxy == j || window.__adaptv__.jsproxy[U(f)] == j) && mc(f) && window.__adaptv__.jsproxy != j) {
      clearInterval(e), this.J = window.__adaptv__.jsproxy[U(f)].swfloader, this.J.__on("adaptv_swfloader_SwfLoaded", function() {
        this.G.info("swfloader loaded");
        this.v = new Hb(300);
        this.v.start();
        xb(this.v, Jb, function() {
          if(window.__adaptv__.jsproxy[U(f)].adplayer != j) {
            this.v.stop();
            this.v.i();
            this.v = j;
            this.h = window.__adaptv__.jsproxy[U(f)].adplayer;
            var d = function(a) {
              this.G.info("[AdPlayerEvent] " + a.type, a.data);
              switch(a.type) {
                case "scriptFetched":
                  a.data.hasPreroll === i ? Y(this, oc) : Y(this, pc, {message:a.data.message || "No preroll ad available in control script"});
                  break;
                case "breakStarted":
                  Y(this, qc);
                  break;
                case "clickThru":
                  Y(this, rc, a.data);
                  break;
                case "companion":
                  Y(this, sc, a.data);
                  break;
                case "breakEnded":
                  var b = Kb(function() {
                    Ib.clearTimeout(b);
                    Y(this, tc)
                  }, this)
              }
            };
            Ca(nc, function(a) {
              this.h.__on(a, d, this)
            }, this);
            this.h.apiVersion("2.1");
            this.h.setMetadata(b);
            this.h.setContentSize(a, c);
            this.h.setHTMLSize(a, c, 0, 0);
            this.h.fetchScript()
          }
        }, k, this)
      }, this), this.J.__on("adaptv_swfloader_SwfLoadError", function() {
        this.G.info("swfloader load error");
        Y(this, pc)
      }, this), this.J.init(a, c), this.J.load(d + "/redir/client/static/AS3AdPlayer.swf?js=adplayer", j, {events:Da(nc)})
    }
  }, this), 500)
};
p.startAd = function() {
  this.h.startBreak()
};
p.stopAd = function() {
  this.h.endBreak()
};
p.ma = function(a, c, b) {
  this.ha.push({type:a, fn:c, scope:b})
};
p.i = function() {
  this.h.destroy()
};
var oc = "AdLoaded", qc = "AdStarted", sc = "AdCompanionDisplay", rc = "AdClickThru", tc = "AdStopped", pc = "AdError";
function uc() {
  this.oa = y()
}
var vc = new uc;
uc.prototype.set = aa("oa");
uc.prototype.reset = function() {
  this.set(y())
};
uc.prototype.get = l("oa");
function wc(a) {
  this.Ga = a || "";
  this.La = vc
}
p = wc.prototype;
p.pa = i;
p.Ja = i;
p.Ia = i;
p.qa = k;
p.Ka = k;
function Z(a) {
  return 10 > a ? "0" + a : "" + a
}
function xc(a, c) {
  var b = (a.ra - c) / 1E3, d = b.toFixed(3), f = 0;
  if(1 > b) {
    f = 2
  }else {
    for(;100 > b;) {
      f++, b *= 10
    }
  }
  for(;0 < f--;) {
    d = " " + d
  }
  return d
}
function yc(a) {
  wc.call(this, a)
}
A(yc, wc);
function zc() {
  this.Ha = x(this.ua, this);
  this.R = new yc;
  this.R.pa = k;
  this.fa = this.R.qa = k;
  this.ia = "";
  this.xa = {}
}
zc.prototype.ua = function(a) {
  if(!this.xa[a.ja]) {
    var c;
    c = this.R;
    var b = [];
    b.push(c.Ga, " ");
    if(c.pa) {
      var d = new Date(a.ra);
      b.push("[", Z(d.getFullYear() - 2E3) + Z(d.getMonth() + 1) + Z(d.getDate()) + " " + Z(d.getHours()) + ":" + Z(d.getMinutes()) + ":" + Z(d.getSeconds()) + "." + Z(Math.floor(d.getMilliseconds() / 10)), "] ")
    }
    c.Ja && b.push("[", xc(a, c.La.get()), "s] ");
    c.Ia && b.push("[", a.ja, "] ");
    c.Ka && b.push("[", a.m.name, "] ");
    b.push(a.ka, "\n");
    c.qa && a.P && b.push(a.O, "\n");
    c = b.join("");
    if($ && $.firebug) {
      switch(a.m) {
        case fb:
          $.info(c);
          break;
        case gb:
          $.error(c);
          break;
        case hb:
          $.warn(c);
          break;
        default:
          $.debug(c)
      }
    }else {
      $ ? $.log(c) : window.opera ? window.opera.postError(c) : this.ia += c
    }
  }
};
var $ = window.console;
z("__adaptv__.debug.configure", function(a, c) {
  pb(a).W(c || kb);
  var b = new zc;
  if(i != b.fa) {
    ob();
    var d = nb, f = b.Ha;
    d.u || (d.u = []);
    d.u.push(f);
    b.fa = i
  }
});
z("__adaptv__.debug.log", function(a) {
  pb("adaptv.page").info(a)
});
z("__adaptv__.ads.VPAIDAd", X);
z("__adaptv__.ads.VPAIDAd.prototype.initAd", X.prototype.initAd);
z("__adaptv__.ads.VPAIDAd.prototype.startAd", X.prototype.startAd);
z("__adaptv__.ads.VPAIDAd.prototype.stopAd", X.prototype.stopAd);
z("__adaptv__.ads.VPAIDAd.prototype.on", X.prototype.ma);
z("__adaptv__.ads.VPAIDEvent.AdLoaded", oc);
z("__adaptv__.ads.VPAIDEvent.AdStarted", qc);
z("__adaptv__.ads.VPAIDEvent.AdCompanionDisplay", sc);
z("__adaptv__.ads.VPAIDEvent.AdClickThru", rc);
z("__adaptv__.ads.VPAIDEvent.AdStopped", tc);
z("__adaptv__.ads.VPAIDEvent.AdError", pc);
z("__adaptv__.ads.vpaid.VPAIDAd", X);
z("__adaptv__.ads.vpaid.VPAIDAd.prototype.initAd", X.prototype.initAd);
z("__adaptv__.ads.vpaid.VPAIDAd.prototype.startAd", X.prototype.startAd);
z("__adaptv__.ads.vpaid.VPAIDAd.prototype.stopAd", X.prototype.stopAd);
z("__adaptv__.ads.vpaid.VPAIDAd.prototype.on", X.prototype.ma);
z("__adaptv__.ads.vpaid.VPAIDEvent.AdLoaded", oc);
z("__adaptv__.ads.vpaid.VPAIDEvent.AdStarted", qc);
z("__adaptv__.ads.vpaid.VPAIDEvent.AdCompanionDisplay", sc);
z("__adaptv__.ads.vpaid.VPAIDEvent.AdClickThru", rc);
z("__adaptv__.ads.vpaid.VPAIDEvent.AdStopped", tc);
z("__adaptv__.ads.vpaid.VPAIDEvent.AdError", pc);
})();
