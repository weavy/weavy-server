﻿var c = Object.defineProperty;
var a = (e, t) => c(e, "name", { value: t, configurable: !0 });
function u(e, t, n) {
  return t(n), n(e, t);
}
a(u, "switchState");
var v = /[a-z_]/, w = /[A-Z]/, o = /\d/, E = /[0-9A-Fa-f]/, x = /[0-7]/, m = /[a-z_A-Z0-9'\xa1-\uffff]/, f = /[-!#$%&*+.\/<=>?@\\^|~:]/, F = /[(),;[\]`{}]/, s = /[ \t\v\f]/;
function l(e, t) {
  if (e.eatWhile(s))
    return null;
  var n = e.next();
  if (F.test(n)) {
    if (n == "{" && e.eat("-")) {
      var r = "comment";
      return e.eat("#") && (r = "meta"), u(e, t, p(r, 1));
    }
    return null;
  }
  if (n == "'")
    return e.eat("\\"), e.next(), e.eat("'") ? "string" : "error";
  if (n == '"')
    return u(e, t, g);
  if (w.test(n))
    return e.eatWhile(m), e.eat(".") ? "qualifier" : "type";
  if (v.test(n))
    return e.eatWhile(m), "variable";
  if (o.test(n)) {
    if (n == "0") {
      if (e.eat(/[xX]/))
        return e.eatWhile(E), "integer";
      if (e.eat(/[oO]/))
        return e.eatWhile(x), "number";
    }
    e.eatWhile(o);
    var r = "number";
    return e.match(/^\.\d+/) && (r = "number"), e.eat(/[eE]/) && (r = "number", e.eat(/[-+]/), e.eatWhile(o)), r;
  }
  return n == "." && e.eat(".") ? "keyword" : f.test(n) ? n == "-" && e.eat(/-/) && (e.eatWhile(/-/), !e.eat(f)) ? (e.skipToEnd(), "comment") : (e.eatWhile(f), "variable") : "error";
}
a(l, "normal");
function p(e, t) {
  return t == 0 ? l : function(n, r) {
    for (var i = t; !n.eol(); ) {
      var d = n.next();
      if (d == "{" && n.eat("-"))
        ++i;
      else if (d == "-" && n.eat("}") && (--i, i == 0))
        return r(l), e;
    }
    return r(p(e, i)), e;
  };
}
a(p, "ncomment");
function g(e, t) {
  for (; !e.eol(); ) {
    var n = e.next();
    if (n == '"')
      return t(l), "string";
    if (n == "\\") {
      if (e.eol() || e.eat(s))
        return t(R), "string";
      e.eat("&") || e.next();
    }
  }
  return t(l), "error";
}
a(g, "stringLiteral");
function R(e, t) {
  return e.eat("\\") ? u(e, t, g) : (e.next(), t(l), "error");
}
a(R, "stringGap");
var h = function() {
  var e = {};
  function t(n) {
    return function() {
      for (var r = 0; r < arguments.length; r++)
        e[arguments[r]] = n;
    };
  }
  return a(t, "setType"), t("keyword")(
    "case",
    "class",
    "data",
    "default",
    "deriving",
    "do",
    "else",
    "foreign",
    "if",
    "import",
    "in",
    "infix",
    "infixl",
    "infixr",
    "instance",
    "let",
    "module",
    "newtype",
    "of",
    "then",
    "type",
    "where",
    "_"
  ), t("keyword")(
    "..",
    ":",
    "::",
    "=",
    "\\",
    "<-",
    "->",
    "@",
    "~",
    "=>"
  ), t("builtin")(
    "!!",
    "$!",
    "$",
    "&&",
    "+",
    "++",
    "-",
    ".",
    "/",
    "/=",
    "<",
    "<*",
    "<=",
    "<$>",
    "<*>",
    "=<<",
    "==",
    ">",
    ">=",
    ">>",
    ">>=",
    "^",
    "^^",
    "||",
    "*",
    "*>",
    "**"
  ), t("builtin")(
    "Applicative",
    "Bool",
    "Bounded",
    "Char",
    "Double",
    "EQ",
    "Either",
    "Enum",
    "Eq",
    "False",
    "FilePath",
    "Float",
    "Floating",
    "Fractional",
    "Functor",
    "GT",
    "IO",
    "IOError",
    "Int",
    "Integer",
    "Integral",
    "Just",
    "LT",
    "Left",
    "Maybe",
    "Monad",
    "Nothing",
    "Num",
    "Ord",
    "Ordering",
    "Rational",
    "Read",
    "ReadS",
    "Real",
    "RealFloat",
    "RealFrac",
    "Right",
    "Show",
    "ShowS",
    "String",
    "True"
  ), t("builtin")(
    "abs",
    "acos",
    "acosh",
    "all",
    "and",
    "any",
    "appendFile",
    "asTypeOf",
    "asin",
    "asinh",
    "atan",
    "atan2",
    "atanh",
    "break",
    "catch",
    "ceiling",
    "compare",
    "concat",
    "concatMap",
    "const",
    "cos",
    "cosh",
    "curry",
    "cycle",
    "decodeFloat",
    "div",
    "divMod",
    "drop",
    "dropWhile",
    "either",
    "elem",
    "encodeFloat",
    "enumFrom",
    "enumFromThen",
    "enumFromThenTo",
    "enumFromTo",
    "error",
    "even",
    "exp",
    "exponent",
    "fail",
    "filter",
    "flip",
    "floatDigits",
    "floatRadix",
    "floatRange",
    "floor",
    "fmap",
    "foldl",
    "foldl1",
    "foldr",
    "foldr1",
    "fromEnum",
    "fromInteger",
    "fromIntegral",
    "fromRational",
    "fst",
    "gcd",
    "getChar",
    "getContents",
    "getLine",
    "head",
    "id",
    "init",
    "interact",
    "ioError",
    "isDenormalized",
    "isIEEE",
    "isInfinite",
    "isNaN",
    "isNegativeZero",
    "iterate",
    "last",
    "lcm",
    "length",
    "lex",
    "lines",
    "log",
    "logBase",
    "lookup",
    "map",
    "mapM",
    "mapM_",
    "max",
    "maxBound",
    "maximum",
    "maybe",
    "min",
    "minBound",
    "minimum",
    "mod",
    "negate",
    "not",
    "notElem",
    "null",
    "odd",
    "or",
    "otherwise",
    "pi",
    "pred",
    "print",
    "product",
    "properFraction",
    "pure",
    "putChar",
    "putStr",
    "putStrLn",
    "quot",
    "quotRem",
    "read",
    "readFile",
    "readIO",
    "readList",
    "readLn",
    "readParen",
    "reads",
    "readsPrec",
    "realToFrac",
    "recip",
    "rem",
    "repeat",
    "replicate",
    "return",
    "reverse",
    "round",
    "scaleFloat",
    "scanl",
    "scanl1",
    "scanr",
    "scanr1",
    "seq",
    "sequence",
    "sequence_",
    "show",
    "showChar",
    "showList",
    "showParen",
    "showString",
    "shows",
    "showsPrec",
    "significand",
    "signum",
    "sin",
    "sinh",
    "snd",
    "span",
    "splitAt",
    "sqrt",
    "subtract",
    "succ",
    "sum",
    "tail",
    "take",
    "takeWhile",
    "tan",
    "tanh",
    "toEnum",
    "toInteger",
    "toRational",
    "truncate",
    "uncurry",
    "undefined",
    "unlines",
    "until",
    "unwords",
    "unzip",
    "unzip3",
    "userError",
    "words",
    "writeFile",
    "zip",
    "zip3",
    "zipWith",
    "zipWith3"
  ), e;
}();
const y = {
  name: "haskell",
  startState: /* @__PURE__ */ a(function() {
    return { f: l };
  }, "startState"),
  copyState: /* @__PURE__ */ a(function(e) {
    return { f: e.f };
  }, "copyState"),
  token: /* @__PURE__ */ a(function(e, t) {
    var n = t.f(e, function(i) {
      t.f = i;
    }), r = e.current();
    return h.hasOwnProperty(r) ? h[r] : n;
  }, "token"),
  languageData: {
    commentTokens: { line: "--", block: { open: "{-", close: "-}" } }
  }
};
export {
  y as haskell
};
