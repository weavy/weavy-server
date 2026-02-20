var o = Object.defineProperty;
var e = (n, t) => o(n, "name", { value: t, configurable: !0 });
function f(n, t, i) {
  return t(i), i(n, t);
}
e(f, "switchState");
var g = /[a-z]/, w = /[A-Z]/, m = /[a-zA-Z0-9_]/, l = /[0-9]/, x = /[0-9A-Fa-f]/, p = /[-&*+.\\/<>=?^|:]/, E = /[(),[\]{}]/, d = /[ \v\f]/;
function r() {
  return function(n, t) {
    if (n.eatWhile(d))
      return null;
    var i = n.next();
    if (E.test(i))
      return i === "{" && n.eat("-") ? f(n, t, h(1)) : i === "[" && n.match("glsl|") ? f(n, t, R) : "builtin";
    if (i === "'")
      return f(n, t, y);
    if (i === '"')
      return n.eat('"') ? n.eat('"') ? f(n, t, k) : "string" : f(n, t, u);
    if (w.test(i))
      return n.eatWhile(m), "type";
    if (g.test(i)) {
      var a = n.pos === 1;
      return n.eatWhile(m), a ? "def" : "variable";
    }
    if (l.test(i)) {
      if (i === "0") {
        if (n.eat(/[xX]/))
          return n.eatWhile(x), "number";
      } else
        n.eatWhile(l);
      return n.eat(".") && n.eatWhile(l), n.eat(/[eE]/) && (n.eat(/[-+]/), n.eatWhile(l)), "number";
    }
    return p.test(i) ? i === "-" && n.eat("-") ? (n.skipToEnd(), "comment") : (n.eatWhile(p), "keyword") : i === "_" ? "keyword" : "error";
  };
}
e(r, "normal");
function h(n) {
  return n == 0 ? r() : function(t, i) {
    for (; !t.eol(); ) {
      var a = t.next();
      if (a == "{" && t.eat("-"))
        ++n;
      else if (a == "-" && t.eat("}") && (--n, n === 0))
        return i(r()), "comment";
    }
    return i(h(n)), "comment";
  };
}
e(h, "chompMultiComment");
function k(n, t) {
  for (; !n.eol(); ) {
    var i = n.next();
    if (i === '"' && n.eat('"') && n.eat('"'))
      return t(r()), "string";
  }
  return "string";
}
e(k, "chompMultiString");
function u(n, t) {
  for (; n.skipTo('\\"'); )
    n.next(), n.next();
  return n.skipTo('"') ? (n.next(), t(r()), "string") : (n.skipToEnd(), t(r()), "error");
}
e(u, "chompSingleString");
function y(n, t) {
  for (; n.skipTo("\\'"); )
    n.next(), n.next();
  return n.skipTo("'") ? (n.next(), t(r()), "string") : (n.skipToEnd(), t(r()), "error");
}
e(y, "chompChar");
function R(n, t) {
  for (; !n.eol(); ) {
    var i = n.next();
    if (i === "|" && n.eat("]"))
      return t(r()), "string";
  }
  return "string";
}
e(R, "chompGlsl");
var W = {
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
  startState: /* @__PURE__ */ e(function() {
    return { f: r() };
  }, "startState"),
  copyState: /* @__PURE__ */ e(function(n) {
    return { f: n.f };
  }, "copyState"),
  token: /* @__PURE__ */ e(function(n, t) {
    var i = t.f(n, function(v) {
      t.f = v;
    }), a = n.current();
    return W.hasOwnProperty(a) ? "keyword" : i;
  }, "token"),
  languageData: {
    commentTokens: { line: "--" }
  }
};
export {
  b as elm
};
