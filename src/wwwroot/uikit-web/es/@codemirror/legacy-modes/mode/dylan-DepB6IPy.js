var v = Object.defineProperty;
var a = (e, i) => v(e, "name", { value: i, configurable: !0 });
function y(e, i) {
  for (var n = 0; n < e.length; n++) i(e[n], n);
}
a(y, "forEach");
function w(e, i) {
  for (var n = 0; n < e.length; n++) if (i(e[n], n)) return !0;
  return !1;
}
a(w, "some");
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
var c = "[-_a-zA-Z?!*@<>$%]+", D = new RegExp("^" + c), f = {
  // Symbols with special syntax
  symbolKeyword: c + ":",
  symbolClass: "<" + c + ">",
  symbolGlobal: "\\*" + c + "\\*",
  symbolConstant: "\\$" + c
}, m = {
  symbolKeyword: "atom",
  symbolClass: "tag",
  symbolGlobal: "variableName.standard",
  symbolConstant: "variableName.constant"
};
for (var s in f)
  f.hasOwnProperty(s) && (f[s] = new RegExp("^" + f[s]));
f.keyword = [/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];
var u = {};
u.keyword = "keyword";
u.definition = "def";
u.simpleDefinition = "def";
u.signalingCalls = "builtin";
var k = {}, x = {};
y([
  "keyword",
  "definition",
  "simpleDefinition",
  "signalingCalls"
], function(e) {
  y(t[e], function(i) {
    k[i] = e, x[i] = u[e];
  });
});
function d(e, i, n) {
  return i.tokenize = n, n(e, i);
}
a(d, "chain");
function b(e, i) {
  var n = e.peek();
  if (n == "'" || n == '"')
    return e.next(), d(e, i, h(n, "string"));
  if (n == "/") {
    if (e.next(), e.eat("*"))
      return d(e, i, g);
    if (e.eat("/"))
      return e.skipToEnd(), "comment";
    e.backUp(1);
  } else if (/[+\-\d\.]/.test(n)) {
    if (e.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i) || e.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i) || e.match(/^[+-]?\d+/))
      return "number";
  } else {
    if (n == "#")
      return e.next(), n = e.peek(), n == '"' ? (e.next(), d(e, i, h('"', "string"))) : n == "b" ? (e.next(), e.eatWhile(/[01]/), "number") : n == "x" ? (e.next(), e.eatWhile(/[\da-f]/i), "number") : n == "o" ? (e.next(), e.eatWhile(/[0-7]/), "number") : n == "#" ? (e.next(), "punctuation") : n == "[" || n == "(" ? (e.next(), "bracket") : e.match(/f|t|all-keys|include|key|next|rest/i) ? "atom" : (e.eatWhile(/[-a-zA-Z]/), "error");
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
  for (var l in f)
    if (f.hasOwnProperty(l)) {
      var o = f[l];
      if (o instanceof Array && w(o, function(r) {
        return e.match(r);
      }) || e.match(o))
        return m[l];
    }
  return /[+\-*\/^=<>&|]/.test(n) ? (e.next(), "operator") : e.match("define") ? "def" : (e.eatWhile(/[\w\-]/), k.hasOwnProperty(e.current()) ? x[e.current()] : e.current().match(D) ? "variable" : (e.next(), "variableName.standard"));
}
a(b, "tokenBase");
function g(e, i) {
  for (var n = !1, l = !1, o = 0, r; r = e.next(); ) {
    if (r == "/" && n)
      if (o > 0)
        o--;
      else {
        i.tokenize = b;
        break;
      }
    else r == "*" && l && o++;
    n = r == "*", l = r == "/";
  }
  return "comment";
}
a(g, "tokenComment");
function h(e, i) {
  return function(n, l) {
    for (var o = !1, r, p = !1; (r = n.next()) != null; ) {
      if (r == e && !o) {
        p = !0;
        break;
      }
      o = !o && r == "\\";
    }
    return (p || !o) && (l.tokenize = b), i;
  };
}
a(h, "tokenString");
const z = {
  name: "dylan",
  startState: /* @__PURE__ */ a(function() {
    return {
      tokenize: b,
      currentIndent: 0
    };
  }, "startState"),
  token: /* @__PURE__ */ a(function(e, i) {
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
