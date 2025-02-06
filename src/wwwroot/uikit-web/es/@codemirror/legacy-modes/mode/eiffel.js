﻿var c = Object.defineProperty;
var a = (e, r) => c(e, "name", { value: r, configurable: !0 });
function o(e) {
  for (var r = {}, n = 0, t = e.length; n < t; ++n) r[e[n]] = !0;
  return r;
}
a(o, "wordObj");
var f = o([
  "note",
  "across",
  "when",
  "variant",
  "until",
  "unique",
  "undefine",
  "then",
  "strip",
  "select",
  "retry",
  "rescue",
  "require",
  "rename",
  "reference",
  "redefine",
  "prefix",
  "once",
  "old",
  "obsolete",
  "loop",
  "local",
  "like",
  "is",
  "inspect",
  "infix",
  "include",
  "if",
  "frozen",
  "from",
  "external",
  "export",
  "ensure",
  "end",
  "elseif",
  "else",
  "do",
  "creation",
  "create",
  "check",
  "alias",
  "agent",
  "separate",
  "invariant",
  "inherit",
  "indexing",
  "feature",
  "expanded",
  "deferred",
  "class",
  "Void",
  "True",
  "Result",
  "Precursor",
  "False",
  "Current",
  "create",
  "attached",
  "detachable",
  "as",
  "and",
  "implies",
  "not",
  "or"
]), s = o([":=", "and then", "and", "or", "<<", ">>"]);
function p(e, r, n) {
  return n.tokenize.push(e), e(r, n);
}
a(p, "chain");
function d(e, r) {
  if (e.eatSpace()) return null;
  var n = e.next();
  return n == '"' || n == "'" ? p(b(n, "string"), e, r) : n == "-" && e.eat("-") ? (e.skipToEnd(), "comment") : n == ":" && e.eat("=") ? "operator" : /[0-9]/.test(n) ? (e.eatWhile(/[xXbBCc0-9\.]/), e.eat(/[\?\!]/), "variable") : /[a-zA-Z_0-9]/.test(n) ? (e.eatWhile(/[a-zA-Z_0-9]/), e.eat(/[\?\!]/), "variable") : /[=+\-\/*^%<>~]/.test(n) ? (e.eatWhile(/[=+\-\/*^%<>~]/), "operator") : null;
}
a(d, "tokenBase");
function b(e, r, n) {
  return function(t, l) {
    for (var i = !1, u; (u = t.next()) != null; ) {
      if (u == e && !i) {
        l.tokenize.pop();
        break;
      }
      i = !i && u == "%";
    }
    return r;
  };
}
a(b, "readQuoted");
const g = {
  name: "eiffel",
  startState: /* @__PURE__ */ a(function() {
    return { tokenize: [d] };
  }, "startState"),
  token: /* @__PURE__ */ a(function(e, r) {
    var n = r.tokenize[r.tokenize.length - 1](e, r);
    if (n == "variable") {
      var t = e.current();
      n = f.propertyIsEnumerable(e.current()) ? "keyword" : s.propertyIsEnumerable(e.current()) ? "operator" : /^[A-Z][A-Z_0-9]*$/g.test(t) ? "tag" : /^0[bB][0-1]+$/g.test(t) || /^0[cC][0-7]+$/g.test(t) || /^0[xX][a-fA-F0-9]+$/g.test(t) || /^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(t) || /^[0-9]+$/g.test(t) ? "number" : "variable";
    }
    return n;
  }, "token"),
  languageData: {
    commentTokens: { line: "--" }
  }
};
export {
  g as eiffel
};
