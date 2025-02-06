﻿var h = Object.defineProperty;
var i = (t, d) => h(t, "name", { value: d, configurable: !0 });
function l(t) {
  var d = {
    as: "keyword",
    do: "keyword",
    else: "keyword",
    end: "keyword",
    exception: "keyword",
    fun: "keyword",
    functor: "keyword",
    if: "keyword",
    in: "keyword",
    include: "keyword",
    let: "keyword",
    of: "keyword",
    open: "keyword",
    rec: "keyword",
    struct: "keyword",
    then: "keyword",
    type: "keyword",
    val: "keyword",
    while: "keyword",
    with: "keyword"
  }, u = t.extraWords || {};
  for (var y in u)
    u.hasOwnProperty(y) && (d[y] = t.extraWords[y]);
  var a = [];
  for (var c in d)
    a.push(c);
  function k(e, r) {
    var o = e.next();
    if (o === '"')
      return r.tokenize = f, r.tokenize(e, r);
    if (o === "{" && e.eat("|"))
      return r.longString = !0, r.tokenize = s, r.tokenize(e, r);
    if (o === "(" && e.match(/^\*(?!\))/))
      return r.commentLevel++, r.tokenize = b, r.tokenize(e, r);
    if (o === "~" || o === "?")
      return e.eatWhile(/\w/), "variableName.special";
    if (o === "`")
      return e.eatWhile(/\w/), "quote";
    if (o === "/" && t.slashComments && e.eat("/"))
      return e.skipToEnd(), "comment";
    if (/\d/.test(o))
      return o === "0" && e.eat(/[bB]/) && e.eatWhile(/[01]/), o === "0" && e.eat(/[xX]/) && e.eatWhile(/[0-9a-fA-F]/), o === "0" && e.eat(/[oO]/) ? e.eatWhile(/[0-7]/) : (e.eatWhile(/[\d_]/), e.eat(".") && e.eatWhile(/[\d]/), e.eat(/[eE]/) && e.eatWhile(/[\d\-+]/)), "number";
    if (/[+\-*&%=<>!?|@\.~:]/.test(o))
      return "operator";
    if (/[\w\xa1-\uffff]/.test(o)) {
      e.eatWhile(/[\w\xa1-\uffff]/);
      var n = e.current();
      return d.hasOwnProperty(n) ? d[n] : "variable";
    }
    return null;
  }
  i(k, "tokenBase");
  function f(e, r) {
    for (var o, n = !1, w = !1; (o = e.next()) != null; ) {
      if (o === '"' && !w) {
        n = !0;
        break;
      }
      w = !w && o === "\\";
    }
    return n && !w && (r.tokenize = k), "string";
  }
  i(f, "tokenString");
  function b(e, r) {
    for (var o, n; r.commentLevel > 0 && (n = e.next()) != null; )
      o === "(" && n === "*" && r.commentLevel++, o === "*" && n === ")" && r.commentLevel--, o = n;
    return r.commentLevel <= 0 && (r.tokenize = k), "comment";
  }
  i(b, "tokenComment");
  function s(e, r) {
    for (var o, n; r.longString && (n = e.next()) != null; )
      o === "|" && n === "}" && (r.longString = !1), o = n;
    return r.longString || (r.tokenize = k), "string";
  }
  return i(s, "tokenLongString"), {
    startState: /* @__PURE__ */ i(function() {
      return { tokenize: k, commentLevel: 0, longString: !1 };
    }, "startState"),
    token: /* @__PURE__ */ i(function(e, r) {
      return e.eatSpace() ? null : r.tokenize(e, r);
    }, "token"),
    languageData: {
      autocomplete: a,
      commentTokens: {
        line: t.slashComments ? "//" : void 0,
        block: { open: "(*", close: "*)" }
      }
    }
  };
}
i(l, "mlLike");
const m = l({
  name: "ocaml",
  extraWords: {
    and: "keyword",
    assert: "keyword",
    begin: "keyword",
    class: "keyword",
    constraint: "keyword",
    done: "keyword",
    downto: "keyword",
    external: "keyword",
    function: "keyword",
    initializer: "keyword",
    lazy: "keyword",
    match: "keyword",
    method: "keyword",
    module: "keyword",
    mutable: "keyword",
    new: "keyword",
    nonrec: "keyword",
    object: "keyword",
    private: "keyword",
    sig: "keyword",
    to: "keyword",
    try: "keyword",
    value: "keyword",
    virtual: "keyword",
    when: "keyword",
    // builtins
    raise: "builtin",
    failwith: "builtin",
    true: "builtin",
    false: "builtin",
    // Pervasives builtins
    asr: "builtin",
    land: "builtin",
    lor: "builtin",
    lsl: "builtin",
    lsr: "builtin",
    lxor: "builtin",
    mod: "builtin",
    or: "builtin",
    // More Pervasives
    raise_notrace: "builtin",
    trace: "builtin",
    exit: "builtin",
    print_string: "builtin",
    print_endline: "builtin",
    int: "type",
    float: "type",
    bool: "type",
    char: "type",
    string: "type",
    unit: "type",
    // Modules
    List: "builtin"
  }
}), v = l({
  name: "fsharp",
  extraWords: {
    abstract: "keyword",
    assert: "keyword",
    base: "keyword",
    begin: "keyword",
    class: "keyword",
    default: "keyword",
    delegate: "keyword",
    "do!": "keyword",
    done: "keyword",
    downcast: "keyword",
    downto: "keyword",
    elif: "keyword",
    extern: "keyword",
    finally: "keyword",
    for: "keyword",
    function: "keyword",
    global: "keyword",
    inherit: "keyword",
    inline: "keyword",
    interface: "keyword",
    internal: "keyword",
    lazy: "keyword",
    "let!": "keyword",
    match: "keyword",
    member: "keyword",
    module: "keyword",
    mutable: "keyword",
    namespace: "keyword",
    new: "keyword",
    null: "keyword",
    override: "keyword",
    private: "keyword",
    public: "keyword",
    "return!": "keyword",
    return: "keyword",
    select: "keyword",
    static: "keyword",
    to: "keyword",
    try: "keyword",
    upcast: "keyword",
    "use!": "keyword",
    use: "keyword",
    void: "keyword",
    when: "keyword",
    "yield!": "keyword",
    yield: "keyword",
    // Reserved words
    atomic: "keyword",
    break: "keyword",
    checked: "keyword",
    component: "keyword",
    const: "keyword",
    constraint: "keyword",
    constructor: "keyword",
    continue: "keyword",
    eager: "keyword",
    event: "keyword",
    external: "keyword",
    fixed: "keyword",
    method: "keyword",
    mixin: "keyword",
    object: "keyword",
    parallel: "keyword",
    process: "keyword",
    protected: "keyword",
    pure: "keyword",
    sealed: "keyword",
    tailcall: "keyword",
    trait: "keyword",
    virtual: "keyword",
    volatile: "keyword",
    // builtins
    List: "builtin",
    Seq: "builtin",
    Map: "builtin",
    Set: "builtin",
    Option: "builtin",
    int: "builtin",
    string: "builtin",
    not: "builtin",
    true: "builtin",
    false: "builtin",
    raise: "builtin",
    failwith: "builtin"
  },
  slashComments: !0
}), x = l({
  name: "sml",
  extraWords: {
    abstype: "keyword",
    and: "keyword",
    andalso: "keyword",
    case: "keyword",
    datatype: "keyword",
    fn: "keyword",
    handle: "keyword",
    infix: "keyword",
    infixr: "keyword",
    local: "keyword",
    nonfix: "keyword",
    op: "keyword",
    orelse: "keyword",
    raise: "keyword",
    withtype: "keyword",
    eqtype: "keyword",
    sharing: "keyword",
    sig: "keyword",
    signature: "keyword",
    structure: "keyword",
    where: "keyword",
    true: "keyword",
    false: "keyword",
    // types
    int: "builtin",
    real: "builtin",
    string: "builtin",
    char: "builtin",
    bool: "builtin"
  },
  slashComments: !0
});
export {
  v as fSharp,
  m as oCaml,
  x as sml
};
