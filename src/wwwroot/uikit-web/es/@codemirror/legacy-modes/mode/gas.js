﻿var g = Object.defineProperty;
var b = (r, u) => g(r, "name", { value: u, configurable: !0 });
function p(r) {
  var u = [], c = "", s = {
    ".abort": "builtin",
    ".align": "builtin",
    ".altmacro": "builtin",
    ".ascii": "builtin",
    ".asciz": "builtin",
    ".balign": "builtin",
    ".balignw": "builtin",
    ".balignl": "builtin",
    ".bundle_align_mode": "builtin",
    ".bundle_lock": "builtin",
    ".bundle_unlock": "builtin",
    ".byte": "builtin",
    ".cfi_startproc": "builtin",
    ".comm": "builtin",
    ".data": "builtin",
    ".def": "builtin",
    ".desc": "builtin",
    ".dim": "builtin",
    ".double": "builtin",
    ".eject": "builtin",
    ".else": "builtin",
    ".elseif": "builtin",
    ".end": "builtin",
    ".endef": "builtin",
    ".endfunc": "builtin",
    ".endif": "builtin",
    ".equ": "builtin",
    ".equiv": "builtin",
    ".eqv": "builtin",
    ".err": "builtin",
    ".error": "builtin",
    ".exitm": "builtin",
    ".extern": "builtin",
    ".fail": "builtin",
    ".file": "builtin",
    ".fill": "builtin",
    ".float": "builtin",
    ".func": "builtin",
    ".global": "builtin",
    ".gnu_attribute": "builtin",
    ".hidden": "builtin",
    ".hword": "builtin",
    ".ident": "builtin",
    ".if": "builtin",
    ".incbin": "builtin",
    ".include": "builtin",
    ".int": "builtin",
    ".internal": "builtin",
    ".irp": "builtin",
    ".irpc": "builtin",
    ".lcomm": "builtin",
    ".lflags": "builtin",
    ".line": "builtin",
    ".linkonce": "builtin",
    ".list": "builtin",
    ".ln": "builtin",
    ".loc": "builtin",
    ".loc_mark_labels": "builtin",
    ".local": "builtin",
    ".long": "builtin",
    ".macro": "builtin",
    ".mri": "builtin",
    ".noaltmacro": "builtin",
    ".nolist": "builtin",
    ".octa": "builtin",
    ".offset": "builtin",
    ".org": "builtin",
    ".p2align": "builtin",
    ".popsection": "builtin",
    ".previous": "builtin",
    ".print": "builtin",
    ".protected": "builtin",
    ".psize": "builtin",
    ".purgem": "builtin",
    ".pushsection": "builtin",
    ".quad": "builtin",
    ".reloc": "builtin",
    ".rept": "builtin",
    ".sbttl": "builtin",
    ".scl": "builtin",
    ".section": "builtin",
    ".set": "builtin",
    ".short": "builtin",
    ".single": "builtin",
    ".size": "builtin",
    ".skip": "builtin",
    ".sleb128": "builtin",
    ".space": "builtin",
    ".stab": "builtin",
    ".string": "builtin",
    ".struct": "builtin",
    ".subsection": "builtin",
    ".symver": "builtin",
    ".tag": "builtin",
    ".text": "builtin",
    ".title": "builtin",
    ".type": "builtin",
    ".uleb128": "builtin",
    ".val": "builtin",
    ".version": "builtin",
    ".vtable_entry": "builtin",
    ".vtable_inherit": "builtin",
    ".warning": "builtin",
    ".weak": "builtin",
    ".weakref": "builtin",
    ".word": "builtin"
  }, i = {};
  function f() {
    c = "#", i.al = "variable", i.ah = "variable", i.ax = "variable", i.eax = "variableName.special", i.rax = "variableName.special", i.bl = "variable", i.bh = "variable", i.bx = "variable", i.ebx = "variableName.special", i.rbx = "variableName.special", i.cl = "variable", i.ch = "variable", i.cx = "variable", i.ecx = "variableName.special", i.rcx = "variableName.special", i.dl = "variable", i.dh = "variable", i.dx = "variable", i.edx = "variableName.special", i.rdx = "variableName.special", i.si = "variable", i.esi = "variableName.special", i.rsi = "variableName.special", i.di = "variable", i.edi = "variableName.special", i.rdi = "variableName.special", i.sp = "variable", i.esp = "variableName.special", i.rsp = "variableName.special", i.bp = "variable", i.ebp = "variableName.special", i.rbp = "variableName.special", i.ip = "variable", i.eip = "variableName.special", i.rip = "variableName.special", i.cs = "keyword", i.ds = "keyword", i.ss = "keyword", i.es = "keyword", i.fs = "keyword", i.gs = "keyword";
  }
  b(f, "x86");
  function d() {
    c = "@", s.syntax = "builtin", i.r0 = "variable", i.r1 = "variable", i.r2 = "variable", i.r3 = "variable", i.r4 = "variable", i.r5 = "variable", i.r6 = "variable", i.r7 = "variable", i.r8 = "variable", i.r9 = "variable", i.r10 = "variable", i.r11 = "variable", i.r12 = "variable", i.sp = "variableName.special", i.lr = "variableName.special", i.pc = "variableName.special", i.r13 = i.sp, i.r14 = i.lr, i.r15 = i.pc, u.push(function(l, n) {
      if (l === "#")
        return n.eatWhile(/\w/), "number";
    });
  }
  b(d, "armv6"), r === "x86" ? f() : (r === "arm" || r === "armv6") && d();
  function m(l, n) {
    for (var e = !1, a; (a = l.next()) != null; ) {
      if (a === n && !e)
        return !1;
      e = !e && a === "\\";
    }
    return e;
  }
  b(m, "nextUntilUnescaped");
  function v(l, n) {
    for (var e = !1, a; (a = l.next()) != null; ) {
      if (a === "/" && e) {
        n.tokenize = null;
        break;
      }
      e = a === "*";
    }
    return "comment";
  }
  return b(v, "clikeComment"), {
    name: "gas",
    startState: /* @__PURE__ */ b(function() {
      return {
        tokenize: null
      };
    }, "startState"),
    token: /* @__PURE__ */ b(function(l, n) {
      if (n.tokenize)
        return n.tokenize(l, n);
      if (l.eatSpace())
        return null;
      var e, a, t = l.next();
      if (t === "/" && l.eat("*"))
        return n.tokenize = v, v(l, n);
      if (t === c)
        return l.skipToEnd(), "comment";
      if (t === '"')
        return m(l, '"'), "string";
      if (t === ".")
        return l.eatWhile(/\w/), a = l.current().toLowerCase(), e = s[a], e || null;
      if (t === "=")
        return l.eatWhile(/\w/), "tag";
      if (t === "{" || t === "}")
        return "bracket";
      if (/\d/.test(t))
        return t === "0" && l.eat("x") ? (l.eatWhile(/[0-9a-fA-F]/), "number") : (l.eatWhile(/\d/), "number");
      if (/\w/.test(t))
        return l.eatWhile(/\w/), l.eat(":") ? "tag" : (a = l.current().toLowerCase(), e = i[a], e || null);
      for (var o = 0; o < u.length; o++)
        if (e = u[o](t, l, n), e)
          return e;
    }, "token"),
    languageData: {
      commentTokens: {
        line: c,
        block: { open: "/*", close: "*/" }
      }
    }
  };
}
b(p, "mkGas");
const x = p("x86"), w = p("arm");
export {
  x as gas,
  w as gasArm
};
