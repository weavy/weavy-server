﻿var S = Object.defineProperty;
var t = (e, n) => S(e, "name", { value: n, configurable: !0 });
var q = "builtin", c = "comment", x = "string", b = "symbol", o = "atom", v = "number", k = "bracket", C = 2;
function E(e) {
  for (var n = {}, i = e.split(" "), l = 0; l < i.length; ++l) n[i[l]] = !0;
  return n;
}
t(E, "makeKeywords");
var y = E("λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"), N = E("define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless");
function M(e, n, i) {
  this.indent = e, this.type = n, this.prev = i;
}
t(M, "stateStack");
function u(e, n, i) {
  e.indentStack = new M(n, i, e.indentStack);
}
t(u, "pushStack");
function Q(e) {
  e.indentStack = e.indentStack.prev;
}
t(Q, "popStack");
var I = new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i), R = new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i), B = new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i), $ = new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);
function O(e) {
  return e.match(I);
}
t(O, "isBinaryNumber");
function U(e) {
  return e.match(R);
}
t(U, "isOctalNumber");
function p(e, n) {
  return n === !0 && e.backUp(1), e.match($);
}
t(p, "isDecimalNumber");
function D(e) {
  return e.match(B);
}
t(D, "isHexNumber");
function w(e, n) {
  for (var i, l = !1; (i = e.next()) != null; ) {
    if (i == n.token && !l) {
      n.state.mode = !1;
      break;
    }
    l = !l && i == "\\";
  }
}
t(w, "processEscapedSequence");
const _ = {
  name: "scheme",
  startState: /* @__PURE__ */ t(function() {
    return {
      indentStack: null,
      indentation: 0,
      mode: !1,
      sExprComment: !1,
      sExprQuote: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ t(function(e, n) {
    if (n.indentStack == null && e.sol() && (n.indentation = e.indentation()), e.eatSpace())
      return null;
    var i = null;
    switch (n.mode) {
      case "string":
        w(e, {
          token: '"',
          state: n
        }), i = x;
        break;
      case "symbol":
        w(e, {
          token: "|",
          state: n
        }), i = b;
        break;
      case "comment":
        for (var l, m = !1; (l = e.next()) != null; ) {
          if (l == "#" && m) {
            n.mode = !1;
            break;
          }
          m = l == "|";
        }
        i = c;
        break;
      case "s-expr-comment":
        if (n.mode = !1, e.peek() == "(" || e.peek() == "[")
          n.sExprComment = 0;
        else {
          e.eatWhile(/[^\s\(\)\[\]]/), i = c;
          break;
        }
      default:
        var r = e.next();
        if (r == '"')
          n.mode = "string", i = x;
        else if (r == "'")
          e.peek() == "(" || e.peek() == "[" ? (typeof n.sExprQuote != "number" && (n.sExprQuote = 0), i = o) : (e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/), i = o);
        else if (r == "|")
          n.mode = "symbol", i = b;
        else if (r == "#")
          if (e.eat("|"))
            n.mode = "comment", i = c;
          else if (e.eat(/[tf]/i))
            i = o;
          else if (e.eat(";"))
            n.mode = "s-expr-comment", i = c;
          else {
            var a = null, d = !1, h = !0;
            e.eat(/[ei]/i) ? d = !0 : e.backUp(1), e.match(/^#b/i) ? a = O : e.match(/^#o/i) ? a = U : e.match(/^#x/i) ? a = D : e.match(/^#d/i) ? a = p : e.match(/^[-+0-9.]/, !1) ? (h = !1, a = p) : d || e.eat("#"), a != null && (h && !d && e.match(/^#[ei]/i), a(e) && (i = v));
          }
        else if (/^[-+0-9.]/.test(r) && p(e, !0))
          i = v;
        else if (r == ";")
          e.skipToEnd(), i = c;
        else if (r == "(" || r == "[") {
          for (var f = "", s = e.column(), g; (g = e.eat(/[^\s\(\[\;\)\]]/)) != null; )
            f += g;
          f.length > 0 && N.propertyIsEnumerable(f) ? u(n, s + C, r) : (e.eatSpace(), e.eol() || e.peek() == ";" ? u(n, s + 1, r) : u(n, s + e.current().length, r)), e.backUp(e.current().length - 1), typeof n.sExprComment == "number" && n.sExprComment++, typeof n.sExprQuote == "number" && n.sExprQuote++, i = k;
        } else r == ")" || r == "]" ? (i = k, n.indentStack != null && n.indentStack.type == (r == ")" ? "(" : "[") && (Q(n), typeof n.sExprComment == "number" && --n.sExprComment == 0 && (i = c, n.sExprComment = !1), typeof n.sExprQuote == "number" && --n.sExprQuote == 0 && (i = o, n.sExprQuote = !1))) : (e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/), y && y.propertyIsEnumerable(e.current()) ? i = q : i = "variable");
    }
    return typeof n.sExprComment == "number" ? c : typeof n.sExprQuote == "number" ? o : i;
  }, "token"),
  indent: /* @__PURE__ */ t(function(e) {
    return e.indentStack == null ? e.indentation : e.indentStack.indent;
  }, "indent"),
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", '"'] },
    commentTokens: { line: ";;" }
  }
};
export {
  _ as scheme
};
