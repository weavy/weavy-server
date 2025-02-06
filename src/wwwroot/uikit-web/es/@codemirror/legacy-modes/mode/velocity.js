﻿var b = Object.defineProperty;
var a = (n, e) => b(n, "name", { value: e, configurable: !0 });
function s(n) {
  for (var e = {}, i = n.split(" "), r = 0; r < i.length; ++r) e[i[r]] = !0;
  return e;
}
a(s, "parseWords");
var c = s("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"), o = s("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"), k = s("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"), p = /[+\-*&%=<>!?:\/|]/;
function t(n, e, i) {
  return e.tokenize = i, i(n, e);
}
a(t, "chain");
function f(n, e) {
  var i = e.beforeParams;
  e.beforeParams = !1;
  var r = n.next();
  if (r == "'" && !e.inString && e.inParams)
    return e.lastTokenWasBuiltin = !1, t(n, e, h(r));
  if (r == '"') {
    if (e.lastTokenWasBuiltin = !1, e.inString)
      return e.inString = !1, "string";
    if (e.inParams)
      return t(n, e, h(r));
  } else {
    if (/[\[\]{}\(\),;\.]/.test(r))
      return r == "(" && i ? e.inParams = !0 : r == ")" && (e.inParams = !1, e.lastTokenWasBuiltin = !0), null;
    if (/\d/.test(r))
      return e.lastTokenWasBuiltin = !1, n.eatWhile(/[\w\.]/), "number";
    if (r == "#" && n.eat("*"))
      return e.lastTokenWasBuiltin = !1, t(n, e, W);
    if (r == "#" && n.match(/ *\[ *\[/))
      return e.lastTokenWasBuiltin = !1, t(n, e, d);
    if (r == "#" && n.eat("#"))
      return e.lastTokenWasBuiltin = !1, n.skipToEnd(), "comment";
    if (r == "$")
      return n.eat("!"), n.eatWhile(/[\w\d\$_\.{}-]/), k && k.propertyIsEnumerable(n.current()) ? "keyword" : (e.lastTokenWasBuiltin = !0, e.beforeParams = !0, "builtin");
    if (p.test(r))
      return e.lastTokenWasBuiltin = !1, n.eatWhile(p), "operator";
    n.eatWhile(/[\w\$_{}@]/);
    var l = n.current();
    return c && c.propertyIsEnumerable(l) ? "keyword" : o && o.propertyIsEnumerable(l) || n.current().match(/^#@?[a-z0-9_]+ *$/i) && n.peek() == "(" && !(o && o.propertyIsEnumerable(l.toLowerCase())) ? (e.beforeParams = !0, e.lastTokenWasBuiltin = !1, "keyword") : e.inString ? (e.lastTokenWasBuiltin = !1, "string") : n.pos > l.length && n.string.charAt(n.pos - l.length - 1) == "." && e.lastTokenWasBuiltin ? "builtin" : (e.lastTokenWasBuiltin = !1, null);
  }
}
a(f, "tokenBase");
function h(n) {
  return function(e, i) {
    for (var r = !1, l, u = !1; (l = e.next()) != null; ) {
      if (l == n && !r) {
        u = !0;
        break;
      }
      if (n == '"' && e.peek() == "$" && !r) {
        i.inString = !0, u = !0;
        break;
      }
      r = !r && l == "\\";
    }
    return u && (i.tokenize = f), "string";
  };
}
a(h, "tokenString");
function W(n, e) {
  for (var i = !1, r; r = n.next(); ) {
    if (r == "#" && i) {
      e.tokenize = f;
      break;
    }
    i = r == "*";
  }
  return "comment";
}
a(W, "tokenComment");
function d(n, e) {
  for (var i = 0, r; r = n.next(); ) {
    if (r == "#" && i == 2) {
      e.tokenize = f;
      break;
    }
    r == "]" ? i++ : r != " " && (i = 0);
  }
  return "meta";
}
a(d, "tokenUnparsed");
const v = {
  name: "velocity",
  startState: /* @__PURE__ */ a(function() {
    return {
      tokenize: f,
      beforeParams: !1,
      inParams: !1,
      inString: !1,
      lastTokenWasBuiltin: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ a(function(n, e) {
    return n.eatSpace() ? null : e.tokenize(n, e);
  }, "token"),
  languageData: {
    commentTokens: { line: "##", block: { open: "#*", close: "*#" } }
  }
};
export {
  v as velocity
};
