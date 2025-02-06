﻿var v = Object.defineProperty;
var l = (e, n) => v(e, "name", { value: n, configurable: !0 });
function f(e) {
  for (var n = {}, t = e.split(" "), i = 0; i < t.length; ++i) n[t[i]] = !0;
  return n;
}
l(f, "words");
var d = "body catch class do else enum for foreach foreach_reverse if in interface mixin out scope struct switch try union unittest version while with";
const u = {
  keywords: f("abstract alias align asm assert auto break case cast cdouble cent cfloat const continue debug default delegate delete deprecated export extern final finally function goto immutable import inout invariant is lazy macro module new nothrow override package pragma private protected public pure ref return shared short static super synchronized template this throw typedef typeid typeof volatile __FILE__ __LINE__ __gshared __traits __vector __parameters " + d),
  blockKeywords: f(d),
  builtin: f("bool byte char creal dchar double float idouble ifloat int ireal long real short ubyte ucent uint ulong ushort wchar wstring void size_t sizediff_t"),
  atoms: f("exit failure success true false null"),
  hooks: {
    "@": /* @__PURE__ */ l(function(e, n) {
      return e.eatWhile(/[\w\$_]/), "meta";
    }, "@")
  }
};
var x = u.statementIndentUnit, g = u.keywords, _ = u.builtin, p = u.blockKeywords, z = u.atoms, h = u.hooks, E = u.multiLineStrings, m = /[+\-*&%=<>!?|\/]/, o;
function y(e, n) {
  var t = e.next();
  if (h[t]) {
    var i = h[t](e, n);
    if (i !== !1) return i;
  }
  if (t == '"' || t == "'" || t == "`")
    return n.tokenize = I(t), n.tokenize(e, n);
  if (/[\[\]{}\(\),;\:\.]/.test(t))
    return o = t, null;
  if (/\d/.test(t))
    return e.eatWhile(/[\w\.]/), "number";
  if (t == "/") {
    if (e.eat("+"))
      return n.tokenize = b, b(e, n);
    if (e.eat("*"))
      return n.tokenize = k, k(e, n);
    if (e.eat("/"))
      return e.skipToEnd(), "comment";
  }
  if (m.test(t))
    return e.eatWhile(m), "operator";
  e.eatWhile(/[\w\$_\xa1-\uffff]/);
  var r = e.current();
  return g.propertyIsEnumerable(r) ? (p.propertyIsEnumerable(r) && (o = "newstatement"), "keyword") : _.propertyIsEnumerable(r) ? (p.propertyIsEnumerable(r) && (o = "newstatement"), "builtin") : z.propertyIsEnumerable(r) ? "atom" : "variable";
}
l(y, "tokenBase");
function I(e) {
  return function(n, t) {
    for (var i = !1, r, a = !1; (r = n.next()) != null; ) {
      if (r == e && !i) {
        a = !0;
        break;
      }
      i = !i && r == "\\";
    }
    return (a || !(i || E)) && (t.tokenize = null), "string";
  };
}
l(I, "tokenString");
function k(e, n) {
  for (var t = !1, i; i = e.next(); ) {
    if (i == "/" && t) {
      n.tokenize = null;
      break;
    }
    t = i == "*";
  }
  return "comment";
}
l(k, "tokenComment");
function b(e, n) {
  for (var t = !1, i; i = e.next(); ) {
    if (i == "/" && t) {
      n.tokenize = null;
      break;
    }
    t = i == "+";
  }
  return "comment";
}
l(b, "tokenNestedComment");
function w(e, n, t, i, r) {
  this.indented = e, this.column = n, this.type = t, this.align = i, this.prev = r;
}
l(w, "Context");
function s(e, n, t) {
  var i = e.indented;
  return e.context && e.context.type == "statement" && (i = e.context.indented), e.context = new w(i, n, t, null, e.context);
}
l(s, "pushContext");
function c(e) {
  var n = e.context.type;
  return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
l(c, "popContext");
const L = {
  name: "d",
  startState: /* @__PURE__ */ l(function(e) {
    return {
      tokenize: null,
      context: new w(-e, 0, "top", !1),
      indented: 0,
      startOfLine: !0
    };
  }, "startState"),
  token: /* @__PURE__ */ l(function(e, n) {
    var t = n.context;
    if (e.sol() && (t.align == null && (t.align = !1), n.indented = e.indentation(), n.startOfLine = !0), e.eatSpace()) return null;
    o = null;
    var i = (n.tokenize || y)(e, n);
    if (i == "comment" || i == "meta") return i;
    if (t.align == null && (t.align = !0), (o == ";" || o == ":" || o == ",") && t.type == "statement") c(n);
    else if (o == "{") s(n, e.column(), "}");
    else if (o == "[") s(n, e.column(), "]");
    else if (o == "(") s(n, e.column(), ")");
    else if (o == "}") {
      for (; t.type == "statement"; ) t = c(n);
      for (t.type == "}" && (t = c(n)); t.type == "statement"; ) t = c(n);
    } else o == t.type ? c(n) : ((t.type == "}" || t.type == "top") && o != ";" || t.type == "statement" && o == "newstatement") && s(n, e.column(), "statement");
    return n.startOfLine = !1, i;
  }, "token"),
  indent: /* @__PURE__ */ l(function(e, n, t) {
    if (e.tokenize != y && e.tokenize != null) return null;
    var i = e.context, r = n && n.charAt(0);
    i.type == "statement" && r == "}" && (i = i.prev);
    var a = r == i.type;
    return i.type == "statement" ? i.indented + (r == "{" ? 0 : x || t.unit) : i.align ? i.column + (a ? 0 : 1) : i.indented + (a ? 0 : t.unit);
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*[{}]$/,
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } }
  }
};
export {
  L as d
};
