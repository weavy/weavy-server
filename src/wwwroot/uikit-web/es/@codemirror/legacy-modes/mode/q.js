﻿var f = Object.defineProperty;
var c = (n, e) => f(n, "name", { value: e, configurable: !0 });
var r, x = v(["abs", "acos", "aj", "aj0", "all", "and", "any", "asc", "asin", "asof", "atan", "attr", "avg", "avgs", "bin", "by", "ceiling", "cols", "cor", "cos", "count", "cov", "cross", "csv", "cut", "delete", "deltas", "desc", "dev", "differ", "distinct", "div", "do", "each", "ej", "enlist", "eval", "except", "exec", "exit", "exp", "fby", "fills", "first", "fkeys", "flip", "floor", "from", "get", "getenv", "group", "gtime", "hclose", "hcount", "hdel", "hopen", "hsym", "iasc", "idesc", "if", "ij", "in", "insert", "inter", "inv", "key", "keys", "last", "like", "list", "lj", "load", "log", "lower", "lsq", "ltime", "ltrim", "mavg", "max", "maxs", "mcount", "md5", "mdev", "med", "meta", "min", "mins", "mmax", "mmin", "mmu", "mod", "msum", "neg", "next", "not", "null", "or", "over", "parse", "peach", "pj", "plist", "prd", "prds", "prev", "prior", "rand", "rank", "ratios", "raze", "read0", "read1", "reciprocal", "reverse", "rload", "rotate", "rsave", "rtrim", "save", "scan", "select", "set", "setenv", "show", "signum", "sin", "sqrt", "ss", "ssr", "string", "sublist", "sum", "sums", "sv", "system", "tables", "tan", "til", "trim", "txf", "type", "uj", "ungroup", "union", "update", "upper", "upsert", "value", "var", "view", "views", "vs", "wavg", "where", "where", "while", "within", "wj", "wj1", "wsum", "xasc", "xbar", "xcol", "xcols", "xdesc", "xexp", "xgroup", "xkey", "xlog", "xprev", "xrank"]), s = /[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;
function v(n) {
  return new RegExp("^(" + n.join("|") + ")$");
}
c(v, "buildRE");
function l(n, e) {
  var o = n.sol(), i = n.next();
  if (r = null, o) {
    if (i == "/")
      return (e.tokenize = k)(n, e);
    if (i == "\\")
      return n.eol() || /\s/.test(n.peek()) ? (n.skipToEnd(), /^\\\s*$/.test(n.current()) ? (e.tokenize = h)(n) : e.tokenize = l, "comment") : (e.tokenize = l, "builtin");
  }
  if (/\s/.test(i))
    return n.peek() == "/" ? (n.skipToEnd(), "comment") : "null";
  if (i == '"')
    return (e.tokenize = a)(n, e);
  if (i == "`")
    return n.eatWhile(/[A-Za-z\d_:\/.]/), "macroName";
  if (i == "." && /\d/.test(n.peek()) || /\d/.test(i)) {
    var t = null;
    return n.backUp(1), n.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/) || n.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/) || n.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/) || n.match(/^\d+[ptuv]{1}/) ? t = "temporal" : (n.match(/^0[NwW]{1}/) || n.match(/^0x[\da-fA-F]*/) || n.match(/^[01]+[b]{1}/) || n.match(/^\d+[chijn]{1}/) || n.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/)) && (t = "number"), t && (!(i = n.peek()) || s.test(i)) ? t : (n.next(), "error");
  }
  return /[A-Za-z]|\./.test(i) ? (n.eatWhile(/[A-Za-z._\d]/), x.test(n.current()) ? "keyword" : "variable") : /[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(i) || /[{}\(\[\]\)]/.test(i) ? null : "error";
}
c(l, "tokenBase");
function k(n, e) {
  return n.skipToEnd(), /\/\s*$/.test(n.current()) ? (e.tokenize = m)(n, e) : e.tokenize = l, "comment";
}
c(k, "tokenLineComment");
function m(n, e) {
  var o = n.sol() && n.peek() == "\\";
  return n.skipToEnd(), o && /^\\\s*$/.test(n.current()) && (e.tokenize = l), "comment";
}
c(m, "tokenBlockComment");
function h(n) {
  return n.skipToEnd(), "comment";
}
c(h, "tokenCommentToEOF");
function a(n, e) {
  for (var o = !1, i, t = !1; i = n.next(); ) {
    if (i == '"' && !o) {
      t = !0;
      break;
    }
    o = !o && i == "\\";
  }
  return t && (e.tokenize = l), "string";
}
c(a, "tokenString");
function u(n, e, o) {
  n.context = { prev: n.context, indent: n.indent, col: o, type: e };
}
c(u, "pushContext");
function d(n) {
  n.indent = n.context.indent, n.context = n.context.prev;
}
c(d, "popContext");
const y = {
  name: "q",
  startState: /* @__PURE__ */ c(function() {
    return {
      tokenize: l,
      context: null,
      indent: 0,
      col: 0
    };
  }, "startState"),
  token: /* @__PURE__ */ c(function(n, e) {
    n.sol() && (e.context && e.context.align == null && (e.context.align = !1), e.indent = n.indentation());
    var o = e.tokenize(n, e);
    if (o != "comment" && e.context && e.context.align == null && e.context.type != "pattern" && (e.context.align = !0), r == "(") u(e, ")", n.column());
    else if (r == "[") u(e, "]", n.column());
    else if (r == "{") u(e, "}", n.column());
    else if (/[\]\}\)]/.test(r)) {
      for (; e.context && e.context.type == "pattern"; ) d(e);
      e.context && r == e.context.type && d(e);
    } else r == "." && e.context && e.context.type == "pattern" ? d(e) : /atom|string|variable/.test(o) && e.context && (/[\}\]]/.test(e.context.type) ? u(e, "pattern", n.column()) : e.context.type == "pattern" && !e.context.align && (e.context.align = !0, e.context.col = n.column()));
    return o;
  }, "token"),
  indent: /* @__PURE__ */ c(function(n, e, o) {
    var i = e && e.charAt(0), t = n.context;
    if (/[\]\}]/.test(i))
      for (; t && t.type == "pattern"; ) t = t.prev;
    var p = t && i == t.type;
    return t ? t.type == "pattern" ? t.col : t.align ? t.col + (p ? 0 : 1) : t.indent + (p ? 0 : o.unit) : 0;
  }, "indent")
};
export {
  y as q
};
