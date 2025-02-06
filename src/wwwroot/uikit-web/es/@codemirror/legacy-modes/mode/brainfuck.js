﻿var r = Object.defineProperty;
var f = (i, e) => r(i, "name", { value: e, configurable: !0 });
var o = "><+-.,[]".split("");
const l = {
  name: "brainfuck",
  startState: /* @__PURE__ */ f(function() {
    return {
      commentLine: !1,
      left: 0,
      right: 0,
      commentLoop: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ f(function(i, e) {
    if (i.eatSpace()) return null;
    i.sol() && (e.commentLine = !1);
    var n = i.next().toString();
    if (o.indexOf(n) !== -1) {
      if (e.commentLine === !0)
        return i.eol() && (e.commentLine = !1), "comment";
      if (n === "]" || n === "[")
        return n === "[" ? e.left++ : e.right++, "bracket";
      if (n === "+" || n === "-")
        return "keyword";
      if (n === "<" || n === ">")
        return "atom";
      if (n === "." || n === ",")
        return "def";
    } else
      return e.commentLine = !0, i.eol() && (e.commentLine = !1), "comment";
    i.eol() && (e.commentLine = !1);
  }, "token")
};
export {
  l as brainfuck
};
