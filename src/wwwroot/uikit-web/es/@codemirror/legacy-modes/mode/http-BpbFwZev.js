var f = Object.defineProperty;
var e = (r, n) => f(r, "name", { value: n, configurable: !0 });
function o(r, n) {
  return r.skipToEnd(), n.cur = u, "error";
}
e(o, "failFirstLine");
function d(r, n) {
  return r.match(/^HTTP\/\d\.\d/) ? (n.cur = l, "keyword") : r.match(/^[A-Z]+/) && /[ \t]/.test(r.peek()) ? (n.cur = p, "keyword") : o(r, n);
}
e(d, "start");
function l(r, n) {
  var t = r.match(/^\d+/);
  if (!t) return o(r, n);
  n.cur = s;
  var c = Number(t[0]);
  return c >= 100 && c < 400 ? "atom" : "error";
}
e(l, "responseStatusCode");
function s(r, n) {
  return r.skipToEnd(), n.cur = u, null;
}
e(s, "responseStatusText");
function p(r, n) {
  return r.eatWhile(/\S/), n.cur = a, "string.special";
}
e(p, "requestPath");
function a(r, n) {
  return r.match(/^HTTP\/\d\.\d$/) ? (n.cur = u, "keyword") : o(r, n);
}
e(a, "requestProtocol");
function u(r) {
  return r.sol() && !r.eat(/[ \t]/) ? r.match(/^.*?:/) ? "atom" : (r.skipToEnd(), "error") : (r.skipToEnd(), "string");
}
e(u, "header");
function i(r) {
  return r.skipToEnd(), null;
}
e(i, "body");
const T = {
  name: "http",
  token: /* @__PURE__ */ e(function(r, n) {
    var t = n.cur;
    return t != u && t != i && r.eatSpace() ? null : t(r, n);
  }, "token"),
  blankLine: /* @__PURE__ */ e(function(r) {
    r.cur = i;
  }, "blankLine"),
  startState: /* @__PURE__ */ e(function() {
    return { cur: d };
  }, "startState")
};
export {
  T as http
};
