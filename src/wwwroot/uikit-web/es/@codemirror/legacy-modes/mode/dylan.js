﻿var v = Object.defineProperty;
var l = (e, i) => v(e, "name", { value: i, configurable: !0 });
function h(e, i) {
  for (var n = 0; n < e.length; n++) i(e[n], n);
}
l(h, "forEach");
function w(e, i) {
  for (var n = 0; n < e.length; n++) if (i(e[n], n)) return !0;
  return !1;
}
l(w, "some");
var t = {
  // Words that introduce unnamed definitions like "define interface"
  unnamedDefinition: ["interface"],
  // Words that introduce simple named definitions like "define library"
  namedDefinition: [
    "module",
    "library",
    "macro",
    "C-struct",
    "C-union",
    "C-function",
    "C-callable-wrapper"
  ],
  // Words that introduce type definitions like "define class".
  // These are also parameterized like "define method" and are
  // appended to otherParameterizedDefinitionWords
  typeParameterizedDefinition: ["class", "C-subtype", "C-mapped-subtype"],
  // Words that introduce trickier definitions like "define method".
  // These require special definitions to be added to startExpressions
  otherParameterizedDefinition: [
    "method",
    "function",
    "C-variable",
    "C-address"
  ],
  // Words that introduce module constant definitions.
  // These must also be simple definitions and are
  // appended to otherSimpleDefinitionWords
  constantSimpleDefinition: ["constant"],
  // Words that introduce module variable definitions.
  // These must also be simple definitions and are
  // appended to otherSimpleDefinitionWords
  variableSimpleDefinition: ["variable"],
  // Other words that introduce simple definitions
  // (without implicit bodies).
  otherSimpleDefinition: [
    "generic",
    "domain",
    "C-pointer-type",
    "table"
  ],
  // Words that begin statements with implicit bodies.
  statement: [
    "if",
    "block",
    "begin",
    "method",
    "case",
    "for",
    "select",
    "when",
    "unless",
    "until",
    "while",
    "iterate",
    "profiling",
    "dynamic-bind"
  ],
  // Patterns that act as separators in compound statements.
  // This may include any general pattern that must be indented
  // specially.
  separator: [
    "finally",
    "exception",
    "cleanup",
    "else",
    "elseif",
    "afterwards"
  ],
  // Keywords that do not require special indentation handling,
  // but which should be highlighted
  other: [
    "above",
    "below",
    "by",
    "from",
    "handler",
    "in",
    "instance",
    "let",
    "local",
    "otherwise",
    "slot",
    "subclass",
    "then",
    "to",
    "keyed-by",
    "virtual"
  ],
  // Condition signaling function calls
  signalingCalls: [
    "signal",
    "error",
    "cerror",
    "break",
    "check-type",
    "abort"
  ]
};
t.otherDefinition = t.unnamedDefinition.concat(t.namedDefinition).concat(t.otherParameterizedDefinition);
t.definition = t.typeParameterizedDefinition.concat(t.otherDefinition);
t.parameterizedDefinition = t.typeParameterizedDefinition.concat(t.otherParameterizedDefinition);
t.simpleDefinition = t.constantSimpleDefinition.concat(t.variableSimpleDefinition).concat(t.otherSimpleDefinition);
t.keyword = t.statement.concat(t.separator).concat(t.other);
var u = "[-_a-zA-Z?!*@<>$%]+", D = new RegExp("^" + u), f = {
  // Symbols with special syntax
  symbolKeyword: u + ":",
  symbolClass: "<" + u + ">",
  symbolGlobal: "\\*" + u + "\\*",
  symbolConstant: "\\$" + u
}, g = {
  symbolKeyword: "atom",
  symbolClass: "tag",
  symbolGlobal: "variableName.standard",
  symbolConstant: "variableName.constant"
};
for (var d in f)
  f.hasOwnProperty(d) && (f[d] = new RegExp("^" + f[d]));
f.keyword = [/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];
var c = {};
c.keyword = "keyword";
c.definition = "def";
c.simpleDefinition = "def";
c.signalingCalls = "builtin";
var k = {}, x = {};
h([
  "keyword",
  "definition",
  "simpleDefinition",
  "signalingCalls"
], function(e) {
  h(t[e], function(i) {
    k[i] = e, x[i] = c[e];
  });
});
function s(e, i, n) {
  return i.tokenize = n, n(e, i);
}
l(s, "chain");
function b(e, i) {
  var n = e.peek();
  if (n == "'" || n == '"')
    return e.next(), s(e, i, y(n, "string"));
  if (n == "/") {
    if (e.next(), e.eat("*"))
      return s(e, i, m);
    if (e.eat("/"))
      return e.skipToEnd(), "comment";
    e.backUp(1);
  } else if (/[+\-\d\.]/.test(n)) {
    if (e.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i) || e.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i) || e.match(/^[+-]?\d+/))
      return "number";
  } else {
    if (n == "#")
      return e.next(), n = e.peek(), n == '"' ? (e.next(), s(e, i, y('"', "string"))) : n == "b" ? (e.next(), e.eatWhile(/[01]/), "number") : n == "x" ? (e.next(), e.eatWhile(/[\da-f]/i), "number") : n == "o" ? (e.next(), e.eatWhile(/[0-7]/), "number") : n == "#" ? (e.next(), "punctuation") : n == "[" || n == "(" ? (e.next(), "bracket") : e.match(/f|t|all-keys|include|key|next|rest/i) ? "atom" : (e.eatWhile(/[-a-zA-Z]/), "error");
    if (n == "~")
      return e.next(), n = e.peek(), n == "=" ? (e.next(), n = e.peek(), n == "=" && e.next(), "operator") : "operator";
    if (n == ":") {
      if (e.next(), n = e.peek(), n == "=")
        return e.next(), "operator";
      if (n == ":")
        return e.next(), "punctuation";
    } else {
      if ("[](){}".indexOf(n) != -1)
        return e.next(), "bracket";
      if (".,".indexOf(n) != -1)
        return e.next(), "punctuation";
      if (e.match("end"))
        return "keyword";
    }
  }
  for (var a in f)
    if (f.hasOwnProperty(a)) {
      var r = f[a];
      if (r instanceof Array && w(r, function(o) {
        return e.match(o);
      }) || e.match(r))
        return g[a];
    }
  return /[+\-*\/^=<>&|]/.test(n) ? (e.next(), "operator") : e.match("define") ? "def" : (e.eatWhile(/[\w\-]/), k.hasOwnProperty(e.current()) ? x[e.current()] : e.current().match(D) ? "variable" : (e.next(), "variableName.standard"));
}
l(b, "tokenBase");
function m(e, i) {
  for (var n = !1, a = !1, r = 0, o; o = e.next(); ) {
    if (o == "/" && n)
      if (r > 0)
        r--;
      else {
        i.tokenize = b;
        break;
      }
    else o == "*" && a && r++;
    n = o == "*", a = o == "/";
  }
  return "comment";
}
l(m, "tokenComment");
function y(e, i) {
  return function(n, a) {
    for (var r = !1, o, p = !1; (o = n.next()) != null; ) {
      if (o == e && !r) {
        p = !0;
        break;
      }
      r = !r && o == "\\";
    }
    return (p || !r) && (a.tokenize = b), i;
  };
}
l(y, "tokenString");
const z = {
  name: "dylan",
  startState: /* @__PURE__ */ l(function() {
    return {
      tokenize: b,
      currentIndent: 0
    };
  }, "startState"),
  token: /* @__PURE__ */ l(function(e, i) {
    if (e.eatSpace())
      return null;
    var n = i.tokenize(e, i);
    return n;
  }, "token"),
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" } }
  }
};
export {
  z as dylan
};
