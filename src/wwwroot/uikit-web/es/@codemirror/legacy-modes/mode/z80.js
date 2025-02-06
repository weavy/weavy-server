﻿var s = Object.defineProperty;
var t = (l, n) => s(l, "name", { value: n, configurable: !0 });
function u(l) {
  var n, c;
  l ? (n = /^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i, c = /^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i) : (n = /^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i, c = /^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i);
  var d = /^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i, f = /^(n?[zc]|p[oe]?|m)\b/i, a = /^([hl][xy]|i[xy][hl]|slia|sll)\b/i, o = /^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;
  return {
    name: "z80",
    startState: /* @__PURE__ */ t(function() {
      return {
        context: 0
      };
    }, "startState"),
    token: /* @__PURE__ */ t(function(e, i) {
      if (e.column() || (i.context = 0), e.eatSpace())
        return null;
      var r;
      if (e.eatWhile(/\w/))
        if (l && e.eat(".") && e.eatWhile(/\w/), r = e.current(), e.indentation()) {
          if ((i.context == 1 || i.context == 4) && d.test(r))
            return i.context = 4, "variable";
          if (i.context == 2 && f.test(r))
            return i.context = 4, "variableName.special";
          if (n.test(r))
            return i.context = 1, "keyword";
          if (c.test(r))
            return i.context = 2, "keyword";
          if (i.context == 4 && o.test(r))
            return "number";
          if (a.test(r))
            return "error";
        } else return e.match(o) ? "number" : null;
      else {
        if (e.eat(";"))
          return e.skipToEnd(), "comment";
        if (e.eat('"')) {
          for (; (r = e.next()) && r != '"'; )
            r == "\\" && e.next();
          return "string";
        } else if (e.eat("'")) {
          if (e.match(/\\?.'/))
            return "number";
        } else if (e.eat(".") || e.sol() && e.eat("#")) {
          if (i.context = 5, e.eatWhile(/\w/))
            return "def";
        } else if (e.eat("$")) {
          if (e.eatWhile(/[\da-f]/i))
            return "number";
        } else if (e.eat("%")) {
          if (e.eatWhile(/[01]/))
            return "number";
        } else
          e.next();
      }
      return null;
    }, "token")
  };
}
t(u, "mkZ80");
const x = u(!1), p = u(!0);
export {
  p as ez80,
  x as z80
};
