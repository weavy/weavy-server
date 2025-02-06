﻿var G = Object.defineProperty;
var a = (i, o) => G(i, "name", { value: o, configurable: !0 });
function O(i) {
  var o = i.statementIndentUnit, f = i.dontAlignCalls, u = i.noIndentKeywords || [], v = i.multiLineStrings, c = i.hooks || {};
  function h(e) {
    for (var n = {}, t = e.split(" "), r = 0; r < t.length; ++r) n[t[r]] = !0;
    return n;
  }
  a(h, "words");
  var k = h(
    "accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"
  ), b = /[\+\-\*\/!~&|^%=?:]/, m = /[\[\]{}()]/, _ = /\d[0-9_]*/, C = /\d*\s*'s?d\s*\d[0-9_]*/i, T = /\d*\s*'s?b\s*[xz01][xz01_]*/i, W = /\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i, M = /\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i, L = /(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i, U = /^((\w+)|[)}\]])/, K = /[)}\]]/, s, p, V = h(
    "case checker class clocking config function generate interface module package primitive program property specify sequence table task"
  ), d = {};
  for (var y in V)
    d[y] = "end" + y;
  d.begin = "end", d.casex = "endcase", d.casez = "endcase", d.do = "while", d.fork = "join;join_any;join_none", d.covergroup = "endgroup";
  for (var R in u) {
    var y = u[R];
    d[y] && (d[y] = void 0);
  }
  var D = h("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");
  function x(e, n) {
    var t = e.peek(), r;
    if (c[t] && (r = c[t](e, n)) != !1 || c.tokenBase && (r = c.tokenBase(e, n)) != !1)
      return r;
    if (/[,;:\.]/.test(t))
      return s = e.next(), null;
    if (m.test(t))
      return s = e.next(), "bracket";
    if (t == "`")
      return e.next(), e.eatWhile(/[\w\$_]/) ? "def" : null;
    if (t == "$")
      return e.next(), e.eatWhile(/[\w\$_]/) ? "meta" : null;
    if (t == "#")
      return e.next(), e.eatWhile(/[\d_.]/), "def";
    if (t == '"')
      return e.next(), n.tokenize = P(t), n.tokenize(e, n);
    if (t == "/") {
      if (e.next(), e.eat("*"))
        return n.tokenize = j, j(e, n);
      if (e.eat("/"))
        return e.skipToEnd(), "comment";
      e.backUp(1);
    }
    if (e.match(L) || e.match(C) || e.match(T) || e.match(W) || e.match(M) || e.match(_) || e.match(L))
      return "number";
    if (e.eatWhile(b))
      return "meta";
    if (e.eatWhile(/[\w\$_]/)) {
      var l = e.current();
      return k[l] ? (d[l] && (s = "newblock"), D[l] && (s = "newstatement"), p = l, "keyword") : "variable";
    }
    return e.next(), null;
  }
  a(x, "tokenBase");
  function P(e) {
    return function(n, t) {
      for (var r = !1, l, w = !1; (l = n.next()) != null; ) {
        if (l == e && !r) {
          w = !0;
          break;
        }
        r = !r && l == "\\";
      }
      return (w || !(r || v)) && (t.tokenize = x), "string";
    };
  }
  a(P, "tokenString");
  function j(e, n) {
    for (var t = !1, r; r = e.next(); ) {
      if (r == "/" && t) {
        n.tokenize = x;
        break;
      }
      t = r == "*";
    }
    return "comment";
  }
  a(j, "tokenComment");
  function N(e, n, t, r, l) {
    this.indented = e, this.column = n, this.type = t, this.align = r, this.prev = l;
  }
  a(N, "Context");
  function g(e, n, t) {
    var r = e.indented, l = new N(r, n, t, null, e.context);
    return e.context = l;
  }
  a(g, "pushContext");
  function z(e) {
    var n = e.context.type;
    return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
  }
  a(z, "popContext");
  function $(e, n) {
    if (e == n)
      return !0;
    var t = n.split(";");
    for (var r in t)
      if (e == t[r])
        return !0;
    return !1;
  }
  a($, "isClosing");
  function F() {
    var e = [];
    for (var n in d)
      if (d[n]) {
        var t = d[n].split(";");
        for (var r in t)
          e.push(t[r]);
      }
    var l = new RegExp("[{}()\\[\\]]|(" + e.join("|") + ")$");
    return l;
  }
  return a(F, "buildElectricInputRegEx"), {
    name: "verilog",
    startState: /* @__PURE__ */ a(function(e) {
      var n = {
        tokenize: null,
        context: new N(-e, 0, "top", !1),
        indented: 0,
        startOfLine: !0
      };
      return c.startState && c.startState(n), n;
    }, "startState"),
    token: /* @__PURE__ */ a(function(e, n) {
      var t = n.context;
      if (e.sol() && (t.align == null && (t.align = !1), n.indented = e.indentation(), n.startOfLine = !0), c.token) {
        var r = c.token(e, n);
        if (r !== void 0)
          return r;
      }
      if (e.eatSpace()) return null;
      s = null, p = null;
      var r = (n.tokenize || x)(e, n);
      if (r == "comment" || r == "meta" || r == "variable") return r;
      if (t.align == null && (t.align = !0), s == t.type)
        z(n);
      else if (s == ";" && t.type == "statement" || t.type && $(p, t.type))
        for (t = z(n); t && t.type == "statement"; ) t = z(n);
      else if (s == "{")
        g(n, e.column(), "}");
      else if (s == "[")
        g(n, e.column(), "]");
      else if (s == "(")
        g(n, e.column(), ")");
      else if (t && t.type == "endcase" && s == ":")
        g(n, e.column(), "statement");
      else if (s == "newstatement")
        g(n, e.column(), "statement");
      else if (s == "newblock" && !(p == "function" && t && (t.type == "statement" || t.type == "endgroup"))) {
        if (!(p == "task" && t && t.type == "statement")) {
          var l = d[p];
          g(n, e.column(), l);
        }
      }
      return n.startOfLine = !1, r;
    }, "token"),
    indent: /* @__PURE__ */ a(function(e, n, t) {
      if (e.tokenize != x && e.tokenize != null) return null;
      if (c.indent) {
        var r = c.indent(e);
        if (r >= 0) return r;
      }
      var l = e.context, w = n && n.charAt(0);
      l.type == "statement" && w == "}" && (l = l.prev);
      var I = !1, E = n.match(U);
      return E && (I = $(E[0], l.type)), l.type == "statement" ? l.indented + (w == "{" ? 0 : o || t.unit) : K.test(l.type) && l.align && !f ? l.column + (I ? 0 : 1) : l.type == ")" && !I ? l.indented + (o || t.unit) : l.indented + (I ? 0 : t.unit);
    }, "indent"),
    languageData: {
      indentOnInput: F(),
      commentTokens: { line: "//", block: { open: "/*", close: "*/" } }
    }
  };
}
a(O, "mkVerilog");
const Y = O({});
var S = {
  "|": "link",
  ">": "property",
  // Should condition this off for > TLV 1c.
  $: "variable",
  $$: "variable",
  "?$": "qualifier",
  "?*": "qualifier",
  "-": "contentSeparator",
  "/": "property",
  "/-": "property",
  "@": "variableName.special",
  "@-": "variableName.special",
  "@++": "variableName.special",
  "@+=": "variableName.special",
  "@+=-": "variableName.special",
  "@--": "variableName.special",
  "@-=": "variableName.special",
  "%+": "tag",
  "%-": "tag",
  "%": "tag",
  ">>": "tag",
  "<<": "tag",
  "<>": "tag",
  "#": "tag",
  // Need to choose a style for this.
  "^": "attribute",
  "^^": "attribute",
  "^!": "attribute",
  "*": "variable",
  "**": "variable",
  "\\": "keyword",
  '"': "comment"
}, q = {
  "/": "beh-hier",
  ">": "beh-hier",
  "-": "phys-hier",
  "|": "pipe",
  "?": "when",
  "@": "stage",
  "\\": "keyword"
}, B = 3, A = /^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/, J = /^[! ] */, Q = /^\/[\/\*]/;
const Z = O({
  hooks: {
    electricInput: !1,
    // Return undefined for verilog tokenizing, or style for TLV token (null not used).
    // Standard CM styles are used for most formatting, but some TL-Verilog-specific highlighting
    // can be enabled with the definition of cm-tlv-* styles, including highlighting for:
    //   - M4 tokens
    //   - TLV scope indentation
    //   - Statement delimitation (enabled by tlvTrackStatements)
    token: /* @__PURE__ */ a(function(i, o) {
      var f = void 0, u;
      if (i.sol() && !o.tlvInBlockComment) {
        i.peek() == "\\" && (f = "def", i.skipToEnd(), i.string.match(/\\SV/) ? o.tlvCodeActive = !1 : i.string.match(/\\TLV/) && (o.tlvCodeActive = !0)), o.tlvCodeActive && i.pos == 0 && o.indented == 0 && (u = i.match(J, !1)) && (o.indented = u[0].length);
        var v = o.indented, c = v / B;
        if (c <= o.tlvIndentationStyle.length) {
          var h = i.string.length == v, k = c * B;
          if (k < i.string.length) {
            var b = i.string.slice(k), m = b[0];
            q[m] && (u = b.match(A)) && S[u[1]] && (v += B, m == "\\" && k > 0 || (o.tlvIndentationStyle[c] = q[m], c++));
          }
          if (!h)
            for (; o.tlvIndentationStyle.length > c; )
              o.tlvIndentationStyle.pop();
        }
        o.tlvNextIndent = v;
      }
      if (o.tlvCodeActive) {
        var u;
        if (f === void 0) if (o.tlvInBlockComment)
          i.match(/^.*?\*\//) ? o.tlvInBlockComment = !1 : i.skipToEnd(), f = "comment";
        else if ((u = i.match(Q)) && !o.tlvInBlockComment)
          u[0] == "//" ? i.skipToEnd() : o.tlvInBlockComment = !0, f = "comment";
        else if (u = i.match(A)) {
          var _ = u[1], C = u[2];
          // is identifier prefix
          S.hasOwnProperty(_) && // has mnemonic or we're at the end of the line (maybe it hasn't been typed yet)
          (C.length > 0 || i.eol()) ? f = S[_] : i.backUp(i.current().length - 1);
        } else i.match(/^\t+/) ? f = "invalid" : i.match(/^[\[\]{}\(\);\:]+/) ? f = "meta" : (u = i.match(/^[mM]4([\+_])?[\w\d_]*/)) ? f = u[1] == "+" ? "keyword.special" : "keyword" : i.match(/^ +/) ? i.eol() && (f = "error") : i.match(/^[\w\d_]+/) ? f = "number" : i.next();
      } else
        i.match(/^[mM]4([\w\d_]*)/) && (f = "keyword");
      return f;
    }, "token"),
    indent: /* @__PURE__ */ a(function(i) {
      return i.tlvCodeActive == !0 ? i.tlvNextIndent : -1;
    }, "indent"),
    startState: /* @__PURE__ */ a(function(i) {
      i.tlvIndentationStyle = [], i.tlvCodeActive = !0, i.tlvNextIndent = -1, i.tlvInBlockComment = !1;
    }, "startState")
  }
});
export {
  Z as tlv,
  Y as verilog
};
