﻿var $ = Object.defineProperty;
var o = (e, n) => $(e, "name", { value: n, configurable: !0 });
function i(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b", "i");
}
o(i, "wordRegexp");
var t = new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"), c = new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"), l = new RegExp("^[\\.,:]"), a = new RegExp("[()]"), d = new RegExp("^[%A-Za-z][A-Za-z0-9]*"), u = ["break", "close", "do", "else", "for", "goto", "halt", "hang", "if", "job", "kill", "lock", "merge", "new", "open", "quit", "read", "set", "tcommit", "trollback", "tstart", "use", "view", "write", "xecute", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "tc", "tro", "ts", "u", "v", "w", "x"], f = ["\\$ascii", "\\$char", "\\$data", "\\$ecode", "\\$estack", "\\$etrap", "\\$extract", "\\$find", "\\$fnumber", "\\$get", "\\$horolog", "\\$io", "\\$increment", "\\$job", "\\$justify", "\\$length", "\\$name", "\\$next", "\\$order", "\\$piece", "\\$qlength", "\\$qsubscript", "\\$query", "\\$quit", "\\$random", "\\$reverse", "\\$select", "\\$stack", "\\$test", "\\$text", "\\$translate", "\\$view", "\\$x", "\\$y", "\\$a", "\\$c", "\\$d", "\\$e", "\\$ec", "\\$es", "\\$et", "\\$f", "\\$fn", "\\$g", "\\$h", "\\$i", "\\$j", "\\$l", "\\$n", "\\$na", "\\$o", "\\$p", "\\$q", "\\$ql", "\\$qs", "\\$r", "\\$re", "\\$s", "\\$st", "\\$t", "\\$tr", "\\$v", "\\$z"], m = i(f), s = i(u);
function p(e, n) {
  e.sol() && (n.label = !0, n.commandMode = 0);
  var r = e.peek();
  return r == " " || r == "	" ? (n.label = !1, n.commandMode == 0 ? n.commandMode = 1 : (n.commandMode < 0 || n.commandMode == 2) && (n.commandMode = 0)) : r != "." && n.commandMode > 0 && (r == ":" ? n.commandMode = -1 : n.commandMode = 2), (r === "(" || r === "	") && (n.label = !1), r === ";" ? (e.skipToEnd(), "comment") : e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/) ? "number" : r == '"' ? e.skipTo('"') ? (e.next(), "string") : (e.skipToEnd(), "error") : e.match(c) || e.match(t) ? "operator" : e.match(l) ? null : a.test(r) ? (e.next(), "bracket") : n.commandMode > 0 && e.match(s) ? "controlKeyword" : e.match(m) ? "builtin" : e.match(d) ? "variable" : r === "$" || r === "^" ? (e.next(), "builtin") : r === "@" ? (e.next(), "string.special") : /[\w%]/.test(r) ? (e.eatWhile(/[\w%]/), "variable") : (e.next(), "error");
}
o(p, "tokenBase");
const g = {
  name: "mumps",
  startState: /* @__PURE__ */ o(function() {
    return {
      label: !1,
      commandMode: 0
    };
  }, "startState"),
  token: /* @__PURE__ */ o(function(e, n) {
    var r = p(e, n);
    return n.label ? "tag" : r;
  }, "token")
};
export {
  g as mumps
};
