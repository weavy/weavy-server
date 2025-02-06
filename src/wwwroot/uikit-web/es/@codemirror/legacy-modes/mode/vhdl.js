﻿var y = Object.defineProperty;
var o = (e, n) => y(e, "name", { value: n, configurable: !0 });
function p(e) {
  for (var n = {}, t = e.split(","), r = 0; r < t.length; ++r) {
    var i = t[r].toUpperCase(), u = t[r].charAt(0).toUpperCase() + t[r].slice(1);
    n[t[r]] = !0, n[i] = !0, n[u] = !0;
  }
  return n;
}
o(p, "words");
function s(e) {
  return e.eatWhile(/[\w\$_]/), "meta";
}
o(s, "metaHook");
var v = p("null"), d = { "`": s, $: s }, h = !1, b = p("abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor"), m = p("architecture,entity,begin,case,port,else,elsif,end,for,function,if"), g = /[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/, l;
function f(e, n) {
  var t = e.next();
  if (d[t]) {
    var r = d[t](e, n);
    if (r !== !1) return r;
  }
  if (t == '"')
    return n.tokenize = x(t), n.tokenize(e, n);
  if (t == "'")
    return n.tokenize = w(t), n.tokenize(e, n);
  if (/[\[\]{}\(\),;\:\.]/.test(t))
    return l = t, null;
  if (/[\d']/.test(t))
    return e.eatWhile(/[\w\.']/), "number";
  if (t == "-" && e.eat("-"))
    return e.skipToEnd(), "comment";
  if (g.test(t))
    return e.eatWhile(g), "operator";
  e.eatWhile(/[\w\$_]/);
  var i = e.current();
  return b.propertyIsEnumerable(i.toLowerCase()) ? (m.propertyIsEnumerable(i) && (l = "newstatement"), "keyword") : v.propertyIsEnumerable(i) ? "atom" : "variable";
}
o(f, "tokenBase");
function w(e) {
  return function(n, t) {
    for (var r = !1, i, u = !1; (i = n.next()) != null; ) {
      if (i == e && !r) {
        u = !0;
        break;
      }
      r = !r && i == "--";
    }
    return (u || !(r || h)) && (t.tokenize = f), "string";
  };
}
o(w, "tokenString");
function x(e) {
  return function(n, t) {
    for (var r = !1, i, u = !1; (i = n.next()) != null; ) {
      if (i == e && !r) {
        u = !0;
        break;
      }
      r = !r && i == "--";
    }
    return (u || !(r || h)) && (t.tokenize = f), "string.special";
  };
}
o(x, "tokenString2");
function k(e, n, t, r, i) {
  this.indented = e, this.column = n, this.type = t, this.align = r, this.prev = i;
}
o(k, "Context");
function c(e, n, t) {
  return e.context = new k(e.indented, n, t, null, e.context);
}
o(c, "pushContext");
function a(e) {
  var n = e.context.type;
  return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
o(a, "popContext");
const C = {
  name: "vhdl",
  startState: /* @__PURE__ */ o(function(e) {
    return {
      tokenize: null,
      context: new k(-e, 0, "top", !1),
      indented: 0,
      startOfLine: !0
    };
  }, "startState"),
  token: /* @__PURE__ */ o(function(e, n) {
    var t = n.context;
    if (e.sol() && (t.align == null && (t.align = !1), n.indented = e.indentation(), n.startOfLine = !0), e.eatSpace()) return null;
    l = null;
    var r = (n.tokenize || f)(e, n);
    if (r == "comment" || r == "meta") return r;
    if (t.align == null && (t.align = !0), (l == ";" || l == ":") && t.type == "statement") a(n);
    else if (l == "{") c(n, e.column(), "}");
    else if (l == "[") c(n, e.column(), "]");
    else if (l == "(") c(n, e.column(), ")");
    else if (l == "}") {
      for (; t.type == "statement"; ) t = a(n);
      for (t.type == "}" && (t = a(n)); t.type == "statement"; ) t = a(n);
    } else l == t.type ? a(n) : (t.type == "}" || t.type == "top" || t.type == "statement" && l == "newstatement") && c(n, e.column(), "statement");
    return n.startOfLine = !1, r;
  }, "token"),
  indent: /* @__PURE__ */ o(function(e, n, t) {
    if (e.tokenize != f && e.tokenize != null) return 0;
    var r = n && n.charAt(0), i = e.context, u = r == i.type;
    return i.type == "statement" ? i.indented + (r == "{" ? 0 : t.unit) : i.align ? i.column + (u ? 0 : 1) : i.indented + (u ? 0 : t.unit);
  }, "indent"),
  languageData: {
    indentOnInput: /^\s*[{}]$/,
    commentTokens: { line: "--" }
  }
};
export {
  C as vhdl
};
