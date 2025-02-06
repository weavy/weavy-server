﻿var i = Object.defineProperty;
var n = (e, r) => i(e, "name", { value: r, configurable: !0 });
function f(e) {
  return new RegExp("^((" + e.join(")|(") + "))\\b", "i");
}
n(f, "wordRegexp");
var t = [
  "package",
  "message",
  "import",
  "syntax",
  "required",
  "optional",
  "repeated",
  "reserved",
  "default",
  "extensions",
  "packed",
  "bool",
  "bytes",
  "double",
  "enum",
  "float",
  "string",
  "int32",
  "int64",
  "uint32",
  "uint64",
  "sint32",
  "sint64",
  "fixed32",
  "fixed64",
  "sfixed32",
  "sfixed64",
  "option",
  "service",
  "rpc",
  "returns"
], u = f(t), o = new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");
function a(e) {
  return e.eatSpace() ? null : e.match("//") ? (e.skipToEnd(), "comment") : e.match(/^[0-9\.+-]/, !1) && (e.match(/^[+-]?0x[0-9a-fA-F]+/) || e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/) || e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/)) ? "number" : e.match(/^"([^"]|(""))*"/) || e.match(/^'([^']|(''))*'/) ? "string" : e.match(u) ? "keyword" : e.match(o) ? "variable" : (e.next(), null);
}
n(a, "tokenBase");
const c = {
  name: "protobuf",
  token: a,
  languageData: {
    autocomplete: t
  }
};
export {
  c as protobuf
};
