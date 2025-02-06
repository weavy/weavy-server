﻿var d = Object.defineProperty;
var a = (e, r) => d(e, "name", { value: r, configurable: !0 });
var l = [
  "From",
  "Sender",
  "Reply-To",
  "To",
  "Cc",
  "Bcc",
  "Message-ID",
  "In-Reply-To",
  "References",
  "Resent-From",
  "Resent-Sender",
  "Resent-To",
  "Resent-Cc",
  "Resent-Bcc",
  "Resent-Message-ID",
  "Return-Path",
  "Received"
], u = [
  "Date",
  "Subject",
  "Comments",
  "Keywords",
  "Resent-Date"
], f = /^[ \t]/, c = /^From /, t = new RegExp("^(" + l.join("|") + "): "), m = new RegExp("^(" + u.join("|") + "): "), p = /^[^:]+:/, H = /^[^ ]+@[^ ]+/, v = /^.*?(?=[^ ]+?@[^ ]+)/, h = /^<.*?>/, R = /^.*?(?=<.*>)/;
function k(e) {
  return e === "Subject" ? "header" : "string";
}
a(k, "styleForHeader");
function E(e, r) {
  if (e.sol()) {
    if (r.inSeparator = !1, r.inHeader && e.match(f))
      return null;
    if (r.inHeader = !1, r.header = null, e.match(c))
      return r.inHeaders = !0, r.inSeparator = !0, "atom";
    var n, o = !1;
    return (n = e.match(m)) || (o = !0) && (n = e.match(t)) ? (r.inHeaders = !0, r.inHeader = !0, r.emailPermitted = o, r.header = n[1], "atom") : r.inHeaders && (n = e.match(p)) ? (r.inHeader = !0, r.emailPermitted = !0, r.header = n[1], "atom") : (r.inHeaders = !1, e.skipToEnd(), null);
  }
  if (r.inSeparator)
    return e.match(H) ? "link" : (e.match(v) || e.skipToEnd(), "atom");
  if (r.inHeader) {
    var i = k(r.header);
    if (r.emailPermitted) {
      if (e.match(h)) return i + " link";
      if (e.match(R)) return i;
    }
    return e.skipToEnd(), i;
  }
  return e.skipToEnd(), null;
}
a(E, "readToken");
const T = {
  name: "mbox",
  startState: /* @__PURE__ */ a(function() {
    return {
      // Is in a mbox separator
      inSeparator: !1,
      // Is in a mail header
      inHeader: !1,
      // If bracketed email is permitted. Only applicable when inHeader
      emailPermitted: !1,
      // Name of current header
      header: null,
      // Is in a region of mail headers
      inHeaders: !1
    };
  }, "startState"),
  token: E,
  blankLine: /* @__PURE__ */ a(function(e) {
    e.inHeaders = e.inSeparator = e.inHeader = !1;
  }, "blankLine"),
  languageData: {
    autocomplete: l.concat(u)
  }
};
export {
  T as mbox
};
