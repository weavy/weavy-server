﻿var l = Object.defineProperty;
var i = (e, t) => l(e, "name", { value: t, configurable: !0 });
var f = {}, k = {
  allTags: !0,
  closeAll: !0,
  list: !0,
  newJournal: !0,
  newTiddler: !0,
  permaview: !0,
  saveChanges: !0,
  search: !0,
  slider: !0,
  tabs: !0,
  tag: !0,
  tagging: !0,
  tags: !0,
  tiddler: !0,
  timeline: !0,
  today: !0,
  version: !0,
  option: !0,
  with: !0,
  filter: !0
}, h = /[\w_\-]/i, d = /^\-\-\-\-+$/, a = /^\/\*\*\*$/, p = /^\*\*\*\/$/, w = /^<<<$/, b = /^\/\/\{\{\{$/, v = /^\/\/\}\}\}$/, S = /^<!--\{\{\{-->$/, y = /^<!--\}\}\}-->$/, $ = /^\{\{\{$/, z = /^\}\}\}$/, C = /.*?\}\}\}/;
function u(e, t, r) {
  return t.tokenize = r, r(e, t);
}
i(u, "chain");
function o(e, t) {
  var r = e.sol(), n = e.peek();
  if (t.block = !1, r && /[<\/\*{}\-]/.test(n)) {
    if (e.match($))
      return t.block = !0, u(e, t, c);
    if (e.match(w))
      return "quote";
    if (e.match(a) || e.match(p) || e.match(b) || e.match(v) || e.match(S) || e.match(y))
      return "comment";
    if (e.match(d))
      return "contentSeparator";
  }
  if (e.next(), r && /[\/\*!#;:>|]/.test(n)) {
    if (n == "!")
      return e.skipToEnd(), "header";
    if (n == "*")
      return e.eatWhile("*"), "comment";
    if (n == "#")
      return e.eatWhile("#"), "comment";
    if (n == ";")
      return e.eatWhile(";"), "comment";
    if (n == ":")
      return e.eatWhile(":"), "comment";
    if (n == ">")
      return e.eatWhile(">"), "quote";
    if (n == "|")
      return "header";
  }
  if (n == "{" && e.match("{{"))
    return u(e, t, c);
  if (/[hf]/i.test(n) && /[ti]/i.test(e.peek()) && e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))
    return "link";
  if (n == '"')
    return "string";
  if (n == "~" || /[\[\]]/.test(n) && e.match(n))
    return "brace";
  if (n == "@")
    return e.eatWhile(h), "link";
  if (/\d/.test(n))
    return e.eatWhile(/\d/), "number";
  if (n == "/") {
    if (e.eat("%"))
      return u(e, t, W);
    if (e.eat("/"))
      return u(e, t, g);
  }
  if (n == "_" && e.eat("_"))
    return u(e, t, T);
  if (n == "-" && e.eat("-")) {
    if (e.peek() != " ")
      return u(e, t, m);
    if (e.peek() == " ")
      return "brace";
  }
  return n == "'" && e.eat("'") ? u(e, t, x) : n == "<" && e.eat("<") ? u(e, t, E) : (e.eatWhile(/[\w\$_]/), f.propertyIsEnumerable(e.current()) ? "keyword" : null);
}
i(o, "tokenBase");
function W(e, t) {
  for (var r = !1, n; n = e.next(); ) {
    if (n == "/" && r) {
      t.tokenize = o;
      break;
    }
    r = n == "%";
  }
  return "comment";
}
i(W, "twTokenComment");
function x(e, t) {
  for (var r = !1, n; n = e.next(); ) {
    if (n == "'" && r) {
      t.tokenize = o;
      break;
    }
    r = n == "'";
  }
  return "strong";
}
i(x, "twTokenStrong");
function c(e, t) {
  var r = t.block;
  return r && e.current() ? "comment" : !r && e.match(C) || r && e.sol() && e.match(z) ? (t.tokenize = o, "comment") : (e.next(), "comment");
}
i(c, "twTokenCode");
function g(e, t) {
  for (var r = !1, n; n = e.next(); ) {
    if (n == "/" && r) {
      t.tokenize = o;
      break;
    }
    r = n == "/";
  }
  return "emphasis";
}
i(g, "twTokenEm");
function T(e, t) {
  for (var r = !1, n; n = e.next(); ) {
    if (n == "_" && r) {
      t.tokenize = o;
      break;
    }
    r = n == "_";
  }
  return "link";
}
i(T, "twTokenUnderline");
function m(e, t) {
  for (var r = !1, n; n = e.next(); ) {
    if (n == "-" && r) {
      t.tokenize = o;
      break;
    }
    r = n == "-";
  }
  return "deleted";
}
i(m, "twTokenStrike");
function E(e, t) {
  if (e.current() == "<<")
    return "meta";
  var r = e.next();
  return r ? r == ">" && e.peek() == ">" ? (e.next(), t.tokenize = o, "meta") : (e.eatWhile(/[\w\$_]/), k.propertyIsEnumerable(e.current()) ? "keyword" : null) : (t.tokenize = o, null);
}
i(E, "twTokenMacro");
const B = {
  name: "tiddlywiki",
  startState: /* @__PURE__ */ i(function() {
    return { tokenize: o };
  }, "startState"),
  token: /* @__PURE__ */ i(function(e, t) {
    if (e.eatSpace()) return null;
    var r = t.tokenize(e, t);
    return r;
  }, "token")
};
export {
  B as tiddlyWiki
};
