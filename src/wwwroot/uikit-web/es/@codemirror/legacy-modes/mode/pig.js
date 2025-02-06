﻿var C = Object.defineProperty;
var I = (e, T) => C(e, "name", { value: T, configurable: !0 });
function A(e) {
  for (var T = {}, O = e.split(" "), E = 0; E < O.length; ++E) T[O[E]] = !0;
  return T;
}
I(A, "words");
var U = "ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ", o = "VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP", u = "BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ", n = A(U), t = A(o), L = A(u), N = /[*+\-%<>=&?:\/!|]/;
function i(e, T, O) {
  return T.tokenize = O, O(e, T);
}
I(i, "chain");
function G(e, T) {
  for (var O = !1, E; E = e.next(); ) {
    if (E == "/" && O) {
      T.tokenize = R;
      break;
    }
    O = E == "*";
  }
  return "comment";
}
I(G, "tokenComment");
function M(e) {
  return function(T, O) {
    for (var E = !1, r, S = !1; (r = T.next()) != null; ) {
      if (r == e && !E) {
        S = !0;
        break;
      }
      E = !E && r == "\\";
    }
    return (S || !E) && (O.tokenize = R), "error";
  };
}
I(M, "tokenString");
function R(e, T) {
  var O = e.next();
  return O == '"' || O == "'" ? i(e, T, M(O)) : /[\[\]{}\(\),;\.]/.test(O) ? null : /\d/.test(O) ? (e.eatWhile(/[\w\.]/), "number") : O == "/" ? e.eat("*") ? i(e, T, G) : (e.eatWhile(N), "operator") : O == "-" ? e.eat("-") ? (e.skipToEnd(), "comment") : (e.eatWhile(N), "operator") : N.test(O) ? (e.eatWhile(N), "operator") : (e.eatWhile(/[\w\$_]/), t && t.propertyIsEnumerable(e.current().toUpperCase()) && !e.eat(")") && !e.eat(".") ? "keyword" : n && n.propertyIsEnumerable(e.current().toUpperCase()) ? "builtin" : L && L.propertyIsEnumerable(e.current().toUpperCase()) ? "type" : "variable");
}
I(R, "tokenBase");
const l = {
  name: "pig",
  startState: /* @__PURE__ */ I(function() {
    return {
      tokenize: R,
      startOfLine: !0
    };
  }, "startState"),
  token: /* @__PURE__ */ I(function(e, T) {
    if (e.eatSpace()) return null;
    var O = T.tokenize(e, T);
    return O;
  }, "token"),
  languageData: {
    autocomplete: (U + u + o).split(" ")
  }
};
export {
  l as pig
};
