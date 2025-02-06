﻿var a = Object.defineProperty;
var n = (r, e) => a(r, "name", { value: e, configurable: !0 });
var c = /^-+$/, i = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /, t = /^[\w+.-]+@[\w.-]+/;
const m = {
  name: "rpmchanges",
  token: /* @__PURE__ */ n(function(r) {
    return r.sol() && (r.match(c) || r.match(i)) ? "tag" : r.match(t) ? "string" : (r.next(), null);
  }, "token")
};
var l = /^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/, p = /^[a-zA-Z0-9()]+:/, f = /^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/, u = /^%(ifnarch|ifarch|if)/, h = /^%(else|endif)/, d = /^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;
const w = {
  name: "rpmspec",
  startState: /* @__PURE__ */ n(function() {
    return {
      controlFlow: !1,
      macroParameters: !1,
      section: !1
    };
  }, "startState"),
  token: /* @__PURE__ */ n(function(r, e) {
    var o = r.peek();
    if (o == "#")
      return r.skipToEnd(), "comment";
    if (r.sol()) {
      if (r.match(p))
        return "header";
      if (r.match(f))
        return "atom";
    }
    if (r.match(/^\$\w+/) || r.match(/^\$\{\w+\}/))
      return "def";
    if (r.match(h))
      return "keyword";
    if (r.match(u))
      return e.controlFlow = !0, "keyword";
    if (e.controlFlow) {
      if (r.match(d))
        return "operator";
      if (r.match(/^(\d+)/))
        return "number";
      r.eol() && (e.controlFlow = !1);
    }
    if (r.match(l))
      return r.eol() && (e.controlFlow = !1), "number";
    if (r.match(/^%[\w]+/))
      return r.match("(") && (e.macroParameters = !0), "keyword";
    if (e.macroParameters) {
      if (r.match(/^\d+/))
        return "number";
      if (r.match(")"))
        return e.macroParameters = !1, "keyword";
    }
    return r.match(/^%\{\??[\w \-\:\!]+\}/) ? (r.eol() && (e.controlFlow = !1), "def") : (r.next(), null);
  }, "token")
};
export {
  m as rpmChanges,
  w as rpmSpec
};
