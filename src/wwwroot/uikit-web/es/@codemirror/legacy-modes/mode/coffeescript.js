﻿var y = Object.defineProperty;
var c = (e, n) => y(e, "name", { value: n, configurable: !0 });
var g = "error";
function d(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b");
}
c(d, "wordRegexp");
var w = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/, z = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/, t = /^[_A-Za-z$][_A-Za-z$0-9]*/, a = /^@[_A-Za-z$][_A-Za-z$0-9]*/, x = d([
  "and",
  "or",
  "not",
  "is",
  "isnt",
  "in",
  "instanceof",
  "typeof"
]), p = [
  "for",
  "while",
  "loop",
  "if",
  "unless",
  "else",
  "switch",
  "try",
  "catch",
  "finally",
  "class"
], b = [
  "break",
  "by",
  "continue",
  "debugger",
  "delete",
  "do",
  "in",
  "of",
  "new",
  "return",
  "then",
  "this",
  "@",
  "throw",
  "when",
  "until",
  "extends"
], A = d(p.concat(b));
p = d(p);
var S = /^('{3}|\"{3}|['\"])/, O = /^(\/{3}|\/)/, R = ["Infinity", "NaN", "undefined", "null", "true", "false", "on", "off", "yes", "no"], E = d(R);
function l(e, n) {
  if (e.sol()) {
    n.scope.align === null && (n.scope.align = !1);
    var i = n.scope.offset;
    if (e.eatSpace()) {
      var f = e.indentation();
      return f > i && n.scope.type == "coffee" ? "indent" : f < i ? "dedent" : null;
    } else
      i > 0 && h(e, n);
  }
  if (e.eatSpace())
    return null;
  var r = e.peek();
  if (e.match("####"))
    return e.skipToEnd(), "comment";
  if (e.match("###"))
    return n.tokenize = Z, n.tokenize(e, n);
  if (r === "#")
    return e.skipToEnd(), "comment";
  if (e.match(/^-?[0-9\.]/, !1)) {
    var u = !1;
    if (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (u = !0), e.match(/^-?\d+\.\d*/) && (u = !0), e.match(/^-?\.\d+/) && (u = !0), u)
      return e.peek() == "." && e.backUp(1), "number";
    var o = !1;
    if (e.match(/^-?0x[0-9a-f]+/i) && (o = !0), e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (o = !0), e.match(/^-?0(?![\dx])/i) && (o = !0), o)
      return "number";
  }
  if (e.match(S))
    return n.tokenize = k(e.current(), !1, "string"), n.tokenize(e, n);
  if (e.match(O)) {
    if (e.current() != "/" || e.match(/^.*\//, !1))
      return n.tokenize = k(e.current(), !0, "string.special"), n.tokenize(e, n);
    e.backUp(1);
  }
  return e.match(w) || e.match(x) ? "operator" : e.match(z) ? "punctuation" : e.match(E) ? "atom" : e.match(a) || n.prop && e.match(t) ? "property" : e.match(A) ? "keyword" : e.match(t) ? "variable" : (e.next(), g);
}
c(l, "tokenBase");
function k(e, n, i) {
  return function(f, r) {
    for (; !f.eol(); )
      if (f.eatWhile(/[^'"\/\\]/), f.eat("\\")) {
        if (f.next(), n && f.eol())
          return i;
      } else {
        if (f.match(e))
          return r.tokenize = l, i;
        f.eat(/['"\/]/);
      }
    return n && (r.tokenize = l), i;
  };
}
c(k, "tokenFactory");
function Z(e, n) {
  for (; !e.eol(); ) {
    if (e.eatWhile(/[^#]/), e.match("###")) {
      n.tokenize = l;
      break;
    }
    e.eatWhile("#");
  }
  return "comment";
}
c(Z, "longComment");
function v(e, n, i = "coffee") {
  for (var f = 0, r = !1, u = null, o = n.scope; o; o = o.prev)
    if (o.type === "coffee" || o.type == "}") {
      f = o.offset + e.indentUnit;
      break;
    }
  i !== "coffee" ? (r = null, u = e.column() + e.current().length) : n.scope.align && (n.scope.align = !1), n.scope = {
    offset: f,
    type: i,
    prev: n.scope,
    align: r,
    alignOffset: u
  };
}
c(v, "indent");
function h(e, n) {
  if (n.scope.prev)
    if (n.scope.type === "coffee") {
      for (var i = e.indentation(), f = !1, r = n.scope; r; r = r.prev)
        if (i === r.offset) {
          f = !0;
          break;
        }
      if (!f)
        return !0;
      for (; n.scope.prev && n.scope.offset !== i; )
        n.scope = n.scope.prev;
      return !1;
    } else
      return n.scope = n.scope.prev, !1;
}
c(h, "dedent");
function _(e, n) {
  var i = n.tokenize(e, n), f = e.current();
  f === "return" && (n.dedent = !0), ((f === "->" || f === "=>") && e.eol() || i === "indent") && v(e, n);
  var r = "[({".indexOf(f);
  if (r !== -1 && v(e, n, "])}".slice(r, r + 1)), p.exec(f) && v(e, n), f == "then" && h(e, n), i === "dedent" && h(e, n))
    return g;
  if (r = "])}".indexOf(f), r !== -1) {
    for (; n.scope.type == "coffee" && n.scope.prev; )
      n.scope = n.scope.prev;
    n.scope.type == f && (n.scope = n.scope.prev);
  }
  return n.dedent && e.eol() && (n.scope.type == "coffee" && n.scope.prev && (n.scope = n.scope.prev), n.dedent = !1), i == "indent" || i == "dedent" ? null : i;
}
c(_, "tokenLexer");
const C = {
  name: "coffeescript",
  startState: /* @__PURE__ */ c(function() {
    return {
      tokenize: l,
      scope: { offset: 0, type: "coffee", prev: null, align: !1 },
      prop: !1,
      dedent: 0
    };
  }, "startState"),
  token: /* @__PURE__ */ c(function(e, n) {
    var i = n.scope.align === null && n.scope;
    i && e.sol() && (i.align = !1);
    var f = _(e, n);
    return f && f != "comment" && (i && (i.align = !0), n.prop = f == "punctuation" && e.current() == "."), f;
  }, "token"),
  indent: /* @__PURE__ */ c(function(e, n) {
    if (e.tokenize != l) return 0;
    var i = e.scope, f = n && "])}".indexOf(n.charAt(0)) > -1;
    if (f) for (; i.type == "coffee" && i.prev; ) i = i.prev;
    var r = f && i.type === n.charAt(0);
    return i.align ? i.alignOffset - (r ? 1 : 0) : (r ? i.prev : i).offset;
  }, "indent"),
  languageData: {
    commentTokens: { line: "#" }
  }
};
export {
  C as coffeeScript
};
