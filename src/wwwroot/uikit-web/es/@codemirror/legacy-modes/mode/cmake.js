﻿var f = Object.defineProperty;
var r = (n, e) => f(n, "name", { value: e, configurable: !0 });
var a = /({)?[a-zA-Z0-9_]+(})?/;
function c(n, e) {
  for (var i, u, t = !1; !n.eol() && (i = n.next()) != e.pending; ) {
    if (i === "$" && u != "\\" && e.pending == '"') {
      t = !0;
      break;
    }
    u = i;
  }
  return t && n.backUp(1), i == e.pending ? e.continueString = !1 : e.continueString = !0, "string";
}
r(c, "tokenString");
function l(n, e) {
  var i = n.next();
  return i === "$" ? n.match(a) ? "variableName.special" : "variable" : e.continueString ? (n.backUp(1), c(n, e)) : n.match(/(\s+)?\w+\(/) || n.match(/(\s+)?\w+\ \(/) ? (n.backUp(1), "def") : i == "#" ? (n.skipToEnd(), "comment") : i == "'" || i == '"' ? (e.pending = i, c(n, e)) : i == "(" || i == ")" ? "bracket" : i.match(/[0-9]/) ? "number" : (n.eatWhile(/[\w-]/), null);
}
r(l, "tokenize");
const p = {
  name: "cmake",
  startState: /* @__PURE__ */ r(function() {
    var n = {};
    return n.inDefinition = !1, n.inInclude = !1, n.continueString = !1, n.pending = !1, n;
  }, "startState"),
  token: /* @__PURE__ */ r(function(n, e) {
    return n.eatSpace() ? null : l(n, e);
  }, "token")
};
export {
  p as cmake
};
