﻿var r = Object.defineProperty;
var c = (e, n) => r(e, "name", { value: n, configurable: !0 });
const a = {
  name: "spreadsheet",
  startState: /* @__PURE__ */ c(function() {
    return {
      stringType: null,
      stack: []
    };
  }, "startState"),
  token: /* @__PURE__ */ c(function(e, n) {
    if (e) {
      switch (n.stack.length === 0 && (e.peek() == '"' || e.peek() == "'") && (n.stringType = e.peek(), e.next(), n.stack.unshift("string")), n.stack[0]) {
        case "string":
          for (; n.stack[0] === "string" && !e.eol(); )
            e.peek() === n.stringType ? (e.next(), n.stack.shift()) : e.peek() === "\\" ? (e.next(), e.next()) : e.match(/^.[^\\\"\']*/);
          return "string";
        case "characterClass":
          for (; n.stack[0] === "characterClass" && !e.eol(); )
            e.match(/^[^\]\\]+/) || e.match(/^\\./) || n.stack.shift();
          return "operator";
      }
      var i = e.peek();
      switch (i) {
        case "[":
          return e.next(), n.stack.unshift("characterClass"), "bracket";
        case ":":
          return e.next(), "operator";
        case "\\":
          return e.match(/\\[a-z]+/) ? "string.special" : (e.next(), "atom");
        case ".":
        case ",":
        case ";":
        case "*":
        case "-":
        case "+":
        case "^":
        case "<":
        case "/":
        case "=":
          return e.next(), "atom";
        case "$":
          return e.next(), "builtin";
      }
      return e.match(/\d+/) ? e.match(/^\w+/) ? "error" : "number" : e.match(/^[a-zA-Z_]\w*/) ? e.match(/(?=[\(.])/, !1) ? "keyword" : "variable" : ["[", "]", "(", ")", "{", "}"].indexOf(i) != -1 ? (e.next(), "bracket") : (e.eatSpace() || e.next(), null);
    }
  }, "token")
};
export {
  a as spreadsheet
};
