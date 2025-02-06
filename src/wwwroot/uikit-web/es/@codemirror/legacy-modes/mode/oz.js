﻿var s = Object.defineProperty;
var i = (e, n) => s(e, "name", { value: n, configurable: !0 });
function u(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b");
}
i(u, "wordRegexp");
var p = /[\^@!\|<>#~\.\*\-\+\\/,=]/, z = /(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/, m = /(:::)|(\.\.\.)|(=<:)|(>=:)/, l = [
  "in",
  "then",
  "else",
  "of",
  "elseof",
  "elsecase",
  "elseif",
  "catch",
  "finally",
  "with",
  "require",
  "prepare",
  "import",
  "export",
  "define",
  "do"
], d = ["end"], v = u(["true", "false", "nil", "unit"]), g = u([
  "andthen",
  "at",
  "attr",
  "declare",
  "feat",
  "from",
  "lex",
  "mod",
  "div",
  "mode",
  "orelse",
  "parser",
  "prod",
  "prop",
  "scanner",
  "self",
  "syn",
  "token"
]), w = u([
  "local",
  "proc",
  "fun",
  "case",
  "class",
  "if",
  "cond",
  "or",
  "dis",
  "choice",
  "not",
  "thread",
  "try",
  "raise",
  "lock",
  "for",
  "suchthat",
  "meth",
  "functor"
]), h = u(l), k = u(d);
function o(e, n) {
  if (e.eatSpace())
    return null;
  if (e.match(/[{}]/))
    return "bracket";
  if (e.match("[]"))
    return "keyword";
  if (e.match(m) || e.match(z))
    return "operator";
  if (e.match(v))
    return "atom";
  var t = e.match(w);
  if (t)
    return n.doInCurrentLine ? n.doInCurrentLine = !1 : n.currentIndent++, t[0] == "proc" || t[0] == "fun" ? n.tokenize = b : t[0] == "class" ? n.tokenize = x : t[0] == "meth" && (n.tokenize = y), "keyword";
  if (e.match(h) || e.match(g))
    return "keyword";
  if (e.match(k))
    return n.currentIndent--, "keyword";
  var r = e.next();
  if (r == '"' || r == "'")
    return n.tokenize = I(r), n.tokenize(e, n);
  if (/[~\d]/.test(r)) {
    if (r == "~")
      if (/^[0-9]/.test(e.peek())) {
        if (e.next() == "0" && e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))
          return "number";
      } else return null;
    return r == "0" && e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/) ? "number" : null;
  }
  return r == "%" ? (e.skipToEnd(), "comment") : r == "/" && e.eat("*") ? (n.tokenize = f, f(e, n)) : p.test(r) ? "operator" : (e.eatWhile(/\w/), "variable");
}
i(o, "tokenBase");
function x(e, n) {
  return e.eatSpace() ? null : (e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/), n.tokenize = o, "type");
}
i(x, "tokenClass");
function y(e, n) {
  return e.eatSpace() ? null : (e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/), n.tokenize = o, "def");
}
i(y, "tokenMeth");
function b(e, n) {
  return e.eatSpace() ? null : !n.hasPassedFirstStage && e.eat("{") ? (n.hasPassedFirstStage = !0, "bracket") : n.hasPassedFirstStage ? (e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/), n.hasPassedFirstStage = !1, n.tokenize = o, "def") : (n.tokenize = o, null);
}
i(b, "tokenFunProc");
function f(e, n) {
  for (var t = !1, r; r = e.next(); ) {
    if (r == "/" && t) {
      n.tokenize = o;
      break;
    }
    t = r == "*";
  }
  return "comment";
}
i(f, "tokenComment");
function I(e) {
  return function(n, t) {
    for (var r = !1, c, a = !1; (c = n.next()) != null; ) {
      if (c == e && !r) {
        a = !0;
        break;
      }
      r = !r && c == "\\";
    }
    return (a || !r) && (t.tokenize = o), "string";
  };
}
i(I, "tokenString");
function S() {
  var e = l.concat(d);
  return new RegExp("[\\[\\]]|(" + e.join("|") + ")$");
}
i(S, "buildElectricInputRegEx");
const E = {
  name: "oz",
  startState: /* @__PURE__ */ i(function() {
    return {
      tokenize: o,
      currentIndent: 0,
      doInCurrentLine: !1,
      hasPassedFirstStage: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ i(function(e, n) {
    return e.sol() && (n.doInCurrentLine = 0), n.tokenize(e, n);
  }, "token"),
  indent: /* @__PURE__ */ i(function(e, n, t) {
    var r = n.replace(/^\s+|\s+$/g, "");
    return r.match(k) || r.match(h) || r.match(/(\[])/) ? t.unit * (e.currentIndent - 1) : e.currentIndent < 0 ? 0 : e.currentIndent * t.unit;
  }, "indent"),
  languageData: {
    indentOnInut: S(),
    commentTokens: { line: "%", block: { open: "/*", close: "*/" } }
  }
};
export {
  E as oz
};
