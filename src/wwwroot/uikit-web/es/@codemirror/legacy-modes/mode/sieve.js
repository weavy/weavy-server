﻿var p = Object.defineProperty;
var t = (n, e) => p(n, "name", { value: e, configurable: !0 });
function f(n) {
  for (var e = {}, i = n.split(" "), r = 0; r < i.length; ++r) e[i[r]] = !0;
  return e;
}
t(f, "words");
var k = f("if elsif else stop require"), d = f("true false not");
function u(n, e) {
  var i = n.next();
  if (i == "/" && n.eat("*"))
    return e.tokenize = l, l(n, e);
  if (i === "#")
    return n.skipToEnd(), "comment";
  if (i == '"')
    return e.tokenize = h(i), e.tokenize(n, e);
  if (i == "(")
    return e._indent.push("("), e._indent.push("{"), null;
  if (i === "{")
    return e._indent.push("{"), null;
  if (i == ")" && (e._indent.pop(), e._indent.pop()), i === "}")
    return e._indent.pop(), null;
  if (i == "," || i == ";" || /[{}\(\),;]/.test(i))
    return null;
  if (/\d/.test(i))
    return n.eatWhile(/[\d]/), n.eat(/[KkMmGg]/), "number";
  if (i == ":")
    return n.eatWhile(/[a-zA-Z_]/), n.eatWhile(/[a-zA-Z0-9_]/), "operator";
  n.eatWhile(/\w/);
  var r = n.current();
  return r == "text" && n.eat(":") ? (e.tokenize = c, "string") : k.propertyIsEnumerable(r) ? "keyword" : d.propertyIsEnumerable(r) ? "atom" : null;
}
t(u, "tokenBase");
function c(n, e) {
  return e._multiLineString = !0, n.sol() ? (n.next() == "." && n.eol() && (e._multiLineString = !1, e.tokenize = u), "string") : (n.eatSpace(), n.peek() == "#" ? (n.skipToEnd(), "comment") : (n.skipToEnd(), "string"));
}
t(c, "tokenMultiLineString");
function l(n, e) {
  for (var i = !1, r; (r = n.next()) != null; ) {
    if (i && r == "/") {
      e.tokenize = u;
      break;
    }
    i = r == "*";
  }
  return "comment";
}
t(l, "tokenCComment");
function h(n) {
  return function(e, i) {
    for (var r = !1, o; (o = e.next()) != null && !(o == n && !r); )
      r = !r && o == "\\";
    return r || (i.tokenize = u), "string";
  };
}
t(h, "tokenString");
const a = {
  name: "sieve",
  startState: /* @__PURE__ */ t(function(n) {
    return {
      tokenize: u,
      baseIndent: n || 0,
      _indent: []
    };
  }, "startState"),
  token: /* @__PURE__ */ t(function(n, e) {
    return n.eatSpace() ? null : (e.tokenize || u)(n, e);
  }, "token"),
  indent: /* @__PURE__ */ t(function(n, e, i) {
    var r = n._indent.length;
    return e && e[0] == "}" && r--, r < 0 && (r = 0), r * i.unit;
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*\}$/
  }
};
export {
  a as sieve
};
