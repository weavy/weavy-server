﻿var x = Object.defineProperty;
var o = (e, n) => x(e, "name", { value: n, configurable: !0 });
var z = [
  "-type",
  "-spec",
  "-export_type",
  "-opaque"
], E = [
  "after",
  "begin",
  "catch",
  "case",
  "cond",
  "end",
  "fun",
  "if",
  "let",
  "of",
  "query",
  "receive",
  "try",
  "when"
], T = /[\->,;]/, R = [
  "->",
  ";",
  ","
], A = [
  "and",
  "andalso",
  "band",
  "bnot",
  "bor",
  "bsl",
  "bsr",
  "bxor",
  "div",
  "not",
  "or",
  "orelse",
  "rem",
  "xor"
], U = /[\+\-\*\/<>=\|:!]/, Z = [
  "=",
  "+",
  "-",
  "*",
  "/",
  ">",
  ">=",
  "<",
  "=<",
  "=:=",
  "==",
  "=/=",
  "/=",
  "||",
  "<-",
  "!"
], m = /[<\(\[\{]/, g = [
  "<<",
  "(",
  "[",
  "{"
], P = /[>\)\]\}]/, w = [
  "}",
  "]",
  ")",
  ">>"
], q = [
  "is_atom",
  "is_binary",
  "is_bitstring",
  "is_boolean",
  "is_float",
  "is_function",
  "is_integer",
  "is_list",
  "is_number",
  "is_pid",
  "is_port",
  "is_record",
  "is_reference",
  "is_tuple",
  "atom",
  "binary",
  "bitstring",
  "boolean",
  "function",
  "integer",
  "list",
  "number",
  "pid",
  "port",
  "record",
  "reference",
  "tuple"
], j = [
  "abs",
  "adler32",
  "adler32_combine",
  "alive",
  "apply",
  "atom_to_binary",
  "atom_to_list",
  "binary_to_atom",
  "binary_to_existing_atom",
  "binary_to_list",
  "binary_to_term",
  "bit_size",
  "bitstring_to_list",
  "byte_size",
  "check_process_code",
  "contact_binary",
  "crc32",
  "crc32_combine",
  "date",
  "decode_packet",
  "delete_module",
  "disconnect_node",
  "element",
  "erase",
  "exit",
  "float",
  "float_to_list",
  "garbage_collect",
  "get",
  "get_keys",
  "group_leader",
  "halt",
  "hd",
  "integer_to_list",
  "internal_bif",
  "iolist_size",
  "iolist_to_binary",
  "is_alive",
  "is_atom",
  "is_binary",
  "is_bitstring",
  "is_boolean",
  "is_float",
  "is_function",
  "is_integer",
  "is_list",
  "is_number",
  "is_pid",
  "is_port",
  "is_process_alive",
  "is_record",
  "is_reference",
  "is_tuple",
  "length",
  "link",
  "list_to_atom",
  "list_to_binary",
  "list_to_bitstring",
  "list_to_existing_atom",
  "list_to_float",
  "list_to_integer",
  "list_to_pid",
  "list_to_tuple",
  "load_module",
  "make_ref",
  "module_loaded",
  "monitor_node",
  "node",
  "node_link",
  "node_unlink",
  "nodes",
  "notalive",
  "now",
  "open_port",
  "pid_to_list",
  "port_close",
  "port_command",
  "port_connect",
  "port_control",
  "pre_loaded",
  "process_flag",
  "process_info",
  "processes",
  "purge_module",
  "put",
  "register",
  "registered",
  "round",
  "self",
  "setelement",
  "size",
  "spawn",
  "spawn_link",
  "spawn_monitor",
  "spawn_opt",
  "split_binary",
  "statistics",
  "term_to_binary",
  "time",
  "throw",
  "tl",
  "trunc",
  "tuple_size",
  "tuple_to_list",
  "unlink",
  "unregister",
  "whereis"
], d = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/, Q = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
function D(e, n) {
  if (n.in_string)
    return n.in_string = !h(e), t(n, e, "string");
  if (n.in_atom)
    return n.in_atom = !y(e), t(n, e, "atom");
  if (e.eatSpace())
    return t(n, e, "whitespace");
  if (!p(n) && e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))
    return l(e.current(), z) ? t(n, e, "type") : t(n, e, "attribute");
  var r = e.next();
  if (r == "%")
    return e.skipToEnd(), t(n, e, "comment");
  if (r == ":")
    return t(n, e, "colon");
  if (r == "?")
    return e.eatSpace(), e.eatWhile(d), t(n, e, "macro");
  if (r == "#")
    return e.eatSpace(), e.eatWhile(d), t(n, e, "record");
  if (r == "$")
    return e.next() == "\\" && !e.match(Q) ? t(n, e, "error") : t(n, e, "number");
  if (r == ".")
    return t(n, e, "dot");
  if (r == "'") {
    if (!(n.in_atom = !y(e))) {
      if (e.match(/\s*\/\s*[0-9]/, !1))
        return e.match(/\s*\/\s*[0-9]/, !0), t(n, e, "fun");
      if (e.match(/\s*\(/, !1) || e.match(/\s*:/, !1))
        return t(n, e, "function");
    }
    return t(n, e, "atom");
  }
  if (r == '"')
    return n.in_string = !h(e), t(n, e, "string");
  if (/[A-Z_Ø-ÞÀ-Ö]/.test(r))
    return e.eatWhile(d), t(n, e, "variable");
  if (/[a-z_ß-öø-ÿ]/.test(r)) {
    if (e.eatWhile(d), e.match(/\s*\/\s*[0-9]/, !1))
      return e.match(/\s*\/\s*[0-9]/, !0), t(n, e, "fun");
    var i = e.current();
    return l(i, E) ? t(n, e, "keyword") : l(i, A) ? t(n, e, "operator") : e.match(/\s*\(/, !1) ? l(i, j) && (p(n).token != ":" || p(n, 2).token == "erlang") ? t(n, e, "builtin") : l(i, q) ? t(n, e, "guard") : t(n, e, "function") : I(e) == ":" ? i == "erlang" ? t(n, e, "builtin") : t(n, e, "function") : l(i, ["true", "false"]) ? t(n, e, "boolean") : t(n, e, "atom");
  }
  var c = /[0-9]/, u = /[0-9a-zA-Z]/;
  return c.test(r) ? (e.eatWhile(c), e.eat("#") ? e.eatWhile(u) || e.backUp(1) : e.eat(".") && (e.eatWhile(c) ? e.eat(/[eE]/) && (e.eat(/[-+]/) ? e.eatWhile(c) || e.backUp(2) : e.eatWhile(c) || e.backUp(1)) : e.backUp(1)), t(n, e, "number")) : k(e, m, g) ? t(n, e, "open_paren") : k(e, P, w) ? t(n, e, "close_paren") : v(e, T, R) ? t(n, e, "separator") : v(e, U, Z) ? t(n, e, "operator") : t(n, e, null);
}
o(D, "tokenizer");
function k(e, n, r) {
  if (e.current().length == 1 && n.test(e.current())) {
    for (e.backUp(1); n.test(e.peek()); )
      if (e.next(), l(e.current(), r))
        return !0;
    e.backUp(e.current().length - 1);
  }
  return !1;
}
o(k, "nongreedy");
function v(e, n, r) {
  if (e.current().length == 1 && n.test(e.current())) {
    for (; n.test(e.peek()); )
      e.next();
    for (; 0 < e.current().length; ) {
      if (l(e.current(), r))
        return !0;
      e.backUp(1);
    }
    e.next();
  }
  return !1;
}
o(v, "greedy");
function h(e) {
  return W(e, '"', "\\");
}
o(h, "doubleQuote");
function y(e) {
  return W(e, "'", "\\");
}
o(y, "singleQuote");
function W(e, n, r) {
  for (; !e.eol(); ) {
    var i = e.next();
    if (i == n)
      return !0;
    i == r && e.next();
  }
  return !1;
}
o(W, "quote");
function I(e) {
  var n = e.match(/^\s*([^\s%])/, !1);
  return n ? n[1] : "";
}
o(I, "lookahead");
function l(e, n) {
  return -1 < n.indexOf(e);
}
o(l, "is_member");
function t(e, n, r) {
  switch ($(e, N(r, n)), r) {
    case "atom":
      return "atom";
    case "attribute":
      return "attribute";
    case "boolean":
      return "atom";
    case "builtin":
      return "builtin";
    case "close_paren":
      return null;
    case "colon":
      return null;
    case "comment":
      return "comment";
    case "dot":
      return null;
    case "error":
      return "error";
    case "fun":
      return "meta";
    case "function":
      return "tag";
    case "guard":
      return "property";
    case "keyword":
      return "keyword";
    case "macro":
      return "macroName";
    case "number":
      return "number";
    case "open_paren":
      return null;
    case "operator":
      return "operator";
    case "record":
      return "bracket";
    case "separator":
      return null;
    case "string":
      return "string";
    case "type":
      return "def";
    case "variable":
      return "variable";
    default:
      return null;
  }
}
o(t, "rval");
function S(e, n, r, i) {
  return {
    token: e,
    column: n,
    indent: r,
    type: i
  };
}
o(S, "aToken");
function N(e, n) {
  return S(
    n.current(),
    n.column(),
    n.indentation(),
    e
  );
}
o(N, "realToken");
function O(e) {
  return S(e, 0, 0, e);
}
o(O, "fakeToken");
function p(e, n) {
  var r = e.tokenStack.length, i = n || 1;
  return r < i ? !1 : e.tokenStack[r - i];
}
o(p, "peekToken");
function $(e, n) {
  n.type == "comment" || n.type == "whitespace" || (e.tokenStack = B(e.tokenStack, n), e.tokenStack = C(e.tokenStack));
}
o($, "pushToken");
function B(e, n) {
  var r = e.length - 1;
  return 0 < r && e[r].type === "record" && n.type === "dot" ? e.pop() : (0 < r && e[r].type === "group" && e.pop(), e.push(n)), e;
}
o(B, "maybe_drop_pre");
function C(e) {
  if (!e.length) return e;
  var n = e.length - 1;
  if (e[n].type === "dot")
    return [];
  if (n > 1 && e[n].type === "fun" && e[n - 1].token === "fun")
    return e.slice(0, n - 1);
  switch (e[n].token) {
    case "}":
      return f(e, { g: ["{"] });
    case "]":
      return f(e, { i: ["["] });
    case ")":
      return f(e, { i: ["("] });
    case ">>":
      return f(e, { i: ["<<"] });
    case "end":
      return f(e, { i: ["begin", "case", "fun", "if", "receive", "try"] });
    case ",":
      return f(e, { e: [
        "begin",
        "try",
        "when",
        "->",
        ",",
        "(",
        "[",
        "{",
        "<<"
      ] });
    case "->":
      return f(e, {
        r: ["when"],
        m: ["try", "if", "case", "receive"]
      });
    case ";":
      return f(e, { E: ["case", "fun", "if", "receive", "try", "when"] });
    case "catch":
      return f(e, { e: ["try"] });
    case "of":
      return f(e, { e: ["case"] });
    case "after":
      return f(e, { e: ["receive", "try"] });
    default:
      return e;
  }
}
o(C, "maybe_drop_post");
function f(e, n) {
  for (var r in n)
    for (var i = e.length - 1, c = n[r], u = i - 1; -1 < u; u--)
      if (l(e[u].token, c)) {
        var a = e.slice(0, u);
        switch (r) {
          case "m":
            return a.concat(e[u]).concat(e[i]);
          case "r":
            return a.concat(e[i]);
          case "i":
            return a;
          case "g":
            return a.concat(O("group"));
          case "E":
            return a.concat(e[u]);
          case "e":
            return a.concat(e[u]);
        }
      }
  return r == "E" ? [] : e;
}
o(f, "d");
function F(e, n, r) {
  var i, c = G(n), u = p(e, 1), a = p(e, 2);
  return e.in_string || e.in_atom ? null : a ? u.token == "when" ? u.column + r.unit : c === "when" && a.type === "function" ? a.indent + r.unit : c === "(" && u.token === "fun" ? u.column + 3 : c === "catch" && (i = b(e, ["try"])) ? i.column : l(c, ["end", "after", "of"]) ? (i = b(e, ["begin", "case", "fun", "if", "receive", "try"]), i ? i.column : null) : l(c, w) ? (i = b(e, g), i ? i.column : null) : l(u.token, [",", "|", "||"]) || l(c, [",", "|", "||"]) ? (i = H(e), i ? i.column + i.token.length : r.unit) : u.token == "->" ? l(a.token, ["receive", "case", "if", "try"]) ? a.column + r.unit + r.unit : a.column + r.unit : l(u.token, g) ? u.column + u.token.length : (i = J(e), _(i) ? i.column + r.unit : 0) : 0;
}
o(F, "indenter");
function G(e) {
  var n = e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);
  return _(n) && n.index === 0 ? n[0] : "";
}
o(G, "wordafter");
function H(e) {
  var n = e.tokenStack.slice(0, -1), r = s(n, "type", ["open_paren"]);
  return _(n[r]) ? n[r] : !1;
}
o(H, "postcommaToken");
function J(e) {
  var n = e.tokenStack, r = s(n, "type", ["open_paren", "separator", "keyword"]), i = s(n, "type", ["operator"]);
  return _(r) && _(i) && r < i ? n[r + 1] : _(r) ? n[r] : !1;
}
o(J, "defaultToken");
function b(e, n) {
  var r = e.tokenStack, i = s(r, "token", n);
  return _(r[i]) ? r[i] : !1;
}
o(b, "getToken");
function s(e, n, r) {
  for (var i = e.length - 1; -1 < i; i--)
    if (l(e[i][n], r))
      return i;
  return !1;
}
o(s, "getTokenIndex");
function _(e) {
  return e !== !1 && e != null;
}
o(_, "truthy");
const L = {
  name: "erlang",
  startState() {
    return {
      tokenStack: [],
      in_string: !1,
      in_atom: !1
    };
  },
  token: D,
  indent: F,
  languageData: {
    commentTokens: { line: "%" }
  }
};
export {
  L as erlang
};
