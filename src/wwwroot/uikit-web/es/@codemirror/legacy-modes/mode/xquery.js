var I = Object.defineProperty;
var r = (e, n) => I(e, "name", { value: n, configurable: !0 });
var y = function() {
  function e(w) {
    return { type: w, style: "keyword" };
  }
  r(e, "kw");
  for (var n = e("operator"), t = { type: "atom", style: "atom" }, i = { type: "punctuation", style: null }, u = { type: "axis_specifier", style: "qualifier" }, l = {
    ",": i
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
  ], o = 0, a = x.length; o < a; o++)
    l[x[o]] = e(x[o]);
  for (var h = [
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
  ], o = 0, a = h.length; o < a; o++)
    l[h[o]] = t;
  for (var p = ["eq", "ne", "lt", "le", "gt", "ge", ":=", "=", ">", ">=", "<", "<=", ".", "|", "?", "and", "or", "div", "idiv", "mod", "*", "/", "+", "-"], o = 0, a = p.length; o < a; o++)
    l[p[o]] = n;
  for (var b = [
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
  ], o = 0, a = b.length; o < a; o++)
    l[b[o]] = u;
  return l;
}();
function g(e, n, t) {
  return n.tokenize = t, t(e, n);
}
r(g, "chain");
function s(e, n) {
  var t = e.next(), i = !1, u = B(e);
  if (t == "<") {
    if (e.match("!--", !0))
      return g(e, n, E);
    if (e.match("![CDATA", !1))
      return n.tokenize = A, "tag";
    if (e.match("?", !1))
      return g(e, n, D);
    var l = e.eat("/");
    e.eatSpace();
    for (var x = "", o; o = e.eat(/[^\s\u00a0=<>\"\'\/?]/); ) x += o;
    return g(e, n, N(x, l));
  } else {
    if (t == "{")
      return f(n, { type: "codeblock" }), null;
    if (t == "}")
      return c(n), null;
    if (z(n))
      return t == ">" ? "tag" : t == "/" && e.eat(">") ? (c(n), "tag") : "variable";
    if (/\d/.test(t))
      return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/), "atom";
    if (t === "(" && e.eat(":"))
      return f(n, { type: "comment" }), g(e, n, T);
    if (!u && (t === '"' || t === "'"))
      return g(e, n, m(t));
    if (t === "$")
      return g(e, n, S);
    if (t === ":" && e.eat("="))
      return "keyword";
    if (t === "(")
      return f(n, { type: "paren" }), null;
    if (t === ")")
      return c(n), null;
    if (t === "[")
      return f(n, { type: "bracket" }), null;
    if (t === "]")
      return c(n), null;
    var a = y.propertyIsEnumerable(t) && y[t];
    if (u && t === '"') for (; e.next() !== '"'; )
      ;
    if (u && t === "'") for (; e.next() !== "'"; )
      ;
    a || e.eatWhile(/[\w\$_-]/);
    var h = e.eat(":");
    !e.eat(":") && h && e.eatWhile(/[\w\$_-]/), e.match(/^[ \t]*\(/, !1) && (i = !0);
    var p = e.current();
    return a = y.propertyIsEnumerable(p) && y[p], i && !a && (a = { type: "function_call", style: "def" }), _(n) ? (c(n), "variable") : ((p == "element" || p == "attribute" || a.type == "axis_specifier") && f(n, { type: "xmlconstructor" }), a ? a.style : "variable");
  }
}
r(s, "tokenBase");
function T(e, n) {
  for (var t = !1, i = !1, u = 0, l; l = e.next(); ) {
    if (l == ")" && t)
      if (u > 0)
        u--;
      else {
        c(n);
        break;
      }
    else l == ":" && i && u++;
    t = l == ":", i = l == "(";
  }
  return "comment";
}
r(T, "tokenComment");
function m(e, n) {
  return function(t, i) {
    var u;
    if (C(i) && t.current() == e)
      return c(i), n && (i.tokenize = n), "string";
    if (f(i, { type: "string", name: e, tokenize: m(e, n) }), t.match("{", !1) && d(i))
      return i.tokenize = s, "string";
    for (; u = t.next(); )
      if (u == e) {
        c(i), n && (i.tokenize = n);
        break;
      } else if (t.match("{", !1) && d(i))
        return i.tokenize = s, "string";
    return "string";
  };
}
r(m, "tokenString");
function S(e, n) {
  var t = /[\w\$_-]/;
  if (e.eat('"')) {
    for (; e.next() !== '"'; )
      ;
    e.eat(":");
  } else
    e.eatWhile(t), e.match(":=", !1) || e.eat(":");
  return e.eatWhile(t), n.tokenize = s, "variable";
}
r(S, "tokenVariable");
function N(e, n) {
  return function(t, i) {
    if (t.eatSpace(), n && t.eat(">"))
      return c(i), i.tokenize = s, "tag";
    if (t.eat("/") || f(i, { type: "tag", name: e, tokenize: s }), t.eat(">"))
      i.tokenize = s;
    else
      return i.tokenize = v, "tag";
    return "tag";
  };
}
r(N, "tokenTag");
function v(e, n) {
  var t = e.next();
  return t == "/" && e.eat(">") ? (d(n) && c(n), z(n) && c(n), "tag") : t == ">" ? (d(n) && c(n), "tag") : t == "=" ? null : t == '"' || t == "'" ? g(e, n, m(t, v)) : (d(n) || f(n, { type: "attribute", tokenize: v }), e.eat(/[a-zA-Z_:]/), e.eatWhile(/[-a-zA-Z0-9_:.]/), e.eatSpace(), (e.match(">", !1) || e.match("/", !1)) && (c(n), n.tokenize = s), "attribute");
}
r(v, "tokenAttribute");
function E(e, n) {
  for (var t; t = e.next(); )
    if (t == "-" && e.match("->", !0))
      return n.tokenize = s, "comment";
}
r(E, "tokenXMLComment");
function A(e, n) {
  for (var t; t = e.next(); )
    if (t == "]" && e.match("]", !0))
      return n.tokenize = s, "comment";
}
r(A, "tokenCDATA");
function D(e, n) {
  for (var t; t = e.next(); )
    if (t == "?" && e.match(">", !0))
      return n.tokenize = s, "processingInstruction";
}
r(D, "tokenPreProcessing");
function z(e) {
  return k(e, "tag");
}
r(z, "isInXmlBlock");
function d(e) {
  return k(e, "attribute");
}
r(d, "isInXmlAttributeBlock");
function _(e) {
  return k(e, "xmlconstructor");
}
r(_, "isInXmlConstructor");
function C(e) {
  return k(e, "string");
}
r(C, "isInString");
function B(e) {
  return e.current() === '"' ? e.match(/^[^\"]+\"\:/, !1) : e.current() === "'" ? e.match(/^[^\"]+\'\:/, !1) : !1;
}
r(B, "isEQNameAhead");
function k(e, n) {
  return e.stack.length && e.stack[e.stack.length - 1].type == n;
}
r(k, "isIn");
function f(e, n) {
  e.stack.push(n);
}
r(f, "pushStateStack");
function c(e) {
  e.stack.pop();
  var n = e.stack.length && e.stack[e.stack.length - 1].tokenize;
  e.tokenize = n || s;
}
r(c, "popStateStack");
const O = {
  name: "xquery",
  startState: /* @__PURE__ */ r(function() {
    return {
      tokenize: s,
      cc: [],
      stack: []
    };
  }, "startState"),
  token: /* @__PURE__ */ r(function(e, n) {
    if (e.eatSpace()) return null;
    var t = n.tokenize(e, n);
    return t;
  }, "token"),
  languageData: {
    commentTokens: { block: { open: "(:", close: ":)" } }
  }
};
export {
  O as xQuery
};
