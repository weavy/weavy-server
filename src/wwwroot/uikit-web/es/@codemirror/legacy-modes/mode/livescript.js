﻿var u = Object.defineProperty;
var a = (e, n) => u(e, "name", { value: n, configurable: !0 });
var p = /* @__PURE__ */ a(function(e, n) {
  var g = n.next || "start";
  {
    n.next = n.next;
    var l = x[g];
    if (l.splice) {
      for (var d = 0; d < l.length; ++d) {
        var t = l[d];
        if (t.regex && e.match(t.regex))
          return n.next = t.next || n.next, t.token;
      }
      return e.next(), "error";
    }
    if (e.match(t = x[g]))
      return t.regex && e.match(t.regex) ? (n.next = t.next, t.token) : (e.next(), "error");
  }
  return e.next(), "error";
}, "tokenBase"), k = "(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*", y = RegExp("(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*" + k + ")?))\\s*$"), r = "(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))", o = {
  token: "string",
  regex: ".+"
}, x = {
  start: [
    {
      token: "docComment",
      regex: "/\\*",
      next: "comment"
    },
    {
      token: "comment",
      regex: "#.*"
    },
    {
      token: "keyword",
      regex: "(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)" + r
    },
    {
      token: "atom",
      regex: "(?:true|false|yes|no|on|off|null|void|undefined)" + r
    },
    {
      token: "invalid",
      regex: "(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)" + r
    },
    {
      token: "className.standard",
      regex: "(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)" + r
    },
    {
      token: "variableName.function.standard",
      regex: "(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)" + r
    },
    {
      token: "variableName.standard",
      regex: "(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)" + r
    },
    {
      token: "variableName",
      regex: k + "\\s*:(?![:=])"
    },
    {
      token: "variableName",
      regex: k
    },
    {
      token: "operatorKeyword",
      regex: "(?:\\.{3}|\\s+\\?)"
    },
    {
      token: "keyword",
      regex: "(?:@+|::|\\.\\.)",
      next: "key"
    },
    {
      token: "operatorKeyword",
      regex: "\\.\\s*",
      next: "key"
    },
    {
      token: "string",
      regex: "\\\\\\S[^\\s,;)}\\]]*"
    },
    {
      token: "docString",
      regex: "'''",
      next: "qdoc"
    },
    {
      token: "docString",
      regex: '"""',
      next: "qqdoc"
    },
    {
      token: "string",
      regex: "'",
      next: "qstring"
    },
    {
      token: "string",
      regex: '"',
      next: "qqstring"
    },
    {
      token: "string",
      regex: "`",
      next: "js"
    },
    {
      token: "string",
      regex: "<\\[",
      next: "words"
    },
    {
      token: "regexp",
      regex: "//",
      next: "heregex"
    },
    {
      token: "regexp",
      regex: "\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}",
      next: "key"
    },
    {
      token: "number",
      regex: "(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)"
    },
    {
      token: "paren",
      regex: "[({[]"
    },
    {
      token: "paren",
      regex: "[)}\\]]",
      next: "key"
    },
    {
      token: "operatorKeyword",
      regex: "\\S+"
    },
    {
      token: "content",
      regex: "\\s+"
    }
  ],
  heregex: [
    {
      token: "regexp",
      regex: ".*?//[gimy$?]{0,4}",
      next: "start"
    },
    {
      token: "regexp",
      regex: "\\s*#{"
    },
    {
      token: "comment",
      regex: "\\s+(?:#.*)?"
    },
    {
      token: "regexp",
      regex: "\\S+"
    }
  ],
  key: [
    {
      token: "operatorKeyword",
      regex: "[.?@!]+"
    },
    {
      token: "variableName",
      regex: k,
      next: "start"
    },
    {
      token: "content",
      regex: "",
      next: "start"
    }
  ],
  comment: [
    {
      token: "docComment",
      regex: ".*?\\*/",
      next: "start"
    },
    {
      token: "docComment",
      regex: ".+"
    }
  ],
  qdoc: [
    {
      token: "string",
      regex: ".*?'''",
      next: "key"
    },
    o
  ],
  qqdoc: [
    {
      token: "string",
      regex: '.*?"""',
      next: "key"
    },
    o
  ],
  qstring: [
    {
      token: "string",
      regex: "[^\\\\']*(?:\\\\.[^\\\\']*)*'",
      next: "key"
    },
    o
  ],
  qqstring: [
    {
      token: "string",
      regex: '[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',
      next: "key"
    },
    o
  ],
  js: [
    {
      token: "string",
      regex: "[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",
      next: "key"
    },
    o
  ],
  words: [
    {
      token: "string",
      regex: ".*?\\]>",
      next: "key"
    },
    o
  ]
};
for (var c in x) {
  var i = x[c];
  if (i.splice)
    for (var s = 0, m = i.length; s < m; ++s) {
      var f = i[s];
      typeof f.regex == "string" && (x[c][s].regex = new RegExp("^" + f.regex));
    }
  else typeof f.regex == "string" && (x[c].regex = new RegExp("^" + i.regex));
}
const w = {
  name: "livescript",
  startState: /* @__PURE__ */ a(function() {
    return {
      next: "start",
      lastToken: { style: null, indent: 0, content: "" }
    };
  }, "startState"),
  token: /* @__PURE__ */ a(function(e, n) {
    for (; e.pos == e.start; )
      var g = p(e, n);
    return n.lastToken = {
      style: g,
      indent: e.indentation(),
      content: e.current()
    }, g.replace(/\./g, " ");
  }, "token"),
  indent: /* @__PURE__ */ a(function(e) {
    var n = e.lastToken.indent;
    return e.lastToken.content.match(y) && (n += 2), n;
  }, "indent")
};
export {
  w as liveScript
};
