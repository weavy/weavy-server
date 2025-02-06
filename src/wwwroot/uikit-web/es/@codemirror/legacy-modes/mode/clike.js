﻿var fe = Object.defineProperty;
var r = (e, n) => fe(e, "name", { value: n, configurable: !0 });
function F(e, n, t, c, u, p) {
  this.indented = e, this.column = n, this.type = t, this.info = c, this.align = u, this.prev = p;
}
r(F, "Context");
function L(e, n, t, c) {
  var u = e.indented;
  return e.context && e.context.type == "statement" && t != "statement" && (u = e.context.indented), e.context = new F(u, n, t, c, null, e.context);
}
r(L, "pushContext");
function S(e) {
  var n = e.context.type;
  return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
r(S, "popContext");
function W(e, n, t) {
  if (n.prevToken == "variable" || n.prevToken == "type" || /\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, t)) || n.typeAtEndOfLine && e.column() == e.indentation()) return !0;
}
r(W, "typeBefore");
function R(e) {
  for (; ; ) {
    if (!e || e.type == "top") return !0;
    if (e.type == "}" && e.prev.info != "namespace") return !1;
    e = e.prev;
  }
}
r(R, "isTopScope");
function y(e) {
  var n = e.statementIndentUnit, t = e.dontAlignCalls, c = e.keywords || {}, u = e.types || {}, p = e.builtin || {}, w = e.blockKeywords || {}, x = e.defKeywords || {}, v = e.atoms || {}, k = e.hooks || {}, re = e.multiLineStrings, ie = e.indentStatements !== !1, oe = e.indentSwitch !== !1, j = e.namespaceSeparator, ae = e.isPunctuationChar || /[\[\]{}\(\),;\:\.]/, le = e.numberStart || /[\d\.]/, ce = e.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i, B = e.isOperatorChar || /[+\-*&%=<>!?|\/]/, U = e.isIdentifierChar || /[\w\$_\xa1-\uffff]/, K = e.isReservedIdentifier || !1, h, P;
  function A(o, l) {
    var s = o.next();
    if (k[s]) {
      var a = k[s](o, l);
      if (a !== !1) return a;
    }
    if (s == '"' || s == "'")
      return l.tokenize = se(s), l.tokenize(o, l);
    if (le.test(s)) {
      if (o.backUp(1), o.match(ce)) return "number";
      o.next();
    }
    if (ae.test(s))
      return h = s, null;
    if (s == "/") {
      if (o.eat("*"))
        return l.tokenize = $, $(o, l);
      if (o.eat("/"))
        return o.skipToEnd(), "comment";
    }
    if (B.test(s)) {
      for (; !o.match(/^\/[\/*]/, !1) && o.eat(B); )
        ;
      return "operator";
    }
    if (o.eatWhile(U), j) for (; o.match(j); )
      o.eatWhile(U);
    var f = o.current();
    return m(c, f) ? (m(w, f) && (h = "newstatement"), m(x, f) && (P = !0), "keyword") : m(u, f) ? "type" : m(p, f) || K && K(f) ? (m(w, f) && (h = "newstatement"), "builtin") : m(v, f) ? "atom" : "variable";
  }
  r(A, "tokenBase");
  function se(o) {
    return function(l, s) {
      for (var a = !1, f, _ = !1; (f = l.next()) != null; ) {
        if (f == o && !a) {
          _ = !0;
          break;
        }
        a = !a && f == "\\";
      }
      return (_ || !(a || re)) && (s.tokenize = null), "string";
    };
  }
  r(se, "tokenString");
  function $(o, l) {
    for (var s = !1, a; a = o.next(); ) {
      if (a == "/" && s) {
        l.tokenize = null;
        break;
      }
      s = a == "*";
    }
    return "comment";
  }
  r($, "tokenComment");
  function q(o, l) {
    e.typeFirstDefinitions && o.eol() && R(l.context) && (l.typeAtEndOfLine = W(o, l, o.pos));
  }
  return r(q, "maybeEOL"), {
    name: e.name,
    startState: /* @__PURE__ */ r(function(o) {
      return {
        tokenize: null,
        context: new F(-o, 0, "top", null, !1),
        indented: 0,
        startOfLine: !0,
        prevToken: null
      };
    }, "startState"),
    token: /* @__PURE__ */ r(function(o, l) {
      var s = l.context;
      if (o.sol() && (s.align == null && (s.align = !1), l.indented = o.indentation(), l.startOfLine = !0), o.eatSpace())
        return q(o, l), null;
      h = P = null;
      var a = (l.tokenize || A)(o, l);
      if (a == "comment" || a == "meta") return a;
      if (s.align == null && (s.align = !0), h == ";" || h == ":" || h == "," && o.match(/^\s*(?:\/\/.*)?$/, !1))
        for (; l.context.type == "statement"; ) S(l);
      else if (h == "{") L(l, o.column(), "}");
      else if (h == "[") L(l, o.column(), "]");
      else if (h == "(") L(l, o.column(), ")");
      else if (h == "}") {
        for (; s.type == "statement"; ) s = S(l);
        for (s.type == "}" && (s = S(l)); s.type == "statement"; ) s = S(l);
      } else h == s.type ? S(l) : ie && ((s.type == "}" || s.type == "top") && h != ";" || s.type == "statement" && h == "newstatement") && L(l, o.column(), "statement", o.current());
      if (a == "variable" && (l.prevToken == "def" || e.typeFirstDefinitions && W(o, l, o.start) && R(l.context) && o.match(/^\s*\(/, !1)) && (a = "def"), k.token) {
        var f = k.token(o, l, a);
        f !== void 0 && (a = f);
      }
      return a == "def" && e.styleDefs === !1 && (a = "variable"), l.startOfLine = !1, l.prevToken = P ? "def" : a || h, q(o, l), a;
    }, "token"),
    indent: /* @__PURE__ */ r(function(o, l, s) {
      if (o.tokenize != A && o.tokenize != null || o.typeAtEndOfLine && R(o.context))
        return null;
      var a = o.context, f = l && l.charAt(0), _ = f == a.type;
      if (a.type == "statement" && f == "}" && (a = a.prev), e.dontIndentStatements)
        for (; a.type == "statement" && e.dontIndentStatements.test(a.info); )
          a = a.prev;
      if (k.indent) {
        var V = k.indent(o, a, l, s.unit);
        if (typeof V == "number") return V;
      }
      var ue = a.prev && a.prev.info == "switch";
      if (e.allmanIndentation && /[{(]/.test(f)) {
        for (; a.type != "top" && a.type != "}"; ) a = a.prev;
        return a.indented;
      }
      return a.type == "statement" ? a.indented + (f == "{" ? 0 : n || s.unit) : a.align && (!t || a.type != ")") ? a.column + (_ ? 0 : 1) : a.type == ")" && !_ ? a.indented + (n || s.unit) : a.indented + (_ ? 0 : s.unit) + (!_ && ue && !/^(?:case|default)\b/.test(l) ? s.unit : 0);
    }, "indent"),
    languageData: {
      indentOnInput: oe ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
      commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
      autocomplete: Object.keys(c).concat(Object.keys(u)).concat(Object.keys(p)).concat(Object.keys(v)),
      ...e.languageData
    }
  };
}
r(y, "clike");
function i(e) {
  for (var n = {}, t = e.split(" "), c = 0; c < t.length; ++c) n[t[c]] = !0;
  return n;
}
r(i, "words");
function m(e, n) {
  return typeof e == "function" ? e(n) : e.propertyIsEnumerable(n);
}
r(m, "contains");
var I = "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran", Q = "alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq", Z = "bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available", X = "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT", de = i("int long char short double float unsigned signed void bool"), pe = i("SEL instancetype id Class Protocol BOOL");
function N(e) {
  return m(de, e) || /.+_t$/.test(e);
}
r(N, "cTypes");
function Y(e) {
  return N(e) || m(pe, e);
}
r(Y, "objCTypes");
var D = "case do else for if switch while struct enum union", M = "struct enum union";
function b(e, n) {
  if (!n.startOfLine) return !1;
  for (var t, c = null; t = e.peek(); ) {
    if (t == "\\" && e.match(/^.$/)) {
      c = b;
      break;
    } else if (t == "/" && e.match(/^\/[\/\*]/, !1))
      break;
    e.next();
  }
  return n.tokenize = c, "meta";
}
r(b, "cppHook");
function C(e, n) {
  return n.prevToken == "type" ? "type" : !1;
}
r(C, "pointerHook");
function E(e) {
  return !e || e.length < 2 || e[0] != "_" ? !1 : e[1] == "_" || e[1] !== e[1].toLowerCase();
}
r(E, "cIsReservedIdentifier");
function d(e) {
  return e.eatWhile(/[\w\.']/), "number";
}
r(d, "cpp14Literal");
function g(e, n) {
  if (e.backUp(1), e.match(/^(?:R|u8R|uR|UR|LR)/)) {
    var t = e.match(/^"([^\s\\()]{0,16})\(/);
    return t ? (n.cpp11RawStringDelim = t[1], n.tokenize = H, H(e, n)) : !1;
  }
  return e.match(/^(?:u8|u|U|L)/) ? e.match(
    /^["']/,
    /* eat */
    !1
  ) ? "string" : !1 : (e.next(), !1);
}
r(g, "cpp11StringHook");
function J(e) {
  var n = /(\w+)::~?(\w+)$/.exec(e);
  return n && n[1] == n[2];
}
r(J, "cppLooksLikeConstructor");
function G(e, n) {
  for (var t; (t = e.next()) != null; )
    if (t == '"' && !e.eat('"')) {
      n.tokenize = null;
      break;
    }
  return "string";
}
r(G, "tokenAtString");
function H(e, n) {
  var t = n.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&"), c = e.match(new RegExp(".*?\\)" + t + '"'));
  return c ? n.tokenize = null : e.skipToEnd(), "string";
}
r(H, "tokenRawString");
const we = y({
  name: "c",
  keywords: i(I),
  types: N,
  blockKeywords: i(D),
  defKeywords: i(M),
  typeFirstDefinitions: !0,
  atoms: i("NULL true false"),
  isReservedIdentifier: E,
  hooks: {
    "#": b,
    "*": C
  }
}), ve = y({
  name: "cpp",
  keywords: i(I + " " + Q),
  types: N,
  blockKeywords: i(D + " class try catch"),
  defKeywords: i(M + " class namespace"),
  typeFirstDefinitions: !0,
  atoms: i("true false NULL nullptr"),
  dontIndentStatements: /^template$/,
  isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
  isReservedIdentifier: E,
  hooks: {
    "#": b,
    "*": C,
    u: g,
    U: g,
    L: g,
    R: g,
    0: d,
    1: d,
    2: d,
    3: d,
    4: d,
    5: d,
    6: d,
    7: d,
    8: d,
    9: d,
    token: /* @__PURE__ */ r(function(e, n, t) {
      if (t == "variable" && e.peek() == "(" && (n.prevToken == ";" || n.prevToken == null || n.prevToken == "}") && J(e.current()))
        return "def";
    }, "token")
  },
  namespaceSeparator: "::"
}), _e = y({
  name: "java",
  keywords: i("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),
  types: i("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),
  blockKeywords: i("catch class do else finally for if switch try while"),
  defKeywords: i("class interface enum @interface"),
  typeFirstDefinitions: !0,
  atoms: i("true false null"),
  number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
  hooks: {
    "@": /* @__PURE__ */ r(function(e) {
      return e.match("interface", !1) ? !1 : (e.eatWhile(/[\w\$_]/), "meta");
    }, "@"),
    '"': /* @__PURE__ */ r(function(e, n) {
      return e.match(/""$/) ? (n.tokenize = ee, n.tokenize(e, n)) : !1;
    }, '"')
  }
}), xe = y({
  name: "csharp",
  keywords: i("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
  types: i("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
  blockKeywords: i("catch class do else finally for foreach if struct switch try while"),
  defKeywords: i("class interface namespace record struct var"),
  typeFirstDefinitions: !0,
  atoms: i("true false null"),
  hooks: {
    "@": /* @__PURE__ */ r(function(e, n) {
      return e.eat('"') ? (n.tokenize = G, G(e, n)) : (e.eatWhile(/[\w\$_]/), "meta");
    }, "@")
  }
});
function ee(e, n) {
  for (var t = !1; !e.eol(); ) {
    if (!t && e.match('"""')) {
      n.tokenize = null;
      break;
    }
    t = e.next() == "\\" && !t;
  }
  return "string";
}
r(ee, "tokenTripleString");
function T(e) {
  return function(n, t) {
    for (var c; c = n.next(); )
      if (c == "*" && n.eat("/"))
        if (e == 1) {
          t.tokenize = null;
          break;
        } else
          return t.tokenize = T(e - 1), t.tokenize(n, t);
      else if (c == "/" && n.eat("*"))
        return t.tokenize = T(e + 1), t.tokenize(n, t);
    return "comment";
  };
}
r(T, "tokenNestedComment");
const Se = y({
  name: "scala",
  keywords: i(
    /* scala */
    "abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"
  ),
  types: i(
    "AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"
  ),
  multiLineStrings: !0,
  blockKeywords: i("catch class enum do else finally for forSome if match switch try while"),
  defKeywords: i("class enum def object package trait type val var"),
  atoms: i("true false null"),
  indentStatements: !1,
  indentSwitch: !1,
  isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
  hooks: {
    "@": /* @__PURE__ */ r(function(e) {
      return e.eatWhile(/[\w\$_]/), "meta";
    }, "@"),
    '"': /* @__PURE__ */ r(function(e, n) {
      return e.match('""') ? (n.tokenize = ee, n.tokenize(e, n)) : !1;
    }, '"'),
    "'": /* @__PURE__ */ r(function(e) {
      return e.match(/^(\\[^'\s]+|[^\\'])'/) ? "character" : (e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom");
    }, "'"),
    "=": /* @__PURE__ */ r(function(e, n) {
      var t = n.context;
      return t.type == "}" && t.align && e.eat(">") ? (n.context = new F(t.indented, t.column, t.type, t.info, null, t.prev), "operator") : !1;
    }, "="),
    "/": /* @__PURE__ */ r(function(e, n) {
      return e.eat("*") ? (n.tokenize = T(1), n.tokenize(e, n)) : !1;
    }, "/")
  },
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', '"""'] }
  }
});
function he(e) {
  return function(n, t) {
    for (var c = !1, u, p = !1; !n.eol(); ) {
      if (!e && !c && n.match('"')) {
        p = !0;
        break;
      }
      if (e && n.match('"""')) {
        p = !0;
        break;
      }
      u = n.next(), !c && u == "$" && n.match("{") && n.skipTo("}"), c = !c && u == "\\" && !e;
    }
    return (p || !e) && (t.tokenize = null), "string";
  };
}
r(he, "tokenKotlinString");
const Te = y({
  name: "kotlin",
  keywords: i(
    /*keywords*/
    "package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"
  ),
  types: i(
    /* package java.lang */
    "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"
  ),
  intendSwitch: !1,
  indentStatements: !1,
  multiLineStrings: !0,
  number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
  blockKeywords: i("catch class do else finally for if where try while enum"),
  defKeywords: i("class val var object interface fun"),
  atoms: i("true false null this"),
  hooks: {
    "@": /* @__PURE__ */ r(function(e) {
      return e.eatWhile(/[\w\$_]/), "meta";
    }, "@"),
    "*": /* @__PURE__ */ r(function(e, n) {
      return n.prevToken == "." ? "variable" : "operator";
    }, "*"),
    '"': /* @__PURE__ */ r(function(e, n) {
      return n.tokenize = he(e.match('""')), n.tokenize(e, n);
    }, '"'),
    "/": /* @__PURE__ */ r(function(e, n) {
      return e.eat("*") ? (n.tokenize = T(1), n.tokenize(e, n)) : !1;
    }, "/"),
    indent: /* @__PURE__ */ r(function(e, n, t, c) {
      var u = t && t.charAt(0);
      if ((e.prevToken == "}" || e.prevToken == ")") && t == "")
        return e.indented;
      if (e.prevToken == "operator" && t != "}" && e.context.type != "}" || e.prevToken == "variable" && u == "." || (e.prevToken == "}" || e.prevToken == ")") && u == ".")
        return c * 2 + n.indented;
      if (n.align && n.type == "}")
        return n.indented + (e.context.type == (t || "").charAt(0) ? 0 : c);
    }, "indent")
  },
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', '"""'] }
  }
}), Ie = y({
  name: "shader",
  keywords: i("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),
  types: i("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),
  blockKeywords: i("for while do if else struct"),
  builtin: i("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
  atoms: i("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
  indentSwitch: !1,
  hooks: { "#": b }
}), Ne = y({
  name: "nesc",
  keywords: i(I + " as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),
  types: N,
  blockKeywords: i(D),
  atoms: i("null true false"),
  hooks: { "#": b }
}), De = y({
  name: "objectivec",
  keywords: i(I + " " + Z),
  types: Y,
  builtin: i(X),
  blockKeywords: i(D + " @synthesize @try @catch @finally @autoreleasepool @synchronized"),
  defKeywords: i(M + " @interface @implementation @protocol @class"),
  dontIndentStatements: /^@.*$/,
  typeFirstDefinitions: !0,
  atoms: i("YES NO NULL Nil nil true false nullptr"),
  isReservedIdentifier: E,
  hooks: {
    "#": b,
    "*": C
  }
}), Le = y({
  name: "objectivecpp",
  keywords: i(I + " " + Z + " " + Q),
  types: Y,
  builtin: i(X),
  blockKeywords: i(D + " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),
  defKeywords: i(M + " @interface @implementation @protocol @class class namespace"),
  dontIndentStatements: /^@.*$|^template$/,
  typeFirstDefinitions: !0,
  atoms: i("YES NO NULL Nil nil true false nullptr"),
  isReservedIdentifier: E,
  hooks: {
    "#": b,
    "*": C,
    u: g,
    U: g,
    L: g,
    R: g,
    0: d,
    1: d,
    2: d,
    3: d,
    4: d,
    5: d,
    6: d,
    7: d,
    8: d,
    9: d,
    token: /* @__PURE__ */ r(function(e, n, t) {
      if (t == "variable" && e.peek() == "(" && (n.prevToken == ";" || n.prevToken == null || n.prevToken == "}") && J(e.current()))
        return "def";
    }, "token")
  },
  namespaceSeparator: "::"
}), ze = y({
  name: "squirrel",
  keywords: i("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),
  types: N,
  blockKeywords: i("case catch class else for foreach if switch try while"),
  defKeywords: i("function local class"),
  typeFirstDefinitions: !0,
  atoms: i("true false null"),
  hooks: { "#": b }
});
var z = null;
function ne(e) {
  return function(n, t) {
    for (var c = !1, u, p = !1; !n.eol(); ) {
      if (!c && n.match('"') && (e == "single" || n.match('""'))) {
        p = !0;
        break;
      }
      if (!c && n.match("``")) {
        z = ne(e), p = !0;
        break;
      }
      u = n.next(), c = e == "single" && !c && u == "\\";
    }
    return p && (t.tokenize = null), "string";
  };
}
r(ne, "tokenCeylonString");
const Me = y({
  name: "ceylon",
  keywords: i("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),
  types: /* @__PURE__ */ r(function(e) {
    var n = e.charAt(0);
    return n === n.toUpperCase() && n !== n.toLowerCase();
  }, "types"),
  blockKeywords: i("case catch class dynamic else finally for function if interface module new object switch try while"),
  defKeywords: i("class dynamic function interface module object package value"),
  builtin: i("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),
  isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
  isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
  numberStart: /[\d#$]/,
  number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
  multiLineStrings: !0,
  typeFirstDefinitions: !0,
  atoms: i("true false null larger smaller equal empty finished"),
  indentSwitch: !1,
  styleDefs: !1,
  hooks: {
    "@": /* @__PURE__ */ r(function(e) {
      return e.eatWhile(/[\w\$_]/), "meta";
    }, "@"),
    '"': /* @__PURE__ */ r(function(e, n) {
      return n.tokenize = ne(e.match('""') ? "triple" : "single"), n.tokenize(e, n);
    }, '"'),
    "`": /* @__PURE__ */ r(function(e, n) {
      return !z || !e.match("`") ? !1 : (n.tokenize = z, z = null, n.tokenize(e, n));
    }, "`"),
    "'": /* @__PURE__ */ r(function(e) {
      return e.match(/^(\\[^'\s]+|[^\\'])'/) ? "string.special" : (e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom");
    }, "'"),
    token: /* @__PURE__ */ r(function(e, n, t) {
      if ((t == "variable" || t == "type") && n.prevToken == ".")
        return "variableName.special";
    }, "token")
  },
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", "'", '"', '"""'] }
  }
});
function ye(e) {
  (e.interpolationStack || (e.interpolationStack = [])).push(e.tokenize);
}
r(ye, "pushInterpolationStack");
function te(e) {
  return (e.interpolationStack || (e.interpolationStack = [])).pop();
}
r(te, "popInterpolationStack");
function ke(e) {
  return e.interpolationStack ? e.interpolationStack.length : 0;
}
r(ke, "sizeInterpolationStack");
function O(e, n, t, c) {
  var u = !1;
  if (n.eat(e))
    if (n.eat(e)) u = !0;
    else return "string";
  function p(w, x) {
    for (var v = !1; !w.eol(); ) {
      if (!c && !v && w.peek() == "$")
        return ye(x), x.tokenize = me, "string";
      var k = w.next();
      if (k == e && !v && (!u || w.match(e + e))) {
        x.tokenize = null;
        break;
      }
      v = !c && !v && k == "\\";
    }
    return "string";
  }
  return r(p, "tokenStringHelper"), t.tokenize = p, p(n, t);
}
r(O, "tokenDartString");
function me(e, n) {
  return e.eat("$"), e.eat("{") ? n.tokenize = null : n.tokenize = ge, null;
}
r(me, "tokenInterpolation");
function ge(e, n) {
  return e.eatWhile(/[\w_]/), n.tokenize = te(n), "variable";
}
r(ge, "tokenInterpolationIdentifier");
const Ce = y({
  name: "dart",
  keywords: i("this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as extension on yield late required sealed base interface when inline"),
  blockKeywords: i("try catch finally do else for if switch while"),
  builtin: i("void bool num int double dynamic var String Null Never"),
  atoms: i("true false null"),
  hooks: {
    "@": /* @__PURE__ */ r(function(e) {
      return e.eatWhile(/[\w\$_\.]/), "meta";
    }, "@"),
    // custom string handling to deal with triple-quoted strings and string interpolation
    "'": /* @__PURE__ */ r(function(e, n) {
      return O("'", e, n, !1);
    }, "'"),
    '"': /* @__PURE__ */ r(function(e, n) {
      return O('"', e, n, !1);
    }, '"'),
    r: /* @__PURE__ */ r(function(e, n) {
      var t = e.peek();
      return t == "'" || t == '"' ? O(e.next(), e, n, !0) : !1;
    }, "r"),
    "}": /* @__PURE__ */ r(function(e, n) {
      return ke(n) > 0 ? (n.tokenize = te(n), null) : !1;
    }, "}"),
    "/": /* @__PURE__ */ r(function(e, n) {
      return e.eat("*") ? (n.tokenize = T(1), n.tokenize(e, n)) : !1;
    }, "/"),
    token: /* @__PURE__ */ r(function(e, n, t) {
      if (t == "variable") {
        var c = RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$", "g");
        if (c.test(e.current()))
          return "type";
      }
    }, "token")
  }
});
export {
  we as c,
  Me as ceylon,
  y as clike,
  ve as cpp,
  xe as csharp,
  Ce as dart,
  _e as java,
  Te as kotlin,
  Ne as nesC,
  De as objectiveC,
  Le as objectiveCpp,
  Se as scala,
  Ie as shader,
  ze as squirrel
};
