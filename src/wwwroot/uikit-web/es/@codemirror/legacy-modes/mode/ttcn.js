﻿var v = Object.defineProperty;
var s = (e, t) => v(e, "name", { value: t, configurable: !0 });
function o(e) {
  for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r) t[n[r]] = !0;
  return t;
}
s(o, "words");
const i = {
  name: "ttcn",
  keywords: o("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),
  builtin: o("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),
  types: o("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),
  timerOps: o("read running start stop timeout"),
  portOps: o("call catch check clear getcall getreply halt raise receive reply send trigger"),
  configOps: o("create connect disconnect done kill killed map unmap"),
  verdictOps: o("getverdict setverdict"),
  sutOps: o("action"),
  functionOps: o("apply derefers refers"),
  verdictConsts: o("error fail inconc none pass"),
  booleanConsts: o("true false"),
  otherConsts: o("null NULL omit"),
  visibilityModifiers: o("private public friend"),
  templateMatch: o("complement ifpresent subset superset permutation"),
  multiLineStrings: !0
};
var b = [];
function f(e) {
  if (e) for (var t in e) e.hasOwnProperty(t) && b.push(t);
}
s(f, "add");
f(i.keywords);
f(i.builtin);
f(i.timerOps);
f(i.portOps);
var g = i.keywords || {}, x = i.builtin || {}, k = i.timerOps || {}, O = i.portOps || {}, w = i.configOps || {}, E = i.verdictOps || {}, C = i.sutOps || {}, I = i.functionOps || {}, L = i.verdictConsts || {}, z = i.booleanConsts || {}, S = i.otherConsts || {}, M = i.types || {}, W = i.visibilityModifiers || {}, T = i.templateMatch || {}, N = i.multiLineStrings, P = i.indentStatements !== !1, m = /[+\-*&@=<>!\/]/, l;
function $(e, t) {
  var n = e.next();
  if (n == '"' || n == "'")
    return t.tokenize = B(n), t.tokenize(e, t);
  if (/[\[\]{}\(\),;\\:\?\.]/.test(n))
    return l = n, "punctuation";
  if (n == "#")
    return e.skipToEnd(), "atom";
  if (n == "%")
    return e.eatWhile(/\b/), "atom";
  if (/\d/.test(n))
    return e.eatWhile(/[\w\.]/), "number";
  if (n == "/") {
    if (e.eat("*"))
      return t.tokenize = h, h(e, t);
    if (e.eat("/"))
      return e.skipToEnd(), "comment";
  }
  if (m.test(n))
    return n == "@" && (e.match("try") || e.match("catch") || e.match("lazy")) ? "keyword" : (e.eatWhile(m), "operator");
  e.eatWhile(/[\w\$_\xa1-\uffff]/);
  var r = e.current();
  return g.propertyIsEnumerable(r) ? "keyword" : x.propertyIsEnumerable(r) ? "builtin" : k.propertyIsEnumerable(r) || w.propertyIsEnumerable(r) || E.propertyIsEnumerable(r) || O.propertyIsEnumerable(r) || C.propertyIsEnumerable(r) || I.propertyIsEnumerable(r) ? "def" : L.propertyIsEnumerable(r) || z.propertyIsEnumerable(r) || S.propertyIsEnumerable(r) ? "string" : M.propertyIsEnumerable(r) ? "typeName.standard" : W.propertyIsEnumerable(r) ? "modifier" : T.propertyIsEnumerable(r) ? "atom" : "variable";
}
s($, "tokenBase");
function B(e) {
  return function(t, n) {
    for (var r = !1, c, d = !1; (c = t.next()) != null; ) {
      if (c == e && !r) {
        var u = t.peek();
        u && (u = u.toLowerCase(), (u == "b" || u == "h" || u == "o") && t.next()), d = !0;
        break;
      }
      r = !r && c == "\\";
    }
    return (d || !(r || N)) && (n.tokenize = null), "string";
  };
}
s(B, "tokenString");
function h(e, t) {
  for (var n = !1, r; r = e.next(); ) {
    if (r == "/" && n) {
      t.tokenize = null;
      break;
    }
    n = r == "*";
  }
  return "comment";
}
s(h, "tokenComment");
function y(e, t, n, r, c) {
  this.indented = e, this.column = t, this.type = n, this.align = r, this.prev = c;
}
s(y, "Context");
function p(e, t, n) {
  var r = e.indented;
  return e.context && e.context.type == "statement" && (r = e.context.indented), e.context = new y(r, t, n, null, e.context);
}
s(p, "pushContext");
function a(e) {
  var t = e.context.type;
  return (t == ")" || t == "]" || t == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
s(a, "popContext");
const U = {
  name: "ttcn",
  startState: /* @__PURE__ */ s(function() {
    return {
      tokenize: null,
      context: new y(0, 0, "top", !1),
      indented: 0,
      startOfLine: !0
    };
  }, "startState"),
  token: /* @__PURE__ */ s(function(e, t) {
    var n = t.context;
    if (e.sol() && (n.align == null && (n.align = !1), t.indented = e.indentation(), t.startOfLine = !0), e.eatSpace()) return null;
    l = null;
    var r = (t.tokenize || $)(e, t);
    if (r == "comment") return r;
    if (n.align == null && (n.align = !0), (l == ";" || l == ":" || l == ",") && n.type == "statement")
      a(t);
    else if (l == "{") p(t, e.column(), "}");
    else if (l == "[") p(t, e.column(), "]");
    else if (l == "(") p(t, e.column(), ")");
    else if (l == "}") {
      for (; n.type == "statement"; ) n = a(t);
      for (n.type == "}" && (n = a(t)); n.type == "statement"; ) n = a(t);
    } else l == n.type ? a(t) : P && ((n.type == "}" || n.type == "top") && l != ";" || n.type == "statement" && l == "newstatement") && p(t, e.column(), "statement");
    return t.startOfLine = !1, r;
  }, "token"),
  languageData: {
    indentOnInput: /^\s*[{}]$/,
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    autocomplete: b
  }
};
export {
  U as ttcn
};
