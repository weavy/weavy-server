﻿var S = Object.defineProperty;
var i = (d, g) => S(d, "name", { value: g, configurable: !0 });
function p(d) {
  function g(t, n) {
    t.cmdState.push(n);
  }
  i(g, "pushCommand");
  function k(t) {
    return t.cmdState.length > 0 ? t.cmdState[t.cmdState.length - 1] : null;
  }
  i(k, "peekCommand");
  function s(t) {
    var n = t.cmdState.pop();
    n && n.closeBracket();
  }
  i(s, "popCommand");
  function y(t) {
    for (var n = t.cmdState, e = n.length - 1; e >= 0; e--) {
      var a = n[e];
      if (a.name != "DEFAULT")
        return a;
    }
    return { styleIdentifier: /* @__PURE__ */ i(function() {
      return null;
    }, "styleIdentifier") };
  }
  i(y, "getMostPowerful");
  function f(t, n, e) {
    return function() {
      this.name = t, this.bracketNo = 0, this.style = n, this.styles = e, this.argument = null, this.styleIdentifier = function() {
        return this.styles[this.bracketNo - 1] || null;
      }, this.openBracket = function() {
        return this.bracketNo++, "bracket";
      }, this.closeBracket = function() {
      };
    };
  }
  i(f, "addPluginPattern");
  var r = {};
  r.importmodule = f("importmodule", "tag", ["string", "builtin"]), r.documentclass = f("documentclass", "tag", ["", "atom"]), r.usepackage = f("usepackage", "tag", ["atom"]), r.begin = f("begin", "tag", ["atom"]), r.end = f("end", "tag", ["atom"]), r.label = f("label", "tag", ["atom"]), r.ref = f("ref", "tag", ["atom"]), r.eqref = f("eqref", "tag", ["atom"]), r.cite = f("cite", "tag", ["atom"]), r.bibitem = f("bibitem", "tag", ["atom"]), r.Bibitem = f("Bibitem", "tag", ["atom"]), r.RBibitem = f("RBibitem", "tag", ["atom"]), r.DEFAULT = function() {
    this.name = "DEFAULT", this.style = "tag", this.styleIdentifier = this.openBracket = this.closeBracket = function() {
    };
  };
  function u(t, n) {
    t.f = n;
  }
  i(u, "setState");
  function o(t, n) {
    var e;
    if (t.match(/^\\[a-zA-Z@\xc0-\u1fff\u2060-\uffff]+/)) {
      var a = t.current().slice(1);
      return e = r.hasOwnProperty(a) ? r[a] : r.DEFAULT, e = new e(), g(n, e), u(n, b), e.style;
    }
    if (t.match(/^\\[$&%#{}_]/) || t.match(/^\\[,;!\/\\]/))
      return "tag";
    if (t.match("\\["))
      return u(n, function(c, l) {
        return h(c, l, "\\]");
      }), "keyword";
    if (t.match("\\("))
      return u(n, function(c, l) {
        return h(c, l, "\\)");
      }), "keyword";
    if (t.match("$$"))
      return u(n, function(c, l) {
        return h(c, l, "$$");
      }), "keyword";
    if (t.match("$"))
      return u(n, function(c, l) {
        return h(c, l, "$");
      }), "keyword";
    var m = t.next();
    if (m == "%")
      return t.skipToEnd(), "comment";
    if (m == "}" || m == "]") {
      if (e = k(n), e)
        e.closeBracket(m), u(n, b);
      else
        return "error";
      return "bracket";
    } else return m == "{" || m == "[" ? (e = r.DEFAULT, e = new e(), g(n, e), "bracket") : /\d/.test(m) ? (t.eatWhile(/[\w.%]/), "atom") : (t.eatWhile(/[\w\-_]/), e = y(n), e.name == "begin" && (e.argument = t.current()), e.styleIdentifier());
  }
  i(o, "normal");
  function h(t, n, e) {
    if (t.eatSpace())
      return null;
    if (e && t.match(e))
      return u(n, o), "keyword";
    if (t.match(/^\\[a-zA-Z@]+/))
      return "tag";
    if (t.match(/^[a-zA-Z]+/))
      return "variableName.special";
    if (t.match(/^\\[$&%#{}_]/) || t.match(/^\\[,;!\/]/) || t.match(/^[\^_&]/))
      return "tag";
    if (t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))
      return null;
    if (t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))
      return "number";
    var a = t.next();
    return a == "{" || a == "}" || a == "[" || a == "]" || a == "(" || a == ")" ? "bracket" : a == "%" ? (t.skipToEnd(), "comment") : "error";
  }
  i(h, "inMathMode");
  function b(t, n) {
    var e = t.peek(), a;
    return e == "{" || e == "[" ? (a = k(n), a.openBracket(e), t.eat(e), u(n, o), "bracket") : /[ \t\r]/.test(e) ? (t.eat(e), null) : (u(n, o), s(n), o(t, n));
  }
  return i(b, "beginParams"), {
    name: "stex",
    startState: /* @__PURE__ */ i(function() {
      var t = d ? function(n, e) {
        return h(n, e);
      } : o;
      return {
        cmdState: [],
        f: t
      };
    }, "startState"),
    copyState: /* @__PURE__ */ i(function(t) {
      return {
        cmdState: t.cmdState.slice(),
        f: t.f
      };
    }, "copyState"),
    token: /* @__PURE__ */ i(function(t, n) {
      return n.f(t, n);
    }, "token"),
    blankLine: /* @__PURE__ */ i(function(t) {
      t.f = o, t.cmdState.length = 0;
    }, "blankLine"),
    languageData: {
      commentTokens: { line: "%" }
    }
  };
}
i(p, "mkStex");
const w = p(!1), B = p(!0);
export {
  w as stex,
  B as stexMath
};
