﻿var v = Object.defineProperty;
var r = (e, n) => v(e, "name", { value: n, configurable: !0 });
var l;
function x(e) {
  return new RegExp("^(?:" + e.join("|") + ")$", "i");
}
r(x, "wordRegexp");
x([]);
var g = x(["@prefix", "@base", "a"]), p = /[*+\-<>=&|]/;
function d(e, n) {
  var t = e.next();
  if (l = null, t == "<" && !e.match(/^[\s\u00a0=]/, !1))
    return e.match(/^[^\s\u00a0>]*>?/), "atom";
  if (t == '"' || t == "'")
    return n.tokenize = k(t), n.tokenize(e, n);
  if (/[{}\(\),\.;\[\]]/.test(t))
    return l = t, null;
  if (t == "#")
    return e.skipToEnd(), "comment";
  if (p.test(t))
    return e.eatWhile(p), null;
  if (t == ":")
    return "operator";
  if (e.eatWhile(/[_\w\d]/), e.peek() == ":")
    return "variableName.special";
  var i = e.current();
  return g.test(i) ? "meta" : t >= "A" && t <= "Z" ? "comment" : "keyword";
  var i = e.current();
}
r(d, "tokenBase");
function k(e) {
  return function(n, t) {
    for (var i = !1, o; (o = n.next()) != null; ) {
      if (o == e && !i) {
        t.tokenize = d;
        break;
      }
      i = !i && o == "\\";
    }
    return "string";
  };
}
r(k, "tokenLiteral");
function c(e, n, t) {
  e.context = { prev: e.context, indent: e.indent, col: t, type: n };
}
r(c, "pushContext");
function u(e) {
  e.indent = e.context.indent, e.context = e.context.prev;
}
r(u, "popContext");
const y = {
  name: "turtle",
  startState: /* @__PURE__ */ r(function() {
    return {
      tokenize: d,
      context: null,
      indent: 0,
      col: 0
    };
  }, "startState"),
  token: /* @__PURE__ */ r(function(e, n) {
    if (e.sol() && (n.context && n.context.align == null && (n.context.align = !1), n.indent = e.indentation()), e.eatSpace()) return null;
    var t = n.tokenize(e, n);
    if (t != "comment" && n.context && n.context.align == null && n.context.type != "pattern" && (n.context.align = !0), l == "(") c(n, ")", e.column());
    else if (l == "[") c(n, "]", e.column());
    else if (l == "{") c(n, "}", e.column());
    else if (/[\]\}\)]/.test(l)) {
      for (; n.context && n.context.type == "pattern"; ) u(n);
      n.context && l == n.context.type && u(n);
    } else l == "." && n.context && n.context.type == "pattern" ? u(n) : /atom|string|variable/.test(t) && n.context && (/[\}\]]/.test(n.context.type) ? c(n, "pattern", e.column()) : n.context.type == "pattern" && !n.context.align && (n.context.align = !0, n.context.col = e.column()));
    return t;
  }, "token"),
  indent: /* @__PURE__ */ r(function(e, n, t) {
    var i = n && n.charAt(0), o = e.context;
    if (/[\]\}]/.test(i))
      for (; o && o.type == "pattern"; ) o = o.prev;
    var f = o && i == o.type;
    return o ? o.type == "pattern" ? o.col : o.align ? o.col + (f ? 0 : 1) : o.indent + (f ? 0 : t.unit) : 0;
  }, "indent"),
  languageData: {
    commentTokens: { line: "#" }
  }
};
export {
  y as turtle
};
