﻿var I = Object.defineProperty;
var i = (e, n) => I(e, "name", { value: n, configurable: !0 });
var h = function() {
  function e(z) {
    return { type: z, style: "keyword" };
  }
  i(e, "kw");
  for (var n = e("operator"), t = { type: "atom", style: "atom" }, r = { type: "punctuation", style: null }, a = { type: "axis_specifier", style: "qualifier" }, c = {
    ",": r
  }, x = [
    "after",
    "all",
    "allowing",
    "ancestor",
    "ancestor-or-self",
    "any",
    "array",
    "as",
    "ascending",
    "at",
    "attribute",
    "base-uri",
    "before",
    "boundary-space",
    "by",
    "case",
    "cast",
    "castable",
    "catch",
    "child",
    "collation",
    "comment",
    "construction",
    "contains",
    "content",
    "context",
    "copy",
    "copy-namespaces",
    "count",
    "decimal-format",
    "declare",
    "default",
    "delete",
    "descendant",
    "descendant-or-self",
    "descending",
    "diacritics",
    "different",
    "distance",
    "document",
    "document-node",
    "element",
    "else",
    "empty",
    "empty-sequence",
    "encoding",
    "end",
    "entire",
    "every",
    "exactly",
    "except",
    "external",
    "first",
    "following",
    "following-sibling",
    "for",
    "from",
    "ftand",
    "ftnot",
    "ft-option",
    "ftor",
    "function",
    "fuzzy",
    "greatest",
    "group",
    "if",
    "import",
    "in",
    "inherit",
    "insensitive",
    "insert",
    "instance",
    "intersect",
    "into",
    "invoke",
    "is",
    "item",
    "language",
    "last",
    "lax",
    "least",
    "let",
    "levels",
    "lowercase",
    "map",
    "modify",
    "module",
    "most",
    "namespace",
    "next",
    "no",
    "node",
    "nodes",
    "no-inherit",
    "no-preserve",
    "not",
    "occurs",
    "of",
    "only",
    "option",
    "order",
    "ordered",
    "ordering",
    "paragraph",
    "paragraphs",
    "parent",
    "phrase",
    "preceding",
    "preceding-sibling",
    "preserve",
    "previous",
    "processing-instruction",
    "relationship",
    "rename",
    "replace",
    "return",
    "revalidation",
    "same",
    "satisfies",
    "schema",
    "schema-attribute",
    "schema-element",
    "score",
    "self",
    "sensitive",
    "sentence",
    "sentences",
    "sequence",
    "skip",
    "sliding",
    "some",
    "stable",
    "start",
    "stemming",
    "stop",
    "strict",
    "strip",
    "switch",
    "text",
    "then",
    "thesaurus",
    "times",
    "to",
    "transform",
    "treat",
    "try",
    "tumbling",
    "type",
    "typeswitch",
    "union",
    "unordered",
    "update",
    "updating",
    "uppercase",
    "using",
    "validate",
    "value",
    "variable",
    "version",
    "weight",
    "when",
    "where",
    "wildcards",
    "window",
    "with",
    "without",
    "word",
    "words",
    "xquery"
  ], o = 0, l = x.length; o < l; o++)
    c[x[o]] = e(x[o]);
  for (var d = [
    "xs:anyAtomicType",
    "xs:anySimpleType",
    "xs:anyType",
    "xs:anyURI",
    "xs:base64Binary",
    "xs:boolean",
    "xs:byte",
    "xs:date",
    "xs:dateTime",
    "xs:dateTimeStamp",
    "xs:dayTimeDuration",
    "xs:decimal",
    "xs:double",
    "xs:duration",
    "xs:ENTITIES",
    "xs:ENTITY",
    "xs:float",
    "xs:gDay",
    "xs:gMonth",
    "xs:gMonthDay",
    "xs:gYear",
    "xs:gYearMonth",
    "xs:hexBinary",
    "xs:ID",
    "xs:IDREF",
    "xs:IDREFS",
    "xs:int",
    "xs:integer",
    "xs:item",
    "xs:java",
    "xs:language",
    "xs:long",
    "xs:Name",
    "xs:NCName",
    "xs:negativeInteger",
    "xs:NMTOKEN",
    "xs:NMTOKENS",
    "xs:nonNegativeInteger",
    "xs:nonPositiveInteger",
    "xs:normalizedString",
    "xs:NOTATION",
    "xs:numeric",
    "xs:positiveInteger",
    "xs:precisionDecimal",
    "xs:QName",
    "xs:short",
    "xs:string",
    "xs:time",
    "xs:token",
    "xs:unsignedByte",
    "xs:unsignedInt",
    "xs:unsignedLong",
    "xs:unsignedShort",
    "xs:untyped",
    "xs:untypedAtomic",
    "xs:yearMonthDuration"
  ], o = 0, l = d.length; o < l; o++)
    c[d[o]] = t;
  for (var p = ["eq", "ne", "lt", "le", "gt", "ge", ":=", "=", ">", ">=", "<", "<=", ".", "|", "?", "and", "or", "div", "idiv", "mod", "*", "/", "+", "-"], o = 0, l = p.length; o < l; o++)
    c[p[o]] = n;
  for (var m = [
    "self::",
    "attribute::",
    "child::",
    "descendant::",
    "descendant-or-self::",
    "parent::",
    "ancestor::",
    "ancestor-or-self::",
    "following::",
    "preceding::",
    "following-sibling::",
    "preceding-sibling::"
  ], o = 0, l = m.length; o < l; o++)
    c[m[o]] = a;
  return c;
}();
function g(e, n, t) {
  return n.tokenize = t, t(e, n);
}
i(g, "chain");
function s(e, n) {
  var t = e.next(), r = !1, a = B(e);
  if (t == "<") {
    if (e.match("!--", !0))
      return g(e, n, A);
    if (e.match("![CDATA", !1))
      return n.tokenize = D, "tag";
    if (e.match("?", !1))
      return g(e, n, _);
    var c = e.eat("/");
    e.eatSpace();
    for (var x = "", o; o = e.eat(/[^\s\u00a0=<>\"\'\/?]/); ) x += o;
    return g(e, n, E(x, c));
  } else {
    if (t == "{")
      return f(n, { type: "codeblock" }), null;
    if (t == "}")
      return u(n), null;
    if (w(n))
      return t == ">" ? "tag" : t == "/" && e.eat(">") ? (u(n), "tag") : "variable";
    if (/\d/.test(t))
      return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/), "atom";
    if (t === "(" && e.eat(":"))
      return f(n, { type: "comment" }), g(e, n, T);
    if (!a && (t === '"' || t === "'"))
      return b(e, n, t);
    if (t === "$")
      return g(e, n, N);
    if (t === ":" && e.eat("="))
      return "keyword";
    if (t === "(")
      return f(n, { type: "paren" }), null;
    if (t === ")")
      return u(n), null;
    if (t === "[")
      return f(n, { type: "bracket" }), null;
    if (t === "]")
      return u(n), null;
    var l = h.propertyIsEnumerable(t) && h[t];
    if (a && t === '"') for (; e.next() !== '"'; )
      ;
    if (a && t === "'") for (; e.next() !== "'"; )
      ;
    l || e.eatWhile(/[\w\$_-]/);
    var d = e.eat(":");
    !e.eat(":") && d && e.eatWhile(/[\w\$_-]/), e.match(/^[ \t]*\(/, !1) && (r = !0);
    var p = e.current();
    return l = h.propertyIsEnumerable(p) && h[p], r && !l && (l = { type: "function_call", style: "def" }), C(n) ? (u(n), "variable") : ((p == "element" || p == "attribute" || l.type == "axis_specifier") && f(n, { type: "xmlconstructor" }), l ? l.style : "variable");
  }
}
i(s, "tokenBase");
function T(e, n) {
  for (var t = !1, r = !1, a = 0, c; c = e.next(); ) {
    if (c == ")" && t)
      if (a > 0)
        a--;
      else {
        u(n);
        break;
      }
    else c == ":" && r && a++;
    t = c == ":", r = c == "(";
  }
  return "comment";
}
i(T, "tokenComment");
function S(e, n) {
  return function(t, r) {
    for (var a; a = t.next(); )
      if (a == e) {
        u(r), n && (r.tokenize = n);
        break;
      } else if (t.match("{", !1) && y(r))
        return f(r, { type: "codeblock" }), r.tokenize = s, "string";
    return "string";
  };
}
i(S, "tokenString");
function b(e, n, t, r) {
  let a = S(t, r);
  return f(n, { type: "string", name: t, tokenize: a }), g(e, n, a);
}
i(b, "startString");
function N(e, n) {
  var t = /[\w\$_-]/;
  if (e.eat('"')) {
    for (; e.next() !== '"'; )
      ;
    e.eat(":");
  } else
    e.eatWhile(t), e.match(":=", !1) || e.eat(":");
  return e.eatWhile(t), n.tokenize = s, "variable";
}
i(N, "tokenVariable");
function E(e, n) {
  return function(t, r) {
    if (t.eatSpace(), n && t.eat(">"))
      return u(r), r.tokenize = s, "tag";
    if (t.eat("/") || f(r, { type: "tag", name: e, tokenize: s }), t.eat(">"))
      r.tokenize = s;
    else
      return r.tokenize = k, "tag";
    return "tag";
  };
}
i(E, "tokenTag");
function k(e, n) {
  var t = e.next();
  return t == "/" && e.eat(">") ? (y(n) && u(n), w(n) && u(n), "tag") : t == ">" ? (y(n) && u(n), "tag") : t == "=" ? null : t == '"' || t == "'" ? b(e, n, t, k) : (y(n) || f(n, { type: "attribute", tokenize: k }), e.eat(/[a-zA-Z_:]/), e.eatWhile(/[-a-zA-Z0-9_:.]/), e.eatSpace(), (e.match(">", !1) || e.match("/", !1)) && (u(n), n.tokenize = s), "attribute");
}
i(k, "tokenAttribute");
function A(e, n) {
  for (var t; t = e.next(); )
    if (t == "-" && e.match("->", !0))
      return n.tokenize = s, "comment";
}
i(A, "tokenXMLComment");
function D(e, n) {
  for (var t; t = e.next(); )
    if (t == "]" && e.match("]", !0))
      return n.tokenize = s, "comment";
}
i(D, "tokenCDATA");
function _(e, n) {
  for (var t; t = e.next(); )
    if (t == "?" && e.match(">", !0))
      return n.tokenize = s, "processingInstruction";
}
i(_, "tokenPreProcessing");
function w(e) {
  return v(e, "tag");
}
i(w, "isInXmlBlock");
function y(e) {
  return v(e, "attribute");
}
i(y, "isInXmlAttributeBlock");
function C(e) {
  return v(e, "xmlconstructor");
}
i(C, "isInXmlConstructor");
function B(e) {
  return e.current() === '"' ? e.match(/^[^\"]+\"\:/, !1) : e.current() === "'" ? e.match(/^[^\"]+\'\:/, !1) : !1;
}
i(B, "isEQNameAhead");
function v(e, n) {
  return e.stack.length && e.stack[e.stack.length - 1].type == n;
}
i(v, "isIn");
function f(e, n) {
  e.stack.push(n);
}
i(f, "pushStateStack");
function u(e) {
  e.stack.pop();
  var n = e.stack.length && e.stack[e.stack.length - 1].tokenize;
  e.tokenize = n || s;
}
i(u, "popStateStack");
const q = {
  name: "xquery",
  startState: /* @__PURE__ */ i(function() {
    return {
      tokenize: s,
      cc: [],
      stack: []
    };
  }, "startState"),
  token: /* @__PURE__ */ i(function(e, n) {
    if (e.eatSpace()) return null;
    var t = n.tokenize(e, n);
    return t;
  }, "token"),
  languageData: {
    commentTokens: { block: { open: "(:", close: ":)" } }
  }
};
export {
  q as xQuery
};
