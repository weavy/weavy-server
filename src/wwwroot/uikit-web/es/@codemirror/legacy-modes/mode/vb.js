﻿var k = Object.defineProperty;
var o = (e, n) => k(e, "name", { value: n, configurable: !0 });
var l = "error";
function c(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b", "i");
}
o(c, "wordRegexp");
var x = new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"), m = new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"), I = new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"), R = new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"), O = new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"), z = new RegExp("^[_A-Za-z][_A-Za-z0-9]*"), f = ["class", "module", "sub", "enum", "select", "while", "if", "function", "get", "set", "property", "try", "structure", "synclock", "using", "with"], h = ["else", "elseif", "case", "catch", "finally"], s = ["next", "loop"], v = ["and", "andalso", "or", "orelse", "xor", "in", "not", "is", "isnot", "like"], E = c(v), p = ["#const", "#else", "#elseif", "#end", "#if", "#region", "addhandler", "addressof", "alias", "as", "byref", "byval", "cbool", "cbyte", "cchar", "cdate", "cdbl", "cdec", "cint", "clng", "cobj", "compare", "const", "continue", "csbyte", "cshort", "csng", "cstr", "cuint", "culng", "cushort", "declare", "default", "delegate", "dim", "directcast", "each", "erase", "error", "event", "exit", "explicit", "false", "for", "friend", "gettype", "goto", "handles", "implements", "imports", "infer", "inherits", "interface", "isfalse", "istrue", "lib", "me", "mod", "mustinherit", "mustoverride", "my", "mybase", "myclass", "namespace", "narrowing", "new", "nothing", "notinheritable", "notoverridable", "of", "off", "on", "operator", "option", "optional", "out", "overloads", "overridable", "overrides", "paramarray", "partial", "private", "protected", "public", "raiseevent", "readonly", "redim", "removehandler", "resume", "return", "shadows", "shared", "static", "step", "stop", "strict", "then", "throw", "to", "true", "trycast", "typeof", "until", "until", "when", "widening", "withevents", "writeonly"], g = ["object", "boolean", "char", "string", "byte", "sbyte", "short", "ushort", "int16", "uint16", "integer", "uinteger", "int32", "uint32", "long", "ulong", "int64", "uint64", "decimal", "single", "double", "float", "date", "datetime", "intptr", "uintptr"], C = c(p), S = c(g), T = '"', F = c(f), y = c(h), w = c(s), b = c(["end"]), K = c(["do"]);
function d(e, n) {
  n.currentIndent++;
}
o(d, "indent");
function u(e, n) {
  n.currentIndent--;
}
o(u, "dedent");
function a(e, n) {
  if (e.eatSpace())
    return null;
  var i = e.peek();
  if (i === "'")
    return e.skipToEnd(), "comment";
  if (e.match(/^((&H)|(&O))?[0-9\.a-f]/i, !1)) {
    var r = !1;
    if ((e.match(/^\d*\.\d+F?/i) || e.match(/^\d+\.\d*F?/) || e.match(/^\.\d+F?/)) && (r = !0), r)
      return e.eat(/J/i), "number";
    var t = !1;
    if (e.match(/^&H[0-9a-f]+/i) || e.match(/^&O[0-7]+/i) ? t = !0 : e.match(/^[1-9]\d*F?/) ? (e.eat(/J/i), t = !0) : e.match(/^0(?![\dx])/i) && (t = !0), t)
      return e.eat(/L/i), "number";
  }
  return e.match(T) ? (n.tokenize = L(e.current()), n.tokenize(e, n)) : e.match(O) || e.match(R) ? null : e.match(I) || e.match(x) || e.match(E) ? "operator" : e.match(m) ? null : e.match(K) ? (d(e, n), n.doInCurrentLine = !0, "keyword") : e.match(F) ? (n.doInCurrentLine ? n.doInCurrentLine = !1 : d(e, n), "keyword") : e.match(y) ? "keyword" : e.match(b) ? (u(e, n), u(e, n), "keyword") : e.match(w) ? (u(e, n), "keyword") : e.match(S) || e.match(C) ? "keyword" : e.match(z) ? "variable" : (e.next(), l);
}
o(a, "tokenBase");
function L(e) {
  var n = e.length == 1, i = "string";
  return function(r, t) {
    for (; !r.eol(); ) {
      if (r.eatWhile(/[^'"]/), r.match(e))
        return t.tokenize = a, i;
      r.eat(/['"]/);
    }
    return n && (t.tokenize = a), i;
  };
}
o(L, "tokenStringFactory");
function _(e, n) {
  var i = n.tokenize(e, n), r = e.current();
  if (r === ".")
    return i = n.tokenize(e, n), i === "variable" ? "variable" : l;
  var t = "[({".indexOf(r);
  return t !== -1 && d(e, n), t = "])}".indexOf(r), t !== -1 && u(e, n) ? l : i;
}
o(_, "tokenLexer");
const D = {
  name: "vb",
  startState: /* @__PURE__ */ o(function() {
    return {
      tokenize: a,
      lastToken: null,
      currentIndent: 0,
      nextLineIndent: 0,
      doInCurrentLine: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ o(function(e, n) {
    e.sol() && (n.currentIndent += n.nextLineIndent, n.nextLineIndent = 0, n.doInCurrentLine = 0);
    var i = _(e, n);
    return n.lastToken = { style: i, content: e.current() }, i;
  }, "token"),
  indent: /* @__PURE__ */ o(function(e, n, i) {
    var r = n.replace(/^\s+|\s+$/g, "");
    return r.match(w) || r.match(b) || r.match(y) ? i.unit * (e.currentIndent - 1) : e.currentIndent < 0 ? 0 : e.currentIndent * i.unit;
  }, "indent"),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", '"'] },
    commentTokens: { line: "'" },
    autocomplete: f.concat(h).concat(s).concat(v).concat(p).concat(g)
  }
};
export {
  D as vb
};
