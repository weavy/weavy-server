﻿var g = Object.defineProperty;
var r = (n, t) => g(n, "name", { value: t, configurable: !0 });
function f(n, t, i) {
  return t(i), i(n, t);
}
r(f, "switchState");
var o = /[a-z]/, w = /[A-Z]/, p = /[a-zA-Z0-9_]/, l = /[0-9]/, x = /[0-9A-Fa-f]/, h = /[-&*+.\\/<>=?^|:]/, k = /[(),[\]{}]/, E = /[ \v\f]/;
function e() {
  return function(n, t) {
    if (n.eatWhile(E))
      return null;
    var i = n.next();
    if (k.test(i))
      return i === "{" && n.eat("-") ? f(n, t, m(1)) : i === "[" && n.match("glsl|") ? f(n, t, W) : "builtin";
    if (i === "'")
      return f(n, t, y);
    if (i === '"')
      return n.eat('"') ? n.eat('"') ? f(n, t, d) : "string" : f(n, t, u);
    if (w.test(i))
      return n.eatWhile(p), "type";
    if (o.test(i)) {
      var a = n.pos === 1;
      return n.eatWhile(p), a ? "def" : "variable";
    }
    if (l.test(i)) {
      if (i === "0") {
        if (n.eat(/[xX]/))
          return n.eatWhile(x), "number";
      } else
        n.eatWhile(l);
      return n.eat(".") && n.eatWhile(l), n.eat(/[eE]/) && (n.eat(/[-+]/), n.eatWhile(l)), "number";
    }
    return h.test(i) ? i === "-" && n.eat("-") ? (n.skipToEnd(), "comment") : (n.eatWhile(h), "keyword") : i === "_" ? "keyword" : "error";
  };
}
r(e, "normal");
function m(n) {
  return n == 0 ? e() : function(t, i) {
    for (; !t.eol(); ) {
      var a = t.next();
      if (a == "{" && t.eat("-"))
        ++n;
      else if (a == "-" && t.eat("}") && (--n, n === 0))
        return i(e()), "comment";
    }
    return i(m(n)), "comment";
  };
}
r(m, "chompMultiComment");
function d(n, t) {
  for (; !n.eol(); ) {
    var i = n.next();
    if (i === '"' && n.eat('"') && n.eat('"'))
      return t(e()), "string";
  }
  return "string";
}
r(d, "chompMultiString");
function u(n, t) {
  for (; n.skipTo('\\"'); )
    n.next(), n.next();
  return n.skipTo('"') ? (n.next(), t(e()), "string") : (n.skipToEnd(), t(e()), "error");
}
r(u, "chompSingleString");
function y(n, t) {
  for (; n.skipTo("\\'"); )
    n.next(), n.next();
  return n.skipTo("'") ? (n.next(), t(e()), "string") : (n.skipToEnd(), t(e()), "error");
}
r(y, "chompChar");
function W(n, t) {
  for (; !n.eol(); ) {
    var i = n.next();
    if (i === "|" && n.eat("]"))
      return t(e()), "string";
  }
  return "string";
}
r(W, "chompGlsl");
var R = {
  case: 1,
  of: 1,
  as: 1,
  if: 1,
  then: 1,
  else: 1,
  let: 1,
  in: 1,
  type: 1,
  alias: 1,
  module: 1,
  where: 1,
  import: 1,
  exposing: 1,
  port: 1
};
const b = {
  name: "elm",
  startState: /* @__PURE__ */ r(function() {
    return { f: e() };
  }, "startState"),
  copyState: /* @__PURE__ */ r(function(n) {
    return { f: n.f };
  }, "copyState"),
  token: /* @__PURE__ */ r(function(n, t) {
    var i = t.f(n, function(v) {
      t.f = v;
    }), a = n.current();
    return R.hasOwnProperty(a) ? "keyword" : i;
  }, "token"),
  languageData: {
    commentTokens: { line: "--" }
  }
};
export {
  b as elm
};
