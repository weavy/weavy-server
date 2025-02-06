﻿var u = Object.defineProperty;
var r = (e, n) => u(e, "name", { value: n, configurable: !0 });
function o(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b");
}
r(o, "wordRegexp");
var a = new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]"), l = new RegExp("^[\\(\\[\\{\\},:=;\\.]"), c = new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))"), p = new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))"), d = new RegExp("^((>>=)|(<<=))"), s = new RegExp("^[\\]\\)]"), h = new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*"), m = o([
  "error",
  "eval",
  "function",
  "abs",
  "acos",
  "atan",
  "asin",
  "cos",
  "cosh",
  "exp",
  "log",
  "prod",
  "sum",
  "log10",
  "max",
  "min",
  "sign",
  "sin",
  "sinh",
  "sqrt",
  "tan",
  "reshape",
  "break",
  "zeros",
  "default",
  "margin",
  "round",
  "ones",
  "rand",
  "syn",
  "ceil",
  "floor",
  "size",
  "clear",
  "zeros",
  "eye",
  "mean",
  "std",
  "cov",
  "det",
  "eig",
  "inv",
  "norm",
  "rank",
  "trace",
  "expm",
  "logm",
  "sqrtm",
  "linspace",
  "plot",
  "title",
  "xlabel",
  "ylabel",
  "legend",
  "text",
  "grid",
  "meshgrid",
  "mesh",
  "num2str",
  "fft",
  "ifft",
  "arrayfun",
  "cellfun",
  "input",
  "fliplr",
  "flipud",
  "ismember"
]), g = o([
  "return",
  "case",
  "switch",
  "else",
  "elseif",
  "end",
  "endif",
  "endfunction",
  "if",
  "otherwise",
  "do",
  "for",
  "while",
  "try",
  "catch",
  "classdef",
  "properties",
  "events",
  "methods",
  "global",
  "persistent",
  "endfor",
  "endwhile",
  "printf",
  "sprintf",
  "disp",
  "until",
  "continue",
  "pkg"
]);
function f(e, n) {
  return !e.sol() && e.peek() === "'" ? (e.next(), n.tokenize = t, "operator") : (n.tokenize = t, t(e, n));
}
r(f, "tokenTranspose");
function k(e, n) {
  return e.match(/^.*%}/) ? (n.tokenize = t, "comment") : (e.skipToEnd(), "comment");
}
r(k, "tokenComment");
function t(e, n) {
  if (e.eatSpace()) return null;
  if (e.match("%{"))
    return n.tokenize = k, e.skipToEnd(), "comment";
  if (e.match(/^[%#]/))
    return e.skipToEnd(), "comment";
  if (e.match(/^[0-9\.+-]/, !1)) {
    if (e.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/))
      return e.tokenize = t, "number";
    if (e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/) || e.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/))
      return "number";
  }
  if (e.match(o(["nan", "NaN", "inf", "Inf"])))
    return "number";
  var i = e.match(/^"(?:[^"]|"")*("|$)/) || e.match(/^'(?:[^']|'')*('|$)/);
  return i ? i[1] ? "string" : "error" : e.match(g) ? "keyword" : e.match(m) ? "builtin" : e.match(h) ? "variable" : e.match(a) || e.match(c) ? "operator" : e.match(l) || e.match(p) || e.match(d) ? null : e.match(s) ? (n.tokenize = f, null) : (e.next(), "error");
}
r(t, "tokenBase");
const v = {
  name: "octave",
  startState: /* @__PURE__ */ r(function() {
    return {
      tokenize: t
    };
  }, "startState"),
  token: /* @__PURE__ */ r(function(e, n) {
    var i = n.tokenize(e, n);
    return (i === "number" || i === "variable") && (n.tokenize = f), i;
  }, "token"),
  languageData: {
    commentTokens: { line: "%" }
  }
};
export {
  v as octave
};
