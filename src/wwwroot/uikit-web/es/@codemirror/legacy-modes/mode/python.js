﻿var U = Object.defineProperty;
var t = (r, p) => U(r, "name", { value: p, configurable: !0 });
function x(r) {
  return new RegExp("^((" + r.join(")|(") + "))\\b");
}
t(x, "wordRegexp");
var Z = x(["and", "or", "not", "is"]), F = [
  "as",
  "assert",
  "break",
  "class",
  "continue",
  "def",
  "del",
  "elif",
  "else",
  "except",
  "finally",
  "for",
  "from",
  "global",
  "if",
  "import",
  "lambda",
  "pass",
  "raise",
  "return",
  "try",
  "while",
  "with",
  "yield",
  "in",
  "False",
  "True"
], A = [
  "abs",
  "all",
  "any",
  "bin",
  "bool",
  "bytearray",
  "callable",
  "chr",
  "classmethod",
  "compile",
  "complex",
  "delattr",
  "dict",
  "dir",
  "divmod",
  "enumerate",
  "eval",
  "filter",
  "float",
  "format",
  "frozenset",
  "getattr",
  "globals",
  "hasattr",
  "hash",
  "help",
  "hex",
  "id",
  "input",
  "int",
  "isinstance",
  "issubclass",
  "iter",
  "len",
  "list",
  "locals",
  "map",
  "max",
  "memoryview",
  "min",
  "next",
  "object",
  "oct",
  "open",
  "ord",
  "pow",
  "property",
  "range",
  "repr",
  "reversed",
  "round",
  "set",
  "setattr",
  "slice",
  "sorted",
  "staticmethod",
  "str",
  "sum",
  "super",
  "tuple",
  "type",
  "vars",
  "zip",
  "__import__",
  "NotImplemented",
  "Ellipsis",
  "__debug__"
];
function f(r) {
  return r.scopes[r.scopes.length - 1];
}
t(f, "top");
function O(r) {
  for (var p = "error", I = r.delimiters || r.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/, g = [
    r.singleOperators,
    r.doubleOperators,
    r.doubleDelimiters,
    r.tripleDelimiters,
    r.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/
  ], y = 0; y < g.length; y++) g[y] || g.splice(y--, 1);
  var v = r.hangingIndent, a = F, h = A;
  r.extra_keywords != null && (a = a.concat(r.extra_keywords)), r.extra_builtins != null && (h = h.concat(r.extra_builtins));
  var w = !(r.version && Number(r.version) < 3);
  if (w) {
    var b = r.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
    a = a.concat(["nonlocal", "None", "aiter", "anext", "async", "await", "breakpoint", "match", "case"]), h = h.concat(["ascii", "bytes", "exec", "print"]);
    var z = new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`, "i");
  } else {
    var b = r.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
    a = a.concat(["exec", "print"]), h = h.concat([
      "apply",
      "basestring",
      "buffer",
      "cmp",
      "coerce",
      "execfile",
      "file",
      "intern",
      "long",
      "raw_input",
      "reduce",
      "reload",
      "unichr",
      "unicode",
      "xrange",
      "None"
    ]);
    var z = new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`, "i");
  }
  var L = x(a), R = x(h);
  function S(n, e) {
    var o = n.sol() && e.lastToken != "\\";
    if (o && (e.indent = n.indentation()), o && f(e).type == "py") {
      var i = f(e).offset;
      if (n.eatSpace()) {
        var l = n.indentation();
        return l > i ? _(n, e) : l < i && T(n, e) && n.peek() != "#" && (e.errorToken = !0), null;
      } else {
        var c = s(n, e);
        return i > 0 && T(n, e) && (c += " " + p), c;
      }
    }
    return s(n, e);
  }
  t(S, "tokenBase");
  function s(n, e, o) {
    if (n.eatSpace()) return null;
    if (!o && n.match(/^#.*/)) return "comment";
    if (n.match(/^[0-9\.]/, !1)) {
      var i = !1;
      if (n.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (i = !0), n.match(/^[\d_]+\.\d*/) && (i = !0), n.match(/^\.\d+/) && (i = !0), i)
        return n.eat(/J/i), "number";
      var l = !1;
      if (n.match(/^0x[0-9a-f_]+/i) && (l = !0), n.match(/^0b[01_]+/i) && (l = !0), n.match(/^0o[0-7_]+/i) && (l = !0), n.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (n.eat(/J/i), l = !0), n.match(/^0(?![\dx])/i) && (l = !0), l)
        return n.eat(/L/i), "number";
    }
    if (n.match(z)) {
      var c = n.current().toLowerCase().indexOf("f") !== -1;
      return c ? (e.tokenize = B(n.current(), e.tokenize), e.tokenize(n, e)) : (e.tokenize = m(n.current(), e.tokenize), e.tokenize(n, e));
    }
    for (var u = 0; u < g.length; u++)
      if (n.match(g[u])) return "operator";
    return n.match(I) ? "punctuation" : e.lastToken == "." && n.match(b) ? "property" : n.match(L) || n.match(Z) ? "keyword" : n.match(R) ? "builtin" : n.match(/^(self|cls)\b/) ? "self" : n.match(b) ? e.lastToken == "def" || e.lastToken == "class" ? "def" : "variable" : (n.next(), o ? null : p);
  }
  t(s, "tokenBaseInner");
  function B(n, e) {
    for (; "rubf".indexOf(n.charAt(0).toLowerCase()) >= 0; )
      n = n.substr(1);
    var o = n.length == 1, i = "string";
    function l(u) {
      return function(d, k) {
        var E = s(d, k, !0);
        return E == "punctuation" && (d.current() == "{" ? k.tokenize = l(u + 1) : d.current() == "}" && (u > 1 ? k.tokenize = l(u - 1) : k.tokenize = c)), E;
      };
    }
    t(l, "tokenNestedExpr");
    function c(u, d) {
      for (; !u.eol(); )
        if (u.eatWhile(/[^'"\{\}\\]/), u.eat("\\")) {
          if (u.next(), o && u.eol())
            return i;
        } else {
          if (u.match(n))
            return d.tokenize = e, i;
          if (u.match("{{"))
            return i;
          if (u.match("{", !1))
            return d.tokenize = l(0), u.current() ? i : d.tokenize(u, d);
          if (u.match("}}"))
            return i;
          if (u.match("}"))
            return p;
          u.eat(/['"]/);
        }
      if (o) {
        if (r.singleLineStringErrors)
          return p;
        d.tokenize = e;
      }
      return i;
    }
    return t(c, "tokenString"), c.isString = !0, c;
  }
  t(B, "formatStringFactory");
  function m(n, e) {
    for (; "rubf".indexOf(n.charAt(0).toLowerCase()) >= 0; )
      n = n.substr(1);
    var o = n.length == 1, i = "string";
    function l(c, u) {
      for (; !c.eol(); )
        if (c.eatWhile(/[^'"\\]/), c.eat("\\")) {
          if (c.next(), o && c.eol())
            return i;
        } else {
          if (c.match(n))
            return u.tokenize = e, i;
          c.eat(/['"]/);
        }
      if (o) {
        if (r.singleLineStringErrors)
          return p;
        u.tokenize = e;
      }
      return i;
    }
    return t(l, "tokenString"), l.isString = !0, l;
  }
  t(m, "tokenStringFactory");
  function _(n, e) {
    for (; f(e).type != "py"; ) e.scopes.pop();
    e.scopes.push({
      offset: f(e).offset + n.indentUnit,
      type: "py",
      align: null
    });
  }
  t(_, "pushPyScope");
  function D(n, e, o) {
    var i = n.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : n.column() + 1;
    e.scopes.push({
      offset: e.indent + (v || n.indentUnit),
      type: o,
      align: i
    });
  }
  t(D, "pushBracketScope");
  function T(n, e) {
    for (var o = n.indentation(); e.scopes.length > 1 && f(e).offset > o; ) {
      if (f(e).type != "py") return !0;
      e.scopes.pop();
    }
    return f(e).offset != o;
  }
  t(T, "dedent");
  function N(n, e) {
    n.sol() && (e.beginningOfLine = !0, e.dedent = !1);
    var o = e.tokenize(n, e), i = n.current();
    if (e.beginningOfLine && i == "@")
      return n.match(b, !1) ? "meta" : w ? "operator" : p;
    if (/\S/.test(i) && (e.beginningOfLine = !1), (o == "variable" || o == "builtin") && e.lastToken == "meta" && (o = "meta"), (i == "pass" || i == "return") && (e.dedent = !0), i == "lambda" && (e.lambda = !0), i == ":" && !e.lambda && f(e).type == "py" && n.match(/^\s*(?:#|$)/, !1) && _(n, e), i.length == 1 && !/string|comment/.test(o)) {
      var l = "[({".indexOf(i);
      if (l != -1 && D(n, e, "])}".slice(l, l + 1)), l = "])}".indexOf(i), l != -1)
        if (f(e).type == i) e.indent = e.scopes.pop().offset - (v || n.indentUnit);
        else return p;
    }
    return e.dedent && n.eol() && f(e).type == "py" && e.scopes.length > 1 && e.scopes.pop(), o;
  }
  return t(N, "tokenLexer"), {
    name: "python",
    startState: /* @__PURE__ */ t(function() {
      return {
        tokenize: S,
        scopes: [{ offset: 0, type: "py", align: null }],
        indent: 0,
        lastToken: null,
        lambda: !1,
        dedent: 0
      };
    }, "startState"),
    token: /* @__PURE__ */ t(function(n, e) {
      var o = e.errorToken;
      o && (e.errorToken = !1);
      var i = N(n, e);
      return i && i != "comment" && (e.lastToken = i == "keyword" || i == "punctuation" ? n.current() : i), i == "punctuation" && (i = null), n.eol() && e.lambda && (e.lambda = !1), o ? p : i;
    }, "token"),
    indent: /* @__PURE__ */ t(function(n, e, o) {
      if (n.tokenize != S)
        return n.tokenize.isString ? null : 0;
      var i = f(n), l = i.type == e.charAt(0) || i.type == "py" && !n.dedent && /^(else:|elif |except |finally:)/.test(e);
      return i.align != null ? i.align - (l ? 1 : 0) : i.offset - (l ? v || o.unit : 0);
    }, "indent"),
    languageData: {
      autocomplete: F.concat(A).concat(["exec", "print"]),
      indentOnInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
      commentTokens: { line: "#" },
      closeBrackets: { brackets: ["(", "[", "{", "'", '"', "'''", '"""'] }
    }
  };
}
t(O, "mkPython");
var P = /* @__PURE__ */ t(function(r) {
  return r.split(" ");
}, "words");
const j = O({}), J = O({
  extra_keywords: P("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")
});
export {
  J as cython,
  O as mkPython,
  j as python
};
