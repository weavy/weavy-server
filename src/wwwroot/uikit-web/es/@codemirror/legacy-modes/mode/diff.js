﻿var d = Object.defineProperty;
var o = (n, e) => d(n, "name", { value: e, configurable: !0 });
var i = {
  "+": "inserted",
  "-": "deleted",
  "@": "meta"
};
const t = {
  name: "diff",
  token: /* @__PURE__ */ o(function(n) {
    var e = n.string.search(/[\t ]+?$/);
    if (!n.sol() || e === 0)
      return n.skipToEnd(), ("error " + (i[n.string.charAt(0)] || "")).replace(/ $/, "");
    var r = i[n.peek()] || n.skipToEnd();
    return e === -1 ? n.skipToEnd() : n.pos = e, r;
  }, "token")
};
export {
  t as diff
};
