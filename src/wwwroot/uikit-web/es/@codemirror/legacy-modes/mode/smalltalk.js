﻿var x = Object.defineProperty;
var l = (e, n) => x(e, "name", { value: n, configurable: !0 });
var u = /[+\-\/\\*~<>=@%|&?!.,:;^]/, d = /true|false|nil|self|super|thisContext/, r = /* @__PURE__ */ l(function(e, n) {
  this.next = e, this.parent = n;
}, "Context"), o = /* @__PURE__ */ l(function(e, n, t) {
  this.name = e, this.context = n, this.eos = t;
}, "Token"), h = /* @__PURE__ */ l(function() {
  this.context = new r(p, null), this.expectVariable = !0, this.indentation = 0, this.userIndentationDelta = 0;
}, "State");
h.prototype.userIndent = function(e, n) {
  this.userIndentationDelta = e > 0 ? e / n - this.indentation : 0;
};
var p = /* @__PURE__ */ l(function(e, n, t) {
  var i = new o(null, n, !1), a = e.next();
  return a === '"' ? i = s(e, new r(s, n)) : a === "'" ? i = f(e, new r(f, n)) : a === "#" ? e.peek() === "'" ? (e.next(), i = c(e, new r(c, n))) : e.eatWhile(/[^\s.{}\[\]()]/) ? i.name = "string.special" : i.name = "meta" : a === "$" ? (e.next() === "<" && (e.eatWhile(/[^\s>]/), e.next()), i.name = "string.special") : a === "|" && t.expectVariable ? i.context = new r(v, n) : /[\[\]{}()]/.test(a) ? (i.name = "bracket", i.eos = /[\[{(]/.test(a), a === "[" ? t.indentation++ : a === "]" && (t.indentation = Math.max(0, t.indentation - 1))) : u.test(a) ? (e.eatWhile(u), i.name = "operator", i.eos = a !== ";") : /\d/.test(a) ? (e.eatWhile(/[\w\d]/), i.name = "number") : /[\w_]/.test(a) ? (e.eatWhile(/[\w\d_]/), i.name = t.expectVariable ? d.test(e.current()) ? "keyword" : "variable" : null) : i.eos = t.expectVariable, i;
}, "next"), s = /* @__PURE__ */ l(function(e, n) {
  return e.eatWhile(/[^"]/), new o("comment", e.eat('"') ? n.parent : n, !0);
}, "nextComment"), f = /* @__PURE__ */ l(function(e, n) {
  return e.eatWhile(/[^']/), new o("string", e.eat("'") ? n.parent : n, !1);
}, "nextString"), c = /* @__PURE__ */ l(function(e, n) {
  return e.eatWhile(/[^']/), new o("string.special", e.eat("'") ? n.parent : n, !1);
}, "nextSymbol"), v = /* @__PURE__ */ l(function(e, n) {
  var t = new o(null, n, !1), i = e.next();
  return i === "|" ? (t.context = n.parent, t.eos = !0) : (e.eatWhile(/[^|]/), t.name = "variable"), t;
}, "nextTemporaries");
const k = {
  name: "smalltalk",
  startState: /* @__PURE__ */ l(function() {
    return new h();
  }, "startState"),
  token: /* @__PURE__ */ l(function(e, n) {
    if (n.userIndent(e.indentation(), e.indentUnit), e.eatSpace())
      return null;
    var t = n.context.next(e, n.context, n);
    return n.context = t.context, n.expectVariable = t.eos, t.name;
  }, "token"),
  blankLine: /* @__PURE__ */ l(function(e, n) {
    e.userIndent(0, n);
  }, "blankLine"),
  indent: /* @__PURE__ */ l(function(e, n, t) {
    var i = e.context.next === p && n && n.charAt(0) === "]" ? -1 : e.userIndentationDelta;
    return (e.indentation + i) * t.unit;
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*\]$/
  }
};
export {
  k as smalltalk
};
