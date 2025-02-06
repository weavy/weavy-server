﻿var P = Object.defineProperty;
var o = (i, T) => P(i, "name", { value: T, configurable: !0 });
function I(i) {
  for (var T = {}, a = i.split(" "), l = 0; l < a.length; ++l) T[a[l]] = !0;
  return T;
}
o(I, "words");
const u = {
  keywords: I("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),
  cmipVerbs: I("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),
  compareTypes: I("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),
  status: I("current deprecated mandatory obsolete"),
  tags: I("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),
  storage: I("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),
  modifier: I("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),
  accessTypes: I("not-accessible accessible-for-notify read-only read-create read-write"),
  multiLineStrings: !0
};
function M(i) {
  var T = i.keywords || u.keywords, a = i.cmipVerbs || u.cmipVerbs, l = i.compareTypes || u.compareTypes, d = i.status || u.status, f = i.tags || u.tags, m = i.storage || u.storage, C = i.modifier || u.modifier, R = i.accessTypes || u.accessTypes, y = i.multiLineStrings || u.multiLineStrings, D = i.indentStatements !== !1, p = /[\|\^]/, E;
  function g(e, n) {
    var t = e.next();
    if (t == '"' || t == "'")
      return n.tokenize = L(t), n.tokenize(e, n);
    if (/[\[\]\(\){}:=,;]/.test(t))
      return E = t, "punctuation";
    if (t == "-" && e.eat("-"))
      return e.skipToEnd(), "comment";
    if (/\d/.test(t))
      return e.eatWhile(/[\w\.]/), "number";
    if (p.test(t))
      return e.eatWhile(p), "operator";
    e.eatWhile(/[\w\-]/);
    var r = e.current();
    return T.propertyIsEnumerable(r) ? "keyword" : a.propertyIsEnumerable(r) ? "variableName" : l.propertyIsEnumerable(r) ? "atom" : d.propertyIsEnumerable(r) ? "comment" : f.propertyIsEnumerable(r) ? "typeName" : m.propertyIsEnumerable(r) || C.propertyIsEnumerable(r) || R.propertyIsEnumerable(r) ? "modifier" : "variableName";
  }
  o(g, "tokenBase");
  function L(e) {
    return function(n, t) {
      for (var r = !1, c, N = !1; (c = n.next()) != null; ) {
        if (c == e && !r) {
          var S = n.peek();
          S && (S = S.toLowerCase(), (S == "b" || S == "h" || S == "o") && n.next()), N = !0;
          break;
        }
        r = !r && c == "\\";
      }
      return (N || !(r || y)) && (t.tokenize = null), "string";
    };
  }
  o(L, "tokenString");
  function O(e, n, t, r, c) {
    this.indented = e, this.column = n, this.type = t, this.align = r, this.prev = c;
  }
  o(O, "Context");
  function A(e, n, t) {
    var r = e.indented;
    return e.context && e.context.type == "statement" && (r = e.context.indented), e.context = new O(r, n, t, null, e.context);
  }
  o(A, "pushContext");
  function s(e) {
    var n = e.context.type;
    return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
  }
  return o(s, "popContext"), {
    name: "asn1",
    startState: /* @__PURE__ */ o(function() {
      return {
        tokenize: null,
        context: new O(-2, 0, "top", !1),
        indented: 0,
        startOfLine: !0
      };
    }, "startState"),
    token: /* @__PURE__ */ o(function(e, n) {
      var t = n.context;
      if (e.sol() && (t.align == null && (t.align = !1), n.indented = e.indentation(), n.startOfLine = !0), e.eatSpace()) return null;
      E = null;
      var r = (n.tokenize || g)(e, n);
      if (r == "comment") return r;
      if (t.align == null && (t.align = !0), (E == ";" || E == ":" || E == ",") && t.type == "statement")
        s(n);
      else if (E == "{") A(n, e.column(), "}");
      else if (E == "[") A(n, e.column(), "]");
      else if (E == "(") A(n, e.column(), ")");
      else if (E == "}") {
        for (; t.type == "statement"; ) t = s(n);
        for (t.type == "}" && (t = s(n)); t.type == "statement"; ) t = s(n);
      } else E == t.type ? s(n) : D && ((t.type == "}" || t.type == "top") && E != ";" || t.type == "statement" && E == "newstatement") && A(n, e.column(), "statement");
      return n.startOfLine = !1, r;
    }, "token"),
    languageData: {
      indentOnInput: /^\s*[{}]$/,
      commentTokens: { line: "--" }
    }
  };
}
o(M, "asn1");
export {
  M as asn1
};
