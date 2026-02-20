var h = Object.defineProperty;
var o = (e, n) => h(e, "name", { value: n, configurable: !0 });
function c(e) {
  for (var n = {}, r = 0; r < e.length; ++r) n[e[r]] = !0;
  return n;
}
o(c, "wordObj");
var s = ["NULL", "NA", "Inf", "NaN", "NA_integer_", "NA_real_", "NA_complex_", "NA_character_", "TRUE", "FALSE"], g = ["list", "quote", "bquote", "eval", "return", "call", "parse", "deparse"], y = ["if", "else", "repeat", "while", "function", "for", "in", "next", "break"], m = ["if", "else", "repeat", "while", "function", "for"], A = c(s), E = c(g), N = c(y), _ = c(m), v = /[+\-*\/^<>=!&|~$:]/, t;
function d(e, n) {
  t = null;
  var r = e.next();
  if (r == "#")
    return e.skipToEnd(), "comment";
  if (r == "0" && e.eat("x"))
    return e.eatWhile(/[\da-f]/i), "number";
  if (r == "." && e.eat(/\d/))
    return e.match(/\d*(?:e[+\-]?\d+)?/), "number";
  if (/\d/.test(r))
    return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/), "number";
  if (r == "'" || r == '"')
    return n.tokenize = I(r), "string";
  if (r == "`")
    return e.match(/[^`]+`/), "string.special";
  if (r == "." && e.match(/.(?:[.]|\d+)/))
    return "keyword";
  if (/[a-zA-Z\.]/.test(r)) {
    e.eatWhile(/[\w\.]/);
    var i = e.current();
    return A.propertyIsEnumerable(i) ? "atom" : N.propertyIsEnumerable(i) ? (_.propertyIsEnumerable(i) && !e.match(/\s*if(\s+|$)/, !1) && (t = "block"), "keyword") : E.propertyIsEnumerable(i) ? "builtin" : "variable";
  } else return r == "%" ? (e.skipTo("%") && e.next(), "variableName.special") : r == "<" && e.eat("-") || r == "<" && e.match("<-") || r == "-" && e.match(/>>?/) || r == "=" && n.ctx.argList ? "operator" : v.test(r) ? (r == "$" || e.eatWhile(v), "operator") : /[\(\){}\[\];]/.test(r) ? (t = r, r == ";" ? "punctuation" : null) : null;
}
o(d, "tokenBase");
function I(e) {
  return function(n, r) {
    if (n.eat("\\")) {
      var i = n.next();
      return i == "x" ? n.match(/^[a-f0-9]{2}/i) : (i == "u" || i == "U") && n.eat("{") && n.skipTo("}") ? n.next() : i == "u" ? n.match(/^[a-f0-9]{4}/i) : i == "U" ? n.match(/^[a-f0-9]{8}/i) : /[0-7]/.test(i) && n.match(/^[0-7]{1,2}/), "string.special";
    } else {
      for (var l; (l = n.next()) != null; ) {
        if (l == e) {
          r.tokenize = d;
          break;
        }
        if (l == "\\") {
          n.backUp(1);
          break;
        }
      }
      return "string";
    }
  };
}
o(I, "tokenString");
var x = 1, u = 2, a = 4;
function f(e, n, r) {
  e.ctx = {
    type: n,
    indent: e.indent,
    flags: 0,
    column: r.column(),
    prev: e.ctx
  };
}
o(f, "push");
function b(e, n) {
  var r = e.ctx;
  e.ctx = {
    type: r.type,
    indent: r.indent,
    flags: r.flags | n,
    column: r.column,
    prev: r.prev
  };
}
o(b, "setFlag");
function p(e) {
  e.indent = e.ctx.indent, e.ctx = e.ctx.prev;
}
o(p, "pop");
const L = {
  name: "r",
  startState: /* @__PURE__ */ o(function(e) {
    return {
      tokenize: d,
      ctx: {
        type: "top",
        indent: -e,
        flags: u
      },
      indent: 0,
      afterIdent: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ o(function(e, n) {
    if (e.sol() && ((n.ctx.flags & 3) == 0 && (n.ctx.flags |= u), n.ctx.flags & a && p(n), n.indent = e.indentation()), e.eatSpace()) return null;
    var r = n.tokenize(e, n);
    return r != "comment" && (n.ctx.flags & u) == 0 && b(n, x), (t == ";" || t == "{" || t == "}") && n.ctx.type == "block" && p(n), t == "{" ? f(n, "}", e) : t == "(" ? (f(n, ")", e), n.afterIdent && (n.ctx.argList = !0)) : t == "[" ? f(n, "]", e) : t == "block" ? f(n, "block", e) : t == n.ctx.type ? p(n) : n.ctx.type == "block" && r != "comment" && b(n, a), n.afterIdent = r == "variable" || r == "keyword", r;
  }, "token"),
  indent: /* @__PURE__ */ o(function(e, n, r) {
    if (e.tokenize != d) return 0;
    var i = n && n.charAt(0), l = e.ctx, k = i == l.type;
    return l.flags & a && (l = l.prev), l.type == "block" ? l.indent + (i == "{" ? 0 : r.unit) : l.flags & x ? l.column + (k ? 0 : 1) : l.indent + (k ? 0 : r.unit);
  }, "indent"),
  languageData: {
    wordChars: ".",
    commentTokens: { line: "#" },
    autocomplete: s.concat(g, y)
  }
};
export {
  L as r
};
