﻿var z = Object.defineProperty;
var f = (e, i) => z(e, "name", { value: i, configurable: !0 });
function h(e) {
  for (var i = {}, n = 0, o = e.length; n < o; ++n) i[e[n]] = !0;
  return i;
}
f(h, "wordObj");
var x = [
  "alias",
  "and",
  "BEGIN",
  "begin",
  "break",
  "case",
  "class",
  "def",
  "defined?",
  "do",
  "else",
  "elsif",
  "END",
  "end",
  "ensure",
  "false",
  "for",
  "if",
  "in",
  "module",
  "next",
  "not",
  "or",
  "redo",
  "rescue",
  "retry",
  "return",
  "self",
  "super",
  "then",
  "true",
  "undef",
  "unless",
  "until",
  "when",
  "while",
  "yield",
  "nil",
  "raise",
  "throw",
  "catch",
  "fail",
  "loop",
  "callcc",
  "caller",
  "lambda",
  "proc",
  "public",
  "protected",
  "private",
  "require",
  "load",
  "require_relative",
  "extend",
  "autoload",
  "__END__",
  "__FILE__",
  "__LINE__",
  "__dir__"
], b = h(x), _ = h([
  "def",
  "class",
  "case",
  "for",
  "while",
  "until",
  "module",
  "catch",
  "loop",
  "proc",
  "begin"
]), g = h(["end", "until"]), v = { "[": "]", "{": "}", "(": ")" }, y = { "]": "[", "}": "{", ")": "(" }, u;
function d(e, i, n) {
  return n.tokenize.push(e), e(i, n);
}
f(d, "chain");
function a(e, i) {
  if (e.sol() && e.match("=begin") && e.eol())
    return i.tokenize.push(T), "comment";
  if (e.eatSpace()) return null;
  var n = e.next(), o;
  if (n == "`" || n == "'" || n == '"')
    return d(p(n, "string", n == '"' || n == "`"), e, i);
  if (n == "/")
    return s(e) ? d(p(n, "string.special", !0), e, i) : "operator";
  if (n == "%") {
    var l = "string", r = !0;
    e.eat("s") ? l = "atom" : e.eat(/[WQ]/) ? l = "string" : e.eat(/[r]/) ? l = "string.special" : e.eat(/[wxq]/) && (l = "string", r = !1);
    var t = e.eat(/[^\w\s=]/);
    return t ? (v.propertyIsEnumerable(t) && (t = v[t]), d(p(t, l, r, !0), e, i)) : "operator";
  } else {
    if (n == "#")
      return e.skipToEnd(), "comment";
    if (n == "<" && (o = e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))
      return d(E(o[2], o[1]), e, i);
    if (n == "0")
      return e.eat("x") ? e.eatWhile(/[\da-fA-F]/) : e.eat("b") ? e.eatWhile(/[01]/) : e.eatWhile(/[0-7]/), "number";
    if (/\d/.test(n))
      return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), "number";
    if (n == "?") {
      for (; e.match(/^\\[CM]-/); )
        ;
      return e.eat("\\") ? e.eatWhile(/\w/) : e.next(), "string";
    } else {
      if (n == ":")
        return e.eat("'") ? d(p("'", "atom", !1), e, i) : e.eat('"') ? d(p('"', "atom", !0), e, i) : e.eat(/[\<\>]/) ? (e.eat(/[\<\>]/), "atom") : e.eat(/[\+\-\*\/\&\|\:\!]/) ? "atom" : e.eat(/[a-zA-Z$@_\xa1-\uffff]/) ? (e.eatWhile(/[\w$\xa1-\uffff]/), e.eat(/[\?\!\=]/), "atom") : "operator";
      if (n == "@" && e.match(/^@?[a-zA-Z_\xa1-\uffff]/))
        return e.eat("@"), e.eatWhile(/[\w\xa1-\uffff]/), "propertyName";
      if (n == "$")
        return e.eat(/[a-zA-Z_]/) ? e.eatWhile(/[\w]/) : e.eat(/\d/) ? e.eat(/\d/) : e.next(), "variableName.special";
      if (/[a-zA-Z_\xa1-\uffff]/.test(n))
        return e.eatWhile(/[\w\xa1-\uffff]/), e.eat(/[\?\!]/), e.eat(":") ? "atom" : "variable";
      if (n == "|" && (i.varList || i.lastTok == "{" || i.lastTok == "do"))
        return u = "|", null;
      if (/[\(\)\[\]{}\\;]/.test(n))
        return u = n, null;
      if (n == "-" && e.eat(">"))
        return "operator";
      if (/[=+\-\/*:\.^%<>~|]/.test(n)) {
        var c = e.eatWhile(/[=+\-\/*:\.^%<>~|]/);
        return n == "." && !c && (u = "."), "operator";
      } else
        return null;
    }
  }
}
f(a, "tokenBase");
function s(e) {
  for (var i = e.pos, n = 0, o, l = !1, r = !1; (o = e.next()) != null; )
    if (r)
      r = !1;
    else {
      if ("[{(".indexOf(o) > -1)
        n++;
      else if ("]})".indexOf(o) > -1) {
        if (n--, n < 0) break;
      } else if (o == "/" && n == 0) {
        l = !0;
        break;
      }
      r = o == "\\";
    }
  return e.backUp(e.pos - i), l;
}
f(s, "regexpAhead");
function k(e) {
  return e || (e = 1), function(i, n) {
    if (i.peek() == "}") {
      if (e == 1)
        return n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](i, n);
      n.tokenize[n.tokenize.length - 1] = k(e - 1);
    } else i.peek() == "{" && (n.tokenize[n.tokenize.length - 1] = k(e + 1));
    return a(i, n);
  };
}
f(k, "tokenBaseUntilBrace");
function w() {
  var e = !1;
  return function(i, n) {
    return e ? (n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](i, n)) : (e = !0, a(i, n));
  };
}
f(w, "tokenBaseOnce");
function p(e, i, n, o) {
  return function(l, r) {
    var t = !1, c;
    for (r.context.type === "read-quoted-paused" && (r.context = r.context.prev, l.eat("}")); (c = l.next()) != null; ) {
      if (c == e && (o || !t)) {
        r.tokenize.pop();
        break;
      }
      if (n && c == "#" && !t) {
        if (l.eat("{")) {
          e == "}" && (r.context = { prev: r.context, type: "read-quoted-paused" }), r.tokenize.push(k());
          break;
        } else if (/[@\$]/.test(l.peek())) {
          r.tokenize.push(w());
          break;
        }
      }
      t = !t && c == "\\";
    }
    return i;
  };
}
f(p, "readQuoted");
function E(e, i) {
  return function(n, o) {
    return i && n.eatSpace(), n.match(e) ? o.tokenize.pop() : n.skipToEnd(), "string";
  };
}
f(E, "readHereDoc");
function T(e, i) {
  return e.sol() && e.match("=end") && e.eol() && i.tokenize.pop(), e.skipToEnd(), "comment";
}
f(T, "readBlockComment");
const L = {
  name: "ruby",
  startState: /* @__PURE__ */ f(function(e) {
    return {
      tokenize: [a],
      indented: 0,
      context: { type: "top", indented: -e },
      continuedLine: !1,
      lastTok: null,
      varList: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ f(function(e, i) {
    u = null, e.sol() && (i.indented = e.indentation());
    var n = i.tokenize[i.tokenize.length - 1](e, i), o, l = u;
    if (n == "variable") {
      var r = e.current();
      n = i.lastTok == "." ? "property" : b.propertyIsEnumerable(e.current()) ? "keyword" : /^[A-Z]/.test(r) ? "tag" : i.lastTok == "def" || i.lastTok == "class" || i.varList ? "def" : "variable", n == "keyword" && (l = r, _.propertyIsEnumerable(r) ? o = "indent" : g.propertyIsEnumerable(r) ? o = "dedent" : ((r == "if" || r == "unless") && e.column() == e.indentation() || r == "do" && i.context.indented < i.indented) && (o = "indent"));
    }
    return (u || n && n != "comment") && (i.lastTok = l), u == "|" && (i.varList = !i.varList), o == "indent" || /[\(\[\{]/.test(u) ? i.context = { prev: i.context, type: u || n, indented: i.indented } : (o == "dedent" || /[\)\]\}]/.test(u)) && i.context.prev && (i.context = i.context.prev), e.eol() && (i.continuedLine = u == "\\" || n == "operator"), n;
  }, "token"),
  indent: /* @__PURE__ */ f(function(e, i, n) {
    if (e.tokenize[e.tokenize.length - 1] != a) return null;
    var o = i && i.charAt(0), l = e.context, r = l.type == y[o] || l.type == "keyword" && /^(?:end|until|else|elsif|when|rescue)\b/.test(i);
    return l.indented + (r ? 0 : n.unit) + (e.continuedLine ? n.unit : 0);
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*(?:end|rescue|elsif|else|\})$/,
    commentTokens: { line: "#" },
    autocomplete: x
  }
};
export {
  L as ruby
};
