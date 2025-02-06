﻿var a = Object.defineProperty;
var t = (e, n) => a(e, "name", { value: n, configurable: !0 });
var u;
function r(e, n) {
  return u = n, e;
}
t(r, "ret");
function c(e, n) {
  var l = e.next();
  if (l == "<" && e.eat("!")) {
    if (e.eatWhile(/[\-]/))
      return n.tokenize = k, k(e, n);
    if (e.eatWhile(/[\w]/)) return r("keyword", "doindent");
  } else {
    if (l == "<" && e.eat("?"))
      return n.tokenize = h("meta", "?>"), r("meta", l);
    if (l == "#" && e.eatWhile(/[\w]/)) return r("atom", "tag");
    if (l == "|") return r("keyword", "separator");
    if (l.match(/[\(\)\[\]\-\.,\+\?>]/)) return r(null, l);
    if (l.match(/[\[\]]/)) return r("rule", l);
    if (l == '"' || l == "'")
      return n.tokenize = f(l), n.tokenize(e, n);
    if (e.eatWhile(/[a-zA-Z\?\+\d]/)) {
      var i = e.current();
      return i.substr(i.length - 1, i.length).match(/\?|\+/) !== null && e.backUp(1), r("tag", "tag");
    } else return l == "%" || l == "*" ? r("number", "number") : (e.eatWhile(/[\w\\\-_%.{,]/), r(null, null));
  }
}
t(c, "tokenBase");
function k(e, n) {
  for (var l = 0, i; (i = e.next()) != null; ) {
    if (l >= 2 && i == ">") {
      n.tokenize = c;
      break;
    }
    l = i == "-" ? l + 1 : 0;
  }
  return r("comment", "comment");
}
t(k, "tokenSGMLComment");
function f(e) {
  return function(n, l) {
    for (var i = !1, o; (o = n.next()) != null; ) {
      if (o == e && !i) {
        l.tokenize = c;
        break;
      }
      i = !i && o == "\\";
    }
    return r("string", "tag");
  };
}
t(f, "tokenString");
function h(e, n) {
  return function(l, i) {
    for (; !l.eol(); ) {
      if (l.match(n)) {
        i.tokenize = c;
        break;
      }
      l.next();
    }
    return e;
  };
}
t(h, "inBlock");
const g = {
  name: "dtd",
  startState: /* @__PURE__ */ t(function() {
    return {
      tokenize: c,
      baseIndent: 0,
      stack: []
    };
  }, "startState"),
  token: /* @__PURE__ */ t(function(e, n) {
    if (e.eatSpace()) return null;
    var l = n.tokenize(e, n), i = n.stack[n.stack.length - 1];
    return e.current() == "[" || u === "doindent" || u == "[" ? n.stack.push("rule") : u === "endtag" ? n.stack[n.stack.length - 1] = "endtag" : e.current() == "]" || u == "]" || u == ">" && i == "rule" ? n.stack.pop() : u == "[" && n.stack.push("["), l;
  }, "token"),
  indent: /* @__PURE__ */ t(function(e, n, l) {
    var i = e.stack.length;
    return n.charAt(0) === "]" ? i-- : n.substr(n.length - 1, n.length) === ">" && (n.substr(0, 1) === "<" || u == "doindent" && n.length > 1 || (u == "doindent" ? i-- : u == ">" && n.length > 1 || u == "tag" && n !== ">" || (u == "tag" && e.stack[e.stack.length - 1] == "rule" ? i-- : u == "tag" ? i++ : n === ">" && e.stack[e.stack.length - 1] == "rule" && u === ">" ? i-- : n === ">" && e.stack[e.stack.length - 1] == "rule" || (n.substr(0, 1) !== "<" && n.substr(0, 1) === ">" ? i = i - 1 : n === ">" || (i = i - 1)))), (u == null || u == "]") && i--), e.baseIndent + i * l.unit;
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*[\]>]$/
  }
};
export {
  g as dtd
};
