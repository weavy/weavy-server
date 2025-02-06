﻿var k = Object.defineProperty;
var o = (n, e) => k(n, "name", { value: e, configurable: !0 });
function t(n) {
  for (var e = {}, i = n.split(" "), l = 0; l < i.length; ++l)
    e[i[l]] = !0;
  return e;
}
o(t, "words");
var a = t("algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within"), u = t("abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh"), c = t("Real Boolean Integer String"), s = [].concat(Object.keys(a), Object.keys(u), Object.keys(c)), p = /[;=\(:\),{}.*<>+\-\/^\[\]]/, d = /(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/, r = /[0-9]/, f = /[_a-zA-Z]/;
function h(n, e) {
  return n.skipToEnd(), e.tokenize = null, "comment";
}
o(h, "tokenLineComment");
function b(n, e) {
  for (var i = !1, l; l = n.next(); ) {
    if (i && l == "/") {
      e.tokenize = null;
      break;
    }
    i = l == "*";
  }
  return "comment";
}
o(b, "tokenBlockComment");
function v(n, e) {
  for (var i = !1, l; (l = n.next()) != null; ) {
    if (l == '"' && !i) {
      e.tokenize = null, e.sol = !1;
      break;
    }
    i = !i && l == "\\";
  }
  return "string";
}
o(v, "tokenString");
function g(n, e) {
  for (n.eatWhile(r); n.eat(r) || n.eat(f); )
    ;
  var i = n.current();
  return e.sol && (i == "package" || i == "model" || i == "when" || i == "connector") ? e.level++ : e.sol && i == "end" && e.level > 0 && e.level--, e.tokenize = null, e.sol = !1, a.propertyIsEnumerable(i) ? "keyword" : u.propertyIsEnumerable(i) ? "builtin" : c.propertyIsEnumerable(i) ? "atom" : "variable";
}
o(g, "tokenIdent");
function z(n, e) {
  for (; n.eat(/[^']/); )
    ;
  return e.tokenize = null, e.sol = !1, n.eat("'") ? "variable" : "error";
}
o(z, "tokenQIdent");
function m(n, e) {
  return n.eatWhile(r), n.eat(".") && n.eatWhile(r), (n.eat("e") || n.eat("E")) && (n.eat("-") || n.eat("+"), n.eatWhile(r)), e.tokenize = null, e.sol = !1, "number";
}
o(m, "tokenUnsignedNumber");
const y = {
  name: "modelica",
  startState: /* @__PURE__ */ o(function() {
    return {
      tokenize: null,
      level: 0,
      sol: !0
    };
  }, "startState"),
  token: /* @__PURE__ */ o(function(n, e) {
    if (e.tokenize != null)
      return e.tokenize(n, e);
    if (n.sol() && (e.sol = !0), n.eatSpace())
      return e.tokenize = null, null;
    var i = n.next();
    if (i == "/" && n.eat("/"))
      e.tokenize = h;
    else if (i == "/" && n.eat("*"))
      e.tokenize = b;
    else {
      if (d.test(i + n.peek()))
        return n.next(), e.tokenize = null, "operator";
      if (p.test(i))
        return e.tokenize = null, "operator";
      if (f.test(i))
        e.tokenize = g;
      else if (i == "'" && n.peek() && n.peek() != "'")
        e.tokenize = z;
      else if (i == '"')
        e.tokenize = v;
      else if (r.test(i))
        e.tokenize = m;
      else
        return e.tokenize = null, "error";
    }
    return e.tokenize(n, e);
  }, "token"),
  indent: /* @__PURE__ */ o(function(n, e, i) {
    if (n.tokenize != null) return null;
    var l = n.level;
    return /(algorithm)/.test(e) && l--, /(equation)/.test(e) && l--, /(initial algorithm)/.test(e) && l--, /(initial equation)/.test(e) && l--, /(end)/.test(e) && l--, l > 0 ? i.unit * l : 0;
  }, "indent"),
  languageData: {
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    autocomplete: s
  }
};
export {
  y as modelica
};
