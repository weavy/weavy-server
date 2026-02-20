var p = Object.defineProperty;
var o = (n, e) => p(n, "name", { value: e, configurable: !0 });
function a(n) {
  for (var e = {}, t = 0; t < n.length; t++) e[n[t]] = !0;
  return e;
}
o(a, "wordSet");
var d = a([
  "_",
  "var",
  "let",
  "actor",
  "class",
  "enum",
  "extension",
  "import",
  "protocol",
  "struct",
  "func",
  "typealias",
  "associatedtype",
  "open",
  "public",
  "internal",
  "fileprivate",
  "private",
  "deinit",
  "init",
  "new",
  "override",
  "self",
  "subscript",
  "super",
  "convenience",
  "dynamic",
  "final",
  "indirect",
  "lazy",
  "required",
  "static",
  "unowned",
  "unowned(safe)",
  "unowned(unsafe)",
  "weak",
  "as",
  "is",
  "break",
  "case",
  "continue",
  "default",
  "else",
  "fallthrough",
  "for",
  "guard",
  "if",
  "in",
  "repeat",
  "switch",
  "where",
  "while",
  "defer",
  "return",
  "inout",
  "mutating",
  "nonmutating",
  "isolated",
  "nonisolated",
  "catch",
  "do",
  "rethrows",
  "throw",
  "throws",
  "async",
  "await",
  "try",
  "didSet",
  "get",
  "set",
  "willSet",
  "assignment",
  "associativity",
  "infix",
  "left",
  "none",
  "operator",
  "postfix",
  "precedence",
  "precedencegroup",
  "prefix",
  "right",
  "Any",
  "AnyObject",
  "Type",
  "dynamicType",
  "Self",
  "Protocol",
  "__COLUMN__",
  "__FILE__",
  "__FUNCTION__",
  "__LINE__"
]), v = a(["var", "let", "actor", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "for"]), h = a(["true", "false", "nil", "self", "super", "_"]), _ = a([
  "Array",
  "Bool",
  "Character",
  "Dictionary",
  "Double",
  "Float",
  "Int",
  "Int8",
  "Int16",
  "Int32",
  "Int64",
  "Never",
  "Optional",
  "Set",
  "String",
  "UInt8",
  "UInt16",
  "UInt32",
  "UInt64",
  "Void"
]), s = "+-/*%=|&<>~^?!", k = ":;,.(){}[]", y = /^\-?0b[01][01_]*/, x = /^\-?0o[0-7][0-7_]*/, g = /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/, w = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/, z = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/, b = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/, A = /^\#[A-Za-z]+/, I = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
function l(n, e, t) {
  if (n.sol() && (e.indented = n.indentation()), n.eatSpace()) return null;
  var r = n.peek();
  if (r == "/") {
    if (n.match("//"))
      return n.skipToEnd(), "comment";
    if (n.match("/*"))
      return e.tokenize.push(f), f(n, e);
  }
  if (n.match(A)) return "builtin";
  if (n.match(I)) return "attribute";
  if (n.match(y) || n.match(x) || n.match(g) || n.match(w)) return "number";
  if (n.match(b)) return "property";
  if (s.indexOf(r) > -1)
    return n.next(), "operator";
  if (k.indexOf(r) > -1)
    return n.next(), n.match(".."), "punctuation";
  var i;
  if (i = n.match(/("""|"|')/)) {
    var u = m.bind(null, i[0]);
    return e.tokenize.push(u), u(n, e);
  }
  if (n.match(z)) {
    var c = n.current();
    return _.hasOwnProperty(c) ? "type" : h.hasOwnProperty(c) ? "atom" : d.hasOwnProperty(c) ? (v.hasOwnProperty(c) && (e.prev = "define"), "keyword") : t == "define" ? "def" : "variable";
  }
  return n.next(), null;
}
o(l, "tokenBase");
function O() {
  var n = 0;
  return function(e, t, r) {
    var i = l(e, t, r);
    if (i == "punctuation") {
      if (e.current() == "(") ++n;
      else if (e.current() == ")") {
        if (n == 0)
          return e.backUp(1), t.tokenize.pop(), t.tokenize[t.tokenize.length - 1](e, t);
        --n;
      }
    }
    return i;
  };
}
o(O, "tokenUntilClosingParen");
function m(n, e, t) {
  for (var r = n.length == 1, i, u = !1; i = e.peek(); )
    if (u) {
      if (e.next(), i == "(")
        return t.tokenize.push(O()), "string";
      u = !1;
    } else {
      if (e.match(n))
        return t.tokenize.pop(), "string";
      e.next(), u = i == "\\";
    }
  return r && t.tokenize.pop(), "string";
}
o(m, "tokenString");
function f(n, e) {
  for (var t; t = n.next(); )
    if (t === "/" && n.eat("*"))
      e.tokenize.push(f);
    else if (t === "*" && n.eat("/")) {
      e.tokenize.pop();
      break;
    }
  return "comment";
}
o(f, "tokenComment");
function S(n, e, t) {
  this.prev = n, this.align = e, this.indented = t;
}
o(S, "Context");
function C(n, e) {
  var t = e.match(/^\s*($|\/[\/\*]|[)}\]])/, !1) ? null : e.column() + 1;
  n.context = new S(n.context, t, n.indented);
}
o(C, "pushContext");
function U(n) {
  n.context && (n.indented = n.context.indented, n.context = n.context.prev);
}
o(U, "popContext");
const $ = {
  name: "swift",
  startState: /* @__PURE__ */ o(function() {
    return {
      prev: null,
      context: null,
      indented: 0,
      tokenize: []
    };
  }, "startState"),
  token: /* @__PURE__ */ o(function(n, e) {
    var t = e.prev;
    e.prev = null;
    var r = e.tokenize[e.tokenize.length - 1] || l, i = r(n, e, t);
    if (!i || i == "comment" ? e.prev = t : e.prev || (e.prev = i), i == "punctuation") {
      var u = /[\(\[\{]|([\]\)\}])/.exec(n.current());
      u && (u[1] ? U : C)(e, n);
    }
    return i;
  }, "token"),
  indent: /* @__PURE__ */ o(function(n, e, t) {
    var r = n.context;
    if (!r) return 0;
    var i = /^[\]\}\)]/.test(e);
    return r.align != null ? r.align - (i ? 1 : 0) : r.indented + (i ? 0 : t.unit);
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*[\)\}\]]$/,
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] }
  }
};
export {
  $ as swift
};
