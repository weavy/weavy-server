﻿var d = Object.defineProperty;
var t = (i, n) => d(i, "name", { value: n, configurable: !0 });
import { javascript as r } from "./javascript.js";
var l = {
  "{": "}",
  "(": ")",
  "[": "]"
};
function s(i) {
  if (typeof i != "object") return i;
  let n = {};
  for (let e in i) {
    let u = i[e];
    n[e] = u instanceof Array ? u.slice() : u;
  }
  return n;
}
t(s, "defaultCopyState");
const c = class c {
  constructor(n) {
    this.indentUnit = n, this.javaScriptLine = !1, this.javaScriptLineExcludesColon = !1, this.javaScriptArguments = !1, this.javaScriptArgumentsDepth = 0, this.isInterpolating = !1, this.interpolationNesting = 0, this.jsState = r.startState(n), this.restOfLine = "", this.isIncludeFiltered = !1, this.isEach = !1, this.lastTag = "", this.isAttrs = !1, this.attrsNest = [], this.inAttributeName = !0, this.attributeIsType = !1, this.attrValue = "", this.indentOf = 1 / 0, this.indentToken = "";
  }
  copy() {
    var n = new c(this.indentUnit);
    return n.javaScriptLine = this.javaScriptLine, n.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon, n.javaScriptArguments = this.javaScriptArguments, n.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth, n.isInterpolating = this.isInterpolating, n.interpolationNesting = this.interpolationNesting, n.jsState = (r.copyState || s)(this.jsState), n.restOfLine = this.restOfLine, n.isIncludeFiltered = this.isIncludeFiltered, n.isEach = this.isEach, n.lastTag = this.lastTag, n.isAttrs = this.isAttrs, n.attrsNest = this.attrsNest.slice(), n.inAttributeName = this.inAttributeName, n.attributeIsType = this.attributeIsType, n.attrValue = this.attrValue, n.indentOf = this.indentOf, n.indentToken = this.indentToken, n;
  }
};
t(c, "State");
let f = c;
function S(i, n) {
  if (i.sol() && (n.javaScriptLine = !1, n.javaScriptLineExcludesColon = !1), n.javaScriptLine) {
    if (n.javaScriptLineExcludesColon && i.peek() === ":") {
      n.javaScriptLine = !1, n.javaScriptLineExcludesColon = !1;
      return;
    }
    var e = r.token(i, n.jsState);
    return i.eol() && (n.javaScriptLine = !1), e || !0;
  }
}
t(S, "javaScript");
function v(i, n) {
  if (n.javaScriptArguments) {
    if (n.javaScriptArgumentsDepth === 0 && i.peek() !== "(") {
      n.javaScriptArguments = !1;
      return;
    }
    if (i.peek() === "(" ? n.javaScriptArgumentsDepth++ : i.peek() === ")" && n.javaScriptArgumentsDepth--, n.javaScriptArgumentsDepth === 0) {
      n.javaScriptArguments = !1;
      return;
    }
    var e = r.token(i, n.jsState);
    return e || !0;
  }
}
t(v, "javaScriptArguments");
function g(i) {
  if (i.match(/^yield\b/))
    return "keyword";
}
t(g, "yieldStatement");
function j(i) {
  if (i.match(/^(?:doctype) *([^\n]+)?/)) return "meta";
}
t(j, "doctype");
function a(i, n) {
  if (i.match("#{"))
    return n.isInterpolating = !0, n.interpolationNesting = 0, "punctuation";
}
t(a, "interpolation");
function k(i, n) {
  if (n.isInterpolating) {
    if (i.peek() === "}") {
      if (n.interpolationNesting--, n.interpolationNesting < 0)
        return i.next(), n.isInterpolating = !1, "punctuation";
    } else i.peek() === "{" && n.interpolationNesting++;
    return r.token(i, n.jsState) || !0;
  }
}
t(k, "interpolationContinued");
function b(i, n) {
  if (i.match(/^case\b/))
    return n.javaScriptLine = !0, "keyword";
}
t(b, "caseStatement");
function A(i, n) {
  if (i.match(/^when\b/))
    return n.javaScriptLine = !0, n.javaScriptLineExcludesColon = !0, "keyword";
}
t(A, "when");
function y(i) {
  if (i.match(/^default\b/))
    return "keyword";
}
t(y, "defaultStatement");
function L(i, n) {
  if (i.match(/^extends?\b/))
    return n.restOfLine = "string", "keyword";
}
t(L, "extendsStatement");
function w(i, n) {
  if (i.match(/^append\b/))
    return n.restOfLine = "variable", "keyword";
}
t(w, "append");
function N(i, n) {
  if (i.match(/^prepend\b/))
    return n.restOfLine = "variable", "keyword";
}
t(N, "prepend");
function x(i, n) {
  if (i.match(/^block\b *(?:(prepend|append)\b)?/))
    return n.restOfLine = "variable", "keyword";
}
t(x, "block");
function T(i, n) {
  if (i.match(/^include\b/))
    return n.restOfLine = "string", "keyword";
}
t(T, "include");
function I(i, n) {
  if (i.match(/^include:([a-zA-Z0-9\-]+)/, !1) && i.match("include"))
    return n.isIncludeFiltered = !0, "keyword";
}
t(I, "includeFiltered");
function O(i, n) {
  if (n.isIncludeFiltered) {
    var e = p(i, n);
    return n.isIncludeFiltered = !1, n.restOfLine = "string", e;
  }
}
t(O, "includeFilteredContinued");
function C(i, n) {
  if (i.match(/^mixin\b/))
    return n.javaScriptLine = !0, "keyword";
}
t(C, "mixin");
function E(i, n) {
  if (i.match(/^\+([-\w]+)/))
    return i.match(/^\( *[-\w]+ *=/, !1) || (n.javaScriptArguments = !0, n.javaScriptArgumentsDepth = 0), "variable";
  if (i.match("+#{", !1))
    return i.next(), n.mixinCallAfter = !0, a(i, n);
}
t(E, "call");
function D(i, n) {
  if (n.mixinCallAfter)
    return n.mixinCallAfter = !1, i.match(/^\( *[-\w]+ *=/, !1) || (n.javaScriptArguments = !0, n.javaScriptArgumentsDepth = 0), !0;
}
t(D, "callArguments");
function F(i, n) {
  if (i.match(/^(if|unless|else if|else)\b/))
    return n.javaScriptLine = !0, "keyword";
}
t(F, "conditional");
function m(i, n) {
  if (i.match(/^(- *)?(each|for)\b/))
    return n.isEach = !0, "keyword";
}
t(m, "each");
function V(i, n) {
  if (n.isEach) {
    if (i.match(/^ in\b/))
      return n.javaScriptLine = !0, n.isEach = !1, "keyword";
    if (i.sol() || i.eol())
      n.isEach = !1;
    else if (i.next()) {
      for (; !i.match(/^ in\b/, !1) && i.next(); )
        ;
      return "variable";
    }
  }
}
t(V, "eachContinued");
function U(i, n) {
  if (i.match(/^while\b/))
    return n.javaScriptLine = !0, "keyword";
}
t(U, "whileStatement");
function z(i, n) {
  var e;
  if (e = i.match(/^(\w(?:[-:\w]*\w)?)\/?/))
    return n.lastTag = e[1].toLowerCase(), "tag";
}
t(z, "tag");
function p(i, n) {
  if (i.match(/^:([\w\-]+)/))
    return o(i, n), "atom";
}
t(p, "filter");
function B(i, n) {
  if (i.match(/^(!?=|-)/))
    return n.javaScriptLine = !0, "punctuation";
}
t(B, "code");
function M(i) {
  if (i.match(/^#([\w-]+)/))
    return "builtin";
}
t(M, "id");
function R(i) {
  if (i.match(/^\.([\w-]+)/))
    return "className";
}
t(R, "className");
function Z(i, n) {
  if (i.peek() == "(")
    return i.next(), n.isAttrs = !0, n.attrsNest = [], n.inAttributeName = !0, n.attrValue = "", n.attributeIsType = !1, "punctuation";
}
t(Z, "attrs");
function h(i, n) {
  if (n.isAttrs) {
    if (l[i.peek()] && n.attrsNest.push(l[i.peek()]), n.attrsNest[n.attrsNest.length - 1] === i.peek())
      n.attrsNest.pop();
    else if (i.eat(")"))
      return n.isAttrs = !1, "punctuation";
    if (n.inAttributeName && i.match(/^[^=,\)!]+/))
      return (i.peek() === "=" || i.peek() === "!") && (n.inAttributeName = !1, n.jsState = r.startState(2), n.lastTag === "script" && i.current().trim().toLowerCase() === "type" ? n.attributeIsType = !0 : n.attributeIsType = !1), "attribute";
    var e = r.token(i, n.jsState);
    if (n.attrsNest.length === 0 && (e === "string" || e === "variable" || e === "keyword"))
      try {
        return Function("", "var x " + n.attrValue.replace(/,\s*$/, "").replace(/^!/, "")), n.inAttributeName = !0, n.attrValue = "", i.backUp(i.current().length), h(i, n);
      } catch {
      }
    return n.attrValue += i.current(), e || !0;
  }
}
t(h, "attrsContinued");
function $(i, n) {
  if (i.match(/^&attributes\b/))
    return n.javaScriptArguments = !0, n.javaScriptArgumentsDepth = 0, "keyword";
}
t($, "attributesBlock");
function q(i) {
  if (i.sol() && i.eatSpace())
    return "indent";
}
t(q, "indent");
function G(i, n) {
  if (i.match(/^ *\/\/(-)?([^\n]*)/))
    return n.indentOf = i.indentation(), n.indentToken = "comment", "comment";
}
t(G, "comment");
function H(i) {
  if (i.match(/^: */))
    return "colon";
}
t(H, "colon");
function J(i, n) {
  if (i.match(/^(?:\| ?| )([^\n]+)/))
    return "string";
  if (i.match(/^(<[^\n]*)/, !1))
    return o(i, n), i.skipToEnd(), n.indentToken;
}
t(J, "text");
function K(i, n) {
  if (i.eat("."))
    return o(i, n), "dot";
}
t(K, "dot");
function P(i) {
  return i.next(), null;
}
t(P, "fail");
function o(i, n) {
  n.indentOf = i.indentation(), n.indentToken = "string";
}
t(o, "setStringMode");
function Q(i, n) {
  if (i.sol() && (n.restOfLine = ""), n.restOfLine) {
    i.skipToEnd();
    var e = n.restOfLine;
    return n.restOfLine = "", e;
  }
}
t(Q, "restOfLine");
function W(i) {
  return new f(i);
}
t(W, "startState");
function X(i) {
  return i.copy();
}
t(X, "copyState");
function Y(i, n) {
  var e = Q(i, n) || k(i, n) || O(i, n) || V(i, n) || h(i, n) || S(i, n) || v(i, n) || D(i, n) || g(i) || j(i) || a(i, n) || b(i, n) || A(i, n) || y(i) || L(i, n) || w(i, n) || N(i, n) || x(i, n) || T(i, n) || I(i, n) || C(i, n) || E(i, n) || F(i, n) || m(i, n) || U(i, n) || z(i, n) || p(i, n) || B(i, n) || M(i) || R(i) || Z(i, n) || $(i, n) || q(i) || J(i, n) || G(i, n) || H(i) || K(i, n) || P(i);
  return e === !0 ? null : e;
}
t(Y, "nextToken");
const tn = {
  startState: W,
  copyState: X,
  token: Y
};
export {
  tn as pug
};
