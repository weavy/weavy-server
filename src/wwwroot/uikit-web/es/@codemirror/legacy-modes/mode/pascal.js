﻿var s = Object.defineProperty;
var i = (r, n) => s(r, "name", { value: n, configurable: !0 });
function f(r) {
  for (var n = {}, e = r.split(" "), t = 0; t < e.length; ++t) n[e[t]] = !0;
  return n;
}
i(f, "words");
var d = f(
  "absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"
), p = { null: !0 }, l = /[+\-*&%=<>!?|\/]/;
function k(r, n) {
  var e = r.next();
  if (e == "#" && n.startOfLine)
    return r.skipToEnd(), "meta";
  if (e == '"' || e == "'")
    return n.tokenize = m(e), n.tokenize(r, n);
  if (e == "(" && r.eat("*"))
    return n.tokenize = u, u(r, n);
  if (e == "{")
    return n.tokenize = c, c(r, n);
  if (/[\[\]\(\),;\:\.]/.test(e))
    return null;
  if (/\d/.test(e))
    return r.eatWhile(/[\w\.]/), "number";
  if (e == "/" && r.eat("/"))
    return r.skipToEnd(), "comment";
  if (l.test(e))
    return r.eatWhile(l), "operator";
  r.eatWhile(/[\w\$_]/);
  var t = r.current();
  return d.propertyIsEnumerable(t) ? "keyword" : p.propertyIsEnumerable(t) ? "atom" : "variable";
}
i(k, "tokenBase");
function m(r) {
  return function(n, e) {
    for (var t = !1, o, a = !1; (o = n.next()) != null; ) {
      if (o == r && !t) {
        a = !0;
        break;
      }
      t = !t && o == "\\";
    }
    return (a || !t) && (e.tokenize = null), "string";
  };
}
i(m, "tokenString");
function u(r, n) {
  for (var e = !1, t; t = r.next(); ) {
    if (t == ")" && e) {
      n.tokenize = null;
      break;
    }
    e = t == "*";
  }
  return "comment";
}
i(u, "tokenComment");
function c(r, n) {
  for (var e; e = r.next(); )
    if (e == "}") {
      n.tokenize = null;
      break;
    }
  return "comment";
}
i(c, "tokenCommentBraces");
const h = {
  name: "pascal",
  startState: /* @__PURE__ */ i(function() {
    return { tokenize: null };
  }, "startState"),
  token: /* @__PURE__ */ i(function(r, n) {
    if (r.eatSpace()) return null;
    var e = (n.tokenize || k)(r, n);
    return e == "comment" || e == "meta", e;
  }, "token"),
  languageData: {
    indentOnInput: /^\s*[{}]$/,
    commentTokens: { block: { open: "(*", close: "*)" } }
  }
};
export {
  h as pascal
};
