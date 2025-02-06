﻿var f = Object.defineProperty;
var c = (n, t) => f(n, "name", { value: t, configurable: !0 });
var u = {};
function o(n) {
  if (n.eatSpace()) return null;
  var t = n.sol(), i = n.next();
  if (i === "\\")
    return n.match("fB") || n.match("fR") || n.match("fI") || n.match("u") || n.match("d") || n.match("%") || n.match("&") ? "string" : n.match("m[") ? (n.skipTo("]"), n.next(), "string") : n.match("s+") || n.match("s-") ? (n.eatWhile(/[\d-]/), "string") : ((n.match("(") || n.match("*(")) && n.eatWhile(/[\w-]/), "string");
  if (t && (i === "." || i === "'") && n.eat("\\") && n.eat('"'))
    return n.skipToEnd(), "comment";
  if (t && i === ".") {
    if (n.match("B ") || n.match("I ") || n.match("R "))
      return "attribute";
    if (n.match("TH ") || n.match("SH ") || n.match("SS ") || n.match("HP "))
      return n.skipToEnd(), "quote";
    if (n.match(/[A-Z]/) && n.match(/[A-Z]/) || n.match(/[a-z]/) && n.match(/[a-z]/))
      return "attribute";
  }
  n.eatWhile(/[\w-]/);
  var h = n.current();
  return u.hasOwnProperty(h) ? u[h] : null;
}
c(o, "tokenBase");
function r(n, t) {
  return (t.tokens[0] || o)(n, t);
}
c(r, "tokenize");
const k = {
  name: "troff",
  startState: /* @__PURE__ */ c(function() {
    return { tokens: [] };
  }, "startState"),
  token: /* @__PURE__ */ c(function(n, t) {
    return r(n, t);
  }, "token")
};
export {
  k as troff
};
