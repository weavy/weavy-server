﻿var U = Object.defineProperty;
var o = (v, u) => U(v, "name", { value: u, configurable: !0 });
function y(v) {
  var u = "error";
  function i(e) {
    return new RegExp("^((" + e.join(")|(") + "))\\b", "i");
  }
  o(i, "wordRegexp");
  var g = new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"), m = new RegExp("^((<>)|(<=)|(>=))"), w = new RegExp("^[\\.,]"), k = new RegExp("^[\\(\\)]"), x = new RegExp("^[A-Za-z][_A-Za-z0-9]*"), C = ["class", "sub", "select", "while", "if", "function", "property", "with", "for"], I = ["else", "elseif", "case"], S = ["next", "loop", "wend"], O = i(["and", "or", "not", "xor", "is", "mod", "eqv", "imp"]), D = [
    "dim",
    "redim",
    "then",
    "until",
    "randomize",
    "byval",
    "byref",
    "new",
    "property",
    "exit",
    "in",
    "const",
    "private",
    "public",
    "get",
    "set",
    "let",
    "stop",
    "on error resume next",
    "on error goto 0",
    "option explicit",
    "call",
    "me"
  ], R = ["true", "false", "nothing", "empty", "null"], E = [
    "abs",
    "array",
    "asc",
    "atn",
    "cbool",
    "cbyte",
    "ccur",
    "cdate",
    "cdbl",
    "chr",
    "cint",
    "clng",
    "cos",
    "csng",
    "cstr",
    "date",
    "dateadd",
    "datediff",
    "datepart",
    "dateserial",
    "datevalue",
    "day",
    "escape",
    "eval",
    "execute",
    "exp",
    "filter",
    "formatcurrency",
    "formatdatetime",
    "formatnumber",
    "formatpercent",
    "getlocale",
    "getobject",
    "getref",
    "hex",
    "hour",
    "inputbox",
    "instr",
    "instrrev",
    "int",
    "fix",
    "isarray",
    "isdate",
    "isempty",
    "isnull",
    "isnumeric",
    "isobject",
    "join",
    "lbound",
    "lcase",
    "left",
    "len",
    "loadpicture",
    "log",
    "ltrim",
    "rtrim",
    "trim",
    "maths",
    "mid",
    "minute",
    "month",
    "monthname",
    "msgbox",
    "now",
    "oct",
    "replace",
    "rgb",
    "right",
    "rnd",
    "round",
    "scriptengine",
    "scriptenginebuildversion",
    "scriptenginemajorversion",
    "scriptengineminorversion",
    "second",
    "setlocale",
    "sgn",
    "sin",
    "space",
    "split",
    "sqr",
    "strcomp",
    "string",
    "strreverse",
    "tan",
    "time",
    "timer",
    "timeserial",
    "timevalue",
    "typename",
    "ubound",
    "ucase",
    "unescape",
    "vartype",
    "weekday",
    "weekdayname",
    "year"
  ], L = [
    "vbBlack",
    "vbRed",
    "vbGreen",
    "vbYellow",
    "vbBlue",
    "vbMagenta",
    "vbCyan",
    "vbWhite",
    "vbBinaryCompare",
    "vbTextCompare",
    "vbSunday",
    "vbMonday",
    "vbTuesday",
    "vbWednesday",
    "vbThursday",
    "vbFriday",
    "vbSaturday",
    "vbUseSystemDayOfWeek",
    "vbFirstJan1",
    "vbFirstFourDays",
    "vbFirstFullWeek",
    "vbGeneralDate",
    "vbLongDate",
    "vbShortDate",
    "vbLongTime",
    "vbShortTime",
    "vbObjectError",
    "vbOKOnly",
    "vbOKCancel",
    "vbAbortRetryIgnore",
    "vbYesNoCancel",
    "vbYesNo",
    "vbRetryCancel",
    "vbCritical",
    "vbQuestion",
    "vbExclamation",
    "vbInformation",
    "vbDefaultButton1",
    "vbDefaultButton2",
    "vbDefaultButton3",
    "vbDefaultButton4",
    "vbApplicationModal",
    "vbSystemModal",
    "vbOK",
    "vbCancel",
    "vbAbort",
    "vbRetry",
    "vbIgnore",
    "vbYes",
    "vbNo",
    "vbCr",
    "VbCrLf",
    "vbFormFeed",
    "vbLf",
    "vbNewLine",
    "vbNullChar",
    "vbNullString",
    "vbTab",
    "vbVerticalTab",
    "vbUseDefault",
    "vbTrue",
    "vbFalse",
    "vbEmpty",
    "vbNull",
    "vbInteger",
    "vbLong",
    "vbSingle",
    "vbDouble",
    "vbCurrency",
    "vbDate",
    "vbString",
    "vbObject",
    "vbError",
    "vbBoolean",
    "vbVariant",
    "vbDataObject",
    "vbDecimal",
    "vbByte",
    "vbArray"
  ], c = ["WScript", "err", "debug", "RegExp"], T = ["description", "firstindex", "global", "helpcontext", "helpfile", "ignorecase", "length", "number", "pattern", "source", "value", "count"], j = ["clear", "execute", "raise", "replace", "test", "write", "writeline", "close", "open", "state", "eof", "update", "addnew", "end", "createobject", "quit"], F = ["server", "response", "request", "session", "application"], B = [
    "buffer",
    "cachecontrol",
    "charset",
    "contenttype",
    "expires",
    "expiresabsolute",
    "isclientconnected",
    "pics",
    "status",
    //response
    "clientcertificate",
    "cookies",
    "form",
    "querystring",
    "servervariables",
    "totalbytes",
    //request
    "contents",
    "staticobjects",
    //application
    "codepage",
    "lcid",
    "sessionid",
    "timeout",
    //session
    "scripttimeout"
  ], W = [
    "addheader",
    "appendtolog",
    "binarywrite",
    "end",
    "flush",
    "redirect",
    //response
    "binaryread",
    //request
    "remove",
    "removeall",
    "lock",
    "unlock",
    //application
    "abandon",
    //session
    "getlasterror",
    "htmlencode",
    "mappath",
    "transfer",
    "urlencode"
  ], l = j.concat(T);
  c = c.concat(L), v.isASP && (c = c.concat(F), l = l.concat(W, B));
  var z = i(D), A = i(R), K = i(E), N = i(c), M = i(l), P = '"', q = i(C), s = i(I), f = i(S), p = i(["end"]), V = i(["do"]), Y = i(["on error resume next", "exit"]), _ = i(["rem"]);
  function h(e, n) {
    n.currentIndent++;
  }
  o(h, "indent");
  function b(e, n) {
    n.currentIndent--;
  }
  o(b, "dedent");
  function d(e, n) {
    if (e.eatSpace())
      return null;
    var r = e.peek();
    if (r === "'" || e.match(_))
      return e.skipToEnd(), "comment";
    if (e.match(/^((&H)|(&O))?[0-9\.]/i, !1) && !e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, !1)) {
      var t = !1;
      if ((e.match(/^\d*\.\d+/i) || e.match(/^\d+\.\d*/) || e.match(/^\.\d+/)) && (t = !0), t)
        return e.eat(/J/i), "number";
      var a = !1;
      if (e.match(/^&H[0-9a-f]+/i) || e.match(/^&O[0-7]+/i) ? a = !0 : e.match(/^[1-9]\d*F?/) ? (e.eat(/J/i), a = !0) : e.match(/^0(?![\dx])/i) && (a = !0), a)
        return e.eat(/L/i), "number";
    }
    return e.match(P) ? (n.tokenize = H(e.current()), n.tokenize(e, n)) : e.match(m) || e.match(g) || e.match(O) ? "operator" : e.match(w) ? null : e.match(k) ? "bracket" : e.match(Y) ? (n.doInCurrentLine = !0, "keyword") : e.match(V) ? (h(e, n), n.doInCurrentLine = !0, "keyword") : e.match(q) ? (n.doInCurrentLine ? n.doInCurrentLine = !1 : h(e, n), "keyword") : e.match(s) ? "keyword" : e.match(p) ? (b(e, n), b(e, n), "keyword") : e.match(f) ? (n.doInCurrentLine ? n.doInCurrentLine = !1 : b(e, n), "keyword") : e.match(z) ? "keyword" : e.match(A) ? "atom" : e.match(M) ? "variableName.special" : e.match(K) || e.match(N) ? "builtin" : e.match(x) ? "variable" : (e.next(), u);
  }
  o(d, "tokenBase");
  function H(e) {
    var n = e.length == 1, r = "string";
    return function(t, a) {
      for (; !t.eol(); ) {
        if (t.eatWhile(/[^'"]/), t.match(e))
          return a.tokenize = d, r;
        t.eat(/['"]/);
      }
      return n && (a.tokenize = d), r;
    };
  }
  o(H, "tokenStringFactory");
  function J(e, n) {
    var r = n.tokenize(e, n), t = e.current();
    return t === "." ? (r = n.tokenize(e, n), t = e.current(), r && (r.substr(0, 8) === "variable" || r === "builtin" || r === "keyword") ? ((r === "builtin" || r === "keyword") && (r = "variable"), l.indexOf(t.substr(1)) > -1 && (r = "keyword"), r) : u) : r;
  }
  return o(J, "tokenLexer"), {
    name: "vbscript",
    startState: /* @__PURE__ */ o(function() {
      return {
        tokenize: d,
        lastToken: null,
        currentIndent: 0,
        nextLineIndent: 0,
        doInCurrentLine: !1,
        ignoreKeyword: !1
      };
    }, "startState"),
    token: /* @__PURE__ */ o(function(e, n) {
      e.sol() && (n.currentIndent += n.nextLineIndent, n.nextLineIndent = 0, n.doInCurrentLine = 0);
      var r = J(e, n);
      return n.lastToken = { style: r, content: e.current() }, r === null && (r = null), r;
    }, "token"),
    indent: /* @__PURE__ */ o(function(e, n, r) {
      var t = n.replace(/^\s+|\s+$/g, "");
      return t.match(f) || t.match(p) || t.match(s) ? r.unit * (e.currentIndent - 1) : e.currentIndent < 0 ? 0 : e.currentIndent * r.unit;
    }, "indent")
  };
}
o(y, "mkVBScript");
const Z = y({}), Q = y({ isASP: !0 });
export {
  Z as vbScript,
  Q as vbScriptASP
};
