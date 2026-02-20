var O = Object.defineProperty;
var r = (e, R) => O(e, "name", { value: R, configurable: !0 });
var _ = {
  PRE_SUBJECT: 0,
  WRITING_SUB_URI: 1,
  WRITING_BNODE_URI: 2,
  PRE_PRED: 3,
  WRITING_PRED_URI: 4,
  PRE_OBJ: 5,
  WRITING_OBJ_URI: 6,
  WRITING_OBJ_BNODE: 7,
  WRITING_OBJ_LITERAL: 8,
  WRITING_LIT_LANG: 9,
  WRITING_LIT_TYPE: 10,
  POST_OBJ: 11,
  ERROR: 12
};
function T(e, R) {
  var I = e.location, i;
  I == _.PRE_SUBJECT && R == "<" ? i = _.WRITING_SUB_URI : I == _.PRE_SUBJECT && R == "_" ? i = _.WRITING_BNODE_URI : I == _.PRE_PRED && R == "<" ? i = _.WRITING_PRED_URI : I == _.PRE_OBJ && R == "<" ? i = _.WRITING_OBJ_URI : I == _.PRE_OBJ && R == "_" ? i = _.WRITING_OBJ_BNODE : I == _.PRE_OBJ && R == '"' ? i = _.WRITING_OBJ_LITERAL : I == _.WRITING_SUB_URI && R == ">" || I == _.WRITING_BNODE_URI && R == " " ? i = _.PRE_PRED : I == _.WRITING_PRED_URI && R == ">" ? i = _.PRE_OBJ : I == _.WRITING_OBJ_URI && R == ">" || I == _.WRITING_OBJ_BNODE && R == " " || I == _.WRITING_OBJ_LITERAL && R == '"' || I == _.WRITING_LIT_LANG && R == " " || I == _.WRITING_LIT_TYPE && R == ">" ? i = _.POST_OBJ : I == _.WRITING_OBJ_LITERAL && R == "@" ? i = _.WRITING_LIT_LANG : I == _.WRITING_OBJ_LITERAL && R == "^" ? i = _.WRITING_LIT_TYPE : R == " " && (I == _.PRE_SUBJECT || I == _.PRE_PRED || I == _.PRE_OBJ || I == _.POST_OBJ) ? i = I : I == _.POST_OBJ && R == "." ? i = _.PRE_SUBJECT : i = _.ERROR, e.location = i;
}
r(T, "transitState");
const P = {
  name: "ntriples",
  startState: /* @__PURE__ */ r(function() {
    return {
      location: _.PRE_SUBJECT,
      uris: [],
      anchors: [],
      bnodes: [],
      langs: [],
      types: []
    };
  }, "startState"),
  token: /* @__PURE__ */ r(function(e, R) {
    var I = e.next();
    if (I == "<") {
      T(R, I);
      var i = "";
      return e.eatWhile(function(n) {
        return n != "#" && n != ">" ? (i += n, !0) : !1;
      }), R.uris.push(i), e.match("#", !1) || (e.next(), T(R, ">")), "variable";
    }
    if (I == "#") {
      var f = "";
      return e.eatWhile(function(n) {
        return n != ">" && n != " " ? (f += n, !0) : !1;
      }), R.anchors.push(f), "url";
    }
    if (I == ">")
      return T(R, ">"), "variable";
    if (I == "_") {
      T(R, I);
      var E = "";
      return e.eatWhile(function(n) {
        return n != " " ? (E += n, !0) : !1;
      }), R.bnodes.push(E), e.next(), T(R, " "), "builtin";
    }
    if (I == '"')
      return T(R, I), e.eatWhile(function(n) {
        return n != '"';
      }), e.next(), e.peek() != "@" && e.peek() != "^" && T(R, '"'), "string";
    if (I == "@") {
      T(R, "@");
      var l = "";
      return e.eatWhile(function(n) {
        return n != " " ? (l += n, !0) : !1;
      }), R.langs.push(l), e.next(), T(R, " "), "string.special";
    }
    if (I == "^") {
      e.next(), T(R, "^");
      var u = "";
      return e.eatWhile(function(n) {
        return n != ">" ? (u += n, !0) : !1;
      }), R.types.push(u), e.next(), T(R, ">"), "variable";
    }
    I == " " && T(R, I), I == "." && T(R, I);
  }, "token")
};
export {
  P as ntriples
};
