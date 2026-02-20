var a = Object.defineProperty;
var t = (e, n) => a(e, "name", { value: n, configurable: !0 });
var u;
function r(e, n) {
  return u = n, e;
}
t(r, "ret");
function c(e, n) {
  var i = e.next();
  if (i == "<" && e.eat("!")) {
    if (e.eatWhile(/[\-]/))
      return n.tokenize = k, k(e, n);
    if (e.eatWhile(/[\w]/)) return r("keyword", "doindent");
  } else {
    if (i == "<" && e.eat("?"))
      return n.tokenize = h("meta", "?>"), r("meta", i);
    if (i == "#" && e.eatWhile(/[\w]/)) return r("atom", "tag");
    if (i == "|") return r("keyword", "separator");
    if (i.match(/[\(\)\[\]\-\.,\+\?>]/)) return r(null, i);
    if (i.match(/[\[\]]/)) return r("rule", i);
    if (i == '"' || i == "'")
      return n.tokenize = f(i), n.tokenize(e, n);
    if (e.eatWhile(/[a-zA-Z\?\+\d]/)) {
      var l = e.current();
      return l.substr(l.length - 1, l.length).match(/\?|\+/) !== null && e.backUp(1), r("tag", "tag");
    } else return i == "%" || i == "*" ? r("number", "number") : (e.eatWhile(/[\w\\\-_%.{,]/), r(null, null));
  }
}
t(c, "tokenBase");
function k(e, n) {
  for (var i = 0, l; (l = e.next()) != null; ) {
    if (i >= 2 && l == ">") {
      n.tokenize = c;
      break;
    }
    i = l == "-" ? i + 1 : 0;
  }
  return r("comment", "comment");
}
t(k, "tokenSGMLComment");
function f(e) {
  return function(n, i) {
    for (var l = !1, o; (o = n.next()) != null; ) {
      if (o == e && !l) {
        i.tokenize = c;
        break;
      }
      l = !l && o == "\\";
    }
    return r("string", "tag");
  };
}
t(f, "tokenString");
function h(e, n) {
  return function(i, l) {
    for (; !i.eol(); ) {
      if (i.match(n)) {
        l.tokenize = c;
        break;
      }
      i.next();
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
    var i = n.tokenize(e, n), l = n.stack[n.stack.length - 1];
    return e.current() == "[" || u === "doindent" || u == "[" ? n.stack.push("rule") : u === "endtag" ? n.stack[n.stack.length - 1] = "endtag" : e.current() == "]" || u == "]" || u == ">" && l == "rule" ? n.stack.pop() : u == "[" && n.stack.push("["), i;
  }, "token"),
  indent: /* @__PURE__ */ t(function(e, n, i) {
    var l = e.stack.length;
    return n.charAt(0) === "]" ? l-- : n.substr(n.length - 1, n.length) === ">" && (n.substr(0, 1) === "<" || u == "doindent" && n.length > 1 || (u == "doindent" ? l-- : u == ">" && n.length > 1 || u == "tag" && n !== ">" || (u == "tag" && e.stack[e.stack.length - 1] == "rule" ? l-- : u == "tag" ? l++ : n === ">" && e.stack[e.stack.length - 1] == "rule" && u === ">" ? l-- : n === ">" && e.stack[e.stack.length - 1] == "rule" || (n.substr(0, 1) !== "<" && n.substr(0, 1) === ">" ? l = l - 1 : n === ">" || (l = l - 1)))), (u == null || u == "]") && l--), e.baseIndent + l * i.unit;
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*[\]>]$/
  }
};
export {
  g as dtd
};
