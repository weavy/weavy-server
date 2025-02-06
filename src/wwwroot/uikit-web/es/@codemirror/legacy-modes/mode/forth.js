﻿var O = Object.defineProperty;
var R = (i, n) => O(i, "name", { value: n, configurable: !0 });
function r(i) {
  var n = [];
  return i.split(" ").forEach(function(E) {
    n.push({ name: E });
  }), n;
}
R(r, "toWordList");
var L = r(
  "INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL"
), T = r("IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE");
function t(i, n) {
  var E;
  for (E = i.length - 1; E >= 0; E--)
    if (i[E].name === n.toUpperCase())
      return i[E];
}
R(t, "searchWordList");
const A = {
  name: "forth",
  startState: /* @__PURE__ */ R(function() {
    return {
      state: "",
      base: 10,
      coreWordList: L,
      immediateWordList: T,
      wordList: []
    };
  }, "startState"),
  token: /* @__PURE__ */ R(function(i, n) {
    var E;
    if (i.eatSpace())
      return null;
    if (n.state === "") {
      if (i.match(/^(\]|:NONAME)(\s|$)/i))
        return n.state = " compilation", "builtin";
      if (E = i.match(/^(\:)\s+(\S+)(\s|$)+/), E)
        return n.wordList.push({ name: E[2].toUpperCase() }), n.state = " compilation", "def";
      if (E = i.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i), E)
        return n.wordList.push({ name: E[2].toUpperCase() }), "def";
      if (E = i.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/), E)
        return "builtin";
    } else {
      if (i.match(/^(\;|\[)(\s)/))
        return n.state = "", i.backUp(1), "builtin";
      if (i.match(/^(\;|\[)($)/))
        return n.state = "", "builtin";
      if (i.match(/^(POSTPONE)\s+\S+(\s|$)+/))
        return "builtin";
    }
    if (E = i.match(/^(\S+)(\s+|$)/), E)
      return t(n.wordList, E[1]) !== void 0 ? "variable" : E[1] === "\\" ? (i.skipToEnd(), "comment") : t(n.coreWordList, E[1]) !== void 0 ? "builtin" : t(n.immediateWordList, E[1]) !== void 0 ? "keyword" : E[1] === "(" ? (i.eatWhile(function(e) {
        return e !== ")";
      }), i.eat(")"), "comment") : E[1] === ".(" ? (i.eatWhile(function(e) {
        return e !== ")";
      }), i.eat(")"), "string") : E[1] === 'S"' || E[1] === '."' || E[1] === 'C"' ? (i.eatWhile(function(e) {
        return e !== '"';
      }), i.eat('"'), "string") : E[1] - 68719476735 ? "number" : "atom";
  }, "token")
};
export {
  A as forth
};
