﻿var z = Object.defineProperty;
var i = (e, n) => z(e, "name", { value: n, configurable: !0 });
function f(e, n, t) {
  return function(r, k) {
    for (; !r.eol(); ) {
      if (r.match(n)) {
        k.tokenize = c;
        break;
      }
      r.next();
    }
    return t && (k.tokenize = t), e;
  };
}
i(f, "inBlock");
function l(e) {
  return function(n, t) {
    for (; !n.eol(); )
      n.next();
    return t.tokenize = c, e;
  };
}
i(l, "inLine");
function c(e, n) {
  function t(x) {
    return n.tokenize = x, x(e, n);
  }
  i(t, "chain");
  var r = e.sol(), k = e.next();
  switch (k) {
    case "{":
      return e.eat("/"), e.eatSpace(), e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/), n.tokenize = p, "tag";
    case "_":
      if (e.eat("_"))
        return t(f("strong", "__", c));
      break;
    case "'":
      if (e.eat("'"))
        return t(f("em", "''", c));
      break;
    case "(":
      if (e.eat("("))
        return t(f("link", "))", c));
      break;
    case "[":
      return t(f("url", "]", c));
    case "|":
      if (e.eat("|"))
        return t(f("comment", "||"));
      break;
    case "-":
      if (e.eat("="))
        return t(f("header string", "=-", c));
      if (e.eat("-"))
        return t(f("error tw-deleted", "--", c));
      break;
    case "=":
      if (e.match("=="))
        return t(f("tw-underline", "===", c));
      break;
    case ":":
      if (e.eat(":"))
        return t(f("comment", "::"));
      break;
    case "^":
      return t(f("tw-box", "^"));
    case "~":
      if (e.match("np~"))
        return t(f("meta", "~/np~"));
      break;
  }
  if (r)
    switch (k) {
      case "!":
        return e.match("!!!!!") || e.match("!!!!") || e.match("!!!") || e.match("!!"), t(l("header string"));
      case "*":
      case "#":
      case "+":
        return t(l("tw-listitem bracket"));
    }
  return null;
}
i(c, "inText");
var d, g;
function p(e, n) {
  var t = e.next(), r = e.peek();
  return t == "}" ? (n.tokenize = c, "tag") : t == "(" || t == ")" ? "bracket" : t == "=" ? (g = "equals", r == ">" && (e.next(), r = e.peek()), /[\'\"]/.test(r) || (n.tokenize = N()), "operator") : /[\'\"]/.test(t) ? (n.tokenize = L(t), n.tokenize(e, n)) : (e.eatWhile(/[^\s\u00a0=\"\'\/?]/), "keyword");
}
i(p, "inPlugin");
function L(e) {
  return function(n, t) {
    for (; !n.eol(); )
      if (n.next() == e) {
        t.tokenize = p;
        break;
      }
    return "string";
  };
}
i(L, "inAttribute");
function N() {
  return function(e, n) {
    for (; !e.eol(); ) {
      var t = e.next(), r = e.peek();
      if (t == " " || t == "," || /[ )}]/.test(r)) {
        n.tokenize = p;
        break;
      }
    }
    return "string";
  };
}
i(N, "inAttributeNoQuote");
var u, a;
function s() {
  for (var e = arguments.length - 1; e >= 0; e--) u.cc.push(arguments[e]);
}
i(s, "pass");
function o() {
  return s.apply(null, arguments), !0;
}
i(o, "cont");
function v(e, n) {
  var t = u.context && u.context.noIndent;
  u.context = {
    prev: u.context,
    pluginName: e,
    indent: u.indented,
    startOfLine: n,
    noIndent: t
  };
}
i(v, "pushContext");
function b() {
  u.context && (u.context = u.context.prev);
}
i(b, "popContext");
function P(e) {
  if (e == "openPlugin")
    return u.pluginName = d, o(h, O(u.startOfLine));
  if (e == "closePlugin") {
    var n = !1;
    return u.context ? (n = u.context.pluginName != d, b()) : n = !0, n && (a = "error"), o(S(n));
  } else return e == "string" && ((!u.context || u.context.name != "!cdata") && v("!cdata"), u.tokenize == c && b()), o();
}
i(P, "element");
function O(e) {
  return function(n) {
    return n == "selfclosePlugin" || n == "endPlugin" || n == "endPlugin" && v(u.pluginName, e), o();
  };
}
i(O, "endplugin");
function S(e) {
  return function(n) {
    return e && (a = "error"), n == "endPlugin" ? o() : s();
  };
}
i(S, "endcloseplugin");
function h(e) {
  return e == "keyword" ? (a = "attribute", o(h)) : e == "equals" ? o(I, h) : s();
}
i(h, "attributes");
function I(e) {
  return e == "keyword" ? (a = "string", o()) : e == "string" ? o(w) : s();
}
i(I, "attvalue");
function w(e) {
  return e == "string" ? o(w) : s();
}
i(w, "attvaluemaybe");
const q = {
  name: "tiki",
  startState: /* @__PURE__ */ i(function() {
    return { tokenize: c, cc: [], indented: 0, startOfLine: !0, pluginName: null, context: null };
  }, "startState"),
  token: /* @__PURE__ */ i(function(e, n) {
    if (e.sol() && (n.startOfLine = !0, n.indented = e.indentation()), e.eatSpace()) return null;
    a = g = d = null;
    var t = n.tokenize(e, n);
    if ((t || g) && t != "comment")
      for (u = n; ; ) {
        var r = n.cc.pop() || P;
        if (r(g || t)) break;
      }
    return n.startOfLine = !1, a || t;
  }, "token"),
  indent: /* @__PURE__ */ i(function(e, n, t) {
    var r = e.context;
    if (r && r.noIndent) return 0;
    for (r && /^{\//.test(n) && (r = r.prev); r && !r.startOfLine; )
      r = r.prev;
    return r ? r.indent + t.unit : 0;
  }, "indent")
};
export {
  q as tiki
};
