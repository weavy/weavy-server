﻿var k = Object.defineProperty;
var o = (e, n) => k(e, "name", { value: n, configurable: !0 });
function u(e, n, i) {
  return typeof i > "u" && (i = ""), typeof n > "u" && (n = "\\b"), new RegExp("^" + i + "((" + e.join(")|(") + "))" + n);
}
o(u, "wordRegexp");
var F = "\\\\[0-7]{1,3}", g = "\\\\x[A-Fa-f0-9]{1,2}", b = `\\\\[abefnrtv0%?'"\\\\]`, y = "([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])", p = [
  "[<>]:",
  "[<>=]=",
  "<<=?",
  ">>>?=?",
  "=>",
  "--?>",
  "<--[->]?",
  "\\/\\/",
  "\\.{2,3}",
  "[\\.\\\\%*+\\-<>!\\/^|&]=?",
  "\\?",
  "\\$",
  "~",
  ":"
], m = u([
  "[<>]:",
  "[<>=]=",
  "[!=]==",
  "<<=?",
  ">>>?=?",
  "=>?",
  "--?>",
  "<--[->]?",
  "\\/\\/",
  "[\\\\%*+\\-<>!\\/^|&\\u00F7\\u22BB]=?",
  "\\?",
  "\\$",
  "~",
  ":",
  "\\u00D7",
  "\\u2208",
  "\\u2209",
  "\\u220B",
  "\\u220C",
  "\\u2218",
  "\\u221A",
  "\\u221B",
  "\\u2229",
  "\\u222A",
  "\\u2260",
  "\\u2264",
  "\\u2265",
  "\\u2286",
  "\\u2288",
  "\\u228A",
  "\\u22C5",
  "\\b(in|isa)\\b(?!.?\\()"
], ""), x = /^[;,()[\]{}]/, z = /^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/, A = u([F, g, b, y], "'"), E = [
  "begin",
  "function",
  "type",
  "struct",
  "immutable",
  "let",
  "macro",
  "for",
  "while",
  "quote",
  "if",
  "else",
  "elseif",
  "try",
  "finally",
  "catch",
  "do"
], C = ["end", "else", "elseif", "catch", "finally"], h = [
  "if",
  "else",
  "elseif",
  "while",
  "for",
  "begin",
  "let",
  "end",
  "do",
  "try",
  "catch",
  "finally",
  "return",
  "break",
  "continue",
  "global",
  "local",
  "const",
  "export",
  "import",
  "importall",
  "using",
  "function",
  "where",
  "macro",
  "module",
  "baremodule",
  "struct",
  "type",
  "mutable",
  "immutable",
  "quote",
  "typealias",
  "abstract",
  "primitive",
  "bitstype"
], s = ["true", "false", "nothing", "NaN", "Inf"], _ = u(E), w = u(C), D = u(h), T = u(s), P = /^@[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/, B = /^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/, G = /^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/, S = u(p, "", "@"), $ = u(p, "", ":");
function t(e) {
  return e.nestedArrays > 0;
}
o(t, "inArray");
function I(e) {
  return e.nestedGenerators > 0;
}
o(I, "inGenerator");
function a(e, n) {
  return typeof n > "u" && (n = 0), e.scopes.length <= n ? null : e.scopes[e.scopes.length - (n + 1)];
}
o(a, "currentScope");
function l(e, n) {
  if (e.match("#=", !1))
    return n.tokenize = Z, n.tokenize(e, n);
  var i = n.leavingExpr;
  if (e.sol() && (i = !1), n.leavingExpr = !1, i && e.match(/^'+/))
    return "operator";
  if (e.match(/\.{4,}/))
    return "error";
  if (e.match(/\.{1,3}/))
    return "operator";
  if (e.eatSpace())
    return null;
  var r = e.peek();
  if (r === "#")
    return e.skipToEnd(), "comment";
  if (r === "[" && (n.scopes.push("["), n.nestedArrays++), r === "(" && (n.scopes.push("("), n.nestedGenerators++), t(n) && r === "]") {
    for (; n.scopes.length && a(n) !== "["; )
      n.scopes.pop();
    n.scopes.pop(), n.nestedArrays--, n.leavingExpr = !0;
  }
  if (I(n) && r === ")") {
    for (; n.scopes.length && a(n) !== "("; )
      n.scopes.pop();
    n.scopes.pop(), n.nestedGenerators--, n.leavingExpr = !0;
  }
  if (t(n)) {
    if (n.lastToken == "end" && e.match(":"))
      return "operator";
    if (e.match("end"))
      return "number";
  }
  var c;
  if ((c = e.match(_, !1)) && n.scopes.push(c[0]), e.match(w, !1) && n.scopes.pop(), e.match(/^::(?![:\$])/))
    return n.tokenize = O, n.tokenize(e, n);
  if (!i && (e.match(B) || e.match($)))
    return "builtin";
  if (e.match(m))
    return "operator";
  if (e.match(/^\.?\d/, !1)) {
    var d = RegExp(/^im\b/), f = !1;
    if (e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i) && (f = !0), e.match(/^0x[0-9a-f_]+/i) && (f = !0), e.match(/^0b[01_]+/i) && (f = !0), e.match(/^0o[0-7_]+/i) && (f = !0), e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i) && (f = !0), e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i) && (f = !0), f)
      return e.match(d), n.leavingExpr = !0, "number";
  }
  if (e.match("'"))
    return n.tokenize = j, n.tokenize(e, n);
  if (e.match(G))
    return n.tokenize = R(e.current()), n.tokenize(e, n);
  if (e.match(P) || e.match(S))
    return "meta";
  if (e.match(x))
    return null;
  if (e.match(D))
    return "keyword";
  if (e.match(T))
    return "builtin";
  var v = n.isDefinition || n.lastToken == "function" || n.lastToken == "macro" || n.lastToken == "type" || n.lastToken == "struct" || n.lastToken == "immutable";
  return e.match(z) ? v ? e.peek() === "." ? (n.isDefinition = !0, "variable") : (n.isDefinition = !1, "def") : (n.leavingExpr = !0, "variable") : (e.next(), "error");
}
o(l, "tokenBase");
function O(e, n) {
  return e.match(/.*?(?=[,;{}()=\s]|$)/), e.match("{") ? n.nestedParameters++ : e.match("}") && n.nestedParameters > 0 && n.nestedParameters--, n.nestedParameters > 0 ? e.match(/.*?(?={|})/) || e.next() : n.nestedParameters == 0 && (n.tokenize = l), "builtin";
}
o(O, "tokenAnnotation");
function Z(e, n) {
  return e.match("#=") && n.nestedComments++, e.match(/.*?(?=(#=|=#))/) || e.skipToEnd(), e.match("=#") && (n.nestedComments--, n.nestedComments == 0 && (n.tokenize = l)), "comment";
}
o(Z, "tokenComment");
function j(e, n) {
  var i = !1, r;
  if (e.match(A))
    i = !0;
  else if (r = e.match(/\\u([a-f0-9]{1,4})(?=')/i)) {
    var c = parseInt(r[1], 16);
    (c <= 55295 || c >= 57344) && (i = !0, e.next());
  } else if (r = e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)) {
    var c = parseInt(r[1], 16);
    c <= 1114111 && (i = !0, e.next());
  }
  return i ? (n.leavingExpr = !0, n.tokenize = l, "string") : (e.match(/^[^']+(?=')/) || e.skipToEnd(), e.match("'") && (n.tokenize = l), "error");
}
o(j, "tokenChar");
function R(e) {
  e.substr(-3) === '"""' ? e = '"""' : e.substr(-1) === '"' && (e = '"');
  function n(i, r) {
    if (i.eat("\\"))
      i.next();
    else {
      if (i.match(e))
        return r.tokenize = l, r.leavingExpr = !0, "string";
      i.eat(/[`"]/);
    }
    return i.eatWhile(/[^\\`"]/), "string";
  }
  return o(n, "tokenString"), n;
}
o(R, "tokenStringFactory");
const N = {
  name: "julia",
  startState: /* @__PURE__ */ o(function() {
    return {
      tokenize: l,
      scopes: [],
      lastToken: null,
      leavingExpr: !1,
      isDefinition: !1,
      nestedArrays: 0,
      nestedComments: 0,
      nestedGenerators: 0,
      nestedParameters: 0,
      firstParenPos: -1
    };
  }, "startState"),
  token: /* @__PURE__ */ o(function(e, n) {
    var i = n.tokenize(e, n), r = e.current();
    return r && i && (n.lastToken = r), i;
  }, "token"),
  indent: /* @__PURE__ */ o(function(e, n, i) {
    var r = 0;
    return (n === "]" || n === ")" || /^end\b/.test(n) || /^else/.test(n) || /^catch\b/.test(n) || /^elseif\b/.test(n) || /^finally/.test(n)) && (r = -1), (e.scopes.length + r) * i.unit;
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*(end|else|catch|finally)\b$/,
    commentTokens: { line: "#", block: { open: "#=", close: "=#" } },
    closeBrackets: { brackets: ["(", "[", "{", '"'] },
    autocomplete: h.concat(s)
  }
};
export {
  N as julia
};
