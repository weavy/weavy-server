﻿var d = Object.defineProperty;
var i = (e, n) => d(e, "name", { value: n, configurable: !0 });
function u(e, n) {
  n = n || {};
  for (var r = n.prefix !== void 0 ? n.prefix : "^", o = n.suffix !== void 0 ? n.suffix : "\\b", t = 0; t < e.length; t++)
    e[t] instanceof RegExp ? e[t] = e[t].source : e[t] = e[t].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  return new RegExp(r + "(" + e.join("|") + ")" + o, "i");
}
i(u, "buildRegexp");
var v = "(?=[^A-Za-z\\d\\-_]|$)", s = /[\w\-:]/, b = u([
  /begin|break|catch|continue|data|default|do|dynamicparam/,
  /else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,
  /param|process|return|switch|throw|trap|try|until|where|while/
], { suffix: v }), C = /[\[\]{},;`\\\.]|@[({]/, k = u([
  "f",
  /b?not/,
  /[ic]?split/,
  "join",
  /is(not)?/,
  "as",
  /[ic]?(eq|ne|[gl][te])/,
  /[ic]?(not)?(like|match|contains)/,
  /[ic]?replace/,
  /b?(and|or|xor)/
], { prefix: "-" }), h = /[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/, x = u([k, h], { suffix: "" }), E = /^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i, w = /^[A-Za-z\_][A-Za-z\-\_\d]*\b/, y = /[A-Z]:|%|\?/i, M = u([
  /Add-(Computer|Content|History|Member|PSSnapin|Type)/,
  /Checkpoint-Computer/,
  /Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,
  /Compare-Object/,
  /Complete-Transaction/,
  /Connect-PSSession/,
  /ConvertFrom-(Csv|Json|SecureString|StringData)/,
  /Convert-Path/,
  /ConvertTo-(Csv|Html|Json|SecureString|Xml)/,
  /Copy-Item(Property)?/,
  /Debug-Process/,
  /Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
  /Disconnect-PSSession/,
  /Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,
  /(Enter|Exit)-PSSession/,
  /Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,
  /ForEach-Object/,
  /Format-(Custom|List|Table|Wide)/,
  new RegExp("Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)"),
  /Group-Object/,
  /Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,
  /ImportSystemModules/,
  /Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,
  /Join-Path/,
  /Limit-EventLog/,
  /Measure-(Command|Object)/,
  /Move-Item(Property)?/,
  new RegExp("New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)"),
  /Out-(Default|File|GridView|Host|Null|Printer|String)/,
  /Pause/,
  /(Pop|Push)-Location/,
  /Read-Host/,
  /Receive-(Job|PSSession)/,
  /Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,
  /Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,
  /Rename-(Computer|Item(Property)?)/,
  /Reset-ComputerMachinePassword/,
  /Resolve-Path/,
  /Restart-(Computer|Service)/,
  /Restore-Computer/,
  /Resume-(Job|Service)/,
  /Save-Help/,
  /Select-(Object|String|Xml)/,
  /Send-MailMessage/,
  new RegExp("Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)"),
  /Show-(Command|ControlPanelItem|EventLog)/,
  /Sort-Object/,
  /Split-Path/,
  /Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,
  /Stop-(Computer|Job|Process|Service|Transcript)/,
  /Suspend-(Job|Service)/,
  /TabExpansion2/,
  /Tee-Object/,
  /Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,
  /Trace-Command/,
  /Unblock-File/,
  /Undo-Transaction/,
  /Unregister-(Event|PSSessionConfiguration)/,
  /Update-(FormatData|Help|List|TypeData)/,
  /Use-Transaction/,
  /Wait-(Event|Job|Process)/,
  /Where-Object/,
  /Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,
  /cd|help|mkdir|more|oss|prompt/,
  /ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,
  /echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,
  /group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,
  /measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,
  /rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,
  /sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/
], { prefix: "", suffix: "" }), R = u([
  /[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,
  /FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,
  /MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,
  /PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,
  /PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,
  /WarningPreference|WhatIfPreference/,
  /Event|EventArgs|EventSubscriber|Sender/,
  /Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,
  /true|false|null/
], { prefix: "\\$", suffix: "" }), I = u([y, M, R], { suffix: v }), S = {
  keyword: b,
  number: E,
  operator: x,
  builtin: I,
  punctuation: C,
  variable: w
};
function a(e, n) {
  var r = n.returnStack[n.returnStack.length - 1];
  if (r && r.shouldReturnFrom(n))
    return n.tokenize = r.tokenize, n.returnStack.pop(), n.tokenize(e, n);
  if (e.eatSpace())
    return null;
  if (e.eat("("))
    return n.bracketNesting += 1, "punctuation";
  if (e.eat(")"))
    return n.bracketNesting -= 1, "punctuation";
  for (var o in S)
    if (e.match(S[o]))
      return o;
  var t = e.next();
  if (t === "'")
    return z(e, n);
  if (t === "$")
    return l(e, n);
  if (t === '"')
    return g(e, n);
  if (t === "<" && e.eat("#"))
    return n.tokenize = m, m(e, n);
  if (t === "#")
    return e.skipToEnd(), "comment";
  if (t === "@") {
    var p = e.eat(/["']/);
    if (p && e.eol())
      return n.tokenize = c, n.startQuote = p[0], c(e, n);
    if (e.eol())
      return "error";
    if (e.peek().match(/[({]/))
      return "punctuation";
    if (e.peek().match(s))
      return l(e, n);
  }
  return "error";
}
i(a, "tokenBase");
function z(e, n) {
  for (var r; (r = e.peek()) != null; )
    if (e.next(), r === "'" && !e.eat("'"))
      return n.tokenize = a, "string";
  return "error";
}
i(z, "tokenSingleQuoteString");
function g(e, n) {
  for (var r; (r = e.peek()) != null; ) {
    if (r === "$")
      return n.tokenize = T, "string";
    if (e.next(), r === "`") {
      e.next();
      continue;
    }
    if (r === '"' && !e.eat('"'))
      return n.tokenize = a, "string";
  }
  return "error";
}
i(g, "tokenDoubleQuoteString");
function T(e, n) {
  return P(e, n, g);
}
i(T, "tokenStringInterpolation");
function D(e, n) {
  return n.tokenize = c, n.startQuote = '"', c(e, n);
}
i(D, "tokenMultiStringReturn");
function j(e, n) {
  return P(e, n, D);
}
i(j, "tokenHereStringInterpolation");
function P(e, n, r) {
  if (e.match("$(")) {
    var o = n.bracketNesting;
    return n.returnStack.push({
      /*jshint loopfunc:true */
      shouldReturnFrom: /* @__PURE__ */ i(function(t) {
        return t.bracketNesting === o;
      }, "shouldReturnFrom"),
      tokenize: r
    }), n.tokenize = a, n.bracketNesting += 1, "punctuation";
  } else
    return e.next(), n.returnStack.push({
      shouldReturnFrom: /* @__PURE__ */ i(function() {
        return !0;
      }, "shouldReturnFrom"),
      tokenize: r
    }), n.tokenize = l, n.tokenize(e, n);
}
i(P, "tokenInterpolation");
function m(e, n) {
  for (var r = !1, o; (o = e.next()) != null; ) {
    if (r && o == ">") {
      n.tokenize = a;
      break;
    }
    r = o === "#";
  }
  return "comment";
}
i(m, "tokenComment");
function l(e, n) {
  var r = e.peek();
  return e.eat("{") ? (n.tokenize = f, f(e, n)) : r != null && r.match(s) ? (e.eatWhile(s), n.tokenize = a, "variable") : (n.tokenize = a, "error");
}
i(l, "tokenVariable");
function f(e, n) {
  for (var r; (r = e.next()) != null; )
    if (r === "}") {
      n.tokenize = a;
      break;
    }
  return "variable";
}
i(f, "tokenVariableWithBraces");
function c(e, n) {
  var r = n.startQuote;
  if (e.sol() && e.match(new RegExp(r + "@")))
    n.tokenize = a;
  else if (r === '"')
    for (; !e.eol(); ) {
      var o = e.peek();
      if (o === "$")
        return n.tokenize = j, "string";
      e.next(), o === "`" && e.next();
    }
  else
    e.skipToEnd();
  return "string";
}
i(c, "tokenMultiString");
const A = {
  name: "powershell",
  startState: /* @__PURE__ */ i(function() {
    return {
      returnStack: [],
      bracketNesting: 0,
      tokenize: a
    };
  }, "startState"),
  token: /* @__PURE__ */ i(function(e, n) {
    return n.tokenize(e, n);
  }, "token"),
  languageData: {
    commentTokens: { line: "#", block: { open: "<#", close: "#>" } }
  }
};
export {
  A as powerShell
};
