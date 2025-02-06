﻿var F = Object.defineProperty;
var i = (n, e) => F(n, "name", { value: e, configurable: !0 });
var o;
function p(n) {
  return new RegExp("^(?:" + n.join("|") + ")$", "i");
}
i(p, "wordRegexp");
var x = p([
  "str",
  "lang",
  "langmatches",
  "datatype",
  "bound",
  "sameterm",
  "isiri",
  "isuri",
  "iri",
  "uri",
  "bnode",
  "count",
  "sum",
  "min",
  "max",
  "avg",
  "sample",
  "group_concat",
  "rand",
  "abs",
  "ceil",
  "floor",
  "round",
  "concat",
  "substr",
  "strlen",
  "replace",
  "ucase",
  "lcase",
  "encode_for_uri",
  "contains",
  "strstarts",
  "strends",
  "strbefore",
  "strafter",
  "year",
  "month",
  "day",
  "hours",
  "minutes",
  "seconds",
  "timezone",
  "tz",
  "now",
  "uuid",
  "struuid",
  "md5",
  "sha1",
  "sha256",
  "sha384",
  "sha512",
  "coalesce",
  "if",
  "strlang",
  "strdt",
  "isnumeric",
  "regex",
  "exists",
  "isblank",
  "isliteral",
  "a",
  "bind"
]), h = p([
  "base",
  "prefix",
  "select",
  "distinct",
  "reduced",
  "construct",
  "describe",
  "ask",
  "from",
  "named",
  "where",
  "order",
  "limit",
  "offset",
  "filter",
  "optional",
  "graph",
  "by",
  "asc",
  "desc",
  "as",
  "having",
  "undef",
  "values",
  "group",
  "minus",
  "in",
  "not",
  "service",
  "silent",
  "using",
  "insert",
  "delete",
  "union",
  "true",
  "false",
  "with",
  "data",
  "copy",
  "to",
  "move",
  "add",
  "create",
  "drop",
  "clear",
  "load",
  "into"
]), g = /[*+\-<>=&|\^\/!\?]/, f = "[A-Za-z_\\-0-9]", v = new RegExp("[A-Za-z]"), m = new RegExp("((" + f + "|\\.)*(" + f + "))?:");
function d(n, e) {
  var t = n.next();
  if (o = null, t == "$" || t == "?")
    return t == "?" && n.match(/\s/, !1) ? "operator" : (n.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/), "variableName.local");
  if (t == "<" && !n.match(/^[\s\u00a0=]/, !1))
    return n.match(/^[^\s\u00a0>]*>?/), "atom";
  if (t == '"' || t == "'")
    return e.tokenize = y(t), e.tokenize(n, e);
  if (/[{}\(\),\.;\[\]]/.test(t))
    return o = t, "bracket";
  if (t == "#")
    return n.skipToEnd(), "comment";
  if (g.test(t))
    return "operator";
  if (t == ":")
    return s(n), "atom";
  if (t == "@")
    return n.eatWhile(/[a-z\d\-]/i), "meta";
  if (v.test(t) && n.match(m))
    return s(n), "atom";
  n.eatWhile(/[_\w\d]/);
  var u = n.current();
  return x.test(u) ? "builtin" : h.test(u) ? "keyword" : "variable";
}
i(d, "tokenBase");
function s(n) {
  n.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i);
}
i(s, "eatPnLocal");
function y(n) {
  return function(e, t) {
    for (var u = !1, r; (r = e.next()) != null; ) {
      if (r == n && !u) {
        t.tokenize = d;
        break;
      }
      u = !u && r == "\\";
    }
    return "string";
  };
}
i(y, "tokenLiteral");
function c(n, e, t) {
  n.context = { prev: n.context, indent: n.indent, col: t, type: e };
}
i(c, "pushContext");
function l(n) {
  n.indent = n.context.indent, n.context = n.context.prev;
}
i(l, "popContext");
const b = {
  name: "sparql",
  startState: /* @__PURE__ */ i(function() {
    return {
      tokenize: d,
      context: null,
      indent: 0,
      col: 0
    };
  }, "startState"),
  token: /* @__PURE__ */ i(function(n, e) {
    if (n.sol() && (e.context && e.context.align == null && (e.context.align = !1), e.indent = n.indentation()), n.eatSpace()) return null;
    var t = e.tokenize(n, e);
    if (t != "comment" && e.context && e.context.align == null && e.context.type != "pattern" && (e.context.align = !0), o == "(") c(e, ")", n.column());
    else if (o == "[") c(e, "]", n.column());
    else if (o == "{") c(e, "}", n.column());
    else if (/[\]\}\)]/.test(o)) {
      for (; e.context && e.context.type == "pattern"; ) l(e);
      e.context && o == e.context.type && (l(e), o == "}" && e.context && e.context.type == "pattern" && l(e));
    } else o == "." && e.context && e.context.type == "pattern" ? l(e) : /atom|string|variable/.test(t) && e.context && (/[\}\]]/.test(e.context.type) ? c(e, "pattern", n.column()) : e.context.type == "pattern" && !e.context.align && (e.context.align = !0, e.context.col = n.column()));
    return t;
  }, "token"),
  indent: /* @__PURE__ */ i(function(n, e, t) {
    var u = e && e.charAt(0), r = n.context;
    if (/[\]\}]/.test(u))
      for (; r && r.type == "pattern"; ) r = r.prev;
    var a = r && u == r.type;
    return r ? r.type == "pattern" ? r.col : r.align ? r.col + (a ? 0 : 1) : r.indent + (a ? 0 : t.unit) : 0;
  }, "indent"),
  languageData: {
    commentTokens: { line: "#" }
  }
};
export {
  b as sparql
};
