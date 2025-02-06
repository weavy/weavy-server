﻿var u = Object.defineProperty;
var n = (e, r) => u(e, "name", { value: r, configurable: !0 });
function o(e) {
  var r = e.match(/^\s*\S/);
  return e.skipToEnd(), r ? "error" : null;
}
n(o, "errorIfNotEmpty");
const l = {
  name: "asciiarmor",
  token: /* @__PURE__ */ n(function(e, r) {
    var t;
    if (r.state == "top")
      return e.sol() && (t = e.match(/^-----BEGIN (.*)?-----\s*$/)) ? (r.state = "headers", r.type = t[1], "tag") : o(e);
    if (r.state == "headers") {
      if (e.sol() && e.match(/^\w+:/))
        return r.state = "header", "atom";
      var i = o(e);
      return i && (r.state = "body"), i;
    } else {
      if (r.state == "header")
        return e.skipToEnd(), r.state = "headers", "string";
      if (r.state == "body")
        return e.sol() && (t = e.match(/^-----END (.*)?-----\s*$/)) ? t[1] != r.type ? "error" : (r.state = "end", "tag") : e.eatWhile(/[A-Za-z0-9+\/=]/) ? null : (e.next(), "error");
      if (r.state == "end")
        return o(e);
    }
  }, "token"),
  blankLine: /* @__PURE__ */ n(function(e) {
    e.state == "headers" && (e.state = "body");
  }, "blankLine"),
  startState: /* @__PURE__ */ n(function() {
    return { state: "top", type: null };
  }, "startState")
};
export {
  l as asciiArmor
};
