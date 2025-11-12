var d = Object.defineProperty;
var a = (e, t) => d(e, "name", { value: t, configurable: !0 });
function g(e) {
  return new RegExp("^(?:" + e.join("|") + ")", "i");
}
a(g, "prefixRE");
function l(e) {
  return new RegExp("^(?:" + e.join("|") + ")$", "i");
}
a(l, "wordRE");
var f = l([
  "_G",
  "_VERSION",
  "assert",
  "collectgarbage",
  "dofile",
  "error",
  "getfenv",
  "getmetatable",
  "ipairs",
  "load",
  "loadfile",
  "loadstring",
  "module",
  "next",
  "pairs",
  "pcall",
  "print",
  "rawequal",
  "rawget",
  "rawset",
  "require",
  "select",
  "setfenv",
  "setmetatable",
  "tonumber",
  "tostring",
  "type",
  "unpack",
  "xpcall",
  "coroutine.create",
  "coroutine.resume",
  "coroutine.running",
  "coroutine.status",
  "coroutine.wrap",
  "coroutine.yield",
  "debug.debug",
  "debug.getfenv",
  "debug.gethook",
  "debug.getinfo",
  "debug.getlocal",
  "debug.getmetatable",
  "debug.getregistry",
  "debug.getupvalue",
  "debug.setfenv",
  "debug.sethook",
  "debug.setlocal",
  "debug.setmetatable",
  "debug.setupvalue",
  "debug.traceback",
  "close",
  "flush",
  "lines",
  "read",
  "seek",
  "setvbuf",
  "write",
  "io.close",
  "io.flush",
  "io.input",
  "io.lines",
  "io.open",
  "io.output",
  "io.popen",
  "io.read",
  "io.stderr",
  "io.stdin",
  "io.stdout",
  "io.tmpfile",
  "io.type",
  "io.write",
  "math.abs",
  "math.acos",
  "math.asin",
  "math.atan",
  "math.atan2",
  "math.ceil",
  "math.cos",
  "math.cosh",
  "math.deg",
  "math.exp",
  "math.floor",
  "math.fmod",
  "math.frexp",
  "math.huge",
  "math.ldexp",
  "math.log",
  "math.log10",
  "math.max",
  "math.min",
  "math.modf",
  "math.pi",
  "math.pow",
  "math.rad",
  "math.random",
  "math.randomseed",
  "math.sin",
  "math.sinh",
  "math.sqrt",
  "math.tan",
  "math.tanh",
  "os.clock",
  "os.date",
  "os.difftime",
  "os.execute",
  "os.exit",
  "os.getenv",
  "os.remove",
  "os.rename",
  "os.setlocale",
  "os.time",
  "os.tmpname",
  "package.cpath",
  "package.loaded",
  "package.loaders",
  "package.loadlib",
  "package.path",
  "package.preload",
  "package.seeall",
  "string.byte",
  "string.char",
  "string.dump",
  "string.find",
  "string.format",
  "string.gmatch",
  "string.gsub",
  "string.len",
  "string.lower",
  "string.match",
  "string.rep",
  "string.reverse",
  "string.sub",
  "string.upper",
  "table.concat",
  "table.insert",
  "table.maxn",
  "table.remove",
  "table.sort"
]), h = l([
  "and",
  "break",
  "elseif",
  "false",
  "nil",
  "not",
  "or",
  "return",
  "true",
  "function",
  "end",
  "if",
  "then",
  "else",
  "do",
  "while",
  "repeat",
  "until",
  "for",
  "in",
  "local"
]), p = l(["function", "if", "repeat", "do", "\\(", "{"]), m = l(["end", "until", "\\)", "}"]), b = g(["end", "until", "\\)", "}", "else", "elseif"]);
function s(e) {
  for (var t = 0; e.eat("="); ) ++t;
  return e.eat("["), t;
}
a(s, "readBracket");
function u(e, t) {
  var n = e.next();
  return n == "-" && e.eat("-") ? e.eat("[") && e.eat("[") ? (t.cur = c(s(e), "comment"))(e, t) : (e.skipToEnd(), "comment") : n == '"' || n == "'" ? (t.cur = k(n))(e, t) : n == "[" && /[\[=]/.test(e.peek()) ? (t.cur = c(s(e), "string"))(e, t) : /\d/.test(n) ? (e.eatWhile(/[\w.%]/), "number") : /[\w_]/.test(n) ? (e.eatWhile(/[\w\\\-_.]/), "variable") : null;
}
a(u, "normal");
function c(e, t) {
  return function(n, i) {
    for (var r = null, o; (o = n.next()) != null; )
      if (r == null)
        o == "]" && (r = 0);
      else if (o == "=") ++r;
      else if (o == "]" && r == e) {
        i.cur = u;
        break;
      } else r = null;
    return t;
  };
}
a(c, "bracketed");
function k(e) {
  return function(t, n) {
    for (var i = !1, r; (r = t.next()) != null && !(r == e && !i); )
      i = !i && r == "\\";
    return i || (n.cur = u), "string";
  };
}
a(k, "string");
const w = {
  name: "lua",
  startState: /* @__PURE__ */ a(function() {
    return { basecol: 0, indentDepth: 0, cur: u };
  }, "startState"),
  token: /* @__PURE__ */ a(function(e, t) {
    if (e.eatSpace()) return null;
    var n = t.cur(e, t), i = e.current();
    return n == "variable" && (h.test(i) ? n = "keyword" : f.test(i) && (n = "builtin")), n != "comment" && n != "string" && (p.test(i) ? ++t.indentDepth : m.test(i) && --t.indentDepth), n;
  }, "token"),
  indent: /* @__PURE__ */ a(function(e, t, n) {
    var i = b.test(t);
    return e.basecol + n.unit * (e.indentDepth - (i ? 1 : 0));
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*(?:end|until|else|\)|\})$/,
    commentTokens: { line: "--", block: { open: "--[[", close: "]]--" } }
  }
};
export {
  w as lua
};
