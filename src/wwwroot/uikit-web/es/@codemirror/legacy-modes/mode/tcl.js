﻿var d = Object.defineProperty;
var a = (e, n) => d(e, "name", { value: n, configurable: !0 });
function p(e) {
  for (var n = {}, t = e.split(" "), r = 0; r < t.length; ++r) n[t[r]] = !0;
  return n;
}
a(p, "parseWords");
var u = p("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"), c = p("if elseif else and not or eq ne in ni for foreach while switch"), s = /[+\-*&%=<>!?^\/\|]/;
function l(e, n, t) {
  return n.tokenize = t, t(e, n);
}
a(l, "chain");
function i(e, n) {
  var t = n.beforeParams;
  n.beforeParams = !1;
  var r = e.next();
  if ((r == '"' || r == "'") && n.inParams)
    return l(e, n, k(r));
  if (/[\[\]{}\(\),;\.]/.test(r))
    return r == "(" && t ? n.inParams = !0 : r == ")" && (n.inParams = !1), null;
  if (/\d/.test(r))
    return e.eatWhile(/[\w\.]/), "number";
  if (r == "#")
    return e.eat("*") ? l(e, n, m) : r == "#" && e.match(/ *\[ *\[/) ? l(e, n, b) : (e.skipToEnd(), "comment");
  if (r == '"')
    return e.skipTo(/"/), "comment";
  if (r == "$")
    return e.eatWhile(/[$_a-z0-9A-Z\.{:]/), e.eatWhile(/}/), n.beforeParams = !0, "builtin";
  if (s.test(r))
    return e.eatWhile(s), "comment";
  e.eatWhile(/[\w\$_{}\xa1-\uffff]/);
  var o = e.current().toLowerCase();
  return u && u.propertyIsEnumerable(o) ? "keyword" : c && c.propertyIsEnumerable(o) ? (n.beforeParams = !0, "keyword") : null;
}
a(i, "tokenBase");
function k(e) {
  return function(n, t) {
    for (var r = !1, o, f = !1; (o = n.next()) != null; ) {
      if (o == e && !r) {
        f = !0;
        break;
      }
      r = !r && o == "\\";
    }
    return f && (t.tokenize = i), "string";
  };
}
a(k, "tokenString");
function m(e, n) {
  for (var t = !1, r; r = e.next(); ) {
    if (r == "#" && t) {
      n.tokenize = i;
      break;
    }
    t = r == "*";
  }
  return "comment";
}
a(m, "tokenComment");
function b(e, n) {
  for (var t = 0, r; r = e.next(); ) {
    if (r == "#" && t == 2) {
      n.tokenize = i;
      break;
    }
    r == "]" ? t++ : r != " " && (t = 0);
  }
  return "meta";
}
a(b, "tokenUnparsed");
const g = {
  name: "tcl",
  startState: /* @__PURE__ */ a(function() {
    return {
      tokenize: i,
      beforeParams: !1,
      inParams: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ a(function(e, n) {
    return e.eatSpace() ? null : n.tokenize(e, n);
  }, "token"),
  languageData: {
    commentTokens: { line: "#" }
  }
};
export {
  g as tcl
};
