var u = Object.defineProperty;
var l = (e, i) => u(e, "name", { value: i, configurable: !0 });
const t = {
  name: "properties",
  token: /* @__PURE__ */ l(function(e, i) {
    var o = e.sol() || i.afterSection, f = e.eol();
    if (i.afterSection = !1, o && (i.nextMultiline ? (i.inMultiline = !0, i.nextMultiline = !1) : i.position = "def"), f && !i.nextMultiline && (i.inMultiline = !1, i.position = "def"), o)
      for (; e.eatSpace(); )
        ;
    var n = e.next();
    return o && (n === "#" || n === "!" || n === ";") ? (i.position = "comment", e.skipToEnd(), "comment") : o && n === "[" ? (i.afterSection = !0, e.skipTo("]"), e.eat("]"), "header") : n === "=" || n === ":" ? (i.position = "quote", null) : (n === "\\" && i.position === "quote" && e.eol() && (i.nextMultiline = !0), i.position);
  }, "token"),
  startState: /* @__PURE__ */ l(function() {
    return {
      position: "def",
      // Current position, "def", "quote" or "comment"
      nextMultiline: !1,
      // Is the next line multiline value
      inMultiline: !1,
      // Is the current line a multiline value
      afterSection: !1
      // Did we just open a section
    };
  }, "startState")
};
export {
  t as properties
};
