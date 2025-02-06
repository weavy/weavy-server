﻿var g = Object.defineProperty;
var o = (n, e) => g(n, "name", { value: e, configurable: !0 });
var s = {};
function k(n, e) {
  for (var i = 0; i < e.length; i++)
    s[e[i]] = n;
}
o(k, "define");
var h = ["true", "false"], p = [
  "if",
  "then",
  "do",
  "else",
  "elif",
  "while",
  "until",
  "for",
  "in",
  "esac",
  "fi",
  "fin",
  "fil",
  "done",
  "exit",
  "set",
  "unset",
  "export",
  "function"
], a = [
  "ab",
  "awk",
  "bash",
  "beep",
  "cat",
  "cc",
  "cd",
  "chown",
  "chmod",
  "chroot",
  "clear",
  "cp",
  "curl",
  "cut",
  "diff",
  "echo",
  "find",
  "gawk",
  "gcc",
  "get",
  "git",
  "grep",
  "hg",
  "kill",
  "killall",
  "ln",
  "ls",
  "make",
  "mkdir",
  "openssl",
  "mv",
  "nc",
  "nl",
  "node",
  "npm",
  "ping",
  "ps",
  "restart",
  "rm",
  "rmdir",
  "sed",
  "service",
  "sh",
  "shopt",
  "shred",
  "source",
  "sort",
  "sleep",
  "ssh",
  "start",
  "stop",
  "su",
  "sudo",
  "svn",
  "tee",
  "telnet",
  "top",
  "touch",
  "vi",
  "vim",
  "wall",
  "wc",
  "wget",
  "who",
  "write",
  "yes",
  "zsh"
];
k("atom", h);
k("keyword", p);
k("builtin", a);
function w(n, e) {
  if (n.eatSpace()) return null;
  var i = n.sol(), t = n.next();
  if (t === "\\")
    return n.next(), null;
  if (t === "'" || t === '"' || t === "`")
    return e.tokens.unshift(c(t, t === "`" ? "quote" : "string")), l(n, e);
  if (t === "#")
    return i && n.eat("!") ? (n.skipToEnd(), "meta") : (n.skipToEnd(), "comment");
  if (t === "$")
    return e.tokens.unshift(d), l(n, e);
  if (t === "+" || t === "=")
    return "operator";
  if (t === "-")
    return n.eat("-"), n.eatWhile(/\w/), "attribute";
  if (t == "<") {
    if (n.match("<<")) return "operator";
    var f = n.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);
    if (f)
      return e.tokens.unshift(b(f[1] || f[2])), "string.special";
  }
  if (/\d/.test(t) && (n.eatWhile(/\d/), n.eol() || !/\w/.test(n.peek())))
    return "number";
  n.eatWhile(/[\w-]/);
  var r = n.current();
  return n.peek() === "=" && /\w+/.test(r) ? "def" : s.hasOwnProperty(r) ? s[r] : null;
}
o(w, "tokenBase");
function c(n, e) {
  var i = n == "(" ? ")" : n == "{" ? "}" : n;
  return function(t, f) {
    for (var r, u = !1; (r = t.next()) != null; ) {
      if (r === i && !u) {
        f.tokens.shift();
        break;
      } else if (r === "$" && !u && n !== "'" && t.peek() != i) {
        u = !0, t.backUp(1), f.tokens.unshift(d);
        break;
      } else {
        if (!u && n !== i && r === n)
          return f.tokens.unshift(c(n, e)), l(t, f);
        if (!u && /['"]/.test(r) && !/['"]/.test(n)) {
          f.tokens.unshift(v(r, "string")), t.backUp(1);
          break;
        }
      }
      u = !u && r === "\\";
    }
    return e;
  };
}
o(c, "tokenString");
function v(n, e) {
  return function(i, t) {
    return t.tokens[0] = c(n, e), i.next(), l(i, t);
  };
}
o(v, "tokenStringStart");
var d = /* @__PURE__ */ o(function(n, e) {
  e.tokens.length > 1 && n.eat("$");
  var i = n.next();
  return /['"({]/.test(i) ? (e.tokens[0] = c(i, i == "(" ? "quote" : i == "{" ? "def" : "string"), l(n, e)) : (/\d/.test(i) || n.eatWhile(/\w/), e.tokens.shift(), "def");
}, "tokenDollar");
function b(n) {
  return function(e, i) {
    return e.sol() && e.string == n && i.tokens.shift(), e.skipToEnd(), "string.special";
  };
}
o(b, "tokenHeredoc");
function l(n, e) {
  return (e.tokens[0] || w)(n, e);
}
o(l, "tokenize");
const S = {
  name: "shell",
  startState: /* @__PURE__ */ o(function() {
    return { tokens: [] };
  }, "startState"),
  token: /* @__PURE__ */ o(function(n, e) {
    return l(n, e);
  }, "token"),
  languageData: {
    autocomplete: h.concat(p, a),
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
    commentTokens: { line: "#" }
  }
};
export {
  S as shell
};
