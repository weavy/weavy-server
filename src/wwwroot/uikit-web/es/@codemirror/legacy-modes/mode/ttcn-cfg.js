﻿var U = Object.defineProperty;
var C = (e, n) => U(e, "name", { value: n, configurable: !0 });
function l(e) {
  for (var n = {}, T = e.split(" "), E = 0; E < T.length; ++E)
    n[T[E]] = !0;
  return n;
}
C(l, "words");
const r = {
  name: "ttcn-cfg",
  keywords: l("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),
  fileNCtrlMaskOptions: l("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),
  externalCommands: l("BeginControlPart EndControlPart BeginTestCase EndTestCase"),
  multiLineStrings: !0
};
var R = r.keywords, u = r.fileNCtrlMaskOptions, S = r.externalCommands, P = r.multiLineStrings, L = r.indentStatements !== !1, _ = /[\|]/, t;
function D(e, n) {
  var T = e.next();
  if (T == '"' || T == "'")
    return n.tokenize = M(T), n.tokenize(e, n);
  if (/[:=]/.test(T))
    return t = T, "punctuation";
  if (T == "#")
    return e.skipToEnd(), "comment";
  if (/\d/.test(T))
    return e.eatWhile(/[\w\.]/), "number";
  if (_.test(T))
    return e.eatWhile(_), "operator";
  if (T == "[")
    return e.eatWhile(/[\w_\]]/), "number";
  e.eatWhile(/[\w\$_]/);
  var E = e.current();
  return R.propertyIsEnumerable(E) ? "keyword" : u.propertyIsEnumerable(E) ? "atom" : S.propertyIsEnumerable(E) ? "deleted" : "variable";
}
C(D, "tokenBase");
function M(e) {
  return function(n, T) {
    for (var E = !1, o, O = !1; (o = n.next()) != null; ) {
      if (o == e && !E) {
        var i = n.peek();
        i && (i = i.toLowerCase(), (i == "b" || i == "h" || i == "o") && n.next()), O = !0;
        break;
      }
      E = !E && o == "\\";
    }
    return (O || !(E || P)) && (T.tokenize = null), "string";
  };
}
C(M, "tokenString");
function A(e, n, T, E, o) {
  this.indented = e, this.column = n, this.type = T, this.align = E, this.prev = o;
}
C(A, "Context");
function I(e, n, T) {
  var E = e.indented;
  return e.context && e.context.type == "statement" && (E = e.context.indented), e.context = new A(E, n, T, null, e.context);
}
C(I, "pushContext");
function N(e) {
  var n = e.context.type;
  return (n == ")" || n == "]" || n == "}") && (e.indented = e.context.indented), e.context = e.context.prev;
}
C(N, "popContext");
const f = {
  name: "ttcn",
  startState: /* @__PURE__ */ C(function() {
    return {
      tokenize: null,
      context: new A(0, 0, "top", !1),
      indented: 0,
      startOfLine: !0
    };
  }, "startState"),
  token: /* @__PURE__ */ C(function(e, n) {
    var T = n.context;
    if (e.sol() && (T.align == null && (T.align = !1), n.indented = e.indentation(), n.startOfLine = !0), e.eatSpace()) return null;
    t = null;
    var E = (n.tokenize || D)(e, n);
    if (E == "comment") return E;
    if (T.align == null && (T.align = !0), (t == ";" || t == ":" || t == ",") && T.type == "statement")
      N(n);
    else if (t == "{") I(n, e.column(), "}");
    else if (t == "[") I(n, e.column(), "]");
    else if (t == "(") I(n, e.column(), ")");
    else if (t == "}") {
      for (; T.type == "statement"; ) T = N(n);
      for (T.type == "}" && (T = N(n)); T.type == "statement"; ) T = N(n);
    } else t == T.type ? N(n) : L && ((T.type == "}" || T.type == "top") && t != ";" || T.type == "statement" && t == "newstatement") && I(n, e.column(), "statement");
    return n.startOfLine = !1, E;
  }, "token"),
  languageData: {
    indentOnInput: /^\s*[{}]$/,
    commentTokens: { line: "#" }
  }
};
export {
  f as ttcnCfg
};
