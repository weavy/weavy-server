﻿var g = Object.defineProperty;
var r = (e, n) => g(e, "name", { value: n, configurable: !0 });
function d(e) {
  for (var n = {}, t = e.split(" "), i = 0; i < t.length; ++i) n[t[i]] = !0;
  return n;
}
r(d, "words");
var x = d(
  "abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"
), z = d("catch class def do else enum finally for if interface switch trait try while"), m = d("return break continue"), E = d("null true false this"), o;
function s(e, n) {
  var t = e.next();
  if (t == '"' || t == "'")
    return v(t, e, n);
  if (/[\[\]{}\(\),;\:\.]/.test(t))
    return o = t, null;
  if (/\d/.test(t))
    return e.eatWhile(/[\w\.]/), e.eat(/eE/) && (e.eat(/\+\-/), e.eatWhile(/\d/)), "number";
  if (t == "/") {
    if (e.eat("*"))
      return n.tokenize.push(w), w(e, n);
    if (e.eat("/"))
      return e.skipToEnd(), "comment";
    if (k(n.lastToken, !1))
      return v(t, e, n);
  }
  if (t == "-" && e.eat(">"))
    return o = "->", null;
  if (/[+\-*&%=<>!?|\/~]/.test(t))
    return e.eatWhile(/[+\-*&%=<>|~]/), "operator";
  if (e.eatWhile(/[\w\$_]/), t == "@")
    return e.eatWhile(/[\w\$_\.]/), "meta";
  if (n.lastToken == ".") return "property";
  if (e.eat(":"))
    return o = "proplabel", "property";
  var i = e.current();
  return E.propertyIsEnumerable(i) ? "atom" : x.propertyIsEnumerable(i) ? (z.propertyIsEnumerable(i) ? o = "newstatement" : m.propertyIsEnumerable(i) && (o = "standalone"), "keyword") : "variable";
}
r(s, "tokenBase");
s.isBase = !0;
function v(e, n, t) {
  var i = !1;
  if (e != "/" && n.eat(e))
    if (n.eat(e)) i = !0;
    else return "string";
  function l(u, h) {
    for (var c = !1, p, y = !i; (p = u.next()) != null; ) {
      if (p == e && !c) {
        if (!i)
          break;
        if (u.match(e + e)) {
          y = !0;
          break;
        }
      }
      if (e == '"' && p == "$" && !c) {
        if (u.eat("{"))
          return h.tokenize.push(T()), "string";
        if (u.match(/^\w/, !1))
          return h.tokenize.push(B), "string";
      }
      c = !c && p == "\\";
    }
    return y && h.tokenize.pop(), "string";
  }
  return r(l, "t"), t.tokenize.push(l), l(n, t);
}
r(v, "startString");
function T() {
  var e = 1;
  function n(t, i) {
    if (t.peek() == "}") {
      if (e--, e == 0)
        return i.tokenize.pop(), i.tokenize[i.tokenize.length - 1](t, i);
    } else t.peek() == "{" && e++;
    return s(t, i);
  }
  return r(n, "t"), n.isBase = !0, n;
}
r(T, "tokenBaseUntilBrace");
function B(e, n) {
  var t = e.match(/^(\.|[\w\$_]+)/);
  return t ? t[0] == "." ? null : "variable" : (n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](e, n));
}
r(B, "tokenVariableDeref");
function w(e, n) {
  for (var t = !1, i; i = e.next(); ) {
    if (i == "/" && t) {
      n.tokenize.pop();
      break;
    }
    t = i == "*";
  }
  return "comment";
}
r(w, "tokenComment");
function k(e, n) {
  return !e || e == "operator" || e == "->" || /[\.\[\{\(,;:]/.test(e) || e == "newstatement" || e == "keyword" || e == "proplabel" || e == "standalone" && !n;
}
r(k, "expectExpression");
function b(e, n, t, i, l) {
  this.indented = e, this.column = n, this.type = t, this.align = i, this.prev = l;
}
r(b, "Context");
function a(e, n, t) {
  return e.context = new b(e.indented, n, t, null, e.context);
}
r(a, "pushContext");
function f(e) {
  var n = e.context.type;
  return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
r(f, "popContext");
const I = {
  name: "groovy",
  startState: /* @__PURE__ */ r(function(e) {
    return {
      tokenize: [s],
      context: new b(-e, 0, "top", !1),
      indented: 0,
      startOfLine: !0,
      lastToken: null
    };
  }, "startState"),
  token: /* @__PURE__ */ r(function(e, n) {
    var t = n.context;
    if (e.sol() && (t.align == null && (t.align = !1), n.indented = e.indentation(), n.startOfLine = !0, t.type == "statement" && !k(n.lastToken, !0) && (f(n), t = n.context)), e.eatSpace()) return null;
    o = null;
    var i = n.tokenize[n.tokenize.length - 1](e, n);
    if (i == "comment") return i;
    if (t.align == null && (t.align = !0), (o == ";" || o == ":") && t.type == "statement") f(n);
    else if (o == "->" && t.type == "statement" && t.prev.type == "}")
      f(n), n.context.align = !1;
    else if (o == "{") a(n, e.column(), "}");
    else if (o == "[") a(n, e.column(), "]");
    else if (o == "(") a(n, e.column(), ")");
    else if (o == "}") {
      for (; t.type == "statement"; ) t = f(n);
      for (t.type == "}" && (t = f(n)); t.type == "statement"; ) t = f(n);
    } else o == t.type ? f(n) : (t.type == "}" || t.type == "top" || t.type == "statement" && o == "newstatement") && a(n, e.column(), "statement");
    return n.startOfLine = !1, n.lastToken = o || i, i;
  }, "token"),
  indent: /* @__PURE__ */ r(function(e, n, t) {
    if (!e.tokenize[e.tokenize.length - 1].isBase) return null;
    var i = n && n.charAt(0), l = e.context;
    l.type == "statement" && !k(e.lastToken, !0) && (l = l.prev);
    var u = i == l.type;
    return l.type == "statement" ? l.indented + (i == "{" ? 0 : t.unit) : l.align ? l.column + (u ? 0 : 1) : l.indented + (u ? 0 : t.unit);
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*[{}]$/,
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "'''", '"""'] }
  }
};
export {
  I as groovy
};
