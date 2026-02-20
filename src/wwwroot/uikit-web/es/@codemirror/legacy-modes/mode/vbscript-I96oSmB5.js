var J = Object.defineProperty;
var o = (v, u) => J(v, "name", { value: u, configurable: !0 });
function y(v) {
  var u = "error";
  function i(e) {
    return new RegExp("^((" + e.join(")|(") + "))\\b", "i");
  }
  o(i, "wordRegexp");
  var m = new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"), g = new RegExp("^((<>)|(<=)|(>=))"), w = new RegExp("^[\\.,]"), k = new RegExp("^[\\(\\)]"), x = new RegExp("^[A-Za-z][_A-Za-z0-9]*"), C = ["class", "sub", "select", "while", "if", "function", "property", "with", "for"], I = ["else", "elseif", "case"], O = ["next", "loop", "wend"], S = i(["and", "or", "not", "xor", "is", "mod", "eqv", "imp"]), R = [
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
  ], E = ["true", "false", "nothing", "empty", "null"], D = [
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
  ], T = [
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
  ], c = ["WScript", "err", "debug", "RegExp"], F = ["description", "firstindex", "global", "helpcontext", "helpfile", "ignorecase", "length", "number", "pattern", "source", "value", "count"], L = ["clear", "execute", "raise", "replace", "test", "write", "writeline", "close", "open", "state", "eof", "update", "addnew", "end", "createobject", "quit"], j = ["server", "response", "request", "session", "application"], W = [
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
  ], A = [
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
  ], l = L.concat(F);
  c = c.concat(T), v.isASP && (c = c.concat(j), l = l.concat(A, W));
  var B = i(R), z = i(E), K = i(D), N = i(c), M = i(l), _ = '"', q = i(C), s = i(I), f = i(O), p = i(["end"]), P = i(["do"]), V = i(["on error resume next", "exit"]), Y = i(["rem"]);
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
    if (r === "'" || e.match(Y))
      return e.skipToEnd(), "comment";
    if (e.match(/^((&H)|(&O))?[0-9\.]/i, !1) && !e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, !1)) {
      var t = !1;
      if ((e.match(/^\d*\.\d+/i) || e.match(/^\d+\.\d*/) || e.match(/^\.\d+/)) && (t = !0), t)
        return e.eat(/J/i), "number";
      var a = !1;
      if (e.match(/^&H[0-9a-f]+/i) || e.match(/^&O[0-7]+/i) ? a = !0 : e.match(/^[1-9]\d*F?/) ? (e.eat(/J/i), a = !0) : e.match(/^0(?![\dx])/i) && (a = !0), a)
        return e.eat(/L/i), "number";
    }
    return e.match(_) ? (n.tokenize = U(e.current()), n.tokenize(e, n)) : e.match(g) || e.match(m) || e.match(S) ? "operator" : e.match(w) ? null : e.match(k) ? "bracket" : e.match(V) ? (n.doInCurrentLine = !0, "keyword") : e.match(P) ? (h(e, n), n.doInCurrentLine = !0, "keyword") : e.match(q) ? (n.doInCurrentLine ? n.doInCurrentLine = !1 : h(e, n), "keyword") : e.match(s) ? "keyword" : e.match(p) ? (b(e, n), b(e, n), "keyword") : e.match(f) ? (n.doInCurrentLine ? n.doInCurrentLine = !1 : b(e, n), "keyword") : e.match(B) ? "keyword" : e.match(z) ? "atom" : e.match(M) ? "variableName.special" : e.match(K) || e.match(N) ? "builtin" : e.match(x) ? "variable" : (e.next(), u);
  }
  o(d, "tokenBase");
  function U(e) {
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
  o(U, "tokenStringFactory");
  function H(e, n) {
    var r = n.tokenize(e, n), t = e.current();
    return t === "." ? (r = n.tokenize(e, n), t = e.current(), r && (r.substr(0, 8) === "variable" || r === "builtin" || r === "keyword") ? ((r === "builtin" || r === "keyword") && (r = "variable"), l.indexOf(t.substr(1)) > -1 && (r = "keyword"), r) : u) : r;
  }
  return o(H, "tokenLexer"), {
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
      var r = H(e, n);
      return n.lastToken = { style: r, content: e.current() }, r === null && (r = null), r;
    }, "token"),
    indent: /* @__PURE__ */ o(function(e, n, r) {
      var t = n.replace(/^\s+|\s+$/g, "");
      return t.match(f) || t.match(p) || t.match(s) ? r.unit * (e.currentIndent - 1) : e.currentIndent < 0 ? 0 : e.currentIndent * r.unit;
    }, "indent")
  };
}
o(y, "mkVBScript");
const Z = y({});
y({ isASP: !0 });
export {
  Z as vbScript
};
