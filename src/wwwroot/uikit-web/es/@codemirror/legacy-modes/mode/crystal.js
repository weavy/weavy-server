﻿var E = Object.defineProperty;
var o = (n, e) => E(n, "name", { value: e, configurable: !0 });
function a(n, e) {
  return new RegExp((e ? "" : "^") + "(?:" + n.join("|") + ")" + (e ? "$" : "\\b"));
}
o(a, "wordRegExp");
function f(n, e, r) {
  return r.tokenize.push(n), n(e, r);
}
o(f, "chain");
var z = /^(?:[-+/%|&^]|\*\*?|[<>]{2})/, _ = /^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/, x = /^(?:\[\][?=]?)/, S = /^(?:\.(?:\.{2})?|->|[?:])/, h = /^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/, k = /^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/, T = a([
  "abstract",
  "alias",
  "as",
  "asm",
  "begin",
  "break",
  "case",
  "class",
  "def",
  "do",
  "else",
  "elsif",
  "end",
  "ensure",
  "enum",
  "extend",
  "for",
  "fun",
  "if",
  "include",
  "instance_sizeof",
  "lib",
  "macro",
  "module",
  "next",
  "of",
  "out",
  "pointerof",
  "private",
  "protected",
  "rescue",
  "return",
  "require",
  "select",
  "sizeof",
  "struct",
  "super",
  "then",
  "type",
  "typeof",
  "uninitialized",
  "union",
  "unless",
  "until",
  "when",
  "while",
  "with",
  "yield",
  "__DIR__",
  "__END_LINE__",
  "__FILE__",
  "__LINE__"
]), A = a(["true", "false", "nil", "self"]), s = [
  "def",
  "fun",
  "macro",
  "class",
  "module",
  "struct",
  "lib",
  "enum",
  "union",
  "do",
  "for"
], O = a(s), K = ["if", "unless", "case", "while", "until", "begin", "then"], D = a(K), I = ["end", "else", "elsif", "rescue", "ensure"], N = a(I), b = ["\\)", "\\}", "\\]"], Z = new RegExp("^(?:" + b.join("|") + ")$"), y = {
  def: g,
  fun: g,
  macro: P,
  class: l,
  module: l,
  struct: l,
  lib: l,
  enum: l,
  union: l
}, F = { "[": "]", "{": "}", "(": ")", "<": ">" };
function w(n, e) {
  if (n.eatSpace())
    return null;
  if (e.lastToken != "\\" && n.match("{%", !1))
    return f(c("%", "%"), n, e);
  if (e.lastToken != "\\" && n.match("{{", !1))
    return f(c("{", "}"), n, e);
  if (n.peek() == "#")
    return n.skipToEnd(), "comment";
  var r;
  if (n.match(h))
    return n.eat(/[?!]/), r = n.current(), n.eat(":") ? "atom" : e.lastToken == "." ? "property" : T.test(r) ? (O.test(r) ? !(r == "fun" && e.blocks.indexOf("lib") >= 0) && !(r == "def" && e.lastToken == "abstract") && (e.blocks.push(r), e.currentIndent += 1) : (e.lastStyle == "operator" || !e.lastStyle) && D.test(r) ? (e.blocks.push(r), e.currentIndent += 1) : r == "end" && (e.blocks.pop(), e.currentIndent -= 1), y.hasOwnProperty(r) && e.tokenize.push(y[r]), "keyword") : A.test(r) ? "atom" : "variable";
  if (n.eat("@"))
    return n.peek() == "[" ? f(d("[", "]", "meta"), n, e) : (n.eat("@"), n.match(h) || n.match(k), "propertyName");
  if (n.match(k))
    return "tag";
  if (n.eat(":"))
    return n.eat('"') ? f(v('"', "atom", !1), n, e) : n.match(h) || n.match(k) || n.match(z) || n.match(_) || n.match(x) ? "atom" : (n.eat(":"), "operator");
  if (n.eat('"'))
    return f(v('"', "string", !0), n, e);
  if (n.peek() == "%") {
    var t = "string", u = !0, i;
    if (n.match("%r"))
      t = "string.special", i = n.next();
    else if (n.match("%w"))
      u = !1, i = n.next();
    else if (n.match("%q"))
      u = !1, i = n.next();
    else if (i = n.match(/^%([^\w\s=])/))
      i = i[1];
    else {
      if (n.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/))
        return "meta";
      if (n.eat("%"))
        return "operator";
    }
    return F.hasOwnProperty(i) && (i = F[i]), f(v(i, t, u), n, e);
  }
  return (r = n.match(/^<<-('?)([A-Z]\w*)\1/)) ? f(R(r[2], !r[1]), n, e) : n.eat("'") ? (n.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/), n.eat("'"), "atom") : n.eat("0") ? (n.eat("x") ? n.match(/^[0-9a-fA-F_]+/) : n.eat("o") ? n.match(/^[0-7_]+/) : n.eat("b") && n.match(/^[01_]+/), "number") : n.eat(/^\d/) ? (n.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/), "number") : n.match(z) ? (n.eat("="), "operator") : n.match(_) || n.match(S) ? "operator" : (r = n.match(/[({[]/, !1)) ? (r = r[0], f(d(r, F[r], null), n, e)) : n.eat("\\") ? (n.next(), "meta") : (n.next(), null);
}
o(w, "tokenBase");
function d(n, e, r, t) {
  return function(u, i) {
    if (!t && u.match(n))
      return i.tokenize[i.tokenize.length - 1] = d(n, e, r, !0), i.currentIndent += 1, r;
    var p = w(u, i);
    return u.current() === e && (i.tokenize.pop(), i.currentIndent -= 1, p = r), p;
  };
}
o(d, "tokenNest");
function c(n, e, r) {
  return function(t, u) {
    return !r && t.match("{" + n) ? (u.currentIndent += 1, u.tokenize[u.tokenize.length - 1] = c(n, e, !0), "meta") : t.match(e + "}") ? (u.currentIndent -= 1, u.tokenize.pop(), "meta") : w(t, u);
  };
}
o(c, "tokenMacro");
function P(n, e) {
  if (n.eatSpace())
    return null;
  var r;
  if (r = n.match(h)) {
    if (r == "def")
      return "keyword";
    n.eat(/[?!]/);
  }
  return e.tokenize.pop(), "def";
}
o(P, "tokenMacroDef");
function g(n, e) {
  return n.eatSpace() ? null : (n.match(h) ? n.eat(/[!?]/) : n.match(z) || n.match(_) || n.match(x), e.tokenize.pop(), "def");
}
o(g, "tokenFollowIdent");
function l(n, e) {
  return n.eatSpace() ? null : (n.match(k), e.tokenize.pop(), "def");
}
o(l, "tokenFollowType");
function v(n, e, r) {
  return function(t, u) {
    for (var i = !1; t.peek(); )
      if (i)
        t.next(), i = !1;
      else {
        if (t.match("{%", !1))
          return u.tokenize.push(c("%", "%")), e;
        if (t.match("{{", !1))
          return u.tokenize.push(c("{", "}")), e;
        if (r && t.match("#{", !1))
          return u.tokenize.push(d("#{", "}", "meta")), e;
        var p = t.next();
        if (p == n)
          return u.tokenize.pop(), e;
        i = r && p == "\\";
      }
    return e;
  };
}
o(v, "tokenQuote");
function R(n, e) {
  return function(r, t) {
    if (r.sol() && (r.eatSpace(), r.match(n)))
      return t.tokenize.pop(), "string";
    for (var u = !1; r.peek(); )
      if (u)
        r.next(), u = !1;
      else {
        if (r.match("{%", !1))
          return t.tokenize.push(c("%", "%")), "string";
        if (r.match("{{", !1))
          return t.tokenize.push(c("{", "}")), "string";
        if (e && r.match("#{", !1))
          return t.tokenize.push(d("#{", "}", "meta")), "string";
        u = r.next() == "\\" && e;
      }
    return "string";
  };
}
o(R, "tokenHereDoc");
const $ = {
  name: "crystal",
  startState: /* @__PURE__ */ o(function() {
    return {
      tokenize: [w],
      currentIndent: 0,
      lastToken: null,
      lastStyle: null,
      blocks: []
    };
  }, "startState"),
  token: /* @__PURE__ */ o(function(n, e) {
    var r = e.tokenize[e.tokenize.length - 1](n, e), t = n.current();
    return r && r != "comment" && (e.lastToken = t, e.lastStyle = r), r;
  }, "token"),
  indent: /* @__PURE__ */ o(function(n, e, r) {
    return e = e.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g, ""), N.test(e) || Z.test(e) ? r.unit * (n.currentIndent - 1) : r.unit * n.currentIndent;
  }, "indent"),
  languageData: {
    indentOnInput: a(b.concat(I), !0),
    commentTokens: { line: "#" }
  }
};
export {
  $ as crystal
};
