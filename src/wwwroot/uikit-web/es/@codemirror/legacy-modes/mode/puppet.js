﻿var l = Object.defineProperty;
var t = (e, n) => l(e, "name", { value: n, configurable: !0 });
var u = {}, p = /({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;
function c(e, n) {
  for (var i = n.split(" "), o = 0; o < i.length; o++)
    u[i[o]] = e;
}
t(c, "define");
c("keyword", "class define site node include import inherits");
c("keyword", "case if else in and elsif default or");
c("atom", "false true running present absent file directory undef");
c("builtin", "action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");
function f(e, n) {
  for (var i, o, a = !1; !e.eol() && (i = e.next()) != n.pending; ) {
    if (i === "$" && o != "\\" && n.pending == '"') {
      a = !0;
      break;
    }
    o = i;
  }
  return a && e.backUp(1), i == n.pending ? n.continueString = !1 : n.continueString = !0, "string";
}
t(f, "tokenString");
function d(e, n) {
  var i = e.match(/[\w]+/, !1), o = e.match(/(\s+)?\w+\s+=>.*/, !1), a = e.match(/(\s+)?[\w:_]+(\s+)?{/, !1), s = e.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/, !1), r = e.next();
  if (r === "$")
    return e.match(p) ? n.continueString ? "variableName.special" : "variable" : "error";
  if (n.continueString)
    return e.backUp(1), f(e, n);
  if (n.inDefinition) {
    if (e.match(/(\s+)?[\w:_]+(\s+)?/))
      return "def";
    e.match(/\s+{/), n.inDefinition = !1;
  }
  return n.inInclude ? (e.match(/(\s+)?\S+(\s+)?/), n.inInclude = !1, "def") : e.match(/(\s+)?\w+\(/) ? (e.backUp(1), "def") : o ? (e.match(/(\s+)?\w+/), "tag") : i && u.hasOwnProperty(i) ? (e.backUp(1), e.match(/[\w]+/), e.match(/\s+\S+\s+{/, !1) && (n.inDefinition = !0), i == "include" && (n.inInclude = !0), u[i]) : /(^|\s+)[A-Z][\w:_]+/.test(i) ? (e.backUp(1), e.match(/(^|\s+)[A-Z][\w:_]+/), "def") : a ? (e.match(/(\s+)?[\w:_]+/), "def") : s ? (e.match(/(\s+)?[@]{1,2}/), "atom") : r == "#" ? (e.skipToEnd(), "comment") : r == "'" || r == '"' ? (n.pending = r, f(e, n)) : r == "{" || r == "}" ? "bracket" : r == "/" ? (e.match(/^[^\/]*\//), "string.special") : r.match(/[0-9]/) ? (e.eatWhile(/[0-9]+/), "number") : r == "=" ? (e.peek() == ">" && e.next(), "operator") : (e.eatWhile(/[\w-]/), null);
}
t(d, "tokenize");
const h = {
  name: "puppet",
  startState: /* @__PURE__ */ t(function() {
    var e = {};
    return e.inDefinition = !1, e.inInclude = !1, e.continueString = !1, e.pending = !1, e;
  }, "startState"),
  token: /* @__PURE__ */ t(function(e, n) {
    return e.eatSpace() ? null : d(e, n);
  }, "token")
};
export {
  h as puppet
};
