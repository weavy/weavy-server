var me = Object.defineProperty;
var i = (g, G) => me(g, "name", { value: G, configurable: !0 });
function ar(g) {
  var G = g.statementIndent, or = g.jsonld, wr = g.json || or, b = g.typescript, H = g.wordCharacters || /[\w$\xa1-\uffff]/, hr = (function() {
    function r(y) {
      return { type: y, style: "keyword" };
    }
    i(r, "kw");
    var e = r("keyword a"), t = r("keyword b"), u = r("keyword c"), a = r("keyword d"), d = r("operator"), k = { type: "atom", style: "atom" };
    return {
      if: r("if"),
      while: e,
      with: e,
      else: t,
      do: t,
      try: t,
      finally: t,
      return: a,
      break: a,
      continue: a,
      new: r("new"),
      delete: u,
      void: u,
      throw: u,
      debugger: r("debugger"),
      var: r("var"),
      const: r("var"),
      let: r("var"),
      function: r("function"),
      catch: r("catch"),
      for: r("for"),
      switch: r("switch"),
      case: r("case"),
      default: r("default"),
      in: d,
      typeof: d,
      instanceof: d,
      true: k,
      false: k,
      null: k,
      undefined: k,
      NaN: k,
      Infinity: k,
      this: r("this"),
      class: r("class"),
      super: r("atom"),
      yield: u,
      export: r("export"),
      import: r("import"),
      extends: u,
      await: u
    };
  })(), xr = /[+\-*&%=<>!?|~^@]/, qr = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
  function Nr(r) {
    for (var e = !1, t, u = !1; (t = r.next()) != null; ) {
      if (!e) {
        if (t == "/" && !u) return;
        t == "[" ? u = !0 : u && t == "]" && (u = !1);
      }
      e = !e && t == "\\";
    }
  }
  i(Nr, "readRegexp");
  var L, X;
  function w(r, e, t) {
    return L = r, X = t, e;
  }
  i(w, "ret");
  function E(r, e) {
    var t = r.next();
    if (t == '"' || t == "'")
      return e.tokenize = Br(t), e.tokenize(r, e);
    if (t == "." && r.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
      return w("number", "number");
    if (t == "." && r.match(".."))
      return w("spread", "meta");
    if (/[\[\]{}\(\),;\:\.]/.test(t))
      return w(t);
    if (t == "=" && r.eat(">"))
      return w("=>", "operator");
    if (t == "0" && r.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
      return w("number", "number");
    if (/\d/.test(t))
      return r.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), w("number", "number");
    if (t == "/")
      return r.eat("*") ? (e.tokenize = Y, Y(r, e)) : r.eat("/") ? (r.skipToEnd(), w("comment", "comment")) : de(r, e, 1) ? (Nr(r), r.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), w("regexp", "string.special")) : (r.eat("="), w("operator", "operator", r.current()));
    if (t == "`")
      return e.tokenize = P, P(r, e);
    if (t == "#" && r.peek() == "!")
      return r.skipToEnd(), w("meta", "meta");
    if (t == "#" && r.eatWhile(H))
      return w("variable", "property");
    if (t == "<" && r.match("!--") || t == "-" && r.match("->") && !/\S/.test(r.string.slice(0, r.start)))
      return r.skipToEnd(), w("comment", "comment");
    if (xr.test(t))
      return (t != ">" || !e.lexical || e.lexical.type != ">") && (r.eat("=") ? (t == "!" || t == "=") && r.eat("=") : /[<>*+\-|&?]/.test(t) && (r.eat(t), t == ">" && r.eat(t))), t == "?" && r.eat(".") ? w(".") : w("operator", "operator", r.current());
    if (H.test(t)) {
      r.eatWhile(H);
      var u = r.current();
      if (e.lastType != ".") {
        if (hr.propertyIsEnumerable(u)) {
          var a = hr[u];
          return w(a.type, a.style, u);
        }
        if (u == "async" && r.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
          return w("async", "keyword", u);
      }
      return w("variable", "variable", u);
    }
  }
  i(E, "tokenBase");
  function Br(r) {
    return function(e, t) {
      var u = !1, a;
      if (or && e.peek() == "@" && e.match(qr))
        return t.tokenize = E, w("jsonld-keyword", "meta");
      for (; (a = e.next()) != null && !(a == r && !u); )
        u = !u && a == "\\";
      return u || (t.tokenize = E), w("string", "string");
    };
  }
  i(Br, "tokenString");
  function Y(r, e) {
    for (var t = !1, u; u = r.next(); ) {
      if (u == "/" && t) {
        e.tokenize = E;
        break;
      }
      t = u == "*";
    }
    return w("comment", "comment");
  }
  i(Y, "tokenComment");
  function P(r, e) {
    for (var t = !1, u; (u = r.next()) != null; ) {
      if (!t && (u == "`" || u == "$" && r.eat("{"))) {
        e.tokenize = E;
        break;
      }
      t = !t && u == "\\";
    }
    return w("quasi", "string.special", r.current());
  }
  i(P, "tokenQuasi");
  var Fr = "([{}])";
  function sr(r, e) {
    e.fatArrowAt && (e.fatArrowAt = null);
    var t = r.string.indexOf("=>", r.start);
    if (!(t < 0)) {
      if (b) {
        var u = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(r.string.slice(r.start, t));
        u && (t = u.index);
      }
      for (var a = 0, d = !1, k = t - 1; k >= 0; --k) {
        var y = r.string.charAt(k), T = Fr.indexOf(y);
        if (T >= 0 && T < 3) {
          if (!a) {
            ++k;
            break;
          }
          if (--a == 0) {
            y == "(" && (d = !0);
            break;
          }
        } else if (T >= 3 && T < 6)
          ++a;
        else if (H.test(y))
          d = !0;
        else if (/["'\/`]/.test(y))
          for (; ; --k) {
            if (k == 0) return;
            var U = r.string.charAt(k - 1);
            if (U == y && r.string.charAt(k - 2) != "\\") {
              k--;
              break;
            }
          }
        else if (d && !a) {
          ++k;
          break;
        }
      }
      d && !a && (e.fatArrowAt = k);
    }
  }
  i(sr, "findFatArrow");
  var Jr = {
    atom: !0,
    number: !0,
    variable: !0,
    string: !0,
    regexp: !0,
    this: !0,
    import: !0,
    "jsonld-keyword": !0
  };
  function gr(r, e, t, u, a, d) {
    this.indented = r, this.column = e, this.type = t, this.prev = a, this.info = d, u != null && (this.align = u);
  }
  i(gr, "JSLexical");
  function Mr(r, e) {
    for (var t = r.localVars; t; t = t.next)
      if (t.name == e) return !0;
    for (var u = r.context; u; u = u.prev)
      for (var t = u.vars; t; t = t.next)
        if (t.name == e) return !0;
  }
  i(Mr, "inScope");
  function Dr(r, e, t, u, a) {
    var d = r.cc;
    for (f.state = r, f.stream = a, f.marked = null, f.cc = d, f.style = e, r.lexical.hasOwnProperty("align") || (r.lexical.align = !0); ; ) {
      var k = d.length ? d.pop() : wr ? p : h;
      if (k(t, u)) {
        for (; d.length && d[d.length - 1].lex; )
          d.pop()();
        return f.marked ? f.marked : t == "variable" && Mr(r, u) ? "variableName.local" : e;
      }
    }
  }
  i(Dr, "parseJS");
  var f = { state: null, marked: null, cc: null };
  function s() {
    for (var r = arguments.length - 1; r >= 0; r--) f.cc.push(arguments[r]);
  }
  i(s, "pass");
  function n() {
    return s.apply(null, arguments), !0;
  }
  i(n, "cont");
  function lr(r, e) {
    for (var t = e; t; t = t.next) if (t.name == r) return !0;
    return !1;
  }
  i(lr, "inList");
  function N(r) {
    var e = f.state;
    if (f.marked = "def", e.context) {
      if (e.lexical.info == "var" && e.context && e.context.block) {
        var t = vr(r, e.context);
        if (t != null) {
          e.context = t;
          return;
        }
      } else if (!lr(r, e.localVars)) {
        e.localVars = new R(r, e.localVars);
        return;
      }
    }
    g.globalVars && !lr(r, e.globalVars) && (e.globalVars = new R(r, e.globalVars));
  }
  i(N, "register");
  function vr(r, e) {
    if (e)
      if (e.block) {
        var t = vr(r, e.prev);
        return t ? t == e.prev ? e : new Q(t, e.vars, !0) : null;
      } else return lr(r, e.vars) ? e : new Q(e.prev, new R(r, e.vars), !1);
    else return null;
  }
  i(vr, "registerVarScoped");
  function Z(r) {
    return r == "public" || r == "private" || r == "protected" || r == "abstract" || r == "readonly";
  }
  i(Z, "isModifier");
  function Q(r, e, t) {
    this.prev = r, this.vars = e, this.block = t;
  }
  i(Q, "Context");
  function R(r, e) {
    this.name = r, this.next = e;
  }
  i(R, "Var");
  var Lr = new R("this", new R("arguments", null));
  function I() {
    f.state.context = new Q(f.state.context, f.state.localVars, !1), f.state.localVars = Lr;
  }
  i(I, "pushcontext");
  function C() {
    f.state.context = new Q(f.state.context, f.state.localVars, !0), f.state.localVars = null;
  }
  i(C, "pushblockcontext"), I.lex = C.lex = !0;
  function V() {
    f.state.localVars = f.state.context.vars, f.state.context = f.state.context.prev;
  }
  i(V, "popcontext"), V.lex = !0;
  function l(r, e) {
    var t = /* @__PURE__ */ i(function() {
      var u = f.state, a = u.indented;
      if (u.lexical.type == "stat") a = u.lexical.indented;
      else for (var d = u.lexical; d && d.type == ")" && d.align; d = d.prev)
        a = d.indented;
      u.lexical = new gr(a, f.stream.column(), r, null, u.lexical, e);
    }, "result");
    return t.lex = !0, t;
  }
  i(l, "pushlex");
  function o() {
    var r = f.state;
    r.lexical.prev && (r.lexical.type == ")" && (r.indented = r.lexical.indented), r.lexical = r.lexical.prev);
  }
  i(o, "poplex"), o.lex = !0;
  function c(r) {
    function e(t) {
      return t == r ? n() : r == ";" || t == "}" || t == ")" || t == "]" ? s() : n(e);
    }
    return i(e, "exp"), e;
  }
  i(c, "expect");
  function h(r, e) {
    return r == "var" ? n(l("vardef", e), br, c(";"), o) : r == "keyword a" ? n(l("form"), cr, h, o) : r == "keyword b" ? n(l("form"), h, o) : r == "keyword d" ? f.stream.match(/^\s*$/, !1) ? n() : n(l("stat"), B, c(";"), o) : r == "debugger" ? n(c(";")) : r == "{" ? n(l("}"), C, nr, o, V) : r == ";" ? n() : r == "if" ? (f.state.lexical.info == "else" && f.state.cc[f.state.cc.length - 1] == o && f.state.cc.pop()(), n(l("form"), cr, h, o, _r)) : r == "function" ? n(S) : r == "for" ? n(l("form"), C, jr, h, V, o) : r == "class" || b && e == "interface" ? (f.marked = "keyword", n(l("form", r == "class" ? r : e), Er, o)) : r == "variable" ? b && e == "declare" ? (f.marked = "keyword", n(h)) : b && (e == "module" || e == "enum" || e == "type") && f.stream.match(/^\s*\w/, !1) ? (f.marked = "keyword", e == "enum" ? n(Or) : e == "type" ? n(Sr, c("operator"), m, c(";")) : n(l("form"), A, c("{"), l("}"), nr, o, o)) : b && e == "namespace" ? (f.marked = "keyword", n(l("form"), p, h, o)) : b && e == "abstract" ? (f.marked = "keyword", n(h)) : n(l("stat"), Ur) : r == "switch" ? n(
      l("form"),
      cr,
      c("{"),
      l("}", "switch"),
      C,
      nr,
      o,
      o,
      V
    ) : r == "case" ? n(p, c(":")) : r == "default" ? n(c(":")) : r == "catch" ? n(l("form"), I, Pr, h, o, V) : r == "export" ? n(l("stat"), ue, o) : r == "import" ? n(l("stat"), ae, o) : r == "async" ? n(h) : e == "@" ? n(p, h) : s(l("stat"), p, c(";"), o);
  }
  i(h, "statement");
  function Pr(r) {
    if (r == "(") return n(q, c(")"));
  }
  i(Pr, "maybeCatchBinding");
  function p(r, e) {
    return yr(r, e, !1);
  }
  i(p, "expression");
  function v(r, e) {
    return yr(r, e, !0);
  }
  i(v, "expressionNoComma");
  function cr(r) {
    return r != "(" ? s() : n(l(")"), B, c(")"), o);
  }
  i(cr, "parenExpr");
  function yr(r, e, t) {
    if (f.state.fatArrowAt == f.stream.start) {
      var u = t ? Vr : Tr;
      if (r == "(") return n(I, l(")"), x(q, ")"), o, c("=>"), u, V);
      if (r == "variable") return s(I, A, c("=>"), u, V);
    }
    var a = t ? F : $;
    return Jr.hasOwnProperty(r) ? n(a) : r == "function" ? n(S, a) : r == "class" || b && e == "interface" ? (f.marked = "keyword", n(l("form"), fe, o)) : r == "keyword c" || r == "async" ? n(t ? v : p) : r == "(" ? n(l(")"), B, c(")"), o, a) : r == "operator" || r == "spread" ? n(t ? v : p) : r == "[" ? n(l("]"), se, o, a) : r == "{" ? W(er, "}", null, a) : r == "quasi" ? s(rr, a) : r == "new" ? n(Rr(t)) : n();
  }
  i(yr, "expressionInner");
  function B(r) {
    return r.match(/[;\}\)\],]/) ? s() : s(p);
  }
  i(B, "maybeexpression");
  function $(r, e) {
    return r == "," ? n(B) : F(r, e, !1);
  }
  i($, "maybeoperatorComma");
  function F(r, e, t) {
    var u = t == !1 ? $ : F, a = t == !1 ? p : v;
    if (r == "=>") return n(I, t ? Vr : Tr, V);
    if (r == "operator")
      return /\+\+|--/.test(e) || b && e == "!" ? n(u) : b && e == "<" && f.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? n(l(">"), x(m, ">"), o, u) : e == "?" ? n(p, c(":"), a) : n(a);
    if (r == "quasi")
      return s(rr, u);
    if (r != ";") {
      if (r == "(") return W(v, ")", "call", u);
      if (r == ".") return n(Gr, u);
      if (r == "[") return n(l("]"), B, c("]"), o, u);
      if (b && e == "as")
        return f.marked = "keyword", n(m, u);
      if (r == "regexp")
        return f.state.lastType = f.marked = "operator", f.stream.backUp(f.stream.pos - f.stream.start - 1), n(a);
    }
  }
  i(F, "maybeoperatorNoComma");
  function rr(r, e) {
    return r != "quasi" ? s() : e.slice(e.length - 2) != "${" ? n(rr) : n(B, Qr);
  }
  i(rr, "quasi");
  function Qr(r) {
    if (r == "}")
      return f.marked = "string.special", f.state.tokenize = P, n(rr);
  }
  i(Qr, "continueQuasi");
  function Tr(r) {
    return sr(f.stream, f.state), s(r == "{" ? h : p);
  }
  i(Tr, "arrowBody");
  function Vr(r) {
    return sr(f.stream, f.state), s(r == "{" ? h : v);
  }
  i(Vr, "arrowBodyNoComma");
  function Rr(r) {
    return function(e) {
      return e == "." ? n(r ? Kr : Wr) : e == "variable" && b ? n(re, r ? F : $) : s(r ? v : p);
    };
  }
  i(Rr, "maybeTarget");
  function Wr(r, e) {
    if (e == "target")
      return f.marked = "keyword", n($);
  }
  i(Wr, "target");
  function Kr(r, e) {
    if (e == "target")
      return f.marked = "keyword", n(F);
  }
  i(Kr, "targetNoComma");
  function Ur(r) {
    return r == ":" ? n(o, h) : s($, c(";"), o);
  }
  i(Ur, "maybelabel");
  function Gr(r) {
    if (r == "variable")
      return f.marked = "property", n();
  }
  i(Gr, "property");
  function er(r, e) {
    if (r == "async")
      return f.marked = "property", n(er);
    if (r == "variable" || f.style == "keyword") {
      if (f.marked = "property", e == "get" || e == "set") return n(Hr);
      var t;
      return b && f.state.fatArrowAt == f.stream.start && (t = f.stream.match(/^\s*:\s*/, !1)) && (f.state.fatArrowAt = f.stream.pos + t[0].length), n(O);
    } else {
      if (r == "number" || r == "string")
        return f.marked = or ? "property" : f.style + " property", n(O);
      if (r == "jsonld-keyword")
        return n(O);
      if (b && Z(e))
        return f.marked = "keyword", n(er);
      if (r == "[")
        return n(p, J, c("]"), O);
      if (r == "spread")
        return n(v, O);
      if (e == "*")
        return f.marked = "keyword", n(er);
      if (r == ":")
        return s(O);
    }
  }
  i(er, "objprop");
  function Hr(r) {
    return r != "variable" ? s(O) : (f.marked = "property", n(S));
  }
  i(Hr, "getterSetter");
  function O(r) {
    if (r == ":") return n(v);
    if (r == "(") return s(S);
  }
  i(O, "afterprop");
  function x(r, e, t) {
    function u(a, d) {
      if (t ? t.indexOf(a) > -1 : a == ",") {
        var k = f.state.lexical;
        return k.info == "call" && (k.pos = (k.pos || 0) + 1), n(function(y, T) {
          return y == e || T == e ? s() : s(r);
        }, u);
      }
      return a == e || d == e ? n() : t && t.indexOf(";") > -1 ? s(r) : n(c(e));
    }
    return i(u, "proceed"), function(a, d) {
      return a == e || d == e ? n() : s(r, u);
    };
  }
  i(x, "commasep");
  function W(r, e, t) {
    for (var u = 3; u < arguments.length; u++)
      f.cc.push(arguments[u]);
    return n(l(e, t), x(r, e), o);
  }
  i(W, "contCommasep");
  function nr(r) {
    return r == "}" ? n() : s(h, nr);
  }
  i(nr, "block");
  function J(r, e) {
    if (b) {
      if (r == ":") return n(m);
      if (e == "?") return n(J);
    }
  }
  i(J, "maybetype");
  function Xr(r, e) {
    if (b && (r == ":" || e == "in")) return n(m);
  }
  i(Xr, "maybetypeOrIn");
  function Ar(r) {
    if (b && r == ":")
      return f.stream.match(/^\s*\w+\s+is\b/, !1) ? n(p, Yr, m) : n(m);
  }
  i(Ar, "mayberettype");
  function Yr(r, e) {
    if (e == "is")
      return f.marked = "keyword", n();
  }
  i(Yr, "isKW");
  function m(r, e) {
    if (e == "keyof" || e == "typeof" || e == "infer" || e == "readonly")
      return f.marked = "keyword", n(e == "typeof" ? v : m);
    if (r == "variable" || e == "void")
      return f.marked = "type", n(z);
    if (e == "|" || e == "&") return n(m);
    if (r == "string" || r == "number" || r == "atom") return n(z);
    if (r == "[") return n(l("]"), x(m, "]", ","), o, z);
    if (r == "{") return n(l("}"), dr, o, z);
    if (r == "(") return n(x(kr, ")"), Zr, z);
    if (r == "<") return n(x(m, ">"), m);
    if (r == "quasi") return s(mr, z);
  }
  i(m, "typeexpr");
  function Zr(r) {
    if (r == "=>") return n(m);
  }
  i(Zr, "maybeReturnType");
  function dr(r) {
    return r.match(/[\}\)\]]/) ? n() : r == "," || r == ";" ? n(dr) : s(K, dr);
  }
  i(dr, "typeprops");
  function K(r, e) {
    if (r == "variable" || f.style == "keyword")
      return f.marked = "property", n(K);
    if (e == "?" || r == "number" || r == "string")
      return n(K);
    if (r == ":")
      return n(m);
    if (r == "[")
      return n(c("variable"), Xr, c("]"), K);
    if (r == "(")
      return s(D, K);
    if (!r.match(/[;\}\)\],]/))
      return n();
  }
  i(K, "typeprop");
  function mr(r, e) {
    return r != "quasi" ? s() : e.slice(e.length - 2) != "${" ? n(mr) : n(m, Cr);
  }
  i(mr, "quasiType");
  function Cr(r) {
    if (r == "}")
      return f.marked = "string.special", f.state.tokenize = P, n(mr);
  }
  i(Cr, "continueQuasiType");
  function kr(r, e) {
    return r == "variable" && f.stream.match(/^\s*[?:]/, !1) || e == "?" ? n(kr) : r == ":" ? n(m) : r == "spread" ? n(kr) : s(m);
  }
  i(kr, "typearg");
  function z(r, e) {
    if (e == "<") return n(l(">"), x(m, ">"), o, z);
    if (e == "|" || r == "." || e == "&") return n(m);
    if (r == "[") return n(m, c("]"), z);
    if (e == "extends" || e == "implements")
      return f.marked = "keyword", n(m);
    if (e == "?") return n(m, c(":"), m);
  }
  i(z, "afterType");
  function re(r, e) {
    if (e == "<") return n(l(">"), x(m, ">"), o, z);
  }
  i(re, "maybeTypeArgs");
  function tr() {
    return s(m, ee);
  }
  i(tr, "typeparam");
  function ee(r, e) {
    if (e == "=") return n(m);
  }
  i(ee, "maybeTypeDefault");
  function br(r, e) {
    return e == "enum" ? (f.marked = "keyword", n(Or)) : s(A, J, j, te);
  }
  i(br, "vardef");
  function A(r, e) {
    if (b && Z(e))
      return f.marked = "keyword", n(A);
    if (r == "variable")
      return N(e), n();
    if (r == "spread") return n(A);
    if (r == "[") return W(ne, "]");
    if (r == "{") return W(zr, "}");
  }
  i(A, "pattern");
  function zr(r, e) {
    return r == "variable" && !f.stream.match(/^\s*:/, !1) ? (N(e), n(j)) : (r == "variable" && (f.marked = "property"), r == "spread" ? n(A) : r == "}" ? s() : r == "[" ? n(p, c("]"), c(":"), zr) : n(c(":"), A, j));
  }
  i(zr, "proppattern");
  function ne() {
    return s(A, j);
  }
  i(ne, "eltpattern");
  function j(r, e) {
    if (e == "=") return n(v);
  }
  i(j, "maybeAssign");
  function te(r) {
    if (r == ",") return n(br);
  }
  i(te, "vardefCont");
  function _r(r, e) {
    if (r == "keyword b" && e == "else") return n(l("form", "else"), h, o);
  }
  i(_r, "maybeelse");
  function jr(r, e) {
    if (e == "await") return n(jr);
    if (r == "(") return n(l(")"), ie, o);
  }
  i(jr, "forspec");
  function ie(r) {
    return r == "var" ? n(br, M) : r == "variable" ? n(M) : s(M);
  }
  i(ie, "forspec1");
  function M(r, e) {
    return r == ")" ? n() : r == ";" ? n(M) : e == "in" || e == "of" ? (f.marked = "keyword", n(p, M)) : s(p, M);
  }
  i(M, "forspec2");
  function S(r, e) {
    if (e == "*")
      return f.marked = "keyword", n(S);
    if (r == "variable")
      return N(e), n(S);
    if (r == "(") return n(I, l(")"), x(q, ")"), o, Ar, h, V);
    if (b && e == "<") return n(l(">"), x(tr, ">"), o, S);
  }
  i(S, "functiondef");
  function D(r, e) {
    if (e == "*")
      return f.marked = "keyword", n(D);
    if (r == "variable")
      return N(e), n(D);
    if (r == "(") return n(I, l(")"), x(q, ")"), o, Ar, V);
    if (b && e == "<") return n(l(">"), x(tr, ">"), o, D);
  }
  i(D, "functiondecl");
  function Sr(r, e) {
    if (r == "keyword" || r == "variable")
      return f.marked = "type", n(Sr);
    if (e == "<")
      return n(l(">"), x(tr, ">"), o);
  }
  i(Sr, "typename");
  function q(r, e) {
    return e == "@" && n(p, q), r == "spread" ? n(q) : b && Z(e) ? (f.marked = "keyword", n(q)) : b && r == "this" ? n(J, j) : s(A, J, j);
  }
  i(q, "funarg");
  function fe(r, e) {
    return r == "variable" ? Er(r, e) : ir(r, e);
  }
  i(fe, "classExpression");
  function Er(r, e) {
    if (r == "variable")
      return N(e), n(ir);
  }
  i(Er, "className");
  function ir(r, e) {
    if (e == "<") return n(l(">"), x(tr, ">"), o, ir);
    if (e == "extends" || e == "implements" || b && r == ",")
      return e == "implements" && (f.marked = "keyword"), n(b ? m : p, ir);
    if (r == "{") return n(l("}"), _, o);
  }
  i(ir, "classNameAfter");
  function _(r, e) {
    if (r == "async" || r == "variable" && (e == "static" || e == "get" || e == "set" || b && Z(e)) && f.stream.match(/^\s+#?[\w$\xa1-\uffff]/, !1))
      return f.marked = "keyword", n(_);
    if (r == "variable" || f.style == "keyword")
      return f.marked = "property", n(fr, _);
    if (r == "number" || r == "string") return n(fr, _);
    if (r == "[")
      return n(p, J, c("]"), fr, _);
    if (e == "*")
      return f.marked = "keyword", n(_);
    if (b && r == "(") return s(D, _);
    if (r == ";" || r == ",") return n(_);
    if (r == "}") return n();
    if (e == "@") return n(p, _);
  }
  i(_, "classBody");
  function fr(r, e) {
    if (e == "!" || e == "?") return n(fr);
    if (r == ":") return n(m, j);
    if (e == "=") return n(v);
    var t = f.state.lexical.prev, u = t && t.info == "interface";
    return s(u ? D : S);
  }
  i(fr, "classfield");
  function ue(r, e) {
    return e == "*" ? (f.marked = "keyword", n(pr, c(";"))) : e == "default" ? (f.marked = "keyword", n(p, c(";"))) : r == "{" ? n(x(Ir, "}"), pr, c(";")) : s(h);
  }
  i(ue, "afterExport");
  function Ir(r, e) {
    if (e == "as")
      return f.marked = "keyword", n(c("variable"));
    if (r == "variable") return s(v, Ir);
  }
  i(Ir, "exportField");
  function ae(r) {
    return r == "string" ? n() : r == "(" ? s(p) : r == "." ? s($) : s(ur, $r, pr);
  }
  i(ae, "afterImport");
  function ur(r, e) {
    return r == "{" ? W(ur, "}") : (r == "variable" && N(e), e == "*" && (f.marked = "keyword"), n(oe));
  }
  i(ur, "importSpec");
  function $r(r) {
    if (r == ",") return n(ur, $r);
  }
  i($r, "maybeMoreImports");
  function oe(r, e) {
    if (e == "as")
      return f.marked = "keyword", n(ur);
  }
  i(oe, "maybeAs");
  function pr(r, e) {
    if (e == "from")
      return f.marked = "keyword", n(p);
  }
  i(pr, "maybeFrom");
  function se(r) {
    return r == "]" ? n() : s(x(v, "]"));
  }
  i(se, "arrayLiteral");
  function Or() {
    return s(l("form"), A, c("{"), l("}"), x(le, "}"), o, o);
  }
  i(Or, "enumdef");
  function le() {
    return s(A, j);
  }
  i(le, "enummember");
  function ce(r, e) {
    return r.lastType == "operator" || r.lastType == "," || xr.test(e.charAt(0)) || /[,.]/.test(e.charAt(0));
  }
  i(ce, "isContinuedStatement");
  function de(r, e, t) {
    return e.tokenize == E && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType) || e.lastType == "quasi" && /\{\s*$/.test(r.string.slice(0, r.pos - t));
  }
  return i(de, "expressionAllowed"), {
    name: g.name,
    startState: /* @__PURE__ */ i(function(r) {
      var e = {
        tokenize: E,
        lastType: "sof",
        cc: [],
        lexical: new gr(-r, 0, "block", !1),
        localVars: g.localVars,
        context: g.localVars && new Q(null, null, !1),
        indented: 0
      };
      return g.globalVars && typeof g.globalVars == "object" && (e.globalVars = g.globalVars), e;
    }, "startState"),
    token: /* @__PURE__ */ i(function(r, e) {
      if (r.sol() && (e.lexical.hasOwnProperty("align") || (e.lexical.align = !1), e.indented = r.indentation(), sr(r, e)), e.tokenize != Y && r.eatSpace()) return null;
      var t = e.tokenize(r, e);
      return L == "comment" ? t : (e.lastType = L == "operator" && (X == "++" || X == "--") ? "incdec" : L, Dr(e, t, L, X, r));
    }, "token"),
    indent: /* @__PURE__ */ i(function(r, e, t) {
      if (r.tokenize == Y || r.tokenize == P) return null;
      if (r.tokenize != E) return 0;
      var u = e && e.charAt(0), a = r.lexical, d;
      if (!/^\s*else\b/.test(e)) for (var k = r.cc.length - 1; k >= 0; --k) {
        var y = r.cc[k];
        if (y == o) a = a.prev;
        else if (y != _r && y != V) break;
      }
      for (; (a.type == "stat" || a.type == "form") && (u == "}" || (d = r.cc[r.cc.length - 1]) && (d == $ || d == F) && !/^[,\.=+\-*:?[\(]/.test(e)); )
        a = a.prev;
      G && a.type == ")" && a.prev.type == "stat" && (a = a.prev);
      var T = a.type, U = u == T;
      return T == "vardef" ? a.indented + (r.lastType == "operator" || r.lastType == "," ? a.info.length + 1 : 0) : T == "form" && u == "{" ? a.indented : T == "form" ? a.indented + t.unit : T == "stat" ? a.indented + (ce(r, e) ? G || t.unit : 0) : a.info == "switch" && !U && g.doubleIndentSwitch != !1 ? a.indented + (/^(?:case|default)\b/.test(e) ? t.unit : 2 * t.unit) : a.align ? a.column + (U ? 0 : 1) : a.indented + (U ? 0 : t.unit);
    }, "indent"),
    languageData: {
      indentOnInput: /^\s*(?:case .*?:|default:|\{|\})$/,
      commentTokens: wr ? void 0 : { line: "//", block: { open: "/*", close: "*/" } },
      closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
      wordChars: "$"
    }
  };
}
i(ar, "mkJavaScript");
const be = ar({ name: "javascript" });
ar({ name: "json", json: !0 });
const pe = ar({ name: "json", jsonld: !0 });
ar({ name: "typescript", typescript: !0 });
export {
  be as javascript,
  pe as jsonld
};
