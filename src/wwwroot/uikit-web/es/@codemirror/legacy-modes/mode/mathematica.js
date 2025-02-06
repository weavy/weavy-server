﻿var o = Object.defineProperty;
var t = (e, a) => o(e, "name", { value: a, configurable: !0 });
var c = "[a-zA-Z\\$][a-zA-Z0-9\\$]*", z = "(?:\\d+)", l = "(?:\\.\\d+|\\d+\\.\\d*|\\d+)", m = "(?:\\.\\w+|\\w+\\.\\w*|\\w+)", f = "(?:`(?:`?" + l + ")?)", A = new RegExp("(?:" + z + "(?:\\^\\^" + m + f + "?(?:\\*\\^[+-]?\\d+)?))"), Z = new RegExp("(?:" + l + f + "?(?:\\*\\^[+-]?\\d+)?)"), $ = new RegExp("(?:`?)(?:" + c + ")(?:`(?:" + c + "))*(?:`?)");
function u(e, a) {
  var n;
  return n = e.next(), n === '"' ? (a.tokenize = v, a.tokenize(e, a)) : n === "(" && e.eat("*") ? (a.commentLevel++, a.tokenize = h, a.tokenize(e, a)) : (e.backUp(1), e.match(A, !0, !1) || e.match(Z, !0, !1) ? "number" : e.match(/(?:In|Out)\[[0-9]*\]/, !0, !1) ? "atom" : e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/, !0, !1) ? "meta" : e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/, !0, !1) ? "string.special" : e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/, !0, !1) || e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, !0, !1) || e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, !0, !1) || e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, !0, !1) ? "variableName.special" : e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, !0, !1) ? "character" : e.match(/(?:\[|\]|{|}|\(|\))/, !0, !1) ? "bracket" : e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, !0, !1) ? "variableName.constant" : e.match($, !0, !1) ? "keyword" : e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/, !0, !1) ? "operator" : (e.next(), "error"));
}
t(u, "tokenBase");
function v(e, a) {
  for (var n, r = !1, i = !1; (n = e.next()) != null; ) {
    if (n === '"' && !i) {
      r = !0;
      break;
    }
    i = !i && n === "\\";
  }
  return r && !i && (a.tokenize = u), "string";
}
t(v, "tokenString");
function h(e, a) {
  for (var n, r; a.commentLevel > 0 && (r = e.next()) != null; )
    n === "(" && r === "*" && a.commentLevel++, n === "*" && r === ")" && a.commentLevel--, n = r;
  return a.commentLevel <= 0 && (a.tokenize = u), "comment";
}
t(h, "tokenComment");
const k = {
  name: "mathematica",
  startState: /* @__PURE__ */ t(function() {
    return { tokenize: u, commentLevel: 0 };
  }, "startState"),
  token: /* @__PURE__ */ t(function(e, a) {
    return e.eatSpace() ? null : a.tokenize(e, a);
  }, "token"),
  languageData: {
    commentTokens: { block: { open: "(*", close: "*)" } }
  }
};
export {
  k as mathematica
};
