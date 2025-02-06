﻿var p = Object.defineProperty;
var u = (e, n) => p(e, "name", { value: n, configurable: !0 });
var k = {
  term: !0,
  method: !0,
  accu: !0,
  rule: !0,
  then: !0,
  is: !0,
  and: !0,
  or: !0,
  if: !0,
  default: !0
}, a = {
  var_input: !0,
  var_output: !0,
  fuzzify: !0,
  defuzzify: !0,
  function_block: !0,
  ruleblock: !0
}, i = {
  end_ruleblock: !0,
  end_defuzzify: !0,
  end_function_block: !0,
  end_fuzzify: !0,
  end_var: !0
}, v = {
  true: !0,
  false: !0,
  nan: !0,
  real: !0,
  min: !0,
  max: !0,
  cog: !0,
  cogs: !0
}, c = /[+\-*&^%:=<>!|\/]/;
function l(e, n) {
  var t = e.next();
  if (/[\d\.]/.test(t))
    return t == "." ? e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/) : t == "0" ? e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/) : e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/), "number";
  if (t == "/" || t == "(") {
    if (e.eat("*"))
      return n.tokenize = f, f(e, n);
    if (e.eat("/"))
      return e.skipToEnd(), "comment";
  }
  if (c.test(t))
    return e.eatWhile(c), "operator";
  e.eatWhile(/[\w\$_\xa1-\uffff]/);
  var r = e.current().toLowerCase();
  return k.propertyIsEnumerable(r) || a.propertyIsEnumerable(r) || i.propertyIsEnumerable(r) ? "keyword" : v.propertyIsEnumerable(r) ? "atom" : "variable";
}
u(l, "tokenBase");
function f(e, n) {
  for (var t = !1, r; r = e.next(); ) {
    if ((r == "/" || r == ")") && t) {
      n.tokenize = l;
      break;
    }
    t = r == "*";
  }
  return "comment";
}
u(f, "tokenComment");
function d(e, n, t, r, o) {
  this.indented = e, this.column = n, this.type = t, this.align = r, this.prev = o;
}
u(d, "Context");
function x(e, n, t) {
  return e.context = new d(e.indented, n, t, null, e.context);
}
u(x, "pushContext");
function b(e) {
  if (e.context.prev) {
    var n = e.context.type;
    return n == "end_block" && (e.indented = e.context.indented), e.context = e.context.prev;
  }
}
u(b, "popContext");
const m = {
  name: "fcl",
  startState: /* @__PURE__ */ u(function(e) {
    return {
      tokenize: null,
      context: new d(-e, 0, "top", !1),
      indented: 0,
      startOfLine: !0
    };
  }, "startState"),
  token: /* @__PURE__ */ u(function(e, n) {
    var t = n.context;
    if (e.sol() && (t.align == null && (t.align = !1), n.indented = e.indentation(), n.startOfLine = !0), e.eatSpace()) return null;
    var r = (n.tokenize || l)(e, n);
    if (r == "comment") return r;
    t.align == null && (t.align = !0);
    var o = e.current().toLowerCase();
    return a.propertyIsEnumerable(o) ? x(n, e.column(), "end_block") : i.propertyIsEnumerable(o) && b(n), n.startOfLine = !1, r;
  }, "token"),
  indent: /* @__PURE__ */ u(function(e, n, t) {
    if (e.tokenize != l && e.tokenize != null) return 0;
    var r = e.context, o = i.propertyIsEnumerable(n);
    return r.align ? r.column + (o ? 0 : 1) : r.indented + (o ? 0 : t.unit);
  }, "indent"),
  languageData: {
    commentTokens: { line: "//", block: { open: "(*", close: "*)" } }
  }
};
export {
  m as fcl
};
