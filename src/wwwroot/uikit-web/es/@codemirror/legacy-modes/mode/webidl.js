﻿var m = Object.defineProperty;
var i = (e, r) => m(e, "name", { value: r, configurable: !0 });
function a(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b");
}
i(a, "wordRegexp");
var o = [
  "Clamp",
  "Constructor",
  "EnforceRange",
  "Exposed",
  "ImplicitThis",
  "Global",
  "PrimaryGlobal",
  "LegacyArrayClass",
  "LegacyUnenumerableNamedProperties",
  "LenientThis",
  "NamedConstructor",
  "NewObject",
  "NoInterfaceObject",
  "OverrideBuiltins",
  "PutForwards",
  "Replaceable",
  "SameObject",
  "TreatNonObjectAsNull",
  "TreatNullAs",
  "EmptyString",
  "Unforgeable",
  "Unscopeable"
], s = a(o), c = [
  "unsigned",
  "short",
  "long",
  // UnsignedIntegerType
  "unrestricted",
  "float",
  "double",
  // UnrestrictedFloatType
  "boolean",
  "byte",
  "octet",
  // Rest of PrimitiveType
  "Promise",
  // PromiseType
  "ArrayBuffer",
  "DataView",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8ClampedArray",
  "Float32Array",
  "Float64Array",
  // BufferRelatedType
  "ByteString",
  "DOMString",
  "USVString",
  "sequence",
  "object",
  "RegExp",
  "Error",
  "DOMException",
  "FrozenArray",
  // Rest of NonAnyType
  "any",
  // Rest of SingleType
  "void"
  // Rest of ReturnType
], y = a(c), f = [
  "attribute",
  "callback",
  "const",
  "deleter",
  "dictionary",
  "enum",
  "getter",
  "implements",
  "inherit",
  "interface",
  "iterable",
  "legacycaller",
  "maplike",
  "partial",
  "required",
  "serializer",
  "setlike",
  "setter",
  "static",
  "stringifier",
  "typedef",
  // ArgumentNameKeyword except
  // "unrestricted"
  "optional",
  "readonly",
  "or"
], d = a(f), u = [
  "true",
  "false",
  // BooleanLiteral
  "Infinity",
  "NaN",
  // FloatLiteral
  "null"
  // Rest of ConstValue
], p = a(u), b = ["callback", "dictionary", "enum", "interface"], v = a(b), A = ["typedef"], g = a(A), h = /^[:<=>?]/, D = /^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/, k = /^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/, l = /^_?[A-Za-z][0-9A-Z_a-z-]*/, E = /^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/, C = /^"[^"]*"/, w = /^\/\*.*?\*\//, N = /^\/\*.*/, S = /^.*?\*\//;
function O(e, r) {
  if (e.eatSpace()) return null;
  if (r.inComment)
    return e.match(S) ? (r.inComment = !1, "comment") : (e.skipToEnd(), "comment");
  if (e.match("//"))
    return e.skipToEnd(), "comment";
  if (e.match(w)) return "comment";
  if (e.match(N))
    return r.inComment = !0, "comment";
  if (e.match(/^-?[0-9\.]/, !1) && (e.match(D) || e.match(k)))
    return "number";
  if (e.match(C)) return "string";
  if (r.startDef && e.match(l)) return "def";
  if (r.endDef && e.match(E))
    return r.endDef = !1, "def";
  if (e.match(d)) return "keyword";
  if (e.match(y)) {
    var t = r.lastToken, n = (e.match(/^\s*(.+?)\b/, !1) || [])[1];
    return t === ":" || t === "implements" || n === "implements" || n === "=" ? "builtin" : "type";
  }
  return e.match(s) ? "builtin" : e.match(p) ? "atom" : e.match(l) ? "variable" : e.match(h) ? "operator" : (e.next(), null);
}
i(O, "readToken");
const U = {
  name: "webidl",
  startState: /* @__PURE__ */ i(function() {
    return {
      // Is in multiline comment
      inComment: !1,
      // Last non-whitespace, matched token
      lastToken: "",
      // Next token is a definition
      startDef: !1,
      // Last token of the statement is a definition
      endDef: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ i(function(e, r) {
    var t = O(e, r);
    if (t) {
      var n = e.current();
      r.lastToken = n, t === "keyword" ? (r.startDef = v.test(n), r.endDef = r.endDef || g.test(n)) : r.startDef = !1;
    }
    return t;
  }, "token"),
  languageData: {
    autocomplete: o.concat(c).concat(f).concat(u)
  }
};
export {
  U as webIDL
};
