var t = Object.defineProperty;
var l = (r, e) => t(r, "name", { value: e, configurable: !0 });
var a = {
  "+": ["conjugate", "add"],
  "−": ["negate", "subtract"],
  "×": ["signOf", "multiply"],
  "÷": ["reciprocal", "divide"],
  "⌈": ["ceiling", "greaterOf"],
  "⌊": ["floor", "lesserOf"],
  "∣": ["absolute", "residue"],
  "⍳": ["indexGenerate", "indexOf"],
  "?": ["roll", "deal"],
  "⋆": ["exponentiate", "toThePowerOf"],
  "⍟": ["naturalLog", "logToTheBase"],
  "○": ["piTimes", "circularFuncs"],
  "!": ["factorial", "binomial"],
  "⌹": ["matrixInverse", "matrixDivide"],
  "<": [null, "lessThan"],
  "≤": [null, "lessThanOrEqual"],
  "=": [null, "equals"],
  ">": [null, "greaterThan"],
  "≥": [null, "greaterThanOrEqual"],
  "≠": [null, "notEqual"],
  "≡": ["depth", "match"],
  "≢": [null, "notMatch"],
  "∈": ["enlist", "membership"],
  "⍷": [null, "find"],
  "∪": ["unique", "union"],
  "∩": [null, "intersection"],
  "∼": ["not", "without"],
  "∨": [null, "or"],
  "∧": [null, "and"],
  "⍱": [null, "nor"],
  "⍲": [null, "nand"],
  "⍴": ["shapeOf", "reshape"],
  ",": ["ravel", "catenate"],
  "⍪": [null, "firstAxisCatenate"],
  "⌽": ["reverse", "rotate"],
  "⊖": ["axis1Reverse", "axis1Rotate"],
  "⍉": ["transpose", null],
  "↑": ["first", "take"],
  "↓": [null, "drop"],
  "⊂": ["enclose", "partitionWithAxis"],
  "⊃": ["diclose", "pick"],
  "⌷": [null, "index"],
  "⍋": ["gradeUp", null],
  "⍒": ["gradeDown", null],
  "⊤": ["encode", null],
  "⊥": ["decode", null],
  "⍕": ["format", "formatByExample"],
  "⍎": ["execute", null],
  "⊣": ["stop", "left"],
  "⊢": ["pass", "right"]
}, i = /[\.\/⌿⍀¨⍣]/, u = /⍬/, o = /[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/, s = /←/, f = /[⍝#].*$/, c = /* @__PURE__ */ l(function(r) {
  var e;
  return e = !1, function(n) {
    return e = n, n === r ? e === "\\" : !0;
  };
}, "stringEater");
const d = {
  name: "apl",
  startState: /* @__PURE__ */ l(function() {
    return {
      prev: !1,
      func: !1,
      op: !1,
      string: !1,
      escape: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ l(function(r, e) {
    var n;
    return r.eatSpace() ? null : (n = r.next(), n === '"' || n === "'" ? (r.eatWhile(c(n)), r.next(), e.prev = !0, "string") : /[\[{\(]/.test(n) ? (e.prev = !1, null) : /[\]}\)]/.test(n) ? (e.prev = !0, null) : u.test(n) ? (e.prev = !1, "atom") : /[¯\d]/.test(n) ? (e.func ? (e.func = !1, e.prev = !1) : e.prev = !0, r.eatWhile(/[\w\.]/), "number") : i.test(n) || s.test(n) ? "operator" : o.test(n) ? (e.func = !0, e.prev = !1, a[n] ? "variableName.function.standard" : "variableName.function") : f.test(n) ? (r.skipToEnd(), "comment") : n === "∘" && r.peek() === "." ? (r.next(), "variableName.function") : (r.eatWhile(/[\w\$_]/), e.prev = !0, "keyword"));
  }, "token")
};
export {
  d as apl
};
