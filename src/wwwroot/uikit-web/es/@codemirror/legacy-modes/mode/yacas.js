﻿var a = Object.defineProperty;
var u = (e, n) => a(e, "name", { value: n, configurable: !0 });
function f(e) {
  for (var n = {}, r = e.split(" "), o = 0; o < r.length; ++o) n[r[o]] = !0;
  return n;
}
u(f, "words");
var p = f("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"), d = "(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)", l = "(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)", k = new RegExp(d), s = new RegExp(l), v = new RegExp(l + "?_" + l), h = new RegExp(l + "\\s*\\(");
function c(e, n) {
  var r;
  if (r = e.next(), r === '"')
    return n.tokenize = b, n.tokenize(e, n);
  if (r === "/") {
    if (e.eat("*"))
      return n.tokenize = g, n.tokenize(e, n);
    if (e.eat("/"))
      return e.skipToEnd(), "comment";
  }
  e.backUp(1);
  var o = e.match(/^(\w+)\s*\(/, !1);
  o !== null && p.hasOwnProperty(o[1]) && n.scopes.push("bodied");
  var i = t(n);
  if (i === "bodied" && r === "[" && n.scopes.pop(), (r === "[" || r === "{" || r === "(") && n.scopes.push(r), i = t(n), (i === "[" && r === "]" || i === "{" && r === "}" || i === "(" && r === ")") && n.scopes.pop(), r === ";")
    for (; i === "bodied"; )
      n.scopes.pop(), i = t(n);
  return e.match(/\d+ *#/, !0, !1) ? "qualifier" : e.match(k, !0, !1) ? "number" : e.match(v, !0, !1) ? "variableName.special" : e.match(/(?:\[|\]|{|}|\(|\))/, !0, !1) ? "bracket" : e.match(h, !0, !1) ? (e.backUp(1), "variableName.function") : e.match(s, !0, !1) ? "variable" : e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/, !0, !1) ? "operator" : "error";
}
u(c, "tokenBase");
function b(e, n) {
  for (var r, o = !1, i = !1; (r = e.next()) != null; ) {
    if (r === '"' && !i) {
      o = !0;
      break;
    }
    i = !i && r === "\\";
  }
  return o && !i && (n.tokenize = c), "string";
}
u(b, "tokenString");
function g(e, n) {
  for (var r, o; (o = e.next()) != null; ) {
    if (r === "*" && o === "/") {
      n.tokenize = c;
      break;
    }
    r = o;
  }
  return "comment";
}
u(g, "tokenComment");
function t(e) {
  var n = null;
  return e.scopes.length > 0 && (n = e.scopes[e.scopes.length - 1]), n;
}
u(t, "currentScope");
const m = {
  name: "yacas",
  startState: /* @__PURE__ */ u(function() {
    return {
      tokenize: c,
      scopes: []
    };
  }, "startState"),
  token: /* @__PURE__ */ u(function(e, n) {
    return e.eatSpace() ? null : n.tokenize(e, n);
  }, "token"),
  indent: /* @__PURE__ */ u(function(e, n, r) {
    if (e.tokenize !== c && e.tokenize !== null)
      return null;
    var o = 0;
    return (n === "]" || n === "];" || n === "}" || n === "};" || n === ");") && (o = -1), (e.scopes.length + o) * r.unit;
  }, "indent"),
  languageData: {
    electricInput: /[{}\[\]()\;]/,
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } }
  }
};
export {
  m as yacas
};
