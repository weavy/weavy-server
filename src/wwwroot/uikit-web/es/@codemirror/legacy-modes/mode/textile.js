﻿var g = Object.defineProperty;
var r = (i, e) => g(i, "name", { value: e, configurable: !0 });
var c = {
  addition: "inserted",
  attributes: "propertyName",
  bold: "strong",
  cite: "keyword",
  code: "monospace",
  definitionList: "list",
  deletion: "deleted",
  div: "punctuation",
  em: "emphasis",
  footnote: "variable",
  footCite: "qualifier",
  header: "heading",
  html: "comment",
  image: "atom",
  italic: "emphasis",
  link: "link",
  linkDefinition: "link",
  list1: "list",
  list2: "list.special",
  list3: "list",
  notextile: "string.special",
  pre: "operator",
  p: "content",
  quote: "bracket",
  span: "quote",
  specialChar: "character",
  strong: "strong",
  sub: "content.special",
  sup: "content.special",
  table: "variableName.special",
  tableHeading: "operator"
};
function m(i, e) {
  e.mode = o.newLayout, e.tableHeading = !1, e.layoutType === "definitionList" && e.spanningLayout && i.match(l("definitionListEnd"), !1) && (e.spanningLayout = !1);
}
r(m, "startNewLine");
function b(i, e, n) {
  if (n === "_")
    return i.eat("_") ? f(i, e, "italic", /__/, 2) : f(i, e, "em", /_/, 1);
  if (n === "*")
    return i.eat("*") ? f(i, e, "bold", /\*\*/, 2) : f(i, e, "strong", /\*/, 1);
  if (n === "[")
    return i.match(/\d+\]/) && (e.footCite = !0), a(e);
  if (n === "(") {
    var u = i.match(/^(r|tm|c)\)/);
    if (u)
      return c.specialChar;
  }
  if (n === "<" && i.match(/(\w+)[^>]+>[^<]+<\/\1>/))
    return c.html;
  if (n === "?" && i.eat("?"))
    return f(i, e, "cite", /\?\?/, 2);
  if (n === "=" && i.eat("="))
    return f(i, e, "notextile", /==/, 2);
  if (n === "-" && !i.eat("-"))
    return f(i, e, "deletion", /-/, 1);
  if (n === "+")
    return f(i, e, "addition", /\+/, 1);
  if (n === "~")
    return f(i, e, "sub", /~/, 1);
  if (n === "^")
    return f(i, e, "sup", /\^/, 1);
  if (n === "%")
    return f(i, e, "span", /%/, 1);
  if (n === "@")
    return f(i, e, "code", /@/, 1);
  if (n === "!") {
    var d = f(i, e, "image", /(?:\([^\)]+\))?!/, 1);
    return i.match(/^:\S+/), d;
  }
  return a(e);
}
r(b, "handlePhraseModifier");
function f(i, e, n, u, d) {
  var p = i.pos > d ? i.string.charAt(i.pos - d - 1) : null, s = i.peek();
  if (e[n]) {
    if ((!s || /\W/.test(s)) && p && /\S/.test(p)) {
      var h = a(e);
      return e[n] = !1, h;
    }
  } else (!p || /\W/.test(p)) && s && /\S/.test(s) && i.match(new RegExp("^.*\\S" + u.source + "(?:\\W|$)"), !1) && (e[n] = !0, e.mode = o.attributes);
  return a(e);
}
r(f, "togglePhraseModifier");
function a(i) {
  var e = y(i);
  if (e) return e;
  var n = [];
  return i.layoutType && n.push(c[i.layoutType]), n = n.concat(k(
    i,
    "addition",
    "bold",
    "cite",
    "code",
    "deletion",
    "em",
    "footCite",
    "image",
    "italic",
    "link",
    "span",
    "strong",
    "sub",
    "sup",
    "table",
    "tableHeading"
  )), i.layoutType === "header" && n.push(c.header + "-" + i.header), n.length ? n.join(" ") : null;
}
r(a, "tokenStyles");
function y(i) {
  var e = i.layoutType;
  switch (e) {
    case "notextile":
    case "code":
    case "pre":
      return c[e];
    default:
      return i.notextile ? c.notextile + (e ? " " + c[e] : "") : null;
  }
}
r(y, "textileDisabled");
function k(i) {
  for (var e = [], n = 1; n < arguments.length; ++n)
    i[arguments[n]] && e.push(c[arguments[n]]);
  return e;
}
r(k, "activeStyles");
function T(i) {
  var e = i.spanningLayout, n = i.layoutType;
  for (var u in i) i.hasOwnProperty(u) && delete i[u];
  i.mode = o.newLayout, e && (i.layoutType = n, i.spanningLayout = !0);
}
r(T, "blankLine");
var t = {
  cache: {},
  single: {
    bc: "bc",
    bq: "bq",
    definitionList: /- .*?:=+/,
    definitionListEnd: /.*=:\s*$/,
    div: "div",
    drawTable: /\|.*\|/,
    foot: /fn\d+/,
    header: /h[1-6]/,
    html: /\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,
    link: /[^"]+":\S/,
    linkDefinition: /\[[^\s\]]+\]\S+/,
    list: /(?:#+|\*+)/,
    notextile: "notextile",
    para: "p",
    pre: "pre",
    table: "table",
    tableCellAttributes: /[\/\\]\d+/,
    tableHeading: /\|_\./,
    tableText: /[^"_\*\[\(\?\+~\^%@|-]+/,
    text: /[^!"_=\*\[\(<\?\+~\^%@-]+/
  },
  attributes: {
    align: /(?:<>|<|>|=)/,
    selector: /\([^\(][^\)]+\)/,
    lang: /\[[^\[\]]+\]/,
    pad: /(?:\(+|\)+){1,2}/,
    css: /\{[^\}]+\}/
  },
  createRe: /* @__PURE__ */ r(function(i) {
    switch (i) {
      case "drawTable":
        return t.makeRe("^", t.single.drawTable, "$");
      case "html":
        return t.makeRe("^", t.single.html, "(?:", t.single.html, ")*", "$");
      case "linkDefinition":
        return t.makeRe("^", t.single.linkDefinition, "$");
      case "listLayout":
        return t.makeRe("^", t.single.list, l("allAttributes"), "*\\s+");
      case "tableCellAttributes":
        return t.makeRe("^", t.choiceRe(
          t.single.tableCellAttributes,
          l("allAttributes")
        ), "+\\.");
      case "type":
        return t.makeRe("^", l("allTypes"));
      case "typeLayout":
        return t.makeRe(
          "^",
          l("allTypes"),
          l("allAttributes"),
          "*\\.\\.?",
          "(\\s+|$)"
        );
      case "attributes":
        return t.makeRe("^", l("allAttributes"), "+");
      case "allTypes":
        return t.choiceRe(
          t.single.div,
          t.single.foot,
          t.single.header,
          t.single.bc,
          t.single.bq,
          t.single.notextile,
          t.single.pre,
          t.single.table,
          t.single.para
        );
      case "allAttributes":
        return t.choiceRe(
          t.attributes.selector,
          t.attributes.css,
          t.attributes.lang,
          t.attributes.align,
          t.attributes.pad
        );
      default:
        return t.makeRe("^", t.single[i]);
    }
  }, "createRe"),
  makeRe: /* @__PURE__ */ r(function() {
    for (var i = "", e = 0; e < arguments.length; ++e) {
      var n = arguments[e];
      i += typeof n == "string" ? n : n.source;
    }
    return new RegExp(i);
  }, "makeRe"),
  choiceRe: /* @__PURE__ */ r(function() {
    for (var i = [arguments[0]], e = 1; e < arguments.length; ++e)
      i[e * 2 - 1] = "|", i[e * 2] = arguments[e];
    return i.unshift("(?:"), i.push(")"), t.makeRe.apply(null, i);
  }, "choiceRe")
};
function l(i) {
  return t.cache[i] || (t.cache[i] = t.createRe(i));
}
r(l, "RE");
var o = {
  newLayout: /* @__PURE__ */ r(function(i, e) {
    if (i.match(l("typeLayout"), !1))
      return e.spanningLayout = !1, (e.mode = o.blockType)(i, e);
    var n;
    return y(e) || (i.match(l("listLayout"), !1) ? n = o.list : i.match(l("drawTable"), !1) ? n = o.table : i.match(l("linkDefinition"), !1) ? n = o.linkDefinition : i.match(l("definitionList")) ? n = o.definitionList : i.match(l("html"), !1) && (n = o.html)), (e.mode = n || o.text)(i, e);
  }, "newLayout"),
  blockType: /* @__PURE__ */ r(function(i, e) {
    var n, u;
    if (e.layoutType = null, n = i.match(l("type")))
      u = n[0];
    else
      return (e.mode = o.text)(i, e);
    return (n = u.match(l("header"))) ? (e.layoutType = "header", e.header = parseInt(n[0][1])) : u.match(l("bq")) ? e.layoutType = "quote" : u.match(l("bc")) ? e.layoutType = "code" : u.match(l("foot")) ? e.layoutType = "footnote" : u.match(l("notextile")) ? e.layoutType = "notextile" : u.match(l("pre")) ? e.layoutType = "pre" : u.match(l("div")) ? e.layoutType = "div" : u.match(l("table")) && (e.layoutType = "table"), e.mode = o.attributes, a(e);
  }, "blockType"),
  text: /* @__PURE__ */ r(function(i, e) {
    if (i.match(l("text"))) return a(e);
    var n = i.next();
    return n === '"' ? (e.mode = o.link)(i, e) : b(i, e, n);
  }, "text"),
  attributes: /* @__PURE__ */ r(function(i, e) {
    return e.mode = o.layoutLength, i.match(l("attributes")) ? c.attributes : a(e);
  }, "attributes"),
  layoutLength: /* @__PURE__ */ r(function(i, e) {
    return i.eat(".") && i.eat(".") && (e.spanningLayout = !0), e.mode = o.text, a(e);
  }, "layoutLength"),
  list: /* @__PURE__ */ r(function(i, e) {
    var n = i.match(l("list"));
    e.listDepth = n[0].length;
    var u = (e.listDepth - 1) % 3;
    return u ? u === 1 ? e.layoutType = "list2" : e.layoutType = "list3" : e.layoutType = "list1", e.mode = o.attributes, a(e);
  }, "list"),
  link: /* @__PURE__ */ r(function(i, e) {
    return e.mode = o.text, i.match(l("link")) ? (i.match(/\S+/), c.link) : a(e);
  }, "link"),
  linkDefinition: /* @__PURE__ */ r(function(i) {
    return i.skipToEnd(), c.linkDefinition;
  }, "linkDefinition"),
  definitionList: /* @__PURE__ */ r(function(i, e) {
    return i.match(l("definitionList")), e.layoutType = "definitionList", i.match(/\s*$/) ? e.spanningLayout = !0 : e.mode = o.attributes, a(e);
  }, "definitionList"),
  html: /* @__PURE__ */ r(function(i) {
    return i.skipToEnd(), c.html;
  }, "html"),
  table: /* @__PURE__ */ r(function(i, e) {
    return e.layoutType = "table", (e.mode = o.tableCell)(i, e);
  }, "table"),
  tableCell: /* @__PURE__ */ r(function(i, e) {
    return i.match(l("tableHeading")) ? e.tableHeading = !0 : i.eat("|"), e.mode = o.tableCellAttributes, a(e);
  }, "tableCell"),
  tableCellAttributes: /* @__PURE__ */ r(function(i, e) {
    return e.mode = o.tableText, i.match(l("tableCellAttributes")) ? c.attributes : a(e);
  }, "tableCellAttributes"),
  tableText: /* @__PURE__ */ r(function(i, e) {
    return i.match(l("tableText")) ? a(e) : i.peek() === "|" ? (e.mode = o.tableCell, a(e)) : b(i, e, i.next());
  }, "tableText")
};
const L = {
  name: "textile",
  startState: /* @__PURE__ */ r(function() {
    return { mode: o.newLayout };
  }, "startState"),
  token: /* @__PURE__ */ r(function(i, e) {
    return i.sol() && m(i, e), e.mode(i, e);
  }, "token"),
  blankLine: T
};
export {
  L as textile
};
