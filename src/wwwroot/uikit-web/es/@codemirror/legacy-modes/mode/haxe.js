﻿var M = Object.defineProperty;
var i = (e, r) => M(e, "name", { value: r, configurable: !0 });
function l(e) {
  return { type: e, style: "keyword" };
}
i(l, "kw");
var B = l("keyword a"), z = l("keyword b"), w = l("keyword c"), Q = l("operator"), E = { type: "atom", style: "atom" }, A = { type: "attribute", style: "attribute" }, s = l("typedef"), I = {
  if: B,
  while: B,
  else: z,
  do: z,
  try: z,
  return: w,
  break: w,
  continue: w,
  new: w,
  throw: w,
  var: l("var"),
  inline: A,
  static: A,
  using: l("import"),
  public: A,
  private: A,
  cast: l("cast"),
  import: l("import"),
  macro: l("macro"),
  function: l("function"),
  catch: l("catch"),
  untyped: l("untyped"),
  callback: l("cb"),
  for: l("for"),
  switch: l("switch"),
  case: l("case"),
  default: l("default"),
  in: Q,
  never: l("property_access"),
  trace: l("trace"),
  class: s,
  abstract: s,
  enum: s,
  interface: s,
  typedef: s,
  extends: s,
  implements: s,
  dynamic: s,
  true: E,
  false: E,
  null: E
}, O = /[+\-*&%=<>!?|]/;
function H(e, r, n) {
  return r.tokenize = n, n(e, r);
}
i(H, "chain");
function N(e, r) {
  for (var n = !1, u; (u = e.next()) != null; ) {
    if (u == r && !n)
      return !0;
    n = !n && u == "\\";
  }
}
i(N, "toUnescaped");
var s, $;
function h(e, r, n) {
  return s = e, $ = n, r;
}
i(h, "ret");
function V(e, r) {
  var n = e.next();
  if (n == '"' || n == "'")
    return H(e, r, R(n));
  if (/[\[\]{}\(\),;\:\.]/.test(n))
    return h(n);
  if (n == "0" && e.eat(/x/i))
    return e.eatWhile(/[\da-f]/i), h("number", "number");
  if (/\d/.test(n) || n == "-" && e.eat(/\d/))
    return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/), h("number", "number");
  if (r.reAllowed && n == "~" && e.eat(/\//))
    return N(e, "/"), e.eatWhile(/[gimsu]/), h("regexp", "string.special");
  if (n == "/")
    return e.eat("*") ? H(e, r, X) : e.eat("/") ? (e.skipToEnd(), h("comment", "comment")) : (e.eatWhile(O), h("operator", null, e.current()));
  if (n == "#")
    return e.skipToEnd(), h("conditional", "meta");
  if (n == "@")
    return e.eat(/:/), e.eatWhile(/[\w_]/), h("metadata", "meta");
  if (O.test(n))
    return e.eatWhile(O), h("operator", null, e.current());
  var u;
  if (/[A-Z]/.test(n))
    return e.eatWhile(/[\w_<>]/), u = e.current(), h("type", "type", u);
  e.eatWhile(/[\w_]/);
  var u = e.current(), a = I.propertyIsEnumerable(u) && I[u];
  return a && r.kwAllowed ? h(a.type, a.style, u) : h("variable", "variable", u);
}
i(V, "haxeTokenBase");
function R(e) {
  return function(r, n) {
    return N(r, e) && (n.tokenize = V), h("string", "string");
  };
}
i(R, "haxeTokenString");
function X(e, r) {
  for (var n = !1, u; u = e.next(); ) {
    if (u == "/" && n) {
      r.tokenize = V;
      break;
    }
    n = u == "*";
  }
  return h("comment", "comment");
}
i(X, "haxeTokenComment");
var j = { atom: !0, number: !0, variable: !0, string: !0, regexp: !0 };
function F(e, r, n, u, a, d) {
  this.indented = e, this.column = r, this.type = n, this.prev = a, this.info = d, u != null && (this.align = u);
}
i(F, "HaxeLexical");
function Y(e, r) {
  for (var n = e.localVars; n; n = n.next)
    if (n.name == r) return !0;
}
i(Y, "inScope");
function ee(e, r, n, u, a) {
  var d = e.cc;
  for (f.state = e, f.stream = a, f.marked = null, f.cc = d, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ; ) {
    var g = d.length ? d.pop() : b;
    if (g(n, u)) {
      for (; d.length && d[d.length - 1].lex; )
        d.pop()();
      return f.marked ? f.marked : n == "variable" && Y(e, u) ? "variableName.local" : n == "variable" && re(e, u) ? "variableName.special" : r;
    }
  }
}
i(ee, "parseHaxe");
function re(e, r) {
  if (/[a-z]/.test(r.charAt(0)))
    return !1;
  for (var n = e.importedtypes.length, u = 0; u < n; u++)
    if (e.importedtypes[u] == r) return !0;
}
i(re, "imported");
function U(e) {
  for (var r = f.state, n = r.importedtypes; n; n = n.next)
    if (n.name == e) return;
  r.importedtypes = { name: e, next: r.importedtypes };
}
i(U, "registerimport");
var f = { state: null, column: null, marked: null, cc: null };
function m() {
  for (var e = arguments.length - 1; e >= 0; e--) f.cc.push(arguments[e]);
}
i(m, "pass");
function t() {
  return m.apply(null, arguments), !0;
}
i(t, "cont");
function L(e, r) {
  for (var n = r; n; n = n.next)
    if (n.name == e) return !0;
  return !1;
}
i(L, "inList");
function T(e) {
  var r = f.state;
  if (r.context) {
    if (f.marked = "def", L(e, r.localVars)) return;
    r.localVars = { name: e, next: r.localVars };
  } else if (r.globalVars) {
    if (L(e, r.globalVars)) return;
    r.globalVars = { name: e, next: r.globalVars };
  }
}
i(T, "register");
var ne = { name: "this", next: null };
function Z() {
  f.state.context || (f.state.localVars = ne), f.state.context = { prev: f.state.context, vars: f.state.localVars };
}
i(Z, "pushcontext");
function S() {
  f.state.localVars = f.state.context.vars, f.state.context = f.state.context.prev;
}
i(S, "popcontext");
S.lex = !0;
function c(e, r) {
  var n = /* @__PURE__ */ i(function() {
    var u = f.state;
    u.lexical = new F(u.indented, f.stream.column(), e, null, u.lexical, r);
  }, "result");
  return n.lex = !0, n;
}
i(c, "pushlex");
function o() {
  var e = f.state;
  e.lexical.prev && (e.lexical.type == ")" && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev);
}
i(o, "poplex");
o.lex = !0;
function p(e) {
  function r(n) {
    return n == e ? t() : e == ";" ? m() : t(r);
  }
  return i(r, "f"), r;
}
i(p, "expect");
function b(e) {
  return e == "@" ? t(_) : e == "var" ? t(c("vardef"), P, p(";"), o) : e == "keyword a" ? t(c("form"), v, b, o) : e == "keyword b" ? t(c("form"), b, o) : e == "{" ? t(c("}"), Z, C, o, S) : e == ";" ? t() : e == "attribute" ? t(q) : e == "function" ? t(y) : e == "for" ? t(
    c("form"),
    p("("),
    c(")"),
    oe,
    p(")"),
    o,
    b,
    o
  ) : e == "variable" ? t(c("stat"), ue) : e == "switch" ? t(
    c("form"),
    v,
    c("}", "switch"),
    p("{"),
    C,
    o,
    o
  ) : e == "case" ? t(v, p(":")) : e == "default" ? t(p(":")) : e == "catch" ? t(
    c("form"),
    Z,
    p("("),
    K,
    p(")"),
    b,
    o,
    S
  ) : e == "import" ? t(G, p(";")) : e == "typedef" ? t(ie) : m(c("stat"), v, p(";"), o);
}
i(b, "statement");
function v(e) {
  return j.hasOwnProperty(e) || e == "type" ? t(x) : e == "function" ? t(y) : e == "keyword c" ? t(D) : e == "(" ? t(c(")"), D, p(")"), o, x) : e == "operator" ? t(v) : e == "[" ? t(c("]"), k(D, "]"), o, x) : e == "{" ? t(c("}"), k(fe, "}"), o, x) : t();
}
i(v, "expression");
function D(e) {
  return e.match(/[;\}\)\],]/) ? m() : m(v);
}
i(D, "maybeexpression");
function x(e, r) {
  if (e == "operator" && /\+\+|--/.test(r)) return t(x);
  if (e == "operator" || e == ":") return t(v);
  if (e != ";") {
    if (e == "(") return t(c(")"), k(v, ")"), o, x);
    if (e == ".") return t(ae, x);
    if (e == "[") return t(c("]"), v, p("]"), o, x);
  }
}
i(x, "maybeoperator");
function q(e) {
  if (e == "attribute") return t(q);
  if (e == "function") return t(y);
  if (e == "var") return t(P);
}
i(q, "maybeattribute");
function _(e) {
  if (e == ":" || e == "variable") return t(_);
  if (e == "(") return t(c(")"), k(te, ")"), o, b);
}
i(_, "metadef");
function te(e) {
  if (e == "variable") return t();
}
i(te, "metaargs");
function G(e, r) {
  if (e == "variable" && /[A-Z]/.test(r.charAt(0)))
    return U(r), t();
  if (e == "variable" || e == "property" || e == "." || r == "*") return t(G);
}
i(G, "importdef");
function ie(e, r) {
  if (e == "variable" && /[A-Z]/.test(r.charAt(0)))
    return U(r), t();
  if (e == "type" && /[A-Z]/.test(r.charAt(0)))
    return t();
}
i(ie, "typedef");
function ue(e) {
  return e == ":" ? t(o, b) : m(x, p(";"), o);
}
i(ue, "maybelabel");
function ae(e) {
  if (e == "variable")
    return f.marked = "property", t();
}
i(ae, "property");
function fe(e) {
  if (e == "variable" && (f.marked = "property"), j.hasOwnProperty(e)) return t(p(":"), v);
}
i(fe, "objprop");
function k(e, r) {
  function n(u) {
    return u == "," ? t(e, n) : u == r ? t() : t(p(r));
  }
  return i(n, "proceed"), function(u) {
    return u == r ? t() : m(e, n);
  };
}
i(k, "commasep");
function C(e) {
  return e == "}" ? t() : m(b, C);
}
i(C, "block");
function P(e, r) {
  return e == "variable" ? (T(r), t(W, J)) : t();
}
i(P, "vardef1");
function J(e, r) {
  if (r == "=") return t(v, J);
  if (e == ",") return t(P);
}
i(J, "vardef2");
function oe(e, r) {
  return e == "variable" ? (T(r), t(le, v)) : m();
}
i(oe, "forspec1");
function le(e, r) {
  if (r == "in") return t();
}
i(le, "forin");
function y(e, r) {
  if (e == "variable" || e == "type")
    return T(r), t(y);
  if (r == "new") return t(y);
  if (e == "(") return t(c(")"), Z, k(K, ")"), o, W, b, S);
}
i(y, "functiondef");
function W(e) {
  if (e == ":") return t(ce);
}
i(W, "typeuse");
function ce(e) {
  if (e == "type" || e == "variable") return t();
  if (e == "{") return t(c("}"), k(se, "}"), o);
}
i(ce, "typestring");
function se(e) {
  if (e == "variable") return t(W);
}
i(se, "typeprop");
function K(e, r) {
  if (e == "variable")
    return T(r), t(W);
}
i(K, "funarg");
const pe = {
  name: "haxe",
  startState: /* @__PURE__ */ i(function(e) {
    var r = ["Int", "Float", "String", "Void", "Std", "Bool", "Dynamic", "Array"], n = {
      tokenize: V,
      reAllowed: !0,
      kwAllowed: !0,
      cc: [],
      lexical: new F(-e, 0, "block", !1),
      importedtypes: r,
      context: null,
      indented: 0
    };
    return n;
  }, "startState"),
  token: /* @__PURE__ */ i(function(e, r) {
    if (e.sol() && (r.lexical.hasOwnProperty("align") || (r.lexical.align = !1), r.indented = e.indentation()), e.eatSpace()) return null;
    var n = r.tokenize(e, r);
    return s == "comment" ? n : (r.reAllowed = !!(s == "operator" || s == "keyword c" || s.match(/^[\[{}\(,;:]$/)), r.kwAllowed = s != ".", ee(r, n, s, $, e));
  }, "token"),
  indent: /* @__PURE__ */ i(function(e, r, n) {
    if (e.tokenize != V) return 0;
    var u = r && r.charAt(0), a = e.lexical;
    a.type == "stat" && u == "}" && (a = a.prev);
    var d = a.type, g = u == d;
    return d == "vardef" ? a.indented + 4 : d == "form" && u == "{" ? a.indented : d == "stat" || d == "form" ? a.indented + n.unit : a.info == "switch" && !g ? a.indented + (/^(?:case|default)\b/.test(r) ? n.unit : 2 * n.unit) : a.align ? a.column + (g ? 0 : 1) : a.indented + (g ? 0 : n.unit);
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*[{}]$/,
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } }
  }
}, he = {
  name: "hxml",
  startState: /* @__PURE__ */ i(function() {
    return {
      define: !1,
      inString: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ i(function(e, r) {
    var a = e.peek(), n = e.sol();
    if (a == "#")
      return e.skipToEnd(), "comment";
    if (n && a == "-") {
      var u = "variable-2";
      return e.eat(/-/), e.peek() == "-" && (e.eat(/-/), u = "keyword a"), e.peek() == "D" && (e.eat(/[D]/), u = "keyword c", r.define = !0), e.eatWhile(/[A-Z]/i), u;
    }
    var a = e.peek();
    return r.inString == !1 && a == "'" && (r.inString = !0, e.next()), r.inString == !0 ? (e.skipTo("'") || e.skipToEnd(), e.peek() == "'" && (e.next(), r.inString = !1), "string") : (e.next(), null);
  }, "token"),
  languageData: {
    commentTokens: { line: "#" }
  }
};
export {
  pe as haxe,
  he as hxml
};
