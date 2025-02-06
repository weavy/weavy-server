﻿var d = Object.defineProperty;
var i = (n, e) => d(n, "name", { value: e, configurable: !0 });
var c = /* @__PURE__ */ i(function(n) {
  return new RegExp("^(?:" + n.join("|") + ")$", "i");
}, "wordRegexp"), f = /* @__PURE__ */ i(function(n) {
  o = null;
  var e = n.next();
  if (e === '"')
    return n.match(/^.*?"/), "string";
  if (e === "'")
    return n.match(/^.*?'/), "string";
  if (/[{}\(\),\.;\[\]]/.test(e))
    return o = e, "punctuation";
  if (e === "/" && n.eat("/"))
    return n.skipToEnd(), "comment";
  if (p.test(e))
    return n.eatWhile(p), null;
  if (n.eatWhile(/[_\w\d]/), n.eat(":"))
    return n.eatWhile(/[\w\d_\-]/), "atom";
  var t = n.current();
  return h.test(t) ? "builtin" : x.test(t) ? "def" : g.test(t) || v.test(t) ? "keyword" : "variable";
}, "tokenBase"), l = /* @__PURE__ */ i(function(n, e, t) {
  return n.context = {
    prev: n.context,
    indent: n.indent,
    col: t,
    type: e
  };
}, "pushContext"), a = /* @__PURE__ */ i(function(n) {
  return n.indent = n.context.indent, n.context = n.context.prev;
}, "popContext"), o, h = c(["abs", "acos", "allShortestPaths", "asin", "atan", "atan2", "avg", "ceil", "coalesce", "collect", "cos", "cot", "count", "degrees", "e", "endnode", "exp", "extract", "filter", "floor", "haversin", "head", "id", "keys", "labels", "last", "left", "length", "log", "log10", "lower", "ltrim", "max", "min", "node", "nodes", "percentileCont", "percentileDisc", "pi", "radians", "rand", "range", "reduce", "rel", "relationship", "relationships", "replace", "reverse", "right", "round", "rtrim", "shortestPath", "sign", "sin", "size", "split", "sqrt", "startnode", "stdev", "stdevp", "str", "substring", "sum", "tail", "tan", "timestamp", "toFloat", "toInt", "toString", "trim", "type", "upper"]), x = c(["all", "and", "any", "contains", "exists", "has", "in", "none", "not", "or", "single", "xor"]), g = c(["as", "asc", "ascending", "assert", "by", "case", "commit", "constraint", "create", "csv", "cypher", "delete", "desc", "descending", "detach", "distinct", "drop", "else", "end", "ends", "explain", "false", "fieldterminator", "foreach", "from", "headers", "in", "index", "is", "join", "limit", "load", "match", "merge", "null", "on", "optional", "order", "periodic", "profile", "remove", "return", "scan", "set", "skip", "start", "starts", "then", "true", "union", "unique", "unwind", "using", "when", "where", "with", "call", "yield"]), v = c(["access", "active", "assign", "all", "alter", "as", "catalog", "change", "copy", "create", "constraint", "constraints", "current", "database", "databases", "dbms", "default", "deny", "drop", "element", "elements", "exists", "from", "grant", "graph", "graphs", "if", "index", "indexes", "label", "labels", "management", "match", "name", "names", "new", "node", "nodes", "not", "of", "on", "or", "password", "populated", "privileges", "property", "read", "relationship", "relationships", "remove", "replace", "required", "revoke", "role", "roles", "set", "show", "start", "status", "stop", "suspended", "to", "traverse", "type", "types", "user", "users", "with", "write"]), p = /[*+\-<>=&|~%^]/;
const m = {
  name: "cypher",
  startState: /* @__PURE__ */ i(function() {
    return {
      tokenize: f,
      context: null,
      indent: 0,
      col: 0
    };
  }, "startState"),
  token: /* @__PURE__ */ i(function(n, e) {
    if (n.sol() && (e.context && e.context.align == null && (e.context.align = !1), e.indent = n.indentation()), n.eatSpace())
      return null;
    var t = e.tokenize(n, e);
    if (t !== "comment" && e.context && e.context.align == null && e.context.type !== "pattern" && (e.context.align = !0), o === "(")
      l(e, ")", n.column());
    else if (o === "[")
      l(e, "]", n.column());
    else if (o === "{")
      l(e, "}", n.column());
    else if (/[\]\}\)]/.test(o)) {
      for (; e.context && e.context.type === "pattern"; )
        a(e);
      e.context && o === e.context.type && a(e);
    } else o === "." && e.context && e.context.type === "pattern" ? a(e) : /atom|string|variable/.test(t) && e.context && (/[\}\]]/.test(e.context.type) ? l(e, "pattern", n.column()) : e.context.type === "pattern" && !e.context.align && (e.context.align = !0, e.context.col = n.column()));
    return t;
  }, "token"),
  indent: /* @__PURE__ */ i(function(n, e, t) {
    var s = e && e.charAt(0), r = n.context;
    if (/[\]\}]/.test(s))
      for (; r && r.type === "pattern"; )
        r = r.prev;
    var u = r && s === r.type;
    return r ? r.type === "keywords" ? null : r.align ? r.col + (u ? 0 : 1) : r.indent + (u ? 0 : t.unit) : 0;
  }, "indent")
};
export {
  m as cypher
};
