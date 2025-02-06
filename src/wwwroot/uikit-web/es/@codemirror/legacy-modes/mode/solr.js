﻿var l = Object.defineProperty;
var i = (n, e) => l(n, "name", { value: e, configurable: !0 });
var f = /[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/, k = /[\|\!\+\-\*\?\~\^\&]/, a = /^(OR|AND|NOT|TO)$/;
function c(n) {
  return parseFloat(n).toString() === n;
}
i(c, "isNumber");
function s(n) {
  return function(e, r) {
    for (var t = !1, u; (u = e.next()) != null && !(u == n && !t); )
      t = !t && u == "\\";
    return t || (r.tokenize = o), "string";
  };
}
i(s, "tokenString");
function p(n) {
  return function(e, r) {
    return n == "|" ? e.eat(/\|/) : n == "&" && e.eat(/\&/), r.tokenize = o, "operator";
  };
}
i(p, "tokenOperator");
function z(n) {
  return function(e, r) {
    for (var t = n; (n = e.peek()) && n.match(f) != null; )
      t += e.next();
    return r.tokenize = o, a.test(t) ? "operator" : c(t) ? "number" : e.peek() == ":" ? "propertyName" : "string";
  };
}
i(z, "tokenWord");
function o(n, e) {
  var r = n.next();
  return r == '"' ? e.tokenize = s(r) : k.test(r) ? e.tokenize = p(r) : f.test(r) && (e.tokenize = z(r)), e.tokenize != o ? e.tokenize(n, e) : null;
}
i(o, "tokenBase");
const v = {
  name: "solr",
  startState: /* @__PURE__ */ i(function() {
    return {
      tokenize: o
    };
  }, "startState"),
  token: /* @__PURE__ */ i(function(n, e) {
    return n.eatSpace() ? null : e.tokenize(n, e);
  }, "token")
};
export {
  v as solr
};
