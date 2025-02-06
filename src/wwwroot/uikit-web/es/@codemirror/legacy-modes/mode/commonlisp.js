﻿var f = Object.defineProperty;
var i = (e, n) => f(e, "name", { value: n, configurable: !0 });
var d = /^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/, u = /^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/, p = /^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/, x = /[^\s'`,@()\[\]";]/, l;
function o(e) {
  for (var n; n = e.next(); )
    if (n == "\\") e.next();
    else if (!x.test(n)) {
      e.backUp(1);
      break;
    }
  return e.current();
}
i(o, "readSym");
function c(e, n) {
  if (e.eatSpace())
    return l = "ws", null;
  if (e.match(p)) return "number";
  var t = e.next();
  if (t == "\\" && (t = e.next()), t == '"') return (n.tokenize = s)(e, n);
  if (t == "(")
    return l = "open", "bracket";
  if (t == ")" || t == "]")
    return l = "close", "bracket";
  if (t == ";")
    return e.skipToEnd(), l = "ws", "comment";
  if (/['`,@]/.test(t)) return null;
  if (t == "|")
    return e.skipTo("|") ? (e.next(), "variableName") : (e.skipToEnd(), "error");
  if (t == "#") {
    var t = e.next();
    return t == "(" ? (l = "open", "bracket") : /[+\-=\.']/.test(t) || /\d/.test(t) && e.match(/^\d*#/) ? null : t == "|" ? (n.tokenize = a)(e, n) : t == ":" ? (o(e), "meta") : t == "\\" ? (e.next(), o(e), "string.special") : "error";
  } else {
    var r = o(e);
    return r == "." ? null : (l = "symbol", r == "nil" || r == "t" || r.charAt(0) == ":" ? "atom" : n.lastType == "open" && (d.test(r) || u.test(r)) ? "keyword" : r.charAt(0) == "&" ? "variableName.special" : "variableName");
  }
}
i(c, "base");
function s(e, n) {
  for (var t = !1, r; r = e.next(); ) {
    if (r == '"' && !t) {
      n.tokenize = c;
      break;
    }
    t = !t && r == "\\";
  }
  return "string";
}
i(s, "inString");
function a(e, n) {
  for (var t, r; t = e.next(); ) {
    if (t == "#" && r == "|") {
      n.tokenize = c;
      break;
    }
    r = t;
  }
  return l = "ws", "comment";
}
i(a, "inComment");
const v = {
  name: "commonlisp",
  startState: /* @__PURE__ */ i(function() {
    return { ctx: { prev: null, start: 0, indentTo: 0 }, lastType: null, tokenize: c };
  }, "startState"),
  token: /* @__PURE__ */ i(function(e, n) {
    e.sol() && typeof n.ctx.indentTo != "number" && (n.ctx.indentTo = n.ctx.start + 1), l = null;
    var t = n.tokenize(e, n);
    return l != "ws" && (n.ctx.indentTo == null ? l == "symbol" && u.test(e.current()) ? n.ctx.indentTo = n.ctx.start + e.indentUnit : n.ctx.indentTo = "next" : n.ctx.indentTo == "next" && (n.ctx.indentTo = e.column()), n.lastType = l), l == "open" ? n.ctx = { prev: n.ctx, start: e.column(), indentTo: null } : l == "close" && (n.ctx = n.ctx.prev || n.ctx), t;
  }, "token"),
  indent: /* @__PURE__ */ i(function(e) {
    var n = e.ctx.indentTo;
    return typeof n == "number" ? n : e.ctx.start + 1;
  }, "indent"),
  languageData: {
    commentTokens: { line: ";;", block: { open: "#|", close: "|#" } },
    closeBrackets: { brackets: ["(", "[", "{", '"'] }
  }
};
export {
  v as commonLisp
};
